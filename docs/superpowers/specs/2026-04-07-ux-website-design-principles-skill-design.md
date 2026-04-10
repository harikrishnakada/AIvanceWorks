# Spec: UX Website Design Principles Skill

Created: 2026-04-07

## Overview

A Claude Code skill that encodes senior UX designer expertise for building marketing websites. It provides the psychological "WHY" layer — user behavior research, cognitive principles, and evidence-based patterns — that sits above the existing `modern-web-designer` (WHAT to build) and `frontend-design` (HOW it should look) skills.

Based on the Framer blog article "7 UX-focused website design principles" (Aug 2025, James Pastan), cross-referenced and expanded with research from Nielsen Norman Group, Laws of UX, Baymard Institute, Stanford Web Credibility Project, and foundational cognitive psychology studies.

## Skill Architecture

```
~/.claude/skills/ux-website-design-principles/
  SKILL.md                                    (~500 words)
  references/
    psychology-and-heuristics.md              (~600-700 words)
    patterns-and-implementation.md            (~600-700 words)
```

### Relationship to Existing Skills

```
[ux-website-design-principles]  → WHY (user psychology, heuristics, research-backed decisions)
         ↓
[modern-web-designer]           → WHAT (design tokens, conversion patterns, SEO/AEO/GEO)
[frontend-design]               → HOW (creative aesthetics, anti-AI-slop, visual identity)
```

**Boundary rules:**
- The UX skill NEVER covers: typography selection, color palettes, animation implementation, SEO/AEO/GEO, design tokens, structured data, framework selection
- The UX skill ALWAYS defers to `modern-web-designer` for implementation patterns and `frontend-design` for aesthetic direction
- The UX skill OWNS exclusively: user psychology, cognitive load management, information architecture decisions, form UX, trust architecture, navigation heuristics, scanning pattern optimization, responsive UX patterns, microcopy rules, usability validation

## SKILL.md Design (~500 words)

### Frontmatter

```yaml
name: ux-website-design-principles
description: Use when building, reviewing, or planning marketing websites, landing pages, or conversion-focused web experiences. Triggers on layout decisions, navigation structure, form design, content hierarchy, trust signals, CTA placement, or any user experience concern for web pages.
```

### Content Structure

**1. Overview (2 sentences)**
Encodes senior UX designer expertise grounded in research from NNGroup, Baymard Institute, and cognitive psychology. Provides the decision-making framework (WHY) that informs which patterns from `modern-web-designer` (WHAT) and `frontend-design` (HOW) to apply.

**2. When to Use / When NOT to Use**

Use when:
- Planning page layout, content hierarchy, or section ordering
- Building forms, navigation, or trust sections
- Making CTA placement, sizing, or copy decisions
- Reviewing a page for usability before delivery
- Deciding between mobile-first vs desktop-first approach

Do NOT use for (defer to existing skills):
- Typography, color, animation implementation → `modern-web-designer`
- Creative direction, visual identity → `frontend-design`
- SEO meta tags, schema markup, AEO/GEO → `modern-web-designer`

**3. The 7 Core Principles**

Each principle: rule (1 line) + research-backed "why" (1 line) + key thresholds (1-2 lines)

**P1: Visual Hierarchy & Cognitive Load**
- One primary message and one primary CTA per viewport-height section
- Users read only 20-28% of page text (NNGroup eye-tracking). Every element competes for limited working memory (~4 chunks, Cowan 2001)
- Eliminate extraneous load: remove anything that doesn't serve the user's decision. Manage intrinsic load via progressive disclosure

**P2: Performance Is UX**
- Interactions under 400ms keep users in flow (Doherty Threshold). Page load under 3 seconds or majority abandon (Google)
- Skeleton screens for loads under 3s. Progress copy for 3-10s. Progress bar for 10s+
- Perceived speed matters as much as actual speed

**P3: Responsive UX by Intent**
- Design for user intent per device, not just screen size
- Mobile first screen: value prop + CTA + one trust signal, no scrolling required
- Touch targets 44px minimum, 8px spacing. CTAs in thumb zone (center-to-lower screen)

