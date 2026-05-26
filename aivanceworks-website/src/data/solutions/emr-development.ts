import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Healthcare)
// Buyer: Practice owner, Office Manager, MD-founder at 1–20 provider ambulatory clinics
// Dominant question: "Will my staff adopt this, and will it speed up charting and billing?"
// Signature: ClinicalWorkflowOrchestratorEmr — single-encounter chart-and-billing loop
//
// Differentiation from EHR sibling page:
//   - ONC defines an EMR as a digital chart confined to a single practice
//   - Buyer thinks in clinic hours saved, claims paid faster, staff onboarding speed
//   - Specialty templates, scheduling+charting+billing in one flow, MIPS-ready reporting
//   - Lighter integration surface (clearinghouses, payer portals, e-Rx, lab couriers, telehealth)
//   - Compliance: HIPAA + HITECH + ONC ambulatory + MIPS/MACRA quality reporting
//
// Composition follows the existing healthcare Archetype C pattern. No CaseStudySpotlight —
// greenfield; insertable when verified.

const emrDevelopment: SolutionPageData = {
  slug: 'emr-development',
  title: 'Custom EMR Software Development',
  shortDescription:
    'Custom, HIPAA-compliant Electronic Medical Record software for ambulatory practices and specialty clinics — purpose-built for faster charting, integrated scheduling and billing, and MIPS-ready quality reporting from day one.',

  metaTitle: 'Custom EMR Software Development | Ambulatory Electronic Medical Records',
  metaDescription:
    'We build custom EMR software for ambulatory practices and specialty clinics — fast charting, integrated billing and claims, e-prescribing, MIPS quality reporting, and HIPAA compliance built around your workflow.',
  keywords: [
    'custom EMR development',
    'EMR software development',
    'HIPAA compliant EMR',
    'ambulatory EMR system',
    'specialty EMR software',
    'practice management EMR',
    'EMR for small practice',
    'medical records software development',
    'MIPS ready EMR',
    'e-prescribing EMR',
    'EMR integration services',
    'EMR billing integration',
  ],
  canonicalPath: '/solutions/emr-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'EMR Development', href: '/solutions/emr-development' },
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
  signatureComponent: 'ClinicalWorkflowOrchestratorEmr',

  hero: {
    badge: 'Healthcare Solutions',
    headline: 'Practice-grade EMR that speeds charting and gets you paid.',
    subhead:
      'Custom Electronic Medical Record software built around how your clinic actually runs — specialty-specific charting, integrated scheduling and billing, e-prescribing, and MIPS-ready quality reporting. HIPAA-compliant, ONC-aligned, designed for fast clinician adoption.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the clinic workflow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/emr-development/hero.jpg',
      alt: 'Provider charting a patient encounter on a tablet in an ambulatory clinic exam room',
    },
    metrics: [
      {
        value: 'Charting-First',
        label: 'Designed around the encounter',
        description: 'Specialty templates, voice input, smart text',
      },
      {
        value: 'Billing Built-In',
        label: 'Charting flows into claims',
        description: 'Clearinghouse-ready, payer-aware',
      },
      {
        value: 'MIPS-Ready',
        label: 'Quality reporting from day one',
        description: 'Aligned with 2026 QPP final rule',
      },
    ],
  },

  // Audience test: A practice owner cares about clinic hours saved, claim turnaround,
  // staff onboarding, and avoiding MIPS penalties. All four metrics are capability-framed.
  metricsStrip: [
    {
      value: 'Workflow-First',
      label: 'Built Around the Encounter',
      description:
        'Every screen designed around how a visit actually runs — check-in, vitals, charting, orders, e-Rx, billing — not how a database schema is structured.',
    },
    {
      value: 'Specialty Templates',
      label: 'Charting That Fits Your Practice',
      description:
        'Templates tuned per specialty — pediatrics, dermatology, orthopedics, behavioral health, primary care — with smart text, voice-to-text, and prior-visit auto-population.',
    },
    {
      value: 'Billing Integrated',
      label: 'Charting Flows Into Claims',
      description:
        'Documentation and coding feed claim creation in a single flow. Clearinghouse-ready (Change Healthcare, Availity), payer-portal aware, with claim-status feedback inside the chart.',
    },
    {
      value: 'MIPS-Ready Reporting',
      label: 'Quality Reporting From Day One',
      description:
        'Six quality measures, 75% data completeness, and the 75-point threshold tracked automatically. Aligned with the 2026 QPP final rule and MIPS Value Pathways direction.',
    },
  ],

  // Audience test: A practice owner thinks in clinical-day savings, claim turnaround,
  // and staff adoption — not in technical features. Each card maps to a clinic outcome.
  features: [
    {
      icon: 'ClipboardList',
      title: 'Specialty-Specific Charting',
      description:
        'Documentation templates tuned per specialty, with smart text, voice-to-text, prior-visit auto-population, and structured fields where they matter for billing and quality reporting. Designed to cut documentation time without sacrificing clinical detail.',
    },
    {
      icon: 'CalendarCheck',
      title: 'Scheduling & Front-Desk Workflow',
      description:
        'Multi-provider scheduling with real-time availability, room and equipment booking, waitlist management, patient self-scheduling hooks, and automated SMS/email reminders to cut no-show rates.',
    },
    {
      icon: 'DollarSign',
      title: 'Integrated Billing & Claims',
      description:
        'Charting flows into claim creation with E&M coding suggestions, charge capture, claim scrubbing, clearinghouse submission, and ERA/remit posting. Denials and AR aging surface inside the chart, not in a separate tool.',
    },
    {
      icon: 'Pill',
      title: 'e-Prescribing & Medication Management',
      description:
        'e-Prescribing via Surescripts (NCPDP SCRIPT), including EPCS for controlled substances. Medication history lookup, formulary and benefit checking, drug interaction and allergy alerts, and refill request handling at the chart.',
    },
    {
      icon: 'MessageSquare',
      title: 'Patient Engagement',
      description:
        'SMS reminders, secure messaging, intake form pre-completion, balance notifications, and connection points for a patient portal when you need one. Built to reduce front-desk phone load and improve show rates.',
    },
    {
      icon: 'BarChart3',
      title: 'MIPS & Quality Reporting',
      description:
        'Track and submit Merit-Based Incentive Payment System (MIPS) measures aligned with the 2026 QPP final rule — six quality measures, 75% data completeness, and progress toward the 75-point threshold. MIPS Value Pathway ready as CMS expands the program.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Less Time Charting, More Time With Patients',
      description:
        'Specialty templates, voice-to-text, prior-visit auto-population, and smart text reduce clicks and typing per encounter. Documentation, ordering, and e-prescribing happen inside one flow rather than across siloed tools.',
    },
    {
      icon: 'DollarSign',
      title: 'Faster, Cleaner Claims',
      description:
        'Charting and coding feed claim creation in real time. Built-in scrubbing, clearinghouse submission, and ERA posting shorten the claim cycle and shrink AR days. Denials and rejections route back to the chart with context, not as standalone tickets.',
    },
    {
      icon: 'Users',
      title: 'Staff That Actually Adopts the System',
      description:
        'Built around your clinic\'s actual workflow rather than a generic template. Role-specific views, short training cycles, and minimal click-paths mean front desk, MAs, providers, and billers are all productive in days, not months.',
    },
    {
      icon: 'Shield',
      title: 'HIPAA, ONC, and MIPS — Without the Burden',
      description:
        'HIPAA technical safeguards, ONC ambulatory certification criteria alignment, and MIPS quality measure tracking are structural — not bolted on. Avoid the compliance scramble and the year-end MIPS panic.',
    },
    {
      icon: 'Building2',
      title: 'No Per-Provider Licensing Lock-In',
      description:
        'A custom-built EMR eliminates the per-provider fees that scale with every hire. Azure hosting with Infrastructure-as-Code keeps environment costs predictable, and modular architecture means you pay to build only what your practice actually uses.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Clinic Workflow Observation',
      description:
        'We sit in your clinic and observe how a visit actually runs — check-in, vitals, charting, orders, e-Rx, checkout, billing. We interview front desk, MAs, providers, and billers, audit current systems, and identify HIPAA risk areas and MIPS reporting gaps.',
      duration: '1–2 weeks',
      deliverable: 'Clinic workflow maps, role-by-role friction inventory, compliance gap report, project roadmap',
    },
    {
      title: 'System Design & Specialty Tuning',
      description:
        'System architecture and specialty-specific template design — charting templates, order sets, billing rules, MIPS measure mappings, and consent and access control patterns. Reviewed with clinical leads before development begins.',
      duration: '2 weeks',
      deliverable: 'Architecture document, template specifications, MIPS measure plan, security architecture',
    },
    {
      title: 'Core Module Development',
      description:
        'Full-stack development of charting, scheduling, e-prescribing, and billing modules using React/Next.js and .NET on Azure. Weekly demos with clinic stakeholders ensure the build tracks how your team actually works.',
      duration: '8–12 weeks',
      deliverable: 'Functional core modules with unit and integration test coverage, HIPAA-compliant CI/CD pipeline',
    },
    {
      title: 'Integration, Testing & Compliance Validation',
      description:
        'Connect to clearinghouses, payer portals, Surescripts, regional labs, and SMS/telehealth providers. End-to-end testing, penetration testing, HIPAA safeguard validation, and MIPS reporting walk-throughs.',
      duration: '3–4 weeks',
      deliverable: 'Integration documentation, security test report, HIPAA safeguard checklist, MIPS reporting validation',
    },
    {
      title: 'Go-Live, Training & Hypercare',
      description:
        'Phased rollout by role — front desk first, then clinical staff, then providers — with role-specific training, parallel-run data validation, and a dedicated hypercare period. We monitor usage, claim turnaround, and clinician feedback after go-live.',
      duration: '2–3 weeks',
      deliverable: 'Production deployment, training materials, monitoring dashboards, hypercare runbook',
    },
  ],

  capabilities: [
    'HIPAA-compliant data storage and transmission',
    'HL7 FHIR R4 / US Core / USCDI v3 conformance',
    'ONC Health IT certification criteria alignment (ambulatory)',
    'Specialty-specific charting templates',
    'E&M coding assistance and claim scrubbing',
    'Clearinghouse submission and ERA posting',
    'e-Prescribing via Surescripts incl. EPCS',
    'MIPS / MVP quality measure tracking',
    'Role-based access control',
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
    'Surescripts (NCPDP SCRIPT, EPCS)',
    'Twilio / SMS providers',
    'Azure Application Insights',
    'Terraform (IaC)',
  ],

  integrations: [
    {
      name: 'Clearinghouses',
      category: 'Claims',
      connectionMethod: 'X12 837P/I via SFTP or API',
      capabilities: [
        'Claim submission (Change Healthcare, Availity, Office Ally)',
        'Real-time eligibility (270/271)',
        'ERA / remit auto-posting (835)',
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
      name: 'Reference Labs',
      category: 'LIS / Lab',
      connectionMethod: 'HL7 v2 / FHIR R4',
      capabilities: [
        'Order routing to Quest, LabCorp, and regional labs',
        'Discrete result filing and trend graphs',
        'Abnormal value flagging at the chart',
      ],
    },
    {
      name: 'Payer Portals',
      category: 'Insurance',
      connectionMethod: 'Portal automation + X12 270/271',
      capabilities: [
        'Real-time eligibility and benefits',
        'Prior authorization status lookup',
        'Claim status feedback inside the chart',
      ],
    },
    {
      name: 'Telehealth Platforms',
      category: 'Virtual Care',
      connectionMethod: 'API / SMART on FHIR launch',
      capabilities: [
        'Embedded video visit launch (Zoom Health, Doxy.me)',
        'Visit documentation in the same encounter record',
        'Telehealth-specific billing modifiers',
      ],
    },
    {
      name: 'Patient SMS / Messaging',
      category: 'Engagement',
      connectionMethod: 'Twilio / REST',
      capabilities: [
        'Appointment reminders and confirmations',
        'Intake form pre-completion links',
        'Balance and statement notifications',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Trust by default',
    title: 'HIPAA-Compliant, ONC-Aligned, MIPS-Ready',
    highlightText: 'HIPAA-Compliant, ONC-Aligned, MIPS-Ready',
    statusText: 'HIPAA · HITECH · ONC HTI-1 · MIPS · SOC 2',
    pillars: [
      {
        icon: 'Shield',
        title: 'Data Encryption',
        description:
          'AES-256 at rest, TLS 1.3 in transit. All PHI encrypted end-to-end with keys managed through Azure Key Vault.',
      },
      {
        icon: 'Lock',
        title: 'Access Controls',
        description:
          'Role-based access with MFA, session management, and complete audit trails. Every data access logged and traceable across front desk, clinical, and billing roles.',
      },
      {
        icon: 'Eye',
        title: 'MIPS-Ready Reporting',
        description:
          'Quality measures, data completeness, and threshold progress tracked automatically. Aligned with the 2026 QPP final rule and ready for MIPS Value Pathway transition.',
      },
    ],
    badges: [
      'HIPAA',
      'HITECH',
      'SOC 2 Type II',
      'HL7 FHIR R4',
      'ONC HTI-1',
      'USCDI v3',
      'MIPS-Ready',
    ],
  },

  complianceDetail: {
    frameworks: ['HIPAA', 'HITECH', 'SOC 2 Type II', 'ONC Health IT (HTI-1, ambulatory)', 'CMS QPP / MIPS'],
    safeguards: [
      {
        icon: 'Lock',
        title: 'Encryption at rest & in transit',
        description:
          'AES-256 for stored PHI, TLS 1.3 for all network traffic. Encryption keys managed via Azure Key Vault with automated rotation.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-based access',
        description:
          'Microsoft Entra ID or Azure AD B2C with enforced MFA, role-based access for front desk, MAs, providers, and billers, and least-privilege defaults across every module.',
      },
      {
        icon: 'FileText',
        title: 'Comprehensive audit logging',
        description:
          'Every clinical data access, modification, and export logged with timestamp, actor, resource, and outcome. Retained per HIPAA requirements and exportable for OCR review or SOC 2 audit.',
      },
      {
        icon: 'Activity',
        title: 'Session management & re-authentication',
        description:
          'Automatic session timeouts, re-authentication for sensitive actions (e.g., prescribing, EPCS), and device fingerprinting to flag suspicious access patterns.',
      },
      {
        icon: 'BarChart3',
        title: 'MIPS measure tracking',
        description:
          'Quality measures captured as discrete data inside the chart, with running completeness scores and threshold-progress dashboards. Reporting bundles aligned with the 2026 QPP final rule.',
      },
      {
        icon: 'Building2',
        title: 'HIPAA-eligible Azure infrastructure',
        description:
          'Hosted in HIPAA-eligible Azure regions with private endpoints for network isolation, automated failover, and infrastructure defined and audited via Terraform.',
      },
    ],
    auditNote:
      'Every module is architected to meet HIPAA technical safeguard requirements, align with ONC Health IT certification criteria under the HTI-1 final rule (ambulatory scope), and support MIPS quality reporting under the 2026 CMS Quality Payment Program final rule. We provide documentation, audit trails, and security control matrices suitable for OCR review, SOC 2 attestation, or ONC certification assessment.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Charting That Keeps Up With You',
      description:
        'Specialty-specific templates, voice-to-text, and smart-text snippets cut documentation time without sacrificing clinical detail. Prior-visit fields auto-populate so you start each note with context, not a blank screen.',
      image: {
        src: '/images/solutions/emr-development/feature-1.jpg',
        alt: 'Provider documenting a patient encounter using a specialty-specific template on a tablet',
      },
    },
    {
      heading: 'Charting Flows Straight Into the Claim',
      description:
        'Documentation, coding, and charge capture happen in one flow. Claims scrub before they leave the building, clearinghouse responses post back inside the chart, and denials surface where the next visit gets scheduled — not in a separate billing tool.',
      image: {
        src: '/images/solutions/emr-development/feature-2.jpg',
        alt: 'Billing staff reviewing claim status and ERA posting inside the EMR claim management view',
      },
    },
  ],

  relatedPages: [
    {
      title: 'EHR Development',
      description:
        'Multi-facility health system or care network? An EHR is the right scope — longitudinal record, TEFCA / HIE participation, ONC Health IT Module certification, and cross-organization exchange. Same compliance posture, broader reach.',
      href: '/solutions/ehr-development',
      icon: 'Activity',
      pageType: 'solution',
    },
    {
      title: 'Patient Portals',
      description:
        'Already running an EMR and want to extend patient self-service? Our Patient Portal engagement adds secure messaging, intake form pre-completion, results review, and self-scheduling on top of your existing chart.',
      href: '/solutions/patient-portals',
      icon: 'Users',
      pageType: 'solution',
    },
    {
      title: 'C10 AI Healthcare',
      description:
        'EMR live and asking what AI to layer on next? Our healthcare AI engagement adds ambient documentation, grounded decision-support, and RCM copilots — clinician-in-the-loop and inside the audit trail your EMR already enforces.',
      href: '/solutions/ai-healthcare',
      icon: 'Stethoscope',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'What is the difference between an EMR and an EHR, and which do we need?',
      answer:
        'The Office of the National Coordinator for Health Information Technology (ONC) draws a clear distinction. An EMR is a digital chart confined to a single practice — it replaces paper, organizes the encounter, and feeds your billing. An EHR is built to share data across the care continuum — multiple providers, facilities, labs, and Health Information Exchanges. If your goal is faster charting, integrated scheduling and billing, and MIPS-ready reporting inside one clinic or a small group, an EMR is the right starting point. If you operate across multiple facilities or need TEFCA / HIE participation, our EHR engagement is the better fit.',
    },
    {
      question: 'How do you ensure the EMR is HIPAA compliant and ONC-aligned?',
      answer:
        'Compliance is structural, not a checklist applied after the build. We implement HIPAA technical safeguards from the first sprint: AES-256 encryption, role-based access, MFA, comprehensive audit logging, and automatic session management. The architecture aligns with ONC Health IT certification criteria under the HTI-1 final rule at the ambulatory scope — FHIR R4 API endpoints, US Core / USCDI v3 conformance, CDS Hooks, and patient access APIs. Before launch we conduct a formal security assessment and produce documentation suitable for OCR review or SOC 2 attestation.',
    },
    {
      question: 'Will the EMR support MIPS / MVP quality reporting?',
      answer:
        'Yes. Quality measures are first-class — captured as discrete data inside the chart rather than reconstructed at year-end. The platform tracks the six quality measures required for traditional MIPS, monitors 75% data completeness in real time, and reports progress against the 75-point performance threshold maintained through the 2028 performance year. As CMS expands MIPS Value Pathways (MVPs), the measure logic is configurable so you can adopt MVPs without a rebuild.',
    },
    {
      question: 'Can the EMR integrate with our clearinghouse, payer portals, and labs?',
      answer:
        'Yes. We integrate with the major clearinghouses (Change Healthcare, Availity, Office Ally) for X12 837P/I claim submission, 270/271 eligibility, and 835 ERA posting. Payer portal integration covers eligibility, prior auth, and claim status lookup. Lab interfaces support Quest, LabCorp, and regional labs via HL7 v2 or FHIR R4 with discrete result filing and abnormal value flagging at the chart. Surescripts handles e-prescribing including EPCS for controlled substances.',
    },
    {
      question: 'How do you handle migration from our current EMR or paper records?',
      answer:
        'Migration is planned from discovery. We map your current data model to the target FHIR resource schema and USCDI v3 data classes, build automated extraction and transformation pipelines, and validate clinical data integrity in cycles. Migration runs in stages — demographics and schedule first, then problem list and medications, then encounter history — with parallel-run validation at each stage. For paper records, we build structured intake workflows so digitized documents land in the chart with proper indexing.',
    },
    {
      question: 'How fast can our staff adopt this without disrupting the clinic?',
      answer:
        'Adoption is the first thing we design for. We start by observing how your clinic actually runs — not by assuming a generic workflow — and build screens around the roles that use them. Front desk, MAs, providers, and billers each get views tuned to their tasks, with minimal click paths and role-specific training. We deploy in phased role rollouts with parallel-run data validation and a dedicated hypercare period, and we measure adoption — not just usage — after go-live.',
    },
  ],

  cta: {
    title: 'Ready to Build Your Practice Platform?',
    description:
      'Book a free 30-minute discovery call. We will review your clinic workflows, billing and reporting pain, and the integrations you need, then outline a realistic scope for your EMR build.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the clinic workflow', href: '#signature' },
  },

  _unverified: [
    'complianceSpotlight.badges — "SOC 2 Type II" listed; confirm whether company has SOC 2 Type II attestation or is in progress.',
    'complianceSpotlight.badges / complianceDetail.frameworks — "ONC HTI-1" listed; ONC certification is product-specific (Health IT Module). Confirm framing is accurate for ambulatory scope.',
    'metricsStrip / FAQs — MIPS framing references the 2026 QPP final rule (six quality measures, 75% data completeness, 75-point threshold through 2028 performance year); verify against current CMS guidance at publish time.',
    'integrations[*].capabilities — listed capabilities are typical clearinghouse / Surescripts / lab integration features; confirm which have actually been built.',
    'metricsStrip — "USCDI v3" cited as current baseline per ONC; verify (HTI-2 USCDI v4 update was withdrawn Dec 29, 2025).',
  ],
};

export default emrDevelopment;
