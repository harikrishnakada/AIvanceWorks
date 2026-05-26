import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Healthcare)
// Buyer: CIO, VP of Clinical Informatics, CMIO at mid-size health systems (50–500 beds)
// Dominant question: "Can this integrate across our care network without disrupting clinician workflows?"
// Signature: ClinicalWorkflowOrchestratorEhr — multi-facility swim-lane orchestration
//
// Differentiation from EMR sibling page:
//   - ONC uses "EHR" as the cross-care-setting term — longitudinal, multi-provider, multi-facility
//   - Emphasizes TEFCA / QHIN participation, HIE exchange, ONC Health IT Module certification
//   - USCDI v3 (current 2026 baseline; USCDI v4 was withdrawn from HTI-2 on Dec 29, 2025)
//   - FHIR R4 is the dominant standard (Epic, Oracle Health don't support R5)
//   - Care continuum + population health + inpatient + outpatient scope
//
// Composition follows the existing healthcare Archetype C pattern (same as Patient Portals,
// LIMS, Hospital Management Systems). No CaseStudySpotlight — greenfield; insertable when verified.

const ehrDevelopment: SolutionPageData = {
  slug: 'ehr-development',
  title: 'Custom EHR Development',
  shortDescription:
    'Custom, HIPAA-compliant Electronic Health Record platforms built on Azure — designed for health systems that need to exchange data across facilities, specialists, labs, and HIEs through FHIR R4 and TEFCA-ready interoperability.',

  metaTitle: 'Custom EHR Development | HIPAA-Compliant Electronic Health Records',
  metaDescription:
    'We build custom EHR systems for health systems and multi-facility care networks with FHIR R4, TEFCA/HIE participation, ONC Health IT certification readiness, and clinician-centered workflows.',
  keywords: [
    'custom EHR development',
    'EHR software development company',
    'HIPAA compliant EHR',
    'electronic health records development',
    'ONC certified EHR',
    'FHIR EHR development',
    'TEFCA EHR integration',
    'health system EHR',
    'multi-facility EHR platform',
    'EHR integration services',
    'longitudinal patient record system',
    'healthcare interoperability solutions',
  ],
  canonicalPath: '/solutions/ehr-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'EHR Development', href: '/solutions/ehr-development' },
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
  signatureComponent: 'ClinicalWorkflowOrchestratorEhr',

  hero: {
    badge: 'Healthcare Solutions',
    headline: 'Enterprise EHR built for how your care network actually coordinates.',
    subhead:
      'A longitudinal Electronic Health Record platform that exchanges data across facilities, specialists, labs, pharmacies, and Health Information Exchanges — built on FHIR R4, aligned with ONC Health IT certification criteria, and TEFCA-ready out of the gate.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the clinical workflow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/ehr-development/hero.jpg',
      alt: 'Multi-disciplinary care team reviewing a longitudinal patient record across a hospital and specialty clinic',
    },
    metrics: [
      {
        value: 'FHIR R4',
        label: 'The standard health systems run on',
        description: 'US Core, SMART on FHIR, USCDI v3',
      },
      {
        value: 'TEFCA-ready',
        label: 'Built for nationwide exchange',
        description: 'QHIN-participant architecture from day one',
      },
      {
        value: 'ONC-aligned',
        label: 'Certification criteria by design',
        description: 'HTI-1 final rule + USCDI v3 baseline',
      },
    ],
  },

  // Audience test: CIO evaluating an EHR platform thinks in standards, certification, network reach,
  // and clinical adoption — not click-through rates. All four metrics are capability-framed.
  metricsStrip: [
    {
      value: 'FHIR R4 Native',
      label: 'The Standard Health Systems Run On',
      description:
        'Built on HL7 FHIR R4 — the version mandated by the 21st Century Cures Act and supported by every major EHR vendor. US Core, SMART on FHIR, USCDI v3 conformant.',
    },
    {
      value: 'TEFCA + HIE Participant',
      label: 'Nationwide Exchange, Day One',
      description:
        'Architected for participation in TEFCA via designated QHINs and regional HIEs — community record query, ADT notifications, and cross-organization document sharing without bolt-on middleware.',
    },
    {
      value: 'ONC HTI-1 Aligned',
      label: 'Certification Criteria by Design',
      description:
        'Every module designed against ONC Health IT certification criteria — algorithm transparency, real-world testing, electronic case reporting, and patient access APIs.',
    },
    {
      value: 'Multi-Facility Modular',
      label: 'Phase by Department, Not Big Bang',
      description:
        'Roll out inpatient, ambulatory, and specialty modules one facility at a time. Shared data model, shared identity, no rebuild between phases.',
    },
  ],

  // Audience test: CIO/CMIO thinks in clinical capabilities and network reach, not engineering patterns.
  // Each card maps to a multi-facility, multi-provider scope.
  features: [
    {
      icon: 'FileHeart',
      title: 'Longitudinal Patient Record',
      description:
        'A unified patient record assembled from every encounter — primary care, specialty, hospital, lab, pharmacy, imaging — with version history, source attribution, and reconciliation workflows for conflicting data from external sources.',
    },
    {
      icon: 'Stethoscope',
      title: 'CPOE with Clinical Decision Support',
      description:
        'Computerized Provider Order Entry with built-in CDS hooks — drug interaction checks, allergy alerts, duplicate-order detection, and evidence-based order sets. Orders route to lab, pharmacy, and imaging via HL7 v2 and FHIR R4.',
    },
    {
      icon: 'ArrowLeftRight',
      title: 'TEFCA, HIE & Cross-Organization Exchange',
      description:
        'Query community records via TEFCA QHIN connections and regional HIEs. Send and receive ADT notifications, consolidated CCDA summaries, and IHE XDS.b document sharing across organizations and care settings.',
    },
    {
      icon: 'TestTube',
      title: 'Bi-Directional Lab & Diagnostics',
      description:
        'Two-way interfaces to LIS, reference labs (Quest, LabCorp, regional), and PACS via HL7 v2 ORM/ORU and FHIR DiagnosticReport. Auto-filing of discrete results, abnormal value flagging, and trend visualization at the chart.',
    },
    {
      icon: 'Pill',
      title: 'Inpatient & Outpatient Pharmacy',
      description:
        'e-Prescribing via Surescripts (NCPDP SCRIPT), medication reconciliation, formulary and benefit checking, EPCS for controlled substances, and barcode-verified medication administration (BCMA) for inpatient care.',
    },
    {
      icon: 'BarChart3',
      title: 'Population Health & eCQM Reporting',
      description:
        'Clinical Quality Measure reporting (eCQMs), population health cohorts, value-based care dashboards, and exportable bulk FHIR datasets — for CMS reporting, payer contracts, and registry submissions.',
    },
  ],

  benefits: [
    {
      icon: 'Network',
      title: 'A Care Network, Not a Silo',
      description:
        'TEFCA and HIE participation, FHIR R4 APIs, and SMART on FHIR app endpoints mean every clinician sees the same patient — across departments, facilities, and unaffiliated providers. No more faxed records, no more duplicate workups.',
    },
    {
      icon: 'HeartPulse',
      title: 'Better Outcomes at Point of Care',
      description:
        'Clinical decision support surfaces drug interactions, allergy alerts, and evidence-based recommendations at the moment of ordering. Closed-loop medication administration and structured handoff tools reduce medical errors across shift changes.',
    },
    {
      icon: 'Shield',
      title: 'ONC-Aligned and Audit-Ready',
      description:
        'Every module designed against ONC Health IT certification criteria under the HTI-1 final rule, with HIPAA technical safeguards and HITECH breach-notification readiness as structural defaults. Audit trails and access controls are architecture, not afterthought.',
    },
    {
      icon: 'Layers',
      title: 'Standards-First Interoperability',
      description:
        'US Core profiles, USCDI v3 data classes, and SMART on FHIR app endpoints are first-class — not bolted on. HL7 v2 bridges handle legacy interfaces where they still exist. No proprietary lock-in, no vendor tax on connectivity.',
    },
    {
      icon: 'Building2',
      title: 'Predictable Total Cost of Ownership',
      description:
        'A custom-built EHR eliminates per-provider licensing fees that scale with headcount. Azure hosting with Infrastructure-as-Code keeps environment costs predictable, and modular architecture means each facility activates only what it needs.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Multi-Facility Workflow Analysis',
      description:
        'We observe and map clinical workflows across every care setting — inpatient, ambulatory, specialty — interview care teams and informatics leads, audit existing systems and integration points, and identify HIPAA risk areas and ONC certification gaps.',
      duration: '3–4 weeks',
      deliverable: 'Cross-facility workflow maps, integration inventory, compliance gap report, certification readiness assessment',
    },
    {
      title: 'Architecture, FHIR Mapping & Compliance Planning',
      description:
        'System architecture designed around your workflow maps — multi-tenant data model, US Core FHIR resource mapping, USCDI v3 data class alignment, identity and access control across facilities, and TEFCA/QHIN participation plan.',
      duration: '3–4 weeks',
      deliverable: 'Architecture document, FHIR resource mapping, USCDI v3 conformance plan, security architecture, ONC certification roadmap',
    },
    {
      title: 'Core Clinical Module Development',
      description:
        'Full-stack development of priority modules — longitudinal record, CPOE, documentation, lab/pharmacy integration — using React/Next.js and .NET on Azure. Bi-weekly demos with clinical and informatics stakeholders.',
      duration: '12–18 weeks',
      deliverable: 'Functional core modules with unit and integration test coverage, HIPAA-compliant CI/CD pipeline',
    },
    {
      title: 'Network Integration, Testing & Certification Prep',
      description:
        'Connect to lab, pharmacy, radiology, reference EHRs, HIEs, and TEFCA QHIN endpoints. End-to-end testing, penetration testing, HIPAA safeguard validation, and ONC Health IT Module certification preparation.',
      duration: '6–8 weeks',
      deliverable: 'Integration documentation, security test report, HIPAA safeguard checklist, ONC certification submission package',
    },
    {
      title: 'Phased Rollout, Training & Hypercare',
      description:
        'Rollout by department and facility with role-based training, data migration validation per cohort, and a dedicated hypercare period. We monitor adoption, system performance, and clinician feedback against pre-defined success metrics.',
      duration: '4–8 weeks',
      deliverable: 'Production deployment, training materials, monitoring dashboards, hypercare runbook with adoption metrics',
    },
  ],

  capabilities: [
    'HIPAA-compliant data storage and transmission',
    'HL7 FHIR R4 / US Core / USCDI v3 conformance',
    'SMART on FHIR app endpoints',
    'TEFCA / QHIN-ready architecture',
    'ONC Health IT Module certification readiness (HTI-1)',
    'Clinical decision support (CDS Hooks) rules engine',
    'e-Prescribing via Surescripts incl. EPCS',
    'Barcode-verified medication administration (BCMA)',
    'Role-based access control across facilities',
    'Multi-factor authentication (MFA)',
    'Audit logging and compliance reporting',
    'ADA/WCAG 2.1 AA accessibility compliance',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure App Service',
    'Microsoft Entra ID / Azure AD B2C',
    'Azure Key Vault',
    'SQL Server / Azure SQL Database',
    'Azure Blob Storage (PHI-encrypted)',
    'HL7 FHIR R4 / US Core / HL7 v2',
    'SMART on FHIR / CDS Hooks',
    'Surescripts (NCPDP SCRIPT, EPCS)',
    'Azure Application Insights',
    'Terraform (IaC)',
    'Azure Service Bus',
    'IHE XDS.b / CCDA',
  ],

  integrations: [
    {
      name: 'Epic',
      category: 'EHR',
      connectionMethod: 'SMART on FHIR / FHIR R4 (US Core)',
      capabilities: [
        'Bi-directional clinical data sync',
        'Real-time patient context (SMART launch)',
        'Care plan, problem list, and medication exchange',
      ],
    },
    {
      name: 'Oracle Health (Cerner)',
      category: 'EHR',
      connectionMethod: 'SMART on FHIR / FHIR R4 (US Core)',
      capabilities: [
        'Patient demographics and history',
        'Order and result exchange',
        'Document sharing via CCDA',
      ],
    },
    {
      name: 'TEFCA QHINs',
      category: 'HIE / Network',
      connectionMethod: 'TEFCA Common Agreement / FHIR R4',
      capabilities: [
        'Nationwide community record query',
        'Cross-organization document retrieval',
        'Compliant with TEFCA exchange purposes',
      ],
    },
    {
      name: 'Regional HIEs',
      category: 'HIE',
      connectionMethod: 'IHE XDS.b / FHIR R4',
      capabilities: [
        'Community health record query',
        'Admission/discharge/transfer notifications',
        'Cross-organization document sharing',
      ],
    },
    {
      name: 'Surescripts',
      category: 'e-Prescribing',
      connectionMethod: 'NCPDP SCRIPT + REST',
      capabilities: [
        'e-Prescribe routing to pharmacies (incl. EPCS)',
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
  ],

  complianceSpotlight: {
    eyebrow: 'Trust by default',
    title: 'HIPAA-Compliant, ONC-Aligned, TEFCA-Ready',
    highlightText: 'HIPAA-Compliant, ONC-Aligned, TEFCA-Ready',
    statusText: 'HIPAA · HITECH · ONC HTI-1 · TEFCA · SOC 2',
    pillars: [
      {
        icon: 'Shield',
        title: 'Data Encryption',
        description:
          'AES-256 at rest, TLS 1.3 in transit. All PHI encrypted end-to-end with keys managed through Azure Key Vault with automated rotation.',
      },
      {
        icon: 'Lock',
        title: 'Access Controls',
        description:
          'Role-based access with MFA, session management, and complete audit trails. Every clinical data access logged across facilities and roles.',
      },
      {
        icon: 'Eye',
        title: 'Audit & Certification',
        description:
          'Continuous compliance monitoring, automated audit reporting, and architecture aligned with ONC Health IT certification criteria under the HTI-1 final rule.',
      },
    ],
    badges: [
      'HIPAA',
      'HITECH',
      'SOC 2 Type II',
      'HL7 FHIR R4',
      'ONC HTI-1',
      'USCDI v3',
      'TEFCA-Ready',
      '21 CFR Part 11',
    ],
  },

  complianceDetail: {
    frameworks: ['HIPAA', 'HITECH', 'SOC 2 Type II', 'ONC Health IT (HTI-1)', 'TEFCA Common Agreement', '21 CFR Part 11'],
    safeguards: [
      {
        icon: 'Lock',
        title: 'Encryption at rest & in transit',
        description:
          'AES-256 for stored PHI, TLS 1.3 for all network traffic. Encryption keys managed via Azure Key Vault with automated rotation policies and HSM-backed options for higher-sensitivity tenants.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & access across facilities',
        description:
          'Microsoft Entra ID with enforced MFA for all user accounts, federation with hospital identity providers, role-based access scoped per facility and department, least-privilege defaults across every module.',
      },
      {
        icon: 'FileText',
        title: 'Comprehensive audit logging',
        description:
          'Every clinical data access, modification, export, and inter-organization exchange logged with timestamp, actor, resource, and outcome. Retained per HIPAA requirements and exportable for OCR review, ONC certification audit, or SOC 2 assessment.',
      },
      {
        icon: 'Shield',
        title: 'PHI segmentation & tokenization',
        description:
          'Patient data segmented by sensitivity (e.g., 42 CFR Part 2 behavioral health, HIV, genetic) and tokenized at the application gateway. No PHI cached in the presentation layer, reducing breach surface area.',
      },
      {
        icon: 'Activity',
        title: 'Consent management & exchange policy enforcement',
        description:
          'Patient consent captured per data class and per exchange purpose (treatment, payment, operations, individual access). Enforced at the FHIR API boundary so TEFCA and HIE queries return only what consent permits.',
      },
      {
        icon: 'Building2',
        title: 'HIPAA-eligible Azure infrastructure',
        description:
          'Hosted in HIPAA-eligible Azure regions with private endpoints for network isolation, automated failover, and infrastructure defined and audited via Terraform. Configured against the Azure Security Benchmark.',
      },
    ],
    auditNote:
      'Every module is architected to meet HIPAA technical safeguard requirements and align with ONC Health IT certification criteria under the HTI-1 final rule. We provide documentation, audit trails, and security control matrices suitable for OCR review, SOC 2 attestation, or ONC certification submission. TEFCA QHIN/Participant onboarding readiness materials are produced as part of the network integration phase.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'One Patient, One Record, Every Setting',
      description:
        'Clinicians across primary care, specialty clinics, and the hospital see the same patient — same problem list, same medications, same prior results. The longitudinal record reconciles data from external sources and TEFCA queries so nothing falls between systems.',
      image: {
        src: '/images/solutions/ehr-development/feature-1.jpg',
        alt: 'Care coordinator reviewing a longitudinal patient record spanning primary care, specialist, and hospital encounters',
      },
    },
    {
      heading: 'Decision Support at the Moment It Matters',
      description:
        'Drug interactions, allergy alerts, and evidence-based order sets surface inside the order entry flow — when a different choice can still change the outcome. CDS Hooks let you plug in clinical content from external sources without a custom integration.',
      image: {
        src: '/images/solutions/ehr-development/feature-2.jpg',
        alt: 'Physician reviewing a clinical decision support alert during order entry on a workstation',
      },
    },
  ],

  relatedPages: [
    {
      title: 'EMR Software Development',
      description:
        'Single practice or small specialty group? An ambulatory EMR may be the right starting point. Same compliance posture, lighter scope, faster rollout — focused on charting, scheduling, and billing inside one clinic.',
      href: '/solutions/emr-development',
      icon: 'ClipboardList',
      pageType: 'solution',
    },
    {
      title: 'C10 AI Healthcare',
      description:
        'EHR platform in place and your CMIO is asking what AI to layer next? Our healthcare AI engagement adds ambient documentation, grounded decision-support, and RCM copilots — clinician-in-the-loop and inside the audit trail your EHR already enforces.',
      href: '/solutions/ai-healthcare',
      icon: 'Stethoscope',
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
      question: 'What is the difference between an EHR and an EMR, and which do we need?',
      answer:
        'The terms are often used interchangeably, but the Office of the National Coordinator for Health Information Technology (ONC) draws a clear distinction. An EMR is a digital chart confined to a single practice — it replaces paper. An EHR is built to share information across the care continuum — multiple providers, facilities, labs, pharmacies, and Health Information Exchanges. If your goal is exchanging data across facilities, participating in TEFCA, or supporting a multi-specialty network, you want an EHR. If your goal is faster charting and billing inside a single clinic, our EMR engagement is the better starting point.',
    },
    {
      question: 'How do you ensure the EHR is HIPAA compliant and ONC-aligned?',
      answer:
        'Compliance is structural, not a checklist applied after the build. We implement HIPAA technical safeguards from the first sprint: AES-256 encryption at rest and in transit, role-based access control, MFA, comprehensive audit logging, and automatic session management. The architecture aligns with ONC Health IT certification criteria under the HTI-1 final rule — including FHIR R4 API endpoints, US Core / USCDI v3 conformance, CDS Hooks, real-world testing readiness, and patient access APIs. Before launch we conduct a formal security assessment and produce documentation suitable for OCR review, SOC 2 attestation, or ONC Health IT Module certification submission.',
    },
    {
      question: 'Can the EHR participate in TEFCA and connect to regional HIEs?',
      answer:
        'Yes. The platform is architected for TEFCA participation as either a Participant or Subparticipant of a designated Qualified Health Information Network (QHIN), with USCDI v3 data class conformance, the exchange purposes defined by the Common Agreement, and the consent management to enforce them. We also build connections to regional HIEs via IHE XDS.b for document sharing and FHIR R4 for query-based exchange. The QHIN designation process itself is run by the entity that holds the network agreement; our role is to deliver an EHR that satisfies the technical and operational requirements.',
    },
    {
      question: 'Can the EHR integrate with our existing clinical systems?',
      answer:
        'Yes. We build integrations with all major clinical system types — reference EHR platforms (Epic, Oracle Health/Cerner, Athena, MEDITECH), laboratory information systems, pharmacy and e-prescribing networks (Surescripts, including EPCS), radiology/PACS, and HIE/TEFCA QHIN endpoints. We use FHIR R4 with US Core profiles and SMART on FHIR where available, with HL7 v2 messaging bridges for legacy interfaces. If your systems have limited API access, we build a secure middleware layer to bridge the gap without requiring changes to your existing infrastructure.',
    },
    {
      question: 'How do you handle data migration from our current EHR or paper records?',
      answer:
        'Data migration is planned from discovery onward. We map your current data model to the target FHIR resource schema and USCDI v3 data classes, build automated extraction and transformation pipelines, and run validation cycles to ensure clinical data integrity. Migration runs in stages — demographics and scheduling first, then clinical history, then active orders and medications — with reconciliation checks at each stage. We never do a single "big bang" cutover. For paper records, we build structured intake workflows so digitized documents land in the FHIR resource model with proper attribution and indexing.',
    },
    {
      question: 'Can we start with a few modules or one facility and expand later?',
      answer:
        'The platform is designed for exactly that. Modular architecture means you can launch with priority modules — longitudinal record, documentation, CPOE — in one facility or department, then add pharmacy, lab, scheduling, population health, and patient portal connectivity as your organization is ready. Each module shares the same data model, identity layer, and security boundary, so expansion is additive — not a rebuild. We also support phased facility rollouts where the first site goes live, learnings inform the next, and the platform scales without re-architecture.',
    },
  ],

  cta: {
    title: 'Ready to Build Your Health System Platform?',
    description:
      'Book a free 30-minute discovery call. We will review your clinical workflows, certification goals, integration landscape, and TEFCA/HIE participation plans, then outline a realistic scope for your EHR build.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the clinical workflow', href: '#signature' },
  },

  _unverified: [
    'complianceSpotlight.badges — "SOC 2 Type II" listed; confirm whether company has SOC 2 Type II attestation or is in progress.',
    'complianceSpotlight.badges / complianceDetail.frameworks — "ONC HTI-1" and "TEFCA-Ready" listed; ONC certification is product-specific (Health IT Module), and TEFCA participation requires a separate QHIN/Participant agreement. Confirm framing.',
    'complianceDetail.safeguards[5] — HIPAA-eligible Azure regions and failover claims reflect Azure capability; confirm deployment architecture matches.',
    'integrations[*].capabilities — listed capabilities are typical FHIR R4 / HL7 integration features; confirm which have actually been built.',
    'metricsStrip / hero — "USCDI v3" cited as 2026 baseline per ONC; verify against current ONC guidance at publish time (HTI-2 USCDI v4 update was withdrawn Dec 29, 2025).',
  ],
};

export default ehrDevelopment;
