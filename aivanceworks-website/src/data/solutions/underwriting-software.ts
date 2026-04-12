import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Insurance)
// Buyer: VP of Underwriting / Chief Underwriting Officer at mid-market carriers and MGAs
// Dominant question: "Can this integrate with our policy admin and rating systems without disrupting in-force business?"
// Key trust issue: "The last vendor promised AI underwriting and delivered a black box our regulators rejected."
// Signature: UnderwritingDecisionEngine — hierarchical pipeline showing submission → enrichment → scoring → workbench
//
// Composition follows EHR/Patient Portals reference (same archetype C).
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no real underwriting case data yet. Insertable when verified.
//   - ComplianceSpotlight added before signature as trust gate (same rationale as EHR/Patient Portals).
//   - ComplianceDeepDive elevated to standalone after signature (compliance is the gate for this buyer).
//   - ImageFeatures added after FeatureGrid — per two-track imagery strategy (v1.1).
//   - No PersonaComparison — single primary user type (underwriters), not multi-portal.
//   - Explainability and fair lending compliance added to compliance framing (underwriting-specific).
//   - relatedPages: v2 swapped SaaS Development for Quoting Software (same-vertical peer)
//     to create a symmetric bidirectional cross-link — same CUO/VP Product buyer evaluates
//     both as part of one rating-engine-centric stack. Per §10 v2.1 exception.

