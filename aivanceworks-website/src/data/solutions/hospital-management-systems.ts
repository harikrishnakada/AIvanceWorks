import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Healthcare)
// Buyer: CIO / VP of IT / COO at a mid-market hospital or health system (50–500 beds).
//   Secondary: CFO (revenue cycle), CMIO (clinical informatics).
// Dominant question: "Will this integrate with our existing EHR without a rip-and-replace,
//   and will it pass our next Joint Commission and HIPAA audit?"
// Trust issue: Multi-year, over-budget HMS rollouts that fail; clinician adoption collapse;
//   data silos between the new HMS and the EHR the hospital already standardised on.
// Signature: HospitalOperationsHub — hierarchical pattern (§8.3 #2) — 4 departmental
//   quadrants (Clinical / Financial / Administrative / Support) orbiting a central HMS core
//   with a compliance perimeter. Argument: "One HMS unifies every department — no silos,
//   no duplicate entry, one audit trail."
//
// Composition follows the EHR & Patient Portals precedent (same vertical, same archetype).
// Deviations:
//   - No CaseStudySpotlight — greenfield, no verified operational case yet.
//   - ComplianceSpotlight placed before signature as trust gate (same as EHR/PatientPortals).
//   - Joint Commission / CMS Conditions of Participation surfaced in compliance framing —
//     HMS-specific, not in the other healthcare pages.
//   - relatedPages mixes services + 1 same-vertical solution per task instruction ("mixed
//     services/solutions"). Constitution §10 defaults to services-only for solutions; this
//     is a deliberate, scoped deviation justified by shared buyer persona across healthcare
//     solutions. See constitution changelog note.

