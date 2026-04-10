# Design: Unified Services & Solutions Design System (Pilot)

**Created:** 2026-04-08
**Status:** Draft — awaiting user review before implementation planning
**Scope:** Pilot build of 4 pages (2 services, 2 solutions) on a unified, theme-driven component library
**Authors:** Hari K (decisions) + Claude (synthesis)

---

## 1. Overview

The AIvanceWorks website currently has two parallel approaches to service and solution pages:

- **Solutions** (`/solutions/*`) — uses a typed `SolutionData` schema and a partially-reusable component library (`SolutionHero`, `SolutionFeatures`, etc.) plus a "unique" signature-component slot per industry
- **Services** (`/services/*`) — hand-coded page components pulling content from `src/lib/content.ts`, with duplicated markup and no shared section library

Both share the same generic dark-navy + blue visual system, which makes the site feel like every other B2B consultancy. Worse, the existing solution components **bypass the project's theme-token system entirely** (hardcoded `bg-gray-50`, `text-blue-600`, `from-blue-600`, etc.), so the `data-theme="..."` switcher in `themes/blue.css` → `themes/purple.css` doesn't actually work.

This design establishes a single unified component library and two page-template variants — one for services, one for solutions — both composed from the same shared atoms, both strictly driven by theme tokens, and both letting each individual page **editorially compose** its own section list rather than filling a rigid template.

The pilot validates this approach on four pages. A guide / constitution document (written in parallel by a sub-agent) captures the principles so future pages can be created in separate sessions without re-holding the strategic conversation that produced this spec.

## 2. Goals and non-goals

### Goals
1. **One component library**, not two. Services and solutions share the same atoms and reusable section components. Only the signature sections are per-page custom.
2. **Strict theme-token discipline**. Zero hardcoded Tailwind color classes in shared components. A theme swap from blue to purple re-skins every page with zero component edits.
3. **Editorial per-page composition.** Each page picks which sections it needs based on its audience and drops the rest — no forced symmetry across pages.
4. **Strategic section rhythm.** Dark and light sections are placed intentionally (never adjacent dark, max 2 dark per page) to create visual emphasis without fatigue.
5. **Signature sections that carry weight.** One custom visualization per flagship page, designed around the buyer's single most-asked question.
6. **Factually correct public content.** Every number and claim on a public-facing page is verifiable or explicitly ranged with a source.
7. **Mobile-first, WCAG 2.1 AA, responsive.** No shortcuts. Every signature section has a documented mobile layout.
8. **Extensible.** New pages in future sessions should be composable from the library with a clear workflow — no rediscovery of principles.

### Non-goals (explicitly out of pilot scope)
- The other 9 solutions in `NAVIGATION.solutionsMenu` (EHR Development, Hospital Management Systems, Underwriting Software, Agency Management, Policy Admin, Quoting, Document Management, E-Commerce, Retail)
- The other 11+ services in `NAVIGATION.servicesMenu`
- New palette exploration (current blue theme stays)
- Blog, case studies, team, about, contact pages
- Booking / CRM / email automation changes
- Any `src/lib/content.ts` services not in the 2 pilot services

These get built post-pilot using the constitution + prompt templates, not by re-doing this brainstorm.

## 3. Key decisions summary

A compressed view of every load-bearing decision from the brainstorm. Each one is expanded in later sections.

| # | Decision | Rationale |
|---|---|---|
| 1 | Pilot = 4 pages (Product Discovery, MVP Development, Patient Portals, Insurance Portals) | Covers both template variants and both buyer personas |
| 2 | Option B: shared library + two page templates, rejected Option A (fully uniform) and C (fully bespoke) | Matches how Thoughtworks/EPAM/Accenture structure their sites; serves different buyer journeys without drift |
| 3 | Services vs. solutions are different buyer personas | Capability shoppers vs. outcome shoppers — different trust questions, different attention patterns |
| 4 | Keep the existing blue theme palette unchanged | User explicitly rejected palette exploration; differentiation comes from content, not color |
| 5 | Hard theming discipline: only theme tokens, never raw Tailwind color classes | Testable via `data-theme="purple"` swap |
| 6 | 4 section tones: dark / light / warm / accent, with strategic rhythm | Dark sections are emphasis moments; rhythm prevents fatigue |
| 7 | Per-page editorial composition; archetype recipes as starting points | Forced templates flatten buyer journeys |
| 8 | Shared component library in `src/components/shared/`; signature components in `src/components/signature/` | Clear separation between reusable and per-page custom |
| 9 | `BasePageData` schema with `ServicePageData` / `SolutionPageData` extensions | One source of truth; variant-specific fields isolated |
| 10 | Content integrity rules: no fabricated stats, `_unverified` list, review gate | Real users see these pages |
| 11 | Responsiveness + WCAG 2.1 AA mandatory, typography scale normalized | Mockups revealed text-size and responsiveness were under-considered |
| 12 | 4 new shared components: `DiscoveryMethodology`, `EngagementModels`, `ComplianceDeepDive`, `IntegrationsPanel` | Needed by the pilot pages; reusable across future pages |
| 13 | 4 per-page signature components, modular and swappable | Editorial freedom on the "wow moment" without touching shared library |
| 14 | Existing `Solution*` components get refactored or deleted | They violate theme-token discipline |
| 15 | Constitution document (written in parallel) becomes the long-lived reference | User wants to avoid re-holding this conversation for future pages |

## 4. Theming and section rhythm

### 4.1 Theming rules (hard, non-negotiable)

The project already has a full theming system at `src/styles/globals.css` + `src/styles/themes/{blue,purple}.css`. It exposes semantic tokens via Tailwind 4's `@theme` bridge to CSS custom properties. The infrastructure is good. The problem is the existing components don't use it.

