import { BRAND_PREFIX, SITE_CONFIG } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Life Sciences / Manufacturing)
// Buyer: Director / VP of Manufacturing IT, Head of Digital Manufacturing, or
//   Plant CIO at a US pharmaceutical, biologics, cell & gene therapy, medical
//   device, or specialty chemicals manufacturer (commercial sites and CDMOs).
//   Secondary: Quality / GMP Director, Director of Manufacturing Operations.
//
// Buyer mindset: "I answer to FDA investigators, EU GMP inspectors, and my
//   board. An MES that fails an inspection — or worse, contaminates batch
//   record integrity — costs me my license to operate and my job."
//
// Top 3 buyer questions:
//   1. "Will this fit alongside our ERP, automation, historian, and LIMS — or
//       are we facing a rip-and-replace of validated interfaces we already own?"
//   2. "Will it satisfy 21 CFR Part 11, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5,
//       and ISA-95 expectations — electronic batch records, audit trails,
//       e-signatures, and material genealogy at batch-level?"
//   3. "Can we phase the rollout one production line or site at a time so we
//       don't take commercial supply offline?"
//
// Key trust issue: Multi-year MES programs that slip past go-live, blow the
//   validation budget, leave half the floor still on paper batch records, and
//   surface electronic-record gaps in the next FDA Form 483 or EMA inspection.
//
// Positioning (confirmed by user, 2026-05-22): we are a delivery / integration
//   partner for Körber Werum PAS-X MES Suite, deployed on Microsoft Cloud for
//   Manufacturing (Azure). We are not building a bespoke MES from scratch on
//   this page — PAS-X is the validated MES product layer; our engagement is
//   implementation, configuration to your master recipes, ERP / automation /
//   historian / LIMS / QMS integration, BI on top, hypercare, and lifecycle
//   ops on the Microsoft Cloud for Manufacturing landing zone.
//
// Vendor naming stance (confirmed by user, 2026-05-22):
//   - Körber Werum PAS-X MES Suite: named as the MES product we implement.
//     CAPABILITY framing only ("we implement / we deliver / built on") —
//     NOT "Körber-certified partner", NOT "authorized Körber partner",
//     NOT "Körber Solution Partner". No Körber or Werum logo on the page.
//     We have delivery experience but no formal Körber partnership badge.
//   - Microsoft Cloud for Manufacturing / Microsoft Azure: named as the
//     cloud landing zone PAS-X runs on. CAPABILITY framing ("built on",
//     "deployed on", "we build on"). No "Microsoft Cloud for Manufacturing
//     partner" claim on this page.
//   - Other vendors (Rockwell, Siemens, OSIsoft PI, AVEVA, SAP, Oracle, etc.)
//     are NOT named anywhere on the page. The MES sits on the customer's
//     existing ERP / automation / historian / LIMS / QMS stack; we name the
//     categories, not the products.
//   - Framework names (21 CFR Part 11, 21 CFR Part 211, EU GMP Annex 11,
//     ICH Q7 / Q9 / Q10, GAMP 5, ISA-95, ISO 13485, MHRA Data Integrity)
//     are retained for audience-signaling and SEO, but framed as engineering
//     and implementation design awareness — never as certification or
//     compliance promises on ${SITE_CONFIG.name}' behalf.
//
// Liability stance:
//   - We are a software engineering and implementation partner. Validation
//     execution (CSV, IQ/OQ/PQ authoring), GMP qualification, recipe
//     authoring sign-off, and any regulatory submission or inspection outcome
//     are owned by the customer's QA, Validation, and Regulatory functions.
//   - PAS-X is supplied and licensed by Körber under the customer's contract
//     with Körber; we do not resell PAS-X licenses and do not author
//     Körber-supplied validation packages on Körber's behalf.
//   - No fixed durations, no fixed costs, no promised regulatory outcomes.
//
// Signature: MesShopFloorControlPlane — hierarchical / flow visualization
//   (§8.3 patterns 2 + 3). Six manufacturing lifecycle stages
//   (Order Release → Material & Genealogy → EBR Execution → In-Process
//   Review-by-Exception → Release & Genealogy Closure → Yield, Deviations
//   & Continuous Improvement) running on a shared engineering foundation
//   (PAS-X as the execution layer, Microsoft Cloud for Manufacturing as the
//   landing zone, ISA-95-aligned integration to ERP / automation / historian
//   / LIMS / QMS, BI on top).
//
// Composition mirrors the LIMS / AI Pharma precedent (same regulated life
// sciences archetype, same liability stance):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) → signature (dark) →
//   complianceDeepDive (light) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — no Körber-approved PAS-X case yet for ${SITE_CONFIG.name}.
//   - No IntegrationsPanel — the customer's existing ERP / automation / historian
//     / LIMS / QMS stack is named by category, not by product, per liability
//     stance. PAS-X (named in prose) is the MES, not an integration target.
//   - ComplianceSpotlight placed before signature as trust gate (same pattern
//     as LIMS, AI Pharma, EHR/EMR, HMS).

