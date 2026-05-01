# Digital Banking & Wallets Rewrite — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `/solutions/digital-banking-wallets` end-to-end to reflect the positioning pivot (from "we build a bank's digital platform" to "we are the engineering team that integrates the BaaS + sponsor + core + KYC + AML + card-issuer ecosystem on behalf of vertical-SaaS / non-financial brand operators"). Drop `complianceDeepDive`, `complianceSpotlight`, `benefitsGrid`, `imageFeatures`. Add `roleBoundary` (new single-use component). Reframe the signature in place. Net composition: 10 sections, Archetype B with C cherry-pick.

**Architecture:** Three primary code surfaces — (1) the data file (`digital-banking-wallets.ts`), (2) the signature component (`DigitalBankingTransactionFlow.tsx`, reframed in place), (3) one new component (`RoleBoundary.tsx` in `components/signature/`). Plumbing changes: `SectionKey` union + new `RoleBoundaryData` interface + new optional `BasePageData.roleBoundary` field + new dispatch case in `SolutionDetailTemplate.tsx`.

**Tech Stack:** Next.js 15 (App Router), TypeScript, React, Tailwind CSS 4, Lucide icons. No unit-test framework for page components — verification via `tsc --noEmit`, `next build`, ESLint, manual visual at breakpoints (375 / 768 / 1280 per §10.1), theme-switch test per §3.5.

**Source documents (read both before starting):**
- Spec: [`.agents/plans/digital-banking-wallets-rewrite.md`](./digital-banking-wallets-rewrite.md) — design decisions, per-section content direction, deviations to record.
- Subject matter: [`src/subject-matter-expert/digital-banking-wallets-context.md`](../../src/subject-matter-expert/digital-banking-wallets-context.md) — terminology, vendor lists, forbidden language, role-boundary phrasing.
- Constitution: [`docs/design-system/services-solutions-constitution.md`](../../docs/design-system/services-solutions-constitution.md) — §3 theming, §4 rhythm, §6 archetypes, §7 schema, §9 content integrity, §10 responsiveness, §11 imagery.

**Note on TDD:** This codebase does not run unit tests on page components. Per-task verification gates are: `tsc --noEmit` passes, `next build` passes, ESLint passes, dev server renders the page at 375/768/1280, theme switch repaints correctly. Treat each "verify" step as the equivalent of a passing test.

**Working directory for ALL commands:** `aivanceworks-website/` (not the repo root). All file paths in this plan are relative to the repo root for clarity, but commands like `npm run lint` must run inside `aivanceworks-website/`.

---

## File Structure

### Modify
- `aivanceworks-website/src/types/pages.ts` — add `'roleBoundary'` to `SectionKey` union; add `RoleBoundaryData` interface; add optional `roleBoundary?: RoleBoundaryData` to `BasePageData`.
- `aivanceworks-website/src/components/templates/SolutionDetailTemplate.tsx` — import `RoleBoundary`; add dispatch case for `'roleBoundary'`.
- `aivanceworks-website/src/components/signature/index.ts` — add `RoleBoundary` export.
- `aivanceworks-website/src/components/signature/DigitalBankingTransactionFlow.tsx` — reframe in place: rewrite doc-comment block; relabel three bands (channels → operator product, orchestration → AIvanceWorks integration layer, infrastructure → ecosystem partners); rewrite eyebrow / heading / intro / connector labels.
- `aivanceworks-website/src/data/solutions/digital-banking-wallets.ts` — full rewrite per spec.

### Create
- `aivanceworks-website/src/components/signature/RoleBoundary.tsx` — new single-use component.

### Delete (recommended; can be deferred)
- `aivanceworks-website/public/images/solutions/digital-banking-wallets/feature-1.jpg`
- `aivanceworks-website/public/images/solutions/digital-banking-wallets/feature-2.jpg`

### Keep unchanged
- `aivanceworks-website/src/lib/constants.ts` — Finance section nav entry stays.
- `aivanceworks-website/src/lib/content.ts` — `SOLUTION_PAGE_MODULES['digital-banking-wallets']` stays.
- `aivanceworks-website/src/app/solutions/[slug]/page.tsx` — `SIGNATURE_COMPONENTS['DigitalBankingTransactionFlow']` stays (component name preserved per spec §2.5).
- `aivanceworks-website/public/images/solutions/digital-banking-wallets/hero.jpg` — alt text rewritten in data file only.

---

## Task 1: Add type system support for `roleBoundary`

**Files:**
- Modify: `aivanceworks-website/src/types/pages.ts`

- [ ] **Step 1: Add `RoleBoundaryData` interface**

Open `aivanceworks-website/src/types/pages.ts`. Add this interface after `ImageFeatureData` (around line 157):

```typescript
export interface RoleBoundaryData {
  eyebrow?: string;
  heading: string;
  intro: string;
  bullets: string[];
  collaboration: string;
}
```

- [ ] **Step 2: Add `'roleBoundary'` to `SectionKey` union**

In the same file, the `SectionKey` type union (around line 134–151) currently ends with `| 'signature'`. Add `'roleBoundary'` between `'imageFeatures'` and `'signature'`:

```typescript
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
  | 'complianceSpotlight'
  | 'personaComparison'
  | 'relatedPages'
  | 'imageFeatures'
  | 'roleBoundary'
  | 'signature';
```

- [ ] **Step 3: Add `roleBoundary` field to `BasePageData`**

Inside `BasePageData` (around line 161), add an optional `roleBoundary` field after `personaComparison?`:

```typescript
  personaComparison?: PersonaComparisonData;
  roleBoundary?: RoleBoundaryData;
  relatedPages?: RelatedPageItem[];
```

- [ ] **Step 4: Verify TypeScript still compiles**

