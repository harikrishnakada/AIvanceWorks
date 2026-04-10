# Design: E-commerce Migration + Legacy Cleanup

**Status:** Approved for implementation planning
**Date:** 2026-04-09
**Feature brief:** `memory/project_ecommerce_migration_feature.md`
**Parent spec:** `docs/superpowers/specs/2026-04-08-unified-services-solutions-design-system-design.md`
**Parent plan:** `docs/superpowers/plans/2026-04-08-unified-services-solutions-design-system-pilot.md`

---

## 1. Overview

Complete the services/solutions design system migration started in the 2026-04-08 pilot by migrating `/solutions/e-commerce-websites` from the legacy fallback path to the unified pilot architecture, rebuilding `AiPoweredFeatures` as a tokenized signature component, populating `relatedPages` data on all 5 pilot pages, and deleting the entire legacy `src/components/solutions/*` tree.

After this feature ships, every services/solutions page resolves through a single `SolutionDetailTemplate` / `ServiceDetailTemplate` code path, every section is tokenized, every page has populated cross-links, and the `src/app/solutions/[slug]/page.tsx` route has exactly one branch (no legacy fallback).

This is the terminal cleanup of the pilot — it does not migrate the other 10 legacy solutions, does not introduce imagery, does not add a testing framework, and does not touch services routes.

---

## 2. Goals and non-goals

### Goals

1. Migrate `/solutions/e-commerce-websites` to the pilot `SolutionDetailTemplate` via a new `SolutionPageData` data file (`src/data/solutions/e-commerce-websites.ts`).
2. Rebuild `AiPoweredFeatures` as a single-use signature component `EcommerceAiShowcase.tsx` under `src/components/signature/`, using theme tokens only.
3. Populate the `relatedPages` field on all 5 pilot pages (Product Discovery, MVP Development, Patient Portals, Insurance Portals, E-commerce Websites) with a symmetric 3-per-page cross-link matrix.
4. Delete the entire legacy `src/components/solutions/` directory tree after all imports are cleaned.
5. Delete the legacy fallback branch from `src/app/solutions/[slug]/page.tsx` so the file has a single pilot-only code path.
6. Remove the `ecommerceWebsites`, `patientPortals`, and `insurancePortals` data objects from the legacy `src/data/solutions.ts`, and delete the file entirely if no imports remain.
7. Refine Insurance Portals composition by moving `personaComparison` up one slot so it qualifies the audience before features are enumerated.

### Non-goals

- Imagery work of any kind — blocked by `memory/project_imagery_strategy.md`. No image props added to any section.
- Migration of any other legacy solution slug beyond e-commerce.
- Services-page migrations — services already render through the pilot template.
- Building `CaseStudySpotlight`, `TestimonialStrip`, or `LogoWall` shared sections — deferred until real case / testimonial / logo content exists (greenfield constraint).
- Building a generic `BentoGrid` shared section — `EcommerceAiShowcase` is intentionally single-use per the constitution's "2+ consumers" rule.
- Extending `TechStackBlock` with an integrations column — see decision C.
- Adding an `IntegrationsPanel` section to the e-commerce page — see decision C.
- Adding a testing framework. Verification stays `tsc` + `npm run build` + visual review + token-hygiene grep.
- CMS integration — deferred.
- Theme token expansion. No new CSS variables added to `themes/blue.css` or `themes/purple.css`.

---

## 3. Context and constraints

### Greenfield content integrity

AIvanceWorks has no real clients yet. Every numeric claim, metric, percentage, duration, testimonial, and case study on any of the migrated content is by definition not from past work. See `memory/project_greenfield_no_clients.md` for the full rule set. This constraint affects every decision below and is the single most load-bearing context for the content strategy.

Consequences enforced throughout this spec:

- Every migrated metric from the legacy `ecommerceWebsites` object either becomes a capability claim, an industry-research citation, or an `_unverified` entry flagged for user sign-off.
- No outcome claims (`"clients see X%"`, `"on average we deliver Y"`). Only capability claims (`"architected to deliver X"`, `"built for Y"`).
- The `CaseStudySpotlight` section is omitted from the e-commerce composition even though Archetype D (commerce) nominally expects it — because there are no real case studies to feature and we refuse to fabricate them.
- The `EcommerceAiShowcase` signature does not use stats chips or outcome metrics. It shows capabilities, not results.

### Hard constraints inherited from the pilot

These are non-negotiable and inherited from `memory/project_ecommerce_migration_feature.md` and the pilot plan:

1. **NEVER run `git add`, `git commit`, or any staging command.** User handles all git operations manually.
2. **Theme tokens only.** No hardcoded Tailwind color shades. Only `bg-brand-*`, `bg-accent-*`, `bg-surface-*`, `text-text-*`, `border-border-*`, and the glass CSS vars.
3. **Token-hygiene grep must pass** on every touched file:
   ```bash
   grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' <file>
   ```
4. **No hex in JSX.** No `style={{ color: '#...' }}`.
5. **Every section wraps in `<Section tone="..." size="...">`** for rhythm consistency.
6. **Content integrity rule is non-negotiable.** Every number/stat/claim must be verified or listed in `_unverified` with precise field path and reason.
7. **No `Hero` or section image props.** Imagery research is still outstanding.
8. **TypeScript strict mode.** `npx tsc --noEmit` returns zero errors at every phase boundary.
9. **Follow established pilot patterns.** Section components wrap in `<Section>`, data files export default, types live in `src/types/pages.ts`, fetchers live in `src/lib/content.ts`, templates dispatch via `composition: SectionKey[]`. No alternatives invented.

---

## 4. Key decisions summary

Five decisions were resolved through brainstorming. Each ran through self-challenge and audience-perspective testing before being locked. The full transcript lives in the brainstorming conversation; this section captures the verdicts and rationale.

