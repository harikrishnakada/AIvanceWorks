import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Pharma / Biotech)
// Buyer: Head of R&D Informatics, Chief Data Officer, VP Clinical Development at
//   US pharma and biotech. Their teams answer to FDA, EMA, and internal QA.
// Dominant question: "Can you build software that fits a regulated workflow
//   without making promises that come back to bite either of us?"
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Validation, submission, and any
//     regulatory clearance are owned by the customer's QA and regulatory teams.
//   - No vendor names anywhere on the page (no Veeva, Medidata, Oracle, etc.).
//   - No named AI libraries (no RDKit, OpenEye, Schrödinger, BioNeMo, AlphaFold).
//   - Framework names (HIPAA, 21 CFR Part 11, GxP, FDA SaMD, GMLP, GDPR) are
//     retained for audience-signaling and SEO, but always framed as design
//     awareness — never as certification or compliance promises.
//   - No fixed durations, no fixed costs, no promised regulatory outcomes.
//
// Hero headline is a placeholder pending a separate rewrite conversation.

const aiPharma: SolutionPageData = {
  slug: 'ai-pharma',
  title: 'C10 AI Pharma',
  shortDescription:
    'Custom software for pharma and biotech — research workflows, clinical operations tooling, and AI-assisted analytics — designed with audit, validation, and security engineering practices that your QA team can build on.',

  metaTitle:
    'AI Software for Pharma & Biotech | Research, Clinical, and Diagnostic Tooling',
  metaDescription:
    'Custom software development for pharma and biotech: research workflows, clinical operations tooling, AI-assisted analytics, and decision-support software — engineered with audit and security awareness. Validation and regulatory submission remain with your team.',
  keywords: [
    'pharma software development',
    'biotech software partner',
    'clinical research software',
    'pharmaceutical AI software',
    'AI drug discovery software',
    'clinical trial software development',
    'AI driven diagnostics software',
    'regulated software engineering',
    'pharma data platform',
    'life sciences software development',
  ],
  canonicalPath: '/solutions/ai-pharma',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'C10 AI Pharma', href: '/solutions/ai-pharma' },
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
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'pharma',
  signatureComponent: 'PharmaAiResearchEngine',

  hero: {
    badge: 'AI Industry Solutions',
    // NOTE: this headline is a placeholder pending the headline-rewrite
    // conversation. Treat as TODO before publish.
    headline: 'AI for pharma — built inside the audit trail, not on top of it.',
    subhead:
      'Custom software platforms for pharma and biotech — including research workflows, clinical operations tooling, and AI-assisted analytics. We engineer the platform with audit-trail awareness and security discipline; your QA and regulatory functions own validation and submission.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the research engine', href: '#signature' },
    heroImage: {
      src: '/images/solutions/ai-pharma/hero.jpg',
      alt: 'Researcher pipetting reagent into a multi-well plate during a laboratory experiment',
    },
    metrics: [
      {
        value: 'Audit-aware',
        label: 'Engineering for audit-trail-aware systems',
        description:
          'Logging, lineage, and access controls treated as first-class engineering concerns from day one.',
      },
      {
        value: 'Lifecycle aware',
        label: 'ML lifecycle artifacts your QA team can use',
        description:
          'Model cards, evaluation reports, and change logs delivered as part of the build.',
      },
      {
        value: 'Three pillars',
        label: 'One engineering foundation',
        description:
          'Discovery, clinical operations, and diagnostic software sharing the same engineering core.',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'Audit-aware engineering',
      label: 'Logging & lineage from day one',
      description:
        'Audit-trail logging, data lineage, and approval gates designed as first-class features of the platform — not bolted on for an audit week.',
    },
    {
      value: 'Data discipline',
      label: 'Lineage, controlled vocabularies, immutable logs',
      description:
        'Engineering defaults that make research and operational data traceable: schema-level lineage, immutable audit records, and controlled-vocabulary support.',
    },
    {
      value: 'Lifecycle artifacts',
      label: 'Model cards, evaluations, drift monitoring',
      description:
        'ML lifecycle artifacts delivered with the build so your QA, IT, and regulatory teams can review what the model is and how it is changing.',
    },
    {
      value: 'Built to coexist',
      label: 'APIs your existing systems can consume',
      description:
        'Platforms designed to coexist with the research and clinical systems you already run — your IT and integration teams own the actual connectors.',
    },
  ],

  features: [
    {
      icon: 'FlaskConical',
      title: 'Drug Discovery & R&D Software',
      description:
        'Custom software for research workflows — data lakes, knowledge graphs, ML-assisted analytics, and laboratory data management. We engineer the platform; your scientists direct the science and decide how the outputs are used.',
    },
    {
      icon: 'ClipboardList',
      title: 'Clinical Operations Software',
      description:
        'Software supporting clinical research operations — cohort discovery on de-identified data, monitoring dashboards, workflow automation, and document tooling. Designed to coexist with your existing clinical systems via documented APIs your IT team controls.',
    },
    {
      icon: 'Microscope',
      title: 'Healthcare AI Software',
      description:
        'Custom AI and ML software for healthcare and life-sciences applications — imaging pipelines, decision-support interfaces, and analytics. We build the platform with explainability, confidence reporting, and clinician-in-the-loop patterns. Clinical use, regulatory pathway, and device classification are decided by your team.',
    },
    {
      icon: 'FileText',
      title: 'Document & Knowledge Tooling',
      description:
        'NLP and retrieval-augmented software over your documents — protocols, internal SOPs, scientific literature, correspondence. Returns answers grounded in your sources with citations, supporting your team’s review work without replacing it.',
    },
    {
      icon: 'Database',
      title: 'Research Data Foundation',
      description:
        'A data fabric across your research and operational sources — schema-level lineage, role-scoped access, and controlled-vocabulary support, so AI and analytics workloads run on data with documented provenance.',
    },
    {
      icon: 'GitBranch',
      title: 'MLOps & Model Governance',
      description:
        'Model cards, evaluation harnesses, drift detection, retraining gates, and change-control logs — engineering artifacts your QA, IT, and regulatory teams can review as part of your own validation work.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Time-to-Decision in R&D',
      description:
        'Workflows that compress the read-write-decide loop for your scientists — search across literature, internal experiments, and analytics in one place, with the underlying data lineage preserved.',
    },
    {
      icon: 'Activity',
      title: 'Clearer Signals for Your Trial Team',
      description:
        'Dashboards, alerts, and analytics that surface enrollment, monitoring, and data quality signals as they happen — supporting your trial team’s decisions instead of replacing them.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Documentation Your QA Team Can Use',
      description:
        'Validation-support artifacts — audit logs, model cards, data lineage, and change-control history — are produced as part of the build, so your QA function inherits an engineered evidence set rather than a research notebook.',
    },
    {
      icon: 'Lock',
      title: 'PHI / PII Treated as a First-Class Engineering Concern',
      description:
        'Patient and subject data is segmented, tokenized, and access-scoped at the application layer by default. Training pipelines use de-identified or synthetic datasets wherever the work allows.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Core Systems',
      description:
        'We sit alongside your existing research and clinical systems via documented APIs and standard data exchange formats — adding software capability without forcing you to displace the systems your teams already rely on.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Use-Case Triage & Engineering Framing',
      description:
        'We map your research, clinical, or diagnostic workflows; rank candidate software use cases by feasibility and data readiness; and frame the engineering and integration shape before scoping the build. Regulatory pathway decisions stay with your team.',
      duration: 'Scoped during discovery',
      deliverable:
        'Use-case scorecard, data readiness audit, engineering and integration outline, prioritized roadmap',
    },
    {
      title: 'Architecture & Engineering Plan',
      description:
        'Design the system architecture, data fabric, model lifecycle, and engineering plan — including audit-trail design, role-scoped access, MLOps practices, and security posture — alongside your IT, security, and QA stakeholders.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, data model, MLOps plan, security architecture, integration outline',
    },
    {
      title: 'Build & Iterate',
      description:
        'Iterative full-stack development of the platform — data pipelines, model services, UI, and governance tooling — with engineering artifacts (test coverage, evaluation results, change logs) captured as part of the build.',
      duration: 'Phased per engagement',
      deliverable:
        'Working platform, engineering artifact set, model cards, audit-trail dashboards, integration hooks',
    },
    {
      title: 'Integration & Handoff to Your QA / Regulatory Function',
      description:
        'Connect to your existing source systems via documented APIs and standard data formats, run end-to-end UAT with your R&D and clinical operations stakeholders, and assemble the engineering documentation set your QA and regulatory teams need as inputs into their own validation work.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set',
    },
    {
      title: 'Deployment, Hypercare & Lifecycle Operations',
      description:
        'Phased rollout to scientists, clinical operations, or diagnostic users. An initial hypercare period covers monitoring, model drift response, retraining considerations, and change-control reviews so the platform stays in a known state as the science evolves.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, drift / retraining playbooks, hypercare support',
    },
  ],

  capabilities: [
    'Audit-trail logging and e-signature support in regulated workflows',
    'Data lineage and controlled-vocabulary support across research and operational sources',
    'Role-scoped access for scientists, operations, regulatory, and IT users',
    'PHI / PII segmentation, tokenization, and de-identification patterns',
    'Synthetic data patterns where the underlying work allows',
    'Model cards, evaluation harnesses, drift detection, retraining gates',
    'Documented APIs and standard data exchange formats for integration',
    'WCAG 2.1 AA accessibility for clinician-facing interfaces',
    'Documented engineering artifacts your QA team can use as validation inputs',
    'Security engineering aligned with practices common in regulated environments',
  ],

  technologies: [
    'Python (ML / data tooling)',
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure AI services',
    'Azure Machine Learning + MLflow',
    'Azure Key Vault (key & secret management)',
    'Azure SQL / PostgreSQL / Cosmos DB',
    'Snowflake / Databricks',
    'Terraform (IaC)',
    'OpenTelemetry + Application Insights (audit & observability)',
    'HL7 FHIR R4 / DICOM / CDISC ODM (open data standards)',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered with audit, validation, and security awareness for regulated pharma work',
    highlightText: 'audit, validation, and security awareness',
    statusText:
      'Engineering posture aligned with the practices common in 21 CFR Part 11, GxP, HIPAA, GDPR, FDA SaMD, and GMLP environments',
    pillars: [
      {
        icon: 'ShieldCheck',
        title: 'Audit-Trail-Aware Engineering',
        description:
          'We design platforms so that logging, lineage, and approval gates are first-class engineering features. Your QA team executes the validation; the platform supplies the engineering evidence.',
      },
      {
        icon: 'FileCheck',
        title: 'Data Discipline That Supports Your Audit Work',
        description:
          'Schema-level lineage, immutable audit records, controlled-vocabulary support, and database-level constraints make research and operational data traceable for your QA reviewers.',
      },
      {
        icon: 'GitBranch',
        title: 'ML Lifecycle Artifacts Your QA Can Review',
        description:
          'Model cards, training data fingerprints, evaluation harnesses, drift monitoring, and change-control logs — every model arrives with a documented lifecycle your reviewers can read.',
      },
    ],
    badges: [
      '21 CFR Part 11',
      'GxP',
      'HIPAA',
      'GDPR',
      'FDA GMLP',
      'SaMD',
      'HL7 FHIR',
      'CDISC',
    ],
  },

  complianceDetail: {
    frameworks: [
      '21 CFR Part 11',
      'GxP (GLP / GCP / GMP)',
      'HIPAA + HITECH',
      'GDPR',
      'FDA Good Machine Learning Practice (GMLP)',
      'FDA SaMD framework (IMDRF)',
      'EU AI Act (high-risk health AI provisions)',
      'CDISC standards (SDTM, ADaM, ODM)',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the build so your QA team has the documentation, traceability, and test evidence they need to execute their validation work. We do not perform validation on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'Data discipline as an engineering default',
        description:
          'Schema-level lineage, immutable audit logs, controlled-vocabulary support, and database-level constraints — applied so research and operational data stays attributable and contemporaneous as your QA team reviews it.',
      },
      {
        icon: 'Lock',
        title: 'PHI / PII segmentation',
        description:
          'Patient and subject data is tokenized at the application gateway, scoped by role, and de-identified or synthesized for training wherever the work allows. PHI is kept out of the model layer by default.',
      },
      {
        icon: 'GitBranch',
        title: 'Model lifecycle engineering',
        description:
          'Model cards, training data fingerprints, evaluation harnesses, drift monitoring, and retraining gates — engineering practices informed by published guidance on responsible machine-learning lifecycles, including FDA GMLP principles.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & access control',
        description:
          'Standards-based identity with enforced MFA, role-scoped access for the user populations the platform serves, and least-privilege defaults across modules and APIs.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for regulated environments',
        description:
          'Hosted on cloud regions and configurations commonly used for sensitive data work, with private endpoints, infrastructure defined and reviewed via Terraform, and environment promotion gates your team can sign.',
      },
    ],
    auditNote:
      'Every component is engineered with audit-trail logging, role-scoped access, lineage tracking, and lifecycle artifacts your QA, IT, and regulatory teams can use as inputs into their own validation work. Final regulatory submission, validation execution, and any clearance pathway (e.g., SaMD classification, 510(k), De Novo, PMA) remain solely the customer’s responsibility, executed by the customer’s regulatory function. AIvanceWorks does not represent, attest, or warrant compliance with any regulatory framework on behalf of any customer.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Clearer Signals for Clinical Operations',
      description:
        'Software that sits alongside your clinical operations stack, surfacing enrollment, monitoring, and data quality signals as they happen — supporting your trial team’s decisions, not replacing them.',
      image: {
        src: '/images/solutions/ai-pharma/feature-1.jpg',
        alt: "Clinical research coordinator measuring a participant's blood pressure during a study visit",
      },
    },
    {
      heading: 'Diagnostic Software Built Transparently',
      description:
        'Pathology, imaging, and decision-support software shipped with explainability hooks, confidence reporting, and clinician-in-the-loop workflows — engineered transparently so your clinical and regulatory teams can review the model behind the screen.',
      image: {
        src: '/images/solutions/ai-pharma/feature-2.jpg',
        alt: 'Scientist wearing protective eyewear focused on diagnostic work in a research lab',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Regulatory Information Management (RIM)',
      description:
        'Your pharma AI work eventually has to land back inside a regulated record of truth. Our RIM engagement builds the unified product, dossier, submission, correspondence, and commitment platform your regulatory team can stand behind.',
      href: '/solutions/regulatory-information-management',
      icon: 'FolderTree',
      pageType: 'solution',
    },
    {
      title: 'Laboratory Information Management Systems (LIMS)',
      description:
        'Most pharma AI work eventually leans on a LIMS for sample, instrument, and result data. Our LIMS engagement builds the chain-of-custody and audit-trail foundation your research and clinical platforms can sit on top of.',
      href: '/solutions/lims',
      icon: 'Beaker',
      pageType: 'solution',
    },
    {
      title: 'Security & Compliance',
      description:
        'Pharma software lives or dies inside the audit trail. Our security & compliance practice helps shape your stack with audit-trail logging, role-scoped access, and lifecycle engineering your QA team can review.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Are the AI outputs you deliver ready for our regulatory submissions?',
      answer:
        'We are a software engineering partner. Validation execution, submission readiness, and regulatory acceptance are owned by your QA and regulatory functions — we do not perform validation or make submissions on your behalf. What we deliver is the platform plus engineering artifacts your team uses as inputs into their own work: audit-trail logs, data lineage, model cards, evaluation reports, and change-control history. Your QA and regulatory teams decide how those artifacts are used.',
    },
    {
      question:
        'How do you handle PHI and subject data in clinical AI workflows?',
      answer:
        'Subject and patient data is tokenized at the application gateway, segmented by sensitivity, and access-scoped by role. Training pipelines use de-identified or synthetic datasets wherever the underlying work allows; PHI is kept out of the model layer by default. Every action is logged with actor, timestamp, resource, and outcome so your reviewers can trace activity through the platform. The engineering practices we apply are aligned with what customers in regulated environments typically expect, but we make no compliance certifications on your behalf.',
    },
    {
      question:
        'How does this fit alongside our existing research and clinical systems?',
      answer:
        'We build platforms designed to coexist with the research, clinical, laboratory, and data systems you already run — using documented APIs and standard data exchange formats (for example, HL7 FHIR R4, DICOM, and CDISC ODM where applicable). Your IT and integration teams own the actual connections into your validated systems. We do not claim partnerships, certifications, or pre-built integrations with any third-party vendor.',
    },
    {
      question:
        'Can you build diagnostic software? What about FDA SaMD considerations?',
      answer:
        'We do not classify, submit, or seek clearance for medical devices on behalf of customers. What we build is custom AI and ML software for healthcare and life-sciences workflows — decision-support interfaces, imaging pipelines, analytics — engineered transparently with explainability hooks, confidence reporting, and clinician-in-the-loop patterns. Final device classification, regulatory pathway, and any FDA interaction are owned and executed by your regulatory function. Our engineering practice is informed by published guidance on responsible machine-learning lifecycles; the regulatory determinations are yours.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by program and are defined during discovery — we do not quote fixed durations or fixed regulatory outcomes on a public page. Discovery is where we map your workflows, audit data readiness, and frame the engineering and integration shape before any production-bound code is written. After discovery, the build is typically phased so the highest-priority capability goes live first and your team can review the platform before later phases land.',
    },
    {
      question:
        'How do you address hallucination and black-box risk for clinical and regulatory work?',
      answer:
        'Our generative and ML pipelines are grounded in retrieval over your verified internal sources (protocols, SOPs, scientific literature, your own documents), return citations alongside answers, and ship with evaluation harnesses that track factuality and drift over time. Diagnostic and decision-support models ship with explainability hooks, confidence reporting, and clinician-in-the-loop patterns. Every model has a documented lifecycle — model card, training data lineage, evaluation results, change history — that your reviewers can read.',
    },
  ],

  cta: {
    title: 'Bringing AI into a regulated pharma workflow?',
    description:
      'Book a free 30-minute discovery call. We will review your software needs across discovery, clinical operations, or diagnostic tooling, talk through the engineering and integration shape, and outline a realistic scope. Regulatory pathway decisions remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the research engine', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing with explicit customer-ownership of validation, submission, and regulatory outcomes. Legal review recommended before publish to confirm liability framing.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No vendor names retained anywhere on the page. Verify by grep before publish.',
    'Hero headline is a placeholder pending a separate rewrite conversation.',
  ],
};

export default aiPharma;