**Every shared component and every signature component must use theme tokens only.**

**Forbidden in shared / signature components:**
```tsx
// ❌ BAD — hardcoded Tailwind color shades
<section className="bg-gray-50 py-8">
  <h2 className="text-gray-900">Title</h2>
  <p className="text-gray-600">Body</p>
  <Button className="bg-blue-600 hover:bg-blue-700">CTA</Button>
</section>

// ❌ BAD — hex values
<div style={{ background: '#3b82f6' }} />

// ❌ BAD — hardcoded gradients
<section className="bg-gradient-to-br from-blue-600 to-indigo-700">
```

**Required — theme token equivalents:**
```tsx
// ✅ GOOD — semantic theme tokens
<section className="bg-surface-warm py-16 lg:py-24">
  <h2 className="text-text-heading">Title</h2>
  <p className="text-text-body">Body</p>
  <Button className="bg-brand-600 hover:bg-brand-700">CTA</Button>
</section>

// ✅ GOOD — brand/accent gradients
<section className="bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to">
```

**The testable guarantee:** switching `<html data-theme="blue">` to `<html data-theme="purple">` re-skins every page with zero code changes. If a page doesn't re-skin, some component is violating the rule. This is the regression test.

**Tokens available** (from the existing theme system):

| Category | Tokens |
|---|---|
| Brand scale | `brand-50` → `brand-900` |
| Accent scale | `accent-50` → `accent-700` |
| Dark surface gradient | `surface-dark-from`, `surface-dark-via`, `surface-dark-to` |
| Surface roles | `surface-dark`, `surface`, `surface-elevated`, `surface-light`, `surface-warm`, `surface-white` |
| Text roles | `text-light`, `text-heading`, `text-body`, `text-muted`, `text-subtle`, `text-secondary` |
| Borders | `border-dark`, `border-light`, `border-hover`, `border-subtle` |
| Glass | `glass-bg`, `glass-border`, `glass-hover`, `glass-nav` |
| Shadows | `shadow-card`, `shadow-card-sm`, `shadow-glow`, `shadow-glow-sm`, `shadow-glow-faint`, `shadow-panel`, `shadow-brand-panel`, `shadow-brand-panel-lg`, `shadow-brand-card`, `shadow-brand-card-sm`, `shadow-brand-badge`, `shadow-nav` |

### 4.2 Section rhythm — 4 tones

Every reusable section wraps its content in a `Section` primitive that takes a `tone` prop and maps to theme tokens:

| Tone | Background | Text | When to use | Feeling |
|---|---|---|---|---|
| **`dark`** | `bg-surface-dark` + `bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to` + subtle grid overlay + glow | `text-text-light` | Hero, signature section, occasionally a closing section | Gravity, emphasis, premium |
| **`light`** | `bg-surface-white` | `text-text-heading` (headings), `text-text-body` (prose) | Content-heavy, scannable sections (Features, Process, FAQ) | Clean, clear, readable |
| **`warm`** | `bg-surface-warm` | `text-text-heading`, `text-text-body` | Soft alternation between white sections to break monotony | Soft break, subtle rhythm |
| **`accent`** | `bg-gradient-to-r from-brand-600 to-accent-500` | `text-white` / `text-text-light` | Final CTA only | Brand finale, decisive |

### 4.3 Rhythm rules (load-bearing)

1. **Never two `dark` sections adjacent.** Kills the signature moment by dulling contrast.
2. **Maximum two `dark` sections per page.** Usually Hero + Signature. Occasionally Hero + Signature + a closing block.
3. **The `accent` tone is reserved for the final CTA.** Using it elsewhere devalues the close.
4. **Alternate `light` and `warm`** between dark moments to create subtle visual rhythm without noise.
5. **Apply the rhythm to whatever sections a page uses, not to a fixed order.** The rhythm is a constraint on tone sequence, not a constraint on which sections exist.

## 5. Page template approach

### 5.1 Why not a rigid template

I initially proposed a fixed 8-section template applied identically to every service and solution page. I challenged that:

1. Healthcare CIOs and startup founders have genuinely different attention patterns — forcing both into the same section order serves the template, not the buyer.
2. Most traffic to these pages is long-tail Google. Visitors see ONE page, so cross-page order consistency is a weak benefit.
3. Signature section placement should vary — top for skeptical audiences, middle for patient ones, end for persuasion-focused ones.
4. The tone rhythm doesn't depend on fixed section order; it just requires no adjacent dark sections.
5. Best-in-class sites (Thoughtworks, EPAM, Stripe, Vercel) do NOT use fixed orders on their industry/product pages.

**Verdict:** Flexible per-page composition with three structural anchors and four archetype recipes.

### 5.2 Structural anchors (non-negotiable)

- `Hero` — always position 1
- `FAQ` — near the end (universal web convention)
- `CTA` — always last
- Everything in between is an editorial decision per page

### 5.3 Placement heuristics (editorial guidance, not rules)

1. **Lead with what the buyer most needs.** Whatever they searched Google for, its section goes right after the hero.
2. **Place the signature section at the narrative break.** Middle for patient audiences; near top for skeptical audiences; just before CTA for persuasion pages.
3. **Proof before process for outcome-focused buyers; process before proof for risk-averse buyers.**

### 5.4 Archetype recipes

Not templates — starting points. New pages pick the closest archetype and deviate as their content demands. Each archetype is tuned to a buyer type.

**Archetype A — Strategic service** (Product Discovery, AI Strategy Consulting, IT Consulting)
Buyer: exploring / early-funnel; wants to understand *what they get* before trusting methodology
```
Hero → MetricsStrip (if meaningful numbers exist) → Methodology/Approach → Signature
  → ProcessTimeline → EngagementModels → FAQ → CTA
```
Typical density: 7–9 sections.

