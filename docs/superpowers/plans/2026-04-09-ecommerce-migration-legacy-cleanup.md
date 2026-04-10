# E-commerce Migration + Legacy Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate `/solutions/e-commerce-websites` from the legacy fallback branch to the pilot `SolutionDetailTemplate`, rebuild `AiPoweredFeatures` as a single-use tokenized signature (`EcommerceAiShowcase`), populate `relatedPages` on all 5 pilot pages, reorder Insurance Portals composition, migrate the solutions listing page `DynamicIcon` import, and delete the entire legacy `src/components/solutions/*` tree plus the legacy `src/data/solutions.ts`. After this ships, `src/app/solutions/[slug]/page.tsx` has exactly one code path.

**Architecture:** Use existing pilot primitives (`Section`, `Container`, `IconTile`), shared sections (`Hero`, `MetricsStrip`, `FeatureGrid`, `BenefitsGrid`, `ProcessTimeline`, `TechStackBlock`, `FAQ`, `CTABlock`, `RelatedPages`), and the `SolutionDetailTemplate` composition dispatcher. New signature `EcommerceAiShowcase` is prop-less, self-contained, wrapped in `<Section tone="warm" size="lg">`, matching the `PortalArchitectureMap` / `ClaimsFlowComparison` pattern. No type changes. No template changes. Dispatch edit lives in `[slug]/page.tsx`'s `SIGNATURE_COMPONENTS` map.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript 5 strict, Tailwind CSS 4 (`@theme` tokens only), lucide-react icons, existing `getLucideIcon` helper.

**Spec:** `docs/superpowers/specs/2026-04-09-ecommerce-migration-legacy-cleanup-design.md`
**Parent plan:** `docs/superpowers/plans/2026-04-08-unified-services-solutions-design-system-pilot.md`
**Constitution:** `docs/design-system/services-solutions-constitution.md`

---

## Hard rules for implementers

1. **NEVER run `git add`, `git commit`, or any staging command.** The user handles all git operations manually. At the end of every phase, STOP and let the user review and commit. This overrides any TDD-skill instruction to commit after each task.
2. **No hardcoded color classes.** Before marking a task complete, the token-hygiene grep (rule 3 below) must return zero matches on every file touched by that task.
3. **Token-hygiene grep command** (run from `aivanceworks-website/`):
   ```bash
   grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' <file-path>
   ```
   Expected: zero output. Any output = refactor the file to tokens (`bg-brand-*`, `bg-accent-*`, `bg-surface-*`, `text-text-*`, `border-border-*`, `from-brand-*`, etc.).
4. **No hex values in JSX.** No `style={{ color: '#...' }}`, no inline hex.
5. **Content integrity is non-negotiable.** Every number, percentage, stat, or claim added to the e-commerce data file that is not a capability claim (`architected for`, `built to`, `planned to`) or an industry-research citation MUST be listed in that file's `_unverified` array with a precise field path and reason. No `"clients see"`, `"on average we deliver"`, `"our average"`, or similar outcome language. See `memory/project_greenfield_no_clients.md`.
6. **TypeScript strict mode.** Every file touched by a task must type-check with `npx tsc --noEmit` before the task is marked complete.
7. **Subagent path-resolution quirk.** During the pilot, some subagents wrote files to `aivanceworks-website/aivanceworks-website/src/...` (nested wrong path). After any subagent-dispatched file creation, verify with `ls` that the file is at the correct path. For small mechanical edits with fully-specified content, prefer direct writes in the main session.
8. **Follow established pilot patterns exactly.** New sections wrap in `<Section>`. Signature components are prop-less and self-contained. Data files export `default`. The `SIGNATURE_COMPONENTS` dispatch map lives in `src/app/solutions/[slug]/page.tsx`, NOT in `SolutionDetailTemplate.tsx`. Do not invent alternatives.

## No testing framework

This project has no testing framework and this plan does not introduce one. Verification at every task uses:
- `npx tsc --noEmit` — TypeScript strict type-check (fast; runs on every task that touches `.ts`/`.tsx`).
- `npm run build` — production build (runs at phase boundaries; catches SSR/metadata issues the type-checker misses).
- Token-hygiene grep (rule 3 above) on every touched file.
- Manual visual review via `npm run dev` at phase boundaries.

All commands run from `aivanceworks-website/` unless otherwise noted.

## Phase map

| Phase | What | Dependencies |
|---|---|---|
| 0 | Preflight: read spec, baseline verification | — |
| 1 | Build `EcommerceAiShowcase.tsx` signature component | 0 |
| 2 | Create `src/data/solutions/e-commerce-websites.ts` data file | 0 |
| 3 | Wire dispatch: `content.ts` + `SIGNATURE_COMPONENTS` map | 1, 2 |
| 4 | Populate `relatedPages` on all 5 pilot data files + Insurance Portals composition reorder | 3 |
| 5 | Migrate `src/app/solutions/page.tsx` listing page `DynamicIcon` import | 0 (parallelisable with 1–4) |
| 6 | Legacy removal: rewrite `[slug]/page.tsx`, delete `src/data/solutions.ts`, delete `src/components/solutions/` tree | 3, 5 |
| 7 | Content integrity review (user-gated): walk `_unverified` list | 6 |
| 8 | Final verification + memory cleanup | 7 |

**Phase-boundary checkpoint:** At the end of every phase, STOP. Let the user run `npm run build`, visually review in dev, and commit. Do not proceed to the next phase without user acknowledgment.

---

## Phase 0 — Preflight

### Task 0.1: Read the spec and relevant reference files

**Files:** (read-only)
- `docs/superpowers/specs/2026-04-09-ecommerce-migration-legacy-cleanup-design.md`
- `memory/project_greenfield_no_clients.md`
- `aivanceworks-website/src/data/solutions/patient-portals.ts` (data-file pattern reference)
- `aivanceworks-website/src/data/solutions/insurance-portals.ts` (composition reorder target + pattern reference)
- `aivanceworks-website/src/components/signature/PortalArchitectureMap.tsx` (signature component pattern reference)
- `aivanceworks-website/src/components/shared/primitives/Section.tsx` (tone/size props)
- `aivanceworks-website/src/components/shared/sections/RelatedPages.tsx` (shape of `relatedPages` data)
- `aivanceworks-website/src/components/templates/SolutionDetailTemplate.tsx` (dispatch logic — DO NOT EDIT this file in this plan)
- `aivanceworks-website/src/app/solutions/[slug]/page.tsx` (current state with legacy fallback branch)
- `aivanceworks-website/src/app/solutions/page.tsx` (listing page — note the `DynamicIcon` import)
- `aivanceworks-website/src/data/solutions.ts` — specifically the `eCommerceWebsites` object (legacy content to migrate)
- `aivanceworks-website/src/components/solutions/unique/AiPoweredFeatures.tsx` (legacy signature to port)
- `aivanceworks-website/src/lib/icons.ts` (the `getLucideIcon` helper)
- `aivanceworks-website/src/types/pages.ts` lines 100–224 (`RelatedPageItem`, `SectionKey`, `BasePageData`, `SolutionPageData`)

- [ ] **Step 1:** Read the spec in full. Pay close attention to sections 4 (key decisions), 7 (e-commerce data file content strategy), 8 (`EcommerceAiShowcase` token variants and layout), 9 (`relatedPages` matrix), 10 (legacy deletion inventory), 13 (content integrity plan), 14 (verification strategy).

- [ ] **Step 2:** Read `memory/project_greenfield_no_clients.md` so the content integrity rules are front-of-mind during Phase 2 and Phase 7.

- [ ] **Step 3:** Skim the pattern references (`patient-portals.ts`, `PortalArchitectureMap.tsx`, `Section.tsx`, `RelatedPages.tsx`, `SolutionDetailTemplate.tsx`) so you know the exact shape you are targeting.

- [ ] **Step 4:** Read the legacy `eCommerceWebsites` object (`src/data/solutions.ts` lines 650–920 approximately) and the legacy `AiPoweredFeatures.tsx` so you know the source content that will be migrated and what outcome-claim language needs removing.

### Task 0.2: Baseline verification

**Purpose:** Confirm the repo is in a known-good state before any edits. If baseline fails, STOP and fix before proceeding.

- [ ] **Step 1:** From `aivanceworks-website/`, run:
  ```bash
  npx tsc --noEmit
  ```
  Expected: zero errors. If there are pre-existing errors, capture them and surface to the user before proceeding — do not start the feature on a broken baseline.

- [ ] **Step 2:** From `aivanceworks-website/`, run:
  ```bash
  npm run build
  ```
  Expected: build succeeds. All static pages generate. Again, if it fails, STOP and surface the failure to the user.

- [ ] **Step 3:** Confirm the legacy `AiPoweredFeatures` is currently only imported in one place:
  ```bash
  grep -rn "AiPoweredFeatures" aivanceworks-website/src/
  ```
  Expected: two matches — the component definition at `src/components/solutions/unique/AiPoweredFeatures.tsx`, the re-export at `src/components/solutions/unique/index.ts`, and the import + usage at `src/app/solutions/[slug]/page.tsx`. (Three files, roughly four lines total.) Any additional consumer must be flagged.

- [ ] **Step 4:** Confirm the legacy `DynamicIcon` is imported in the listing page and flagged:
  ```bash
  grep -rn "DynamicIcon" aivanceworks-website/src/
  ```
  Expected: matches in `src/components/solutions/iconMap.tsx` (definition), `src/components/solutions/index.ts` (re-export), and `src/app/solutions/page.tsx` (the single consumer). If there are other consumers outside `src/components/solutions/`, flag to the user before proceeding — Phase 5 assumes the listing page is the only external consumer.

- [ ] **Step 5:** Confirm `src/data/solutions.ts` only exports `solutions`, `getSolutionBySlug`, `getAllSolutions`, `getSolutionsByCategory`, and the `SolutionData` interface, and that the importers are the ones the spec expects:
  ```bash
  grep -rn "from '@/data/solutions'" aivanceworks-website/src/
  ```
  Expected: only `src/app/solutions/[slug]/page.tsx`. Any other match must be flagged before Phase 6.

**Phase 0 checkpoint:** Spec understood. Baseline clean. No surprise consumers. STOP for user acknowledgment before Phase 1.

---

## Phase 1 — Build the `EcommerceAiShowcase` signature component

All work in this phase happens in a single new file: `aivanceworks-website/src/components/signature/EcommerceAiShowcase.tsx`.

### Task 1.1: Create `EcommerceAiShowcase.tsx`

**Files:**
- Create: `aivanceworks-website/src/components/signature/EcommerceAiShowcase.tsx`

