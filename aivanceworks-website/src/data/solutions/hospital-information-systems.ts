import { BRAND_PREFIX } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Healthcare). HealthCare Technologies.
//
// Buyer: Chief Medical Information Officer (CMIO) / VP of Clinical Informatics /
//   CIO at a mid-market hospital or regional health system (50–500 beds,
//   community hospitals, multi-site systems). Secondary: Chief Quality /
//   Patient-Safety Officer and Director of Health Information Management (HIM).
//
// Buyer mindset: "My clinicians lose information in the seams between the EHR,
//   the lab, the pharmacy, and radiology. Orders get faxed, results get
//   re-keyed, an allergy doesn't surface, a patient calls three times for a
//   result. I am measured on information continuity, clinician adoption,
//   patient safety, interoperability, and meeting ONC information-blocking
//   rules — not on whether the billing module is elegant. Connect my hospital's
//   information into one record without forcing a rip-and-replace of the EHR we
//   already standardised on."
//
// Top 3 buyer questions (drive composition + signature):
//   1. "Will it actually connect my EHR, lab, pharmacy, radiology, and patient
//       portal — or just be another disconnected system?" (THE differentiator;
//       answered by the signature + integrationsPanel + featureGrid.)
//   2. "Will it close the gaps where preventable errors and delays live, and
//       give patients the access ONC now mandates — without disrupting the
//       clinical workflows my physicians already know?"
//   3. "Will it pass our HIPAA posture, our next Joint Commission survey, and
//       satisfy 21st Century Cures Act information-blocking requirements?"
//
// Key trust issue: HIS programs that became yet another silo — promised
//   integration that never connected the ancillary systems, forced a costly
//   EHR rip-and-replace, collapsed clinician adoption, or left results moving by
//   fax and phone while the integration bill kept running.
//
// DIFFERENTIATION from /solutions/hospital-management-systems (HMS) — IMPORTANT:
//   The existing HMS page sells the OPERATIONAL / ADMINISTRATIVE ERP backbone
//   (revenue cycle, bed management, HR, inventory, scheduling) to a CIO/COO/CFO,
//   with a static hub-and-spoke signature (HospitalOperationsHub). This HIS page
//   sells the CLINICAL INFORMATION backbone — the longitudinal record,
//   departmental (lab/pharmacy/radiology) integration, order/result routing,
//   patient engagement, and interoperability — to a CMIO / clinical-informatics
//   buyer, with a directed information-flow signature (ClinicalInformationFlow).
//   The two are complementary (information layer vs operations layer) and are
//   cross-linked as same-vertical peers. An FAQ explicitly disambiguates HIS vs
//   HMS so the page does not cannibalise the HMS page's intent.
//
// Archetype rationale (self-challenge §9.6):
//   - Default: Archetype C (regulated healthcare house — matches Patient
//     Portals, EHR, EMR, HMS siblings). Audience test: does this buyer answer to
//     a regulator or a revenue target? The CMIO answers to HIPAA, Joint
//     Commission, CMS Conditions of Participation, and the ONC Cures Act
//     information-blocking rule — a regulator, not a P&L. So NOT Archetype D.
//     Confirmed Archetype C.
//   - Composition mirrors the HMS / EHR healthcare house for brand consistency
//     (complianceSpotlight as the trust gate BEFORE the signature). The
//     differentiation is content + signature + integration story, not structure.
//
// Liability / vendor stance (mirrors the healthcare sibling pattern):
//   - We are a software engineering and integration partner. The EHR/EMR remains
//     the clinical system of record; we connect to it, we do not replace it
//     unless separately engaged (EHR/EMR Development).
//   - Named EHR vendors (Epic, Cerner / Oracle Health, Meditech) and ancillary
//     system categories (LIS, RIS/PACS, pharmacy, HIE) are framed as "we build
//     integrations with" (greenfield capability framing), never as shipped,
//     certified, or partnered work.
//   - Standard / framework names (HIPAA, HITECH, ONC Cures Act / info-blocking,
//     USCDI, TEFCA, 21 CFR Part 11 where applicable, SOC 2, Joint Commission,
//     CMS CoP) are retained for audience signalling and SEO, always framed as
//     engineering design awareness and readiness — never as certification or a
//     compliance promise. Accreditation / attestation remain the customer's.
//   - No fixed pricing quoted on the page; cost routes to discovery. Phased
//     duration ranges are industry-typical estimates, flagged in _unverified.
//
// Signature: ClinicalInformationFlow — process/flow pattern (§8.3 #3). A directed
//   5-stage clinical information relay (Encounter/Order → Ancillary departments →
//   Result-to-record → Complete clinical picture → Patient surface) on one
//   interoperability backbone, with a "gap closed" annotation under each handoff.
//   Argument: "Information dies in the handoffs between departments — that is
//   where errors live. An integrated HIS turns every handoff into one connected
//   record." NEW single-use signature (§8.4): the flow/error-elimination argument
//   is distinct from HMS's hub (static unification) and EHR's clinical-workflow
//   signatures, and a FeatureGrid cannot show the directed relay (§8.2).
//
// Composition (healthcare house — same as HMS / EHR):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) → signature (dark) →
//   complianceDeepDive (light) → benefitsGrid (warm) → integrationsPanel (light)
//   → processTimeline (warm) → relatedPages (light) → faq (warm) →
//   ctaBlock (accent)
//
// Deviations: none from Archetype C recipe. No CaseStudySpotlight (greenfield).
//   New single-use signature recorded in constitution changelog.

