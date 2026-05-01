# Plan: Wealth & Investment Management — Repositioning Rewrite

**Created:** 2026-04-29
**Status:** Approved by user. Ready for implementation.
**Source of truth (subject matter):** Russell transcript (in-conversation, 2026-04-29) — see §2 below
**Design constitution (structure):** `docs/design-system/services-solutions-constitution.md`

---

## 1. Overview

Rewrite `/solutions/wealth-investment-management` end-to-end. Fundamental positioning pivot away from regulator-defense framing toward an advisor-productivity / bank-core-integration platform sold to wealth divisions, RIAs, broker-dealers, and family offices.

- **Old positioning:** "Survives an SEC exam" — a Reg BI / 17a-4 / books-and-records evidence platform sold to a CCO/COO at an SEC-registered RIA. Archetype C (Regulated). Heavy compliance sections.
- **New positioning:** "Every asset, every entity, one advisor workstation" — a holistic-client platform that sits inside a bank's wealth division (or a large RIA / broker-dealer / family office), interconnected with the firm's core banking, custodian, CRM, and planning stack. Archetype B (Technical) with light fiduciary-process discipline (suitability/KYC) as operational features, not regulatory exhibits.

This is **not a regulated solution.** Suitability and KYC documentation are kept as advisor-file-completeness features per the SME ("not regulated like document management — but the advisor needs the file complete"). Books-and-records / WORM framing is dropped from the central thesis.

Slug, URL, nav placement, and `industry: 'finance'` field stay unchanged. The data file, the signature component, the signature registry, and the signature index are the code surfaces touched.

---

## 2. SME source — Russell transcript (2026-04-29)

Russell described the platform as the system stockbrokers and financial advisors use with their clients (his mom is a financial advisor; her clients pay $50–100k/year + commission on stock-market activity).

Key transcript points:

- *"It has to be something that can organize basically all of your stock holdings, your current properties, all of your assets."*
- *"Kind of like just a financial advisement platform like on a very professional level."*
- *"The biggest contract would be like, yes, probably $50 million to create the platform."*
- *"It's not a trading platform. It's for management."*
- *"She would make you do a budget sheet and then she would have you invest in some companies."*
- *"All the information in your profile or your file, it's all on that platform."*
- *"When you come to meet with them, they open your profile on that platform and it shows what homes you own, how much value you have in material ownership and liquid cash in the bank."*
- *"They're trying to get you to invest more and more and more."*
- *"Yes, they manually input all their assets."*
- *"It needs to be connected with the main server and main system of the bank. It can't be like its own thing. It has to be interconnected, which means you'd have to work with an IT team and they would tell you exactly how they want it done."*

Russell's mom-style advisor → mass-affluent / household clients. The $50M tier-1 deal → wealth divisions serving everything from mass-affluent through institutional.

---

## 3. Locked decisions

### 3.1 Buyer (firm-level)

**Primary:** Head of Wealth Management / CTO of Wealth Division at a tier-1 wirehouse, regional bank wealth division, private bank, or large broker-dealer. Russell's "main server of the bank" language fits this buyer most directly.

**Also addressable** (broaden language to include — per user pushback that "household" was too narrow):
- Independent broker-dealers (LPL, Raymond James, Cetera-style)
- Large RIAs ($1B+ AUM, hybrid firms)
- Multi-family offices
- Trust companies
- Bank trust departments

### 3.2 End-client (the "profile" the advisor opens)

The unified-profile feature must accommodate ALL of the following client types — copy and signature visualization explicitly call them out:

- Individuals (mass affluent)
- Households (HNW couples, families)
- Trusts (revocable, irrevocable, family trusts)
- Family offices (multi-generational, multi-entity)
- Institutional accounts (foundations, endowments, corporate retirement plans)
- Business owners (mixed personal + business wealth)

Industry-canonical term is **"client"** with "household" as a *grouping* relationship, not the universe. All copy uses "client" as the primary noun. "Household" appears only as a sub-relationship (e.g., householding for consolidated reporting).

