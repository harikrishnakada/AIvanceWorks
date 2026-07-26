import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// ─── Archetype: B (Technical service) — flagship "how we build" page ─────────
//
// Archetype call (§6.5 + audience test §9.5):
//   This is the flagship Enterprise Software Development page. It sits ABOVE the
//   industry vertical pages (which answer "who we build for") and answers "how
//   we build." The primary buyer mindset is Archetype B — "I need this built;
//   prove you can build it." The deliverable is running systems, not a strategy
//   artifact, so it is B, not A (that separates it from digital-transformation
//   and ai-strategy-consulting, which are A). Cherry-pick from A: a
//   `personaComparison` ("Who We Serve"), because a flagship surface must let
//   six distinct C-suite personas self-identify before they read further.
//   TechStackBlock is DROPPED (the CxO/founder buyer does not choose us on a raw
//   chip grid; platform names are woven into feature prose as "we build with",
//   greenfield honesty §9.5). ProcessTimeline is dropped per Archetype B — the
//   signature (delivery model) already carries the "how" as a relationship.
//
// New section (recorded deviation — see constitution changelog v2.13):
//   `industryDirectory` — a service-only cross-vertical navigation section that
//   routes this flagship down into the /industry/<slug> pages. The existing
//   RelatedPages component only links services/solutions (pageType badge); an
//   industry is neither, and this needs six links, not three. A new SectionKey
//   + IndustryDirectoryData type + IndustryDirectory shared section were added.
//
// Buyer personas (the six in the Who-We-Serve section, primary = CTO/CEO):
//   CTO/VP Eng, COO/VP Ops, CEO/Founder (mid-market), CDO/Head of Data,
//   CIO/IT Director, and enterprise Product Leader. All are business/technical
//   decision-makers who answer to a board and a P&L — not a regulator (so no
//   ComplianceDeepDive) and not an individual engineer.
//
// Top 3 buyer questions (drive composition order):
//   1. "What do you actually build, and is it right for us vs. off-the-shelf?"
//      → featureGrid (six offerings) + a build-vs-buy FAQ.
//   2. "How do I know you'll build what we need, not just what we asked for?"
//      → signature (the spec-first / product-engineering / AI-augmented model).
//   3. "Do you understand my industry?" → personaComparison + industryDirectory.
//
// Key trust issue:
//   Burned before by (a) body shops that billed hours and shipped exactly the
//   ambiguous brief, (b) vendor lock-in with no source/IP ownership, and (c) SIs
//   that pitched "rip and replace." Answered with: spec-first framing, explicit
//   ownership ("you own it"), integration-first "modernize what works" framing,
//   and an ownership FAQ. All claims capability-framed (greenfield integrity).
//
// Tone rhythm (10 sections):
//   Hero (dark) → MetricsStrip (light) → FeatureGrid (warm) → Signature (dark)
//   → PersonaComparison (light) → BenefitsGrid (warm) → IndustryDirectory (light)
//   → RelatedPages (warm) → FAQ (light) → CTA (accent).
//   Two darks (hero + signature), non-adjacent; CTA accent. ✓ §4 rhythm.
//
// imageFeatures note: SERVICE pages render an inline SVG hero illustration, not
//   photos. ServiceDetailTemplate maps `imageFeatures` to () => null, so it is
//   omitted from the composition here. Placeholder JPEGs exist under
//   public/images/services/enterprise-software-development/ for spec parity only.

