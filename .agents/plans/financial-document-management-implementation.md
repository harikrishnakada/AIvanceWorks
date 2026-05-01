# Financial Document Management Rewrite — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `/solutions/financial-document-management` end-to-end to reflect the deregulated positioning pivot — from "SEC 17a-4 / FINRA 4511 books-and-records vendor for the CCO" to "engineering services firm building, integrating, and embedding document management for financial firms (operator track) and financial SaaS vendors (vendor track)." Drop `complianceSpotlight`, `complianceDeepDive`, `benefitsGrid`. Add `roleBoundary` (positively framed engagement section). Reframe the `BooksAndRecordsControlPlane` signature in place. Net composition: 11 sections, Archetype B with one C cherry-pick.

**Architecture:** Two primary code surfaces — (1) the data file (`financial-document-management.ts`, full rewrite), (2) the signature component (`BooksAndRecordsControlPlane.tsx`, reframed in place — same filename, same registry entry, same three-band skeleton; doc block + tile arrays + eyebrow/heading/intro/connector labels rewritten). All `roleBoundary` plumbing (type system, template dispatch, registry, component) is already shipped from the digital-banking-wallets work — this plan reuses it without modification.

**Tech Stack:** Next.js 15 (App Router), TypeScript, React, Tailwind CSS 4, Lucide icons. No unit-test framework for page components — verification via `tsc --noEmit`, `next build`, ESLint, manual visual at breakpoints (375 / 768 / 1280 per constitution §10.1), theme-switch test per §3.5.

**Source documents (read both before starting):**
- Spec: [`.agents/plans/financial-document-management-rewrite.md`](./financial-document-management-rewrite.md) — design decisions, per-section content direction, deviations recorded, audit findings.
- Constitution: [`docs/design-system/services-solutions-constitution.md`](../../docs/design-system/services-solutions-constitution.md) — §3 theming, §4 rhythm, §6 archetypes, §7 schema, §9 content integrity, §10 responsiveness, §11 imagery.
- Peer precedent (signature reframe pattern): [`.agents/plans/digital-banking-wallets-implementation.md`](./digital-banking-wallets-implementation.md) Task 4 — same in-place-reframe approach we apply here.

**Note on TDD:** This codebase does not run unit tests on page components. Per-task verification gates are: `tsc --noEmit` passes, `next build` passes, ESLint passes, dev server renders the page at 375/768/1280, theme switch repaints correctly. Treat each "verify" step as the equivalent of a passing test.

**Working directory for ALL commands:** `aivanceworks-website/` (not the repo root). All file paths in this plan are relative to the repo root for clarity, but commands like `npm run lint` must run inside `aivanceworks-website/`.

---

## File Structure

### Modify
- `aivanceworks-website/src/components/signature/BooksAndRecordsControlPlane.tsx` — reframe in place: rewrite doc-comment block; replace 3 tile arrays (sources / control stages / outputs); rewrite eyebrow / heading / intro / band labels / connector labels. Also rename internal helper `ExaminerTile` → `OutputTile` and constant `EXAMINER_OUTPUTS` → `OUTPUT_CONSUMERS` to match deregulated framing. **No skeleton/layout/theming changes.**
- `aivanceworks-website/src/data/solutions/financial-document-management.ts` — full rewrite per spec §3–§4.

### Keep unchanged (verified already wired from digital-banking-wallets)
- `aivanceworks-website/src/types/pages.ts` — `'roleBoundary'` already in `SectionKey` union (line 151); `RoleBoundaryData` interface already exists (line 160); `BasePageData.roleBoundary?` already exists (line 204).
- `aivanceworks-website/src/components/templates/SolutionDetailTemplate.tsx` — `RoleBoundary` import + dispatch case for `'roleBoundary'` already exist (lines 20, 94–101).
- `aivanceworks-website/src/components/signature/RoleBoundary.tsx` — already shipped (content-agnostic, prop-driven).
- `aivanceworks-website/src/components/signature/index.ts` — `RoleBoundary` already exported (line 63).
- `aivanceworks-website/src/lib/constants.ts` — Finance section nav entry stays.
- `aivanceworks-website/src/lib/content.ts` — `SOLUTION_PAGE_MODULES['financial-document-management']` stays.
- `aivanceworks-website/src/app/solutions/[slug]/page.tsx` — `SIGNATURE_COMPONENTS['BooksAndRecordsControlPlane']` stays (component name preserved per spec §2.6).
- `aivanceworks-website/public/images/solutions/financial-document-management/{hero,feature-1,feature-2}.jpg` — alt text rewritten in data file only.

---

## Task 1: Reframe `BooksAndRecordsControlPlane` signature in place

**Files:**
- Modify: `aivanceworks-website/src/components/signature/BooksAndRecordsControlPlane.tsx`

The file structure (Section/Container scaffold, three bands, helper components) is preserved. What changes: imports (icon set), the doc-comment block, the three array constants, the helper component name (`ExaminerTile` → `OutputTile`), the eyebrow / heading / intro / band labels / connector labels.

- [ ] **Step 1: Rewrite the icon imports**

Replace the existing import block (currently lines 32–48) with:

```tsx
import {
  UserSquare2,
  TrendingUp,
  Mail,
  FolderArchive,
  Inbox,
  Tags,
  Clock,
  Search,
  Activity,
  Code2,
  Briefcase,
  Workflow,
  ShieldCheck,
  Boxes,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
```

Removed (no longer used): `Banknote`, `Lock`, `Scale`, `FileOutput`, `Gavel`, `FileSearch`, `FileCheck`.
Added: `FolderArchive`, `Inbox`, `Search`, `Code2`, `Briefcase`, `Workflow`, `Boxes`.

- [ ] **Step 2: Rewrite the doc-comment block (lines 1–30)**

Replace the existing top-of-file comment block with:

```tsx
/**
 * BooksAndRecordsControlPlane — signature section for Financial Document Management.
 *
 * Rewritten 2026-04-30 for the operator-and-vendor positioning (was: regulated
 * books-and-records vendor for the CCO). Component name preserved to avoid
 * registry + import-path churn; the file's argument is what changed.
 *
 * Desktop: three horizontal bands stacked top-to-bottom.
 *   Band 1 (top) — Source systems (4 input tiles: Client & account systems,
 *     Transaction & lending systems, Communications & collaboration, Existing
 *     document stores)
 *   Band 2 (middle) — Document Control Plane (centered core card with 6
 *     stages: Capture & ingest, Classify & extract, Lifecycle & retention,
 *     Search & retrieve, Hold & audit trail, APIs & embedding)
 *   Band 3 (bottom) — Where documents go to do work (4 output tiles: Advisor
 *     / banker / lender at the workstation, Operations & review teams,
 *     Compliance & audit, SaaS host product / partner systems)
 * Soft gradient connectors suggest the flow between bands — every document
 * source flows down into the control plane; documents flow out to the
 * operational consumers below.
 *
 * Mobile (< md): bands collapse to single-column stack. Source tiles reflow
 * 4 → 2 → 1. Core card stays prominent. Control stages reflow 6 → 3 → 2.
 * Output tiles reflow 4 → 2.
 *
 * Argument the visual carries: "Every document, from every source, into one
 * platform — and out wherever the work happens: at the advisor's workstation,
 * in the operations team's queue, in your customer's product."
 *
 * Content integrity: no outcome numbers, no stats chips. Every tile is a
 * capability description. Specific platform names (M365, iManage, Schwab,
 * Salesforce FSC, Azure Blob, etc.) appear in feature prose and the
 * IntegrationsPanel where the buyer needs the credibility signal.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */
```

