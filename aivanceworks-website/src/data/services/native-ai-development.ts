import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: CTO / VP Engineering / Head of Product / technical co-founder at a US software
//   company (20–2,000 employees) building a NEW product, or a major new capability, where
//   they have already decided AI should be foundational — woven into how the software works,
//   not a feature stapled to the side. They are a builder hiring a builder.
// Measured on: shipping a working product (not a demo), product velocity, a differentiated
//   AI experience, and NOT getting trapped by runaway model/token costs or single-vendor
//   lock-in. They own the architecture decision and live with it for years.
// Top 3 questions buyers arrive with:
//   (a) "What does 'AI-native' actually mean in the architecture — how is this different
//        from just adding a chatbot to what we already have?"
//   (b) "Will you ship a real product, or another flashy AI demo that falls over in production
//        (brittle prompts, hallucinations, runaway token bills)?"
//   (c) "Are we locked into one model provider, and do we own what you build?"
// Key trust issue: the demo-to-product gap for AI-native software. This buyer has seen (or
//   built) impressive AI demos that never became dependable products — prompts edited live and
//   praying, no evals, token spend that ballooned with usage, and a hard dependency on one
//   model vendor whose price or policy could change overnight. They want AI as a designed-in
//   foundation with the prompt management, evals, and cost controls that make it survivable.
//
// Differentiation from AI-pillar siblings (must NOT overlap — woven into FAQ + features):
//   - vs ML Development: ML Dev TRAINS custom models from scratch on your data. Native AI
//     BUILDS ON pre-trained foundation models as a core architectural layer — no training run.
//   - vs Generative AI: GenAI is ONE modality (RAG, agents, LLM features you can add to an
//     existing app). Native AI is the broader ARCHITECTURAL PHILOSOPHY — designing the whole
//     system around a foundation model from day one; generation is one thing that lives inside it.
//   - vs Agentic AI: agents are a SUBSET — one pattern an AI-native system might use. This page
//     is the foundation/architecture layer underneath any of those patterns.
//   This page is the AI-pillar's "build software that is AI-native from day one" entry point,
//   distinct from the modality pages and from the problem-router (AI Development).
//
// Signature: AiNativeArchitectureContrast (NEW, single-use) — two architectures side by side:
//   "AI bolted on" (a chatbot widget stapled to a legacy CRUD core, dim/brittle) vs.
//   "AI-native" (foundation model as a core layer, with AI-native UX, prompt management, and
//   serving/embeddings/evals/cost infra around it; click a layer to see what we build).
//   Visualization pattern: comparison / before-after (catalog #4).
//   Why a NEW signature (Component Reuse Rule §8.4): no existing AI signature is a side-by-side
//   contrast of two whole-system architectures. AiApproachSelector routes problem→modality;
//   ModelLifecycleLoop is a cyclical ML loop; GenAiPipelineArchitecture is ONE RAG pipeline (not
//   a before/after); AgentAutonomySpectrum is a control gradient; EnterpriseAiDeliveryWrapper is
//   a core-protected-by-enclosing-layers containment. The bolted-on-vs-native contrast IS the
//   emotional argument and a FeatureGrid cannot express two competing architectures.
//   Emotional argument: "Where the model sits decides what you get. Bolt it on, you get a demo;
//   design it in as a core layer, you get a product. We build the second kind."
//
// Composition: Archetype B default (mirrors ml-development.ts / ai-development.ts):
//   hero → metricsStrip → featureGrid → imageFeatures → signature → benefitsGrid →
//   techStackBlock → engagementModels → relatedPages → faq → ctaBlock. 10 visible sections
//   (Archetype B ceiling).
//   - ProcessTimeline DROPPED — Archetype B says drop ProcessTimeline when the signature carries
//     the method; the architecture contrast + engagement ladder already show how we work.
//   - BenefitsGrid KEPT — this buyer's trust is best answered in outcome language (designed-in
//     not bolted-on, across the production gap, no lock-in, governed cost, you own it), all
//     capability-framed for greenfield integrity.
//   - imageFeatures included in composition after featureGrid per the page brief, but
//     ServiceDetailTemplate renders it as null (§11.5 — service pages use the SVG hero
//     illustration, not photos). Placeholder photos exist at
//     public/images/services/native-ai-development/ for spec parity; they do NOT render.
//
// Archetype confirmation (§9.5 audience test / §9.6 self-challenge):
//   - vs A (Strategic): a strategy buyer wants a roadmap/business case (ai-strategy-consulting).
//     This buyer wants a RUNNING AI-native SYSTEM. Deliverable is shipped software → B, not A.
//   - vs D (Commerce): the buyer's primary concern is execution and architecture ("prove you can
//     build it right and that it survives production"), not a revenue/conversion KPI → B, not D.
//   - vs C (Regulated): AI-native software touches data-privacy (CCPA, PII passing through model
//     prompts/inference), but this buyer is not GATED by an auditor — governance is a hygiene
//     factor. One light governance signal is woven into a feature + a single FAQ, NOT a full
//     ComplianceDeepDive. Deliberate Archetype-C cherry-pick (§6.5), documented.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → FeatureGrid (warm) → [imageFeatures null] →
//   Signature (dark) → BenefitsGrid (light) → TechStackBlock (warm) → EngagementModels (light) →
//   RelatedPages (warm) → FAQ (light) → CTA (accent)
//   Two darks (hero + signature), no adjacency, CTA accent — rhythm rules satisfied.
//
// Native AI Development maps to the AI & Machine Learning pillar. Buyers search
// "ai-native development", "ai native software development", "build ai-native app",
// "foundation model integration", "ai-first product development", "llm application development".
// NO complex third-party integration claims are made anywhere (hard constraint): foundation
// models are tools we BUILD WITH (not shipped integrations), deployment is framed as a clean
// interface your own systems call, and every metric is capability-framed greenfield-honest — so
// nothing on the page is a liability.

