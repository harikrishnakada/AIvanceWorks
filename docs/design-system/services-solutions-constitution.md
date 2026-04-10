# Services & Solutions Design Constitution

> **Executive summary.** This document is the single source of truth for how every services and solutions page on the AIvanceWorks website is designed and built. It codifies a **shared skeleton + two template variants** approach: a unified component library and design language, expressed through two page templates (ServiceTemplate and SolutionTemplate) whose internal composition is tuned **per page** to match the buyer journey. Brand consistency is enforced through theme tokens, section rhythm, and content integrity rules. Differentiation between industries, services, and offerings happens through **content, imagery, iconography, and one signature section per page** — never through color, palette, or layout chaos. This is a living document: any deviation must be recorded back into it.

**Version:** 1.3
**Last updated:** 2026-04-10
**Status:** Canonical. Applies to every services and solutions page built after this date.
**Pilot scope:** `/services/product-discovery`, `/services/mvp-development`, `/solutions/patient-portals`, `/solutions/insurance-portals`, `/solutions/e-commerce-websites`.

---

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
14. [Prompt templates](#14-prompt-templates)
15. [Reference — pilot pages and their compositions](#15-reference--pilot-pages-and-their-compositions)
16. [Open questions and deferred decisions](#16-open-questions-and-deferred-decisions)
17. [Changelog](#17-changelog)

---

## 1. Purpose and scope

### What this document is

The **Services & Solutions Design Constitution** is a long-lived design-system charter that governs every `/services/*` and `/solutions/*` page on the AIvanceWorks website. It exists so that:

- No future contributor (human or Claude session) has to re-hold the strategic conversation that produced this system.
- Every new service or solution page is produced through a deliberate, repeatable workflow that takes the buyer journey seriously.
- The library of components, tones, and patterns stays coherent as it scales from four pilot pages to thirty or more.

### What this document is **not**

- It is **not** the pilot implementation plan. A separate spec under `docs/superpowers/specs/` tracks the pilot build. This constitution is the standard the pilot implements, and the standard every post-pilot page must meet.
- It is **not** a style guide for the whole website. It scopes to services and solutions pages only. Homepage, blog, about, and case-study detail pages have their own standards.
- It is **not** a CMS schema for the Sanity dataset. Data schemas here are TypeScript shapes for the flat-file `src/data/*` structure the pilot uses. If Sanity/Payload adoption changes the schema, that change is recorded here via the deviation protocol.
- It is **not** a rigid template. The whole point of Decision 7 is that pages compose sections differently to match their audience. Archetypes are starting points, not straitjackets.

### Who this document is for

- **Developers and designers** building new pages, refactoring existing components, or adding to the shared library.
- **Future Claude sessions** told "build me a new service page for X" or "add a solutions page for Y." The prompt templates in Section 14 are written so that a fresh session can read this file and produce a correct page with no extra context.
- **Reviewers** gating pull requests against the hard rules (theming, content integrity, section rhythm).

### How to deviate

Every rule here is either **hard** (non-negotiable, violations block merge) or **principled** (deviation allowed when justified). The deviation protocol is in [Section 12](#12-how-to-deviate-from-this-document). The short version: when you deviate, update **this file** with the rationale so the deviation becomes canonical instead of drift.

---

## 2. Core design philosophy

Eight principles. Each has a **what** and a **why**. Understand the why or you will accidentally break the system.

### 2.1 Shared skeleton, two template variants

**What.** One component library in `components/shared/`. Two page templates: `ServiceTemplate` and `SolutionTemplate`. Both templates draw from the same component library but allow different section compositions because services and solutions serve different audiences.

**Why.** We considered three directions:

- **Option A — Fully uniform template.** Every service and solution page runs the exact same 8 sections in the exact same order. Rejected because it flattens two different buyer journeys into one experience, which serves the template rather than the buyer.
- **Option B — Shared library + two variants + per-page composition.** Single brand palette, single component library, but each page picks which sections to use and in what order. **Chosen.** This is the approach used by Thoughtworks, EPAM, Accenture, and Deloitte Digital, for the same reason.
- **Option C — Fully bespoke per page.** Every page designed from scratch. Rejected because it's expensive, drifts quickly, and makes pattern reuse impossible.

Option B is the middle ground. We get the cost savings of a shared library and the coherence of a shared design language, without sacrificing the storytelling each audience deserves.

### 2.2 Per-page editorial composition, not rigid ordering

**What.** Every page picks which sections it uses and in what order based on the buyer it's addressing. The section order is an **editorial decision**, not a mechanical one.

**Why.** Most traffic to these pages is long-tail Google search. Visitors land on one page, scroll it, and either convert or bounce. Cross-page consistency of section order has almost no benefit for a visitor who only sees one page, but optimal per-page storytelling has massive benefit. A healthcare CIO (risk-averse, long attention span, wants compliance early) and a startup founder (outcome-focused, short attention span, wants speed and cost) should not be forced into the same narrative order.

Structural anchors are fixed (Hero first, CTA last, FAQ near the end). Everything in between is composed to fit the audience.

### 2.3 Services and solutions serve different audiences

**What.** Two template variants exist because two distinct buyer personas exist.

| | Services page | Solutions page |
|---|---|---|
| **Buyer** | CTO, VP Eng, Tech Lead | VP Operations, Head of Digital, Business Owner |
| **Query** | "RAG framework consulting," "cloud migration experts" | "Reduce claims processing time," "HIPAA patient portal" |
| **Emotional driver** | Trust in technical competence | Risk reduction, outcome certainty |
| **Decision inputs** | Stack depth, engagement model, pricing clarity, process discipline | Industry metrics, compliance, subsystem integrations, case studies |
| **Shopper type** | Capability shopper | Outcome shopper |

This is why a services page leans on `TechStackBlock`, `EngagementModels`, and `ProcessTimeline`, while a solutions page leans on `IntegrationsPanel`, `ComplianceDeepDive`, and `CaseStudySpotlight`. Same library, different section menus.

### 2.4 Content, imagery, icons, and signature sections are the differentiation levers

**What.** Patient Portals does not look different from MVP Development because of color or layout. It looks different because:

- **Content** is written for a risk-averse healthcare administrator vs. a speed-obsessed founder.
- **Imagery** is clinical stock photography (color-graded to the brand palette) vs. whiteboard-and-roadmap scenes (also color-graded to the brand palette).
- **Iconography** pulls clinical Lucide icons (HeartPulse, Stethoscope, FileText) vs. developer icons (Rocket, GitBranch, Zap) — same library, different selections.
- **The signature section** for Patient Portals is a four-tier architecture map; MVP Development is a dual-track roadmap. One per page, single-use, unmistakable.

Color is not a differentiation lever. See the next principle.

### 2.5 Single brand palette

**What.** One palette. The existing blue theme (`src/styles/themes/blue.css`) is the brand. There is no "healthcare green" or "FinTech teal" variant of the services pages.

**Why.** Palette variation between pages creates visual chaos and makes navigation feel fragmented. The theme token system (`data-theme="blue" | "purple"`) exists so the **entire site** can be re-skinned in one switch, not so individual pages can diverge. Industry distinction is carried by the four levers in 2.4, not by hue.

Exploration of per-industry palettes was explicitly rejected during the design conversation that produced this constitution.

### 2.6 Theme-token discipline

**What.** All components reference theme tokens only. No raw Tailwind color shades, no hex values, no RGB literals.

**Why.** The testable guarantee: flipping `<html data-theme="blue">` to `<html data-theme="purple">` must re-skin every page with zero component edits. If any single `bg-gray-50`, `text-blue-600`, or `#3b82f6` leaks into a component, the guarantee breaks and the theme token system stops being useful. See [Section 3](#3-theming-rules-hard) for the enforcement rules and code examples.

### 2.7 Audience-driven storytelling

**What.** The order of sections on a page is decided by three heuristics:

1. **Lead with what the buyer searched for.** Put that section right after the hero.
2. **Place the signature section at the natural narrative break.** Usually middle; near top for skeptical audiences; near bottom for persuasion-focused audiences.
3. **Proof before process** for outcome-focused buyers; **process before proof** for risk-averse buyers.

**Why.** These are not rules. They are guides for editorial judgment. The archetypes in [Section 6](#6-page-template-approach-and-archetypes) encode these heuristics as starting recipes, but every page is free to deviate with justification.

### 2.8 Content integrity over marketing velocity

**What.** No fabricated statistics. No invented case studies. No unauthorized logos. Every public claim is verified, ranged-with-source, or omitted. See [Section 9](#9-content-integrity-rules-hard).

**Why.** AIvanceWorks sells trust to risk-averse buyers (especially in regulated industries). A single fabricated stat discovered by a prospective client destroys years of trust-building. The `_unverified` list and human review gate exist so that marketing velocity can never outrun reality.

---

## 3. Theming rules (hard)

These rules are **hard**: violations block merge. They exist to preserve the testable guarantee in principle 2.6.

### 3.1 The token system

Theme tokens are defined in `src/styles/themes/<name>.css` as CSS custom properties. They are bridged into Tailwind utilities through `src/styles/globals.css` via the `@theme` block. The `data-theme="<name>"` attribute on `<html>` selects which theme's custom-property values are active at runtime.

**The chain of truth:**

```
themes/blue.css      →   globals.css @theme   →   Tailwind utilities   →   Your component
(raw values)             (token bridge)           (bg-brand-600, etc.)    (markup)
```

Example: `--brand-600: #2563eb;` in `blue.css` becomes `--color-brand-600: var(--brand-600);` in `globals.css`, which Tailwind exposes as `bg-brand-600`, `text-brand-600`, `border-brand-600`, `ring-brand-600`, etc.

### 3.2 Allowed tokens

Components may reference **only** these token-backed Tailwind classes for color:

**Brand and accent palettes (scale 50–900 / 50–700):**

```
bg-brand-50  bg-brand-100  bg-brand-200  bg-brand-300  bg-brand-400
bg-brand-500 bg-brand-600  bg-brand-700  bg-brand-800  bg-brand-900
text-brand-* border-brand-* ring-brand-* from-brand-* via-brand-* to-brand-*

bg-accent-50  bg-accent-100  bg-accent-200  bg-accent-300
bg-accent-400 bg-accent-500  bg-accent-700
text-accent-* border-accent-* from-accent-* to-accent-*
```

**Surface tokens:**

```
bg-surface-dark       (deep background for dark sections)
bg-surface            (primary surface)
bg-surface-elevated   (slight lift on dark backgrounds)
bg-surface-light      (cool near-white for alternation)
bg-surface-warm       (warmer near-white for alternation)
bg-surface-white      (pure white sections)

from-surface-dark-from  via-surface-dark-via  to-surface-dark-to
(used for the canonical dark gradient)
```

**Text role tokens:**

```
text-text-light        (for dark backgrounds)
text-text-heading      (primary heading color on light backgrounds)
text-text-body         (body prose on light backgrounds)
text-text-muted        (secondary body / metadata)
text-text-subtle       (faint labels, captions)
text-text-secondary    (alternate heading shade)
```

**Border tokens:**

```
border-border-dark     (dark backgrounds)
border-border-light    (light backgrounds, default card borders)
border-border-hover    (hover state)
border-border-subtle   (translucent, for glass surfaces)
```

**Glass tokens** (`bg-glass-bg`, `border-glass-border`, etc.) for backdrop-blur surfaces.

**Shadows and radius:** `shadow-card`, `shadow-glow`, `shadow-brand-panel`, `rounded-sm/md/lg` — all token-backed.

### 3.3 FORBIDDEN in shared and signature components

The following are **banned** from any file under `components/shared/`, `components/signature/`, and any page under `app/services/*` or `app/solutions/*`:

**Raw Tailwind color shades.** Any class of the form `<utility>-<color>-<shade>` where `<color>` is one of `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`. Examples:

```
bg-gray-50        text-gray-900       border-gray-200
bg-blue-50        text-blue-600       text-blue-100
bg-slate-100      text-slate-500      border-slate-200
from-blue-600     to-indigo-700       via-purple-500
```

**Hex values in JSX.** Any string like `#3b82f6`, `#ffffff`, `rgb(59, 130, 246)`, `hsl(221, 83%, 53%)` appearing inline in a component is forbidden. If a one-off value is genuinely needed (e.g., a branded icon SVG), it lives in the token file, not the component.

**Inline `style={{ color: '...' }}`** using literal color values. Use class names that reference tokens.

**Dark-mode forks via `.dark:` prefixes.** The theme system does not need `dark:` classes because swapping the theme is a runtime data-attribute change, not a class toggle. If a component wants to look different on a dark section, it accepts a `tone` prop and switches token references internally — not via dark-mode utility classes.

### 3.4 Side-by-side examples

**FORBIDDEN** (current `SolutionBenefits.tsx`):

```tsx
<section className="py-8 lg:py-12 bg-gray-50">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
  <p className="text-lg text-gray-600">{subtitle}</p>
  <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-300">
    <div className="w-12 h-12 rounded-xl bg-blue-50">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
    <span className="text-2xl font-bold text-blue-600">{benefit.stat}</span>
  </div>
</section>
```

**REQUIRED** (refactored using tokens):

```tsx
<Section tone="warm">
  <Container>
    <h2 className="text-3xl font-bold text-text-heading mb-4">{title}</h2>
    <p className="text-lg text-text-body">{subtitle}</p>
    <div className="bg-surface-white rounded-xl border border-border-light hover:border-brand-300 shadow-card-sm">
      <div className="w-12 h-12 rounded-xl bg-brand-50">
        <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-text-heading">{benefit.title}</h3>
      <span className="text-2xl font-bold text-brand-600">{benefit.stat}</span>
    </div>
  </Container>
</Section>
```

**FORBIDDEN** (current `SolutionCTA.tsx`):

```tsx
<section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
  <p className="text-lg text-blue-100">{description}</p>
  <Button className="bg-white text-blue-700 hover:bg-gray-100">...</Button>
</section>
```

**REQUIRED** (refactored):

```tsx
<Section tone="accent">
  <Container>
    <p className="text-lg text-text-light/90">{description}</p>
    <Button className="bg-surface-white text-brand-700 hover:bg-surface-warm">...</Button>
  </Container>
</Section>
```

**FORBIDDEN** (current `SolutionHero.tsx`):

```tsx
<nav className="bg-gray-50 border-b border-gray-200">...</nav>
<section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
  <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 text-blue-300">
    <Link href={badgeHref} className="hover:text-blue-200">{badge}</Link>
  </div>
  <div className="bg-gradient-to-br from-blue-500 to-indigo-600">...</div>
</section>
```

**REQUIRED:**

```tsx
<Breadcrumbs tone="light" />
<Section tone="dark">
  <Container>
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 text-brand-300">
      <Link href={badgeHref} className="hover:text-brand-200">{badge}</Link>
    </div>
    <div className="bg-gradient-to-br from-brand-500 to-accent-600">...</div>
  </Container>
</Section>
```

### 3.5 The testable guarantee

For any component, the following must hold:

> Switching the root HTML element from `data-theme="blue"` to `data-theme="purple"` must re-skin the component with zero edits to the component's source. If it doesn't, the component is broken.

This is a PR-review checklist item and a pre-launch smoke test. It is the single most important invariant in this document.

**How to test it:** open the page in dev mode, run the following in the browser console, and confirm every surface repaints:

```js
document.documentElement.setAttribute('data-theme', 'purple');
// Inspect. All blues become purples. No grays remain stuck. No hardcoded colors.
document.documentElement.setAttribute('data-theme', 'blue');
```

### 3.6 Where existing components violate these rules

The following components in `components/solutions/` violate the theming rules and **must be refactored or deleted** as part of the pilot migration:

| Component | Violation | Pilot action |
|---|---|---|
| `SolutionHero.tsx` | `bg-gray-50`, `from-gray-900 via-gray-800`, `bg-blue-500/20`, `text-blue-300`, `from-blue-500 to-indigo-600` | Delete. Replaced by shared `Hero` component using tokens. |
| `SolutionBenefits.tsx` | `bg-gray-50`, `text-gray-900`, `text-gray-600`, `bg-white`, `border-gray-200`, `bg-blue-50`, `text-blue-600` | Delete. Replaced by `BenefitsGrid`. |
| `SolutionFAQ.tsx` | `bg-white`, `text-gray-900`, `text-gray-600`, `bg-gray-50`, `hover:bg-gray-100` | Delete. Replaced by shared `FAQ`. |
| `SolutionCTA.tsx` | `from-blue-600 to-indigo-700`, `text-blue-100`, `text-blue-700`, `hover:bg-gray-100` | Delete. Replaced by `CTABlock` using `tone="accent"`. |
| `SolutionProcess.tsx` | (assumed similar) | Delete. Replaced by `ProcessTimeline`. |
| `SolutionTechStack.tsx` | (assumed similar) | Delete. Replaced by `TechStackBlock`. |
| `SolutionFeatures.tsx` | (assumed similar) | Delete. Replaced by `FeatureGrid`. |
| `SolutionRelated.tsx` | (assumed similar) | Delete. Not used in pilot; revisit post-pilot. |
| `unique/ComplianceShowcase.tsx` | Already partly token-compliant (uses `surface-dark-*`), but per-page specificity moves to `components/signature/`. | Fold its pattern into the new shared `ComplianceDeepDive` and a per-page `ComplianceShowcase` in `components/signature/` where needed. |
| `unique/PortalTypesComparison.tsx` | (assumed similar) | Retire — content moves into `FeatureGrid` or a signature diagram. |
| `unique/AiPoweredFeatures.tsx` | (assumed similar) | Retire — content moves into `FeatureGrid`. |

All of these must be gone by the end of the pilot migration. See [Section 15](#15-reference--pilot-pages-and-their-compositions) for the refactor sequence.

---

## 4. Section rhythm

The whole visual pacing of a page is controlled by four **tones**. Each tone is a semantic category, not a color. Each tone maps to token-backed Tailwind classes inside the `Section` primitive, so individual consumers never touch color directly.

### 4.1 The four tones

**`dark`** — moments of emphasis.

- Background: `bg-surface-dark` or, for hero and signature sections, the canonical gradient `bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to`.
- Text: `text-text-light` for both headings and body.
- Visual effects: subtle grid overlay, brand glow, optional radial gradients. Reserved for the Hero and the signature section — sections where the page says "look at this."
- Cards on dark sections: use `bg-glass-bg` with `border-glass-border` for glassy translucency, or `bg-surface-elevated` for a solid elevated card.

**`light`** — content-heavy, scannable sections.

- Background: `bg-surface-white`.
- Text: `text-text-heading` for headings, `text-text-body` for prose, `text-text-muted` for metadata.
- Visual effects: none. Light sections should feel crisp and readable.
- Cards: `bg-surface-white` with `border-border-light` and `shadow-card-sm` or `shadow-card`.

**`warm`** — alternation from `light`, used for rhythm.

- Background: `bg-surface-warm` (a warmer near-white) or `bg-surface-light` (a cooler near-white — interchangeable depending on page tone).
- Text: same as `light` (`text-text-heading`, `text-text-body`).
- Visual effects: none.
- Cards: `bg-surface-white` to contrast against the warm background.

**`accent`** — final CTA only.

- Background: `bg-gradient-to-r from-brand-600 to-accent-500` (or `to-accent-600` if the accent scale calls for it).
- Text: `text-white` or `text-text-light`. Secondary text: `text-text-light/90` or `text-brand-50` for subtle contrast.
- Visual effects: optional subtle radial highlight. Keep it restrained — the bold gradient carries the weight.
- Buttons: inverted — white background with brand-colored text for the primary CTA.

### 4.2 Rhythm rules

These are **hard**:

1. **Never stack two `dark` sections adjacent.** A second dark section next to the first one kills the signature moment.
2. **Pages get a maximum of two `dark` sections.** Hero and signature. Sometimes just one if the signature can live on a light background.
3. **The final CTA is always `accent`.** No exceptions. This is the visual contract for "end of page, conversion opportunity."
4. **The first section (Hero) is almost always `dark`.** The only exception is a deliberately lightweight page where a light hero fits the brand voice better, which requires deviation documentation.
5. **No more than two adjacent `light` or `warm` sections** without an alternation. A long run of white sections creates scroll fatigue.

### 4.3 Example rhythms

**6-section page (minimal):**

```
dark  →  light  →  warm  →  dark  →  light  →  accent
Hero     Metrics   Features Signature Benefits  CTA
```

**8-section page (typical services):**

```
dark  →  light  →  warm  →  dark  →  light  →  warm  →  light  →  accent
Hero     Metrics   Method    Signature Process   Engage    FAQ       CTA
```

**10-section page (regulated solution):**

```
dark  →  light  →  warm  →  dark  →  warm  →  light  →  warm  →  light  →  warm  →  accent
Hero     Metrics   Features  Signature Comply   Benefit   Integr   Process   FAQ       CTA
```

Note the alternation. No adjacent darks. CTA is always accent. Hero is always dark.

### 4.4 When signature is not dark

Occasionally a signature section works better on a `light` or `warm` background — for example, a comparison chart that needs high-contrast bars against pure white. This is allowed, but:

- The signature section is the **only** section permitted to break the default dark-for-signature convention.
- When the signature is light, the page may still have a second dark section elsewhere (typically for a dramatic mid-page quote or a full-bleed image moment), but still not more than two total.
- The deviation must be noted in the page's data file comment block: `// Deviation: signature tone = light (see constitution §4.4)`.

---

## 5. Shared component library

Location: `aivanceworks-website/src/components/shared/`.

Structure:

```
components/shared/
├── primitives/
│   ├── Section.tsx
│   ├── Container.tsx
│   ├── Badge.tsx            (re-export from ui/ if shadcn)
│   ├── Button.tsx           (re-export from ui/)
│   ├── Card.tsx             (re-export from ui/)
│   ├── IconTile.tsx
│   ├── StatBlock.tsx
│   ├── CheckList.tsx
│   ├── ChipRow.tsx
│   ├── StepBadge.tsx
│   └── MetricsCard.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Breadcrumbs.tsx
│   ├── MetricsStrip.tsx
│   ├── FeatureGrid.tsx
│   ├── BenefitsGrid.tsx
│   ├── ProcessTimeline.tsx
│   ├── TechStackBlock.tsx
│   ├── IntegrationsPanel.tsx
│   ├── CaseStudySpotlight.tsx
│   ├── TestimonialStrip.tsx
│   ├── LogoWall.tsx
│   ├── FAQ.tsx
│   ├── CTABlock.tsx
│   ├── DiscoveryMethodology.tsx
│   ├── EngagementModels.tsx
│   └── ComplianceDeepDive.tsx
└── index.ts                 (barrel)
```

### 5.1 Primitives (atoms)

Primitives are small, composable building blocks. They are **not** full sections — they are used inside sections to keep visual language consistent.

**`Section`** — the rhythm enforcer. Wraps a full page section. Accepts a `tone` prop that maps to token-backed classes and handles vertical rhythm. Every page section must be wrapped in `Section` so rhythm and theming are centrally enforced. See 5.3 for the reference implementation.

**`Container`** — responsive max-width wrapper. Always `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Sections pass their children through a `Container` to keep content aligned.

**`Badge`** — shadcn-based, but re-exported from `primitives/` with token-safe variants. Used for hero badges, category tags, pill labels.

**`Button`** — shadcn-based, re-exported. All variants (default, outline, ghost, secondary) use tokens. The `accent` variant — white bg / brand text — exists specifically for CTA buttons on `tone="accent"` sections.

**`Card`** — shadcn-based, re-exported. Card consumers must pick a background token (`bg-surface-white` or `bg-surface-elevated`) explicitly based on their parent section's tone.

**`IconTile`** — a circular or square colored tile with an icon inside. Props: `size: 'sm' | 'md' | 'lg'`, `variant: 'brand' | 'accent' | 'glass' | 'subtle'`. Used in feature grids, benefit cards, process timelines.

**`StatBlock`** — a vertically stacked big-number block: big value, label, description. Used inside `MetricsStrip`, `MetricsCard`, and occasionally in signature sections. Color is token-driven; numbers use `text-brand-600` on light backgrounds and `text-brand-300` on dark.

**`CheckList`** — an unordered list where every `<li>` has a leading green check icon (`CheckCircle2` from Lucide, color `text-brand-600` or `text-accent-500`). Used in capability lists, "what's included," engagement-tier inclusions.

**`ChipRow`** — a flex-wrap row of rounded pills, used for technology tags, integration names, capability tags. Accepts an array of strings.

**`StepBadge`** — a numbered circle (1, 2, 3, …) used at the start of a process step or timeline phase. Background uses `bg-brand-600`; text uses `text-white`.

**`MetricsCard`** — the right-column metrics display from the Hero. A stacked card containing 3–4 `StatBlock` entries. Takes `variant: 'glass' | 'solid'` to fit dark or light heroes.

### 5.2 Reusable sections

Each of these is a full page section. Each must be wrapped internally in `<Section tone={...}>` or accept a `tone` prop and pass it through.

**`Hero`** — the top-of-page attention grab.

- Default tone: `dark`.
- Left column: badge, headline, subhead, primary + secondary CTA.
- Right column: optional slot — `MetricsCard`, a contact form, a product screenshot, or custom content.
- Every services and solutions page starts with this.

**`Breadcrumbs`** — the "Home / Solutions / Patient Portals" trail. Always rendered immediately above the Hero, sharing the Hero's tone or using a `light` divider bar above a dark Hero.

**`MetricsStrip`** — a horizontal strip of 3 or 4 big numbers with short labels. Typically placed right after the Hero on `light` tone. Used to give scannable proof in 8 seconds.

**`FeatureGrid`** — 2, 3, or 4-column grid of icon cards. Each card has an `IconTile`, a title, and a short description. Used for service capabilities, solution modules, or feature lists.

**`BenefitsGrid`** — 2-column grid of benefit cards. Each card has an icon, title, longer description, and optional `StatBlock`. Used to communicate outcomes (not features) — ROI, savings, efficiency gains.

**`ProcessTimeline`** — a horizontal 5-step timeline. On desktop, steps sit side-by-side with connecting lines. On mobile, steps stack vertically. Each step has a `StepBadge`, title, description, duration, and deliverable. Used to show "how we work."

**`TechStackBlock`** — a two-column section with capabilities (left, bulleted `CheckList`) and technologies (right, `ChipRow`). Used on services pages where technical depth matters.

**`IntegrationsPanel`** — a grid showing which external systems the solution integrates with. Each integration is a card with a logo placeholder, a system name, the connection method (REST, SOAP, HL7 FHIR, SFTP, webhook, etc.), and a short capability note. **This is a new shared component** created in the pilot — it replaces the older `EHRIntegrationsList` and `CoreSystemIntegrations` ideas by serving both use cases through data shape alone.

**`CaseStudySpotlight`** — one featured case study: customer photo or logo, hero quote, 2–3 key metrics, link to full case study. Only rendered when real verified content exists. See [Section 9](#9-content-integrity-rules-hard) — no invented case studies.

**`TestimonialStrip`** — 2 or 3 customer quotes in a row, each with attribution (name, title, company). Cleaner and shorter than `CaseStudySpotlight`.

**`LogoWall`** — a grid of client, partner, or technology logos. Only rendered when permission exists for client logos. See content integrity.

**`FAQ`** — an accordion of question-answer pairs. Each `<details>` element is JSON-LD-schema-ready via a parallel `<script type="application/ld+json">` tag emitted by the page, not the component.

**`CTABlock`** — the final conversion section. Always `tone="accent"`. Title, description, primary CTA, optional secondary CTA.

**`DiscoveryMethodology`** — a card grid for methodology approaches (design sprints, lean canvas, jobs-to-be-done, etc.). **New component created in the pilot** for Product Discovery; reusable by future services like AI Strategy Consulting.

**`EngagementModels`** — pricing and engagement-tier cards. Each tier card shows a name, starting price, duration, what's included (`CheckList`), and a CTA. **New component created in the pilot** for Product Discovery and MVP Development; reusable by every services page that exposes engagement tiers.

**`ComplianceDeepDive`** — a detail panel showing technical safeguards (encryption, access control, audit), audit certifications (HIPAA, HITECH, SOC 2, etc.), and partner agreements (BAA, DPA). **New component created in the pilot** for Patient Portals; reusable by future healthcare and any compliance-sensitive solution.

### 5.3 The Section primitive as rhythm enforcer

The `Section` component is the single point of enforcement for tone and vertical rhythm. **Reference implementation:**

```tsx
// components/shared/primitives/Section.tsx
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionTone = 'dark' | 'light' | 'warm' | 'accent';

interface SectionProps {
  tone?: SectionTone;
  id?: string;
  className?: string;
  /** Optional grid overlay on dark sections */
  withGrid?: boolean;
  /** Adjust vertical padding; defaults to the rhythm scale */
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const TONE_STYLES: Record<SectionTone, string> = {
  dark:
    'bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light',
  light: 'bg-surface-white text-text-heading',
  warm: 'bg-surface-warm text-text-heading',
  accent: 'bg-gradient-to-r from-brand-600 to-accent-500 text-white',
};

const SIZE_STYLES: Record<NonNullable<SectionProps['size']>, string> = {
  sm: 'py-10 sm:py-12 lg:py-16',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-20 lg:py-24',
};

export const Section = ({
  tone = 'light',
  id,
  className,
  withGrid = false,
  size = 'lg',
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn(
        'relative overflow-hidden',
        TONE_STYLES[tone],
        SIZE_STYLES[size],
        className
      )}
    >
      {tone === 'dark' && withGrid && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};
```

**Key properties:**

- `tone` is the only API surface for color. Components that consume `Section` never pick their own background.
- `SIZE_STYLES` encodes the vertical rhythm scale. `lg` is the default for major sections; `md` for tighter sections like `MetricsStrip`; `sm` for compressed spacers.
- `withGrid` emits the brand grid overlay used on dark sections. It uses a CSS var (`--brand-grid`) from the theme file, not a hardcoded color.
- The `data-tone` attribute enables child components to conditionally restyle (e.g., a card that needs to go glassy on a dark parent).
- **Nothing color-related** is visible in JSX consumers of `Section`. That's the point.

**Usage:**

```tsx
// In a page or reusable section:
<Section tone="warm">
  <Container>
    <h2 className="text-3xl font-bold text-text-heading">Features</h2>
    <FeatureGrid features={features} />
  </Container>
</Section>
```

**Every page section is wrapped in `Section`.** There are no exceptions in shared components. Signature sections (which live in `components/signature/`) also use `Section` unless they have a specialized layout that requires a bare `<section>` — and even then, they respect tone tokens.

### 5.4 Where to put things

| You are adding… | Put it in… |
|---|---|
| A new small building block used by multiple sections | `components/shared/primitives/` |
| A new section that will be reused by 2+ pages | `components/shared/sections/` |
| A one-off section used by a single page (its signature) | `components/signature/` |
| A per-page layout template | `components/templates/` (new — see Section 6) |
| A page wrapper or layout | `app/services/[...]/layout.tsx` or the page file itself |

The bar for adding a new component to `components/shared/sections/` is: **at least two pilot or upcoming pages will use it.** Below that threshold, it lives in `components/signature/` until a second consumer materializes.

---

## 6. Page template approach and archetypes

### 6.1 Structural anchors

Three positions are fixed on every services and solutions page:

1. **`Hero` is always position 1.** Immediately after breadcrumbs. No exceptions.
2. **`CTA` is always last.** Always `tone="accent"`. No exceptions.
3. **`FAQ` is near the end**, typically the second-to-last section before the CTA. This matches universal web convention and is the shortest path to AEO optimization.

Everything between position 1 and the FAQ is composed per page.

### 6.2 Placement heuristics

Not rules. Guides. Use judgment.

**Heuristic 1 — Lead with what the buyer searched for.**
If the visitor landed on `/services/mvp-development` via the query "MVP development for startups in 12 weeks," the first non-hero section should validate that claim — a `MetricsStrip` showing "12 weeks · 12 demos · V1 in production" or a `FeatureGrid` showing the capabilities. The visitor has 8 seconds to see "yes, this page is about what I searched."

**Heuristic 2 — Place the signature section at the natural narrative break.**
- **Skeptical audience** (enterprise compliance officer, CIO): signature near the top, right after Metrics. They need to see the "big bet" visual early or they bounce.
- **Patient audience** (early-funnel exploratory researcher): signature in the middle, after context has been established.
- **Persuasion-focused audience** (outcome shopper comparing solutions): signature near the bottom, right before the FAQ, so it's the last visual before commitment.

**Heuristic 3 — Proof before process for outcome-focused buyers; process before proof for risk-averse buyers.**
- Outcome shoppers want `BenefitsGrid` and `CaseStudySpotlight` before `ProcessTimeline`. They want to know what they'll get before they care how it gets made.
- Risk-averse shoppers want `ProcessTimeline` and `ComplianceDeepDive` before `BenefitsGrid`. They need to believe the work is done safely before they care what it produces.

### 6.3 Target density

**6–10 sections per page.** Below 6 feels thin and low-authority. Above 10 creates scroll fatigue. The target sweet spot is **8–9 sections**.

### 6.4 The four archetype recipes

Archetypes are **starting compositions**, not strict templates. Every page pulls an archetype and then adjusts based on placement heuristics.

#### Archetype A — Strategic service

**Who it's for.** Early-funnel, exploratory buyers who are still defining the shape of the engagement. Examples: Product Discovery, AI Strategy Consulting, IT Consulting, Cloud Assessment.

**Buyer mindset.** "I'm not sure what I need yet. Help me think."

**Default composition (7–9 sections):**

```
Hero → MetricsStrip → DiscoveryMethodology → Signature → ProcessTimeline → EngagementModels → FAQ → CTA
```

**When to use.** When the service being sold is primarily intellectual: strategy work, roadmapping, assessments, recommendations. The deliverables are artifacts (documents, models, plans) rather than running systems.

**What to drop.** `TechStackBlock` is almost always irrelevant (the buyer doesn't care yet). `BenefitsGrid` can be folded into the signature if the signature is a before/after visual.

#### Archetype B — Technical service

**Who it's for.** Buyers hiring AIvanceWorks to build something. Examples: MVP Development, Full-Stack Development, Cloud Migration, Data Engineering.

**Buyer mindset.** "I need this built. Prove you can build it."

**Default composition (8–10 sections):**

```
Hero → MetricsStrip → FeatureGrid → Signature → BenefitsGrid → ProcessTimeline (optional) → TechStackBlock → EngagementModels → FAQ → CTA
```

**When to use.** When the primary ask is execution, not strategy. The deliverable is a running system.

**What to drop.** `DiscoveryMethodology` (unless discovery is a phase of the engagement). `ProcessTimeline` if the signature already is a timeline (avoid duplication).

#### Archetype C — Regulated solution

**Who it's for.** Risk-averse, late-funnel buyers in heavily regulated industries. Examples: Patient Portals, Insurance Portals, FinTech backends, Legal-tech, anything HIPAA/SOC2/PCI.

**Buyer mindset.** "I could lose my job if this goes wrong. Prove it won't."

**Default composition (9–11 sections):**

```
Hero → MetricsStrip → FeatureGrid → Signature → ComplianceDeepDive → BenefitsGrid → IntegrationsPanel → [CaseStudySpotlight if real] → ProcessTimeline → FAQ → CTA
```

**When to use.** When the buyer must satisfy a regulator, auditor, or board. Compliance is the gate; everything else is a tiebreaker.

**What to drop.** `CaseStudySpotlight` if no verified case exists. `TechStackBlock` if compliance and integrations already demonstrate technical competence.

#### Archetype D — Commerce solution

**Who it's for.** Conversion-focused, outcome-oriented buyers. Examples: E-Commerce websites, Retail websites, D2C platforms.

**Buyer mindset.** "Will this make me more money?"

**Default composition (8–10 sections):**

```
Hero → MetricsStrip → FeatureGrid → Signature → BenefitsGrid → CaseStudySpotlight → TechStackBlock → ProcessTimeline → FAQ → CTA
```

**When to use.** When conversion rate, revenue, and speed-to-market dominate the buyer's thinking.

**What to drop.** `ComplianceDeepDive` (unless payment compliance matters — PCI). `EngagementModels` can fold into the CTA section as a short "engagement options" list.

**Reference implementation:** `/solutions/e-commerce-websites` (§15.5). Note how the audience test (§9.5) replaced uncited % metrics with capability framing — this is the model for commerce pages without cited data.

### 6.5 When to pick which archetype

| Signal | Archetype |
|---|---|
| Buyer is exploring; deliverable is a plan or assessment | **A — Strategic** |
| Buyer knows what they want built; wants execution | **B — Technical** |
| Industry is regulated; buyer answers to auditors | **C — Regulated** |
| Buyer's KPI is revenue or conversion | **D — Commerce** |

If a page sits between two archetypes (e.g., AI Strategy Consulting is strategic but also technical), pick the archetype closest to the **primary buyer persona** and cherry-pick one or two sections from the other. Document the cherry-pick in the data file.

---

## 7. Data schema

All page content lives in TypeScript files under `src/data/services/` and `src/data/solutions/`, one file per page. Components consume data through props, never through direct data imports; the page file is the only place that imports a data file.

### 7.1 File locations

```
src/data/
├── services/
│   ├── product-discovery.ts
│   ├── mvp-development.ts
│   └── [future services].ts
└── solutions/
    ├── patient-portals.ts
    ├── insurance-portals.ts
    └── [future solutions].ts
```

**The existing `src/data/solutions.ts` monolithic file is split during pilot** into one file per page. The existing `src/lib/content.ts` service content for pilot services migrates to the new per-file structure. Post-pilot, the rest of the services migrate the same way.

Each file exports one named const — for example `patientPortals: SolutionPageData` — plus a default export pointing to the same object, so both named and default imports work.

### 7.2 Type definitions

Type definitions live in `src/types/pages.ts` (new file). Import sites use `import type { ... } from '@/types/pages'`.

```ts
// src/types/pages.ts

// ─── Shared building blocks ───────────────────────────────

export interface CTA {
  label: string;
  href: string;
}

export interface HeroMetric {
  value: string;
  label: string;
  description?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description?: string;
}

export interface Feature {
  icon: string;         // Lucide icon name
  title: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  duration?: string;
  deliverable?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface IntegrationGroup {
  name: string;                      // "Epic", "Guidewire PolicyCenter"
  category?: string;                 // "EHR", "Core Policy System"
  connectionMethod: string;          // "HL7 FHIR R4", "REST API", "SOAP"
  capabilities?: string[];           // ["bi-directional sync", "real-time"]
  logoPath?: string;                 // optional
}

export interface MethodologyCard {
  icon: string;
  name: string;                      // "Design Sprint"
  description: string;
  whenToUse: string;
}

export interface EngagementModel {
  name: string;                      // "1-Week Sprint"
  duration: string;                  // "1 week"
  startingPrice: string;             // "$12,000"
  summary: string;
  included: string[];                // CheckList items
  cta: CTA;
}

export interface ComplianceDetail {
  frameworks: string[];              // ["HIPAA", "HITECH", "SOC 2 Type II"]
  safeguards: {                      // technical safeguards
    title: string;
    description: string;
    icon: string;
  }[];
  audit: {
    title: string;
    description: string;
  };
  partnerAgreements?: string[];      // ["BAA", "DPA"]
}

export interface IndustryMetric {
  value: string;
  label: string;
  source?: string;                   // citation if industry-wide figure
}

export interface CaseStudyRef {
  slug: string;
  clientName: string;
  headline: string;
  metrics: { value: string; label: string }[];
  quote?: { text: string; author: string; title: string };
  imagePath?: string;
}

export interface RelatedPageItem {
  title: string;
  description: string;               // journey-aware — see Step 7.8
  href: string;
  icon: string;                       // Lucide icon name
  pageType: 'service' | 'solution';   // renders subtle badge, enables future auto-matching
}

// ─── Base page data ───────────────────────────────────────

export interface BasePageData {
  slug: string;
  title: string;
  shortDescription: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Hero
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
    metrics?: HeroMetric[];          // right-column MetricsCard
  };

  // Composable sections — a page opts into which it uses by including
  // the corresponding field. Undefined fields are simply not rendered.
  metricsStrip?: MetricItem[];
  features?: Feature[];              // typically 6
  benefits?: Benefit[];              // 4–6
  processSteps?: ProcessStep[];      // 5
  capabilities?: string[];           // 8–10
  technologies?: string[];           // 8–12
  integrations?: IntegrationGroup[]; // new shape — see 7.3
  relatedPages?: RelatedPageItem[];  // 3 cross-links — see Step 7.8
  faqs: FAQ[];                       // 5–6 (required)
  cta: {                             // required
    title: string;
    description: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
  };

  // Content integrity — see §9
  _unverified?: string[];            // list of fields not yet verified
}

// ─── Solution extension ───────────────────────────────────

export interface SolutionPageData extends BasePageData {
  industry: 'healthcare' | 'insurance' | 'retail' | 'fintech' | string;
  industryMetrics?: IndustryMetric[];
  complianceDetail?: ComplianceDetail;
  caseStudySpotlight?: CaseStudyRef;
  signatureSection:
    | 'architecture-map'
    | 'claims-flow'
    | 'compliance-showcase'
    | string;
}

// ─── Service extension ────────────────────────────────────

export interface ServicePageData extends BasePageData {
  category: 'software-engineering' | 'infrastructure' | 'ai-ml' | 'strategy' | string;
  methodology?: MethodologyCard[];
  engagementModels?: EngagementModel[];
  pricing?: {
    startingPrice: string;
    whatsIncluded: string[];
  };
  signatureSection:
    | 'roadmap'
    | 'before-after'
    | 'framework-diagram'
    | string;
}
```

### 7.3 Why `integrations` is a typed shape, not an array of strings

The old `SolutionData.integrations: string[]` shape cannot support the new `IntegrationsPanel` component, which needs a connection method per integration. The new shape is:

```ts
integrations: [
  {
    name: 'Epic',
    category: 'EHR',
    connectionMethod: 'HL7 FHIR R4, SMART on FHIR',
    capabilities: ['bi-directional sync', 'real-time patient context'],
  },
  {
    name: 'Guidewire PolicyCenter',
    category: 'Core Policy',
    connectionMethod: 'REST + SOAP',
    capabilities: ['policy lookup', 'endorsement write-back'],
  },
]
```

Both Patient Portals (EHR list) and Insurance Portals (core policy systems list) use the same `IntegrationsPanel` component, differing only in their data. That's the whole win of the new shape.

### 7.4 The `_unverified` field

Every data file includes an `_unverified` array listing content fields that have not yet been verified as public-facing claims. Example:

```ts
_unverified: [
  'metricsStrip[0]: "40–60% reduction in no-shows" — needs source citation or range framing',
  'benefits[2].stat: "$180k saved" — invented placeholder, replace before merge',
  'caseStudySpotlight: entire section — no real case yet, placeholder only',
],
```

**Pre-launch gate:** `_unverified` must be empty or explicitly cleared by a human reviewer before a page is merged to main. See [Section 9](#9-content-integrity-rules-hard).

### 7.5 Page file contract

A page file (`app/services/product-discovery/page.tsx`, etc.) must:

1. Import the data file: `import data from '@/data/services/product-discovery';`
2. Import the template: `import { ServiceTemplate } from '@/components/templates/ServiceTemplate';`
3. Emit metadata via `constructMetadata({ title: data.metaTitle, description: data.metaDescription, ... })`.
4. Emit JSON-LD (Service schema for services, FAQPage schema always) via `<JsonLd>`.
5. Render `<ServiceTemplate data={data} composition={...} />` where `composition` is the ordered list of section names to render.

Example:

```tsx
// app/services/product-discovery/page.tsx
import data from '@/data/services/product-discovery';
import { ServiceTemplate } from '@/components/templates/ServiceTemplate';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
});

export default function ProductDiscoveryPage() {
  return (
    <>
      <JsonLd schema={generateServiceSchema(data)} />
      <JsonLd schema={generateFAQSchema(data.faqs)} />
      <ServiceTemplate
        data={data}
        composition={[
          'hero',
          'metricsStrip',
          'discoveryMethodology',
          'signature',          // resolves to DiscoveryBeforeAfter via data.signatureSection
          'processTimeline',
          'engagementModels',
          'faq',
          'cta',
        ]}
      />
    </>
  );
}
```

This gives every page a **declarative composition** at the top of the page file, which is the most readable possible summary of "what does this page look like?"

---

## 8. Signature sections

### 8.1 What a signature section is

A **signature section** is a single, visually arresting section that carries the page's emotional argument. It's the one thing a visitor will remember when they close the tab. Examples from the pilot:

- **Product Discovery — `DiscoveryBeforeAfter`.** A before-state column ("your current mess of assumptions, slide decks, and whiteboards") beside an after-state column ("five specific artifacts, each linked"). The transformation is the product.
- **MVP Development — `MvpDualTrackRoadmap`.** A 12-week roadmap with two parallel tracks — engineering view (sprints, demos, deployments) and founder view (user tests, metrics, decisions). The dual track visualizes the promise: engineering rigor without losing founder alignment.
- **Patient Portals — `PortalArchitectureMap`.** A four-tier architecture diagram: patient devices → portal front-end → integration layer → EHR/EMR/telehealth, with compliance callouts wrapping the whole thing. It answers "how does this actually fit into my hospital's stack?" in one picture.
- **Insurance Portals — `ClaimsFlowComparison`.** Two proportional time bars stacked: legacy claims flow ("21 days, 6 handoffs, 4 phone calls") vs. portal claims flow ("48 hours, 2 handoffs, 0 phone calls"). The proportional bar does the persuasion.

### 8.2 What a signature section is not

- **Not a reusable pattern.** If it can be reused, it belongs in `components/shared/sections/`.
- **Not a decoration.** A gradient background behind a regular `FeatureGrid` is not a signature section. Signature sections have **information content** that the reader can read and understand.
- **Not a stack of cards.** Signature sections typically involve proportions, relationships, or transformations — things a grid of cards can't show.

### 8.3 How to design one

Pick a visualization pattern that carries the page's emotional argument. The pilot uses four patterns; these are exemplars, not templates.

**Visual pattern catalog (reference, not constraint):**

1. **Data viz** — proportional bars, sankey flows, small multiples, charts. Strong for comparisons and outcome shopping.
2. **Hierarchical / architectural** — layered diagrams, tier maps, system topologies. Strong for regulated solutions and technical complexity.
3. **Process / flow** — swim lanes, timelines, decision trees. Strong for methodology-heavy services.
4. **Comparison** — before/after columns, with/without tables, split screens. Strong when the page sells a transformation.
5. **Interactive** — calculators, configurators, filters. Strong when the buyer benefits from self-service exploration. Use sparingly — they cost more to build and maintain.
6. **Illustrative** — custom SVG art, motion graphics. Strong when the message is emotional and not analytical.

You are allowed to invent a new pattern. The rule is: **the signature section must communicate more than a standard section could**. If a normal `FeatureGrid` could carry the message, the signature isn't earning its place.

### 8.4 File location

```
components/signature/
├── DiscoveryBeforeAfter.tsx
├── MvpDualTrackRoadmap.tsx
├── PortalArchitectureMap.tsx
├── ClaimsFlowComparison.tsx
└── [future signatures].tsx
```

Signature components are **single-use**. Only the page they belong to imports them. They still obey all theming and accessibility rules.

### 8.5 Modularity and swappability

Even though signature sections are single-use, they must be:

- **Swappable.** A page's signature can be replaced with a different signature by editing only the page file, not the other sections. Never wire a signature into sibling components.
- **Self-contained.** A signature component has no side effects on the rest of the page. No global state, no shared refs, no DOM coupling.
- **Token-compliant.** The same theming rules that apply to shared components apply to signature components. Flipping `data-theme` must re-skin them cleanly.
- **Responsive.** Signature sections have the most specialized layouts, which means they have the highest mobile design risk. Each signature component must have a documented mobile layout — see [Section 10.7](#107-signature-section-mobile-layouts).

---

## 9. Content integrity rules (hard)

These rules exist because AIvanceWorks sells trust. A single fabricated stat, discovered by a savvy prospect or a regulator, destroys years of relationship-building. These are hard rules: violations block merge.

### 9.1 No fabricated statistics

Every number on a published page falls into **one of three categories**:

1. **Verified from actual past work.** "Our team reduced claims cycle time by 63% for a regional carrier in Q3 2025" is okay if there is an internal record of the engagement, the metric, and the client approving the public claim.
2. **Framed as an industry range with a citable source.** "Industry studies report 30–45% no-show reductions with patient portal adoption (source: HIMSS 2024 benchmark)" is okay if the source is real and the range is accurate.
3. **Removed or replaced with a qualitative statement.** If neither of the above applies, the number doesn't exist.

**Not allowed:**
- "We saved clients $2.3M last year." (Made up, no source.)
- "300% ROI on average." (Unverifiable aggregate.)
- "90% client satisfaction." (Not measured, or measured without methodology disclosure.)

### 9.2 No invented case studies

- If no real case study exists, the `CaseStudySpotlight` section is **omitted**, not filled with a fictional customer.
- A placeholder like "We'd love to be your first case study" is acceptable in lieu of invention.
- Real case studies require the client's written permission to name them. Anonymous cases ("a regional health system") are acceptable if the metrics and story are genuine.

### 9.3 No unauthorized logos

- `LogoWall` only renders logos where there is **written permission** from the logo owner.
- Stock or open-source logos (e.g., Azure, AWS, Next.js) are fine — they're marks of technical stack, not clients.
- Confusing technology logos with client logos is not allowed. The section heading must make clear which is which: "Technologies we use" vs. "Clients we serve."

### 9.4 The `_unverified` list protocol

Every data file has an `_unverified: string[]` field. Every unverified claim goes in the list with:

- **The field path.** `metricsStrip[0]` or `benefits[2].stat`.
- **The claim.** The exact text of the unverified content.
- **The reason.** "Needs source citation," "invented placeholder," "no verified case yet," etc.

Example:

```ts
_unverified: [
  'metricsStrip[0]: "40–60% no-show reduction" — needs ranged framing with HIMSS source citation',
  'metricsStrip[2]: "25–35% admin reduction" — source?',
  'benefits[3].stat: "$180k saved per year" — invented, remove or replace with case-study number',
  'hero.badge: "Trusted by 50+ hospitals" — not yet true, remove or rephrase',
],
```

### 9.5 Audience test (hard)

Every content decision — what to include, what to cut, how to frame a claim, whether a section earns its place — must pass the **audience test** before it ships. This is a hard rule, not a suggestion.

**The test:** For every element (metric, section, feature description, FAQ, integration mention, stat), answer these three questions:

1. **Who actually sees this?** Name the buyer persona by role (e.g., "VP of Digital at a mid-market retailer"). If you can't name the persona, you haven't done the research.
2. **Do they care?** A business buyer deciding between vendors does not care about your internal architecture elegance. A CTO evaluating technical depth does not care about your marketing slogans. Match the content to what moves *this specific buyer* toward trust, a lead, or clarity.
3. **Will this generate value?** If the element doesn't move the buyer closer to conversion (booking a call, requesting a proposal, trusting your credibility), it is noise. Cut it or reframe it.

**Common failure modes the audience test catches:**

- **Uncited percentage ranges** (e.g., "25–45% CVR uplift") that every competitor also claims. A VP of Digital reads this and thinks "prove it or remove it." Replace with capability framing ("Custom-built conversion architecture") or cite a specific source.
- **Developer-lens content on a business-buyer page.** Integration chip grids, raw technology lists, and architecture jargon that impresses engineers but means nothing to the person signing the check.
- **Outcome language without outcomes.** "Our clients see..." / "We deliver..." / "On average we achieve..." — when the company has zero shipped engagements (greenfield). The buyer can fact-check this. Capability framing ("architected for", "built to", "designed to") is honest; outcome framing without data is not.
- **Vendor name-dropping that implies shipped experience.** "We have experience integrating with NetSuite and SAP" implies past work. For greenfield, use "We build integrations with..." instead.

**When to run it:** The audience test is not a final review step — it is applied *during* content creation (Step 7 of the 10-step process) and again as a dedicated pass (Step 7.7). Every `_unverified` item should be resolved through the lens of "does the target buyer care, and is this honest?"

**Rationale (v1.3):** During the e-commerce migration (2026-04-10), three `metricsStrip` percentage ranges passed all other integrity checks but failed the audience test — a VP of Digital would read uncited % claims and lose trust. They were replaced with capability-framed metrics. Three feature/FAQ strings were softened from "we have experience" / "integrated" (implying past work) to "we build" / "integration" (describing capability). The audience test caught what the `_unverified` protocol alone did not: technically-honest-but-practically-misleading framing.

### 9.6 Self-challenge protocol (hard)

When making any non-trivial content or design decision (what sections to include, how to frame a metric, whether to name specific vendors, what composition order to use), the implementer must **visibly challenge their own default position** before committing. This is not optional.

**Structure:**

1. State the default position and why it seems right.
2. Run it through at least these three challenges:
   - **Audience test** (§9.5): Who sees this? Do they care? Will it generate value?
   - **Greenfield integrity test** (while AIvanceWorks has no real clients): Can this claim be backed without fabricated outcomes? If not, what's the capability-framed version?
   - **Counter-cost test**: What do we lose by including this — complexity, dilution, maintenance, brand coherence?
3. Land on a conclusion — which may be the original position or a reversal.

The point is rigorous self-challenge, not indecision. If after the challenges the original answer still stands, commit to it firmly. But never skip the audience test — it is the most common place implementers go wrong.

**Rationale (v1.3):** Validated twice during the pilot build. First on section-order flexibility (where self-challenge reversed the default from "rigid canonical order" to "flexible with archetypes"). Second on e-commerce integrations (where the initial recommendation to add an integration chip grid was reversed after the audience test revealed business buyers don't care about integration chips — they care about credibility and migration safety).

### 9.7 Review gate

**Before any service or solution page merges to main:**

1. The `_unverified` list must be **empty** or explicitly cleared by a named reviewer with the comment `_unverified entries reviewed and accepted as ranged/cited` in the PR description.
2. A human (not Claude) must sign off on all public-facing numbers, case studies, and logos.
3. The PR checklist (to be added to `.github/pull_request_template.md`) includes a "Content integrity confirmed" checkbox.

This rule applies to copy in the data file **and** any inline copy inside components (though inline copy in shared components should be minimized — prefer data-driven copy).

---

## 10. Responsiveness and accessibility

### 10.1 Breakpoints

Mobile-first. Every component tested at these widths:

- **375px** — iPhone SE portrait
- **640px** — Tailwind `sm`
- **768px** — Tailwind `md`
- **1024px** — Tailwind `lg`
- **1280px** — Tailwind `xl`
- **1536px** — Tailwind `2xl`

A page is not shippable until it has been viewed and validated at 375, 768, and 1280 at minimum.

### 10.2 Typography scale

- **Base font size:** 16px (`text-base`) for body text.
- **Headings:** fluid scaling via `clamp()`. Example: `h1 { font-size: clamp(2.25rem, 4vw + 1rem, 3.75rem); }`. Reference:
  - `h1` — clamp(2.25rem, 4vw + 1rem, 3.75rem)
  - `h2` — clamp(1.875rem, 3vw + 0.75rem, 3rem)
  - `h3` — clamp(1.5rem, 2vw + 0.75rem, 2.25rem)
  - `h4` — clamp(1.25rem, 1.5vw + 0.75rem, 1.5rem)
- **Body:** `text-base` (16px) → `text-lg` (18px) on `lg` and above for readability.

### 10.3 Line length

Maximum body prose line length: **70 characters (`max-w-[70ch]`)** on large screens. Applies to paragraph prose in content sections. Headings and captions are exempt.

### 10.4 Vertical padding scale

Section padding scales with viewport:

- Mobile: `py-12`
- Tablet: `py-16`
- Desktop: `py-20` or `py-24`

Encoded in the `Section` primitive's `SIZE_STYLES`. Consumers don't hand-tune padding.

### 10.5 Color contrast

**WCAG 2.1 AA** is mandatory for every text/background combination:

- Body text on backgrounds: contrast ratio ≥ **4.5:1**.
- Large text (≥ 24px regular, ≥ 18.66px bold) on backgrounds: contrast ratio ≥ **3:1**.
- Non-text UI components (buttons, icons): contrast ratio ≥ **3:1**.

The theme tokens are chosen so that **any pairing of `text-text-heading` / `text-text-body` on `bg-surface-white` / `bg-surface-warm`**, and **`text-text-light` on `bg-surface-dark-*`**, meets AA. If you create a new pairing, verify it with a contrast checker.

### 10.6 Keyboard, focus, and motion

- Every interactive element must be focusable via keyboard with a visible focus ring (`focus-visible:ring-2 ring-brand-600`).
- Every image has an `alt` attribute. Decorative images use `alt=""` and `aria-hidden="true"`.
- `@media (prefers-reduced-motion: reduce)` already disables `reveal`/`card-hover` animations via `globals.css`; signature sections must respect it.
- Accordions (`<details>` in FAQ) are native and keyboard-accessible; don't replace them with custom components without re-implementing keyboard support.

### 10.7 Signature section mobile layouts

Each signature component **must document** its mobile layout as a comment at the top of the component file. The four pilot signatures have the following target behaviors:

- **`DiscoveryBeforeAfter`** — the Before column collapses above the artifacts grid. The artifact grid reflows from 5 columns (desktop) → 3 columns (tablet) → 2 columns (640px) → 1 column (375px). Connecting arrows between Before and After are hidden below `lg`; a short "↓ After" label replaces them.
- **`MvpDualTrackRoadmap`** — dual tracks collapse to a single vertical flow at `< lg`. Each phase card shows both tracks stacked: engineering block on top, founder block below, with a divider between. The horizontal "week ticker" becomes a vertical numbered list.
- **`PortalArchitectureMap`** — the four tiers, which sit in a grid on desktop, linearize into a vertical flow on mobile: Patient devices (top) → Portal front-end → Integration layer → EHR (bottom). Side annotations (labels pointing at tiers) move above or below each tier as inline captions. The compliance wrap becomes a footer strip under the full diagram.
- **`ClaimsFlowComparison`** — the two track bars stack fully vertically: Legacy on top with its callouts below it, Portal below with its callouts below it. Bars remain **proportional** (legacy 100%, portal ~10% of legacy width) to preserve the visual argument. On very narrow screens (≤ 375px), the bars remain horizontal but scrollable within a carousel.

When a new signature section is added to `components/signature/`, its file header must include a similar comment documenting its mobile collapse rules.

---

## 11. Iconography and imagery

### 11.1 Iconography — Lucide only

**Library:** Lucide React (`lucide-react`). One library for the entire site.

**Consistency:** Same stroke weight (`strokeWidth={2}` default), same size for the same role (tile icons 24px, button icons 16–18px, hero badge icons 14px), same color token (`text-brand-600` or inherit from text color).

**Content-driven selection.** Icons are chosen based on what they represent, not how they look. Different pages pull different icons from the **same library** — that's the consistency.

Examples:

- **Patient Portals** — `HeartPulse`, `Stethoscope`, `FileText`, `Pill`, `Video`, `Lock`, `ShieldCheck`.
- **Insurance Portals** — `Shield`, `Calculator`, `Building2`, `FileCheck`, `BarChart3`, `Scale`.
- **Product Discovery** — `Search`, `Users`, `Target`, `Lightbulb`, `ClipboardList`, `Compass`.
- **MVP Development** — `Rocket`, `GitBranch`, `Zap`, `Gauge`, `Package`, `Smartphone`.

**No custom icon fonts.** No FontAwesome. No Material Icons. No Heroicons. No mixing libraries. Lucide only.

### 11.2 Custom SVG illustrations

Permitted inside signature sections and process diagrams. They must:

- Be inline (no separate asset fetch).
- Use `currentColor` for fills and strokes where possible, so they inherit from text color and respect the theme.
- Include `<title>` and `<desc>` for accessibility.
- Avoid hardcoded hex values; use CSS vars from the theme for any non-currentColor color.

### 11.3 Imagery — Unsplash with restraint

**Source.** Unsplash (free commercial use) is the default. Licensed stock may be used if budget allows.

**Selection criteria.**

- **Industry-appropriate.** Clinical scenes for healthcare; corporate/office scenes for insurance; whiteboard/workshop scenes for discovery; developer-at-work scenes for MVP.
- **Human faces.** Strongly preferred over abstract or product shots, for empathy and trust.
- **Diversity.** Age, gender, and ethnicity should reflect the realistic buyer and user populations.
- **Avoid cliché.** No handshakes, no stacks of coins, no "thinking against a brick wall," no blue-tinted brain circuitry.

**Color grading.** All photos are post-processed (Photoshop / Figma / CSS filter) to feel like one family:

- Slight desaturation (10–20%).
- Mild color-temperature shift toward the brand hue (cool blue for the blue theme).
- Consistent contrast curve.

This is the single most powerful move for making a page feel intentional. An ungraded photo stack feels like a stock-photo dump.

### 11.4 Alt text

**Every image has meaningful alt text.** Alt text describes the image's purpose in context, not its visual content literally.

- Bad: `alt="A woman sitting at a desk looking at a computer"`
- Good: `alt="Patient reviewing lab results on a mobile portal"`

Decorative images (background textures, abstract shapes) use `alt=""` and `aria-hidden="true"`.

### 11.5 Two-track imagery strategy (v1.2)

**Rationale:** Brainstormed and approved 2026-04-10, refined same day. Solution pages sell domain expertise to industry buyers — photos build "they understand our world" trust. Service pages sell abstract processes — stock photos add nothing; illustrations and interactivity communicate the value better.

**Hero component** (`components/shared/sections/Hero.tsx`):
- All heroes render inside a **box card** matching the homepage style: `rounded-2xl lg:rounded-3xl`, `border border-white/[0.06]`, `shadow-brand-panel`, glow orbs, grid overlay.
- The hero is **not** a full-bleed section — it sits within page padding (`px-4 sm:px-6 md:px-8 lg:px-12`), creating the "inset card" feel.

**Solution pages** (`/solutions/*`):
- **Hero:** Full-bleed background image inside the box card. Photo covers the entire card at reduced opacity (`opacity-40`). A left-to-right gradient scrim (dark → transparent) ensures text readability. Content overlaid on the left (`max-w-2xl`). Metrics render inline below CTAs with a `border-t` divider.
- **Mid-page:** 2-3 `ImageFeature` sections with alternating text/image layout. Images display at original colors (no CSS filters). Images use `fill` + `object-cover` inside an `aspect-[3/2]` container.
- **Photo sourcing:** Unsplash (§11.3 criteria apply). Original photos, no color grading filters. Human faces preferred, industry-appropriate, diverse, no clichés.
- **Photo storage:** `public/images/solutions/{slug}/hero.jpg`, `feature-1.jpg`, `feature-2.jpg`.

**Service pages** (`/services/*`):
- **Hero:** Box card with inline SVG illustration in the right column. Text left, illustration right in a two-column grid. Metrics render inline below CTAs (not in a separate MetricsCard).
- **Illustrations:** Inline SVG components in `components/signature/`. Use CSS variables for colors (`var(--brand-*)`, `var(--accent-*)`), `<title>` + `<desc>` for accessibility.
- **Animations:** Scroll-triggered step reveals on ProcessTimeline via `useScrollReveal` hook + `scroll-stagger` CSS class.
- **Signatures:** Interactive — click-to-expand (DiscoveryBeforeAfter), phase-focus (MvpDualTrackRoadmap). Both are `'use client'` components with `useState`.

**Imagery workflow for new pages** (integrated into §13 Step 7.5):
1. **Research:** Identify 3-4 photo subjects per solution page (hero + 2-3 features) based on the industry and buyer persona.
2. **Source:** Download from Unsplash. Landscape orientation, minimum 1200px wide, JPEG format.
3. **Store:** `public/images/solutions/{slug}/hero.jpg`, `feature-1.jpg`, etc.
4. **Data:** Add `heroImage` to the `hero` block and `imageFeatures` array to the data file. Add `'imageFeatures'` to the `composition` array after `'featureGrid'`.
5. **For services:** Create an inline SVG illustration component in `components/signature/` and pass it via `heroIllustration` prop from the page route.

**Driven by pages:** all 5 pilot pages.

---

## 12. How to deviate from this document

This is a living document. Deviation is sometimes warranted; drift never is. The difference between deviation and drift is whether the deviation gets recorded back into this document.

### 12.1 When deviation is warranted

- **New page type.** You're building a page that doesn't fit any of the four archetypes. You need a new archetype.
- **New data pattern.** You discover a content type the schema doesn't cover.
- **New research insight.** You learn something about the buyer that justifies a different section order.
- **New visual pattern.** A signature section needs a pattern not in the catalog.
- **New constraint.** A client legal requirement, an SEO finding, a measured conversion test.

### 12.2 When deviation is NOT warranted

- "I don't like how the blue looks here" — use a different token, don't deviate.
- "This page is special" — every page thinks it's special. Fit it in the system.
- "The rule is annoying" — the rule exists for a reason documented in this file.
- "It's easier to just hardcode the color" — it is never easier after the second theme ships.

### 12.3 How to document a deviation

1. **Identify the affected section(s)** of this document.
2. **Amend the affected section** with the new rule, archetype, or pattern. Preserve the original text where still valid.
3. **Add a rationale paragraph** explaining why the deviation was necessary and what page(s) drove it.
4. **Cite the deviating page(s)** by slug.
5. **Bump the changelog** at the bottom with a version increment (e.g., 1.0 → 1.1) and a one-line summary.
6. **Optional but recommended:** add a brief entry in [Section 16 — Open questions](#16-open-questions-and-deferred-decisions) if the deviation raises a broader question.

### 12.4 Who decides

- **Small deviations** (new icon set for a page, new section order, dropping a section from an archetype recipe): the developer's judgment, recorded in the data file comment and reflected in the page's composition array. No constitution edit required unless it forms a new pattern.
- **Medium deviations** (new reusable section, new data type, new token pairing): team review. Update the constitution and open a PR against this file.
- **Large deviations** (new archetype, new rule, removing or changing an existing rule, new theme): user sign-off required. Treat as a policy change. Update the constitution and get explicit approval.

### 12.5 The no-ghost-deviation rule

If a deviation is **used in code but not in the constitution**, it is drift. Drift is what this document exists to prevent. When a code reviewer spots a deviation that isn't documented here, they must either (a) request a constitution update before merge, or (b) request the code be brought in line with the constitution.

---

## 13. Process — creating a new service or solution page

This is the 10-step workflow every future Claude session (and human contributor) follows. It is the operational heart of the constitution. Prompt templates in [Section 14](#14-prompt-templates) wrap these steps for copy-paste use.

### Step 1 — Identify the archetype

Decide whether the new page is **A / B / C / D**. Use the table in [Section 6.5](#65-when-to-pick-which-archetype). If it sits between two, pick the dominant one and note the cherry-picks.

**Output:** one of `A`, `B`, `C`, `D`, plus a one-line rationale.

### Step 2 — Load the archetype recipe

Copy the default composition from [Section 6.4](#64-the-four-archetype-recipes) into a working draft.

**Output:** initial ordered list of section names.

### Step 3 — Apply placement heuristics

Reorder as the audience demands. Apply the three heuristics from [Section 6.2](#62-placement-heuristics):

1. Lead with what the buyer searched for.
2. Place the signature section at the narrative break.
3. Proof before process (outcome shoppers) or process before proof (risk-averse).

**Output:** revised ordered composition.

### Step 4 — Curate sections (YAGNI)

Prune sections that don't serve this specific page. If the page doesn't have a verified case study, drop `CaseStudySpotlight`. If the engagement doesn't have tiered pricing, drop `EngagementModels`. Target density is 6–10 sections.

Add any needed new sections to `components/shared/sections/` — **but only if the section will be reused by at least one more page.** Below that threshold, it goes into `components/signature/`.

**Output:** final ordered composition, plus a list of new shared components to create (if any).

### Step 5 — Design the signature section

Pick one signature per page. Use the existing 4 pilot signatures as exemplars, not templates. Pick a visualization pattern from the catalog in [Section 8.3](#83-how-to-design-one) — or invent a new one if the message demands it.

**Output:** signature component name (e.g., `ClaimsFlowComparison`), visualization pattern (e.g., "proportional bar comparison"), one-sentence argument the signature carries.

### Step 6 — Apply tone rhythm

Assign `dark | light | warm | accent` to each section. Enforce the hard rules:

- Hero is usually `dark`.
- CTA is always `accent`.
- Signature is usually `dark` (optionally `light` with justification).
- Max two `dark` sections total.
- No adjacent `dark` sections.

**Output:** composition with tone annotations, e.g., `Hero (dark) → MetricsStrip (light) → Features (warm) → Signature (dark) → Benefits (light) → ... → CTA (accent)`.

### Step 7 — Create the data file

Create `src/data/services/<slug>.ts` or `src/data/solutions/<slug>.ts` with the full `ServicePageData` or `SolutionPageData` object. Populate every field the composition references.

**Output:** working data file with all required fields, plus `_unverified` list populated for any unverified claims.

### Step 7.5 — Source and configure imagery (v1.2)

This step applies differently based on page type. See §11.5 for the full imagery strategy.

**For solution pages:**

1. Research 3 photo subjects: 1 hero + 2 features. Match the industry and buyer persona — a patient portal hero should show clinical technology in use, not a generic office.
2. Source from Unsplash. Landscape, minimum 1200px wide, JPEG. Follow §11.3 selection criteria (industry-appropriate, human faces, diversity, no clichés).
3. Download to `public/images/solutions/{slug}/hero.jpg`, `feature-1.jpg`, `feature-2.jpg`.
4. Add `heroImage: { src: '/images/solutions/{slug}/hero.jpg', alt: '...' }` to the `hero` block in the data file.
5. Add `imageFeatures` array with heading, description, and image for each feature.
6. Add `'imageFeatures'` to the `composition` array (after `'featureGrid'`).

**For service pages:**

1. Design an abstract SVG illustration themed to the service (see pilot examples: `DiscoveryHeroIllustration`, `MvpHeroIllustration`).
2. Create the component in `components/signature/{Name}HeroIllustration.tsx`. Use CSS variables, include `<title>` and `<desc>`.
3. Export from `components/signature/index.ts`.
4. In the page route file, import and pass via `heroIllustration={<{Name}HeroIllustration />}` to `ServiceDetailTemplate`.
5. Ensure `metricsStrip` is populated in the data file (metrics display below the hero, not in the hero card).

**Output:** imagery files in place, data file updated with image references, page route wired.

### Step 7.7 — Audience test pass (v1.3)

Run the audience test (§9.5) on every element in the data file. For each metric, feature description, benefit, FAQ answer, and integration mention:

1. Name the target buyer persona by role.
2. Ask: does this buyer care about this element? Will it move them toward trust, a lead, or clarity?
3. Ask: is the framing honest for a greenfield company? Would the buyer feel misled if they discovered we have zero shipped engagements?

**Common replacements this step produces:**

- Uncited % ranges → capability-framed metrics (e.g., "25–45% CVR uplift" → "Custom-built Conversion Architecture")
- "We deliver / we achieved / clients see" → "Architected for / built to / designed to"
- "We have experience integrating with X" → "We build integrations with X"
- "Integrated X, Y, Z" (past tense implying shipped work) → "X, Y, Z integration via..." (capability noun)
- Developer-lens integration grids → vendor names woven into feature prose where the buyer needs credibility signals

Apply the self-challenge protocol (§9.6) on any decision where you're unsure. Document the reasoning in the `_unverified` review comment block at the top of the `_unverified` array.

**Output:** data file with audience-tested copy. Resolved `_unverified` items noted with reasoning. Remaining `_unverified` items are only those explicitly deferred (content-team reminders, not integrity flags).

### Step 7.8 — Populate `relatedPages` (v1.4)

Every page gets a `relatedPages` array with 2–3 cross-links. The number depends on page type:

- **Service pages:** 3 links. Mix services and solutions freely — "see this capability applied to real verticals." Cross-type internal linking strengthens SEO topic clustering.
- **Solution pages:** Services only. The buyer is a vertical-specific persona (healthcare CIO, insurance ops leader) — they don't care about other verticals. Show 2 links when only 2 relevant services exist; expand to 3 as the service catalog grows. Never pad with unrelated peer solutions.

This split is validated by competitive research: no major consultancy (Accenture, Thoughtworks, Slalom, Deloitte, Cognizant) separates types in their cross-link sections, and solution buyers consistently engage with "how you'd build it" (services) over "what else you build" (other solutions).

**Symmetry rule:** If page A links to page B, page B should link back to page A where possible. Service→solution links are naturally asymmetric (a service page links to a solution, but the solution page may not link back to that service if it links to other services instead). This is acceptable — prioritize buyer-journey logic over strict symmetry.

**Card data shape:**

Each entry has `title`, `description`, `href`, `icon` (Lucide icon name resolved via `getLucideIcon`), and `pageType` (`'service'` | `'solution'`).

**`pageType` field (v1.4):** Renders a subtle uppercase pill badge ("SERVICE" / "SOLUTION") on each card so the buyer can visually distinguish page types at a glance without creating two separate sections. Also enables future tag-based auto-matching when the catalog exceeds ~12 pages.

**Contextual section headings (v1.4):** The `RelatedPages` component renders different headings depending on which template calls it:

- **`ServiceDetailTemplate`:** eyebrow "Keep Exploring", title "See This Capability in Action", subtitle "Discover how this service powers real-world solutions."
- **`SolutionDetailTemplate`:** eyebrow "Keep Exploring", title "The Expertise Behind This", subtitle "Explore the services and capabilities that power this solution."

This replaces the old generic "Explore Related Solutions" default. Headings are set at the template level, not per-page data, keeping data files clean.

**Journey-aware descriptions (v1.4):** Descriptions are NOT generic capability summaries of the destination page. They are written from the perspective of the reader on the CURRENT page, answering "why would I go there next?" Each description should:

- Reference the current page's context ("Discovery done?", "Building for insurance?", "Scoping a portal project?")
- Bridge to the destination with a clear reason to click
- Be unique per source→destination pair (the same destination gets a different description depending on which page links to it)

**Examples:**

| Source page | Destination | Description |
|---|---|---|
| Product Discovery | MVP Development | "Discovery done? We take your validated backlog and ship a production V1 in 12 weeks — no gap between planning and building." |
| MVP Development | Product Discovery | "Not sure what to build first? A 2-week discovery sprint validates your idea and produces the backlog we build from." |
| Patient Portals | Insurance Portals | "We apply the same regulated-build approach to insurance — claims automation, multi-tenant portals, and state-level compliance built in." |
| E-commerce | Insurance Portals | "See how we build complex, multi-user web platforms in regulated industries — same engineering standards, different vertical." |

Note: the same destination (Insurance Portals) gets a completely different description depending on whether the link is from Patient Portals or E-commerce. This is intentional — DRY does not apply to journey-aware copy.

**When adding a new page:** update the `relatedPages` arrays on the existing pages that should cross-link to it. Write journey-aware descriptions for BOTH directions. This is not optional — orphaned pages with no cross-links are a missed conversion opportunity.

Add `'relatedPages'` to the `composition` array if not already present. Place it after `processTimeline` and before `faq`.

**Scalability note:** At 15+ pages, consider migrating from hand-curated arrays to tag-based auto-matching via `src/lib/content.ts`. Add shared tags (e.g., `['cloud', 'ai', 'healthcare']`) to each page's data and generate the 3 most relevant cross-links programmatically. The `pageType` field enables this future transition.

**Output:** `relatedPages` populated on the new page and on any existing pages that should link to it. All descriptions are journey-aware.

### Step 8 — Content integrity pass

Walk every number, quote, logo, and claim in the data file. For each:

- Verified from past work? OK.
- Framed as an industry range with a source? OK.
- Unverified? → add to `_unverified` list with reason.
- Invented? → remove it.

This step now runs **after** the audience test (Step 7.7), which means most integrity issues have already been caught and resolved. This step is the final sweep for anything the audience test missed.

See [Section 9](#9-content-integrity-rules-hard).

**Output:** cleaned data file with accurate `_unverified` list.

### Step 9 — Responsiveness check

- Ensure every section renders cleanly at 375, 768, and 1280.
- Ensure the signature section has a documented mobile layout in its component file header comment.
- Ensure grids collapse predictably (4 → 2 → 1 columns, or 3 → 2 → 1).

**Output:** visually validated page at all required breakpoints.

### Step 10 — Record any deviations

If you deviated from the archetype, rhythm, tone rules, or added a new pattern, update the constitution per [Section 12](#12-how-to-deviate-from-this-document). Do not skip this step. Drift starts here.

**Output:** updated `services-solutions-constitution.md` with deviation recorded, or confirmation that no deviation occurred.

---

## 14. Prompt templates

These are copy-paste-ready prompts for future Claude sessions. Fill in the `<slot>` values, paste into Claude, and get back a correct page without re-explaining the system.

Every template ends with the explicit reminder: **deviations must be recorded in the constitution itself.**

### 14.1 Create new service page

```
Read docs/design-system/services-solutions-constitution.md. You are creating a new service page.

Service name: <e.g., Web App Development>

YOU MUST DO ALL OF THE FOLLOWING AUTONOMOUSLY. Do not ask the user for buyer persona, questions, trust issues, or content strategy — research and determine them yourself.

## Phase 1 — Research (do this BEFORE writing any code)

1. Read the company details in src/company details/markup/ (especially 02-services.md, 06-positioning.md, 10-website-content.md) to understand what this service covers and how it's positioned.
2. Identify the PRIMARY BUYER PERSONA by role, seniority, and what they're measured on. Use the buyer persona table in §2.3 of the constitution as a starting framework, then refine based on what this specific service actually sells.
3. Identify the TOP 3 QUESTIONS this buyer would type into Google or ask on a sales call. These drive composition order.
4. Identify the KEY TRUST ISSUE — what has burned this buyer before? What makes them skeptical?
5. Study 2-3 existing pilot pages as reference implementations (read their data files in src/data/services/ and src/data/solutions/).

## Phase 2 — Design (constitution §13 steps 1–6)

Follow steps 1–6 of the 10-step process. For every non-trivial decision, apply the self-challenge protocol (§9.6):
- State your default position.
- Run the audience test (§9.5): who sees this, do they care, will it generate value?
- Run the greenfield integrity test: can this be backed without fabricated outcomes?
- Run the counter-cost test: what do we lose by including this?
- Land on a conclusion.

## Phase 3 — Build (constitution §13 steps 7–10)

7. Create the data file. Apply the audience test (§9.5) to EVERY metric, feature description, benefit, and FAQ as you write them — not as an afterthought.
7.5. Source imagery per §11.5.
7.7. Audience test pass: walk every element through §9.5. Replace uncited % ranges with capability framing. Soften any "we delivered / we achieved / clients see" to capability language. Remove developer-lens content that the business buyer doesn't care about.
7.8. Populate relatedPages with 3 cross-links (mixed services/solutions). Add `pageType` to each entry. Write journey-aware descriptions unique to each source→destination pair. Update existing pages that should link back.
8. Content integrity pass (§9).
9. Responsiveness check.
10. Record deviations.

## Phase 4 — Wiring

- Add the slug to SERVICE_PAGE_MODULES in src/lib/content.ts.
- If a new signature component was created, add it to SIGNATURE_COMPONENTS in the page route and to the signature barrel (components/signature/index.ts).
- Run npx tsc --noEmit and npm run build. Both must pass.
- Run the token-hygiene grep on all created/modified files.
- Run the content-integrity grep.

Expected outputs:
- src/data/services/<slug>.ts with audience-tested copy and resolved _unverified list.
- app/services/<slug>/page.tsx (if the route doesn't already exist).
- A hero SVG illustration component at components/signature/<Name>HeroIllustration.tsx (per §11.5).
- Any new signature component at components/signature/<Name>.tsx.
- Any new shared component at components/shared/sections/<Name>.tsx (only if reused).
- Updated relatedPages on existing pages that cross-link to the new page (with journey-aware descriptions and `pageType`).
- Updated SERVICE_PAGE_MODULES in src/lib/content.ts.
- A diff to the constitution if you deviated.
- tsc clean, build clean, token-hygiene clean, content-integrity clean.

Reminder: deviations must be recorded in the constitution. No fabricated stats. The audience test (§9.5) is mandatory, not optional.
```

### 14.2 Create new solution page

```
Read docs/design-system/services-solutions-constitution.md. You are creating a new solution page.

Solution name: <e.g., Hospital Management Systems>
Industry: <healthcare | insurance | retail | fintech | ...>

YOU MUST DO ALL OF THE FOLLOWING AUTONOMOUSLY. Do not ask the user for buyer persona, questions, integrations, or content strategy — research and determine them yourself.

## Phase 1 — Research (do this BEFORE writing any code)

1. Read the company details in src/company details/markup/ (especially 02-services.md, 06-positioning.md, 10-website-content.md) to understand what this solution covers and how it's positioned.
2. Research the industry context: what regulations apply? What systems does this buyer already use? What integrations matter?
3. Identify the PRIMARY BUYER PERSONA by role, seniority, and what they're measured on. Solution buyers are typically business decision-makers (VP Operations, Head of Digital, Business Owner) — not engineers.
4. Identify the TOP 3 QUESTIONS this buyer asks. These drive composition order.
5. Identify the KEY TRUST ISSUE — what has burned this buyer before?
6. Study 2-3 existing pilot pages as reference implementations (read their data files in src/data/solutions/).

## Phase 2 — Design (constitution §13 steps 1–6)

Follow steps 1–6 of the 10-step process. For every non-trivial decision, apply the self-challenge protocol (§9.6).

Archetype guidance: regulated industries default to Archetype C unless the buyer's KPI is purely commercial (then D). When in doubt, the audience test (§9.5) resolves it — ask "does this buyer answer to a regulator or to a revenue target?"

## Phase 3 — Build (constitution §13 steps 7–10)

7. Create the data file. Apply the audience test (§9.5) to EVERY element as you write it.
7.5. Source imagery per §11.5 (3 photos: hero + 2 features).
7.7. Audience test pass (§9.5). This is where the hard decisions happen:
   - Uncited % ranges → replace with capability-framed metrics or cite a real source.
   - "We delivered / achieved / clients see" → "Architected for / built to / designed to" (greenfield integrity).
   - Developer-lens content → cut or reframe for business buyers.
   - Vendor names → "we build with" not "we have shipped with" (greenfield honesty).
   - Integration chip grids → weave vendor names into feature prose if the buyer needs credibility signals; omit the grid if the audience doesn't care about the plumbing.
7.8. Populate relatedPages with 3 cross-links (mixed services/solutions). Add `pageType` to each entry. Write journey-aware descriptions unique to each source→destination pair. Update existing pages.
8. Content integrity pass (§9).
9. Responsiveness check.
10. Record deviations.

## Phase 4 — Wiring

- Add the slug to SOLUTION_PAGE_MODULES in src/lib/content.ts.
- Add signature to SIGNATURE_COMPONENTS in src/app/solutions/[slug]/page.tsx and to the barrel.
- Run npx tsc --noEmit and npm run build. Both must pass.
- Token-hygiene grep + content-integrity grep.

Expected outputs:
- src/data/solutions/<slug>.ts with audience-tested copy and resolved _unverified list.
- 3 photos in public/images/solutions/<slug>/ (hero.jpg, feature-1.jpg, feature-2.jpg).
- 'imageFeatures' in the composition array (after 'featureGrid').
- app/solutions/<slug>/page.tsx (if the route doesn't already exist — or confirm the dynamic [slug] route handles it).
- Any new signature component at components/signature/<Name>.tsx.
- Updated relatedPages on existing pages that cross-link (with journey-aware descriptions and `pageType`).
- Updated SOLUTION_PAGE_MODULES in src/lib/content.ts.
- A diff to the constitution if deviated.
- tsc clean, build clean, token-hygiene clean, content-integrity clean.

Reminder: content integrity rules are non-negotiable. The audience test (§9.5) is mandatory. No fabricated stats. Deviations must be recorded in the constitution.
```

### 14.3 Design a new signature section for page X

```
Read docs/design-system/services-solutions-constitution.md, specifically section 8 (signature sections).

You are designing a new signature section for: <page slug, e.g., /services/ai-strategy-consulting>

Context:
- Archetype: <A/B/C/D>
- Primary buyer persona: <persona>
- The page's emotional argument: <e.g., "We turn vague AI ambitions into a shortlist of 3 validated pilots in 4 weeks">
- The section must communicate: <the one thing the visitor will remember>

Step 1 — Review the four pilot signature components as exemplars:
- components/signature/DiscoveryBeforeAfter.tsx (Product Discovery — before/after comparison pattern)
- components/signature/MvpDualTrackRoadmap.tsx (MVP Development — dual-track timeline pattern)
- components/signature/PortalArchitectureMap.tsx (Patient Portals — hierarchical tier map pattern)
- components/signature/ClaimsFlowComparison.tsx (Insurance Portals — proportional bar comparison pattern)

Step 2 — Propose 2–3 signature section options:
  For each option provide:
  - Component name (PascalCase, page-specific).
  - Visualization pattern from the catalog in §8.3 (data viz, hierarchical, process/flow, comparison, interactive, illustrative, or a new pattern you justify).
  - One-sentence argument it carries.
  - Rough sketch / ASCII mockup of the desktop layout.
  - Mobile collapse strategy.
  - Why this option fits this buyer better than the other options.

Step 3 — Recommend one.

Step 4 — After alignment, write the TSX component in components/signature/<Name>.tsx, wrapped in <Section tone="dark"> (unless section 4.4 deviation applies). Document mobile layout as a header comment.

Reminder: signature components obey all theme-token rules. Flipping data-theme must re-skin them. If you invent a new visual pattern not in the catalog, add it to section 8.3 of the constitution as a deviation.
```

### 14.4 Add a new reusable section to the shared library

```
Read docs/design-system/services-solutions-constitution.md, specifically section 5 (shared component library).

You are adding a new reusable section to components/shared/sections/.

Section name: <e.g., PricingComparisonTable>
What it does: <short description>
Which pages will use it (must be at least 2): <list page slugs>
If only one current consumer, justify why it belongs in shared instead of signature.

Requirements:
1. Wrap the section in <Section tone={...}>. The tone may be a prop.
2. Use only theme tokens. Run through the allowed-tokens list in §3.2 — any class outside that list is forbidden.
3. Design for the target density (6–10 sections per page). Don't make it so tall that it dominates.
4. Mobile-responsive per §10 rules.
5. Accept its data as props matching an interface in src/types/pages.ts. If a new data type is needed, add it to pages.ts and update BasePageData / ServicePageData / SolutionPageData as appropriate.
6. Export the component and its props type.
7. Add a brief docblock with: purpose, when to use, example usage, and any accessibility notes.

Deliverables:
- components/shared/sections/<Name>.tsx
- Updated src/types/pages.ts if new types added
- Updated components/shared/index.ts barrel
- Updated docs/design-system/services-solutions-constitution.md §5.2 with the new entry

Reminder: if the new section introduces a new data type or a new rule, that rule goes in the constitution. Drift is not allowed.
```

### 14.5 Audit an existing page against the constitution

```
Read docs/design-system/services-solutions-constitution.md.

Audit the following page against the constitution:
Page: <e.g., /solutions/patient-portals>
Files:
  - app/solutions/patient-portals/page.tsx
  - src/data/solutions/patient-portals.ts
  - any page-specific components imported by the above

Check:
1. Theming (§3) — grep the page file and all imported components for forbidden classes: any bg-/text-/border-/from-/to-/via- followed by slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose. Grep for hex values (#[0-9a-f]{3,8}). Report every violation with file and line.
2. Rhythm (§4) — map out the section order with tones. Flag adjacent darks, more than 2 darks total, missing accent CTA.
3. Composition (§6) — identify the archetype the page should be. Compare the actual composition to the archetype recipe. Flag undocumented deviations.
4. Data schema (§7) — confirm the data file matches ServicePageData or SolutionPageData. Flag missing required fields.
5. Content integrity (§9) — list every number, quote, logo, and stat in the data file. For each, identify whether it is verified, ranged, unverified (in _unverified list), or invented (removed). Flag any stat not in _unverified that looks unverifiable.
6. Responsiveness (§10) — confirm the signature section has a mobile layout comment. Flag any grid that doesn't collapse predictably.
7. Iconography / imagery (§11) — confirm Lucide only, alt text on every image.

Output format: one section per check, with PASS / FAIL / WARN and specific file:line references for any failures.

At the end, recommend a remediation order by priority. Do not modify any files — just audit.

Reminder: if the audit surfaces a legitimate new pattern that the constitution doesn't cover, that's a deviation — flag it and recommend a constitution update.
```

---

## 15. Reference — pilot pages and their compositions

These are the five pilot pages, composed in full, as of constitution v1.3. They are the reference implementations of the system. Future pages should look to these as live examples, not as templates to copy blindly.

### 15.1 Product Discovery (Archetype A — Strategic service)

**Slug:** `product-discovery`
**Route:** `/services/product-discovery`
**Buyer:** technical founder or CTO considering a new product bet, unclear on scope
**Dominant question:** "Can I trust this team to help me figure out what to build?"
**Signature:** `DiscoveryBeforeAfter` — before/after columns showing transformation from assumption chaos to five concrete artifacts

**Composition (9 sections):**

| # | Section | Tone | Notes |
|---|---|---|---|
| 1 | `Hero` | dark | Headline: "Turn a fuzzy idea into a plan you can ship." SVG illustration. |
| 2 | `MetricsStrip` | light | 2 weeks · 5 artifacts · 90% scope confidence · 1 fixed proposal |
| 3 | `DiscoveryMethodology` | warm | Cards for methodology approaches (lean canvas, jobs-to-be-done, user journey mapping, etc.) |
| 4 | `DiscoveryBeforeAfter` [signature] | dark | Before: vague assumptions. After: five specific artifacts. |
| 5 | `ProcessTimeline` | light | Day-by-day 2-week sprint breakdown |
| 6 | `EngagementModels` | warm | 1-week sprint / 2-week standard / 4-week deep-dive tiers + pricing. |
| 7 | `RelatedPages` | light | 3 cross-links: MVP Development, E-commerce Websites, Patient Portals |
| 8 | `FAQ` | warm | 5–6 common questions |
| 9 | `CTA` | accent | "Book a free 30-minute discovery call" |

**Deviations from Archetype A recipe:**

- Dropped `FeatureGrid` — the discovery artifacts ARE the features; a grid would duplicate the signature section.
- Dropped `TechStackBlock` — discovery isn't about stack; buyers don't care yet.
- Dropped `BenefitsGrid` — `DiscoveryBeforeAfter` already carries the benefit argument visually.
- Dropped `CaseStudySpotlight` — this buyer is too early-funnel for case study persuasion to land.

Result: 9 sections, all earning their place.

### 15.2 MVP Development (Archetype B — Technical service)

**Slug:** `mvp-development`
**Route:** `/services/mvp-development`
**Buyer:** startup founder or product lead with a validated idea, needs it built fast
**Dominant question:** "Can this team actually ship an MVP in 12 weeks without cutting corners?"
**Signature:** `MvpDualTrackRoadmap` — 12-week dual-track roadmap, engineering view on top, founder view on bottom

**Composition (10 sections):**

| # | Section | Tone | Notes |
|---|---|---|---|
| 1 | `Hero` | dark | Headline: "From kickoff to paying customers in 12 weeks." SVG illustration. |
| 2 | `MetricsStrip` | light | 12 weeks · 12 demos · real users by Week 5 · V1 in production |
| 3 | `FeatureGrid` | warm | 8 capabilities: auth, backend, frontend, mobile, infra, billing, observability, deployment |
| 4 | `MvpDualTrackRoadmap` [signature] | dark | Dual-track 12-week visual |
| 5 | `BenefitsGrid` | light | Outcome-focused — distinct from the roadmap's timeline |
| 6 | `TechStackBlock` | warm | Next.js, TypeScript, Node, Azure, Postgres, etc. |
| 7 | `EngagementModels` | light | Fixed-price bundle / milestone / T&M |
| 8 | `RelatedPages` | warm | 3 cross-links: Product Discovery, E-commerce Websites, Insurance Portals |
| 9 | `FAQ` | light | 5–6 common questions |
| 10 | `CTA` | accent | "Book a 30-minute scoping call" |

**Deviations from Archetype B recipe:**

- Dropped standalone `ProcessTimeline` — the dual-track roadmap IS the process, and duplicating it kills the signature moment.
- Dropped any "Principles" block — overlapping with `BenefitsGrid`.
- No `CaseStudySpotlight` in pilot — revisit when a real MVP case is verified.

Result: 10 sections, no duplication.

### 15.3 Patient Portals (Archetype C — Regulated solution)

**Slug:** `patient-portals`
**Route:** `/solutions/patient-portals`
**Buyer:** hospital operations leader, CIO, or digital health lead — risk-averse, compliance-gated
**Dominant question:** "Will this pass our security review, integrate with Epic, and actually improve patient engagement?"
**Signature:** `PortalArchitectureMap` — 4-tier architecture diagram (patient → portal → integration → EHR) with compliance wrap

**Composition (13 sections):**

| # | Section | Tone | Notes |
|---|---|---|---|
| 1 | `Hero` | dark | Photo hero background. Headline: "Patient portals that patients actually use — and auditors actually approve." |
| 2 | `MetricsStrip` | light | No-show reduction · portal adoption · admin workload reduction · patient satisfaction (all ranged with sources) |
| 3 | `FeatureGrid` | warm | 6 portal modules: Records, Scheduling, Messaging, Telehealth, Prescriptions, Billing |
| 4 | `ImageFeatures` | light | 2 photo-driven feature blocks: lab results access, secure messaging |
| 5 | `ComplianceSpotlight` | warm | Trust badge strip: HIPAA / HITECH / SOC 2 / FHIR pillars with compliance status text |
| 6 | `PortalArchitectureMap` [signature] | dark | 4-tier architectural diagram |
| 7 | `ComplianceDeepDive` | warm | HIPAA / HITECH / SOC 2 safeguards, audit, encryption, BAA detail |
| 8 | `BenefitsGrid` | light | Business outcomes, ROI framing |
| 9 | `IntegrationsPanel` | warm | Epic / Cerner / Athena / eCW / Doxy.me / Surescripts with HL7 FHIR / SMART on FHIR connection methods |
| 10 | `ProcessTimeline` | light | Implementation methodology |
| 11 | `RelatedPages` | warm | 2 cross-links: Product Discovery, MVP Development (services only) |
| 12 | `FAQ` | light | 6 questions focused on security, integration, timelines |
| 13 | `CTA` | accent | "Book a security review consultation" |

**Deviations from Archetype C recipe:**

- No `CaseStudySpotlight` in pilot — insertable when a real case is verified.
- `ComplianceSpotlight` added before signature as a trust-building gate — the buyer needs to see compliance credentials before investing attention in the architecture.
- `ComplianceDeepDive` elevated from optional to standalone after the signature. Compliance is the gate for this buyer; it can't be a footnote.
- `ImageFeatures` added after `FeatureGrid` — photo-driven blocks that show the product in use, per the two-track imagery strategy (v1.1).

Result: 13 sections. A long page, but every section answers a specific buyer question.

### 15.4 Insurance Portals (Archetype C — Regulated solution)

**Slug:** `insurance-portals`
**Route:** `/solutions/insurance-portals`
**Buyer:** VP of operations or claims at a mid-size P&C carrier — wants claims speed + agent productivity, regulatory but less consolidated than HIPAA
**Dominant question:** "How much faster can this actually make our claims and can it integrate with Guidewire?"
**Signature:** `ClaimsFlowComparison` — proportional time bars, legacy vs. portal

**Composition (12 sections):**

| # | Section | Tone | Notes |
|---|---|---|---|
| 1 | `Hero` | dark | Photo hero background. Headline: "Claims in hours, not weeks. Portals your agents actually want to use." |
| 2 | `MetricsStrip` | light | Claims speed · cost savings · retention · policy issuance speed (ranged with sources) |
| 3 | `PersonaComparison` | warm | Carrier / Agent & Broker / Customer Self-Service — three portal personas side-by-side. Placed early (before FeatureGrid) because the "one platform, three portals" framing is the key differentiator for this buyer. |
| 4 | `FeatureGrid` | light | 6 modules: Policy, Claims, Agent Portal, Quoting, Documents, Reporting |
| 5 | `ImageFeatures` | warm | 2 photo-driven feature blocks: claims processing dashboard, policyholder self-service |
| 6 | `ClaimsFlowComparison` [signature] | dark | Legacy vs. portal proportional time bars |
| 7 | `IntegrationsPanel` | warm | Guidewire, Duck Creek, Applied Epic, Hawksoft, Sapiens, OneShield with REST/SOAP connection methods |
| 8 | `BenefitsGrid` | light | Claims cycle reduction, cost savings, retention, scalability, agent relationships |
| 9 | `ProcessTimeline` | warm | Phased rollout methodology |
| 10 | `RelatedPages` | light | 2 cross-links: Product Discovery, MVP Development (services only) |
| 11 | `FAQ` | warm | 6 questions focused on integration, state regulatory variance, timelines |
| 12 | `CTA` | accent | "Book a core system integration review" |

**Deviations from Archetype C recipe:**

- `PersonaComparison` elevated to position 3 (before `FeatureGrid`) — this buyer's first question is "does it serve all three user types?" and the three-portal framing answers it immediately.
- No `ComplianceDeepDive` — insurance regulatory compliance is state-level and less consolidated than healthcare; compliance answers fold into the `FAQ` instead.
- No `CaseStudySpotlight` in pilot — insertable when verified.
- `ImageFeatures` added after `FeatureGrid` — photo-driven blocks per the two-track imagery strategy (v1.1).

Result: 12 sections. Longer than v1.0 but each addition was justified by buyer-journey analysis.

### 15.5 E-commerce Websites (Archetype D — Commerce solution)

**Slug:** `e-commerce-websites`
**Route:** `/solutions/e-commerce-websites`
**Buyer:** founder, VP of Digital, or head of e-commerce at a mid-market brand — conversion-focused, wants to own infrastructure, tired of platform fees
**Dominant question:** "Will a custom build actually outperform Shopify and pay for itself?"
**Signature:** `EcommerceAiShowcase` — 5-tile asymmetric bento grid showcasing AI-powered commerce capabilities (recommendations, search, pricing, bundling, analytics)

**Composition (11 sections):**

| # | Section | Tone | Notes |
|---|---|---|---|
| 1 | `Hero` | dark | Photo hero background. Headline: "Headless commerce, built for performance — and owned by you." |
| 2 | `MetricsStrip` | light | Custom-built conversion architecture · <1.5s target LCP · AI-powered personalisation · frictionless checkout (capability framing, no uncited %) |
| 3 | `FeatureGrid` | warm | 6 capabilities: Storefront, AI Recommendations, Inventory/Order Mgmt, Checkout/Payments, Multi-Channel/Headless, Marketing/Analytics |
| 4 | `ImageFeatures` | light | 2 photo-driven feature blocks: conversion-optimised storefronts, real-time analytics dashboards |
| 5 | `EcommerceAiShowcase` [signature] | warm | 5-tile bento with A/B/C variant rotation |
| 6 | `BenefitsGrid` | dark | Conversion-first architecture, performance, personalisation, scalability, ownership |
| 7 | `TechStackBlock` | light | Next.js, TypeScript, Tailwind, Node/.NET, PostgreSQL/MongoDB, Azure/AWS, Stripe/Braintree/Adyen, Algolia, Terraform |
| 8 | `ProcessTimeline` | warm | 5-phase: research, design, development, integration, launch |
| 9 | `RelatedPages` | light | 2 cross-links: Product Discovery, MVP Development (services only) |
| 10 | `FAQ` | warm | 7 questions: migration, ERP/CRM integration, PCI, SEO, scaling, B2B, maintenance |
| 11 | `CTA` | accent | "Book a free 30-minute discovery call" |

**Deviations from Archetype D recipe:**

- Dropped `CaseStudySpotlight` — greenfield; no real e-commerce case data yet (Decision B). Insertable when a verified case exists.
- Dropped `IntegrationsPanel` — integration names are woven into `features[3–5]`, `faqs[0–1]`, and `capabilities` prose (Decision C). A dedicated panel would repeat the same names without adding buyer value.
- Added `ImageFeatures` after `FeatureGrid` — photo-driven blocks per the two-track imagery strategy (v1.1).
- `MetricsStrip` uses capability framing instead of % ranges — audience test (§9.5) replaced three uncited % metrics with honest architectural descriptors. This is the reference implementation for how to handle metrics when no cited data exists.

Result: 11 sections. The first Archetype D pilot and the reference for audience-tested content integrity.

### 15.6 Refactor strategy (pilot migration order)

To execute the pilot without breaking the existing site, follow this order:

1. **Build new shared library alongside existing code** in `components/shared/`. Do not touch `components/solutions/` yet. Every shared component is token-compliant from day one.
2. **Build the two templates** (`ServiceTemplate`, `SolutionTemplate`) in `components/templates/`.
3. **Build the four signature components** in `components/signature/`.
4. **Create the four new data files** in `src/data/services/` and `src/data/solutions/`, populating them from the existing `src/data/solutions.ts` and `src/lib/content.ts` for the pilot pages only.
5. **Migrate the four pilot pages** (`app/services/product-discovery/page.tsx`, etc.) to use the new templates and data files.
6. **Run the theme-flip smoke test** on each pilot page: `data-theme="blue" ↔ data-theme="purple"`. Confirm every surface repaints.
7. **Run content integrity pass** on each pilot page. Confirm `_unverified` lists are complete.
8. **Delete the old `components/solutions/*` files** listed in [§3.6](#36-where-existing-components-violate-these-rules) once no page references them. Keep `components/solutions/unique/*` temporarily as reference while extracting patterns, then delete.
9. **Clean up `src/data/solutions.ts`** once all pilot solutions have migrated. The remaining (non-pilot) solutions stay in the old file until their own migration.

Post-pilot rollout: each subsequent service or solution page follows the 10-step process in [Section 13](#13-process--creating-a-new-service-or-solution-page).

---

## 16. Open questions and deferred decisions

These are things the v1.0 constitution does not resolve. They are here so future work knows what to revisit.

1. **Sanity / CMS integration.** The pilot uses flat TypeScript files for data. When CMS adoption happens, the data schemas in [Section 7](#7-data-schema) need to be mapped to Sanity document types (or Payload collections). The `src/lib/content.ts` abstraction layer mediates the switch. Deferred until post-pilot.
2. **Case study library.** `CaseStudySpotlight` is defined but there is no content library yet. Deferred until at least 2 verified cases exist.
3. **Internationalization.** All copy is en-US. i18n would affect the data schema (all strings become localized records). Deferred indefinitely — no current business need.
4. **Dark-mode by user preference.** The theme-switch system supports multiple themes but the pilot only exposes `blue`. If a user-facing dark mode is added, `tone="dark"` sections will need to re-check contrast against the dark-mode palette.
5. **Animation standards (partially resolved v1.1).** Scroll-triggered reveals use `useScrollReveal` hook + `scroll-animations.css` with IntersectionObserver and CSS `@keyframes`. `prefers-reduced-motion` respected. Interactive signature components use CSS transitions. Full motion design language (page transitions, loading states) remains deferred.
6. **SEO page schema variants.** `src/lib/schema.ts` needs extensions for `Service` and `Product` schema JSON-LD variants that the solution pages use. Deferred to the pilot implementation.
7. **Lead-magnet / content-upgrade slots.** Sections like "Download the HIPAA portal checklist" are hinted at in the marketing brief but not in the pilot. Future sections: `LeadMagnetBlock`, `DownloadCTA`.
8. **A/B testing of composition.** No framework for testing alternate compositions yet. Deferred until traffic justifies it.
9. **Mobile navigation of a signature section.** Some signature sections (e.g., `ClaimsFlowComparison` on ≤ 375px) may benefit from a horizontal carousel. UX pattern not yet decided.
10. **Post-pilot audit cadence.** How often to audit the constitution for drift (quarterly? per-quarter-of-growth?). Deferred.

---

## 17. Changelog

| Version | Date | Changes |
|---|---|---|
| **1.0** | 2026-04-08 | Initial constitution. Pilot scope: `/services/product-discovery`, `/services/mvp-development`, `/solutions/patient-portals`, `/solutions/insurance-portals`. Establishes Option B direction (shared library + two template variants), the four tones, the four archetypes, the shared component library, the theming hard rules, the data schema, content integrity rules, responsiveness standards, signature section pattern, 10-step creation process, and 5 prompt templates. |
| **1.1** | 2026-04-10 | Two-track imagery strategy: photo-driven solutions, illustration-driven services. New `ImageFeature` section component. Interactive signature components. Scroll-triggered animations. Resolves open question #5 (animation standards, partial). |
| **1.2** | 2026-04-10 | Hero redesigned as box card matching homepage. Solution hero images changed from split layout to full-bleed background with gradient scrim. Removed CSS color filters — photos display at original colors. Added Step 7.5 (imagery workflow) to 10-step process. Updated prompt templates §14.1 and §14.2 with imagery deliverables. |
| **1.3** | 2026-04-10 | Pilot expanded to 5 pages with `/solutions/e-commerce-websites` (Archetype D). Added §9.5 Audience test (hard) — 3-question buyer relevance gate with common failure modes and replacement patterns. Added §9.6 Self-challenge protocol (hard) — structured default→audience→integrity→counter-cost→conclusion flow. Added Step 7.7 (audience test pass) and Step 7.8 (populate relatedPages) to 10-step process. Fully rewrote §14.1 and §14.2 prompt templates to be autonomous — research, strategy, audience testing, and self-challenge execute without user-provided slots. Added §15.5 E-commerce Websites reference composition (first Archetype D). Updated §15.1–15.4 reference compositions to reflect current state (relatedPages on all pages; imageFeatures, complianceSpotlight, and personaComparison placement on solutions). Added Archetype D reference note (§6.4). Renumbered §15.5 Refactor strategy → §15.6. |
| **1.4** | 2026-04-10 | **RelatedPages standardization.** Based on competitive research across Accenture, Thoughtworks, Slalom, Deloitte, Cognizant, Stripe, and others. Key changes: (1) Added `RelatedPageItem` interface to §7.2 data schema with new `pageType: 'service' \| 'solution'` field — renders subtle type badge on cards and enables future tag-based auto-matching. (2) Rewrote Step 7.8 to codify mixed service/solution cross-linking (validated by research — no major consultancy separates types), journey-aware descriptions (unique per source→destination pair, not generic capability summaries), and contextual section headings (ServiceDetailTemplate: "See This Capability in Action"; SolutionDetailTemplate: "The Expertise Behind This"). (3) Added scalability note for migration to tag-based auto-matching at 15+ pages. (4) Updated all summary checklists and deliverables lists. Companion reference doc: `docs/content-strategy/service-solution-content-voice-guide.md` (content tone/style). |

---

*End of constitution. When in doubt, re-read [Section 2](#2-core-design-philosophy) and [Section 13](#13-process--creating-a-new-service-or-solution-page). When still in doubt, document the ambiguity in [Section 16](#16-open-questions-and-deferred-decisions) and ask.*
