import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP Sales / RevOps lead / COO at a mid-market company (50–500 employees) where
//   off-the-shelf CRMs (Salesforce, HubSpot, Dynamics) either don't fit the sales process
//   or have become an expensive mess of unmaintained customizations.
// Measured on: pipeline visibility, sales-cycle reduction, rep adoption, revenue accuracy.
// Dominant question: "Can you build or customize a CRM that matches how we actually sell —
//   and integrate it with the rest of our stack — without locking us into another vendor?"
// Key trust issue: "Our last CRM rollout failed. Reps refused to use it, data went stale,
//   and we still close deals out of spreadsheets and email threads."
//
// Signature reused: SoftwareDeliveryPipeline (shared with custom-software-development) —
//   communicates the build/integration discipline RevOps leaders need to see. Hero
//   illustration reused: CustomDevHeroIllustration. Both are accepted reuse per the
//   constitution (similar to DiscoveryBeforeAfter shared by market-research and
//   product-discovery).

const crm: ServicePageData = {
  slug: 'crm',
  title: 'CRM',
  shortDescription:
    'Custom CRM development and platform customization — pipelines, automation, and integrations engineered around how your team actually sells. Salesforce, HubSpot, Dynamics, or fully custom.',

  metaTitle: 'CRM Development & Customization | Custom Salesforce, HubSpot & Dynamics Solutions',
  metaDescription:
    'Custom CRM development and platform customization for mid-market sales teams. Built around your sales process, integrated with your stack, and designed for rep adoption — not against it.',
  keywords: [
    'crm development',
    'custom crm software',
    'crm customization',
    'salesforce customization',
    'hubspot customization',
    'dynamics 365 crm',
    'crm integration services',
    'crm consulting company',
    'sales automation software',
    'customer relationship management software',
    'b2b crm development',
    'crm migration services',
  ],
  canonicalPath: '/services/crm',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'CRM', href: '/services/crm' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'SoftwareDeliveryPipeline',
  heroIllustrationComponent: 'CustomDevHeroIllustration',

  hero: {
    badge: 'CRM Development & Customization',
    headline: 'A CRM your reps will actually use.',
    subhead:
      'Custom CRM builds and platform customization (Salesforce, HubSpot, Dynamics) engineered around your real sales process — with the integrations, automations, and reporting that turn pipeline data into revenue decisions.',
    primaryCta: { label: 'Book a CRM Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See how we deliver', href: '#signature' },
  },

  metricsStrip: [
    {
      value: 'Process-First',
      label: 'Built around your sales motion',
      description: 'Not a templated install',
    },
    {
      value: 'Integrated',
      label: 'Connected to billing, marketing, support',
      description: 'No more silo-and-stitch',
    },
    {
      value: 'Adoption-Ready',
      label: 'Designed with reps, not at them',
      description: 'Used in the field, not abandoned',
    },
    {
      value: 'Vendor-Neutral',
      label: 'Salesforce, HubSpot, Dynamics, or custom',
      description: 'We pick the fit, not the fee',
    },
  ],

  features: [
    {
      icon: 'Settings',
      title: 'Custom CRM Platform Builds',
      description:
        'When off-the-shelf does not fit — bespoke CRM applications built on .NET, Next.js, and PostgreSQL. Your data model, your workflow, your UI — engineered for the way your team actually sells.',
    },
    {
      icon: 'RefreshCw',
      title: 'Salesforce, HubSpot & Dynamics Customization',
      description:
        'Apex, Lightning components, HubSpot custom objects, Power Platform extensions. We extend the platform you already pay for — without turning it into a maintenance nightmare.',
    },
    {
      icon: 'GitBranch',
      title: 'Sales Process Automation',
      description:
        'Lead routing, pipeline stage gating, approval workflows, quote-to-cash automation. Codify the steps your top reps already take — so the rest of the team gets there faster.',
    },
    {
      icon: 'Layers',
      title: 'Integration & Data Sync',
      description:
        'ERP, billing, marketing automation, support desk, data warehouse. Bidirectional integrations with conflict resolution and audit trails — so the CRM stays the source of truth.',
    },
    {
      icon: 'TrendingUp',
      title: 'Pipeline Reporting & Forecasting',
      description:
        'Custom dashboards, weighted forecasting, cohort analysis, and revenue attribution. Reports leaders trust enough to use in board meetings — not exports they manually clean every Monday.',
    },
    {
      icon: 'ArrowRightLeft',
      title: 'CRM Migration & Consolidation',
      description:
        'From spreadsheets, legacy CRMs, or two-CRM-stitch situations onto a single platform. Data cleansing, deduplication, mapping, and parallel-run cutover — without losing pipeline visibility mid-quarter.',
    },
  ],

  benefits: [
    {
      icon: 'Eye',
      title: 'Pipeline Visibility Leaders Actually Trust',
      description:
        'Stage definitions enforced in the system, not just in the playbook. Forecast roll-ups that match the deal-by-deal reality. The number on the dashboard equals the number you commit to the board.',
    },
    {
      icon: 'Zap',
      title: 'Automation That Removes Rep Friction',
      description:
        'Auto-logged activities, intelligent lead routing, one-click follow-up sequences, and contextual next-step prompts. Reps spend more time selling — and the system gets better data because they actually use it.',
    },
    {
      icon: 'Shield',
      title: 'Data You Can Bet a Quarter On',
      description:
        'Validation rules, required-field enforcement at stage transitions, deduplication, and audit logging. Forecasts, commissions, and revenue recognition all flow from one trusted source.',
    },
    {
      icon: 'Scaling',
      title: 'A System That Scales With Your GTM',
      description:
        'New product line? New region? New segment? Add pipelines, territories, and teams without rebuilding from scratch. Configurable where it should be, opinionated where it must be.',
    },
    {
      icon: 'FileCheck',
      title: 'Lower Total Cost Than Endless Customization',
      description:
        'Most "expensive" CRMs got expensive through years of unmanaged customization. We refactor, document, and consolidate — so you stop paying twice (in license fees and consultant hours) for the same broken process.',
    },
  ],

  capabilities: [
    'Custom CRM application development (greenfield)',
    'Salesforce customization (Apex, Lightning Web Components, Flows)',
    'HubSpot customization (custom objects, workflows, API extensions)',
    'Microsoft Dynamics 365 / Power Platform development',
    'CRM-to-ERP and CRM-to-billing integrations (Stripe, Chargebee, NetSuite, SAP)',
    'Marketing automation integration (HubSpot, Marketo, Pardot, Mailchimp)',
    'Sales process design and pipeline architecture',
    'Lead scoring, routing, and deduplication systems',
    'Custom reporting, forecasting, and revenue analytics',
    'Data migration, cleansing, and consolidation across legacy CRMs',
  ],

  technologies: [
    '.NET / ASP.NET Core',
    'Next.js / React',
    'TypeScript',
    'PostgreSQL / Azure SQL',
    'Salesforce (Apex, LWC)',
    'HubSpot API',
    'Microsoft Dynamics 365',
    'Power Platform',
    'Azure / AWS',
    'Stripe',
    'Segment',
    'Snowflake',
  ],

  engagementModels: [
    {
      name: 'CRM Audit & Roadmap',
      duration: '3–4 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'Sales process discovery with leadership and reps',
        'Current-state CRM and integration audit',
        'Data quality and adoption assessment',
        'Recommended platform and customization plan',
        'Phased implementation roadmap with cost estimates',
      ],
      suitableFor: 'RevOps leaders deciding whether to fix, replace, or consolidate their CRM',
      primaryCta: { label: 'Book CRM Audit Call', href: '/contact?crm=audit' },
    },
    {
      name: 'CRM Build & Customize',
      duration: '8–16 weeks',
      priceFrom: '$60,000',
      whatsIncluded: [
        'Custom CRM build OR Salesforce / HubSpot / Dynamics customization',
        'Sales process automation and pipeline configuration',
        'Up to 3 system integrations (ERP, billing, marketing)',
        'Custom dashboards and forecasting reports',
        'Data migration from legacy systems',
        'Rep enablement, training, and go-live support',
      ],
      suitableFor: 'Mid-market sales teams replacing a failed CRM or scaling beyond an off-the-shelf install',
      primaryCta: { label: 'Book Build Call', href: '/contact?crm=build' },
      featured: true,
    },
    {
      name: 'Managed CRM Partner',
      duration: 'Ongoing',
      priceFrom: '$12,000/mo',
      whatsIncluded: [
        'Dedicated CRM engineering capacity (2–3 engineers + admin)',
        'Continuous customization and feature delivery',
        'Integration health monitoring + incident response',
        'Quarterly roadmap planning with RevOps',
        'Data quality, deduplication, and reporting upkeep',
      ],
      suitableFor: 'Companies treating the CRM as a strategic platform, not a one-time project',
      primaryCta: { label: 'Book Managed Partner Call', href: '/contact?crm=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'Custom Software Development',
      description:
        'When the CRM needs to integrate with proprietary systems or specialized workflows, our custom software practice builds the connecting layer that off-the-shelf platforms cannot.',
      href: '/services/custom-software-development',
      icon: 'Settings',
      pageType: 'service',
    },
    {
      title: 'ERP Development',
      description:
        'Pairing CRM with finance and operations? We implement and integrate ERP systems so quote-to-cash, billing, and revenue recognition stay in lockstep with the sales pipeline.',
      href: '/services/erp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Data Engineering',
      description:
        'CRM data only matters if it flows into the warehouse cleanly. Our data engineering team builds pipelines, deduplication, and reverse-ETL so the CRM is both a source and a consumer of trusted data.',
      href: '/services/data-engineering',
      icon: 'Database',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Should we build a custom CRM or customize Salesforce / HubSpot / Dynamics?',
      answer:
        'Customize the platform you already pay for whenever the gap is process and integration — that is true for the majority of mid-market teams. Build custom only when the data model, regulatory constraints, or workflow are so unusual that platform extension would cost more than a bespoke application over a 3–5 year horizon. Our CRM Audit engagement produces a clear recommendation with cost projections for both paths so the decision is grounded in numbers, not preference.',
    },
    {
      question: 'How do you actually drive rep adoption — that is where every CRM rollout dies?',
      answer:
        'We co-design with the reps who will use the system, not just the executives buying it. Field interviews, shadow sessions on real deals, and friction-mapping happen before we touch a configuration screen. Then we automate or eliminate the data-entry tasks reps hate (activity logging, contact lookup, follow-up scheduling) so the CRM saves them time instead of taxing them. Adoption stops being a training problem when the system is faster than the spreadsheet.',
    },
    {
      question: 'Can you integrate the CRM with our ERP, billing, and marketing tools?',
      answer:
        'Yes. Bidirectional integrations between CRM and ERP (NetSuite, SAP, Dynamics F&O), billing (Stripe, Chargebee, Zuora), marketing automation (HubSpot, Marketo, Pardot), support (Zendesk, Intercom), and the data warehouse are core to most engagements. We handle the boring-but-critical parts — conflict resolution, retry logic, audit trails, and observability — so the integrations stay healthy after the consultants leave.',
    },
    {
      question: 'How do you handle data migration from a legacy CRM or spreadsheets?',
      answer:
        'Migration is a tracked workstream, not a weekend job. We profile the source data first (duplicates, missing fields, inconsistent formats), define the canonical mappings with your team, run staged migrations into a sandbox, and execute a parallel-run cutover so reps keep working while data syncs. Cleansing and deduplication happen during migration, not after — because nobody comes back to clean data once the new system is live.',
    },
    {
      question: 'Who owns the code, configurations, and customizations?',
      answer:
        'You do. From day one. Custom builds live in your repository on your cloud account. Salesforce, HubSpot, and Dynamics customizations are delivered as managed packages or version-controlled metadata in your org, with full source in Git. There is no proprietary framework, no hosted dependency, and no exit fee — if you decide to bring the work in-house, the handoff is a documented transfer, not a hostage negotiation.',
    },
    {
      question: 'How long until reps are using the new CRM in production?',
      answer:
        'A focused customization engagement typically ships a usable system in 8–12 weeks, with phased rollout to teams or regions thereafter. Greenfield custom builds run 12–16 weeks for first production release. Either way, we do not wait until the end to involve reps — sandbox previews and pilot teams begin in week 4 or 5 so feedback shapes the system while it is still cheap to change.',
    },
  ],

  cta: {
    title: 'Ready to make the CRM work for your sales team?',
    description:
      'Book a 30-minute call. We will walk through your current sales process, the gaps in your existing CRM, and the integrations that matter most — and give you a candid read on whether you need a customization, a rebuild, or a tighter version of what you already have.',
    primaryCta: { label: 'Book CRM strategy call', href: '/contact' },
    secondaryCta: { label: 'See how we deliver', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder rates based on comparable CRM engagements. Confirm with user before publishing.',
    'engagementModels[1].duration — "8–16 weeks" build window. Confirm typical scope and timeline.',
    'capabilities — Salesforce / HubSpot / Dynamics specializations need verification against actual delivered work and certifications.',
    'technologies — confirm which CRM platforms we have shipped engagements on (Salesforce, HubSpot, Dynamics) vs. aspirational.',
    'faq[5] — "8–12 weeks" customization timeline claim. Confirm against typical delivery cadence.',
  ],
};

export default crm;
