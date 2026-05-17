import type { ServicePageData } from '@/types/pages';

const marketResearch: ServicePageData = {
  slug: 'market-research',
  title: 'Market Research',
  shortDescription:
    'Data-driven market intelligence that tells you exactly where to play, who to serve, and how to win before you write a line of code.',

  metaTitle: 'Market Research Services | AIvanceWorks',
  metaDescription:
    'AI-powered market research: TAM/SAM/SOM analysis, competitive intelligence, customer segmentation, and go-to-market readiness reports. Turn market signals into a validated product strategy.',
  keywords: [
    'market research services',
    'competitive intelligence consulting',
    'customer segmentation analysis',
    'TAM SAM SOM analysis',
    'go-to-market research',
    'market sizing consulting',
    'product market fit research',
  ],
  canonicalPath: '/services/market-research',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Market Research', href: '/services/market-research' },
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
    headline: 'Know your market before you build for it.',
    subhead:
      'Two to four weeks of structured market research — TAM/SAM/SOM sizing, competitive mapping, buyer persona validation, and a go-to-market readiness report your investors and product team can act on.',
    primaryCta: { label: 'Start Market Research', href: '/contact' },
    secondaryCta: { label: 'See what you get', href: '#signature' },
  },

  metricsStrip: [
    {
      value: '2–4 weeks',
      label: 'Research to report',
      description: 'Fixed timeline, no scope creep',
    },
    {
      value: '6 artifacts',
      label: 'Concrete deliverables',
      description: 'Data, not opinions',
    },
    {
      value: '3-layer',
      label: 'TAM / SAM / SOM',
      description: 'Defensible market sizing',
    },
    {
      value: '1 report',
      label: 'Go-to-market readiness',
      description: 'Ready to present to investors',
    },
  ],

  methodology: [
    {
      icon: 'BarChart2',
      name: 'Market Sizing (TAM/SAM/SOM)',
      description:
        'Bottom-up and top-down models that give investors and leadership a defensible picture of addressable opportunity.',
    },
    {
      icon: 'Users',
      name: 'Customer Segmentation',
      description:
        'Interview-driven buyer persona development that surfaces who your best-fit customers are and what they actually value.',
    },
    {
      icon: 'Target',
      name: 'Competitive Intelligence',
      description:
        'Structured competitive mapping — feature gaps, pricing positions, messaging weaknesses — so you know where to differentiate.',
    },
    {
      icon: 'TrendingUp',
      name: 'Go-to-Market Readiness',
      description:
        'Channel analysis, ICP scoring, and positioning validation tested against real buyers before you invest in growth.',
    },
  ],

  processSteps: [
    {
      title: 'Scoping & Research Design',
      description:
        'Kickoff workshop to align on the core market question, define research scope, and design the data collection plan.',
      duration: 'Day 1–2',
      deliverable: 'Signed scope doc, research questions, data source map',
    },
    {
      title: 'Primary Research & Interviews',
      description:
        'Up to twelve buyer and expert interviews. Structured guides, synthesis, and pattern extraction across segments.',
      duration: 'Day 3–7',
      deliverable: 'Interview transcripts, insight clusters, raw persona data',
    },
    {
      title: 'Secondary Research & Market Sizing',
      description:
        'Desk research across industry reports, competitor filings, job postings, and pricing intelligence. TAM/SAM/SOM model built.',
      duration: 'Day 8–12',
      deliverable: 'Market sizing model (Excel/Sheets), data source citations',
    },
    {
      title: 'Competitive Landscape Mapping',
      description:
        'Feature matrix, positioning canvas, and pricing tier analysis across 8–15 direct and adjacent competitors.',
      duration: 'Day 13–16',
      deliverable: 'Competitive matrix, white-space map, differentiation brief',
    },
    {
      title: 'Synthesis & Go-to-Market Report',
      description:
        'Full readout with validated ICPs, market entry recommendations, channel priorities, and a risk-adjusted opportunity score.',
      duration: 'Day 17–20',
      deliverable: 'Go-to-market readiness report, executive slide deck, next-step roadmap',
    },
  ],

  engagementModels: [
    {
      name: 'Market Pulse',
      duration: '5 business days',
      priceFrom: '$6,000',
      whatsIncluded: [
        'Focused on a single segment or competitive question',
        '4 interviews, secondary research',
        'TAM estimate with source citations',
        'Written competitive brief',
      ],
      suitableFor: 'Quick competitive or market validation for a specific decision',
      primaryCta: { label: 'Book Market Pulse', href: '/contact?research=pulse' },
    },
    {
      name: 'Full Market Research Sprint',
      duration: '10 business days',
      priceFrom: '$16,000',
      whatsIncluded: [
        'Full 5-step process above',
        'All 6 deliverables',
        'Up to 12 buyer interviews',
        'TAM/SAM/SOM model',
        'Competitive matrix (8–15 players)',
        'Go-to-market readiness report',
      ],
      suitableFor: 'New product, new market entry, or investor fundraise preparation',
      primaryCta: { label: 'Book Full Sprint', href: '/contact?research=full' },
      featured: true,
    },
    {
      name: 'Ongoing Market Intelligence',
      duration: 'Monthly retainer',
      priceFrom: '$4,500/mo',
      whatsIncluded: [
        'Monthly competitive signal monitoring',
        'Quarterly ICP refresh interviews',
        'Pricing & positioning tracking',
        'Executive briefing each month',
      ],
      suitableFor: 'Post-launch companies navigating a shifting competitive landscape',
      primaryCta: { label: 'Discuss Retainer', href: '/contact?research=retainer' },
    },
  ],

  relatedPages: [
    {
      title: 'ERP Development',
      description:
        'Research done? We translate your validated business requirements into a structured ERP implementation — the right platform, configured for your processes.',
      href: '/services/erp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Patient Portals',
      description:
        'Entering health-tech? See how market research maps clinician workflows, HIPAA constraints, and patient personas into a buildable product brief grounded in real care-delivery context.',
      href: '/solutions/patient-portals',
      icon: 'Heart',
      pageType: 'solution',
    },
    {
      title: 'SaaS Software Development',
      description:
        'Once you know the market, we build the SaaS platform to serve it — multi-tenant, scalable, and designed for the buyer profile your research defined.',
      href: '/services/saas-development',
      icon: 'Layers',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'What deliverables do I get at the end of a market research engagement?',
      answer:
        'Six tangible artifacts: validated buyer personas, a TAM/SAM/SOM model with source citations, a competitive matrix (8–15 players), a white-space differentiation map, channel and ICP scoring, and a go-to-market readiness report with a recommended next-step roadmap.',
    },
    {
      question: 'How is this different from hiring a market research firm?',
      answer:
        'Traditional research firms deliver reports. We deliver strategy. Our research is designed specifically to feed into product and engineering decisions — every finding maps to a build-or-not-build recommendation, not a slide for a shelf.',
    },
    {
      question: 'Do I need existing customers to start market research?',
      answer:
        "No. Pre-launch research is often more valuable than post-launch because you can still shape the product. We source interview participants from our network and purpose-built recruiting panels if you don't have an existing customer base.",
    },
    {
      question: 'Can you research international markets?',
      answer:
        'Yes. We conduct primary research across North America, Western Europe, and APAC. For markets requiring local-language interviews, we partner with vetted regional research partners and maintain quality oversight throughout.',
    },
    {
      question: 'Will the research hold up in an investor meeting?',
      answer:
        'Yes. Our TAM/SAM/SOM models cite primary sources (SEC filings, industry reports, government data) and use both top-down and bottom-up validation. The go-to-market readiness report is formatted for executive and investor presentations.',
    },
  ],

  cta: {
    title: "Let's find out if your market is real — before you build.",
    description:
      'Book a free 30-minute scoping call. We will walk you through the research design, deliverables, and a no-pressure quote tailored to your market question.',
    primaryCta: { label: 'Book free scoping call', href: '/contact' },
    secondaryCta: { label: 'See our full process', href: '#process' },
  },

  _unverified: [
    'metricsStrip[*] — all values are illustrative. Confirm actual timelines and artifact counts before launch.',
    'engagementModels[*].priceFrom — all prices are placeholder. Confirm with user before launch.',
    'processSteps durations — day ranges are illustrative. Confirm actual cadence.',
    'faqs[3] — international market claim needs partner vetting confirmation.',
  ],
};

export default marketResearch;
