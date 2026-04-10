# UX Website Design Principles Skill — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a Claude Code skill encoding senior UX designer expertise for marketing websites — the psychological "WHY" layer above existing visual design skills.

**Architecture:** Three files: a lean SKILL.md (~500 words) loaded on every trigger, plus two reference files loaded on demand — `psychology-and-heuristics.md` for planning/strategy and `patterns-and-implementation.md` for active building. Installed at `~/.claude/skills/ux-website-design-principles/`.

**Tech Stack:** Markdown skill files following the agentskills.io specification. No code dependencies.

**Spec:** `docs/superpowers/specs/2026-04-07-ux-website-design-principles-skill-design.md`

---

## File Structure

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `~/.claude/skills/ux-website-design-principles/SKILL.md` | Core principles, triggers, cross-references (~500 words) |
| Create | `~/.claude/skills/ux-website-design-principles/references/psychology-and-heuristics.md` | Laws of UX, cognitive load, scanning, peak-end, content order, myths (~650 words) |
| Create | `~/.claude/skills/ux-website-design-principles/references/patterns-and-implementation.md` | Forms, trust, navigation, responsive UX, microcopy (~650 words) |

---

### Task 1: Create SKILL.md

**Files:**
- Create: `~/.claude/skills/ux-website-design-principles/SKILL.md`

- [ ] **Step 1: Create the directory structure**

```bash
mkdir -p ~/.claude/skills/ux-website-design-principles/references
```

- [ ] **Step 2: Write SKILL.md**

Write the following content to `~/.claude/skills/ux-website-design-principles/SKILL.md`:

```markdown
---
name: ux-website-design-principles
description: Use when building, reviewing, or planning marketing websites, landing pages, or conversion-focused web experiences. Triggers on layout decisions, navigation structure, form design, content hierarchy, trust signals, CTA placement, or any user experience concern for web pages.
---

# UX Website Design Principles

Senior UX designer expertise grounded in research from NNGroup, Baymard Institute, and cognitive psychology. This skill provides the decision-making framework (WHY) that informs which patterns from `modern-web-designer` (WHAT) and `frontend-design` (HOW) to apply.

## When to Use

- Planning page layout, content hierarchy, or section ordering
- Building forms, navigation, or trust sections
- Making CTA placement, sizing, or copy decisions
- Reviewing a page for usability before delivery
- Deciding mobile-first vs desktop-first approach

**Defer to existing skills for:** typography/color/animation implementation (`modern-web-designer`), creative direction (`frontend-design`), SEO/AEO/GEO (`modern-web-designer`).

## The 7 Principles

### P1: Visual Hierarchy & Cognitive Load
One primary message and one primary CTA per viewport-height section. Users read only 20-28% of page text (NNGroup). Every element competes for ~4 working memory chunks (Cowan 2001). Eliminate extraneous load — remove anything that doesn't serve the user's decision. Manage complexity via progressive disclosure.

### P2: Performance Is UX
Interactions under 400ms keep users in flow (Doherty Threshold). Page load over 3 seconds loses the majority (Google). Use skeleton screens for loads under 3s, progress copy for 3-10s, progress bars for 10s+. Perceived speed matters as much as actual speed.

### P3: Responsive UX by Intent
Design for user intent per device, not just screen size. Mobile first screen must show value prop + CTA + one trust signal without scrolling. Touch targets 44px minimum with 8px spacing. Place CTAs in thumb zone (center-to-lower screen). Click-to-call prominent on mobile.

### P4: Accessible Design First
26% of US adults have a disability (CDC). Over 95% of websites have detectable accessibility failures (WebAIM 2024). Build core experience fully accessible, then layer visual enhancements. Never break functional accessibility. Minimums: 4.5:1 contrast, 44px touch targets, full keyboard navigation, visible focus indicators, proper heading hierarchy.

### P5: Navigation & Information Architecture
Follow conventions (Jakob's Law). 5-7 primary nav items max, ordered by user priority. Every label must clearly predict destination content — information scent. Users abandon within 2-3 clicks if scent fails. Mobile: visible nav beats hamburger by 20-50% engagement. Pair hamburger with visible CTA. Sticky bottom CTA aligns with thumb zone.

### P6: Design Systems & Consistency
Inconsistent UI erodes trust. Same action = same styling site-wide (Nielsen H4). Establish button hierarchy (primary/secondary/tertiary), consistent spacing, standardized form patterns. Von Restorff Effect: visually isolate the recommended option — highlighted pricing tier gets 2-3x more clicks.

### P7: Form Optimization & Friction Reduction
~70% cart abandonment rate (Baymard). Every unnecessary field increases abandonment. Single-column layout, labels above fields, inline validation on blur (not keypress), never use "Submit" as a label. Show all costs upfront — hidden fees are the #1 abandonment driver at ~48% (Baymard). Multi-step for 7+ fields with mandatory progress bar.

## When to Load References

| Building... | Load |
|---|---|
| Page layout, section ordering, content strategy | `references/psychology-and-heuristics.md` |
| Forms, navigation, trust sections, CTAs, responsive layout | `references/patterns-and-implementation.md` |
| Reviewing completed work | Both references |

## Cross-References

- Conversion pattern implementation: `modern-web-designer` > `references/conversion-patterns.md`
- Visual treatment and aesthetics: `frontend-design`
- Accessibility implementation checklist: `modern-web-designer` > `references/performance-seo.md`
- Animation decisions: `modern-web-designer` > `references/animations.md`
```

