# Plan: Digital Banking & Wallets — Content & Dependency Rewrite

**Created:** 2026-04-29
**Status:** Design approved by user. Ready for implementation plan (next step: superpowers:writing-plans).
**Source of truth (subject matter):** `src/subject-matter-expert/digital-banking-wallets-context.md`
**Design constitution (structure):** `docs/design-system/services-solutions-constitution.md`

---

## 1. Overview

Rewrite `/solutions/digital-banking-wallets` end-to-end to reflect a fundamental positioning pivot:

- **Old positioning:** AIvanceWorks builds an integrated digital banking platform for a community bank or credit union (CDO/SVP buyer). Bank-as-buyer framing, "BSA/AML compliant by design," "exam-ready" language.
- **New positioning:** AIvanceWorks is an **engineering services firm** that integrates the BaaS + sponsor-bank + core + KYC + AML + card-issuer ecosystem on behalf of operators (vertical-SaaS / non-financial-brand CTOs and Heads of Embedded Finance). We do not hold licenses, do not act as sponsor bank, do not issue cards as principal, do not hold customer funds.

Page slug, URL, nav placement, and page-template archetype change minimally. The data file, the signature component's content/labels (not skeleton), and one new single-use component are the primary code surfaces touched.

---

## 2. Locked design decisions

### 2.1 Page structure

**One page, three offerings as tiles inside.** Not three sibling pages. Honors the SME's "section with three offerings" framing while staying inside the constitution's existing solution-template structure. Slug stays `digital-banking-wallets`.

### 2.2 Buyer

**Mixed primary buyer:** vertical-SaaS / marketplace / non-financial brand embedding finance via BaaS, written for the joint **CTO + Head-of-Embedded-Finance** read.

- Both roles inside the same buyer company.
- Identical low regulatory exposure for AIvanceWorks (the buyer is not a regulated entity; the BaaS provider + sponsor bank carry the regulatory weight).
- CTO voice on deep technical sections (signature, integrations panel, FAQ).
- LOB voice on offerings, verticals, value props.

**De-prioritized buyers** (mentioned in offerings/verticals but not in hero):
- Founder/CEO at fintech operators (Chime/Mercury/Brex pattern) — medium regulatory exposure for us; mentioned in Neobank Platform offering and FAQ.
- Chief Digital Officer at community bank or credit union — mentioned in Neobank Platform offering only; FIS/Fiserv/Jack Henry moved to a smaller subgroup in the integrations panel.

### 2.3 Archetype

**Archetype B (Technical service)** with one cherry-pick from C: a `roleBoundary` section. Was Archetype C (Regulated solution) under old positioning; the buyer pivot away from a regulated entity makes B the right fit.

### 2.4 Composition (10 sections)

```
1.  hero              (dark)
2.  metricsStrip      (light)
3.  featureGrid       (warm)    — THREE OFFERINGS
4.  signature         (dark)    — DigitalBankingTransactionFlow reframed
5.  integrationsPanel (warm)    — full operator-stack ecosystem
6.  processTimeline   (light)
7.  roleBoundary      (warm)    — NEW: "Where AIvanceWorks fits"
8.  relatedPages      (light)
9.  faq               (warm)
10. ctaBlock          (accent)
```

**Constitution audit:**
- §6.1 anchors: hero=1, faq second-to-last, CTA last ✓
- §6.3 density: 10 sections — at the upper bound, inside §6.4 Archetype B (8–10) ✓
- §4.2 rhythm: hero=dark, signature=dark, no adjacent darks, alternating L/W after signature, CTA=accent ✓
- §10 relatedPages: present, services-only ✓

### 2.5 Signature

**Reframe `DigitalBankingTransactionFlow.tsx` in place** — keep filename, registry entry, three-band JSX skeleton. Rewrite:
- Doc-comment block at file top (~30 lines)
- Three band labels and contents
- Eyebrow, heading, intro paragraph, connector labels

**New three bands:**
- **Top:** *Your operator product surface* — Mobile app, Web, Embedded SDK, Wallet, Partner channels
- **Middle:** *AIvanceWorks integration layer* — Identity orchestration, Funding flows, Transaction routing, AML/monitoring routing, Reconciliation, Examiner export
- **Bottom:** *Ecosystem partners* — Sponsor bank, BaaS provider, Core platform, KYC vendor, AML vendor, Card issuer

**New emotional argument:** *"You ship one product. We integrate the stack underneath it."*

**Why reframe vs. rename or replace:** signatures are single-use per §8.4 (only one consumer: the registry). Doc block at file top carries the meaning, not the filename. Renaming costs more than it returns. Replacing with a new visualization pattern violates §8.3 — the three-band hierarchical IS the right pattern for "we sit between your product and the vendor stack."

