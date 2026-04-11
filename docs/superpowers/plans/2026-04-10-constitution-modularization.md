# Constitution Modularization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the 2124-line monolithic constitution into a ~1000-1100 line core (what agents read), a ~400-500 line reference (agent can look up), and 5 standalone files (agent never reads during page creation) — with zero rule loss.

**Architecture:** Extract standalone sections first (Sections 14-17, §3.4), then reference material (§2 narrative, §3.6, §5.3 code, §7.3, rationale blocks), then tighten remaining prose in the core. Each extraction is verified by confirming the content exists in the target file before removing from source.

**Tech Stack:** Markdown files only. No code changes.

**Spec:** `docs/superpowers/specs/2026-04-10-constitution-modularization-design.md`

---

### Task 1: Create `constitution/` directory and extract Section 14 (Prompt Templates)

**Files:**
- Create: `docs/design-system/constitution/prompt-templates.md`
- Modify: `docs/design-system/services-solutions-constitution.md` (lines 1688-1907)

- [ ] **Step 1: Read Section 14 from the constitution**

Read lines 1688-1907 of `docs/design-system/services-solutions-constitution.md`. This is the full Section 14 (Prompt templates) including all 5 subsections (§14.1-14.5).

- [ ] **Step 2: Create the standalone file**

Create `docs/design-system/constitution/prompt-templates.md` with the following structure:

```markdown
# Constitution — Prompt Templates

> Extracted from Services & Solutions Design Constitution §14.
> These are copy-paste-ready prompts for launching new Claude sessions to create service/solution pages.
> For the enforceable rules these prompts reference, see `../services-solutions-constitution.md`.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 14

---

[Paste the full content of Section 14 here, preserving all subsections §14.1-14.5 exactly as-is]
```

- [ ] **Step 3: Replace Section 14 in the constitution with a pointer**

In `services-solutions-constitution.md`, replace the entire Section 14 content (lines 1688-1907) with:

```markdown
## 14. Prompt templates

Prompt templates for launching new Claude sessions are maintained in [`constitution/prompt-templates.md`](constitution/prompt-templates.md). They wrap the 13-step process (Section 13) for copy-paste use. An agent already dispatched to create a page does not need to read them.
```

- [ ] **Step 4: Verify the extraction**

Grep for a unique string from Section 14 (e.g., "Create new service page") in both files:
- It MUST exist in `constitution/prompt-templates.md`
- It MUST NOT exist in `services-solutions-constitution.md` (except in the pointer)

---

### Task 2: Extract Section 15 (Pilot Reference Compositions)

**Files:**
- Create: `docs/design-system/constitution/pilot-compositions.md`
- Modify: `docs/design-system/services-solutions-constitution.md` (lines 1908-2093)

- [ ] **Step 1: Read Section 15 from the constitution**

Read lines 1908-2093 of `services-solutions-constitution.md`. This is Section 15 including §15.1-15.6 (all 5 pilot page breakdowns + refactor strategy).

- [ ] **Step 2: Create the standalone file**

Create `docs/design-system/constitution/pilot-compositions.md`:

```markdown
# Constitution — Pilot Page Compositions

> Extracted from Services & Solutions Design Constitution §15.
> Reference breakdowns of the 5 pilot pages. Agents creating new pages should read ONE actual
> data file as an exemplar (e.g., `src/data/services/product-discovery.ts`), not these summaries.
> For the archetype recipes and composition rules, see `../services-solutions-constitution.md` §6.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 15

---

[Paste the full content of Section 15 here, preserving all subsections §15.1-15.6 exactly as-is]
```

- [ ] **Step 3: Replace Section 15 in the constitution with a pointer**

Replace the entire Section 15 content with:

```markdown
## 15. Reference — pilot pages and their compositions

Pilot page breakdowns are maintained in [`constitution/pilot-compositions.md`](constitution/pilot-compositions.md). When creating a new page, read one actual data file as an exemplar (e.g., `src/data/services/product-discovery.ts`) rather than these summaries. The archetype recipes in Section 6 are the authoritative starting compositions.
```

- [ ] **Step 4: Verify the extraction**

Grep for "Refactor strategy" — must exist in pilot-compositions.md, not in the constitution.

---

### Task 3: Extract Section 16 (Open Questions) and Section 17 (Changelog)