const mes: SolutionPageData = {
  slug: 'mes',
  title: `${BRAND_PREFIX} Manufacturing Execution Systems (MES) — PAS-X on Microsoft Cloud for Manufacturing`,
  shortDescription:
    'Körber Werum PAS-X MES Suite implementation, configuration, and integration — delivered on Microsoft Cloud for Manufacturing. Electronic batch records, material genealogy, in-process review-by-exception, and live shop-floor visibility, configured to the way your line actually runs and rolled out one line or site at a time.',

  metaTitle:
    'MES Implementation | Körber Werum PAS-X on Microsoft Cloud for Manufacturing',
  metaDescription:
    'Manufacturing Execution System (MES) delivery for pharma, biologics, and medical device manufacturers. We implement Körber Werum PAS-X MES Suite on Microsoft Cloud for Manufacturing — configuration, ERP / automation / historian / LIMS / QMS integration, BI, hypercare, and lifecycle ops. Validation and GMP qualification stay with your team.',
  keywords: [
    'MES implementation services',
    'Werum PAS-X implementation',
    'Körber PAS-X MES Suite',
    'PAS-X MES delivery',
    'Microsoft Cloud for Manufacturing',
    'pharmaceutical MES implementation',
    'electronic batch record implementation',
    'EBR implementation services',
    'GMP manufacturing software',
    '21 CFR Part 11 MES',
    'EU GMP Annex 11 MES',
    'ISA-95 MES integration',
    'biologics manufacturing software',
    'medical device manufacturing software',
    'paperless manufacturing',
  ],
  canonicalPath: '/solutions/mes',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: `${BRAND_PREFIX} MES`, href: '/solutions/mes' },
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
  signatureComponent: 'MesShopFloorControlPlane',

  hero: {
    badge: 'MES delivery — PAS-X on Microsoft Cloud for Manufacturing',
    headline:
      'Werum PAS-X MES, implemented for your plant.',
    subhead:
      'We deliver Körber Werum PAS-X MES Suite on Microsoft Cloud for Manufacturing — configured to your master recipes, integrated with the ERP, automation, historian, LIMS, and QMS you already run, and rolled out one line or site at a time. Validation, GMP qualification, and regulatory outcomes stay with your team.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the shop-floor flow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/mes/hero.jpg',
      alt: 'Pharmaceutical operator reviewing an electronic batch record on a shop-floor terminal in a cleanroom',
    },
    metrics: [
      {
        value: 'PAS-X-led',
        label: 'Werum PAS-X as the MES product layer',
        description:
          'PAS-X brings the validated execution engine, electronic batch record, and master recipe framework. We bring the implementation, configuration, integration, and lifecycle ops — so the platform reflects the way your line actually runs.',
      },
      {
        value: 'Azure-native',
        label: 'Microsoft Cloud for Manufacturing landing zone',
        description:
          'Deployed on a Microsoft Cloud for Manufacturing landing zone — identity, networking, monitoring, and infrastructure-as-code patterns your IT and security teams already recognize from the rest of your Azure estate.',
      },
      {
        value: 'Modular',
        label: 'Roll out one line or site at a time',
        description:
          'Phase delivery line by line or site by site so a single production area can run on PAS-X while the rest of the plant continues uninterrupted — no big-bang cutover risk to commercial supply.',
      },
    ],
  },

  // Audience test (§9.5): a VP Manufacturing or Director of Manufacturing IT
  // reading these in 8 seconds wants to know "will this run my plant better and
  // protect my batch record integrity?" — not "will this pass an audit?" The
  // four values lead with product fit (PAS-X), cloud posture, integration, and
  // phased rollout. Audit framing lives mid-page in ComplianceSpotlight /
  // DeepDive (§9.9).
  metricsStrip: [
    {
      value: 'PAS-X-led',
      label: 'Werum PAS-X as the proven MES product layer',
      description:
        'PAS-X brings the validated execution engine, electronic batch records, master recipes, weighing and dispensing, equipment management, and integration framework already in use across the global pharma manufacturing base.',
    },
    {
      value: 'Azure-native',
      label: 'Built on Microsoft Cloud for Manufacturing',
      description:
        'Deployed on a Microsoft Cloud for Manufacturing landing zone — identity, networking, monitoring, secrets, backup, and IaC patterns aligned to the Azure estate your IT and security teams already operate.',
    },
    {
      value: 'Integration-first',
      label: 'ISA-95-aligned to your ERP, automation, historian, LIMS, QMS',
      description:
        'We design and build the integration surface that connects PAS-X to the ERP, control system, historian, LIMS, and QMS you already validated — over documented APIs and standard data formats your IT and automation teams control.',
    },
    {
      value: 'Lifecycle-first',
      label: 'Implementation, hypercare, and lifecycle ops',
      description:
        'Discovery, configuration, integration, UAT support, hypercare, and ongoing change-control engineering — so the platform stays in a known state as your recipes, products, and processes evolve.',
    },
  ],

  // Features lead with what the plant team gets (PAS-X delivery, paperless,
  // visibility, integration), not what QA gets. Compliance signals are woven
  // in, not headlined (§9.9). Only PAS-X and Microsoft Cloud for Manufacturing
  // are named per liability stance.
  features: [
    {
      icon: 'FileSignature',
      title: 'PAS-X Electronic Batch Records — Configured to Your Recipes',
      description:
        'We implement PAS-X master batch records, work instructions, weighing and dispensing flows, equipment use, and electronic signatures — configured to your products, your SOPs, and your review gates — so operators execute against an approved record and QA reviews by exception.',
    },
    {
      icon: 'Factory',
      title: 'PAS-X Shop-Floor Execution & Equipment Management',
      description:
        'Operator-guided execution on shop-floor terminals, equipment status and use logging, in-process check capture, and in-context deviation entry — wired into the PAS-X execution engine so the batch record is built as the batch runs.',
    },
    {
      icon: 'Boxes',
      title: 'Material & Batch Genealogy at Batch Level',
      description:
        'PAS-X-driven material dispensing, lot and serial linkage, in-process and finished-goods relationships, and forward / backward genealogy — so recall trace, complaint follow-up, and deviation investigation are queries against an audited record, not multi-day spreadsheet exercises.',
    },
    {
      icon: 'PlugZap',
      title: 'ERP, Automation, Historian, LIMS & QMS Integration',
      description:
        'ISA-95-aligned engineering surface for orders, materials, BOMs, and confirmations to / from ERP; setpoints, equipment state, and process data from automation and the historian; result and specification exchange with LIMS; deviation and CAPA hand-off to QMS — over documented APIs your IT and automation teams control.',
    },
    {
      icon: 'Cloud',
      title: 'Microsoft Cloud for Manufacturing Landing Zone',
      description:
        'Azure landing zone designed for regulated manufacturing workloads — private networking, Microsoft Entra ID with MFA, Key Vault, monitoring via Application Insights and Log Analytics, environment promotion gates, and Terraform-defined infrastructure your security team can sign off.',
    },
    {
      icon: 'BarChart3',
      title: 'BI, OEE & Shop-Floor Dashboards on Top of PAS-X',
      description:
        'Power BI dashboards on the PAS-X data layer — batch status, OEE, deviation counts, in-process check results, electronic-record review backlog, and yield — surfaced for operators, supervisors, plant managers, and quality leadership on terminals, large-format boards, and the executive view.',
    },
  ],

  benefits: [
    {
      icon: 'FileCheck',
      title: 'Cleaner, Faster Batch Release on a Proven MES Product',
      description:
        'Operator-guided PAS-X execution, in-line data capture, electronic signatures, and review-by-exception compress the order-release → execution → review → disposition loop — and replace the printed batch records and post-batch reconciliation that slow release today.',
    },
    {
      icon: 'Activity',
      title: 'Live Operational Signals for Plant Leadership',
      description:
        'Power BI dashboards on the PAS-X data layer surface batch status, OEE, deviation counts, in-process check results, and electronic-record review backlog — so plant managers, supervisors, and QA leadership act on the same numbers, at the same time.',
    },
    {
      icon: 'Settings',
      title: 'Configured to Your Plant — Not a Reference Configuration',
      description:
        'Your master recipes, your SOPs, your review gates, your reporting set. We configure PAS-X to the way your operators, supervisors, and quality reviewers actually work — without rewriting the plant around a generic reference configuration.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Batch Record Integrity Your QA and Inspectors Can Stand Behind',
      description:
        'PAS-X captures every step with actor, timestamp, equipment, materials, parameters, signatures, and outcome. The same execution layer that gives your team live visibility also gives QA, regulatory, and inspectors the evidence trail they expect.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Validated Stack',
      description:
        'PAS-X is designed to coexist with the ERP, control system, historian, LIMS, and QMS you already run. We build the ISA-95-aligned integration surface; your IT and automation teams own the connectors into the validated stack, so existing CSV and qualification work is preserved.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Process Mapping & Implementation Framing',
      description:
        'We walk your order-release, dispensing, execution, in-process check, review, and disposition workflows; inventory your existing ERP, automation, historian, LIMS, and QMS; identify electronic-record, audit-trail, and genealogy gaps; and frame the PAS-X implementation scope and the ISA-95 integration surface — before scoping the build. Computer-system validation strategy, IQ/OQ/PQ planning, and GMP qualification decisions stay with your QA and Validation function.',
      duration: 'Scoped during discovery',
      deliverable:
        'Process maps, current-state system inventory, PAS-X module scope, integration surface outline, prioritized implementation roadmap',
    },
    {
      title: 'Cloud Landing Zone & Implementation Plan',
      description:
        'Stand up the Microsoft Cloud for Manufacturing landing zone — identity (Microsoft Entra ID), private networking, Key Vault, monitoring, and Terraform-defined infrastructure. Design the PAS-X configuration scope (master batch records, weighing, equipment management, electronic signatures), the ISA-95-aligned integration surface, and the BI layer alongside your IT, automation, security, and QA stakeholders. Framework expectations (21 CFR Part 11, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5, ISA-95, ISO 13485 where applicable) are built into the implementation plan as design awareness — not certification claims.',
      duration: 'Phased per engagement',
      deliverable:
        'Azure landing zone, PAS-X configuration scope, ISA-95 integration design, BI architecture, security architecture',
    },
    {
      title: 'PAS-X Configuration, Integration Build & Iteration',
      description:
        'Iterative configuration of PAS-X to your master recipes, work instructions, equipment, and review gates; build of the ERP / automation / historian / LIMS / QMS integration surface; and the Power BI layer on top — with engineering artifacts (test coverage, change logs, configuration history) captured as part of the build. Line-by-line demos with operators, supervisors, and QA keep the platform anchored to real production work.',
      duration: 'Phased per engagement',
      deliverable:
        'Configured PAS-X in staging, integration runbooks, BI dashboards, engineering artifact set, configuration documentation',
    },
    {
      title: 'UAT & Handoff to Your QA / Validation Function',
      description:
        'Run UAT with operations, automation, and quality stakeholders. Assemble the engineering documentation set your QA team uses as inputs into their own IQ/OQ/PQ, computer-system validation, and GMP qualification work — alongside the Körber-supplied PAS-X validation packages your team executes under the customer / Körber contract. We do not author Körber-supplied validation packages and we do not perform GMP qualification on your behalf.',
      duration: 'Phased per engagement',
      deliverable:
        'UAT sign-off, integration runbooks, security test report, engineering documentation set for your validation work',
    },
    {
      title: 'Phased Go-Live, Hypercare & Lifecycle Operations',
      description:
        'Line-by-line or site-by-site go-live so a single production area can run on PAS-X while the rest of the plant continues uninterrupted. An initial hypercare period covers monitoring, defect triage, change-control engineering, and tuning so the platform stays in a known state as your master recipes, products, and processes evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbooks, hypercare support',
    },
  ],

  capabilities: [
    'PAS-X master batch record (MBR) configuration to your products and SOPs',
    'PAS-X weighing and dispensing, equipment management, and electronic signature configuration',
    'PAS-X operator-guided execution and in-process check configuration',
    'Material, lot, and serial genealogy configuration on the PAS-X data layer',
    'ISA-95-aligned integration surface to ERP, automation, historian, LIMS, and QMS',
    'Microsoft Cloud for Manufacturing landing zone on Azure — identity, networking, secrets, monitoring, IaC',
    'Power BI dashboards on the PAS-X data layer (batch status, OEE, deviations, review backlog, yield)',
    'Audit-trail logging design awareness aligned with 21 CFR Part 11 and EU GMP Annex 11 expectations',
    'Role-scoped access for operators, supervisors, QA, automation, plant IT, and admin populations',
    'Engineering documentation set (configuration, change logs, test evidence) to support your CSV work',
    'Phased line / site rollout playbooks and change-control engineering for ongoing operations',
    'Hypercare and lifecycle operations for the platform after go-live',
  ],

  technologies: [
    'Körber Werum PAS-X MES Suite',
    'Microsoft Cloud for Manufacturing',
    'Microsoft Azure',
    'Microsoft Entra ID (MFA)',
    'Azure Key Vault',
    'Azure SQL / PostgreSQL',
    'Azure Service Bus',
    'Azure Application Insights + Log Analytics',
    'Power BI / Power BI Embedded',
    'Terraform (IaC)',
    'React / Next.js (BI front-end & operator-experience extensions)',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering & implementation posture',
    title:
      'Implemented with electronic-record, audit-trail, and material-genealogy awareness for regulated manufacturing',
    highlightText: 'electronic-record, audit-trail, and material-genealogy awareness',
    statusText:
      'PAS-X implementation and Microsoft Cloud for Manufacturing landing zone designed with awareness of practices common in 21 CFR Part 11, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5, ISA-95, ISO 13485, and MHRA Data Integrity environments',
    pillars: [
      {
        icon: 'FileSignature',
        title: 'PAS-X EBR & e-Signature Configuration',
        description:
          'We configure PAS-X master batch records, work instructions, equipment management, and electronic signatures with awareness of 21 CFR Part 11 and EU GMP Annex 11 expectations. Predicate-rule decisions and computer-system validation stay with your QA team.',
      },
      {
        icon: 'GitBranch',
        title: 'Material & Batch Genealogy on the PAS-X Data Layer',
        description:
          'Forward and backward genealogy, lot and serial linkage, and material consumption are configured into the PAS-X data model — so a recall trace or deviation investigation is a query, not a spreadsheet reconstruction.',
      },
      {
        icon: 'Cloud',
        title: 'Azure Landing Zone Engineered for Regulated Workloads',
        description:
          'Microsoft Cloud for Manufacturing landing zone with private networking, Entra ID + MFA, Key Vault, monitoring, and Terraform-defined infrastructure — patterns your security team recognises and can sign off as part of your CSV and qualification scope.',
      },
    ],
    badges: [
      '21 CFR Part 11',
      'EU GMP Annex 11',
      'ICH Q7',
      'ICH Q9',
      'ICH Q10',
      'GAMP 5',
      'ISA-95',
      'ISO 13485',
      'MHRA Data Integrity',
      '21 CFR Part 211',
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
          'We structure the implementation so your QA and Validation teams have the configuration, change logs, integration runbooks, and test evidence they need to execute their IQ/OQ/PQ, CSV, and GMP qualification work — alongside the Körber-supplied PAS-X validation packages. We do not author Körber-supplied validation packages and we do not perform validation on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'PAS-X audit trail as the system of record',
        description:
          'Every batch step PAS-X executes — dispensing, equipment use, parameter capture, signature, deviation, review, disposition — is logged with actor, timestamp, action, and outcome on the PAS-X audit trail, with Azure-side platform logs preserved alongside for end-to-end traceability.',
      },
      {
        icon: 'FileSignature',
        title: 'PAS-X e-signature configuration with regulatory awareness',
        description:
          'PAS-X electronic batch records and e-signature workflows are configured with awareness of 21 CFR Part 11 and EU GMP Annex 11 expectations — attributable, contemporaneous, original, accurate, and reviewable. Predicate-rule decisions stay with your QA team.',
      },
      {
        icon: 'GitBranch',
        title: 'Material lineage & forward/backward genealogy',
        description:
          'Material, lot, and serial linkage from receiving to finished goods is configured into the PAS-X data model — so recall trace, deviation investigation, and complaint follow-up are queries against the audited record, not spreadsheet reconstructions.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-scoped access on Azure',
        description:
          'Microsoft Entra ID with enforced MFA, conditional access policies, role-scoped access for operator, supervisor, QA, automation, plant IT, and admin populations, and least-privilege defaults across the landing zone and APIs.',
      },
      {
        icon: 'Building2',
        title: 'Microsoft Cloud for Manufacturing landing zone',
        description:
          'Azure landing zone for regulated manufacturing workloads — private endpoints, Key Vault for secrets, Terraform-defined infrastructure, environment promotion gates, monitoring via Application Insights and Log Analytics, and backup / DR patterns your security and operations teams can sign.',
      },
    ],
    auditNote:
      `Our implementation engineering — PAS-X configuration, ISA-95-aligned integration, Microsoft Cloud for Manufacturing landing zone, BI layer, and lifecycle ops — is designed with audit-trail, electronic-record, material-genealogy, role-scoped-access, and Azure-platform awareness so your QA, Validation, and Regulatory teams have the artifacts they need to execute their own CSV, IQ/OQ/PQ, GMP qualification, and inspection-readiness work. Final regulatory submission, validation execution, IQ/OQ/PQ authoring, GMP qualification, and any inspection outcome (FDA, EMA, MHRA, PMDA, ANVISA, Health Canada, or other authority) remain solely the customer’s responsibility, executed by the customer’s QA, Validation, or Regulatory function. PAS-X is supplied and licensed by Körber under the customer’s contract with Körber; ${SITE_CONFIG.name} does not resell PAS-X licenses, does not author Körber-supplied validation packages on Körber’s behalf, and does not represent, attest, or warrant compliance with any regulatory framework on behalf of any customer.`,
    partnerAgreements: ['DPA', 'SLA', 'Quality / Technical Agreement (where required by the customer)'],
  },

  imageFeatures: [
    {
      heading: 'Paperless Batch Records, In the Hands of Operators',
      description:
        'PAS-X operator-guided execution on shop-floor terminals, in-line data capture, and electronic signatures at the step — so the record is built as the batch runs, not reconstructed after it.',
      image: {
        src: '/images/solutions/mes/feature-1.jpg',
        alt: 'Pharmaceutical operator entering an electronic batch step on a shop-floor tablet in a cleanroom',
      },
    },
    {
      heading: 'Live Visibility From the Line to the Plant Manager',
      description:
        'Power BI dashboards on the PAS-X data layer surface batch status, line state, OEE, deviations, and in-process checks live — so supervisors, QA, and plant leadership are looking at the same numbers, in real time.',
      image: {
        src: '/images/solutions/mes/feature-2.jpg',
        alt: 'Plant supervisor reviewing live manufacturing dashboards on a large-format shop-floor display',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Custom Software Development',
      description:
        'Beyond PAS-X, every plant has bespoke needs — operator-experience extensions, BI on top of the MES data layer, and Azure-side glue. Our custom development practice is the engineering core that wraps and extends the MES for the way your line actually runs.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'Preparing for an FDA, EMA, or MHRA inspection? Our security and compliance practice helps you shape audit-trail logging, role-scoped access, and the engineering evidence package your QA team will be asked for around the PAS-X implementation and Azure landing zone.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
    {
      title: 'Electronic Batch Records (EBR)',
      description:
        'Not ready for a full MES program? Our EBR engagement is the focused, line-by-line paperless-execution slice — PAS-X or Siemens Opcenter Execution Pharma on Microsoft Azure — so you can retire paper batch records first and add the surrounding MES modules in later phases.',
      href: '/solutions/electronic-batch-records',
      icon: 'FileSignature',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question:
        'Are you selling PAS-X licenses, or are you implementing PAS-X?',
      answer:
        'We are an implementation and integration partner. PAS-X is supplied and licensed by Körber under your contract with Körber. Our engagement is the PAS-X implementation — discovery, configuration to your master recipes and SOPs, ERP / automation / historian / LIMS / QMS integration over an ISA-95-aligned surface, the Microsoft Cloud for Manufacturing landing zone, the BI layer on top, hypercare, and lifecycle ops. We do not resell PAS-X licenses and we do not author Körber-supplied validation packages on Körber\'s behalf.',
    },
    {
      question:
        'Are you a Körber-certified PAS-X partner?',
      answer:
        'No — we have PAS-X implementation and integration delivery experience, but we are not a Körber Solution Partner and do not market under a Körber-certified badge. If your procurement requires a Körber-certified implementation lead, we can work alongside that partner on the cloud landing zone, integration surface, BI layer, and operator-experience extensions where our engineering is well-suited.',
    },
    {
      question:
        'Why PAS-X on Microsoft Cloud for Manufacturing — what is the stack rationale?',
      answer:
        'PAS-X is one of the most widely deployed MES products in pharmaceutical and biologics manufacturing, with an execution engine, electronic batch records, and master recipe framework already in use across the global manufacturing base. Microsoft Cloud for Manufacturing provides an Azure landing zone designed for regulated manufacturing workloads — identity (Microsoft Entra ID), private networking, secrets management, monitoring, backup/DR, and Terraform-defined infrastructure — that aligns with the Azure estate your IT and security teams already operate. The combination lets you stand on a proven MES product instead of building one, while keeping the rest of the platform on a cloud posture your team already knows.',
    },
    {
      question:
        'How does PAS-X fit alongside our existing ERP, automation, historian, LIMS, and QMS?',
      answer:
        'PAS-X is designed to coexist with the ERP, control system, historian, LIMS, and QMS you already run — using documented APIs and standard data exchange formats aligned with ISA-95 boundaries. We design and build the integration surface; your IT and automation teams own the connectors into the validated stack, so existing computer-system validation and qualification work is preserved. We name those systems by category, not by product, because we do not claim partnerships or pre-built connectors with any third-party ERP, automation, or historian vendor.',
    },
    {
      question:
        'Can we roll PAS-X out one line or site at a time instead of a single cutover?',
      answer:
        'Yes — this is the default approach, not an option. Single "big bang" MES cutovers are one of the most common failure modes in regulated manufacturing programs, and we design against them. Each line or site is implemented to go live independently, with clear data, integration, and validation boundaries. This lets you prove operational fit on one line, train operators and supervisors incrementally, and expand the rollout without pausing commercial supply.',
    },
    {
      question:
        'How does the implementation handle electronic batch records, audit trail, and 21 CFR Part 11 / EU GMP Annex 11?',
      answer:
        'PAS-X provides the validated execution engine, audit trail, and e-signature framework. Our implementation configures the master batch records, work instructions, weighing and dispensing, equipment management, and signature flows with awareness of 21 CFR Part 11, EU GMP Annex 11, ICH Q7/Q9/Q10, and GAMP 5 expectations — attributable, contemporaneous, original, accurate, and reviewable. Computer-system validation, predicate-rule decisions, and any inspection outcome remain with your QA and Validation function; we do not make GMP or regulatory certification on your behalf.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by plant and are defined during discovery — we do not quote fixed durations or fixed regulatory outcomes on a public page. Discovery is where we map your production workflows, inventory the systems you already run, agree the PAS-X module scope and the ISA-95 integration surface, and frame the Microsoft Cloud for Manufacturing landing zone before any production-bound work begins. The build is typically phased so the highest-priority line goes live first and your team can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Looking to deliver PAS-X on Microsoft Cloud for Manufacturing?',
    description:
      'Book a free 30-minute discovery call. We will walk through your production workflows, the systems you already run, the PAS-X module scope, and the Microsoft Cloud for Manufacturing landing zone — and outline a realistic, phased implementation for your plant. PAS-X licensing stays with Körber; validation and GMP qualification stay with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the shop-floor flow', href: '#signature' },
  },

  _unverified: [
    'Page positions ${SITE_CONFIG.name} as a PAS-X delivery / integration partner with capability framing only (no Körber Solution Partner / Körber-certified badge claim, no Körber or Werum logo). Legal review recommended pre-publish to confirm capability framing is acceptable and does not require Körber sign-off.',
    'Microsoft Cloud for Manufacturing referenced as the cloud landing zone we build on; no "Microsoft Cloud for Manufacturing partner" / "Microsoft Solutions Partner" badge claim on this page. Confirm with marketing whether to add an explicit Microsoft Partner badge in a future revision.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "implementation / design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No third-party ERP, automation, PLC, SCADA, historian, LIMS, or QMS vendor names on the page (only PAS-X and Microsoft / Azure are named). Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
    `hero.heroImage, imageFeatures[0].image, imageFeatures[1].image — placeholder photos sourced from neighboring life-sciences solution folder (ai-pharma). Replace with MES-specific Unsplash imagery (shop-floor operator with PAS-X terminal, cleanroom dispensing, plant supervisor at Power BI / OEE board) before publish per §11.3 / §11.5.`,
  ],
};

export default mes;