- [ ] **Step 3: Verify the file was created and check word count**

```bash
wc -w ~/.claude/skills/ux-website-design-principles/SKILL.md
```

Expected: approximately 450-520 words (excluding frontmatter).

- [ ] **Step 4: Commit**

```bash
git add ~/.claude/skills/ux-website-design-principles/SKILL.md
git commit -m "feat: add UX website design principles skill — core SKILL.md"
```

---

### Task 2: Create psychology-and-heuristics.md Reference

**Files:**
- Create: `~/.claude/skills/ux-website-design-principles/references/psychology-and-heuristics.md`

- [ ] **Step 1: Write psychology-and-heuristics.md**

Write the following content to `~/.claude/skills/ux-website-design-principles/references/psychology-and-heuristics.md`:

```markdown
# Psychology & Heuristics Reference

Loaded when planning page layout, content hierarchy, section ordering, or making strategic UX decisions.

## Laws of UX Quick Reference

| Law | Rule | Key Number | Common Violation |
|---|---|---|---|
| Hick's Law | Limit choices at each decision point | 1 primary CTA per viewport; 3-4 pricing tiers max | 5 equally weighted CTAs competing in hero |
| Fitts's Law | Larger, closer targets are faster to acquire | 44px min touch target; 8px spacing | Small text links as primary conversion action |
| Miller's Law | Chunk information into groups | 3-5 items per group (Cowan: 4±1 chunks) | Flat list of 12+ features with no grouping |
| Jakob's Law | Users expect your site to work like others | Standard nav: Services, About, Case Studies, Contact | Creative navigation that requires learning |
| Aesthetic-Usability Effect | Beautiful = perceived as more usable | 50ms first impression (Lindgaard 2006) | Stunning but broken — users can't find info |
| Doherty Threshold | Keep interactions under 400ms | <100ms instant; <1s acceptable; <3s page load | Heavy JS adding 2-5MB or 3rd-party script bloat |
| Von Restorff Effect | The different item gets remembered | Highlighted tier gets 2-3x more clicks (CXL) | All pricing tiers styled identically |
| Serial Position Effect | First and last items recalled best | Strongest value first in lists; CTA last in nav | Best feature buried in position 3 of 6 |
| Zeigarnik Effect | Incomplete tasks stay in mind | Progress bars drive multi-step form completion | Long form with no progress indication |
| Proximity & Common Region | Close = grouped; shared boundary = grouped | Internal spacing ~1/3 of external spacing | Form labels equidistant between two fields |

## Cognitive Load Management

Three types — know which to target:
- **Extraneous** (eliminate) — imposed by poor design: visual clutter, inconsistent patterns, competing CTAs, autoplay media, novel layouts. Every non-essential element consumes limited working memory
- **Intrinsic** (manage) — inherent complexity of your offering. Use progressive disclosure: show essentials first, reveal detail on demand. Layer pricing: core price visible, full feature matrix behind "Compare all features"
- **Germane** (maximize) — productive effort spent understanding your value. Support with clear comparisons, visual hierarchy, analogies connecting to existing knowledge

**Key rule:** One primary action per viewport-height section. Audit every element: "Does removing this make the primary message harder to understand?" If no, remove it.

## Scanning Patterns

| Pattern | Applies When | Design Implication |
|---|---|---|
| Z-pattern | Visual/sparse marketing pages (homepages, hero sections) | Logo top-left, nav top-right, CTA bottom-right of hero. Alternate image/text blocks left-right down the page |
| Layer-cake | Content-heavy pages with heading structure | Every heading must be descriptive and standalone — users read ONLY headings. Front-load first 2 words of each |
| Spotted | Users seeking specific info (price, phone, stat) | Make key data visually distinct: different size, weight, or color from surrounding text |
| F-pattern | Text-heavy pages without visual hierarchy | This is a SYMPTOM of poor design — PREVENT it by adding subheadings, bullets, bold phrases every 3-4 paragraphs |
| Mobile linear | Small viewport forces serial scanning | Treat each screen-height as standalone communication with its own hook and CTA path |

**Universal rule:** Front-load everything. The first 2 words of every heading and paragraph carry disproportionate weight in scanning.

## Peak-End Rule

Users judge experiences by the most intense moment (peak) and the final moment (end), not the average (Kahneman 1993):

- **Design ONE peak moment per journey** — concentrate your best proof point (ROI stat, case study result, interactive demo) with premium visual treatment. Don't spread best content evenly; create one unforgettable moment
- **Invest in the ending** — thank-you/confirmation pages deserve homepage-level care: personalized confirmation, clear next step, value-add resource. This is the last memory users carry
- **Eliminate negative peaks** — one broken form, intrusive popup, or confusing pricing table dominates memory of the entire experience, undoing ten good moments. Find and fix your worst friction point first

## Research-Backed Content Section Order

Optimal sequence for marketing landing pages:

1. **Hero** — value prop + primary CTA (users decide in 3-5 seconds)
2. **Social proof / logos** — immediately after hero (Stanford halo effect: early credibility influences evaluation of all subsequent content)
3. **Problem statement** — demonstrate you understand the user's challenge
4. **Solution overview** — how you solve it
5. **Features / differentiators** — why you, not competitors
6. **Case studies / results** — concrete evidence with numbers
7. **Testimonials** — human voices reinforcing evidence
8. **Process / how it works** — reduce uncertainty (3-4 numbered steps)
9. **Pricing** — after value is established
10. **FAQ** — handle remaining objections
11. **Final CTA** — repeat primary call-to-action with closing argument

Every section must be independently compelling — 50-60% of visitors reach mid-page on desktop.

## Debunked Myths — Do Not Follow These

| Myth | Reality |
|---|---|
| "The fold is dead" | 57% desktop / 68% mobile viewing time is above the fold. It's the attention peak, not a cliff |
| "3-click rule" | Debunked (Spool, UIE 2003). Information scent per click matters, not click count |
| "Mobile users want less" | Debunked (Google 2015+). Same content, prioritized and structured for serial consumption |
| "Nobody scrolls" | Debunked (Chartbeat 2013). Users scroll, but attention decays — content order matters enormously |
| "Hamburger menus are bad" | Oversimplified. Fine for secondary nav. The real problem is hiding primary CTAs behind them |
| "F-pattern is a design goal" | It's a symptom of poor hierarchy. Well-designed pages actively break the F-pattern |
```