**Files:**
- Create: `docs/design-system/constitution/open-questions.md`
- Create: `docs/design-system/constitution/changelog.md`
- Modify: `docs/design-system/services-solutions-constitution.md` (lines 2094-2124)

- [ ] **Step 1: Read Sections 16 and 17**

Read lines 2094-2124.

- [ ] **Step 2: Create open-questions.md**

```markdown
# Constitution — Open Questions and Deferred Decisions

> Extracted from Services & Solutions Design Constitution §16.
> These are explicitly unresolved decisions. They cannot guide current page creation work.
> When a question is resolved, record the resolution here and update the core constitution.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 16

---

[Paste Section 16 content here]
```

- [ ] **Step 3: Create changelog.md**

```markdown
# Constitution — Changelog

> Extracted from Services & Solutions Design Constitution §17.
> Historical record of constitution changes. Both the core constitution and this changelog
> carry a Version field — they must match.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 17

---

[Paste Section 17 content here, including the version table and the closing line]
```

- [ ] **Step 4: Replace Sections 16 and 17 in the constitution with pointers**

```markdown
## 16. Open questions and deferred decisions

See [`constitution/open-questions.md`](constitution/open-questions.md). These are explicitly unresolved — they do not guide current page creation.

## 17. Changelog

See [`constitution/changelog.md`](constitution/changelog.md).

---

*End of constitution. When in doubt, re-read [Section 2](#2-core-design-philosophy) and [Section 13](#13-process--creating-a-new-service-or-solution-page). When still in doubt, document the ambiguity in `constitution/open-questions.md` and ask.*
```

- [ ] **Step 5: Verify both extractions**

Grep for "Sanity / CMS integration" (§16) and "1.0" + "Initial constitution" (§17) in respective files.

---

### Task 4: Extract §3.4 (Side-by-Side Theming Examples)

**Files:**
- Create: `docs/design-system/constitution/theming-examples.md`
- Modify: `docs/design-system/services-solutions-constitution.md` (lines 234-315)

- [ ] **Step 1: Read §3.4**

Read lines 234-315. This is the "Side-by-side examples" subsection with before/after code blocks showing forbidden vs. correct token usage.

- [ ] **Step 2: Create theming-examples.md**

```markdown
# Constitution — Theming Side-by-Side Examples

> Extracted from Services & Solutions Design Constitution §3.4.
> Learning aid showing forbidden patterns vs. correct token usage.
> The enforceable rules are in `../services-solutions-constitution.md` §3.2-3.3.
> The `scripts/token-hygiene.sh` lint script automates enforcement.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 3.4

---

[Paste §3.4 content here]
```

- [ ] **Step 3: Replace §3.4 in the constitution with a pointer**

Replace the entire §3.4 subsection with:

```markdown
### 3.4 Side-by-side examples

See [`constitution/theming-examples.md`](constitution/theming-examples.md) for before/after code examples. The rules in §3.2 and §3.3 above are the enforceable standard; the examples are a learning aid. The `scripts/token-hygiene.sh` lint script automates detection of violations.
```

- [ ] **Step 4: Verify**

Grep for "WRONG" or "CORRECT" (the labels used in the examples) — must exist in theming-examples.md only.

---

### Task 5: Create `constitution-reference.md` and extract reference material

**Files:**
- Create: `docs/design-system/constitution-reference.md`
- Modify: `docs/design-system/services-solutions-constitution.md` (multiple sections)

This task extracts 5 blocks of reference material into the single reference file, each with a cross-reference back to the core section.

- [ ] **Step 1: Read the 5 source blocks**

Read these sections from the constitution:
- §2 full prose (lines 63-143) — 81 lines of design philosophy narrative
- §3.6 (lines 332-353) — 22 lines of "Where existing components violate these rules"
- §5.3 (lines 548-636) — 89 lines of Section.tsx reference implementation code
- §7.3 (lines 1031-1053) — 23 lines of "Why integrations is a typed shape"
- §9.5 "Rationale (v1.3)" paragraph (the paragraph starting with "**Rationale (v1.3):**" in §9.5) — ~5 lines
- §9.6 "Rationale (v1.3)" paragraph (the paragraph starting with "**Rationale (v1.3):**" in §9.6) — ~5 lines

- [ ] **Step 2: Create constitution-reference.md**

Create `docs/design-system/constitution-reference.md` with:

