import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Insurance), lighter compliance posture
// Buyer: Agency Principal / VP of Operations at an independent P&C insurance agency (5–50 producers)
// Measured on: premium volume, producer productivity, renewal retention, E&O exposure, operational cost per policy
//
// Top 3 buyer questions:
//   1. "Can this integrate with Applied Epic / HawkSoft / our AMS and carrier systems?"
//   2. "Will producers actually use this instead of reverting to spreadsheets?"
//   3. "What does implementation look like, and what's the risk of disruption?"
//
// Key trust issue: "Our last vendor demo'd carrier integration and 6 months in we found out
//   it was a manual CSV import. We wasted months and went back to our old system."
//
// Signature: AgencyWorkflowTransformation — before/after comparison (5-tool chaos → 1 connected platform)
// Visualization pattern: Comparison (before/after columns) — §8.3 pattern #4
//
// Deviations from Archetype C recipe:
//   - No ComplianceDeepDive — per user instruction; audience test confirms buyer's KPI is
//     operational efficiency, not regulatory compliance gate. ComplianceSpotlight retained
//     as a light E&O/state-compliance trust signal.
//   - No CaseStudySpotlight — greenfield; no verified agency case data yet.
//   - No PersonaComparison — single primary buyer type (agency ops/principal), not multi-portal.
//   - ImageFeatures added after FeatureGrid — per two-track imagery strategy (§11.5).
//   - ComplianceSpotlight placed before signature (mid-page trust gate) rather than
//     after signature, so compliance awareness is established before the visual argument.
//
// Tone rhythm:
//   hero (dark) → metricsStrip (light) → featureGrid (warm) → imageFeatures (light) →
//   complianceSpotlight (warm) → signature (dark) → benefitsGrid (light) →
//   integrationsPanel (warm) → processTimeline (light) → relatedPages (warm) →
//   faq (light) → ctaBlock (accent)

