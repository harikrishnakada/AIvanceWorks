import type { SolutionPageData } from '@/types/pages';

const insurancePortals: SolutionPageData = {
  slug: 'insurance-portals',
  title: 'Custom Insurance Portal Development for Carriers & Agencies',
  shortDescription:
    'Custom insurance portals for carriers, MGAs, and agencies on Azure — policy, claims, quoting, and agent workflows integrated with your core systems.',

  metaTitle: 'Insurance Portal Development | Carrier, MGA & Agency Portals',
  metaDescription:
    'Custom insurance portal development for carriers, MGAs, and agencies. Policy management, claims processing, agent portals, and quoting engines. Industry research shows meaningful cycle time reductions.',
  keywords: [
    'insurance portal development',
    'custom insurance portal',
    'insurance carrier portal',
    'policyholder self-service portal',
    'agent broker portal software',
    'claims management portal',
    'MGA portal development',
    'insurance policy management software',
    'insurance software development',
    'claims processing portal',
    'insurance document management',
    'insurance quoting portal',
  ],
  canonicalPath: '/solutions/insurance-portals',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Insurance Portals', href: '/solutions/insurance-portals' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'personaComparison',
    'featureGrid',
    'imageFeatures',
    'signature',
    'integrationsPanel',
    'benefitsGrid',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'insurance',
  signatureComponent: 'ClaimsFlowComparison',

  hero: {
    badge: 'Insurance Solutions',
    headline: 'Claims in hours, not weeks. Portals your agents actually want to use.',
    subhead:
      'Custom insurance portals that turn manual workflows into self-service: policy management, digital FNOL, AI-assisted document intake, quoting, and co-branded agent tools — integrated with Guidewire, Duck Creek, Applied Epic, and more.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the claims flow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/insurance-portals/hero.jpg',
      alt: 'Insurance advisor reviewing policy details on a modern workstation',
    },
    metrics: [
      {
        value: '~75%',
        label: 'Claims cycle compression',
        description: 'Legacy 10 days → Portal 8 hours (illustrative benchmark)',
      },
      {
        value: 'Multi-core',
        label: 'Policy admin integration',
        description: 'Guidewire, Duck Creek, Applied Epic',
      },
      {
        value: 'White-label',
        label: 'Agent & broker channels',
        description: 'Multi-tenant from day one',
      },
    ],
  },

  metricsStrip: [
    {
      value: '50–70%',
      label: 'Faster Claims Processing',
      description:
        'Industry research: digital FNOL, OCR intake, and automated triage typically compress claims cycle time by this range.',
    },
    {
      value: '30–45%',
      label: 'Reduction in Operational Costs',
      description:
        'Self-service for policyholders and agents eliminates inbound call volume, manual data entry, and paper processing.',
    },
    {
      value: '20–35%',
      label: 'Improvement in Customer Retention',
      description:
        'Policyholders with online policy management and claims updates are measurably less likely to churn at renewal (industry research).',
    },
    {
      value: '3x',
      label: 'Faster Policy Issuance',
      description:
        'Automated underwriting data collection, e-signature workflows, and rules-based approvals cut issuance from days to hours.',
    },
  ],

  features: [
    {
      icon: 'FileText',
      title: 'Policy Management & Self-Service',
      description:
        'Policyholders view policy documents, manage coverage options, add endorsements, update contact and payment information, and download ID cards — all without calling your service center.',
    },
    {
      icon: 'AlertCircle',
      title: 'Claims Filing & Status Tracking',
      description:
        'Digital first notice of loss (FNOL) with document upload, adjuster assignment, and real-time status updates keeps policyholders informed and reduces inbound call volume at every stage.',
    },
    {
      icon: 'Users',
      title: 'Agent & Broker Portal',
      description:
        'Dedicated agent workspace with client portfolio management, in-flight submission tracking, commission reporting, and co-branded quoting tools — giving producers everything they need.',
    },
    {
      icon: 'Calculator',
      title: 'Quoting & Bind Engine',
      description:
        'Configurable multi-line quoting workflows with real-time rating integration, comparison views, and direct-to-bind capability for qualifying risks.',
    },
    {
      icon: 'FolderOpen',
      title: 'Document Management & e-Signature',
      description:
        'Centralised document repository with AI-assisted OCR for ingestion, version control, automated policy document generation, and DocuSign/Adobe Sign integration.',
    },
    {
      icon: 'BarChart2',
      title: 'Reporting & Compliance Dashboard',
      description:
        'Configurable dashboards for operations, compliance, and leadership with state-level regulatory reporting exports, audit trails, and real-time KPIs.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Dramatically Faster Claims Cycles',
      description:
        'Digital FNOL, AI document triage, and automated adjuster assignment compress claims cycle times, improving the customer experience and reducing loss adjustment expenses.',
      stat: '50–70%',
      statLabel: 'claims cycle time reduction',
    },
    {
      icon: 'DollarSign',
      title: 'Lower Operational Costs',
      description:
        'Self-service for policyholders and agents absorbs the high-volume, low-complexity requests that drive call centre costs — reducing cost per policy without reducing service quality.',
      stat: '30–45%',
      statLabel: 'operational cost reduction',
    },
    {
      icon: 'Heart',
      title: 'Higher Customer Retention',
      description:
        'Policyholders who get fast claims updates and can manage their policies online report higher satisfaction and are significantly less likely to shop competitors at renewal.',
      stat: '20–35%',
      statLabel: 'renewal retention improvement',
    },
    {
      icon: 'Shield',
      title: 'State & Federal Regulatory Compliance',
      description:
        'Built-in audit logging, configurable state-level reporting, and documented security controls support compliance with NAIC model regulations, state DOI requirements, and data privacy laws.',
    },
    {
      icon: 'TrendingUp',
      title: 'Scalable for Growth',
      description:
        'Azure-native microservices architecture scales horizontally to support premium growth, new lines of business, and M&A integrations without requiring a platform rebuild.',
    },
    {
      icon: 'Users',
      title: 'Stronger Agent Relationships',
      description:
        'Producers with access to real-time submission status, commission data, and co-branded quoting tools write more business and require less servicing from your internal teams.',
    },
  ],

  processSteps: [
    {
      title: 'Business Analysis & System Mapping',
      description:
        'We document your current workflows, identify the legacy systems the portal must integrate with (policy admin, claims, billing, rating), and define the user roles and permissions matrix.',
      duration: '2–3 weeks',
      deliverable: 'Business requirements document, system integration map, user role matrix, prioritized feature backlog',
    },
    {
      title: 'System Architecture & Security Design',
      description:
        'Multi-tenant, scalable portal architecture on Azure with clear separation between portal presentation and your core systems of record. Security architecture documented for state regulatory review.',
      duration: '2–3 weeks',
      deliverable: 'Architecture decision records, security design, Azure infrastructure blueprint, data flow diagrams',
    },
    {
      title: 'Portal Development & Configuration',
      description:
        'Iterative development with bi-weekly demos. Frontend built in React/Next.js; backend in .NET with domain-driven design patterns that mirror insurance business logic.',
      duration: '8–14 weeks',
      deliverable: 'Fully functional portal in staging with all agreed modules, test coverage report, performance benchmarks',
    },
    {
      title: 'Data Migration & Legacy Integration',
      description:
        'Extract, transform, and load existing policy and claims data with reconciliation reporting. Build and test integrations against policy admin, billing, and rating systems via REST/SOAP/direct DB.',
      duration: '3–6 weeks',
      deliverable: 'Migrated data with reconciliation sign-off, integration test results, rollback plan',
    },
    {
      title: 'Deployment, Training & Ongoing Support',
      description:
        'Blue-green production deployment with staged rollout by user segment, staff training, and a 60-day hypercare period with dedicated engineering support.',
      duration: '2–3 weeks',
      deliverable: 'Production deployment, runbook, training docs, monitoring setup, support SLA',
    },
  ],

  capabilities: [
    'Multi-tenant portal architecture (carrier, MGA, agency)',
    'Claims FNOL digital intake and document upload',
    'Real-time rating engine integration',
    'Agent commission tracking and reporting',
    'Automated policy document generation',
    'AI-assisted document classification (OCR)',
    'e-Signature workflow integration',
    'State-level regulatory reporting exports',
    'Audit logging and compliance trail',
    'Mobile-responsive and accessible (WCAG 2.1 AA)',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure App Service',
    'Azure AD B2C / Entra External Identity',
    'Azure Key Vault',
    'SQL Server / Azure SQL Database',
    'Azure Blob Storage',
    'Azure Document Intelligence (OCR)',
    'Azure Service Bus',
    'Power BI Embedded',
    'Terraform (IaC)',
    'Azure Application Insights',
  ],

  personaComparison: {
    eyebrow: 'One platform, three experiences',
    title: 'One Platform, Three Portals',
    highlightText: 'Three Portals',
    subtitle:
      'Interconnected portals sharing a single policy engine, so carriers, agents, and policyholders all see consistent, real-time data.',
    personas: [
      {
        icon: 'Building2',
        title: 'Carrier Portal',
        subtitle: 'For insurance carriers & MGAs',
        features: [
          'Policy lifecycle management',
          'Underwriting workbench',
          'Loss ratio analytics',
          'Reinsurance tracking',
          'Regulatory filing automation',
        ],
        accent: 'brand',
      },
      {
        icon: 'Users',
        title: 'Agent & Broker Portal',
        subtitle: 'For agencies & brokerages',
        features: [
          'Multi-carrier quoting',
          'Commission tracking',
          'Pipeline management',
          'Appointment of record',
          'Marketing co-op tools',
        ],
        accent: 'accent',
      },
      {
        icon: 'Smartphone',
        title: 'Customer Self-Service',
        subtitle: 'For policyholders',
        features: [
          'Policy documents & ID cards',
          'Claims filing & tracking',
          'Payment & billing management',
          'Coverage change requests',
          '24/7 chatbot support',
        ],
        accent: 'secondary',
      },
    ],
    footerNote: 'All portals connect to a unified policy administration engine',
  },

  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Planning a portal modernisation? A discovery sprint maps your core systems, agent workflows, and regulatory requirements before development.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'MVP Development',
      description:
        'Want to launch one portal first? Our 12-week MVP process ships a production-ready module while you plan the full platform.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
  ],

  integrations: [
    {
      name: 'Guidewire PolicyCenter',
      category: 'Core Policy Admin',
      connectionMethod: 'REST + SOAP',
      capabilities: [
        'Bi-directional policy data sync',
        'Endorsement and renewal workflows',
        'Quote-to-bind integration',
      ],
    },
    {
      name: 'Duck Creek Policy',
      category: 'Core Policy Admin',
      connectionMethod: 'REST + direct DB bridge',
      capabilities: [
        'Policy lifecycle events',
        'Rating engine integration',
        'Billing data sync',
      ],
    },
    {
      name: 'Applied Epic',
      category: 'Agency Management',
      connectionMethod: 'Applied API + custom adapter',
      capabilities: [
        'Client and policy data',
        'Commission tracking',
        'Activity logging',
      ],
    },
    {
      name: 'Hawksoft',
      category: 'Agency Management',
      connectionMethod: 'Custom adapter + CSV import',
      capabilities: [
        'Book-of-business sync',
        'Producer and client data',
        'Renewal pipeline',
      ],
    },
    {
      name: 'Sapiens',
      category: 'Core Policy Admin',
      connectionMethod: 'REST + webhook events',
      capabilities: [
        'Policy administration data',
        'Claims lifecycle events',
        'Multi-line-of-business support',
      ],
    },
    {
      name: 'OneShield',
      category: 'Core Policy Admin',
      connectionMethod: 'REST + SOAP',
      capabilities: [
        'Policy data and endorsements',
        'Claims data feed',
        'Billing reconciliation',
      ],
    },
  ],

  faqs: [
    {
      question: 'Can the portal integrate with our existing policy administration system?',
      answer:
        'Yes, and this is typically the most technically complex part of the project, which is why we dedicate a full phase to it. We have integration experience with Guidewire, Duck Creek, Applied Epic, and a range of proprietary policy admin systems using REST APIs, SOAP web services, and direct database connectors. We build an integration middleware layer so the portal is decoupled from your core systems, meaning you can upgrade or replace either side independently.',
    },
    {
      question: 'How do you handle state insurance regulatory compliance?',
      answer:
        'We build configurable compliance controls into the portal architecture: jurisdiction-specific disclosure text, required field validation by state, and exportable audit reports formatted for common state DOI requirements. We work with your compliance team to map requirements before development begins and can support you through regulatory review if required. We are not a law firm and recommend engaging your compliance counsel for final sign-off on regulatory filings.',
    },
    {
      question: 'We have years of policy data in a legacy system. How do you handle migration?',
      answer:
        'Data migration is a structured, phased process with full reconciliation at each stage. We start with a data audit to assess quality and completeness, build ETL pipelines with transformation rules, run parallel processing to validate accuracy, and provide row-level reconciliation reports before any cutover. We always build a rollback plan and recommend a pilot migration of a representative data subset before committing to full migration.',
    },
    {
      question: 'How does the portal scale as we grow our book of business?',
      answer:
        'The portal is built on Azure with horizontal auto-scaling, so compute capacity expands automatically with load. We design the database tier with read replicas and caching for query-heavy operations, and the multi-tenant architecture supports new agents, new lines of business, or acquired portfolios without architectural changes. We provision infrastructure as code (Terraform) so new environments and regions can be spun up in hours.',
    },
    {
      question: 'What security controls are in place for sensitive policyholder data?',
      answer:
        'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Policyholder identity is managed through Azure AD B2C or Entra External Identity with MFA enforcement. Secrets and API keys are stored exclusively in Azure Key Vault. We implement least-privilege access controls across all user roles, maintain detailed audit logs for every data access event, and conduct penetration testing before production launch.',
    },
    {
      question: 'Can you build a portal that is white-labelled for our agents or broker networks?',
      answer:
        'Yes. Multi-tenancy and white-labelling are built-in design considerations, not afterthoughts. Each agency or broker channel can have its own branded subdomain, colour scheme, logo, and custom disclosure text while sharing the same underlying platform. This significantly reduces per-channel cost compared to building separate portals and makes centralised compliance updates straightforward.',
    },
  ],

  imageFeatures: [
    {
      heading: 'Claims Processing in Minutes, Not Weeks',
      description: 'Adjusters review, approve, and route claims from a single dashboard with built-in compliance checks. Automation handles the routine, humans handle the exceptions.',
      image: {
        src: '/images/solutions/insurance-portals/feature-1.jpg',
        alt: 'Claims professional reviewing an analytics dashboard with policy data',
      },
    },
    {
      heading: 'Self-Service That Policyholders Actually Use',
      description: 'Policyholders manage coverage, file claims, and track status without calling an agent. Designed for adoption — not just built and abandoned.',
      image: {
        src: '/images/solutions/insurance-portals/feature-2.jpg',
        alt: 'Client and insurance advisor meeting with a laptop showing policy details',
      },
    },
  ],

  cta: {
    title: 'Ready to Modernise Your Insurance Operations?',
    description:
      'Book a free 30-minute discovery call. We will review your existing systems, operational pain points, and integration requirements, then give you a realistic assessment of what a custom portal would cost and deliver for your business.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the claims flow', href: '#signature' },
  },

  _unverified: [
    'hero.metrics[0] — "~75% claims cycle compression" illustrative benchmark from signature section; needs carrier case data sourcing before publishing as a page-level stat.',
    'metricsStrip[0..3] — all four values are industry ranges or benchmarks; confirm citation format (NAIC, Forrester, industry report) before publishing.',
    'benefits[0..2].stat — same industry-range values as metricsStrip; needs clear framing.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope; confirm which integrations we have actually shipped in production.',
    'integrations — 6 core system integrations implied. Confirm real shipped integration count; some may be demo-only or prospect engagements.',
    'ClaimsFlowComparison signature narrative — "10 days → 8 hours" is the headline claim of the page and must be sourced from real carrier engagement data before launch. This is the single highest-priority unverified item.',
    'processSteps durations — reflect our estimated typical delivery cadence; confirm against actual past engagements.',
    'features[5] — state-level regulatory reporting claim — confirm which states/regulations we have actually built exports for.',
    'personaComparison.personas — feature lists lifted from legacy PortalTypesComparison; confirm we actually ship all these capabilities before publishing.',
    'personaComparison.personas[2].features[4] — "24/7 chatbot support" claim — confirm whether we deliver this or it is aspirational.',
  ],
};

export default insurancePortals;