```markdown
# Services & Solutions Design Constitution — Reference

> Supplementary material for the [core constitution](services-solutions-constitution.md).
> Contains design philosophy narrative, rationale for key decisions, code reference implementations,
> and historical context. Agents CAN read this file when deeper context is needed on a specific rule.
> All enforceable rules live in the core constitution — this file contains NO rules.

**Version:** 1.5
**Last updated:** 2026-04-10

---

## Table of contents

- [§2 — Design philosophy (full narrative)](#2--design-philosophy-full-narrative)
- [§3.6 — Where existing components violate theming rules](#36--where-existing-components-violate-theming-rules)
- [§5.3 — Section primitive reference implementation](#53--section-primitive-reference-implementation)
- [§7.3 — Why integrations is a typed shape](#73--why-integrations-is-a-typed-shape)
- [§9.5 — Audience test rationale](#95--audience-test-rationale)
- [§9.6 — Self-challenge protocol rationale](#96--self-challenge-protocol-rationale)

---

## §2 — Design philosophy (full narrative)

> Core constitution §2 contains a compressed principles list. This is the full narrative version.

[Paste the full §2 content here — all 8 subsections §2.1-2.8]

---

## §3.6 — Where existing components violate theming rules

> Core constitution §3 contains the enforceable rules. This section documents known violations as of v1.5 for audit reference.

[Paste §3.6 content here]

---

## §5.3 — Section primitive reference implementation

> The actual component lives at `src/components/shared/primitives/Section.tsx`. This is a snapshot for reference when the file is not accessible.

[Paste the full §5.3 code block and explanation here]

---

## §7.3 — Why integrations is a typed shape

> Context for why `IntegrationGroup` uses a structured type instead of `string[]`.

[Paste §7.3 content here]

---

## §9.5 — Audience test rationale

> Why the audience test was added and the incident that prompted it.

[Paste the "Rationale (v1.3):" paragraph from §9.5]

---

## §9.6 — Self-challenge protocol rationale

> Why the self-challenge protocol was added and the incidents that validated it.

[Paste the "Rationale (v1.3):" paragraph from §9.6]
```

- [ ] **Step 3: Replace §2 in the core with a compressed principles list**

Replace the full §2 content (8 narrative subsections) with:

```markdown
## 2. Core design philosophy

These principles govern every design decision. For the full narrative, see [`constitution-reference.md` §2](constitution-reference.md#2--design-philosophy-full-narrative).

1. **Shared skeleton, two template variants.** One component library, two page templates (`ServiceDetailTemplate`, `SolutionDetailTemplate`). Composition varies per page, not layout or palette.
2. **Per-page editorial composition.** Section order is tuned per page to match the buyer journey. Archetypes are starting points, not rigid templates.
3. **Services ≠ solutions.** Services sell capabilities to any industry. Solutions sell outcomes to a specific vertical. Templates, data schemas, and content framing reflect this.
4. **Differentiation through content, not chrome.** Pages are distinguished by copy, imagery, iconography, and one signature section — never by color palette, layout structure, or component design.
5. **Single brand palette.** One palette, one set of tokens, one visual language. No per-page or per-industry color overrides.
6. **Theme-token discipline.** Every color reference uses a token-backed Tailwind class. Raw colors are forbidden. Flipping `data-theme` re-skins every page with zero component edits.
7. **Audience-driven storytelling.** Every element must pass the audience test (§9.5): who sees this, do they care, will it generate value? Content that doesn't move the buyer is cut.
8. **Content integrity over marketing velocity.** No fabricated stats, no invented case studies, no unauthorized logos. Trust is the product.
```

- [ ] **Step 4: Replace §3.6 with a pointer**

Replace §3.6 content with:

```markdown
### 3.6 Where existing components violate these rules

See [`constitution-reference.md` §3.6](constitution-reference.md#36--where-existing-components-violate-theming-rules) for the audit of known violations. The `scripts/token-hygiene.sh` script automates detection.
```

- [ ] **Step 5: Replace §5.3 code block with a file pointer**

Replace the full `Section.tsx` code block and its surrounding explanation in §5.3 with:

```markdown
### 5.3 The Section primitive as rhythm enforcer

The `Section` component (`src/components/shared/primitives/Section.tsx`) is the single point of enforcement for tone and vertical rhythm. For the full reference implementation, see [`constitution-reference.md` §5.3](constitution-reference.md#53--section-primitive-reference-implementation).

**Key properties:**

- `tone` is the only API surface for color. Components that consume `Section` never pick their own background.
- `size` encodes the vertical rhythm scale: `lg` (default for major sections), `md` (tighter, e.g., `MetricsStrip`), `sm` (compressed spacers).
- `withGrid` emits the brand grid overlay on dark sections using a CSS var (`--brand-grid`), not a hardcoded color.
- `data-tone` attribute enables child components to conditionally restyle.
- **Nothing color-related** is visible in JSX consumers of `Section`. That's the point.

**Every page section is wrapped in `Section`.** No exceptions in shared components. Signature sections also use `Section` unless they have a specialized layout — and even then, they respect tone tokens.
```

- [ ] **Step 6: Replace §7.3 with a pointer**

Replace §7.3 content with:

```markdown
### 7.3 Why `integrations` is a typed shape, not an array of strings

The `IntegrationGroup` interface uses structured fields (`name`, `category`, `connectionMethod`, `capabilities`) instead of `string[]` to support the `IntegrationsPanel` component's display needs. See [`constitution-reference.md` §7.3](constitution-reference.md#73--why-integrations-is-a-typed-shape) for the full rationale.
```

- [ ] **Step 7: Remove rationale paragraphs from §9.5 and §9.6**

In §9.5, find the paragraph starting with "**Rationale (v1.3):**" and replace it with:

```markdown
> Rationale: see [`constitution-reference.md` §9.5](constitution-reference.md#95--audience-test-rationale).
```

In §9.6, find the paragraph starting with "**Rationale (v1.3):**" and replace it with:

```markdown
> Rationale: see [`constitution-reference.md` §9.6](constitution-reference.md#96--self-challenge-protocol-rationale).
```

- [ ] **Step 8: Verify reference file completeness**

Grep for key phrases in `constitution-reference.md`:
- "Shared skeleton, two template variants" (§2)
- "existing components violate" (§3.6)
- "TONE_STYLES" (§5.3 code)
- "IntegrationsPanel" (§7.3)
- "e-commerce migration" (§9.5 rationale)
- "section-order flexibility" (§9.6 rationale)

All must be present.

---

### Task 6: Tighten §1 (Purpose and Scope)

**Files:**
- Modify: `docs/design-system/services-solutions-constitution.md` (lines 34-60)

- [ ] **Step 1: Read the current §1**

Read lines 34-60.

- [ ] **Step 2: Replace with compressed version**

Replace the full Section 1 content (everything from `## 1. Purpose and scope` to the line before `## 2.`) with:

