import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Life Sciences / GMP Manufacturing)
//
// Buyer: Director / VP Manufacturing IT, Head of Digital Manufacturing, VP
//   Quality / QA Director, or Plant Operations Director at a US pharmaceutical,
//   biologics, biotech, cell & gene therapy, medical device, animal-health, or
//   specialty-cosmetics / nutraceutical manufacturer (commercial sites and
//   CDMOs / CMOs).
//
// Buyer mindset: "We still run paper batch records. Every batch is a stack of
//   pages, every QA review is full-page reconciliation, and every FDA / EMA
//   inspection makes me sweat ALCOA+ and Annex 11. I want EBR — paperless
//   execution — without committing to a multi-year, full-MES program."
//
// Top 3 buyer questions (drive composition order):
//   1. "Do I need a full MES, or can EBR alone solve my paper batch record
//       problem on this line / in this site?"
//   2. "Will it satisfy 21 CFR Part 11, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5,
//       and ALCOA+ — electronic signatures, audit trails, and data integrity?"
//   3. "How long until my first line is paperless, and can we phase it line by
//       line so commercial supply doesn't go down?"
//
// Key trust issue: Multi-year EBR / MES programs that slip past go-live, leave
//   half the floor still on paper, and surface electronic-record gaps in the
//   next inspection — or that promise paperless and deliver "scanned PDFs."
//
// Positioning (distinct from /solutions/mes):
//   - The MES page (/solutions/mes) is a full-MES delivery engagement on Körber
//     Werum PAS-X covering execution, equipment management, weighing /
//     dispensing, material genealogy, OEE, and ISA-95 integration.
//   - This EBR page is a NARROWER, FASTER, more focused engagement: paperless
//     batch execution and electronic-record compliance posture, configured to
//     replace paper batch packs. EBR can stand alone for sites without an MES,
//     or layer onto an existing MES / ERP footprint.
//   - We deliver EBR using PROVEN execution products — Körber Werum PAS-X
//     (the pharma / biologics standard) or Siemens Opcenter Execution Pharma
//     (where the site is already aligned to a Siemens-driven manufacturing
//     stack). Capability framing only; no certified-partner badge claims.
//   - Cloud landing zone: Microsoft Cloud / Azure.
//
// Vendor naming stance (mirrors MES page liability stance, 2026-05-22):
//   - Körber Werum PAS-X: named as one of the EBR execution products we
//     implement. Capability framing ("we implement / we build on") — NOT
//     "Körber-certified partner", NOT "Körber Solution Partner". No Körber
//     or Werum logo. We have delivery experience; no formal Körber badge.
//   - Siemens Opcenter Execution Pharma: named as the alternative EBR
//     execution product. Capability framing only — NOT "Siemens partner",
//     NOT "Siemens authorized". No Siemens logo. Named because it is the
//     industry-proven second leg for sites already running a Siemens
//     manufacturing / automation footprint.
//   - Microsoft Azure / Microsoft Cloud for Manufacturing: named as the
//     cloud landing zone. Capability framing ("built on", "deployed on").
//   - Other vendors (Rockwell, OSIsoft PI, AVEVA, SAP, Oracle, ERP, LIMS,
//     QMS, automation, historian) are NOT named — referenced by category.
//   - Framework names (21 CFR Part 11, 21 CFR Part 211, EU GMP Annex 11,
//     ICH Q7 / Q9 / Q10, GAMP 5, ISA-95, ISO 13485, MHRA Data Integrity,
//     ALCOA+) retained for SEO and audience signaling — framed as
//     engineering and implementation design awareness, not certification.
//
// Liability stance:
//   - We are a software engineering and implementation partner. Validation
//     execution (CSV, IQ/OQ/PQ authoring), GMP qualification, predicate-rule
//     decisions, recipe authoring sign-off, and any regulatory submission or
//     inspection outcome are owned by the customer's QA, Validation, and
//     Regulatory functions.
//   - PAS-X / Opcenter licenses are held by the customer under their direct
//     contract with Körber / Siemens; we do not resell licenses and we do not
//     author vendor-supplied validation packages on the vendor's behalf.
//   - No fixed durations, no fixed costs, no promised regulatory outcomes.
//
// Signature: EbrPaperlessTransition — two-column before/after comparison
//   (§8.3 pattern 4). Paper batch record stages vs. EBR stages, with a
//   shared engineering foundation strip beneath.
//
// Composition mirrors the MES / LIMS / AI Pharma precedent (same regulated
// life-sciences archetype, same liability stance):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) → signature (dark) →
//   complianceDeepDive (light) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — no vendor-approved EBR case yet for AIvanceWorks.
//   - No IntegrationsPanel — surrounding ERP / automation / historian / LIMS /
//     QMS stack named by category, not by product, per liability stance.
//   - ComplianceSpotlight placed before signature as trust gate (same pattern
//     as MES, LIMS, AI Pharma, EHR/EMR, HMS).