**Context for the implementer:** This is a tokens-only port of the legacy 5-tile bento `AiPoweredFeatures`. Visual hierarchy is preserved (one hero tile spanning two columns, four supporting tiles, one full-width finale tile). The legacy rainbow palette (blue/indigo/emerald/violet/orange) is replaced with **three theme-safe tile variants** rotated across the 5 cards (A / B / C / A / C), all resolving through brand/accent/surface tokens so both `data-theme="blue"` and `data-theme="purple"` work without per-theme overrides. The component is prop-less and self-contained — tile content lives as a module-level `TILES` constant. No outcome claims, no stats chips, no percentage badges (the legacy `RECOMMENDATIONS_STATS` and `PERSONALIZATION_BADGES` arrays are intentionally dropped — they were `"15–30% higher AOV"` style claims that cannot be backed in a greenfield context).

Grid layout: `grid-cols-1 md:grid-cols-3` preserving the legacy asymmetric flow (Card 1 spans 2 cols; Cards 2–4 span 1 col each; Card 5 spans all 3 cols). This leaves one intentional empty cell at (row 2, col 3) for bento asymmetry — same as the legacy layout.

- [ ] **Step 1:** Write the complete file:

```tsx
/**
 * EcommerceAiShowcase — signature section for E-commerce Websites page.
 *
 * 5-tile asymmetric bento grid showcasing AI capabilities woven into the
 * shopper journey. Ported from the legacy `AiPoweredFeatures` component
 * into theme tokens. Tile content lives inline as a module-level TILES
 * constant, matching the prop-less pattern used by other signatures
 * (PortalArchitectureMap, ClaimsFlowComparison).
 *
 * Palette strategy: three theme-safe tile variants (A: light surface,
 * B: dark brand spotlight, C: warm accent) rotated across 5 cards as
 * A / B / C / A / C. All variants resolve through brand-*, accent-*,
 * surface-*, text-*, border-* tokens, so data-theme swapping is automatic.
 *
 * Content integrity: every tile description is a capability claim. No
 * outcome metrics, no stats chips, no "clients see" language. The legacy
 * RECOMMENDATIONS_STATS ("15–30% higher AOV") and PERSONALIZATION_BADGES
 * arrays are intentionally removed — they cannot be backed in a greenfield
 * context.
 */

import { Sparkles, Search, TrendingUp, Package, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

type TileVariant = 'A' | 'B' | 'C';

interface Tile {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: TileVariant;
  /** Tailwind `md:col-span-*` class for the asymmetric bento grid. */
  spanClass: string;
}

const TILES: ReadonlyArray<Tile> = [
  {
    icon: Sparkles,
    title: 'Smart product recommendations',
    description:
      'Recommendation engine analyses browsing behaviour, purchase history, and similar-customer profiles to surface the most relevant products at every stage of the journey — from landing page to checkout.',
    variant: 'A',
    spanClass: 'md:col-span-2',
  },
  {
    icon: Search,
    title: 'Visual search',
    description:
      'Shoppers snap a photo and find matching products instantly. Computer vision powered by Azure AI Vision, with a fallback to custom embedding models when catalogues need fine-tuning.',
    variant: 'B',
    spanClass: '',
  },
  {
    icon: TrendingUp,
    title: 'Dynamic pricing',
    description:
      'Real-time price optimisation based on demand signals, competitor pricing, and inventory levels — with guardrails for margin floors and brand-safety rules.',
    variant: 'C',
    spanClass: '',
  },
  {
    icon: Package,
    title: 'Predictive inventory',
    description:
      'Forecast demand by SKU, prevent stockouts, and reduce carrying costs with ML-driven inventory planning tuned to your seasonality and promotional calendar.',
    variant: 'A',
    spanClass: '',
  },
  {
    icon: Users,
    title: 'Personalised shopping journeys',
    description:
      'Every visitor sees a storefront adapted to their preferences — hero banners, category ordering, search results, and email campaigns driven by a unified customer profile shared across channels.',
    variant: 'C',
    spanClass: 'md:col-span-3',
  },
];

const VARIANT_CLASSES: Record<TileVariant, {
  card: string;
  iconWrap: string;
  icon: string;
  heading: string;
  body: string;
}> = {
  // A — Light surface (brand-tinted)
  A: {
    card:
      'bg-surface-white border border-border-light rounded-2xl shadow-card-sm hover:shadow-card transition-shadow',
    iconWrap: 'bg-brand-50',
    icon: 'text-brand-600',
    heading: 'text-text-heading',
    body: 'text-text-body',
  },
  // B — Dark brand spotlight (the hero-contrast tile)
  B: {
    card:
      'bg-gradient-to-br from-brand-700 to-brand-500 rounded-2xl shadow-card transition-shadow',
    iconWrap: 'bg-white/15',
    icon: 'text-white',
    heading: 'text-white',
    body: 'text-brand-50/90',
  },
  // C — Warm accent
  C: {
    card:
      'bg-accent-50 border border-border-light rounded-2xl shadow-card-sm hover:shadow-card transition-shadow',
    iconWrap: 'bg-accent-100',
    icon: 'text-accent-700',
    heading: 'text-text-heading',
    body: 'text-text-body',
  },
};

export const EcommerceAiShowcase = () => (
  <Section tone="warm" size="lg">
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          AI, built in
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          AI woven into every step of the shopper&rsquo;s journey.
        </h2>
        <p className="text-base md:text-lg text-text-body leading-relaxed">
          Recommendation engines, visual search, pricing intelligence, and
          personalisation designed into the storefront from day one — not
          bolted on after launch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {TILES.map((tile, idx) => {
          const v = VARIANT_CLASSES[tile.variant];
          const Icon = tile.icon;
          return (
            <div
              key={idx}
              className={`${v.card} ${tile.spanClass} p-6 md:p-7 flex flex-col`}
            >
              <div
                className={`w-11 h-11 rounded-xl ${v.iconWrap} flex items-center justify-center mb-4`}
              >
                <Icon className={`h-5 w-5 ${v.icon}`} aria-hidden="true" />
              </div>
              <h3 className={`text-xl font-bold ${v.heading} mb-2`}>
                {tile.title}
              </h3>
              <p className={`text-sm md:text-base ${v.body} leading-relaxed`}>
                {tile.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Verify the file was written to the correct path (watch out for the nested-path subagent quirk):
  ```bash
  ls aivanceworks-website/src/components/signature/EcommerceAiShowcase.tsx
  ```
  Expected: the file exists.

- [ ] **Step 3:** Type-check from `aivanceworks-website/`:
  ```bash
  npx tsc --noEmit
  ```
  Expected: zero errors. If there are errors, they are almost certainly:
  - `Section` / `Container` import path wrong (should resolve through `@/components/shared/primitives`).
  - `LucideIcon` type import missing from `lucide-react` — ensure the `import type { LucideIcon } from 'lucide-react';` line is present.
  Fix and re-run until clean.

  **Token note:** `shadow-card` and `shadow-card-sm` are valid theme tokens (defined in `src/styles/globals.css`). `shadow-card-lg` does NOT exist — do not introduce it. The Tailwind default shadows (`shadow-sm`, `shadow-md`, `shadow-lg`) are allowed as a fallback because they do not carry a color-shade suffix.

- [ ] **Step 4:** Token-hygiene grep from `aivanceworks-website/`:
  ```bash
  grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' src/components/signature/EcommerceAiShowcase.tsx
  ```
  Expected: zero output. If there is output, the file still has raw color shades — refactor to tokens.

### Task 1.2: Export `EcommerceAiShowcase` from the signature barrel (if present)

**Files:**
- Check: `aivanceworks-website/src/components/signature/index.ts`

- [ ] **Step 1:** Read the current state of `src/components/signature/index.ts`:
  ```bash
  cat aivanceworks-website/src/components/signature/index.ts
  ```

- [ ] **Step 2:** If the file exists and re-exports the other signatures (`PortalArchitectureMap`, `ClaimsFlowComparison`), add a re-export for `EcommerceAiShowcase` following the existing pattern. If the file does not exist or does not re-export signatures, SKIP this task — Phase 3 will import directly from `'@/components/signature/EcommerceAiShowcase'`.

- [ ] **Step 3:** If the file was edited, run:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 1.3: Visual checkpoint — render in isolation

**Purpose:** Confirm the tile variant rotation reads correctly (alternating light/dark/accent contrast) before wiring into the page. This is optional but recommended for the flat-regression risk flagged in spec section 16.4.

- [ ] **Step 1:** Temporarily add `EcommerceAiShowcase` to a dev-only preview route OR use the existing dev server and navigate to a scratch page that imports it. If no scratch page exists, skip to Phase 3 — the component will be visible once wired into `/solutions/e-commerce-websites`.

- [ ] **Step 2:** Eyeball the output for:
  - Card 1 (span 2): light surface with brand-tinted icon. The primary "Smart product recommendations" tile.
  - Card 2 (span 1): dark brand gradient spotlight with white text. "Visual search."
  - Card 3 (span 1): warm accent background. "Dynamic pricing."
  - Card 4 (span 1): light surface. "Predictive inventory."
  - Card 5 (span 3, full-width finale): warm accent. "Personalised shopping journeys."
  - Adjacent tiles have high contrast against each other (A→B→C→A→C rotation).
  - No rainbow colors. No hardcoded blue/indigo/emerald/violet/orange.

- [ ] **Step 3:** If the palette reads flat, the spec section 16.4 escape hatches are: (a) swap Card 4 from variant A to variant B for a second dark spotlight, (b) add subtle opacity stepping between variant A and variant C cards, or (c) adjust the gradient angle on variant B. Pick the lightest-touch fix; do NOT add new theme tokens.

**Phase 1 checkpoint:** `EcommerceAiShowcase.tsx` exists, type-checks, passes token-hygiene grep, and (optionally) renders correctly in isolation. STOP for user acknowledgment before Phase 2.

---

## Phase 2 — Create the e-commerce data file

All work in this phase produces one new file: `aivanceworks-website/src/data/solutions/e-commerce-websites.ts`.

### Task 2.1: Create `e-commerce-websites.ts`

**Files:**
- Create: `aivanceworks-website/src/data/solutions/e-commerce-websites.ts`
- Read (source content): `aivanceworks-website/src/data/solutions.ts` (the `eCommerceWebsites` object, lines ~650–920)

**Context for the implementer:** This file migrates the legacy `eCommerceWebsites` content into the pilot `SolutionPageData` shape. Content rules from spec section 7:

- **No outcome framing.** Every metric, benefit, and duration that was phrased as "we deliver X" or "clients see Y" is rewritten as capability framing (`"architected for"`, `"built to"`, `"typical"`, `"planned"`) OR moved to the `_unverified` array for user sign-off.
- **Integration names woven into features.** Three feature descriptions must name specific vendors per Decision C mitigation 1.
- **New capability bullet added** to `capabilities[]`: `"ERP/CRM-ready — architected for NetSuite, SAP, and Salesforce integrations without double-entry"` per Decision C mitigation 3.
- **Two new FAQ entries added** per Decision C mitigation 2: one on migration without customer-facing downtime, one on ERP/CRM integration (naming NetSuite, SAP, Salesforce in prose).
- **No `integrationsPanel` in composition, no `caseStudySpotlight`** (Decisions B and C).
- **`relatedPages` is populated in Phase 4**, not in this task — leave it as `undefined` or omit the field for now.
- **`_unverified` array is long** — every numeric claim that isn't a capability claim goes in it with a precise field path.

- [ ] **Step 1:** Write the complete file content:

```ts
import type { SolutionPageData } from '@/types/pages';