Run from `aivanceworks-website/`:

```bash
npx tsc --noEmit
```

Expected: Either passes cleanly, OR fails ONLY with "object is missing the required property `roleBoundary`" / similar errors at the dispatch template (which is fine — Task 3 fixes that). Errors elsewhere mean something else broke.

- [ ] **Step 5: Commit**

```bash
git add aivanceworks-website/src/types/pages.ts
git commit -m "types: add RoleBoundaryData and 'roleBoundary' SectionKey"
```

---

## Task 2: Build the `RoleBoundary` component

**Files:**
- Create: `aivanceworks-website/src/components/signature/RoleBoundary.tsx`

- [ ] **Step 1: Write the component**

Create `aivanceworks-website/src/components/signature/RoleBoundary.tsx` with this content:

```tsx
/**
 * RoleBoundary — single-use late-page section for Digital Banking & Wallets.
 *
 * Carries an explicit, plain-language role-and-scope-boundary statement
 * positioned late on the page so it reads as honest disclosure to a buyer
 * who's already favorably disposed — not a defensive disclaimer up front.
 *
 * Heading is positively framed ("Where AIvanceWorks fits") so the bullets
 * underneath can be plain negatives ("we do not hold licenses... we do
 * not act as sponsor bank...") without the section as a whole reading
 * defensively.
 *
 * Visual: deliberately simple — no icon grid, no chart, no card stack.
 * Confidence is the design move; visual restraint signals it.
 *
 * Mobile (< md): two-column intro + bullets layout collapses to single-column.
 * Bullets always reflow into a single column on mobile for scannability.
 *
 * Theming: tone="warm" by default (overridable). All colors token-backed
 * via text-text-*, text-brand-*, border-border-* classes. Flipping
 * data-theme re-skins cleanly.
 */

import { CheckCircle2 } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';

export interface RoleBoundaryProps {
  eyebrow?: string;
  heading: string;
  intro: string;
  bullets: string[];
  collaboration: string;
  tone?: 'warm' | 'light';
  className?: string;
}

export const RoleBoundary = ({
  eyebrow,
  heading,
  intro,
  bullets,
  collaboration,
  tone = 'warm',
  className,
}: RoleBoundaryProps) => (
  <Section
    data-section="role-boundary"
    tone={tone}
    size="md"
    className={className}
  >
    <Container>
      <div className="grid gap-10 md:gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Left column — heading + intro + collaboration */}
        <div className="max-w-prose">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading tracking-tight mb-5 leading-tight">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-text-body leading-relaxed mb-6">
            {intro}
          </p>
          <p className="text-sm md:text-base text-text-muted leading-relaxed border-l-2 border-brand-500/40 pl-4">
            {collaboration}
          </p>
        </div>

        {/* Right column — bulleted scope-boundary list */}
        <ul className="space-y-3 md:space-y-4 pt-2">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2
                className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm md:text-base text-text-body leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </Section>
);
```

Notes on design choices that align with the constitution:
- `Section tone="warm"` per §4 (warm is right for this position; not dark, since the visual confidence move is to NOT make a big deal of it).
- All colors are token-backed (`text-brand-600`, `text-text-heading`, `text-text-body`, `text-text-muted`, `border-brand-500/40`) — passes §3.5 theme-switch test.
- `CheckCircle2` is the constitution's standard "checked item" indicator (§5.1 CheckList primitive). Using it inline rather than the CheckList primitive is fine for a one-off layout.
- Documented mobile collapse rule in the file header per §10.7.
- No raw color shades, no hex values, no `dark:` prefixes per §3.3.

- [ ] **Step 2: Verify the file compiles**

Run from `aivanceworks-website/`:

```bash
npx tsc --noEmit
```

Expected: passes (assuming Task 1 is committed). If errors, fix them before proceeding.

- [ ] **Step 3: Verify ESLint passes for the new file**

Run from `aivanceworks-website/`:

```bash
npx next lint --file src/components/signature/RoleBoundary.tsx
```

Expected: no errors. Warnings about unused variables would indicate an over-import — fix.

- [ ] **Step 4: Commit**

```bash
git add aivanceworks-website/src/components/signature/RoleBoundary.tsx
git commit -m "feat(signature): add RoleBoundary single-use component for digital-banking-wallets"
```

---

## Task 3: Wire `RoleBoundary` into both detail templates + barrel export