- [ ] **Step 2: Verify the file and check word count**

```bash
wc -w ~/.claude/skills/ux-website-design-principles/references/psychology-and-heuristics.md
```

Expected: approximately 600-700 words.

- [ ] **Step 3: Commit**

```bash
git add ~/.claude/skills/ux-website-design-principles/references/psychology-and-heuristics.md
git commit -m "feat: add psychology and heuristics reference for UX skill"
```

---

### Task 3: Create patterns-and-implementation.md Reference

**Files:**
- Create: `~/.claude/skills/ux-website-design-principles/references/patterns-and-implementation.md`

- [ ] **Step 1: Write patterns-and-implementation.md**

Write the following content to `~/.claude/skills/ux-website-design-principles/references/patterns-and-implementation.md`:

```markdown
# Patterns & Implementation Reference

Loaded when actively building forms, navigation, trust sections, CTAs, or responsive layouts.

## Form Optimization

### Layout
- **Single-column always** — except semantically paired fields (city/state/zip, first/last name). Multi-column forms increase completion time and errors (Baymard, CXL: single-column completed ~15s faster)
- **Labels above fields** — fastest completion at ~50ms fixation shift vs ~500ms for left-aligned (Penzo 2006 eye-tracking)
- **Never placeholder-only labels** — NNGroup: actively harmful. Disappears on input, low contrast, confused with prefilled data, inaccessible
- **Floating labels** only when vertical space is genuinely constrained. Ensure floated state is 12px+ font size and 4.5:1 contrast

### Validation
- **Inline on blur** (not keypress) — 22% fewer errors, 42% faster completion (Wroblewski 2009). Premature validation while typing is actively harmful
- **Success states:** green checkmark for correctly completed fields
- **Error messages:** inline below the field. Red + icon + descriptive text (triple encoding for accessibility)
- Errors must be specific and constructive: "Email must include an @ symbol" not "Invalid input"
- Never blame the user. Never clear fields on error. Use `aria-invalid` + `aria-describedby` for screen readers

### Friction Reduction
- **Field audit:** For every field ask — can it be removed, deferred to later, or auto-detected?
- **Multi-step when 7+ fields.** Progress bar mandatory. 3-4 steps max. Group by logical theme (info → address → payment → review)
- **Smart defaults:** auto-detect country from IP, zip-first for US addresses (auto-populate city/state), use correct HTML `autocomplete` attributes on every field
- **Mark optional fields** as "optional" — users assume all fields are required by default
- **Zeigarnik Effect:** once users complete Step 1, psychological tension motivates completion. The initial commitment is the hardest part

## Trust Architecture

### Above-the-Fold Trust Order
1. Clear value proposition — parseable in under 5 seconds
2. Social proof strip — 4-6 recognizable client logos ("Trusted by...")
3. Primary CTA with reassurance microcopy ("No credit card required", "Cancel anytime")
4. One key credibility indicator ("SOC 2 Certified", "4.8/5 on G2", "10,000+ customers")

### Social Proof
- **Testimonials:** real name + photo + title + company + specific quantified result ("Revenue increased 40%"). Anonymous testimonials trigger skepticism
- **Case studies:** Problem → Solution → Quantified Result. For B2B: case studies > testimonials > logos in persuasion depth
- **Reviews/ratings:** displaying reviews increases conversion by 270% for higher-priced items (Spiegel Research Center, Northwestern)
- **Placement:** near every CTA/conversion point, not on a separate "testimonials page"

### Trust Signals
- **Trust badges:** 1-2 recognized badges (Norton, BBB) near CTA, not buried in footer. More than 3-4 looks desperate and backfires
- **Contact visibility:** phone/email in header on every page. Stanford Credibility Project: "easy to contact" = trustworthy. Full contact info in footer
- **Pricing transparency:** show all costs upfront. Hidden fees are the #1 abandonment reason at ~48% of users (Baymard). If exact pricing isn't possible, show ranges ("Starting at $X/mo")
- **Content credibility:** named authors with bios and photos, publication dates, "last updated" dates, source citations for claims

## Navigation & Information Architecture

### Structure
- **5-7 primary nav items max.** Standard labels: Services, About, Case Studies, Blog/Resources, Contact
- **Order by user priority.** Serial Position Effect: put your strongest page first and conversion CTA last — users remember both ends best
- **Information scent:** every label must clearly predict destination content. "Cloud Development Services" beats "Our Solutions". Users make go/no-go decisions in under 1 second
- **Structure by user tasks,** not org chart. Users think "I need help with X" not "show me your Cloud Division"

### Implementation
- **Mega-menus** for services with 5+ sub-items — 25% fewer navigation errors than standard dropdowns (NNGroup)
- **Mobile:** visible tab bar or priority+ pattern (show top 3-4 items visibly) beats hamburger by 20-50% in engagement. Always pair hamburger with a visible CTA button in the header
- **Sticky bottom CTA on mobile** — aligns with thumb zone (center-to-lower screen), consistently outperforms header-only CTA in A/B tests

## Responsive UX

### Mobile First Screen
Value prop + CTA + one trust signal, all visible without scrolling. This is non-negotiable.

- **Touch targets:** 44px minimum height, 8px spacing between targets. Spacing matters more than size — crowded targets cause more mis-taps than slightly small ones
- **Line-height:** 1.5+ on mobile body text to prevent mis-taps on inline links
- **Click-to-call** prominent — 40%+ of B2B mobile lead conversions come from phone taps, yet many sites bury the number
- **Don't just stack desktop in one column.** Use accordions, "Read more" expanders, and tabs to give mobile users depth without drowning them

### Scroll Depth Strategy
- **Three CTA positions:** above fold + ~50% page depth + bottom. The 50% mark catches the ~45% of users who won't reach the bottom
- **Visual anchors** every 2-3 scroll heights — images, stat callouts, contrasting background sections re-engage users in "fast scroll" mode
- **Above-the-fold gets 57% of desktop / 68% of mobile viewing time** — it's the attention peak, use it for your strongest hook

## Microcopy

### CTA Buttons
- **Never "Submit"** — worst-performing label across all studies (HubSpot analysis of 40,000 landing pages)
- **Specific action verbs:** Get, Start, Book, Download, Claim, Try. Keep to 2-5 words
- **First-person framing** as starting hypothesis: "Get my free quote" tends to outperform "Get your free quote" (ContentVerve A/B tests), but always test for your audience
- **Friction reducers** placed near (not inside) the button: "No credit card required", "Cancel anytime", "Free 14-day trial"

### Error Messages
- **Neutral/system-blame framing:** "We couldn't recognize that format" not "You entered invalid data"
- Under 15 words. Sentence case. Include expected format ("MM/DD/YYYY")
- Humor is fine for 404 pages. Never for form validation errors — users are already frustrated

### Helper Text
- **Explain "why"** for sensitive fields: "Phone number — for delivery updates only"
- Show format requirements before typing, not in error messages after failure
- **Privacy reassurance** near email/phone fields: "We'll never share your email" (can increase willingness by ~19%, Unbounce)

### Loading States
| Duration | Pattern |
|---|---|
| 0-1s | No feedback needed |
| 1-3s | Skeleton screen (not spinner) |
| 3-10s | Progress copy: "Saving your changes..." |
| 10s+ | Progress bar with percentage or step count |
```

