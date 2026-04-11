# Constitution — Pilot Page Compositions

> Extracted from Services & Solutions Design Constitution §15.
> Reference breakdowns of the 5 pilot pages. Agents creating new pages should read ONE actual
> data file as an exemplar (e.g., `src/data/services/product-discovery.ts`), not these summaries.
> For the archetype recipes and composition rules, see `../services-solutions-constitution.md` §6.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 15

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
8. **Delete the old `components/solutions/*` files** listed in [§3.6](../services-solutions-constitution.md#36-where-existing-components-violate-these-rules) once no page references them. Keep `components/solutions/unique/*` temporarily as reference while extracting patterns, then delete.
9. **Clean up `src/data/solutions.ts`** once all pilot solutions have migrated. The remaining (non-pilot) solutions stay in the old file until their own migration.

Post-pilot rollout: each subsequent service or solution page follows the 13-step process in [Section 13](../services-solutions-constitution.md#13-process--creating-a-new-service-or-solution-page).

---