**Out of scope:** trading-desk / hedge-fund / asset-manager OMS use cases (Aladdin-portfolio-manager territory). "Institutional" here means foundations / endowments / corporate retirement *advised by the same firm's wealth practice*.

### 3.3 Archetype

**Archetype B (Technical solution).** The bank's IT team dictates integration; the buyer's primary concern is execution quality and integration depth into their existing core banking, custodian, and planning stack. Was Archetype C (Regulated). The pivot away from Reg BI / SEC-exam thesis makes B the right fit.

### 3.4 Composition (11 sections)

```
1.  hero              (dark)
2.  metricsStrip      (light)
3.  featureGrid       (warm)
4.  imageFeatures     (light)
5.  signature         (dark)    — ClientWealthCanvas
6.  benefitsGrid      (warm)
7.  integrationsPanel (light)
8.  processTimeline   (warm)
9.  relatedPages      (light)
10. faq               (warm)
11. ctaBlock          (accent)
```

**Constitution audit:**
- §6.1 anchors: hero=1, faq second-to-last, CTA last ✓
- §6.3 density: 11 sections — slight overshoot of 6–10 target. Justified for a $50M-engagement-sized solution that must demonstrate breadth (manual ingestion + automated feeds + bank-core integration + multi-segment scale + advisor workflow). Within precedent of existing pilot regulated solutions.
- §4.2 rhythm: hero=dark, signature=dark, no adjacent darks, alternating L/W between, CTA=accent ✓
- §10 relatedPages: present, services-first per default; one same-vertical peer (Financial Document Management) included per v2.1 exception (same buyer overlap when CCO/COO at same firm narrows scope to records-only) ✓

### 3.5 Signature

**Replace `FiduciaryEvidenceLedger.tsx` → new `ClientWealthCanvas.tsx`.**

