import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Life Sciences / Clinical Operations)
// Buyer: VP / Head of Clinical Operations, Director of Clinical Trial
//   Management, Head of Clinical Systems, or CIO at US biotechs, mid-size
//   pharma sponsors, and contract research organizations (CROs). Secondary:
//   Director of Site Management, Clinical QA Lead.
//
// Buyer mindset: "I run trials across sites I don't fully control, under
//   sponsor and regulatory scrutiny. A CTMS that fails inspection — or that
//   becomes another spreadsheet wrapper — costs us studies, milestones, and
//   credibility with sponsors and the FDA."
//
// Top 3 buyer questions:
//   1. "Will this give us a single, current source of truth across sites,
//       studies, and partners — or am I still chasing spreadsheets and
//       email threads to answer a sponsor question?"
//   2. "Will it stand up to a sponsor or FDA / EMA inspection — audit trail,
//       e-signature awareness, traceability across study conduct events?"
//   3. "Will it coexist with our EDC, eTMF, IRT/RTSM, safety, and finance
//       systems without forcing a rip-and-replace of stack we already
//       validated?"
//
// Key trust issue: Multi-year, multi-million CTMS programs that overrun,
//   miss go-live, displace working spreadsheets badly enough that ops staff
//   keep them in parallel, or surface inspection findings on audit-trail
//   gaps the customer thought were closed.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Validation execution, IQ/OQ/PQ
//     authoring, computer-systems validation (CSV), sponsor acceptance, and
//     any regulatory submission remain with the customer's QA, clinical
//     operations, and regulatory functions.
//   - No vendor names anywhere on the page (no Veeva, Medidata, Oracle Siebel
//     CTMS, IQVIA CTMS, eClinical Solutions, Clario, Calyx, Suvoda, etc.).
//   - No EDC / eTMF / IRT / safety vendor names either. Integration capability
//     is described as documented APIs and standard exchange formats.
//   - Framework names (21 CFR Part 11, EU Annex 11, ICH-GCP, HIPAA, GDPR,
//     CDISC) are retained for audience-signaling and SEO, but always framed
//     as design awareness — never as certification or compliance promises.
//   - No fixed durations, no fixed costs, no promised regulatory outcomes,
//     no promised enrollment, monitoring, or query-rate improvements.
//
// Signature: ClinicalTrialControlPlane — hierarchical / flow visualization
//   (§8.3 patterns 2 + 3) — three bands (setup inputs → operations lifecycle
//   → evidence outputs) sitting inside a design-awareness perimeter labeled
//   with the frameworks common to regulated clinical operations. Argument:
//   "Every study, site, visit, and finding sits on one control plane — and
//   every action it produces leaves an audit-trail-aware record your QA,
//   monitoring, and sponsor stakeholders can read."
//
// Composition mirrors the AI Pharma and LIMS precedents (same regulated,
// life-sciences archetype, same liability stance):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) → signature (dark) →
//   complianceDeepDive (light) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from the Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no verified CTMS engagement yet.
//   - No IntegrationsPanel — the liability stance forbids naming EDC, eTMF,
//     IRT, or safety vendors. Integration capability is woven into feature
//     prose and the signature visual instead.
//   - ComplianceSpotlight placed before signature as trust gate (same
//     pattern as ai-pharma, lims, ehr-emr-development).

