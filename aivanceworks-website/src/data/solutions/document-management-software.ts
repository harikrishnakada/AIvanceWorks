import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Healthcare & Insurance)
// Buyer: Chief Compliance Officer / Director of Health Information Management (HIM) /
//   VP of Compliance at a mid-market healthcare organization or insurance company
//   (50-bed hospital or regional insurer with 50–500 staff)
// Measured on: regulatory audit outcomes (OCR, state DOI), e-discovery response time,
//   retention compliance, breach risk reduction, and operational cost of records management
//
// Top 3 buyer questions:
//   1. "How does this handle our retention schedules — HIPAA requires different periods
//      than state law, and insurance DOI requirements differ by document type?"
//   2. "What is the audit trail depth — can we produce a complete chain of custody for any
//      document in an OCR investigation, DOI examination, or legal hold?"
//   3. "How does this integrate with our EHR and existing systems so documents don't
//      fall through the cracks between platforms?"
//
// Key trust issue: "Our previous DMS was approved in theory but failed the audit in
//   practice — the audit trail was incomplete, metadata was missing, and the system
//   couldn't prove who accessed what, when. We need a system that actually passes."
//
// Signature: DocumentLifecycleMap — process/flow visualization (§8.3 pattern 3)
//   showing 5 phases of a document's lifecycle from ingestion through compliant
//   destruction, with compliance frameworks anchored to each phase.
//   Argument: "From the moment a document enters your system to its compliant
//   destruction — every step is controlled, logged, and auditable."
//
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no verified DMS case data yet.
//   - ComplianceSpotlight placed before signature (same trust-gate rationale as EHR/HMS).
//   - ImageFeatures added after FeatureGrid — per two-track imagery strategy (§11.5).
//   - relatedPages mixes services + 1 same-vertical solution (EHR & EMR Development)
//     per constitution §10 v2.1 exception: buyer persona genuinely overlaps — the same
//     CCO or HIM Director evaluating DMS will often evaluate EHR and clinical document
//     sources simultaneously. See constitution changelog.
//
// Tone rhythm:
//   hero (dark) → metricsStrip (light) → featureGrid (warm) → imageFeatures (light) →
//   complianceSpotlight (warm) → signature (dark) → complianceDeepDive (light) →
//   benefitsGrid (warm) → integrationsPanel (light) → processTimeline (warm) →
//   relatedPages (light) → faq (warm) → ctaBlock (accent)

