---
name: digital-transformation-pattern
description: Archetype + composition + signature decisions for the broad "Digital Transformation" umbrella SERVICE page, and the B-brief→A-resolution precedent
metadata:
  type: project
---

`/services/digital-transformation` (constitution v2.11, 2026-06-20) is the broadest
software-engineering SERVICE page — it modernizes the whole foundation (process,
technology, data, experience, security, organization) that the AI/strategy pages build on.

**Archetype: B-brief resolved to A (Strategic) base + featureGrid & benefitsGrid cherry-picked from B.**
The brief defaulted to B ("I need this built"), but §9.5/§6.5 resolve it to A:
a DX engagement *begins* with an assessment + sequenced roadmap (a plan artifact, not a
running system day one), and the buyer (CIO / Chief Digital Officer at a mid-to-large US
enterprise) answers to a board + P&L, not a regulator or an engineer. Composition mirrors
the closest sibling `ai-strategy-consulting` exactly:
hero → metricsStrip → discoveryMethodology → featureGrid → imageFeatures(null) → signature →
processTimeline → benefitsGrid → engagementModels → relatedPages → faq → ctaBlock (10 visible).
featureGrid cherry-picked so the buyer sees breadth across the 5 domains (answers "how is this
different from a one-off cloud migration / AI project?"); benefitsGrid cherry-picked because a
buyer burned by failed programs needs outcome framing. TechStackBlock DROPPED (this buyer does
not evaluate on stack — weave Azure/AWS/GCP/React/Next.js into feature prose as "we build with").

**Buyer + trust issue:** CIO/CDO measured on agility/time-to-market, cost-to-serve, and the
SURVIVAL of the program they sponsor. THE trust issue = burned by multi-year, over-budget
"rip and replace" programs that stalled / shipped shelfware + vendor lock-in + big-bang cutover
risk. Answer with: phased WAVES (not big-bang), "production stays live throughout," assess-first
(roadmap before spend, fundable increments, pause/reprioritize between waves), team
ownership/handover, provider-neutral. Capability-framed metrics only: Phased Waves · Stays Live ·
Assess-First · You Own It. No priceFrom; durations = "Scoped during discovery" / "Phased per engagement".

**Positioning vs siblings (disambiguate in features + a dedicated FAQ to avoid cannibalization):**
Digital Transformation = broadest, modernizes the whole foundation. AI Strategy = where/how to
apply AI. Enterprise AI = AI at scale in large orgs. Legacy Modernization = deep dive on ONE monolith.

**Archetype-C cherry-pick (§6.5):** DX touches security/compliance modernization (zero-trust, IAM,
SOC 2/HIPAA/PCI-DSS/CCPA), but the CDO is not auditor-gated on this engagement — per §9.9 compliance
stays out of hero/metrics/feature-headlines, lives in ONE feature + engagement scope + ONE FAQ. No
ComplianceDeepDive (that is `/services/security-compliance`).

**New signature `DigitalMaturityRoadmap`** (process/flow + comparison, §8.3 #3/#4): a 4-phase arc
Assess → Foundation → Modernize → Operate; click a phase → reveal domains advanced + a current→target
delta. A multi-domain maturity JOURNEY with per-wave before/after — distinct from StranglerFigDiagram
(one monolith), CloudReadinessMatrix (single-domain scoring), AiStrategyFrameworkBlueprint
(input→engine→3-output). Built on the Section/Container primitives (tone="dark" withGrid), token-only,
useState focus / dim-siblings, desktop-horizontal / mobile-vertical-stack. Hero illustration
`DigitalTransformationHeroIllustration` = fragmented legacy estate → unified modern operating model.

**imageFeatures on a SERVICE page = data-field type error.** `imageFeatures` lives on
SolutionPageData ONLY. Put the 'imageFeatures' KEY in the composition array (harmless, renders null
via ServiceDetailTemplate), copy placeholder JPEGs to public/images/services/<slug>/, but do NOT add
an `imageFeatures` data field (tsc TS2353). Matches the AI/ML service house pattern. See [[ai-ml-service-pattern]].

**GOTCHA — block-comment termination:** `*/` inside a header-comment Tailwind token list like
`(brand-*/accent-*/surface-*)` prematurely CLOSES the JS block comment → cascade of TS1109/TS1005
parse errors. Write "brand, accent, surface, text scales" instead of `brand-*/accent-*`.

Backlinks added: application-modernization (swapped Policy Administration Systems) and
ai-strategy-consulting (swapped AI Development) → Digital Transformation. See [[reference_solution-wiring-points]]
(services add the 4th touchpoint: HERO_ILLUSTRATION_COMPONENTS + heroIllustrationComponent).
