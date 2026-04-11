# Design: Constitution Modularization

**Created:** 2026-04-10
**Status:** Approved
**Problem:** The services/solutions design constitution is ~2020 lines / ~121KB / ~30-40K tokens. Every agent dispatched for page creation must read the full document, consuming ~25-30% of effective working context before writing a single line. This degrades agent efficiency and crowds out implementation work from context.

## Constraint

Every rule in the constitution must remain enforceable during page creation. No content loss on anything that affects decision quality. The restructuring separates enforceable content from reference material — it does NOT prioritize some rules over others.

## Solution

Restructure the monolithic constitution into a **core document** (what agents read), a **reference document** (what agents can look up), and **standalone files** (what agents never need during page creation).

## File Structure

```
docs/design-system/
├── services-solutions-constitution.md          ← Core (~1000-1100 lines, ~18-22K tokens)
├── constitution-reference.md                   ← Supplementary (~400-500 lines, ~8-10K tokens)
├── constitution/
│   ├── prompt-templates.md                     ← For launching sessions, not for mid-task agents
│   ├── pilot-compositions.md                   ← Summaries of 5 pilot pages
│   ├── changelog.md                            ← Historical record
│   ├── open-questions.md                       ← Deferred decisions
│   └── theming-examples.md                     ← Side-by-side forbidden vs correct patterns
```

## Core Constitution (~1000-1100 lines)

Contains every rule, constraint, table, and judgment heuristic. This is what agents read. This IS the authority.

### Section-by-section treatment

| Current Section | Treatment in Core |
|---|---|
| 1. Purpose and scope | Trim to ~10 lines: what it governs, pilot scope, one-line "what this is not" list |
| 2. Philosophy | Convert 8 narrative subsections to a numbered principles list (~30 lines) |
| 3. Theming rules | Keep rules + token tables. Move side-by-side examples → `constitution/theming-examples.md`. Move §3.6 historical violation audit → `constitution-reference.md`. |
| 4. Section rhythm | Keep in full — already concise, all rules |
| 5. Component library | Keep component listing. Replace `Section.tsx` code block (~60 lines) with pointer to actual file |
| 6. Archetypes | Keep in full — recipes, decision table, B/D guide all essential |
| 7. Data schema | Keep type definitions. Move §7.3 rationale ("why integrations is typed") → `constitution-reference.md` |
| 8. Signature sections | Keep in full |
| 9. Content integrity | Keep rules + audience test + self-challenge + judgment heuristics. Move "Rationale (v1.3)" history paragraphs → `constitution-reference.md` |
| 10. Responsiveness | Keep in full |
| 11. Imagery | Keep in full |
| 12. Deviation protocol | Keep in full |
| 13. Process (13 steps) | Keep in full — the operational core |
| 14. Prompt templates | Move entirely → `constitution/prompt-templates.md` |
| 15. Pilot references | Move entirely → `constitution/pilot-compositions.md` |
| 16. Open questions | Move entirely → `constitution/open-questions.md` |
| 17. Changelog | Move entirely → `constitution/changelog.md` |

### Prose tightening rules (applied during restructure)

- Paragraphs that restate a rule already captured in a table or bullet list → remove the paragraph, keep the table/bullet
- "Rationale (vX.X):" blocks → move to `constitution-reference.md` with section cross-reference
- Inline code examples that duplicate actual implementation files → replace with file path pointer
- Section introductory sentences that just preview what's below → remove
- Convert multi-sentence rule descriptions to single-line bullets where possible without losing precision

## Constitution Reference (~400-500 lines)

Material an agent MIGHT need to look up during page creation for deeper context on a specific rule. Organized by section number for quick cross-reference.

| Content | Source Section | Why it's here |
|---|---|---|
| Design philosophy narrative | §2 full prose | Resolve ambiguity on design choices |
| "Why integrations is typed" | §7.3 | Context when designing integration-heavy pages |
| Audience test rationale | §9.5 "Rationale (v1.3)" | Debug why a content decision fails the audience test |
| Self-challenge rationale | §9.6 "Rationale (v1.3)" | Understand when to apply the protocol |
| Existing component violations | §3.6 | Useful for audits, not for page creation |
| `Section.tsx` reference implementation | §5.3 code block | Pattern reference when building new shared components |

## Standalone Files (in `constitution/`)

Agent NEVER reads these during page creation. They exist for humans or for launching new sessions.

| File | Content | Why standalone |
|---|---|---|
| `prompt-templates.md` | Section 14 — copy-paste prompts for new Claude sessions | An already-dispatched agent doesn't need the prompt that launched it |
| `pilot-compositions.md` | Section 15 — breakdowns of all 5 pilot pages | Agent reads ONE actual data file as exemplar, not summaries of all five |
| `changelog.md` | Section 17 — version history | Pure history, never affects a creation decision |
| `open-questions.md` | Section 16 — deferred decisions | Explicitly unresolved, can't guide current work |
| `theming-examples.md` | Section 3.4 — side-by-side forbidden vs correct | Learning aid; rules in §3.2-3.3 are sufficient for enforcement |

## CLAUDE.md Update

Current line 92:
```
9. **Services/Solutions Design Constitution**: Every new service or solution page MUST be designed and built according to `docs/design-system/services-solutions-constitution.md`. Do NOT redesign from scratch — read the constitution, pick an archetype, follow the 10-step process. Any deviation must be recorded in the constitution itself.
```

Updated to:
```
9. **Services/Solutions Design Constitution**: Every new service or solution page MUST be designed and built according to `docs/design-system/services-solutions-constitution.md`. Do NOT redesign from scratch — read the constitution, pick an archetype, follow the 13-step process. Any deviation must be recorded in the constitution itself. For rationale and deeper context on specific rules, see `docs/design-system/constitution-reference.md`. Prompt templates, pilot compositions, changelog, and theming examples are in `docs/design-system/constitution/`.
```

Quick Reference table updated:
```
| Services/Solutions design constitution | `docs/design-system/services-solutions-constitution.md` |
| Constitution reference (rationale, examples) | `docs/design-system/constitution-reference.md` |
```

## Token Budget

| What agent reads | Lines | Tokens (est.) | When |
|---|---|---|---|
| Core constitution | ~1000-1100 | ~18-22K | Always — page creation |
| Constitution reference | ~400-500 | ~8-10K | On demand — when a rule needs deeper context |
| **Total worst case** | ~1500-1600 | ~26-32K | Rare — only if agent needs reference lookups |
| **Current (before)** | ~2020 | ~30-40K | Always — full read every time |

**Best case improvement:** ~50% token reduction (20K vs 40K).
**Worst case:** ~20% reduction (32K vs 40K), but this is rare.
**Expected typical case:** ~45% reduction — agents almost never need the reference file.

## Version Sync

- Both `services-solutions-constitution.md` and `constitution-reference.md` carry a `Version:` field in their header.
- When the core gets a version bump, the reference file MUST be checked for any corresponding updates in the same commit.
- Standalone files in `constitution/` carry their own last-updated date but no version number — they're not versioned artifacts, they're archives.

## Implementation Approach

1. Read the full current constitution
2. Create the standalone files first (extract Sections 14-17, §3.4)
3. Create the reference file (extract rationale blocks, code examples, philosophy narrative)
4. Restructure the core constitution (tighten remaining prose, add file pointers, verify every rule is preserved)
5. Verify: diff the original against the sum of all new files — no rule should be missing from the core
6. Update CLAUDE.md
7. Run a verification pass: grep for every "hard" rule keyword in the core to confirm coverage
