import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Healthcare Provider & Payor AI)
// Buyer: Chief Medical Informatics Officer (CMIO), Chief Digital / Information
//   Officer, VP Clinical Innovation at US health systems, multi-specialty
//   groups, and payors. Their teams answer to HIPAA, HITECH, ONC Cures Act,
//   FDA SaMD guidance, CMS, and Joint Commission reviewers.
// Dominant question: "Can you build AI inside our clinical workflow without
//   creating a liability for us — or for the patient — that we cannot defend?"
//
// Liability stance (greenfield, explicit):
//   - AIvanceWorks is a software engineering partner. The clinician makes the
//     clinical decision. Validation, regulatory pathway, and clinical
//     responsibility remain with the customer.
//   - No vendor names anywhere on the page (no Epic, Cerner / Oracle Health,
//     Nuance / DAX, Athena, Meditech, Salesforce Health Cloud, etc.).
//   - No specific model brand-name claims (no GPT-, Claude-, Gemini-named
//     "we use" statements in copy).
//   - Framework names (HIPAA, HITECH, ONC Cures Act, FDA SaMD, GMLP, Joint
//     Commission, NIST AI RMF) retained for SEO and audience signaling, framed
//     as design-awareness — never as certification or compliance attestation.
//   - No fixed durations, no fixed costs, no clinical outcome guarantees.

