import { BRAND_PREFIX, SITE_CONFIG } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Pharma / Biotech / Medical Device)
// Buyer: Head of Regulatory Affairs / VP Regulatory Operations / Director of
//   Regulatory Information Management / Senior Director, Regulatory Ops at US
//   pharma, biotech, specialty therapeutics, and medical device companies with
//   growing US and global product portfolios. Secondary: Chief Regulatory
//   Officer, Head of Regulatory CMC, Head of Regulatory Submissions.
//
// Buyer mindset: "I answer to FDA, EMA, and our own audit committee. Every
//   submission, every commitment, every label change has to be traceable, and
//   my team is doing too much of it in spreadsheets and shared drives."
//
// Top 3 buyer questions:
//   1. "Will this finally be a single source of truth across products,
//       dossiers, submissions, correspondence, and commitments — or another
//       silo my team has to babysit alongside the spreadsheets?"
//   2. "Is the data model audit-ready — 21 CFR Part 11, IDMP-aware, eCTD-aware
//       — with audit trail, controlled vocabularies, e-signature workflows,
//       and chain-of-changes engineered in from day one?"
//   3. "Can we roll this out by product family, therapeutic area, or market
//       region without disrupting submissions already in flight?"
//
// Key trust issue: Multi-year, multi-million-dollar RIM programs that end up
//   as an empty shell because product, dossier, registration, and
//   correspondence data was never migrated cleanly — leaving regulatory affairs
//   back in spreadsheets, shared drives, and email folders.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Validation execution, IQ/OQ/PQ
//     authoring, regulatory submission, and any health-authority interaction
//     are owned by the customer's QA, regulatory operations, and regulatory
//     affairs leadership.
//   - No vendor names anywhere on the page (no Veeva Vault RIM, ArisGlobal
//     LifeSphere, Lorenz docuBridge, Ennov, Generis CARA, Calyx, Liquent
//     InSight, MasterControl, etc.).
//   - No submission-publishing tool names. No EDMS vendor names. No safety
//     database vendor names.
//   - Framework names (21 CFR Part 11, ICH M2 / M4 / M8, eCTD, IDMP, xEVMPD,
//     FDA, EMA, ICH Q9 / Q10, HIPAA where applicable, GxP umbrella) are
//     retained for audience-signaling and SEO, but always framed as design
//     awareness — never as certification or compliance promises.
//   - No fixed durations, no fixed costs, no promised regulatory outcomes.
//   - Per user instruction: no complex integrations are described. Integration
//     capability is woven into feature prose; customer IT/integration teams own
//     the actual connectors.
//
// Signature: RegulatoryInformationSpine — hierarchical visualization
//   (§8.3 pattern 2) — five regulatory information domains (Products &
//   Substances, Dossiers & Variations, Submissions, Health-Authority
//   Correspondence, Commitments & Tracking) bound by a central "single
//   regulatory record of truth" spine, framed above by a market-region row
//   (FDA · US, EMA · EU, PMDA · JP, Health Canada, MHRA · UK, TGA · AU,
//   ANVISA · BR, etc.) and below by an engineering foundation bar (audit
//   trail, controlled vocabularies, e-signature awareness, role-scoped
//   access). Argument: "One record. Every product. Every market."
//
// Composition mirrors the LIMS and AI Pharma precedents (same regulated
// life-sciences archetype, same liability stance), with the addition of a
// late-page RoleBoundary section — RIM is the most regulatory-liability-
// sensitive of the three pages, and an explicit scope-and-role-boundary block
// is warranted before the cross-link and FAQ closeout.
//
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no verified RIM engagement yet.
//   - No IntegrationsPanel — per user instruction "do not include any complex
//     integrations" and the liability stance forbids naming publishing,
//     EDMS, safety, or RIM vendor systems. Integration capability is woven
//     into feature prose instead.
//   - RoleBoundary added between processTimeline and relatedPages — same
//     pattern as digital-banking-wallets and financial-document-management.