const underwritingSoftware: SolutionPageData = {
  slug: 'underwriting-software',
  title: 'Custom Underwriting Software Development for Carriers & MGAs',
  shortDescription:
    'Custom underwriting platforms for insurance carriers and MGAs on Azure — automated data enrichment, configurable risk scoring, rating engine integration, and regulatory-compliant decision workflows.',

  metaTitle: 'Underwriting Software Development | Custom Insurance Underwriting Platforms',
  metaDescription:
    'Custom underwriting software for insurance carriers and MGAs. Automated data enrichment, configurable risk scoring, rating engine integration, and explainable decisions built for state DOI compliance.',
  keywords: [
    'underwriting software development',
    'custom underwriting platform',
    'insurance underwriting software',
    'automated underwriting system',
    'underwriting workbench',
    'insurance risk scoring software',
    'underwriting automation',
    'MGA underwriting platform',
    'insurance software development',
    'underwriting decision engine',
    'rating engine integration',
    'insurance compliance software',
  ],
  canonicalPath: '/solutions/underwriting-software',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Underwriting Software', href: '/solutions/underwriting-software' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'complianceSpotlight',
    'signature',
    'complianceDeepDive',
    'benefitsGrid',
    'integrationsPanel',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'insurance',
  signatureComponent: 'UnderwritingDecisionEngine',

  hero: {
    badge: 'Insurance Solutions',
    headline: 'Underwriting decisions in minutes, not days. Data does the legwork.',
    subhead:
      'Custom underwriting platforms built on Azure — automated submission intake, multi-source data enrichment, configurable risk scoring, and rating engine integration, designed around your underwriting workflows and state regulatory requirements.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the decision engine', href: '#signature' },
    heroImage: {
      src: '/images/solutions/underwriting-software/hero.jpg',
      alt: 'Insurance underwriting professional reviewing risk assessment data on a modern workstation',
    },
    metrics: [
      {
        value: 'Multi-Source',
        label: 'Automated enrichment',
        description: 'Verisk, LexisNexis, credit, MVR, CLUE',
      },
      {
        value: 'Explainable',
        label: 'Regulator-ready decisions',
        description: 'Full audit trail, no black boxes',
      },
      {
        value: 'Configurable',
        label: 'Per line & jurisdiction',
        description: 'Rules, models, and appetites',
      },
    ],
  },

  // Audience test: VP of Underwriting evaluating a platform needs to see capability breadth,
  // integration depth, compliance posture, and configurability — without fabricated percentages.
  // All four metrics are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'Multi-Source Enrichment',
      label: 'Automated Data Gathering',
      description:
        'Bureau data, credit, MVR, CLUE, and third-party sources pulled automatically for every submission — underwriters review, not research.',
    },
    {
      value: 'Configurable Rules',
      label: 'Per Line & Jurisdiction',
      description:
        'Risk appetite rules, scoring models, and pricing parameters configurable by line of business, state, and underwriting authority level.',
    },
    {
      value: 'Rating Integration',
      label: 'Native Engine Connectivity',
      description:
        'Built to connect with Guidewire, Duck Creek, Earnix, and custom rating engines for real-time quote generation within the underwriting workflow.',
    },
    {
      value: 'Audit-Ready',
      label: 'Explainable by Design',
      description:
        'Every underwriting decision produces a traceable audit trail with decision factors, data sources, and scoring rationale — built for state DOI review.',
    },
  ],

  // Audience test: VP of Underwriting thinks in operational workflows, not technical features.
  // Each card maps to an underwriting function, not an engineering pattern.
  features: [
    {
      icon: 'FileInput',
      title: 'Submission Intake & Triage',
      description:
        'Automated submission intake with document extraction, clearance checking against in-force book, and smart routing based on line of business, risk complexity, and underwriter authority level.',
    },
    {
      icon: 'Database',
      title: 'Data Enrichment Engine',
      description:
        'Automated enrichment from Verisk/ISO, LexisNexis, credit bureaus, MVR, CLUE, and configurable third-party sources. Every submission arrives at the underwriter pre-populated with the data they need.',
    },
    {
      icon: 'Brain',
      title: 'Risk Scoring & Assessment',
      description:
        'Configurable scoring models combining rules-based evaluation with ML-assisted risk signals. Every score is fully explainable — no black-box models. Designed to pass state DOI scrutiny.',
    },
    {
      icon: 'LayoutDashboard',
      title: 'Underwriter Workbench',
      description:
        'Unified workspace showing the complete risk profile: enrichment data, scoring rationale, loss history, comparable risks, and pricing recommendations — all in a single view designed for fast, confident decisions.',
    },
    {
      icon: 'Calculator',
      title: 'Quoting & Pricing Integration',
      description:
        'Real-time rating engine integration with multi-line quoting, coverage configuration, and pricing comparison. Underwriters generate quotes without leaving the platform.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Audit Trail & Compliance Reporting',
      description:
        'Complete decision audit trail capturing every data source, rule evaluation, and underwriter action. Rate filing documentation and state-specific regulatory reporting built in.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Speed-to-Quote',
      description:
        'Automated enrichment and scoring eliminate the manual data gathering that consumes most of the submission-to-quote cycle. Underwriters spend their time on decisions, not research.',
    },
    {
      icon: 'Target',
      title: 'Improved Risk Selection',
      description:
        'Better data coverage and consistent scoring across the book means fewer surprises at renewal. Configurable appetite rules enforce discipline without slowing down experienced underwriters.',
    },
    {
      icon: 'TrendingUp',
      title: 'Higher Underwriter Productivity',
      description:
        'A unified workbench with pre-enriched submissions lets underwriters handle higher submission volumes without proportional headcount growth — scaling your team through tooling, not hiring.',
    },
    {
      icon: 'Scale',
      title: 'Full Regulatory Compliance',
      description:
        'Explainable models, complete audit trails, and rate filing documentation satisfy state DOI requirements. No black-box algorithms — every decision can be traced to its inputs and rules.',
    },
    {
      icon: 'BarChart3',
      title: 'Scalable Submission Capacity',
      description:
        'Azure-native architecture scales horizontally to handle submission volume spikes — renewal seasons, new program launches, and M&A book integrations — without platform degradation.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Workflow Analysis',
      description:
        'We map your current underwriting workflows end-to-end, audit existing data sources and rating engines, identify state regulatory requirements by line of business, and define the underwriter role and authority matrix.',
      duration: '2–3 weeks',
      deliverable: 'Underwriting workflow maps, data source inventory, regulatory requirements matrix, integration strategy, prioritized feature backlog',
    },
    {
      title: 'Architecture & Rules Engine Design',
      description:
        'Platform architecture designed around your workflow maps — data enrichment pipelines, scoring model framework, rating engine connectivity, and the configurable rules engine for appetite and authority management.',
      duration: '2–3 weeks',
      deliverable: 'Architecture decision records, rules engine design, data enrichment pipeline spec, Azure infrastructure blueprint, security architecture',
    },
    {
      title: 'Core Platform Development',
      description:
        'Iterative development with bi-weekly demos to underwriting stakeholders. Submission intake, enrichment engine, scoring, and workbench built in React/Next.js and .NET with domain-driven design mirroring insurance business logic.',
      duration: '10–16 weeks',
      deliverable: 'Functional underwriting platform in staging with all agreed modules, test coverage report, performance benchmarks',
    },
    {
      title: 'Integration & Compliance Testing',
      description:
        'Connect to rating engines, bureau data sources, policy admin, and third-party APIs. Conduct end-to-end testing, penetration testing, decision explainability validation, and fair lending compliance review.',
      duration: '4–6 weeks',
      deliverable: 'Integration documentation, security test report, explainability audit, fair lending test results, rate filing readiness assessment',
    },
    {
      title: 'Deployment, Training & Support',
      description:
        'Phased rollout by line of business with role-based training for underwriters, managers, and actuaries. Dedicated hypercare period with engineering support and adoption monitoring.',
      duration: '2–3 weeks',
      deliverable: 'Production deployment, training materials, monitoring dashboards, runbook, support SLA',
    },
  ],

  capabilities: [
    'Automated submission intake and clearance checking',
    'Multi-source data enrichment (bureau, credit, MVR, CLUE)',
    'Configurable rules-based and ML-assisted risk scoring',
    'Full decision explainability and audit trail',
    'Real-time rating engine integration',
    'Multi-line, multi-state underwriting support',
    'Underwriter authority and appetite management',
    'Rate filing documentation generation',
    'Fair lending compliance testing',
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
    'Azure Document Intelligence (OCR)',
    'Power BI Embedded',
    'Terraform (IaC)',
    'Azure Application Insights',
  ],

  integrations: [
    {
      name: 'Guidewire PolicyCenter',
      category: 'Core Policy Admin',
      connectionMethod: 'REST + SOAP',
      capabilities: [
        'Bi-directional policy data sync',
        'Submission and quote lifecycle',
        'Bind and issuance workflows',
      ],
    },
    {
      name: 'Duck Creek Policy',
      category: 'Core Policy Admin',
      connectionMethod: 'REST + direct DB bridge',
      capabilities: [
        'Policy lifecycle events',
        'Rating engine integration',
        'Underwriting data exchange',
      ],
    },
    {
      name: 'Verisk / ISO',
      category: 'Bureau Data',
      connectionMethod: 'REST API + batch',
      capabilities: [
        'Loss cost data and classifications',
        'Industry risk scoring',
        'Catastrophe model data',
      ],
    },
    {
      name: 'LexisNexis Risk Solutions',
      category: 'Third-Party Data',
      connectionMethod: 'REST API',
      capabilities: [
        'Claims history and risk attributes',
        'Identity verification',
        'Property and vehicle data',
      ],
    },
    {
      name: 'Earnix',
      category: 'Rating Engine',
      connectionMethod: 'REST API',
      capabilities: [
        'Real-time rating and pricing',
        'What-if scenario modeling',
        'Rate optimization analytics',
      ],
    },
    {
      name: 'SERFF',
      category: 'Regulatory Filing',
      connectionMethod: 'SERFF API + batch export',
      capabilities: [
        'Rate filing documentation',
        'Form filing submissions',
        'State-specific regulatory exports',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Built for regulators',
    title: 'Regulatory-Compliant and Audit-Ready by Design',
    highlightText: 'Regulatory-Compliant and Audit-Ready',
    statusText: 'NAIC · State DOI · SOC 2 · Fair Lending',
    pillars: [
      {
        icon: 'Scale',
        title: 'Explainable Decisions',
        description:
          'Every underwriting decision backed by a clear, auditable rules trail. No black-box models — regulators can trace every score to its inputs.',
      },
      {
        icon: 'FileCheck',
        title: 'Rate Filing Ready',
        description:
          'System generates documentation for SERFF rate filing, including variable importance, actuarial justification summaries, and model validation reports.',
      },
      {
        icon: 'Shield',
        title: 'Data Security',
        description:
          'AES-256 encryption, role-based access, MFA, and complete audit logging. Applicant PII protected end-to-end with Azure Key Vault.',
      },
    ],
    badges: ['NAIC Model Laws', 'State DOI', 'SOC 2 Type II', 'Fair Lending', 'SERFF'],
  },

  complianceDetail: {
    frameworks: ['NAIC Insurance Data Security Model Law', 'State DOI Rate Filing', 'SOC 2 Type II', 'Fair Lending Compliance'],
    safeguards: [
      {
        icon: 'Scale',
        title: 'Explainable decision logic',
        description:
          'Every underwriting decision produces a full audit trail showing which rules, data points, and model factors drove the outcome. Designed for state DOI review and fair lending compliance.',
      },
      {
        icon: 'FileCheck',
        title: 'Rate filing documentation',
        description:
          'System generates SERFF-ready documentation including variable importance rankings, actuarial justification summaries, and model validation reports for each line of business.',
      },
      {
        icon: 'BarChart3',
        title: 'Disparate impact testing',
        description:
          'Built-in testing for rating variables and model outputs against protected classes. Configurable per state requirements and NAIC guidance on AI/ML in insurance.',
      },
      {
        icon: 'Lock',
        title: 'Data encryption & key management',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit. Applicant PII encrypted with keys managed through Azure Key Vault with automated rotation policies.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & access control',
        description:
          'Azure AD B2C with enforced MFA. Role-based access distinguishes underwriters, managers, actuaries, and administrators with least-privilege defaults across every module.',
      },
      {
        icon: 'Activity',
        title: 'Comprehensive audit logging',
        description:
          'Every underwriting decision, data enrichment request, price calculation, and user action logged with timestamp, actor, inputs, and outcome. Logs retained per regulatory requirements.',
      },
    ],
    auditNote:
      'Every module is architected to produce explainable, auditable underwriting decisions that meet state DOI requirements and NAIC AI/ML governance guidance. We provide the documentation, audit trails, and compliance controls needed for regulatory review.',
    partnerAgreements: ['DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Complete Risk Picture, One Screen',
      description:
        'Underwriters see enriched data, risk scores, and pricing recommendations in a unified workbench — no more toggling between systems to piece together the picture.',
      image: {
        src: '/images/solutions/underwriting-software/feature-1.jpg',
        alt: 'Insurance underwriting analyst reviewing risk assessment data across multiple screens in a modern office',
      },
    },
    {
      heading: 'Every Data Source, Automatically Enriched',
      description:
        'Bureau data, credit scores, loss history, and third-party intelligence flow into every submission automatically — your underwriters review, not research.',
      image: {
        src: '/images/solutions/underwriting-software/feature-2.jpg',
        alt: 'Team of insurance professionals collaborating on underwriting decisions around a conference table with data displays',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Planning an underwriting platform overhaul? A discovery sprint maps your rating engines, data sources, and regulatory landscape before development begins.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'MVP Development',
      description:
        'Need to prove the concept first? Our 12-week MVP process gets a core underwriting module in front of real underwriters while you plan the full platform.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Quoting Software',
      description:
        'Underwriting and quoting share a rating spine. Our quoting platform adds the multi-channel intake, filed-rate verification gate, and bind-ready workflow that sit in front of every submission your underwriters see.',
      href: '/solutions/quoting-software',
      icon: 'Cpu',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'Can this integrate with our existing policy admin and rating systems?',
      answer:
        'Yes, and integration architecture is designed from discovery onward. We build connectivity with Guidewire, Duck Creek, Majesco, and proprietary policy admin systems using REST APIs, SOAP services, and direct database connectors. Rating engines like Earnix and Guidewire Rating Management connect via real-time APIs so underwriters generate quotes without leaving the workbench. We build an integration middleware layer that decouples the underwriting platform from your core systems, so either side can be upgraded independently.',
    },
    {
      question: 'How do you handle state-specific regulatory requirements?',
      answer:
        'The platform is built with configurable compliance controls from the first sprint. Rules, scoring models, and pricing parameters are configurable per state and line of business. The system generates SERFF-ready documentation for rate filings, and every underwriting decision produces a full audit trail showing decision factors, data sources, and scoring rationale — designed to satisfy state DOI review. We work with your compliance and actuarial teams to map requirements before development begins.',
    },
    {
      question: 'How does the risk scoring work, and can regulators understand it?',
      answer:
        'We use a hybrid approach: configurable rules-based evaluation combined with ML-assisted risk signals where appropriate. The key principle is full explainability — every score can be traced to specific data inputs, rules, and model factors. No black-box algorithms. The system generates model documentation suitable for state DOI review, including variable importance rankings and disparate impact testing results. Your actuaries can configure and validate every scoring model before production deployment.',
    },
    {
      question: 'What does implementation typically cost and how long does it take?',
      answer:
        'A custom underwriting platform with core modules typically takes 20–32 weeks from kickoff to production, depending on the number of lines of business, integration complexity, and regulatory requirements. Investment typically ranges from $250,000 to $800,000 for a full custom build. We offer phased delivery — the highest-priority line of business goes live first, allowing your underwriters to provide feedback before the full platform is complete.',
    },
    {
      question: 'Can we start with one line of business and expand later?',
      answer:
        'The platform is designed for exactly that. Our modular architecture means you can launch with a single line — personal auto, commercial property, workers\' comp — and add lines incrementally. Each line shares the same scoring framework, enrichment engine, and audit infrastructure, so expansion is configuration, not a rebuild. New lines typically take 4–8 weeks to configure and test once the core platform is live.',
    },
    {
      question: 'How does the platform handle submission volume spikes?',
      answer:
        'The platform runs on Azure with horizontal auto-scaling, so compute capacity expands automatically during volume peaks — renewal seasons, new program launches, or post-M&A book integrations. We design the data tier with read replicas and caching for query-heavy enrichment operations, and the enrichment pipeline processes data source requests asynchronously so no single slow API blocks the workflow. Infrastructure is provisioned as code via Terraform for environment replication.',
    },
  ],

  cta: {
    title: 'Ready to Modernize Your Underwriting Operations?',
    description:
      'Book a free 30-minute discovery call. We will review your current underwriting workflows, rating engine landscape, and integration requirements, then give you a realistic assessment of what a custom underwriting platform would cost and deliver for your business.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the decision engine', href: '#signature' },
  },

  _unverified: [
    'hero.metrics — all three are capability-framed (greenfield-safe); no outcome claims to verify.',
    'metricsStrip[0..3] — all four values are capability-framed, not outcome percentages. Greenfield-safe.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope; confirm which integrations we have actually shipped in production vs. which we build to.',
    'integrations — 6 systems listed. Confirm real shipped integration count; some may be architecture-level knowledge only.',
    'complianceSpotlight.badges — "SOC 2 Type II" listed; confirm whether company has SOC 2 Type II attestation or is in progress.',
    'complianceDetail.frameworks — same SOC 2 verification as complianceSpotlight.',
    'complianceDetail.safeguards[2] — disparate impact testing claim reflects planned capability; confirm we have actually built this feature.',
    'faq[3] — pricing range "$250k–$800k" is an estimate based on project complexity. Confirm with user before publishing.',
    'faq[3] — timeline "20–32 weeks" is an estimate. Confirm against actual planned delivery windows.',
    'faq[4] — "4–8 weeks" per new line is an estimate. Confirm against actual experience.',
    'processSteps durations — reflect estimated typical delivery cadence; confirm against actual past engagements.',
  ],
};

export default underwritingSoftware;
