import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Life Sciences / Clinical Laboratory)
// Buyer: Director of Laboratory Operations / Lab IT Director / Quality Manager /
//   CIO at clinical labs, hospital laboratories, contract research organizations
//   (CROs), pharma & biotech R&D labs, and ISO 17025-accredited testing labs in
//   the United States. Secondary: Lab Director / Pathologist-in-Chief.
//
// Buyer mindset: "I answer to CAP inspectors, CLIA assessors, FDA investigators,
//   or ISO 17025 assessors. A LIMS that fails an audit costs me my accreditation
//   and my job."
//
// Top 3 buyer questions:
//   1. "Will this work with our existing instruments, LIS, and EHR — or are we
//       facing a rip-and-replace of every interface we already validated?"
//   2. "Will it satisfy CAP / CLIA / ISO 17025 / 21 CFR Part 11 / GLP audit
//       expectations — chain of custody, audit trail, e-signatures, controls?"
//   3. "Can we phase the rollout one lab section at a time so we don't take
//       production lab operations offline?"
//
// Key trust issue: Multi-year LIMS implementations that disrupt sample throughput,
//   blow validation budgets, and fail the next CAP / CLIA / ISO 17025 audit
//   because chain-of-custody and audit-trail gaps were never closed.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Validation execution, IQ/OQ/PQ
//     authoring, accreditation, and any regulatory submission are owned by the
//     customer's QA, regulatory, and laboratory leadership.
//   - No vendor names anywhere on the page (no LabWare, LabVantage, STARLIMS,
//     Benchling, Thermo Fisher SampleManager, etc.).
//   - No instrument vendor names (no Roche, Beckman, Sysmex, Abbott, Hamilton).
//   - Framework names (21 CFR Part 11, CLIA, CAP, ISO/IEC 17025, ISO 15189, GLP,
//     HIPAA, GxP) are retained for audience-signaling and SEO, but always framed
//     as design awareness — never as certification or compliance promises.
//   - No fixed durations, no fixed costs, no promised regulatory outcomes.
//
// Signature: SampleLifecycleControlPlane — hierarchical / flow visualization
//   (§8.3 patterns 2 + 3) — six lifecycle stages of a laboratory sample
//   (Accession → Prep → Analysis → Review → Reporting → Archive) sitting atop a
//   shared engineering foundation (audit trail, chain of custody, lineage,
//   e-signature awareness), with regulatory framework names rendered as a
//   design-awareness perimeter. Argument: "Every sample carries an unbroken
//   audit trail from receipt to retention — that's the LIMS."
//
// Composition mirrors the AI Pharma precedent (same regulated, life-sciences
// archetype, same liability stance):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) → signature (dark) →
//   complianceDeepDive (light) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no verified LIMS engagement yet.
//   - No IntegrationsPanel — per user instruction "do not include any complex
//     integrations" and the liability stance forbids naming instrument or LIS
//     vendors. Integration capability is woven into feature prose instead.
//   - ComplianceSpotlight placed before signature as trust gate (same
//     pattern as ai-pharma, ehr-emr-development, hospital-management-systems).