const agencyManagementSoftware: SolutionPageData = {
  slug: 'agency-management-software',
  title: 'Custom Agency Management Software for Independent Insurance Agencies',
  shortDescription:
    'Custom agency management software built on Azure — producer pipeline tools, IVANS carrier download, commission tracking, and client self-service, designed around how your agency actually operates.',

  metaTitle: 'Custom Agency Management Software | Insurance AMS Development',
  metaDescription:
    'Custom insurance agency management software built on Azure. Producer workspaces, IVANS carrier integration, commission tracking, ACORD forms, and renewal pipeline automation for independent agencies.',
  keywords: [
    'insurance agency management software',
    'custom AMS development',
    'agency management system development',
    'insurance agency software development',
    'producer management software',
    'commission tracking software insurance',
    'insurance agency automation',
    'IVANS carrier integration',
    'policy management software agency',
    'insurance agency CRM',
    'ACORD forms software',
    'renewal management software insurance',
  ],
  canonicalPath: '/solutions/agency-management-software',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Agency Management Software', href: '/solutions/agency-management-software' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'complianceSpotlight',
    'signature',
    'benefitsGrid',
    'integrationsPanel',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'insurance',
  signatureComponent: 'AgencyWorkflowTransformation',

  hero: {
    badge: 'Insurance Solutions',
    headline: 'The agency platform your producers will actually use.',
    subhead:
      'Custom agency management software built on Azure — producer workspaces, IVANS carrier connectivity, commission tracking, and client self-service, designed around your agency workflows.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the platform map', href: '#signature' },
    heroImage: {
      src: '/images/solutions/agency-management-software/hero.jpg',
      alt: 'Insurance agency professional reviewing policy data on a modern workstation in a professional office',
    },
    metrics: [
      {
        value: 'IVANS Connected',
        label: 'Carrier download built in',
        description: 'Policy data synced automatically, no manual re-keying',
      },
      {
        value: 'Commission-Native',
        label: 'Splits, overrides, contingencies',
        description: 'Automated calculations for every producer structure',
      },
      {
        value: 'Configurable Lines',
        label: 'P&C, commercial, life, benefits',
        description: 'Per-line workflows, forms, and carrier routing',
      },
    ],
  },

  // Audience test: Agency principal or VP Ops evaluating an AMS needs to see that
  // we understand their world — capability names ("IVANS", "ACORD", "commission splits")
  // do this better than generic percentages. All four metrics are capability-framed.
  metricsStrip: [
    {
      value: 'IVANS + Carrier APIs',
      label: 'Multi-Carrier Connectivity',
      description:
        'Policy downloads, endorsement updates, and certificate data synced from carriers automatically — no manual re-keying across portals.',
    },
    {
      value: 'Commission-First',
      label: 'Producer Compensation Engine',
      description:
        'Splits, overrides, contingency tracking, and bonus structures configured per producer and per line of business — statements generated automatically.',
    },
    {
      value: 'Renewal Intelligence',
      label: 'Automated Renewal Pipeline',
      description:
        'Every expiring policy tracked, prioritized by risk, and surfaced to the right producer before the renewal window closes.',
    },
    {
      value: 'ACORD-Ready',
      label: 'Auto-Populated Standard Forms',
      description:
        'ACORD applications, certificates of insurance, and change requests populated directly from live policy data — no manual transcription.',
    },
  ],

  // Audience test: Agency principal thinks in operational workflows, not technical features.
  // Each card maps to a daily agency pain point, not an engineering pattern.
  features: [
    {
      icon: 'BarChart3',
      title: 'Producer Pipeline & Activity Tracking',
      description:
        'Every producer sees their active pipeline, activity goals, upcoming renewals, and new business opportunities in a single workspace — giving managers real-time visibility without interrupting the sales process.',
    },
    {
      icon: 'FolderOpen',
      title: 'Policy & Client Management',
      description:
        'Unified client record showing every policy, coverage history, pending endorsements, open claims, and interaction log. Your CSRs stop switching between systems to answer a single client call.',
    },
    {
      icon: 'Network',
      title: 'IVANS Carrier Download & API Integration',
      description:
        'Policy data, endorsement notices, and billing updates downloaded automatically from carriers via IVANS and direct carrier APIs. In-force data stays current without manual portal checks.',
    },
    {
      icon: 'DollarSign',
      title: 'Commission Tracking & Statements',
      description:
        'Commission splits, agency overrides, contingency accruals, and producer bonus structures calculated automatically. Statements generated on demand — no spreadsheet reconciliation at month-end.',
    },
    {
      icon: 'FileText',
      title: 'ACORD Forms & Document Management',
      description:
        'ACORD applications, certificates of insurance, and loss run requests auto-populated from live policy data. Completed forms route to e-signature and file automatically to the client record.',
    },
    {
      icon: 'RefreshCw',
      title: 'Renewal Pipeline & Expiration Management',
      description:
        'Every policy expiration tracked with configurable advance notice windows, producer assignment, and priority scoring. At-risk renewals flagged before the window closes — not after.',
    },
  ],

  benefits: [
    {
      icon: 'Target',
      title: 'Producers Focused on Production',
      description:
        'Automated carrier downloads, ACORD auto-fill, and commission calculations eliminate the administrative tasks that take producers away from client relationships and new business development.',
    },
    {
      icon: 'RefreshCw',
      title: 'No Renewal Falls Through the Cracks',
      description:
        'A configurable renewal pipeline surfaces every expiring policy with the right priority level and the right producer assignment — before the window closes, not after the client calls a competitor.',
    },
    {
      icon: 'DollarSign',
      title: 'Commission Accuracy Without the Spreadsheet',
      description:
        'Automated split and override calculations reduce month-end reconciliation time and eliminate commission disputes. Producers see what they earned, and agency owners see what the book produced.',
    },
    {
      icon: 'TrendingUp',
      title: 'Scale Without Proportional Admin Headcount',
      description:
        'As premium volume grows, the platform absorbs new producers, new lines of business, and additional carrier relationships without requiring proportional growth in administrative staff.',
    },
    {
      icon: 'Shield',
      title: 'E&O-Defensible Operations by Default',
      description:
        'Every producer action, client interaction, and coverage change logged with timestamp and actor. A documented audit trail is the first line of defense when an E&O claim is filed.',
    },
  ],

  processSteps: [
    {
      title: 'Agency Discovery & Workflow Analysis',
      description:
        'We map your current workflows end-to-end — how producers manage their pipeline, how policies are entered and updated, how commissions are calculated, and which carrier systems require manual attention. We identify integration requirements and data migration scope before writing a line of code.',
      duration: '2–3 weeks',
      deliverable: 'Agency workflow maps, carrier integration inventory, commission rule documentation, data migration scope, prioritized feature backlog',
    },
    {
      title: 'System Architecture & Migration Planning',
      description:
        'Platform architecture designed around your workflow maps — data model for policies and producers, commission engine rules, IVANS and carrier API mapping, identity and access control, and a phased data migration strategy that keeps your agency operational throughout.',
      duration: '2–3 weeks',
      deliverable: 'Architecture document, data model, commission rules specification, carrier integration map, Azure infrastructure blueprint, migration plan with rollback',
    },
    {
      title: 'Core Platform Development',
      description:
        'Iterative development with bi-weekly demos to agency stakeholders. Producer pipeline tools, policy management, and core commission engine built first — so your team can validate daily workflows before the platform is complete.',
      duration: '8–14 weeks',
      deliverable: 'Functional core platform in staging with agreed modules, test coverage report, performance benchmarks, IVANS connectivity verified',
    },
    {
      title: 'Integration, Data Migration & Compliance Setup',
      description:
        'Connect to IVANS, carrier APIs, accounting, and e-signature. Extract, transform, and load your existing policy and client data with row-level reconciliation reporting. Configure audit logging and producer compliance tracking.',
      duration: '4–6 weeks',
      deliverable: 'Live integrations, migrated data with reconciliation sign-off, audit log configuration, producer license tracking setup, E&O documentation templates',
    },
    {
      title: 'Training, Rollout & Ongoing Support',
      description:
        'Phased rollout — producers onboarded in cohorts so early adopters mentor the laggards. Role-specific training for producers, CSRs, and agency principals. A 60-day hypercare period with dedicated engineering support and adoption monitoring.',
      duration: '2–3 weeks',
      deliverable: 'Production deployment, role-based training materials, monitoring dashboards, runbook, support SLA',
    },
  ],

  capabilities: [
    'Producer pipeline and activity management',
    'IVANS carrier download and carrier API integration',
    'Multi-carrier quoting workflow support',
    'Commission splits, overrides, and contingency tracking',
    'ACORD forms auto-population from live policy data',
    'Certificate of insurance generation and tracking',
    'Renewal pipeline with priority scoring and producer alerts',
    'Client self-service portal (documents, certificates, payments)',
    'E&O audit trail and producer activity logging',
    'Mobile-responsive and accessible (WCAG 2.1 AA)',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure App Service',
    'Azure AD B2C / Entra External ID',
    'Azure Key Vault',
    'SQL Server / Azure SQL Database',
    'Azure Blob Storage',
    'Azure Service Bus',
    'IVANS Download API',
    'Power BI Embedded',
    'Terraform (IaC)',
    'Azure Application Insights',
  ],

  integrations: [
    {
      name: 'IVANS Market Access',
      category: 'Carrier Download',
      connectionMethod: 'IVANS Download API',
      capabilities: [
        'Policy data download from carriers',
        'Endorsement and cancellation notices',
        'Billing and payment updates',
      ],
    },
    {
      name: 'Applied Epic',
      category: 'Agency Management System',
      connectionMethod: 'Applied API + custom adapter',
      capabilities: [
        'Client and policy data migration',
        'Book-of-business import',
        'Historical activity and document transfer',
      ],
    },
    {
      name: 'HawkSoft',
      category: 'Agency Management System',
      connectionMethod: 'Custom adapter + data export',
      capabilities: [
        'Policy and client record migration',
        'Producer and account data export',
        'Commission history import',
      ],
    },
    {
      name: 'DocuSign / Adobe Sign',
      category: 'e-Signature',
      connectionMethod: 'REST API',
      capabilities: [
        'ACORD form e-signature routing',
        'Application and policy document signing',
        'Completed document auto-filing to client record',
      ],
    },
    {
      name: 'QuickBooks',
      category: 'Accounting',
      connectionMethod: 'QuickBooks API',
      capabilities: [
        'Commission payment reconciliation',
        'Agency fee billing',
        'Producer statement export',
      ],
    },
    {
      name: 'EZLynx',
      category: 'Comparative Rating',
      connectionMethod: 'REST API + webhook',
      capabilities: [
        'Multi-carrier quote import',
        'Applicant data push to rating engine',
        'Bound policy creation from quote',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Regulatory-ready by default',
    title: 'State-Ready and E&O-Defensible by Design',
    highlightText: 'E&O-Defensible by Design',
    statusText: 'NAIC · State DOI · E&O Ready · CCPA',
    pillars: [
      {
        icon: 'FileCheck',
        title: 'E&O Audit Trail',
        description:
          'Every producer action, coverage discussion, and policy change logged with timestamp, actor, and outcome. A defensible record is built automatically — no separate documentation step.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Producer License & Appointment Tracking',
        description:
          'Producer license expiration dates, state appointments, and carrier appointments tracked per producer. Alerts surface before a license lapses — before it becomes an E&O exposure.',
      },
      {
        icon: 'Lock',
        title: 'Policyholder Data Security',
        description:
          'Policyholder PII encrypted at rest (AES-256) and in transit (TLS 1.3). Access controls enforce least-privilege per role. Architecture designed to meet NAIC Insurance Data Security Model Law requirements.',
      },
    ],
    badges: ['NAIC Data Security', 'State DOI', 'E&O Documentation', 'CCPA'],
  },

  imageFeatures: [
    {
      heading: 'Producers Selling, Not Searching',
      description:
        'Pipeline, policies, renewals, and documents in one workspace — so producers spend their day on relationships, not on switching between systems.',
      image: {
        src: '/images/solutions/agency-management-software/feature-1.jpg',
        alt: 'Insurance producer at a modern workstation reviewing client pipeline data on a dual-monitor setup',
      },
    },
    {
      heading: 'No Renewal Left Behind',
      description:
        'Every expiring policy tracked, prioritized, and assigned — so your team acts before the renewal window closes, not after a client calls a competitor.',
      image: {
        src: '/images/solutions/agency-management-software/feature-2.jpg',
        alt: 'Agency team reviewing renewal pipeline data together in a professional office setting',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Planning an AMS overhaul? A discovery sprint maps your carrier integrations, commission structures, and producer workflows before a line of code is written.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Application Modernization',
      description:
        'Still on Applied Epic but outgrowing it? We modernize around your existing system — adding the producer tools and integrations it lacks — without a rip-and-replace migration.',
      href: '/services/application-modernization',
      icon: 'Layers',
      pageType: 'service',
    },
    {
      title: 'MVP Development',
      description:
        'Want to replace one core function first? Our 12-week process ships the producer pipeline or commission engine module while you plan the full platform.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Can you migrate our data from Applied Epic, HawkSoft, or AMS360?',
      answer:
        'Yes, and data migration planning begins in the discovery phase — before development starts. We map your existing data model to the target schema, build automated extraction and transformation pipelines, and run reconciliation checks at every stage. We never do a single big-bang cutover. The typical sequence is client and policy records first, then commission history, then documents — with validation sign-off at each stage. We also build a rollback plan so you have a safe exit if a migration step fails reconciliation.',
    },
    {
      question: 'How does IVANS carrier download work — is it real-time or batch?',
      answer:
        'IVANS downloads are typically batch-based, delivered by carriers on their own schedule (daily or near-daily). We configure the IVANS integration to process incoming download files automatically, reconcile them against your in-force book, and surface exceptions for CSR review rather than blocking the whole batch. For carriers that offer direct API access, we build real-time integrations where available. The architecture separates carrier connectivity from your core data model, so adding a new carrier is a configuration change, not a rebuild.',
    },
    {
      question: 'What does a typical implementation cost and how long does it take?',
      answer:
        'A custom agency management platform with core modules — producer tools, policy management, commission engine, and IVANS integration — typically takes 18–26 weeks from kickoff to production, depending on the number of carrier integrations, commission structure complexity, and data migration scope. We offer phased delivery, with the highest-priority module live first so your team starts seeing value before the full platform is complete.',
    },
    {
      question: 'Can producers access the platform on mobile?',
      answer:
        'Yes. The platform is built responsive-first — producers can review their pipeline, look up client and policy details, and view documents from any device. For field-heavy agencies, we can build a dedicated mobile experience as part of the engagement scope, optimized for quote lookups, certificate generation, and client notes on the go.',
    },
    {
      question: 'How does the system handle commission splits and override structures?',
      answer:
        'Commission structures are defined during the discovery phase and modeled as configurable rules rather than hardcoded logic. We support standard splits (house/producer percentage), tiered overrides, contingency accruals, and bonus structures tied to production or loss ratio thresholds. Rules are applied per producer, per line of business, and per carrier — and can be updated by agency administrators without requiring a code change. Statements are generated automatically from the rule engine, with an itemized breakdown your producers can reconcile against their expectations.',
    },
    {
      question: 'Our agency is growing — how does the platform scale as we add producers or lines of business?',
      answer:
        'The platform is designed for exactly that. New producers are added through the admin interface with their commission structure, carrier appointments, and license data. New lines of business are supported by configuring the relevant ACORD forms, carrier connections, and commission rules — without touching the core platform. The Azure-native architecture scales horizontally with user load, and the multi-tenant architecture supports independent offices or acquired agencies on the same platform with clean data separation.',
    },
  ],

  cta: {
    title: 'Ready to Build the Agency Platform Your Producers Actually Want?',
    description:
      'Book a free 30-minute discovery call. We will review your current systems, carrier relationships, commission structures, and growth plans, then give you a realistic assessment of what a custom agency platform would cost and deliver for your agency.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the platform map', href: '#signature' },
  },

  _unverified: [
    'hero.metrics[0..2] — all three are capability-framed; no outcome claims. Greenfield-safe.',
    'metricsStrip[0..3] — all four values are capability-framed, not outcome percentages. Greenfield-safe.',
    'complianceSpotlight.badges — "NAIC Data Security" references the NAIC Insurance Data Security Model Law, which is real; confirm framing accuracy. "E&O Documentation" is capability framing, not a certification claim.',
    'integrations[0] — IVANS Market Access: confirm we have actual IVANS development partner access or plan to obtain it; IVANS requires carrier agreements.',
    'integrations[1..2] — Applied Epic and HawkSoft: Applied API is real (Applied Systems developer portal); HawkSoft has limited public API. Confirm integration approach before publishing.',
    'integrations[3..5] — DocuSign, QuickBooks, EZLynx: all have public REST APIs; confirm scope of integration is achievable within project timelines.',
    'processSteps[0..4] — duration estimates reflect typical delivery cadence for an AMS build; confirm against actual planned engagement structure.',
    'faq[2] — timeline "18–26 weeks" is an estimate; confirm against actual planned delivery windows. No pricing range included — add if approved.',
    'imageFeatures[0..1] — image paths are placeholders; photos must be sourced from Unsplash per §11.5. Search terms: "insurance producer laptop office modern", "agency team office renewal pipeline analytics".',
    'hero.heroImage — placeholder path; source from Unsplash. Search: "insurance professional workstation modern office".',
  ],
};

export default agencyManagementSoftware;