### 2.6 Role boundary (new section)

**Heading:** *"Where AIvanceWorks fits"* (positive scope-clarification framing — not "What we don't do," which reads defensive).

**Structure:**
- Heading
- Short intro (~2 sentences) on what we are: an engineering team for licensed institutions and embedded finance operators.
- 5–7 plain bullets on what we are NOT (per SME §8):
  - We do not hold or apply for banking, money-transmitter, or EMI licenses.
  - We do not act as sponsor bank, BaaS provider, card issuer, or processor.
  - We do not provide regulatory or legal advice.
  - We do not own the customer relationship or hold customer funds.
  - We do not perform underwriting on a balance-sheet basis.
  - We do not provide audit, attestation, or certification (PCI-DSS, SOC 2, HITRUST). We engineer to those standards alongside the client's audit firm.
- Closing line on collaboration: *"We work alongside your compliance officers, sponsor bank, BaaS provider, and external auditors."*

**Tone:** warm. Visual: simple — no icon grid, no chart. Confidence is the design move.

**Placement:** late-page (position 7 of 10, after `processTimeline`, before `relatedPages`). Honest disclosure to a buyer who's already favorably disposed reads as confidence; the same content placed early reads as defensive disclaimer.

---

## 3. Per-section content direction

### Hero
- **Headline (≤12 words / 70 char per §9.8):** Pitches the three offerings + integration-first stance.
- **Subhead (≤25 words):** Names buyer ("vertical SaaS, marketplaces, and non-financial brands embedding finance") and ecosystem ("BaaS, sponsor banks, KYC/AML vendors, card-issuing platforms").
- **Hero metrics (4):** Three offerings · Ecosystem-fluent · Healthcare + vertical-SaaS · Integration-first not greenfield
- **Hero photo:** Reuse existing `public/images/solutions/digital-banking-wallets/hero.jpg`. Rewrite alt text to reflect the operator/CTO context.
- **No defensive language in hero.** Role-boundary content lives in section 7, not here.

### MetricsStrip (4 capability-framed metrics)
- *Operator-Stack Integration* — BaaS + core + KYC + AML + card-issuer orchestration
- *Healthcare + Vertical-SaaS Fluency* — primary verticals
- *Compliance-Aware Engineering* — alongside your compliance team and BaaS provider
- *Speed via Proven Cores* — Mambu / Thought Machine / Finxact / sdk.finance

Zero outcome percentages. All capability-framed per §9.5 audience test (greenfield-honest).

### FeatureGrid — THREE OFFERINGS
Same icon weight, same description length (~100 words each), consistent rhythm per SME §10:

**Tile 1 — Digital Wallet Platform Development**
- *What:* closed-loop, semi-closed, open-loop, and embedded wallet variants
- *Who:* healthcare patient-pay, payroll, gig platforms, marketplaces, retail loyalty
- *What we deliver:* identity-verified onboarding, P2P, top-ups, bill pay, QR/NFC, mobile-pay tokenization (Apple Pay / Google Pay), virtual card issuance, multi-currency where applicable, operator back-office (compliance / support / finance / fraud workspaces)
- *Proof line:* lowest regulatory friction of the three; closed-loop + semi-closed wallets are the easiest US startup-feasible entry point.

**Tile 2 — Neobank Platform Engineering**
- *What:* we integrate sponsor bank + BaaS + core + KYC + card-issuing into a coherent operator product. We do not build a bank from scratch.
- *Who:* fintech operators, vertical-SaaS adding banking, regional FI / community-bank / credit-union modernization
- *What we deliver:* operator front-end, product logic, brand layer, orchestration of the vendor stack
- *Proof line:* "On a proven core" — Mambu, Thought Machine, Finxact, sdk.finance, Temenos.

**Tile 3 — Embedded Finance & BaaS Integration**
- *What:* API orchestration between the brand's product, the BaaS provider, and the sponsor bank. Highest-growth segment of fintech.
- *Who:* non-financial brands adding accounts/cards/payments/lending without becoming a bank (Toast Capital / Shopify Balance pattern)
- *What we deliver:* ledger design and reconciliation between platform-side truth and partner-bank truth; KYC/KYB orchestration across multiple vendors; card issuance flows; dispute and chargeback handling; 1099 and tax reporting; program-manager tooling
- *Proof line:* the implementation half of "I want to add financial features without becoming a regulated entity."

### IntegrationsPanel — full operator-stack ecosystem
Voiced **"we build integrations with…"** (never "we have shipped with…" — greenfield-honest per §9.5).

