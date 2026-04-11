#!/usr/bin/env bash
# ============================================================================
# token-hygiene.sh — Automated design-token enforcement for AIvanceWorks
# ============================================================================
#
# PURPOSE
#   Scans shared components, signature components, and services/solutions
#   pages for forbidden raw-color patterns as defined in the Services &
#   Solutions Design Constitution (Section 3.3).
#
#   The constitution mandates that all color references use theme-token-backed
#   Tailwind classes (bg-brand-*, text-text-*, bg-surface-*, etc.) so that
#   flipping data-theme re-skins every page with zero component edits.
#
# WHAT IT CHECKS
#   1. Raw Tailwind color shades (e.g., bg-gray-50, text-blue-600,
#      from-indigo-700, border-slate-200, ring-red-500)
#   2. Hardcoded hex values in JSX (#fff, #000000, #3b82f6, etc.)
#   3. Inline rgb()/rgba()/hsl()/hsla() color functions
#   4. Inline style={{ color/backgroundColor }} with literal values
#   5. dark: prefix classes (the theme system uses data-theme, not dark mode)
#
# USAGE
#   bash scripts/token-hygiene.sh           # scan all enforced directories
#   bash scripts/token-hygiene.sh --fix     # (future) auto-suggest replacements
#   bash scripts/token-hygiene.sh path/file # scan a specific file
#
# CI INTEGRATION
#   The script exits 0 if clean, non-zero if violations are found.
#   Add to your CI pipeline:
#     - run: bash aivanceworks-website/scripts/token-hygiene.sh
#
# ALLOWLIST
#   To suppress false positives, add patterns to the ALLOWLIST_FILE
#   (scripts/token-hygiene.allowlist) — one grep -P regex per line.
#   Lines starting with # are comments. Common exceptions:
#     - SVG fill/stroke attributes using currentColor
#     - Comments explaining forbidden patterns
#     - Test files or documentation
#   You can also add inline suppression with: /* token-hygiene-ignore */
# ============================================================================

set -euo pipefail

# ── Configuration ──────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ALLOWLIST_FILE="$SCRIPT_DIR/token-hygiene.allowlist"

# Directories to scan (relative to PROJECT_ROOT), per constitution Section 3.3
SCAN_DIRS=(
  "src/components/shared"
  "src/components/signature"
  "src/app/services"
  "src/app/solutions"
)

# All standard Tailwind color names that are FORBIDDEN in enforced directories.
# Token-backed names (brand, accent, surface, text, border, glass) are allowed.
FORBIDDEN_COLORS="slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose"

# Tailwind utility prefixes that take color values
COLOR_UTILITIES="bg|text|border|ring|outline|shadow|from|via|to|fill|stroke|divide|decoration|placeholder|caret|accent"

# Exit code tracking
VIOLATIONS=0
VIOLATION_LINES=""

# Colors for terminal output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BOLD='\033[1m'
DIM='\033[2m'
RESET='\033[0m'

# ── Helper functions ───────────────────────────────────────────────────────

log_header() {
  echo -e "\n${BOLD}${CYAN}━━━ $1 ━━━${RESET}"
}

log_violation() {
  local file="$1"
  local line="$2"
  local rule="$3"
  local match="$4"
  # Make path relative to project root for readability
  local relfile="${file#"$PROJECT_ROOT"/}"
  echo -e "  ${RED}VIOLATION${RESET} ${relfile}:${line}  ${DIM}[${rule}]${RESET}"
  echo -e "    ${YELLOW}${match}${RESET}"
  VIOLATIONS=$((VIOLATIONS + 1))
}

log_ok() {
  echo -e "  ${GREEN}✓${RESET} $1"
}