- [ ] **Step 3: Rewrite `SOURCE_INPUTS` (Band 1 — source systems)**

Replace the existing `SOURCE_INPUTS` array (currently lines 57–78) with:

```tsx
const SOURCE_INPUTS: ReadonlyArray<Node> = [
  {
    icon: UserSquare2,
    title: 'Client & account systems',
    sub: 'CRM, KYC, account opening',
  },
  {
    icon: TrendingUp,
    title: 'Transaction & lending systems',
    sub: 'Custodian feeds, OMS, lending origination',
  },
  {
    icon: Mail,
    title: 'Communications & collaboration',
    sub: 'Email, M365 / Teams, eSign envelopes',
  },
  {
    icon: FolderArchive,
    title: 'Existing document stores',
    sub: 'SharePoint, iManage, NetDocuments, network shares',
  },
];
```

- [ ] **Step 4: Rewrite `CONTROL_STAGES` (Band 2 — document control plane)**

Replace the existing `CONTROL_STAGES` array (currently lines 80–111) with:

```tsx
const CONTROL_STAGES: ReadonlyArray<Node> = [
  {
    icon: Inbox,
    title: 'Capture & ingest',
    sub: 'Pulls from source systems on schedule or event',
  },
  {
    icon: Tags,
    title: 'Classify & extract',
    sub: 'Document AI tags type, jurisdiction, retention category',
  },
  {
    icon: Clock,
    title: 'Lifecycle & retention',
    sub: 'Rules driven by your compliance team’s matrix',
  },
  {
    icon: Search,
    title: 'Search & retrieve',
    sub: 'The operational primitive your users live in',
  },
  {
    icon: Activity,
    title: 'Hold & audit trail',
    sub: 'Legal hold, internal review hold, immutable audit log',
  },
  {
    icon: Code2,
    title: 'APIs & embedding',
    sub: 'Surfaces for your product or downstream systems',
  },
];
```

- [ ] **Step 5: Rename `EXAMINER_OUTPUTS` → `OUTPUT_CONSUMERS` and rewrite (Band 3)**

Replace the existing `EXAMINER_OUTPUTS` array (currently lines 113–134) — including the constant rename — with:

```tsx
const OUTPUT_CONSUMERS: ReadonlyArray<Node> = [
  {
    icon: Briefcase,
    title: 'Advisor / banker / lender',
    sub: 'At the workstation, mid-meeting, pulling a record',
  },
  {
    icon: Workflow,
    title: 'Operations & review teams',
    sub: 'Document workflows, sign-offs, approvals',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & audit',
    sub: 'Audit history, retention reports, hold management',
  },
  {
    icon: Boxes,
    title: 'SaaS host product / partner systems',
    sub: 'Embedded API consumers, customer-tenant document services',
  },
];
```

- [ ] **Step 6: Rename helper component `ExaminerTile` → `OutputTile`**

The `ExaminerTile` helper component (currently lines 153–168) is renamed to `OutputTile`. The component body stays identical — only the function name changes. Replace lines 153–168 with:

```tsx
const OutputTile = ({ node }: { node: Node }) => {
  const Icon = node.icon;
  return (
    <div className="bg-surface-elevated border border-border-dark rounded-xl p-4 md:p-5 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-accent-500/15 border border-accent-500/30 flex items-center justify-center mb-3">
        <Icon className="h-5 w-5 text-accent-400" aria-hidden="true" />
      </div>
      <div className="text-sm md:text-base font-bold text-text-light leading-tight">
        {node.title}
      </div>
      <div className="text-xs md:text-sm text-text-subtle leading-snug mt-1">
        {node.sub}
      </div>
    </div>
  );
};
```

- [ ] **Step 7: Rewrite the eyebrow + heading + intro paragraph (lines 204–219)**

Find the centered hero block at the top of the component body:

```tsx
<div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
  <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
    One control plane for every record
  </div>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
    Records flow in. Examiner-ready evidence flows out.
  </h2>
  <p className="text-base md:text-lg text-text-subtle leading-relaxed">
    CRM files, trade tickets, communications, custody and lending
    documents land in one books-and-records vault &mdash; classified,
    retention-stamped, and locked under SEC 17a-4(f) WORM or audit-trail
    controls. Every examiner request &mdash; SEC OCIE, FINRA cycle, BSA
    review, SOX 802 attestation &mdash; produces a sealed evidence
    package, not a 30-day file hunt.
  </p>
</div>
```

Replace it with:

```tsx
<div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
  <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
    The document control plane
  </div>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
    Every document, from every source, into one platform &mdash; and out where the work happens.
  </h2>
  <p className="text-base md:text-lg text-text-subtle leading-relaxed">
    Source systems on top &mdash; every place a financial document
    originates. The control plane in the middle &mdash; capture, classify,
    lifecycle, search, hold, embed. Operational consumers on the bottom
    &mdash; the advisor opening a record mid-meeting, the operations team
    running document workflows, the compliance officer producing audit
    history, the SaaS product calling the records API.
  </p>
</div>
```

- [ ] **Step 8: Rewrite Band 1 label (line ~225)**

Find:

```tsx
<div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 md:mb-4">
  Sources of record &mdash; ingested, classified, indexed
</div>
```

Replace the inner text with:

```tsx
<div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 md:mb-4">
  Source systems &mdash; every place a financial document originates
</div>
```

- [ ] **Step 9: Rewrite the Band 1→2 connector label (line ~234)**

Find: `<Connector label="Ingest · classify · stamp" />` and replace with:

```tsx
<Connector label="Capture · classify · route" />
```

- [ ] **Step 10: Rewrite Band 2 inner labels (lines ~241–253)**

Find the Band 2 inner header block:

```tsx
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5 md:mb-6">
  <div>
    <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">
      Books-and-records control plane
    </div>
    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-text-light tracking-tight">
      Tamper-evident. Retention-aware. Examiner-producible.
    </div>
  </div>
  <div className="hidden md:block text-xs text-text-subtle max-w-[20rem] text-right leading-snug">
    One vault, one audit ledger, one retention engine &mdash;
    architected to satisfy the SEC 17a-4(f) WORM-or-audit-trail
    option, FINRA 4511, IRS, BSA, GLBA, and state requirements
    from a single configuration spine.
  </div>
</div>
```

Replace with:

```tsx
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5 md:mb-6">
  <div>
    <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">
      Document control plane
    </div>
    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-text-light tracking-tight">
      Capture. Classify. Lifecycle. Search. Hold. Embed.
    </div>
  </div>
  <div className="hidden md:block text-xs text-text-subtle max-w-[20rem] text-right leading-snug">
    One platform, one audit trail, one retention engine &mdash;
    cloud-native build (Azure Blob immutable, S3 Object Lock) or
    extension of the DMS your firm runs (M365 / Purview, iManage,
    NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase).
  </div>
</div>
```

- [ ] **Step 11: Rewrite the Band 2→3 connector label (line ~264)**

Find: `<Connector label="Produces · seals · attests" />` and replace with:

```tsx
<Connector label="Routes · serves · embeds" />
```

- [ ] **Step 12: Rewrite Band 3 label and update tile rendering (lines ~268–275)**

Find the Band 3 block:

```tsx
{/* Band 3 — Examiner-ready outputs */}
<div>
  <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-accent-400 mb-3 md:mb-4">
    Examiner-ready outputs &mdash; on demand, on the record
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
    {EXAMINER_OUTPUTS.map((node, idx) => (
      <ExaminerTile key={idx} node={node} />
    ))}
  </div>
</div>
```

