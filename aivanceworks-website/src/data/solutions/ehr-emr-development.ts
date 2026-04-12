import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Healthcare)
// Buyer: CIO, VP of Clinical Informatics, CMIO at mid-size health systems (50–500 beds)
// Dominant question: "Can this integrate with our clinical systems without disrupting workflows?"
// Signature: ClinicalWorkflowOrchestrator — swim-lane process flow showing data orchestration across a patient encounter
//
// Composition follows Patient Portals reference (same industry, same archetype).
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no real EHR case data yet. Insertable when verified.
//   - ComplianceSpotlight added before signature as trust gate (same rationale as Patient Portals).
//   - ComplianceDeepDive elevated to standalone after signature (compliance is the gate for this buyer).
//   - ImageFeatures added after FeatureGrid — per two-track imagery strategy (v1.1).
//   - ONC Health IT certification readiness added to compliance framing (EHR-specific, not in Patient Portals).

const ehrEmrDevelopment: SolutionPageData = {
  slug: 'ehr-emr-development',
  title: 'Custom EHR & EMR Development',
  shortDescription:
    'Custom, HIPAA-compliant electronic health record systems built on Azure — interoperable via FHIR R4, designed around clinical workflows, and audit-ready from day one.',

  metaTitle: 'Custom EHR & EMR Development | HIPAA-Compliant Healthcare Software',
  metaDescription:
    'We build custom EHR and EMR systems with FHIR R4 interoperability, clinical decision support, CPOE, and HIPAA compliance. Clinician-centered design for real-world adoption.',
  keywords: [
    'custom EHR development',
    'EMR software development',
    'HIPAA compliant EHR',
    'electronic health records development',
    'custom EMR system',
    'EHR development company',
    'healthcare software development',
    'FHIR compliant EHR',
    'clinical workflow software',
    'EHR integration services',
    'ONC certified EHR',
    'healthcare interoperability solutions',
  ],
  canonicalPath: '/solutions/ehr-emr-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'EHR & EMR Development', href: '/solutions/ehr-emr-development' },
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

  industry: 'healthcare',
  signatureComponent: 'ClinicalWorkflowOrchestrator',

  hero: {
    badge: 'Healthcare Solutions',
    headline: 'Custom EHR & EMR systems built for how clinicians actually work.',
    subhead:
      'HIPAA-compliant electronic health record platforms built on Azure with FHIR R4 interoperability, clinical decision support, and workflows designed around the way your care teams deliver care — not the other way around.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the clinical workflow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/ehr-emr-development/hero.jpg',
      alt: 'Physician reviewing electronic health records on a workstation in a clinical setting',
    },
    metrics: [
      {
        value: 'FHIR R4',
        label: 'Standards-first interop',
        description: 'HL7 FHIR, SMART on FHIR, CDA/CCDA',
      },
      {
        value: 'HIPAA',
        label: 'Compliant by design',
        description: 'Audit-ready from day one',
      },
      {
        value: 'Modular',
        label: 'Build what you need',
        description: 'Core first, expand over time',
      },
    ],
  },

  // Audience test: CIO evaluating an EHR platform needs to see capability breadth,
  // compliance posture, interoperability, and modularity — all without fabricated percentages.
  // All four metrics are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'FHIR R4 Native',
      label: 'Standards-First Interoperability',
      description:
        'Built on HL7 FHIR R4 for seamless data exchange across your clinical ecosystem — Epic, Cerner, Athena, and beyond.',
    },
    {
      value: 'HIPAA + ONC',
      label: 'Compliance by Design',
      description:
        'Architected for HIPAA technical safeguards and ONC Health IT certification readiness from the first sprint.',
    },
    {
      value: 'Clinician-Centered',
      label: 'Workflow-First Design',
      description:
        'Every screen designed around clinical workflows — charting, ordering, reviewing — not database schemas.',
    },
    {
      value: 'Modular',
      label: 'Deploy What You Need',
      description:
        'Start with core clinical modules and expand as your organization grows. No all-or-nothing rollout.',
    },
  ],

  // Audience test: CIO/CMIO thinks in clinical modules, not technical features.
  // Each card maps to an operational need, not an engineering pattern.
  features: [
    {
      icon: 'ClipboardList',
      title: 'Clinical Documentation & Charting',
      description:
        'Structured and free-text clinical documentation with specialty-specific templates, voice-to-text support, and auto-population from prior visits. Designed to reduce charting burden without sacrificing clinical detail.',
    },
    {
      icon: 'Stethoscope',
      title: 'Computerized Physician Order Entry',
      description:
        'CPOE with built-in clinical decision support — drug interaction checks, allergy alerts, and evidence-based order sets. Orders route directly to lab, pharmacy, and radiology systems via HL7/FHIR.',
    },
    {
      icon: 'TestTube',
      title: 'Lab & Diagnostic Management',
      description:
        'Bi-directional lab interfaces with automatic result filing, abnormal value flagging, and trend visualization. Integrates with LIS platforms via HL7 v2 and FHIR R4.',
    },
    {
      icon: 'Pill',
      title: 'Pharmacy & Medication Management',
      description:
        'e-Prescribing via Surescripts, medication reconciliation workflows, formulary checking, and barcode-verified medication administration (BCMA) support for inpatient settings.',
    },
    {
      icon: 'CalendarCheck',
      title: 'Scheduling & Resource Management',
      description:
        'Multi-provider scheduling with real-time availability, room and equipment booking, waitlist management, and automated patient reminders via SMS and email.',
    },
    {
      icon: 'BarChart3',
      title: 'Analytics, Reporting & Population Health',
      description:
        'Clinical dashboards, quality measure reporting (eCQMs), population health analytics, and exportable datasets for value-based care programs and regulatory submissions.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Streamlined Clinical Workflows',
      description:
        'Purpose-built interfaces reduce clicks per encounter and eliminate redundant data entry. Clinicians document, order, and review within a single unified workflow rather than switching between siloed tools.',
    },
    {
      icon: 'HeartPulse',
      title: 'Better Patient Outcomes',
      description:
        'Clinical decision support surfaces drug interactions, allergy alerts, and evidence-based recommendations at point of care. Closed-loop medication administration and structured handoff tools reduce medical errors.',
    },
    {
      icon: 'Shield',
      title: 'Full Regulatory Compliance',
      description:
        'Every module is architected for HIPAA technical safeguards, HITECH breach notification readiness, and ONC Health IT certification criteria. Audit trails and access controls are structural, not bolted on.',
    },
    {
      icon: 'ArrowLeftRight',
      title: 'Interoperability Without Compromise',
      description:
        'FHIR R4 and SMART on FHIR APIs enable bi-directional data exchange with any standards-compliant system. HL7 v2 bridges handle legacy interfaces. No vendor lock-in, no proprietary formats.',
    },
    {
      icon: 'DollarSign',
      title: 'Lower Total Cost of Ownership',
      description:
        'A custom-built EHR eliminates per-provider licensing fees that scale with headcount. Azure hosting with IaC keeps infrastructure costs predictable, and modular architecture means you pay to build only what you need.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Clinical Workflow Analysis',
      description:
        'We observe and map your clinical workflows, interview care teams across departments, audit your current systems and data flows, and identify HIPAA risk areas — all before a single line of code.',
      duration: '2–3 weeks',
      deliverable: 'Clinical workflow maps, compliance gap report, technical requirements, and project roadmap',
    },
    {
      title: 'System Architecture & Compliance Planning',
      description:
        'We design the system architecture around your workflow maps — data model, FHIR resource mappings, identity and access control, encryption strategy, and ONC certification alignment.',
      duration: '2–3 weeks',
      deliverable: 'Architecture document, FHIR resource mapping, security architecture, compliance checklist',
    },
    {
      title: 'Core Module Development',
      description:
        'Full-stack development of priority clinical modules using React/Next.js and .NET on Azure. Bi-weekly demos with clinical stakeholders ensure the build tracks real-world workflows.',
      duration: '8–14 weeks',
      deliverable: 'Functional core modules with unit and integration test coverage, HIPAA-compliant CI/CD pipeline',
    },
    {
      title: 'Integration, Testing & Certification Prep',
      description:
        'Connect to your lab, pharmacy, radiology, and reference EHR systems via HL7/FHIR. Conduct end-to-end testing, penetration testing, HIPAA safeguard validation, and ONC certification preparation.',
      duration: '4–6 weeks',
      deliverable: 'Integration documentation, security test report, HIPAA safeguard checklist, ONC readiness assessment',
    },
    {
      title: 'Deployment, Training & Go-Live Support',
      description:
        'Phased rollout by department with role-based training, data migration validation, and a dedicated hypercare period. We monitor adoption metrics, system performance, and clinician feedback post-launch.',
      duration: '2–4 weeks',
      deliverable: 'Production deployment, training materials, monitoring dashboards, 30-day hypercare SLA',
    },
  ],

  capabilities: [
    'HIPAA-compliant data storage and transmission',
    'FHIR R4 / HL7 v2 interoperability',
    'ONC Health IT certification readiness',
    'Clinical decision support (CDS) rules engine',
    'e-Prescribing via Surescripts (NCPDP SCRIPT)',
    'Barcode-verified medication administration (BCMA)',
    'Role-based access control (clinicians, nurses, admin, patients)',
    'Multi-factor authentication (MFA)',
    'Audit logging and compliance reporting',
    'ADA/WCAG 2.1 AA accessibility compliance',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure App Service',
    'Azure AD B2C / Entra External ID',
    'Azure Key Vault',
    'SQL Server / Azure SQL Database',
    'Azure Blob Storage (PHI-encrypted)',
    'HL7 FHIR R4 / HL7 v2',
    'Surescripts (e-Prescribing)',
    'Azure Application Insights',
    'Terraform (IaC)',
    'Azure Service Bus',
  ],

  integrations: [
    {
      name: 'Epic',
      category: 'EHR',
      connectionMethod: 'SMART on FHIR / FHIR R4',
      capabilities: [
        'Bi-directional clinical data sync',
        'Real-time patient context',
        'Care plan and problem list exchange',
      ],
    },
    {
      name: 'Cerner / Oracle Health',
      category: 'EHR',
      connectionMethod: 'SMART on FHIR / FHIR R4',
      capabilities: [
        'Patient demographics and history',
        'Order and result exchange',
        'Document sharing (CCDA)',
      ],
    },
    {
      name: 'Laboratory Information Systems',
      category: 'LIS',
      connectionMethod: 'HL7 v2 / FHIR R4',
      capabilities: [
        'Bi-directional order and result interfaces',
        'Abnormal value flagging',
        'Discrete result filing',
      ],
    },
    {
      name: 'Surescripts',
      category: 'e-Prescribing',
      connectionMethod: 'NCPDP SCRIPT + REST',
      capabilities: [
        'e-Prescribe routing to pharmacies',
        'Medication history lookup',
        'Formulary and benefit checking',
      ],
    },
    {
      name: 'Radiology / PACS',
      category: 'Imaging',
      connectionMethod: 'DICOM / HL7 v2 ORM/ORU',
      capabilities: [
        'Order routing to modalities',
        'Report filing and notification',
        'Image link embedding in clinical chart',
      ],
    },
    {
      name: 'Health Information Exchanges',
      category: 'HIE',
      connectionMethod: 'IHE XDS.b / FHIR R4',
      capabilities: [
        'Community health record query',
        'Admission/discharge/transfer notifications',
        'Cross-organization document sharing',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Trust by default',
    title: 'HIPAA-Compliant and ONC-Ready by Design',
    highlightText: 'HIPAA-Compliant and ONC-Ready',
    statusText: 'HIPAA · HITECH · ONC Health IT · SOC 2',
    pillars: [
      {
        icon: 'Shield',
        title: 'Data Encryption',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit. All PHI encrypted end-to-end with keys managed through Azure Key Vault.',
      },
      {
        icon: 'Lock',
        title: 'Access Controls',
        description:
          'Role-based access with MFA, session management, and complete audit trails. Every data access logged and traceable.',
      },
      {
        icon: 'Eye',
        title: 'Audit & Certification',
        description:
          'Continuous compliance monitoring, automated audit reporting, and architecture aligned with ONC Health IT certification criteria.',
      },
    ],
    badges: [
      'HIPAA',
      'HITECH',
      'SOC 2 Type II',
      'HL7 FHIR',
      'ONC Health IT',
      '21 CFR Part 11',
    ],
  },

  complianceDetail: {
    frameworks: ['HIPAA', 'HITECH', 'SOC 2 Type II', 'ONC Health IT Certification', '21 CFR Part 11'],
    safeguards: [
      {
        icon: 'Lock',
        title: 'Encryption at rest & in transit',
        description:
          'AES-256 for stored PHI, TLS 1.3 for all network traffic. Encryption keys managed via Azure Key Vault with automated rotation policies.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & access control',
        description:
          'Azure AD B2C with enforced MFA for all user accounts, role-based access for clinicians, nurses, and administrators, least-privilege defaults across every module.',
      },
      {
        icon: 'FileText',
        title: 'Comprehensive audit logging',
        description:
          'Every clinical data access, modification, and export logged with timestamp, actor, resource, and outcome. Logs retained per HIPAA requirements and exportable for OCR or internal review.',
      },
      {
        icon: 'Shield',
        title: 'PHI segmentation & tokenization',
        description:
          'Patient data is segmented by sensitivity level and tokenized at the application gateway. No PHI cached in the presentation layer, reducing breach surface area.',
      },
      {
        icon: 'Activity',
        title: 'Session management & anomaly detection',
        description:
          'Automatic session timeouts, re-authentication for sensitive actions (e.g., prescribing), and device fingerprinting to flag suspicious access patterns.',
      },
      {
        icon: 'Building2',
        title: 'HIPAA-eligible Azure infrastructure',
        description:
          'Hosted in HIPAA-eligible Azure regions with automated failover, private endpoints for network isolation, and infrastructure defined and audited via Terraform.',
      },
    ],
    auditNote:
      'Every module is architected to meet HIPAA technical safeguard requirements and align with ONC Health IT certification criteria. We provide documentation, audit trails, and security control matrices suitable for OCR review, SOC 2 audit, or ONC certification assessment.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Clinical Documentation Without the Friction',
      description:
        'Clinicians chart directly within the workflow — structured templates, voice-to-text, and auto-populated fields reduce documentation time without sacrificing clinical accuracy.',
      image: {
        src: '/images/solutions/ehr-emr-development/feature-1.jpg',
        alt: 'Physician using a tablet to document patient notes in an exam room',
      },
    },
    {
      heading: 'Real-Time Decision Support at Point of Care',
      description:
        'Drug interactions, allergy alerts, and evidence-based order sets surface at the moment of decision — when they can actually change the outcome.',
      image: {
        src: '/images/solutions/ehr-emr-development/feature-2.jpg',
        alt: 'Care team reviewing clinical alerts and patient data on a workstation display',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Planning an EHR overhaul? A discovery sprint maps your clinical workflows, compliance landscape, and integration requirements before development begins.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Document Management Software',
      description:
        'Clinical documents from your EHR need a management layer that enforces HIPAA retention schedules and produces a complete audit trail. See how we build the DMS that manages what your EHR produces.',
      href: '/solutions/document-management-software',
      icon: 'FolderOpen',
      pageType: 'solution',
    },
    {
      title: 'Hospital Management Systems',
      description:
        'Clinical platform in hand, operations still fragmented? Our HMS engagement wraps billing, bed management, HR, and inventory around your EHR — without replacing what works.',
      href: '/solutions/hospital-management-systems',
      icon: 'Building2',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'How do you ensure the EHR system is HIPAA compliant and ONC-ready?',
      answer:
        'Compliance is structural, not a checklist applied after the build. We implement all HIPAA technical safeguards from the first sprint: AES-256 encryption at rest and in transit, role-based access control, MFA, comprehensive audit logging, and automatic session management. The architecture also aligns with ONC Health IT certification criteria, including FHIR R4 API endpoints, clinical decision support hooks, and standardized data export. Before launch, we conduct a formal security assessment and provide documentation suitable for OCR review or ONC certification submission.',
    },
    {
      question: 'Can the EHR integrate with our existing clinical systems?',
      answer:
        'Yes. We build integrations with all major clinical system types — EHR platforms (Epic, Cerner, Athena), laboratory information systems, pharmacy and e-prescribing networks (Surescripts), radiology/PACS, and health information exchanges. We use FHIR R4 and SMART on FHIR where available, with HL7 v2 messaging bridges for legacy systems. If your systems have limited API access, we build a secure middleware layer to bridge the gap without requiring changes to your existing infrastructure.',
    },
    {
      question: 'What does implementation typically cost and how long does it take?',
      answer:
        'A custom EHR with core clinical modules typically takes 18–30 weeks from kickoff to production, depending on the number of modules, integration complexity, and certification requirements. Investment typically ranges from $200,000 to $750,000 for a full custom build. We offer phased delivery so the highest-priority modules go live first, allowing your clinicians to see value and provide feedback before the full system is complete.',
    },
    {
      question: 'How do you handle data migration from our current system?',
      answer:
        'Data migration is planned from discovery onward. We map your current data model to the target FHIR resource schema, build automated extraction and transformation pipelines, and run validation cycles to ensure clinical data integrity. Migration happens in stages — demographics and scheduling first, then clinical history, then active orders and medications — with reconciliation checks at each stage. We never do a single "big bang" cutover.',
    },
    {
      question: 'Can we start with a few modules and expand later?',
      answer:
        'The system is designed for exactly that. Our modular architecture means you can launch with core modules — clinical documentation, scheduling, and basic ordering — and add pharmacy management, analytics, patient portal connectivity, or population health tools as your organization is ready. Each module shares the same data model and security layer, so expansion is additive, not a rebuild.',
    },
    {
      question: 'How do you ensure clinician adoption and minimize workflow disruption?',
      answer:
        'We start by observing and mapping your current clinical workflows before designing any screens. Every interface is validated with care team stakeholders through interactive prototypes before development begins. We deploy in phased rollouts — one department or module at a time — with role-specific training and a dedicated hypercare period. Post-launch, we monitor usage patterns and iterate based on real clinician feedback, not assumptions.',
    },
  ],

  cta: {
    title: 'Ready to Build Your Clinical Platform?',
    description:
      'Book a free 30-minute discovery call. We will review your clinical workflows, compliance requirements, and integration landscape, then outline a realistic scope and timeline for your EHR project.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the clinical workflow', href: '#signature' },
  },

  _unverified: [
    'complianceSpotlight.badges — "SOC 2 Type II" listed; confirm whether company has SOC 2 Type II attestation or is in progress.',
    'complianceSpotlight.badges — "ONC Health IT" listed as compliance badge; ONC certification is product-specific, not company-level. Confirm framing is accurate.',
    'complianceDetail.frameworks — same SOC 2 / ONC verification as complianceSpotlight.',
    'complianceDetail.safeguards[5] — HIPAA-eligible Azure regions and failover claims reflect Azure capability, not our specific deployment. Confirm deployment architecture matches.',
    'faq[2] — pricing range "$200k–$750k" is an estimate based on project complexity. Confirm with user before publishing.',
    'faq[2] — timeline "18–30 weeks" is an estimate. Confirm against actual planned delivery windows.',
    'integrations[*].capabilities — listed capabilities are typical HL7/FHIR integration features; confirm which we have actually built.',
  ],
};

export default ehrEmrDevelopment;