- [ ] **Step 2: Verify the file and check word count**

```bash
wc -w ~/.claude/skills/ux-website-design-principles/references/patterns-and-implementation.md
```

Expected: approximately 600-700 words.

- [ ] **Step 3: Commit**

```bash
git add ~/.claude/skills/ux-website-design-principles/references/patterns-and-implementation.md
git commit -m "feat: add patterns and implementation reference for UX skill"
```

---

### Task 4: RED Phase — Baseline Test Without Skill

Per the writing-skills TDD process, we test what Claude does WITHOUT the skill to identify gaps that the skill should fix.

**Files:** None (subagent testing only)

- [ ] **Step 1: Temporarily move the skill directory so it is not loaded**

```bash
mv ~/.claude/skills/ux-website-design-principles ~/.claude/skills/_ux-website-design-principles-disabled
```

- [ ] **Step 2: Run baseline scenario 1 — Landing Page Layout**

Dispatch a subagent with this prompt (no skill loaded):

> "You are building a marketing landing page for a B2B software consultancy. Plan the section order, layout structure, and CTA placement for the homepage. The company offers cloud development, AI/ML consulting, and custom software. Include your reasoning for every layout decision."

**What to document:**
- Did it follow research-backed section ordering (hero → social proof → problem → solution)?
- Did it cite specific UX research or just use generic reasoning?
- Did it apply cognitive load management, scanning patterns, or Laws of UX?
- Did it address mobile-specific UX (thumb zone, touch targets, first screen content)?

