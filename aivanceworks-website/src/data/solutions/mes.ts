import { BRAND_PREFIX, SITE_CONFIG } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Life Sciences / Manufacturing)
// Buyer: Director / VP of Manufacturing IT, Head of Digital Manufacturing, or
//   Plant CIO at a US pharmaceutical, biologics, cell & gene therapy, medical
//   device, or specialty chemicals manufacturer (commercial sites and CDMOs).
//   Secondary: Quality Director, Director of Manufacturing Operations.
//
// Buyer mindset: "My plant runs on paper and spreadsheets between the ERP and
//   the line. I need an execution layer that holds batch record integrity
//   without taking commercial supply offline while we roll it out."
//
// Top 3 buyer questions:
//   1. "Will this fit alongside our ERP, automation, historian, and LIMS — or
//       are we facing a rip-and-replace of interfaces we already own?"
//   2. "Will the electronic batch record hold up — audit trails, e-signatures,
//       and material genealogy at batch level?"
//   3. "Can we phase the rollout one production line or site at a time so we
//       don't take commercial supply offline?"
//
// Key trust issue: Multi-year MES programs that slip past go-live, blow the
//   budget, and leave half the floor still on paper batch records.
//
// Positioning (revised 2026-09-05, user-directed):
//   We are the engineering and delivery partner for the MES layer, built and
//   integrated on Microsoft Azure. No third-party MES product vendor is named
//   anywhere on this page — the execution product is referenced by category
//   only ("the MES layer", "the execution layer"), because product selection
//   is a site-fit decision made during discovery and we claim no vendor
//   partnership, certification, or reseller relationship.
//
// Vendor naming stance (revised 2026-09-05, user-directed):
//   - NO MES product vendor names. Removed: Körber, Werum, PAS-X, and any
//     "MES Suite" product branding. Do not reintroduce without user sign-off.
//   - Microsoft Azure: named as the cloud landing zone we build on. Capability
//     framing only ("built on", "deployed on"). No Microsoft partner claim.
//   - Other vendors (Rockwell, Siemens, OSIsoft PI, AVEVA, SAP, Oracle, etc.)
//     are NOT named. The MES sits on the customer's existing ERP / automation
//     / historian / LIMS / QMS stack; we name the categories, not the products.
//   - NO named regulatory or certification frameworks. Removed: 21 CFR Part 11,
//     21 CFR Part 211, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5, ISO 13485,
//     MHRA Data Integrity. The compliance sections are retained but carry only
//     generic engineering language — audit trail, electronic records and
//     signatures, material genealogy, role-scoped access, data integrity.
//     ISA-95 is retained as an integration architecture reference, not a
//     certification.
//
// Liability stance:
//   - We are a software engineering and implementation partner. Validation
//     execution, qualification, recipe authoring sign-off, and any regulatory
//     submission or inspection outcome are owned by the customer's Quality,
//     Validation, and Regulatory functions.
//   - No fixed durations, no fixed costs, no promised regulatory outcomes.
//
// Signature: MesShopFloorControlPlane — hierarchical / flow visualization
//   (§8.3 patterns 2 + 3). Six manufacturing lifecycle stages
//   (Order Release → Material & Genealogy → EBR Execution → In-Process
//   Review-by-Exception → Release & Genealogy Closure → Yield, Deviations
//   & Continuous Improvement) running on a shared engineering foundation
//   (the MES execution layer, Microsoft Azure as the landing zone, ISA-95-
//   aligned integration to ERP / automation / historian / LIMS / QMS, BI).
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
//   - No CaseStudySpotlight — no approved MES case yet for ${SITE_CONFIG.name}.
//   - No IntegrationsPanel — the customer's existing ERP / automation / historian
//     / LIMS / QMS stack is named by category, not by product, per liability
//     stance.
//   - ComplianceSpotlight placed before signature as trust gate (same pattern
//     as LIMS, AI Pharma, EHR/EMR, HMS).