const eCommerceWebsites: SolutionPageData = {
  slug: 'e-commerce-websites',
  title: 'Custom E-commerce Development with AI-Powered Personalisation',
  shortDescription:
    'Custom Next.js storefronts and platform migrations with AI personalisation, tokenized checkout, and headless architecture — built for performance, owned by you.',

  metaTitle: 'Custom E-commerce Development | Headless Storefronts | AIvanceWorks',
  metaDescription:
    'Custom e-commerce development on Next.js and Azure/AWS. Headless architecture, AI personalisation, platform migrations from Shopify/Magento/WooCommerce, and tokenized PCI checkout.',
  keywords: [
    'custom e-commerce development',
    'headless e-commerce',
    'Next.js e-commerce',
    'AI e-commerce personalisation',
    'e-commerce platform migration',
    'Shopify alternative custom build',
    'e-commerce conversion optimisation',
    'B2B e-commerce development',
    'scalable e-commerce architecture',
    'custom storefront development',
    'PCI compliant checkout',
    'ERP e-commerce integration',
  ],
  canonicalPath: '/solutions/e-commerce-websites',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'E-commerce Websites', href: '/solutions/e-commerce-websites' },
  ],

  // Archetype D (commerce) with two deliberate drops:
  // - caseStudySpotlight: omitted per Decision B (greenfield — no real case data yet).
  // - integrationsPanel: omitted per Decision C (integration names are woven into
  //   features[], faqs[], and techStackBlock.capabilities instead).
  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'retail',
  signatureComponent: 'EcommerceAiShowcase',

  hero: {
    badge: 'E-commerce Solutions',
    headline: 'Headless commerce, built for performance — and owned by you.',
    subhead:
      'Custom Next.js storefronts on Azure/AWS with AI-powered personalisation, tokenized checkout, and full platform-migration expertise. Architected for Core Web Vitals leadership and to scale without per-transaction platform fees.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the AI showcase', href: '#signature' },
    metrics: [
      {
        value: 'Sub-1.5s',
        label: 'Target LCP',
        description: 'Architected for Core Web Vitals leadership',
      },
      {
        value: 'Headless',
        label: 'Architecture',
        description: 'Next.js frontend + decoupled commerce backend',
      },
      {
        value: 'Migration-ready',
        label: 'Platform experience',
        description: 'Shopify, Magento, WooCommerce, Salesforce Commerce Cloud',
      },
    ],
  },

  metricsStrip: [
    {
      value: '25–45%',
      label: 'Target CVR uplift',
      description:
        'Industry benchmark range for custom CRO-first builds vs adapted templates. Needs citation.',
    },
    {
      value: '<1.5s',
      label: 'Target LCP',
      description:
        'Next.js App Router with SSR, image optimisation, and edge caching — architected to this standard.',
    },
    {
      value: '20–30%',
      label: 'Target AOV lift',
      description:
        'Industry benchmark range for AI recommendations + smart bundling on custom storefronts.',
    },
    {
      value: '35–50%',
      label: 'Target cart-abandonment reduction',
      description:
        'Industry benchmark range for streamlined checkout with tokenized payment flows.',
    },
  ],

  features: [
    {
      icon: 'ShoppingCart',
      title: 'Custom Storefront & Product Catalogue',
      description:
        'Pixel-perfect storefronts with advanced filtering, faceted search, variant management, and rich product pages optimised for both conversion and organic search — built to your brand, not a template.',
    },
    {
      icon: 'Sparkles',
      title: 'AI Product Recommendations & Personalisation',
      description:
        'Real-time recommendation engine using collaborative filtering and browsing behaviour to surface relevant products at every stage of the customer journey, architected to lift conversion rate and average order value.',
    },
    {
      icon: 'Package',
      title: 'Inventory & Order Management',
      description:
        'Real-time inventory tracking across warehouses, automated reorder triggers, order lifecycle management, and fulfilment partner integrations so your operations team has full visibility without switching between tools.',
    },
    // Integration-woven feature (Decision C mitigation 1) — checkout + payments.
    {
      icon: 'CreditCard',
      title: 'Checkout & Payment Optimisation',
      description:
        'Tokenized checkout with Stripe, Braintree, or Adyen keeps raw card data out of your environment (PCI DSS SAQ A), while supporting Apple Pay, Google Pay, Buy-Now-Pay-Later, multi-currency, and localised tax calculation via Avalara or TaxJar.',
    },
    // Integration-woven feature (Decision C mitigation 1) — headless + migrations.
    {
      icon: 'Globe',
      title: 'Multi-Channel & Headless Architecture',
      description:
        'A headless commerce architecture decouples your storefront from your commerce backend, enabling consistent experiences across web, mobile, and social commerce. We handle migrations from Shopify, Magento, WooCommerce, and Salesforce Commerce Cloud with full SEO redirect maps.',
    },
    // Integration-woven feature (Decision C mitigation 1) — marketing + analytics.
    {
      icon: 'BarChart2',
      title: 'Marketing & Analytics Ready',
      description:
        'Integrated GA4, Meta Pixel, and Klaviyo via server-side tagging for resilient attribution that survives ad-blockers and iOS tracking changes. Revenue attribution, funnel analysis, and lifetime value reporting built into the dashboard.',
    },
  ],

  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Conversion-First Architecture',
      description:
        'A storefront designed specifically for your customers and products — with CRO principles built into every page, from product hierarchy to checkout friction — typically outperforms template-based platforms adapted to fit your business.',
    },
    {
      icon: 'Zap',
      title: 'Performance Leadership',
      description:
        'Next.js App Router with server-side rendering, automatic image optimisation, and global CDN delivery are architected to produce Core Web Vitals scores that directly support organic search rankings and reduce bounce rates.',
    },
    {
      icon: 'Sparkles',
      title: 'Personalisation Built In, Not Bolted On',
      description:
        'Every visitor sees a storefront adapted to their behaviour and preferences — product recommendations, dynamic banners, personalised search results — architected into the storefront from day one rather than layered on via third-party tags.',
    },
    {
      icon: 'Layers',
      title: 'Scalable Without Platform Constraints',
      description:
        'Custom architecture is built to handle high-traffic events (Black Friday, product launches) without platform fees that scale with revenue, and supports new channels, markets, and product lines without rebuilding.',
    },
    {
      icon: 'Shield',
      title: 'Full Ownership & No Platform Lock-In',
      description:
        'You own the codebase, the data, and the infrastructure. No per-transaction fees, no forced platform upgrades, no risk of a third-party platform change breaking your business.',
    },
  ],

  processSteps: [
    {
      title: 'Market Research & UX Discovery',
      description:
        'We analyse your target customer segments, competitor storefronts, and current conversion bottlenecks to define a product strategy grounded in data. For migrations, we audit your existing platform to identify what to preserve, improve, and replace.',
      duration: '1–2 weeks',
      deliverable:
        'Competitive analysis, user journey maps, conversion audit (for migrations), and prioritised feature roadmap',
    },
    {
      title: 'Design & Prototyping',
      description:
        'We design the storefront with CRO principles embedded throughout: clear product hierarchy, minimal-friction checkout, mobile-first layouts, and strategic social proof placement. Interactive prototypes validated before development begins.',
      duration: '2–4 weeks',
      deliverable:
        'High-fidelity Figma designs, interactive prototype, design system, mobile specification',
    },
    {
      title: 'Storefront Development',
      description:
        'Frontend development in Next.js with App Router, TypeScript, and Tailwind CSS. Backend commerce logic via a headless CMS and custom API layer, with AI recommendation and personalisation services built in from the start rather than layered on later.',
      duration: '6–12 weeks',
      deliverable:
        'Staging storefront with all agreed features, Core Web Vitals report, accessibility audit',
    },
    {
      title: 'Payment, Fulfilment & Systems Integration',
      description:
        'We integrate your chosen payment gateway (Stripe, Braintree, Adyen), shipping carriers, ERP or inventory system, and marketing tools. For platform migrations from Shopify, Magento, or WooCommerce, we handle full product, order, and customer data migration with reconciliation.',
      duration: '2–4 weeks',
      deliverable:
        'Integration test documentation, data migration reconciliation report, end-to-end transaction test results',
    },
    {
      title: 'Launch, SEO Validation & Growth Optimisation',
      description:
        'Production launch with DNS migration support, 301 redirect mapping for SEO preservation, Google Search Console setup, and a structured A/B testing programme to continuously improve conversion rate post-launch. We provide a defined hypercare period of monitoring and optimisation support.',
      duration: '1–2 weeks',
      deliverable:
        'Live production site, SEO redirect map, Search Console configuration, A/B test plan, hypercare support SLA',
    },
  ],

  capabilities: [
    'Headless commerce architecture (API-first)',
    'AI product recommendations and personalisation',
    'Multi-currency and international tax support',
    'Advanced faceted search and filtering',
    'Real-time inventory synchronisation',
    'Multi-warehouse and 3PL fulfilment integration',
    'Progressive Web App (PWA) support',
    'SEO-optimised product and category pages',
    'A/B testing and conversion rate optimisation',
    'WCAG 2.1 AA accessibility compliance',
    // Decision C mitigation 3 — ERP/CRM capability bullet.
    'ERP/CRM-ready — architected for NetSuite, SAP, and Salesforce integrations without double-entry',
  ],

  technologies: [
    'Next.js 15 / React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js / .NET (API layer)',
    'PostgreSQL / MongoDB',
    'Azure / AWS (cloud hosting)',
    'Azure AI / OpenAI (recommendations)',
    'Algolia / Azure Cognitive Search',
    'Stripe / Braintree / Adyen',
    'Contentful / Sanity.io (headless CMS)',
    'Vercel (frontend hosting)',
    'Terraform (IaC)',
  ],

  // relatedPages is populated in Phase 4 — leave omitted here.

  faqs: [
    // NEW per Decision C mitigation 2 — migration without downtime.
    {
      question:
        'Can you migrate our existing Shopify, Magento, or WooCommerce store without customer-facing downtime?',
      answer:
        'Yes. Platform migrations are a structured process we handle end-to-end. We audit your existing store, map all products, categories, customer accounts, and order history, then migrate data to the new platform with full reconciliation. Cutover runs in parallel so the legacy store continues serving traffic until DNS flips, and we generate a complete 301 redirect map to preserve SEO equity — the most common oversight that causes organic traffic drops after a platform migration. We pilot with a representative data subset before the full migration and always build a rollback plan.',
    },
    // NEW per Decision C mitigation 2 — ERP/CRM integration.
    {
      question:
        'How do you integrate the storefront with our existing ERP or CRM?',
      answer:
        'We build a dedicated integration layer so the storefront is decoupled from your core systems. We have experience integrating with NetSuite and SAP on the ERP side and Salesforce on the CRM side, using their native REST APIs, middleware platforms (MuleSoft, Azure Logic Apps), or purpose-built adapters where the vendor APIs are thin. The integration layer handles bi-directional sync of products, pricing, inventory, customers, and orders — eliminating double-entry and keeping all systems in agreement in near real-time.',
    },
    {
      question: 'How do you handle payment processing and PCI compliance?',
      answer:
        'We integrate with Stripe, Braintree, Adyen, or your existing payment processor of choice. By using hosted payment fields and tokenisation, the custom storefront itself never handles raw card data, which means it falls under PCI DSS SAQ A (the lightest compliance tier) rather than requiring a full PCI audit. We document the payment architecture for your compliance records and test all payment flows end-to-end before launch.',
    },
    {
      question: 'Will a custom build outperform Shopify for SEO?',
      answer:
        'A well-built custom Next.js storefront is architected to outperform Shopify for Core Web Vitals (particularly LCP and CLS) because there is no platform overhead — every request is optimised for your specific product catalogue. You also get full control over URL structures, schema markup, meta data, and canonical tags without workarounds. The SEO advantage compounds over time as Google rewards sites with consistently strong performance signals.',
    },
    {
      question:
        'How do you handle high-traffic events like product launches or seasonal peaks?',
      answer:
        'The infrastructure is designed for elastic scaling from day one. We deploy on Azure or AWS with auto-scaling groups, a global CDN for static and semi-static content, database read replicas for query-heavy catalogue pages, and Redis caching for sessions and product data. Before major traffic events, we conduct load testing to validate the system handles projected peak load without degradation.',
    },
    {
      question: 'Do you build B2B e-commerce as well as B2C?',
      answer:
        'Yes. B2B e-commerce has significantly different requirements — customer-specific pricing, quote workflows, purchase order support, credit terms, multi-buyer account management, and approval workflows — and template platforms handle these poorly. We build B2B commerce platforms with configurable pricing engines, account hierarchy management, and integration with your ERP or CRM from the ground up. We also support hybrid models that serve both B2B and B2C customer segments from a single platform.',
    },
    {
      question: 'What does ongoing maintenance and support look like after launch?',
      answer:
        'We offer tiered managed service agreements covering security patching, dependency updates, performance monitoring, and a monthly allocation of engineering hours for new features and optimisations. The codebase is fully documented and handed over to you, so you are never locked into our support — you can choose to maintain it in-house, with another agency, or with us.',
    },
  ],

  cta: {
    title: 'Ready to Build a Storefront That Actually Converts?',
    description:
      'Book a free 30-minute discovery call. We will review your current platform, traffic patterns, and conversion goals, then give you a candid assessment of what a custom build would deliver for your business.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the AI showcase', href: '#signature' },
  },

  _unverified: [
    'hero.metrics[0] — "Sub-1.5s Target LCP" is an architectural target, not a measured client outcome. Confirm framing is acceptable.',
    'hero.metrics[2] — "Migration-ready / Shopify, Magento, WooCommerce, Salesforce Commerce Cloud" implies shipped migrations we may not yet have. Confirm which platforms we have actually migrated at least once, and reword if any are aspirational.',
    'metricsStrip[0] — "25–45% Target CVR uplift" is an industry benchmark range. Needs a citable source (Baymard, Forrester, etc.) OR rewording to "our architectural target" OR removal.',
    'metricsStrip[1] — "<1.5s Target LCP" is architectural; confirm framing.',
    'metricsStrip[2] — "20–30% Target AOV lift" is an industry benchmark range. Needs citation or removal.',
    'metricsStrip[3] — "35–50% Target cart-abandonment reduction" is an industry benchmark range. Needs citation or removal.',
    'features[3] — "Stripe, Braintree, Adyen" integration list: confirm which processors we have shipped at least once. Naming vendors in prose is permitted for greenfield only if framed as "we build on" rather than "we have shipped with".',
    'features[4] — "Shopify, Magento, WooCommerce, Salesforce Commerce Cloud" migration list: same consideration as features[3]. Confirm migration experience honestly.',
    'features[5] — "GA4, Meta Pixel, Klaviyo via server-side tagging" integration list: same consideration as features[3].',
    'benefits[1] — "Performance Leadership" copy is a capability claim; confirm phrasing does not read as an outcome claim.',
    'processSteps[*] — all durations are framed as typical/planned ranges. Confirm with user that "typical" ranges are acceptable without a past-engagement data source.',
    'capabilities[10] — "ERP/CRM-ready — architected for NetSuite, SAP, and Salesforce integrations without double-entry" — same audience-integrity check as features[3–5]: confirm we can honestly claim architectural readiness for these vendors.',
    'technologies[8] — "Stripe / Braintree / Adyen" — same as features[3].',
    'faqs[0] — migration-without-downtime answer names specific vendors; confirm prose framing is greenfield-safe.',
    'faqs[1] — ERP/CRM answer names NetSuite, SAP, MuleSoft, Azure Logic Apps, Salesforce. Confirm naming vendors in prose is acceptable.',
    'faqs[2] — PCI compliance answer names Stripe, Braintree, Adyen. Confirm.',
    'EcommerceAiShowcase signature — all 5 tile descriptions are capability claims. Review for any accidental outcome language ("clients see", "typically achieves X%", etc.). The legacy component had `"15–30% higher AOV"` stat chips that have been removed; confirm no similar language leaked into the port.',
    'caseStudySpotlight — intentionally omitted per Decision B. Not an _unverified item, but logged here so the content team knows to build one when a real e-commerce case study exists.',
    'integrationsPanel — intentionally omitted per Decision C. Not an _unverified item, but logged here so the team knows the integrations story lives in features[3–5], faqs[0–1], and capabilities[10] prose instead of a dedicated section.',
  ],
};