| Category | Vendors |
|---|---|
| Core banking platforms (operator-stack) | Mambu, Thought Machine, Finxact, sdk.finance, Temenos |
| Core banking (community-bank modernization subgroup) | FIS, Fiserv, Jack Henry |
| BaaS providers (US) | Unit, Treasury Prime, Synctera, Column, Stripe |
| Card issuing | Marqeta, Galileo, Lithic, Stripe Issuing |
| Identity & KYC | Alloy, Persona, Socure, Sumsub, Trulioo |
| AML & transaction monitoring | Hummingbird, Unit21, Sardine, Feedzai |
| Payment rails | ACH, FedNow, RTP, Visa Direct, Mastercard Send, Wires (Fedwire / CHIPS) |

**Sponsor banks** (Lead Bank, Cross River, Sutton Bank, Pacific West Bank) appear in **prose only** (FAQ + role-boundary section). They are a contractual operator relationship, not a technical integration.

Per SME §9: framed as ecosystem we work *with*, not formal partnerships. No partner badges. No certified-partner claims.

### ProcessTimeline (5 phases)
Operator-stack-voiced (not bank-internal):
1. Discovery & Stack Mapping (2–3 weeks)
2. Architecture & Vendor Selection (3–4 weeks)
3. Core Platform Development (12–18 weeks)
4. Integration & Compliance Validation (4–6 weeks)
5. Phased Launch & Hypercare (2–3 weeks)

Each phase has duration + deliverable per `ProcessStepData` schema. Durations marked in `_unverified` for confirmation against actual planned delivery cadence.

### RoleBoundary (new — see §2.6 above)

### RelatedPages (services-only, per §10)
1. **Product Discovery** — *"Planning to embed finance? A discovery sprint maps your BaaS, sponsor-bank, and KYC choices before a line of code is written."*
2. **MVP Development** — *"Want to ship one feature first? Our 12-week MVP process delivers a wallet, account opening, or P2P module while the broader platform is planned."*
3. **Security & Compliance** — *"Embedded finance demands SDLC discipline. Our security practice builds the IAM, encryption, and audit controls your BaaS provider and sponsor bank will require."*

**No same-vertical peer link** to Financial Document Management or Wealth & Investment Management — buyer personas don't overlap (per §10 v2.1 exception's strict criterion).

### FAQ (6 questions, joint CTO + LOB voice)
Each answer 50–120 words per §9.8, leading with direct answer:
1. *What's the difference between embedded finance, a wallet, and a neobank — and which do we need?*
2. *Do we need our own banking license?* — Sponsor-bank framing.
3. *How do you integrate with a BaaS provider like Unit / Treasury Prime / Synctera / Column / Stripe?*
4. *How do you handle KYC, AML, and reconciliation across our internal ledger and the partner-bank ledger?*
5. *Can we start with one feature and expand later?* — yes; configuration-first architecture.
6. *What does an embedded-finance engagement typically cost and how long does it take?* — qualitative framing.

### CTABlock
- **Title:** *"Ready to add embedded finance without becoming a bank?"*
- **Description:** *"Book a free 30-minute discovery call. We'll review your BaaS landscape, sponsor-bank options, and integration scope, then give you a realistic assessment of what's buildable and what we'd recommend."*
- Primary CTA: Book Discovery Call → /contact
- Secondary CTA: See the integration stack → #signature

---

## 4. Files to Create / Modify / Delete

### Modify
- `aivanceworks-website/src/data/solutions/digital-banking-wallets.ts` — full rewrite of every field. Update comment block at top to record all deviations (see §5 below).
- `aivanceworks-website/src/components/signature/DigitalBankingTransactionFlow.tsx` — reframe in place: rewrite doc-comment block, three band labels, tile content, eyebrow/heading/intro/connector labels. JSX skeleton unchanged.
- `aivanceworks-website/src/types/pages.ts` — add `'roleBoundary'` to `SectionKey` union; add `RoleBoundaryData` interface; add optional `roleBoundary?: RoleBoundaryData` to `BasePageData`.
- `aivanceworks-website/src/components/signature/index.ts` — add export for `RoleBoundary`.
- `aivanceworks-website/src/components/templates/SolutionDetailTemplate.tsx` (or wherever section dispatch lives) — add case for `'roleBoundary'`.

### Create
- `aivanceworks-website/src/components/signature/RoleBoundary.tsx` — new single-use component. Renders `<Section tone="warm">` with heading + intro + bullet list + collaboration footer. Token-compliant (§3). Documented mobile layout in file header per §10.7.

### Delete (recommended; user can elect to keep on disk)
- `aivanceworks-website/public/images/solutions/digital-banking-wallets/feature-1.jpg` — orphaned after `imageFeatures` is dropped from composition. Recommended delete for hygiene; orphaned assets in `public/` get served by the static handler and create a small SEO surface. Keeping them on disk is harmless if user prefers.
- `aivanceworks-website/public/images/solutions/digital-banking-wallets/feature-2.jpg` — same.

