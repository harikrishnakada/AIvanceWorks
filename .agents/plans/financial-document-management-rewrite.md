# Plan: Financial Document Management — Content & Positioning Rewrite

**Created:** 2026-04-30
**Status:** Design approved by user. Audit pass complete. Ready for implementation plan (next step: `superpowers:writing-plans`).
**Design constitution (structure):** `docs/design-system/services-solutions-constitution.md`
**Peer precedents:**
- `.agents/plans/digital-banking-wallets-rewrite.md` (Archetype C → B pivot, role-boundary section)
- `.agents/plans/wealth-investment-management-rewrite.md` (Archetype C → B pivot, 11-section overshoot, image-features retained)

---

## 1. Overview

Rewrite `/solutions/financial-document-management` end-to-end to reflect a fundamental positioning pivot:

- **Old positioning:** AIvanceWorks builds an SEC 17a-4 / FINRA 4511 compliant books-and-records platform aimed at the CCO at a mid-market regulated financial firm. Hero: *"Books-and-records that survive the exam."* Heavy regulator-speak; ComplianceSpotlight + ComplianceDeepDive sections; signature framed as a regulatory control plane with examiner-ready outputs.
- **New positioning:** AIvanceWorks is an **engineering services firm** that builds, integrates, and embeds document management platforms across regulated industries — this page covers our financial-services practice. We build cloud-native records platforms or extend existing DMS platforms (M365/Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase) for two buyer types: **financial firms modernizing document operations** (operator track) and **financial SaaS vendors embedding records into their products** (vendor track).

Page slug, URL, and template archetype change minimally. The data file, the signature component's content/labels (not skeleton), and the reuse of the existing `RoleBoundary` component (already shipped from `digital-banking-wallets`) are the primary code surfaces touched.

**The user's hard constraints (audited against):**
1. **Not regulatory** — no regulator-defense framing, no "exam-day" / "books-and-records" / "WORM-or-audit-trail" as primary marketing language. Regulator names appear once in FAQ answer body and role-boundary bullets as plumbing references, never as headlines.
2. **Practically feasible** — every named platform is a real, current product; every architecture pattern is one a real engineering services firm executes routinely.
3. **Industry-proven** — DMS platforms named are the actual market leaders financial firms run today (iManage, NetDocuments, M365/Purview, M-Files, Box, Laserfiche, Hyland OnBase) and the cloud substrates named are real Azure/AWS/GCP features (Blob immutable tier, S3 Object Lock, GCS Bucket Lock).

---

## 2. Locked design decisions

### 2.1 Buyer

**Operator-led with a vendor track (Option C from clarifying Q1).**

- **Primary (operator):** CTO / Head of Operations / VP Engineering at a wirehouse, regional-bank wealth division, RIA, broker-dealer, lender, or wealth firm. Mandate: modernize document operations across the firm's CRM, custodian, OMS, lending, and M365 stack.
- **Secondary (vendor):** CTO at a financial SaaS vendor (advisor-tech, lending-tech, AML-tech, wealth-tech) embedding DMS inside their product.

**Compliance officer (CCO) is a *consumer* of the platform, not the buyer.** The page's emotional argument is "engineering services firm that delivers; you own the platform; your compliance team defines the rules."

### 2.2 Archetype

**Archetype B (Technical Service)** with one cherry-pick from C: a `roleBoundary` section reused from `digital-banking-wallets`. Was Archetype C (Regulated Solution) under old positioning; the buyer pivot away from CCO and away from regulator-defense framing makes B the right fit.

### 2.3 Three offerings (Q2 = Option A — three offering tiles)

Replaces the current page's 6-capability `featureGrid` with three offering tiles:

1. **DMS Modernization for Financial Firms** *(operator buyer)* — extend M365/Purview, iManage Work, NetDocuments, M-Files, Box for Financial Services, Laserfiche, or Hyland OnBase; or run a strangler-fig migration off SharePoint sprawl onto a cloud-native records layer the firm owns end-to-end.
2. **Embedded Document Management for Financial SaaS** *(vendor buyer)* — cloud-native multi-tenant build inside the vendor's product, on Azure Blob immutable / S3 Object Lock / GCS Bucket Lock substrates. Multi-tenant retention engine, hold-and-release APIs, audit trail export, identity-aware document services.
3. **Intelligent Document Processing & Capture** *(both buyers)* — OCR, classification, extraction, entity-resolution pipeline running on Azure AI Document Intelligence / AWS Textract / GCP Document AI, or custom OCR + classification models (Tesseract, layout transformers) where data residency or cost requires. Pre-trained for financial document types.

### 2.4 Build OR integrate posture (Q3 = Option C — both)

Per-engagement decision:
- Operator engagements typically integrate-and-extend an existing DMS platform.
- Vendor engagements typically build cloud-native inside the vendor's product.
- Tile 3 (Document AI) runs across both as a capability layer.

This honest framing is the load-bearing differentiator vs. (a) pure-build positioning that ignores the platforms operators already license, and (b) pure-integration positioning that misses the SaaS vendor build case.

### 2.5 Composition (11 sections)

```
1.  hero              (dark)
2.  metricsStrip      (light)
3.  featureGrid       (warm)    — THREE OFFERING TILES
4.  imageFeatures     (light)   — two-track imagery
5.  signature         (dark)    — BooksAndRecordsControlPlane reframed in place
6.  integrationsPanel (warm)    — grouped by category
7.  processTimeline   (light)
8.  roleBoundary      (warm)    — positive "How we engage" framing (NOT "what we don't do")
9.  relatedPages      (light)
10. faq               (warm)
11. ctaBlock          (accent)
```

**Constitution audit:**
- §6.1 anchors: hero=1, FAQ second-to-last, CTA last ✓
- §6.3 density: 11 sections — overshoots Archetype B's 8–10 max by 1; matches the accepted deviation in `wealth-investment-management.ts`. Justified by multi-buyer breadth requiring offering tiles + integration depth + process + engagement-model section + image proof.
- §4.2 rhythm: hero=dark, signature=dark, no adjacent darks (only two darks at positions 1 and 5), alternating L/W elsewhere, CTA=accent ✓
- §10 relatedPages: present, services-only ✓

### 2.6 Signature reframed in place

`BooksAndRecordsControlPlane.tsx` keeps its filename, registry entry, and three-band hierarchical skeleton (per §8.4 swappability + the `DigitalBankingTransactionFlow` precedent from digital-banking-wallets). What changes is:

- Doc-comment block at the top of the file (~30 lines)
- Three band labels (eyebrow, heading, intro)
- Every input/stage/output tile's content

**New three bands:**

**Band 1 — Source systems** *(where documents come from — operational sources, not "regulatory record sources"):*
1. Client & account systems — Salesforce FSC / Wealthbox / Redtail, KYC, account opening
2. Transaction & lending systems — custodian feeds (Schwab / Fidelity / Pershing), OMS, lending origination (nCino / Encompass / Calyx)
3. Communications & collaboration — email, M365 / Teams, eSign envelopes (DocuSign / Adobe Sign)
4. Existing document stores — SharePoint, iManage, NetDocuments, M-Files, Box, Laserfiche, network shares

**Band 2 — Document Control Plane** *(6 stages — operational, not regulatory):*
1. Capture & ingest
2. Classify & extract
3. Lifecycle & retention
4. Search & retrieve
5. Hold & audit trail — legal hold, internal review hold, immutable audit log
6. APIs & embedding