# Build the list of files to scan
collect_files() {
  local files=()

  if [[ $# -gt 0 && "$1" != "--fix" ]]; then
    # Scan specific file(s) passed as arguments
    for f in "$@"; do
      if [[ "$f" != "--"* && -f "$f" ]]; then
        files+=("$f")
      elif [[ "$f" != "--"* && -f "$PROJECT_ROOT/$f" ]]; then
        files+=("$PROJECT_ROOT/$f")
      fi
    done
  else
    # Scan all enforced directories
    for dir in "${SCAN_DIRS[@]}"; do
      local fulldir="$PROJECT_ROOT/$dir"
      if [[ -d "$fulldir" ]]; then
        while IFS= read -r -d '' file; do
          files+=("$file")
        done < <(find "$fulldir" -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -print0 2>/dev/null)
      fi
    done
  fi

  printf '%s\n' "${files[@]}" | sort -u
}

# Check if a line should be skipped (allowlisted or inline suppressed)
is_allowlisted() {
  local line_content="$1"

  # Skip inline suppressions
  if echo "$line_content" | grep -q 'token-hygiene-ignore'; then
    return 0
  fi

  # Skip lines that are purely comments (// or /* ... */)
  local trimmed
  trimmed="$(echo "$line_content" | sed 's/^[[:space:]]*//')"
  if [[ "$trimmed" == "//"* || "$trimmed" == "/*"* || "$trimmed" == "*"* ]]; then
    return 0
  fi

  # Check external allowlist file
  if [[ -f "$ALLOWLIST_FILE" ]]; then
    while IFS= read -r pattern; do
      # Skip empty lines and comments
      [[ -z "$pattern" || "$pattern" == "#"* ]] && continue
      if echo "$line_content" | grep -Pq "$pattern" 2>/dev/null; then
        return 0
      fi
    done < "$ALLOWLIST_FILE"
  fi

  return 1
}

# ── Rule checks ────────────────────────────────────────────────────────────

# Rule 1: Raw Tailwind color shades
# Matches: bg-gray-50, text-blue-600, from-indigo-700, border-slate-200, etc.
# Allows: bg-brand-600, text-accent-300, bg-surface-dark, text-text-light
# Also allows: arbitrary values like text-[#...] are caught by Rule 2 instead
check_raw_tailwind_colors() {
  local file="$1"
  local rule="raw-tailwind-color"

  # Pattern: a Tailwind utility prefix, a dash, one of the forbidden color
  # names, a dash, and a numeric shade (50-950). Also catches standalone
  # text-white, bg-black, text-transparent (these have no shade).
  #
  # Word boundary: we use (?<![a-zA-Z]) lookbehind and \b lookahead so we
  # don't match inside longer class names.
  local pattern="(?<![a-zA-Z-])(?:${COLOR_UTILITIES})-(?:${FORBIDDEN_COLORS})-[0-9]{2,3}(?:/[0-9.[\]]+)?(?![a-zA-Z])"

  while IFS=: read -r lineno content; do
    if ! is_allowlisted "$content"; then
      log_violation "$file" "$lineno" "$rule" "$content"
    fi
  done < <(grep -Pn "$pattern" "$file" 2>/dev/null || true)
}

# Rule 1b: Standalone raw color classes (no shade number)
# Matches: text-white, bg-black, text-transparent
check_raw_standalone_colors() {
  local file="$1"
  local rule="raw-standalone-color"

  # text-white and bg-black are the most common violations.
  # bg-white is also forbidden — use bg-surface-white instead.
  # text-black — use text-text-heading instead.
  local pattern="(?<![a-zA-Z-])(?:text-white|bg-white|text-black|bg-black|border-white|border-black|ring-white|ring-black)(?![a-zA-Z0-9/-])"

  while IFS=: read -r lineno content; do
    if ! is_allowlisted "$content"; then
      log_violation "$file" "$lineno" "$rule" "$content"
    fi
  done < <(grep -Pn "$pattern" "$file" 2>/dev/null || true)
}

# Rule 2: Hardcoded hex values in JSX
# Matches: #fff, #000, #3b82f6, #ffffff, etc. (3, 4, 6, or 8 hex digits)
# Allows: hex in CSS custom property references like var(--brand-600)
# Allows: hex inside arbitrary Tailwind values that reference CSS variables
check_hex_values() {
  local file="$1"
  local rule="hardcoded-hex"

  # Match # followed by 3-8 hex digits, but NOT inside a CSS var() reference
  # or a comment. We also exclude SVG-specific color attrs handled by allowlist.
  local pattern='#[0-9a-fA-F]{3,8}(?![0-9a-fA-F])'

  while IFS=: read -r lineno content; do
    # Skip CSS custom property definitions (these belong in theme files, but
    # if they appear in globals.css imports, don't flag them)
    if echo "$content" | grep -Pq '^\s*--[a-zA-Z]'; then
      continue
    fi
    # Skip var(--...) references — these are token-compliant
    # We check if the hex appears inside a var() context or arbitrary Tailwind values
    # A rough heuristic: if the line has var(-- anywhere, it's likely using tokens
    if echo "$content" | grep -Pq 'var\(--'; then
      continue
    fi
    if ! is_allowlisted "$content"; then
      log_violation "$file" "$lineno" "$rule" "$content"
    fi
  done < <(grep -Pn "$pattern" "$file" 2>/dev/null || true)
}

# Rule 3: Inline rgb()/rgba()/hsl()/hsla() color functions
check_color_functions() {
  local file="$1"
  local rule="inline-color-function"

  local pattern='(?<![a-zA-Z])(?:rgb|rgba|hsl|hsla)\s*\([^)]*\)'

  while IFS=: read -r lineno content; do
    # Skip var() references
    if echo "$content" | grep -Pq 'var\(--'; then
      continue
    fi
    if ! is_allowlisted "$content"; then
      log_violation "$file" "$lineno" "$rule" "$content"
    fi
  done < <(grep -Pn "$pattern" "$file" 2>/dev/null || true)
}

# Rule 4: Inline style with literal color values
# Matches: style={{ color: '...', backgroundColor: '...' }}
check_inline_style_colors() {
  local file="$1"
  local rule="inline-style-color"

  # Look for style={{ ... color: ... }} patterns with literal values
  # This catches: style={{ color: '#fff' }}, style={{ backgroundColor: 'red' }}
  local pattern="style=\{\{[^}]*(color|backgroundColor|borderColor|background)\s*:\s*['\"][^'\"]*['\"]"

  while IFS=: read -r lineno content; do
    # Allow var(--...) in inline styles — those are token-compliant
    if echo "$content" | grep -Pq 'var\(--'; then
      continue
    fi
    if ! is_allowlisted "$content"; then
      log_violation "$file" "$lineno" "$rule" "$content"
    fi
  done < <(grep -Pn "$pattern" "$file" 2>/dev/null || true)
}

# Rule 5: dark: prefix classes
# The constitution explicitly forbids dark: utility classes because the theme
# system uses data-theme attribute switching, not dark mode class toggling.
check_dark_mode_classes() {
  local file="$1"
  local rule="dark-mode-prefix"

  local pattern='(?<![a-zA-Z])dark:[a-zA-Z]'

  while IFS=: read -r lineno content; do
    if ! is_allowlisted "$content"; then
      log_violation "$file" "$lineno" "$rule" "$content"
    fi
  done < <(grep -Pn "$pattern" "$file" 2>/dev/null || true)
}

# ── Main ───────────────────────────────────────────────────────────────────

main() {
  echo -e "${BOLD}╔══════════════════════════════════════════════════════════╗${RESET}"
  echo -e "${BOLD}║  Token Hygiene Check — AIvanceWorks Design Constitution ║${RESET}"
  echo -e "${BOLD}╚══════════════════════════════════════════════════════════╝${RESET}"
  echo -e "${DIM}Enforcing Section 3.3: No raw colors in shared/signature components${RESET}"

  # Collect files to scan
  local files
  files="$(collect_files "$@")"

  if [[ -z "$files" ]]; then
    echo -e "\n${YELLOW}No files found to scan.${RESET}"
    echo "Checked directories:"
    for dir in "${SCAN_DIRS[@]}"; do
      echo "  - $dir"
    done
    exit 0
  fi

  local file_count
  file_count="$(echo "$files" | wc -l | tr -d ' ')"
  echo -e "\nScanning ${BOLD}${file_count}${RESET} files...\n"

  # ── Run each rule ──

  log_header "Rule 1: Raw Tailwind color shades"
  local pre=$VIOLATIONS
  while IFS= read -r file; do
    check_raw_tailwind_colors "$file"
  done <<< "$files"
  [[ $VIOLATIONS -eq $pre ]] && log_ok "No raw Tailwind color shades found"

  log_header "Rule 1b: Standalone raw colors (text-white, bg-black, etc.)"
  pre=$VIOLATIONS
  while IFS= read -r file; do
    check_raw_standalone_colors "$file"
  done <<< "$files"
  [[ $VIOLATIONS -eq $pre ]] && log_ok "No standalone raw color classes found"

  log_header "Rule 2: Hardcoded hex values"
  pre=$VIOLATIONS
  while IFS= read -r file; do
    check_hex_values "$file"
  done <<< "$files"
  [[ $VIOLATIONS -eq $pre ]] && log_ok "No hardcoded hex values found"

  log_header "Rule 3: Inline rgb()/hsl() color functions"
  pre=$VIOLATIONS
  while IFS= read -r file; do
    check_color_functions "$file"
  done <<< "$files"
  [[ $VIOLATIONS -eq $pre ]] && log_ok "No inline color functions found"

  log_header "Rule 4: Inline style with literal color values"
  pre=$VIOLATIONS
  while IFS= read -r file; do
    check_inline_style_colors "$file"
  done <<< "$files"
  [[ $VIOLATIONS -eq $pre ]] && log_ok "No inline style color violations found"

  log_header "Rule 5: dark: prefix classes"
  pre=$VIOLATIONS
  while IFS= read -r file; do
    check_dark_mode_classes "$file"
  done <<< "$files"
  [[ $VIOLATIONS -eq $pre ]] && log_ok "No dark: prefix classes found"

  # ── Summary ──

  echo ""
  echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
  if [[ $VIOLATIONS -eq 0 ]]; then
    echo -e "${GREEN}${BOLD}  ALL CLEAR${RESET} — No token-hygiene violations found."
    echo -e "${DIM}  Theme guarantee preserved: data-theme swap will re-skin cleanly.${RESET}"
  else
    echo -e "${RED}${BOLD}  FAILED${RESET} — ${VIOLATIONS} violation(s) found."
    echo -e ""
    echo -e "  ${DIM}How to fix:${RESET}"
    echo -e "  ${DIM}  - Replace raw colors with token-backed classes (see constitution §3.2)${RESET}"
    echo -e "  ${DIM}  - bg-gray-50    → bg-surface-warm  or  bg-surface-light${RESET}"
    echo -e "  ${DIM}  - text-gray-900 → text-text-heading${RESET}"
    echo -e "  ${DIM}  - text-white    → text-text-light${RESET}"
    echo -e "  ${DIM}  - bg-blue-600   → bg-brand-600${RESET}"
    echo -e "  ${DIM}  - #3b82f6       → use a token variable${RESET}"
    echo -e "  ${DIM}  - dark:*        → use tone prop + token switching${RESET}"
    echo -e ""
    echo -e "  ${DIM}To suppress a false positive:${RESET}"
    echo -e "  ${DIM}  - Add /* token-hygiene-ignore */ on the same line${RESET}"
    echo -e "  ${DIM}  - Or add a regex to scripts/token-hygiene.allowlist${RESET}"
  fi
  echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"

  exit $VIOLATIONS
}

main "$@"