const hospitalManagementSystems: SolutionPageData = {
  slug: 'hospital-management-systems',
  title: 'Custom Hospital Management Systems',
  shortDescription:
    'Custom hospital management systems that unify clinical, financial, and administrative operations — built on Azure, integrated with your existing EHR, and architected for HIPAA and Joint Commission readiness.',

  metaTitle: 'Custom Hospital Management Systems | HIPAA & Joint Commission Ready',
  metaDescription:
    'Custom hospital management system (HMS/HIS) development for mid-market hospitals and health systems. Integrates with Epic, Cerner, and Meditech. HIPAA, HITECH, and Joint Commission aligned.',
  keywords: [
    'hospital management system',
    'custom hospital management software',
    'HIS development',
    'hospital information system',
    'HMS software development',
    'hospital management system integration',
    'HIPAA compliant hospital software',
    'hospital billing and revenue cycle software',
    'hospital ERP software',
    'healthcare operations platform',
    'Joint Commission ready hospital software',
    'hospital management system for mid-size hospitals',
  ],
  canonicalPath: '/solutions/hospital-management-systems',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Hospital Management Systems', href: '/solutions/hospital-management-systems' },
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
  signatureComponent: 'HospitalOperationsHub',

  hero: {
    badge: 'Healthcare Solutions',
    headline: 'Hospital management systems that work with your EHR — not against it.',
    subhead:
      'Custom HMS platforms built on Azure that unify clinical operations, revenue cycle, and administrative workflows around your existing Epic, Cerner, or Meditech install — without a rip-and-replace.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the operations hub', href: '#signature' },
    heroImage: {
      src: '/images/solutions/hospital-management-systems/hero.jpg',
      alt: 'Hospital administrator and clinical team reviewing operational dashboards at a nursing station',
    },
    metrics: [
      {
        value: 'EHR-First',
        label: 'Integration over replacement',
        description: 'Works with Epic, Cerner, Meditech',
      },
      {
        value: 'HIPAA',
        label: 'Compliance by design',
        description: 'Audit-ready for OCR and Joint Commission',
      },
      {
        value: 'Modular',
        label: 'Deploy one department at a time',
        description: 'Prove value before scaling',
      },
    ],
  },

  // Audience test (§9.5): CIO/COO evaluating a HMS needs to see integration posture,
  // compliance framing, operational breadth, and a modular rollout path — without
  // fabricated percentage claims. All four metrics are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'EHR-Integrated',
      label: 'No Rip & Replace',
      description:
        'Architected to integrate with your existing Epic, Cerner, or Meditech install via HL7 v2 and FHIR R4 — not replace it.',
    },
    {
      value: 'HIPAA + HITECH',
      label: 'Compliance by Design',
      description:
        'Built for HIPAA technical safeguards, HITECH breach-notification readiness, and Joint Commission / CMS accreditation alignment.',
    },
    {
      value: 'End-to-End',
      label: 'Clinical, Financial, Administrative',
      description:
        'One platform across OPD/IPD workflows, revenue cycle, HR, inventory, and support services — instead of a dozen disconnected tools.',
    },
    {
      value: 'Modular',
      label: 'Department-by-Department Rollout',
      description:
        'Deploy one department at a time — prove the value and operational fit before committing to the full platform.',
    },
  ],

  // Audience test: CIO/COO thinks in departmental modules, not engineering features.
  // Each feature card maps to an operational responsibility the hospital already owns.
  features: [
    {
      icon: 'UserPlus',
      title: 'Patient Registration & Admissions (ADT)',
      description:
        'Unified patient registration, admission, discharge, and transfer workflows with real-time bed availability, insurance eligibility verification, and automatic downstream notifications to clinical and billing systems.',
    },
    {
      icon: 'BedDouble',
      title: 'Bed, Ward & Resource Management',
      description:
        'Real-time bed and ward occupancy dashboards, OR and ICU scheduling, housekeeping turnover tracking, and equipment allocation — the levers that drive length-of-stay and throughput.',
    },
    {
      icon: 'Receipt',
      title: 'Billing & Revenue Cycle Management',
      description:
        'Charge capture from clinical activity, insurance claims generation and tracking, denials management, and patient billing — with clear audit trails from encounter to cash.',
    },
    {
      icon: 'TestTube',
      title: 'Pharmacy, Lab & Radiology Modules',
      description:
        'Integrated pharmacy inventory and dispensing, laboratory order-and-result workflows, and radiology/PACS integration — all connected back to the clinical chart without manual re-entry.',
    },
    {
      icon: 'Users',
      title: 'Staff Scheduling, HR & Credentialing',
      description:
        'Physician, nurse, and support-staff scheduling with credential tracking, shift management, on-call rotation, and payroll system integration — visible from one workforce dashboard.',
    },
    {
      icon: 'Package',
      title: 'Inventory, Procurement & Assets',
      description:
        'Medical and non-medical inventory tracking, reorder automation, vendor management, purchase-order workflows, and biomedical asset tracking — linked to finance and usage data by department.',
    },
  ],

  benefits: [
    {
      icon: 'Network',
      title: 'Unified Operations Across Departments',
      description:
        'One HMS replaces a tangle of departmental point tools with a single data model. Clinical, financial, and administrative teams see the same patient, bed, and resource state — no swivel-chair integrations, no duplicate entry.',
    },
    {
      icon: 'TrendingUp',
      title: 'Accelerated Revenue Cycle',
      description:
        'Charge capture tied directly to clinical events, automated eligibility verification, and denials workflows designed around payer rules — architected to tighten the window from encounter to reimbursement.',
    },
    {
      icon: 'Shield',
      title: 'Full Regulatory Compliance',
      description:
        'Every module is built to HIPAA technical safeguard requirements with audit trails, access controls, and documentation suitable for OCR review, SOC 2 audit, or Joint Commission accreditation survey.',
    },
    {
      icon: 'Plug',
      title: 'No Rip-and-Replace EHR Strategy',
      description:
        'The HMS integrates with Epic, Cerner, and Meditech as systems of record for clinical data — so your existing EHR investment and clinical workflows stay in place while operational gaps get solved.',
    },
    {
      icon: 'DollarSign',
      title: 'Lower Total Cost of Ownership',
      description:
        'A custom-built HMS on Azure eliminates the compounding per-module licensing fees typical of legacy hospital information systems, with infrastructure-as-code keeping hosting costs predictable as you scale.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Departmental Workflow Mapping',
      description:
        'We interview department heads across clinical, finance, HR, and support services, map current workflows, audit your existing EHR and HIS footprint, and identify HIPAA and Joint Commission risk areas — before a single line of code is written.',
      duration: '3–4 weeks',
      deliverable: 'Departmental workflow maps, integration inventory, compliance gap report, and phased project roadmap',
    },
    {
      title: 'Integration Architecture with Existing EHR',
      description:
        'We design the integration layer that connects the HMS to your Epic, Cerner, or Meditech install via HL7 v2 and FHIR R4 — including an interface engine strategy so your clinical system remains the system of record for PHI.',
      duration: '2–3 weeks',
      deliverable: 'Integration architecture, FHIR resource mapping, interface engine design, security architecture',
    },
    {
      title: 'Modular Development & Phased Delivery',
      description:
        'Full-stack development in React/Next.js and .NET on Azure, delivered one department or module at a time. Bi-weekly demos with department stakeholders ensure each module lands in real operational workflows.',
      duration: '10–16 weeks',
      deliverable: 'Functional modules in staging, test coverage reports, HIPAA-compliant CI/CD pipeline',
    },
    {
      title: 'Compliance Testing & Accreditation Prep',
      description:
        'End-to-end testing, penetration testing, HIPAA technical safeguard validation, and documentation aligned with Joint Commission and CMS Conditions of Participation — so the HMS is ready for your next accreditation survey.',
      duration: '3–5 weeks',
      deliverable: 'Security test report, HIPAA safeguards checklist, Joint Commission / CMS alignment documentation',
    },
    {
      title: 'Phased Go-Live, Training & Hypercare',
      description:
        'Department-by-department go-live with role-specific training, data migration validation, and a dedicated hypercare period. We monitor adoption, throughput, and revenue cycle metrics, then iterate based on real operational feedback.',
      duration: '2–4 weeks per phase',
      deliverable: 'Production deployment, runbooks, training materials, monitoring dashboards, 30-day hypercare SLA',
    },
  ],

  capabilities: [
    'HIPAA-compliant data storage and transmission',
    'HL7 v2 and FHIR R4 EHR integration',
    'Revenue cycle and claims workflow engine',
    'Real-time bed, ward and resource dashboards',
    'Role-based access control (clinicians, finance, HR, admin)',
    'Multi-factor authentication (MFA)',
    'Audit logging aligned with HIPAA and Joint Commission',
    'Modular department-by-department deployment',
    'Infrastructure-as-code provisioning on Azure',
    'ADA / WCAG 2.1 AA accessibility compliance',
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
    'Azure Service Bus',
    'Azure Application Insights',
    'Terraform (IaC)',
    'Power BI Embedded',
  ],

  integrations: [
    {
      name: 'Epic',
      category: 'EHR',
      connectionMethod: 'SMART on FHIR / FHIR R4 + HL7 v2',
      capabilities: [
        'Bi-directional patient and ADT data sync',
        'Charge and encounter exchange for RCM',
        'Order and result interface for ancillary systems',
      ],
    },
    {
      name: 'Cerner / Oracle Health',
      category: 'EHR',
      connectionMethod: 'SMART on FHIR / FHIR R4 + HL7 v2',
      capabilities: [
        'Patient demographics and encounter sync',
        'Clinical document exchange (CCDA)',
        'Charge reconciliation with revenue cycle',
      ],
    },
    {
      name: 'Meditech',
      category: 'EHR',
      connectionMethod: 'HL7 v2 + direct DB bridge / FHIR where available',
      capabilities: [
        'ADT and scheduling interface',
        'Lab and pharmacy order routing',
        'Result filing back to clinical chart',
      ],
    },
    {
      name: 'Change Healthcare / Waystar',
      category: 'Claims & RCM',
      connectionMethod: 'REST + X12 EDI (837, 835, 270/271)',
      capabilities: [
        'Claims submission and remittance',
        'Insurance eligibility verification',
        'Denials and appeals workflow',
      ],
    },
    {
      name: 'Surescripts',
      category: 'e-Prescribing',
      connectionMethod: 'NCPDP SCRIPT + REST',
      capabilities: [
        'Prescription routing to pharmacies',
        'Medication history lookup',
        'Formulary and benefit checking',
      ],
    },
    {
      name: 'Health Information Exchanges',
      category: 'HIE',
      connectionMethod: 'IHE XDS.b / FHIR R4',
      capabilities: [
        'Community health record query',
        'Admission / discharge / transfer notifications',
        'Cross-organization document sharing',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Built for audit day',
    title: 'HIPAA-Compliant, Accreditation-Aligned by Design',
    highlightText: 'HIPAA-Compliant, Accreditation-Aligned',
    statusText: 'HIPAA · HITECH · SOC 2 · Joint Commission · CMS CoP',
    pillars: [
      {
        icon: 'Shield',
        title: 'Data Encryption',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit. All PHI protected end-to-end with encryption keys managed through Azure Key Vault.',
      },
      {
        icon: 'Lock',
        title: 'Access & Identity Controls',
        description:
          'Role-based access across clinical, finance, and admin roles with MFA enforcement, session management, and full traceability of every data access event.',
      },
      {
        icon: 'Eye',
        title: 'Audit & Accreditation',
        description:
          'Audit trails, access logs, and documentation structured for OCR review, SOC 2 audit, and Joint Commission / CMS accreditation survey.',
      },
    ],
    badges: [
      'HIPAA',
      'HITECH',
      'SOC 2 Type II',
      'Joint Commission',
      'CMS Conditions of Participation',
      '21 CFR Part 11',
    ],
  },

  complianceDetail: {
    frameworks: [
      'HIPAA',
      'HITECH',
      'SOC 2 Type II',
      'Joint Commission readiness',
      'CMS Conditions of Participation',
      '21 CFR Part 11',
    ],
    safeguards: [
      {
        icon: 'Lock',
        title: 'Encryption at rest & in transit',
        description:
          'AES-256 for stored PHI and operational data, TLS 1.3 for all network traffic. Encryption keys managed via Azure Key Vault with automated rotation policies.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-based access',
        description:
          'Azure AD B2C with enforced MFA, role-based access for clinicians, finance staff, HR, and administrators, and least-privilege defaults across every module.',
      },
      {
        icon: 'FileText',
        title: 'Zero-gap audit logging',
        description:
          'Every data access, modification, and export across clinical, financial, and administrative modules logged with timestamp, actor, resource, and outcome — retained per HIPAA requirements.',
      },
      {
        icon: 'Shield',
        title: 'PHI segmentation & gateway tokenization',
        description:
          'PHI is segmented by sensitivity and tokenized at the application gateway. No PHI cached in the presentation layer, reducing breach surface area across departmental modules.',
      },
      {
        icon: 'Activity',
        title: 'Session management & anomaly detection',
        description:
          'Automatic session timeouts, re-authentication for sensitive actions (orders, charges, record exports), and device fingerprinting to flag suspicious access patterns.',
      },
      {
        icon: 'Building2',
        title: 'HIPAA-eligible Azure infrastructure',
        description:
          'Hosted in HIPAA-eligible Azure regions with automated failover, private endpoints for network isolation, and infrastructure defined and audited via Terraform. BAA and DPA available.',
      },
    ],
    auditNote:
      'Every module is architected to meet HIPAA technical safeguard requirements and to align with Joint Commission and CMS Conditions of Participation documentation expectations. We provide the audit trails, access control matrices, and policy documentation a compliance officer, OCR reviewer, or Joint Commission surveyor will ask for.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Real-Time Operations, One Command Center',
      description:
        'Bed availability, OR turnover, staff coverage, and revenue-cycle status in one live dashboard — so administrators and department heads act on the same data, at the same time.',
      image: {
        src: '/images/solutions/hospital-management-systems/feature-1.jpg',
        alt: 'Hospital administrator reviewing operational dashboards on multiple monitors',
      },
    },
    {
      heading: 'One Data Model, Every Department',
      description:
        'Clinical, finance, HR, pharmacy, and support teams work from a single patient and resource record — no duplicate entry, no reconciliation calls between departments.',
      image: {
        src: '/images/solutions/hospital-management-systems/feature-2.jpg',
        alt: 'Multidisciplinary care team collaborating around a shared workstation in a hospital',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Security & Compliance',
      description:
        'Preparing for Joint Commission or an OCR review? Our security and compliance engagement produces the Zero-Trust controls and audit-ready evidence package your compliance team needs before go-live.',
      href: '/services/security-compliance',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
    {
      title: 'EHR & EMR Development',
      description:
        'Need a clinical platform to sit alongside your HMS? Our custom EHR work delivers FHIR-native clinical documentation, ordering, and decision support — built to plug into the operational stack.',
      href: '/solutions/ehr-emr-development',
      icon: 'Activity',
      pageType: 'solution',
    },
    {
      title: 'Application Modernization',
      description:
        'Running a legacy HIS that is blocking your roadmap? Our modernisation practice uses the strangler-fig pattern to replace modules incrementally — without shutting down live hospital operations.',
      href: '/services/application-modernization',
      icon: 'Layers',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Will this replace our existing EHR like Epic or Cerner?',
      answer:
        'No — and that is a deliberate design choice. We treat your EHR as the clinical system of record and build the HMS to integrate with it via HL7 v2 and FHIR R4. That means your clinicians keep the charting and ordering workflows they already know, while the HMS solves operational gaps the EHR was never intended to handle — billing, bed management, HR, inventory, and cross-departmental reporting. If you want a full custom EHR, we build those separately through our EHR & EMR Development engagement.',
    },
    {
      question: 'How does the HMS handle billing, claims, and revenue cycle integration?',
      answer:
        'Charges are captured directly from clinical activity in the EHR and operational events in the HMS, then flowed through an integrated claims workflow that talks to clearinghouses like Change Healthcare or Waystar via X12 EDI. Eligibility verification, remittance posting, denials management, and patient billing are built as first-class modules — not bolted on afterward. We design the revenue cycle integration around your existing payer contracts and clearinghouse setup so operational continuity is preserved during rollout.',
    },
    {
      question: 'What does implementation typically cost and how long does it take?',
      answer:
        'A custom HMS covering clinical ADT, bed management, billing, and core administrative modules typically takes 20–32 weeks from kickoff to first production go-live, depending on integration complexity and the number of departments in phase one. Investment typically ranges from $250,000 to $900,000 for a full custom build. We deliver department by department so the highest-value modules go live first, letting your leadership team see operational impact before the full platform is complete.',
    },
    {
      question: 'How do you handle HIPAA, Joint Commission, and CMS compliance?',
      answer:
        'Compliance is architectural, not a checklist at the end. We implement HIPAA technical safeguards from the first sprint — AES-256 encryption, role-based access, MFA, zero-gap audit logging, and session management. For Joint Commission and CMS Conditions of Participation, we align documentation and control structures with survey expectations and provide the policy artefacts, access logs, and audit evidence your compliance officer will be asked for. We are not a compliance auditor or law firm and recommend your compliance counsel sign off on final accreditation submissions.',
    },
    {
      question: 'Can we roll the HMS out department by department instead of a single cutover?',
      answer:
        'Yes — this is the default approach, not an option. Single "big bang" cutovers are one of the most common failure modes in hospital IT projects, and we design against them. Each department module — admissions, bed management, billing, pharmacy, HR — is built to go live independently, with clear integration boundaries back to the shared data model. This lets you prove operational value on one department, train staff incrementally, and expand the rollout without pausing hospital operations.',
    },
    {
      question: 'How do you migrate data from our current legacy HIS?',
      answer:
        'Data migration is planned from discovery onward. We profile your existing HIS data, map source tables to the target schema, build automated extraction and transformation pipelines, and run validation cycles with reconciliation reports at each stage. Migration happens in staged waves — master data and demographics first, then operational and financial data, then active workflows — with a documented rollback plan at every stage. We never move hospital operations onto a new platform without a validated migration and signed-off reconciliation.',
    },
  ],

  cta: {
    title: 'Ready to Unify Your Hospital Operations?',
    description:
      'Book a free 30-minute discovery call. We will review your existing EHR footprint, operational pain points, and compliance priorities, then outline a realistic scope and phased timeline for a custom hospital management system built around your hospital.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the operations hub', href: '#signature' },
  },

  _unverified: [
    'complianceSpotlight.badges / complianceDetail.frameworks — "SOC 2 Type II" listed; confirm whether company has a SOC 2 Type II attestation or is in progress.',
    'complianceSpotlight.badges — "Joint Commission" and "CMS Conditions of Participation" framed as alignment and readiness, not certification. Joint Commission accredits healthcare organisations, not software — confirm framing language is clear before publishing.',
    'complianceDetail.safeguards[5] — HIPAA-eligible Azure regions and failover claims reflect Azure capability, not a specific shipped deployment. Confirm the reference architecture matches real deployments.',
    'faq[2] — pricing range "$250k–$900k" and timeline "20–32 weeks" are estimates based on project complexity. Confirm with user before publishing.',
    'integrations[*].capabilities — listed capabilities are typical HL7/FHIR/EDI integration features; confirm which integrations have been built in production vs. scoped as capability.',
    'integrations — six named systems (Epic, Cerner, Meditech, Change Healthcare/Waystar, Surescripts, HIE). Greenfield: framed as "we build integrations with" via prose, not past shipped work. Verify framing is honest across all references.',
    'hero.metrics / metricsStrip — all values are capability-framed (EHR-First, HIPAA, Modular, End-to-End). No uncited percentage claims. Audience-tested for CIO/COO buyer.',
    'benefits[1] "Accelerated Revenue Cycle" — claim is architecturally framed ("architected to tighten") rather than outcome-framed. Confirm language meets greenfield integrity bar.',
  ],
};

export default hospitalManagementSystems;