Same hierarchical 3-band pattern (§8.3 #2). Redirected from regulator-defense to advisor-productivity:

- **Band 1 — How wealth gets in** (4 input tiles): manual entry · custodian feeds · bank account aggregation · planning & document feeds
- **Band 2 — The unified client** (centered core card with 6 wealth-domain pillars + a "client-type" header strip showing "Individual · Household · Trust · Family Office · Institutional"):
  1. Real estate & titled assets
  2. Business interests & private equity
  3. Brokerage & retirement accounts
  4. Cash & liquid assets across banks
  5. Insurance, trusts & alternatives
  6. Liabilities & mortgages
  Plus a "Live net worth" stamp.
- **Band 3 — What the advisor does next** (4 output tiles): proposed allocation & IPS · budget plan & cash flow · meeting deck & quarterly review · suitability, KYC & source-of-wealth file

**Emotional argument:** *"One screen, every asset, every entity. The advisor opens the client's profile and walks the meeting from there."*

**Why replace, not reframe:** the prior signature's noun (`FiduciaryEvidenceLedger`) and visual semantics (touchpoints → evidence engine → regulator exhibits) are load-bearing for the regulator-defense thesis. The new thesis is fundamentally different (assemble → unified canvas → advisor actions). Reframing in place would force a misleading filename. Filename: `ClientWealthCanvas.tsx`. Registered in registry under `ClientWealthCanvas`.

### 3.6 Imagery — keep

Existing photos at `public/images/solutions/wealth-investment-management/{hero,feature-1,feature-2}.jpg` show advisor + client meetings and portfolio review on tablets/laptops. They fit the new positioning unchanged. Alt text retained.

---

## 4. Per-section content direction

### Hero
- **Headline (≤12 words):** *"Every asset, every entity, one advisor workstation."*
- **Subhead (≤25 words):** Names buyer set ("wirehouses, banks, RIAs, family offices") and core promise ("every client's full picture, integrated with your core banking, custodian, CRM, and planning stack").
- **Hero metrics (3, capability-framed):** Bank-Core Integrated · Multi-Segment Ready (individual → institutional) · Advisor-First (workstation, not order-entry trading)
- **Hero photo:** existing `hero.jpg` retained.

### MetricsStrip (4 capability-framed)
1. *Unified Client Canvas* — every wealth domain on one screen, across all client types
2. *Bank-Core Interconnected* — IT-architecture-led integration into core banking, custodian, CRM, planning, and market-data systems
3. *Mixed Ingestion: Manual + Connected* — advisor entry for non-custodied wealth (homes, businesses, art) + automated feeds where the data lives
4. *Multi-Segment Scalable* — individual, household, trust, family office, institutional in one configurable platform

### FeatureGrid (6)
1. **Unified Client Profile** — every account, asset, and entity in one view across individual / household / trust / family office / institutional
2. **Manual + Connected Ingestion** — advisor entry for non-custodied wealth alongside custodian, bank, and planning feeds
3. **Budget, Cash Flow & Goals** — budget sheet, savings rate, surplus-for-investment, goal tracking woven into the recommendation flow
4. **Proposal, IPS & Recommendation Workflow** — proposed allocation, IPS generation, acceptance tracking — *not* order entry
5. **Meeting Preparation & Reviews** — quarterly review packets, allocation drift, performance vs. benchmark, action items from prior meetings
6. **Suitability, KYC & Source-of-Wealth File** — risk tolerance, accredited investor verification, source-of-wealth documentation kept current as the advisor file (not as regulatory exhibit)

### BenefitsGrid (5–6)
1. *One Screen, Full Client Picture* — advisor productivity in real meetings
2. *Built Into Your Bank Stack, Not Beside It* — interconnection with core banking and existing systems is the feature, not an afterthought
3. *Multi-Segment Scalability* — same platform from mass affluent through institutional, configured per segment
4. *Manual Wealth, Captured Properly* — homes, private businesses, art, trusts persisted with the same rigor as custodied positions
5. *Vendor-Replaceable Integration Middleware* — future custodial / CRM / planning vendor change is a configuration project
6. *Faster Advisor Workflow* — eliminate the toggle tax between custodian, OMS, planning, CRM, document management

### IntegrationsPanel (8–9 categories — bank-stack heavy)
1. **Bank Core Banking** — FIS · Jack Henry · Fiserv · Temenos · Finastra
2. **Custodian Platforms** — Schwab Advisor Services · Fidelity Wealthscape · Pershing NetX360+ · BNY Mellon · State Street
3. **Trust Accounting** — SEI Trust 3000 · FIS Global Plus · Innovest
4. **Portfolio Accounting & Performance** — Addepar · Black Diamond · Orion · Tamarac
5. **Financial Planning** — eMoney · MoneyGuidePro · RightCapital · Holistiplan
6. **CRM** — Salesforce Financial Services Cloud · Redtail · Wealthbox · Microsoft Dynamics 365
7. **Market Data** — Bloomberg · Refinitiv (LSEG) · FactSet · Morningstar
8. **Account Aggregation (outside-account ingestion)** — Plaid · Yodlee · MX · Akoya · ByAllAccounts
9. **Document Management & E-Signature** — DocuSign · Box · NetDocuments · iManage

### ProcessTimeline (5 phases) — IT-architecture-led per Russell
1. **Discovery & Bank IT Architecture Review** — start with the bank's IT team, not us prescribing a stack
2. **Architecture, Data Model & Integration Design** — core banking, custodian, CRM, planning, market-data, document-management integration patterns + manual-ingestion entity model
3. **Core Platform & Advisor Workstation Development**
4. **Bank-Core / Custodian / Vendor Integration & Data Migration**
5. **Phased Rollout, Advisor Training & Hypercare**

### RelatedPages (3)
- **Application Modernization** (service) — replacing legacy advisor portal / wealth back-office without breaking trade flow or aggregation
- **Security & Compliance** (service) — IAM, encryption, audit controls expected by a bank's IT and compliance team
- **Financial Document Management** (solution, same-vertical peer per §10 v2.1) — for firms whose scope is records-only, not full advisor workstation

### FAQ (7)
1. Who is this for — wirehouses, banks, RIAs, broker-dealers, or family offices?
2. How does this integrate with our core banking system, custodian, and planning tools?
3. Can it handle individual, household, trust, family office, and institutional clients in one platform?
4. Is this an order-entry / trading system?
5. How is wealth that isn't custodied — homes, businesses, art, private equity — captured and kept current?
6. How does the budget and cash-flow planning workflow tie into investment recommendations?
7. What does a custom wealth and investment management engagement typically cost and how long does it take?

### CTABlock
- **Title:** *"Ready to give your advisors one screen for every client?"*
- **Description:** Discovery-first framing — IT architecture review, custodial/CRM/planning landscape, scoping for the right segment.

---

## 5. Files to Create / Modify / Delete

### Modify
- `aivanceworks-website/src/data/solutions/wealth-investment-management.ts` — full rewrite. Drop `complianceSpotlight`, `complianceDetail`. Update `composition`, `signatureComponent: 'ClientWealthCanvas'`, all hero / metrics / features / benefits / integrations / process / faq / cta copy, `_unverified` list rebuilt.
- `aivanceworks-website/src/components/signature/index.ts` — remove `FiduciaryEvidenceLedger` export; add `ClientWealthCanvas` export.
- `aivanceworks-website/src/app/solutions/[slug]/page.tsx` — swap registry entry: remove `FiduciaryEvidenceLedger`, add `ClientWealthCanvas`. Remove the `FiduciaryEvidenceLedger` import.

### Create
- `aivanceworks-website/src/components/signature/ClientWealthCanvas.tsx` — new single-use signature component. 3-band hierarchical pattern, all token-compliant, mobile-collapse documented in file header per §10.7.

### Delete
- `aivanceworks-website/src/components/signature/FiduciaryEvidenceLedger.tsx` — only consumer was the wealth solution registry.

### Keep unchanged
- `public/images/solutions/wealth-investment-management/{hero,feature-1,feature-2}.jpg` — fit the new positioning.
- `src/lib/constants.ts` — Finance section nav entry / label / href unchanged.
- `src/lib/content.ts` — `SOLUTION_PAGE_MODULES['wealth-investment-management']` registration unchanged.

---

## 6. Constitution deviations to record (in `wealth-investment-management.ts` comment block)

Per §12.4, these are **small / medium deviations** — recorded in the data file, no constitution edit required.

1. **Archetype shift** — was C (Regulated, CCO at SEC-registered RIA), now B (Technical, Head of Wealth / CTO of Wealth Division at bank). Rationale: SME pivot — buyer is led by IT architecture, not regulator-defense.
2. **`complianceSpotlight` and `complianceDetail` dropped** — was central to the regulated framing. Rationale: the new buyer is led by integration depth, not regulatory exhibit defensibility. Suitability / KYC retained as feature for advisor file completeness, not as regulatory evidence.
3. **Composition density 11 sections** — slight overshoot of §6.3's 6–10 target. Rationale: $50M-tier engagement requires breadth (multi-segment, multi-stack-integration, manual + automated ingestion, advisor workflow, bank-core integration). Within precedent of regulated-solution pilot pages.
4. **Same-vertical peer in `relatedPages` (Financial Document Management)** — per §10 v2.1 exception. Rationale: the records-only scope is a legitimate alternative for a buyer whose mandate is narrower than full advisor-workstation replacement.

---

## 7. Out of scope (explicitly NOT doing)

- No nav changes — `/solutions/wealth-investment-management` slug + Finance section heading stay.
- No new sibling solution pages.
- No constitution amendment (all deviations small/medium, recorded in data file).
- No image acquisition — reuse existing photos.
- No additions to other Finance solution pages (`financial-document-management`, `digital-banking-wallets`).
- No order-entry / trading-desk OMS framing — Russell explicit ("not a trading platform, it's for management").
- No fabricated outcome statistics, no invented case study, no partner/certified-partner claims.

---

## 8. Content integrity & verification gates

Per §9, all of the following must be honored:

- Every `_unverified` entry follows `field — claim — reason` structure.
- No fabricated outcome statistics — all metrics capability-framed.
- All vendor mentions voiced as "we build integrations with…" / "architected patterns for" (never "shipped with…").
- Audience test (§9.5) applied to every metric, feature description, FAQ, integration mention.

Pre-merge gate (§9.7): `_unverified` list cleared by human reviewer or explicitly accepted.
