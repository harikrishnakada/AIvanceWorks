import type { ServicePageData } from '@/types/pages';

// Archetype A — Strategic Service
// Buyer: VP of Digital Transformation / CDO / VP of Technology Strategy at a
//   mid-to-large enterprise (500–5,000 employees)
// Measured on: AI initiative ROI, avoided costly AI experiments, speed to
//   business value from AI investments, board buy-in for AI programs
// Dominant question: "How do we build an AI strategy our organization can
//   actually execute?" / "Which AI use cases should we prioritize?"
// Key trust issue: burned by expensive AI engagements that produced impressive
//   slide decks with vendor-skewed recommendations and no governance — roadmaps
//   full of AI ideas but no sequenced business cases, no clear ownership, and
//   no path from POC to production. The buyer has either funded POCs that
//   gathered dust or been embarrassed when a flashy AI demo fell apart on
//   real data or failed change management.
// Signature: AiStrategyFrameworkBlueprint — left-to-right flow diagram showing
//   5 assessment input dimensions → strategy engine → 3 concrete deliverables.
//   Carries the argument: "Structured, vendor-neutral assessment across 5
//   dimensions produces three deliverables your organization can execute against."
//
// Composition: Archetype A with BenefitsGrid cherry-picked from Archetype B.
//   TechStackBlock dropped — strategy buyer does not care about implementation
//   tech in this engagement. BenefitsGrid added because a risk-averse buyer
//   needs to see what the assessment concretely produces before committing.
//   10 sections at ceiling — justified for enterprise strategic service with
//   tiered engagement models and a 5-dimension assessment framework.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → DiscoveryMethodology (warm) →
//   Signature (dark) → ProcessTimeline (light) → BenefitsGrid (warm) →
//   EngagementModels (light) → RelatedPages (warm) → FAQ (light) → CTA (accent)