### Keep unchanged
- `aivanceworks-website/public/images/solutions/digital-banking-wallets/hero.jpg` — used in hero card per §11.5; alt text rewritten in data file.
- `aivanceworks-website/src/lib/constants.ts` — Finance section nav entry, label, and href all unchanged.
- `aivanceworks-website/src/lib/content.ts` — `SOLUTION_PAGE_MODULES['digital-banking-wallets']` registration unchanged.
- `aivanceworks-website/src/app/solutions/[slug]/page.tsx` — `SIGNATURE_COMPONENTS['DigitalBankingTransactionFlow']` registration unchanged (component name preserved).

---

## 5. Constitution deviations to record (in `digital-banking-wallets.ts` comment block)

Per §12.4, these are **small deviations** — recorded in the data file, no constitution edit required.

1. **Archetype shift** — was C (Regulated, bank CDO), now B with C cherry-pick (Technical, vertical-SaaS CTO + LOB Head of Embedded Finance). Rationale: positioning pivot per SME — engineering team for embedded finance operators, not a bank vendor.
2. **`imageFeatures` dropped** — deviates from §11.5 two-track imagery default for solution pages. Rationale: data-heavy operator-stack page; mid-page photo strip would dilute the integration-competence argument. Hero photo retained.
3. **`complianceDeepDive` dropped** — was present on this page and on sibling regulated solutions (financial-document-management, wealth-investment-management). Rationale: new buyer is not a regulated entity; their BaaS provider + sponsor bank carry the audit posture.
4. **`benefitsGrid` dropped** — benefits absorbed into the three offering tiles + signature + integrations panel. Rationale: separate benefits section becomes redundant for this CTO+LOB read.
5. **`complianceSpotlight` dropped** — folded into `roleBoundary`'s "how we work alongside your compliance team and BaaS provider" framing. Rationale: compliance is not the load-bearing differentiator on this page; integration competence is (per SME value-prop ranking #1).
6. **`roleBoundary` added** — new single-use section (component in `components/signature/`). Rationale: under the new positioning, explicit scope-and-role clarification is a load-bearing trust signal that no existing component carries cleanly.

---

## 6. Out of scope (explicitly NOT doing)

- No nav changes — `/solutions/digital-banking-wallets` slug + Finance section heading stay.
- No new sibling solution pages.
- No constitution amendment (all deviations are small per §12.4 and recorded in the data file).
- No image acquisition — reuse existing `hero.jpg`, delete two unused `feature-*.jpg`.
- Sponsor banks not added to `IntegrationsPanel` (prose only).
- No AI/Foundry content — Digital Banking & Wallets is not an AI page.
- No changes to sibling Finance solutions (`financial-document-management`, `wealth-investment-management`).

---

## 7. Content integrity & verification gates

Per §9, all of the following must be honored in implementation:

- Every `_unverified` entry follows the `field — claim — reason` structure.
- No fabricated outcome statistics — all metrics capability-framed.
- All vendor mentions voiced as "we build integrations with…" (never "shipped with…").
- No partner-badge or certified-partner claims unless leadership confirms (SME §9).
- Audience test (§9.5) applied to every metric, feature description, FAQ, integration mention.

Pre-merge gate (§9.7): `_unverified` list cleared by human reviewer or explicitly accepted.

---

## 8. Notes for implementation

- Read the full SME doc (`src/subject-matter-expert/digital-banking-wallets-context.md`) — it's authoritative for terminology, vendor-list accuracy, role-boundary phrasing, and forbidden language. Do not invent vendor names; do not use forbidden phrases ("we offer banking services," "we provide accounts/cards/loans," "bank-grade" without qualification, regulatory-outcome promises, statistics without sources).
- Read `docs/design-system/services-solutions-constitution.md` end-to-end before implementation if context-fresh. Especially §3 (theming), §4 (rhythm), §6 (archetypes), §7 (data schema), §9 (content integrity), §10 (responsiveness), §11 (imagery).
- Reference the existing rewrite of `digital-banking-wallets.ts` for field-by-field schema. The new file uses the same fields except the deletions/additions documented in §5 above.
- Reference `financial-document-management.ts` and `wealth-investment-management.ts` only for STRUCTURE precedent (data-file shape, comment-block style). Do NOT carry over their bank-CDO copy or their 13-section composition.
- Sibling Finance solutions (Financial Document Management, Wealth & Investment Management) will continue to use Archetype C with regulated-buyer voice. They are not affected by this rewrite.