**P4: Accessible Design First**
- 26% of US adults have a disability (CDC). Over 95% of websites have detectable accessibility failures (WebAIM 2024)
- Build core experience fully accessible, then layer enhancements. Never break functional accessibility
- 4.5:1 contrast, 44px touch targets, keyboard navigable, visible focus indicators, proper heading hierarchy

**P5: Navigation & Information Architecture**
- Follow conventions (Jakob's Law). 5-7 primary nav items max, ordered by user priority
- Every label must clearly predict destination content (information scent). Users abandon within 2-3 clicks if scent fails
- Mobile: visible nav beats hamburger by 20-50%. Sticky bottom CTA aligns with thumb zone

**P6: Design Systems & Consistency**
- Inconsistent UI erodes trust. Same action = same styling site-wide (Nielsen H4)
- Button hierarchy (primary/secondary/tertiary), consistent spacing, standardized form patterns
- Von Restorff Effect: visually isolate the recommended option (highlighted tier gets 2-3x clicks)

**P7: Form Optimization & Friction Reduction**
- ~70% cart abandonment rate (Baymard). Every unnecessary field increases abandonment
- Single-column, labels above fields, inline validation on blur, never "Submit"
- Show all costs upfront (#1 abandonment driver is hidden fees). Multi-step for 7+ fields with progress bar

**4. Quick Reference: When to Load References**

| Building... | Load |
|---|---|
| Page layout, section ordering, content strategy | `references/psychology-and-heuristics.md` |
| Forms, navigation, trust sections, CTAs, responsive layout | `references/patterns-and-implementation.md` |
| Reviewing completed work | Both references → validation checklists |

**5. Cross-Reference Protocol**
- For conversion pattern implementation → `modern-web-designer > references/conversion-patterns.md`
- For visual treatment/aesthetics → `frontend-design`
- For accessibility implementation → `modern-web-designer > references/performance-seo.md` WCAG checklist
- For animation decisions → `modern-web-designer > references/animations.md`

## Reference: psychology-and-heuristics.md (~600-700 words)

Loaded when planning layout, prioritizing content, or making strategic UX decisions.

### Content

**1. Laws of UX Quick Reference Table**

| Law | Rule | Key Number | Common Violation |
|---|---|---|---|
| Hick's Law | Limit choices at each decision point | 1 primary CTA per viewport; 3-4 pricing tiers max | 5 equally weighted CTAs competing in hero |
| Fitts's Law | Larger, closer targets are faster to acquire | 44px min touch target; 8px spacing | Small text links as primary conversion action |
| Miller's Law | Chunk information into groups | 3-5 items per group (Cowan: 4±1) | Flat list of 12+ features with no grouping |
| Jakob's Law | Users expect your site to work like others | Follow standard nav patterns | Creative nav that requires learning |
| Aesthetic-Usability Effect | Beautiful = perceived as more usable | 50ms first impression (Lindgaard 2006) | Stunning but broken — users can't find info |
| Doherty Threshold | Keep interactions under 400ms | <100ms feels instant; <3s page load | Heavy JS frameworks adding 2-5MB |
| Von Restorff Effect | The different item gets remembered | Highlighted tier gets 2-3x clicks | All pricing tiers look identical |
| Serial Position Effect | First and last items recalled best | Strongest value first, CTA last in nav | Best feature buried in position 3 of 6 |
| Zeigarnik Effect | Incomplete tasks stay in mind | Progress bars on multi-step forms | Long form with no progress indication |
| Proximity & Common Region | Close = grouped; shared boundary = grouped | Internal spacing ~1/3 of external | Labels equidistant between two fields |

**2. Cognitive Load Management**

Three types:
- **Extraneous** (bad) — imposed by poor design. Eliminate aggressively: visual clutter, inconsistent patterns, competing CTAs, autoplay media
- **Intrinsic** (inherent) — complexity of your offering. Manage via progressive disclosure: show essentials first, reveal detail on demand
- **Germane** (good) — effort spent understanding your value. Maximize via clear comparisons, visual hierarchy, analogies

Rule: One primary action per viewport section. Audit every element: "Does removing this make the primary message harder to understand?" If no, remove it.

**3. Scanning Patterns — When to Design for Which**

| Pattern | Applies When | Design Implication |
|---|---|---|
| Z-pattern | Visual/sparse marketing pages | Logo top-left, nav top-right, CTA bottom-right of hero. Alternate image/text blocks L-R |
| Layer-cake | Content-heavy pages with headings | Every heading must be descriptive and standalone. Front-load first 2 words |
| Spotted | Users seeking specific info (price, phone) | Make key data visually distinct: different size, weight, or color |
| F-pattern | Text-heavy pages (SYMPTOM of poor hierarchy) | PREVENT by adding subheadings, bullets, bold phrases every 3-4 paragraphs |
| Mobile linear | Small viewport forces serial scanning | Treat each screen-height as standalone communication with its own hook |

Front-load everything: first 2 words of every heading and paragraph carry disproportionate weight.

**4. Peak-End Rule**

Users judge experiences by the peak moment and the ending (Kahneman 1993):
- Design ONE peak moment per journey — concentrate your best proof point (ROI number, case study result, demo) with premium visual treatment
- Invest in the ending — thank-you/confirmation pages should get homepage-level design care: personalized confirmation, clear next step, value-add resource
- Avoid negative peaks — one broken form or intrusive popup dominates memory of the entire experience, undoing ten good moments

**5. Research-Backed Content Section Order for Marketing Pages**

Hero (value prop + CTA) → Social proof/logos → Problem statement → Solution overview → Features/differentiators → Case studies/results → Testimonials → Process/how it works → Pricing → FAQ → Final CTA

Place social proof immediately after hero (Stanford halo effect research). Every section should be independently compelling with its own hook — 50-60% of visitors reach mid-page on desktop.

**6. Debunked Myths**

- "The fold is dead" → FALSE. 57% desktop / 68% mobile viewing time is above the fold. It's the attention peak, not a cliff
- "3-click rule" → FALSE (debunked by Jared Spool, UIE 2003). Information scent per click matters, not click count
- "Mobile users want less content" → FALSE (debunked by Google 2015+). Same content, prioritized for serial consumption
- "Nobody scrolls" → FALSE (debunked by Chartbeat 2013). Users scroll, but attention decays — content order still matters
- "Hamburger menus are bad" → OVERSIMPLIFIED. Fine for secondary nav. Problem is hiding primary CTAs behind them
- "F-pattern is a design goal" → FALSE. It's a symptom of poor hierarchy. Well-designed pages break the F-pattern

## Reference: patterns-and-implementation.md (~600-700 words)

Loaded when actively building forms, navigation, trust sections, or responsive layouts.

### Content

**1. Form Optimization**

**Layout:**
- Single-column always (except semantically paired fields: city/state/zip, first/last name)
- Labels above fields — fastest completion (~50ms fixation vs ~500ms for left-aligned, Penzo 2006)
- Never placeholder-only labels (NNGroup: actively harmful — disappears on input, low contrast, inaccessible)
- Floating labels acceptable only when vertical space is genuinely constrained; ensure floated state is 12px+ and 4.5:1 contrast

**Validation:**
- Inline validation on blur (not keypress) — 22% fewer errors, 42% faster completion (Wroblewski 2009)
- Show success confirmation (green check) for correct fields
- Error messages: inline below the field, red + icon + descriptive text (triple encoding)
- Errors must be specific and constructive: "Email must include @ symbol" not "Invalid input"
- Never blame the user. Never clear fields on error. Use `aria-invalid` + `aria-describedby`

**Friction reduction:**
- Audit every field: can it be removed, deferred, or auto-detected?
- Multi-step when 7+ fields. Progress bar mandatory. 3-4 steps max. Logical groupings per step
- Smart defaults: auto-detect country from IP, zip-first for US addresses, correct `autocomplete` attributes
- Mark optional fields as "optional" (users assume all fields are required by default)
- Zeigarnik Effect: once users complete Step 1, psychological tension motivates completion of remaining steps

**2. Trust Architecture**

**Above-the-fold trust order:**
1. Clear value proposition (parseable in under 5 seconds)
2. Social proof strip (4-6 recognizable client logos)
3. Primary CTA with reassurance microcopy ("No credit card required")
4. One key credibility indicator ("SOC 2 Certified" or "4.8/5 on G2")

**Social proof:**
- Testimonials: real name + photo + title + company + specific result ("Revenue increased 40%")
- Case studies: Problem → Solution → Quantified Result. B2B: case studies > testimonials > logos
- Star ratings with review counts — displaying reviews increases conversion by 270% (Spiegel Research Center, Northwestern), strongest effect for higher-priced items

**Trust signals:**
- 1-2 recognized trust badges near CTA (Norton, BBB), not buried in footer. More than 3-4 looks desperate
- Contact info: phone/email in header on every page (Stanford Credibility Project: "easy to contact" = trustworthy)
- Pricing transparency: show all costs upfront. Hidden fees are the #1 abandonment reason at ~48% (Baymard)
- Content credibility: named authors with bios/photos, publication dates, source citations

**3. Navigation & Information Architecture**

**Structure:**
- 5-7 primary nav items max. Standard labels: Services, About, Case Studies, Blog/Resources, Contact
- Order by user priority. Serial Position Effect: strongest page first, conversion CTA last
- Information scent: every label must clearly predict destination content. "Cloud Development Services" > "Our Solutions"
- Match site structure to user tasks, not org chart. Users think "I need help with X" not "show me your Cloud Division"

**Implementation:**
- Mega-menus for 5+ sub-items — 25% fewer navigation errors than standard dropdowns (NNGroup)
- Mobile: visible tab bar or priority+ pattern (show top 3-4 items) beats hamburger by 20-50% in engagement
- Always pair hamburger with a visible CTA button in header
- Sticky bottom CTA on mobile — aligns with thumb zone, outperforms header-only CTA consistently

**4. Responsive UX**

**Mobile first screen:** Value prop + CTA + one trust signal, all visible without scrolling
- Touch targets: 44px minimum height, 8px spacing between targets (spacing matters more than size)
- Line-height 1.5+ on mobile to prevent mis-taps on inline text links
- Click-to-call prominent — 40%+ of B2B mobile lead conversions come from phone taps
- Simplify with accordions and "Read more" — don't just stack the desktop page in one column

**Scroll depth strategy:**
- Primary CTA above fold + secondary at ~50% page depth + final CTA at bottom
- Visual anchors (images, stat callouts, contrasting backgrounds) every 2-3 scroll heights to re-engage
- 50% mark catches the ~45% of users who won't reach the bottom

**5. Microcopy Rules**

**CTA buttons:**
- Never "Submit" — worst-performing label across all studies (HubSpot, 40,000 landing pages)
- Use specific action verbs: Get, Start, Book, Download, Claim. 2-5 words
- First-person framing as starting hypothesis: "Get my free quote" > "Get your free quote"
- Friction reducers placed near (not in) the button: "No credit card required", "Cancel anytime", "Free 14-day trial"

**Error messages:**
- Neutral or system-blame framing: "We couldn't recognize that format" not "You entered invalid data"
- Under 15 words. Sentence case. Include expected format ("MM/DD/YYYY")
- Humor OK for 404 pages, never for form errors

**Helper text:**
- Explain "why" for sensitive fields: "Phone number — for delivery updates only"
- Show format requirements before typing, not in error messages after
- Privacy reassurance near email/phone: "We'll never share your email"

**Loading states:**
- 0-1s: no feedback needed
- 1-3s: skeleton screen (not spinner)
- 3-10s: progress copy ("Saving your changes...")
- 10s+: progress bar with percentage or step count

## Fact-Check Notes

Statistics used in the skill, verified status:

| Claim | Verdict | Source |
|---|---|---|
| ~70% cart abandonment | Correct (69.99% aggregate) | Baymard Institute meta-analysis of 49 studies |
| 64% mobile web traffic | Approximately correct globally; US is closer to 55-58% | StatCounter |
| 26% of US adults have disability | Correct | CDC |
| "Only 3% of web is accessible" | Misleading — NOT USED | Replaced with "95%+ have failures" (WebAIM Million 2024) |
| WebP 25-35% smaller than JPEG | Correct (conservative) | Google WebP documentation |
| 50ms first impression | Correct | Lindgaard et al., 2006 |
| Users read 20-28% of page text | Correct | NNGroup eye-tracking studies |

## Implementation Notes

- Skill will be installed at `~/.claude/skills/ux-website-design-principles/`
- Per the writing-skills process, we will stress-test with subagent pressure scenarios before deployment
- The skill must be tested for: no redundancy with existing skills, no conflicting rules, no misleading stats, correct application under implementation pressure
