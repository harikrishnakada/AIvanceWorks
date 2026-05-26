# Design: Split EHR & EMR Development into Two Solution Pages

**Date:** 2026-05-25
**Status:** Draft — awaiting user review
**Project:** Genesis / AIvanceWorks website
**Topic:** Healthcare solutions information architecture

## Summary

Replace the single `/solutions/ehr-emr-development` page with two distinct, well-differentiated solution pages — one for hospital-grade **Electronic Health Records (EHR)**, one for practice-grade **Electronic Medical Records (EMR)**. Each page is tuned to a different buyer, scope, and integration surface. The old URL is deleted (no redirect). Content is researched against authoritative sources (ONC HealthIT.gov, HL7.org, HHS OCR) before copy is written. No pricing or timeline figures appear on either page.

Both pages remain on **Archetype C — Regulated Solution (Healthcare)** and share the existing `ClinicalWorkflowOrchestrator` signature component, with per-page lane/caption variants.

## Goals

1. Two distinct, SEO-targeted, buyer-tuned solution pages replacing the single bundled page.
2. Sharp differentiation in title tags, H1s, hero messaging, and metric-strip framing — minimal content overlap.
3. Content backed by authoritative external research (ONC, HL7, HHS OCR) for accuracy.
4. Zero new component types built. Reuse the existing Archetype C composition and `ClinicalWorkflowOrchestrator` signature.
5. All inbound internal links updated to the appropriate sibling page.

## Non-goals

- Building a new signature component for EMR. The existing `ClinicalWorkflowOrchestrator` is reused with variant data.
- Publishing pricing or timeline ranges on either page. (Explicit user decision.)
- Creating new image assets in this delivery. Image paths point to new folders; images are backfilled later.
- Maintaining a redirect from the old URL. (Explicit user decision.)
- Restructuring URL taxonomy (no `/healthcare/...` nesting). Keep the flat `/solutions/[slug]` pattern.

## Differentiation Strategy

The two products are conflated in common usage but distinguished in industry literature (ONC, HIMSS, HealthIT.gov). The pages must reflect that distinction.

| Dimension | **EHR** (`/solutions/ehr-development`) | **EMR** (`/solutions/emr-development`) |
|---|---|---|
| **Scope** | Longitudinal, multi-provider, multi-facility | Single practice/clinic, encounter-focused |
| **Primary buyer** | CIO / VP Clinical Informatics / CMIO at 50–500 bed health systems | Practice owner / Office Manager / MD-founder at 1–20 provider clinics |
| **Dominant buyer question** | "Can this integrate across our care network without disrupting clinician workflows?" | "Will my staff adopt this, and will it speed up charting and billing?" |
| **Headline angle** | Interoperability, ONC certification, HIE/TEFCA participation, care coordination | Speed of charting, scheduling + billing in one flow, practice-level adoption |
| **Compliance framing** | HIPAA + HITECH + ONC Health IT (Health IT Module) + 21 CFR Part 11 + SOC 2 | HIPAA + HITECH + ONC (ambulatory tier) + MIPS / MACRA quality reporting |
| **Integrations emphasized** | HIEs, TEFCA QHINs, reference EHRs (Epic, Cerner, Athena), PACS, LIS networks | Clearinghouses, payer portals, Surescripts e-Rx, lab couriers, patient SMS, telehealth |
| **Process emphasis** | Multi-facility architecture, FHIR resource mapping, phased rollout by department | Workflow observation in clinic, faster MVP, billing-cycle alignment, lighter change management |
| **Pricing/timeline on page** | None (per user decision) | None (per user decision) |
| **Signature** | `ClinicalWorkflowOrchestrator` — multi-system swim-lane (existing) | `ClinicalWorkflowOrchestrator` — same component, reframed lanes (single-practice encounter loop) |

## Composition (both pages)

Identical composition order — proven Archetype C pattern, same as the existing page:

```
hero → metricsStrip → featureGrid → imageFeatures → complianceSpotlight
→ signature → complianceDeepDive → benefitsGrid → integrationsPanel
→ processTimeline → relatedPages → faq → ctaBlock
```

Rationale:
- `complianceSpotlight` precedes the signature as a trust gate (same as Patient Portals reference and the existing EHR/EMR page).
- `complianceDeepDive` elevated to standalone after signature — compliance is the gate for both buyers.
- `imageFeatures` after `featureGrid` per the two-track imagery strategy (v1.1).
- No `caseStudySpotlight` — greenfield, no real case data yet. Insertable later when verified.

## File Changes

### New files

- `aivanceworks-website/src/data/solutions/ehr-development.ts`
- `aivanceworks-website/src/data/solutions/emr-development.ts`
- `aivanceworks-website/public/images/solutions/ehr-development/` (folder; images backfilled later)
- `aivanceworks-website/public/images/solutions/emr-development/` (folder; images backfilled later)

### Modified files