const hospitalInformationSystems: SolutionPageData = {
  slug: 'hospital-information-systems',
  title: `${BRAND_PREFIX} Custom Hospital Information Systems (HIS)`,
  shortDescription:
    'Custom Hospital Information System (HIS) development for US hospitals and health systems — one longitudinal clinical record that connects your EHR, lab, pharmacy, radiology, and patient portal through HL7 and FHIR, so clinical information flows across every department without the gaps where errors and delays hide.',

  metaTitle: 'Custom Hospital Information Systems (HIS) | HL7 & FHIR Integrated',
  metaDescription:
    'Hospital Information System (HIS) development for US hospitals and health systems. Connect your EHR, lab (LIS), pharmacy, and radiology (RIS/PACS) into one longitudinal patient record via HL7 v2, FHIR R4, DICOM, and NCPDP. HIPAA, ONC Cures Act information-blocking, and Joint Commission aligned — integrates with Epic, Cerner, and Meditech without a rip-and-replace.',
  keywords: [
    'hospital information system',
    'HIS software development',
    'custom hospital information system',
    'clinical information system',
    'healthcare interoperability platform',
    'HL7 FHIR integration hospital',
    'EHR lab pharmacy radiology integration',
    'hospital integration engine',
    'longitudinal patient record',
    'patient engagement portal development',
    'ONC Cures Act information blocking software',
    'HIPAA compliant hospital information system',
    'health information exchange integration',
    'DICOM PACS integration',
  ],
  canonicalPath: '/solutions/hospital-information-systems',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    {
      label: `${BRAND_PREFIX} Hospital Information Systems`,
      href: '/solutions/hospital-information-systems',
    },
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
  signatureComponent: 'ClinicalInformationFlow',

  hero: {
    badge: 'HealthCare Technologies',
    headline:
      'A hospital information system where every department reads one record.',
    subhead:
      'Custom HIS platforms built on Azure that connect your EHR, lab, pharmacy, radiology, and patient portal through HL7 and FHIR — so clinical information flows across every department without the gaps where errors and delays hide.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the information flow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/hospital-information-systems/hero.jpg',
      alt: 'Care team reviewing a unified patient record across clinical and ancillary departments at a hospital workstation',
    },
    metrics: [
      {
        value: 'Built on FHIR & HL7',
        label: 'Standards-first interoperability',
        description:
          'Connects to your EHR, lab, pharmacy, and radiology through the HL7 v2, FHIR R4, DICOM, and NCPDP standards your systems already speak — no rip-and-replace.',
      },
      {
        value: 'One longitudinal record',
        label: 'Every department, one chart',
        description:
          'Orders, results, medications, images, and history converge into a single patient record that every clinician reads from and writes to.',
      },
      {
        value: 'HIPAA + ONC-aligned',
        label: 'Compliance & patient access by design',
        description:
          'Engineered for HIPAA technical safeguards, ONC Cures Act information-blocking readiness, and Joint Commission / CMS accreditation alignment.',
      },
    ],
  },

  // Audience test (§9.5): a CMIO / VP Clinical Informatics reading these in 8
  // seconds wants "will it connect my systems, keep information continuous, make
  // care safer, and give patients access?" — not audit posture (that lives in
  // the compliance sections per §9.9). All four are capability-framed
  // (greenfield-safe); no uncited percentages.
  metricsStrip: [
    {
      value: 'One Patient Record',
      label: 'Information Continuity Across Departments',
      description:
        'A single longitudinal record unifies clinical, ancillary, and administrative data — so the chart a clinician opens is the same truth the lab, pharmacy, and radiology work from.',
    },
    {
      value: 'Standards-Based',
      label: 'HL7 v2 · FHIR R4 · DICOM · NCPDP',
      description:
        'Built on the interoperability standards your EHR and ancillary systems already speak, so the HIS connects your stack instead of becoming another island.',
    },
    {
      value: 'Safety by Design',
      label: 'Allergy, Interaction & Duplicate-Order Checks',
      description:
        'Allergy, drug-interaction, and duplicate-order checks are engineered into the order and results flow — closing the inter-departmental gaps where preventable errors hide.',
    },
    {
      value: 'Patient-Connected',
      label: 'Results, Scheduling & Telehealth Access',
      description:
        'A secure patient portal surfaces results, appointment booking, and virtual visits — aligned with ONC Cures Act patient-access expectations.',
    },
  ],

  // Audience test: a clinical-informatics buyer thinks in information flows and
  // departmental connections, not engineering internals. Each feature maps to a
  // clinical capability the hospital owns. Mirrors the task's four pillars
  // (clinical management, departmental integration, resource tracking, patient
  // engagement) plus the interoperability backbone that ties them together.
  features: [
    {
      icon: 'Network',
      title: 'Unified Longitudinal Patient Record',
      description:
        'One centralized clinical record gives every clinician instant access to histories, diagnoses, allergies, medications, and prior results — so care decisions are made on a complete picture, not a partial one stitched together across systems.',
    },
    {
      icon: 'FlaskConical',
      title: 'Lab, Pharmacy & Radiology Integration',
      description:
        'The HIS connects laboratory (LIS), pharmacy, and radiology (RIS/PACS) systems so orders route to the right department instantly and results, dispensing, and images return to the chart digitally — without the fax-and-phone delays that slow care.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Order Entry, e-Prescribing & Decision Support',
      description:
        'Computerized order entry and e-prescribing with built-in allergy, drug-interaction, and duplicate-order checks — engineered to catch the preventable errors that live in the handoffs between ordering and fulfilment.',
    },
    {
      icon: 'BedDouble',
      title: 'Real-Time Bed, Resource & Staff Tracking',
      description:
        'Live bed and ward occupancy, staff shift and on-call visibility, and medication and device inventory tracking — so admissions, transfers, and resourcing run on real-time information instead of whiteboards and phone calls.',
    },
    {
      icon: 'Smartphone',
      title: 'Patient Engagement Portal & Telehealth',
      description:
        'A secure patient portal where patients view test results, book and manage appointments, message care teams, and join virtual consultations — extending the same record outward to the people it is about.',
    },
    {
      icon: 'Share2',
      title: 'Interoperability, HIE & Information Sharing',
      description:
        'FHIR R4 and HL7 v2 interfaces, DICOM imaging exchange, and Health Information Exchange (HIE) connectivity — architected for USCDI data classes and ONC Cures Act information-sharing expectations across organizations.',
    },
  ],

  benefits: [
    {
      icon: 'ShieldCheck',
      title: 'Fewer Gaps, Fewer Preventable Errors',
      description:
        'Because allergies, interactions, results, and order status are visible at the point of care on one record, the information gaps between departments — where preventable errors and delays accumulate — are engineered out by design.',
    },
    {
      icon: 'Activity',
      title: 'Faster, Connected Clinical Workflows',
      description:
        'Orders and results route digitally between clinicians and ancillary departments instead of by fax and phone, so the time from order to result to action is architected to shrink across the care pathway.',
    },
    {
      icon: 'Network',
      title: 'One Source of Clinical Truth',
      description:
        'A single longitudinal record replaces reconciliation between disconnected departmental systems — clinical, lab, pharmacy, and radiology teams read and write the same patient data with no duplicate entry.',
    },
    {
      icon: 'Smartphone',
      title: 'Patient Access That Meets the Mandate',
      description:
        'A secure portal and standards-based patient APIs surface results, scheduling, and records to patients — architected to align with ONC Cures Act / 21st Century Cures patient-access and information-blocking expectations.',
    },
    {
      icon: 'Plug',
      title: 'Works With Your EHR, Not Against It',
      description:
        'The HIS integrates with Epic, Cerner / Oracle Health, and Meditech as the clinical system of record via HL7 v2 and FHIR R4 — so your existing EHR investment and clinician workflows stay in place while the information gaps get solved.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Clinical Information Mapping',
      description:
        'We interview clinical, ancillary (lab, pharmacy, radiology), HIM, and IT stakeholders; map how orders, results, and the patient record move today; inventory your existing EHR, ancillary systems, and interfaces; and identify the information gaps, HIPAA, ONC information-blocking, and patient-safety risk areas — before a line of code is written.',
      duration: '3–5 weeks',
      deliverable:
        'Clinical information-flow maps, interface and system inventory, interoperability & compliance gap report, phased roadmap',
    },
    {
      title: 'Interoperability Architecture & Integration Design',
      description:
        'We design the integration and interface-engine layer that connects the HIS to your EHR, LIS, pharmacy, RIS/PACS, and HIE via HL7 v2, FHIR R4, DICOM, and NCPDP — including FHIR resource mapping and a security architecture in which your EHR remains the system of record for PHI.',
      duration: '2–4 weeks',
      deliverable:
        'Interoperability architecture, FHIR resource mapping, interface-engine design, security architecture',
    },
    {
      title: 'Modular Development & Phased Delivery',
      description:
        'Full-stack development in React/Next.js and .NET on Azure, delivered one capability at a time — order and result routing, the unified record, bed and resource tracking, and the patient portal. Bi-weekly demos with clinical and ancillary stakeholders keep each module anchored to real clinical workflows.',
      duration: 'Phased per engagement',
      deliverable:
        'Functional modules in staging, test coverage reports, HIPAA-aligned CI/CD pipeline',
    },
    {
      title: 'Integration, Validation & Accreditation Prep',
      description:
        'We connect to your live ancillary systems and EHR, then run end-to-end and interface testing, penetration testing, and HIPAA technical-safeguard validation. Documentation is structured to align with Joint Commission and CMS Conditions of Participation, and to demonstrate ONC Cures Act information-blocking readiness for your compliance team.',
      duration: '3–5 weeks',
      deliverable:
        'Interface test results, security test report, HIPAA safeguards checklist, accreditation-alignment and information-blocking readiness documentation',
    },
    {
      title: 'Phased Go-Live, Training & Hypercare',
      description:
        'Department-by-department go-live with validated data migration, role-specific clinician and staff training, and a dedicated hypercare period. We monitor adoption, result-routing integrity, and order-to-result turnaround, then iterate based on real clinical feedback.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, runbooks, training materials, monitoring dashboards, hypercare support',
    },
  ],

  capabilities: [
    'Unified longitudinal patient record across clinical, lab, pharmacy, and radiology',
    'HL7 v2, FHIR R4, DICOM / DICOMweb, and NCPDP SCRIPT interface engineering',
    'Computerized order entry, e-prescribing, and result routing to the chart',
    'Allergy, drug-interaction, and duplicate-order clinical decision-support checks',
    'Real-time bed, ward, staff-shift, and inventory tracking',
    'Secure patient portal: results, scheduling, messaging, and telehealth',
    'Health Information Exchange (HIE) and TEFCA-aware connectivity',
    'USCDI data-class mapping for ONC Cures Act patient-access readiness',
    'Role-based access control across clinical, ancillary, HIM, and admin roles',
    'Multi-factor authentication (MFA) and full audit logging',
    'Infrastructure-as-code provisioning on HIPAA-eligible Azure',
    'ADA / WCAG 2.1 AA accessibility across clinician and patient interfaces',
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
    'DICOM / DICOMweb',
    'Azure Service Bus',
    'Azure Application Insights',
    'Terraform (IaC)',
  ],

  integrations: [
    {
      name: 'Epic / Cerner (Oracle Health) / Meditech',
      category: 'EHR / System of Record',
      connectionMethod: 'SMART on FHIR / FHIR R4 + HL7 v2',
      capabilities: [
        'Bi-directional patient and ADT data sync',
        'Clinical document exchange (C-CDA)',
        'Order and result interface for ancillary systems',
      ],
    },
    {
      name: 'Laboratory Information System (LIS)',
      category: 'Lab',
      connectionMethod: 'HL7 v2 (ORM / ORU) + FHIR R4',
      capabilities: [
        'Lab order routing to the laboratory',
        'Result filing back to the patient chart',
        'Critical-value and reflex-result flagging',
      ],
    },
    {
      name: 'Radiology / PACS (RIS / PACS)',
      category: 'Imaging',
      connectionMethod: 'HL7 v2 + DICOM / DICOMweb',
      capabilities: [
        'Imaging order routing and scheduling',
        'Study and report linkage to the record',
        'In-context image access for clinicians',
      ],
    },
    {
      name: 'Pharmacy & e-Prescribing',
      category: 'Pharmacy',
      connectionMethod: 'NCPDP SCRIPT + HL7 v2',
      capabilities: [
        'Prescription routing to inpatient and retail pharmacies',
        'Medication history and reconciliation',
        'Formulary and drug-interaction checking',
      ],
    },
    {
      name: 'Health Information Exchange (HIE) / TEFCA',
      category: 'Interoperability',
      connectionMethod: 'IHE XDS.b / FHIR R4',
      capabilities: [
        'Community health record query',
        'Admission / discharge / transfer notifications',
        'Cross-organization document sharing',
      ],
    },
    {
      name: 'Medical Devices & Monitoring',
      category: 'Devices',
      connectionMethod: 'HL7 v2 / IEEE 11073 / IHE PCD',
      capabilities: [
        'Vitals and monitor data capture into the record',
        'Device-to-chart association by encounter',
        'Time-aligned observation logging',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Built for clinical trust',
    title: 'HIPAA-Secure, ONC-Aligned, Audit-Ready by Design',
    highlightText: 'HIPAA-Secure, ONC-Aligned',
    statusText:
      'HIPAA · HITECH · ONC Cures Act (information blocking) · SOC 2 · Joint Commission · CMS CoP',
    pillars: [
      {
        icon: 'Lock',
        title: 'Data Encryption & PHI Protection',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit, and PHI segmentation across departmental data — with encryption keys managed through Azure Key Vault.',
      },
      {
        icon: 'Eye',
        title: 'Access, Identity & Audit',
        description:
          'Role-based access across clinical, ancillary, HIM, and admin roles with MFA enforcement and a continuous audit trail of every record access, structured for OCR review and Joint Commission survey.',
      },
      {
        icon: 'Share2',
        title: 'Interoperability Without Information Blocking',
        description:
          'Standards-based patient and provider access via FHIR R4 and USCDI data classes — engineered so sharing the right data with patients and partners supports ONC Cures Act information-blocking compliance.',
      },
    ],
    badges: [
      'HIPAA',
      'HITECH',
      'ONC Cures Act (Info Blocking)',
      'SOC 2 Type II',
      'Joint Commission',
      'CMS Conditions of Participation',
    ],
  },

  complianceDetail: {
    frameworks: [
      'HIPAA',
      'HITECH',
      'ONC 21st Century Cures Act (information blocking & patient access)',
      'USCDI (data classes for interoperability)',
      'SOC 2 Type II (security & availability practices)',
      'Joint Commission readiness',
      'CMS Conditions of Participation',
    ],
    safeguards: [
      {
        icon: 'Lock',
        title: 'Encryption at rest & in transit',
        description:
          'AES-256 for stored PHI and clinical data, TLS 1.3 for all network and interface traffic. Encryption keys are managed via Azure Key Vault with automated rotation policies.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-based access',
        description:
          'Standards-based identity with enforced MFA and role-based access for clinicians, lab, pharmacy, radiology, HIM, and administrative populations, with least-privilege defaults across every module and interface.',
      },
      {
        icon: 'FileText',
        title: 'Zero-gap audit logging',
        description:
          'Every record access, modification, order, result, and export across clinical and ancillary modules is logged with timestamp, actor, resource, and outcome — retained per HIPAA requirements for your compliance and HIM teams.',
      },
      {
        icon: 'Share2',
        title: 'Information-sharing & patient-access controls',
        description:
          'FHIR R4 and USCDI-aligned patient and provider APIs are engineered so the HIS shares the data ONC requires while honoring consent and minimum-necessary rules — giving your compliance team the evidence trail for information-blocking attestations.',
      },
      {
        icon: 'Activity',
        title: 'Interface integrity & message validation',
        description:
          'HL7, FHIR, and DICOM interfaces are built with message validation, delivery acknowledgement, and reconciliation so orders and results are not silently lost between systems — the integrity layer patient safety depends on.',
      },
      {
        icon: 'Building2',
        title: 'HIPAA-eligible Azure infrastructure',
        description:
          'Hosted in HIPAA-eligible Azure regions with private endpoints for network isolation, automated failover, and infrastructure defined and reviewed via Terraform. BAA and DPA available.',
      },
    ],
    auditNote:
      'Every module is architected to meet HIPAA technical-safeguard requirements, to support ONC Cures Act information-blocking and patient-access obligations, and to align with Joint Commission and CMS Conditions of Participation documentation expectations. We provide the audit trails, access-control matrices, interface-integrity evidence, and policy documentation your compliance officer, OCR reviewer, or surveyor will ask for. Accreditation submissions, information-blocking attestations, and final compliance sign-off remain the responsibility of the customer’s compliance and clinical-governance functions; AIvanceWorks is a software engineering and integration partner and does not attest compliance on a customer’s behalf.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Every Department, One Patient Record',
      description:
        'Clinical, lab, pharmacy, and radiology teams read and write the same longitudinal record — so the picture at the bedside is complete, not stitched together across screens.',
      image: {
        src: '/images/solutions/hospital-information-systems/feature-1.jpg',
        alt: 'Physician and nurse reviewing a shared patient record on a workstation at a hospital nursing station',
      },
    },
    {
      heading: 'Results in Patients’ Hands',
      description:
        'A secure portal surfaces test results, appointment booking, and virtual visits to patients directly — extending the same record outward and meeting modern patient-access expectations.',
      image: {
        src: '/images/solutions/hospital-information-systems/feature-2.jpg',
        alt: 'Patient viewing lab results and an upcoming appointment on a mobile patient portal',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Hospital Management Systems',
      description:
        'Connected the clinical information layer and now the operations side is still fragmented? Our HMS engagement wraps revenue cycle, bed management, HR, and inventory around the same hospital — the operations backbone that sits alongside this information backbone.',
      href: '/solutions/hospital-management-systems',
      icon: 'Building2',
      pageType: 'solution',
    },
    {
      title: 'Enterprise Integration & Migration',
      description:
        'The hard part of any HIS is the seams between the EHR, lab, pharmacy, and radiology. Our integration practice builds and owns the HL7 v2 / FHIR R4 / DICOM interface surface that lets clinical information move without re-keying.',
      href: '/services/enterprise-software-development',
      icon: 'ArrowLeftRight',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'Facing an OCR review, a Joint Commission survey, or an information-blocking attestation? Our security and compliance engagement produces the Zero-Trust controls and audit-ready evidence package your compliance team needs before the HIS goes live.',
      href: '/services/security-compliance',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'What is the difference between a Hospital Information System (HIS) and a Hospital Management System (HMS)?',
      answer:
        'They overlap, and many vendors blur the line, so here is how we use the terms. A Hospital Information System (HIS) is the clinical information backbone — the longitudinal patient record, integration of lab, pharmacy, and radiology, order and result routing, clinical decision support, and patient engagement. A Hospital Management System (HMS) is the operational and administrative backbone — revenue cycle, bed management, HR, scheduling, and inventory. Most hospitals need both, and they complement each other: the HIS keeps clinical information continuous and safe, while the HMS runs operations. We build either, and we cross-link our HMS engagement for the operations side.',
    },
    {
      question:
        'Will the HIS replace our existing EHR like Epic, Cerner, or Meditech?',
      answer:
        'No — and that is deliberate. We treat your EHR as the clinical system of record and build the HIS to integrate with it via HL7 v2 and FHIR R4. Your clinicians keep the charting and ordering workflows they already know, while the HIS connects the surrounding ancillary systems — lab, pharmacy, radiology — into one longitudinal record and surfaces it to patients. If you want a full custom EHR or EMR instead, we build those separately through our EHR and EMR Development engagements.',
    },
    {
      question:
        'How does the HIS connect our lab, pharmacy, and radiology systems?',
      answer:
        'Through an integration and interface-engine layer built on healthcare standards: HL7 v2 (ORM/ORU) for lab and pharmacy orders and results, NCPDP SCRIPT for e-prescribing, DICOM and DICOMweb for radiology imaging, and FHIR R4 where your systems support it. Orders route from the point of care to the right department, and results, dispensing records, and images return to the chart automatically — with message validation and reconciliation so nothing is silently lost. Your IT team controls the connectors into your validated systems; we build the engineering surface they run on.',
    },
    {
      question:
        'How do you handle HIPAA and ONC Cures Act information-blocking requirements?',
      answer:
        'Compliance is architectural, not a final checklist. We implement HIPAA technical safeguards from the first sprint — AES-256 encryption, role-based access, MFA, and zero-gap audit logging. For the ONC 21st Century Cures Act, we build FHIR R4 and USCDI-aligned patient and provider access so the HIS shares the data the rule requires while honoring consent and minimum-necessary rules, and we provide the evidence trail your compliance team uses for information-blocking attestations. We are a software engineering and integration partner, not a compliance auditor or law firm — final attestations and accreditation submissions stay with your compliance and clinical-governance functions.',
    },
    {
      question:
        'Can we roll the HIS out department by department instead of a single cutover?',
      answer:
        'Yes — this is the default approach, not an option. Single "big bang" go-lives are one of the most common failure modes in hospital IT, and we design against them. Each capability — order and result routing, the unified record, bed and resource tracking, the patient portal — is built to go live with clear integration boundaries back to the shared record. This lets you prove clinical value and result-routing integrity on one area, train staff incrementally, and expand without pausing hospital operations.',
    },
    {
      question:
        'How do you migrate data and protect patient safety during cutover?',
      answer:
        'Data migration is planned from discovery onward. We profile your existing systems, map source data to the target record, build automated extraction and transformation pipelines, and run validation cycles with reconciliation reports at each stage. Migration happens in staged waves — master and demographic data first, then clinical history, then active orders and results — with a documented rollback plan and, where appropriate, a parallel-run period. We never move clinical operations onto a new system without a validated migration and signed-off reconciliation, because patient safety depends on the record being complete and correct on day one.',
    },
  ],

  cta: {
    title: 'Ready to connect your hospital’s information into one record?',
    description:
      'Book a free 30-minute discovery call. We will review your EHR and ancillary-system footprint, where clinical information breaks down between departments, and your compliance priorities — then outline a realistic scope and phased timeline for a custom Hospital Information System built around your hospital.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the information flow', href: '#signature' },
  },

  _unverified: [
    'Differentiation from /solutions/hospital-management-systems is positioning, not a product line distinction. Confirm with leadership that the HIS (clinical information backbone) vs HMS (operations/admin backbone) framing matches how the company wants to sell these two pages, and that they should coexist rather than be merged.',
    'complianceSpotlight.badges / complianceDetail.frameworks — "SOC 2 Type II" listed; confirm whether the company holds a SOC 2 Type II attestation or is in progress.',
    'complianceSpotlight.badges — "Joint Commission" and "CMS Conditions of Participation" framed as alignment/readiness, not certification. Joint Commission accredits organizations, not software — confirm framing is acceptable before publishing.',
    'ONC Cures Act / information-blocking and USCDI/TEFCA references framed as engineering readiness ("architected to align/support"), not a compliance guarantee. Confirm legal accepts the framing.',
    'integrations — Epic / Cerner (Oracle Health) / Meditech and ancillary categories (LIS, RIS/PACS, pharmacy, HIE, devices). Greenfield: framed as "we build integrations with" via prose, not shipped/certified work. Verify framing is honest across all references; no partnership or certification is claimed.',
    'processSteps durations (3–5 wk discovery, 2–4 wk architecture, 3–5 wk validation) are industry-typical estimates; build and go-live phases are "phased per engagement." No fixed total timeline or pricing quoted on the page. Confirm no internal estimates leak into copy.',
    'hero.metrics / metricsStrip — all values are capability-framed (no uncited percentage claims). Audience-tested for the CMIO / clinical-informatics buyer.',
    'hero.heroImage, imageFeatures[0].image, imageFeatures[1].image — placeholder photos copied from the hospital-management-systems solution folder. Replace with HIS-specific Unsplash imagery (care team on a shared record, patient viewing results on a portal) per §11.3 / §11.5 before publish.',
  ],
};

export default hospitalInformationSystems;