const enterpriseSoftwareDevelopment: ServicePageData = {
  slug: 'enterprise-software-development',
  title: `${BRAND_PREFIX} Enterprise Software Development`,
  shortDescription:
    'Custom enterprise software built around how your business actually operates — applications, integrations, legacy modernization, data platforms, and enterprise AI, delivered spec-first and owned by your team.',

  metaTitle: 'Enterprise Software Development | Custom Systems Built to Fit',
  metaDescription:
    'Custom enterprise software development for US businesses: bespoke applications, system integration and APIs, legacy modernization, enterprise AI, data platforms, and cloud-native builds — spec-first, product-engineered, and owned by your team.',
  keywords: [
    'enterprise software development',
    'custom enterprise software',
    'enterprise application development',
    'enterprise system integration',
    'legacy system modernization',
    'enterprise AI development',
    'enterprise data platform',
    'cloud-native development',
    'custom software vs off-the-shelf',
    'API development',
    'business software development',
    'enterprise software company',
  ],
  canonicalPath: '/services/enterprise-software-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    {
      label: `${BRAND_PREFIX} Enterprise Software Development`,
      href: '/services/enterprise-software-development',
    },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'personaComparison',
    'benefitsGrid',
    'industryDirectory',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'EnterpriseDeliveryModel',
  heroIllustrationComponent: 'EnterpriseSoftwareHeroIllustration',

  hero: {
    badge: 'Enterprise Software Development',
    headline: 'Enterprise software built for how your business actually operates.',
    subhead:
      'Off-the-shelf platforms solve yesterday’s problems. We build the custom systems that solve yours — designed around your workflows, your data, and how you actually operate.',
    primaryCta: { label: 'Book a Build Consultation', href: '/contact' },
    secondaryCta: { label: 'See how we build', href: '#signature' },
  },

  // Audience test: a CTO/CEO scans in 8 seconds. Every metric is capability-
  // framed (greenfield-safe — describes our approach, not past client outcomes)
  // and speaks to the buyer's trust issues: fit, ownership, spec discipline, AI.
  metricsStrip: [
    {
      value: 'Built to Fit',
      label: 'Not off-the-shelf',
      description: 'Systems shaped around your workflows, not the reverse',
    },
    {
      value: 'You Own It',
      label: 'Source, IP & docs',
      description: 'No per-seat lock-in, no vendor hostage situation',
    },
    {
      value: 'Spec-First',
      label: 'Requirements before code',
      description: 'Scope and success defined before we build',
    },
    {
      value: 'AI-Augmented',
      label: 'Across the lifecycle',
      description: 'Faster delivery at comparable price points',
    },
  ],

  // Audience test: the buyer wants to see WHAT we build and that it is the right
  // shape for a company off-the-shelf can't serve. Six offerings, each framed as
  // a business outcome with platform names woven in as "we build with" (§9.5).
  features: [
    {
      icon: 'LayoutGrid',
      title: 'Custom Enterprise Application Development',
      description:
        'When SaaS can’t accommodate your business model, complex workflows, or multi-entity data, we build the internal operations platforms, customer-facing portals, and workflow automation you own instead of rent — from architecture and product spec through QA, deployment, and support.',
    },
    {
      icon: 'Webhook',
      title: 'Enterprise System Integration & API Development',
      description:
        'Most enterprise problems aren’t “replace everything” — they’re systems that don’t share data, bridged by people doing it by hand. We build the APIs, middleware, ERP and CRM connectors, EDI pipelines, and event-driven integration layers that make your existing systems finally talk to each other.',
    },
    {
      icon: 'RefreshCw',
      title: 'Legacy System Modernization',
      description:
        'We re-architect brittle monoliths into modular systems, migrate on-prem to cloud or hybrid, and replace dated interfaces while preserving the business logic that works — modernizing what’s worth keeping and replacing what isn’t, incrementally, using AI-assisted analysis of legacy code to move faster.',
    },
    {
      icon: 'Bot',
      title: 'Enterprise AI & Intelligent Automation',
      description:
        'Production-grade AI embedded in operations, not POC demos: agentic workflow automation with human oversight and audit trails, intelligent document processing, enterprise search over your own data, and predictive dashboards for forecasting, anomaly detection, and risk scoring.',
    },
    {
      icon: 'Database',
      title: 'Enterprise Data Platforms & Business Intelligence',
      description:
        'Usually a data-architecture problem, not a tools problem — so we fix the foundation first: pipelines and warehouses on Snowflake, BigQuery, or Redshift, and self-service dashboards non-technical stakeholders can actually use, with natural-language querying over governed enterprise data.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud-Native Development & DevOps',
      description:
        'Cloud-native is an architectural philosophy — systems that scale horizontally, deploy continuously, and recover gracefully — designed in from day one, not retrofitted. We build with microservices, Docker and Kubernetes, CI/CD, and infrastructure-as-code across AWS, Azure, and GCP.',
    },
  ],

  // Who We Serve (cherry-picked from Archetype A). Six enterprise buyer
  // archetypes, each mapped from the problem they arrive with to the engagement
  // we recommend. title = role, subtitle = the trigger, features = the match.
  personaComparison: {
    eyebrow: 'Who we serve',
    title: 'Built for the leader who owns the problem.',
    highlightText: 'owns the problem',
    subtitle:
      'Enterprise software is bought by people measured on outcomes, not code. Find yourself below — and the engagement we’d start with.',
    personas: [
      {
        icon: 'Code2',
        title: 'CTO / VP Engineering',
        subtitle: 'Backlog too big, team too small, wrong skill mix',
        features: [
          'A full delivery team or targeted staff augmentation',
          'Senior engineers who own architecture and outcomes',
        ],
        accent: 'brand',
      },
      {
        icon: 'Workflow',
        title: 'COO / VP Operations',
        subtitle: 'Manual processes, fragmented systems, no visibility',
        features: [
          'Workflow automation plus an integration platform',
          'One connected view across the systems you already run',
        ],
        accent: 'accent',
      },
      {
        icon: 'Rocket',
        title: 'CEO / Founder (mid-market)',
        subtitle: 'Outgrown SaaS; need a platform built around your model',
        features: [
          'A spec-first, product-led custom application',
          'A system you own, not a subscription you rent',
        ],
        accent: 'secondary',
      },
      {
        icon: 'Database',
        title: 'CDO / Head of Data',
        subtitle: 'Data trapped in silos, no reliable reporting',
        features: [
          'A data platform with modern BI tooling',
          'Governed data with self-service analytics',
        ],
        accent: 'brand',
      },
      {
        icon: 'RefreshCw',
        title: 'CIO / IT Director',
        subtitle: 'A legacy system is holding the business back',
        features: [
          'A modernization roadmap plus a phased build',
          'Modernize what works, replace what doesn’t',
        ],
        accent: 'accent',
      },
      {
        icon: 'LayoutDashboard',
        title: 'Product Leader (enterprise)',
        subtitle: 'Internal tools are blocking team velocity',
        features: [
          'Internal tooling and a developer-experience platform',
          'Tools your teams actually want to use',
        ],
        accent: 'secondary',
      },
    ],
    footerNote:
      'Not sure which one you are? A short discovery call maps your situation to the right starting point.',
  },

  // AI Differentiator — "When your enterprise needs intelligence, not just
  // software." Framed as capabilities (greenfield-safe). This is where our
  // multi-agent systems background surfaces: AI as infrastructure, not a feature.
  benefits: [
    {
      icon: 'Bot',
      title: 'Agentic Process Automation',
      description:
        'Multi-step operational processes run by AI agents with human oversight and full audit trails — automation that reasons through a task, not just follows a fixed rule, and always within the authority you grant it.',
    },
    {
      icon: 'FileText',
      title: 'Intelligent Document Processing',
      description:
        'Contracts, invoices, forms, and reports extracted, classified, and routed at enterprise scale — turning the unstructured paperwork that clogs operations into structured, actionable data.',
    },
    {
      icon: 'Search',
      title: 'Enterprise Knowledge & Search',
      description:
        'Retrieval-augmented generation over your own company data, so staff get accurate, cited answers drawn from your documents — instead of hunting across systems or relying on a model that guesses.',
    },
    {
      icon: 'TrendingUp',
      title: 'Predictive Operations',
      description:
        'Forecasting, anomaly detection, and risk scoring embedded directly in the operational dashboards your team already works in — intelligence delivered where the decisions actually get made.',
    },
  ],

  // Cross-vertical navigation into the /industry/<slug> pages. This flagship is
  // the "how we build" surface; the industry pages are "who we build for."
  industryDirectory: {
    eyebrow: 'Who we build for',
    title: 'The same engineering, shaped for your industry.',
    highlightText: 'your industry',
    subtitle:
      'This page is how we build. Below is who we build for — explore the vertical where your business operates.',
    items: [
      {
        name: 'Real Estate & PropTech',
        connector:
          'Building for brokerages, property managers, or PropTech startups? See our Real Estate software page.',
        href: '/industry/real-estate',
        icon: 'Building2',
      },
      {
        name: 'Retail',
        connector:
          'Building for DTC brands, retailers, or marketplace platforms? See our Retail software page.',
        href: '/industry/retail',
        icon: 'ShoppingBag',
      },
      {
        name: 'Manufacturing & Supply Chain',
        connector:
          'Building for manufacturers, distributors, or supply chain operators? See our Manufacturing & Supply Chain software page.',
        href: '/industry/manufacturing-supply-chain',
        icon: 'Factory',
      },
      {
        name: 'Logistics',
        connector:
          'Building for 3PLs, fleet operators, or freight platforms? See our Logistics software page.',
        href: '/industry/logistics',
        icon: 'Truck',
      },
      {
        name: 'Travel & Hospitality',
        connector:
          'Building for hotels, OTAs, or travel platforms? See our Travel & Hospitality software page.',
        href: '/industry/travel-hospitality',
        icon: 'Plane',
      },
      {
        name: 'Food & Beverage',
        connector:
          'Building for restaurant groups, food distributors, or F&B operators? See our Food & Beverage software page.',
        href: '/industry/food-beverage',
        icon: 'Utensils',
      },
    ],
  },

  relatedPages: [
    {
      title: `${BRAND_PREFIX} Custom Software Development`,
      description:
        'Know you need a bespoke application built end-to-end? This is the core engineering engagement behind every enterprise platform we ship — full-stack, from spec to production.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
    {
      title: `${BRAND_PREFIX} Legacy Modernization`,
      description:
        'Is most of the problem an aging system? See how we decompose and re-platform monoliths with the strangler fig pattern — modernizing incrementally while production stays live.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: `${BRAND_PREFIX} Enterprise AI Development`,
      description:
        'Ready to put production-grade AI inside your operations? This is the delivery discipline behind agentic automation, document AI, and enterprise search at scale — past the pilot, into production.',
      href: '/services/enterprise-ai-development',
      icon: 'Bot',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'What counts as “enterprise software,” and how is this different from a big systems integrator?',
      answer:
        'Enterprise software is the business-critical systems your organization runs on — the applications, integrations, data platforms, and automation that off-the-shelf tools can’t fully accommodate. We differ from large systems integrators in two ways: senior engineers own your build directly (no layered offshore hand-offs and no army of junior staff learning on your budget), and we modernize what works rather than defaulting to an expensive rip-and-replace. You get a boutique team’s accountability with enterprise-grade engineering.',
    },
    {
      question: 'Should we build custom software or just configure an off-the-shelf platform?',
      answer:
        'Off-the-shelf is the right call when your process is standard and a mature product already fits it — and we’ll tell you when that’s true. Custom is worth it when your business model, workflows, multi-entity data, or integration demands don’t fit the box, or when the tool you’d own becomes a competitive advantage rather than a cost. The honest answer is usually a mix: buy the commodity pieces, and build the parts that make you different. Our discovery process makes that build-vs-buy call explicit before you commit.',
    },
    {
      question: 'We don’t want to replace everything at once — where do we start?',
      answer:
        'You rarely should replace everything at once. The highest-ROI first engagement is usually integration: most enterprise pain isn’t a missing system, it’s systems that don’t share data, bridged by people doing it manually. We connect what you already have, prove value quickly, and let that become the foundation for larger builds. Legacy modernization follows the same principle — incremental, module by module, with production live throughout.',
    },
    {
      question:
        'How do you make sure you build what we actually need, not just what we asked for?',
      answer:
        'This is the most common failure in custom software, so we designed against it. Every engagement starts spec-first — a written requirements document that states what we’re building, why, and how success is measured, agreed before any code. From there we work as a product-engineering team that owns architecture and outcomes, not a body shop executing tickets. Working software is delivered in increments and validated against the spec as we go, so misunderstandings surface in weeks, not at the end.',
    },
    {
      question: 'How does AI fit into how you build — is it just a marketing claim?',
      answer:
        'Two ways, and both are concrete. First, AI is a product capability we build for you — agentic automation, intelligent document processing, enterprise search over your own data, and predictive dashboards, engineered for production with human oversight and audit trails. Second, our own engineers use AI tooling across the delivery lifecycle — spec writing, code generation, testing, and documentation — which is how we deliver faster at comparable price points. It’s a workflow we run every day, not a slogan on a slide.',
    },
    {
      question: 'Who owns the software, source code, and IP when the engagement ends?',
      answer:
        'You do. We build systems you own outright — source code, documentation, and intellectual property transfer to your organization, and we build with mainstream cloud platforms and open standards rather than proprietary lock-in. A core goal of every engagement is that your team can run, maintain, and extend the system without depending on us. We want to be your engineering partner because you choose to continue, not because you’re trapped.',
    },
  ],

  cta: {
    title: 'Let’s build the system your business actually runs on.',
    description:
      'Book a 30-minute build consultation. We’ll talk through how your business operates today, where off-the-shelf is holding you back, and what a custom enterprise platform — owned by your team — could look like.',
    primaryCta: { label: 'Book a Build Consultation', href: '/contact' },
    secondaryCta: { label: 'See how we build', href: '#signature' },
  },

  // ─── Content integrity (§9) — resolved _unverified list ───
  // All metrics are capability-framed (no fabricated stats, no uncited % ranges,
  // no prices/durations). All capability claims use "we build / built to /
  // designed to / engineered to" framing (greenfield integrity). No invented
  // case studies, no client logos. Platform/vendor names (Snowflake, BigQuery,
  // Redshift, AWS/Azure/GCP, Docker/Kubernetes, ERP/CRM/EDI) are framed as "we
  // build with" capabilities, never as shipped client integrations.
  _unverified: [
    'benefits (AI Differentiator) — the four AI capabilities are framed as things we build, not measured client outcomes; keep capability-framed until a verified case exists.',
    'imageFeatures + public/images/services/enterprise-software-development/*.jpg — placeholder JPEGs for spec parity only; SERVICE template renders imageFeatures as null (services use the inline SVG hero illustration, not photos). Not a render bug; replace only if services ever wire the ImageFeature section.',
  ],
};

export default enterpriseSoftwareDevelopment;