const lims: SolutionPageData = {
  slug: 'lims',
  title: 'Custom Laboratory Information Management Systems (LIMS)',
  shortDescription:
    'Custom Laboratory Information Management Systems for clinical, research, R&D, CRO, and industrial QC labs — barcoded sample tracking, configurable workflows, live operational visibility, and trusted data, built around the way your lab actually runs.',

  metaTitle:
    'Custom LIMS Development | Laboratory Information Management Systems',
  metaDescription:
    'Custom laboratory information management system (LIMS) development for clinical, research, CRO, and industrial QC labs. Faster sample throughput, configurable workflows, live operational visibility, and trusted data — built around your SOPs, not a vendor template.',
  keywords: [
    'LIMS software development',
    'custom LIMS development',
    'laboratory information management system',
    'clinical lab software development',
    'lab workflow automation software',
    'sample tracking software',
    'pharmaceutical LIMS software',
    'ISO 17025 LIMS',
    'CAP CLIA LIMS software',
    '21 CFR Part 11 LIMS',
    'GLP laboratory software',
    'lab data management platform',
    'CRO LIMS software',
  ],
  canonicalPath: '/solutions/lims',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'LIMS', href: '/solutions/lims' },
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

  industry: 'life-sciences',
  signatureComponent: 'SampleLifecycleControlPlane',

  hero: {
    badge: 'Life Sciences Solutions',
    headline:
      'A LIMS built around how your lab actually runs.',
    subhead:
      'Custom laboratory information management systems for clinical, research, R&D, CRO, and industrial QC labs — barcoded sample tracking, configurable workflows, live operational visibility, and trusted data. Built around your SOPs, designed to fit alongside the systems you already run, and rolled out one lab section at a time.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the sample lifecycle', href: '#signature' },
    heroImage: {
      src: '/images/solutions/lims/hero.jpg',
      alt: 'Laboratory analyst examining samples in a tube rack at a research bench',
    },
    metrics: [
      {
        value: 'Workflow-led',
        label: 'Configured to your SOPs',
        description:
          'Workflows, sample model, and reporting shaped around the way your lab actually runs — not a vendor template your bench staff have to work around.',
      },
      {
        value: 'Throughput-first',
        label: 'Less rekeying, more samples per shift',
        description:
          'Barcoded accessioning, role-scoped queues, and automated status transitions remove the spreadsheets, sticky notes, and re-entry that throttle a busy lab.',
      },
      {
        value: 'Modular',
        label: 'Roll out one lab section at a time',
        description:
          'Phase delivery section by section so a single area — chemistry, molecular, micro, pathology, R&D — can run on the new LIMS while the rest of the lab continues uninterrupted.',
      },
    ],
  },

  // Audience test (§9.5): a Lab Director / Lab IT Director reading these four
  // values in 8 seconds wants to know "will this run my lab better?" — not "will
  // this pass an audit?" Productivity, workflow fit, visibility, and coexistence
  // lead; compliance is covered mid-page in ComplianceSpotlight / DeepDive.
  metricsStrip: [
    {
      value: 'Workflow-led',
      label: 'Built around your SOPs, not a vendor template',
      description:
        'Workflows configured to your accessioning, prep, analysis, review, and reporting steps — so the LIMS reflects the way your lab actually runs.',
    },
    {
      value: 'Throughput-first',
      label: 'Faster receipt → result → release',
      description:
        'Barcoded accessioning, role-scoped queues, automated status transitions, and instrument data capture remove the manual handoffs and spreadsheets that throttle a busy lab.',
    },
    {
      value: 'Live visibility',
      label: 'Real dashboards for lab leadership',
      description:
        'Turnaround time, instrument utilization, control performance, and backlog — surfaced live so your section leads and quality manager are looking at the same numbers at the same time.',
    },
    {
      value: 'Coexistence-first',
      label: 'Works with the systems you already run',
      description:
        'Designed to coexist with the lab, clinical, and research systems you already validated — your IT and integration teams own the actual connectors, so existing validation work is preserved.',
    },
  ],

  // Feature cards lead with what the lab gets (productivity, visibility, fit),
  // not what QA gets. Compliance signals are present but woven in, not headlined.
  features: [
    {
      icon: 'Beaker',
      title: 'Sample Accessioning & Live Tracking',
      description:
        'Barcoded sample receipt, aliquot tracking, and storage-location management — so analysts, supervisors, and lab leadership know where every sample is, in real time, instead of chasing it across racks and spreadsheets.',
    },
    {
      icon: 'Workflow',
      title: 'Configurable Lab Workflows',
      description:
        'Accessioning, prep, batching, analysis, review, and release workflows configured to your SOPs — with role-scoped queues, hold and release gates, and status transitions that match how your sections actually run.',
    },
    {
      icon: 'Activity',
      title: 'Operational Dashboards for Lab Leadership',
      description:
        'Turnaround time, backlog by section, instrument utilization, and control performance — surfaced live so supervisors and the quality manager are acting on the same numbers, not three different spreadsheets.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'QA / QC & Method Controls',
      description:
        'Quality control sample handling, control charts, out-of-specification (OOS) and out-of-trend (OOT) flagging, and method-level controls structured to support your QA reviewers — not replace them.',
    },
    {
      icon: 'Microscope',
      title: 'Instrument Data Capture',
      description:
        'Instrument result capture via standard data formats and your IT-owned middleware — with raw and processed data preserved alongside the sample record, ending the manual transcription and copy-paste your bench team is doing today.',
    },
    {
      icon: 'FileText',
      title: 'Reporting, COA & Result Release',
      description:
        'Configurable result reports, certificates of analysis (COA), and release packets — generated directly from the sample record so what reaches the customer, clinician, or sponsor is exactly what was reviewed and approved.',
    },
  ],

  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Faster, Cleaner Sample Throughput',
      description:
        'Workflows that compress the receipt-prep-analyze-review-report loop — barcoded accessioning, role-scoped queues, and automated status transitions remove the spreadsheets, sticky notes, and re-entry that throttle a busy lab.',
    },
    {
      icon: 'Activity',
      title: 'Clearer Operational Signals for Lab Leadership',
      description:
        'Dashboards for turnaround time, instrument utilization, control performance, and backlog — surfaced live so section leads, the lab director, and the quality manager are acting on the same numbers, at the same time.',
    },
    {
      icon: 'Settings',
      title: 'Configurable to Your Lab — Not a Vendor Template',
      description:
        'Your sample model, your SOPs, your reporting formats. Workflows, fields, and approvals are configured to the way your bench, supervisors, and customers actually work — without rewriting the lab around someone else\'s product.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Trusted Data Your Lab and Reviewers Can Stand Behind',
      description:
        'Every sample event is captured with actor, timestamp, action, and outcome. The same engineering that gives your team live visibility also gives QA, accreditation, and sponsor reviewers the evidence trail they expect.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Validated Stack',
      description:
        'The LIMS is designed to coexist with the LIS, EHR, ELN, instrument middleware, and storage systems you have already validated — your IT team owns the actual connectors, so existing validation work is preserved.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Workflow Mapping & Engineering Framing',
      description:
        'We walk your accessioning, prep, analysis, review, and reporting workflows; inventory your existing lab, instrument, and clinical systems; identify chain-of-custody, audit-trail, and access-control gaps; and frame the engineering and integration shape — before scoping the build. Validation strategy, IQ/OQ/PQ planning, and accreditation decisions stay with your QA function.',
      duration: 'Scoped during discovery',
      deliverable:
        'Workflow maps, current-state system inventory, audit-trail and access-control gap notes, prioritized engineering roadmap',
    },
    {
      title: 'Architecture & Engineering Plan',
      description:
        'Design the LIMS architecture, sample data model, workflow engine, audit-trail and e-signature design, role-scoped access posture, and reporting layer alongside your IT, security, and QA stakeholders. Framework expectations (21 CFR Part 11, CLIA, CAP, ISO 17025, GLP, HIPAA where applicable) are built into the engineering plan as design awareness — not certification claims.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, sample data model, workflow & audit-trail design, security architecture, integration outline',
    },
    {
      title: 'Build & Iterate',
      description:
        'Iterative full-stack development of the LIMS — sample lifecycle, workflow engine, QA/QC, reporting, and admin tooling — with engineering artifacts (test coverage, validation-support evidence, change logs) captured as part of the build. Section-by-section demos with bench scientists and supervisors keep the platform anchored to real lab work.',
      duration: 'Phased per engagement',
      deliverable:
        'Working LIMS modules in staging, engineering artifact set, configuration documentation, audit-trail dashboards',
    },
    {
      title: 'Integration & Handoff to Your QA / Validation Function',
      description:
        'Connect to your existing lab, clinical, and research systems via documented APIs and standard data formats your IT team controls. Run UAT with your bench, supervisor, and quality stakeholders, and assemble the engineering documentation set your QA team uses as inputs into their own IQ/OQ/PQ and accreditation work. We do not author validation protocols or perform validation on your behalf.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set for your validation work',
    },
    {
      title: 'Phased Go-Live, Hypercare & Lifecycle Operations',
      description:
        'Section-by-section go-live so a single lab section can run on the new LIMS while the rest of the lab continues uninterrupted. An initial hypercare period covers monitoring, defect triage, change-control reviews, and tuning so the platform stays in a known state as your processes evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbooks, hypercare support',
    },
  ],

  capabilities: [
    'Barcoded sample accessioning and aliquot tracking',
    'Configurable workflows for accessioning, prep, analysis, review, and reporting',
    'Audit-trail logging with actor, timestamp, action, and outcome on every sample event',
    'Electronic records and e-signature workflows aligned with 21 CFR Part 11 awareness',
    'Role-scoped access for bench, supervisor, QA, lab IT, and admin user populations',
    'PHI / subject-data segmentation and tokenization at the application gateway (clinical and CRO labs)',
    'QC sample handling, control charts, OOS / OOT flagging at the method level',
    'Storage location and chain-of-custody tracking across freezers, racks, and shipments',
    'COA, result, and release packet generation from the audited sample record',
    'Documented APIs and standard data formats for integration into your existing stack',
    'WCAG 2.1 AA accessibility for analyst- and supervisor-facing interfaces',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure App Service',
    'Azure AD B2C / Entra External ID',
    'Azure Key Vault',
    'Azure SQL / PostgreSQL',
    'Azure Blob Storage',
    'Azure Service Bus',
    'OpenTelemetry + Application Insights',
    'Terraform (IaC)',
    'Power BI Embedded',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered with audit, chain-of-custody, and e-signature awareness for regulated lab work',
    highlightText: 'audit, chain-of-custody, and e-signature awareness',
    statusText:
      'Engineering posture aligned with practices common in 21 CFR Part 11, CLIA, CAP, ISO/IEC 17025, ISO 15189, GLP, and HIPAA environments',
    pillars: [
      {
        icon: 'ShieldCheck',
        title: 'Chain-of-Custody-Aware Engineering',
        description:
          'We design the LIMS so chain of custody, audit logging, and approval gates are first-class engineering features. Your QA function executes the validation; the platform supplies the engineering evidence.',
      },
      {
        icon: 'FileCheck',
        title: 'Data Discipline That Supports Your QA Reviewers',
        description:
          'Schema-level lineage, immutable audit records, controlled vocabularies, and database-level constraints make sample, instrument, and result data traceable for your QA, accreditation, and sponsor reviewers.',
      },
      {
        icon: 'FileSignature',
        title: 'Electronic Records & e-Signature Awareness',
        description:
          'Electronic records and e-signature workflows engineered with awareness of 21 CFR Part 11 expectations — attributable, contemporaneous, original, accurate, and reviewable. Predicate-rule and validation calls stay with your QA team.',
      },
    ],
    badges: [
      '21 CFR Part 11',
      'CLIA',
      'CAP',
      'ISO/IEC 17025',
      'ISO 15189',
      'GLP',
      'HIPAA',
      'GxP',
    ],
  },

  complianceDetail: {
    frameworks: [
      '21 CFR Part 11 (Electronic Records & Signatures)',
      'CLIA (Clinical Laboratory Improvement Amendments)',
      'CAP accreditation expectations',
      'ISO/IEC 17025 (testing & calibration laboratories)',
      'ISO 15189 (medical laboratories)',
      'GLP (Good Laboratory Practice)',
      'HIPAA + HITECH (clinical labs handling PHI)',
      'GxP umbrella (GMP / GCP / GLP)',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the build so your QA team has the documentation, traceability, and test evidence they need to execute their IQ/OQ/PQ and accreditation work. We do not author validation protocols or perform validation on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'Audit-trail logging as an engineering default',
        description:
          'Every sample event — accession, aliquot, prep, analysis, review, release, archive — is logged with actor, timestamp, action, and outcome. Audit records are immutable at the database layer so your reviewers can read a continuous chain of custody.',
      },
      {
        icon: 'FileSignature',
        title: 'Electronic records & e-signature awareness',
        description:
          'Electronic records and e-signature workflows engineered with awareness of 21 CFR Part 11 expectations — attributable, contemporaneous, original, accurate, and reviewable. Predicate-rule decisions stay with your QA team.',
      },
      {
        icon: 'Lock',
        title: 'PHI / subject-data segmentation',
        description:
          'For clinical and CRO labs, patient and subject data is tokenized at the application gateway, scoped by role, and segmented from reporting layers. PHI is kept out of downstream systems wherever the work allows.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-scoped access',
        description:
          'Standards-based identity with enforced MFA, role-scoped access for bench, supervisor, QA, lab IT, and admin populations, and least-privilege defaults across modules and APIs.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for regulated environments',
        description:
          'Hosted on cloud regions and configurations commonly used for sensitive lab and clinical data, with private endpoints, infrastructure defined and reviewed via Terraform, and environment promotion gates your team can sign.',
      },
    ],
    auditNote:
      'Every component is engineered with audit-trail logging, chain-of-custody capture, role-scoped access, and lifecycle artifacts your QA, accreditation, and IT teams can use as inputs into their own validation, accreditation, and audit-readiness work. Final regulatory submission, validation execution, IQ/OQ/PQ authoring, and any accreditation outcome (CAP, CLIA, ISO/IEC 17025, ISO 15189, GLP, etc.) remain solely the customer’s responsibility, executed by the customer’s QA, regulatory, or quality function. AIvanceWorks does not represent, attest, or warrant compliance with any regulatory or accreditation framework on behalf of any customer.',
    partnerAgreements: ['BAA (clinical labs handling PHI)', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Know Where Every Sample Is, In Real Time',
      description:
        'Barcoded accession at receipt, aliquot tracking through prep and analysis, and live status against the sample record — so analysts stop chasing samples across racks and supervisors stop fielding "where is this one?" calls.',
      image: {
        src: '/images/solutions/lims/feature-1.jpg',
        alt: 'Laboratory technician scanning a barcoded sample tube during accessioning',
      },
    },
    {
      heading: 'Workflows That Fit How Your Lab Runs',
      description:
        'Accessioning, prep, analysis, review, and reporting steps configured to your SOPs — with the data integrity, audit trail, and e-signature engineering already in place for your reviewers.',
      image: {
        src: '/images/solutions/lims/feature-2.jpg',
        alt: 'Lab analyst documenting results at a bench during routine sample analysis',
      },
    },
  ],

  relatedPages: [
    {
      title: 'AI for Pharma & Biotech',
      description:
        'Standing up a LIMS to anchor research and clinical data? Our pharma & biotech engagement adds AI-assisted analytics, document tooling, and decision-support software on top of the same engineering foundation.',
      href: '/solutions/ai-pharma',
      icon: 'FlaskConical',
      pageType: 'solution',
    },
    {
      title: 'Security & Compliance',
      description:
        'Preparing for a CAP, CLIA, ISO 17025, or 21 CFR Part 11 review? Our security and compliance practice helps you shape audit-trail logging, role-scoped access, and the engineering evidence package your QA team will be asked for.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
    {
      title: 'Custom Software Development',
      description:
        'A LIMS is custom software at heart — your SOPs, your data model, your audit posture. Our custom development practice is the engineering core that builds laboratory platforms around the way your lab actually runs.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Are you offering a validated, off-the-shelf LIMS, or a custom build?',
      answer:
        'We are a software engineering partner that builds custom LIMS platforms around your laboratory workflows, sample model, and reporting formats. We do not sell a packaged, pre-validated LIMS product, and we do not perform validation, IQ/OQ/PQ authoring, or accreditation submissions on your behalf. What we deliver is the platform plus engineering artifacts your team uses as inputs into their own validation work — audit logs, configuration history, change-control records, and documentation.',
    },
    {
      question:
        'What kinds of labs do you build LIMS platforms for?',
      answer:
        'We build LIMS platforms for clinical laboratories, hospital labs, contract research organizations (CROs), pharma and biotech R&D labs, and industrial / QC labs (food, beverage, materials, environmental, water testing). The common thread is custom: a sample model, workflows, and reporting set tailored to your section structure, your SOPs, and the systems you already run. We are not a fit if you want a packaged, pre-validated, off-the-shelf product — that is a different procurement.',
    },
    {
      question:
        'How does the LIMS fit alongside our existing instruments, LIS, and EHR?',
      answer:
        'The LIMS is designed to coexist with the lab, clinical, and research systems you already run — using documented APIs and standard data exchange formats. Your IT and integration teams own the actual connectors into your validated stack, so existing validation work is preserved. We do not claim partnerships, certifications, or pre-built integrations with any third-party instrument, LIS, EHR, or middleware vendor; we build the engineering surface your team uses to integrate.',
    },
    {
      question:
        'Can we roll the LIMS out one lab section at a time instead of a single cutover?',
      answer:
        'Yes — this is the default approach, not an option. Single "big bang" cutovers are one of the most common failure modes in LIMS programs, and we design against them. Each section of the lab — chemistry, molecular, microbiology, pathology, R&D — is built to go live independently, with clear data and integration boundaries. This lets you prove operational fit on one section, train staff incrementally, and expand the rollout without pausing production lab operations.',
    },
    {
      question:
        'How does the LIMS handle audit trail, electronic records, and 21 CFR Part 11?',
      answer:
        'Every sample event is logged with actor, timestamp, action, and outcome; audit records are immutable at the database layer; and electronic record and e-signature workflows are engineered with awareness of 21 CFR Part 11 expectations — attributable, contemporaneous, original, accurate, and reviewable. Practices align with what customers in CLIA, CAP, ISO/IEC 17025, GLP, and HIPAA environments typically expect, but validation execution, predicate-rule decisions, and any accreditation outcomes remain with your QA function. We make no compliance certification on your behalf.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by lab and are defined during discovery — we do not quote fixed durations or fixed regulatory outcomes on a public page. Discovery is where we map your workflows, inventory the systems you already run, identify the highest-leverage areas, and frame the engineering and integration shape before any production-bound code is written. The build is typically phased so the highest-priority section goes live first and your team can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Looking for a LIMS that fits your lab?',
    description:
      'Book a free 30-minute discovery call. We will walk through your sample workflows, the systems you already run, and the engineering shape of a custom LIMS — and outline a realistic, phased scope for your lab. Validation, accreditation, and regulatory submission decisions remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the sample lifecycle', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing with explicit customer-ownership of validation, accreditation, IQ/OQ/PQ authoring, and regulatory outcomes. Legal review recommended before publish to confirm liability framing.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No vendor names retained anywhere on the page (no LIMS, instrument, LIS, EHR, or middleware vendor names). Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
  ],
};

export default lims;