const aiHealthcare: SolutionPageData = {
  slug: 'ai-healthcare',
  title: 'C10 AI Healthcare',
  shortDescription:
    'Custom AI software for US health systems and payors — ambient documentation, grounded clinical knowledge, revenue cycle automation, and care-management copilots — engineered with HIPAA-grade safeguards, clinician-in-the-loop patterns, and audit-trail awareness.',

  metaTitle:
    'AI Software for Healthcare Providers & Payors | Clinical, RCM, and Care Management Tooling',
  metaDescription:
    'Custom AI software development for US healthcare: ambient clinical documentation, grounded decision support, revenue cycle automation, and care-management copilots. Engineered with HIPAA-grade safeguards and audit-trail awareness; clinical responsibility stays with your team.',
  keywords: [
    'healthcare AI software',
    'clinical AI software development',
    'AI for hospitals',
    'AI for health systems',
    'ambient clinical documentation',
    'healthcare RAG software',
    'clinical decision support software',
    'revenue cycle AI',
    'HIPAA-aware AI development',
    'AI for payors',
    'population health AI',
    'care management automation',
  ],
  canonicalPath: '/solutions/ai-healthcare',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'C10 AI Healthcare', href: '/solutions/ai-healthcare' },
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

  industry: 'healthcare',
  signatureComponent: 'HealthcareAiCarePathway',

  hero: {
    badge: 'AI Industry Solutions',
    headline: 'AI inside the care pathway — not bolted onto it.',
    subhead:
      'Custom AI software for US health systems and payors — ambient documentation, grounded clinical knowledge, revenue cycle automation, and care-management copilots. We engineer the platform with HIPAA-grade safeguards and clinician-in-the-loop patterns; clinical responsibility stays with your team.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the care-pathway map', href: '#signature' },
    heroImage: {
      src: '/images/solutions/ai-healthcare/hero.jpg',
      alt: 'Clinician reviewing patient information on a tablet inside a hospital corridor',
    },
    metrics: [
      {
        value: 'Clinician-in-the-loop',
        label: 'AI proposes, clinicians decide',
        description:
          'Confidence reporting and citations surface inline with every assist; nothing is auto-signed on behalf of a clinician.',
      },
      {
        value: 'HIPAA-grade engineering',
        label: 'PHI scoped at the application layer',
        description:
          'Tokenization, role-scoped access, and de-identified training data treated as engineering defaults — not retrofitted before an audit.',
      },
      {
        value: 'Audit-aware by design',
        label: 'Logging, lineage, and lifecycle artifacts',
        description:
          'Audit trail, model cards, and evaluation reports produced as part of the build for your compliance and informatics reviewers.',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'Clinician-in-the-loop',
      label: 'Every AI assist routes through a human reviewer',
      description:
        'Decision-support and documentation outputs are framed as suggestions with confidence and citations — the clinician owns the decision and the record.',
    },
    {
      value: 'HIPAA-grade safeguards',
      label: 'PHI segmentation, tokenization, role-scoped access',
      description:
        'Patient data is segmented and access-scoped at the application layer; de-identified or synthetic data is used in training wherever the work allows.',
    },
    {
      value: 'Audit-trail awareness',
      label: 'Every assist recorded as an immutable event',
      description:
        'Actor, model version, prompt, response, and disposition logged so your informatics and compliance reviewers can trace activity end-to-end.',
    },
    {
      value: 'Built to coexist',
      label: 'Standards-based integration with your stack',
      description:
        'Platforms designed to sit alongside your EHR, RCM, and data systems through HL7 FHIR, X12, and documented APIs — your IT team owns the connectors into validated systems.',
    },
  ],

  features: [
    {
      icon: 'Mic',
      title: 'Ambient Clinical Documentation',
      description:
        'Custom ambient capture and structured-note assistance — engineered so the clinician reviews, edits, and signs every note. Patient consent and opt-out preserved as first-class workflow states.',
    },
    {
      icon: 'BookOpenCheck',
      title: 'Grounded Clinical Knowledge',
      description:
        'Retrieval-augmented software over your formularies, protocols, policies, and approved literature. Returns citations alongside answers; framed as clinician-reviewed reference, not autonomous advice.',
    },
    {
      icon: 'Stethoscope',
      title: 'Clinical Decision Support Interfaces',
      description:
        'Decision-support and triage UIs shipped with explainability hooks, confidence reporting, and clinician-in-the-loop patterns. Final clinical decisions and any FDA SaMD pathway remain with your team.',
    },
    {
      icon: 'ReceiptText',
      title: 'Revenue Cycle Automation',
      description:
        'Coding suggestions, CDI prompts, prior-authorization drafting, and denial root-cause analytics — all routed through human reviewers and recorded in the audit trail your finance and compliance teams own.',
    },
    {
      icon: 'Activity',
      title: 'Population Health & Care Management Copilots',
      description:
        'Risk-stratification on de-identified cohorts, outreach workflow automation, and closed-loop tracking against your existing quality measures. Care teams review and direct every intervention.',
    },
    {
      icon: 'CalendarHeart',
      title: 'Patient Engagement & Intake AI',
      description:
        'Conversational intake, symptom guidance with clinician escalation, and consent-aware patient messaging — engineered to route patients to the right care setting without making clinical claims.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Lower Documentation Burden for Clinicians',
      description:
        'Ambient capture and structured-note suggestions are designed to compress the time clinicians spend on documentation between visits — without removing review, edit, or sign-off from the clinician.',
    },
    {
      icon: 'BarChart3',
      title: 'Clearer Signals for RCM & Operations',
      description:
        'Coding, denial, prior-auth, and throughput analytics surface root causes and suggest reviewable next actions for your finance and operations teams — not unattended automation.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Documentation Your Compliance Team Can Use',
      description:
        'Audit logs, model cards, evaluation reports, change-control history, and PHI-handling records are produced as engineering deliverables your informatics and compliance reviewers can inspect.',
    },
    {
      icon: 'Lock',
      title: 'PHI Treated as a First-Class Engineering Concern',
      description:
        'Patient data is segmented, tokenized, and access-scoped at the application gateway. Training and evaluation pipelines use de-identified or synthetic data wherever the underlying work allows.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Core Systems',
      description:
        'We sit alongside your EHR, RCM, scheduling, and data platforms using HL7 FHIR R4, X12, and documented APIs — adding AI capability without forcing displacement of systems your teams already rely on.',
    },
    {
      icon: 'UserCheck',
      title: 'Clinician-in-the-Loop, Not Black Box',
      description:
        'Every decision-support assist arrives with citations, confidence, and an explicit reviewer step. AI proposes; the clinician (or coder, or care manager) decides and signs.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Use-Case Triage & Workflow Framing',
      description:
        'We map your clinical, RCM, or care-management workflows; rank candidate AI use cases by feasibility, data readiness, and clinical risk; and frame the engineering and integration shape before scoping the build. Clinical-risk and regulatory-pathway decisions stay with your team.',
      duration: 'Scoped during discovery',
      deliverable:
        'Use-case scorecard, data readiness audit, clinical-risk framing, engineering and integration outline, prioritized roadmap',
    },
    {
      title: 'Architecture, Safeguards & Engineering Plan',
      description:
        'Design the system architecture, data fabric, model lifecycle, and engineering plan — including PHI scoping, audit-trail design, role-scoped access, MLOps practices, and clinician-in-the-loop patterns — alongside your IT, security, and informatics stakeholders.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, data model, MLOps plan, security architecture, clinician-in-the-loop interaction patterns, integration outline',
    },
    {
      title: 'Build, Evaluate & Iterate',
      description:
        'Iterative full-stack development of the platform — data pipelines, model services, clinician-facing UI, RCM workflows, and governance tooling — with engineering artifacts (test coverage, evaluation results, change logs) captured as part of the build.',
      duration: 'Phased per engagement',
      deliverable:
        'Working platform, engineering artifact set, model cards, evaluation reports, audit-trail dashboards, integration hooks',
    },
    {
      title: 'Integration & Handoff to Informatics / Compliance',
      description:
        'Connect to your EHR, RCM, scheduling, and data platforms via HL7 FHIR, X12, and documented APIs; run end-to-end UAT with your clinical, RCM, and informatics stakeholders; assemble the documentation set your informatics, compliance, and (where applicable) regulatory functions need as inputs into their own validation work.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set for your reviewers',
    },
    {
      title: 'Deployment, Hypercare & Lifecycle Operations',
      description:
        'Phased rollout to clinicians, RCM staff, or care managers. An initial hypercare period covers monitoring, model drift response, retraining considerations, and change-control reviews so the platform stays in a known state as clinical context evolves.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, drift / retraining playbooks, hypercare support',
    },
  ],

  capabilities: [
    'PHI segmentation, tokenization, and role-scoped access at the application layer',
    'De-identified and synthetic data patterns for training and evaluation where the work allows',
    'Audit-trail logging of actor, model version, prompt, response, and disposition',
    'Clinician-in-the-loop interaction patterns with confidence and citation surfacing',
    'Retrieval-augmented generation grounded in your approved internal sources',
    'Model cards, evaluation harnesses, drift detection, and retraining gates',
    'HL7 FHIR R4, X12, and documented APIs for integration with EHR, RCM, and data platforms',
    'Consent and opt-out states preserved as first-class workflow data',
    'WCAG 2.1 AA accessibility for clinician- and patient-facing interfaces',
    'Engineering practices aligned with HIPAA Security Rule, ONC Cures Act information-sharing, and NIST AI RMF guidance',
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
    'HL7 FHIR R4 / SMART on FHIR',
    'X12 (EDI for RCM workflows)',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered with HIPAA, ONC, and FDA SaMD awareness for regulated healthcare work',
    highlightText: 'HIPAA, ONC, and FDA SaMD awareness',
    statusText:
      'Engineering posture aligned with the practices common in HIPAA, HITECH, ONC Cures Act, FDA SaMD, FDA GMLP, NIST AI RMF, and Joint Commission environments',
    pillars: [
      {
        icon: 'ShieldCheck',
        title: 'Clinician-in-the-Loop, by design',
        description:
          'Every AI assist routes through a human reviewer. Confidence and citations surface inline; nothing is auto-signed for the clinician. The clinical decision and the record remain the clinician’s.',
      },
      {
        icon: 'Lock',
        title: 'PHI as a First-Class Engineering Concern',
        description:
          'Patient data is tokenized at the application gateway, segmented by sensitivity, and access-scoped by role. Training pipelines use de-identified or synthetic data wherever the underlying work allows.',
      },
      {
        icon: 'FileCheck',
        title: 'Audit, Evaluation & Lifecycle Artifacts',
        description:
          'Audit-trail logs, model cards, evaluation reports, drift monitoring, and change-control records are delivered with the build — engineering inputs your informatics, compliance, and regulatory reviewers can read.',
      },
    ],
    badges: [
      'HIPAA',
      'HITECH',
      'ONC Cures Act',
      'FDA SaMD',
      'FDA GMLP',
      'NIST AI RMF',
      'Joint Commission',
      'HL7 FHIR',
    ],
  },

  complianceDetail: {
    frameworks: [
      'HIPAA Privacy & Security Rules',
      'HITECH Act',
      'ONC 21st Century Cures Act (information-sharing & blocking)',
      'FDA Software as a Medical Device (SaMD) framework (IMDRF)',
      'FDA Good Machine Learning Practice (GMLP)',
      'NIST AI Risk Management Framework',
      'Joint Commission practice expectations',
      '42 CFR Part 2 (substance-use confidentiality, where applicable)',
      'State-level data protection regimes (e.g., CMIA, TX Med Records Privacy Act)',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the build so your informatics, compliance, and (where applicable) regulatory teams have the documentation, traceability, and test evidence they need to execute their own validation work. We do not perform validation or attest compliance on your behalf.',
      },
      {
        icon: 'Lock',
        title: 'PHI segmentation and tokenization',
        description:
          'Patient data is tokenized at the application gateway, scoped by role, and de-identified or synthesized for training wherever the work allows. PHI is kept out of the model layer by default.',
      },
      {
        icon: 'Activity',
        title: 'Audit-trail logging as an engineering default',
        description:
          'Every AI assist is recorded as an immutable event — actor, model version, prompt, response, and disposition — so your informatics and compliance reviewers can trace activity end-to-end without bolt-on tooling.',
      },
      {
        icon: 'GitBranch',
        title: 'Model lifecycle engineering',
        description:
          'Model cards, training data fingerprints, evaluation harnesses, drift monitoring, and retraining gates — engineering practices informed by published guidance on responsible ML lifecycles, including FDA GMLP principles and NIST AI RMF profiles.',
      },
      {
        icon: 'UserCheck',
        title: 'Clinician-in-the-loop interaction patterns',
        description:
          'AI assists are designed as proposals. Confidence and citations surface inline; an explicit reviewer step gates clinical, coding, or care-management decisions. Nothing is auto-signed on behalf of a clinician.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for sensitive workloads',
        description:
          'Hosted on cloud regions and configurations commonly used for healthcare workloads, with private endpoints, infrastructure defined and reviewed via Terraform, and environment promotion gates your team can sign.',
      },
    ],
    auditNote:
      'Every component is engineered with PHI segmentation, audit-trail logging, role-scoped access, lineage tracking, and lifecycle artifacts your informatics, compliance, and (where applicable) regulatory reviewers can use as inputs into their own validation work. Final clinical decisions, validation execution, and any regulatory pathway (e.g., FDA SaMD classification, 510(k), De Novo, or PMA submissions) remain solely the customer’s responsibility, executed by the customer’s clinical and regulatory functions. AIvanceWorks does not provide medical advice, does not act as a clinician, and does not represent, attest, or warrant compliance with any regulatory framework on behalf of any customer.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'AI That Helps the Clinician, Not Replaces Them',
      description:
        'Ambient capture, grounded knowledge, and decision-support interfaces are engineered as proposals routed through the clinician — never as autonomous clinical action.',
      image: {
        src: '/images/solutions/ai-healthcare/feature-1.jpg',
        alt: 'Physician using a digital tablet at the bedside while reviewing patient information',
      },
    },
    {
      heading: 'PHI, Audit, and Lifecycle Engineered In',
      description:
        'Patient data is segmented and scoped at the application layer, every assist is recorded in the audit trail, and model lifecycle artifacts are delivered with the build.',
      image: {
        src: '/images/solutions/ai-healthcare/feature-2.jpg',
        alt: 'Healthcare data analyst reviewing operational dashboards in a hospital environment',
      },
    },
  ],

  relatedPages: [
    {
      title: 'EHR Development',
      description:
        'Healthcare AI is only useful if it lands inside the system of record your clinicians actually work in. Our EHR engagement builds the underlying clinical platform your AI assists sit on top of.',
      href: '/solutions/ehr-development',
      icon: 'HeartPulse',
      pageType: 'solution',
    },
    {
      title: 'AI Strategy & Consulting',
      description:
        'Not sure which AI use cases to lead with inside your hospital or payor organization? Our strategy practice prioritizes high-ROI clinical, RCM, and operational use cases against your data and risk reality.',
      href: '/services/ai-strategy-consulting',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'AI inside a healthcare workflow lives or dies inside the audit trail. Our security & compliance practice helps shape your stack with HIPAA-aware engineering, audit logging, and lifecycle controls your compliance reviewers can stand behind.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Does AIvanceWorks make clinical decisions or replace clinicians?',
      answer:
        'No. We are a software engineering partner. Every AI assist we build is designed as a proposal: it surfaces confidence and citations, routes through a human reviewer, and is recorded in the audit trail. The clinician makes the clinical decision and signs the record. AIvanceWorks does not provide medical advice, does not act as a clinician, and does not assume clinical responsibility for any patient outcome.',
    },
    {
      question:
        'How do you handle PHI in clinical and RCM AI workflows?',
      answer:
        'PHI is tokenized at the application gateway, segmented by sensitivity, and access-scoped by role. Training and evaluation pipelines use de-identified or synthetic data wherever the underlying work allows; PHI is kept out of the model layer by default. Every action is logged with actor, model version, prompt, response, and disposition so your informatics and compliance reviewers can trace activity through the platform. These engineering practices are aligned with what regulated healthcare environments typically expect, but we make no compliance certifications on your behalf.',
    },
    {
      question:
        'How does this fit alongside our existing EHR, RCM, and data systems?',
      answer:
        'We build software designed to coexist with the clinical, RCM, scheduling, and data platforms you already run — using HL7 FHIR R4, SMART on FHIR, X12, and documented APIs. Your IT and integration teams own the actual connections into your validated systems. We do not claim partnerships, certifications, or pre-built integrations with any third-party EHR or RCM vendor.',
    },
    {
      question:
        'What about FDA SaMD considerations for decision-support or imaging software?',
      answer:
        'We do not classify, submit, or seek clearance for medical devices on behalf of customers. What we build is custom AI and ML software for clinical, RCM, and care-management workflows — decision-support interfaces, imaging review tooling, and analytics — engineered transparently with explainability hooks, confidence reporting, and clinician-in-the-loop patterns. Final device classification, regulatory pathway, and any FDA interaction are owned and executed by your regulatory function. Our engineering practice is informed by published guidance on responsible ML lifecycles, including FDA GMLP principles; the regulatory determinations are yours.',
    },
    {
      question:
        'How do you address hallucination, bias, and black-box risk for clinical work?',
      answer:
        'Generative and ML pipelines are grounded in retrieval over your verified internal sources — formularies, protocols, policies, and approved literature — and return citations alongside answers. Decision-support and diagnostic-adjacent software ships with explainability hooks, confidence reporting, and clinician-in-the-loop patterns. Every model has a documented lifecycle (model card, training data lineage, evaluation results, change history) that your reviewers can read. Bias evaluations and drift monitoring are designed in; remediation decisions belong to your clinical, informatics, and compliance leadership.',
    },
    {
      question:
        'What does a typical healthcare AI engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by program and are defined during discovery — we do not quote fixed durations or fixed clinical outcomes on a public page. Discovery is where we map your clinical or RCM workflows, audit data readiness, frame clinical risk, and shape the engineering and integration plan before any production-bound code is written. After discovery, the build is typically phased so the highest-priority capability goes live first and your team can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Bringing AI inside a regulated healthcare workflow?',
    description:
      'Book a free 30-minute discovery call. We will review your software needs across clinical, RCM, or care-management workflows, talk through the engineering, PHI, and integration shape, and outline a realistic scope. Clinical and regulatory pathway decisions remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the care-pathway map', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing with explicit customer-ownership of clinical decisions, validation, submission, and regulatory outcomes. Legal review recommended before publish to confirm liability framing.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No vendor names (EHR, ambient, payor, RCM) retained anywhere on the page. Verify by grep before publish.',
  ],
};

export default aiHealthcare;