const electronicBatchRecords: SolutionPageData = {
  slug: 'electronic-batch-records',
  title: 'Electronic Batch Records (EBR) — Paperless Manufacturing Execution',
  shortDescription:
    'Electronic Batch Records (EBR) implementation for GMP manufacturers. We replace paper batch records with operator-guided electronic execution on Körber Werum PAS-X or Siemens Opcenter Execution Pharma — deployed on Microsoft Azure, configured to your master recipes, and rolled out one line or site at a time. Validation and GMP qualification stay with your team.',

  metaTitle:
    'Electronic Batch Records (EBR) Implementation | PAS-X & Opcenter on Azure',
  metaDescription:
    'Electronic Batch Record (EBR) delivery for pharma, biologics, biotech, and medical device manufacturers. We implement Körber Werum PAS-X or Siemens Opcenter Execution Pharma on Microsoft Azure — paperless batch execution, electronic signatures, audit-trail awareness, and ISA-95 integration. Validation and GMP qualification remain with your team.',
  keywords: [
    'electronic batch records',
    'EBR implementation',
    'EBR software',
    'paperless manufacturing',
    'electronic batch record system',
    'Werum PAS-X EBR',
    'Siemens Opcenter Execution Pharma',
    '21 CFR Part 11 EBR',
    'EU GMP Annex 11 EBR',
    'ALCOA+ batch records',
    'pharmaceutical EBR',
    'biologics EBR',
    'medical device batch records',
    'GMP electronic records',
    'paperless batch record implementation',
  ],
  canonicalPath: '/solutions/electronic-batch-records',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Electronic Batch Records (EBR)', href: '/solutions/electronic-batch-records' },
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
  signatureComponent: 'EbrPaperlessTransition',

  hero: {
    badge: 'EBR delivery — PAS-X or Opcenter on Microsoft Azure',
    headline: 'Replace paper batch records, one line at a time.',
    subhead:
      'We implement Electronic Batch Records on Körber Werum PAS-X or Siemens Opcenter Execution Pharma — deployed on Microsoft Azure, configured to your master recipes, integrated with the ERP, automation, historian, LIMS, and QMS you already run, and rolled out line by line. Validation, GMP qualification, and any inspection outcome stay with your team.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the paper vs EBR flow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/electronic-batch-records/hero.jpg',
      alt: 'Pharmaceutical operator reviewing an electronic batch record on a shop-floor terminal in a cleanroom',
    },
    metrics: [
      {
        value: 'Product-led',
        label: 'PAS-X or Opcenter as the validated EBR layer',
        description:
          'We implement on Körber Werum PAS-X or Siemens Opcenter Execution Pharma — proven EBR execution products with audit trails, e-signatures, and master batch record frameworks already in use across the global GMP manufacturing base.',
      },
      {
        value: 'Azure-native',
        label: 'Deployed on Microsoft Cloud',
        description:
          'Built on an Azure landing zone designed for regulated workloads — Microsoft Entra ID with MFA, private networking, Key Vault, monitoring, and Terraform-defined infrastructure your IT and security teams already operate.',
      },
      {
        value: 'Line-by-line',
        label: 'Phased rollout, not big-bang cutover',
        description:
          'Replace paper batch records one production line or site at a time so a single area can run paperless while the rest of the plant continues uninterrupted — no big-bang risk to commercial supply.',
      },
    ],
  },

  // Audience test (§9.5): a VP Quality or Director of Manufacturing IT reading
  // these in 8 seconds wants to know "can this get the paper out of my batch
  // record without taking my plant down?" — not "will this pass an audit?" The
  // four values lead with product fit, paperless scope, cloud posture, and
  // phased rollout. Audit framing lives mid-page in ComplianceSpotlight /
  // DeepDive (§9.9).
  metricsStrip: [
    {
      value: 'PAS-X or Opcenter',
      label: 'Industry-proven EBR execution products',
      description:
        'We deliver on Körber Werum PAS-X or Siemens Opcenter Execution Pharma — your site picks the product that aligns to your existing manufacturing and automation footprint, and we implement the EBR layer on top.',
    },
    {
      value: 'Paperless-first',
      label: 'Built as the batch runs',
      description:
        'Operator-guided execution, in-line data capture, electronic signatures, and review-by-exception — so the batch record is built as the batch runs, not reconstructed from a paper pack after disposition.',
    },
    {
      value: 'Integration-aware',
      label: 'ISA-95-aligned to ERP, automation, historian, LIMS, QMS',
      description:
        'We design and build the integration surface that connects the EBR layer to the ERP, control system, historian, LIMS, and QMS you already validated — over documented APIs your IT and automation teams control.',
    },
    {
      value: 'Lifecycle-first',
      label: 'Implementation, hypercare, and change-control engineering',
      description:
        'Discovery, configuration, integration, UAT support, hypercare, and ongoing change-control engineering — so the EBR layer stays in a known state as recipes, products, and SOPs evolve.',
    },
  ],

  // Features lead with what operations and QA get from EBR delivery —
  // paperless execution, e-signatures, review by exception, genealogy,
  // integration, cloud posture. Compliance signals are woven in, not headlined
  // (§9.9). Only PAS-X, Opcenter Execution Pharma, and Microsoft Azure are
  // named per liability stance.
  features: [
    {
      icon: 'FileSignature',
      title: 'Electronic Master Batch Records & E-Signatures',
      description:
        'We configure master batch records, work instructions, weighing and dispensing flows, equipment use, and electronic signatures on PAS-X or Opcenter — configured to your products, your SOPs, and your review gates — so operators execute against an approved record and QA reviews by exception.',
    },
    {
      icon: 'Activity',
      title: 'Operator-Guided Execution on Shop-Floor Terminals',
      description:
        'Operator-guided execution, in-line data capture, equipment status logging, in-process check entry, and in-context deviation capture — wired into the EBR execution engine so the batch record is built as the batch runs.',
    },
    {
      icon: 'Filter',
      title: 'Review by Exception, Not Page by Page',
      description:
        'QA reviewers see deviations, missed limits, and exception queues — not every conforming line of every batch. The same review workflow can route to operations supervision, QA, and disposition with full e-signature traceability.',
    },
    {
      icon: 'GitBranch',
      title: 'Material & Batch Genealogy on the EBR Data Layer',
      description:
        'Material dispensing, lot and serial linkage, in-process and finished-goods relationships, and forward / backward genealogy — so recall trace, complaint follow-up, and deviation investigation are queries against the audited record, not multi-day spreadsheet exercises.',
    },
    {
      icon: 'PlugZap',
      title: 'ERP, Automation, Historian, LIMS & QMS Integration',
      description:
        'ISA-95-aligned engineering surface for orders, materials, BOMs, and confirmations to / from ERP; setpoints and process data from automation and the historian; result and specification exchange with LIMS; deviation and CAPA hand-off to QMS — over documented APIs your IT and automation teams control.',
    },
    {
      icon: 'Cloud',
      title: 'Microsoft Azure Landing Zone for Regulated Workloads',
      description:
        'Azure landing zone designed for GMP-regulated workloads — private networking, Microsoft Entra ID with MFA, Key Vault, monitoring via Application Insights and Log Analytics, environment promotion gates, and Terraform-defined infrastructure your security team can sign off.',
    },
  ],

  benefits: [
    {
      icon: 'FileCheck',
      title: 'Cleaner, Faster Batch Release on a Proven EBR Product',
      description:
        'Operator-guided execution, in-line data capture, electronic signatures, and review-by-exception compress the order-release → execution → review → disposition loop — and replace the printed batch records and post-batch reconciliation that slow release today.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Batch Record Integrity Your QA and Inspectors Can Stand Behind',
      description:
        'Every step is captured with actor, timestamp, equipment, materials, parameters, signatures, and outcome on the EBR audit trail — so QA, regulatory, and inspectors see the same record your team works against, with ALCOA+ design awareness baked in.',
    },
    {
      icon: 'Settings',
      title: 'Configured to Your Plant — Not a Reference Configuration',
      description:
        'Your master recipes, your SOPs, your review gates, your reporting set. We configure the EBR layer to the way your operators, supervisors, and quality reviewers actually work — without rewriting the plant around a generic reference build.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Validated Stack',
      description:
        'PAS-X and Opcenter are designed to coexist with the ERP, control system, historian, LIMS, and QMS you already run. We build the ISA-95-aligned integration surface; your IT and automation teams own the connectors into the validated stack, so existing CSV and qualification work is preserved.',
    },
    {
      icon: 'Layers',
      title: 'EBR Now, MES Later — Without Re-Platforming',
      description:
        'EBR is the highest-impact piece of an MES program. We scope and deliver the EBR layer first so the paper goes away on the line that needs it most, and the surrounding modules (equipment management, scheduling, OEE, advanced genealogy) can be added in later phases on the same execution platform.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Paper-Record Walkthrough & Implementation Framing',
      description:
        'We walk your current paper batch record, dispensing, in-process check, review, and disposition workflows; inventory the ERP, automation, historian, LIMS, and QMS in scope; identify electronic-record, audit-trail, and genealogy gaps; and frame the EBR implementation scope and the ISA-95 integration surface — before scoping the build. Computer-system validation strategy, IQ/OQ/PQ planning, and GMP qualification decisions stay with your QA and Validation function.',
      duration: 'Scoped during discovery',
      deliverable:
        'Paper-record walkthrough, current-state system inventory, EBR module scope (PAS-X or Opcenter), integration surface outline, prioritized rollout roadmap',
    },
    {
      title: 'Cloud Landing Zone & EBR Implementation Plan',
      description:
        'Stand up the Microsoft Azure landing zone — identity (Microsoft Entra ID), private networking, Key Vault, monitoring, and Terraform-defined infrastructure. Design the EBR configuration scope (master batch records, weighing, equipment, electronic signatures), the ISA-95-aligned integration surface, and the review workflow alongside your IT, automation, security, and QA stakeholders. Framework expectations (21 CFR Part 11, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5, ISA-95, ISO 13485 where applicable) are built into the implementation plan as design awareness — not certification claims.',
      duration: 'Phased per engagement',
      deliverable:
        'Azure landing zone, EBR configuration scope, ISA-95 integration design, review-workflow design, security architecture',
    },
    {
      title: 'EBR Configuration, Integration Build & Iteration',
      description:
        'Iterative configuration of master batch records, work instructions, equipment, and review gates on PAS-X or Opcenter; build of the ERP / automation / historian / LIMS / QMS integration surface; and the review-by-exception workflow — with engineering artifacts (test coverage, change logs, configuration history) captured as part of the build. Line-by-line demos with operators, supervisors, and QA keep the EBR anchored to real production work.',
      duration: 'Phased per engagement',
      deliverable:
        'Configured EBR in staging, integration runbooks, review-workflow configuration, engineering artifact set, configuration documentation',
    },
    {
      title: 'UAT & Handoff to Your QA / Validation Function',
      description:
        'Run UAT with operations, automation, and quality stakeholders. Assemble the engineering documentation set your QA team uses as inputs into their own IQ/OQ/PQ, computer-system validation, and GMP qualification work — alongside the vendor-supplied PAS-X or Opcenter validation packages your team executes under your direct contract with the vendor. We do not author vendor-supplied validation packages and we do not perform GMP qualification on your behalf.',
      duration: 'Phased per engagement',
      deliverable:
        'UAT sign-off, integration runbooks, security test report, engineering documentation set for your validation work',
    },
    {
      title: 'Phased Go-Live, Hypercare & Lifecycle Operations',
      description:
        'Line-by-line or site-by-site go-live so a single production area can run paperless while the rest of the plant continues uninterrupted. An initial hypercare period covers monitoring, defect triage, change-control engineering, and tuning so the EBR layer stays in a known state as your master recipes, products, and processes evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbooks, hypercare support',
    },
  ],

  capabilities: [
    'Electronic master batch record (eMBR) configuration on PAS-X or Opcenter Execution Pharma',
    'Operator-guided execution and in-process check configuration on shop-floor terminals',
    'Electronic signature workflows configured with 21 CFR Part 11 / EU GMP Annex 11 design awareness',
    'Review-by-exception workflow design — operations, QA, and disposition routing with e-signatures',
    'Material, lot, and serial genealogy modeling on the EBR data layer',
    'ISA-95-aligned integration surface to ERP, automation, historian, LIMS, and QMS',
    'Microsoft Azure landing zone for regulated workloads — identity, networking, secrets, monitoring, IaC',
    'Audit-trail logging design awareness aligned with ALCOA+ and MHRA Data Integrity expectations',
    'Role-scoped access for operators, supervisors, QA, automation, plant IT, and admin populations',
    'Engineering documentation set (configuration, change logs, test evidence) to support your CSV work',
    'Phased line / site rollout playbooks and change-control engineering for ongoing operations',
    'Hypercare and lifecycle operations for the EBR layer after go-live',
  ],

  technologies: [
    'Körber Werum PAS-X',
    'Siemens Opcenter Execution Pharma',
    'Microsoft Azure',
    'Microsoft Cloud for Manufacturing',
    'Microsoft Entra ID (MFA)',
    'Azure Key Vault',
    'Azure SQL / PostgreSQL',
    'Azure Service Bus',
    'Azure Application Insights + Log Analytics',
    'Power BI / Power BI Embedded',
    'Terraform (IaC)',
    'React / Next.js (operator-experience extensions)',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering & implementation posture',
    title:
      'Implemented with electronic-record, audit-trail, and ALCOA+ design awareness for GMP manufacturing',
    highlightText: 'electronic-record, audit-trail, and ALCOA+ design awareness',
    statusText:
      'EBR implementation on PAS-X or Opcenter Execution Pharma and Microsoft Azure landing zone designed with awareness of practices common in 21 CFR Part 11, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5, ISA-95, ISO 13485, and MHRA Data Integrity environments',
    pillars: [
      {
        icon: 'FileSignature',
        title: 'eMBR & E-Signature Configuration',
        description:
          'We configure master batch records, work instructions, equipment use, and electronic signatures with awareness of 21 CFR Part 11 and EU GMP Annex 11 expectations. Predicate-rule decisions and computer-system validation stay with your QA team.',
      },
      {
        icon: 'Activity',
        title: 'ALCOA+ Audit Trail on the EBR Layer',
        description:
          'Every batch step is logged with actor, timestamp, action, equipment, materials, parameters, signatures, and outcome on the EBR audit trail — attributable, contemporaneous, original, accurate, complete, consistent, enduring, and available by design.',
      },
      {
        icon: 'Cloud',
        title: 'Azure Landing Zone Engineered for Regulated Workloads',
        description:
          'Microsoft Azure landing zone with private networking, Entra ID + MFA, Key Vault, monitoring, and Terraform-defined infrastructure — patterns your security team recognises and can sign off as part of your CSV and qualification scope.',
      },
    ],
    badges: [
      '21 CFR Part 11',
      '21 CFR Part 211',
      'EU GMP Annex 11',
      'ICH Q7',
      'ICH Q9',
      'ICH Q10',
      'GAMP 5',
      'ISA-95',
      'ISO 13485',
      'MHRA Data Integrity',
      'ALCOA+',
    ],
  },

  complianceDetail: {
    frameworks: [
      '21 CFR Part 11 (Electronic Records & Signatures)',
      '21 CFR Part 211 (cGMP — Finished Pharmaceuticals)',
      'EU GMP Annex 11 (Computerised Systems)',
      'ICH Q7 / Q9 / Q10 (GMP, Quality Risk, Quality Systems)',
      'GAMP 5 (Risk-based computerised systems)',
      'ISA-95 (Enterprise–Control System integration)',
      'ISO 13485 (Medical device manufacturing)',
      'MHRA Data Integrity (ALCOA+)',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the EBR implementation so your QA and Validation teams have the configuration, change logs, integration runbooks, and test evidence they need to execute their IQ/OQ/PQ, CSV, and GMP qualification work — alongside vendor-supplied validation packages from Körber or Siemens. We do not author vendor-supplied validation packages and we do not perform validation on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'EBR audit trail as the system of record',
        description:
          'Every batch step the EBR executes — dispensing, equipment use, parameter capture, signature, deviation, review, disposition — is logged with actor, timestamp, action, and outcome on the EBR audit trail, with Azure-side platform logs preserved alongside for end-to-end traceability.',
      },
      {
        icon: 'FileSignature',
        title: 'E-signature configuration with regulatory awareness',
        description:
          'Electronic batch record and e-signature workflows are configured with awareness of 21 CFR Part 11 and EU GMP Annex 11 expectations — attributable, contemporaneous, original, accurate, and reviewable. Predicate-rule decisions stay with your QA team.',
      },
      {
        icon: 'GitBranch',
        title: 'Material lineage & forward/backward genealogy',
        description:
          'Material, lot, and serial linkage from receiving to finished goods is configured into the EBR data model — so recall trace, deviation investigation, and complaint follow-up are queries against the audited record, not spreadsheet reconstructions.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-scoped access on Azure',
        description:
          'Microsoft Entra ID with enforced MFA, conditional access policies, role-scoped access for operator, supervisor, QA, automation, plant IT, and admin populations, and least-privilege defaults across the landing zone and APIs.',
      },
      {
        icon: 'Building2',
        title: 'Microsoft Azure landing zone for regulated workloads',
        description:
          'Azure landing zone for GMP workloads — private endpoints, Key Vault for secrets, Terraform-defined infrastructure, environment promotion gates, monitoring via Application Insights and Log Analytics, and backup / DR patterns your security and operations teams can sign.',
      },
    ],
    auditNote:
      'Our implementation engineering — EBR configuration on PAS-X or Opcenter Execution Pharma, ISA-95-aligned integration, Microsoft Azure landing zone, and lifecycle ops — is designed with audit-trail, electronic-record, material-genealogy, role-scoped-access, and Azure-platform awareness so your QA, Validation, and Regulatory teams have the artifacts they need to execute their own CSV, IQ/OQ/PQ, GMP qualification, and inspection-readiness work. Final regulatory submission, validation execution, IQ/OQ/PQ authoring, GMP qualification, and any inspection outcome (FDA, EMA, MHRA, PMDA, ANVISA, Health Canada, or other authority) remain solely the customer’s responsibility, executed by the customer’s QA, Validation, or Regulatory function. PAS-X and Opcenter Execution Pharma are supplied and licensed by Körber and Siemens respectively under the customer’s direct contract with each vendor; AIvanceWorks does not resell licenses, does not author vendor-supplied validation packages on the vendor’s behalf, and does not represent, attest, or warrant compliance with any regulatory framework on behalf of any customer.',
    partnerAgreements: ['DPA', 'SLA', 'Quality / Technical Agreement (where required by the customer)'],
  },

  imageFeatures: [
    {
      heading: 'Paperless Execution, in the Hands of Operators',
      description:
        'Operator-guided steps, in-line data capture, and electronic signatures at the step — so the batch record is built as the batch runs, not reconstructed from a paper pack after disposition.',
      image: {
        src: '/images/solutions/electronic-batch-records/feature-1.jpg',
        alt: 'Pharmaceutical operator entering an electronic batch step on a shop-floor tablet in a cleanroom',
      },
    },
    {
      heading: 'Review by Exception, From Line to Disposition',
      description:
        'QA reviewers see only the deviations, missed limits, and exceptions queued for them — not every conforming page of every batch. Disposition is signed against the audited electronic record.',
      image: {
        src: '/images/solutions/electronic-batch-records/feature-2.jpg',
        alt: 'Quality reviewer signing off an electronic batch record exception queue on a manufacturing review workstation',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Manufacturing Execution Systems (MES)',
      description:
        'EBR is the highest-impact piece of an MES program. If your remit also covers equipment management, weighing & dispensing, scheduling, and OEE — our PAS-X-on-Azure MES delivery wraps EBR with the rest of the execution layer on the same engineering foundation.',
      href: '/solutions/mes',
      icon: 'Factory',
      pageType: 'solution',
    },
    {
      title: 'Security & Compliance',
      description:
        'Preparing for an FDA, EMA, or MHRA inspection? Our security and compliance practice helps you shape audit-trail logging, role-scoped access, and the engineering evidence package your QA team will be asked for around the EBR implementation and Azure landing zone.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
    {
      title: 'Custom Software Development',
      description:
        'Beyond the EBR product layer, every plant has bespoke needs — operator-experience extensions, BI on top of the EBR data layer, and Azure-side glue. Our custom development practice is the engineering core that wraps and extends the EBR for the way your line actually runs.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Do we need a full MES, or can EBR alone solve our paper batch record problem?',
      answer:
        'For many sites, EBR alone is the right first move. EBR is the highest-impact piece of an MES program — it removes the paper from operator execution, captures e-signatures, and gives QA a review-by-exception workflow. We can implement EBR on PAS-X or Opcenter Execution Pharma as a standalone engagement, then add the surrounding MES modules (equipment management, weighing & dispensing as a full module, scheduling, OEE) in later phases on the same execution platform — without re-platforming.',
    },
    {
      question:
        'Are you selling PAS-X or Opcenter licenses, or are you implementing them?',
      answer:
        'We are an implementation and integration partner. PAS-X and Opcenter Execution Pharma are supplied and licensed by Körber and Siemens respectively under your direct contract with each vendor. Our engagement is the EBR implementation — discovery, configuration to your master recipes and SOPs, ERP / automation / historian / LIMS / QMS integration over an ISA-95-aligned surface, the Microsoft Azure landing zone, hypercare, and lifecycle ops. We do not resell licenses and we do not author vendor-supplied validation packages on the vendor\'s behalf.',
    },
    {
      question:
        'How do you decide between PAS-X and Siemens Opcenter Execution Pharma?',
      answer:
        'It is a site-fit decision, not a preference. PAS-X is the most widely deployed EBR in pharma and biologics manufacturing globally, with a mature recipe and execution framework. Opcenter Execution Pharma is a strong fit where the site is already aligned to a Siemens-driven manufacturing and automation footprint, since the EBR layer integrates more naturally with the rest of the Siemens ecosystem. During discovery we walk your current automation, ERP, and QMS estate, the corporate platform direction, and your validation history before recommending one — and we are not certified resellers of either, so the recommendation is based on engineering fit, not licensing economics.',
    },
    {
      question:
        'Will the EBR satisfy 21 CFR Part 11, EU GMP Annex 11, and ALCOA+?',
      answer:
        'PAS-X and Opcenter Execution Pharma provide validated execution engines, audit trails, and e-signature frameworks designed against 21 CFR Part 11 and EU GMP Annex 11 expectations. Our implementation configures the master batch records, work instructions, equipment use, signature flows, and review queues with awareness of those frameworks and ALCOA+ data-integrity principles. Computer-system validation, predicate-rule decisions, and any inspection outcome remain with your QA and Validation function; we do not make GMP or regulatory certification on your behalf.',
    },
    {
      question:
        'How does the EBR fit alongside our existing ERP, automation, historian, LIMS, and QMS?',
      answer:
        'PAS-X and Opcenter are both designed to coexist with the ERP, control system, historian, LIMS, and QMS you already run — using documented APIs and standard data exchange formats aligned with ISA-95 boundaries. We design and build the integration surface; your IT and automation teams own the connectors into the validated stack, so existing computer-system validation and qualification work is preserved. We name those systems by category, not by product, because we do not claim partnerships or pre-built connectors with any third-party ERP, automation, or historian vendor.',
    },
    {
      question:
        'Can we go paperless one line or one site at a time?',
      answer:
        'Yes — this is the default approach, not an option. Single "big bang" EBR cutovers are one of the most common failure modes in regulated manufacturing programs, and we design against them. Each line or site is implemented to go live independently, with clear data, integration, and validation boundaries. This lets you prove operational fit on one line, train operators and supervisors incrementally, and expand the rollout without pausing commercial supply.',
    },
    {
      question:
        'What does a typical EBR engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by plant and are defined during discovery — we do not quote fixed durations or fixed regulatory outcomes on a public page. Discovery is where we walk your current paper batch record, map the surrounding system estate, agree the EBR module scope (PAS-X or Opcenter), and frame the Microsoft Azure landing zone before any production-bound work begins. The build is typically phased so the highest-priority line goes live first and your team can review the EBR before later phases land.',
    },
  ],

  cta: {
    title: 'Ready to retire your paper batch records?',
    description:
      'Book a free 30-minute discovery call. We will walk through your current paper batch record, the systems you already run, the right EBR product fit (PAS-X or Opcenter), and the Microsoft Azure landing zone — and outline a realistic, phased rollout for your plant. Licensing stays with the EBR vendor; validation and GMP qualification stay with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the paper vs EBR flow', href: '#signature' },
  },

  _unverified: [
    'Page positions AIvanceWorks as an EBR delivery / integration partner with capability framing only — no "Körber Solution Partner / Körber-certified" claim, no "Siemens Partner / Siemens authorized" claim, no Körber, Werum, or Siemens logo. Legal review recommended pre-publish to confirm capability framing is acceptable for both vendors and does not require Körber or Siemens sign-off.',
    'Microsoft Azure / Microsoft Cloud for Manufacturing referenced as the cloud landing zone we build on; no "Microsoft Solutions Partner" badge claim on this page. Confirm with marketing whether to add an explicit Microsoft Partner badge in a future revision.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "implementation / design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No third-party ERP, automation, PLC, SCADA, historian, LIMS, or QMS vendor names on the page (only PAS-X, Opcenter Execution Pharma, and Microsoft / Azure are named). Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
    'hero.heroImage, imageFeatures[0].image, imageFeatures[1].image — placeholder photos sourced from neighboring MES solution folder. Replace with EBR-specific Unsplash imagery (operator with shop-floor terminal entering eMBR step, QA reviewer signing off exception queue) before publish per §11.3 / §11.5.',
  ],
};

export default electronicBatchRecords;