- [ ] **Step 3: Run baseline scenario 2 — Contact Form Design**

Dispatch a subagent with this prompt (no skill loaded):

> "Build a contact form for a B2B consulting website. The form needs: name, email, phone, company, project type (dropdown), budget range, project description, and preferred start date. Show the HTML/JSX and explain your UX decisions."

**What to document:**
- Did it use single-column layout?
- Did it implement inline validation on blur (not keypress)?
- Did it use labels above fields (not placeholder-only)?
- Did it recommend multi-step since there are 8 fields?
- Did it add helper text explaining "why" for sensitive fields?
- Did it avoid "Submit" as the button label?
- Did it add privacy reassurance microcopy?

- [ ] **Step 4: Run baseline scenario 3 — Trust Section Review**

Dispatch a subagent with this prompt (no skill loaded):

> "Review this hero section for a B2B marketing site and suggest improvements:
> Hero has: headline ('Transform Your Business with AI'), subheadline (2 sentences about their AI services), a 'Learn More' button, and a stock photo background. Below the fold: a feature grid with 8 feature cards, then testimonials at the bottom of the page."

**What to document:**
- Did it flag the weak CTA ("Learn More") and suggest a specific action verb?
- Did it recommend social proof immediately after hero (not at the bottom)?
- Did it reference the peak-end rule or serial position effect?
- Did it suggest above-the-fold trust signals (logos, credibility indicator)?
- Did it flag the 8 feature cards as exceeding Miller's Law and suggest chunking?
- Did it mention information scent or scanning patterns?

