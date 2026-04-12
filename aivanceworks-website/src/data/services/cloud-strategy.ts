import type { ServicePageData } from '@/types/pages';

// Archetype A — Strategic Service
// Buyer: VP of Infrastructure / VP of IT / CTO at a mid-market enterprise (500–5,000 employees)
// Measured on: infrastructure cost optimization, migration risk reduction, board-ready business cases
// Dominant question: "How do I build a board-ready business case for cloud migration?"
// Key trust issue: burned by consultants who delivered 200-page decks that gathered dust
// Signature: CloudReadinessMatrix — workload assessment matrix mapping workloads to migration strategies
//
// Composition based on Archetype A recipe with cherry-picks:
//   - BenefitsGrid cherry-picked from Archetype B (risk-averse buyer wants to see what the assessment produces)
//   - EngagementModels kept (enterprise buyer needs pricing transparency to bring a number to their boss)
//   - 10 sections total — at ceiling but justified for enterprise-facing strategic service

const cloudStrategy: ServicePageData = {
  slug: 'cloud-strategy',
  title: 'Cloud Strategy & Assessment',
  shortDescription:
    'A structured cloud readiness assessment that produces a board-ready business case, a workload-by-workload migration roadmap, and a clear operating model — before you commit to any infrastructure work.',

  metaTitle: 'Cloud Strategy & Assessment | Cloud Readiness Consulting',
  metaDescription:
    'Cloud strategy consulting that delivers a board-ready business case, workload assessment, TCO analysis, and phased migration roadmap. From readiness assessment to actionable plan in 4 weeks.',
  keywords: [
    'cloud strategy consulting',
    'cloud readiness assessment',
    'cloud migration roadmap',
    'cloud business case',
    'cloud TCO analysis',
    'cloud assessment services',
    'cloud operating model',
    'multi-cloud strategy',
    'workload assessment',
    'cloud migration planning',
  ],
  canonicalPath: '/services/cloud-strategy',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cloud Strategy & Assessment', href: '/services/cloud-strategy' },
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

  category: 'infrastructure',
  signatureComponent: 'CloudReadinessMatrix',
  heroIllustrationComponent: 'CloudStrategyHeroIllustration',

  hero: {
    badge: 'Strategic Service',
    headline: 'A cloud plan your board can fund and your team can execute.',
    subhead:
      'A structured assessment that maps every workload, builds the business case, and sequences the migration — so you walk into the board meeting with answers, not assumptions.',
    primaryCta: { label: 'Book Assessment Call', href: '/contact' },
    secondaryCta: { label: 'See the framework', href: '#signature' },
  },

  // Audience test: VP of Infra evaluating a consulting partner needs to see structured,
  // tangible deliverables immediately. Every metric is deliverable-framed (greenfield-safe).
  metricsStrip: [
    {
      value: '4 weeks',
      label: 'Assessment to roadmap',
      description: 'Fixed timeline, structured phases',
    },
    {
      value: 'Board-Ready',
      label: 'Business case with TCO',
      description: 'Numbers your CFO can approve',
    },
    {
      value: 'Per-Workload',
      label: 'Migration strategy',
      description: 'No blanket lift-and-shift',
    },
    {
      value: 'Actionable',
      label: 'Phased roadmap',
      description: 'Sequenced for risk and value',
    },
  ],

  // Audience test: VP of Infra cares about the rigor of the assessment methodology.
  // These are the lenses we use to evaluate their environment — each maps to a
  // recognizable framework the buyer has seen before.
  methodology: [
    {
      icon: 'BarChart3',
      name: 'TCO & Business Case Analysis',
      description:
        'Total cost of ownership modeling that compares on-premises run-rate against cloud scenarios with a 3–5 year projection your CFO can evaluate.',
    },
    {
      icon: 'Layers',
      name: 'Workload Assessment & Prioritization',
      description:
        'Systematic evaluation of every workload against complexity, business value, dependencies, and migration risk to determine the right sequence and strategy.',
    },
    {
      icon: 'GitBranch',
      name: 'Migration Strategy Mapping',
      description:
        'Each workload gets a recommended migration approach — rehost, replatform, rearchitect, retain, or retire — based on assessment evidence, not assumptions.',
    },
    {
      icon: 'Building2',
      name: 'Cloud Operating Model Design',
      description:
        'Governance, team structure, cost management, and security frameworks that define how your organization runs in the cloud after migration.',
    },
  ],

  processSteps: [
    {
      title: 'Stakeholder Alignment',
      description:
        'Kickoff with IT leadership, finance, and business stakeholders to define migration drivers, constraints, compliance requirements, and success criteria.',
      duration: 'Week 1',
      deliverable: 'Scope document, stakeholder map, success criteria',
    },
    {
      title: 'Environment Discovery',
      description:
        'Automated and manual inventory of infrastructure, applications, dependencies, and data flows. We map what you have before recommending where it goes.',
      duration: 'Week 1–2',
      deliverable: 'Application inventory, dependency map, data flow diagram',
    },
    {
      title: 'Workload Analysis',
      description:
        'Each workload scored against complexity, business criticality, compliance exposure, and cloud readiness. Migration strategy assigned per workload.',
      duration: 'Week 2–3',
      deliverable: 'Workload assessment matrix, per-workload migration strategy',
    },
    {
      title: 'Business Case & TCO',
      description:
        'Financial modeling comparing on-premises run-rate against cloud scenarios. Includes direct costs, operational savings, risk-adjusted projections, and a 3-year view.',
      duration: 'Week 3',
      deliverable: 'TCO model, business case document, executive summary',
    },
    {
      title: 'Roadmap & Handover',
      description:
        'Phased migration roadmap sequenced by risk and business value. Includes operating model blueprint, team readiness recommendations, and a clear next step.',
      duration: 'Week 4',
      deliverable: 'Migration roadmap, operating model blueprint, handover package',
    },
  ],

  // Audience test: VP of Infra wants to know what the assessment produces — not what
  // we build, but what they get. Frame as outcomes of the engagement, not capabilities.
  benefits: [
    {
      icon: 'FileText',
      title: 'A Business Case That Gets Funded',
      description:
        'A structured TCO analysis with 3–5 year projections, risk-adjusted scenarios, and an executive summary designed to survive CFO scrutiny — not a slide deck that gets filed away.',
    },
    {
      icon: 'Map',
      title: 'A Roadmap You Can Actually Follow',
      description:
        'Every workload sequenced by risk and value into migration waves. Dependencies mapped, team assignments defined, timeline realistic. Your team knows what to do on Monday morning.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Risk Identified Before It Becomes a Problem',
      description:
        'Compliance gaps, dependency conflicts, and technical risks surfaced during assessment — not discovered mid-migration when the cost of change is highest.',
    },
    {
      icon: 'Users',
      title: 'Team and Governance Readiness',
      description:
        'Cloud operating model that covers governance, cost management, security frameworks, and team skills — so the organization is ready to operate in the cloud, not just migrate to it.',
    },
  ],

  engagementModels: [
    {
      name: '2-Week Cloud Quick Scan',
      duration: '2 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'Stakeholder kickoff workshop',
        'High-level workload inventory',
        'Preliminary TCO comparison',
        'Executive readiness summary',
        'Top-10 migration candidates identified',
      ],
      suitableFor: 'Organizations testing the waters — need a data-backed view before committing to a full assessment',
      primaryCta: { label: 'Book Quick Scan', href: '/contact?cloud=quickscan' },
    },
    {
      name: '4-Week Full Assessment',
      duration: '4 weeks',
      priceFrom: '$40,000',
      whatsIncluded: [
        'Full 5-step process above',
        'Complete workload inventory and scoring',
        'Per-workload migration strategy',
        'Board-ready business case with TCO',
        'Phased migration roadmap',
        'Cloud operating model blueprint',
      ],
      suitableFor: 'Mid-market enterprises planning a cloud migration and needing a funded business case',
      primaryCta: { label: 'Book Full Assessment', href: '/contact?cloud=full' },
      featured: true,
    },
    {
      name: '8-Week Enterprise Assessment',
      duration: '8 weeks',
      priceFrom: '$85,000',
      whatsIncluded: [
        'Everything in Full Assessment',
        'Multi-cloud or hybrid strategy evaluation',
        'Compliance and regulatory deep-dive',
        'Organizational readiness and training plan',
        'Vendor selection guidance',
        'Executive steering committee facilitation',
      ],
      suitableFor: 'Large enterprises with complex compliance, multi-cloud, or organizational transformation needs',
      primaryCta: { label: 'Book Enterprise Assessment', href: '/contact?cloud=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Migration & Modernization',
      description:
        'Assessment done? We execute the migration roadmap — moving workloads to Azure or AWS with the right approach for each application.',
      href: '/services/cloud-migration',
      icon: 'CloudUpload',
      pageType: 'service',
    },
    {
      title: 'FinOps & Cloud Cost Optimization',
      description:
        'Building a business case and worried about post-migration surprises? FinOps engagements pair with assessment work — so cost discipline is designed in before migration, not patched after the first bill.',
      href: '/services/finops',
      icon: 'DollarSign',
      pageType: 'service',
    },
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Need the infrastructure built after the strategy is set? We design and operate cloud environments with IaC, monitoring, and disaster recovery built in.',
      href: '/services/cloud-infrastructure',
      icon: 'Server',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'What do we get at the end of the assessment?',
      answer:
        'Five deliverables: a complete application and workload inventory, a per-workload migration strategy matrix, a board-ready business case with TCO analysis, a phased migration roadmap sequenced by risk and value, and a cloud operating model blueprint covering governance, cost management, and team readiness. Every deliverable is designed to be actionable — not a shelf document.',
    },
    {
      question: 'Do we need to choose between Azure and AWS before starting?',
      answer:
        'No. The assessment evaluates your workloads against the strengths of each platform and produces a recommendation. For most mid-market organizations, we recommend starting with one primary cloud and reserving multi-cloud for specific workloads where it is justified — the assessment gives you the data to make that decision.',
    },
    {
      question: 'How is this different from a cloud vendor assessment?',
      answer:
        'Cloud vendors assess your environment to sell their platform. Our assessment is vendor-neutral — we evaluate workloads against Azure, AWS, and hybrid options based on your compliance requirements, cost constraints, and team capabilities. The recommendation goes where the evidence points, not where a vendor incentive leads.',
    },
    {
      question: 'Can you execute the migration after the assessment?',
      answer:
        'Yes. Most clients continue with us into migration execution, and the assessment is designed to flow directly into a phased migration engagement. The roadmap, workload strategies, and operating model we produce become the execution plan. You are never obligated — the deliverables are yours regardless of what you do next.',
    },
    {
      question: 'What level of access do you need to our environment?',
      answer:
        'Read-only access to infrastructure monitoring, application inventories, and network topology. We work with your IT team to gather data through automated discovery tools and structured interviews. We do not need production credentials or the ability to modify anything in your environment during the assessment.',
    },
    {
      question: 'How do you handle compliance requirements like HIPAA or SOC 2?',
      answer:
        'Compliance is a first-class dimension of the workload assessment. Every workload is evaluated for regulatory exposure, and the migration strategy accounts for data residency, encryption, access control, and audit requirements. The operating model blueprint includes a compliance framework specific to your regulatory environment.',
    },
  ],

  cta: {
    title: 'Ready to build a cloud strategy your board can fund?',
    description:
      'Book a 30-minute call. We will discuss your current environment, migration drivers, and timeline — and outline what a structured assessment looks like for your organization.',
    primaryCta: { label: 'Book assessment call', href: '/contact' },
    secondaryCta: { label: 'See the framework', href: '#signature' },
  },

  _unverified: [
    'metricsStrip[0]: "4 weeks" timeline — confirm achievability for a full assessment engagement.',
    'engagementModels[*].priceFrom — placeholder prices. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Quick Scan. Confirm achievability.',
    'processSteps durations — week ranges are illustrative. Confirm actual assessment cadence.',
    'faq[3] — "most clients continue" claim is aspirational until we have real conversion data.',
  ],
};

export default cloudStrategy;