const aiStrategyConsulting: ServicePageData = {
  slug: 'ai-strategy-consulting',
  title: 'AI Strategy & Consulting',
  shortDescription:
    'Vendor-neutral AI strategy consulting — maturity assessments, use case prioritization, and governance frameworks that produce a roadmap your organization can fund and execute.',

  metaTitle: 'AI Strategy & Consulting | AI Roadmap & Maturity Assessment',
  metaDescription:
    'AI strategy consulting that delivers an AI maturity assessment, use case prioritization matrix, 12–18 month AI roadmap, and responsible AI governance framework — before any engineering begins.',
  keywords: [
    'ai strategy consulting',
    'ai strategy consulting services',
    'ai maturity assessment',
    'ai use case prioritization',
    'ai roadmap development',
    'responsible ai framework',
    'ai governance consulting',
    'enterprise ai strategy',
    'ai business case development',
    'ai readiness assessment',
    'ai transformation consulting',
    'generative ai strategy',
  ],
  canonicalPath: '/services/ai-strategy-consulting',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'AI Strategy & Consulting', href: '/services/ai-strategy-consulting' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'discoveryMethodology',
    'signature',
    'processTimeline',
    'benefitsGrid',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'ai-ml',
  signatureComponent: 'AiStrategyFrameworkBlueprint',
  heroIllustrationComponent: 'AiStrategyHeroIllustration',

  hero: {
    badge: 'Strategic Service',
    headline: 'An AI strategy your organization can fund and execute.',
    subhead:
      'A structured, vendor-neutral assessment that maps your AI readiness, surfaces the right use cases, and produces a roadmap with business cases — before you commit to any engineering work.',
    primaryCta: { label: 'Book Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the framework', href: '#signature' },
  },

  // Audience test: VP of Digital Transformation evaluating a strategy partner
  // scans in 8 seconds. Every metric must be deliverable-framed (greenfield-safe).
  // "4 weeks" → concrete timeline, signals structure not open-ended consulting. ✓
  // "Board-Ready" → CFO-survivable business case — their core job requirement. ✓
  // "Per-Use-Case" → prioritization they can defend to stakeholders. ✓
  // "Governance-Ready" → responsible AI is now a board-level concern. ✓
  metricsStrip: [
    {
      value: '4 weeks',
      label: 'Assessment to roadmap',
      description: 'Fixed timeline, structured phases',
    },
    {
      value: 'Board-Ready',
      label: 'AI business case with ROI',
      description: 'Numbers your CFO can evaluate',
    },
    {
      value: 'Per-Use-Case',
      label: 'Prioritization scoring',
      description: 'Impact vs effort, sequenced',
    },
    {
      value: 'Governance-Ready',
      label: 'Responsible AI framework',
      description: 'Principles designed before tools',
    },
  ],

  // Audience test: VP of Digital cares about the rigor of the assessment methodology.
  // These are the lenses we use to evaluate their organization — each maps to a
  // discipline the buyer has seen discussed in analyst reports and board memos.
  // "AI Maturity Assessment" → standard analyst framework, signals structure. ✓
  // "Use Case Discovery" → directly addresses "which use cases?" question. ✓
  // "Business Case & Prioritization" → CFO-readiness, not just enthusiasm. ✓
  // "Responsible AI Framework" → board-level concern in 2025, not optional. ✓
  methodology: [
    {
      icon: 'BarChart3',
      name: 'AI Maturity Assessment',
      description:
        'Systematic evaluation of your organization across five dimensions — data quality, talent, technology, business processes, and existing AI investments — to establish where you are before mapping where you are going.',
    },
    {
      icon: 'Lightbulb',
      name: 'Use Case Discovery',
      description:
        'Facilitated workshops with business unit leaders to surface AI opportunities, validate technical feasibility, and assess organizational readiness for each candidate use case.',
    },
    {
      icon: 'Target',
      name: 'Business Case & Prioritization',
      description:
        'ROI modeling and impact-versus-effort scoring that converts your use case inventory into an investment-ranked portfolio with business cases your finance team can evaluate and fund.',
    },
    {
      icon: 'ShieldCheck',
      name: 'Responsible AI Framework',
      description:
        'Ethics principles, risk taxonomy, governance structures, and model oversight protocols — designed before any AI system is built, so governance is part of the architecture, not a compliance retrofit.',
    },
  ],

  processSteps: [
    {
      title: 'Stakeholder Alignment',
      description:
        'Kickoff with executive sponsors, AI champions, and business unit leaders to define AI ambitions, constraints, compliance requirements, and success criteria. We establish what a successful outcome looks like before the assessment begins.',
      duration: 'Week 1',
      deliverable: 'Scope document, stakeholder map, AI ambition statement',
    },
    {
      title: 'AI Landscape Assessment',
      description:
        'Structured evaluation of your data assets, talent capabilities, technology infrastructure, existing AI investments, and competitive context. We map what you have — and what is missing — before recommending where AI belongs.',
      duration: 'Week 1–2',
      deliverable: 'AI maturity scorecard, current-state landscape map, gap analysis',
    },
    {
      title: 'Use Case Discovery & Scoring',
      description:
        'Facilitated workshops with each business unit to surface, evaluate, and score AI opportunities. Every candidate use case is assessed for business impact, implementation complexity, data readiness, and organizational fit.',
      duration: 'Week 2–3',
      deliverable: 'Use case inventory, feasibility assessments, prioritization scoring matrix',
    },
    {
      title: 'Roadmap & Business Case',
      description:
        'The top-priority use cases are sequenced into a 12–18 month phased roadmap, each with a financial model that frames the investment case for leadership. The roadmap accounts for team capacity, dependencies, and risk.',
      duration: 'Week 3',
      deliverable: 'AI roadmap, business cases for top 3–5 use cases, investment summary',
    },
    {
      title: 'Governance & Handover',
      description:
        'Responsible AI principles, risk taxonomy, governance structure, and model oversight protocols designed for your organization. Concludes with an executive readout and a handover package built for your team to execute.',
      duration: 'Week 4',
      deliverable: 'Responsible AI framework, governance blueprint, executive readout package',
    },
  ],

  // Audience test: VP of Digital wants to know what the engagement concretely
  // produces — frame as outcomes, not process. Each benefit addresses a specific
  // buyer concern derived from the trust issue above.
  // "Roadmap Built for Execution" → addresses the "shelf document" fear. ✓
  // "Use Cases Scored, Not Just Listed" → addresses vague AI idea decks. ✓
  // "Governance Before You Build" → addresses the "bolted-on compliance" problem. ✓
  // "Executive Alignment Built In" → addresses the "no buy-in" failure mode. ✓
  benefits: [
    {
      icon: 'Map',
      title: 'A Roadmap Built for Execution',
      description:
        'A 12–18 month phased AI roadmap with sequenced use cases, business cases, and clear ownership — not a slide deck of AI possibilities. Your team knows which initiative to fund first, second, and next quarter.',
    },
    {
      icon: 'Target',
      title: 'Use Cases Scored, Not Just Listed',
      description:
        'Every identified AI opportunity scored against business impact and implementation complexity so your leadership can make investment decisions based on evidence — not enthusiasm. The scoring matrix shows your work.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Governance Before You Build',
      description:
        'Responsible AI principles, risk frameworks, and model oversight protocols established at the strategy stage — so when your engineering teams build, governance is already part of the design, not added after a production incident.',
    },
    {
      icon: 'Users',
      title: 'Executive Alignment Built In',
      description:
        'The assessment process brings executive sponsors, business unit leaders, and technology teams to the same workshops — so the AI roadmap arrives with organizational buy-in, not as a consultant\'s recommendation to argue over.',
    },
  ],

  engagementModels: [
    {
      name: 'AI Quick Scan',
      duration: '2 weeks',
      priceFrom: '$12,000',
      whatsIncluded: [
        'AI maturity evaluation across 5 dimensions',
        'Stakeholder discovery interviews',
        'Top 5–8 AI use case candidates identified',
        'High-level impact and feasibility scoring',
        'Executive readiness summary with key priorities',
      ],
      suitableFor: 'Organizations testing the waters — need a data-backed view of where AI fits before committing to a full assessment',
      primaryCta: { label: 'Book Quick Scan', href: '/contact?ai=quickscan' },
    },
    {
      name: '4-Week AI Strategy Assessment',
      duration: '4 weeks',
      priceFrom: '$35,000',
      whatsIncluded: [
        'Full 5-step process above',
        'AI maturity scorecard across all five dimensions',
        'Business unit use case workshops and discovery',
        'Prioritization scoring matrix for all candidates',
        '12–18 month AI roadmap with phased initiatives',
        'Business cases for top 3–5 use cases',
        'Responsible AI framework and governance blueprint',
      ],
      suitableFor: 'Mid-market to enterprise organizations planning their first major AI program or resetting an existing one',
      primaryCta: { label: 'Book Full Assessment', href: '/contact?ai=strategy' },
      featured: true,
    },
    {
      name: 'AI Transformation Program',
      duration: '8 weeks',
      priceFrom: '$75,000',
      whatsIncluded: [
        'Everything in the 4-Week Assessment',
        'Multi-business-unit workshop series',
        'Detailed financial modeling for top use cases',
        'AI operating model and talent development plan',
        'Change management framework',
        'Technology and vendor evaluation guidance',
        'Executive steering committee facilitation',
      ],
      suitableFor: 'Enterprise organizations undergoing AI-driven transformation, needing organizational design alongside strategy',
      primaryCta: { label: 'Book Transformation Call', href: '/contact?ai=transform' },
    },
  ],

  relatedPages: [
    {
      title: 'Generative AI',
      description:
        'AI roadmap identified generative AI use cases as your priority? We build the production RAG systems, AI agents, and LLM integrations your strategy calls for — with retrieval quality, guardrails, and monitoring from the first sprint.',
      href: '/services/generative-ai',
      icon: 'Brain',
      pageType: 'service',
    },
    {
      title: 'Intelligent Automation',
      description:
        'Strategy surfaced workflow automation as a near-term win? We combine AI reasoning with process automation to handle the judgment-dependent tasks your RPA could not touch — cognitive automation with human-in-the-loop oversight.',
      href: '/services/intelligent-automation',
      icon: 'Workflow',
      pageType: 'service',
    },
    {
      title: 'Architecture Advisory',
      description:
        'AI strategy surfaced technical readiness gaps? We assess your current architecture across the dimensions that matter for AI adoption — data access, system modularity, observability — and produce ADRs and a roadmap that identifies what needs to change before AI investments can scale.',
      href: '/services/architecture-advisory',
      icon: 'Layers',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'What do we get at the end of the assessment?',
      answer:
        'Three categories of deliverables: first, an AI Maturity Scorecard covering data quality, talent, technology, business processes, and existing AI investments — with gap analysis across each dimension. Second, a Prioritized Use Case Portfolio with scoring matrices, feasibility assessments, and business cases for your top 3–5 candidates. Third, an AI Roadmap and Governance Framework — a 12–18 month phased roadmap with responsible AI principles, risk taxonomy, governance structure, and model oversight protocols. Every deliverable is designed to be actionable by your team, not filed on a shelf.',
    },
    {
      question: 'How is this different from what a cloud vendor\'s AI team offers?',
      answer:
        'Vendor AI teams assess your environment with the goal of landing their platform, models, and licenses. Our assessment is vendor-neutral — we evaluate use cases, readiness, and priorities based on your business outcomes and constraints. If the evidence points at an open-source model, a competitor\'s platform, or a build-versus-buy hybrid, we document that recommendation with the same rigor. The scoring matrices make the reasoning transparent — you can evaluate the logic, not just accept the conclusion.',
    },
    {
      question: 'Do we need an existing AI team or data science capability to start?',
      answer:
        'No. The assessment is designed for wherever you are today — from zero internal AI capability to a team already running experiments. Part of the maturity assessment specifically evaluates talent and organizational readiness, and the governance framework is designed to work whether you are building an internal team, partnering externally, or combining both. The roadmap accounts for your actual talent baseline, not an idealized future state.',
    },
    {
      question: 'How do you handle sensitive business information shared in discovery workshops?',
      answer:
        'The assessment uses facilitated workshops, structured interviews, and document reviews — not direct access to your production data systems or proprietary databases. Any information discussed in workshops is treated as confidential under an NDA agreed before the engagement begins, and is not retained after the engagement concludes. Data security protocols, information handling procedures, and access boundaries are documented in the engagement scope document delivered at kickoff.',
    },
    {
      question: 'Can you implement the roadmap after the assessment?',
      answer:
        'Yes. Most organizations that complete an AI strategy assessment continue with implementation work — the prioritized use cases, business cases, and architecture direction we produce are designed to flow directly into engineering engagements. You are never obligated. The deliverables are yours regardless of what you do next, and the roadmap is designed so any qualified team — internal or external — can execute against it. If you continue with us, the handover package becomes the implementation brief.',
    },
    {
      question: 'What if our leadership is skeptical about AI investment?',
      answer:
        'Skepticism is a healthy starting point — the assessment is designed to surface evidence, not sell AI in the abstract. Leadership workshops bring decision-makers through the same use case discovery and scoring process that produces the roadmap. If the evidence shows limited AI opportunity in your specific business context, or that your data infrastructure is not ready to support meaningful AI investment, the assessment says so — with the reasoning documented. We have no interest in an AI roadmap you cannot fund or execute.',
    },
  ],

  cta: {
    title: 'Ready to build an AI strategy your organization can execute?',
    description:
      'Book a 30-minute call. We will discuss your AI ambitions, current capabilities, and timeline — and outline what a structured assessment looks like for your organization.',
    primaryCta: { label: 'Book strategy call', href: '/contact' },
    secondaryCta: { label: 'See the framework', href: '#signature' },
  },

  _unverified: [
    'metricsStrip[0]: "4 weeks" — confirm achievability for a full assessment engagement across all three engagement tiers.',
    'engagementModels[*].priceFrom — all three prices are placeholder. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Quick Scan. Confirm achievability.',
    'engagementModels[2].duration — "8 weeks" for Transformation Program. Confirm scope.',
    'processSteps durations — week ranges are illustrative. Confirm actual assessment cadence.',
    'faq[4] — "most organizations continue" claim is aspirational until we have real conversion data.',
  ],
};

export default aiStrategyConsulting;