- [ ] **Step 5: Document baseline gaps**

Create a summary of what Claude missed WITHOUT the skill. This becomes the evidence that the skill is needed.

---

### Task 5: GREEN Phase — Test With Skill

- [ ] **Step 1: Restore the skill**

```bash
mv ~/.claude/skills/_ux-website-design-principles-disabled ~/.claude/skills/ux-website-design-principles
```

- [ ] **Step 2: Re-run all three scenarios WITH the skill loaded**

Use the same prompts from Task 4, Steps 2-4. This time the skill should be in context.

- [ ] **Step 3: Compare results**

For each scenario, compare baseline vs with-skill:
- Did the skill fill the gaps identified in the baseline?
- Did the agent cite specific research/numbers from the skill?
- Did the agent correctly load the appropriate reference file?
- Were there any conflicting recommendations with `modern-web-designer` or `frontend-design`?

- [ ] **Step 4: Document GREEN results**

Record pass/fail for each gap identified in baseline. If all major gaps are filled, GREEN passes.

---

### Task 6: REFACTOR Phase — Close Loopholes

- [ ] **Step 1: Identify any remaining gaps from GREEN testing**

Review the GREEN results. Look for:
- Principles that were cited but misapplied
- Reference content that was loaded but key details missed
- New rationalizations or workarounds Claude used
- Any conflicting advice between this skill and existing skills

- [ ] **Step 2: Fix identified issues in the skill files**

Edit the specific file(s) to address gaps. Common fixes:
- Add explicit counters to missed principles
- Clarify ambiguous rules
- Strengthen cross-references to prevent skill conflicts
- Adjust word counts if critical information was cut

- [ ] **Step 3: Re-run the most problematic scenario to verify fix**

Pick the scenario that had the most gaps in GREEN and re-run it.

- [ ] **Step 4: Final commit**

```bash
git add ~/.claude/skills/ux-website-design-principles/
git commit -m "refactor: close loopholes in UX skill after testing"
```

---

### Task 7: Final Verification and Cleanup

- [ ] **Step 1: Verify all three files exist and have correct word counts**

```bash
wc -w ~/.claude/skills/ux-website-design-principles/SKILL.md
wc -w ~/.claude/skills/ux-website-design-principles/references/psychology-and-heuristics.md
wc -w ~/.claude/skills/ux-website-design-principles/references/patterns-and-implementation.md
```

Expected: SKILL.md ~450-520 words, each reference ~600-700 words.

- [ ] **Step 2: Verify no conflicts with existing skills**

Read `~/.claude/skills/modern-web-designer/SKILL.md` and confirm:
- No duplicate rules (typography, color, animation, SEO guidance)
- No contradicting advice (animation philosophy, layout rules)
- Cross-references point to correct file paths

- [ ] **Step 3: Verify fact-checked statistics**

Confirm these exact numbers appear correctly in the skill files:
- ~70% cart abandonment (Baymard) — NOT "70% of all users"
- 26% of US adults have disability (CDC)
- 95%+ websites have failures (WebAIM) — NOT "3% accessible"
- 50ms first impression (Lindgaard 2006)
- 20-28% of page text read (NNGroup)
- 44px touch targets, 8px spacing
- 4±1 chunks (Cowan 2001)

- [ ] **Step 4: Final commit with all changes**

```bash
git add ~/.claude/skills/ux-website-design-principles/
git commit -m "feat: UX website design principles skill — complete with references, tested and verified"
```