**Archetype B — Technical service** (MVP Development, Cloud Migration, Full-Stack Development)
Buyer: technical depth-checker; wants to see capability → roadmap → stack → price
```
Hero → MetricsStrip → FeatureGrid (capabilities) → Signature → BenefitsGrid
  → [ProcessTimeline if distinct from Signature] → TechStackBlock → EngagementModels → FAQ → CTA
```
Typical density: 8–10 sections.

**Archetype C — Regulated solution** (Patient Portals, Insurance Portals, FinTech)
Buyer: risk-averse, late-funnel; compliance and integration are the trust gates
```
Hero → MetricsStrip → FeatureGrid → Signature → ComplianceDeepDive (if compliance is acute)
  → BenefitsGrid → IntegrationsPanel → [CaseStudySpotlight if real] → ProcessTimeline → FAQ → CTA
```
Typical density: 9–11 sections.

**Archetype D — Commerce solution** (E-Commerce, Retail)
Buyer: outcome-focused; conversion and merchandising depth matter most
```
Hero → MetricsStrip → FeatureGrid → Signature → BenefitsGrid → CaseStudySpotlight
  → TechStackBlock → ProcessTimeline → FAQ → CTA
```
Typical density: 8–10 sections.

### 5.5 Target density

6–10 sections per page, firm floor and ceiling. Below 6 feels thin and under-informed; above 10 creates scroll fatigue.

## 6. Shared component library

Nested under `aivanceworks-website/src/components/shared/`:

- `components/shared/primitives/` — atoms (the building blocks that compose sections)
- `components/shared/sections/` — reusable sections (composed from primitives, wrapped in `Section`)
- `components/signature/` — per-page signature components (not shared)
- `components/templates/` — `ServiceDetailTemplate` + `SolutionDetailTemplate`

The bar for adding to `sections/` is: at least two pilot or upcoming pages will use it. Below that threshold it lives in `components/signature/` until a second consumer appears.

### 6.1 Primitives (atoms)

