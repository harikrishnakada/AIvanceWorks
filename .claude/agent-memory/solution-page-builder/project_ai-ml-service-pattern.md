---
name: ai-ml-service-pattern
description: House pattern for AI/ML-pillar SERVICE pages (generative-ai, data-engineering, ml-development) — archetype, composition, signature, and integrity stance
metadata:
  type: project
---

AI/ML-pillar SERVICE pages are Archetype B (Technical). Established by generative-ai.ts,
data-engineering.ts, and ml-development.ts.

**Composition (Archetype B default, ~10 sections):**
hero → metricsStrip → featureGrid → signature → benefitsGrid → techStackBlock →
engagementModels → relatedPages → faq → ctaBlock.
- ProcessTimeline is DROPPED when the signature already expresses the method/flow
  (generative-ai and ml-development both drop it; the signature carries the cadence).
- BenefitsGrid is KEPT when the buyer's trust issue is best answered in outcome language
  (ml-development). data-engineering DROPS BenefitsGrid because its buyer wants toolchain
  depth over ROI prose — judge per buyer.

**Buyer + trust issue (recurs across AI/ML services):**
Head of Data Science / ML Lead / VP Eng / Director of Data at data-heavy US companies.
Measured on production reality, not notebook metrics. THE trust issue is the
**model-to-production gap** + accuracy that collapses on live data + models that silently
rot. Answer with: production-bound framing, leakage-checked evaluation, drift monitoring,
team ownership/handoff.

**Greenfield framing:** capability-framed metrics only (e.g. "Production-Bound",
"Leakage-Checked", "Drift-Monitored") — never fabricated accuracy %. Tools are "we build
with", not "we have shipped with".

**Imagery (§11.5):** SERVICE pages use an inline SVG hero illustration (CSS-var colors,
<title>/<desc>), NOT photos. ServiceDetailTemplate renders `imageFeatures` as `null`. If a
brief insists on imageFeatures + photos (as the ml-development brief did), place
'imageFeatures' in the composition after 'featureGrid' (harmless, renders null), create
placeholder JPEGs at public/images/services/<slug>/, and note in the data file + _unverified
that they don't render. This matches the v2.4/v2.5 constitution precedent (poc/api-development).

**Archetype-C cherry-pick:** ML/data services touch CCPA + model/data governance, but the
buyer is NOT gated by an auditor — weave ONE light governance signal into a feature
(PII handling at pipeline layer) + one FAQ, never a full ComplianceDeepDive. Document the
cherry-pick in the data-file header per §6.5.

**Signature reuse:** DataPipelineBlueprint = linear data-stack architecture (no feedback
edge). GenAiPipelineArchitecture = GenAI/RAG/guardrails (ONE pipeline). ModelLifecycleLoop =
CLOSED LOOP (Frame→Data→Train→Deploy→Monitor with retrain feedback edge). AiApproachSelector =
problem→modality fan-out-then-converge ROUTER (ai-development). AgentAutonomySpectrum = ordered
control gradient (agentic-ai). EnterpriseAiDeliveryWrapper = core protected by concentric layers
(enterprise-ai). AiNativeArchitectureContrast = BEFORE/AFTER of TWO whole architectures
("AI bolted on" CRUD+widget vs. "AI-native" model-as-core-layer) — created new for
native-ai-development because no AI signature is a side-by-side contrast of two competing
architectures; FeatureGrid can't show two systems. All use the same interaction pattern:
useState focus, click-to-expand cards, dim siblings, desktop-horizontal / mobile-vertical-stack.
Copy DataPipelineBlueprint.tsx (staged pipeline) or AiApproachSelector.tsx (multi-card focus) as
the scaffold for a new signature.

**AI-pillar page taxonomy (differentiate explicitly in features + a dedicated FAQ — these pages
must NOT cannibalize each other):** ai-development = problem-first ROUTER (no chosen modality).
ml-development = TRAINS custom models from scratch. generative-ai = ONE modality (RAG/LLM feature
added to an existing app). agentic-ai-development = agents that ACT (a subset). enterprise-ai-
development = delivery-wrapper umbrella (security/governance/scale for big orgs). native-ai-
development = ARCHITECTURAL PHILOSOPHY — build software with a pre-trained foundation model as a
core layer from day one (foundation-model integration, prompt mgmt, AI-native UX, serving/evals/
cost infra). Native AI's trust issue = demo-to-product gap for AI-native software (brittle live-
edited prompts, no evals, runaway token spend, single-model-vendor lock-in); answer with
designed-in-not-bolted-on, prompt versioning+evals, governed token cost, provider-agnostic layer,
ownership.

See [[reference_solution-wiring-points]] — service wiring adds a 4th touchpoint vs solutions
(HERO_ILLUSTRATION_COMPONENTS + heroIllustrationComponent in data file).
