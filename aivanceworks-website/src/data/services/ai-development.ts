import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service (catch-all / general-purpose AI development)
// Positioning: this is the umbrella entry point for the AI & ML pillar — the page for
//   buyers who have a problem and believe AI can help, but have NOT decided on a modality.
//   The specialist pages (ML Development, Generative AI, Computer Vision, NLP & Document AI,
//   Conversational AI, Intelligent Automation) are for buyers who already know what they want.
//   This page's whole reason to exist is "bring the problem; we determine the approach."
//
// Buyer persona: a non-AI-specialist decision-maker who owns a business problem and a budget
//   but has no in-house data-science team — Head of Product, VP/Director of Operations,
//   Head of Digital / Innovation, or a generalist founder/CTO at a US company (50–2,000
//   employees). They have concluded "AI could help with X" but cannot tell whether the right
//   tool is a predictive model, a generative/LLM system, computer vision, document/language AI,
//   or plain automation — and they are not certain it is even feasible.
//   Measured on: solving the actual business problem, getting a working system live (not a demo),
//   and not burning budget on an AI experiment that stalls before production.
//
// Top 3 questions buyers arrive with:
//   (a) "I have a problem — can AI actually solve it, and which kind of AI is the right fit?"
//   (b) "Will you ship something that works in production, or just an impressive demo?"
//   (c) "How do we start without betting the whole budget on something unproven?"
// Key trust issue: burned by TECHNOLOGY-LED AI projects — a vendor who pushed a fashionable
//   approach (an LLM for everything) instead of fitting the problem; a flashy proof-of-concept
//   that never reached production; being sold "AI" when a simpler rules-based approach would
//   have done the job; and black-box systems that left them locked into the vendor.
//
// Signature: AiApproachSelector (NEW, single-use) — a problem-first router. One problem
//   statement enters on the left → a fit-assessment node → fans out across candidate AI
//   approaches (Predictive ML · Generative AI / LLM · Computer Vision · Language & Document AI ·
//   Automation / rules, including the honest "no AI needed" path) → converges into ONE chosen,
//   built, and deployed solution. Visualization pattern: comparison/decision + convergent flow
//   (catalog #4 + #3). Why a NEW signature (Component Reuse Rule §8.4): no existing signature
//   expresses a problem→modality SELECTION. ModelLifecycleLoop is a single-modality (ML) loop;
//   GenAiPipelineArchitecture is a GenAI-specific layered pipeline; AiStrategyFrameworkBlueprint
//   ends in strategy DOCUMENTS, not a shipped system; PocFeasibilityVerdict resolves to a
//   greenlight/pivot/stop verdict, not a routed build. The fan-out-then-converge IS the
//   emotional argument here and a FeatureGrid cannot express the routing.
//   Emotional argument: "You bring the problem, not the technology. We pick the AI approach that
//   fits — or tell you when you don't need AI — then build and ship the one that does."
//
// Composition: Archetype B default (mirrors generative-ai.ts / ml-development.ts):
//   hero → metricsStrip → featureGrid → imageFeatures → signature → benefitsGrid →
//   techStackBlock → engagementModels → relatedPages → faq → ctaBlock. 10 visible sections
//   (Archetype B ceiling).
//   - ProcessTimeline DROPPED — Archetype B explicitly says drop ProcessTimeline when the
//     signature carries the method; the approach-selector + engagement ladder already show how
//     we work (same decision as generative-ai.ts / ml-development.ts).
//   - BenefitsGrid KEPT — the catch-all buyer's trust is best answered in outcome language
//     (right-fit AI, across the production gap, start small, you own it, honest about when AI
//     isn't the answer), all capability-framed for greenfield integrity.
//   - imageFeatures included in composition per the page brief, but ServiceDetailTemplate renders
//     it as null (§11.5 — service pages use the SVG hero illustration, not photos). Placeholder
//     photos exist at public/images/services/ai-development/ for spec parity with solution pages;
//     they do NOT render. Matches the v2.4/v2.5 precedent (poc / api-development / ml-development).
//
// Archetype confirmation (§9.5 audience test / §9.6 self-challenge):
//   - vs A (Strategic): a strategy buyer wants a roadmap and business cases (that is
//     ai-strategy-consulting). This buyer wants a RUNNING SYSTEM that solves their problem.
//     Deliverable is software in production, not a deck → B, not A.
//   - vs D (Commerce): the buyer's primary concern is execution and feasibility ("prove you can
//     build it and that it will work"), not a revenue/conversion KPI → B, not D.
//   - vs C (Regulated): AI work touches data-privacy concerns (CCPA, PII in training/inference),
//     but this buyer is not GATED by an auditor — governance is a hygiene factor they assume a
//     serious vendor handles. One light governance signal is woven into a feature and a single
//     FAQ, NOT a full ComplianceDeepDive. Deliberate Archetype-C cherry-pick (§6.5), documented.
//   - Less developer-lens depth than ml-development/generative-ai: this buyer is often NOT an
//     ML engineer, so capabilities are framed in accessible, problem-fit language while still
//     giving enough technical credibility for a technical advisor they may bring.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → FeatureGrid (warm) → [imageFeatures null] →
//   Signature (dark) → BenefitsGrid (light) → TechStackBlock (warm) → EngagementModels (light) →
//   RelatedPages (warm) → FAQ (light) → CTA (accent)
//   Two darks (hero + signature), no adjacency, CTA accent — rhythm rules satisfied.
//
// AI Development maps to the AI & Machine Learning pillar in the services catalog. Buyers search
// "ai development services", "custom ai development", "ai software development company",
// "build an ai solution", "ai development company usa" — broad, top-of-funnel commercial queries,
// NOT internal category labels. NO complex third-party integration claims are made anywhere on
// this page (hard constraint): deployment is framed as a clean API/application interface your own
// systems can call, every named tool is something we BUILD WITH (not a shipped integration), and
// every metric is a capability framed greenfield-honest — so nothing on the page is a liability.

