import { BRAND_PREFIX, SITE_CONFIG } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Life Sciences / Manufacturing)
//
// Buyer: Director / VP Manufacturing IT, Head of Digital Manufacturing, VP
//   Quality / QA Director, or Plant Operations Director at a US pharmaceutical,
//   biologics, biotech, cell & gene therapy, medical device, animal-health, or
//   specialty-cosmetics / nutraceutical manufacturer (commercial sites and
//   CDMOs / CMOs).
//
// Buyer mindset: "We still run paper batch records. Every batch is a stack of
//   pages and every review is full-page reconciliation. I want paperless
//   execution without committing to a multi-year, full-MES program."
//
// Top 3 buyer questions (drive composition order):
//   1. "Do I need a full MES, or can EBR alone solve my paper batch record
//       problem on this line / in this site?"
//   2. "Will the electronic record hold up — signatures, audit trails, and
//       data integrity?"
//   3. "How long until my first line is paperless, and can we phase it line by
//       line so commercial supply doesn't go down?"
//
// Key trust issue: Multi-year EBR / MES programs that slip past go-live, leave
//   half the floor still on paper, or promise paperless and deliver
//   "scanned PDFs."
//
// Positioning (revised 2026-09-05, user-directed):
//   - The MES page (/solutions/mes) is a full-MES delivery engagement covering
//     execution, equipment management, weighing / dispensing, material
//     genealogy, OEE, and ISA-95 integration.
//   - This EBR page is a NARROWER, FASTER, more focused engagement: paperless
//     batch execution and electronic-record integrity, configured to replace
//     paper batch packs. EBR can stand alone for sites without an MES, or
//     layer onto an existing MES / ERP footprint.
//   - We are the engineering and delivery partner for the EBR layer, built and
//     integrated on Microsoft Azure. No third-party execution product vendor is
//     named — the product is referenced by category only, because selection is
//     a site-fit decision made during discovery.
//
// Vendor naming stance (revised 2026-09-05, user-directed):
//   - NO execution product vendor names. Removed: Körber, Werum, PAS-X,
//     Siemens, Opcenter Execution Pharma. Do not reintroduce without user
//     sign-off.
//   - Microsoft Azure: named as the cloud landing zone. Capability framing
//     only ("built on", "deployed on"). No Microsoft partner claim.
//   - Other vendors (Rockwell, OSIsoft PI, AVEVA, SAP, Oracle, ERP, LIMS,
//     QMS, automation, historian) are NOT named — referenced by category.
//   - NO named regulatory or certification frameworks. Removed: 21 CFR Part 11,
//     21 CFR Part 211, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5, ISO 13485,
//     MHRA Data Integrity, ALCOA+. The compliance sections are retained but
//     carry only generic engineering language — audit trail, electronic
//     records and signatures, material genealogy, role-scoped access, data
//     integrity. ISA-95 is retained as an integration architecture reference,
//     not a certification.
//
// Liability stance:
//   - We are a software engineering and implementation partner. Validation
//     execution, qualification, policy decisions, recipe authoring sign-off,
//     and any regulatory submission or inspection outcome are owned by the
//     customer's Quality, Validation, and Regulatory functions.
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
//   - No CaseStudySpotlight — no approved EBR case yet for ${SITE_CONFIG.name}.
//   - No IntegrationsPanel — surrounding ERP / automation / historian / LIMS /
//     QMS stack named by category, not by product, per liability stance.
//   - ComplianceSpotlight placed before signature as trust gate (same pattern
//     as MES, LIMS, AI Pharma, EHR/EMR, HMS).