### Decision A — `AiPoweredFeatures` rebuild strategy: **Port as single-use signature**

**Verdict:** Create `src/components/signature/EcommerceAiShowcase.tsx` as a tokens-only port of the legacy 5-tile bento layout. Do NOT promote to a generic `BentoGrid` shared section.

**Rationale:**
- The constitution's "2+ consumers" rule says a pattern only becomes a shared section once a second page wants it. E-commerce is the only current consumer.
- Signature components are the right home for high-visual-identity single-use pieces.
- Greenfield context makes capability-showcase signatures safer than transformation narratives — see decision in section 7.
- Palette strategy uses **three theme-safe tile variants** (light surface / dark brand spotlight / warm accent) rotated across 5 cards to create variation without rainbow sprawl. All variants resolve through `brand-*` / `accent-*` / `surface-*` tokens, so both `data-theme="blue"` and `data-theme="purple"` work without per-theme overrides.
- No stats chips, no outcome claims — capability descriptions only.

### Decision B — `CaseStudySpotlight` on e-commerce: **Omit entirely**

**Verdict:** Do not include `caseStudySpotlight` in the e-commerce composition. Do not build a placeholder section. Track the absence in the e-commerce data file's `_unverified` array so the content/sales team knows to build one when real data exists.

**Rationale:**
- Greenfield: no real case studies exist. Building a placeholder section risks future drift ("we'll just leave this lorem ipsum for now") and creates a component that isn't load-tested against real content.
- Consistent with Patient Portals and Insurance Portals, which also omit `caseStudySpotlight` for the same reason.
- Archetype D's nominal recipe includes `caseStudySpotlight`, but the constitution explicitly permits dropping sections that can't be honestly populated.
- The `CaseStudySpotlight` shared section build is deferred to a future unified effort once real case data exists across multiple pages.

### Decision C — Integration schema for e-commerce: **Skip IntegrationsPanel, weave into features + FAQ**

**Verdict:** Do not add `integrationsPanel` to the e-commerce composition. Do not extend `TechStackBlock` with an integrations column. Keep `TechStackBlock` exactly as-is (capabilities + technologies chips, no integrations field). Instead, mitigate the lost signal in three places the audience is already reading:

1. **Integration names woven into 2-3 `features[]` descriptions:**
   - *Multi-Channel & Headless Architecture* mentions migration from Shopify, Magento, or WooCommerce.
   - *Checkout & Payment Optimization* mentions Stripe, Braintree, Adyen integrations with tokenized PCI flows.
   - *Marketing & Analytics Ready* mentions GA4, Meta Pixel, Klaviyo via server-side tagging.
2. **Two FAQ entries on integration anxieties:**
   - *"Can you migrate my existing Shopify/Magento store without downtime?"*
   - *"How do you integrate with our existing ERP and CRM?"* (answer names NetSuite, SAP, Salesforce in prose).
3. **One capability bullet in `techStackBlock.capabilities`:** "ERP/CRM-ready — architected for NetSuite, SAP, and Salesforce integrations without double-entry."

**Rationale:**
- Target audience on `/solutions/e-commerce-websites` is business decision-makers (founders, VPs of Digital, heads of e-commerce at mid-market retailers), not developers. They care about credibility, migration safety, cost/timeline, and post-launch support — not connector inventories.
- In a greenfield context, listing 16+ vendor names we haven't actually shipped integrations for reads as "check-box marketing" and dilutes rather than builds confidence.
- Integration names still appear in page body (feature prose, FAQ prose, capability bullet) for SEO crawlers, without a dedicated marketing section overclaiming.
- Every mitigation is a capability claim, not an outcome claim — greenfield-safe.
- Zero schema changes, zero new sections, zero new props. `TechStackBlock` and `IntegrationsPanel` remain untouched.

### Decision D — `relatedPages` matrix: **Symmetric 3-per-page with exploration framing**

**Verdict:** Populate all 5 pilot data files with a symmetric 3-item `relatedPages` matrix. Every card description is a capability claim (no `_unverified` needed). The `RelatedPages` section heading uses exploration language ("Explore more of what we build"), not relatedness language ("Related solutions") — this makes weak cross-vertical links neutral rather than overclaiming connection.

**Matrix:**

```
Product Discovery     → MVP Development, E-commerce Websites, Patient Portals
MVP Development       → Product Discovery, E-commerce Websites, Insurance Portals
Patient Portals       → Product Discovery, MVP Development, Insurance Portals
Insurance Portals     → Product Discovery, MVP Development, Patient Portals
E-commerce Websites   → Product Discovery, MVP Development, Insurance Portals
```

