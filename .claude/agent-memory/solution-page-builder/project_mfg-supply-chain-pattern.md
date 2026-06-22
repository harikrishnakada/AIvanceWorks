---
name: mfg-supply-chain-pattern
description: Established composition, liability, and signature conventions for Manufacturing & Supply Chain solution pages (EBR, MES, MOM, SCM, WMS)
metadata:
  type: project
---

The Manufacturing & Supply Chain solution cluster (EBR, MES, MOM, SCM, WMS) shares a strong house pattern. Match it for any new page in this vertical.

**Composition (Archetype C base):**
`hero (dark) → metricsStrip (light) → featureGrid (warm) → imageFeatures (light) → complianceSpotlight (warm) → signature (dark) → complianceDeepDive (light) → benefitsGrid (warm) → processTimeline (light) → relatedPages (warm) → faq (light) → ctaBlock (accent)`

**WMS deviation (v2.2, see constitution inline changelog):** when the operating buyer's first question is a procurement/build-vs-buy decision rather than a compliance gate, place `signature` BEFORE `complianceSpotlight` so the page makes its primary argument first. The WMS buyer is measured on throughput/labor P&L, not on surviving an audit — WMS is not regulated like EBR/MES (21 CFR Part 11) or pharma SCM (DSCSA). Archetype C structure kept for the genuine FSMA 204/FEFO/cGMP-warehouse traceability layer.

**Liability stance (uniform across the cluster):**
- AIvanceWorks is a software engineering / integration partner. Validation, filings (DSCSA/FSMA 204), GxP/GDP/IATF/AS/ISO qualification, and audit outcomes are explicitly the customer's responsibility.
- NO commercial product vendor names anywhere (no ERP/WMS/TMS/OMS/SCM/control-tower/carrier/automation brands). Categories only. Exception: MES/MOM name the product being *implemented* (PAS-X/Körber, Opcenter/Siemens, Azure) with capability framing only — no "certified partner" badge.
- Framework/standard names retained for SEO + audience signaling, always framed as "engineering design awareness," never certification.
- No fixed durations/costs/outcomes. processSteps durations = "Scoped during discovery" / "Phased per engagement".

**Audience-test rule (§9.9):** lead hero/metrics/features/benefits with operating-buyer KPIs (throughput, visibility, accuracy, coexistence). Compliance/audit framing lives ONLY mid-page in complianceSpotlight/complianceDeepDive + one FAQ.

**Signatures are single-use & per-page.** Hierarchical/lifecycle "control plane / spine / map" patterns dominate the cluster; WMS broke from that with a *comparison* pattern (`WmsBuildVsBuyDecision`) because build-vs-buy is a two-path decision a grid/hierarchy can't carry. See [[solution-wiring-points]].

**Imagery:** placeholder JPGs are copied from a neighboring solution folder and flagged in `_unverified` for later replacement with vertical-specific Unsplash photos. This is the accepted sibling convention.