const electronicBatchRecords: SolutionPageData = {
  slug: 'electronic-batch-records',
  title: `${BRAND_PREFIX} Electronic Batch Records (EBR) — Paperless Manufacturing Execution`,
  shortDescription:
    'Electronic Batch Records (EBR) implementation for regulated manufacturers. We replace paper batch records with operator-guided electronic execution — deployed on Microsoft Azure, configured to your master recipes, and rolled out one line or site at a time. Validation and qualification stay with your team.',

  metaTitle:
    'Electronic Batch Records (EBR) Implementation | Paperless Execution on Azure',
  metaDescription:
    'Electronic Batch Record (EBR) delivery for pharma, biologics, biotech, and medical device manufacturers. We design, implement, and integrate the EBR layer on Microsoft Azure — paperless batch execution, electronic signatures, audit-trail engineering, and ISA-95 integration. Validation and qualification remain with your team.',
  keywords: [
    'electronic batch records',
    'EBR implementation',
    'EBR software',
    'paperless manufacturing',
    'electronic batch record system',
    'EBR implementation services',
    'paperless batch record implementation',
    'electronic master batch record',
    'review by exception batch records',
    'batch record software',
    'pharmaceutical EBR',
    'biologics EBR',
    'medical device batch records',
    'manufacturing execution software',
    'shop floor execution software',
  ],
  canonicalPath: '/solutions/electronic-batch-records',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: `${BRAND_PREFIX} Electronic Batch Records (EBR)`, href: '/solutions/electronic-batch-records' },
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
    badge: 'EBR delivery — built on Microsoft Azure',
    headline: 'Replace paper batch records, one line at a time.',
    subhead:
      'We design, implement, and integrate the Electronic Batch Record layer on Microsoft Azure — configured to your master recipes, connected to the ERP, automation, historian, LIMS, and QMS you already run, and rolled out line by line. Validation, qualification, and any inspection outcome stay with your team.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the paper vs EBR flow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/electronic-batch-records/hero.jpg',
      alt: 'Pharmaceutical operator reviewing an electronic batch record on a shop-floor terminal in a cleanroom',
    },
    metrics: [
      {
        value: 'Built as it runs',
        label: 'The record is assembled during production',
        description:
          'Operator-guided steps, in-line data capture, and electronic signatures at the step — so the batch record is built as the batch runs, not reconstructed from a paper pack after disposition.',
      },
      {
        value: 'Azure-native',
        label: 'Deployed on Microsoft Azure',
        description:
          'Built on an Azure landing zone — Microsoft Entra ID with MFA, private networking, Key Vault, monitoring, and Terraform-defined infrastructure your IT and security teams already operate.',
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
  // four values lead with paperless scope, execution fit, cloud posture, and
  // phased rollout. Record-integrity framing lives mid-page (§9.9).
  metricsStrip: [
    {
      value: 'Paperless-first',
      label: 'Built as the batch runs',
      description:
        'Operator-guided execution, in-line data capture, electronic signatures, and review-by-exception — so the batch record is built as the batch runs, not reconstructed from a paper pack after disposition.',
    },
    {
      value: 'Execution-first',
      label: 'Configured to your recipes and review gates',
      description:
        'Master batch records, work instructions, weighing and dispensing, equipment use, and signature flows configured around how your operators, supervisors, and reviewers actually work.',
    },
    {
      value: 'Integration-aware',
      label: 'ISA-95-aligned to ERP, automation, historian, LIMS, QMS',
      description:
        'We design and build the integration surface that connects the EBR layer to the ERP, control system, historian, LIMS, and QMS you already run — over documented APIs your IT and automation teams control.',
    },
    {
      value: 'Lifecycle-first',
      label: 'Implementation, hypercare, and change-control engineering',
      description:
        'Discovery, configuration, integration, UAT support, hypercare, and ongoing change-control engineering — so the EBR layer stays in a known state as recipes, products, and SOPs evolve.',
    },
  ],

  // Features lead with what operations and quality get from EBR delivery —
  // paperless execution, e-signatures, review by exception, genealogy,
  // integration, cloud posture. Record-integrity signals are woven in, not
  // headlined (§9.9). No execution product vendor is named.
  features: [
    {
      icon: 'FileSignature',
      title: 'Electronic Master Batch Records & E-Signatures',
      description:
        'We configure master batch records, work instructions, weighing and dispensing flows, equipment use, and electronic signatures — configured to your products, your SOPs, and your review gates — so operators execute against an approved record and reviewers work by exception.',
    },
    {
      icon: 'Activity',
      title: 'Operator-Guided Execution on Shop-Floor Terminals',
      description:
        'Operator-guided execution, in-line data capture, equipment status logging, in-process check entry, and in-context deviation capture — wired into the execution engine so the batch record is built as the batch runs.',
    },
    {
      icon: 'Filter',
      title: 'Review by Exception, Not Page by Page',
      description:
        'Reviewers see deviations, missed limits, and exception queues — not every conforming line of every batch. The same review workflow can route to operations supervision, quality, and disposition with full e-signature traceability.',
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
      title: 'Microsoft Azure Landing Zone',
      description:
        'Azure landing zone designed for controlled manufacturing workloads — private networking, Microsoft Entra ID with MFA, Key Vault, monitoring via Application Insights and Log Analytics, environment promotion gates, and Terraform-defined infrastructure your security team can sign off.',
    },
  ],

  benefits: [
    {
      icon: 'FileCheck',
      title: 'Cleaner, Faster Batch Release',
      description:
        'Operator-guided execution, in-line data capture, electronic signatures, and review-by-exception compress the order-release → execution → review → disposition loop — and replace the printed batch records and post-batch reconciliation that slow release today.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Batch Record Integrity Your Team Can Stand Behind',
      description:
        'Every step is captured with actor, timestamp, equipment, materials, parameters, signatures, and outcome on the EBR audit trail — so quality and regulatory work from the same record your operators do, with data-integrity rigor engineered in.',
    },
    {
      icon: 'Settings',
      title: 'Configured to Your Plant — Not a Reference Configuration',
      description:
        'Your master recipes, your SOPs, your review gates, your reporting set. We configure the EBR layer to the way your operators, supervisors, and quality reviewers actually work — without rewriting the plant around a generic reference build.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Existing Stack',
      description:
        'The EBR layer is designed to coexist with the ERP, control system, historian, LIMS, and QMS you already run. We build the ISA-95-aligned integration surface; your IT and automation teams own the connectors, so existing qualification work is preserved.',
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
        'We walk your current paper batch record, dispensing, in-process check, review, and disposition workflows; inventory the ERP, automation, historian, LIMS, and QMS in scope; identify electronic-record, audit-trail, and genealogy gaps; and frame the EBR scope and the ISA-95 integration surface — before scoping the build. Validation strategy and qualification decisions stay with your Quality and Validation function.',
      duration: 'Scoped during discovery',
      deliverable:
        'Paper-record walkthrough, current-state system inventory, EBR module scope, integration surface outline, prioritized rollout roadmap',
    },
    {
      title: 'Cloud Landing Zone & EBR Implementation Plan',
      description:
        'Stand up the Microsoft Azure landing zone — identity (Microsoft Entra ID), private networking, Key Vault, monitoring, and Terraform-defined infrastructure. Design the EBR configuration scope (master batch records, weighing, equipment, electronic signatures), the ISA-95-aligned integration surface, and the review workflow alongside your IT, automation, security, and quality stakeholders.',
      duration: 'Phased per engagement',
      deliverable:
        'Azure landing zone, EBR configuration scope, ISA-95 integration design, review-workflow design, security architecture',
    },
    {
      title: 'EBR Configuration, Integration Build & Iteration',
      description:
        'Iterative configuration of master batch records, work instructions, equipment, and review gates; build of the ERP / automation / historian / LIMS / QMS integration surface; and the review-by-exception workflow — with engineering artifacts (test coverage, change logs, configuration history) captured as part of the build. Line-by-line demos with operators, supervisors, and quality keep the EBR anchored to real production work.',
      duration: 'Phased per engagement',
      deliverable:
        'Configured EBR in staging, integration runbooks, review-workflow configuration, engineering artifact set, configuration documentation',
    },
    {
      title: 'UAT & Handoff to Your Quality / Validation Function',
      description:
        'Run UAT with operations, automation, and quality stakeholders. Assemble the engineering documentation set your Quality team uses as inputs into their own validation and qualification work. We do not perform validation or qualification on your behalf.',
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
    'Electronic master batch record (eMBR) configuration to your products and SOPs',
    'Operator-guided execution and in-process check configuration on shop-floor terminals',
    'Electronic signature workflow configuration with full actor / timestamp attribution',
    'Review-by-exception workflow design — operations, quality, and disposition routing with e-signatures',
    'Material, lot, and serial genealogy modeling on the EBR data layer',
    'ISA-95-aligned integration surface to ERP, automation, historian, LIMS, and QMS',
    'Microsoft Azure landing zone — identity, networking, secrets, monitoring, IaC',
    'Audit-trail logging design for electronic records and data integrity',
    'Role-scoped access for operators, supervisors, quality, automation, plant IT, and admin populations',
    'Engineering documentation set (configuration, change logs, test evidence) to support your validation work',
    'Phased line / site rollout playbooks and change-control engineering for ongoing operations',
    'Hypercare and lifecycle operations for the EBR layer after go-live',
  ],

  technologies: [
    'Microsoft Azure',
    'Microsoft Entra ID (MFA)',
    'Azure Key Vault',
    'Azure SQL / PostgreSQL',
    'Azure Service Bus',
    'Azure Application Insights + Log Analytics',
    'Power BI / Power BI Embedded',
    'Terraform (IaC)',
    'React / Next.js (operator-experience extensions)',
    '.NET 10 / ASP.NET Core',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered for electronic-record, audit-trail, and data-integrity rigor',
    highlightText: 'electronic-record, audit-trail, and data-integrity rigor',
    statusText:
      'EBR implementation and Microsoft Azure landing zone engineered so every batch action is attributable, traceable, and reviewable — and so your Quality and Validation teams have the artifacts they need',
    pillars: [
      {
        icon: 'FileSignature',
        title: 'eMBR & E-Signature Configuration',
        description:
          'Master batch records, work instructions, equipment use, and electronic signature workflows configured so each action is attributable to a person, a time, and an approved step. Validation and policy decisions stay with your Quality team.',
      },
      {
        icon: 'Activity',
        title: 'Audit Trail on the EBR Layer',
        description:
          'Every batch step is logged with actor, timestamp, action, equipment, materials, parameters, signatures, and outcome — attributable, contemporaneous, original, accurate, complete, consistent, enduring, and available by design.',
      },
      {
        icon: 'Cloud',
        title: 'Azure Landing Zone Engineered for Controlled Workloads',
        description:
          'Microsoft Azure landing zone with private networking, Entra ID + MFA, Key Vault, monitoring, and Terraform-defined infrastructure — patterns your security team recognises and can review as part of your own qualification scope.',
      },
    ],
  },

  complianceDetail: {
    frameworks: [
      'Electronic batch records',
      'Electronic signatures',
      'Audit-trail logging',
      'Review by exception',
      'Material & batch genealogy',
      'Role-scoped access',
      'ISA-95 integration',
      'Change-control engineering',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the EBR implementation so your Quality and Validation teams have the configuration, change logs, integration runbooks, and test evidence they need to execute their own validation and qualification work. We do not perform validation on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'The audit trail as the system of record',
        description:
          'Every batch step the EBR executes — dispensing, equipment use, parameter capture, signature, deviation, review, disposition — is logged with actor, timestamp, action, and outcome, with Azure-side platform logs preserved alongside for end-to-end traceability.',
      },
      {
        icon: 'FileSignature',
        title: 'Electronic signature configuration',
        description:
          'Electronic batch record and signature workflows are configured so entries are attributable, contemporaneous, original, accurate, and reviewable. Policy decisions stay with your Quality team.',
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
          'Microsoft Entra ID with enforced MFA, conditional access policies, role-scoped access for operator, supervisor, quality, automation, plant IT, and admin populations, and least-privilege defaults across the landing zone and APIs.',
      },
      {
        icon: 'Building2',
        title: 'Microsoft Azure landing zone',
        description:
          'Azure landing zone for controlled manufacturing workloads — private endpoints, Key Vault for secrets, Terraform-defined infrastructure, environment promotion gates, monitoring via Application Insights and Log Analytics, and backup / DR patterns your security and operations teams can sign.',
      },
    ],
    auditNote:
      `Our implementation engineering — EBR configuration, ISA-95-aligned integration, the Microsoft Azure landing zone, and lifecycle ops — is designed with audit-trail, electronic-record, material-genealogy, role-scoped-access, and platform-logging rigor so your Quality, Validation, and Regulatory teams have the artifacts they need for their own work. Validation execution, qualification, and any regulatory or inspection outcome remain solely the customer's responsibility. ${SITE_CONFIG.name} does not represent, attest, or warrant compliance with any regulatory framework on behalf of any customer.`,
    partnerAgreements: ['DPA', 'SLA'],
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
        'Reviewers see only the deviations, missed limits, and exceptions queued for them — not every conforming page of every batch. Disposition is signed against the audited electronic record.',
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
        'EBR is the highest-impact piece of an MES program. If your remit also covers equipment management, weighing & dispensing, scheduling, and OEE — our MES delivery wraps EBR with the rest of the execution layer on the same engineering foundation.',
      href: '/solutions/mes',
      icon: 'Factory',
      pageType: 'solution',
    },
    {
      title: 'Security & Compliance',
      description:
        'Our security and compliance practice helps you shape audit-trail logging, role-scoped access, and the engineering evidence package your Quality team will be asked for around the EBR implementation and the Azure landing zone.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
    {
      title: 'Custom Software Development',
      description:
        'Beyond the execution layer, every plant has bespoke needs — operator-experience extensions, BI on top of the EBR data layer, and Azure-side glue. Our custom development practice is the engineering core that wraps and extends the EBR for the way your line actually runs.',
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
        'For many sites, EBR alone is the right first move. EBR is the highest-impact piece of an MES program — it removes the paper from operator execution, captures electronic signatures, and gives reviewers a review-by-exception workflow. We can implement EBR as a standalone engagement, then add the surrounding MES modules (equipment management, weighing & dispensing as a full module, scheduling, OEE) in later phases on the same execution platform — without re-platforming.',
    },
    {
      question:
        'Do you build the EBR yourselves, or implement an off-the-shelf product?',
      answer:
        'Both paths are on the table, and the decision belongs in discovery rather than on a public page. Some sites are best served by configuring and integrating an established execution product; others need a purpose-built EBR layer around the workflows their line actually runs. What we bring either way is the same: discovery, configuration or build, the ISA-95-aligned integration surface into your ERP, automation, historian, LIMS, and QMS, the Microsoft Azure landing zone, hypercare, and lifecycle ops. We are not a reseller and hold no vendor licensing incentive, so the recommendation is based on engineering fit.',
    },
    {
      question:
        'Why Microsoft Azure — what is the stack rationale?',
      answer:
        'Azure gives us a landing zone pattern that regulated manufacturers can already reason about: identity through Microsoft Entra ID, private networking, secrets management in Key Vault, monitoring through Application Insights and Log Analytics, backup and DR, and infrastructure defined in Terraform. In most plants we work with, IT and security already operate an Azure estate, so the EBR lands inside a security and operations model your team recognises instead of introducing a parallel one.',
    },
    {
      question:
        'How is the electronic record kept trustworthy — signatures, audit trail, and data integrity?',
      answer:
        'Every batch step is captured with actor, timestamp, equipment, materials, parameters, signatures, and outcome on the audit trail, and we configure master batch records, work instructions, equipment use, signature flows, and review queues so entries are attributable, contemporaneous, original, accurate, complete, and reviewable. Validation execution, policy decisions, and any inspection outcome remain with your Quality and Validation function; we do not certify or attest to regulatory compliance on your behalf.',
    },
    {
      question:
        'How does the EBR fit alongside our existing ERP, automation, historian, LIMS, and QMS?',
      answer:
        'The EBR layer is designed to coexist with the ERP, control system, historian, LIMS, and QMS you already run — using documented APIs and standard data exchange formats aligned with ISA-95 boundaries. We design and build the integration surface; your IT and automation teams own the connectors into the existing stack, so qualification work you have already done is preserved. We name those systems by category, not by product, because we do not claim partnerships or pre-built connectors with any third-party ERP, automation, or historian vendor.',
    },
    {
      question:
        'Can we go paperless one line or one site at a time?',
      answer:
        'Yes — this is the default approach, not an option. Single "big bang" EBR cutovers are one of the most common failure modes in regulated manufacturing programs, and we design against them. Each line or site is implemented to go live independently, with clear data and integration boundaries. This lets you prove operational fit on one line, train operators and supervisors incrementally, and expand the rollout without pausing commercial supply.',
    },
    {
      question:
        'What does a typical EBR engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by plant and are defined during discovery — we do not quote fixed durations or fixed outcomes on a public page. Discovery is where we walk your current paper batch record, map the surrounding system estate, agree the EBR module scope, and frame the Microsoft Azure landing zone before any production-bound work begins. The build is typically phased so the highest-priority line goes live first and your team can review the EBR before later phases land.',
    },
  ],

  cta: {
    title: 'Ready to retire your paper batch records?',
    description:
      'Book a free 30-minute discovery call. We will walk through your current paper batch record, the systems you already run, the EBR scope that fits your line, and the Microsoft Azure landing zone — and outline a realistic, phased rollout for your plant. Validation and qualification stay with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the paper vs EBR flow', href: '#signature' },
  },

  _unverified: [
    'Vendor cleanup (user-directed, 2026-09-05): all execution product vendor names removed — Körber, Werum, PAS-X, Siemens, Opcenter Execution Pharma. Execution product now referenced by category only. Do not reintroduce without user sign-off.',
    'Compliance cleanup (user-directed, 2026-09-05): complianceSpotlight and complianceDeepDive sections retained, but all named regulatory frameworks and certification-flavored language removed (21 CFR Part 11 / 211, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5, ISO 13485, MHRA Data Integrity, ALCOA+). complianceDetail.frameworks now carries engineering-practice chips instead. SEO impact of dropping these terms from keywords and body copy is not yet measured — review with marketing.',
    'The "PAS-X vs Opcenter" product-selection FAQ was removed with the vendor names and replaced with a build-vs-configure FAQ. Confirm this still answers the product-fit question buyers arrive with.',
    'Microsoft Azure referenced as the cloud landing zone we build on; no "Microsoft Solutions Partner" badge claim on this page. Confirm with marketing whether to add an explicit Microsoft Partner badge in a future revision.',
    'processSteps — durations remain "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No third-party execution product, ERP, automation, PLC, SCADA, historian, LIMS, or QMS vendor names on the page (only Microsoft / Azure is named). Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
    'hero.heroImage, imageFeatures[0].image, imageFeatures[1].image — placeholder photos sourced from neighboring MES solution folder. Replace with EBR-specific imagery (operator entering an eMBR step at a shop-floor terminal, reviewer signing off an exception queue) before publish per §11.3 / §11.5.',
  ],
};

export default electronicBatchRecords;
