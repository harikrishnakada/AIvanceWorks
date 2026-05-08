import type { ServicePageData } from '@/types/pages';

const erpDevelopment: ServicePageData = {
  slug: 'erp-development',
  title: 'ERP Development & Implementation',
  shortDescription:
    'End-to-end ERP implementation, customization, and integration. We unify your finance, operations, HR, and supply chain on a single platform — on time and within scope.',

  metaTitle: 'ERP Development & Implementation | SAP, NetSuite, Dynamics 365 | AIvanceWorks',
  metaDescription:
    'ERP implementation, customization, and integration services for mid-market and enterprise. SAP, Oracle NetSuite, Microsoft Dynamics 365, and Odoo. Fixed-scope delivery with weekly milestones and no black-box phases.',
  keywords: [
    'erp implementation',
    'erp development',
    'erp customization',
    'sap implementation',
    'oracle netsuite implementation',
    'microsoft dynamics 365',
    'erp integration services',
  ],
  canonicalPath: '/services/erp-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'ERP Development', href: '/services/erp-development' },
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
  signatureComponent: 'ErpImplementationRoadmap',
  heroIllustrationComponent: 'ErpHeroIllustration',

  hero: {
    badge: 'Technical Service',
    headline: 'One platform for finance, operations, HR, and supply chain.',
    subhead:
      'ERP implementation without the war stories. Fixed scope, weekly milestones, and a go-live date you can plan around. We handle SAP, Oracle NetSuite, Microsoft Dynamics 365, and Odoo.',
    primaryCta: { label: 'Book ERP Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See our roadmap', href: '#signature' },
  },

  metricsStrip: [
    { value: '90 Days', label: 'Average go-live for mid-market ERP', description: 'Fixed-scope delivery' },
    { value: 'Week 4', label: 'First pilot users in the system', description: 'Not a paper prototype' },
    { value: 'Zero', label: 'Surprise scope creep', description: 'Weekly change-control reviews' },
    { value: '100%', label: 'Data migrated and validated', description: 'Before go-live sign-off' },
  ],

  features: [
    {
      icon: 'DollarSign',
      title: 'Finance & accounting',
      description:
        'General ledger, AP/AR, multi-currency, multi-entity consolidation, and audit-ready financial close — all in one system.',
    },
    {
      icon: 'Package',
      title: 'Inventory & supply chain',
      description:
        'Real-time inventory tracking, purchase orders, demand forecasting, and warehouse management integrated with your fulfillment operations.',
    },
    {
      icon: 'Users',
      title: 'HR & payroll',
      description:
        'Employee records, onboarding workflows, time tracking, payroll processing, and benefits administration on a single data model.',
    },
    {
      icon: 'BarChart2',
      title: 'Reporting & analytics',
      description:
        'Pre-built dashboards for executives, operational reports for managers, and self-service BI so every team has the numbers they need.',
    },
    {
      icon: 'Plug',
      title: 'System integrations',
      description:
        'Bi-directional connectors to your CRM, e-commerce platform, payment gateway, and third-party logistics provider — no manual data entry.',
    },
    {
      icon: 'Shield',
      title: 'Security & compliance',
      description:
        'Role-based access controls, audit logs, SOC 2 alignment, and GDPR-compliant data handling built in from day one.',
    },
  ],

  benefits: [
    {
      icon: 'Eye',
      title: 'Weekly milestone reviews',
      description:
        'Every week you see working configuration in the actual system — not slides. You always know what is complete, what is pending, and what decisions are needed from your team.',
      stat: 'Weekly',
      statLabel: 'milestone demos in live system',
    },
    {
      icon: 'Database',
      title: 'Clean data migration',
      description:
        'We extract, cleanse, transform, and validate your legacy data before go-live. No day-one surprises from dirty data hiding in spreadsheets.',
      stat: '100%',
      statLabel: 'data validated before go-live',
    },
    {
      icon: 'GraduationCap',
      title: 'Change management & training',
      description:
        'Role-specific training programs, process documentation, and a hypercare period after go-live so your team is productive from day one.',
      stat: 'Day 1',
      statLabel: 'user productivity at go-live',
    },
    {
      icon: 'RefreshCw',
      title: 'No scope surprises',
      description:
        'Weekly change-control reviews keep scope locked or explicitly traded off. Every addition is a visible decision — not a surprise on the final invoice.',
    },
  ],

  capabilities: [
    'ERP platform selection and business case development',
    'Greenfield implementation and phased rollout',
    'Legacy ERP migration (on-prem to cloud)',
    'Custom module and workflow development',
    'API and middleware integration design',
    'Data extraction, cleansing, and migration',
    'User acceptance testing and parallel-run support',
    'Role-based training and documentation',
    'Hypercare and post-go-live optimization',
    'Ongoing support retainers',
  ],

  technologies: [
    'SAP S/4HANA',
    'SAP Business One',
    'Oracle NetSuite',
    'Microsoft Dynamics 365',
    'Odoo',
    'Azure Integration Services',
    'MuleSoft',
    'Power BI',
    'Power Automate',
    'SQL Server',
    'PostgreSQL',
    'REST / GraphQL APIs',
  ],

  engagementModels: [
    {
      name: 'ERP Assessment & Roadmap',
      duration: '4–6 weeks',
      priceFrom: '$25,000',
      whatsIncluded: [
        'Current-state process workshops',
        'Platform selection scorecard',
        'Gap analysis and requirements doc',
        'Phased implementation roadmap',
        'Total cost of ownership model',
      ],
      suitableFor: 'Organizations evaluating ERP platforms or planning a first implementation',
      primaryCta: { label: 'Book Assessment Call', href: '/contact?erp=assessment' },
    },
    {
      name: 'Full ERP Implementation',
      duration: '3–6 months',
      priceFrom: '$120,000',
      whatsIncluded: [
        'Platform setup and configuration',
        'Custom module development',
        'Data migration and validation',
        'System integrations',
        'UAT support and go-live',
        '30-day hypercare post go-live',
      ],
      suitableFor: 'Mid-market companies replacing legacy systems or implementing ERP for the first time',
      primaryCta: { label: 'Book Implementation Call', href: '/contact?erp=full' },
      featured: true,
    },
    {
      name: 'ERP Integration & Extension',
      duration: 'Ongoing retainer',
      priceFrom: '$8,000/mo',
      whatsIncluded: [
        'New module rollouts',
        'Third-party integrations',
        'Report and dashboard development',
        'Performance tuning',
        'User training for new features',
        'Priority support SLA',
      ],
      suitableFor: 'Companies with an existing ERP that need continuous improvement and integration work',
      primaryCta: { label: 'Book Retainer Call', href: '/contact?erp=retainer' },
    },
  ],

  relatedPages: [
    {
      title: 'Custom Software Development',
      description:
        'Need functionality your ERP platform does not support out of the box? We build custom extensions and standalone modules that integrate cleanly with your ERP data model.',
      href: '/services/custom-software-development',
      icon: 'Settings',
      pageType: 'service',
    },
    {
      title: 'Legacy Modernization',
      description:
        'Running a decade-old on-prem ERP? See how we assess, re-architect, and migrate legacy enterprise systems to modern cloud platforms.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'ERP in the cloud needs solid infrastructure. See how we provision, secure, and operate the cloud environment your ERP runs on.',
      href: '/services/cloud-infrastructure',
      icon: 'Server',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How do you keep ERP projects from going over budget and schedule?',
      answer:
        'We run weekly change-control reviews where scope additions are explicitly traded off against timeline or budget. Nothing gets added silently. Every week you see a written status showing what is done, what is in progress, and what decisions are needed from your team.',
    },
    {
      question: 'Which ERP platform is right for our business?',
      answer:
        'That depends on your industry, headcount, transaction volume, and integration needs. Our ERP Assessment engagement produces a scored platform comparison across SAP, NetSuite, Dynamics 365, and Odoo — with a recommendation backed by your actual requirements, not vendor relationships.',
    },
    {
      question: 'How do you handle data migration from our legacy system?',
      answer:
        'We run a three-phase migration: extract and profile (finding quality issues early), cleanse and transform (fixing data before it moves), and validate (running your team through the migrated data before go-live sign-off). No surprises on day one.',
    },
    {
      question: 'What happens after go-live?',
      answer:
        'We include a 30-day hypercare period on all full implementations — faster response times, daily check-ins, and rapid hotfixes while your team gets comfortable. After hypercare, most clients move to a monthly retainer for ongoing improvements, integrations, and training.',
    },
    {
      question: 'Can you integrate our ERP with our CRM and e-commerce platform?',
      answer:
        'Yes. We build bi-directional integrations using REST APIs, middleware (Azure Integration Services or MuleSoft), or platform-native connectors depending on what your systems support. We document every integration and hand over runbooks so your team can maintain them.',
    },
  ],

  cta: {
    title: 'Ready to unify your business on a single ERP platform?',
    description:
      'Book a 30-minute discovery call. We will map your current systems, identify the highest-risk integration points, and give you a no-pressure platform recommendation within 48 hours.',
    primaryCta: { label: 'Book discovery call', href: '/contact' },
    secondaryCta: { label: 'See our process', href: '#signature' },
  },

  _unverified: [
    'metricsStrip — all four metrics are aspirational promises. Verify achievability before publishing.',
    'engagementModels[*].priceFrom — placeholder prices. Confirm with user.',
    'technologies — confirm platform list matches actual partner/delivery capabilities.',
    'faq[1] — platform recommendation claim — verify impartiality and actual platform certifications.',
  ],
};

export default erpDevelopment;