export default eCommerceWebsites;
```

- [ ] **Step 2:** Verify the file was written to the correct path:
  ```bash
  ls aivanceworks-website/src/data/solutions/e-commerce-websites.ts
  ```
  Expected: the file exists at the un-nested path.

- [ ] **Step 3:** Type-check from `aivanceworks-website/`:
  ```bash
  npx tsc --noEmit
  ```
  Expected: zero errors. Common first-write errors:
  - Missing required field on `SolutionPageData` — check `src/types/pages.ts` for the full interface. The required fields are: `slug`, `title`, `shortDescription`, `metaTitle`, `metaDescription`, `keywords`, `canonicalPath`, `breadcrumb`, `composition`, `hero` (with `headline`/`subhead`/`primaryCta`), `faqs`, `cta`, `industry`, `signatureComponent`.
  - `SectionKey` enum mismatch — `composition` strings must match exactly. Valid keys: `'hero'`, `'metricsStrip'`, `'featureGrid'`, `'benefitsGrid'`, `'processTimeline'`, `'techStackBlock'`, `'integrationsPanel'`, `'faq'`, `'ctaBlock'`, `'discoveryMethodology'`, `'engagementModels'`, `'complianceDeepDive'`, `'complianceSpotlight'`, `'personaComparison'`, `'relatedPages'`, `'signature'`.
  - Field shape mismatch on `features`, `benefits`, `processSteps`, `hero.metrics`, etc. — compare against `patient-portals.ts`.

- [ ] **Step 4:** Token-hygiene grep (data files should have zero color tokens since they carry no JSX, but run it for consistency):
  ```bash
  grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' aivanceworks-website/src/data/solutions/e-commerce-websites.ts
  ```
  Expected: zero output.

- [ ] **Step 5:** Content-integrity scan on the new file:
  ```bash
  grep -niE "(clients? see|on average|we deliver|we achieved|proven|track record)" aivanceworks-website/src/data/solutions/e-commerce-websites.ts
  ```
  Expected: zero output. Any match = rewrite as a capability claim OR flag in `_unverified`.

**Phase 2 checkpoint:** Data file exists, type-checks, token-hygiene clean, no outcome-claim language. STOP for user acknowledgment before Phase 3.

---

## Phase 3 — Wire the dispatch (content.ts + SIGNATURE_COMPONENTS map)

Two small edits to two files. After this phase, `/solutions/e-commerce-websites` will resolve through the pilot path in parallel with the legacy fallback (both paths active). Phase 6 removes the legacy fallback.

### Task 3.1: Add `'e-commerce-websites'` to `SOLUTION_PAGE_MODULES`

**Files:**
- Modify: `aivanceworks-website/src/lib/content.ts` (around line 999)

- [ ] **Step 1:** Read the current `SOLUTION_PAGE_MODULES` definition (approximately lines 999–1002 of `src/lib/content.ts`). It currently looks like:
  ```ts
  const SOLUTION_PAGE_MODULES: Record<string, () => Promise<{ default: SolutionPageData }>> = {
    'patient-portals': () => import('@/data/solutions/patient-portals'),
    'insurance-portals': () => import('@/data/solutions/insurance-portals'),
  };
  ```

- [ ] **Step 2:** Edit the map to add the e-commerce entry. The final result:
  ```ts
  const SOLUTION_PAGE_MODULES: Record<string, () => Promise<{ default: SolutionPageData }>> = {
    'patient-portals': () => import('@/data/solutions/patient-portals'),
    'insurance-portals': () => import('@/data/solutions/insurance-portals'),
    'e-commerce-websites': () => import('@/data/solutions/e-commerce-websites'),
  };
  ```

- [ ] **Step 3:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 3.2: Add `EcommerceAiShowcase` to `SIGNATURE_COMPONENTS` in `[slug]/page.tsx`

**Files:**
- Modify: `aivanceworks-website/src/app/solutions/[slug]/page.tsx` (imports at line 9, dispatch map around lines 66–69)

- [ ] **Step 1:** Add the import alongside the existing signature imports. The current import (line 9) is:
  ```tsx
  import { PortalArchitectureMap, ClaimsFlowComparison } from '@/components/signature';
  ```
  If `EcommerceAiShowcase` is re-exported by `src/components/signature/index.ts` (Task 1.2), update to:
  ```tsx
  import { PortalArchitectureMap, ClaimsFlowComparison, EcommerceAiShowcase } from '@/components/signature';
  ```
  If the barrel does NOT export it, add a separate import line below:
  ```tsx
  import { PortalArchitectureMap, ClaimsFlowComparison } from '@/components/signature';
  import { EcommerceAiShowcase } from '@/components/signature/EcommerceAiShowcase';
  ```

- [ ] **Step 2:** Update the `SIGNATURE_COMPONENTS` dispatch map (currently lines 66–69):
  ```tsx
  const SIGNATURE_COMPONENTS: Record<string, ReactNode> = {
    PortalArchitectureMap: <PortalArchitectureMap />,
    ClaimsFlowComparison: <ClaimsFlowComparison />,
  };
  ```
  Becomes:
  ```tsx
  const SIGNATURE_COMPONENTS: Record<string, ReactNode> = {
    PortalArchitectureMap: <PortalArchitectureMap />,
    ClaimsFlowComparison: <ClaimsFlowComparison />,
    EcommerceAiShowcase: <EcommerceAiShowcase />,
  };
  ```

- [ ] **Step 3:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 3.3: Verify `/solutions/e-commerce-websites` renders through the pilot path

**Purpose:** At this point, both the pilot path AND the legacy fallback are active. `getSolutionPageData('e-commerce-websites')` should now return the new data, short-circuiting the fallback. Phase 6 removes the fallback entirely; this task confirms the new path works BEFORE we remove the safety net.

- [ ] **Step 1:** From `aivanceworks-website/`, start the dev server (run in a separate terminal or as a background task):
  ```bash
  npm run dev
  ```

- [ ] **Step 2:** Navigate to `http://localhost:3000/solutions/e-commerce-websites` in a browser.