const aiDevelopment: ServicePageData = {
  slug: 'ai-development',
  title: 'AI Development',
  shortDescription:
    'Custom AI development for teams that have a problem, not a predetermined technology — we determine the right AI approach (or whether you need one), then build and ship it to production.',

  metaTitle: 'AI Development Services | Custom AI Solution Development',
  metaDescription:
    'Custom AI development for businesses that know they need AI but not which kind. Problem-first engineering: we pick the right approach — predictive ML, generative AI, vision, or none — then build and ship it to production.',
  keywords: [
    'ai development services',
    'custom ai development',
    'ai software development',
    'ai development company',
    'build an ai solution',
    'ai application development',
    'custom ai solutions',
    'ai consulting and development',
    'ai product development',
    'enterprise ai development',
    'ai development company usa',
    'ai solution development services',
  ],
  canonicalPath: '/services/ai-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'AI Development', href: '/services/ai-development' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures', // after featureGrid per brief; ServiceDetailTemplate renders null (§11.5)
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'ai-ml',
  signatureComponent: 'AiApproachSelector',
  heroIllustrationComponent: 'AiDevHeroIllustration',

  hero: {
    badge: 'Custom AI Development',
    headline: 'Bring the problem. We pick the AI that fits.',
    subhead:
      'For teams who know AI can help but not which kind. We start with your problem, choose the right approach — or tell you when you don’t need AI — then build and ship it to production.',
    primaryCta: { label: 'Book an AI Scoping Call', href: '/contact' },
    secondaryCta: { label: 'See how we choose', href: '#signature' },
  },

  // Audience test: a Head of Product / VP Operations scanning in 8 seconds, no AI background.
  // Each metric is capability-framed (greenfield integrity — no fabricated outcomes) and answers
  // one of the four concerns this buyer carries: is it problem-led or tech-led, does it actually
  // ship, do you fit the right approach, and am I locked in.
  metricsStrip: [
    {
      value: 'Problem-First',
      label: 'We start with your problem',
      description: 'Not a technology hunting for a use case',
    },
    {
      value: 'Right-Fit AI',
      label: 'The approach that fits',
      description: 'Predictive, generative, vision — or none',
    },
    {
      value: 'Production-Bound',
      label: 'A system, not a demo',
      description: 'Built to ship and run, not to impress and stall',
    },
    {
      value: 'Yours to Own',
      label: 'No black box, no lock-in',
      description: 'Open frameworks, documented, handed over',
    },
  ],

  // Audience test: the buyer confirming we cover the whole journey from "I have a problem" to
  // "it's live", in language they understand. Each feature is a stage of a custom AI build, not a
  // technology list. Feature 6 carries the light governance signal (Archetype-C cherry-pick) and
  // the liability boundary. No complex third-party integration claims (hard constraint): feature 5
  // frames deployment as a clean interface YOUR systems call, not an integration we have shipped.
  features: [
    {
      icon: 'Compass',
      title: 'Problem Framing & Feasibility',
      description:
        'We start with your business problem, not a technology. We frame it into something measurable, set an honest baseline, and give you a straight feasibility read — including when the answer is that AI is not the right tool yet.',
    },
    {
      icon: 'Route',
      title: 'Right-Fit Approach Selection',
      description:
        'We weigh the candidate approaches — a predictive model, a generative / LLM system, computer vision, language and document AI, or plain automation — against your problem and data, and recommend the one that fits. Vendor-neutral, problem-led, never approach-by-fashion.',
    },
    {
      icon: 'BrainCircuit',
      title: 'Custom AI Build',
      description:
        'We build the chosen solution end to end — training or fine-tuning a model, wiring up a retrieval or agent pipeline, or assembling the right models behind your application — with the surrounding software that turns a model into a usable product.',
    },
    {
      icon: 'Database',
      title: 'Data Foundation for AI',
      description:
        'AI is only as good as the data behind it. We prepare and structure the data your solution needs with reproducible pipelines, so the system can be retrained and trusted later — not built on a one-off export nobody can recreate.',
    },
    {
      icon: 'Rocket',
      title: 'Production Deployment',
      description:
        'The solution is packaged behind a clean, versioned API or embedded in your application, with a staged rollout and a rollback path. Your own systems call it through a simple interface — this is the step where most AI projects stall, and closing it is the core of the engagement.',
    },
    {
      icon: 'Activity',
      title: 'Monitoring, Governance & Handover',
      description:
        'Performance and drift monitoring so you know if the system degrades, plus a model registry and runbooks. PII is identified and handled at the data layer to support your CCPA and data-governance obligations, and everything is documented so your team can operate it.',
    },
  ],

  // imageFeatures: included in composition per the page brief, but ServiceDetailTemplate renders
  // this section as null for service pages (§11.5 — services use the SVG hero illustration above,
  // not photos). Placeholder photos for spec parity live at public/images/services/ai-development/
  // {hero,feature-1,feature-2}.jpg. Image specs if a future template change renders them:
  //   hero.jpg     — a cross-functional product + engineering team at a whiteboard mapping a
  //                  business problem to options (human faces, diverse, no brain-circuit cliche).
  //   feature-1.jpg — an engineer and a business owner pair-reviewing a working prototype on a laptop.
  //   feature-2.jpg — a team reviewing a live system dashboard after launch.
  //   Landscape, min 1200px wide, Unsplash, no color grading. alt text describes the scene.

  // Audience test: the buyer evaluating outcomes. Each benefit answers a specific scar this buyer
  // carries — tech-led projects (→ right-fit), POCs dying (→ production gap), budget risk
  // (→ start small), lock-in / black boxes (→ ownership), and being oversold AI (→ honesty).
  // All framed as capabilities ("built to", "designed to", "we will tell you") — greenfield-safe.
  benefits: [
    {
      icon: 'Target',
      title: 'AI That Fits the Problem',
      description:
        'We choose the approach because it suits your problem and your data — not because it is the approach in the headlines this quarter. Sometimes the best answer is a small model or a simple rule, and we will build that instead of an expensive one you do not need.',
    },
    {
      icon: 'Rocket',
      title: 'Across the Production Gap',
      description:
        'AI built to ship — serving infrastructure, versioning, and a rollback path designed for real use, not a prototype that wins a meeting and then lives forever in a notebook. Reaching production is the design target from day one, not an afterthought.',
    },
    {
      icon: 'Gauge',
      title: 'Start Small, Prove It First',
      description:
        'You do not have to commit a six-figure budget on faith. A short feasibility sprint tests the riskiest assumption on your real data and gives you an evidence-backed go / no-go — so the full build starts only once we both know it can work.',
    },
    {
      icon: 'KeyRound',
      title: 'You Own What We Build',
      description:
        'Built on open frameworks with a documented codebase, model registry, and runbooks your team can run. No black box and no dependency on us to keep it alive — you can take it in-house whenever you choose.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Honest About When AI Isn’t the Answer',
      description:
        'If the data is not ready, or a non-AI solution wins, we will say so — with the reasoning shown. We would rather tell you that early than sell you a model that quietly underperforms. That honesty is the relationship we are building.',
    },
  ],

  // Audience test: a technical advisor the buyer may bring will validate depth here. Everything
  // listed is industry-proven and something we build with (greenfield capability framing).
  // Capabilities = what we do; technologies = what we build with. No claim of past shipped
  // integrations. The stack spans modalities deliberately, because this is the catch-all page.
  capabilities: [
    'Problem framing and AI feasibility assessment with an honest baseline',
    'Right-fit approach selection across ML, generative AI, vision, and language',
    'Custom model training, fine-tuning, and transfer learning',
    'Retrieval-augmented generation (RAG) and LLM application development',
    'Computer vision and document / language understanding pipelines',
    'Reproducible data and feature pipelines for AI',
    'Leakage-safe evaluation and honest accuracy reporting',
    'Model serving (real-time API and batch) and application integration',
    'Monitoring, drift detection, and a retraining path',
    'PII-aware data handling and AI governance support',
  ],
  technologies: [
    'Python',
    'PyTorch',
    'scikit-learn',
    'Hugging Face',
    'LangChain',
    'OpenAI / Anthropic / Azure OpenAI',
    'Vector databases',
    'MLflow',
    'FastAPI',
    'Docker',
    'React / Next.js',
    'AWS / Azure / GCP',
  ],

  engagementModels: [
    {
      name: 'AI Feasibility Sprint',
      duration: '2 weeks',
      priceFrom: '$12,000',
      whatsIncluded: [
        'Problem framing and success-metric definition',
        'Right-fit approach recommendation (or a no-AI verdict)',
        'Data readiness and feasibility check on your real data',
        'Go / no-go recommendation with a build estimate',
      ],
      suitableFor:
        'Teams who believe AI can help but need to know which approach fits — and whether it is feasible — before committing to a build',
      primaryCta: { label: 'Book Feasibility Sprint', href: '/contact?ai=feasibility' },
    },
    {
      name: 'Custom AI Build',
      duration: '8–12 weeks',
      priceFrom: '$60,000',
      whatsIncluded: [
        'Data foundation and pipelines for the chosen approach',
        'Model build, fine-tuning, or AI pipeline development',
        'Honest evaluation against your success metric',
        'Production deployment behind a versioned API or in your app',
        'Monitoring, model registry, runbooks, and handover',
      ],
      suitableFor:
        'Teams with a validated problem ready to put a working AI solution into production with the foundation to maintain it',
      primaryCta: { label: 'Book a Build Call', href: '/contact?ai=build' },
      featured: true,
    },
    {
      name: 'AI Build + Managed',
      duration: '8–12 week build + ongoing',
      priceFrom: '$60,000 + $6,000/mo',
      whatsIncluded: [
        'Everything in Custom AI Build',
        'Ongoing monitoring and incident response',
        'Scheduled retraining and model refresh',
        'Periodic performance reviews and tuning',
        'Direct Slack / Teams channel with the AI team',
      ],
      suitableFor:
        'Teams that want their AI solution operated and kept accurate while they focus on the product and the business',
      primaryCta: { label: 'Book Managed AI Call', href: '/contact?ai=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'ML Development',
      description:
        'Turns out your problem is prediction — forecasting, churn, ranking, anomaly detection? This is the dedicated track: a custom model trained, evaluated honestly, and shipped to production with drift monitoring so it survives live data.',
      href: '/services/ml-development',
      icon: 'BrainCircuit',
      pageType: 'service',
    },
    {
      title: 'Generative AI',
      description:
        'Turns out your problem is language, documents, or retrieval? This is the dedicated track: production RAG systems, AI agents, and LLM integrations built with grounding, guardrails, and monitoring from the first sprint.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
    {
      title: 'Native AI Development',
      description:
        'Decided AI should be foundational, not a bolt-on? When you are building a product designed around a foundation model from day one — the architecture, the AI-native UX, and the prompt and cost layer — this is the dedicated build engagement.',
      href: '/services/native-ai-development',
      icon: 'Boxes',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'We know we want to use AI but not what kind — is this the right place to start?',
      answer:
        'Yes — that is exactly who this engagement is for. You do not need to arrive knowing whether you need a predictive model, a generative AI system, computer vision, or document AI. You bring the problem and your data; we run a structured assessment and recommend the approach that fits, with the reasoning shown. If you already know the modality, our specialist tracks for ML, generative AI, computer vision, and document AI go straight to the build. If you do not, start here and we figure it out together before any large commitment.',
    },
    {
      question: 'How do you decide which AI approach is right for our problem?',
      answer:
        'We start from the problem and the data, never from a favorite technology. We look at what you are trying to predict, generate, classify, or automate; what data you have and its quality; your latency, cost, and accuracy needs; and your risk tolerance. That points to one of a few approaches — a custom predictive model, a generative / retrieval system, vision, language and document AI, or plain automation. We weigh them openly and recommend the fit. Crucially, "you do not need AI for this — a simpler approach wins" is a legitimate, common, and honest outcome.',
    },
    {
      question: 'Will you actually ship something to production, or just build a demo?',
      answer:
        'Production is the design target from the first day, not a phase we hope to reach. We frame the problem against the system that will use the result, build data pipelines that run the same way in production as in development, and package the solution behind a versioned API or inside your application with a staged rollout and a rollback path. The gap between an impressive prototype and a system real users depend on is where most AI efforts die — the engagement is structured around closing it, not around the demo.',
    },
    {
      question: 'How do we start without betting the whole budget on something unproven?',
      answer:
        'Start with the AI Feasibility Sprint. In about two weeks we frame your problem, recommend the right approach, check whether your data can support it, and build enough on your real data to give you an honest go / no-go with a build estimate. You leave with a clear decision and the evidence behind it — not a six-figure commitment made on faith. The full build begins only once we both know the approach can work, so your larger spend follows proof rather than precedes it.',
    },
    {
      question: 'Do we own what you build, or are we locked into you?',
      answer:
        'You own it. We build on open frameworks with a documented codebase, and where a trained model is involved we hand over the model registry, pipelines, and a runbook your team can run. Handover includes structured knowledge transfer so your engineers can operate, retrain, and extend the solution without us. If you choose the managed option, that is a convenience, not a dependency — you can take operations in-house at any point.',
    },
    {
      question: 'How do you handle our data, PII, and AI governance?',
      answer:
        'PII is identified at the data-pipeline layer and handled according to your requirements — masking, exclusion, or aggregation depending on what the solution actually needs — and datasets are versioned so there is a traceable record of what data the system used. This supports your CCPA and internal data-governance obligations. We architect the data layer so privacy decisions are explicit and documented rather than buried. We do not provide legal compliance certification; we build the AI and data layer so it supports your governance program rather than working against it.',
    },
  ],

  cta: {
    title: 'Have a problem you think AI can solve?',
    description:
      'Book a 30-minute call. Tell us the problem and what data you have — we will talk through whether AI fits, which approach makes sense, and whether a feasibility sprint or a full build is the right place to start.',
    primaryCta: { label: 'Book an AI scoping call', href: '/contact' },
    secondaryCta: { label: 'See how we choose', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable AI engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Feasibility Sprint. Confirm achievability.',
    'engagementModels[1].duration — "8–12 weeks" for Custom AI Build. Confirm typical engagement length.',
    'engagementModels[2].priceFrom — "$6,000/mo" managed option. Confirm pricing model.',
    'technologies — confirm the stack matches what we actually deliver across modalities.',
    'images at public/images/services/ai-development/ are placeholder copies for spec parity only; they do NOT render — ServiceDetailTemplate renders imageFeatures as null for service pages (§11.5). Replace with the documented subjects only if a future template change renders service imageFeatures.',
  ],
};

export default aiDevelopment;