Replace with:

```tsx
{/* Band 3 — Where documents go to do work */}
<div>
  <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-accent-400 mb-3 md:mb-4">
    Where documents go to do work &mdash; by user, by system, by integration
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
    {OUTPUT_CONSUMERS.map((node, idx) => (
      <OutputTile key={idx} node={node} />
    ))}
  </div>
</div>
```

- [ ] **Step 13: Verify TypeScript compiles**

Run from `aivanceworks-website/`:

```bash
npx tsc --noEmit
```

Expected: passes. Errors here mean the rename of `EXAMINER_OUTPUTS` / `ExaminerTile` was incomplete, or an icon import is missing.

- [ ] **Step 14: Verify ESLint passes**

Run from `aivanceworks-website/`:

```bash
npm run lint
```

Expected: passes (no new warnings).

- [ ] **Step 15: Commit**

```bash
git add aivanceworks-website/src/components/signature/BooksAndRecordsControlPlane.tsx
git commit -m "signature(financial-document-management): reframe BooksAndRecordsControlPlane in place

- Rewrite doc-comment block for operator-and-vendor positioning
- Rewrite source-system / control-stage / output-consumer tile content
- Rename EXAMINER_OUTPUTS -> OUTPUT_CONSUMERS, ExaminerTile -> OutputTile
- Rewrite eyebrow/heading/intro and band/connector labels
- No skeleton, layout, or theming changes
- Component name preserved per constitution §8.4 swappability"
```

---

## Task 2: Rewrite the data file end-to-end

**Files:**
- Modify: `aivanceworks-website/src/data/solutions/financial-document-management.ts`

This is a single-file content rewrite. The existing file (596 lines) is replaced wholesale with the new content. Sub-steps split the rewrite into reviewable commits — each commit is self-contained and leaves the file in a compiling state if you stop there.

