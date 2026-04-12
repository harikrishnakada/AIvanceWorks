import type { ServicePageData } from '@/types/pages';

// Archetype A — Strategic Service
// Buyer: CTO / VP of Engineering at a mid-market company (200–2,000 employees)
// Measured on: system reliability, technical debt reduction, technology investment ROI, team velocity
// Dominant question: "How do I know if my architecture will scale for the next 2–3 years?"
// Key trust issue: burned by consultants who delivered generic 200-page decks that gathered dust;
//   skeptical of advisors whose recommendations are driven by tech partnerships, not evidence
// Signature: ArchitectureDecisionTree — interactive ADR visualization showing how a sample
//   architecture question flows from constraints → evaluated options → documented decision
//
// Composition based on Archetype A recipe with cherry-picks:
//   - BenefitsGrid cherry-picked from Archetype B (CTO wants to see what the engagement produces)
//   - TechStackBlock dropped (advisory, not build — methodology and signature carry technical credibility)
//   - 10 sections total — at ceiling but justified for an advisory service with tiered engagement

const architectureAdvisory: ServicePageData = {
  slug: 'architecture-advisory',
  title: 'Architecture Advisory',
  shortDescription:
    'Independent architecture reviews that produce documented decisions, technology roadmaps, and actionable ADRs — not slide decks that gather dust.',

  metaTitle: 'Architecture Advisory | Architecture Review & ADR Consulting',
  metaDescription:
    'Architecture advisory services that deliver Architecture Decision Records, technology assessments, and evidence-based roadmaps. Vendor-neutral, structured, and built for your team to execute.',
  keywords: [
    'architecture advisory',
    'architecture review consulting',
    'architecture decision records',
    'ADR consulting',
    'technology assessment',
    'architecture assessment',
    'technology advisory services',
    'software architecture review',
    'technical due diligence',
    'evolutionary architecture',
  ],
  canonicalPath: '/services/architecture-advisory',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Architecture Advisory', href: '/services/architecture-advisory' },
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
  signatureComponent: 'ArchitectureDecisionTree',
  heroIllustrationComponent: 'ArchitectureAdvisoryHeroIllustration',

  hero: {
    badge: 'Strategic Service',
    headline: 'Architecture advice that ends in decisions, not decks.',
    subhead:
      'Structured architecture reviews that produce ADRs, technology roadmaps, and evidence-based recommendations your engineering team can execute against.',
    primaryCta: { label: 'Book Architecture Review', href: '/contact' },
    secondaryCta: { label: 'See the ADR framework', href: '#signature' },
  },

  // Audience test: CTO/VP Eng evaluating an advisory partner needs to see structured,
  // tangible deliverables immediately. Every metric is deliverable-framed (greenfield-safe).
  // "2–4 weeks" → timeline concreteness. CTO needs to plan around this. ✓
  // "ADRs" → signals engineering rigor — CTOs who value good engineering recognize this format. ✓
  // "Vendor-Neutral" → directly addresses trust issue (advisor pushing their own stack). ✓
  // "Actionable" → addresses the "shelf document" fear. ✓
  metricsStrip: [
    {
      value: '2–4 weeks',
      label: 'Assessment to deliverables',
      description: 'Fixed timeline, scoped engagement',
    },
    {
      value: 'ADRs',
      label: 'Per-decision documentation',
      description: 'Tradeoffs documented, not hidden',
    },
    {
      value: 'Vendor-Neutral',
      label: 'Recommendations',
      description: 'Your constraints drive the answer',
    },
    {
      value: 'Actionable',
      label: 'Technology roadmap',
      description: 'Sequenced for your team',
    },
  ],

  // Audience test: CTO cares about the rigor and breadth of the assessment methodology.
  // These are the assessment lenses — each maps to a discipline the buyer recognizes.
  // "Architecture Quality Assessment" → standard practice, signals structure. ✓
  // "Technology Stack Evaluation" → CTO buying this wants stack advice specifically. ✓
  // "ADR Documentation" → the core deliverable; CTO wants to see we formalize decisions. ✓
  // "Evolutionary Architecture Review" → signals modern thinking (fitness functions, modularity). ✓
  methodology: [
    {
      icon: 'Layers',
      name: 'Architecture Quality Assessment',
      description:
        'Systematic evaluation of scalability, reliability, security, observability, and developer experience against your business requirements and growth trajectory.',
    },
    {
      icon: 'GitCompare',
      name: 'Technology Stack Evaluation',
      description:
        'Evidence-based analysis of your current technology choices, with alternatives evaluated against total cost of ownership, team expertise, and ecosystem maturity.',
    },
    {
      icon: 'FileText',
      name: 'ADR Documentation',
      description:
        'Every significant recommendation documented as an Architecture Decision Record — context, options considered, decision, and consequences — so your team knows why, not just what.',
    },
    {
      icon: 'RefreshCw',
      name: 'Evolutionary Architecture Review',
      description:
        'Assessment of how well your architecture supports change: modularity, coupling, deployment independence, and the fitness functions that keep quality measurable over time.',
    },
  ],

  processSteps: [
    {
      title: 'Intake & Scoping',
      description:
        'Kickoff with technical leadership to identify the architecture questions that matter most. We scope the assessment to the areas where decisions are urgent or risk is highest.',
      duration: 'Week 1',
      deliverable: 'Scope document, assessment areas, interview roster',
    },
    {
      title: 'Discovery & Mapping',
      description:
        'Deep dive into existing architecture: codebases, infrastructure, deployment pipelines, monitoring, documentation. We build the map before we judge the territory.',
      duration: 'Week 1–2',
      deliverable: 'Architecture inventory, dependency map, current-state diagram',
    },
    {
      title: 'Analysis & Evaluation',
      description:
        'Each architecture dimension assessed against your constraints, growth targets, and team capabilities. Technology alternatives evaluated with evidence, not preference.',
      duration: 'Week 2–3',
      deliverable: 'Evaluation matrices, technology comparison, risk assessment',
    },
    {
      title: 'Recommendations & ADRs',
      description:
        'Every recommendation documented as a formal ADR: context, options considered, decision, tradeoffs, and consequences. You see the reasoning, not just the answer.',
      duration: 'Week 3',
      deliverable: 'Architecture Decision Records, technology roadmap draft',
    },
    {
      title: 'Roadmap & Handover',
      description:
        'Final readout with the full assessment, prioritized roadmap, and a clear path forward. Every deliverable is designed for your team to execute — not for a shelf.',
      duration: 'Week 3–4',
      deliverable: 'Assessment report, technology roadmap, ADR package, handover deck',
    },
  ],

  // Audience test: CTO wants to know what the engagement produces — frame as outcomes
  // of the engagement, not as capabilities. Each benefit addresses a specific buyer concern.
  // "Decisions Documented" → addresses the "why was this decision made?" problem. CTO cares. ✓
  // "Vendor-Neutral" → directly addresses trust issue. CTO cares. ✓
  // "Scoped to What Matters" → addresses fear of paying for unnecessary work. CTO cares. ✓
  // "Built for Your Team" → addresses the "shelf document" problem. CTO cares. ✓
  benefits: [
    {
      icon: 'FileText',
      title: 'Decisions Documented, Not Just Discussed',
      description:
        'Every architecture decision captured as a formal ADR with context, alternatives evaluated, tradeoffs weighed, and consequences documented. Six months from now, your team knows why the choice was made — not just what it was.',
    },
    {
      icon: 'Scale',
      title: 'Vendor-Neutral, Evidence-Based',
      description:
        'Recommendations driven by your constraints, team expertise, and business trajectory — not by technology partnerships or the advisor\'s default stack. If the evidence points at a technology we don\'t use, we say so.',
    },
    {
      icon: 'Target',
      title: 'Scoped to What Matters Now',
      description:
        'We assess the areas where decisions are urgent or risk is highest — not everything at once. Your roadmap is sequenced by impact, not by what is easiest to review.',
    },
    {
      icon: 'Users',
      title: 'Built for Your Team to Execute',
      description:
        'Every deliverable — from ADRs to roadmap — is written for the people who will implement it. Architecture guidance that requires a translation layer between the advisor and your engineers is not guidance.',
    },
  ],

  engagementModels: [
    {
      name: 'Architecture Decision Sprint',
      duration: '1 week',
      priceFrom: '$12,000',
      whatsIncluded: [
        'Focused on 1–2 specific architecture questions',
        'Stakeholder and tech lead interviews',
        'Architecture assessment for scoped area',
        '2–3 ADRs with recommendations',
        'Executive summary',
      ],
      suitableFor: 'Teams facing a specific technology decision and needing an independent second opinion',
      primaryCta: { label: 'Book Decision Sprint', href: '/contact?arch=sprint' },
    },
    {
      name: '3-Week Full Assessment',
      duration: '3 weeks',
      priceFrom: '$35,000',
      whatsIncluded: [
        'Full 5-step process above',
        'Complete architecture inventory and mapping',
        'Technology stack evaluation',
        'Per-area ADRs with tradeoff analysis',
        'Prioritized technology roadmap',
        'Assessment report',
      ],
      suitableFor: 'Organizations evaluating their architecture before a major build, scale, or modernization phase',
      primaryCta: { label: 'Book Full Assessment', href: '/contact?arch=full' },
      featured: true,
    },
    {
      name: '6-Week Strategic Partnership',
      duration: '6 weeks',
      priceFrom: '$65,000',
      whatsIncluded: [
        'Everything in Full Assessment',
        'Multi-system and multi-team scope',
        'Organizational architecture review',
        'Technology governance framework',
        'Ongoing advisory retainer (1 month post-assessment)',
        'Executive steering committee facilitation',
      ],
      suitableFor: 'Enterprises with multiple systems, teams, and competing architectural priorities',
      primaryCta: { label: 'Book Strategic Partnership', href: '/contact?arch=strategic' },
    },
  ],

  relatedPages: [
    {
      title: 'Application Modernization',
      description:
        'Assessment confirmed it\'s time to modernize? We execute the transformation — strangler fig migrations, monolith decomposition, and incremental extraction without stopping production.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'Cloud Strategy & Assessment',
      description:
        'Architecture questions focused on cloud? Our cloud strategy assessment maps every workload to a migration strategy and produces a board-ready business case.',
      href: '/services/cloud-strategy',
      icon: 'Cloud',
      pageType: 'service',
    },
    {
      title: 'Custom Software Development',
      description:
        'Ready to build on the recommended architecture? We take ADRs and roadmaps and turn them into production software — with the same engineering rigor that produced the plan.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'What do we get at the end of the assessment?',
      answer:
        'Four categories of deliverables: an architecture inventory with dependency mapping and current-state diagrams, Architecture Decision Records documenting every significant recommendation with context and tradeoff analysis, a technology roadmap prioritized by impact and sequenced for your team\'s capacity, and an assessment report summarizing findings, risks, and the recommended path forward. Every deliverable is designed to be actionable by your engineering team.',
    },
    {
      question: 'How is this different from hiring a freelance architect?',
      answer:
        'A freelance architect typically embeds in your team and works on your problems day-to-day. Architecture advisory is a structured, time-boxed assessment with a defined scope and formal deliverables. You get documented ADRs, a technology roadmap, and an assessment report — not ongoing operational support. If you need both, the Strategic Partnership tier includes a post-assessment advisory retainer.',
    },
    {
      question: 'Do you only recommend technologies you use?',
      answer:
        'No. Recommendations are driven by your constraints, team expertise, and business trajectory. If the evidence points at a technology or platform outside our delivery stack, we document that recommendation with the same rigor. The ADR format makes the reasoning transparent — you can evaluate the logic yourself, not just trust the conclusion.',
    },
    {
      question: 'What level of access do you need to our codebase?',
      answer:
        'Read-only access to source repositories, infrastructure configurations, deployment pipelines, and monitoring dashboards. We work with your engineering team through structured interviews and documentation review. We do not need write access or production credentials at any point during the assessment.',
    },
    {
      question: 'Can you help implement the recommendations?',
      answer:
        'Yes. Many clients continue with us into implementation — the ADRs and roadmap we produce are designed to flow directly into a development or modernization engagement. You are never obligated. The deliverables are yours regardless of what you do next, and the ADR format is designed so any qualified team can execute against them.',
    },
    {
      question: 'What if we disagree with a recommendation?',
      answer:
        'That is exactly what the ADR format is designed for. Every recommendation includes the context, the options considered, the tradeoffs of each option, and the rationale for the decision. If you disagree, you can trace the reasoning, challenge specific assumptions, and arrive at a different conclusion using the same structured framework. The value is in the documented analysis, not in blind compliance with a recommendation.',
    },
  ],

  cta: {
    title: 'Ready for architecture answers your team can act on?',
    description:
      'Book a 30-minute scoping call. We will discuss your architecture questions, identify the areas where decisions matter most, and outline a no-pressure engagement.',
    primaryCta: { label: 'Book scoping call', href: '/contact' },
    secondaryCta: { label: 'See the ADR framework', href: '#signature' },
  },

  _unverified: [
    'metricsStrip[0]: "2–4 weeks" timeline — confirm achievability across engagement tiers.',
    'engagementModels[*].priceFrom — all three prices are placeholder. Confirm with user before publishing.',
    'engagementModels[0].duration — "1 week" for Decision Sprint. Confirm achievability.',
    'processSteps durations — week ranges are illustrative. Confirm actual assessment cadence.',
    'faq[4] — "many clients continue" claim is aspirational until we have real conversion data.',
  ],
};

export default architectureAdvisory;