| Component | Purpose |
|---|---|
| `Section` | Rhythm enforcer. Props: `tone: 'dark' \| 'light' \| 'warm' \| 'accent'`, `size: 'sm' \| 'md' \| 'lg'` (vertical padding preset — `sm` for tight strips like `MetricsStrip`, `lg` for full sections like `Hero`), `id`, `className`, `withGrid` (toggles the subtle grid overlay on dark sections), `children`. Maps tokens via `bg-surface-*`, `text-text-*`. Every reusable section wraps in this. |
| `Container` | Responsive max-width wrapper (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) |
| `Badge`, `Button`, `Card` | shadcn/ui primitives, verified to use theme tokens (some may need refactor) |
| `IconTile` | Circular or square icon container with brand/accent background variants |
| `StatBlock` | Big number + label + description, theme-token colored |
| `CheckList` | Bullet list with check icons — icon color uses `text-success` (add a `--color-success` semantic token if the theme doesn't already have one) |
| `ChipRow` | Flex-wrapping rounded tag list |
| `StepBadge` | Numbered circle (for process/roadmap steps) |
| `MetricsCard` | Stacked big-number display (used in Hero right column and standalone MetricsStrip) |

### 6.2 Reusable sections

| Component | Default tone | When to use |
|---|---|---|
| `Hero` | `dark` | Always position 1. Optional right-column slot for metrics card, form, or image. |
| `MetricsStrip` | `light` | Horizontal strip of 3–4 big numbers. Use when the page has real, verifiable numbers that matter to the audience. |
| `FeatureGrid` | `light` or `warm` | 2/3/4-column icon + title + description cards. The "what we do" section. |
| `BenefitsGrid` | `light` or `warm` | Outcome-focused cards, optional stat on each. Distinct from MetricsStrip — this is about the *story*, not the *numbers*. |
| `ProcessTimeline` | `light` or `warm` | Horizontal 5-step timeline. Collapses to vertical on mobile. |
| `TechStackBlock` | `warm` | Capabilities checklist + tech chips + integrations chips (simple version). |
| `IntegrationsPanel` | `warm` | NEW — Expanded integrations panel with connection-method detail (used by Patient Portals for EHRs, Insurance Portals for core systems). |
| `CaseStudySpotlight` | `light` | Featured case: photo + quote + metrics. Only when a real case exists. |
| `TestimonialStrip` | `light` or `warm` | 2–3 quotes in a row. Only with written permission. |
| `LogoWall` | `light` | Client / tech / partner logos. Only with permission. |
| `FAQ` | `light` or `warm` | Accordion with JSON-LD ready markup. Near the end of every page. |
| `CTABlock` | `accent` | Final dual-CTA. Uses the accent gradient. |
| `Breadcrumbs` | — | Top-of-page trail. |

### 6.3 New reusable sections (created by pilot)

| Component | Purpose | First used by |
|---|---|---|
| `DiscoveryMethodology` | Card grid for methodology approaches (Design Sprints, JTBD, Assumption Mapping, Prototype Validation) | Product Discovery |
| `EngagementModels` | Pricing/engagement tier cards | Product Discovery, MVP Development |
| `ComplianceDeepDive` | Technical safeguards + audit detail + BAA | Patient Portals |
| `IntegrationsPanel` | Expanded integrations panel — generalizes across EHR (healthcare) and core admin systems (insurance) | Patient Portals, Insurance Portals |

### 6.4 Service-specific extensions

| Component | Purpose |
|---|---|
| `EngagementModels` | (Same as 6.3 — listed here because it's service-specific content-wise) |
| `PricingCard` | Starting price + "what's included" checklist, if a service has a simple pricing story |
| `TeamSpotlight` | "Who you'll work with" — optional, only when team bios exist |

## 7. Signature components

Not in the shared library. Each lives as a single-use component under `aivanceworks-website/src/components/signature/`. Modular — swappable on one page without touching others.

| Component | Page | Pattern |
|---|---|---|
| `DiscoveryBeforeAfter` | `/services/product-discovery` | Before column (chaos tokens) + after column (5 artifact preview cards) |
| `MvpDualTrackRoadmap` | `/services/mvp-development` | Dual-track timeline — engineering track on top, founder-demo track on bottom, 5 phases |
| `PortalArchitectureMap` | `/solutions/patient-portals` | 4-tier layered flow (Portal → Gateway → FHIR → EHR) wrapped in compliance envelope, side annotations |
| `ClaimsFlowComparison` | `/solutions/insurance-portals` | Two stacked tracks with proportionally-sized time bars — legacy vs. portal cycle |

Each signature component exports its own component, has its own tests, owns its own mobile layout, and is free to iterate without coordination with the shared library.

## 8. Data schema

File: `aivanceworks-website/src/types/pages.ts` (new)

```ts
export interface HeroMetric {
  value: string;
  label: string;
  description: string;
}

export interface Feature {
  icon: string;          // Lucide icon name
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
  duration: string;
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface IntegrationGroup {
  // NEW shape — enables IntegrationsPanel rich display
  name: string;                 // e.g. "Epic", "Guidewire PolicyCenter"
  category: string;             // e.g. "EHR", "Core Policy", "Billing"
  connectionMethod: string;     // e.g. "HL7 FHIR R4, SMART on FHIR" or "REST + SOAP"
  capabilities: string[];       // e.g. ["bi-directional sync", "real-time patient context"]
}

export interface MethodologyCard {
  icon: string;
  name: string;
  description: string;
}

export interface EngagementModel {
  name: string;                // e.g. "2-Week Discovery Sprint"
  duration: string;
  priceFrom?: string;
  whatsIncluded: string[];
  suitableFor: string;
  primaryCta: CTA;
}

export interface ComplianceDetail {
  standards: string[];           // e.g. ["HIPAA", "SOC 2 Type II", "HITECH"]
  technicalSafeguards: string[]; // detailed controls
  auditLogNotes: string;
  baaNotes: string;
}

export interface CaseStudyRef {
  slug: string;
  title: string;
  industry: string;
  primaryMetric: { value: string; label: string };
  quote?: { text: string; author: string; role: string };
}

/**
 * Known section keys the template understands.
 * Templates map these keys to their component modules.
 * Extending the library = adding a new key here + a new component.
 */
export type SectionKey =
  | 'hero'
  | 'metricsStrip'
  | 'featureGrid'
  | 'benefitsGrid'
  | 'processTimeline'
  | 'techStackBlock'
  | 'integrationsPanel'
  | 'faq'
  | 'ctaBlock'
  | 'discoveryMethodology'
  | 'engagementModels'
  | 'complianceDeepDive'
  | 'signature';

export interface BasePageData {
  slug: string;
  title: string;
  shortDescription: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalPath: string;

  // Page chrome
  breadcrumb: { label: string; href: string }[];

  /**
   * The ordered list of sections this page composes.
   * Template iterates this array, looks each key up in its section map,
   * and renders the matching component with the matching data field.
   *
   * Example: ['hero', 'metricsStrip', 'featureGrid', 'signature',
   *           'benefitsGrid', 'faq', 'ctaBlock']
   */
  composition: SectionKey[];

  // Core content (always present)
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
    metrics?: HeroMetric[];
  };

  // Composable sections — a page opts in by (a) listing the key in
  // `composition` and (b) providing the corresponding data field.
  // A key in `composition` without a corresponding data field fails
  // the build (type-check + runtime guard).
  metricsStrip?: HeroMetric[];
  features?: Feature[];
  benefits?: Benefit[];
  processSteps?: ProcessStep[];
  capabilities?: string[];
  technologies?: string[];
  integrations?: IntegrationGroup[];
  faqs: FAQItem[];                       // required
  cta: {                                  // required
    title: string;
    description: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
  };

  // Content integrity — list of field paths or descriptions of claims
  // that haven't been signed off for public release yet
  _unverified?: string[];
}

export interface ServicePageData extends BasePageData {
  category: string;                          // e.g. "software-engineering"
  methodology?: MethodologyCard[];
  engagementModels?: EngagementModel[];
  pricing?: { startingPrice: string; whatsIncluded: string[] };
  signatureComponent: string;                // component file name in signature/
}

export interface SolutionPageData extends BasePageData {
  industry: 'healthcare' | 'insurance' | 'retail' | 'fintech' | string;
  industryMetrics?: HeroMetric[];
  complianceDetail?: ComplianceDetail;
  caseStudySpotlight?: CaseStudyRef;
  signatureComponent: string;
}
```

### 8.1 File locations for pilot data

```
aivanceworks-website/src/data/
  services/
    product-discovery.ts
    mvp-development.ts
  solutions/
    patient-portals.ts
    insurance-portals.ts
```

The existing `src/data/solutions.ts` gets split into per-file modules. The existing `src/lib/content.ts` services content for the 2 pilot services gets migrated to `src/data/services/*.ts`. The other 11+ non-pilot services stay on `content.ts` until post-pilot rollout.

### 8.2 Content abstraction layer

Per `CLAUDE.md` convention 7: all fetching goes through `src/lib/content.ts`. New functions:

```ts
// src/lib/content.ts — extended
export function getServicePageData(slug: string): ServicePageData | null;
export function getSolutionPageData(slug: string): SolutionPageData | null;
export function getAllServicePageSlugs(): string[];
export function getAllSolutionPageSlugs(): string[];
```

Internally these read from `src/data/services/*.ts` and `src/data/solutions/*.ts`. When the CMS migration eventually happens, only `content.ts` changes.

## 9. Pilot page compositions

The four pilot page compositions, signed off by the user.

### 9.1 Product Discovery (Archetype A derivation, 8 sections)

**Buyer:** CTO / founder / head of product, early funnel.
**Trust questions:** What do I actually get? How do I know it's worth the money? What does my team need to bring?

| # | Section | Tone | New? | Why |
|---|---|---|---|---|
| 1 | `Hero` | dark | — | Brand + framing + primary CTA |
| 2 | `MetricsStrip` | light | — | "2 weeks · 5 artifacts · 90% scope confidence · 1 fixed proposal" |
| 3 | `DiscoveryMethodology` | warm | ✅ | Methods we apply (Design Sprints, JTBD, Assumption Mapping, Prototype Validation) |
| 4 | `DiscoveryBeforeAfter` *(signature)* | dark | ✅ | The wow: before chaos → 5 artifact preview cards |
| 5 | `ProcessTimeline` | light | — | Day-by-day 2-week sprint schedule |
| 6 | `EngagementModels` | warm | ✅ | 1-week / 2-week / 4-week sprint tiers with pricing |
| 7 | `FAQ` | light | — | Objection handling |
| 8 | `CTA` | accent | — | Final push |

**Dropped (with reason):**
- `FeatureGrid` — would duplicate the signature's artifact cards
- `TechStackBlock` — discovery isn't a tech-stack conversation
- `BenefitsGrid` — Before/After covers the outcome story
- `CaseStudySpotlight` — too early-funnel for this buyer

### 9.2 MVP Development (Archetype B derivation, 9 sections)

**Buyer:** Startup founder / product lead, anxious about "black-box build phases."
**Trust questions:** Can they actually ship? Will I see progress every week? What's the stack? How much?

| # | Section | Tone | New? | Why |
|---|---|---|---|---|
| 1 | `Hero` | dark | — | Brand + framing + CTA |
| 2 | `MetricsStrip` | light | — | "12 weeks · 12 demos · Real users by W5 · V1 in production" |
| 3 | `FeatureGrid` (capabilities) | warm | — | Auth, backend, frontend, mobile, infra, billing, observability, deployment |
| 4 | `MvpDualTrackRoadmap` *(signature)* | dark | ✅ | Engineering track + founder-demo track over 5 phases |
| 5 | `BenefitsGrid` | light | — | Outcome-focused, distinct from Roadmap which is timeline-focused |
| 6 | `TechStackBlock` | warm | — | Modern stack chips |
| 7 | `EngagementModels` | light | ✅ | Fixed-scope vs. milestone-based pricing |
| 8 | `FAQ` | warm | — | Standard placement |
| 9 | `CTA` | accent | — | Final push |

**Dropped:**
- Standalone `ProcessTimeline` — the dual-track Roadmap IS the process visualization
- `Principles` block — overlaps with Benefits; not distinct enough for pilot
- `CaseStudySpotlight` — no real MVP case ready for pilot

### 9.3 Patient Portals (Archetype C derivation, 10 sections)

**Buyer:** Healthcare CIO / Head of Digital, late-funnel, risk-averse.
**Trust questions:** Does this actually work with our EHR? Provably HIPAA-compliant? Who's done this for orgs like mine?

| # | Section | Tone | New? | Why |
|---|---|---|---|---|
| 1 | `Hero` | dark | — | Brand + CTA + badge link to /solutions |
| 2 | `MetricsStrip` | light | — | No-show reduction, engagement lift, admin time saved |
| 3 | `FeatureGrid` | warm | — | 6 portal modules: Records, Scheduling, Messaging, Telehealth, Prescriptions, Billing |
| 4 | `PortalArchitectureMap` *(signature)* | dark | ✅ | 4-tier flow + compliance envelope + side callouts |
| 5 | `ComplianceDeepDive` | warm | ✅ | HIPAA safeguards, audit log, encryption, BAA |
| 6 | `BenefitsGrid` | light | — | Business outcomes / ROI |
| 7 | `IntegrationsPanel` | warm | ✅ | Epic / Cerner / Athena / eCW with connection methods |
| 8 | `ProcessTimeline` | light | — | 5-step implementation methodology |
| 9 | `FAQ` | warm | — | Standard |
| 10 | `CTA` | accent | — | Final push |

**Dropped / deferred:**
- `CaseStudySpotlight` — insertable when a real healthcare case is approved; would likely replace `ProcessTimeline` at that point to stay ≤10

### 9.4 Insurance Portals (Archetype C derivation, 9 sections)

**Buyer:** Insurance Operations Leader / VP Claims, modernizing legacy systems under competitive pressure.
**Trust questions:** Will this integrate with our core admin system (Guidewire, Duck Creek)? How much faster will claims actually be? What's the rollout risk?

| # | Section | Tone | New? | Why |
|---|---|---|---|---|
| 1 | `Hero` | dark | — | Brand + CTA |
| 2 | `MetricsStrip` | light | — | Claims speed, cost savings, NPS lift |
| 3 | `FeatureGrid` | warm | — | 6 portal modules: Policy, Claims, Agent Portal, Quoting, Documents, Reporting |
| 4 | `ClaimsFlowComparison` *(signature)* | dark | ✅ | Proportional time-bar comparison (legacy vs. portal) |
| 5 | `IntegrationsPanel` | warm | — | Guidewire, Duck Creek, Applied Epic, Sapiens, OneShield + REST/SOAP — same component as 9.3, different data |
| 6 | `BenefitsGrid` | light | — | Cost-per-claim reduction, cycle time, agent productivity |
| 7 | `ProcessTimeline` | warm | — | Phased rollout (5 steps) — no big-bang cutovers |
| 8 | `FAQ` | light | — | Standard |
| 9 | `CTA` | accent | — | Final push |

**Dropped:**
- `ComplianceDeepDive` — insurance regulatory compliance is state-level and less consolidated than HIPAA; folds into FAQ
- `CaseStudySpotlight` — no real case for pilot

### 9.5 User note: Claims Flow signature is modular

The user explicitly flagged that the Insurance Portals signature (`ClaimsFlowComparison`) is the weakest of the four and will likely be iterated post-pilot. Because signature components are single-use and isolated in `components/signature/`, swapping it has zero blast radius on other pages or the shared library.

## 10. New components to build

### 10.1 Shared library additions (pilot subset)

This table lists the shared components the pilot will build. The full reusable section catalog is listed in section 6.2 — pilot doesn't need `CaseStudySpotlight`, `TestimonialStrip`, or `LogoWall` (no real cases / testimonials / logos approved yet), so those are deferred.

**Primitives** (`src/components/shared/primitives/`):

| Component | File |
|---|---|
| `Section` | `src/components/shared/primitives/Section.tsx` |
| `Container` | `src/components/shared/primitives/Container.tsx` |
| `IconTile` | `src/components/shared/primitives/IconTile.tsx` |
| `StatBlock` | `src/components/shared/primitives/StatBlock.tsx` |
| `CheckList` | `src/components/shared/primitives/CheckList.tsx` |
| `ChipRow` | `src/components/shared/primitives/ChipRow.tsx` |
| `StepBadge` | `src/components/shared/primitives/StepBadge.tsx` |
| `MetricsCard` | `src/components/shared/primitives/MetricsCard.tsx` |
| `Breadcrumbs` | `src/components/shared/primitives/Breadcrumbs.tsx` |

**Reusable sections** (`src/components/shared/sections/`):

| Component | Tone default | File |
|---|---|---|
| `Hero` | dark | `src/components/shared/sections/Hero.tsx` |
| `MetricsStrip` | light | `src/components/shared/sections/MetricsStrip.tsx` |
| `FeatureGrid` | light/warm | `src/components/shared/sections/FeatureGrid.tsx` |
| `BenefitsGrid` | light/warm | `src/components/shared/sections/BenefitsGrid.tsx` |
| `ProcessTimeline` | light/warm | `src/components/shared/sections/ProcessTimeline.tsx` |
| `TechStackBlock` | warm | `src/components/shared/sections/TechStackBlock.tsx` |
| `IntegrationsPanel` | warm | `src/components/shared/sections/IntegrationsPanel.tsx` |
| `FAQ` | light/warm | `src/components/shared/sections/FAQ.tsx` |
| `CTABlock` | accent | `src/components/shared/sections/CTABlock.tsx` |
| `DiscoveryMethodology` | warm | `src/components/shared/sections/DiscoveryMethodology.tsx` |
| `EngagementModels` | warm | `src/components/shared/sections/EngagementModels.tsx` |
| `ComplianceDeepDive` | warm | `src/components/shared/sections/ComplianceDeepDive.tsx` |

### 10.2 Signature components (per-page, not shared)

| Component | File | Page |
|---|---|---|
| `DiscoveryBeforeAfter` | `src/components/signature/DiscoveryBeforeAfter.tsx` | `/services/product-discovery` |
| `MvpDualTrackRoadmap` | `src/components/signature/MvpDualTrackRoadmap.tsx` | `/services/mvp-development` |
| `PortalArchitectureMap` | `src/components/signature/PortalArchitectureMap.tsx` | `/solutions/patient-portals` |
| `ClaimsFlowComparison` | `src/components/signature/ClaimsFlowComparison.tsx` | `/solutions/insurance-portals` |

### 10.3 Page templates (per-variant, not shared)

Two page templates that compose sections based on the explicit `composition` array in each page's data file.

| Template | File | Variant |
|---|---|---|
| `ServiceDetailTemplate` | `src/components/templates/ServiceDetailTemplate.tsx` | Services |
| `SolutionDetailTemplate` | `src/components/templates/SolutionDetailTemplate.tsx` | Solutions |

**Composition model (chosen approach):** The page data file declares its exact section order via a typed `composition: SectionKey[]` array. The template iterates this array, looks each key up in its internal section map, and renders the matching component with the matching data field. A key listed in `composition` without its corresponding data field fails the build.

```tsx
// src/components/templates/SolutionDetailTemplate.tsx (sketch)
const SECTION_MAP = {
  hero: Hero,
  metricsStrip: MetricsStrip,
  featureGrid: FeatureGrid,
  benefitsGrid: BenefitsGrid,
  processTimeline: ProcessTimeline,
  integrationsPanel: IntegrationsPanel,
  complianceDeepDive: ComplianceDeepDive,
  faq: FAQ,
  ctaBlock: CTABlock,
  signature: SignatureSlot, // resolves per-page via data.signatureComponent
} as const;

export function SolutionDetailTemplate({ data }: { data: SolutionPageData }) {
  return (
    <>
      <JsonLd data={buildSchema(data)} />
      <Breadcrumbs items={data.breadcrumb} />
      {data.composition.map((key) => {
        const Component = SECTION_MAP[key];
        return <Component key={key} data={data} />;
      })}
    </>
  );
}
```

**Why this model:** it makes the page's story explicit at the top of the data file, keeps tone rhythm decisions readable alongside the section list, and prevents the "mystery render" problem where section order depends on subtle field-presence checks. Editorial re-ordering is a one-line change in the data file.

Route files (`src/app/services/[slug]/page.tsx`, `src/app/solutions/[slug]/page.tsx`) stay thin — fetch data, render template, done.

### 10.4 Data, types, and content abstraction

| File | Purpose |
|---|---|
| `src/types/pages.ts` | `BasePageData`, `ServicePageData`, `SolutionPageData` and supporting types |
| `src/data/services/product-discovery.ts` | Data file for Product Discovery |
| `src/data/services/mvp-development.ts` | Data file for MVP Development |
| `src/data/solutions/patient-portals.ts` | Data file for Patient Portals |
| `src/data/solutions/insurance-portals.ts` | Data file for Insurance Portals |
| `src/lib/content.ts` | Extended with `getServicePageData`, `getSolutionPageData`, etc. |

## 11. Content integrity rules

**These apply to anything that gets rendered on a public page.**

1. **No fabricated statistics.** Every number is one of:
   - Verified from real past work (cite internally in the data file comment)
   - Framed as an industry range with a source (e.g. "Healthcare research shows patient portals typically reduce no-shows 30–50% (HIMSS 2024)")
   - Removed entirely until a real number exists

2. **No invented case studies.** If no real case exists, omit `CaseStudySpotlight` or use a "We'd love to be your first" placeholder — never a fabricated one.

3. **Logo walls only with written permission.** No `LogoWall` section unless clients have approved appearing.

4. **`_unverified` list in every data file.** Tracks every claim that hasn't been signed off yet:

```ts
const patientPortals: SolutionPageData = {
  // ...
  _unverified: [
    'metricsStrip[0].value — "40-60% no-show reduction" is industry range, needs source citation',
    'integrations — "40+ EHR integrations shipped" — need real count',
    'complianceDetail.standards — SOC 2 Type II claim — unverified',
  ],
};
```

5. **Pre-launch review gate.** Before any pilot page merges to `main`, a human sign-off clears the `_unverified` list. The implementation plan must include this checkpoint.

## 12. Responsiveness and accessibility

### 12.1 Breakpoints tested

`375px`, `640px`, `768px`, `1024px`, `1280px`, `1536px`.

### 12.2 Typography scale

- **Base font:** `16px` (browser default, `text-base`)
- **Body prose:** `text-base` to `text-lg` depending on context
- **Max body line length:** `max-w-[70ch]` on large screens
- **Heading scale:** fluid via `clamp()` — e.g. section headings `text-[clamp(1.5rem,4vw,2rem)]`
- **Section titles** (h2): `text-3xl md:text-4xl lg:text-5xl` range
- **Subheads:** `text-lg md:text-xl`
- **Labels / eyebrows:** `text-xs md:text-sm`

### 12.3 Vertical rhythm

- Section padding: `py-12 md:py-20 lg:py-24` (mobile → desktop)
- Between sections: no extra margin — `Section` handles its own top/bottom padding

### 12.4 Accessibility

- WCAG 2.1 AA contrast on every text-on-background combination
- All interactive elements have focus-visible states
- All images have meaningful `alt` text
- Accordion components use `<details>`/`<summary>` or proper ARIA
- FAQ schema (`@type: FAQPage`) injected via JSON-LD
- Keyboard navigation throughout; no mouse-only interactions

### 12.5 Signature section mobile layouts (mandatory)

Each signature component must document and implement its mobile layout:

- **`DiscoveryBeforeAfter`** — before column collapses above artifacts; artifact grid: 5 → 3 → 2 → 1 columns at breakpoints
- **`MvpDualTrackRoadmap`** — dual tracks collapse into a single vertical stack with phase cards; each phase card shows engineering track + demo in one card
- **`PortalArchitectureMap`** — side annotations move above/below the central diagram; tiers linearize vertically with connectors
- **`ClaimsFlowComparison`** — the two tracks (legacy/portal) stack fully vertically; bar widths remain proportional but use the full mobile width

## 13. Iconography and imagery

### 13.1 Icons

- Library: **Lucide React** only
- Same stroke weight, same container treatment across all pages (via `IconTile`)
- Icons are content-driven, not style-driven:
  - Patient Portals → `HeartPulse`, `Stethoscope`, `FileText`, `Video`, `Pill`, `CreditCard`
  - Insurance Portals → `Shield`, `FileSignature`, `Calculator`, `AlertCircle`, `Users`, `BarChart2`
  - Product Discovery → `Search`, `Users`, `Target`, `Map`, `Lightbulb`
  - MVP Development → `Rocket`, `GitBranch`, `Zap`, `LayoutGrid`, `CircleCheck`

### 13.2 Imagery

- **Unsplash (free license)** photos only, selected to match industry context:
  - Healthcare: clinical scenes, patient+provider, hands with tablet
  - Insurance: corporate, paperwork, digital tools
  - Product Discovery: whiteboards, workshops, sticky notes, collaboration
  - MVP Development: developers working, screens, kanban boards
- **Color grading:** All photos grayed/tinted toward the brand palette so they feel like one family
- **Restraint:** Pages get 0–2 real photos max. Signature sections prefer custom SVG illustrations over photos.
- **Alt text:** required on every image, meaningful (not "image of X")

### 13.3 Custom illustrations

- SVG-based, inline, theme-token colored
- Used for process diagrams, architecture visualizations, timeline illustrations
- Kept in the signature component file where they live, not as standalone assets

## 14. Refactor strategy

### 14.1 New code, first

1. Build the full shared library (`src/components/shared/*`) from scratch with strict theme-token discipline
2. Build the 4 signature components
3. Build the 2 page templates
4. Create the 4 data files
5. Update `src/lib/content.ts` with the new fetchers
6. Wire the 4 pilot routes to the new templates
7. Verify theme-swap regression test (flip to `data-theme="purple"`, confirm every pilot page re-skins cleanly)

### 14.2 Then, remove obsolete code

After the pilot pages are rendering correctly on the new library, delete or migrate these:

**Delete** (replaced by shared equivalents):
- `src/components/solutions/SolutionHero.tsx`
- `src/components/solutions/SolutionFeatures.tsx`
- `src/components/solutions/SolutionBenefits.tsx`
- `src/components/solutions/SolutionProcess.tsx`
- `src/components/solutions/SolutionTechStack.tsx`
- `src/components/solutions/SolutionFAQ.tsx`
- `src/components/solutions/SolutionCTA.tsx`
- `src/components/solutions/SolutionRelated.tsx`
- `src/components/solutions/iconMap.tsx` (if the shared components don't need it)
- `src/components/solutions/index.ts` (or reduce to just signature exports)

**Migrate** (move and rename):
- `src/components/solutions/unique/ComplianceShowcase.tsx` → reference pattern for `PortalArchitectureMap` and `ComplianceDeepDive`; then delete
- `src/components/solutions/unique/PortalTypesComparison.tsx` → reference pattern (we're replacing with `ClaimsFlowComparison`); then delete
- `src/components/solutions/unique/AiPoweredFeatures.tsx` → keep for future E-Commerce solution pilot; not touched now

**Split** data:
- `src/data/solutions.ts` monolithic file → `src/data/solutions/patient-portals.ts` + `insurance-portals.ts`
- (Other solutions in the old file stay put until their own pilot build)

**Update** the route files:
- `src/app/services/[category]/[slug]/page.tsx` and `src/app/services/[category]/page.tsx` currently hand-code the page. For pilot services only, replace body with `<ServiceDetailTemplate data={...} />`.
- `src/app/solutions/[slug]/page.tsx` — replace body with `<SolutionDetailTemplate data={...} />`.

### 14.3 Keep untouched (not in scope)

- `src/lib/content.ts` entries for non-pilot services
- The 9 non-pilot solutions in `src/data/solutions.ts` (until they're individually migrated)
- All blog, case study, team, contact code

## 15. Out of scope (explicit)

- Palette exploration / new theme design
- The other 9 solutions and 11+ services beyond the 4 pilot pages
- CMS migration (Sanity → anything)
- Form/booking/email automation changes
- Analytics changes
- Performance tuning beyond default Next.js
- Animation system beyond existing `.reveal` and `.card-hover` utilities
- Design tokens for dark mode (existing theme is the only theme flip target)

## 16. Open questions

1. **Should `Section` enforce max-width via embedded `Container`, or leave `Container` separate so some sections (e.g. `Hero`) can opt for full-bleed?** Resolved: `Section` handles tone/padding/size only; callers compose `Container` inside when they want constrained width. Full-bleed sections (like `Hero` with edge-to-edge gradients) skip `Container` and render children directly.

2. **Where does the "constitution" document point people for the prompt templates?** Sub-agent is writing it now; the main outcome is that future sessions use the constitution as their starting context and don't need this spec.

3. **Do we need a feature flag to gate the pilot pages during rollout?** Probably not — the existing routes get replaced in-place. If the user wants a preview URL before going live, we can add a `?preview=` check.

4. **Should `_unverified` block build in CI if non-empty?** My lean: yes for production deploys, no for preview deploys. Can be a simple ESLint-like check. Flag for implementation plan.

*(Previously: "Is the Insurance ClaimsFlowComparison signature strong enough to ship?" — resolved during brainstorm. Ship as-is; iterate post-pilot because signature components are modular and swappable with zero blast radius on other pages.)*

## 17. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Refactoring the existing `Solution*` components while pilot pages still reference them could break the live site | Build new library in parallel; don't delete old components until all 2 pilot solution pages are migrated and verified |
| Theme-token discipline is easy to violate by accident (developer muscle memory types `bg-gray-50`) | Add an ESLint rule that flags `bg-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]` in `src/components/shared/**` and `src/components/signature/**` |
| `_unverified` list gets added but never cleared — pages launch with fake stats | Pre-deploy script fails the build if any page data file has a non-empty `_unverified` array on production branch |
| Signature sections look great on desktop, terrible on mobile | Each signature component has a Playwright visual regression test at 375px and 768px |
| Archetype recipes become a crutch — pages stop being designed editorially | Constitution emphasizes archetypes are starting points, not templates; code review pushes back on pages that look like unedited recipe output |

## 18. Out-of-band: constitution document

Running in parallel to this spec, a sub-agent is writing `docs/design-system/services-solutions-constitution.md` — the long-lived reference document for all future service/solution page work. The spec (this document) is specific to the pilot; the constitution is the reusable strategic brief. The user explicitly requested the constitution so that future sessions in new chat windows can build new pages by reading it, without re-holding the strategic conversation.

The constitution covers:
- All principles in this spec, generalized beyond the pilot
- The archetype recipes
- Prompt templates the user can paste into Claude to create new pages
- A deviation protocol requiring future deviations to be documented in the constitution itself

Both documents are committed to git as part of this work.

## 19. Next steps

1. **User reviews this spec** — especially the pilot compositions (section 9), data schema (section 8), and refactor strategy (section 14)
2. **User signs off** or requests changes → iterate this document
3. **Transition to implementation plan** via `writing-plans` skill — breaks the work into ordered, executable steps
4. **Execute** — likely multi-session, with review checkpoints after the shared library, after each page, and after the refactor cleanup

---

*End of spec.*