const ctms: SolutionPageData = {
  slug: 'ctms',
  title: 'Custom Clinical Trial Management Systems (CTMS)',
  shortDescription:
    'Custom Clinical Trial Management Systems for sponsors, biotechs, and CROs — one operational source of truth across studies, sites, visits, monitoring, issues, and site payments, built around the way your clinical operations team actually runs trials.',

  metaTitle:
    'Custom CTMS Development | Clinical Trial Management Systems',
  metaDescription:
    'Custom Clinical Trial Management System (CTMS) development for US sponsors, biotechs, and CROs. One operational source of truth across studies, sites, visits, monitoring, issues, and site payments — designed around the way your clinical operations team actually runs trials.',
  keywords: [
    'CTMS software development',
    'custom CTMS development',
    'clinical trial management system',
    'clinical operations software',
    'clinical trial software development',
    'sponsor CTMS software',
    'CRO CTMS software',
    'biotech clinical trial software',
    'ICH-GCP clinical software',
    '21 CFR Part 11 CTMS',
    'risk-based monitoring software',
    'site management software',
    'clinical trial payments software',
  ],
  canonicalPath: '/solutions/ctms',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'CTMS', href: '/solutions/ctms' },
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
  signatureComponent: 'ClinicalTrialControlPlane',

  hero: {
    badge: 'Clinical Solutions',
    headline:
      'One CTMS your monitors actually use and your sponsors actually trust.',
    subhead:
      'Custom Clinical Trial Management Systems for US sponsors, biotechs, and CROs — one operational source of truth across studies, sites, visits, monitoring, issues, and site payments, built around the way your clinical operations team actually runs trials.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the control plane', href: '#signature' },
    heroImage: {
      src: '/images/solutions/ctms/hero.jpg',
      alt: 'Clinical research professional reviewing trial monitoring information on a laptop in a medical setting',
    },
    metrics: [
      {
        value: 'One source of truth',
        label: 'Across studies, sites, and visits',
        description:
          'A single operational record across the trial portfolio — sites, subjects, visits, issues, and payments — instead of disconnected spreadsheets and inboxes.',
      },
      {
        value: 'Risk-based monitoring',
        label: 'Central, remote, and on-site visits in one workflow',
        description:
          'A single monitoring engine that supports central, remote, and on-site visits, with configurable risk indicators and thresholds tuned to your monitoring plan.',
      },
      {
        value: 'Built to coexist',
        label: 'With your EDC, eTMF, IRT, and safety stack',
        description:
          'Documented APIs and standard data formats your integration team can stand behind — no rip-and-replace of the systems your team already relies on.',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'Portfolio visibility',
      label: 'Studies, sites, and visits in one place',
      description:
        'Live operational visibility across the trial portfolio — country, study, site, subject, and visit — replacing scattered status decks and emailed trackers.',
    },
    {
      value: 'Faster site activation',
      label: 'Start-up tasks, essential docs, country approvals',
      description:
        'Activation workflows that surface the next blocking task per site, so country approvals and essential-document collection stop being a hunt across inboxes.',
    },
    {
      value: 'Risk-based monitoring',
      label: 'Risk indicators, thresholds, visit triggers',
      description:
        'A monitoring engine that supports central, remote, and on-site visit workflows, with risk indicators and thresholds tuned to your monitoring plan.',
    },
    {
      value: 'Payments off the spreadsheet',
      label: 'Visit-triggered accruals, holdbacks, pass-throughs',
      description:
        'Site budgets, holdbacks, and pass-throughs handed off to finance via documented APIs, so site payments stop being a quarter-end reconciliation exercise.',
    },
  ],

  features: [
    {
      icon: 'FolderKanban',
      title: 'Portfolio & study management',
      description:
        'Portfolio, program, study, country, and site views with milestones, status, and risk signals. Configurable study templates so each new protocol does not start from a blank page.',
    },
    {
      icon: 'Building2',
      title: 'Site selection, start-up & activation',
      description:
        'Investigator and site database, feasibility tracking, essential-document checklists, country approval timelines, and activation task workflows — visible at every level from portfolio to site.',
    },
    {
      icon: 'Users',
      title: 'Subject enrollment & status tracking',
      description:
        'Screening, enrollment, randomization, screen-fail, discontinuation, and completion tracking per site and per cohort, kept in sync with upstream EDC and IRT systems through documented APIs your IT team controls.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Monitoring visit workflows',
      description:
        'Pre-visit planning, on-site, remote, and central monitoring visit reports, findings capture, follow-up letters, and CRA / CRO oversight — engineered to fit risk-based and traditional monitoring plans alike.',
    },
    {
      icon: 'AlertOctagon',
      title: 'Issue, action, and CAPA tracking',
      description:
        'Findings, action items, deviations, and CAPAs tracked with owners, due dates, escalation, and resolution history — so issues survive monitor turnover and stay visible to study managers and sponsors.',
    },
    {
      icon: 'Wallet',
      title: 'Site budgets, contracts & payments',
      description:
        'Per-visit fee schedules, holdbacks, pass-throughs, and milestone-driven site payment accruals, exportable to your finance and AP systems via documented APIs — no shadow spreadsheet of what each site is owed.',
    },
  ],

  benefits: [
    {
      icon: 'Eye',
      title: 'One operational truth across the portfolio',
      description:
        'Sponsors, study managers, monitors, and CRO leads see the same status, the same risk signals, and the same site state — replacing the patchwork of decks, spreadsheets, and emailed trackers.',
    },
    {
      icon: 'Rocket',
      title: 'Faster, cleaner site activation',
      description:
        'Start-up tasks, essential-document checklists, and country-approval timelines tracked per site so the next blocking step is always visible — and activation stops being a hunt across inboxes.',
    },
    {
      icon: 'Activity',
      title: 'Risk-based monitoring you can actually execute',
      description:
        'Configurable risk indicators, thresholds, and visit cadences support central, remote, and on-site monitoring in one workflow, so your monitoring plan becomes operational instead of aspirational.',
    },
    {
      icon: 'Network',
      title: 'Coexists with the stack your team already runs',
      description:
        'Documented APIs and standard data formats let the CTMS sit alongside your EDC, eTMF, IRT/RTSM, safety, and finance systems — your IT team owns the connectors, and the systems your team relies on stay in place.',
    },
    {
      icon: 'Wallet',
      title: 'Site payments off the spreadsheet',
      description:
        'Visit-triggered accruals, holdbacks, and pass-through tracking flow into finance via documented APIs, so site payments stop being a spreadsheet exercise reconciled at quarter end.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, scope & engineering framing',
      description:
        'We map your trial portfolio, monitoring model, current spreadsheet / system landscape, and integration points; identify the highest-pain workflows; and frame the engineering and integration shape before scoping the build. Validation strategy and sponsor acceptance criteria stay with your team.',
      duration: 'Scoped during discovery',
      deliverable:
        'Workflow map, system inventory, integration outline, prioritized roadmap, engineering and integration framing document',
    },
    {
      title: 'Architecture & validation-aware engineering plan',
      description:
        'Design the data model, audit-trail architecture, role-scoped access model, monitoring engine, and integration topology, alongside your IT, security, QA, and clinical operations stakeholders. Documents are produced as inputs into your computer-systems validation work.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, data model, audit-trail design, security architecture, integration outline, validation-input package',
    },
    {
      title: 'Build & iterate',
      description:
        'Iterative full-stack development of the platform — portfolio, study, site, subject, monitoring, issue, and payment modules — with engineering artifacts (test coverage, traceability matrices, change logs) captured as part of the build rather than reverse-engineered at the end.',
      duration: 'Phased per engagement',
      deliverable:
        'Working platform, engineering artifact set, audit-trail dashboards, configurable study templates, integration hooks',
    },
    {
      title: 'Integration & handoff to your QA / clinical operations function',
      description:
        'Connect to your existing EDC, eTMF, IRT/RTSM, safety, and finance systems via documented APIs and standard data formats, run end-to-end UAT with your clinical operations and CRA teams, and assemble the engineering documentation your QA function uses as inputs into IQ/OQ/PQ and CSV.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set for QA / CSV intake',
    },
    {
      title: 'Deployment, hypercare & lifecycle operations',
      description:
        'Phased rollout to study teams, monitors, and CRO partners with an initial hypercare period covering monitoring stability, change-control reviews, and adoption support — so the platform stays in a known state as studies progress.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbook, hypercare support, training materials',
    },
  ],

  capabilities: [
    'Audit-trail logging and e-signature support in regulated clinical workflows',
    'Role-scoped access for sponsor, CRO, study manager, monitor, and finance users',
    'Configurable study templates and protocol-version awareness',
    'Risk-based, remote, and on-site monitoring visit workflows',
    'Issue, action, deviation, and CAPA tracking with escalation',
    'Visit-triggered site payment accruals and holdback / pass-through tracking',
    'Documented APIs and standard data formats for EDC, eTMF, IRT, safety, and finance',
    'PHI / subject data segmentation, tokenization, and least-privilege defaults',
    'WCAG 2.1 AA accessibility for sponsor and monitor-facing interfaces',
    'Engineering artifacts and traceability your QA team can use as CSV inputs',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Python (analytics & integration tooling)',
    'Azure App Service / Azure Container Apps',
    'Azure AD / Entra ID (identity & MFA)',
    'Azure Key Vault (key & secret management)',
    'Azure SQL / PostgreSQL',
    'Azure Service Bus / Event Grid',
    'Terraform (IaC)',
    'OpenTelemetry + Application Insights (audit & observability)',
    'HL7 FHIR R4 / CDISC ODM (open data standards)',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered with audit-trail, validation, and inspection awareness for regulated clinical operations',
    highlightText:
      'audit-trail, validation, and inspection awareness',
    statusText:
      'Engineering posture aligned with the practices common in ICH-GCP, 21 CFR Part 11, EU Annex 11, HIPAA, and GDPR environments',
    pillars: [
      {
        icon: 'ShieldCheck',
        title: 'Audit-trail-aware engineering',
        description:
          'Audit logging, e-signature support, and approval gates designed as first-class engineering features. Your QA team executes validation; the platform supplies the engineering evidence.',
      },
      {
        icon: 'FileCheck',
        title: 'Traceability your QA team can use',
        description:
          'Requirements, design, build, and test artifacts produced with traceability in mind — engineered as inputs your QA function can use during computer-systems validation (CSV) rather than reconstructed at the end.',
      },
      {
        icon: 'Lock',
        title: 'Subject and PHI data treated as first class',
        description:
          'Subject and patient data is segmented, tokenized, and access-scoped at the application layer by default, with role-scoped views for sponsor, CRO, monitor, and finance users.',
      },
    ],
    badges: [
      'ICH-GCP',
      '21 CFR Part 11',
      'EU Annex 11',
      'HIPAA',
      'GDPR',
      'CDISC',
      'HL7 FHIR',
    ],
  },

  complianceDetail: {
    frameworks: [
      'ICH-GCP (Good Clinical Practice)',
      '21 CFR Part 11 (electronic records & signatures)',
      'EU Annex 11 (computerised systems)',
      'HIPAA + HITECH',
      'GDPR',
      'CDISC standards (ODM / SDTM / Define-XML, where applicable)',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the build so your QA function has the documentation, traceability, and test evidence they need to execute computer-systems validation (CSV). We do not perform validation, write IQ/OQ/PQ, or accept the system on your behalf.',
      },
      {
        icon: 'History',
        title: 'Audit trail as an engineering default',
        description:
          'Every action — create, read, update, delete, sign, approve, and re-open — is logged with actor, timestamp, resource, before/after state, and outcome. Audit records are immutable and exportable for your QA, sponsor, and inspection reviewers.',
      },
      {
        icon: 'PenLine',
        title: 'E-signature support designed for regulated workflows',
        description:
          'E-signature flows are engineered with re-authentication, signed-meaning capture, and tamper-evident records — aligned with the practices common in 21 CFR Part 11 and EU Annex 11 environments. Acceptance of those signatures for any specific regulatory purpose is your team’s decision.',
      },
      {
        icon: 'Lock',
        title: 'Subject / PHI data segmentation',
        description:
          'Subject and patient data is tokenized at the application gateway, scoped by role, and kept out of monitoring and reporting layers wherever the work allows. Least-privilege defaults across modules and APIs.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & access control',
        description:
          'Standards-based identity with enforced MFA, role-scoped access across sponsor, CRO, monitor, finance, and IT users, and session controls designed for regulated clinical environments.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for regulated environments',
        description:
          'Hosted on cloud regions and configurations commonly used for sensitive clinical data, with private endpoints, infrastructure defined and reviewed via Terraform, and environment promotion gates your QA and IT teams can sign.',
      },
    ],
    auditNote:
      'Every component is engineered with audit-trail logging, role-scoped access, traceability, and lifecycle artifacts your QA, clinical operations, IT, and regulatory teams can use as inputs into their own computer-systems validation (CSV) and inspection-readiness work. Final validation execution, IQ/OQ/PQ authoring, sponsor acceptance, and any regulatory submission remain solely the customer’s responsibility, executed by the customer’s QA and regulatory functions. AIvanceWorks does not represent, attest, or warrant compliance with ICH-GCP, 21 CFR Part 11, EU Annex 11, HIPAA, GDPR, or any other regulatory framework on behalf of any customer.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Clearer signals for monitors and study managers',
      description:
        'Dashboards that surface enrollment, monitoring, and risk signals across the portfolio — supporting your monitors, study managers, and sponsor leads instead of replacing their judgement.',
      image: {
        src: '/images/solutions/ctms/feature-1.jpg',
        alt: 'Clinical operations professional reviewing trial status data on a laptop in a hospital corridor',
      },
    },
    {
      heading: 'Site payments your finance team will actually accept',
      description:
        'Visit-triggered accruals, holdbacks, and pass-throughs engineered as part of the platform — so site payments stop being a spreadsheet exercise reconciled at quarter end.',
      image: {
        src: '/images/solutions/ctms/feature-2.jpg',
        alt: 'Finance and clinical operations team members reviewing site payment records together',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Randomization & Trial Supply Management (RTSM / IRT)',
      description:
        'A CTMS runs the trial; an RTSM holds the randomization and the drug supply that the trial depends on. Our RTSM engagement builds the role-aware randomization, kit dispensation, and depot / site supply engine — designed to coexist with your CTMS through documented APIs your IT team owns.',
      href: '/solutions/rtsm',
      icon: 'Shuffle',
      pageType: 'solution',
    },
    {
      title: 'Electronic Trial Master File (eTMF)',
      description:
        'A CTMS runs the trial; an eTMF holds the essential documents that prove how it was run. Our eTMF engagement builds the zone-aware, audit-trail-aware evidence spine that sits alongside the CTMS — designed so your QA team can answer "are we inspection-ready" any day, not just at study lock.',
      href: '/solutions/etmf',
      icon: 'FileText',
      pageType: 'solution',
    },
    {
      title: 'Security & Compliance',
      description:
        'Clinical operations software lives or dies inside the audit trail. Our security & compliance practice helps shape your stack with audit-trail logging, role-scoped access, and lifecycle engineering your QA team can review and your sponsors can accept.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Will this CTMS replace our EDC, eTMF, IRT, or safety system?',
      answer:
        'No. The CTMS we build is designed to coexist with the EDC, eTMF, IRT/RTSM, safety, and finance systems you already run, using documented APIs and standard data exchange formats (for example, HL7 FHIR R4 and CDISC ODM where applicable). It is the operational source of truth for study conduct — sites, subjects, visits, monitoring, issues, and payments — and it hands off to your validated upstream and downstream systems through connections your IT and integration teams own.',
    },
    {
      question:
        'Will the platform satisfy a sponsor or FDA / EMA inspection?',
      answer:
        'We are a software engineering partner. We engineer the platform with the audit-trail, e-signature, role-scoped access, and traceability practices that are common in ICH-GCP, 21 CFR Part 11, and EU Annex 11 environments, and we deliver an engineering artifact set your QA team can use as inputs into computer-systems validation (CSV). Final validation execution, IQ/OQ/PQ authoring, sponsor acceptance, and inspection responses are owned by your QA, clinical operations, and regulatory functions. We do not represent compliance with any framework on your behalf.',
    },
    {
      question:
        'How do you handle subject data, PHI, and access control?',
      answer:
        'Subject and patient data is tokenized at the application gateway, segmented by sensitivity, and access-scoped by role — sponsor, CRO, monitor, study manager, finance, and IT users each see only what their role requires. PHI is kept out of monitoring and reporting layers wherever the work allows. Every action is logged with actor, timestamp, resource, and outcome so your QA and sponsor reviewers can trace activity through the platform. The engineering practices are aligned with what customers in regulated clinical environments typically expect; we make no compliance certifications on your behalf.',
    },
    {
      question:
        'Can you support risk-based monitoring, remote monitoring, and on-site visits in one workflow?',
      answer:
        'Yes. The monitoring engine is engineered around a single visit-and-finding model that supports central, remote, and on-site monitoring visits, with configurable risk indicators, thresholds, and visit cadences tuned to your monitoring plan. Findings, action items, deviations, and CAPAs are tracked with owners, due dates, escalation, and resolution history — so issues survive monitor turnover and stay visible to study managers and sponsors.',
    },
    {
      question:
        'How are site payments handled?',
      answer:
        'Site budgets, per-visit fee schedules, holdbacks, and pass-throughs are configured per study. As visits complete and milestones are reached, the platform calculates accruals and prepares them for handoff to your finance and AP systems via documented APIs. Payment status and history live alongside the operational record for each site, so finance, clinical operations, and site management see the same numbers.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Scope, timeline, and investment vary by program and are defined during discovery — we do not quote fixed durations, fixed costs, or fixed inspection outcomes on a public page. Discovery is where we map your trial portfolio, monitoring model, current system and spreadsheet landscape, and integration points, then frame the engineering and integration shape before any production-bound code is written. After discovery, the build is typically phased so the highest-priority capability goes live first and your clinical operations and QA teams can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Bringing your CTMS into one control plane?',
    description:
      'Book a free 30-minute discovery call. We will review your trial portfolio, monitoring model, current systems, and integration constraints, then outline a realistic engineering and integration shape. Validation, sponsor acceptance, and regulatory decisions remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the control plane', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing with explicit customer-ownership of validation, IQ/OQ/PQ, computer-systems validation (CSV), sponsor acceptance, and any regulatory submission. Legal review recommended before publish to confirm liability framing.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification or attestation.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement"; confirm no internal estimates leak into copy.',
    'No vendor names retained anywhere on the page (no Veeva, Medidata, Oracle Siebel CTMS, IQVIA, Clario, Calyx, Suvoda, etc.). No EDC / eTMF / IRT / safety vendor names either. Verify by grep before publish.',
    'imageFeatures alt text describes generic clinical-operations scenes; confirm photo content matches before publish.',
  ],
};

export default ctms;