**Strategy:** Write the new file in one editing pass (it's a single export with many fields), then commit in two checkpoints — first commit covers the structural changes (composition / hero / tiles / metricsStrip / imageFeatures) so a reviewer can validate the page shape early; second commit covers the rest (signature data is in component, integrations / process / capabilities / technologies / role-boundary / related / faq / cta / unverified). Both checkpoints leave the file in a compiling state.

- [ ] **Step 1: Open the existing file and locate the export**

Open `aivanceworks-website/src/data/solutions/financial-document-management.ts`. The structure is `import type { SolutionPageData } from '@/types/pages';` at the top, followed by a comment block, then `const financialDocumentManagement: SolutionPageData = { ... };` and `export default financialDocumentManagement;` at the bottom. The full rewrite preserves only the import line and the export line.

- [ ] **Step 2: Replace the comment block (lines 3–58)**

Replace the existing comment block at the top of the file with:

```tsx
// Archetype B (Technical Service) with cherry-pick from C: roleBoundary section.
//
// Rewritten 2026-04-30 (deregulated). Plan: .agents/plans/financial-document-management-rewrite.md
//
// Old positioning (archived): Archetype C (Regulated Solution). Buyer was CCO
//   at a mid-market regulated US financial firm. Framing was "books-and-records
//   that survive the exam — SEC 17a-4(f) WORM-or-audit-trail, FINRA 4511,
//   BSA/AML, SOX, GLBA compliant by design."
//
// New positioning: AIvanceWorks is an engineering services firm that builds,
//   integrates, and embeds document management platforms across regulated
//   industries — this page covers our financial-services practice. We do not
//   act as a books-and-records vendor of record, do not provide regulatory
//   advice, do not provide audit attestation. The platform is owned by the
//   client; the regulatory program is owned by the client's compliance team.
//
// New buyer mix (operator-led with vendor track):
//   PRIMARY (operator) — CTO / Head of Operations / VP Engineering at a
//     wirehouse, regional-bank wealth division, RIA, broker-dealer, lender, or
//     wealth firm. Mandate: modernize document operations across CRM,
//     custodian, OMS, lending, and M365.
//   SECONDARY (vendor) — CTO at a financial SaaS vendor (advisor-tech,
//     lending-tech, AML-tech, wealth-tech) embedding DMS into their product.
//
// Three offerings (featureGrid tiles):
//   1. DMS Modernization for Financial Firms (operator)
//   2. Embedded Document Management for Financial SaaS (vendor)
//   3. Intelligent Document Processing & Capture (both)
//
// Build OR integrate posture: per-engagement decision. Operator engagements
//   typically integrate-and-extend M365/Purview, iManage Work, NetDocuments,
//   M-Files, Box for Financial Services, Laserfiche, or Hyland OnBase. Vendor
//   engagements typically build cloud-native on Azure Blob immutable / S3
//   Object Lock / GCP Cloud Storage Bucket Lock. Document AI runs across both.
//
// Constitution deviations recorded per §12.4 (small deviations — no amendment
// required):
//   1. ARCHETYPE SHIFT — was C (Regulated, CCO buyer), now B with C cherry-pick
//      (Technical, operator-CTO + vendor-CTO mixed buyer).
//   2. complianceSpotlight DROPPED — folded into roleBoundary bullet 3 +
//      one in-line plumbing reference. No longer the page's trust gate.
//   3. complianceDeepDive DROPPED — operator's CCO is a consumer, not the
//      buyer. Compliance plumbing surfaces in role-boundary + FAQ Q3 only.
//   4. benefitsGrid DROPPED — absorbed into the three offering tiles +
//      signature argument + integrations panel. Mirrors digital-banking-wallets.
//   5. roleBoundary ADDED but POSITIVELY FRAMED — same component as
//      digital-banking-wallets, content inverted from "what we do not do" to
//      "how we engage." Self-challenged per §9.6 (see spec §2.7 rationale).
//   6. BooksAndRecordsControlPlane SIGNATURE REFRAMED IN PLACE — same file +
//      registry entry preserved (§8.4); doc block + tile content + band/
//      connector labels rewritten for operator-and-vendor read.
//   7. SECTION COUNT = 11 — overshoots Archetype B's 8–10 by 1; matches the
//      accepted deviation in wealth-investment-management.ts. Justified by
//      multi-buyer breadth requiring offering tiles + integration depth +
//      process + engagement-model + image proof.
//   8. imageFeatures RETAINED — existing photos at /public/images/solutions/
//      financial-document-management/ fit the deregulated positioning; alt
//      text rewritten from "compliance team" framing to records & ops.
//   9. relatedPages SERVICES-ONLY per §10 default — three cross-links
//      (nlp-document-ai, application-modernization, security-compliance).
//      wealth-investment-management same-vertical peer NOT cross-linked
//      (would narrow the page's dual-buyer reach).
```

- [ ] **Step 3: Replace the slug + title + descriptions + SEO fields (lines 60–96)**

Replace the existing `slug` / `title` / `shortDescription` / `metaTitle` / `metaDescription` / `keywords` / `canonicalPath` / `breadcrumb` block with:

```tsx
const financialDocumentManagement: SolutionPageData = {
  slug: 'financial-document-management',
  title:
    'Document Management Engineering for Financial Firms & Financial SaaS Vendors',

  shortDescription:
    'Engineering services for financial firms modernizing document operations and SaaS vendors embedding records into their products. Three offerings: DMS Modernization (extend M365/Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase, or run a strangler-fig migration off SharePoint sprawl); Embedded Document Management for Financial SaaS (cloud-native build on Azure Blob immutable / S3 Object Lock / GCS Bucket Lock); and Intelligent Document Processing & Capture (OCR, classification, extraction).',

  metaTitle: 'Document Management for Financial Services | Modernize, Embed, Integrate',
  metaDescription:
    'Document management engineering for financial firms and financial SaaS vendors. We modernize, embed, or integrate the DMS your stack needs — built or extended.',
  keywords: [
    'document management engineering financial services',
    'embedded document management financial SaaS',
    'iManage integration financial services',
    'NetDocuments financial services',
    'M365 Purview financial services',
    'M-Files financial services',
    'Box for Financial Services',
    'intelligent document processing financial services',
    'document AI financial services',
    'DMS modernization financial firms',
    'cloud-native records platform',
    'multi-tenant DMS for SaaS',
    'Azure Blob immutable records',
    'S3 Object Lock records',
    'document management for RIAs and broker-dealers',
    'document management for wealth firms',
  ],
  canonicalPath: '/solutions/financial-document-management',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    {
      label: 'Document Management',
      href: '/solutions/financial-document-management',
    },
  ],
```

- [ ] **Step 4: Replace `composition` array (line 98–112)**

Replace the existing `composition` array with:

```tsx
  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'signature',
    'integrationsPanel',
    'processTimeline',
    'roleBoundary',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'fintech',
  signatureComponent: 'BooksAndRecordsControlPlane',
```

Note: drops `complianceSpotlight` and `complianceDeepDive`; adds `roleBoundary`.

- [ ] **Step 5: Replace `hero` block (lines 117–145)**

Replace the existing `hero` block with:

```tsx
  hero: {
    badge: 'Finance Solutions',
    headline: 'Three offerings. One document platform. Built into your stack.',
    subhead:
      'For financial firms modernizing document operations and SaaS vendors embedding records into their products — three engineering paths: DMS modernization, embedded document management, and intelligent document processing.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the document control plane', href: '#signature' },
    heroImage: {
      src: '/images/solutions/financial-document-management/hero.jpg',
      alt: 'Records and operations professional reviewing documents on a tablet in a modern wealth management workspace',
    },
    metrics: [
      {
        value: 'Three Paths',
        label: 'Modernize · Embed · Capture',
        description: 'DMS Modernization, Embedded DMS for SaaS, Intelligent Document Processing',
      },
      {
        value: 'Build or Extend',
        label: 'Cloud-native or DMS-platform-integrated',
        description: 'Per engagement — Azure Blob immutable / S3 Object Lock, or extend M365 / iManage / NetDocuments',
      },
      {
        value: 'Integration-First',
        label: 'CRM, custodian, OMS, lending, M365, eSign',
        description: 'Salesforce FSC / Wealthbox / Redtail, Schwab / Fidelity / Pershing, Orion / Tamarac, nCino / Encompass, DocuSign',
      },
    ],
  },
```

Note: hero metrics is now 3 entries (was 3 with regulator-coded values). Capability-framed and greenfield-honest. The fourth conceptual metric (compliance-aware engineering) lives in the `metricsStrip` below — keeps hero metrics card visually balanced at 3.

- [ ] **Step 6: Replace `metricsStrip` array (lines 152–177)**

Replace the existing `metricsStrip` array with:

```tsx
  metricsStrip: [
    {
      value: 'Three Offering Paths',
      label: 'Modernize · Embed · Capture',
      description:
        'DMS Modernization for financial firms, Embedded Document Management for financial SaaS vendors, and Intelligent Document Processing & Capture across both — three coherent engineering paths, one shared engineering bench.',
    },
    {
      value: 'Build or Extend',
      label: 'Cloud-native or DMS-platform-integrated',
      description:
        'Per-engagement decision: cloud-native records layer on Azure Blob immutable tier, AWS S3 Object Lock, or GCP Cloud Storage Bucket Lock — or extension of the DMS your firm already runs (M365 + Purview, iManage Work, NetDocuments, M-Files, Box for Financial Services, Laserfiche, Hyland OnBase).',
    },
    {
      value: 'Integration-First',
      label: 'CRM, custodian, OMS, lending, M365, eSign',
      description:
        'Built to ingest from Salesforce Financial Services Cloud, Wealthbox, Redtail; Orion, Tamarac, Black Diamond; Schwab, Fidelity, Pershing; nCino, Encompass, Calyx; Microsoft 365; DocuSign and Adobe Sign.',
    },
    {
      value: 'Compliance-Aware Engineering',
      label: 'Alongside your compliance team',
      description:
        'Your compliance team defines the retention matrix, policies, and audit program; we engineer the platform that enforces them — and coordinate with your SOC 2 / SOC 1 / ISO audit firm on the engineering artifacts they need to attest against.',
    },
  ],
```

- [ ] **Step 7: Replace `features` array — THREE OFFERING TILES (lines 185–222)**

Replace the existing 6-capability `features` array with the three offering tiles:

```tsx
  features: [
    {
      icon: 'RefreshCw',
      title: 'DMS Modernization for Financial Firms',
      description:
        'For operators replacing SharePoint sprawl, network shares, or a legacy DMS that doesn’t integrate with the rest of the stack. We extend the platform you already run — M365 + Microsoft Purview, iManage Work, NetDocuments, M-Files, Box for Financial Services, Laserfiche, or Hyland OnBase — wiring it into Salesforce Financial Services Cloud / Wealthbox / Redtail, custodian feeds (Schwab / Fidelity / Pershing), Orion / Tamarac / Black Diamond, nCino / Encompass / Calyx, and DocuSign / Adobe Sign with classification, retention rules, hold workflows, and audit trail. Or we run a strangler-fig migration off SharePoint sprawl onto a cloud-native records layer your firm owns end-to-end. Your compliance team defines the rules; we engineer the platform that enforces them.',
    },
    {
      icon: 'Layers',
      title: 'Embedded Document Management for Financial SaaS',
      description:
        'For SaaS vendors whose financial-firm customers keep asking for the same multi-tenant records features — retention rules, legal hold APIs, audit history, immutable storage. We build a cloud-native records layer inside your product, on Azure Blob Storage immutable tiers, AWS S3 with Object Lock, or GCP Cloud Storage Bucket Lock. Multi-tenant retention engine, hold-and-release APIs, audit trail export, identity-aware document services that compose into your existing workflow and customer-tenant model. Designed to satisfy your customer firm’s compliance program; the vendor doesn’t carry the regulatory exposure.',
    },
    {
      icon: 'Brain',
      title: 'Intelligent Document Processing & Capture',
      description:
        'Classification is the gate — bad metadata at ingestion breaks retention, search, supervisory review, and everything downstream. We build the OCR + extraction + entity-resolution + classification pipeline running on Azure AI Document Intelligence, AWS Textract, GCP Document AI, or custom OCR + classification models (Tesseract, layout transformers) where data residency or cost requires. Pre-trained for financial document types: KYC packets, advisory agreements, account opening forms, suitability questionnaires, trade confirmations, loan disclosures, AML CDD records, supervisory communications. Plugs into either offering above — same pipeline, different consumer.',
    },
  ],
```

- [ ] **Step 8: DELETE the `benefits` array entirely**

Find and delete the entire `benefits: [...]` array (currently lines 224–255). The new composition does not render `benefitsGrid`.

- [ ] **Step 9: Replace `processSteps` array (lines 257–298)**

Replace the existing `processSteps` array with:

```tsx
  processSteps: [
    {
      title: 'Discovery & Document Landscape Mapping',
      description:
        'We inventory document types, source systems (CRM, custodian, OMS, lending, M365, existing DMS), the retention matrix as your compliance team defines it, integration estate, and current-state gaps. Decide build-vs-extend per document type — does this class fit an extension of M365 / Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, or Hyland OnBase, or does it want a cloud-native build on Azure Blob immutable / S3 Object Lock / GCS Bucket Lock?',
      duration: '2–3 weeks',
      deliverable:
        'Document taxonomy, retention rule matrix as configured by your compliance team, integration inventory, build-vs-extend decision per document type, prioritized scope',
    },
    {
      title: 'Architecture, Classification Schema & Integration Design',
      description:
        'Finalize storage substrate per document type, the classification taxonomy, retention rule encoding, hold framework, audit log spec, and integration contracts. For vendor (embedded SaaS) engagements we add multi-tenant data-isolation design and embedding-API surface; for operator engagements we add supervisory review surfaces and the audit-export runbook for engagements that require it.',
      duration: '1–2 weeks',
      deliverable:
        'Storage substrate decision per document type, classification schema, retention rule spec, hold framework, integration contracts, audit-export runbook (where applicable)',
    },
    {
      title: 'Build, Integrate & Embed',
      description:
        'Full-stack development. For operator engagements: extend the DMS platform via its API (M365 Graph + Purview, iManage Work API, NetDocuments REST, M-Files API, Box API, Laserfiche API, Hyland OnBase API) or stand up the cloud-native records layer; build source-system integrations (CRM / custodian / OMS / lending / M365 / eSign), document AI pipeline, retention/hold/audit modules. For vendor engagements: build the multi-tenant records layer inside your product on Azure Blob immutable / S3 Object Lock / GCS Bucket Lock with embedding APIs. Bi-weekly demos to compliance, operations, and IT.',
      duration: '10–16 weeks',
      deliverable:
        'Functional platform in staging, source-system integrations verified, document AI pipeline tested, retention engine and audit log validated, CI/CD pipeline with separation-of-duties controls',
    },
    {
      title: 'Migration & Reconciliation',
      description:
        'Extract, classify, and migrate existing documents from prior DMS, SharePoint, network shares, custodian archives, and paper sources with row-level reconciliation reporting. Validate retention rule application, metadata completeness, and audit log integrity across all migrated documents before any cutover. Source-of-truth reconciliation between the migrated platform and originating systems is signed off in writing.',
      duration: '3–6 weeks',
      deliverable:
        'Migrated documents with reconciliation sign-off, retention validation report, migration audit log, source-of-truth reconciliation, rollback plan',
    },
    {
      title: 'UAT, Training & Phased Go-Live',
      description:
        'UAT with operations, compliance, and IT to verify document workflows, retention application, hold scoping, audit log queries, and integration round-trips. Role-specific training. Phased rollout by document type, business line, jurisdiction, or tenant. 30-day hypercare with daily standups during the first two weeks.',
      duration: '2–3 weeks',
      deliverable:
        'Production deployment, role-based training materials, runbook handover, supervisory and operations playbooks, 30-day hypercare SLA',
    },
  ],
```

- [ ] **Step 10: Replace `capabilities` array (lines 300–311)**

Replace the existing `capabilities` array with:

```tsx
  capabilities: [
    'Document capture and ingestion from CRM, custodian, OMS, lending, M365, eSign, and existing DMS platforms',
    'AI-assisted classification, OCR, and metadata extraction',
    'Configurable retention engine — rules driven by your compliance team’s matrix',
    'Immutable storage on Azure Blob immutable tier, AWS S3 Object Lock, or GCP Cloud Storage Bucket Lock — or extension of M365 / Purview, iManage Work, NetDocuments retention features',
    'Legal and supervisory hold with chain-of-custody export',
    'Tamper-evident audit log (every access, modification, share, hold action, and destruction)',
    'Role-based access control with review and approval surfaces',
    'MFA and identity integration (Entra ID / AWS Cognito / Auth0)',
    'Multi-tenant document services for embedded SaaS deployments',
    'DMS-platform extension (M365 Graph + Purview, iManage Work API, NetDocuments REST, M-Files API, Box API, Laserfiche, Hyland OnBase)',
    'WCAG 2.1 AA accessibility compliance',
  ],
```

- [ ] **Step 11: Replace `technologies` array (lines 313–326)**

Replace the existing `technologies` array with:

```tsx
  technologies: [
    'React / Next.js',
    '.NET / ASP.NET Core',
    'Node.js / TypeScript',
    'Python (Document AI / classification)',
    'Azure App Service / AWS Fargate',
    'Azure Blob Storage (immutable tier) / AWS S3 (Object Lock) / GCP Cloud Storage (Bucket Lock)',
    'Azure AI Document Intelligence / AWS Textract / GCP Document AI',
    'Azure SQL / PostgreSQL',
    'Microsoft Entra ID / AWS Cognito / Auth0',
    'Azure Key Vault / AWS KMS',
    'Azure Service Bus / AWS SQS',
    'Microsoft Graph API',
    'Terraform / Bicep',
    'OpenTelemetry / Application Insights',
  ],
```

- [ ] **Step 12: Replace `integrations` array (lines 328–399)**

Replace the existing `integrations` array with:

```tsx
  integrations: [
    {
      name: 'M365 + Microsoft Purview',
      category: 'DMS Platform',
      connectionMethod: 'Microsoft Graph API + Purview API',
      capabilities: [
        'Email / Teams / SharePoint document ingestion and classification',
        'Retention label and policy mapping to records vault rules',
        'Permission inheritance from Entra ID groups',
      ],
    },
    {
      name: 'iManage Work',
      category: 'DMS Platform',
      connectionMethod: 'iManage REST API',
      capabilities: [
        'Workspace and folder structure integration',
        'Document version and metadata sync',
        'Records-management module extension',
      ],
    },
    {
      name: 'NetDocuments / M-Files / Box for Financial Services',
      category: 'DMS Platform',
      connectionMethod: 'REST API per platform',
      capabilities: [
        'Cabinet / vault / workspace integration',
        'Metadata-driven classification mapping',
        'Retention and legal-hold workflow extension',
      ],
    },
    {
      name: 'Salesforce Financial Services Cloud / Wealthbox / Redtail / Practifi',
      category: 'CRM',
      connectionMethod: 'REST API + platform events / webhooks',
      capabilities: [
        'Client and household record ingestion with relationship context',
        'Advisory agreement and KYC document capture',
        'Bi-directional document reference linking',
      ],
    },
    {
      name: 'Orion / Tamarac / Black Diamond / Addepar / eMoney',
      category: 'Portfolio Management',
      connectionMethod: 'REST API + scheduled file extract',
      capabilities: [
        'Performance reports and statements ingestion',
        'Account-level document linking',
        'Retention rule application per advisory account',
      ],
    },
    {
      name: 'Schwab / Fidelity / Pershing',
      category: 'Custodian',
      connectionMethod: 'SFTP / direct feed / partner API',
      capabilities: [
        'Custodian-generated statement and confirm ingestion',
        'Account opening packet capture and indexing',
        'Trade confirmation lifecycle tracking',
      ],
    },
    {
      name: 'nCino / Encompass / Calyx',
      category: 'Lending Origination',
      connectionMethod: 'REST API + webhook events',
      capabilities: [
        'Loan file capture from origination through close',
        'Disclosure and TRID document indexing',
        'Servicing-handoff document continuity',
      ],
    },
    {
      name: 'DocuSign / Adobe Sign',
      category: 'eSignature',
      connectionMethod: 'REST API + webhook',
      capabilities: [
        'Executed agreement auto-filing to the records platform',
        'Audit envelope data capture and retention assignment',
        'Signed-package retention scheduling at completion',
      ],
    },
    {
      name: 'Azure Blob Storage (immutable tier)',
      category: 'Storage Substrate',
      connectionMethod: 'Azure SDK (Java / .NET / Python / Node)',
      capabilities: [
        'Time-based retention policies enforced at the storage layer',
        'Legal hold lock per blob with audit',
        'Immutable storage substrate for cloud-native records builds',
      ],
    },
    {
      name: 'AWS S3 (Object Lock)',
      category: 'Storage Substrate',
      connectionMethod: 'AWS SDK + S3 Object Lock APIs',
      capabilities: [
        'Compliance-mode and governance-mode retention',
        'Legal hold per object with audit',
        'Immutable storage substrate for cloud-native records builds',
      ],
    },
    {
      name: 'GCP Cloud Storage (Bucket Lock)',
      category: 'Storage Substrate',
      connectionMethod: 'GCP SDK + Bucket Lock APIs',
      capabilities: [
        'Bucket-level retention policies enforced at the storage layer',
        'Legal hold per object',
        'Immutable storage substrate for cloud-native records builds',
      ],
    },
    {
      name: 'Azure AI Document Intelligence / AWS Textract / GCP Document AI',
      category: 'Document AI',
      connectionMethod: 'REST API per provider',
      capabilities: [
        'OCR and structured-form extraction across financial document types',
        'Custom-trained models for KYC, advisory agreements, loan files, suitability forms',
        'Output feeds the classification engine and retention rule mapping',
      ],
    },
  ],
```

- [ ] **Step 13: DELETE `complianceSpotlight` block (lines 401–436)**

Find and delete the entire `complianceSpotlight: { ... }` block. The new composition does not render `complianceSpotlight`.

- [ ] **Step 14: DELETE `complianceDetail` block (lines 438–492)**

Find and delete the entire `complianceDetail: { ... }` block. The new composition does not render `complianceDeepDive`.

- [ ] **Step 15: Replace `imageFeatures` array (lines 494–513)**

Replace the existing `imageFeatures` array with:

```tsx
  imageFeatures: [
    {
      heading: 'Every document, retrievable in seconds.',
      description:
        'Pull any record and see its complete access history — who viewed, who shared, who held — without an emergency search across SharePoint, the CRM, and the network share.',
      image: {
        src: '/images/solutions/financial-document-management/feature-1.jpg',
        alt: 'Financial-services professional reviewing records and access history at a workstation',
      },
    },
    {
      heading: 'One platform across every source system.',
      description:
        'Account opening packets, advisory agreements, trade confirms, lending files, and supervisory communications in one classified vault — not fragmented across five systems.',
      image: {
        src: '/images/solutions/financial-document-management/feature-2.jpg',
        alt: 'Wealth management operations and IT team reviewing document workflows together at a conference table',
      },
    },
  ],
```

- [ ] **Step 16: Add the new `roleBoundary` field (positioned after `imageFeatures`)**

After the `imageFeatures` array, insert the new `roleBoundary` field:

```tsx
  roleBoundary: {
    eyebrow: 'How we engage',
    heading: 'You own the platform. We engineer it.',
    intro:
      'We are an engineering services firm. The platform we build or extend lives in your tenant, on your cloud account, or inside your product. We deliver code, configuration, and integration — and partner with your compliance team, IT, audit firm, and DMS / CRM / custodian / OMS vendors throughout.',
    bullets: [
      'Code, configuration, and integration — built, tested, documented, and version-controlled in your repository.',
      'Tenant ownership — the records vault sits in your Azure subscription, AWS account, M365 tenant, or SaaS product. We hand off the keys.',
      'Compliance-aware engineering — your compliance team defines the retention matrix, policies, and audit program; we make the platform enforce them.',
      'Collaborative delivery — bi-weekly demos to compliance, operations, and IT during the build; runbook walkthroughs and knowledge transfer at handover.',
      'Audit-firm coordination — we provide the engineering artifacts (architecture, data flow, control descriptions) your SOC 2 / SOC 1 / ISO firm needs to attest against.',
      'Vendor and platform partnership — we extend M365 / Purview, iManage, NetDocuments, M-Files, Box, and integrate with your custodian / CRM / OMS / lending vendors. We don’t replace those relationships.',
    ],
    collaboration:
      'Built alongside your compliance team, supervisory principals, IT and security team, external auditors, and DMS / CRM / custodian platform vendors.',
  },
```

- [ ] **Step 17: Replace `relatedPages` array (lines 515–540)**

Replace the existing `relatedPages` array with:

```tsx
  relatedPages: [
    {
      title: 'NLP & Document AI',
      description:
        'Classification is the gate that keeps the records platform usable. Our document-AI engagement designs the OCR, extraction, and classification pipeline that tags KYC files, advisory agreements, trade confirms, loan disclosures, and supervisory communications correctly at ingestion — so the retention engine, search, and supervisory review have the right metadata to work with.',
      href: '/services/nlp-document-ai',
      icon: 'FileText',
      pageType: 'service',
    },
    {
      title: 'Application Modernization',
      description:
        'Most operator engagements start by escaping SharePoint sprawl, network shares, or a legacy DMS that doesn’t integrate. Our modernization engagement runs the strangler-fig migration that retires the old store while the new records platform takes over — without an exam-day surprise in the middle.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'A records platform is one layer of the security stack. Our security & compliance engagement covers identity, secrets, and Zero-Trust controls across every system your team and your customers rely on — so the records platform sits inside a hardened identity and access perimeter, not next to one.',
      href: '/services/security-compliance',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
  ],
```

- [ ] **Step 18: Replace `faqs` array (lines 542–573)**

Replace the existing `faqs` array with:

```tsx
  faqs: [
    {
      question: 'Do you build from scratch, or extend the DMS we already run?',
      answer:
        'Both — the decision is per-engagement and per-document-type. Operator engagements typically integrate-and-extend the DMS your firm already runs (M365 + Microsoft Purview, iManage Work, NetDocuments, M-Files, Box for Financial Services, Laserfiche, or Hyland OnBase), or run a strangler-fig migration off SharePoint sprawl onto a cloud-native records layer your firm owns end-to-end. Vendor engagements typically build cloud-native inside your product on Azure Blob immutable, AWS S3 Object Lock, or GCP Cloud Storage Bucket Lock. We make the call during discovery, document type by document type, against the platforms you already license and the workflows you actually run.',
    },
    {
      question: 'We’re a SaaS vendor embedding records in our product. How does the embedded option work?',
      answer:
        'A cloud-native records layer inside your codebase, on top of Azure Blob immutable, AWS S3 Object Lock, or GCP Cloud Storage Bucket Lock as the storage substrate. Multi-tenant retention engine, hold-and-release APIs, audit trail export, and identity-aware document services that compose into your existing workflow and customer-tenant model. The records layer operates as a module of your product, not a separate platform your customer has to license. The platform is designed to satisfy your customer firm’s compliance program; the vendor doesn’t carry the regulatory exposure.',
    },
    {
      question: 'How does the platform handle complex retention rules across multiple regulations and jurisdictions?',
      answer:
        'Retention rules configured as a matrix during discovery — each document type mapped to its applicable retention period. Your compliance team defines the matrix (which regulations apply where — SEC 17a-4, FINRA 4511, IRS, BSA/AML, SOX, GLBA, NYDFS, state, or whatever your firm’s program calls for); we engineer the engine that enforces it. Where multiple regulations apply, the longest required period governs. Rules are managed by compliance administrators through a configuration interface — no code change is required when a regulation updates or your firm registers in a new state.',
    },
    {
      question: 'How does the platform integrate with our CRM, custodian feeds, lending platform, and M365?',
      answer:
        'Integration patterns by source: REST APIs and platform events for CRMs (Salesforce Financial Services Cloud, Wealthbox, Redtail, Practifi); REST or scheduled file extracts for portfolio platforms (Orion, Tamarac, Black Diamond, Addepar, eMoney); SFTP and partner feeds for custodians (Schwab, Fidelity, Pershing); REST and webhooks for lending (nCino, Encompass, Calyx); Microsoft Graph for M365 / SharePoint; webhooks for eSignature (DocuSign, Adobe Sign). The source system stays the system of record for the originating workflow; the records platform becomes the system of record for the document and its lifecycle.',
    },
    {
      question: 'What does the audit log capture, and how does legal hold scope to a single matter or client?',
      answer:
        'The audit log captures every record access, download, share, modification, hold action, and destruction with timestamp, actor identity, IP, source system, and action type — protected against modification and exportable as structured reports. Legal hold is scoped through the admin console by custodian, account, matter, date range, or keyword; records matching the scope are frozen until formally lifted, and records outside it continue through their normal lifecycle without disruption. Every hold placement, modification, and lift is logged with actor and timestamp, producing a chain-of-custody record that travels with any export.',
    },
    {
      question: 'What does an engagement typically cost and how long does it take?',
      answer:
        'A typical operator engagement (DMS Modernization) or vendor engagement (Embedded DMS for SaaS) runs 18–30 weeks from discovery to first-line production, depending on document landscape complexity, integration count, build-vs-extend decisions, and migration volume. Phased delivery — storage substrate, retention engine, audit log, and integrations come online before the full platform. A discovery engagement produces a realistic cost and timeline assessment grounded in your specific landscape, registrations, and integration estate — not a generic brochure number.',
    },
  ],
```

- [ ] **Step 19: Replace `cta` block (lines 575–581)**

Replace the existing `cta` block with:

```tsx
  cta: {
    title: 'Ready to modernize, embed, or integrate document management for your stack?',
    description:
      'Book a free 30-minute discovery call. We will review your document landscape, source systems, integration estate, retention requirements as your compliance team defines them, and audit-day exposure — then outline a realistic build-vs-extend scope and timeline for your engagement.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the document control plane', href: '#signature' },
  },
```

- [ ] **Step 20: Replace `_unverified` array (lines 583–592)**

Replace the existing `_unverified` array with:

```tsx
  _unverified: [
    'hero.metrics[*] — all three are capability-framed (Three Paths, Build or Extend, Integration-First). Greenfield-safe; no outcome claims.',
    'metricsStrip[*] — all four values are capability-framed (Three Offering Paths, Build or Extend, Integration-First, Compliance-Aware Engineering). Greenfield-safe.',
    'features[*] — three offering tiles. Tile prose names specific platforms (M365/Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase, Salesforce FSC, Schwab, Fidelity, Pershing, Orion, Tamarac, Black Diamond, nCino, Encompass, Calyx, Azure Blob immutable, S3 Object Lock, GCS Bucket Lock, Azure AI Document Intelligence, AWS Textract, GCP Document AI). Greenfield-honest "we build / we extend / we run" framing throughout. Confirm framing on Schwab/Fidelity/Pershing direct-feed access (partner-program credentials required) before publishing.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope. Confirm which integrations have been built in production vs. which are reference-implementation capability.',
    'processSteps[*].duration — phase durations sum to 18–30 weeks. Confirm against actual planned engagement structure.',
    'faqs[5] — 18–30 week engagement range; confirm against actual planned engagement structure.',
    'BooksAndRecordsControlPlane signature reframe — band labels and tile content are capability descriptions, not measured claims. Greenfield-safe; no numeric stats embedded.',
    'roleBoundary — positively framed engagement section. Six bullets describe deliverables and partnerships; no fabricated outcomes. Self-challenged per constitution §9.6 against the negative pattern from digital-banking-wallets.',
  ],
};

export default financialDocumentManagement;
```

- [ ] **Step 21: Verify TypeScript compiles**

Run from `aivanceworks-website/`:

```bash
npx tsc --noEmit
```

Expected: passes. If errors mention missing or extra fields on `SolutionPageData`, re-check that `complianceSpotlight` and `complianceDetail` blocks were fully deleted (Steps 13–14) and that `roleBoundary` was added (Step 16).

- [ ] **Step 22: Verify ESLint passes**

Run from `aivanceworks-website/`:

```bash
npm run lint
```

Expected: passes (no new warnings).

- [ ] **Step 23: Commit**

```bash
git add aivanceworks-website/src/data/solutions/financial-document-management.ts
git commit -m "data(financial-document-management): rewrite for deregulated operator-and-vendor positioning

- Pivot Archetype C (Regulated, CCO buyer) -> B with C cherry-pick (Technical, operator-CTO + vendor-CTO)
- Replace 6-capability featureGrid with three offering tiles (Modernization, Embedded for SaaS, Document AI)
- Drop complianceSpotlight, complianceDeepDive, benefitsGrid; add roleBoundary (positive engagement framing)
- Rewrite hero (\"Three offerings. One document platform. Built into your stack.\"), metricsStrip, processSteps
- Rewrite integrations panel grouped across DMS Platform / CRM / Portfolio / Custodian / Lending / eSignature / Storage Substrate / Document AI
- Rewrite capabilities, technologies (multi-cloud Azure/AWS/GCP), imageFeatures, relatedPages, FAQs, CTA
- See .agents/plans/financial-document-management-rewrite.md for full design rationale and constitution deviations recorded per §12.4"
```

---

## Task 3: Final verification — build, rhythm audit, breakpoints, theme switch

**Files:** none modified — this task is verification only.

- [ ] **Step 1: Verify the production build**

Run from `aivanceworks-website/`:

```bash
npm run build
```

Expected: build completes without errors. The new page should appear in the build output as `/solutions/financial-document-management`.

- [ ] **Step 2: Start the dev server**

Run from `aivanceworks-website/`:

```bash
npm run dev
```

Expected: server starts on `http://localhost:3000` (or next available port).

- [ ] **Step 3: Visual smoke test at 1280px**

Open `http://localhost:3000/solutions/financial-document-management` in a browser at 1280px width. Verify each section renders in this exact order:

1. Hero (dark) — badge "Finance Solutions", headline "Three offerings. One document platform. Built into your stack.", 3 hero metrics
2. MetricsStrip (light) — 4 capability-framed metrics
3. FeatureGrid (warm) — three offering tiles with `RefreshCw`, `Layers`, `Brain` icons
4. ImageFeatures (light) — two image+text alternating blocks
5. Signature (dark) — `BooksAndRecordsControlPlane` reframed with eyebrow "The document control plane", new band labels
6. IntegrationsPanel (warm) — ~12 cards grouped across 8 categories
7. ProcessTimeline (light) — 5 phases, 18–30 weeks total
8. RoleBoundary (warm) — heading "You own the platform. We engineer it.", 6 positive bullets
9. RelatedPages (light) — 3 service cross-links (NLP & Document AI, Application Modernization, Security & Compliance)
10. FAQ (warm) — 6 questions
11. CTA (accent) — "Ready to modernize, embed, or integrate..."

- [ ] **Step 4: Visual smoke test at 768px and 375px**

Resize the browser (or use DevTools device emulation) to 768px and again to 375px. At each width:
- No horizontal scroll
- Three offering tiles stack to single column at 375px
- Signature three bands collapse to single column at 375px (4-col tile rows reflow to 2 then 1; 6-col control stages reflow to 3 then 2)
- ImageFeatures alternation collapses to single column with image-above-text
- RoleBoundary two-column layout collapses to single column at 375px

- [ ] **Step 5: Theme-switch test (constitution §3.5 testable guarantee)**

In DevTools console on the rendered page, run:

```js
document.documentElement.setAttribute('data-theme', 'purple');
```

Expected: every blue/brand surface repaints to purple. No grays remain stuck. No hardcoded colors visible. Run again to revert:

```js
document.documentElement.setAttribute('data-theme', 'blue');
```

If anything fails to repaint, the violation is in either the signature component (raw color reference) or a shared component (already constitution-audited). Inspect the failing element's classes to identify.

- [ ] **Step 6: Tone-rhythm audit**

Walk the page top-to-bottom and verify the tone sequence per spec §2.5:

```
1. dark   2. light   3. warm   4. light   5. dark
6. warm   7. light   8. warm   9. light  10. warm  11. accent
```

Constitution §4.2 hard rules:
- Two darks max (positions 1 and 5) ✓
- No adjacent darks ✓
- No three same-tone in a row ✓
- Final is accent ✓

- [ ] **Step 7: Deregulation audit (the user's hard constraint)**

`grep` the rendered HTML or the data file for regulator-coded phrases that should NOT appear as primary headings/labels (these may appear inside FAQ answer body or role-boundary plumbing references — that's expected):

```bash
cd aivanceworks-website && grep -i "exam-day\|examiner-ready\|exam-ready\|books-and-records.*survive\|WORM-or-audit-trail.*headline\|17a-4.*headline" src/data/solutions/financial-document-management.ts src/components/signature/BooksAndRecordsControlPlane.tsx
```

Expected: no matches in headings, eyebrow text, or band labels. If a match appears in headline/eyebrow/title position, it's a regression.

- [ ] **Step 8: Verify the `_unverified` list reflects the rewrite**

Open `aivanceworks-website/src/data/solutions/financial-document-management.ts` and confirm the `_unverified` array entries reference current fields (no entries point to deleted `complianceSpotlight` / `complianceDetail`). All entries should be either:
- Capability-framed disclosure (greenfield-safe)
- Specific items requiring partner-program / engagement-structure verification before public publish

- [ ] **Step 9: Commit any final fixes (only if Steps 3–8 surfaced issues)**

If any visual, theme, rhythm, or audit issue was found and fixed during verification, commit the fix with a focused message. If everything passed without changes, skip this step.

```bash
git add <files>
git commit -m "fix(financial-document-management): <specific fix from verification>"
```

- [ ] **Step 10: Final pre-merge gate**

Confirm:
- `npx tsc --noEmit` passes
- `npm run build` passes
- `npm run lint` passes
- All 11 sections render in correct order at 1280 / 768 / 375
- Theme switch repaints cleanly
- Tone rhythm matches spec §2.5
- No regulator-coded phrases in headlines / eyebrow / band labels
- `_unverified` array entries are current

If all gates pass, the rewrite is ready for human review per constitution §9.7.

---

## Self-review

**Spec coverage check:**

| Spec section | Implemented in |
|---|---|
| §2.1 Buyer (operator + vendor) | Task 2 Steps 5–7 (hero / metrics / tiles), Step 16 (role boundary), Step 18 (FAQ Q2) |
| §2.2 Archetype B with C cherry-pick | Task 2 Step 4 (composition) — drops complianceSpotlight/Detail, adds roleBoundary |
| §2.3 Three offering tiles | Task 2 Step 7 |
| §2.4 Build OR integrate | Task 2 Steps 5, 6, 7, 9, 10, 11, 12, 18 — multi-cloud + extend-DMS surfaces throughout |
| §2.5 Composition (11 sections) | Task 2 Step 4 |
| §2.6 Signature reframe | Task 1 (entire) |
| §2.7 Role boundary positive | Task 2 Step 16 |
| §2.8 Constitution deviations | Task 2 Step 2 (comment block lists all 9) |
| §3.1 Hero | Task 2 Step 5 |
| §3.2 metricsStrip | Task 2 Step 6 |
| §3.3 featureGrid (3 tiles) | Task 2 Step 7 |
| §3.4 imageFeatures | Task 2 Step 15 |
| §3.5 signature | Task 1 |
| §3.6 integrationsPanel (8 categories) | Task 2 Step 12 |
| §3.7 processTimeline | Task 2 Step 9 |
| §3.8 roleBoundary | Task 2 Step 16 |
| §3.9 relatedPages | Task 2 Step 17 |
| §3.10 FAQ | Task 2 Step 18 |
| §3.11 ctaBlock | Task 2 Step 19 |
| §4 Data file changes | Task 2 (entire) |
| §5 Component changes | Task 1 (entire) |
| §6 RoleBoundary reuse | Task 2 Step 16 (uses already-shipped component; no component change) |
| §7 Audit checklist | Task 3 Step 7 |

All spec sections covered.

**Placeholder scan:** No "TBD", "TODO", "implement later", or vague-validation steps. Every code step shows the exact code to write/replace; every command step shows the exact command and expected output.

**Type consistency:**
- `OUTPUT_CONSUMERS` defined in Task 1 Step 5; referenced in Task 1 Step 12 ✓
- `OutputTile` defined in Task 1 Step 6; referenced in Task 1 Step 12 ✓
- `RoleBoundaryData` shape (eyebrow / heading / intro / bullets / collaboration) used in Task 2 Step 16 matches existing type definition (verified pre-plan) ✓
- `SolutionPageData` field names (composition, hero, metricsStrip, features, processSteps, capabilities, technologies, integrations, imageFeatures, roleBoundary, relatedPages, faqs, cta, _unverified) match existing type ✓
- Lucide icon names all exist (UserSquare2, TrendingUp, Mail, FolderArchive, Inbox, Tags, Clock, Search, Activity, Code2, Briefcase, Workflow, ShieldCheck, Boxes, RefreshCw, Layers, Brain, FileText) — verified via lucide-react package ✓

**Scope check:** Single page rewrite + in-place signature reframe. Focused enough for a single implementation plan. No decomposition needed.

---

## Notes

- **Image cleanup not required.** All three existing images (`hero.jpg`, `feature-1.jpg`, `feature-2.jpg`) are reused with rewritten alt text.
- **No new component creation.** `RoleBoundary` is reused from digital-banking-wallets; signature is reframed in place.
- **No type system changes.** All `roleBoundary` plumbing exists.
- **No registry changes.** `SIGNATURE_COMPONENTS['BooksAndRecordsControlPlane']` and `SOLUTION_PAGE_MODULES['financial-document-management']` both stay unchanged.
- **Same-vertical peer cross-link** (`wealth-investment-management`) intentionally NOT added in `relatedPages`. Re-evaluate if vendor engagements drop below 30% of pipeline (per spec §9 deferred decisions).
- If a future engagement requires re-adding regulator-coded vendors (e.g., Verafin / NICE Actimize / Smarsh / Global Relay), do it via a focused PR after that buyer slice is validated, not in this rewrite.