**Files:**
- Modify: `aivanceworks-website/src/components/signature/index.ts`
- Modify: `aivanceworks-website/src/components/templates/SolutionDetailTemplate.tsx`
- Modify: `aivanceworks-website/src/components/templates/ServiceDetailTemplate.tsx` — same dispatch case (so `Record<SectionKey, () => ReactNode>` is exhaustive; service pages won't populate `roleBoundary`, so it always renders null there)

- [ ] **Step 1: Add `RoleBoundary` to the signature barrel export**

Open `aivanceworks-website/src/components/signature/index.ts`. Add this line near the bottom (after the existing exports, alongside `BooksAndRecordsControlPlane` and `DigitalBankingTransactionFlow`):

```typescript
export { RoleBoundary, type RoleBoundaryProps } from './RoleBoundary';
```

- [ ] **Step 2: Import `RoleBoundary` in the template**

Open `aivanceworks-website/src/components/templates/SolutionDetailTemplate.tsx`. The current imports list (lines 4–19) imports from `@/components/shared/sections`. `RoleBoundary` lives in `@/components/signature/` so add a separate import block right below the existing one (after line 19):

```typescript
import { RoleBoundary } from '@/components/signature';
```

- [ ] **Step 3: Add the dispatch case**

In the same file, find the `sectionRenderers` object (starts around line 30). Add a case for `'roleBoundary'` between the `personaComparison` and `discoveryMethodology` cases (or anywhere logically grouped — exact position within the object doesn't matter, but match the order of `SectionKey` for readability):

```typescript
    roleBoundary: () =>
      data.roleBoundary ? (
        <RoleBoundary
          eyebrow={data.roleBoundary.eyebrow}
          heading={data.roleBoundary.heading}
          intro={data.roleBoundary.intro}
          bullets={data.roleBoundary.bullets}
          collaboration={data.roleBoundary.collaboration}
        />
      ) : null,
```

- [ ] **Step 4: Verify the template compiles**

Run from `aivanceworks-website/`:

```bash
npx tsc --noEmit
```

Expected: passes cleanly. The `sectionRenderers` `Record<SectionKey, ...>` now requires a `roleBoundary` entry — TypeScript will catch a missing case as an error.

- [ ] **Step 5: Commit**

```bash
git add aivanceworks-website/src/components/signature/index.ts aivanceworks-website/src/components/templates/SolutionDetailTemplate.tsx
git commit -m "feat(template): dispatch roleBoundary section in SolutionDetailTemplate"
```

---

## Task 4: Reframe `DigitalBankingTransactionFlow` signature in place

**Files:**
- Modify: `aivanceworks-website/src/components/signature/DigitalBankingTransactionFlow.tsx`

The file structure (imports, JSX skeleton with three bands, helper components) is preserved. What changes: the doc-comment block at the top, the three array constants (`CHANNEL_INPUTS`, `ORCHESTRATION_STAGES`, `INFRA_OUTPUTS`), the eyebrow text, the headline `<h2>`, the intro `<p>`, the band-label divs, and the connector labels.

- [ ] **Step 1: Rewrite the doc-comment block (lines 1–31)**

Replace the existing top-of-file comment block with:

```tsx
/**
 * DigitalBankingTransactionFlow — signature section for Digital Banking & Wallets.
 *
 * Rewritten 2026-04-29 for the operator-stack positioning (was: bank-as-buyer
 * single integrated platform). Component name preserved to avoid registry +
 * import-path churn; the file's argument is what changed.
 *
 * Desktop: three horizontal bands stacked top-to-bottom.
 *   Band 1 (top) — Your operator product surface (5 input tiles: Mobile App,
 *     Web, Embedded SDK, Wallet, Partner channels)
 *   Band 2 (middle) — AIvanceWorks integration layer (centered core card with
 *     6 integration responsibilities: Identity orchestration, Funding flows,
 *     Transaction routing, AML/monitoring routing, Reconciliation, Examiner
 *     export)
 *   Band 3 (bottom) — Ecosystem partners (6 output tiles: Sponsor bank, BaaS
 *     provider, Core platform, KYC vendor, AML vendor, Card issuer)
 * Soft gradient connectors suggest the flow between bands — operator product
 * traffic flows down into AIvanceWorks integration responsibilities, vendor
 * obligations flow up from the ecosystem partners.
 *
 * Mobile (< md): bands collapse to single-column stack. Tile grids reflow
 * 5/6 → 3 → 2 → 1. Core card stays prominent. Integration responsibilities
 * reflow 6 → 3 → 2.
 *
 * Argument the visual carries: "You ship one product. We integrate the stack
 * underneath it. The BaaS provider, sponsor bank, KYC vendor, AML vendor, and
 * card issuer collectively are the engine — we orchestrate them on your behalf
 * so you ship one coherent operator product."
 *
 * Content integrity: no outcome numbers, no stats chips, no vendor name-drops
 * inside the diagram. Every tile is a capability description. Vendor names
 * (Mambu, Unit, Marqeta, Alloy, etc.) appear in the integration panel
 * elsewhere on the page.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */
```

- [ ] **Step 2: Rewrite `CHANNEL_INPUTS` (now: operator product surface)**

Replace the existing `CHANNEL_INPUTS` array (currently lines 59–85) with:

```tsx
const CHANNEL_INPUTS: ReadonlyArray<Node> = [
  {
    icon: Smartphone,
    title: 'Mobile app',
    sub: 'Your branded iOS / Android product',
  },
  {
    icon: Globe,
    title: 'Web',
    sub: 'Your authenticated web experience',
  },
  {
    icon: Code2,
    title: 'Embedded SDK',
    sub: 'Finance features inside your product',
  },
  {
    icon: Wallet,
    title: 'Wallet',
    sub: 'Stored value, P2P, contactless',
  },
  {
    icon: ArrowLeftRight,
    title: 'Partner channels',
    sub: 'Marketplace, gig, B2B integrations',
  },
];
```

- [ ] **Step 3: Rewrite `ORCHESTRATION_STAGES` (now: AIvanceWorks integration layer)**

Replace the existing `ORCHESTRATION_STAGES` array (currently lines 87–118) with:

```tsx
const ORCHESTRATION_STAGES: ReadonlyArray<Node> = [
  {
    icon: UserCheck,
    title: 'Identity orchestration',
    sub: 'KYC / KYB across multiple vendors',
  },
  {
    icon: Banknote,
    title: 'Funding flows',
    sub: 'ACH, debit, external account linking',
  },
  {
    icon: ArrowRightLeft,
    title: 'Transaction routing',
    sub: 'Rails, holds, limits, dispute paths',
  },
  {
    icon: Activity,
    title: 'AML / monitoring routing',
    sub: 'Vendor rules + case workflows',
  },
  {
    icon: BookOpen,
    title: 'Reconciliation',
    sub: 'Platform ledger ↔ partner-bank ledger',
  },
  {
    icon: FileCheck,
    title: 'Examiner export',
    sub: 'Evidence packages on demand',
  },
];
```

Note: the existing imports include all the icons used here (`UserCheck`, `Banknote`, `ArrowRightLeft`, `Activity`, `BookOpen`, `FileCheck`). No new imports needed. The unused imports `UserPlus` and `Route` from the original file should be removed in Step 5.

- [ ] **Step 4: Rewrite `INFRA_OUTPUTS` (now: ecosystem partners)**

Replace the existing `INFRA_OUTPUTS` array (currently lines 120–141) with:

```tsx
const INFRA_OUTPUTS: ReadonlyArray<Node> = [
  {
    icon: Building2,
    title: 'Sponsor bank',
    sub: 'Lead, Cross River, Sutton, Pacific West',
  },
  {
    icon: ServerCog,
    title: 'BaaS provider',
    sub: 'Unit, Treasury Prime, Synctera, Column, Stripe',
  },
  {
    icon: Database,
    title: 'Core platform',
    sub: 'Mambu, Thought Machine, Finxact, sdk.finance',
  },
  {
    icon: ShieldCheck,
    title: 'KYC vendor',
    sub: 'Alloy, Persona, Socure, Sumsub',
  },
  {
    icon: Eye,
    title: 'AML vendor',
    sub: 'Hummingbird, Unit21, Sardine, Feedzai',
  },
  {
    icon: CreditCard,
    title: 'Card issuer',
    sub: 'Marqeta, Galileo, Lithic, Stripe Issuing',
  },
];
```

The grid `lg:grid-cols-4` (currently in the band-3 render block) needs to change to `lg:grid-cols-3` to fit 6 tiles cleanly. Step 7 covers that.

- [ ] **Step 5: Update icon imports**

Replace the existing icon import block (currently lines 33–49) with:

```tsx
import {
  Smartphone,
  Globe,
  Wallet,
  ArrowLeftRight,
  Code2,
  UserCheck,
  Banknote,
  ArrowRightLeft,
  Activity,
  FileCheck,
  Building2,
  ServerCog,
  Database,
  ShieldCheck,
  Eye,
  CreditCard,
  BookOpen,
} from 'lucide-react';
```

Removed: `UserPlus`, `Route`. Added: `ServerCog`, `Database`, `ShieldCheck`, `Eye`. (Verify these exist in `lucide-react` — they all do as of the version in `package.json`. If any don't exist, substitute the closest match: `Server` for `ServerCog`, `HardDrive` for `Database`, `Shield` for `ShieldCheck`, `Eye` already exists.)

- [ ] **Step 6: Rewrite the eyebrow / heading / intro paragraph**

Find the centered text block at the top of the JSX (currently lines 211–224, inside `<Container>`). Replace with:

```tsx
      <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          One product on top. One stack underneath.
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          You ship one product. We integrate the stack underneath it.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Your operator product surface flows down into the integration layer
          we engineer for you. The BaaS provider, sponsor bank, KYC vendor,
          AML vendor, and card issuer collectively carry the regulated weight
          &mdash; we orchestrate them on your behalf so your customers see
          one coherent product.
        </p>
      </div>
```

- [ ] **Step 7: Rewrite band labels and the band-3 grid columns**

Find the three `<div className="text-[11px] md:text-xs font-bold uppercase tracking-wider ...">` band-label elements (currently around lines 229–231, 272, etc.). Update the labels:

- Band 1 label: `Your operator product surface — what your customers touch`
- Band 3 label: `Ecosystem partners — who carries the regulated weight`

For Band 3, change the grid class from `lg:grid-cols-4` to `lg:grid-cols-3` (6 tiles render cleanly as 3 columns on large screens). The full Band 3 grid line should become:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
```

For Band 2 (the centered core card), update the inner eyebrow / heading inside the gradient panel (currently around lines 245–252) to:

```tsx
              <div>
                <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">
                  AIvanceWorks integration layer
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-text-light tracking-tight">
                  Identity. Funding. Transactions. Reconciliation. Evidence.
                </div>
              </div>
              <div className="hidden md:block text-xs text-text-subtle max-w-[20rem] text-right leading-snug">
                Six integration responsibilities woven across your BaaS,
                sponsor bank, KYC, AML, and card-issuer vendors &mdash; so
                your team ships product, not vendor glue.
              </div>
```

- [ ] **Step 8: Rewrite the connector labels**

Find the two `<Connector label="..." />` elements (currently around lines 239 and 268). Update to:

```tsx
        <Connector label="Customer requests · product events" />
```

…between Band 1 and Band 2, and:

```tsx
        <Connector label="Vendor APIs · ledgers · evidence" />
```

…between Band 2 and Band 3.

- [ ] **Step 9: Verify TypeScript + lint + build pass**

Run from `aivanceworks-website/`:

```bash
npx tsc --noEmit && npx next lint --file src/components/signature/DigitalBankingTransactionFlow.tsx
```

Expected: both pass cleanly. If a lucide icon name doesn't exist, swap it for the closest match per Step 5 note.

- [ ] **Step 10: Commit**

```bash
git add aivanceworks-website/src/components/signature/DigitalBankingTransactionFlow.tsx
git commit -m "refactor(signature): reframe DigitalBankingTransactionFlow for operator-stack positioning"
```

---

## Task 5: Rewrite the data file end-to-end

**Files:**
- Modify: `aivanceworks-website/src/data/solutions/digital-banking-wallets.ts` — full rewrite.

This task is the largest by content volume. The implementer must produce actual buyer-tested copy that passes the audience test (§9.5). The spec [.agents/plans/digital-banking-wallets-rewrite.md](./digital-banking-wallets-rewrite.md) §3 ("Per-section content direction") is the authoritative brief for each field. The SME doc [src/subject-matter-expert/digital-banking-wallets-context.md](../../src/subject-matter-expert/digital-banking-wallets-context.md) is the authoritative source for terminology, vendor lists, role-boundary phrasing, and forbidden language.

**Read both before starting this task.** Do not paraphrase from memory.

**Strict content rules** (§9 of the constitution):
- No outcome percentages. All metrics capability-framed.
- All vendor mentions voiced "we build integrations with…" — never "shipped with…"
- No partner-badge / certified-partner claims.
- No forbidden phrases per SME §7: never "we offer banking services," never "we provide accounts/cards/loans," never "bank-grade" without qualification, never regulatory-outcome promises.
- Every unverified claim goes in `_unverified[]` with `field — claim — reason` structure.

- [ ] **Step 1: Rewrite the file's top comment block**

The new comment block must record the deviations from spec §5 — archetype shift, dropped sections (`imageFeatures`, `complianceDeepDive`, `benefitsGrid`, `complianceSpotlight`), added section (`roleBoundary`), buyer pivot, signature reframe. Use the existing comment-block structure as a template (sibling files `financial-document-management.ts` and `wealth-investment-management.ts` show the format). Be explicit and dated (2026-04-29).

- [ ] **Step 2: Update the SEO + identity fields**

Update these top-level fields:
- `title` — operator-positioned, e.g. *"Digital Banking & Wallet Platform Engineering for Embedded Finance Operators"* (≤80 chars).
- `shortDescription` — one paragraph, names the three offerings + the buyer + the ecosystem we integrate.
- `metaTitle` — ≤60 chars, leads with the primary keyword (digital wallet / embedded finance / neobank platform engineering).
- `metaDescription` — 140–160 chars, names the three offerings + ecosystem + role boundary.
- `keywords` — replace the bank-CDO keyword set with operator-positioned keywords: "embedded finance development", "BaaS integration", "digital wallet platform development", "neobank platform engineering", "vertical SaaS embedded finance", "fintech operator engineering", "Unit BaaS integration", "Treasury Prime integration", "Mambu implementation", "Marqeta card issuing integration", etc.
- `canonicalPath` — unchanged: `/solutions/digital-banking-wallets`.
- `breadcrumb` — unchanged.
- `industry` — keep as `'fintech'`.
- `signatureComponent` — unchanged: `'DigitalBankingTransactionFlow'`.

- [ ] **Step 3: Set the new `composition` array**

Replace the current 13-section composition with exactly:

```typescript
  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'integrationsPanel',
    'processTimeline',
    'roleBoundary',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],
```

10 sections.

- [ ] **Step 4: Rewrite the `hero` block**

Per spec §3 hero brief. Constraints:
- `headline` ≤12 words / 70 chars per §9.8.
- `subhead` ≤25 words.
- `metrics` — exactly 4, capability-framed (no percentages).
- `heroImage.src` — keep `/images/solutions/digital-banking-wallets/hero.jpg`.
- `heroImage.alt` — rewrite for the operator/CTO context. Example: *"Engineering team reviewing payment-rail and BaaS integration architecture in a modern workspace"*.
- `primaryCta` — *"Book a Discovery Call"* → `/contact`.
- `secondaryCta` — *"See the integration stack"* → `#signature`.
- `badge` — *"Embedded Finance Engineering"* (or similar operator-positioned eyebrow).
- No defensive language. Role-boundary content lives in the `roleBoundary` section, not here.

- [ ] **Step 5: Rewrite the `metricsStrip` block**

Per spec §3. Exactly 4 capability-framed metrics. Each has `value` (short headline label), `label` (tagline), and `description` (~25–35 words). Example structure:

```typescript
  metricsStrip: [
    {
      value: 'Operator-Stack Integration',
      label: 'BaaS · Sponsor bank · Core · KYC · AML · Card issuer',
      description:
        'We build the integration layer that turns the fintech vendor stack into your product — so your team ships features, not vendor glue.',
    },
    // ...3 more, following the spec
  ],
```

The other three: *Healthcare + Vertical-SaaS Fluency*, *Compliance-Aware Engineering*, *Speed via Proven Cores*. Each ~25–35 words. No percentages.

- [ ] **Step 6: Rewrite the `features` block — THE THREE OFFERINGS**

This replaces the current 6 generic features with exactly 3 offering tiles. Each tile follows the SME §10 rhythm: what / who / what we deliver / one-line proof. ~80–110 words per `description` to keep them visually consistent.

Order:
1. **Digital Wallet Platform Development** — icon `Wallet`. Description names closed/semi-closed/open-loop/embedded variants, healthcare + payroll + gig + marketplace + retail-loyalty use cases, table-stakes capabilities, and the lower-regulatory-friction proof line.
2. **Neobank Platform Engineering** — icon `Building2` or `Layers`. Description emphasizes the integration story (sponsor + BaaS + core + KYC + card-issuing → coherent operator product), names fintech operators + vertical-SaaS + community-bank/credit-union modernization as buyers, names the proven cores (Mambu, Thought Machine, Finxact, sdk.finance, Temenos) as the speed-to-launch proof.
3. **Embedded Finance & BaaS Integration** — icon `Plug` or `Network`. Description leads with the highest-growth-segment positioning, names the work (API orchestration between brand product, BaaS, sponsor bank), names ledger reconciliation + KYC/KYB orchestration + card issuance + dispute/chargeback + 1099/tax reporting + program-manager tooling as deliverables. Names Toast Capital and Shopify Balance as canonical patterns.

All three tiles same length, same icon weight. Consistency over variety per SME §10.

- [ ] **Step 7: Rewrite the `processSteps` block**

5 phases per spec §3. Each step needs `title`, `description`, `duration`, `deliverable`. Operator-stack-voiced (not bank-internal). Durations are estimates — record in `_unverified[]` for confirmation. Phases:
1. *Discovery & Stack Mapping* (2–3 weeks)
2. *Architecture & Vendor Selection* (3–4 weeks)
3. *Core Platform Development* (12–18 weeks)
4. *Integration & Compliance Validation* (4–6 weeks)
5. *Phased Launch & Hypercare* (2–3 weeks)

- [ ] **Step 8: Rewrite the `capabilities` array**

8–10 short capability strings reflecting the operator-stack work — e.g. *"BaaS API orchestration across Unit, Treasury Prime, Synctera, Column, Stripe"*, *"Multi-vendor KYC/KYB orchestration"*, *"Platform ledger ↔ partner-bank reconciliation"*, *"Card issuance integration via Marqeta, Galileo, Lithic, Stripe Issuing"*, *"Operator back-office workspaces (compliance, support, finance, fraud)"*, *"Wallet variants (closed-loop, semi-closed, open-loop, embedded)"*, etc.

Note: `capabilities` may not be rendered in the new composition (no `techStackBlock` section). Keep populated for SEO + future use.

- [ ] **Step 9: Rewrite the `technologies` array**

Keep the Azure / .NET / React stack list largely as-is — it's accurate to our actual stack. Slightly trim if any item is bank-CDO-specific. Note: `technologies` may not be rendered in the new composition (no `techStackBlock`); keep populated for SEO.

- [ ] **Step 10: Rewrite the `integrations` array — full operator-stack ecosystem**

Per spec §3 IntegrationsPanel. Each entry uses `IntegrationGroup` shape: `name`, `category`, `connectionMethod`, `capabilities[]`. Voiced "we build integrations with…" — every capability uses the present-tense capability voice, never past-tense outcome voice.

Suggested grouping (one entry per vendor, not per category — categories are conveyed via the `category` field):

| Vendor | Category | Connection method (example) |
|---|---|---|
| Unit | BaaS Provider | REST API + webhooks |
| Treasury Prime | BaaS Provider | REST API + webhooks |
| Synctera | BaaS Provider | REST API + webhooks |
| Column | BaaS Provider | REST API |
| Stripe (Treasury / Issuing) | BaaS Provider | REST API + webhooks |
| Mambu | Core Banking Platform | REST API + event streams |
| Thought Machine | Core Banking Platform | REST API + Vault SDK |
| Finxact | Core Banking Platform | REST API |
| sdk.finance | Core Banking Platform | REST API |
| FIS / Fiserv / Jack Henry | Core Banking (community-bank modernization) | REST API + batch reconciliation |
| Marqeta | Card Issuing | REST API + webhooks |
| Galileo | Card Issuing | REST API |
| Lithic | Card Issuing | REST API + webhooks |
| Stripe Issuing | Card Issuing | REST API + webhooks |
| Alloy | Identity & KYC | REST API |
| Persona | Identity & KYC | REST API + webhooks |
| Socure | Identity & KYC | REST API |
| Sumsub | Identity & KYC | REST API |
| Hummingbird | AML & Transaction Monitoring | REST API + case-management webhooks |
| Unit21 | AML & Transaction Monitoring | REST API |
| Sardine | AML & Transaction Monitoring | REST API + JS SDK |
| Feedzai | AML & Transaction Monitoring | REST API |
| Plaid | Open Banking / Aggregation | REST API |

`capabilities` per entry: 2–3 short bullets per vendor, capability-voiced. **Do NOT add sponsor banks** (Lead Bank, Cross River, Sutton, Pacific West) to this array — they're a contractual operator relationship, not a technical integration. They appear in prose only (FAQ + roleBoundary).

This is a large array (~22 entries). Write all of them in this step; do not abbreviate. Past-tense language ("integrated", "shipped", "delivered") is forbidden per §9.5.

- [ ] **Step 11: Add the new `roleBoundary` block**

```typescript
  roleBoundary: {
    eyebrow: 'Scope & posture',
    heading: 'Where AIvanceWorks fits',
    intro:
      'We are an engineering services firm for licensed institutions and embedded finance operators. We bring deep integration competence across the BaaS, sponsor-bank, core, KYC, AML, and card-issuer ecosystem — and the engineering discipline to make it production-grade.',
    bullets: [
      'We do not hold or apply for banking, money-transmitter, or EMI licenses.',
      'We do not act as sponsor bank, BaaS provider, card issuer, or processor.',
      'We do not provide regulatory or legal advice; clients retain their own counsel and compliance officers.',
      'We do not own the customer relationship or hold customer funds.',
      'We do not perform underwriting decisions on a balance-sheet basis.',
      'We do not provide audit, attestation, or certification (PCI-DSS, SOC 2, HITRUST). We engineer to those standards alongside the client\'s audit firm.',
    ],
    collaboration:
      'We work alongside your compliance officers, sponsor bank, BaaS provider, KYC and AML vendors, card-issuing platform, and external auditors. The license, the regulatory exposure, and the customer trust belong to our client. We bring the engineering.',
  },
```

The implementer may refine wording — but each bullet must remain a plain, unhedged statement of what we are not. No softening to "we do not directly hold" or similar wiggle words. Per SME §8: "Saying these things plainly is a trust signal in fintech. Vague positioning is a red flag."

- [ ] **Step 12: Rewrite the `relatedPages` block**

Exactly 3 entries, all services per §10 (no same-vertical peer link to financial-document-management or wealth-investment-management — buyer personas don't overlap):

```typescript
  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Planning to embed finance? A discovery sprint maps your BaaS, sponsor-bank, KYC, and card-issuing choices before a line of code is written.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'MVP Development',
      description:
        'Want to ship one feature first? Our 12-week MVP process delivers a wallet, account opening, or P2P module while the broader platform is planned.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'Embedded finance demands SDLC discipline. Our security practice builds the IAM, encryption, and audit controls your BaaS provider and sponsor bank will require.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
  ],
```

- [ ] **Step 13: Rewrite the `faqs` block**

6 questions per spec §3 FAQ. Each answer 50–120 words per §9.8. Lead each answer with the direct answer in the first sentence. Maintain consistent depth — a 50-word answer next to a 150-word answer signals uneven quality. Question list:

1. *What's the difference between embedded finance, a wallet, and a neobank — and which do we need?*
2. *Do we need our own banking license?*
3. *How do you integrate with a BaaS provider like Unit / Treasury Prime / Synctera / Column / Stripe?*
4. *How do you handle KYC, AML, and reconciliation across our internal ledger and the partner-bank ledger?*
5. *Can we start with one feature and expand later?*
6. *What does an embedded-finance engagement typically cost and how long does it take?* — qualitative framing per `_unverified` (no fabricated price ranges).

Sponsor-bank framing should appear in question 2's answer (the natural place) rather than its own question.

- [ ] **Step 14: Rewrite the `cta` block**

```typescript
  cta: {
    title: 'Ready to add embedded finance without becoming a bank?',
    description:
      'Book a free 30-minute discovery call. We\'ll review your BaaS landscape, sponsor-bank options, and integration scope, then give you a realistic assessment of what\'s buildable and what we\'d recommend for your specific operator stack.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the integration stack', href: '#signature' },
  },
```

- [ ] **Step 15: Remove fields no longer used**

Delete from the data object:
- `complianceSpotlight: { ... }` block (entirely)
- `complianceDetail: { ... }` block (entirely)
- `imageFeatures: [ ... ]` array (entirely)
- `benefits: [ ... ]` array (entirely)

The TypeScript types make these all optional, so deletion compiles cleanly.

- [ ] **Step 16: Update the `_unverified` array**

Replace the existing list with the new ones reflecting current state. Each entry follows `field — claim — reason` per §9.4. Examples:

```typescript
  _unverified: [
    'metricsStrip[0..3] — all four values capability-framed (no outcome percentages). Greenfield-safe.',
    'hero.metrics[0..3] — capability-framed. Greenfield-safe.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope per vendor. Confirm which integrations have been built in production vs. which are architectural / reference-implementation capability before publishing as shipped work.',
    'processSteps[0..4].duration — typical engagement-cadence estimates. Confirm against actual planned delivery windows before publishing as firm estimates.',
    'integrations[*] — full ecosystem listed. All voiced "we build integrations with…" — confirm this framing is honest across all named vendors per §9.5.',
    'faq[5] — pricing and timeline intentionally framed qualitatively, not as a numeric range. Confirm whether a price range is appropriate for publication.',
    'roleBoundary.bullets — every "we do not…" statement must be confirmable by leadership. Confirm before publishing that no current or planned offering crosses one of these boundaries.',
    'DigitalBankingTransactionFlow — band labels and tile descriptions are capability descriptions, no numeric stats. Greenfield-safe.',
  ],
```

- [ ] **Step 17: Verify TypeScript compiles + lint passes**

Run from `aivanceworks-website/`:

```bash
npx tsc --noEmit && npx next lint --file src/data/solutions/digital-banking-wallets.ts
```

Expected: both pass. If TypeScript complains about the `roleBoundary` field, Task 1 isn't merged — back up and fix.

- [ ] **Step 18: Commit**

```bash
git add aivanceworks-website/src/data/solutions/digital-banking-wallets.ts
git commit -m "content(solutions): rewrite digital-banking-wallets for operator-stack positioning"
```

---

## Task 6: Image cleanup (recommended, not required)

**Files:**
- Delete: `aivanceworks-website/public/images/solutions/digital-banking-wallets/feature-1.jpg`
- Delete: `aivanceworks-website/public/images/solutions/digital-banking-wallets/feature-2.jpg`

These are now orphaned (no data file references them after Task 5). Cleaner to remove. Skip this task entirely if user prefers to leave them on disk.

- [ ] **Step 1: Delete the orphan files**

```bash
rm aivanceworks-website/public/images/solutions/digital-banking-wallets/feature-1.jpg
rm aivanceworks-website/public/images/solutions/digital-banking-wallets/feature-2.jpg
```

- [ ] **Step 2: Confirm only `hero.jpg` remains**

```bash
ls aivanceworks-website/public/images/solutions/digital-banking-wallets/
```

Expected output: only `hero.jpg`.

- [ ] **Step 3: Commit**

```bash
git add aivanceworks-website/public/images/solutions/digital-banking-wallets/
git commit -m "chore(images): remove orphaned digital-banking-wallets feature jpgs"
```

---

## Task 7: Final verification — build, tone-rhythm audit, breakpoints, theme switch

This is the gate that decides whether the rewrite is mergeable.

- [ ] **Step 1: Run typecheck on the whole project**

From `aivanceworks-website/`:

```bash
npx tsc --noEmit
```

Expected: clean exit, no errors.

- [ ] **Step 2: Run linting on the whole project**

From `aivanceworks-website/`:

```bash
npm run lint
```

Expected: no errors. Warnings inspected — none should be ours.

- [ ] **Step 3: Run a production build**

From `aivanceworks-website/`:

```bash
npm run build
```

Expected: build completes, the `/solutions/digital-banking-wallets` route is in the static output. No build warnings about missing modules, missing icons, or unrendered sections.

- [ ] **Step 4: Run dev server and load the page**

From `aivanceworks-website/`:

```bash
npm run dev
```

Then in a browser: `http://localhost:3000/solutions/digital-banking-wallets`. Confirm the page renders end-to-end without runtime errors in the browser console.

- [ ] **Step 5: Tone-rhythm audit (the §4.2 hard-rule check)**

With the page open, scroll through and record the actual rendered tone of each section by inspecting backgrounds. Build the audit table:

| # | Section | Spec tone | Actual tone |
|---|---------|-----------|-------------|
| 1 | hero | dark | ? |
| 2 | metricsStrip | light | ? |
| 3 | featureGrid | warm | ? |
| 4 | signature | dark | ? |
| 5 | integrationsPanel | warm | ? |
| 6 | processTimeline | light | ? |
| 7 | roleBoundary | warm | ? |
| 8 | relatedPages | light | ? |
| 9 | faq | warm | ? |
| 10 | ctaBlock | accent | ? |

§4.2 hard rules to verify:
- Two `dark` sections max (hero + signature). ✓
- No two adjacent `dark` sections. ✓
- Final section is `accent`. ✓
- No three adjacent `light`/`warm` sections of the same tone.

If actual tones don't match spec but no §4.2 rule is violated, that's acceptable (small deviation — note it in the data file comment block per §12.4).

If actual tones VIOLATE §4.2 (e.g., two adjacent darks, three adjacent same-tone non-darks), the section component needs a tone override. Most shared section components accept a `tone` prop (verified for `FeatureGrid`, `ComplianceSpotlight`). For sections that don't accept a tone prop, the fix is to add one and pass it through `SolutionDetailTemplate`. Document the change with a small commit and re-run this audit.

- [ ] **Step 6: Theme-switch test (the §3.5 testable guarantee)**

In the browser console on the digital-banking-wallets page, run:

```js
document.documentElement.setAttribute('data-theme', 'purple');
```

Visually confirm: every brand-blue surface in the page (hero, signature, role-boundary, all CTAs, all icon tiles, all metric values, etc.) repaints to purple. No grays remain stuck. No hardcoded colors visible.

Then revert:

```js
document.documentElement.setAttribute('data-theme', 'blue');
```

If any element fails to repaint, find the offending hardcoded color and replace with the appropriate token per §3.2.

- [ ] **Step 7: Breakpoint check at 375 / 768 / 1280**

Use browser dev tools responsive mode at exactly 375, 768, and 1280 pixels wide. For each breakpoint, scroll the full page. Confirm:
- Hero text is readable, not clipped, no horizontal scroll.
- Three-offering tiles in featureGrid reflow cleanly (3 → 2 → 1 columns).
- Signature three bands collapse predictably (per the file's documented mobile rules).
- IntegrationsPanel grids reflow without overflow.
- RoleBoundary's two-column layout collapses to single column on mobile per the component's documented mobile rule.
- FAQ accordion items remain keyboard-accessible.
- CTA buttons remain tappable (44px minimum touch target).

- [ ] **Step 8: Pre-merge content-integrity gate (§9.7)**

Open the data file and confirm `_unverified` either is empty OR every entry is justified for deferral (e.g., "leadership confirmation pending"). For greenfield items, capability framing must be honest; no "we shipped X" claims.

If `_unverified` is non-empty, the human reviewer must accept it before merge per §9.7.

- [ ] **Step 9: Commit any tone or other fixes from the audit**

If steps 5–7 surfaced any fixes (tone overrides, hardcoded color replacements, mobile-layout tweaks), commit them now in a separate commit:

```bash
git add <fixed files>
git commit -m "fix(solutions): tone/responsiveness/theme fixes from digital-banking-wallets verification"
```

If no fixes were needed, this step is a no-op.

- [ ] **Step 10: Final summary**

Confirm to the user:
- Page renders at all three breakpoints.
- Theme switch works.
- §4.2 rhythm rules pass (or any small deviation is documented in the data file comment block).
- `_unverified` list is reviewer-ready.
- All commits from this plan are present.

The page is ready for human content review and PR.

---

## Constitution-deviation log to add to the data file's top comment block

Per §12.4, the rewrite involves several small deviations. Record them all in the `digital-banking-wallets.ts` top comment block (Task 5 Step 1). Ground truth list:

1. **Archetype shift** — was C (Regulated solution, bank CDO), now B with C cherry-pick (Technical service, vertical-SaaS CTO + LOB Head of Embedded Finance). Rationale: positioning pivot per SME — engineering team for embedded finance operators, not a bank vendor.
2. **`imageFeatures` dropped** — deviates from §11.5 two-track imagery default for solution pages. Rationale: data-heavy operator-stack page; mid-page photo strip would dilute the integration-competence argument. Hero photo retained.
3. **`complianceDeepDive` dropped** — sibling regulated solutions (financial-document-management, wealth-investment-management) keep it; this page does not. Rationale: new buyer is not a regulated entity; their BaaS provider + sponsor bank carry the audit posture.
4. **`benefitsGrid` dropped** — benefits absorbed into the three offering tiles + signature + integrations panel for the CTO+LOB read.
5. **`complianceSpotlight` dropped** — folded into `roleBoundary`'s "how we work alongside your compliance team and BaaS provider" framing. Rationale: compliance is not the load-bearing differentiator on this page; integration competence is.
6. **`roleBoundary` added** — new single-use section (component in `components/signature/`). Rationale: under the new positioning, explicit scope-and-role clarification is a load-bearing trust signal that no existing component carries cleanly.
7. **Section count = 10** — at the §6.3 max and §6.4 Archetype B max. Inside hard limits.
8. **DigitalBankingTransactionFlow signature reframed in place** — same component file/name preserved (per §8.4 swappability + §8.5 file-location stability) with rewritten doc block, tile arrays, and band labels reflecting the operator-stack argument.
9. **No same-vertical peer link in `relatedPages`** — buyer personas don't overlap with financial-document-management or wealth-investment-management per §10 v2.1 strict criterion.