const regulatoryInformationManagement: SolutionPageData = {
  slug: 'regulatory-information-management',
  title: `${BRAND_PREFIX} Custom Regulatory Information Management (RIM) Platforms`,
  shortDescription:
    'Custom Regulatory Information Management platforms for pharma, biotech, and medical device companies — product, dossier, submission, correspondence, and commitment data unified in one connected record, with live portfolio visibility, built around the way your regulatory team actually works.',

  metaTitle:
    'Custom RIM Software Development | Regulatory Information Management Platforms',
  metaDescription:
    'Custom Regulatory Information Management (RIM) platform development for US pharma, biotech, and medical device companies. Unified product, dossier, submission, correspondence, and commitment data with live portfolio visibility — built around your regulatory operations, not a vendor template.',
  keywords: [
    'regulatory information management software',
    'RIM software development',
    'custom RIM platform',
    'pharma regulatory software',
    'biotech regulatory software',
    'medical device regulatory software',
    'regulatory operations platform',
    'eCTD aware software',
    'IDMP aware software',
    '21 CFR Part 11 RIM',
    'FDA submission tracking software',
    'EMA submission tracking software',
    'regulatory submission management software',
    'regulatory commitments tracking software',
  ],
  canonicalPath: '/solutions/regulatory-information-management',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    {
      label: `${BRAND_PREFIX} Regulatory Information Management`,
      href: '/solutions/regulatory-information-management',
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
    'processTimeline',
    'roleBoundary',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'life-sciences',
  signatureComponent: 'RegulatoryInformationSpine',

  hero: {
    badge: 'Life Sciences Solutions',
    headline:
      'One regulatory record. Every product. Every market.',
    subhead:
      'Custom Regulatory Information Management platforms for pharma, biotech, and medical device companies — products, dossiers, submissions, health-authority correspondence, and commitments unified in one connected record, with live portfolio visibility for RegOps and leadership. Built around your operations, designed to coexist with the systems you already run, and rolled out one product family or therapeutic area at a time.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the information spine', href: '#signature' },
    heroImage: {
      src: '/images/solutions/regulatory-information-management/hero.jpg',
      alt: 'Regulatory affairs professional reviewing submission documents at an office workstation',
    },
    metrics: [
      {
        value: 'One connected record',
        label: 'Products, dossiers, submissions, commitments — together',
        description:
          'Product, dossier, submission, correspondence, and commitment data tied to one regulatory record — so your team stops reconciling spreadsheets and shared drives every time leadership, a partner, or an authority asks a question.',
      },
      {
        value: 'Live visibility',
        label: 'Portfolio, submissions, and commitments at a glance',
        description:
          'Submission state, registrations approaching expiry, commitments coming due, and health-authority correspondence — surfaced live so RegOps, RegAffairs, and leadership are looking at the same numbers, not chasing them.',
      },
      {
        value: 'Phased rollout',
        label: 'By product family, therapeutic area, or region',
        description:
          'Phase delivery by product family, therapeutic area, or market region so live submissions are never disrupted while your team migrates onto the new platform.',
      },
    ],
  },

  // Audience test (§9.5): a Head of Regulatory Affairs / VP RegOps reading
  // these four values in 8 seconds wants to know "will this finally unify my
  // regulatory information and give my team operational visibility?" Single
  // source of truth, live visibility, regulatory-operations fit, and
  // non-disruptive rollout lead. Audit-readiness is a baseline expectation;
  // it lives in the ComplianceSpotlight and ComplianceDeepDive sections.
  metricsStrip: [
    {
      value: 'One connected record',
      label: 'Products, dossiers, submissions, commitments — together',
      description:
        'One regulatory record tying product and substance identity to dossiers, submissions, health-authority correspondence, and post-approval commitments — so your team stops reconciling siloed spreadsheets and shared drives.',
    },
    {
      value: 'Live portfolio visibility',
      label: 'Submissions, registrations, commitments — at a glance',
      description:
        'Submission state, registrations approaching expiry, commitments coming due, and health-authority correspondence — surfaced live so RegOps, RegAffairs, QA, and leadership are looking at the same numbers, not chasing them across spreadsheets and shared drives.',
    },
    {
      value: 'Regulatory-operations fit',
      label: 'Built around your SOPs, not a vendor template',
      description:
        'Workflows, taxonomies, status states, and reporting shaped around the way your regulatory operations team actually works — submission planning, authoring intake, publishing handoff, health-authority correspondence, and commitments tracking.',
    },
    {
      value: 'Coexistence-first',
      label: 'Works with the systems you already run',
      description:
        'Designed to coexist with the publishing, EDMS, safety, quality, and clinical systems you already validated — your IT and integration teams own the actual connectors, so existing validation work is preserved.',
    },
  ],

  // Feature cards lead with what regulatory operations gets (visibility,
  // structure, audit-readiness), not what IT gets. Compliance signals are
  // present but woven in, not headlined.
  features: [
    {
      icon: 'Database',
      title: 'Product, Substance & Dossier Registry',
      description:
        'One identity record per product and substance, linked to dossiers, variations, indications, and active registrations — engineered with awareness of IDMP and xEVMPD identity concepts so your data model can carry forward as global standards evolve.',
    },
    {
      icon: 'FolderTree',
      title: 'Submission Planning & Lifecycle Tracking',
      description:
        'Submission plans, milestones, content tracking, and status views aligned with eCTD lifecycle structure (original, supplement, amendment, response, annual report) — so planners, authors, and leadership are looking at the same submission state, in real time.',
    },
    {
      icon: 'Globe',
      title: 'Registration & Market Tracking',
      description:
        'Active registrations, approval status, validity dates, and renewal obligations tracked per product, per market, per health authority — surfacing risk on registrations approaching expiry, well before a market access surprise.',
    },
    {
      icon: 'Inbox',
      title: 'Health-Authority Correspondence',
      description:
        'Inbound questions, deficiency letters, meeting requests, and outbound responses logged against the dossier and submission they belong to — so the history of every conversation with FDA, EMA, or any other authority lives with the record, not in inboxes.',
    },
    {
      icon: 'ListChecks',
      title: 'Commitments & Obligation Tracking',
      description:
        'Post-approval commitments, label updates, post-marketing studies, and pharmacovigilance obligations tracked with owner, due date, status, and audit history — so commitments to authorities are visible and actionable, not buried in shared drives.',
    },
    {
      icon: 'FileSignature',
      title: 'Controlled Records & e-Signature Workflows',
      description:
        'Electronic records, e-signature workflows, and controlled vocabularies engineered with awareness of 21 CFR Part 11 expectations — attributable, contemporaneous, original, accurate, and reviewable — sitting underneath everything else on the platform.',
    },
  ],

  benefits: [
    {
      icon: 'Network',
      title: 'A Single Regulatory Record of Truth',
      description:
        'Products, dossiers, submissions, registrations, correspondence, and commitments stop living in five different tools and one twenty-tab spreadsheet. One connected record, one place to look, one number that everyone — RegOps, RegAffairs, QA, leadership — is acting on.',
    },
    {
      icon: 'Activity',
      title: 'Live Visibility Across the Regulatory Portfolio',
      description:
        'Submission state, registrations approaching expiry, commitments coming due, and recent health-authority correspondence — surfaced live on dashboards your RegOps team and leadership share, so surprises stop arriving as renewal letters and missed deadlines.',
    },
    {
      icon: 'TrendingUp',
      title: 'Faster, Cleaner Submission Operations',
      description:
        'Submission plans, content tracking, and status views configured to your eCTD lifecycle and your SOPs — removing the manual status calls, the "where are we?" emails, and the rekeying that throttle your team between authoring, publishing, and submission.',
    },
    {
      icon: 'Settings',
      title: 'Configurable to Your Operations — Not a Vendor Template',
      description:
        'Your product taxonomy, your submission types, your status states, your reporting formats. Workflows, fields, controlled vocabularies, and approvals are configured to the way your regulatory team actually works — without forcing your SOPs into someone else\'s product shape.',
    },
    {
      icon: 'Layers',
      title: 'No Rip-and-Replace of Your Validated Stack',
      description:
        'The RIM platform is designed to coexist with the EDMS, publishing, safety, quality, and clinical systems you have already validated — your IT and integration teams own the actual connectors, so existing validation work is preserved and adoption can be phased.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Audit-Ready Data Your QA Team Can Stand Behind',
      description:
        'The same engineering that gives RegOps visibility gives QA and authorities a clean chain of changes — every regulatory event captured with actor, timestamp, action, and outcome, and electronic-record workflows engineered with awareness of 21 CFR Part 11 expectations.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Information Mapping & Engineering Framing',
      description:
        'We walk your regulatory operations — submission planning, authoring intake, publishing handoff, correspondence logging, commitment tracking, registration upkeep — inventory the systems your team is using today (including the spreadsheets and shared drives), identify the audit-trail and controlled-vocabulary gaps, and frame the engineering shape before scoping the build. Validation strategy and any submission decisions stay with your QA and regulatory leadership.',
      duration: 'Scoped during discovery',
      deliverable:
        'Information map across products, dossiers, submissions, correspondence, and commitments; current-state system inventory; controlled-vocabulary and audit-trail gap notes; prioritized engineering roadmap',
    },
    {
      title: 'Architecture & Engineering Plan',
      description:
        'Design the RIM architecture, product and dossier data model, submission lifecycle states, correspondence and commitment structures, audit-trail and e-signature design, role-scoped access posture, and reporting layer alongside your IT, security, and QA stakeholders. Framework expectations (21 CFR Part 11, eCTD lifecycle structure, IDMP and xEVMPD concepts, GxP umbrella, HIPAA where applicable) are built into the engineering plan as design awareness — not certification claims.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, product and dossier data model, submission lifecycle design, audit-trail and e-signature design, security architecture, integration outline',
    },
    {
      title: 'Build & Iterate',
      description:
        'Iterative full-stack development of the RIM platform — product and dossier registry, submission planning, registration and market tracking, correspondence, commitments, and admin tooling — with engineering artifacts (test coverage, validation-support evidence, change logs) captured as part of the build. Sprint demos with regulatory operations and regulatory affairs keep the platform anchored to real submission work.',
      duration: 'Phased per engagement',
      deliverable:
        'Working RIM modules in staging, engineering artifact set, configuration documentation, audit-trail dashboards',
    },
    {
      title: 'Integration & Handoff to Your QA / Validation Function',
      description:
        'Connect to your existing publishing, EDMS, safety, quality, and clinical systems via documented APIs and standard data formats your IT team controls — no proprietary connectors, no vendor lock-in. Run UAT with your regulatory operations, regulatory affairs, and quality stakeholders, and assemble the engineering documentation set your QA team uses as inputs into their own IQ/OQ/PQ work. We do not author validation protocols or perform validation on your behalf.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set for your validation work',
    },
    {
      title: 'Phased Go-Live, Hypercare & Lifecycle Operations',
      description:
        'Phased go-live by product family, therapeutic area, or market region so submissions and registrations already in flight are never disrupted while your team migrates onto the new platform. An initial hypercare period covers monitoring, defect triage, change-control reviews, and tuning so the platform stays in a known state as your portfolio, regulations, and operating model evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbooks, hypercare support',
    },
  ],

  capabilities: [
    'Product and substance identity records with awareness of IDMP and xEVMPD concepts',
    'Dossier and variation structures aligned with ICH M4 / eCTD lifecycle (original, supplement, amendment, response, annual report)',
    'Submission planning, milestone tracking, and content status views',
    'Registration and market tracking with approval status, validity dates, and renewal obligations',
    'Health-authority correspondence logging — questions, deficiency letters, meeting requests, responses',
    'Post-approval commitment and obligation tracking with owner, due date, and status',
    'Audit-trail logging with actor, timestamp, action, and outcome on every regulatory event',
    'Electronic records and e-signature workflows aligned with 21 CFR Part 11 awareness',
    'Role-scoped access for regulatory operations, regulatory affairs, QA, leadership, and admin user populations',
    'Controlled vocabularies across products, indications, submission types, and authority interactions',
    'Documented APIs and standard data formats for integration into your existing stack',
    'WCAG 2.1 AA accessibility for regulatory-operations- and leadership-facing interfaces',
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
      'Engineered with audit-trail, e-signature, and controlled-vocabulary awareness for life-sciences regulatory work',
    highlightText:
      'audit-trail, e-signature, and controlled-vocabulary awareness',
    statusText:
      `Engineering posture aligned with practices common in 21 CFR Part 11, ICH M2 / M4 / M8, eCTD, IDMP, xEVMPD, GxP, ICH Q9 / Q10, and HIPAA environments. ${SITE_CONFIG.name} does not certify, attest, or warrant compliance with any regulatory framework on a customer\'s behalf.`,
    pillars: [
      {
        icon: 'ShieldCheck',
        title: 'Audit Trail That Carries Your Regulatory Work',
        description:
          'We engineer the RIM platform so audit logging, chain-of-changes, and approval gates are first-class features against every regulatory event — record created, document attached, status changed, e-signature applied, correspondence logged, commitment closed. Your QA function executes the validation; the platform supplies the engineering evidence.',
      },
      {
        icon: 'FileCheck',
        title: 'Controlled Vocabularies & Lineage That Support Your Reviewers',
        description:
          'Schema-level lineage, controlled vocabularies across products, indications, submission types, and authorities, immutable audit records, and database-level constraints — making product, dossier, submission, correspondence, and commitment data traceable for your QA, audit, and authority-readiness reviewers.',
      },
      {
        icon: 'FileSignature',
        title: 'Electronic Records & e-Signature, 21 CFR Part 11–Aware',
        description:
          'Electronic records and e-signature workflows engineered with awareness of 21 CFR Part 11 expectations — attributable, contemporaneous, original, accurate, and reviewable. Predicate-rule decisions, submission decisions, and any health-authority interaction stay with your regulatory and QA leadership.',
      },
    ],
    badges: [
      '21 CFR Part 11',
      'ICH M2 / M4 / M8',
      'eCTD',
      'IDMP',
      'xEVMPD',
      'GxP',
      'ICH Q9 / Q10',
      'HIPAA',
    ],
  },

  complianceDetail: {
    frameworks: [
      '21 CFR Part 11 (Electronic Records & Signatures) — design awareness',
      'ICH M2 / M4 / M8 (eCTD specification, CTD structure, electronic submissions) — design awareness',
      'eCTD lifecycle (original, supplement, amendment, response, annual report) — design awareness',
      'IDMP (ISO Identification of Medicinal Products) — design awareness',
      'EMA xEVMPD — design awareness',
      'GxP umbrella (GMP / GCP / GLP) — design awareness',
      'ICH Q9 / Q10 (Quality Risk Management & Pharmaceutical Quality System) — design awareness',
      'HIPAA + HITECH (where regulated product data crosses PHI boundaries) — design awareness',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the build so your QA team has the documentation, traceability, and test evidence they need to execute their own IQ/OQ/PQ and validation work. We do not author validation protocols, perform validation, or sign off on validation on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'Audit-trail logging as an engineering default',
        description:
          'Every regulatory event — record created, document attached, status changed, e-signature applied, correspondence logged, commitment closed — is captured with actor, timestamp, action, and outcome. Audit records are immutable at the database layer so your reviewers can read a continuous chain of changes against every dossier, submission, and commitment.',
      },
      {
        icon: 'FileSignature',
        title: 'Electronic records & e-signature awareness',
        description:
          'Electronic records and e-signature workflows engineered with awareness of 21 CFR Part 11 expectations — attributable, contemporaneous, original, accurate, and reviewable. Predicate-rule decisions, submission decisions, and any health-authority interaction stay with your regulatory and QA leadership.',
      },
      {
        icon: 'BookOpen',
        title: 'Controlled vocabularies across regulatory data',
        description:
          'Products, indications, substances, submission types, authority identifiers, and document categories are managed through controlled vocabularies — so the same product, the same dossier, and the same authority are referenced the same way everywhere on the platform, by every user, on every report.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-scoped access',
        description:
          'Standards-based identity with enforced MFA, role-scoped access for regulatory operations, regulatory affairs, QA, leadership, and admin populations, and least-privilege defaults across modules and APIs.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for regulated environments',
        description:
          'Hosted on cloud regions and configurations commonly used for sensitive regulatory data, with private endpoints, infrastructure defined and reviewed via Terraform, and environment promotion gates your team can sign.',
      },
    ],
    auditNote:
      `Every component of the RIM platform is engineered with audit-trail logging, electronic-record and e-signature awareness, role-scoped access, controlled vocabularies, and lifecycle artifacts your QA, regulatory, and IT teams can use as inputs into their own validation, audit, and authority-readiness work. Validation execution, IQ/OQ/PQ authoring, any regulatory submission, any health-authority interaction, any product registration decision, and any approval-pathway outcome remain solely the customer\'s responsibility, executed by the customer\'s regulatory operations, regulatory affairs, and QA functions. ${SITE_CONFIG.name} does not represent, certify, attest, or warrant compliance with any regulatory framework on behalf of any customer, does not file submissions or correspond with health authorities on a customer\'s behalf, and does not provide regulatory or legal advice.`,
    partnerAgreements: ['DPA', 'SLA', 'BAA (where regulated data crosses PHI)'],
  },

  imageFeatures: [
    {
      heading: 'One Record. Every Product. Every Market.',
      description:
        'Product, dossier, registration, correspondence, and commitment data tied to one connected record per product — so RegOps, RegAffairs, QA, and leadership all see the same state, at the same time, for every market you operate in.',
      image: {
        src: '/images/solutions/regulatory-information-management/feature-1.jpg',
        alt: 'Regulatory affairs analyst examining pharmaceutical product documentation and packaging',
      },
    },
    {
      heading: 'Workflows That Fit How RegOps Runs',
      description:
        'Submission planning, authoring intake, publishing handoff, correspondence logging, and commitments tracking configured to your SOPs — with controlled vocabularies, electronic-record discipline, and a clean chain of changes already in place for your reviewers.',
      image: {
        src: '/images/solutions/regulatory-information-management/feature-2.jpg',
        alt: 'Regulatory operations team reviewing submission planning materials around a conference table',
      },
    },
  ],

  roleBoundary: {
    eyebrow: 'Scope & posture',
    heading: `Where ${SITE_CONFIG.name} fits`,
    intro:
      'We are an engineering services firm for the regulatory operations and regulatory affairs teams of pharma, biotech, and medical device companies. We bring deep engineering competence in audit-aware data models, electronic-record and e-signature workflows, controlled vocabularies, and submission-lifecycle structure — and the discipline to make the platform we build something your QA function and authorities can stand behind.',
    bullets: [
      'We do not file submissions to FDA, EMA, or any health authority on a customer\'s behalf.',
      'We do not author or own regulatory submissions, dossiers, labels, or responses to health-authority queries.',
      'We do not perform validation, IQ/OQ/PQ, or computer-system validation on a customer\'s behalf.',
      'We do not provide regulatory or legal advice; clients retain their own regulatory affairs leadership, QA, and legal counsel.',
      'We do not classify medical devices or determine submission pathways (510(k), De Novo, PMA, NDA, BLA, ANDA, MAA, etc.).',
      'We do not provide audit, attestation, or certification against 21 CFR Part 11, ICH, IDMP, or any other regulatory framework — we engineer with awareness of those frameworks alongside the client\'s QA team and external auditors.',
    ],
    collaboration:
      'We work alongside your regulatory operations, regulatory affairs, QA, IT, and external auditors. The submissions, the health-authority relationships, the validation execution, and the regulatory exposure belong to our client. We bring the engineering.',
  },

  relatedPages: [
    {
      title: 'AI for Pharma & Biotech',
      description:
        'Standing up RIM as the regulatory record of truth? Our pharma & biotech engagement builds the research, clinical, and AI-assisted analytics software that sits alongside it — same engineering posture, same audit-aware discipline.',
      href: '/solutions/ai-pharma',
      icon: 'FlaskConical',
      pageType: 'solution',
    },
    {
      title: 'Security & Compliance',
      description:
        'Preparing for a 21 CFR Part 11 review, an FDA inspection, or an internal QA audit? Our security and compliance practice helps shape audit-trail logging, role-scoped access, and the engineering evidence package your QA team will be asked for.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
    {
      title: 'Custom Software Development',
      description:
        'A RIM platform is custom software at heart — your products, your dossiers, your SOPs, your audit posture. Our custom development practice is the engineering core that builds regulatory platforms around the way your team actually works.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Are you offering a packaged, validated RIM platform, or a custom build?',
      answer:
        'We are a software engineering partner that builds custom RIM platforms around your regulatory operations — your product taxonomy, your submission types, your status states, your reporting formats, your SOPs. We do not sell a packaged, pre-validated RIM product, and we do not perform validation, IQ/OQ/PQ authoring, or health-authority submission on your behalf. What we deliver is the platform plus engineering artifacts your QA and regulatory teams use as inputs into their own validation work — audit logs, configuration history, change-control records, and documentation.',
    },
    {
      question:
        'How does the RIM platform fit alongside our existing EDMS, publishing, safety, and clinical systems?',
      answer:
        'The platform is designed to coexist with the document management, submission publishing, safety, quality, and clinical systems you already run — using documented APIs and standard data exchange formats. Your IT and integration teams own the actual connectors into your validated stack, so existing validation work is preserved. We do not claim partnerships, certifications, or pre-built integrations with any third-party RIM, EDMS, publishing, or safety vendor; we build the engineering surface your team uses to integrate.',
    },
    {
      question:
        'How does the platform address eCTD lifecycle, IDMP, and xEVMPD?',
      answer:
        'The data model is engineered with awareness of eCTD lifecycle structure (original, supplement, amendment, response, annual report) and IDMP / xEVMPD identity concepts so that products, substances, dossiers, and submissions can be represented in a way your team can carry forward as global standards evolve. We engineer the data model and the workflows; submission compilation, dispatch, and any health-authority interaction remain with your regulatory operations function and any publishing tool your team operates.',
    },
    {
      question:
        'Can we roll the RIM platform out by product family or therapeutic area instead of a single cutover?',
      answer:
        'Yes — this is the default approach, not an option. Single "big bang" cutovers are one of the most common failure modes in RIM programs, and we design against them. The platform is built so one product family, one therapeutic area, or one market region can go live independently, with clear data and integration boundaries. This lets you prove operational fit on one slice of the portfolio, train your team incrementally, and expand the rollout without disrupting submissions already in flight.',
    },
    {
      question:
        'How does the platform handle audit trail, electronic records, and 21 CFR Part 11?',
      answer:
        'Every regulatory event — record created, document attached, status changed, e-signature applied, correspondence logged, commitment closed — is logged with actor, timestamp, action, and outcome; audit records are immutable at the database layer; and electronic-record and e-signature workflows are engineered with awareness of 21 CFR Part 11 expectations — attributable, contemporaneous, original, accurate, and reviewable. Predicate-rule decisions, validation execution, and any authority interaction remain with your regulatory and QA leadership. We make no compliance certification on your behalf.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by portfolio and operating model and are defined during discovery — we do not quote fixed durations or fixed regulatory outcomes on a public page. Discovery is where we map your regulatory operations, inventory the systems and spreadsheets your team is using today, identify the highest-leverage areas, and frame the engineering and integration shape before any production-bound code is written. The build is typically phased so the highest-priority product family or therapeutic area goes live first and your team can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Looking for a RIM platform that fits your regulatory team?',
    description:
      'Book a free 30-minute discovery call. We will walk through your regulatory operations, the systems and spreadsheets your team is using today, and the engineering shape of a custom RIM platform — and outline a realistic, phased scope. Validation, submission, and any health-authority interaction remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the information spine', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing with explicit customer-ownership of validation, submission, IQ/OQ/PQ authoring, and any health-authority interaction. Legal review recommended before publish to confirm liability framing — RIM is the most regulatory-liability-sensitive of the three life-sciences solutions on the site.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No vendor names retained anywhere on the page (no RIM, EDMS, publishing, safety, quality, or clinical-system vendor names). Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
    'imageFeatures alt text and hero photo subject — pre-publish, confirm photos visually match a regulatory affairs / pharmaceutical office context rather than a clinical bench scene.',
  ],
};

export default regulatoryInformationManagement;