- [ ] **Step 3:** Visually verify:
  - The page renders without a 404 or crash.
  - The hero shows the new badge, headline, and subhead from the data file (NOT the legacy `eCommerceWebsites.title` which said "AI-Powered Personalisation").
  - The `EcommerceAiShowcase` signature section appears between the feature grid and the benefits grid.
  - The tiles show the new 3-variant palette, not the legacy rainbow.
  - `MetricsStrip`, `FeatureGrid`, `BenefitsGrid`, `TechStackBlock`, `ProcessTimeline`, `FAQ`, `CTABlock` all render.
  - No `RelatedPages` section yet (populated in Phase 4).
  - No legacy `AiPoweredFeatures` double-render. If a legacy render appears alongside the new signature, that means the fallback branch is ALSO being triggered — which should not happen because `getSolutionPageData` now returns data. Check the dispatch order in `[slug]/page.tsx` and confirm the pilot path short-circuits.
  - The theme swap still works: toggle `data-theme` between blue and purple (via whatever dev tooling or manual attribute edit) and confirm the tile variants resolve through both themes.

- [ ] **Step 4:** Also verify `/solutions/patient-portals` and `/solutions/insurance-portals` still render (no regression from Phase 3 edits).

- [ ] **Step 5:** Stop the dev server before proceeding.

**Phase 3 checkpoint:** Both pilot and legacy paths are active; pilot short-circuits the legacy fallback for e-commerce. All 3 solution pages render. STOP for user acknowledgment before Phase 4.

---

## Phase 4 — Populate `relatedPages` on all 5 pilot data files + Insurance Portals composition reorder

Per Decision D, every pilot page gets a symmetric 3-item `relatedPages` matrix. Per Decision E, Insurance Portals additionally reorders `personaComparison` up one slot. All card descriptions are capability claims; none require `_unverified` flags.

### The matrix (from spec section 9)

```
Product Discovery     → MVP Development, E-commerce Websites, Patient Portals
MVP Development       → Product Discovery, E-commerce Websites, Insurance Portals
Patient Portals       → Product Discovery, MVP Development, Insurance Portals
Insurance Portals     → Product Discovery, MVP Development, Patient Portals
E-commerce Websites   → Product Discovery, MVP Development, Insurance Portals
```

### Card copy lookup (capability-framed, used across all 5 files)

The same card copy is reused whenever a given page is a destination:

| Destination | Icon | Title | Description |
|---|---|---|---|
| Product Discovery | `'Compass'` | `'Product Discovery'` | `'De-risk your product idea with a structured sprint before writing code.'` |
| MVP Development | `'Rocket'` | `'MVP Development'` | `'Ship a working product on a dual-track roadmap balancing speed and engineering quality.'` |
| Patient Portals | `'Stethoscope'` | `'Patient Portals'` | `'HIPAA-ready patient portals with secure messaging, scheduling, and records access.'` |
| Insurance Portals | `'Shield'` | `'Insurance Portals'` | `'Policyholder, agent, and broker portals that streamline claims and policy workflows.'` |
| E-commerce Websites | `'ShoppingCart'` | `'E-commerce Websites'` | `'Headless commerce builds and migrations with conversion optimisation from day one.'` |

**Note on icons:** These are Lucide icon names resolved through `getLucideIcon`. If a chosen icon is not in `lucide-react`, `getLucideIcon` falls back to `HelpCircle` — which will visually expose the miss. All five names above are standard Lucide icons.

### Task 4.1: Populate `relatedPages` on `product-discovery.ts`

**Files:**
- Modify: `aivanceworks-website/src/data/services/product-discovery.ts`

- [ ] **Step 1:** Read the current file. Locate where to insert the `relatedPages` field. It should sit between `personaComparison` (if present) / `integrations` / `capabilities` and the `faqs` field, following the `BasePageData` interface order.

- [ ] **Step 2:** Add the `relatedPages` field with exactly these three entries (matrix row: Product Discovery → MVP Development, E-commerce Websites, Patient Portals):

  ```ts
    relatedPages: [
      {
        title: 'MVP Development',
        description:
          'Ship a working product on a dual-track roadmap balancing speed and engineering quality.',
        href: '/services/mvp-development',
        icon: 'Rocket',
      },
      {
        title: 'E-commerce Websites',
        description:
          'Headless commerce builds and migrations with conversion optimisation from day one.',
        href: '/solutions/e-commerce-websites',
        icon: 'ShoppingCart',
      },
      {
        title: 'Patient Portals',
        description:
          'HIPAA-ready patient portals with secure messaging, scheduling, and records access.',
        href: '/solutions/patient-portals',
        icon: 'Stethoscope',
      },
    ],
  ```

- [ ] **Step 3:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 4.2: Populate `relatedPages` on `mvp-development.ts`

**Files:**
- Modify: `aivanceworks-website/src/data/services/mvp-development.ts`

- [ ] **Step 1:** Read the current file and locate the insertion point (same as Task 4.1).

- [ ] **Step 2:** Add exactly this `relatedPages` field (matrix row: MVP Development → Product Discovery, E-commerce Websites, Insurance Portals):

  ```ts
    relatedPages: [
      {
        title: 'Product Discovery',
        description:
          'De-risk your product idea with a structured sprint before writing code.',
        href: '/services/product-discovery',
        icon: 'Compass',
      },
      {
        title: 'E-commerce Websites',
        description:
          'Headless commerce builds and migrations with conversion optimisation from day one.',
        href: '/solutions/e-commerce-websites',
        icon: 'ShoppingCart',
      },
      {
        title: 'Insurance Portals',
        description:
          'Policyholder, agent, and broker portals that streamline claims and policy workflows.',
        href: '/solutions/insurance-portals',
        icon: 'Shield',
      },
    ],
  ```

- [ ] **Step 3:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 4.3: Populate `relatedPages` on `patient-portals.ts`

**Files:**
- Modify: `aivanceworks-website/src/data/solutions/patient-portals.ts`

- [ ] **Step 1:** Read the current file. Insert the `relatedPages` field between the existing `complianceDetail` field and the `faqs` field (or at a clean position consistent with `BasePageData` ordering).

- [ ] **Step 2:** Add exactly this `relatedPages` field (matrix row: Patient Portals → Product Discovery, MVP Development, Insurance Portals):

  ```ts
    relatedPages: [
      {
        title: 'Product Discovery',
        description:
          'De-risk your product idea with a structured sprint before writing code.',
        href: '/services/product-discovery',
        icon: 'Compass',
      },
      {
        title: 'MVP Development',
        description:
          'Ship a working product on a dual-track roadmap balancing speed and engineering quality.',
        href: '/services/mvp-development',
        icon: 'Rocket',
      },
      {
        title: 'Insurance Portals',
        description:
          'Policyholder, agent, and broker portals that streamline claims and policy workflows.',
        href: '/solutions/insurance-portals',
        icon: 'Shield',
      },
    ],
  ```

- [ ] **Step 3:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 4.4: Populate `relatedPages` AND reorder `composition` on `insurance-portals.ts`

**Files:**
- Modify: `aivanceworks-website/src/data/solutions/insurance-portals.ts`

**Context:** This file gets TWO edits in one pass: (1) `relatedPages` populated per Decision D, (2) `personaComparison` moved from position 4 to position 3 in `composition` per Decision E.

- [ ] **Step 1:** Change the `composition` array. Current (lines 34–46 approximately):
  ```ts
    composition: [
      'hero',
      'metricsStrip',
      'featureGrid',
      'personaComparison',
      'signature',
      'integrationsPanel',
      'benefitsGrid',
      'processTimeline',
      'relatedPages',
      'faq',
      'ctaBlock',
    ],
  ```
  New:
  ```ts
    composition: [
      'hero',
      'metricsStrip',
      'personaComparison',
      'featureGrid',
      'signature',
      'integrationsPanel',
      'benefitsGrid',
      'processTimeline',
      'relatedPages',
      'faq',
      'ctaBlock',
    ],
  ```
  Only the position of `'personaComparison'` changes — it moves from index 3 to index 2. Nothing else in the array changes.

- [ ] **Step 2:** Add the `relatedPages` field. Place it between the existing `personaComparison` field and the `integrations` field (following `BasePageData` order). Exactly (matrix row: Insurance Portals → Product Discovery, MVP Development, Patient Portals):

  ```ts
    relatedPages: [
      {
        title: 'Product Discovery',
        description:
          'De-risk your product idea with a structured sprint before writing code.',
        href: '/services/product-discovery',
        icon: 'Compass',
      },
      {
        title: 'MVP Development',
        description:
          'Ship a working product on a dual-track roadmap balancing speed and engineering quality.',
        href: '/services/mvp-development',
        icon: 'Rocket',
      },
      {
        title: 'Patient Portals',
        description:
          'HIPAA-ready patient portals with secure messaging, scheduling, and records access.',
        href: '/solutions/patient-portals',
        icon: 'Stethoscope',
      },
    ],
  ```

