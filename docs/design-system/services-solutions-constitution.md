# Services & Solutions Design Constitution

> **Executive summary.** This document is the single source of truth for how every services and solutions page on the AIvanceWorks website is designed and built. It codifies a **shared skeleton + two template variants** approach: a unified component library and design language, expressed through two page templates (ServiceTemplate and SolutionTemplate) whose internal composition is tuned **per page** to match the buyer journey. Brand consistency is enforced through theme tokens, section rhythm, and content integrity rules. Differentiation between industries, services, and offerings happens through **content, imagery, iconography, and one signature section per page** — never through color, palette, or layout chaos. This is a living document: any deviation must be recorded back into it. Supplementary material (rationale, examples, prompt templates, pilot references) lives in `constitution-reference.md` and `constitution/`. This file contains all enforceable rules.

**Version:** 2.0
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
14. [Prompt templates](#14-prompt-templates) *(→ constitution/prompt-templates.md)*
15. [Reference — pilot pages](#15-reference--pilot-pages-and-their-compositions) *(→ constitution/pilot-compositions.md)*
16. [Open questions](#16-open-questions-and-deferred-decisions) *(→ constitution/open-questions.md)*
17. [Changelog](#17-changelog) *(→ constitution/changelog.md)*

**Companion files:** [Constitution Reference](constitution-reference.md) | [Voice Guide](../content-strategy/service-solution-content-voice-guide.md) | [Services Catalog](../services-catalog.md)

> **Services source of truth:** The canonical list of all services, their descriptions, capabilities, and routes lives in [`docs/services-catalog.md`](../services-catalog.md). The navigation structure is defined in `aivanceworks-website/src/lib/constants.ts`. The legacy `src/company details/markup/02-services.md` is retained for historical reference only and should NOT be used for new page development.

---

## 1. Purpose and scope

This constitution governs every `/services/*` and `/solutions/*` page on the AIvanceWorks website. It ensures every page is produced through a deliberate, repeatable workflow and the component/pattern library stays coherent as it scales.

**Pilot scope:** `/services/product-discovery`, `/services/mvp-development`, `/solutions/patient-portals`, `/solutions/insurance-portals`, `/solutions/e-commerce-websites`.

**What this is not:** not a whole-site style guide, not a CMS schema, not the pilot implementation plan, not a rigid template. Pages compose sections differently to match their audience.

**Audience:** developers, designers, future Claude sessions, and PR reviewers.

**Deviation:** when you deviate, update this file per [Section 12](#12-how-to-deviate-from-this-document) so the deviation becomes canonical.

---

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

---

## 3. Theming rules (hard)

Hard rules — violations block merge. They preserve the testable guarantee in §2 principle 6 (single brand palette).

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

See [`constitution/theming-examples.md`](constitution/theming-examples.md) for before/after code examples. The rules in §3.2 and §3.3 above are the enforceable standard; the examples are a learning aid. The `scripts/token-hygiene.sh` lint script automates detection of violations.

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

See [`constitution-reference.md` §3.6](constitution-reference.md#36--where-existing-components-violate-theming-rules) for the audit of known violations. The `scripts/token-hygiene.sh` script automates detection.

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

**`ComplianceSpotlight`** — a lighter-weight compliance callout with eyebrow, title, status text, 3–4 pillar cards, and optional certification badges. Used on solution pages where compliance matters but doesn't warrant a full `ComplianceDeepDive`. **New component created in the pilot** for Insurance Portals and E-commerce; reusable by any solution needing a compliance signal without the deep-dive detail.

**`PersonaComparison`** — a side-by-side persona card grid showing 2–3 buyer personas with icons, titles, subtitles, and feature lists. Each card gets an accent color (`brand`, `accent`, or `secondary`). Optional footer note. **New component created in the pilot** for Patient Portals; reusable by any page targeting multiple buyer personas.

**`ImageFeature`** — a section rendering `imageFeatures` data as alternating image+text blocks. Each block has a heading, description, and a photo with alt text. Layout alternates image-left/image-right on desktop, stacks on mobile. **New component created in the pilot** for Patient Portals and E-commerce; reusable by all solution pages following the two-track imagery strategy (§11.5).

**`RelatedPages`** — cross-link cards (2–3) pointing to related services and solutions. Each card shows title, journey-aware description, icon, and a `pageType` badge ("SERVICE" / "SOLUTION"). Contextual headings change based on the calling template (see Step 10). **New component created in v1.4** for all pilot pages; reusable by every services and solutions page.

### 5.3 The Section primitive as rhythm enforcer

The `Section` component (`src/components/shared/primitives/Section.tsx`) is the single point of enforcement for tone and vertical rhythm. For the full reference implementation, see [`constitution-reference.md` §5.3](constitution-reference.md#53--section-primitive-reference-implementation).

**Key properties:**

- `tone` is the only API surface for color. Components that consume `Section` never pick their own background.
- `size` encodes the vertical rhythm scale: `lg` (default for major sections), `md` (tighter, e.g., `MetricsStrip`), `sm` (compressed spacers).
- `withGrid` emits the brand grid overlay on dark sections using a CSS var (`--brand-grid`), not a hardcoded color.
- `data-tone` attribute enables child components to conditionally restyle.
- **Nothing color-related** is visible in JSX consumers of `Section`. That's the point.

**Every page section is wrapped in `Section`.** No exceptions in shared components. Signature sections also use `Section` unless they have a specialized layout — and even then, they respect tone tokens.

### 5.4 Where to put things

| You are adding… | Put it in… |
|---|---|
| A new small building block used by multiple sections | `components/shared/primitives/` |
| A new section that will be reused by 2+ pages | `components/shared/sections/` |
| A one-off section used by a single page (its signature) | `components/signature/` |
| A per-page layout template | `components/templates/` (new — see Section 6) |
| A page wrapper or layout | `app/services/layout.tsx` or `app/solutions/layout.tsx` |

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

**B vs. D decision guide.** Archetypes B (Technical) and D (Commerce) share near-identical default compositions but target different buyer mindsets. Use this tiebreaker:

- Choose **B (Technical)** when the buyer's primary concern is **execution quality and technical capability** — they want to know *how* you build, what stack you use, and that your team can deliver.
- Choose **D (Commerce)** when the buyer's primary KPI is **revenue, conversion, or transaction volume** — they want to know *what business outcome* you'll drive, not how you'll drive it.
- When both apply (e.g., a custom e-commerce build where the buyer cares about both execution and revenue), **default to D** and cherry-pick B's technical-depth sections (`TechStackBlock`, detailed `ProcessTimeline`).

---

## 7. Data schema

One TypeScript file per page under `src/data/services/` or `src/data/solutions/`. Components consume data through props only — the dynamic route page (`app/services/[slug]/page.tsx` or `app/solutions/[slug]/page.tsx`) is the only import site for a data file, via the `getServicePageData` / `getSolutionPageData` abstraction in `src/lib/content.ts`.

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
  description: string;           // required — always shown in MetricsCard
}

export interface FeatureItem {
  icon: string;         // Lucide icon name
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface ProcessStepData {
  title: string;
  description: string;
  duration: string;              // required
  deliverable: string;           // required
}

export interface FAQItem {
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
}

export interface EngagementModelData {
  name: string;                      // "1-Week Sprint"
  duration: string;                  // "1 week"
  priceFrom?: string;                // "$12,000" — optional, not all tiers expose price
  whatsIncluded: string[];           // CheckList items
  suitableFor: string;              // one-line persona fit
  primaryCta: CTA;
  featured?: boolean;               // highlights the recommended tier
}

export interface SafeguardItem {
  icon: string;
  title: string;
  description: string;
}

export interface ComplianceDetail {
  frameworks: string[];              // ["HIPAA", "HITECH", "SOC 2 Type II"]
  safeguards: SafeguardItem[];       // technical safeguards
  auditNote: string;                 // single audit-readiness statement
  partnerAgreements?: string[];      // ["BAA", "DPA"]
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
  description: string;               // journey-aware — see Step 10
  href: string;
  icon: string;                       // Lucide icon name
  pageType: 'service' | 'solution';   // renders subtle badge, enables future auto-matching
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

// ─── Section keys (template dispatch) ─────────────────────

export type SectionKey =
  | 'hero' | 'metricsStrip' | 'featureGrid' | 'benefitsGrid'
  | 'processTimeline' | 'techStackBlock' | 'integrationsPanel'
  | 'faq' | 'ctaBlock' | 'discoveryMethodology' | 'engagementModels'
  | 'complianceDeepDive' | 'complianceSpotlight' | 'personaComparison'
  | 'relatedPages' | 'imageFeatures' | 'signature';

// ─── Compound section data ────────────────────────────────

export interface CompliancePillar {
  icon: string;
  title: string;
  description: string;
}

export interface ComplianceSpotlightData {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  statusText: string;
  pillars: CompliancePillar[];
  badges?: string[];
}

export type PersonaAccent = 'brand' | 'accent' | 'secondary';

export interface PersonaCard {
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
  accent?: PersonaAccent;
}

export interface PersonaComparisonData {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  personas: PersonaCard[];
  footerNote?: string;
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
  canonicalPath: string;             // e.g. '/services/product-discovery'

  // Navigation
  breadcrumb: BreadcrumbItem[];

  // Composition — lives in the data file, NOT passed as a separate prop.
  // The template reads `data.composition` to decide which sections to render.
  composition: SectionKey[];

  // Hero
  hero: {
    badge?: string;
    badgeHref?: string;              // optional link target for badge
    headline: string;
    subhead: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
    metrics?: HeroMetric[];          // right-column MetricsCard
    heroImage?: { src: string; alt: string }; // solution pages — full-bleed bg
  };

  // Composable sections — a page opts into which it uses by including
  // the corresponding field. Undefined fields are simply not rendered.
  metricsStrip?: HeroMetric[];
  features?: FeatureItem[];          // typically 6
  benefits?: BenefitItem[];          // 4–6
  processSteps?: ProcessStepData[];  // 5
  capabilities?: string[];           // 8–10
  technologies?: string[];           // 8–12
  integrations?: IntegrationGroup[]; // new shape — see 7.3
  complianceSpotlight?: ComplianceSpotlightData;
  personaComparison?: PersonaComparisonData;
  relatedPages?: RelatedPageItem[];  // 3 cross-links — see Step 10
  faqs: FAQItem[];                   // 5–6 (required)
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

export interface ImageFeatureData {
  heading: string;
  description: string;
  image: { src: string; alt: string };
}

export interface SolutionPageData extends BasePageData {
  industry: 'healthcare' | 'insurance' | 'retail' | 'fintech' | string;
  industryMetrics?: HeroMetric[];
  complianceDetail?: ComplianceDetail;
  caseStudySpotlight?: CaseStudyRef;
  imageFeatures?: ImageFeatureData[];
  signatureComponent: string;  // component name, e.g. 'PortalArchitectureMap'
}

// ─── Service extension ────────────────────────────────────

export interface ServicePageData extends BasePageData {
  category: 'software-engineering' | 'infrastructure' | 'ai-ml' | 'strategy' | string;
  methodology?: MethodologyCard[];
  engagementModels?: EngagementModelData[];
  pricing?: {
    startingPrice: string;
    whatsIncluded: string[];
  };
  signatureComponent: string;  // component name, e.g. 'MvpDualTrackRoadmap'
}
```

### 7.3 Why `integrations` is a typed shape, not an array of strings

The `IntegrationGroup` interface uses structured fields (`name`, `category`, `connectionMethod`, `capabilities`) instead of `string[]` to support the `IntegrationsPanel` component's display needs. See [`constitution-reference.md` §7.3](constitution-reference.md#73--why-integrations-is-a-typed-shape) for the full rationale.

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

### 7.5 Dynamic route and component registry

Both services and solutions use a **single dynamic route** per type:

- `app/services/[slug]/page.tsx` — handles all service pages
- `app/solutions/[slug]/page.tsx` — handles all solution pages

**Do NOT create individual page directories per service or solution.** All per-page differentiation lives in the data file and the component registries inside the dynamic route.

The dynamic route page must:

1. Load data via `getServicePageData(slug)` / `getSolutionPageData(slug)` from `@/lib/content`.
2. Resolve the signature component via a `SIGNATURE_COMPONENTS` registry keyed by `data.signatureComponent`.
3. Resolve the hero illustration (services only) via a `HERO_ILLUSTRATION_COMPONENTS` registry keyed by `data.heroIllustrationComponent`.
4. Emit metadata via `constructMetadata(...)` using data fields.
5. Emit JSON-LD (Service schema, BreadcrumbList, FAQPage) via `<JsonLd>`.
6. Render the template: `<ServiceDetailTemplate data={data} signature={...} heroIllustration={...} />`.

**Adding a new service page requires four steps:**

1. Create `src/data/services/<slug>.ts` with the full `ServicePageData` object.
2. Create signature + hero illustration components in `components/signature/`. Export from `components/signature/index.ts`.
3. Add one entry to `SIGNATURE_COMPONENTS` and one to `HERO_ILLUSTRATION_COMPONENTS` in `app/services/[slug]/page.tsx`.
4. Add the slug to `SERVICE_PAGE_MODULES` in `src/lib/content.ts`.

**Adding a new solution page requires three steps:**

1. Create `src/data/solutions/<slug>.ts` with the full `SolutionPageData` object.
2. Create signature component in `components/signature/`. Export from `components/signature/index.ts`.
3. Add one entry to `SIGNATURE_COMPONENTS` in `app/solutions/[slug]/page.tsx` and the slug to `SOLUTION_PAGE_MODULES` in `src/lib/content.ts`.

The `composition` array in each data file is the declarative summary of "what does this page look like?" — section order, which sections are included, and which are omitted.

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

- **Swappable.** A page's signature can be replaced with a different signature by editing only the component registry in the dynamic route file, not the other sections. Never wire a signature into sibling components.
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

**When to run it:** The audience test is not a final review step — it is applied *during* content creation (Step 7 of the 13-step process) and again as a dedicated pass (Step 9). Every `_unverified` item should be resolved through the lens of "does the target buyer care, and is this honest?"

> Rationale: see [`constitution-reference.md` §9.5](constitution-reference.md#95--audience-test-rationale).

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

> Rationale: see [`constitution-reference.md` §9.6](constitution-reference.md#96--self-challenge-protocol-rationale).

### 9.7 Review gate

**Before any service or solution page merges to main:**

1. The `_unverified` list must be **empty** or explicitly cleared by a named reviewer with the comment `_unverified entries reviewed and accepted as ranged/cited` in the PR description.
2. A human (not Claude) must sign off on all public-facing numbers, case studies, and logos.
3. The PR checklist (to be added to `.github/pull_request_template.md`) includes a "Content integrity confirmed" checkbox.

This rule applies to copy in the data file **and** any inline copy inside components (though inline copy in shared components should be minimized — prefer data-driven copy).

### 9.8 Headline and copy length rules

- **Hero headline:** max 12 words / 70 characters. Must communicate the core value proposition in a single scannable line.
- **Hero subhead:** max 25 words. Expands on the headline with buyer-relevant context.
- **FAQ answers:** 50–120 words each. Lead with the direct answer in the first sentence, then expand. Maintain consistent depth across all FAQs on a page — a 50-word answer next to a 150-word answer signals uneven quality.
- **`ImageFeature` headings:** max 6 words. Outcome-focused, not feature-descriptive.
- **`ImageFeature` descriptions:** 15–30 words. One sentence, focused on what the buyer gets — not how it works.
- **`ImageFeature` alt text:** must describe the visual content of the image, not repeat the heading. Example: "Clinician reviewing patient records on a tablet in a hospital corridor" — not "Patient Portal Dashboard."

### 9.9 Cross-reference — content voice guide

For detailed tone, voice, and copy-pattern guidance, see `docs/content-strategy/service-solution-content-voice-guide.md`. The voice guide and this constitution are complementary:

- **This constitution** defines structure, composition rules, rhythm, theming, and data schemas.
- **The voice guide** defines language, tone, CTA patterns, metric framing, and per-section copy conventions.

Both documents must be consulted when creating or reviewing a page. The voice guide's "so what / prove it / only us" test is the tone-level equivalent of this constitution's audience test (§9.5).

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

### 10.8 Inter-page navigation

When a user navigates between service/solution pages:

- **Scroll position** resets to top on page transition.
- **Breadcrumbs** reflect the current page hierarchy (Home → Services → Category → Page).
- **`RelatedPages`** section provides lateral navigation to related services/solutions (see Step 10 for data population rules).
- **Browser back button** returns to the previous scroll position on the source page.
- **Prefetching:** linked service/solution pages should be prefetched on hover using Next.js `<Link>` prefetch behavior for instant transitions.

### 10.9 Loading and disabled states (deferred)

Loading and disabled states for section components are deferred until CMS integration replaces the current flat-file data layer. When implemented:

- **Skeleton screens** should match section layout dimensions (e.g., a `FeatureGrid` skeleton renders 6 placeholder cards at the correct grid size).
- **CTA buttons** should show a spinner icon and be disabled (`aria-disabled="true"`, `pointer-events-none`) during async operations (form submission, booking flow).
- **Error states** should provide a clear message and a retry action. Empty states (no data for a section) should hide the section entirely rather than render an empty shell.

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

**Imagery workflow for new pages** (integrated into §13 Step 8):
1. **Research:** Identify 3-4 photo subjects per solution page (hero + 2-3 features) based on the industry and buyer persona.
2. **Source:** Download from Unsplash. Landscape orientation, minimum 1200px wide, JPEG format.
3. **Store:** `public/images/solutions/{slug}/hero.jpg`, `feature-1.jpg`, etc.
4. **Data:** Add `heroImage` to the `hero` block and `imageFeatures` array to the data file. Add `'imageFeatures'` to the `composition` array after `'featureGrid'`.
5. **For services:** Create an inline SVG illustration component in `components/signature/`, export it from `components/signature/index.ts`, add `heroIllustrationComponent` to the data file, and register it in `HERO_ILLUSTRATION_COMPONENTS` in `app/services/[slug]/page.tsx`.

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

This is the 13-step workflow every future Claude session (and human contributor) follows. It is the operational heart of the constitution. Prompt templates in [Section 14](#14-prompt-templates) wrap these steps for copy-paste use.

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

### Step 8 — Source and configure imagery

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
4. Set `heroIllustrationComponent: '{Name}HeroIllustration'` in the data file.
5. Register the component in `HERO_ILLUSTRATION_COMPONENTS` in `app/services/[slug]/page.tsx`.
6. Ensure `metricsStrip` is populated in the data file (metrics display below the hero, not in the hero card).

**Output:** imagery files in place, data file updated with image references, registry updated.

### Step 9 — Audience test pass

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

### Step 10 — Populate `relatedPages`

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

### Step 11 — Content integrity pass

Walk every number, quote, logo, and claim in the data file. For each:

- Verified from past work? OK.
- Framed as an industry range with a source? OK.
- Unverified? → add to `_unverified` list with reason.
- Invented? → remove it.

This step now runs **after** the audience test (Step 9), which means most integrity issues have already been caught and resolved. This step is the final sweep for anything the audience test missed.

See [Section 9](#9-content-integrity-rules-hard).

**Output:** cleaned data file with accurate `_unverified` list.

### Step 12 — Responsiveness check

- Ensure every section renders cleanly at 375, 768, and 1280.
- Ensure the signature section has a documented mobile layout in its component file header comment.
- Ensure grids collapse predictably (4 → 2 → 1 columns, or 3 → 2 → 1).

**Output:** visually validated page at all required breakpoints.

### Step 13 — Record any deviations

If you deviated from the archetype, rhythm, tone rules, or added a new pattern, update the constitution per [Section 12](#12-how-to-deviate-from-this-document). Do not skip this step. Drift starts here.

**Output:** updated `services-solutions-constitution.md` with deviation recorded, or confirmation that no deviation occurred.

---

## 14. Prompt templates

Prompt templates for launching new Claude sessions are maintained in [`constitution/prompt-templates.md`](constitution/prompt-templates.md). They wrap the 13-step process (Section 13) for copy-paste use. An agent already dispatched to create a page does not need to read them.

## 15. Reference — pilot pages and their compositions

Pilot page breakdowns are maintained in [`constitution/pilot-compositions.md`](constitution/pilot-compositions.md). When creating a new page, read one actual data file as an exemplar (e.g., `src/data/services/product-discovery.ts`) rather than these summaries. The archetype recipes in Section 6 are the authoritative starting compositions.

## 16. Open questions and deferred decisions

See [`constitution/open-questions.md`](constitution/open-questions.md). These are explicitly unresolved — they do not guide current page creation.

## 17. Changelog

See [`constitution/changelog.md`](constitution/changelog.md).

---

*End of constitution. When in doubt, re-read [Section 2](#2-core-design-philosophy) and [Section 13](#13-process--creating-a-new-service-or-solution-page). When still in doubt, document the ambiguity in `constitution/open-questions.md` and ask.*