| File | Line(s) | Change |
|---|---|---|
| `aivanceworks-website/src/lib/content.ts` | ~1030 | Replace single `'ehr-emr-development'` registry entry with two entries (`'ehr-development'`, `'emr-development'`) |
| `aivanceworks-website/src/lib/constants.ts` | ~181 | Replace single nav entry with two entries: "EHR Development" and "EMR Development" |
| `aivanceworks-website/src/app/solutions/page.tsx` | ~55 | Replace single catalog blurb with two distinct blurbs |
| `aivanceworks-website/src/data/solutions/document-management-software.ts` | ~475 | Update `relatedPages` link from `/solutions/ehr-emr-development` to `/solutions/ehr-development` |
| `aivanceworks-website/src/data/solutions/hospital-management-systems.ts` | ~460 | Update `relatedPages` link from `/solutions/ehr-emr-development` to `/solutions/ehr-development` |
| `aivanceworks-website/src/data/solutions/ai-healthcare.ts` | ~403 | Update `relatedPages` link from `/solutions/ehr-emr-development` to `/solutions/ehr-development` |
| `aivanceworks-website/src/components/signature/ClinicalWorkflowOrchestrator.tsx` | TBD | If component is not already data-driven, add minimal prop-based variant support so EHR and EMR pages render distinct swim-lane content. Verify component interface during plan-writing phase. |

### Deleted files

- `aivanceworks-website/src/data/solutions/ehr-emr-development.ts`

### Reference-only inbound mentions (no change required)

Several solution files have comment lines referencing `ehr-emr-development` as a pattern reference (`ctms.ts:66`, `etmf.ts:73`, `lims.ts:59`, `rtsm.ts:75`). These are code comments, not runtime links, and may be left as-is or updated to point to `ehr-development.ts` opportunistically.

## Research Plan (executed before copy is written)

Each page draws from authoritative sources. Research informs feature naming, integration list specifics, compliance framing accuracy, and FAQ answers. **No fabricated case data. All metrics are capability-framed, not outcome-framed**, following the `_unverified[]` pattern in the existing page.

### Sources

1. **ONC HealthIT.gov** — EHR vs EMR definitions; ONC Health IT Certification Program criteria current as of 2026; USCDI v4 / v5 data classes
2. **HealthIT.gov / CMS** — MIPS / MACRA quality reporting requirements for ambulatory practices (EMR-relevant)
3. **HL7.org** — FHIR R4 / R5 release status; SMART on FHIR app ecosystem and current adoption
4. **HHS OCR** — HIPAA Security Rule technical safeguards current guidance; recent breach trends
5. **TEFCA / RCE / Sequoia Project** — QHIN participation requirements (EHR-relevant)

### Research queries (sample)

- "ONC EHR vs EMR definition" (HealthIT.gov)
- "ONC Health IT Certification 2026 criteria"
- "USCDI v4 data classes"
- "FHIR R4 R5 status 2026"
- "SMART on FHIR app gallery 2026"
- "TEFCA QHIN participation 2026"
- "MIPS quality reporting requirements 2026 ambulatory"
- "HIPAA Security Rule update 2026 NPRM"
- "HL7 v2 ambulatory EMR integration patterns"

### Research output format

For each page, produce a short internal research note (not published) containing: 5–8 verified facts, source URLs, and any caveats. The note informs copy but is not committed to the repo unless useful.

## Per-Page Spec

Each page mirrors the existing `SolutionPageData` structure. The shape is identical; the **content differs**.

### `ehr-development.ts`

- **slug:** `ehr-development`
- **title:** `Custom EHR Development`
- **metaTitle:** `Custom EHR Development | HIPAA-Compliant Electronic Health Records`
- **hero direction:** *"Enterprise EHR built for how your care network actually coordinates."* Emphasizes longitudinal record across facilities, ONC certification readiness, TEFCA / HIE participation, care coordination across the continuum.
- **metricsStrip (4 cards):** FHIR R4 Native · HIPAA + ONC + TEFCA-ready · Clinician-Centered · Modular Multi-Facility
- **features (6 cards):** Longitudinal Clinical Record · CPOE with Decision Support · Bi-Directional Lab & Diagnostics · Pharmacy & Medication Mgmt (inpatient + outpatient) · Multi-Facility Scheduling & Resource Mgmt · Population Health & eCQM Reporting
- **integrations (6):** Epic · Cerner/Oracle Health · LIS · Surescripts · PACS/Radiology · HIE / TEFCA QHIN
- **complianceSpotlight badges:** HIPAA, HITECH, SOC 2 Type II, HL7 FHIR, ONC Health IT, 21 CFR Part 11
- **relatedPages (3):** EMR Development · AI Healthcare · Hospital Management Systems
- **faq (6):** ONC certification approach · multi-facility integration · data migration · phased modular rollout · adoption / hypercare · TEFCA/HIE participation. **No pricing/timeline question.**

### `emr-development.ts`