- [ ] **Step 3:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 4.5: Populate `relatedPages` on `e-commerce-websites.ts`

**Files:**
- Modify: `aivanceworks-website/src/data/solutions/e-commerce-websites.ts` (created in Phase 2)

- [ ] **Step 1:** Add the `relatedPages` field between `technologies` and `faqs` (where the Phase 2 file has the comment `// relatedPages is populated in Phase 4 — leave omitted here.`). Exactly (matrix row: E-commerce Websites → Product Discovery, MVP Development, Insurance Portals):

  ```ts
    relatedPages: [
      {
        title: 'Product Discovery',
        description:
          'De-risk your product idea with a structured sprint before writing code.',
        href: '/services/product-discovery',
        icon: 'Compass',
      },
      {
        title: 'MVP Development',
        description:
          'Ship a working product on a dual-track roadmap balancing speed and engineering quality.',
        href: '/services/mvp-development',
        icon: 'Rocket',
      },
      {
        title: 'Insurance Portals',
        description:
          'Policyholder, agent, and broker portals that streamline claims and policy workflows.',
        href: '/solutions/insurance-portals',
        icon: 'Shield',
      },
    ],
  ```

- [ ] **Step 2:** Remove the `// relatedPages is populated in Phase 4 — leave omitted here.` placeholder comment (if present).

- [ ] **Step 3:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 4.6: Visual verification of all 5 pilot pages

- [ ] **Step 1:** From `aivanceworks-website/`, run:
  ```bash
  npm run dev
  ```

- [ ] **Step 2:** Walk through all 5 pilot pages in the browser:
  - `http://localhost:3000/services/product-discovery`
  - `http://localhost:3000/services/mvp-development`
  - `http://localhost:3000/solutions/patient-portals`
  - `http://localhost:3000/solutions/insurance-portals`
  - `http://localhost:3000/solutions/e-commerce-websites`

  For each page verify:
  - The `RelatedPages` section renders near the bottom (just before the FAQ / CTA per composition).
  - Exactly 3 cards show.
  - Each card has the correct icon (resolved via `getLucideIcon`), title, description, and "Learn more" arrow.
  - Clicking each card lands on the correct destination.
  - The heading reads `Explore Related Solutions` (the `RelatedPages` default) or whatever per-page override is set — exploration-framed, not strong-claim.

- [ ] **Step 3:** On Insurance Portals specifically, verify:
  - `personaComparison` now appears BETWEEN `metricsStrip` and `featureGrid` (section 3 of the page, not section 4).
  - Visual rhythm still feels coherent: intro → metrics → who → what → transformation (signature) → plumbing → close.

- [ ] **Step 4:** Stop the dev server.

**Phase 4 checkpoint:** All 5 pilot pages show a populated `RelatedPages` section. Insurance Portals composition reordered. tsc clean. STOP for user acknowledgment before Phase 5.

---

## Phase 5 — Migrate `src/app/solutions/page.tsx` `DynamicIcon` import

**Scope:** Only the `DynamicIcon` → `getLucideIcon` migration. The rest of this file has pre-existing raw Tailwind color violations (`bg-gray-900`, `from-blue-400 to-indigo-400`, `bg-blue-50`, etc.) that are NOT addressed by this feature — full tokenization of the listing page is deferred to a separate cleanup tracked in `memory/todos/solutions_listing_page_rebuild.md`. Do not refactor anything outside the two icon call sites.

### Task 5.1: Swap `DynamicIcon` for `getLucideIcon` on the listing page

**Files:**
- Modify: `aivanceworks-website/src/app/solutions/page.tsx`

- [ ] **Step 1:** Remove the legacy import at line 10:
  ```tsx
  import { DynamicIcon } from '@/components/solutions';
  ```

- [ ] **Step 2:** Add the pilot import (place it alphabetically with the other `@/lib` imports — near lines 4–7 where `@/lib/seo`, `@/lib/schema`, `@/lib/constants` already live):
  ```tsx
  import { getLucideIcon } from '@/lib/icons';
  ```

- [ ] **Step 3:** Replace the first `DynamicIcon` call site (the category header icon, around line 100). Current:
  ```tsx
  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
    <DynamicIcon name={category.icon} className="h-6 w-6 text-blue-600" />
  </div>
  ```
  New:
  ```tsx
  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
    {(() => {
      const Icon = getLucideIcon(category.icon);
      return <Icon className="h-6 w-6 text-blue-600" />;
    })()}
  </div>
  ```
  *(The IIFE pattern keeps the JSX inline without refactoring the surrounding map. Do NOT touch the `bg-blue-50` / `text-blue-600` — those are pre-existing violations out of scope for this feature.)*

- [ ] **Step 4:** Replace the second `DynamicIcon` call site (the card icon, around line 111). Current:
  ```tsx
  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
    <DynamicIcon name={link.icon} className="h-5 w-5 text-blue-600" />
  </div>
  ```
  New:
  ```tsx
  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
    {(() => {
      const Icon = getLucideIcon(link.icon);
      return <Icon className="h-5 w-5 text-blue-600" />;
    })()}
  </div>
  ```
  *(Same scope rule: do NOT touch `bg-blue-50` / `text-blue-600`.)*

- [ ] **Step 5:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

- [ ] **Step 6:** Verify `DynamicIcon` is no longer referenced in this file:
  ```bash
  grep -n "DynamicIcon" aivanceworks-website/src/app/solutions/page.tsx
  ```
  Expected: zero matches.

### Task 5.2: Visual verification of the listing page

- [ ] **Step 1:** From `aivanceworks-website/`, run `npm run dev`.

- [ ] **Step 2:** Navigate to `http://localhost:3000/solutions`.

- [ ] **Step 3:** Visually verify:
  - The page renders identically to before (no layout or color regression).
  - Category header icons render correctly (e.g., the Healthcare/Insurance/E-commerce section headings each show their `category.icon` correctly).
  - Card icons render correctly (each solution card shows its `link.icon`).
  - Any unknown icon name falls back to `HelpCircle` (the `getLucideIcon` default) — visually obvious and expected.

- [ ] **Step 4:** Stop the dev server.

### Task 5.3: Grep audit — `DynamicIcon` usage is gone from application code (pre-deletion check)

- [ ] **Step 1:** From the repo root, run:
  ```bash
  grep -rn "DynamicIcon" aivanceworks-website/src/
  ```
  Expected matches at this point: only the definition in `src/components/solutions/iconMap.tsx` and the re-export in `src/components/solutions/index.ts`. These are the legacy files that will be deleted in Phase 6. Any other consumer must be flagged and handled before Phase 6 proceeds.

**Phase 5 checkpoint:** Listing page no longer imports from `@/components/solutions`. All icons still render. `DynamicIcon` is ready to be deleted in Phase 6. STOP for user acknowledgment before Phase 6.

---

## Phase 6 — Legacy removal

This phase rewrites `[slug]/page.tsx` to drop the fallback branch, deletes `src/data/solutions.ts`, and deletes the entire `src/components/solutions/` directory tree. The order matters: rewrite first, then audit, then delete.

### Task 6.1: Import audit (pre-deletion gate)

**Purpose:** Confirm every legacy import has been either migrated or is exclusively internal to `src/components/solutions/`. If any external consumer remains, STOP and surface to the user.

- [ ] **Step 1:** From the repo root, run each of the following. Record the results:
  ```bash
  grep -rn "from '@/components/solutions" aivanceworks-website/src/
  grep -rn "from '@/data/solutions'" aivanceworks-website/src/
  grep -rn "SolutionData" aivanceworks-website/src/
  grep -rn "getSolutionBySlug" aivanceworks-website/src/
  grep -rn "getAllSolutions" aivanceworks-website/src/
  grep -rn "getSolutionsByCategory" aivanceworks-website/src/
  grep -rn "DynamicIcon" aivanceworks-website/src/
  grep -rn "AiPoweredFeatures" aivanceworks-website/src/
  ```

- [ ] **Step 2:** Expected results at this checkpoint:
  - `from '@/components/solutions` — only internal re-exports inside `src/components/solutions/index.ts` and `src/components/solutions/unique/index.ts`, and the imports at the top of `src/app/solutions/[slug]/page.tsx` that will be removed in Task 6.2.
  - `from '@/data/solutions'` — only `src/app/solutions/[slug]/page.tsx` (to be removed in Task 6.2). Zero matches elsewhere.
  - `SolutionData` — only inside `src/data/solutions.ts` (the type definition) and the internal consumers of that file inside `src/components/solutions/`.
  - `getSolutionBySlug`, `getAllSolutions`, `getSolutionsByCategory` — only inside `src/data/solutions.ts` and `src/app/solutions/[slug]/page.tsx`.
  - `DynamicIcon` — only inside `src/components/solutions/iconMap.tsx` and `src/components/solutions/index.ts`.
  - `AiPoweredFeatures` — only inside `src/components/solutions/unique/AiPoweredFeatures.tsx`, `src/components/solutions/unique/index.ts`, and `src/app/solutions/[slug]/page.tsx` (the import and usage to be removed in Task 6.2).

- [ ] **Step 3:** If there are any matches OUTSIDE those expected locations, STOP. Surface the extra consumers to the user before proceeding — deleting with unexpected consumers will break the build silently or at runtime.

### Task 6.2: Rewrite `src/app/solutions/[slug]/page.tsx` — remove legacy branch, simplify helpers

**Files:**
- Modify: `aivanceworks-website/src/app/solutions/[slug]/page.tsx`

**Context:** The file currently has:
1. Legacy imports from `@/data/solutions` and `@/components/solutions` + `AiPoweredFeatures` (lines 10–22).
2. `generateStaticParams` that merges pilot and legacy slugs (lines 29–34).
3. `generateMetadata` that tries pilot data then falls back to legacy data then 404 metadata (lines 36–64).
4. The default export that tries pilot rendering then falls back to legacy rendering (~lines 71–186 including the special-cased `{legacy.slug === 'e-commerce-websites' && <AiPoweredFeatures />}` line around line 157).

After this task, ONLY the pilot path remains. The entire legacy fallback section is deleted.

- [ ] **Step 1:** Write the complete new content of `src/app/solutions/[slug]/page.tsx`:

```tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateWebPageSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getSolutionPageData, getAllSolutionPageSlugs } from '@/lib/content';
import { SolutionDetailTemplate } from '@/components/templates';
import {
  PortalArchitectureMap,
  ClaimsFlowComparison,
  EcommerceAiShowcase,
} from '@/components/signature';
import type { ReactNode } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pilotData = await getSolutionPageData(slug);

  if (!pilotData) {
    return constructMetadata({
      title: 'Solution Not Found',
      description: 'The requested solution could not be found.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: pilotData.metaTitle,
    description: pilotData.metaDescription,
    canonical: `${SITE_CONFIG.url}${pilotData.canonicalPath}`,
    keywords: pilotData.keywords,
  });
}

const SIGNATURE_COMPONENTS: Record<string, ReactNode> = {
  PortalArchitectureMap: <PortalArchitectureMap />,
  ClaimsFlowComparison: <ClaimsFlowComparison />,
  EcommerceAiShowcase: <EcommerceAiShowcase />,
};

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const pilotData = await getSolutionPageData(slug);
  if (!pilotData) notFound();

  const signature = SIGNATURE_COMPONENTS[pilotData.signatureComponent];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        pilotData.metaTitle,
        `${SITE_CONFIG.url}${pilotData.canonicalPath}`
      ),
      generateServiceSchema({
        name: pilotData.title,
        description: pilotData.shortDescription,
        url: `${SITE_CONFIG.url}${pilotData.canonicalPath}`,
      }),
      {
        '@type': 'BreadcrumbList',
        itemListElement: pilotData.breadcrumb.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.label,
          item: `${SITE_CONFIG.url}${crumb.href}`,
        })),
      },
      ...(pilotData.faqs.length > 0 ? [generateFAQSchema(pilotData.faqs)] : []),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <SolutionDetailTemplate data={pilotData} signature={signature} />
    </>
  );
}
```

- [ ] **Step 2:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors. If there are errors, most likely:
  - The `EcommerceAiShowcase` named re-export does not exist in `@/components/signature` — in that case switch to the direct import: `import { EcommerceAiShowcase } from '@/components/signature/EcommerceAiShowcase';`
  - `constructMetadata` signature mismatch — check the existing `generateMetadata` in `src/app/services/[slug]/page.tsx` or `src/app/services/mvp-development/page.tsx` for the current shape.

- [ ] **Step 3:** Token-hygiene grep on the rewritten file:
  ```bash
  grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' aivanceworks-website/src/app/solutions/[slug]/page.tsx
  ```
  Expected: zero output (this is a route file, not a component — no classes).

- [ ] **Step 4:** Visual sanity check: start `npm run dev` and navigate to each of the three solution pages:
  - `/solutions/patient-portals`
  - `/solutions/insurance-portals`
  - `/solutions/e-commerce-websites`
  - And confirm a non-existent slug like `/solutions/foo-bar` correctly 404s.

  Stop the dev server after verifying.

### Task 6.3: Delete `src/data/solutions.ts`

**Files:**
- Delete: `aivanceworks-website/src/data/solutions.ts`

- [ ] **Step 1:** Before deletion, re-run the audit for any remaining importer:
  ```bash
  grep -rn "from '@/data/solutions'" aivanceworks-website/src/
  ```
  Expected: zero matches. If there are any, STOP and surface before deleting.

- [ ] **Step 2:** Delete the file. On Windows bash:
  ```bash
  rm aivanceworks-website/src/data/solutions.ts
  ```

- [ ] **Step 3:** Type-check:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```
  Expected: zero errors.

### Task 6.4: Delete the entire `src/components/solutions/` directory tree

**Files to delete** (per spec section 10):
- `aivanceworks-website/src/components/solutions/SolutionHero.tsx`
- `aivanceworks-website/src/components/solutions/SolutionFeatures.tsx`
- `aivanceworks-website/src/components/solutions/SolutionBenefits.tsx`
- `aivanceworks-website/src/components/solutions/SolutionProcess.tsx`
- `aivanceworks-website/src/components/solutions/SolutionTechStack.tsx`
- `aivanceworks-website/src/components/solutions/SolutionFAQ.tsx`
- `aivanceworks-website/src/components/solutions/SolutionCTA.tsx`
- `aivanceworks-website/src/components/solutions/SolutionRelated.tsx`
- `aivanceworks-website/src/components/solutions/iconMap.tsx`
- `aivanceworks-website/src/components/solutions/index.ts`
- `aivanceworks-website/src/components/solutions/unique/AiPoweredFeatures.tsx`
- `aivanceworks-website/src/components/solutions/unique/index.ts`
- The empty `src/components/solutions/unique/` and `src/components/solutions/` directories themselves.

- [ ] **Step 1:** Final audit before deletion:
  ```bash
  grep -rn "from '@/components/solutions" aivanceworks-website/src/
  grep -rn "DynamicIcon" aivanceworks-website/src/
  grep -rn "AiPoweredFeatures" aivanceworks-website/src/
  grep -rn "SolutionHero\|SolutionFeatures\|SolutionBenefits\|SolutionProcess\|SolutionTechStack\|SolutionFAQ\|SolutionCTA\|SolutionRelated" aivanceworks-website/src/
  ```
  Expected at this point: matches ONLY inside `src/components/solutions/` itself (internal references between files in the directory being deleted). Any match outside that directory must be investigated before deletion.

- [ ] **Step 2:** List the directory first so you can verify you know what you're about to delete:
  ```bash
  ls -la aivanceworks-website/src/components/solutions/
  ls -la aivanceworks-website/src/components/solutions/unique/
  ```

- [ ] **Step 3:** Delete the entire directory recursively:
  ```bash
  rm -rf aivanceworks-website/src/components/solutions/
  ```
  *(If the user is nervous about `rm -rf`, delete files one by one with `rm` and then `rmdir` the empty directories.)*

- [ ] **Step 4:** Confirm the directory no longer exists:
  ```bash
  ls aivanceworks-website/src/components/solutions/ 2>&1 || echo "directory removed"
  ```
  Expected: "directory removed" or an equivalent "No such file or directory" message.

- [ ] **Step 5:** Type-check from `aivanceworks-website/`:
  ```bash
  npx tsc --noEmit
  ```
  Expected: zero errors. If there are errors about missing modules from `@/components/solutions`, the audit in Step 1 missed a consumer — restore from git and re-audit before deleting again.

### Task 6.5: Full build, token grep, and final grep sweep

- [ ] **Step 1:** Full production build:
  ```bash
  cd aivanceworks-website && npm run build
  ```
  Expected: build succeeds. All static pages generate. If any page errors, the fix is most likely in Phase 4 data-file edits or the rewritten `[slug]/page.tsx`.

- [ ] **Step 2:** Token-hygiene grep on every file touched by this feature:
  ```bash
  grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' \
    aivanceworks-website/src/components/signature/EcommerceAiShowcase.tsx \
    aivanceworks-website/src/data/solutions/e-commerce-websites.ts \
    aivanceworks-website/src/data/solutions/patient-portals.ts \
    aivanceworks-website/src/data/solutions/insurance-portals.ts \
    aivanceworks-website/src/data/services/product-discovery.ts \
    aivanceworks-website/src/data/services/mvp-development.ts \
    aivanceworks-website/src/app/solutions/[slug]/page.tsx
  ```
  Expected: zero output. Note: `src/app/solutions/page.tsx` (the listing page) is explicitly excluded per the spec — it has pre-existing violations tracked as a separate cleanup.

- [ ] **Step 3:** Final legacy grep sweep:
  ```bash
  grep -rn "from '@/components/solutions" aivanceworks-website/src/
  grep -rn "from '@/data/solutions'" aivanceworks-website/src/
  grep -rn "DynamicIcon" aivanceworks-website/src/
  grep -rn "AiPoweredFeatures" aivanceworks-website/src/
  grep -rn "SolutionData\b" aivanceworks-website/src/
  grep -rn "getSolutionBySlug\|getAllSolutions\|getSolutionsByCategory" aivanceworks-website/src/
  ```
  Expected: ZERO matches on every single one. Any match here is a blocker.

### Task 6.6: Dev server visual review

- [ ] **Step 1:** Start `npm run dev` from `aivanceworks-website/`.

- [ ] **Step 2:** Walk through all the routes:
  - `/solutions` (listing page) — category icons render, card icons render, no layout regression.
  - `/solutions/patient-portals` — renders, has RelatedPages, signature visible.
  - `/solutions/insurance-portals` — renders, RelatedPages present, persona section appears before feature grid (Decision E).
  - `/solutions/e-commerce-websites` — renders through the pilot path (no legacy styling), `EcommerceAiShowcase` signature visible, RelatedPages present.
  - `/services/product-discovery` — RelatedPages present.
  - `/services/mvp-development` — RelatedPages present.
  - `/solutions/foo-bar` — 404s gracefully.

- [ ] **Step 3:** Stop the dev server.

**Phase 6 checkpoint:** Legacy components gone. `src/data/solutions.ts` gone. `[slug]/page.tsx` is single-path. Build passes, tsc clean, token grep clean, legacy grep sweep clean. STOP for user acknowledgment before Phase 7.

---

## Phase 7 — Content integrity review (user-gated)

**Purpose:** Walk the `_unverified` array on `src/data/solutions/e-commerce-websites.ts` with the user. Every item needs a yes/no/rewrite decision. The spec section 13 "Content integrity plan" is the authoritative checklist.

This phase is NOT a rubber stamp. If the user skims quickly, the implementer should flag: "I notice several items were accepted quickly — want to revisit?"

### Task 7.1: Walk the `_unverified` list item-by-item

**Files:**
- Read: `aivanceworks-website/src/data/solutions/e-commerce-websites.ts` (the `_unverified` array)
- Modify (during review): same file

**Review categories (from spec section 13):**

1. **Metrics (4 items from `metricsStrip[0..3]`).** For each, the user picks:
   - (a) Keep as capability claim with "Target" framing (already applied in the draft).
   - (b) Cite industry research with a specific source (Baymard Institute, Forrester, Gartner, etc.).
   - (c) Remove entirely.
   The 4 items to walk: CVR uplift, LCP target, AOV lift, cart-abandonment reduction.

2. **Hero metrics** (3 items in `hero.metrics`). Same decision set as metricsStrip.

3. **Integration specificity in `features[3]`, `features[4]`, `features[5]`, `capabilities[10]`, `technologies[8]`, and FAQs 1 and 2.** For each: confirm naming specific vendors (Stripe, Braintree, Adyen, Shopify, Magento, WooCommerce, Salesforce Commerce Cloud, NetSuite, SAP, Salesforce, Avalara, TaxJar, GA4, Meta Pixel, Klaviyo) in prose is acceptable for a greenfield company — OR requires qualification like "we build on and migrate from..." vs "we have shipped integrations with...".

4. **Process step durations.** Confirm "typical/planned" framing is acceptable without a past-engagement data source.

5. **Benefit copy.** Re-read `benefits[0..4]` for any surviving outcome language.

6. **EcommerceAiShowcase tile descriptions.** Re-read all 5 tile descriptions inside `src/components/signature/EcommerceAiShowcase.tsx` for any surviving outcome language. Specifically check that no chip-array stats leaked in during the port.

- [ ] **Step 1:** Present the `_unverified` list to the user one item at a time. For each item:
  1. Quote the exact field path and current value.
  2. Offer the decision set (keep-as-capability / cite-source / remove).
  3. Wait for the user's decision.
  4. Apply the change to the file (or `_unverified` entry) before moving on.

- [ ] **Step 2:** Run the feature-wide content integrity grep from spec section 13:
  ```bash
  grep -rniE "(clients? see|on average|we deliver|we achieve|proven|track record)" aivanceworks-website/src/data/solutions/
  grep -rniE "(clients? see|on average|we deliver|we achieve|proven|track record)" aivanceworks-website/src/data/services/
  grep -rniE "(clients? see|on average|we deliver|we achieve|proven|track record)" aivanceworks-website/src/components/signature/
  ```
  Expected: zero output on the signature file. Any output in the data files must be either rewritten or added to `_unverified` (with user sign-off on the addition).

- [ ] **Step 3:** After all items are resolved, the remaining `_unverified` array should contain only items the user has explicitly chosen to defer (not flagged as problems). Type-check and run the token-hygiene grep one more time:
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' src/data/solutions/e-commerce-websites.ts src/components/signature/EcommerceAiShowcase.tsx
  ```
  Expected: zero errors, zero matches.