**Band 3 — Where documents go to do work** *(4 output tiles — operational consumers, not "examiners"):*
1. Advisor / banker / lender at the workstation
2. Operations & review teams
3. Compliance & audit *(included as one consumer of many — not the page's main event)*
4. SaaS host product / partner systems

**New emotional argument:** *"Every document, from every source, into one platform — and out wherever the work happens: at the advisor's workstation, in the operations team's queue, in your customer's product."*

**Why reframe in place vs. rename or replace.** Same justification as `DigitalBankingTransactionFlow`: signatures are single-use per §8.4 (one consumer: the registry). The component name is plumbing — only the doc block and tile content carry meaning. The three-band hierarchical IS the right pattern (§8.3 #2) for "documents flow into the platform from sources and out to consumers." Renaming costs more than it returns; replacing the visualization pattern would violate §8.3 because no other pattern carries the source-→-platform-→-consumer argument as cleanly.

### 2.7 Role boundary — positively framed engagement section

**Self-challenged per §9.6 against the `digital-banking-wallets` "what we don't do" pattern.** The default pattern was rejected because:
1. Audience test (§9.5) failed: CTOs evaluating us don't need a list of negatives to grant trust; they need proof we can deliver.
2. Negative framing primes negative thinking and reads as small/cautious vendor — lead-killing risk.
3. The original "we do not" pattern would re-import regulator-speak (SEC 17a-4 / FINRA 4511 references) into a page the user explicitly wanted deregulated.
4. Document management has no banking-license-equivalent boundary risk that necessitates defensive disclosure.

**Replacement:** same component (`RoleBoundary.tsx` is content-agnostic and already shipped), same placement (position 8), positively framed.

- **Eyebrow:** "How we engage"
- **Heading:** *"You own the platform. We engineer it."*
- **Intro:** *"We are an engineering services firm. The platform we build or extend lives in your tenant, on your cloud account, or inside your product. We deliver code, configuration, and integration — and partner with your compliance team, IT, audit firm, and DMS / CRM / custodian / OMS vendors throughout."*
- **6 positive bullets:**
  - Code, configuration, and integration — built, tested, documented, and version-controlled in your repository.
  - Tenant ownership — the records vault sits in your Azure subscription, AWS account, M365 tenant, or SaaS product. We hand off the keys.
  - Compliance-aware engineering — your compliance team defines the retention matrix, policies, and audit program; we make the platform enforce them.
  - Collaborative delivery — bi-weekly demos to compliance, operations, and IT during the build; runbook walkthroughs and knowledge transfer at handover.
  - Audit-firm coordination — we provide the engineering artifacts (architecture, data flow, control descriptions) your SOC 2 / SOC 1 / ISO firm needs to attest against.
  - Vendor and platform partnership — we extend M365 / Purview, iManage, NetDocuments, M-Files, Box, and integrate with your custodian / CRM / OMS / lending vendors. We don't replace those relationships.
- **Collaboration line:** *"Built alongside your compliance team, supervisory principals, IT and security team, external auditors, and DMS / CRM / custodian platform vendors."*

### 2.8 Constitution deviations (recorded per §12.4 — small deviations, no amendment required)

1. **ARCHETYPE SHIFT** — was C (Regulated, CCO buyer), now B with C cherry-pick (Technical, operator-CTO + vendor-CTO mixed buyer). Same shape as `digital-banking-wallets` and `wealth-investment-management`.
2. **`complianceSpotlight` DROPPED** — no longer the page's load-bearing trust gate.
3. **`complianceDeepDive` DROPPED** — operator's CCO is a consumer, not the buyer. Compliance plumbing surfaces in role-boundary bullet 3 and FAQ Q3 only.
4. **`benefitsGrid` DROPPED** — absorbed into the three offering tiles + signature argument + integrations panel (mirrors `digital-banking-wallets`).
5. **`roleBoundary` ADDED but POSITIVELY FRAMED** — same component file as `digital-banking-wallets`, content inverted from "what we do not do" to "how we engage." Self-challenge protocol (§9.6) recorded above.
6. **`BooksAndRecordsControlPlane` SIGNATURE REFRAMED IN PLACE** — same file/registry entry preserved (§8.4), bands reframed.
7. **SECTION COUNT = 11** — overshoots Archetype B's 8–10 by 1; matches the accepted deviation in `wealth-investment-management.ts`.
8. **`imageFeatures` RETAINED** — existing photos at `/public/images/solutions/financial-document-management/` (hero.jpg, feature-1.jpg, feature-2.jpg) fit the deregulated positioning; alt text rewritten from "compliance team" framing to "records & operations professional."
9. **`relatedPages` SERVICES-ONLY** — per §10 default. Three cross-links: `/services/nlp-document-ai` (Tile 3 depth), `/services/application-modernization` (Tile 1 strangler-fig), `/services/security-compliance` (identity / zero-trust plumbing). Same-vertical peer (`wealth-investment-management`) intentionally NOT cross-linked — would narrow the page's dual-buyer (operator + vendor) reach.

---

## 3. Per-section content direction

### 3.1 Hero

- **Badge:** "Finance Solutions"
- **Headline (10 words / ~60 char):** *"Three offerings. One document platform. Built into your stack."*
   - Mirrors `digital-banking-wallets` headline pattern.
   - Carries: 3 offerings + integration depth + reads for both operator (your firm's stack) and vendor (your product's stack).
   - Vertical context lives in the badge, not the headline (per §9.8 + peer-page convention).
- **Subhead (24 words):** *"For financial firms modernizing document operations and SaaS vendors embedding records into their products — three engineering paths: DMS modernization, embedded document management, and intelligent document processing."*
- **Primary CTA:** "Book a Discovery Call" → `/contact`
- **Secondary CTA:** "See the document control plane" → `#signature`
- **Hero image:** reuse `/images/solutions/financial-document-management/hero.jpg`. Rewrite alt text: *"Records and operations professional reviewing documents on a tablet in a modern wealth management workspace."*
- **Hero metrics (4):**
   1. *Three offering paths* — Modernize · Embed · Capture
   2. *Build or extend* — cloud-native or DMS-platform-integrated
   3. *Integration-first* — CRM, custodian, OMS, lending, M365, eSign
   4. *Compliance-aware engineering* — alongside your compliance team and audit firm

### 3.2 metricsStrip (4 capability-framed metrics, greenfield-honest)

Mirrors hero metrics, expanded with descriptions:

1. **Three Offering Paths** — DMS Modernization · Embedded DMS for SaaS · Intelligent Document Processing
2. **Build or Extend** — Cloud-native records layer (Azure Blob immutable / S3 Object Lock / GCS Bucket Lock) OR extension of M365 + Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase
3. **Integration-First** — Salesforce FSC / Wealthbox / Redtail, Orion / Tamarac / Black Diamond, Schwab / Fidelity / Pershing, nCino / Encompass / Calyx, M365, DocuSign / Adobe Sign
4. **Compliance-Aware Engineering** — your compliance team defines the rules; we engineer the platform that enforces them

### 3.3 featureGrid — THREE OFFERING TILES

Tile content per §2.3 above. Each tile follows the `digital-banking-wallets` tile prose pattern: a "pain we engineer for" sentence + a "what we build" paragraph naming specific real platforms.

### 3.4 imageFeatures (two image+text blocks)

1. **Heading:** "Every document, retrievable in seconds, with the history of who did what."
   **Description:** "Pull any record and see its complete access history — who viewed, who shared, who held — without an emergency search across SharePoint, the CRM, and the network share."
   **Image:** reuse `/images/solutions/financial-document-management/feature-1.jpg`. Alt: "Financial-services professional reviewing records and access history at a workstation."

2. **Heading:** "One records platform across CRM, custodian, OMS, lending, and M365."
   **Description:** "Account opening packets, advisory agreements, trade confirms, lending files, and supervisory communications in one classified vault — not fragmented across five systems."
   **Image:** reuse `/images/solutions/financial-document-management/feature-2.jpg`. Alt: "Wealth management operations and IT team reviewing document workflows together at a conference table."

### 3.5 signature

Per §2.6 above. Component file `BooksAndRecordsControlPlane.tsx` is reframed in place. No registry change.

### 3.6 integrationsPanel — grouped by 8 categories

Approximately 12 integration cards across 8 categories (some cards bundle multiple vendors into a single entry, e.g., "Schwab / Fidelity / Pershing" as one custodian card; "Orion / Tamarac / Black Diamond" as one portfolio card):

| Category | Cards |
|---|---|
| **DMS Platform** *(operator extends)* | M365 + Microsoft Purview · iManage Work · NetDocuments · M-Files · Box for Financial Services · Laserfiche · Hyland OnBase |
| **CRM** | Salesforce Financial Services Cloud · Wealthbox · Redtail · Practifi |
| **Portfolio** | Orion · Tamarac · Black Diamond · Addepar · eMoney |
| **Custodian** | Schwab · Fidelity · Pershing |
| **Lending Origination** | nCino · Encompass · Calyx |
| **eSignature** | DocuSign · Adobe Sign |
| **Storage Substrate** *(vendor / cloud-native)* | Azure Blob (immutable tier) · AWS S3 (Object Lock) · GCP Cloud Storage (Bucket Lock) |
| **Document AI** *(both tracks)* | Azure AI Document Intelligence · AWS Textract · GCP Document AI |

For data-shape efficiency, integrations consolidate into ~12 entries (some categories combine multiple vendors into one card, e.g., "Schwab / Fidelity / Pershing" as one custodian card; "Orion / Tamarac / Black Diamond" as one portfolio card). Each entry has `name`, `category`, `connectionMethod`, `capabilities[]`.

**Dropped from current page:**
- Verafin / NICE Actimize (regulator-coded category, weak fit for deregulated read)
- No communications-archive vendors named (Smarsh / Global Relay / Mimecast all skip — M365 Graph integration covers email/Teams bridging without the regulator-coded framing)

### 3.7 processTimeline (5 phases, 18–30 weeks total)

| # | Phase | Duration | Key deliverable |
|---|---|---|---|
| 1 | **Discovery & Document Landscape Mapping** — inventory document types, source systems, retention matrix (provided by buyer's compliance team), integration estate; decide build vs. extend per document type | 2–3 weeks | Document taxonomy, retention rule matrix as configured by buyer's compliance team, integration inventory, build-vs-extend decision per document type, prioritized scope |
| 2 | **Architecture, Classification Schema & Integration Design** — finalize storage substrate, classification taxonomy, retention rule encoding, hold framework, audit log spec, integration contracts | 1–2 weeks | Storage substrate decision per document type, classification schema, retention rule spec, hold framework, integration contracts, audit-export runbook (where applicable) |
| 3 | **Build, Integrate & Embed** — platform development, source integrations, document AI pipeline, retention/hold/audit modules, multi-tenant APIs (vendor) or single-tenant deployment (operator). Bi-weekly demos. | 10–16 weeks | Functional platform in staging, integrations verified, document AI pipeline tested, audit log seal-tested, CI/CD pipeline with separation-of-duties controls |
| 4 | **Migration & Reconciliation** — extract, classify, migrate from prior DMS / SharePoint / network shares with row-level reconciliation and rollback plan | 3–6 weeks | Migrated records with reconciliation sign-off, retention validation report, source-of-truth reconciliation, rollback plan |
| 5 | **UAT, Training & Phased Go-Live** — UAT with operations / compliance / IT, role-based training, runbook handover, phased rollout, 30-day hypercare | 2–3 weeks | Production deployment, role-based training materials, runbook handover, 30-day hypercare SLA |

### 3.8 roleBoundary

Per §2.7 above. Reuses existing `RoleBoundary.tsx` component shipped from digital-banking-wallets.

### 3.9 relatedPages (3 services-only cross-links)

1. **`/services/nlp-document-ai`** *(SERVICE)*
   "Classification is the gate that keeps the records platform usable. Our document-AI engagement designs the OCR, extraction, and classification pipeline that tags KYC files, advisory agreements, trade confirms, loan disclosures, and supervisory communications correctly at ingestion — so the retention engine, search, and supervisory review have the right metadata to work with."

2. **`/services/application-modernization`** *(SERVICE)*
   "Most operator engagements start by escaping SharePoint sprawl, network shares, or a legacy DMS that doesn't integrate. Our modernization engagement runs the strangler-fig migration that retires the old store while the new records platform takes over — without an exam-day surprise in the middle."

3. **`/services/security-compliance`** *(SERVICE)*
   "A records platform is one layer of the security stack. Our security & compliance engagement covers identity, secrets, and Zero-Trust controls across every system your team and your customers rely on — so the records platform sits inside a hardened identity and access perimeter, not next to one."

### 3.10 FAQ (6 questions)

1. **Do you build from scratch, or extend the DMS we already run?** — Both. Per-engagement decision. Operator engagements typically integrate-and-extend (M365/Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase). Vendor engagements typically build cloud-native on Azure Blob immutable / S3 Object Lock / GCS Bucket Lock.

2. **We're a SaaS vendor embedding records in our product. How does the embedded option work?** — Cloud-native records layer inside your codebase, on top of immutable cloud storage. Multi-tenant retention engine, hold-and-release APIs, audit trail export, identity-aware document services. Operates as a module of your product, not a separate platform your customer has to license.

3. **How does the platform handle complex retention rules across multiple regulations and jurisdictions?** — Retention rules configured as a matrix during discovery — each document type mapped to its applicable retention period. Your compliance team defines the matrix (which regulations apply where — SEC 17a-4, FINRA 4511, IRS, BSA/AML, SOX, GLBA, NYDFS, state, or whatever your firm's program calls for); we engineer the engine that enforces it. Where multiple periods apply, the longest required governs.

4. **How does the platform integrate with our CRM, custodian feeds, lending platform, and M365?** — Integration patterns by source: REST APIs and platform events for CRMs (Salesforce FSC, Wealthbox, Redtail, Practifi); REST or scheduled file extracts for portfolio platforms (Orion, Tamarac, Black Diamond, Addepar, eMoney); SFTP and partner feeds for custodians (Schwab, Fidelity, Pershing); REST and webhooks for lending (nCino, Encompass, Calyx); Microsoft Graph for M365 / SharePoint; webhooks for eSignature (DocuSign, Adobe Sign). The source system stays the system of record for the originating workflow; the records platform becomes the system of record for the document and its lifecycle.

5. **What does the audit log capture, and how does legal hold scope to a single matter or client?** — The audit log captures every record access, download, share, modification, hold action, and destruction with timestamp, actor identity, IP, source system, and action type — protected against modification and exportable. Legal hold is scoped through the admin console by custodian, account, matter, date range, or keyword; records matching the scope are frozen until formally lifted, and records outside it continue through their normal lifecycle without disruption.

6. **What does an engagement typically cost and how long does it take?** — A typical operator engagement (DMS Modernization) or vendor engagement (Embedded DMS for SaaS) runs 18–30 weeks from discovery to first-line production, depending on document landscape complexity, integration count, build vs. extend decisions, and migration volume. Phased delivery — storage substrate, retention engine, audit log, and integrations come online before the full platform. Discovery produces a realistic cost and timeline assessment grounded in your specific landscape — not a generic brochure number.

### 3.11 ctaBlock

- **Title:** *"Ready to modernize, embed, or integrate document management for your stack?"*
- **Description:** *"Book a free 30-minute discovery call. We will review your document landscape, source systems, integration estate, retention requirements as your compliance team defines them, and audit-day exposure — then outline a realistic build-vs-extend scope and timeline for your engagement."*
- **Primary CTA:** "Book Discovery Call" → `/contact`
- **Secondary CTA:** "See the document control plane" → `#signature`

---

## 4. Data file changes — `src/data/solutions/financial-document-management.ts`

| Field | Change |
|---|---|
| `title` | Rewrite: "Document Management Engineering for Financial Firms & Financial SaaS Vendors" |
| `shortDescription` | Rewrite: dual-buyer framing, three offerings, build-or-extend honesty. |
| `metaTitle` | Rewrite: *"Document Management for Financial Services \| Modernize, Embed, Integrate"* (drops SEC/FINRA from title) |
| `metaDescription` | Rewrite: dual-buyer framing, three engineering paths, build-or-extend posture. |
| `keywords[]` | Rewrite: drop "SEC 17a-4 compliant document management", "FINRA records retention", "broker-dealer recordkeeping system", "BSA AML document retention", "SOX document retention software", "GLBA compliant document storage", "audit-trail electronic recordkeeping", "fiduciary records management software". Add: "document management engineering financial services", "embedded document management financial SaaS", "iManage integration financial services", "NetDocuments financial services", "M365 Purview financial services", "intelligent document processing financial services", "document AI financial services", "DMS modernization financial firms", "cloud-native records platform". |
| `breadcrumb` | Update label: "Document Management" (drops "Financial" prefix — vertical lives in breadcrumb context, not the leaf label). |
| `composition` | Update to: `['hero', 'metricsStrip', 'featureGrid', 'imageFeatures', 'signature', 'integrationsPanel', 'processTimeline', 'roleBoundary', 'relatedPages', 'faq', 'ctaBlock']` (drops `complianceSpotlight`, `complianceDeepDive`, `benefitsGrid`; adds `roleBoundary`). |
| `industry` | Keep `'fintech'`. |
| `signatureComponent` | Keep `'BooksAndRecordsControlPlane'` (reframed in place, not renamed). |
| `hero` | Rewrite per §3.1. |
| `metricsStrip` | Rewrite per §3.2 (4 capability-framed metrics). |
| `features` | Replace 6 capability tiles with 3 offering tiles per §3.3. |
| `benefits` | DELETE (`benefitsGrid` dropped from composition). |
| `processSteps` | Rewrite per §3.7 (5 phases, deregulated language). |
| `capabilities[]` | Rewrite per §5c above (11 capability-forward entries). |
| `technologies[]` | Rewrite per §5b above (multi-cloud Azure/AWS/GCP). |
| `integrations[]` | Rewrite per §3.6 (~12 grouped entries). |
| `complianceSpotlight` | DELETE. |
| `complianceDetail` | DELETE. |
| `imageFeatures` | Rewrite per §3.4 (alt text deregulated). |
| `relatedPages` | Rewrite descriptions per §3.9 (3 services-only). |
| `faqs` | Rewrite per §3.10 (6 dual-buyer questions). |
| `cta` | Rewrite per §3.11. |
| `_unverified` | Reset list. New entries:<br>- `hero.metrics[*]` — all four capability-framed (Three offering paths, Build or extend, Integration-first, Compliance-aware). Greenfield-safe.<br>- `metricsStrip[*]` — capability-framed.<br>- `integrations[*].capabilities` — confirm framing for partner-API-gated vendors (Schwab/Fidelity/Pershing direct feeds require partnership credentials before they can be built).<br>- `faq[5]` — 18–30 weeks engagement range; confirm against actual planned engagement structure.<br>- `BooksAndRecordsControlPlane` reframe — band labels and tile content are capability descriptions; greenfield-safe. |

---

## 5. Component changes — `BooksAndRecordsControlPlane.tsx`

**Same file path. Same registry entry. No rename.**

Changes (in-place edit):
- **Doc-comment block** at file top — rewrite to describe operator-and-vendor read with new band content per §2.6.
- **`SOURCE_INPUTS`** array — rewrite 4 input tiles per §2.6 Band 1.
- **`CONTROL_STAGES`** array — rewrite 6 stage labels per §2.6 Band 2.
- **`OUTPUTS`** array — rewrite 4 output tiles per §2.6 Band 3.
- **Eyebrow / heading / intro paragraph** — replace with the new text per §2.6.
- **Connector labels** (if any) — review; reframe if they reference "examiner production" or similar regulator-speak.

**No skeleton change.** Three-band layout, mobile collapse rules, theming, accessibility — all preserved.

---

## 6. RoleBoundary reuse — `components/signature/RoleBoundary.tsx`

**No component change.** Already shipped from digital-banking-wallets with a content-agnostic prop shape (`eyebrow?`, `heading`, `intro`, `bullets[]`, `collaboration`, `tone?`).

The financial-document-management page passes positively-framed content per §2.7 above. Add to `SIGNATURE_COMPONENTS` registry in `app/solutions/[slug]/page.tsx` if not already wired.

The dispatch in `SolutionDetailTemplate.tsx` may need to render `roleBoundary` — verify whether the template already handles it from the digital-banking-wallets implementation.

---

## 7. Audit checklist (the user's three constraints)

| Constraint | Verification |
|---|---|
| **Not regulatory** | No regulator-defense framing in hero/subhead/title. Regulator names appear in: (a) FAQ Q3 answer body as examples, (b) role-boundary bullet 3 as plumbing reference, (c) Tile 1 prose where "your compliance team's matrix" frames the regulator names as inputs not outputs. No "exam-day," "books-and-records," "WORM-or-audit-trail" language used as primary marketing. |
| **Practically feasible** | Every named platform has a public API. Every cloud feature (Azure Blob immutable, S3 Object Lock, GCS Bucket Lock) is a real production-grade feature. Every named DMS extension pattern (M365/Purview, iManage Work, NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase) is an integration pattern an engineering services firm executes routinely. 18–30 week timeline matches industry norm for mid-market DMS engagements. |
| **Industry-proven** | All 7 DMS platforms named are real, current market leaders in financial-services document management. All 4 cloud substrates named are real Azure/AWS/GCP features. All CRMs / portfolio / custodian / lending vendors named are real, current products. No invented vendors, no unverifiable patterns. |

---

## 8. Implementation order

1. **Data file** — full rewrite of `src/data/solutions/financial-document-management.ts` per §4 above. Single biggest surface area; fastest to verify.
2. **Signature component** — in-place reframe of `BooksAndRecordsControlPlane.tsx` per §5.
3. **Template + registry** — verify `SolutionDetailTemplate.tsx` dispatches `roleBoundary` correctly (check digital-banking-wallets implementation; may already be wired). If not, add the dispatch.
4. **Image alt text** — update if any inline alt text is in components rather than data.
5. **Visual smoke test** — open the page in dev mode at 375 / 768 / 1280 widths; verify rhythm (no adjacent darks, two darks total, accent CTA). Flip `data-theme` to verify token compliance.
6. **Audit pass** — re-scan rendered page for regulator-speak that snuck in via interpolation; verify all 7 audit findings from the brainstorming pass are reflected.

---

## 9. Notes / deferred decisions

- **Same-vertical peer cross-link** (`wealth-investment-management`) — intentionally NOT cross-linked in this rewrite. Rationale: the page's dual-buyer reach (operator + vendor) is already broader than the wealth peer's wirehouse/RIA scope. Re-evaluate if vendor engagements drop below 30% of pipeline.
- **Verafin / NICE Actimize** — dropped from integrations panel under deregulated framing. Re-add if the AML-tech vendor track surfaces as a meaningful slice of vendor buyer demand.
- **Smarsh / Global Relay / Mimecast** (communications archiving) — explicitly skipped under deregulated framing. M365 Graph integration covers email/Teams bridging without the regulator-coded framing.
- **Open-source document AI** — Tile 3 names "Tesseract, layout transformers" generically. If the practice ships a specific reference implementation (e.g., DocLayNet + Donut + a fine-tuned classifier), update Tile 3 prose with the actual stack name once that ships.