const mes: SolutionPageData = {
  slug: 'mes',
  title: `${BRAND_PREFIX} Manufacturing Execution Systems (MES) — Built on Microsoft Azure`,
  shortDescription:
    'MES design, implementation, and integration delivered on Microsoft Azure. Electronic batch records, material genealogy, in-process review-by-exception, and live shop-floor visibility, configured to the way your line actually runs and rolled out one line or site at a time.',

  metaTitle:
    'MES Implementation Services | Manufacturing Execution Systems on Azure',
  metaDescription:
    'Manufacturing Execution System (MES) delivery for pharma, biologics, and medical device manufacturers. We design, implement, and integrate the MES layer on Microsoft Azure — configuration, ERP / automation / historian / LIMS / QMS integration, BI, hypercare, and lifecycle ops. Validation and qualification stay with your team.',
  keywords: [
    'MES implementation services',
    'manufacturing execution system implementation',
    'MES integration services',
    'MES on Azure',
    'pharmaceutical MES implementation',
    'electronic batch record implementation',
    'EBR implementation services',
    'manufacturing software development',
    'ISA-95 MES integration',
    'shop floor execution software',
    'biologics manufacturing software',
    'medical device manufacturing software',
    'paperless manufacturing',
    'material genealogy software',
    'OEE dashboards manufacturing',
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
    badge: 'MES delivery — built on Microsoft Azure',
    headline:
      'An MES that runs your plant, not a reference plant.',
    subhead:
      'We design, implement, and integrate the MES execution layer on Microsoft Azure — configured to your master recipes, connected to the ERP, automation, historian, LIMS, and QMS you already run, and rolled out one line or site at a time. Validation and qualification stay with your team.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the shop-floor flow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/mes/hero.jpg',
      alt: 'Pharmaceutical operator reviewing an electronic batch record on a shop-floor terminal in a cleanroom',
    },
    metrics: [
      {
        value: 'Execution-first',
        label: 'The batch record is built as the batch runs',
        description:
          'Operator-guided execution, in-line data capture, and electronic signatures at the step — so the record is assembled during production, not reconstructed from paper after disposition.',
      },
      {
        value: 'Azure-native',
        label: 'Microsoft Azure landing zone',
        description:
          'Deployed on an Azure landing zone — identity, networking, monitoring, and infrastructure-as-code patterns your IT and security teams already recognize from the rest of your estate.',
      },
      {
        value: 'Modular',
        label: 'Roll out one line or site at a time',
        description:
          'Phase delivery line by line or site by site so a single production area can run on the MES while the rest of the plant continues uninterrupted — no big-bang cutover risk to commercial supply.',
      },
    ],
  },

  // Audience test (§9.5): a VP Manufacturing or Director of Manufacturing IT
  // reading these in 8 seconds wants to know "will this run my plant better and
  // protect my batch record integrity?" — not "will this pass an audit?" The
  // four values lead with execution fit, cloud posture, integration, and
  // phased rollout. Record-integrity framing lives mid-page (§9.9).
  metricsStrip: [
    {
      value: 'Execution-first',
      label: 'Electronic batch records at the centre of the build',
      description:
        'Master recipes, work instructions, weighing and dispensing, equipment management, in-process checks, and electronic signatures — configured around how your operators and reviewers actually work.',
    },
    {
      value: 'Azure-native',
      label: 'Built on Microsoft Azure',
      description:
        'Deployed on an Azure landing zone — identity, networking, monitoring, secrets, backup, and IaC patterns aligned to the estate your IT and security teams already operate.',
    },
    {
      value: 'Integration-first',
      label: 'ISA-95-aligned to your ERP, automation, historian, LIMS, QMS',
      description:
        'We design and build the integration surface that connects the MES to the ERP, control system, historian, LIMS, and QMS you already run — over documented APIs and standard data formats your IT and automation teams control.',
    },
    {
      value: 'Lifecycle-first',
      label: 'Implementation, hypercare, and lifecycle ops',
      description:
        'Discovery, configuration, integration, UAT support, hypercare, and ongoing change-control engineering — so the platform stays in a known state as your recipes, products, and processes evolve.',
    },
  ],

  // Features lead with what the plant team gets (execution, paperless,
  // visibility, integration), not what Quality gets. Record-integrity signals
  // are woven in, not headlined (§9.9). No MES product vendor is named.
  features: [
    {
      icon: 'FileSignature',
      title: 'Electronic Batch Records — Configured to Your Recipes',
      description:
        'We implement master batch records, work instructions, weighing and dispensing flows, equipment use, and electronic signatures — configured to your products, your SOPs, and your review gates — so operators execute against an approved record and reviewers work by exception.',
    },
    {
      icon: 'Factory',
      title: 'Shop-Floor Execution & Equipment Management',
      description:
        'Operator-guided execution on shop-floor terminals, equipment status and use logging, in-process check capture, and in-context deviation entry — wired into the execution engine so the batch record is built as the batch runs.',
    },
    {
      icon: 'Boxes',
      title: 'Material & Batch Genealogy at Batch Level',
      description:
        'Material dispensing, lot and serial linkage, in-process and finished-goods relationships, and forward / backward genealogy — so recall trace, complaint follow-up, and deviation investigation are queries against an audited record, not multi-day spreadsheet exercises.',
    },
    {
      icon: 'PlugZap',
      title: 'ERP, Automation, Historian, LIMS & QMS Integration',
      description:
        'ISA-95-aligned engineering surface for orders, materials, BOMs, and confirmations to / from ERP; setpoints, equipment state, and process data from automation and the historian; result and specification exchange with LIMS; deviation and CAPA hand-off to QMS — over documented APIs your IT and automation teams control.',
    },
    {
      icon: 'Cloud',
      title: 'Microsoft Azure Landing Zone',
      description:
        'Azure landing zone designed for manufacturing workloads — private networking, Microsoft Entra ID with MFA, Key Vault, monitoring via Application Insights and Log Analytics, environment promotion gates, and Terraform-defined infrastructure your security team can sign off.',
    },
    {
      icon: 'BarChart3',
      title: 'BI, OEE & Shop-Floor Dashboards',
      description:
        'Power BI dashboards on the MES data layer — batch status, OEE, deviation counts, in-process check results, electronic-record review backlog, and yield — surfaced for operators, supervisors, plant managers, and quality leadership on terminals, large-format boards, and the executive view.',
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
      icon: 'Activity',
      title: 'Live Operational Signals for Plant Leadership',
      description:
        'Power BI dashboards on the MES data layer surface batch status, OEE, deviation counts, in-process check results, and electronic-record review backlog — so plant managers, supervisors, and quality leadership act on the same numbers, at the same time.',
    },
    {
      icon: 'Settings',
      title: 'Configured to Your Plant — Not a Reference Configuration',
      description:
        'Your master recipes, your SOPs, your review gates, your reporting set. We configure the MES to the way your operators, supervisors, and quality reviewers actually work — without rewriting the plant around a generic reference configuration.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Batch Record Integrity Your Team Can Stand Behind',
      description:
        'Every step is captured with actor, timestamp, equipment, materials, parameters, signatures, and outcome. The same execution layer that gives your team live visibility also gives quality and regulatory an evidence trail they can work from.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Existing Stack',
      description:
        'The MES is designed to coexist with the ERP, control system, historian, LIMS, and QMS you already run. We build the ISA-95-aligned integration surface; your IT and automation teams own the connectors, so existing qualification work is preserved.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Process Mapping & Implementation Framing',
      description:
        'We walk your order-release, dispensing, execution, in-process check, review, and disposition workflows; inventory your existing ERP, automation, historian, LIMS, and QMS; identify electronic-record, audit-trail, and genealogy gaps; and frame the MES scope and the ISA-95 integration surface — before scoping the build. Validation strategy and qualification decisions stay with your Quality and Validation function.',
      duration: 'Scoped during discovery',
      deliverable:
        'Process maps, current-state system inventory, MES module scope, integration surface outline, prioritized implementation roadmap',
    },
    {
      title: 'Cloud Landing Zone & Implementation Plan',
      description:
        'Stand up the Microsoft Azure landing zone — identity (Microsoft Entra ID), private networking, Key Vault, monitoring, and Terraform-defined infrastructure. Design the MES configuration scope (master batch records, weighing, equipment management, electronic signatures), the ISA-95-aligned integration surface, and the BI layer alongside your IT, automation, security, and quality stakeholders.',
      duration: 'Phased per engagement',
      deliverable:
        'Azure landing zone, MES configuration scope, ISA-95 integration design, BI architecture, security architecture',
    },
    {
      title: 'MES Configuration, Integration Build & Iteration',
      description:
        'Iterative configuration of the MES to your master recipes, work instructions, equipment, and review gates; build of the ERP / automation / historian / LIMS / QMS integration surface; and the Power BI layer on top — with engineering artifacts (test coverage, change logs, configuration history) captured as part of the build. Line-by-line demos with operators, supervisors, and quality keep the platform anchored to real production work.',
      duration: 'Phased per engagement',
      deliverable:
        'Configured MES in staging, integration runbooks, BI dashboards, engineering artifact set, configuration documentation',
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
        'Line-by-line or site-by-site go-live so a single production area can run on the MES while the rest of the plant continues uninterrupted. An initial hypercare period covers monitoring, defect triage, change-control engineering, and tuning so the platform stays in a known state as your master recipes, products, and processes evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbooks, hypercare support',
    },
  ],

  capabilities: [
    'Master batch record (MBR) configuration to your products and SOPs',
    'Weighing and dispensing, equipment management, and electronic signature configuration',
    'Operator-guided execution and in-process check configuration',
    'Material, lot, and serial genealogy modeling on the MES data layer',
    'ISA-95-aligned integration surface to ERP, automation, historian, LIMS, and QMS',
    'Microsoft Azure landing zone — identity, networking, secrets, monitoring, IaC',
    'Power BI dashboards on the MES data layer (batch status, OEE, deviations, review backlog, yield)',
    'Audit-trail logging design for electronic records and signatures',
    'Role-scoped access for operators, supervisors, quality, automation, plant IT, and admin populations',
    'Engineering documentation set (configuration, change logs, test evidence) to support your validation work',
    'Phased line / site rollout playbooks and change-control engineering for ongoing operations',
    'Hypercare and lifecycle operations for the platform after go-live',
  ],

  technologies: [
    'Microsoft Azure',
    'Microsoft Entra ID (MFA)',
    'Azure Key Vault',
    'Azure SQL / PostgreSQL',
    'Azure Service Bus',
    'Azure IoT Hub / IoT Edge',
    'Azure Application Insights + Log Analytics',
    'Power BI / Power BI Embedded',
    'Terraform (IaC)',
    'React / Next.js (BI front-end & operator-experience extensions)',
    '.NET 10 / ASP.NET Core',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered for electronic-record, audit-trail, and material-genealogy integrity',
    highlightText: 'electronic-record, audit-trail, and material-genealogy integrity',
    statusText:
      'MES implementation and Microsoft Azure landing zone engineered so every batch action is attributable, traceable, and reviewable — and so your Quality and Validation teams have the artifacts they need',
    pillars: [
      {
        icon: 'FileSignature',
        title: 'Electronic Records & Signature Configuration',
        description:
          'Master batch records, work instructions, equipment management, and electronic signature workflows configured so each action is attributable to a person, a time, and an approved step. Validation and policy decisions stay with your Quality team.',
      },
      {
        icon: 'GitBranch',
        title: 'Material & Batch Genealogy on the MES Data Layer',
        description:
          'Forward and backward genealogy, lot and serial linkage, and material consumption are configured into the MES data model — so a recall trace or deviation investigation is a query, not a spreadsheet reconstruction.',
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
      'Material & batch genealogy',
      'Review by exception',
      'Role-scoped access',
      'ISA-95 integration',
      'Change-control engineering',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the implementation so your Quality and Validation teams have the configuration, change logs, integration runbooks, and test evidence they need to execute their own validation and qualification work. We do not perform validation on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'The audit trail as the system of record',
        description:
          'Every batch step the MES executes — dispensing, equipment use, parameter capture, signature, deviation, review, disposition — is logged with actor, timestamp, action, and outcome, with Azure-side platform logs preserved alongside for end-to-end traceability.',
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
          'Material, lot, and serial linkage from receiving to finished goods is configured into the MES data model — so recall trace, deviation investigation, and complaint follow-up are queries against the audited record, not spreadsheet reconstructions.',
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
      `Our implementation engineering — MES configuration, ISA-95-aligned integration, the Microsoft Azure landing zone, the BI layer, and lifecycle ops — is designed with audit-trail, electronic-record, material-genealogy, role-scoped-access, and platform-logging rigor so your Quality, Validation, and Regulatory teams have the artifacts they need for their own work. Validation execution, qualification, and any regulatory or inspection outcome remain solely the customer's responsibility. ${SITE_CONFIG.name} does not represent, attest, or warrant compliance with any regulatory framework on behalf of any customer.`,
    partnerAgreements: ['DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Paperless Batch Records, In the Hands of Operators',
      description:
        'Operator-guided execution on shop-floor terminals, in-line data capture, and electronic signatures at the step — so the record is built as the batch runs, not reconstructed after it.',
      image: {
        src: '/images/solutions/mes/feature-1.jpg',
        alt: 'Pharmaceutical operator entering an electronic batch step on a shop-floor tablet in a cleanroom',
      },
    },
    {
      heading: 'Live Visibility From the Line to the Plant Manager',
      description:
        'Power BI dashboards on the MES data layer surface batch status, line state, OEE, deviations, and in-process checks live — so supervisors, quality, and plant leadership are looking at the same numbers, in real time.',
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
        'Every plant has bespoke needs beyond the execution layer — operator-experience extensions, BI on top of the MES data layer, and Azure-side glue. Our custom development practice is the engineering core that wraps and extends the MES for the way your line actually runs.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'Our security and compliance practice helps you shape audit-trail logging, role-scoped access, and the engineering evidence package your Quality team will be asked for around the MES implementation and the Azure landing zone.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
    {
      title: 'Electronic Batch Records (EBR)',
      description:
        'Not ready for a full MES program? Our EBR engagement is the focused, line-by-line paperless-execution slice — so you can retire paper batch records first and add the surrounding MES modules in later phases.',
      href: '/solutions/electronic-batch-records',
      icon: 'FileSignature',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question:
        'Do you build the MES yourselves, or implement an off-the-shelf product?',
      answer:
        'Both paths are on the table, and the decision belongs in discovery rather than on a public page. Some sites are best served by configuring and integrating an established execution product; others need a purpose-built execution layer around the workflows their line actually runs. What we bring either way is the same: discovery, configuration or build, the ISA-95-aligned integration surface into your ERP, automation, historian, LIMS, and QMS, the Microsoft Azure landing zone, the BI layer, hypercare, and lifecycle ops. We are not a reseller and hold no vendor licensing incentive, so the recommendation is based on engineering fit.',
    },
    {
      question:
        'Why Microsoft Azure — what is the stack rationale?',
      answer:
        'Azure gives us a landing zone pattern that regulated manufacturers can already reason about: identity through Microsoft Entra ID, private networking, secrets management in Key Vault, monitoring through Application Insights and Log Analytics, backup and DR, and infrastructure defined in Terraform. In most plants we work with, IT and security already operate an Azure estate, so the MES lands inside a security and operations model your team recognises instead of introducing a parallel one.',
    },
    {
      question:
        'How does the MES fit alongside our existing ERP, automation, historian, LIMS, and QMS?',
      answer:
        'The MES is designed to coexist with the ERP, control system, historian, LIMS, and QMS you already run — using documented APIs and standard data exchange formats aligned with ISA-95 boundaries. We design and build the integration surface; your IT and automation teams own the connectors into the existing stack, so qualification work you have already done is preserved. We name those systems by category, not by product, because we do not claim partnerships or pre-built connectors with any third-party ERP, automation, or historian vendor.',
    },
    {
      question:
        'Can we roll the MES out one line or site at a time instead of a single cutover?',
      answer:
        'Yes — this is the default approach, not an option. Single "big bang" MES cutovers are one of the most common failure modes in regulated manufacturing programs, and we design against them. Each line or site is implemented to go live independently, with clear data and integration boundaries. This lets you prove operational fit on one line, train operators and supervisors incrementally, and expand the rollout without pausing commercial supply.',
    },
    {
      question:
        'How does the implementation handle electronic batch records and audit trails?',
      answer:
        'The execution layer captures every step with actor, timestamp, equipment, materials, parameters, signatures, and outcome, and we configure the master batch records, work instructions, weighing and dispensing, equipment management, and signature flows so entries are attributable, contemporaneous, original, accurate, and reviewable. Validation execution, policy decisions, and any inspection outcome remain with your Quality and Validation function; we do not certify or attest to regulatory compliance on your behalf.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by plant and are defined during discovery — we do not quote fixed durations or fixed outcomes on a public page. Discovery is where we map your production workflows, inventory the systems you already run, agree the MES module scope and the ISA-95 integration surface, and frame the Azure landing zone before any production-bound work begins. The build is typically phased so the highest-priority line goes live first and your team can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Ready to put an MES on your shop floor?',
    description:
      'Book a free 30-minute discovery call. We will walk through your production workflows, the systems you already run, the MES module scope, and the Microsoft Azure landing zone — and outline a realistic, phased implementation for your plant. Validation and qualification stay with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the shop-floor flow', href: '#signature' },
  },

  _unverified: [
    'Vendor cleanup (user-directed, 2026-09-05): all MES product vendor names removed — Körber, Werum, PAS-X, "MES Suite" branding. Execution product now referenced by category only. Do not reintroduce without user sign-off.',
    'Compliance cleanup (user-directed, 2026-09-05): complianceSpotlight and complianceDeepDive sections retained, but all named regulatory frameworks and certification-flavored language removed (21 CFR Part 11 / 211, EU GMP Annex 11, ICH Q7/Q9/Q10, GAMP 5, ISO 13485, MHRA Data Integrity). complianceDetail.frameworks now carries engineering-practice chips instead. SEO impact of dropping these terms from keywords and body copy is not yet measured — review with marketing.',
    'Microsoft Azure referenced as the cloud landing zone we build on; no "Microsoft Solutions Partner" badge claim on this page. Confirm with marketing whether to add an explicit Microsoft Partner badge in a future revision.',
    'processSteps — durations remain "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No third-party MES, ERP, automation, PLC, SCADA, historian, LIMS, or QMS vendor names on the page (only Microsoft / Azure is named). Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
    'hero.heroImage, imageFeatures[0].image, imageFeatures[1].image — placeholder photos sourced from neighboring life-sciences solution folder (ai-pharma). Replace with MES-specific imagery (shop-floor operator terminal, cleanroom dispensing, plant supervisor at OEE board) before publish per §11.3 / §11.5.',
  ],
};

export default mes;
