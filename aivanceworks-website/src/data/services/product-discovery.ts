import type { ServicePageData } from '@/types/pages';

const productDiscovery: ServicePageData = {
  slug: 'product-discovery',
  title: 'Product Discovery',
  shortDescription:
    'Turn a fuzzy idea into a prioritized, de-risked plan your team can build against on Monday morning.',

  metaTitle: 'Product Discovery Sprints | AIvanceWorks',
  metaDescription:
    'Two-week product discovery sprints that produce validated personas, a prioritized MVP backlog, technical spike results, and a risk register. De-risked plans, fixed scope, ready to build.',
  keywords: [
    'product discovery sprint',
    'design sprint consulting',
    'mvp discovery',
    'assumption mapping',
    'jobs to be done',
    'product validation consulting',
  ],
  canonicalPath: '/services/product-discovery',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Product Discovery', href: '/services/product-discovery' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'discoveryMethodology',
    'signature',
    'processTimeline',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'strategy',
  signatureComponent: 'DiscoveryBeforeAfter',
  heroIllustrationComponent: 'DiscoveryHeroIllustration',

  hero: {
    badge: 'Strategic Service',
    headline: 'Turn a fuzzy idea into a plan you can ship.',
    subhead:
      'Two weeks. Five concrete deliverables. A validated, de-risked MVP backlog your engineering team can start building against on Monday morning.',
    primaryCta: { label: 'Book a Discovery Sprint', href: '/contact' },
    secondaryCta: { label: 'See what you get', href: '#signature' },
  },

  metricsStrip: [
    {
      value: '2 weeks',
      label: 'Kickoff to decision',
      description: 'Fixed timeline, no scope creep',
    },
    {
      value: '5 artifacts',
      label: 'Concrete deliverables',
      description: 'No slides, no filler',
    },
    {
      value: '90%',
      label: 'Scope confidence',
      description: 'Backed by tech-spike evidence',
    },
    {
      value: '1 proposal',
      label: 'Fixed-scope, backed by evidence',
      description: 'Ready to fund',
    },
  ],

  methodology: [
    {
      icon: 'Zap',
      name: 'Design Sprints',
      description:
        'A compressed five-day cycle to prototype, validate, and decide on direction before committing to build.',
    },
    {
      icon: 'Users',
      name: 'Jobs-to-be-Done',
      description:
        'Interview-driven framework that surfaces the real outcomes users hire your product to achieve.',
    },
    {
      icon: 'Target',
      name: 'Assumption Mapping',
      description:
        'Systematic surfacing of the riskiest assumptions in your idea so we de-risk them first, not last.',
    },
    {
      icon: 'Lightbulb',
      name: 'Prototype Validation',
      description:
        'Low-fidelity prototypes put in front of real users within days to separate signal from opinion.',
    },
  ],

  processSteps: [
    {
      title: 'Intake & Framing',
      description:
        'Kickoff workshop with stakeholders. We align on the business question, pick the focus area, and set success criteria for the sprint.',
      duration: 'Day 1–2',
      deliverable: 'Signed scope doc, stakeholder roster, success criteria',
    },
    {
      title: 'Research & Interviews',
      description:
        'Up to eight user interviews, synthesis, and persona board creation. JTBD statements surfaced from real language.',
      duration: 'Day 3–5',
      deliverable: 'Persona board, raw interview notes, JTBD statements',
    },
    {
      title: 'Synthesis & Prioritization',
      description:
        'Problem canvas, opportunity mapping, and ruthless MoSCoW prioritization of the backlog.',
      duration: 'Day 6–8',
      deliverable: 'Problem canvas, prioritized backlog (MoSCoW)',
    },
    {
      title: 'Technical Spikes',
      description:
        'Engineers run short spikes against the riskiest technical assumptions. Real code, real testing, real answers.',
      duration: 'Day 9–11',
      deliverable: 'Tech spike matrix with tested conclusions',
    },
    {
      title: 'Decision & Handover',
      description:
        'Final readout with fixed-scope proposal, risk register, and a no-surprises quote for the build phase.',
      duration: 'Day 12–14',
      deliverable: 'Fixed-scope proposal, risk register, handover package',
    },
  ],

  engagementModels: [
    {
      name: '1-Week Spike',
      duration: '5 business days',
      priceFrom: '$8,000',
      whatsIncluded: [
        'Focused on a single question or risk',
        '2 interviews, 1 workshop',
        '1 prioritized artifact',
        'Written recommendation',
      ],
      suitableFor: 'Quick risk checks or single-question validation',
      primaryCta: { label: 'Book 1-Week Spike', href: '/contact?sprint=1w' },
    },
    {
      name: '2-Week Discovery Sprint',
      duration: '10 business days',
      priceFrom: '$18,000',
      whatsIncluded: [
        'Full 5-step process above',
        'All 5 deliverables',
        'Up to 8 user interviews',
        'Tech spikes on top risks',
        'Fixed-scope build proposal',
      ],
      suitableFor: 'New product or major feature exploration',
      primaryCta: { label: 'Book 2-Week Sprint', href: '/contact?sprint=2w' },
      featured: true,
    },
    {
      name: '4-Week Deep Dive',
      duration: '20 business days',
      priceFrom: '$38,000',
      whatsIncluded: [
        'Extended research with up to 16 interviews',
        'Multiple prototypes tested',
        'Cross-stakeholder alignment',
        'Go-to-market positioning draft',
        'Phased build roadmap',
      ],
      suitableFor: 'Enterprise initiatives with multiple stakeholders',
      primaryCta: { label: 'Book 4-Week Deep Dive', href: '/contact?sprint=4w' },
    },
  ],

  relatedPages: [
    {
      title: 'MVP Development',
      description:
        'Discovery done? We take your validated backlog and ship a production V1 in 12 weeks — no gap between planning and building.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'E-commerce Websites',
      description:
        'See how discovery feeds into a custom storefront build — from conversion research to a headless commerce platform you own.',
      href: '/solutions/e-commerce-websites',
      icon: 'ShoppingCart',
      pageType: 'solution',
    },
    {
      title: 'Patient Portals',
      description:
        'See how discovery scopes a regulated portal — EHR integration, HIPAA compliance, and patient workflows mapped before code begins.',
      href: '/solutions/patient-portals',
      icon: 'Stethoscope',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'What do I get at the end of a discovery sprint?',
      answer:
        'Five tangible artifacts: a persona board, a problem canvas, a prioritized MoSCoW backlog, a tech spike matrix, and a risk register. Plus a fixed-scope, no-surprises proposal for the build phase — backed by the evidence we gathered.',
    },
    {
      question: 'Do I need to have a validated idea to start?',
      answer:
        "No. Discovery sprints are designed for fuzzy or partially-formed ideas. If you had a fully validated idea, you'd be buying build capacity, not discovery. We do need you to have a clear business question we're answering together.",
    },
    {
      question: 'What does my team need to bring?',
      answer:
        'A decision-maker for the kickoff and readout, a domain expert for research synthesis, and (if possible) introductions to 4–8 target users or customers. We handle everything else — facilitation, interview scheduling, artifacts, documentation.',
    },
    {
      question: 'Can you build what you discover?',
      answer:
        'Yes. Most clients continue with us into MVP development, and the discovery sprint is designed to flow directly into a fixed-scope build. You are never obligated — the deliverables are yours regardless of what you do next.',
    },
    {
      question: 'How is this different from a design sprint?',
      answer:
        "Design sprints are one tool we use inside our broader discovery process. A full discovery sprint also includes technical spikes, risk mapping, and a fundable proposal — things Google Venture's original design sprint framework doesn't produce.",
    },
  ],

  cta: {
    title: "Let's figure out what you're actually building.",
    description:
      'Book a free 30-minute intake call. If a discovery sprint is right for your situation, we will walk you through scope, deliverables, and a no-pressure quote.',
    primaryCta: { label: 'Book free intake call', href: '/contact' },
    secondaryCta: { label: 'See our full process', href: '#process' },
  },

  _unverified: [
    'metricsStrip[2].value — "90% scope confidence" is a claim, not a measurement. Reframe as range or remove.',
    'engagementModels[*].priceFrom — all three prices are placeholder. Confirm with user before launch.',
    'processSteps durations — day ranges are illustrative. Confirm actual workshop cadence.',
    'methodology[0] — "Design Sprints five-day" claim assumes GV framework; confirm our actual cadence.',
    'faq[3] — "most clients continue" claim is aspirational until we have real conversion data.',
  ],
};

export default productDiscovery;