const documentManagementSoftware: SolutionPageData = {
  slug: 'document-management-software',
  title: 'Custom Document Management Software for Healthcare & Insurance',
  shortDescription:
    'HIPAA-compliant document management systems built on Azure — automated retention schedules, tamper-evident audit trails, legal hold capability, and EHR/AMS integration designed for audit-day readiness.',

  metaTitle: 'Document Management Software | HIPAA & Insurance Compliance DMS',
  metaDescription:
    'Custom document management software for healthcare and insurance organizations. HIPAA-compliant, retention-schedule-aware, audit-ready systems with e-discovery and legal hold capability built on Azure.',
  keywords: [
    'document management software healthcare',
    'HIPAA compliant document management',
    'insurance document management system',
    'medical records management software',
    'healthcare document management system development',
    'electronic document management HIPAA',
    'document retention compliance software',
    'healthcare records management system',
    'insurance document archival software',
    'e-discovery document management',
    'audit trail document management',
    'PHI document storage compliance',
    'legal hold document management',
    'custom DMS development',
  ],
  canonicalPath: '/solutions/document-management-software',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Document Management Software', href: '/solutions/document-management-software' },
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
  signatureComponent: 'DocumentLifecycleMap',

  hero: {
    badge: 'Healthcare & Insurance Solutions',
    headline: 'Document management that passes the audit.',
    subhead:
      'Custom DMS built for HIPAA retention schedules, insurance document requirements, and e-discovery readiness — every document classified, retained correctly, and auditable from day one.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the document lifecycle', href: '#signature' },
    heroImage: {
      src: '/images/solutions/document-management-software/hero.jpg',
      alt: 'Compliance professional reviewing document management system on a workstation in a regulated industry office',
    },
    metrics: [
      {
        value: 'HIPAA + NAIC',
        label: 'Retention-schedule aware',
        description: 'Document types mapped to applicable retention laws',
      },
      {
        value: 'Zero-Gap',
        label: 'Immutable audit trail',
        description: 'Every access, actor, and timestamp logged',
      },
      {
        value: 'Legal Hold',
        label: 'E-discovery ready',
        description: 'One-click hold with complete chain of custody',
      },
    ],
  },

  // Audience test: CCO/HIM Director evaluating a DMS needs to see retention
  // enforcement, audit trail depth, legal hold, and integration posture — none of
  // which can be credibly expressed as an uncited percentage. All four metrics are
  // capability-framed and answer the buyer's first three questions before they read
  // a single word of copy.
  metricsStrip: [
    {
      value: 'Schedule-Aware',
      label: 'Retention by Document Type',
      description:
        'Retention schedules configured per document type, source system, and jurisdiction — HIPAA, state medical records laws, and insurance DOI requirements applied automatically at ingestion.',
    },
    {
      value: 'Zero-Gap Logs',
      label: 'Tamper-Evident Audit Trail',
      description:
        'Every document access, download, share, and deletion attempt logged with timestamp, actor identity, and action type — immutable and producible for OCR investigations or legal proceedings.',
    },
    {
      value: 'Hold-Ready',
      label: 'Legal Hold in Minutes',
      description:
        'A litigation matter or regulatory investigation triggers a hold scoped by custodian, matter, date range, or keyword — documents frozen without disrupting normal operations.',
    },
    {
      value: 'Source-Integrated',
      label: 'EHR, AMS & SharePoint',
      description:
        'Connectors pull documents from Epic, Cerner, Applied Epic, and Microsoft 365 automatically — no manual uploads, no version gaps between source system and the record of truth.',
    },
  ],

  // Audience test: CCO/HIM Director thinks in document categories and compliance
  // obligations, not technical features. Each card maps to an operational need
  // the buyer already owns — not to an engineering pattern.
  features: [
    {
      icon: 'FolderOpen',
      title: 'Automated Document Classification',
      description:
        'AI-assisted classification tags every incoming document by type — consent form, clinical note, insurance policy, claims file — and applies the correct retention schedule automatically at ingestion. Reduces manual indexing overhead and eliminates the misclassification errors that create compliance gaps.',
    },
    {
      icon: 'Clock',
      title: 'Retention Policy Engine',
      description:
        'Configurable retention schedules mapped to document type, source system, and regulatory jurisdiction — HIPAA minimums, state medical records laws, and insurance DOI requirements enforced side by side. Alerts surface approaching expiry dates for human review before automated action.',
    },
    {
      icon: 'FileSearch',
      title: 'Tamper-Evident Audit Trail',
      description:
        'Every document access, modification, share, and destruction logged with timestamp, actor identity, IP address, and action type. Audit logs are cryptographically protected against tampering and exportable as structured reports for OCR reviews, DOI examinations, or litigation discovery.',
    },
    {
      icon: 'Scale',
      title: 'Legal Hold & E-Discovery',
      description:
        'One-click legal hold scoped by custodian, matter, date range, or keyword — freezing documents in place without disrupting operations outside the hold scope. Export packages are formatted for e-discovery production to counsel, with complete chain-of-custody documentation included.',
    },
    {
      icon: 'Lock',
      title: 'Role-Based Access & Secure Sharing',
      description:
        'Access permissions enforced by department, role, and document type — clinicians see clinical records, adjusters see claims files, and no role sees more than its function requires. Outbound sharing uses time-bounded, audited access links rather than email attachments, so PHI and PII never leave a controlled context.',
    },
    {
      icon: 'Plug',
      title: 'EHR, AMS & Source System Integration',
      description:
        'Connectors to Epic, Cerner, Applied Epic, and Microsoft SharePoint pull clinical and policy documents into the DMS automatically — applying metadata, classification, and retention rules at ingestion. No manual upload step, no version mismatches between the source system and the document archive.',
    },
  ],

  benefits: [
    {
      icon: 'ShieldCheck',
      title: 'Audit Confidence, Not Scramble',
      description:
        'When the OCR letter or DOI examiner arrives, every document and its complete access history is immediately producible — no emergency spreadsheet searches, no gaps in the chain of custody, no manual reconciliation between systems.',
    },
    {
      icon: 'Clock',
      title: 'Retention That Runs Itself',
      description:
        'Retention schedules enforced automatically by document type and jurisdiction — no manual tickler files, no expired records sitting in storage because a staff member forgot to check the calendar. Compliance runs in the background.',
    },
    {
      icon: 'Scale',
      title: 'Legal Hold in Minutes, Not Days',
      description:
        'A litigation matter triggers a scoped hold in minutes. Documents are frozen without disrupting the rest of operations, and the hold scope can be tightened or expanded without an IT ticket. Export-ready for counsel from day one.',
    },
    {
      icon: 'Shield',
      title: 'Smaller Breach Surface',
      description:
        'PHI and policyholder PII encrypted at rest and in transit, access scoped by role and document type, and overprivileged access paths eliminated by design. Every session, share, and download logged — so a breach investigation starts with evidence, not guesswork.',
    },
    {
      icon: 'Database',
      title: 'One Source of Truth',
      description:
        'Clinical documents from the EHR, scanned paper records, email attachments, and insurance policy files all land in one classified repository — no version conflicts, no shadow copies in shared drives, no duplicate paper piles that contradict the digital record.',
    },
  ],

  processSteps: [
    {
      title: 'Document Landscape & Compliance Audit',
      description:
        'We inventory every document type your organization generates, receives, and retains — mapping regulatory retention requirements (HIPAA, state laws, DOI rules) to each type, auditing current storage gaps, and identifying integration points with your EHR, AMS, and SharePoint environments.',
      duration: '2–3 weeks',
      deliverable: 'Document taxonomy, retention schedule matrix by type and jurisdiction, compliance gap report, integration inventory, and prioritized scope',
    },
    {
      title: 'Classification Schema & Retention Rule Design',
      description:
        'We define the document classification hierarchy, configure retention rules per type and jurisdiction, design the legal hold trigger framework, and specify the access control model — document type by role, by department, and by data sensitivity level.',
      duration: '1–2 weeks',
      deliverable: 'Classification schema, retention rule specification, access control model, legal hold playbook',
    },
    {
      title: 'Platform Development & Integration',
      description:
        'Full-stack development in React/Next.js and .NET on Azure, with the retention engine, audit infrastructure, and source system integrations built in parallel. Bi-weekly demonstrations ensure classification and workflow configuration tracks real operational requirements.',
      duration: '8–14 weeks',
      deliverable: 'Functional DMS in staging with configured retention engine, EHR/AMS integrations verified, HIPAA-compliant CI/CD pipeline',
    },
    {
      title: 'Records Migration & Classification Validation',
      description:
        'Extract, classify, and migrate existing records from legacy storage, paper archives, and source systems with row-level reconciliation reporting. Validate retention schedule application, metadata completeness, and audit log integrity across all migrated records before any cutover.',
      duration: '3–6 weeks',
      deliverable: 'Migrated records with reconciliation sign-off, retention validation report, migration audit log, rollback plan',
    },
    {
      title: 'Audit Simulation, Training & Go-Live',
      description:
        'Simulate an OCR investigation and DOI examination scenario to validate that documents, access logs, and chain-of-custody reports are producible as required. Role-specific training for HIM, compliance, and legal teams. Phased go-live by document type or department.',
      duration: '2–3 weeks',
      deliverable: 'Audit simulation report, production deployment, role-based training materials, runbooks, 30-day hypercare SLA',
    },
  ],

  capabilities: [
    'HIPAA-compliant document storage and transmission',
    'Automated retention scheduling by document type and jurisdiction',
    'Tamper-evident, immutable audit logging',
    'Legal hold and e-discovery export capability',
    'AI-assisted document classification and metadata tagging',
    'Role-based access control with least-privilege defaults',
    'Multi-factor authentication (MFA) and session management',
    'EHR, AMS, and Microsoft SharePoint integration',
    'Version control and full document lifecycle tracking',
    'ADA / WCAG 2.1 AA accessibility compliance',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure App Service',
    'Azure AD B2C / Entra External ID',
    'Azure Key Vault',
    'Azure Blob Storage (PHI-encrypted)',
    'SQL Server / Azure SQL Database',
    'Azure AI Document Intelligence',
    'Azure Service Bus',
    'Azure Application Insights',
    'Terraform (IaC)',
    'Microsoft Graph API',
  ],

  integrations: [
    {
      name: 'Epic',
      category: 'EHR',
      connectionMethod: 'FHIR R4 / HL7 v2',
      capabilities: [
        'Clinical document ingestion and indexing',
        'Patient-context metadata preservation',
        'Bi-directional document reference sync',
      ],
    },
    {
      name: 'Cerner / Oracle Health',
      category: 'EHR',
      connectionMethod: 'FHIR R4 / HL7 v2',
      capabilities: [
        'Clinical document capture from encounter flow',
        'Radiology and lab report ingestion',
        'Document link embedding in clinical chart',
      ],
    },
    {
      name: 'SharePoint / Microsoft 365',
      category: 'Enterprise Document Store',
      connectionMethod: 'Microsoft Graph API',
      capabilities: [
        'Bi-directional document sync and classification',
        'Permission inheritance from SharePoint groups',
        'Version history migration and audit log bridging',
      ],
    },
    {
      name: 'Applied Epic',
      category: 'Insurance AMS',
      connectionMethod: 'Applied API + custom adapter',
      capabilities: [
        'Policy documents and declarations ingestion',
        'Claims file and correspondence capture',
        'Client record document linking',
      ],
    },
    {
      name: 'DocuSign / Adobe Sign',
      category: 'e-Signature',
      connectionMethod: 'REST API',
      capabilities: [
        'Executed document auto-filing to DMS',
        'Audit envelope data capture',
        'Retention schedule assignment at signing completion',
      ],
    },
    {
      name: 'PACS / Radiology Systems',
      category: 'Imaging',
      connectionMethod: 'DICOM / HL7 v2 ORM',
      capabilities: [
        'Radiology report ingestion and indexing',
        'DICOM image reference linking',
        'Retention enforcement for imaging records',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Compliance is the product',
    title: 'HIPAA-Compliant, Retention-Enforced, Audit-Ready by Design',
    highlightText: 'HIPAA-Compliant, Retention-Enforced, Audit-Ready',
    statusText: 'HIPAA · HITECH · 21 CFR Part 11 · NAIC · State DOI · SOC 2',
    pillars: [
      {
        icon: 'Shield',
        title: 'Encrypted End-to-End',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit. PHI and policyholder PII encrypted throughout the document lifecycle with keys managed via Azure Key Vault.',
      },
      {
        icon: 'Clock',
        title: 'Retention by Regulation',
        description:
          'Retention schedules configured per document type, jurisdiction, and regulatory source — HIPAA minimums, state laws, and DOI requirements enforced automatically without manual intervention.',
      },
      {
        icon: 'Eye',
        title: 'Immutable Audit Logs',
        description:
          'Every document access, share, modification, and destruction logged with timestamp and actor identity. Tamper-protected and exportable for OCR review, court production, or internal audit.',
      },
    ],
    badges: ['HIPAA', 'HITECH', '21 CFR Part 11', 'NAIC Data Security', 'State DOI', 'SOC 2 Type II'],
  },

  complianceDetail: {
    frameworks: [
      'HIPAA',
      'HITECH',
      '21 CFR Part 11',
      'NAIC Insurance Data Security Model Law',
      'SOC 2 Type II',
      'State medical records retention laws',
    ],
    safeguards: [
      {
        icon: 'Lock',
        title: 'Encryption at rest & in transit',
        description:
          'AES-256 for stored PHI and PII, TLS 1.3 for all data transfer. Encryption keys managed via Azure Key Vault with automated rotation policies. No PHI cached in the presentation layer.',
      },
      {
        icon: 'UserCheck',
        title: 'Role-based access & MFA',
        description:
          'Azure AD B2C with enforced MFA for all users. Document visibility and actions restricted by role, department, and document type. Least-privilege defaults applied at every layer — clinicians, adjusters, compliance, and legal each see only what their function requires.',
      },
      {
        icon: 'FileText',
        title: 'Immutable audit logging',
        description:
          'Every document access, modification, share, and deletion attempt logged with timestamp, actor identity, IP address, and action type. Logs are cryptographically protected against tampering, retained per HIPAA and DOI requirements, and exportable as structured reports for OCR review or court production.',
      },
      {
        icon: 'Clock',
        title: 'Retention enforcement engine',
        description:
          'Retention schedules enforced per document type, jurisdiction, and regulatory requirement. Expiry alerts trigger human review before automated action. No document is destroyed without a documented review decision and a destruction certificate appended to the audit log.',
      },
      {
        icon: 'Scale',
        title: 'Legal hold & chain of custody',
        description:
          'Legal hold scoped by custodian, matter, date range, or keyword — preventing deletion or modification until formally lifted. Every hold action (placement, modification, lift) is logged with actor and timestamp for a court-admissible chain-of-custody record.',
      },
      {
        icon: 'Building2',
        title: 'HIPAA-eligible Azure infrastructure',
        description:
          'Hosted in HIPAA-eligible Azure regions with private endpoints, automated failover, and infrastructure defined via Terraform. Business Associate Agreement (BAA) and Data Processing Agreement (DPA) available.',
      },
    ],
    auditNote:
      'Every module is architected to satisfy HIPAA technical safeguard requirements, 21 CFR Part 11 electronic records and signature standards, and NAIC Insurance Data Security Model Law controls. We provide audit trails, access control matrices, and policy documentation suitable for an OCR review, DOI examination, SOC 2 audit, or legal discovery request.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Every Document, Every Access, Accounted For',
      description:
        'A compliance officer can surface any document\'s complete access history — who viewed it, when, from where — within seconds, not hours of manual log triage.',
      image: {
        src: '/images/solutions/document-management-software/feature-1.jpg',
        alt: 'Compliance officer reviewing document audit trail reports on a dual-monitor workstation in a professional office',
      },
    },
    {
      heading: 'Retention Without the Calendar',
      description:
        'Schedules run in the background. Approaching expiry surfaces as a reviewer task — not a crisis discovered months after a document should have been addressed.',
      image: {
        src: '/images/solutions/document-management-software/feature-2.jpg',
        alt: 'Healthcare information management team reviewing document retention workflow together in a conference room',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Security & Compliance',
      description:
        'A DMS is one layer of the compliance stack. Our Security & Compliance engagement hardens your access controls, produces the Zero-Trust evidence package, and prepares you for an OCR or DOI examination across every system — not just document storage.',
      href: '/services/security-compliance',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
    {
      title: 'EHR & EMR Development',
      description:
        'Clinical documents originate in the EHR. If you are building or replacing your clinical record system, our DMS integrates directly — every document the EHR produces lands in the correct retention schedule and audit trail from day one.',
      href: '/solutions/ehr-emr-development',
      icon: 'Activity',
      pageType: 'solution',
    },
    {
      title: 'Product Discovery',
      description:
        'Before building your DMS, a discovery sprint maps every document type, retention obligation, and compliance gap — so the platform is scoped and budgeted correctly before a line of code is written.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How does the system handle different retention schedules for different document types?',
      answer:
        'Retention rules are configured as a schedule matrix during discovery — each document type (consent form, clinical note, insurance policy, claims file, credentialing record) is mapped to its applicable retention period under HIPAA, state medical records law, or state DOI requirements. The retention engine applies these rules automatically at ingestion, so a patient consent form and a commercial policy declaration are each held for their respective required periods without manual intervention. Rules are managed by compliance administrators through a configuration interface — no code change required to update a schedule when regulations change.',
    },
    {
      question: 'What does the audit trail capture, and can we produce it for an OCR investigation?',
      answer:
        'The audit trail captures every document access, download, print, share, modification, version change, and deletion attempt — logging the timestamp, actor identity (user ID and role), IP address, and action type for each event. Logs are cryptographically protected against modification and retained according to the configured retention policy. For an OCR investigation or DOI examination, export tools produce structured audit reports in formats commonly requested by examiners — filterable by document, by user, by date range, or by action type.',
    },
    {
      question: 'How does legal hold work in practice — can we isolate one custodian without affecting the rest of the organization?',
      answer:
        'A legal hold is applied through the administrative console, scoped by custodian, matter, date range, or keyword. Documents matching the hold scope are frozen — they cannot be modified, shared externally, or destroyed until the hold is formally lifted by an authorized administrator. The hold scope is contained: documents outside it continue through their normal lifecycle without interruption. Every hold placement, modification, and lift is logged with actor and timestamp, producing a court-admissible chain-of-custody record that travels with any e-discovery export.',
    },
    {
      question: 'How does the DMS integrate with our existing EHR and insurance management systems?',
      answer:
        'Integration is planned during the discovery phase and built as the first platform component. For EHR systems (Epic, Cerner, Meditech), we use FHIR R4 and HL7 v2 to pull clinical documents into the DMS automatically — applying classification rules and retention schedules at the source. For insurance management systems (Applied Epic, HawkSoft), we use direct API connectors or custom adapters. Microsoft SharePoint and Microsoft 365 sync via Microsoft Graph API. In every case, the source system remains the system of record for the originating workflow — the DMS becomes the system of record for the document archive and its compliance obligations.',
    },
    {
      question: 'What does implementation typically cost and how long does it take?',
      answer:
        'A custom DMS for a mid-market healthcare or insurance organization — covering document ingestion, classification, retention enforcement, audit trail, legal hold, and core source system integrations — typically takes 16–26 weeks from discovery to production, depending on the number of document types, integration complexity, and migration volume. Investment typically ranges from $150,000 to $550,000 for a full custom build. We deliver in phases, with the retention engine and audit infrastructure first, so your compliance obligations are addressed before the full platform is complete.',
    },
    {
      question: 'How do you migrate documents from paper archives and legacy digital storage?',
      answer:
        'Migration is planned from the discovery sprint onward. For paper archives, we design a scanning and OCR workflow that extracts text and applies classification rules to each scanned document. For legacy digital storage (shared drives, prior DMS, SharePoint), we build automated extraction and transformation pipelines that reclassify documents, apply the correct retention schedules, and migrate them with a reconciliation report at each stage. Records migrate by type or department in validated waves — we never do a single big-bang migration — with a documented rollback plan at every stage.',
    },
  ],

  cta: {
    title: 'Ready to Build a Document System That Passes the Audit?',
    description:
      'Book a free 30-minute discovery call. We will review your current document landscape, retention obligations, integration environment, and compliance gaps, then outline a realistic scope and timeline for a custom document management system built for your regulatory world.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the document lifecycle', href: '#signature' },
  },

  _unverified: [
    'hero.heroImage.src — sourced from Unsplash (photo-1762341113148, woman at desk with laptop and folder). Needs human visual review before publish to confirm it fits compliance/document management context.',
    'imageFeatures[0].image.src — sourced from Unsplash (photo-1657727534685, man at desk with laptop and monitor). Needs human visual review before publish.',
    'imageFeatures[1].image.src — sourced from Unsplash (photo-1769739576456, team meeting in conference room). Needs human visual review before publish.',
    'complianceSpotlight.badges — "SOC 2 Type II" listed; confirm whether company has SOC 2 Type II attestation or is in progress.',
    'complianceDetail.frameworks — "SOC 2 Type II" same verification as complianceSpotlight.',
    'complianceDetail.safeguards[5] — HIPAA-eligible Azure regions and failover claims reflect Azure capability, not a specific shipped deployment. Confirm deployment architecture matches.',
    'faq[4] — pricing range "$150k–$550k" and timeline "16–26 weeks" are estimates based on comparable DMS project scope. Confirm against actual planned engagement structure.',
    'integrations[0..1] — Epic and Cerner: FHIR R4/HL7 v2 capabilities are industry-standard; confirm connectivity is within current technical capacity.',
    'integrations[3] — Applied Epic API requires Applied Systems developer portal access. Confirm integration approach and portal access before publishing.',
    'integrations[3] — HawkSoft (listed via Applied Epic note) has limited public API; verify integration feasibility.',
  ],
};

export default documentManagementSoftware;
