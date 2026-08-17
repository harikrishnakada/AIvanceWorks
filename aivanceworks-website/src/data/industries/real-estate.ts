import { BRAND_PREFIX } from '@/lib/constants';
import type { IndustryPageData } from '@/types/pages';

const realEstate: IndustryPageData = {
  slug: 'real-estate',
  name: 'Real Estate',
  title: `${BRAND_PREFIX} Real Estate Software Development`,
  shortDescription:
    'Custom software and AI for brokerages, property managers, investors, and PropTech — built data-first to move listings, deals, and decisions faster, from the first listing to the final signature.',

  metaTitle: 'Real Estate Software Development | PropTech, MLS/IDX & AI',
  metaDescription:
    'We build custom real estate and PropTech software — listing marketplaces, property management systems, deal-intelligence CRMs, valuation analytics, and MLS/IDX data pipelines — for brokerages, property managers, investors, and REITs. Architecture-first, Fair Housing-aware, AI-ready.',
  keywords: [
    'real estate software development',
    'proptech software development',
    'property listing platform development',
    'IDX MLS integration',
    'RESO web API integration',
    'custom property management software',
    'real estate CRM development',
    'automated valuation model development',
    'real estate data engineering',
    'lease management software',
    'commercial real estate software',
    'real estate AI development',
  ],
  canonicalPath: '/industry/real-estate',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industry' },
    { label: `${BRAND_PREFIX} Real Estate`, href: '/industry/real-estate' },
  ],

  composition: [
    'hero',
    'pressures',
    'capabilities',
    'compliance',
    'segments',
    'techStandards',
    'services',
    'faq',
    'cta',
  ],

  industry: 'real-estate',

  icon: 'Building2',
  homeCard: {
    tagline:
      'Data-first software that moves listings, deals, and decisions faster — from the first listing to the final signature.',
    short: 'Data-first software that moves listings, deals, and decisions faster.',
    image: '/images/industries/realestate/category-card-1.jpg',
    alt: 'Aerial view of a residential neighborhood of homes and winding streets',
    proof: ['MLS / IDX Data', 'Deal Pipeline', 'Property Analytics'],
  },
  hero: {
    kicker: 'Industries · Real Estate',
    headline: 'Software that moves real estate — from first listing to final close.',
    subhead:
      'Listings, deals, and decisions still move through disconnected tools, manual back-and-forth, and data that never quite lines up. We design and build the software layer in between — the platform that turns real estate data into faster deals and sharper decisions, not just another digitized form.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
    heroImage: {
      src: '/images/industries/realestate/hero.jpg',
      alt: 'Modern residential and commercial real estate skyline at dusk',
    },
    standards: ['RESO / IDX', 'Fair Housing', 'PCI DSS', 'SOC 2', 'ESIGN / UETA', 'GDPR / CCPA'],
    standardsLabel: 'Built to the standards real estate platforms run on',
  },

  // ── Problem statement (lead with the pain) ──
  pressures: {
    title: 'The forces reshaping how real estate gets done',
    intro:
      'Margins are squeezed by portal fees you can’t escape, buyers expect a Zillow-grade experience everywhere, and your operation runs on disconnected tools and data that never quite agrees with itself. These are the pressures we build software to relieve — which is why we lead with the deal, not the product.',
    items: [
      {
        icon: 'Globe',
        title: 'Renting your own buyers',
        description:
          'Leaning on Zillow and the national portals means paying for leads in your own market and owning none of the relationship, the brand, or the data behind them.',
      },
      {
        icon: 'Unplug',
        title: 'Data that won’t line up',
        description:
          'Listings, MLS feeds, public records, and CRM data live in incompatible silos with integrations bolted on late — so search, valuation, and reporting are never quite right.',
      },
      {
        icon: 'Boxes',
        title: 'Outgrown off-the-shelf tools',
        description:
          'AppFolio, Buildium, and generic CRMs force the operation to fit the software. Firms that have scaled past them need control they cannot buy off the shelf.',
      },
      {
        icon: 'ClipboardList',
        title: 'Manual, slow deal flow',
        description:
          'Underwriting in spreadsheets, closings over email and PDFs, lease renewals tracked by hand — every deal carries manual back-and-forth that adds days, cost, and risk.',
      },
      {
        icon: 'Target',
        title: 'Decisions made on stale data',
        description:
          'Pricing, valuation, and which lead to call first are still gut calls. The data to do better already exists — it just isn’t wired into the moment the decision is made.',
      },
    ],
  },

  // ── AI & technology catalog (dark bento) ──
  capabilities: {
    title: 'Platforms we design, build, and connect — across the deal lifecycle',
    highlightText: 'across the deal lifecycle',
    subtitle:
      'From the first search to the final signature, these are the systems we build — and the AI layer that turns your data into faster, sharper decisions over time.',
    groups: [
      {
        icon: 'Search',
        title: 'Listing & Marketplace Platforms',
        description: 'Architecture-first search built for conversion.',
        items: [
          'MLS/IDX-connected search (RESO Web API, RETS)',
          'Map-based search, saved searches & instant alerts',
          'Buyer, seller & agent portals with dashboards',
          'Real-time feeds on clean, conversion-tuned schemas',
          'White-label marketplaces beyond the Zillow clone',
        ],
      },
      {
        icon: 'Target',
        title: 'Real Estate CRM & Deal Intelligence',
        description: 'Not a generic CRM — a system that tells agents who to call first, and why.',
        items: [
          'Lead capture, pipeline & automated follow-up',
          'MLS activity triggers and behavioral signals',
          'AI lead scoring for 30-day close-ready buyers',
          'Agent performance & conversion dashboards',
          'Built for the real estate deal cycle, not bolted onto Salesforce',
        ],
      },
      {
        icon: 'Building2',
        title: 'Property Management Systems',
        description: 'Custom control where off-the-shelf can’t keep up.',
        items: [
          'Tenant onboarding & lease lifecycle management',
          'Online rent collection & ACH payments',
          'Maintenance request workflows',
          'Owner reporting & portfolio dashboards',
          'Predictive maintenance & late-payment risk scoring',
        ],
      },
      {
        icon: 'LineChart',
        title: 'Investment, Valuation & CRE Analytics',
        description: 'Underwriting and lease decisions, off the spreadsheet.',
        items: [
          'ML-driven automated valuation models (AVM)',
          'Deal underwriting, cap-rate & comparables engines',
          'Portfolio performance tracking & investor portals',
          'Lease management & tenant-mix optimization (CRE)',
          'Space utilization & broker collaboration tools',
        ],
      },
      {
        icon: 'FileSignature',
        title: 'Transaction Automation & PropTech Data',
        description: 'The connective tissue most vendors bolt on too late.',
        items: [
          'E-signature & document-generation workflows',
          'Compliance checklists & closing coordination',
          'RESO/IDX, CoStar, Zillow & GIS data connectors',
          'Payment, ACH & public-records integrations',
          'AI contract review & clause anomaly flagging',
        ],
      },
    ],
  },

  // ── Trust, payments & fairness (prominent) ──
  complianceDetail: {
    title: 'Payments, consumer data, and fair decisions you can be trusted with.',
    statement:
      'Real estate runs on money and consumer trust — card and bank details, household financials, and decisions that fall under fair-housing law. Buyers and regulators don’t engage without seeing this, so every system we build starts from payment security, data privacy, and algorithmic fairness — designed in from the first commit, never bolted on before launch.',
    frameworks: [
      'PCI DSS',
      'SOC 2',
      'GDPR',
      'CCPA',
      'Fair Housing Act',
      'ECOA',
      'RESO',
      'ESIGN / UETA',
    ],
    safeguards: [
      {
        icon: 'CreditCard',
        title: 'PCI DSS-compliant payments & rent collection',
        description:
          'Card and ACH data is tokenized and vaulted with a compliant payment provider, so raw account numbers never touch your servers — shrinking PCI scope from the first commit.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Consumer data privacy by design',
        description:
          'GDPR and CCPA consent, data-subject rights, and regional data residency are built into the data model — not patched in after a complaint or a cross-state expansion.',
      },
      {
        icon: 'Scale',
        title: 'Fair Housing & algorithmic fairness',
        description:
          'AVM and lead-scoring models are designed with protected-class awareness, bias monitoring, and explainability, so AI-assisted pricing and routing stay defensible under the Fair Housing Act and ECOA.',
      },
      {
        icon: 'FileCheck',
        title: 'MLS & IDX data licensing compliance',
        description:
          'We build to RESO Web API standards and IDX display rules — correct attribution, refresh cadence, and field-level usage — so your data distribution stays inside your MLS and association agreements.',
      },
      {
        icon: 'FileSignature',
        title: 'Legally valid e-signatures & audit trails',
        description:
          'Transaction and lease workflows meet ESIGN and UETA requirements with tamper-evident audit trails, integrating cleanly with DocuSign, Dotloop, and title-company systems.',
      },
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with secrets held in a managed vault and key-rotation policies that satisfy PCI and SOC 2 expectations.',
      },
    ],
    auditNote:
      'We provide the architecture documentation, data-flow diagrams, and control evidence your payment provider, MLS, or SOC 2 auditor needs — and we walk your security, legal, and compliance teams through PCI scope, data licensing, and fair-housing controls before a single transaction is processed.',
    partnerAgreements: ['DPA', 'SLA', 'PCI SAQ support'],
  },

  // ── Sub-verticals (who we serve) ──
  segments: {
    title: "Real estate isn't one buyer — and we don't build like it is",
    subtitle:
      'An independent brokerage, a REIT, and a PropTech startup share almost nothing about how they buy or what they need built. We scope, integrate, and frame the work to fit each one.',
    items: [
      {
        icon: 'Building2',
        name: 'Independent Brokerages',
        buyer: 'Broker-Owner · Managing Broker',
        needs: [
          'A branded listing site that isn’t a Zillow clone',
          'A CRM built for the real estate deal cycle',
          'Agent dashboards and intelligent lead routing',
          'Direct buyer relationships they actually own',
        ],
      },
      {
        icon: 'KeyRound',
        name: 'Property Management Firms',
        buyer: 'Owner · Director of Operations',
        needs: [
          'A unified PMS replacing fragmented tools',
          'A tenant portal with online rent collection',
          'Maintenance and lease-renewal workflows',
          'Owner reporting and portfolio dashboards',
        ],
      },
      {
        icon: 'Rocket',
        name: 'Real Estate Startups & PropTech',
        buyer: 'Founder · Head of Product',
        needs: [
          'An end-to-end platform, MVP-first',
          'Built to scale after the first growth spike',
          'MLS/IDX and data integrations that work',
          'Investor- and audit-ready architecture from day one',
        ],
      },
      {
        icon: 'TrendingUp',
        name: 'Investors & Syndicators',
        buyer: 'Principal · Acquisitions Lead',
        needs: [
          'Replace spreadsheet-based underwriting',
          'AVM and deal-analytics dashboards',
          'Portfolio performance tracking',
          'An investor portal for reporting and distributions',
        ],
      },
      {
        icon: 'Landmark',
        name: 'Commercial Landlords & REITs',
        buyer: 'Asset Management · Operations',
        needs: [
          'A modern lease-management platform',
          'Tenant-mix and space-utilization dashboards',
          'Data-driven lease decisions, not just workflow',
          'Broker collaboration and reporting portals',
        ],
      },
      {
        icon: 'Network',
        name: 'MLS & Associations',
        buyer: 'Executive Director · CTO',
        needs: [
          'A modern IDX and member portal',
          'RESO Web API compliance and clean distribution',
          'Member management and billing',
          'Well-licensed, well-governed data feeds',
        ],
      },
    ],
    footerNote:
      'Not sure which path fits? A short consultation will map your segment, your existing systems and data sources, and the fastest route from manual workflows to a platform you own.',
  },

  // ── Technology & standards ──
  techStandards: {
    title: 'We speak your stack',
    subtitle:
      'The systems and data sources real estate already runs on, and the platforms, standards, and AI frameworks we build with.',
    systemsTitle: 'Systems & data sources you already run',
    systems: [
      'MLS / IDX via RESO Web API & RETS',
      'Public records & county assessor data',
      'CoStar, Zillow & Redfin data feeds',
      'DocuSign, Dotloop & title-company APIs',
      'Payment & ACH gateways (Stripe, Plaid)',
      'Accounting & GL (QuickBooks, Yardi exports)',
      'Map, GIS & geocoding (Mapbox, Google Maps, Walk Score)',
    ],
    technologiesTitle: 'Platforms, standards & AI frameworks',
    technologies: [
      'Azure',
      'AWS',
      'RESO Web API',
      'RETS',
      'PostGIS',
      'Elasticsearch',
      '.NET',
      'Python',
      'TypeScript',
      'Next.js',
      'React Native',
      'Azure OpenAI',
      'PyTorch',
      'LangChain',
      'Databricks',
      'Mapbox',
    ],
  },

  // ── Relevant services we bring to real estate (cross-links) ──
  services: {
    title: 'The services we bring to real estate',
    subtitle:
      'The engineering and AI capabilities we apply to the hardest problems in real estate and PropTech — explore each.',
    items: [
      {
        title: 'Custom Software Development',
        description:
          'End-to-end platform builds — listing marketplaces, PMS, and deal-intelligence CRMs — engineered for your operation instead of forced to fit off-the-shelf tools.',
        href: '/services/custom-software-development',
        icon: 'Code2',
      },
      {
        title: 'Data Engineering',
        description:
          'MLS/IDX feeds, public-records pipelines, and clean property schemas — the analytics-ready foundation that search and valuation depend on.',
        href: '/services/data-engineering',
        icon: 'Database',
      },
      {
        title: 'API Development',
        description:
          'RESO Web API, RETS, and third-party connectors (CoStar, Zillow, payments, GIS) — the integration layer most vendors bolt on too late.',
        href: '/services/api-development',
        icon: 'Webhook',
      },
      {
        title: 'ML Development',
        description:
          'Automated valuation models, lead scoring, and demand forecasting trained on your market’s data — not generic comp math.',
        href: '/services/ml-development',
        icon: 'Brain',
      },
      {
        title: 'Generative AI',
        description:
          'Contract review assistance, lease intelligence, and disclosure assembly built on governed LLMs with human-in-the-loop oversight.',
        href: '/services/generative-ai',
        icon: 'Sparkles',
      },
      {
        title: 'NLP & Document AI',
        description:
          'Turn leases, contracts, and disclosures into structured, searchable, audit-ready data with key-term extraction and anomaly flagging.',
        href: '/services/nlp-document-ai',
        icon: 'FileText',
      },
    ],
  },

  faqTitle: 'Questions real estate teams ask',
  faqs: [
    {
      question: 'What kinds of real estate software do you build?',
      answer:
        'We build across the full deal lifecycle: listing and marketplace platforms (MLS/IDX search, buyer/seller/agent portals), real estate CRMs and deal-intelligence systems, custom property management systems (PMS), investment and valuation analytics (AVM, underwriting, CRE lease and portfolio tools), transaction and document automation, and the PropTech data and integration layer underneath. We work with independent brokerages, property management firms, real estate startups and PropTech companies, investors and syndicators, commercial landlords and REITs, and MLS organizations.',
    },
    {
      question: 'Can you integrate with our MLS, IDX, and public data sources?',
      answer:
        'Yes — and we design the data pipeline correctly from day one rather than bolting it on later. We integrate via the RESO Web API and legacy RETS for MLS/IDX, plus public records and county assessor data, and third-party feeds like CoStar, Zillow, Redfin, Walk Score, and GIS/mapping providers. Where a source exposes limited or messy data, we build a clean property schema and a secure middleware layer so real-time feeds, search, and valuation stay accurate and your IDX usage stays inside your MLS and association agreements.',
    },
    {
      question: 'How do you handle payments, data privacy, and Fair Housing compliance?',
      answer:
        'All three are designed in from the start. For payments and rent collection, we tokenize and vault card and ACH data with a PCI-compliant provider so raw account numbers never touch your servers. For privacy, GDPR and CCPA consent and data-subject rights are built into the data model. And for AI-assisted features like automated valuation and lead scoring, we design with protected-class awareness, bias monitoring, and explainability so decisions stay defensible under the Fair Housing Act and ECOA. We also build e-signature and transaction flows to ESIGN and UETA standards with tamper-evident audit trails.',
    },
    {
      question: "We're a PropTech startup with no in-house engineering — can you build our platform?",
      answer:
        'Absolutely. We help founders ship an MVP-first platform on an architecture that scales, so you’re not re-platforming after your first growth spike or enterprise deal. That means a working product fast — listing search, a portal, or a deal-analytics core — with the MLS/IDX, payment, and data integrations your product depends on, engineered to be investor- and audit-ready from day one.',
    },
    {
      question: 'Where does AI actually fit in a real estate platform?',
      answer:
        'We anchor AI as an intelligence layer that activates once your data is ready to work harder — not a gimmick wrapped around every feature. In practice that means AI-powered lead scoring that predicts which buyers are close-ready from search behavior and engagement, ML-based automated valuation models that outperform simple comp math (especially for off-market or niche property types), lease intelligence that extracts key terms and flags non-standard clauses, and market-trend dashboards that forecast demand by zip, property type, and price band. Each one makes the underlying listing, CRM, PMS, or valuation system sharper over time.',
    },
    {
      question: 'Can you just be our data and integrations partner, not a full dev shop?',
      answer:
        'Yes. Many PropTech companies already have a core product but need a data engineering and integrations partner rather than a full build. We take on MLS/IDX integration (RESO Web API, RETS), third-party data connectors (Zillow, Redfin, CoStar, Walk Score, school-district and county records), payment and ACH gateways, and map/GIS overlays as a standalone engagement — delivering clean, governed, well-licensed data pipelines you can build the rest of your product on.',
    },
  ],

  cta: {
    title: "Let's build the software that moves your deals faster.",
    description:
      "Real estate runs on connected data and consumer trust. Start with a consultation: we'll map your segment, your existing systems and data sources, and the fastest realistic route from manual workflows to a platform you own.",
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
  },

  _unverified: [
    'All content uses capability framing only — no client names, case studies, testimonials, or measured outcome metrics are claimed.',
    'complianceDetail.frameworks — "SOC 2" listed; confirm whether {SITE_CONFIG.name} holds a SOC 2 attestation or is in progress. PCI DSS framing describes architecting client applications to reduce PCI scope, not a held QSA certification. Fair Housing Act / ECOA framing describes design practices for algorithmic fairness, not a legal compliance guarantee.',
    'techStandards.systems & capabilities — integration names (RESO, RETS, CoStar, Zillow, Redfin, Walk Score, DocuSign, Dotloop, Stripe, Plaid, Yardi, QuickBooks, Mapbox) describe competencies; confirm which have actually shipped before implying delivered volume.',
    'services — cross-links point to live /services/* pages. hero.secondaryCta / cta.secondaryCta anchor to #services.',
  ],
};

export default realEstate;
