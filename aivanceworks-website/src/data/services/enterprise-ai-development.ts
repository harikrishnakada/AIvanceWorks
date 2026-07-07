import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service ("I need this built. Prove you can.")
// Buyer: VP of Engineering / Head of AI / Director of Enterprise Architecture / CTO
//   at a US large enterprise or upper-mid-market company (1,000+ employees, or a
//   smaller company with enterprise-grade governance demands). They own the mandate to
//   take AI from pilot to production across the organization — not a single notebook,
//   but a system that has to survive a security review, an architecture review, and a
//   data-governance review before it is allowed anywhere near real users.
// Measured on: getting AI initiatives past internal review and into production at scale;
//   whether the AI delivers durable operational value rather than a one-off demo; whether
//   it holds the organization's security and data-governance posture; and whether their
//   own teams can operate and own it afterward (not stay dependent on a vendor).
// Top 3 questions buyers arrive with:
//   (a) "Can you get AI past our security, architecture, and legal review — or will it
//        stall in pilot purgatory like our last attempt?"
//   (b) "Will it actually scale and run alongside our existing systems — not just in a
//        sandbox demo for ten internal users?"
//   (c) "Can our teams govern, operate, and trust it, and does it hold our security and
//        data-governance posture?"
// Key trust issue (the scar): PILOT PURGATORY. This buyer has watched an impressive AI
//   demo die because it could not clear the enterprise gates — InfoSec flagged the auth
//   model, architecture review rejected the scaling story, governance blocked the data
//   access, and nobody had thought about day-2 operations. They have been sold slick POCs
//   by vendors who understood the model but not enterprise delivery (SSO, RBAC, audit
//   logging, environments, runbooks, rollout, handoff). The DIFFERENTIATOR of this page
//   is the enterprise-grade DELIVERY WRAPPER around the AI — not the model itself.
//
// LIABILITY GUARDRAIL (hard, per page brief): NO complex third-party integration claims.
//   The page never names a specific ERP/CRM/data-warehouse product as a shipped or
//   turnkey integration. "Works alongside your existing systems" is framed only as a
//   capability through standard, supported interfaces (versioned APIs), with the explicit
//   statement that exact systems/interfaces are scoped per engagement and no turnkey
//   connector to any named third-party platform is claimed. Every technology listed is a
//   generic, industry-proven engineering tool we build with (greenfield "build with"
//   framing), so nothing on the page is a liability. No IntegrationsPanel section — it
//   would invite specific vendor + connection-method claims and developer-lens plumbing a
//   business/eng-leadership buyer evaluating delivery maturity does not need.
//
// Signature: EnterpriseAiDeliveryWrapper (NEW, single-use) — a central AI core
//   ("your AI capability: ML model, GenAI, or agent") enclosed by five concentric
//   enterprise-grade layers (Security & Access → Data Governance → Scalable Architecture
//   → Observability & Operations → Adoption & Handoff), all framed by an outer
//   "governed enterprise production" boundary. Visualization pattern: hierarchical /
//   architectural — containment (catalog #2). Click any layer to focus it.
//   Why a NEW signature (Component Reuse Rule): no existing signature expresses CONTAINMENT
//   — a core wrapped by protective layers. AiInfrastructureStack (ai-infrastructure
//   solution) is a bottom-up platform stack (compute → data → serving), a different
//   argument; ModelLifecycleLoop is a cyclical ML process; GenAiPipelineArchitecture is a
//   linear RAG pipeline. The page's entire thesis — "the model is the easy part; the
//   wrapper around it is the work that reaches production" — is a wrapping/containment
//   relationship a FeatureGrid (a flat grid of equals) structurally cannot show.
//   Emotional argument: "A model is a demo. The security, governance, scale, operations,
//   and adoption layers wrapped around it are what carry it across the pilot-to-production
//   gap and keep it alive in your enterprise."
//
// Composition: Archetype B default (mirrors ml-development.ts / generative-ai.ts):
//   hero → metricsStrip → featureGrid → signature → benefitsGrid → techStackBlock →
//   engagementModels → relatedPages → faq → ctaBlock. 10 rendered sections (Archetype B
//   ceiling).
//   - ProcessTimeline DROPPED — Archetype B says drop ProcessTimeline when the signature
//     already carries the method; the wrapper + engagement models communicate the delivery
//     approach. (Same call as ml-development.ts / generative-ai.ts.)
//   - BenefitsGrid KEPT — this buyer's scars (pilot purgatory, failed review, no day-2 ops,
//     vendor lock-in) are best answered in outcome language, all capability-framed for
//     greenfield integrity.
//   - No ComplianceDeepDive / ComplianceSpotlight. This buyer is NOT gated by a single
//     external regulator the way a Patient Portal or EBR buyer is — enterprise security and
//     data governance are the buyer's OWN internal gates, which the signature wrapper and
//     the security/governance features already carry as the page's core argument. A full
//     compliance section would duplicate the signature's job. This is the documented
//     Archetype-C cherry-pick (§6.5): one governance signal woven into features/benefits +
//     a single governance FAQ, not a dedicated compliance gate. (Mirrors ml-development.ts.)
//   - imageFeatures appears in the composition after featureGrid per the page brief, but
//     ServiceDetailTemplate renders imageFeatures as null (§11.5: service pages use an SVG
//     hero illustration, not photos). Placeholder photos exist at
//     public/images/services/enterprise-ai-development/ for spec/parity with solution
//     pages; they do NOT render. Matches the v2.4/v2.5 precedent (poc / api-development /
//     ml-development): "imageFeatures renders null on ServiceDetailTemplate."
//
// Archetype confirmation (§9.5 audience test, §9.6 self-challenge):
//   - Brief specifies Archetype B (Technical, running-system deliverable). Confirmed: the
//     deliverable is a running, governed AI system, and the buyer's question is execution
//     ("prove you can build AND deliver it into MY environment"), not strategy.
//   - vs C (Regulated): the audience test resolver — "does this buyer answer to a regulator
//     or a revenue target?" — returns NEITHER cleanly. This buyer answers to INTERNAL
//     security/architecture/governance review boards, not an external auditor like
//     HIPAA/PCI. So it stays B with a governance cherry-pick, rather than defaulting to C.
//   - vs D (Commerce): the buyer's KPI is shipping AI past enterprise gates and operating
//     it, not revenue/conversion → B.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → FeatureGrid (warm) → Signature (dark) →
//   BenefitsGrid (light) → TechStackBlock (warm) → EngagementModels (light) →
//   RelatedPages (warm) → FAQ (light) → CTA (accent)
//   Two darks (hero + signature), no adjacency, CTA accent — rhythm rules satisfied.
//
// Enterprise AI Development maps to the AI & Machine Learning pillar. It is the DELIVERY
// WRAPPER offering — the umbrella under which ML Development, Generative AI, and agentic
// work are taken into large, governed organizations. Buyers search "enterprise AI
// development", "enterprise AI implementation", "production AI for enterprises",
// "enterprise generative AI", "AI governance and deployment" — not internal labels.