**Rationale:**
- Every solution page leads with **Product Discovery + MVP Development** — these are the audience's strongest "how would you actually deliver this?" next-step link.
- Services pages surface a rotating mix of solutions (E-commerce appears on both, Patient/Insurance each on one) to show breadth without repetition.
- Solution-to-solution cross-links are weak audience-wise (verticals don't cross-shop), but UX symmetry (3 cards, same grid) is worth more than strict audience purity for the weakest link, and exploration framing neutralizes the overclaim risk.
- E-commerce → Insurance Portals is chosen over E-commerce → Patient Portals because claims/commerce share "complex transactional workflow" framing more than data-sensitivity framing.
- Icons reuse each destination page's primary icon (from `lib/icons.ts`) for visual continuity on click-through.

### Decision E — Insurance Portals `personaComparison` placement: **Move up to position 3**

**Verdict:** Move `personaComparison` from position 4 (between `featureGrid` and `signature`) to position 3 (between `metricsStrip` and `featureGrid`).

**Before:**
```ts
composition: ['hero', 'metricsStrip', 'featureGrid', 'personaComparison', 'signature', 'integrationsPanel', 'benefitsGrid', 'processTimeline', 'relatedPages', 'faq', 'ctaBlock']
```

**After:**
```ts
composition: ['hero', 'metricsStrip', 'personaComparison', 'featureGrid', 'signature', 'integrationsPanel', 'benefitsGrid', 'processTimeline', 'relatedPages', 'faq', 'ctaBlock']
```

**Rationale:**
- The persona section's highest-leverage audience is the **broker / agent tech lead**, who is the most bounce-prone visitor on this page and needs early confirmation that the product serves brokers, not just carriers.
- Current placement buries personas at section 4; a scanning visitor may bounce before reaching it.
- Moving personas up creates cleaner narrative rhythm: **intro → who → what → transformation → plumbing → close**. The signature (`ClaimsFlowComparison`) then lands isolated as the emotional climax in its natural mid-page position.
- Zero component, copy, or data changes. Single-line composition edit.

---

## 5. Architecture changes

### Before / after route resolution

```
BEFORE:
  src/app/solutions/[slug]/page.tsx
    ├─ attempts getSolutionPageData(slug)           → pilot path (patient/insurance)
    │       └─ renders <SolutionDetailTemplate data={...} signature={signature} />
    │             where `signature` is pre-built JSX from SIGNATURE_COMPONENTS map:
    │                 'PortalArchitectureMap' → <PortalArchitectureMap />
    │                 'ClaimsFlowComparison'  → <ClaimsFlowComparison />
    │
    └─ falls back to getSolutionBySlug(slug)        → legacy path (e-commerce)
          └─ renders <SolutionHero /> <SolutionFeatures /> <SolutionProcess />
             <SolutionTechStack /> <SolutionBenefits /> <SolutionFAQ />
             <SolutionCTA /> <SolutionRelated /> <AiPoweredFeatures />

AFTER:
  src/app/solutions/[slug]/page.tsx
    └─ getSolutionPageData(slug) — PILOT PATH ONLY for all 3 solutions
          └─ <SolutionDetailTemplate data={...} signature={signature} />
                where `signature` is pre-built JSX from SIGNATURE_COMPONENTS map:
                    'PortalArchitectureMap' → <PortalArchitectureMap />
                    'ClaimsFlowComparison'  → <ClaimsFlowComparison />
                    'EcommerceAiShowcase'   → <EcommerceAiShowcase />   ← NEW

  NOTE: SIGNATURE_COMPONENTS lives in src/app/solutions/[slug]/page.tsx
        (not in SolutionDetailTemplate). The template receives a pre-built
        ReactNode via the `signature` prop.
```

### File layout after feature ships

```
aivanceworks-website/
  src/
    app/solutions/[slug]/page.tsx          ← rewritten, single path
    components/
      shared/                              ← unchanged
      signature/
        ClaimsFlowComparison.tsx           ← existing
        ...                                ← other existing signatures
        EcommerceAiShowcase.tsx            ← NEW
      solutions/                           ← DELETED (entire directory)
      templates/
        SolutionDetailTemplate.tsx         ← edited to dispatch EcommerceAiShowcase
    data/
      solutions/
        product-discovery.ts               ← edited: relatedPages populated
        mvp-development.ts                 ← edited: relatedPages populated
        patient-portals.ts                 ← edited: relatedPages populated
        insurance-portals.ts               ← edited: relatedPages + composition reorder
        e-commerce-websites.ts             ← NEW
      solutions.ts                         ← objects removed; file deleted if import-clean
    lib/
      content.ts                           ← edited: 'e-commerce-websites' added to SOLUTION_PAGE_MODULES
```

---

## 6. Data schema

**No schema changes to `src/types/pages.ts`.** The existing `SolutionPageData`, `SectionKey`, `RelatedPageItem`, and related types are sufficient for this feature.

Spec review confirmed that `signatureComponent` is typed as a plain `string` on `SolutionPageData`, not as a union. Adding `'EcommerceAiShowcase'` as a valid value is purely a data-file and dispatch-map change — no type-level additions needed.

---

## 7. E-commerce data file — `src/data/solutions/e-commerce-websites.ts`

### Shape

Standard `SolutionPageData` following the pattern from `patient-portals.ts` and `insurance-portals.ts`.

### Composition

```ts
composition: [
  'hero',
  'metricsStrip',
  'featureGrid',
  'signature',        // EcommerceAiShowcase
  'benefitsGrid',
  'techStackBlock',
  'processTimeline',
  'relatedPages',
  'faq',
  'ctaBlock',
],
signatureComponent: 'EcommerceAiShowcase',
industry: 'retail',
```

Dropped vs Archetype D canonical recipe: `caseStudySpotlight` (Decision B), `integrationsPanel` (Decision C). Order is otherwise the Archetype D sequence.

### Content strategy — greenfield translation of legacy `ecommerceWebsites`

| Legacy field | Legacy content | Migration treatment |
|---|---|---|
| Hero headline/subhead | Marketing copy | Ported, reviewed for outcome-claim language, rewritten as capability claims where needed |
| `metrics[]` (4 items: 25-45% CVR, <1.5s LCP, 20-30% AOV, 35-50% cart abandonment) | Outcome claims | LCP stays as capability claim (`"architected for sub-1.5s LCP"`). CVR/AOV/abandonment either (a) reframed as industry research with citation source in `_unverified`, or (b) moved to `_unverified` for user sign-off, or (c) replaced with different capability-framed metrics. The plan must surface all 4 for user review. |
| `features[]` (6 items) | Generic feature descriptions | Ported. **Three feature descriptions rewritten to weave integration mentions per Decision C mitigation 1.** |
| `process[]` (5 steps) | Durations described as averages | Durations reframed as "typical" or "planned" ranges, not "our average from past projects". Per greenfield rule. |
| `capabilities[]` (10 items) | Technical capability list | Ported. **One new bullet added: "ERP/CRM-ready — architected for NetSuite, SAP, and Salesforce integrations without double-entry"** per Decision C mitigation 3. |
| `technologies[]` (12 items) | Tech stack names | Ported as-is into `techStackBlock.technologies`. |
| `integrations[]` (8 flat strings: Stripe, Braintree, Adyen, Shopify, Magento, WooCommerce, Salesforce Commerce Cloud, ShipStation, EasyPost, NetSuite, SAP, Klaviyo, Mailchimp, GA4, Meta Pixel, Avalara, TaxJar) | Flat integration list | **NOT ported as a section.** Names redistributed: most into `features[]` descriptions (Decision C mitigation 1), some into FAQ prose (Decision C mitigation 2), one into `techStackBlock.capabilities` (Decision C mitigation 3). |
| `benefits[]` (5 items) | Outcome-claim benefit statements | Ported, reframed as capability statements where necessary. |
| `faqs[]` (6 items) | Standard FAQ | Ported. **Two new FAQ entries added per Decision C mitigation 2:** migration without downtime, ERP/CRM integration. |
| `relatedSolutions[]` (3) | Legacy cross-links | Removed. Replaced with `relatedPages` per Decision D matrix. |
| signature tiles | N/A — legacy `AiPoweredFeatures` was a hardcoded component | **Not in the data file.** Tile content lives inside the new `EcommerceAiShowcase.tsx` as a module-level `TILES` constant, matching the prop-less pattern of existing signatures (see section 8). |

### Expected `_unverified` list

The `_unverified` array will be **long**. Based on the legacy content audit, expected items include at minimum:

- All 4 legacy metrics from `metrics[]` (CVR uplift, AOV increase, cart abandonment reduction, LCP claim) — user must decide for each: keep as capability claim, cite industry research, or remove.
- Any outcome framing in `benefits[]` (e.g., "faster time to market", "higher conversion") — flagged for rewording check.
- Process step durations — user confirms "typical/planned" framing is acceptable.
- Integration specificity in features and FAQ prose — user confirms naming specific vendors in prose is acceptable for a greenfield company without shipped reference implementations.
- Any stat or percentage that survives from the hero/subhead copy.
- Note: `CaseStudySpotlight` absence is NOT an `_unverified` item since it was omitted by explicit decision; instead add a top-of-file comment noting that it's intentionally omitted until real case data exists.

The implementation plan includes a dedicated content integrity review phase at the end where the user walks the `_unverified` list item by item.

---

## 8. Signature component — `EcommerceAiShowcase.tsx`

### Location

`src/components/signature/EcommerceAiShowcase.tsx`

### Purpose

A single-use signature section for the e-commerce page that ports the visual identity of the legacy `AiPoweredFeatures` bento layout into the tokenized design system. This is NOT a generic `BentoGrid` — it is specifically an "AI capabilities showcase" narrative for commerce conversion.

### Layout

5-tile asymmetric bento grid preserving the legacy visual hierarchy of one hero tile plus four supporting tiles. Exact grid mechanics match the legacy `AiPoweredFeatures` layout (the implementation plan must document the grid template explicitly). Mobile: collapses to a single-column stack in reading order.

Wrapped in `<Section tone="warm" size="lg">` for rhythm consistency with the design system.

### Token-safe palette strategy — three tile variants

Original had 5 hardcoded gradient colors (blue/indigo/emerald/violet/orange), which is a rainbow palette and violates token hygiene. The replacement uses **three tile variants** rotated across the 5 cards:

| Variant | Background | Foreground | Border / accent | Use for |
|---|---|---|---|---|
| **A — Light surface** | `bg-brand-50` | `text-text-strong` + `text-brand-700` accents | `border-border-subtle` | Cards 1 and 4 |
| **B — Dark brand spotlight** | `bg-gradient-to-br from-brand-700 to-brand-500` | `text-white` + `text-brand-100` accents | no border; `shadow-*` for lift | Card 2 (hero tile) |
| **C — Warm accent** | `bg-accent-50` | `text-text-strong` + `text-accent-700` accents | `border-border-subtle` | Cards 3 and 5 |

All three variants resolve through `brand-*` / `accent-*` / `surface-*` / `text-*` / `border-*` tokens. Both `data-theme="blue"` and `data-theme="purple"` are supported without per-theme component overrides — the theme swap is automatic.

Variant rotation across 5 cards: **A / B / C / A / C** (Card 2 is the hero spotlight tile).

### Props shape

```ts
// No props. Matches the existing signature pattern — PortalArchitectureMap
// and ClaimsFlowComparison are also prop-less, self-contained set pieces.
export const EcommerceAiShowcase: React.FC = () => { ... };
```

### Content ownership — matches existing signature pattern

**Spec-review correction:** Earlier framing said tile content would live in the data file for editability. Spec review surfaced that **all existing signature components** (`PortalArchitectureMap`, `ClaimsFlowComparison`, `MvpDualTrackRoadmap`, `DiscoveryBeforeAfter`) are **prop-less, self-contained JSX** — they hold their own content internally. The `SIGNATURE_COMPONENTS` dispatch map in `src/app/solutions/[slug]/page.tsx` pre-renders each as a zero-prop element:

```ts
const SIGNATURE_COMPONENTS: Record<string, ReactNode> = {
  PortalArchitectureMap: <PortalArchitectureMap />,
  ClaimsFlowComparison: <ClaimsFlowComparison />,
  EcommerceAiShowcase: <EcommerceAiShowcase />,  // ← NEW
};
```

Making `EcommerceAiShowcase` the one data-driven signature would break this pattern and require either (a) refactoring the dispatch to accept per-signature data, or (b) an inconsistent exception just for this one. Neither is justified for a set piece that will be designed once and rarely edited.

**Decision:** Hardcode the 5 tile entries directly inside `EcommerceAiShowcase.tsx` as a module-level `TILES` constant. Matches the pattern of existing signatures. Simpler dispatch. Zero schema changes. Single file to edit for future copy tweaks.

```ts
// Inside src/components/signature/EcommerceAiShowcase.tsx
const TILES: ReadonlyArray<{
  title: string;
  description: string;
  icon: string;
  variant: 'A' | 'B' | 'C';
}> = [
  {
    title: 'AI-powered personalization',
    description: 'Product recommendations, dynamic merchandising, and search ranking personalized per visitor.',
    icon: 'Sparkles',
    variant: 'A',
  },
  // ... 4 more
];
```

Copy is authored at design time and lives with the component. This is consistent with the constitution's "signature sections are modular, swappable, single-use set pieces" framing — they're not templates, they're bespoke modules.

### Content integrity rules applied

- **No stats chips.** The legacy component had `PERSONALIZATION_BADGES` and `RECOMMENDATIONS_STATS` hardcoded arrays with outcome claims ("15-30% higher AOV"). These are removed entirely.
- **No "clients see" language.** All descriptions are capability claims about what the architecture does, not what it has delivered.
- **No outcome metrics.** Percentages and benchmarks do not appear in tile copy.

### Template dispatch

**No changes to `SolutionDetailTemplate.tsx`.** The template already receives the signature as a pre-built `ReactNode` via its `signature` prop, so it is agnostic to which signature is rendered.

The actual edit is a **one-line addition to the `SIGNATURE_COMPONENTS` map** in `src/app/solutions/[slug]/page.tsx`:

```ts
import { EcommerceAiShowcase } from '@/components/signature/EcommerceAiShowcase';

const SIGNATURE_COMPONENTS: Record<string, ReactNode> = {
  PortalArchitectureMap: <PortalArchitectureMap />,
  ClaimsFlowComparison: <ClaimsFlowComparison />,
  EcommerceAiShowcase: <EcommerceAiShowcase />,  // ← NEW
};
```

No changes to `src/types/pages.ts` either (`signatureComponent` is typed as `string`, not a union — verified during spec review).

### Token-hygiene verification

After the component is written, the grep rule must return zero matches:

```bash
grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' src/components/signature/EcommerceAiShowcase.tsx
```

Zero matches required before the component is considered done.

---

## 9. `relatedPages` population across all 5 pages

### Matrix (from Decision D)

```
Product Discovery     → MVP Development, E-commerce Websites, Patient Portals
MVP Development       → Product Discovery, E-commerce Websites, Insurance Portals
Patient Portals       → Product Discovery, MVP Development, Insurance Portals
Insurance Portals     → Product Discovery, MVP Development, Patient Portals
E-commerce Websites   → Product Discovery, MVP Development, Insurance Portals
```

### Card copy (capability-framed, 12-18 words each)

| Page | Title | Description |
|---|---|---|
| Product Discovery | Product Discovery | De-risk your product idea with a structured sprint before writing code. |
| MVP Development | MVP Development | Ship a working product on a dual-track roadmap balancing speed and engineering quality. |
| Patient Portals | Patient Portals | HIPAA-ready patient portals with secure messaging, scheduling, and records access. |
| Insurance Portals | Insurance Portals | Policyholder, agent, and broker portals that streamline claims and policy workflows. |
| E-commerce Websites | E-commerce Websites | Headless commerce builds and migrations with conversion optimization from day one. |

All five are capability claims. None require `_unverified` flags.

### Icon strategy

Each card's `icon` reuses the destination page's primary icon — the same one used in that page's `iconTile` or hero. This ensures visual continuity on click-through: if a visitor sees a `Compass` icon on the card and clicks it, the destination page leads with the same `Compass`.

Implementation detail: icons come from `lib/icons.ts`. No new icon imports are expected; all 5 destination pages already use icons from the existing set.

### Section heading framing

**Spec review confirmed:** `RelatedPages` component already exposes a `title` prop with a default of `'Explore Related Solutions'`. This is already exploration-framed and acceptable as-is. **No component changes required.**

Per-page override is optional. If a page wants a tighter per-page title, it can set `relatedPages.title` in the data file (the plan confirms the exact data-file field path matches the component's prop). Default acceptable headings if overriding:

- "Explore more of what we build"
- "See what else we deliver"

Avoid strong-claim headings that overclaim connection for weak cross-vertical links:
- "Related solutions" (used alone, without "Explore" prefix)
- "Similar to this"
- "You might also like"

### Insurance Portals combined edit

Insurance Portals gets two edits in the same data file:

1. `relatedPages` populated per the matrix.
2. `composition` reordered per Decision E (move `personaComparison` from position 4 to position 3).

Both edits land in the same file touch.

---

## 10. Legacy deletion inventory

### Files to delete

```
aivanceworks-website/src/components/solutions/SolutionHero.tsx
aivanceworks-website/src/components/solutions/SolutionFeatures.tsx
aivanceworks-website/src/components/solutions/SolutionBenefits.tsx
aivanceworks-website/src/components/solutions/SolutionProcess.tsx
aivanceworks-website/src/components/solutions/SolutionTechStack.tsx
aivanceworks-website/src/components/solutions/SolutionFAQ.tsx
aivanceworks-website/src/components/solutions/SolutionCTA.tsx
aivanceworks-website/src/components/solutions/SolutionRelated.tsx
aivanceworks-website/src/components/solutions/iconMap.tsx
aivanceworks-website/src/components/solutions/index.ts
aivanceworks-website/src/components/solutions/unique/AiPoweredFeatures.tsx
aivanceworks-website/src/components/solutions/unique/index.ts
aivanceworks-website/src/components/solutions/                ← entire directory (empty after above)
```

### Files to edit (legacy removal + migration)

1. **`src/app/solutions/[slug]/page.tsx`** — this file has several edits in one pass:
   - Remove the `getSolutionBySlug, getAllSolutions` imports from `@/data/solutions`.
   - Remove all imports from `@/components/solutions` and `@/components/solutions/unique`.
   - Add `import { EcommerceAiShowcase } from '@/components/signature/EcommerceAiShowcase';`.
   - Add `EcommerceAiShowcase: <EcommerceAiShowcase />` to the `SIGNATURE_COMPONENTS` map.
   - Simplify `generateStaticParams()` to return only `getAllSolutionPageSlugs()` — remove the legacy slug merge.
   - Simplify `generateMetadata()` to remove the legacy fallback branch — only the pilot path remains; if pilot data is missing, return the 404 metadata directly.
   - Delete the entire legacy fallback rendering block in the default export (approximately lines 110-186 of the current file). Only the `pilotData` branch remains.
   - The special-case line `{legacy.slug === 'e-commerce-websites' && <AiPoweredFeatures />}` is removed with that block.

2. **`src/app/solutions/page.tsx`** (the solutions **listing** page) — migrate the icon import. This file currently imports `DynamicIcon` from `@/components/solutions` and uses it at two call sites (category header icon, card icon). Migration:
   - Remove `import { DynamicIcon } from '@/components/solutions';`
   - Add `import { getLucideIcon } from '@/lib/icons';`
   - Replace the two `<DynamicIcon name={...} className="..." />` call sites with the pilot pattern:
     ```ts
     const Icon = getLucideIcon(category.icon);
     return <Icon className="..." />;
     ```
     (or an equivalent single-line inline resolution — the plan picks the cleanest approach).
   - **Out of scope:** The rest of this file has pre-existing raw Tailwind color violations (`bg-gray-900`, `from-blue-400 to-indigo-400`, `bg-blue-50 text-blue-600`, etc.) that predate the pilot and are NOT addressed by this feature. Full tokenization of the listing page is tracked as a separate future feature. See risk #2 and the scoped verification strategy in section 14.

3. **`src/data/solutions.ts`** — remove the `ecommerceWebsites`, `patientPortals`, and `insurancePortals` data objects AND the `solutions` array export AND the `getSolutionBySlug` / `getAllSolutions` / `getSolutionsByCategory` helper functions. Spec review confirmed these are the only exports from this file, and after the edits above, they have zero importers (the listing page uses NAVIGATION, not these fetchers). **Delete the file entirely** after confirming zero importers remain via the audit protocol below.

### Import audit protocol

Before deleting any file or export, run grep for imports:

```bash
grep -rn "from '@/components/solutions" aivanceworks-website/src/
grep -rn "from '@/data/solutions'" aivanceworks-website/src/
grep -rn "SolutionData" aivanceworks-website/src/
grep -rn "getSolutionBySlug\|getAllSolutions\|getSolutionsByCategory" aivanceworks-website/src/
grep -rn "DynamicIcon" aivanceworks-website/src/
```

Every match must be resolved (either migrated to the pilot path or documented as an intentional remaining dependency) before the legacy files are deleted. The plan runs this audit at two checkpoints: once after the listing page migration, once after the `[slug]/page.tsx` rewrite, both before any `src/components/solutions/` files are removed.

---

## 11. `src/lib/content.ts` edit

Add `'e-commerce-websites'` to the `SOLUTION_PAGE_MODULES` map so `getSolutionPageData('e-commerce-websites')` resolves to the new data file. Single-line addition, no schema or function changes.

---

## 12. `SolutionDetailTemplate.tsx` — NOT edited

**Spec review confirmed:** the signature dispatch map (`SIGNATURE_COMPONENTS`) lives in `src/app/solutions/[slug]/page.tsx`, not in `SolutionDetailTemplate.tsx`. The template receives the pre-built signature element as a `signature: ReactNode` prop and is agnostic to which signature is rendered.

**No changes to `SolutionDetailTemplate.tsx`.** The dispatch-map edit is covered in section 10 above as part of the `src/app/solutions/[slug]/page.tsx` edit list.

---

## 13. Content integrity plan

### E-commerce data file review

A dedicated phase at the end of execution walks the user through the e-commerce `_unverified` array one item at a time. Expected item categories:

1. **Metrics (4 items from legacy `metrics[]`).** For each: keep as capability claim, cite industry research with source, or remove.
2. **Benefit statements with outcome framing.** User confirms rewording is acceptable or flags further edits.
3. **Process durations.** User confirms "typical" / "planned" phrasing is acceptable.
4. **Integration specificity in prose.** User confirms naming specific vendors (Stripe, Shopify, NetSuite, etc.) in feature/FAQ prose is acceptable for a greenfield company — or requires qualification like "we build on and migrate from..." vs "we have shipped integrations with...".
5. **Hero/subhead copy.** Any stat or percentage that survives from the hero gets explicit sign-off.
6. **Tile descriptions in `EcommerceAiShowcase`.** All 5 capability descriptions reviewed for any accidental outcome language.

### Feature-wide integrity checkpoint

After the e-commerce review, a final grep pass across all 5 pilot data files looks for any smuggled outcome claims introduced by this feature:

```bash
grep -rniE "(clients? see|on average|we deliver|we achieve|proven|track record|[0-9]+\s*%)" aivanceworks-website/src/data/solutions/
```

Results must be reviewed and either flagged in `_unverified` or rewritten.

---

## 14. Verification strategy

No testing framework is added. Verification is the same four-pronged approach used in the pilot, applied at every phase boundary and once at feature completion.

### Per-phase checks

1. **TypeScript compile:**
   ```bash
   cd aivanceworks-website && npx tsc --noEmit
   ```
   Zero errors required.

2. **Production build:**
   ```bash
   cd aivanceworks-website && npm run build
   ```
   All static pages generate; no runtime errors during generation.

3. **Token-hygiene grep (every file touched by this feature, plus pilot files):**
   ```bash
   grep -nE '(bg|text|border|from|to|via)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' <file>
   ```
   **Scope:** the new `EcommerceAiShowcase.tsx`, the new `e-commerce-websites.ts` data file, `src/app/solutions/[slug]/page.tsx` (post-edit), and all 5 pilot data files. Zero matches required on all of these.

   **Excluded from this scope** (pre-existing violations, out of scope for this feature):
   - `src/app/solutions/page.tsx` — the solutions listing page. This feature only migrates the `DynamicIcon` import; the rest of the file has raw Tailwind colors that predate the pilot and are tracked separately for a future cleanup.

4. **Visual review** (dev server): all 3 solutions pages + both services pages render correctly, signature sections display, related pages show 3 cards each, Insurance Portals persona section now appears before feature grid, solutions listing page at `/solutions` still renders correctly (icons should continue to work post-migration).

### Feature-completion checks

At the end of all phases:

- All four per-phase checks pass on the full codebase.
- `grep -rn "from '@/components/solutions" aivanceworks-website/src/` returns zero matches (legacy imports gone).
- `ls aivanceworks-website/src/components/solutions/` returns "directory does not exist" or empty.
- `src/app/solutions/[slug]/page.tsx` reads cleanly as a single code path (no `getSolutionBySlug` import, no legacy fallback block).
- `_unverified` review completed with user sign-off on every item.
- User visual approval on all 5 pages at the dev server.

---

## 15. Out of scope (explicit)

Re-stated for clarity. These are NOT part of this feature:

- Imagery / photo work of any kind. No `image` props on `Hero` or any section. No imagery research is done in this feature — see `memory/project_imagery_strategy.md`.
- Migration of legacy solution slugs other than e-commerce. Spec review confirmed `src/data/solutions.ts` contains exactly the 3 slugs being migrated in this feature (patient-portals, insurance-portals, e-commerce-websites), so there are no orphaned routes after the fallback branch is deleted.
- Services-page migrations (Product Discovery and MVP Development are already on the pilot template).
- **Full tokenization of `src/app/solutions/page.tsx` (the solutions listing page).** Only the `DynamicIcon` → `getLucideIcon` migration is in scope. The rest of the file's raw Tailwind color violations (`bg-gray-900`, `from-blue-400 to-indigo-400`, `bg-blue-50`, etc.) are pre-existing and tracked as a separate future cleanup.
- Building `CaseStudySpotlight`, `TestimonialStrip`, or `LogoWall` as new shared sections.
- Building a generic `BentoGrid` shared section.
- Extending `TechStackBlock` with new props or a third column.
- Adding `IntegrationsPanel` to e-commerce composition.
- Theme token expansion (`themes/blue.css` and `themes/purple.css` are untouched).
- Adding a testing framework.
- CMS integration.

---

## 16. Known risks and mitigations

### 1. Subagent path-resolution quirk

During the pilot, subagents occasionally wrote files to `aivanceworks-website/aivanceworks-website/src/...` (nested wrong path) while reporting success.

**Mitigation:** Verify with `ls` after any subagent-dispatched file creation. Prefer direct writes in the main session for small mechanical changes where the exact code is known (data file edits, single-line composition edits, import additions).

### 2. Listing page hidden dependency on legacy components

Spec review discovered that `src/app/solutions/page.tsx` (the solutions **listing** page at `/solutions`) imports `DynamicIcon` from `@/components/solutions`. This is a hidden consumer of the legacy component tree that blocks deletion. The original feature brief did not list this as a known dependency.

**Additional finding:** Spec review also confirmed that `src/data/solutions.ts` contains exactly 3 slugs — `patient-portals`, `insurance-portals`, `e-commerce-websites`. There are NO additional legacy-only slugs, so deleting the fallback branch does not orphan any routes. The original concern about "other slugs that stay legacy" is resolved — there are none.

**Mitigation:**
- The `DynamicIcon` import migration on the listing page is now in scope and explicitly listed in section 10 as a required edit.
- The rest of the listing page has pre-existing raw Tailwind color violations unrelated to legacy components. These are OUT of scope for this feature — full listing page tokenization is a separate future cleanup. Verification strategy (section 14) scopes the token-hygiene grep accordingly.
- The plan runs `grep -rn "DynamicIcon" aivanceworks-website/src/` at the deletion checkpoint to catch any additional consumers I might have missed during spec review. Zero matches required before deletion proceeds.

### 3. Content integrity drift

The e-commerce `_unverified` list is expected to be long and reviewing it item-by-item is tedious. Risk: user accepts items without close reading, outcome claims survive into production.

**Mitigation:** The review phase is a gated checkpoint, not a rubber stamp. The plan explicitly requires the user to sign off on each item with a yes/no/rewrite decision. If the user skims, the implementer flags "I notice several items were accepted quickly — want to revisit?" rather than moving forward.

### 4. `EcommerceAiShowcase` visual regression from the legacy component

The legacy rainbow palette is load-bearing for the visual distinction between tiles. Replacing with a 3-variant token palette may look flatter.

**Mitigation:** The variant rotation (A/B/C/A/C) explicitly alternates between light-surface, dark-brand-spotlight, and warm-accent to create high contrast between adjacent tiles. The implementation plan includes a mid-phase visual checkpoint to compare side-by-side before committing to the palette. If the flat issue is real, the plan has an escape hatch to add a second accent tone or adjust opacity stepping — but no new theme tokens.

### 5. Audit miss on `SolutionData` interface importers

If `SolutionData` or `getSolutionBySlug` is imported by an unexpected consumer (footer archive, sitemap generator, search index), deleting them breaks those consumers silently.

**Mitigation:** The import audit grep is run BEFORE any deletion and results are documented. If unexpected consumers exist, the plan pauses and the user decides whether to migrate those consumers or keep the legacy file partially intact.

### 6. `SOLUTION_PAGE_MODULES` slug consistency

The slug used in `src/lib/content.ts`'s `SOLUTION_PAGE_MODULES` must match the route slug exactly (`'e-commerce-websites'`, with hyphens). A typo breaks `getSolutionPageData()` silently and the route falls back to 404 after fallback removal.

**Mitigation:** The plan includes an explicit verification step that `getSolutionPageData('e-commerce-websites')` returns the new data object before the legacy fallback is removed.

### 7. Branch strategy

Memory says "this feature gets its own branch and its own coherent commit(s)" but also "NEVER run `git add`, `git commit`, or staging." Implementation cannot create branches or commits.

**Mitigation:** Per user direction, file changes land on the current branch and the user handles branch creation + commit organization manually — same as the pilot. No git commands are run by the implementer at any point.

---

## 17. Success criteria

At the end of this feature:

- [ ] `npx tsc --noEmit` returns zero errors across the entire codebase.
- [ ] `npm run build` passes with all static pages generated.
- [ ] Token-hygiene grep returns zero matches on the files in scope: `EcommerceAiShowcase.tsx`, `e-commerce-websites.ts`, `src/app/solutions/[slug]/page.tsx`, all 5 pilot data files. (The solutions listing page `src/app/solutions/page.tsx` is explicitly excluded — pre-existing violations unrelated to this feature.)
- [ ] `/solutions/e-commerce-websites` renders through `SolutionDetailTemplate` with the new `EcommerceAiShowcase` signature displayed.
- [ ] `/solutions/patient-portals` and `/solutions/insurance-portals` continue to render correctly (no regression from legacy removal).
- [ ] `/solutions` listing page still renders correctly — category/card icons work via `getLucideIcon`.
- [ ] Insurance Portals persona section appears between `metricsStrip` and `featureGrid` (not after feature grid).
- [ ] All 5 pilot pages render a `RelatedPages` section with exactly 3 cards each, matching the Decision D matrix.
- [ ] `RelatedPages` section heading uses exploration framing (uses the component's default `'Explore Related Solutions'` or a per-page override consistent with the framing guidance).
- [ ] `src/components/solutions/` directory no longer exists.
- [ ] `src/app/solutions/[slug]/page.tsx` contains no `getSolutionBySlug` reference and no legacy fallback branch.
- [ ] `src/data/solutions.ts` is deleted entirely (confirmed via zero importers audit).
- [ ] `grep -rn "from '@/components/solutions" aivanceworks-website/src/` returns zero matches.
- [ ] `grep -rn "DynamicIcon" aivanceworks-website/src/` returns zero matches.
- [ ] `grep -rn "from '@/data/solutions'" aivanceworks-website/src/` returns zero matches.
- [ ] E-commerce data file has an `_unverified` array fully reviewed and signed off by the user.
- [ ] User has reviewed this spec, approved the implementation plan, and approved each phase checkpoint.

---

## 18. Deliverables

1. This spec (`docs/superpowers/specs/2026-04-09-ecommerce-migration-legacy-cleanup-design.md`).
2. Implementation plan (`docs/superpowers/plans/2026-04-09-ecommerce-migration-legacy-cleanup.md`) — written by the `writing-plans` skill after spec approval.
3. New data file: `src/data/solutions/e-commerce-websites.ts`.
4. New signature component: `src/components/signature/EcommerceAiShowcase.tsx`.
5. Modifications:
   - `src/lib/content.ts` — add `'e-commerce-websites'` to `SOLUTION_PAGE_MODULES`.
   - `src/app/solutions/[slug]/page.tsx` — remove legacy imports, remove legacy fallback branch, simplify `generateStaticParams` and `generateMetadata`, add `EcommerceAiShowcase` to `SIGNATURE_COMPONENTS` dispatch map.
   - `src/app/solutions/page.tsx` — swap `DynamicIcon` for `getLucideIcon` at the two icon call sites (rest of file out of scope).
   - All 5 data files — populate `relatedPages` per the Decision D matrix.
   - `src/data/solutions/insurance-portals.ts` — additionally move `personaComparison` up one slot in the `composition` array per Decision E.
   - **No changes to `src/types/pages.ts`** (types are already sufficient).
   - **No changes to `src/components/templates/SolutionDetailTemplate.tsx`** (signature dispatch lives in `[slug]/page.tsx`, not the template).
   - **No changes to `src/components/shared/sections/RelatedPages.tsx`** (heading is already a prop with exploration-friendly default).
6. Deletions:
   - Entire legacy `src/components/solutions/` tree (12 files + directory).
   - `src/data/solutions.ts` entirely (zero importers after migration — confirmed via audit protocol in section 10).
8. Updated memory:
   - Mark `memory/project_pilot_iteration2.md` items as resolved where applicable.
   - Delete `memory/project_ecommerce_migration_feature.md` once the feature ships.

---

## 19. Next steps

1. User reviews this spec.
2. User approves or requests changes.
3. On approval, invoke `superpowers:writing-plans` to create the implementation plan at `docs/superpowers/plans/2026-04-09-ecommerce-migration-legacy-cleanup.md`.
4. On plan approval, invoke `superpowers:subagent-driven-development` to execute the plan with phase checkpoints.