const nativeAiDevelopment: ServicePageData = {
  slug: 'native-ai-development',
  title: `${BRAND_PREFIX} Native AI Development`,
  shortDescription:
    'AI-native software development — building products where a foundation model is a core architectural layer from day one, with prompt management, AI-native UX, and the serving, evaluation, and cost controls that keep it production-grade.',

  metaTitle: 'Native AI Development | AI-Native Software Development',
  metaDescription:
    'AI-native development: building software where a pre-trained foundation model is a core architectural component from day one — not a chatbot bolted on. Foundation model integration, prompt management, AI-native UX, and the serving, evals, and cost infrastructure that ship it to production.',
  keywords: [
    'native ai development',
    'ai-native development',
    'ai native software development',
    'foundation model integration',
    'ai-first product development',
    'llm application development',
    'ai native architecture',
    'build ai-native app',
    'prompt engineering and management',
    'ai native ux design',
    'production llm application',
    'ai application development company',
  ],
  canonicalPath: '/services/native-ai-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: `${BRAND_PREFIX} Native AI Development`, href: '/services/native-ai-development' },
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
  signatureComponent: 'AiNativeArchitectureContrast',
  heroIllustrationComponent: 'AiNativeHeroIllustration',

  hero: {
    badge: 'AI-Native Development',
    headline: 'AI built into the foundation. Not bolted on.',
    subhead:
      'We build software where a foundation model is a core architectural layer from day one — with prompt management, AI-native UX, and the cost and evaluation controls that turn a demo into a product.',
    primaryCta: { label: 'Book an AI-Native Scoping Call', href: '/contact' },
    secondaryCta: { label: 'See the difference', href: '#signature' },
  },

  // Audience test: a CTO / Head of Product scanning in 8 seconds. Each metric is capability-framed
  // (greenfield integrity — no fabricated outcomes) and answers one concern this buyer carries:
  // is the model designed in (not bolted on), is it production-grade, is cost governed, and am I
  // locked to one vendor.
  metricsStrip: [
    {
      value: 'Model at the Core',
      label: 'Designed in, not bolted on',
      description: 'A foundation model as a core architectural layer',
    },
    {
      value: 'Production-Bound',
      label: 'A product, not a demo',
      description: 'Prompt versioning, evals, and monitoring built in',
    },
    {
      value: 'Cost-Governed',
      label: 'Token spend stays predictable',
      description: 'Token and inference cost controls from day one',
    },
    {
      value: 'Provider-Agnostic',
      label: 'No model lock-in',
      description: 'OpenAI, Anthropic, Gemini, or open-source',
    },
  ],

  // Audience test: the buyer confirming we cover the full architecture of an AI-native product,
  // in language they understand. Each feature is an architectural layer, not a technology list.
  // Feature 6 carries the light governance signal (Archetype-C cherry-pick) and liability boundary.
  // No complex third-party integration claims: feature 5 frames deployment as a clean interface
  // YOUR systems call, not an integration we have shipped.
  features: [
    {
      icon: 'Boxes',
      title: 'Foundation Model Integration',
      description:
        'We build directly on top of pre-trained foundation models — OpenAI, Anthropic, Gemini, or open-source — as a core architectural layer the product is designed around, behind a provider-agnostic interface so you are never married to one vendor.',
    },
    {
      icon: 'TerminalSquare',
      title: 'Prompt Engineering & Management',
      description:
        'Prompts treated as first-class assets: structured templates, version control, and an evaluation harness so a wording change is tested before it ships — not edited live in production and hoped for.',
    },
    {
      icon: 'MessagesSquare',
      title: 'AI-Native UX',
      description:
        'Interfaces designed around AI interaction patterns — chat, copilot, voice, assistive and autonomous actions — built as the primary way users work, with streaming and graceful fallbacks, rather than a chat box wedged into a traditional CRUD screen.',
    },
    {
      icon: 'Layers',
      title: 'Embeddings & Retrieval Layer',
      description:
        'Embedding pipelines and retrieval so the model answers from your content and context, not just its training data — the grounding layer that keeps an AI-native product accurate and relevant to your domain.',
    },
    {
      icon: 'Rocket',
      title: 'Model Serving & Deployment',
      description:
        'Inference handling, response streaming, and the application packaged behind a clean, versioned interface your own systems call — with a staged rollout and a fallback path. This is where AI projects stall; closing it is the core of the engagement.',
    },
    {
      icon: 'Activity',
      title: 'Evals, Observability & Cost Control',
      description:
        'Evaluation harnesses and observability to watch model behavior in production, plus token and inference cost controls so spend stays predictable as usage grows. PII passing through prompts is identified and handled to support your CCPA and data-governance obligations.',
    },
  ],

  // imageFeatures: included in composition per the page brief, but ServiceDetailTemplate renders
  // this section as null for service pages (§11.5 — services use the SVG hero illustration above,
  // not photos). Placeholder photos for spec parity live at
  // public/images/services/native-ai-development/{hero,feature-1,feature-2}.jpg. Image specs if a
  // future template change renders them:
  //   hero.jpg     — a product + engineering team designing an AI-first product at a whiteboard,
  //                  model/architecture sketches visible (human faces, diverse, no robot cliché).
  //   feature-1.jpg — an engineer reviewing a prompt-evaluation dashboard on a laptop.
  //   feature-2.jpg — a team reviewing a live AI product's cost/observability dashboard together.
  //   Landscape, min 1200px wide, Unsplash, no color grading. alt text describes the scene.

  // Audience test: the buyer evaluating outcomes. Each benefit answers a specific scar this buyer
  // carries — bolt-on AI that feels tacked-on (→ designed in), demos dying in prod (→ production
  // gap), runaway token bills (→ governed cost), single-vendor risk (→ no lock-in), and being left
  // with a system they can't run (→ ownership). All framed as capabilities — greenfield-safe.
  benefits: [
    {
      icon: 'Sparkles',
      title: 'AI That Feels Designed In',
      description:
        'When the foundation model is a core layer rather than a widget on the edge, the AI experience is the product — not a chat box taped to the side of an app that still works the old way. The result feels native because it was architected to be.',
    },
    {
      icon: 'Rocket',
      title: 'Across the Production Gap',
      description:
        'Built to ship to real users — with prompt versioning, evals, monitoring, and a fallback path designed for production traffic, not a prototype that wins a meeting and then lives forever in a sandbox. Reaching production is the design target from day one.',
    },
    {
      icon: 'Wallet',
      title: 'Token Spend You Can Predict',
      description:
        'Inference and token costs are designed for from the start — caching, model routing by task, and usage controls — so your AI bill scales with value, not as a surprise line item that grows faster than your user base.',
    },
    {
      icon: 'Layers',
      title: 'No Model Lock-In',
      description:
        'A provider-agnostic foundation layer means you can route between OpenAI, Anthropic, Gemini, or an open-source model — and swap the model underneath as prices and capabilities change, without re-architecting the product around it.',
    },
    {
      icon: 'KeyRound',
      title: 'You Own What We Build',
      description:
        'Built on open frameworks with a documented codebase, versioned prompts, and runbooks your team can run. No black box and no dependency on us to keep it alive — you can take the product in-house whenever you choose.',
    },
  ],

  // Audience test: a technical buyer validates depth here. Everything listed is industry-proven
  // and something we build with (greenfield capability framing). Capabilities = what we do;
  // technologies = what we build with. No claim of past shipped integrations.
  capabilities: [
    'AI-native architecture design (foundation model as a core layer)',
    'Foundation model integration behind a provider-agnostic interface',
    'Structured prompt engineering, versioning, and evaluation',
    'AI-native UX design (chat, copilot, voice, assistive flows)',
    'Embedding pipelines and retrieval grounding',
    'Model serving, inference handling, and response streaming',
    'Multi-model routing and fallback by task, cost, and latency',
    'Evals and observability for production model behavior',
    'Token and inference cost management',
    'PII-aware prompt handling and AI governance support',
  ],
  technologies: [
    'TypeScript',
    'Python',
    'React / Next.js',
    'OpenAI / Anthropic / Gemini',
    'Open-source LLMs',
    'LangChain',
    'Vector databases',
    'FastAPI',
    'Vercel AI SDK',
    'OpenTelemetry',
    'Docker',
    'AWS / Azure / GCP',
  ],

  engagementModels: [
    {
      name: 'AI-Native Architecture Sprint',
      duration: '2 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'AI-native architecture design for your product',
        'Foundation model selection and provider-agnostic design',
        'Prompt, evals, and cost-control approach',
        'Working proof-of-concept of the core AI flow',
        'Build estimate and production roadmap',
      ],
      suitableFor:
        'Teams designing a new AI-first product (or a major AI-native capability) who need the architecture right before committing to a full build',
      primaryCta: { label: 'Book Architecture Sprint', href: '/contact?native-ai=architecture' },
    },
    {
      name: 'AI-Native Product Build',
      duration: '8–14 weeks',
      priceFrom: '$80,000',
      whatsIncluded: [
        'Foundation model integration as a core layer',
        'AI-native UX (chat, copilot, voice, or assistive)',
        'Prompt management, versioning, and an evaluation harness',
        'Embeddings/retrieval grounding where the product needs it',
        'Serving, observability, and token/cost controls',
        'Handover documentation and runbooks',
      ],
      suitableFor:
        'Teams ready to build an AI-native product to production with the prompt, evals, and cost foundation to operate it',
      primaryCta: { label: 'Book a Build Call', href: '/contact?native-ai=build' },
      featured: true,
    },
    {
      name: 'AI-Native Build + Managed',
      duration: '8–14 week build + ongoing',
      priceFrom: '$80,000 + $7,500/mo',
      whatsIncluded: [
        'Everything in AI-Native Product Build',
        'Ongoing model evaluation and prompt tuning',
        'Model upgrades and provider migration as the market shifts',
        'Cost and performance monitoring with monthly reviews',
        'Direct Slack/Teams channel with the AI team',
      ],
      suitableFor:
        'Teams that want their AI-native product kept current and cost-efficient while they focus on the product and the business',
      primaryCta: { label: 'Book Managed AI Call', href: '/contact?native-ai=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'Generative AI',
      description:
        'Have an existing app and just need an AI feature inside it — RAG, an assistant, an LLM workflow? That is the modality engagement: production generative AI added to your product, with grounding and guardrails — rather than re-architecting the whole system around the model.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
    {
      title: 'Agentic AI Development',
      description:
        'Want your AI-native product to take actions, not just generate? Agents are one pattern an AI-native system can use. This engagement adds autonomous, tool-using agents with the autonomy levels and guardrails that keep them under your control.',
      href: '/services/agentic-ai-development',
      icon: 'Bot',
      pageType: 'service',
    },
    {
      title: 'AI Development',
      description:
        'Not sure AI should be foundational — or which approach even fits? Step back to a problem-first engagement: we weigh a foundation-model architecture against a custom model, vision, or no AI at all, then build whichever solves your problem.',
      href: '/services/ai-development',
      icon: 'Compass',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'What does "AI-native" actually mean — how is it different from adding a chatbot to our app?',
      answer:
        'AI-native means the foundation model is a core architectural layer the product is designed around, not a feature stapled to the edge. A bolted-on chatbot sits next to an app that was built before AI existed; it demos well but the experience still works the old way and the model never touches the core. An AI-native build designs the UX, the data flow, the prompt layer, and the infrastructure to work with the model from the first sprint — so the AI experience is the product, prompts are versioned and tested, cost is governed, and you can swap the model underneath without rebuilding. The signature section on this page shows the two architectures side by side.',
    },
    {
      question: 'How is this different from ML Development, Generative AI, and Agentic AI?',
      answer:
        'They sit at different layers. ML Development trains a custom model from scratch on your data; Native AI builds on a pre-trained foundation model as a core layer — no training run. Generative AI is one modality — a RAG system or LLM feature you can add to an existing app — whereas Native AI is the broader architectural philosophy of designing the whole product around a foundation model, with generation being one thing that lives inside it. Agentic AI is a subset: agents are one pattern an AI-native system might use. Start here when you are building software that should be AI-native from day one; start with the modality pages when you already know exactly what you want to add.',
    },
    {
      question: 'Will you ship a real product, or another impressive demo that breaks in production?',
      answer:
        'Production is the design target from the first day. The difference between an AI demo and an AI product is the unglamorous layer — versioned prompts with an evaluation harness so a change is tested before it ships, observability to watch model behavior live, token and cost controls so spend stays predictable, and a fallback path when the model is slow or unavailable. We build that layer from the start rather than retrofitting it after the first production incident, because the demo-to-product gap is exactly where AI-native efforts die.',
    },
    {
      question: 'Are we locked into one model provider — and how do you keep token costs under control?',
      answer:
        'We build the foundation layer to be provider-agnostic, so the product talks to a model through an interface we control rather than hard-wiring to one vendor. You can route between OpenAI, Anthropic, Gemini, or an open-source model and swap the model underneath as prices and capabilities change. Cost is designed for from day one: caching repeated calls, routing simpler tasks to cheaper models, and usage controls — so your AI bill scales with the value the product delivers, not as a surprise that grows faster than your user base.',
    },
    {
      question: 'Do we own what you build, or are we dependent on you to run it?',
      answer:
        'You own it. We build on open frameworks with a documented codebase, versioned prompts, and an evaluation suite, and we hand over runbooks so your team can operate, tune, and extend the product without us. Handover includes structured knowledge transfer for your engineers. If you choose the managed option, that is a convenience, not a dependency — you can take operations in-house at any point.',
    },
    {
      question: 'How do you handle our data, PII, and AI governance in an AI-native product?',
      answer:
        'PII that would pass through model prompts or inference is identified and handled according to your requirements — masking, redaction, or exclusion depending on what the product actually needs — and prompt and model interactions are logged so there is a traceable record. This supports your CCPA and internal data-governance obligations. We architect the model layer so privacy decisions are explicit and documented rather than buried in a prompt template. We do not provide legal compliance certification; we build the AI layer so it supports your governance program rather than working against it.',
    },
  ],

  cta: {
    title: 'Building a product that should be AI-native from day one?',
    description:
      'Book a 30-minute call. Tell us what you are building and we will talk through what an AI-native architecture looks like for it — the model layer, the UX, the prompt and cost foundation, and where to start.',
    primaryCta: { label: 'Book an AI-native scoping call', href: '/contact' },
    secondaryCta: { label: 'See the difference', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable AI-native engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Architecture Sprint. Confirm achievability.',
    'engagementModels[1].duration — "8–14 weeks" for AI-Native Product Build. Confirm typical engagement length.',
    'engagementModels[2].priceFrom — "$7,500/mo" managed option. Confirm pricing model.',
    'technologies — confirm the stack matches what we actually deliver (e.g., Vercel AI SDK, vector DB choice, OpenTelemetry for observability).',
    'images at public/images/services/native-ai-development/ are placeholder copies for spec parity only; they do NOT render — ServiceDetailTemplate renders imageFeatures as null for service pages (§11.5). Replace with the documented subjects only if a future template change renders service imageFeatures.',
  ],
};

export default nativeAiDevelopment;