```markdown
## 1. Purpose and scope

This constitution governs every `/services/*` and `/solutions/*` page on the AIvanceWorks website. It ensures every page is produced through a deliberate, repeatable workflow and the component/pattern library stays coherent as it scales.

**Pilot scope:** `/services/product-discovery`, `/services/mvp-development`, `/solutions/patient-portals`, `/solutions/insurance-portals`, `/solutions/e-commerce-websites`.

**What this is not:** not a whole-site style guide, not a CMS schema, not the pilot implementation plan, not a rigid template. Pages compose sections differently to match their audience.

**Audience:** developers, designers, future Claude sessions, and PR reviewers.

**Deviation:** when you deviate, update this file per [Section 12](#12-how-to-deviate-from-this-document) so the deviation becomes canonical.
```

---

### Task 7: Tighten remaining prose throughout Sections 3-13

**Files:**
- Modify: `docs/design-system/services-solutions-constitution.md`

This task applies the prose tightening rules from the spec to sections that remain in the core but are verbose. Work through each section in order.

- [ ] **Step 1: Read and tighten §3 introductory text**

Read lines 144-160 (§3 intro and §3.1). The intro paragraph "Theme tokens are the bridge..." and §3.1 "The token system" have narrative paragraphs that restate what the token table shows. Reduce to:

```markdown
## 3. Theming rules (hard)

Theme tokens bridge the design system to the code. Every color reference must use a token-backed Tailwind class. Flipping `data-theme` re-skins every page with zero component edits. Violations block merge.

### 3.1 The token system

The token system maps to five layers. Each layer is defined in `src/app/globals.css` as a CSS custom property and bridged to Tailwind via `@theme` in `tailwind.config.ts`.

| Layer | Example tokens | Purpose |
|---|---|---|
| Surface | `bg-surface-dark-*`, `bg-surface-white`, `bg-surface-warm` | Section backgrounds |
| Text | `text-text-heading`, `text-text-body`, `text-text-light`, `text-text-subtle` | Foreground colors |
| Brand | `bg-brand-600`, `text-brand-700`, `border-brand-300` | Primary brand color scale |
| Border / Glass | `border-border-subtle`, `bg-glass-bg`, `bg-glass-hover` | Dividers and frosted surfaces |
| Accent | `bg-accent-500`, `text-accent-300` | Secondary accent color |
```

Only apply this replacement if the current §3.1 has more verbose content. Read first to confirm.

- [ ] **Step 2: Tighten §5.3 replacement check**

After Task 5 replaced the §5.3 code block, verify the replacement is clean — the pointer text should be ~15 lines, not the original ~89 lines.

- [ ] **Step 3: Tighten §7.5 (Page file contract)**

Read §7.5 (lines 1068-1120). This section explains how page files wire data to templates. If it contains verbose explanation that restates what the code shows, convert to a terse "the contract is:" + bullet list. Read first to assess — if already concise, skip.

- [ ] **Step 4: Review any remaining verbose narrative**

Do a final pass through the core, reading section by section. For each section, ask: "Is there a paragraph that restates something already captured in a table or bullet list?" If yes, remove the paragraph. Do not tighten anything that contains judgment heuristics, decision logic, or constraint definitions — those are rules, not narrative.

- [ ] **Step 5: Count lines**

Run `wc -l` on the constitution. Target: 1000-1100 lines. If over 1100, identify more prose to tighten. If under 1000, verify nothing was accidentally deleted.

---

### Task 8: Update header, TOC, and version

**Files:**
- Modify: `docs/design-system/services-solutions-constitution.md`

- [ ] **Step 1: Update the TOC**

The TOC (lines 12-30) references Sections 14-17 with full titles. Update to reflect they are now pointers:

```markdown
## Table of contents

1. [Purpose and scope](#1-purpose-and-scope)
2. [Core design philosophy](#2-core-design-philosophy)
3. [Theming rules (hard)](#3-theming-rules-hard)
4. [Section rhythm](#4-section-rhythm)
5. [Shared component library](#5-shared-component-library)
6. [Page template approach and archetypes](#6-page-template-approach-and-archetypes)
7. [Data schema](#7-data-schema)
8. [Signature sections](#8-signature-sections)
9. [Content integrity rules (hard)](#9-content-integrity-rules-hard)
10. [Responsiveness and accessibility](#10-responsiveness-and-accessibility)
11. [Iconography and imagery](#11-iconography-and-imagery)
12. [How to deviate from this document](#12-how-to-deviate-from-this-document)
13. [Process — creating a new service or solution page](#13-process--creating-a-new-service-or-solution-page)
14. [Prompt templates](#14-prompt-templates) *(→ constitution/prompt-templates.md)*
15. [Reference — pilot pages](#15-reference--pilot-pages-and-their-compositions) *(→ constitution/pilot-compositions.md)*
16. [Open questions](#16-open-questions-and-deferred-decisions) *(→ constitution/open-questions.md)*
17. [Changelog](#17-changelog) *(→ constitution/changelog.md)*

**Companion files:** [Constitution Reference](constitution-reference.md) | [Voice Guide](../content-strategy/service-solution-content-voice-guide.md)
```

- [ ] **Step 2: Update version**

Change the version from `1.5` to `2.0` — this is a structural change, not a minor content addition. Update `Last updated` to today's date.

- [ ] **Step 3: Update the executive summary**

Add a single sentence to the executive summary noting the modular structure:

After "This is a living document: any deviation must be recorded back into it." add:

"Supplementary material (rationale, examples, prompt templates, pilot references) lives in `constitution-reference.md` and `constitution/`. This file contains all enforceable rules."

- [ ] **Step 4: Update constitution-reference.md version**

Set its version to `2.0` to match.

- [ ] **Step 5: Update changelog.md**

Add a v2.0 entry to `constitution/changelog.md`:

```markdown
| **2.0** | 2026-04-10 | **Constitution modularization.** Restructured from monolithic 2124-line document into core (~1000-1100 lines) + reference (~400-500 lines) + 5 standalone files. Zero rule loss — all enforceable rules remain in the core. Extracted: §14 prompt templates, §15 pilot compositions, §16 open questions, §17 changelog, §3.4 theming examples → standalone files. Extracted: §2 philosophy narrative, §3.6 violation audit, §5.3 Section.tsx code, §7.3 integrations rationale, §9.5/9.6 rationale paragraphs → constitution-reference.md. Compressed §1 and §2. Tightened prose throughout. Purpose: reduce agent context consumption from ~40K tokens to ~20K tokens during page creation without any rule loss. |
```

---

### Task 9: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Read current CLAUDE.md convention #9 and quick reference table**

Read `CLAUDE.md` to find the constitution reference on line 92 and the quick reference table.

- [ ] **Step 2: Update convention #9**

Replace:
```
9. **Services/Solutions Design Constitution**: Every new service or solution page MUST be designed and built according to `docs/design-system/services-solutions-constitution.md`. Do NOT redesign from scratch — read the constitution, pick an archetype, follow the 10-step process. Any deviation must be recorded in the constitution itself.
```

With:
```
9. **Services/Solutions Design Constitution**: Every new service or solution page MUST be designed and built according to `docs/design-system/services-solutions-constitution.md`. Do NOT redesign from scratch — read the constitution, pick an archetype, follow the 13-step process. Any deviation must be recorded in the constitution itself. For rationale and deeper context on specific rules, see `docs/design-system/constitution-reference.md`. Prompt templates, pilot compositions, changelog, and theming examples are in `docs/design-system/constitution/`.
```

- [ ] **Step 3: Update the quick reference table**

Find the row `| Services/Solutions design constitution |` and update to:

```
| Services/Solutions design constitution | `docs/design-system/services-solutions-constitution.md` |
| Constitution reference (rationale, examples) | `docs/design-system/constitution-reference.md` |
```

---

### Task 10: Verification pass

**Files:**
- Read-only verification across all files

- [ ] **Step 1: Line count verification**

Run `wc -l` on:
- `services-solutions-constitution.md` — target: 1000-1100
- `constitution-reference.md` — target: 400-500
- All standalone files — verify they contain content (not empty)

- [ ] **Step 2: Rule coverage grep**

Grep the core constitution for these critical keywords to confirm no rule was lost:

```bash
grep -c "FORBIDDEN" services-solutions-constitution.md          # §3.3 — must be >= 1
grep -c "hard" services-solutions-constitution.md               # hard rules — must be >= 5
grep -c "audience test" services-solutions-constitution.md      # §9.5 — must be >= 3
grep -c "self-challenge" services-solutions-constitution.md     # §9.6 — must be >= 2
grep -c "_unverified" services-solutions-constitution.md        # §9.4 — must be >= 2
grep -c "tone" services-solutions-constitution.md               # §4 — must be >= 10
grep -c "Archetype" services-solutions-constitution.md          # §6 — must be >= 8
grep -c "signatureComponent" services-solutions-constitution.md # §7/8 — must be >= 1
grep -c "SectionKey" services-solutions-constitution.md         # §7 — must be >= 1
grep -c "composition" services-solutions-constitution.md        # §6/7 — must be >= 5
grep -c "focus-visible" services-solutions-constitution.md      # §10.6 — must be >= 1
grep -c "deviation" services-solutions-constitution.md          # §12 — must be >= 3
grep -c "13-step" services-solutions-constitution.md            # §13 — must be >= 1
```

- [ ] **Step 3: Cross-reference link verification**

Grep all files for broken links — any `](constitution/` or `](constitution-reference.md` reference should point to a file that exists:

```bash
grep -oh 'constitution/[a-z-]*.md' docs/design-system/services-solutions-constitution.md | sort -u
# Verify each file exists in docs/design-system/constitution/

grep -oh 'constitution-reference.md#[a-z0-9-]*' docs/design-system/services-solutions-constitution.md | sort -u
# Verify each anchor exists in constitution-reference.md
```

- [ ] **Step 4: Version parity check**

Confirm `services-solutions-constitution.md` and `constitution-reference.md` both say `Version: 2.0`.

- [ ] **Step 5: Token estimate**

Run `wc -c` on the core constitution. Divide by ~4 for rough token estimate. Target: 18,000-22,000 tokens.