**Phase 7 checkpoint:** `_unverified` review complete. User signed off on every item. STOP for user acknowledgment before Phase 8.

---

## Phase 8 — Final verification + memory cleanup

### Task 8.1: Success criteria from spec section 17

Walk the checklist from the spec's success criteria. Mark each item confirmed or blocked.

- [ ] **Step 1:** `npx tsc --noEmit` returns zero errors across the entire codebase.
  ```bash
  cd aivanceworks-website && npx tsc --noEmit
  ```

- [ ] **Step 2:** `npm run build` passes with all static pages generated.
  ```bash
  cd aivanceworks-website && npm run build
  ```

- [ ] **Step 3:** Token-hygiene grep returns zero matches on the in-scope files:
  ```bash
  grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' \
    aivanceworks-website/src/components/signature/EcommerceAiShowcase.tsx \
    aivanceworks-website/src/data/solutions/e-commerce-websites.ts \
    aivanceworks-website/src/data/solutions/patient-portals.ts \
    aivanceworks-website/src/data/solutions/insurance-portals.ts \
    aivanceworks-website/src/data/services/product-discovery.ts \
    aivanceworks-website/src/data/services/mvp-development.ts \
    aivanceworks-website/src/app/solutions/[slug]/page.tsx
  ```
  *(Excluded per spec: `src/app/solutions/page.tsx` — tracked as a separate cleanup in `memory/todos/solutions_listing_page_rebuild.md`.)*

- [ ] **Step 4:** `/solutions/e-commerce-websites` renders through `SolutionDetailTemplate` with the new `EcommerceAiShowcase` signature displayed.

- [ ] **Step 5:** `/solutions/patient-portals` and `/solutions/insurance-portals` continue to render correctly.

- [ ] **Step 6:** `/solutions` listing page still renders correctly, category/card icons work via `getLucideIcon`.

- [ ] **Step 7:** Insurance Portals persona section appears between `metricsStrip` and `featureGrid`.

- [ ] **Step 8:** All 5 pilot pages render a `RelatedPages` section with exactly 3 cards each, matching the Decision D matrix.

- [ ] **Step 9:** `RelatedPages` section heading uses exploration framing (`Explore Related Solutions` default or per-page override consistent with framing guidance).

- [ ] **Step 10:** `src/components/solutions/` directory no longer exists:
  ```bash
  ls aivanceworks-website/src/components/solutions/ 2>&1 || echo "OK: removed"
  ```

- [ ] **Step 11:** `src/app/solutions/[slug]/page.tsx` contains no `getSolutionBySlug` reference and no legacy fallback branch:
  ```bash
  grep -n "getSolutionBySlug\|legacy" aivanceworks-website/src/app/solutions/\[slug\]/page.tsx
  ```
  Expected: zero matches.

- [ ] **Step 12:** `src/data/solutions.ts` is deleted:
  ```bash
  ls aivanceworks-website/src/data/solutions.ts 2>&1 || echo "OK: removed"
  ```

- [ ] **Step 13:** Legacy grep sweep is clean:
  ```bash
  grep -rn "from '@/components/solutions" aivanceworks-website/src/
  grep -rn "DynamicIcon" aivanceworks-website/src/
  grep -rn "from '@/data/solutions'" aivanceworks-website/src/
  grep -rn "AiPoweredFeatures" aivanceworks-website/src/
  ```
  Expected: zero matches on every single one.

- [ ] **Step 14:** E-commerce data file `_unverified` array fully reviewed and signed off by the user (from Phase 7).

- [ ] **Step 15:** User visual approval on all 5 pilot pages at the dev server.

### Task 8.2: Memory cleanup

**Purpose:** The feature has shipped — update memory to reflect the new state. All memory files live under `C:\Users\harik\.claude\projects\c--Users-harik-source-repos-genisis\memory\`. The user has asked NEVER to run git add or commit — the memory edits are file writes only; the user handles any commit that touches `.claude/` separately.

- [ ] **Step 1:** Delete the feature-brief memory file:
  ```bash
  rm c:/Users/harik/source/repos/genisis/memory/project_ecommerce_migration_feature.md
  ```

- [ ] **Step 2:** Remove the corresponding line from `memory/MEMORY.md` — delete the line:
  ```
  - [E-commerce migration + legacy cleanup feature brief](project_ecommerce_migration_feature.md) — self-contained feature for a future session to migrate /solutions/e-commerce-websites and delete all legacy Solution* components
  ```
  Keep every other line in `MEMORY.md` untouched.

- [ ] **Step 3:** Open `memory/todos/pilot_iteration2.md` and mark the following items as resolved (add a `resolved:` note or strike through — match the file's existing convention):
  - "relatedPages data population" — resolved by this feature on all 5 pilot pages.
  - "e-commerce migration + AiPoweredFeatures port" — resolved by this feature.
  - Any item referencing "delete Solution* components" — resolved.
  Do NOT mark unrelated items (imagery, pricing, signature iteration, `_unverified` review) as resolved — those are still outstanding.

- [ ] **Step 4:** The `memory/todos/solutions_listing_page_rebuild.md` file STAYS as-is — the listing page full rebuild is still deferred by this feature.

- [ ] **Step 5:** Verify the memory state:
  ```bash
  ls c:/Users/harik/source/repos/genisis/memory/
  ls c:/Users/harik/source/repos/genisis/memory/todos/
  cat c:/Users/harik/source/repos/genisis/memory/MEMORY.md
  ```
  Expected: `project_ecommerce_migration_feature.md` is gone. `MEMORY.md` index no longer references it. `todos/pilot_iteration2.md` has the resolved items noted.

### Task 8.3: Hand off for user commit

**Purpose:** The plan has zero git commands. The user handles branch/commit strategy manually. At this point the implementer's job is to summarize what changed and hand off cleanly.

- [ ] **Step 1:** Produce a short summary for the user covering:
  - Files created: `src/components/signature/EcommerceAiShowcase.tsx`, `src/data/solutions/e-commerce-websites.ts`.
  - Files modified: `src/lib/content.ts`, `src/app/solutions/[slug]/page.tsx`, `src/app/solutions/page.tsx`, `src/data/solutions/patient-portals.ts`, `src/data/solutions/insurance-portals.ts`, `src/data/services/product-discovery.ts`, `src/data/services/mvp-development.ts`, (optionally) `src/components/signature/index.ts`.
  - Files deleted: `src/data/solutions.ts`, the entire `src/components/solutions/` directory (12 files), `memory/project_ecommerce_migration_feature.md`.
  - Memory updated: `memory/MEMORY.md` index, `memory/todos/pilot_iteration2.md`.

- [ ] **Step 2:** Remind the user that no git commands were run and they own branch creation and commit organization.

- [ ] **Step 3:** Call out any `_unverified` items that were DEFERRED rather than resolved during Phase 7, so the user has an explicit list to track.

**Phase 8 checkpoint:** Feature complete. All success criteria met. Memory cleaned up. Hand-off summary delivered. User owns next steps (commit, any remaining `_unverified` follow-ups, imagery work tracked separately).

---

## Notes for the executing agent

1. **Subagent path-resolution quirk.** After any subagent-dispatched file creation, verify with `ls` that the file landed at the un-nested path. If you see `aivanceworks-website/aivanceworks-website/src/...`, the file is at the wrong path — move it or re-create at the correct location.

2. **Do not edit `SolutionDetailTemplate.tsx`.** The signature dispatch lives in `src/app/solutions/[slug]/page.tsx`'s `SIGNATURE_COMPONENTS` map. The template receives a pre-built `ReactNode` via its `signature` prop and is agnostic to which signature is rendered.

3. **Do not edit `src/types/pages.ts`.** `signatureComponent` is already typed as `string`, not a union — adding `'EcommerceAiShowcase'` to the dispatch map is a data-file/dispatch-map change, not a type change.

4. **Do not edit `src/components/shared/sections/RelatedPages.tsx`.** The `title` prop already defaults to `'Explore Related Solutions'`, which is exploration-framed per Decision D.

5. **Do not start a full rebuild of `src/app/solutions/page.tsx`.** This plan only migrates its `DynamicIcon` import. The raw Tailwind colors (`bg-gray-900`, `from-blue-400 to-indigo-400`, `bg-blue-50`, etc.) are pre-existing and deferred to a separate cleanup tracked in `memory/todos/solutions_listing_page_rebuild.md`.

6. **If `tsc` or `build` fails during any phase**, STOP and diagnose before moving on. Do not push past a failing check hoping the next task fixes it.

7. **Grep before you delete.** Every deletion step in Phase 6 has a pre-deletion audit grep. Do not skip it. If the audit shows an unexpected consumer, surface to the user BEFORE deleting anything.

8. **Phase boundaries are user gates.** At the end of every phase, STOP and wait for user acknowledgment before proceeding to the next phase. The user wants to review and commit between phases.