const enterpriseAiDevelopment: ServicePageData = {
  slug: 'enterprise-ai-development',
  title: `${BRAND_PREFIX} Enterprise AI Development`,
  shortDescription:
    'Enterprise AI development — models, generative AI, and agents wrapped in the security, governance, scale, and operations a large organization requires to take AI from pilot to governed production.',

  metaTitle: 'Enterprise AI Development | Production AI Built for Large Organizations',
  metaDescription:
    'Enterprise AI development that clears security, architecture, and data-governance review and reaches production. We wrap ML, generative AI, and agents in enterprise-grade access control, governance, scalable architecture, observability, and handoff.',
  keywords: [
    'enterprise ai development',
    'enterprise ai implementation',
    'production ai for enterprises',
    'enterprise generative ai development',
    'enterprise ai consulting',
    'ai governance and deployment',
    'scalable ai architecture',
    'secure ai development',
    'ai deployment services',
    'enterprise ai delivery',
    'ai pilot to production',
    'mlops and llmops services',
  ],
  canonicalPath: '/services/enterprise-ai-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: `${BRAND_PREFIX} Enterprise AI Development`, href: '/services/enterprise-ai-development' },
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
  signatureComponent: 'EnterpriseAiDeliveryWrapper',
  heroIllustrationComponent: 'EnterpriseAiHeroIllustration',

  hero: {
    badge: 'AI & Machine Learning',
    headline: 'Enterprise AI built to pass review and reach production.',
    subhead:
      'We wrap your AI — models, generative AI, or agents — in the security, governance, scale, and operations an enterprise demands, so it reaches governed production instead of stalling in pilot.',
    primaryCta: { label: 'Book an Enterprise AI Scoping Call', href: '/contact' },
    secondaryCta: { label: 'See the delivery wrapper', href: '#signature' },
  },

  // Audience test: VP Engineering / Head of AI scanning in 8 seconds. Each metric is
  // capability-framed (greenfield integrity — no fabricated stats) and speaks to THIS
  // buyer's gates: passing review, reaching production, fitting the existing estate,
  // and owning it afterward. §9.9: these are the enterprise buyer's OWN operational
  // gates (what blocks them from shipping), not external-auditor posture statements.
  metricsStrip: [
    {
      value: 'Review-Ready',
      label: 'Clears your gates',
      description: 'Security, architecture, and governance review built in from day one',
    },
    {
      value: 'Production-Bound',
      label: 'Past the pilot',
      description: 'Engineered to ship, scale, and operate — not stall in a sandbox',
    },
    {
      value: 'Standards-Based',
      label: 'Fits your estate',
      description: 'Runs alongside your systems through standard, supported interfaces',
    },
    {
      value: 'Handoff-Ready',
      label: 'Your team owns it',
      description: 'Environments, runbooks, and knowledge transfer at delivery',
    },
  ],

  // Audience test: enterprise eng-leadership buyer confirming we understand the DELIVERY
  // wrapper, not just the model. Each feature is a gate this buyer has been blocked by.
  // Governance/security woven across features 1, 2, 5 (the Archetype-C cherry-pick signal),
  // not split into a separate compliance section. Feature 4 is the integration story,
  // framed capability-only with NO named third-party product (liability guardrail).
  features: [
    {
      icon: 'ShieldCheck',
      title: 'Security & Access Control',
      description:
        'Single sign-on (SSO via SAML or OIDC), role-based access control, encryption in transit and at rest, and managed secrets — built to your enterprise security baseline so the AI system passes InfoSec review instead of stalling in it.',
    },
    {
      icon: 'Lock',
      title: 'Data Governance & Privacy',
      description:
        'PII is identified and handled at the data layer, with access boundaries, data lineage, and retention controls — so the AI uses your data within the governance rules your organization already enforces, not around them.',
    },
    {
      icon: 'Boxes',
      title: 'Scalable, Cloud-Native Architecture',
      description:
        'Containerized, horizontally scalable services on your cloud (Azure, AWS, or GCP), with separate development, staging, and production environments — architected for real organizational load, not a single-user demo.',
    },
    {
      icon: 'Plug',
      title: 'Built to Fit Your Estate',
      description:
        'Delivered behind versioned APIs and standard, supported interfaces so the AI runs alongside the systems your teams already use — without brittle, one-off connections that break on the next upgrade. Exact systems and interfaces are scoped per engagement.',
    },
    {
      icon: 'Activity',
      title: 'Observability & Operations',
      description:
        'Monitoring, quality and drift checks, audit logging, and alerting — with the dashboards and on-call runbooks your operations team needs to run the system after launch, so day-2 is designed for, not discovered in an incident.',
    },
    {
      icon: 'Users',
      title: 'Adoption & Handoff',
      description:
        'Rollout planning, role-based onboarding, documentation, and structured knowledge transfer — so the AI is actually adopted across the organization and your team can operate and extend it without staying dependent on us.',
    },
  ],

  // imageFeatures: included in composition per the page brief, but ServiceDetailTemplate
  // renders this section as null for service pages (§11.5 — services use the SVG hero
  // illustration above, not photos). Placeholder photos for spec parity live at
  // public/images/services/enterprise-ai-development/{hero,feature-1,feature-2}.jpg.
  // Image specs if a future template change renders them:
  //   hero.jpg     — an enterprise engineering / architecture team reviewing a system
  //                  diagram on a large screen in a modern office (human faces, diverse,
  //                  no cliché brain-circuit or glowing-AI art).
  //   feature-1.jpg — a security/platform engineer at a workstation reviewing access
  //                   controls and dashboards.
  //   feature-2.jpg — a cross-functional team in a working session planning a rollout.
  //   Landscape, min 1200px wide, Unsplash, no color grading. alt describes the scene.

  // Audience test: enterprise buyer evaluating outcomes. Each benefit answers a specific
  // scar — pilots stranded (→ out of pilot purgatory), failed review (→ passes review),
  // demo that didn't scale (→ scales past the demo), vendor lock (→ ownership), no day-2
  // ops (→ operable after launch). All framed as capabilities ("built to", "architected
  // for", "designed for") — greenfield-safe.
  benefits: [
    {
      icon: 'Rocket',
      title: 'Out of Pilot Purgatory',
      description:
        'AI built to clear the security, architecture, and governance gates that strand most enterprise pilots — so the initiative reaches production instead of dying as another impressive demo nobody could ship.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Passes Enterprise Review',
      description:
        'Designed around your security baseline, access model, and data-governance rules from the first sprint, so review becomes a checkpoint you pass — not a wall you hit the week before launch.',
    },
    {
      icon: 'Gauge',
      title: 'Scales Past the Demo',
      description:
        'Architected for real organizational load across proper environments, so the system that works for ten internal users keeps working when the whole organization depends on it.',
    },
    {
      icon: 'KeyRound',
      title: 'No Vendor Lock-In',
      description:
        'Built on open, portable frameworks on your own cloud, with documentation, environments, and structured handoff so your team can run, update, and extend the system independently of us.',
    },
    {
      icon: 'Eye',
      title: 'Operable After Launch',
      description:
        'Monitoring, audit logging, alerting, and runbooks built in, so day-2 operations are engineered up front — your team runs the system from a dashboard, not from a production fire.',
    },
  ],

  // Audience test: technical buyer validates delivery depth here. Everything listed is
  // industry-proven and we build with it (greenfield "build with" framing). Capabilities =
  // what we do; technologies = what we build with. NO named third-party business system
  // (ERP/CRM/warehouse) and NO claim of past shipped integrations — liability guardrail.
  capabilities: [
    'Enterprise AI architecture and solution design',
    'Security and access control (SSO via SAML/OIDC, RBAC)',
    'Data governance, PII handling, lineage, and access boundaries',
    'Cloud-native, containerized, horizontally scalable services',
    'Multi-environment delivery (dev / staging / prod) and CI/CD',
    'Versioned API delivery and standards-based interfacing',
    'Observability: monitoring, evaluation, drift and quality checks',
    'Audit logging, alerting, and operational dashboards',
    'Runbooks, environment documentation, and rollback procedures',
    'Adoption planning, role-based onboarding, and knowledge transfer',
  ],
  technologies: [
    'Python',
    '.NET',
    'Docker',
    'Kubernetes',
    'Azure / AWS / GCP',
    'Terraform',
    'OAuth 2.0 / OIDC',
    'FastAPI',
    'PostgreSQL',
    'MLflow',
    'OpenTelemetry',
    'GitHub Actions / Azure DevOps',
  ],

  engagementModels: [
    {
      name: 'Enterprise AI Readiness Sprint',
      duration: '2–3 weeks',
      priceFrom: '$18,000',
      whatsIncluded: [
        'Current-state and security/governance review of the target use case',
        'Reference architecture for enterprise-grade delivery',
        'Risk, data, and access assessment with a clear scope boundary',
        'Production-readiness roadmap with timeline and estimate',
      ],
      suitableFor:
        'Teams with an AI use case — or a stalled pilot — that needs a credible path through enterprise gates to production',
      primaryCta: { label: 'Book Readiness Sprint', href: '/contact?eai=readiness' },
    },
    {
      name: 'Enterprise AI Build',
      duration: '10–16 weeks',
      priceFrom: '$90,000',
      whatsIncluded: [
        'Solution architecture and security design',
        'The AI capability built — model, generative AI, or agent (scoped with you)',
        'Access control, data-governance controls, and environments',
        'Observability, audit logging, and operational runbooks',
        'Deployment and structured handoff to your team',
      ],
      suitableFor:
        'Teams ready to take a validated use case into governed production at enterprise scale',
      primaryCta: { label: 'Book an Enterprise Build Call', href: '/contact?eai=build' },
      featured: true,
    },
    {
      name: 'Enterprise AI Build + Managed Operations',
      duration: '10–16 week build + ongoing',
      priceFrom: '$90,000 + $9,000/mo',
      whatsIncluded: [
        'Everything in Enterprise AI Build',
        'Ongoing monitoring, evaluation, and incident response',
        'Scheduled updates, tuning, and dependency maintenance',
        'Periodic security and data-governance reviews',
        'Direct Slack/Teams channel with the delivery team',
      ],
      suitableFor:
        'Teams that want the system operated to an agreed service level while their people focus on the business',
      primaryCta: { label: 'Book a Managed Operations Call', href: '/contact?eai=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'C10 AI Strategy',
      description:
        'Not sure which use cases justify a full enterprise build — or which ones your risk committee will allow? A vendor-neutral, risk-tiered assessment prioritizes by value, feasibility, and AI-risk tier, and produces the governed roadmap we then deliver against.',
      href: '/services/c10-ai-strategy',
      icon: 'Brain',
      pageType: 'service',
    },
    {
      title: 'Generative AI',
      description:
        'Already know the capability is generative — RAG, agents, or LLM features? See the engineering we wrap in this enterprise delivery layer: retrieval quality, guardrails, and monitoring from the first sprint.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
    {
      title: 'AI Infrastructure',
      description:
        'Need the platform underneath enterprise AI? Our AI infrastructure engagement builds the compute, data fabric, and cost guardrails your AI workloads run on — engineered for portability and predictable spend.',
      href: '/solutions/ai-infrastructure',
      icon: 'Server',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'How do you keep an AI project from stalling in pilot purgatory?',
      answer:
        'We design for the enterprise gates from day one instead of bolting them on at the end. The readiness sprint surfaces the security, architecture, and data-governance requirements your initiative will be judged against, and the build is structured to satisfy them as it goes — access control, environments, observability, and handoff are part of the work, not afterthoughts. Most pilots die not because the model is bad but because nobody engineered the wrapper around it that production demands. Closing that gap is the entire focus of the engagement.',
    },
    {
      question: 'Can the AI pass our security and architecture review?',
      answer:
        'That is the design target. We build to your enterprise security baseline — single sign-on through SAML or OIDC, role-based access control, encryption in transit and at rest, and managed secrets — and deliver across proper development, staging, and production environments with CI/CD. We document the architecture for your reviewers rather than reconstructing it under pressure. We cannot approve our own work through your governance process, but we build so that review is a checkpoint you pass, and we work directly with your security and architecture teams to get there.',
    },
    {
      question: 'Will it work alongside our existing enterprise systems?',
      answer:
        'We build the AI to run alongside your estate through standard, supported interfaces — typically versioned APIs your systems can call — rather than brittle, one-off connections that break on the next upgrade. The exact systems and interfaces in scope are defined together during the readiness sprint, so the plan reflects your real environment. To be clear about scope: we do not claim turnkey, pre-built connectors to any specific third-party platform. We engineer to the documented, supported interfaces your systems expose, and we scope that work explicitly before we commit to it.',
    },
    {
      question: 'How do you handle data governance and PII?',
      answer:
        'PII is identified at the data layer and handled according to your governance requirements — masking, exclusion, or restricted access depending on what the use case actually needs. We build in access boundaries, data lineage, and retention controls so there is a traceable record of what data the AI can reach and why, which supports obligations like CCPA and your internal data-governance program. We architect privacy decisions to be explicit and documented rather than buried in code. We do not provide legal compliance certification; we build the system so it supports your governance program rather than working against it.',
    },
    {
      question: 'Do we own the system, or are we locked into you to keep it running?',
      answer:
        'You own it. We build on open, portable frameworks deployed on your own cloud, with a documented architecture, environments, audit logging, and operational runbooks. Handoff includes structured knowledge transfer so your engineers can run, update, and extend the system without us. If you choose the managed operations option, that is a convenience and not a dependency — you can take operations in-house at any point, and the documentation is written so you can.',
    },
    {
      question: 'What if our AI initiative is still just a pilot or an idea?',
      answer:
        'Start with the Enterprise AI Readiness Sprint. In two to three weeks we review the use case against your security and governance requirements, produce a reference architecture for enterprise delivery, and hand you a production-readiness roadmap with a realistic estimate and a clear scope boundary. Sometimes the outcome is that the use case is ready to build, and sometimes it is that the data or access model needs work first — and saying so is a legitimate result. You leave with a credible plan to reach production, not a six-figure commitment made on a hunch.',
    },
  ],

  cta: {
    title: 'Ready to take AI from pilot to governed production?',
    description:
      'Book a 30-minute call. We will discuss your use case, your enterprise requirements, and whether a readiness sprint or a full build is the right place to start.',
    primaryCta: { label: 'Book an enterprise AI scoping call', href: '/contact' },
    secondaryCta: { label: 'See the delivery wrapper', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable enterprise AI delivery engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2–3 weeks" for Readiness Sprint. Confirm achievability.',
    'engagementModels[1].duration — "10–16 weeks" for Enterprise AI Build. Confirm typical engagement length.',
    'engagementModels[2].priceFrom — "$9,000/mo" managed operations. Confirm pricing model and the "agreed service level" wording (no specific uptime SLA is claimed on the page).',
    'technologies — confirm the stack matches what we actually deliver (e.g., MLflow, OpenTelemetry, Terraform, Kubernetes).',
    'images at public/images/services/enterprise-ai-development/ are placeholder copies (from ml-development) for spec parity only; they do NOT render — ServiceDetailTemplate renders imageFeatures as null for service pages (§11.5). Replace with the documented subjects only if a future template change renders service imageFeatures.',
  ],
};

export default enterpriseAiDevelopment;