- **slug:** `emr-development`
- **title:** `Custom EMR Software Development`
- **metaTitle:** `Custom EMR Software Development | Ambulatory Electronic Medical Records`
- **hero direction:** *"Practice-grade EMR that speeds charting and gets you paid."* Emphasizes single-practice workflow, scheduling + charting + billing in one flow, faster clinician adoption, MIPS-ready reporting.
- **metricsStrip (4 cards):** Workflow-First · HIPAA + MIPS-Ready · Specialty Templates · Billing-Cycle Aligned
- **features (6 cards):** Specialty-Specific Charting · Scheduling & Front-Desk Workflow · Integrated Billing & Claims · e-Prescribing & Med Mgmt · Patient Engagement (SMS, portal hooks) · MIPS / Quality Reporting
- **integrations (6):** Clearinghouses (Change Healthcare / Availity) · Payer portals · Surescripts · Lab interfaces (Quest / LabCorp / regional) · Patient SMS providers · Telehealth (Zoom Health / Doxy.me)
- **complianceSpotlight badges:** HIPAA, HITECH, SOC 2 Type II, HL7 FHIR, ONC Health IT (ambulatory), MIPS-Ready
- **relatedPages (3):** EHR Development · AI Healthcare · Patient Portals
- **faq (6):** HIPAA / ONC ambulatory approach · billing & clearinghouse integration · data migration from existing EMR · staff adoption / training · specialty template customization · MIPS reporting. **No pricing/timeline question.**

## Signature Component Variant

`ClinicalWorkflowOrchestrator` currently renders the EHR/EMR bundled page. Both new pages will use the same component but render different swim-lane content:

- **EHR variant:** Lanes show multi-facility handoff — e.g., *Primary Care → Specialist Referral → Hospital Admission → Lab Network → Pharmacy → Care Team*. Captures the longitudinal, cross-facility orchestration story.
- **EMR variant:** Lanes show single-encounter loop — e.g., *Front Desk Check-In → Vitals & Triage → Provider Charting → Orders & e-Rx → Billing & Claims*. Captures the in-clinic workflow story.

**Open item:** The component may already be data-driven via props/JSON. If so, no component code change is needed — each page just passes its own lane data. If it's hardcoded, we add a minimal `variant: 'ehr' | 'emr'` (or `lanes={...}`) prop. The writing-plans phase will inspect the component and determine which path applies.

## Cross-Linking

Each page's `relatedPages` array surfaces the sibling. This ensures buyers who land on the wrong page can self-route, and signals search engines that the two pages are related-but-distinct.

- **EHR page** related: EMR Development · AI Healthcare · Hospital Management Systems
- **EMR page** related: EHR Development · AI Healthcare · Patient Portals

Inbound updates from existing solution pages (`document-management-software`, `hospital-management-systems`, `ai-healthcare`) all point to **EHR Development** (the broader/superset concept).

## Navigation

`constants.ts` healthcare nav block replaces:

```
{ label: 'EHR & EMR Development', href: '/solutions/ehr-emr-development', icon: 'Activity' }
```

with two entries (order: EHR first, EMR second, immediately adjacent):

```
{ label: 'EHR Development', href: '/solutions/ehr-development', icon: 'Activity' }
{ label: 'EMR Development', href: '/solutions/emr-development', icon: 'ClipboardList' }
```

## Risks & Mitigations

1. **Keyword cannibalization** — Two pages competing for similar healthcare-software queries. **Mitigation:** Distinct primary keywords per page (`custom EHR development` / `ONC certified EHR` / `health system EHR` vs. `custom EMR software` / `ambulatory EMR` / `practice management EMR`); distinct H1, title tag, and hero copy; distinct integration lists.
2. **Old URL 404s** — User accepted this trade-off. **Mitigation:** Update all internal inbound links in the same delivery so internal traffic doesn't 404.
3. **Signature component coupling** — If `ClinicalWorkflowOrchestrator` is tightly coupled to the old page's data, the variant work may exceed estimate. **Mitigation:** Inspect the component during plan-writing; if non-trivial, the plan documents the change before implementation.
4. **Content drift from "real" differentiation** — Easy to default to similar phrasing across both pages. **Mitigation:** Write the EHR page first, then write EMR top-to-bottom from a blank file (no copy-paste). Run a diff at the end to verify <30% lexical overlap in narrative sections (hero, features, benefits, FAQ).
5. **Research accuracy** — ONC / FHIR / TEFCA details change. **Mitigation:** Capture source URLs and dates in `_unverified[]` per page for facts that may shift.

## Verification

- Both new pages load at their new URLs and render every composition block.
- Old URL `/solutions/ehr-emr-development` returns 404.
- Internal links across the codebase point to one of the two new pages (no orphaned references to the old slug, ignoring code comments).
- Nav menu shows both new entries in the healthcare group, in EHR-then-EMR order.
- `relatedPages` on both new pages cross-link to each other.
- Build passes with no TypeScript errors.
- Visual review confirms signature renders distinct lane data per page.

## Out of Scope (for this engagement)

- New image assets (placeholder paths only).
- Restructuring URL taxonomy beyond the two new slugs.
- Refactoring other Archetype C pages.
- Building a redirect mechanism.
- Adding pricing or timeline content (explicitly excluded).
