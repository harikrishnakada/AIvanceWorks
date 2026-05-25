import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Discrete & Process Manufacturing)
// Buyer: VP / Head of Manufacturing Operations, Chief Manufacturing Officer
//   (CMO), Plant CIO, or VP of Digital Manufacturing at a US discrete or
//   process manufacturer (automotive, aerospace & defense, industrial
//   equipment, electronics, medical device, food & beverage, CPG, specialty
//   chemicals). Secondary: Director of Quality, Director of Manufacturing IT,
//   Director of Continuous Improvement.
//
// Buyer mindset: "I answer to my CEO on OEE, on-time delivery, scrap, and
//   schedule attainment — and to my customers and auditors on traceability
//   (IATF 16949, AS9100, FSMA 204, ISO 13485). I don't want five disconnected
//   products with their own admin, their own master data, and their own
//   integration to my ERP. I want one MOM platform."
//
// Top 3 buyer questions:
//   1. "Do I really need a unified MOM platform, or can I keep best-of-breed
//       MES + APS + QMS + analytics + PLM stitched together?"
//   2. "Will this sit alongside my existing ERP, automation, historian, and
//       PLM — without rip-and-replace of integrations my team validated?"
//   3. "Can I roll this out one line, one plant, or one discipline at a time
//       without stopping production?"
//
// Key trust issue: Multi-year MOM and ISA-95 transformation programs that
//   slipped past go-live, left half the plants on paper or Excel, surfaced
//   master-data conflicts between MES and APS and QMS, and never delivered the
//   "single source of operational truth" the original board paper promised.
//
// Positioning: we are a delivery / integration partner for the Siemens
//   Opcenter MOM Suite — deployed on Microsoft Azure. We are not building a
//   bespoke MOM platform from scratch on this page; Opcenter brings the five
//   MOM disciplines (Execution / MES, Advanced Planning & Scheduling,
//   Quality, Manufacturing Intelligence, R&D / Formula & NPI). Our engagement
//   is implementation, configuration to your work centers and master recipes,
//   ERP / automation / historian / QMS / PLM integration, BI on top,
//   hypercare, and lifecycle ops on Azure.
//
// Vendor naming stance (mirrors the MES + PAS-X page liability framing):
//   - Siemens Opcenter MOM Suite: named as the MOM product we implement.
//     CAPABILITY framing only ("we implement / we deliver / built on") —
//     NOT "Siemens-certified partner", NOT "authorized Siemens partner",
//     NOT "Siemens Industrial Software partner". No Siemens or Opcenter logo
//     on the page. We have delivery experience but no formal Siemens
//     partnership badge claim on this page.
//   - Microsoft Azure: named as the cloud landing zone Opcenter runs on.
//     CAPABILITY framing ("built on", "deployed on", "we build on"). No
//     "Microsoft Solutions Partner" claim on this page.
//   - Other vendors (Rockwell, ABB, Schneider, OSIsoft PI, AVEVA, SAP, Oracle,
//     PTC, Dassault, etc.) are NOT named anywhere on the page. The MOM
//     platform sits on the customer's existing ERP / automation / historian /
//     PLM / QMS stack; we name the categories, not the products.
//   - Standards and reference-model names (ISA-95, ISA-88, MESA Model,
//     IATF 16949, AS9100, ISO 9001, ISO 13485, FDA 21 CFR Part 11, FSMA 204)
//     are retained for audience-signaling and SEO, but framed as engineering
//     and implementation design awareness — never as certification or
//     compliance promises on our behalf.
//
// Liability stance:
//   - We are a software engineering and implementation partner. Validation
//     execution (CSV, IQ/OQ/PQ authoring), GMP / IATF / AS / ISO qualification,
//     supplier qualification, recipe authoring sign-off, and any regulatory
//     or audit outcome (FDA, EMA, IATF, AS9100, ISO 9001, ISO 13485) are
//     owned by the customer's Quality and Validation functions.
//   - Siemens Opcenter is supplied and licensed by Siemens under the
//     customer's contract with Siemens; we do not resell Siemens Opcenter
//     licenses and do not author Siemens-supplied validation packages on
//     Siemens' behalf.
//   - No fixed durations, no fixed costs, no promised regulatory or
//     operational outcomes.
//
// Signature: MomOperationsPlatformMap — hierarchical / layered visualization
//   (§8.3 pattern 2). Five MOM disciplines (Execution / MES, APS, Quality,
//   Manufacturing Intelligence, R&D Formula & NPI) running on a shared
//   engineering foundation (Opcenter as the MOM product suite, Microsoft
//   Azure as the landing zone, ISA-95-aligned integration to ERP /
//   automation / historian / QMS / PLM, BI on top). New signature component
//   created because the existing MES "six lifecycle stages" pattern carries a
//   different argument (batch lifecycle vs. multi-discipline platform);
//   reusing it would dilute MOM's "one platform, five disciplines" message
//   and double-publish a near-identical visual against the MES page.
//
// Composition mirrors the MES / SCM precedent (same regulated manufacturing
// buyer cluster, same liability stance):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) → signature (dark) →
//   complianceDeepDive (light) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — no Siemens-approved Opcenter case yet for
//     AIvanceWorks.
//   - No IntegrationsPanel — the customer's existing ERP / automation /
//     historian / QMS / PLM stack is named by category, not by product, per
//     liability stance. Opcenter (named in prose) is the MOM, not an
//     integration target.
//   - ComplianceSpotlight placed before signature as trust gate (same pattern
//     as LIMS, AI Pharma, EHR/EMR, HMS, MES, SCM).

const manufacturingOperationsManagement: SolutionPageData = {
  slug: 'manufacturing-operations-management',
  title:
    'Manufacturing Operations Management (MOM) — Siemens Opcenter on Microsoft Azure',
  shortDescription:
    'Siemens Opcenter MOM Suite implementation, configuration, and integration — delivered on Microsoft Azure. Execution (MES), Advanced Planning & Scheduling, Quality, Manufacturing Intelligence, and R&D / NPI on one digital thread, configured to your work centers and rolled out one line or plant at a time.',

  metaTitle:
    'Manufacturing Operations Management (MOM) | Siemens Opcenter on Microsoft Azure',
  metaDescription:
    'Manufacturing Operations Management (MOM) delivery for US discrete and process manufacturers — automotive, aerospace, electronics, medical device, food & beverage, CPG, and specialty chemicals. We implement the Siemens Opcenter MOM Suite on Microsoft Azure — execution (MES), APS, quality, manufacturing intelligence, and R&D / NPI — configured to your plant and integrated with the ERP, automation, historian, QMS, and PLM you already run. Validation and audit qualification stay with your team.',
  keywords: [
    'manufacturing operations management',
    'MOM software',
    'MOM implementation services',
    'Siemens Opcenter implementation',
    'Siemens Opcenter MOM',
    'Opcenter Execution',
    'Opcenter APS',
    'Opcenter Quality',
    'Opcenter Intelligence',
    'discrete manufacturing software',
    'process manufacturing software',
    'ISA-95 integration',
    'IATF 16949 manufacturing software',
    'AS9100 manufacturing software',
    'OEE software',
    'advanced planning and scheduling',
    'manufacturing intelligence',
    'Microsoft Azure manufacturing',
  ],
  canonicalPath: '/solutions/manufacturing-operations-management',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    {
      label: 'Manufacturing Operations Management',
      href: '/solutions/manufacturing-operations-management',
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
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'manufacturing',
  signatureComponent: 'MomOperationsPlatformMap',

  hero: {
    badge: 'MOM delivery — Siemens Opcenter on Microsoft Azure',
    headline: 'One MOM platform. Five disciplines. Built for your plant.',
    subhead:
      'We deliver the Siemens Opcenter MOM Suite on Microsoft Azure — execution (MES), advanced planning & scheduling, quality, manufacturing intelligence, and R&D / NPI — configured to your work centers, integrated with the ERP, automation, historian, QMS, and PLM you already run, and rolled out one line or plant at a time. Validation and audit qualification stay with your team.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the platform map', href: '#signature' },
    heroImage: {
      src: '/images/solutions/manufacturing-operations-management/hero.jpg',
      alt: 'Manufacturing operations leader reviewing live OEE, schedule attainment, and quality dashboards on a shop-floor control board',
    },
    metrics: [
      {
        value: 'Opcenter-led',
        label: 'Siemens Opcenter as the MOM product suite',
        description:
          'Opcenter brings the proven execution, planning, quality, intelligence, and R&D modules. We bring the implementation, configuration, integration, and lifecycle ops — so the platform reflects the way your plant actually runs.',
      },
      {
        value: 'Azure-native',
        label: 'Microsoft Azure landing zone',
        description:
          'Deployed on a Microsoft Azure landing zone — identity, networking, monitoring, and infrastructure-as-code patterns your IT and security teams already recognise from the rest of your Azure estate.',
      },
      {
        value: 'Modular',
        label: 'Roll out one line, plant, or discipline at a time',
        description:
          'Phase delivery by line, plant, or discipline (MES first, then APS, then Quality, then Intelligence) so a single production area can run on Opcenter while the rest continues uninterrupted — no big-bang cutover risk to live production.',
      },
    ],
  },

  // Audience test (§9.5): a VP Manufacturing or Plant CIO reading these in 8
  // seconds wants to know "will this run my plant better, give me one source
  // of operational truth, and not blow up my ERP integration?" — not "will
  // this pass an audit?" The four values lead with product fit (Opcenter),
  // cloud posture, integration coexistence, and phased rollout. Audit framing
  // lives mid-page in ComplianceSpotlight / DeepDive (§9.9).
  metricsStrip: [
    {
      value: 'Opcenter-led',
      label: 'Siemens Opcenter as the proven MOM product suite',
      description:
        'Opcenter brings the execution engine, advanced planning & scheduling, quality system, manufacturing intelligence, and R&D / NPI modules already in use across the global discrete and process manufacturing base.',
    },
    {
      value: 'Azure-native',
      label: 'Built on Microsoft Azure',
      description:
        'Deployed on an Azure landing zone — identity, networking, monitoring, secrets, backup, and IaC patterns aligned to the Azure estate your IT and security teams already operate.',
    },
    {
      value: 'Integration-first',
      label: 'ISA-95-aligned to ERP, automation, historian, QMS, PLM',
      description:
        'We design and build the integration surface that connects Opcenter to the ERP, control system, historian, QMS, and PLM you already validated — over documented APIs and standard data formats your IT and automation teams control.',
    },
    {
      value: 'Lifecycle-first',
      label: 'Implementation, hypercare, and lifecycle ops',
      description:
        'Discovery, configuration, integration, UAT support, hypercare, and ongoing change-control engineering — so the platform stays in a known state as your work centers, products, and processes evolve.',
    },
  ],

  // Features lead with what the plant operating team gets across the five
  // MOM disciplines (execution, planning, quality, intelligence, R&D, plus
  // platform / cloud). Compliance signals are woven in, not headlined
  // (§9.9). Only Opcenter and Microsoft Azure are named per liability stance.
  features: [
    {
      icon: 'Factory',
      title: 'Opcenter Execution (MES) — Configured to Your Work Centers',
      description:
        'We implement Opcenter electronic work instructions, operator-guided execution, equipment use, as-built genealogy, in-process check capture, and in-context deviation entry — configured to your products, your SOPs, and your review gates — so operators execute against an approved record and supervisors review by exception.',
    },
    {
      icon: 'CalendarClock',
      title: 'Opcenter Advanced Planning & Scheduling (APS)',
      description:
        'Finite-capacity scheduling on Opcenter APS — order release, sequencing, changeover optimisation, constraint-aware scheduling, and what-if scenarios — configured to your work centers, shift patterns, and bottleneck resources so planners stop reconciling MES execution against a spreadsheet schedule.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Opcenter Quality — SPC, NCMR, CAPA & Supplier Quality',
      description:
        'Opcenter Quality configured for statistical process control, non-conformance and CAPA workflows, supplier quality, inspection plans, and gauge calibration — wired into the execution layer so quality data is captured at the step and lives on the same digital thread as the work order and the genealogy record.',
    },
    {
      icon: 'Activity',
      title: 'Opcenter Manufacturing Intelligence — OEE & KPIs',
      description:
        'Opcenter Intelligence and Power BI dashboards on the MOM data layer — OEE, throughput, scrap, downtime, schedule attainment, quality holds, and yield — surfaced for operators, supervisors, plant managers, and operations leadership on terminals, large-format boards, and the executive view.',
    },
    {
      icon: 'FlaskConical',
      title: 'Opcenter R&D, Formula & NPI Hand-Off',
      description:
        'Opcenter R&D / formula and specification management connected into the execution layer — master BoM, formula, specification, and new-product-introduction (NPI) hand-off configured so R&D and the shop floor read the same recipe instead of versioning specs over email.',
    },
    {
      icon: 'Cloud',
      title: 'Microsoft Azure Landing Zone & ISA-95 Integration',
      description:
        'Azure landing zone designed for regulated manufacturing workloads — private networking, Microsoft Entra ID with MFA, Key Vault, monitoring, environment promotion gates, and Terraform-defined infrastructure — plus the ISA-95-aligned integration surface to your ERP, automation, historian, QMS, and PLM that your IT and security teams can sign off.',
    },
  ],

  benefits: [
    {
      icon: 'Layers',
      title: 'One Digital Thread, Five Manufacturing Disciplines',
      description:
        'Execution, planning, quality, intelligence, and R&D running on the same MOM data layer — so the work order, the schedule, the inspection result, the OEE board, and the master formula reconcile by design, not by spreadsheet at month-end.',
    },
    {
      icon: 'Gauge',
      title: 'OEE, Schedule Attainment & Scrap as Live Signals',
      description:
        'Opcenter Intelligence and Power BI on the MOM data layer surface OEE, throughput, scrap, downtime, and schedule attainment — so plant managers, supervisors, and operations leadership act on the same numbers, at the same time, instead of waiting for the morning report.',
    },
    {
      icon: 'Settings',
      title: 'Configured to Your Plant — Not a Reference Configuration',
      description:
        'Your work centers, your master recipes, your quality plans, your review gates, your KPI set. We configure Opcenter to the way your operators, planners, quality reviewers, and supervisors actually work — without rewriting the plant around a generic reference configuration.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Traceability Your QA, Customers & Auditors Can Stand Behind',
      description:
        'Opcenter captures every operation with actor, timestamp, equipment, materials, parameters, signatures, and outcome on the same MOM data layer. The same execution layer that gives your team live visibility also gives QA, regulatory, customer-audit, and inspection reviewers the evidence trail they expect under IATF 16949, AS9100, ISO 13485, FSMA 204, or 21 CFR Part 11 where each applies.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Validated Stack',
      description:
        'Opcenter is designed to coexist with the ERP, control system, historian, QMS, and PLM you already run. We build the ISA-95-aligned integration surface; your IT and automation teams own the connectors into the validated stack, so existing master data, contracts, and validated interfaces are preserved.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Process Mapping & Implementation Framing',
      description:
        'We walk your order-release, scheduling, execution, in-process check, quality review, and NPI workflows; inventory your existing ERP, automation, historian, QMS, and PLM; identify electronic-record, audit-trail, and data-integration gaps; and frame the Opcenter implementation scope (which of the five MOM disciplines, in which order, on which lines) and the ISA-95 integration surface — before scoping the build. CSV strategy, IATF / AS / ISO / GMP audit planning, and any regulatory decisions stay with your Quality and Validation function.',
      duration: 'Scoped during discovery',
      deliverable:
        'Process maps, current-state system inventory, Opcenter module scope, integration surface outline, prioritised implementation roadmap',
    },
    {
      title: 'Azure Landing Zone & Implementation Plan',
      description:
        'Stand up the Microsoft Azure landing zone — identity (Microsoft Entra ID), private networking, Key Vault, monitoring, and Terraform-defined infrastructure. Design the Opcenter configuration scope (work centers, master BoM, electronic work instructions, quality plans, scheduling rules), the ISA-95-aligned integration surface, and the BI layer alongside your IT, automation, security, and Quality stakeholders. Framework expectations (ISA-95, ISA-88, IATF 16949, AS9100, ISO 9001, ISO 13485, FDA 21 CFR Part 11, FSMA 204 where applicable) are built into the implementation plan as design awareness — not certification claims.',
      duration: 'Phased per engagement',
      deliverable:
        'Azure landing zone, Opcenter configuration scope, ISA-95 integration design, BI architecture, security architecture',
    },
    {
      title: 'Opcenter Configuration, Integration Build & Iteration',
      description:
        'Iterative configuration of the Opcenter modules in scope (Execution, APS, Quality, Intelligence, R&D) to your work centers, master recipes, quality plans, and KPI definitions; build of the ERP / automation / historian / QMS / PLM integration surface; and the Power BI layer on top — with engineering artifacts (test coverage, change logs, configuration history) captured as part of the build. Line-by-line demos with operators, planners, quality, and supervisors keep the platform anchored to real production work.',
      duration: 'Phased per engagement',
      deliverable:
        'Configured Opcenter in staging, integration runbooks, BI dashboards, engineering artifact set, configuration documentation',
    },
    {
      title: 'UAT & Handoff to Your Quality / Validation Function',
      description:
        'Run UAT with operations, planning, automation, and quality stakeholders. Assemble the engineering documentation set your Quality and Validation teams use as inputs into their own IQ/OQ/PQ, computer-system validation, and IATF / AS / ISO / GMP audit-readiness work — alongside the Siemens-supplied Opcenter validation packages your team executes under the customer / Siemens contract. We do not author Siemens-supplied validation packages and we do not perform regulatory or audit qualification on your behalf.',
      duration: 'Phased per engagement',
      deliverable:
        'UAT sign-off, integration runbooks, security test report, engineering documentation set for your validation and audit work',
    },
    {
      title: 'Phased Go-Live, Hypercare & Lifecycle Operations',
      description:
        'Line-by-line, plant-by-plant, or discipline-by-discipline go-live so a single production area can run on Opcenter while the rest of the plant continues uninterrupted. An initial hypercare period covers monitoring, defect triage, change-control engineering, and tuning so the platform stays in a known state as your work centers, master recipes, products, and processes evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbooks, hypercare support',
    },
  ],

  capabilities: [
    'Opcenter Execution (MES) — electronic work instructions, operator-guided execution, as-built genealogy configuration',
    'Opcenter Advanced Planning & Scheduling (APS) — finite-capacity scheduling, sequencing, changeover optimisation',
    'Opcenter Quality — SPC, non-conformance / CAPA, supplier quality, inspection plans, gauge management',
    'Opcenter Manufacturing Intelligence — OEE, throughput, scrap, downtime, schedule attainment, yield',
    'Opcenter R&D / formula and specification management — master BoM, formula, and NPI hand-off to the shop floor',
    'ISA-95-aligned integration surface to ERP, automation, historian, QMS, and PLM',
    'Microsoft Azure landing zone — identity, networking, secrets, monitoring, IaC',
    'Power BI dashboards on the MOM data layer (OEE, throughput, scrap, schedule attainment, quality holds)',
    'Audit-trail logging design awareness aligned with IATF 16949, AS9100, ISO 9001, ISO 13485, and 21 CFR Part 11 where each applies',
    'Role-scoped access for operators, planners, supervisors, quality, automation, plant IT, and admin populations',
    'Engineering documentation set (configuration, change logs, test evidence) to support your CSV and audit work',
    'Phased line / plant / discipline rollout playbooks and change-control engineering for ongoing operations',
    'Hypercare and lifecycle operations for the platform after go-live',
  ],

  technologies: [
    'Siemens Opcenter MOM Suite',
    'Siemens Opcenter Execution',
    'Siemens Opcenter APS',
    'Siemens Opcenter Quality',
    'Siemens Opcenter Intelligence',
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
      'Implemented with audit-trail, electronic-record, and traceability awareness for regulated manufacturing',
    highlightText: 'audit-trail, electronic-record, and traceability awareness',
    statusText:
      'Opcenter implementation and Microsoft Azure landing zone designed with awareness of practices common in IATF 16949, AS9100, ISO 9001, ISO 13485, FDA 21 CFR Part 11, FSMA 204, ISA-95, and ISA-88 environments',
    pillars: [
      {
        icon: 'FileSignature',
        title: 'Opcenter Electronic Work Instruction & Audit-Trail Configuration',
        description:
          'We configure Opcenter electronic work instructions, equipment use, and operator signatures with awareness of 21 CFR Part 11 (where applicable), IATF 16949, AS9100, ISO 13485, and ISO 9001 expectations. Predicate-rule decisions and computer-system validation stay with your Quality team.',
      },
      {
        icon: 'GitBranch',
        title: 'As-Built Genealogy on the MOM Data Layer',
        description:
          'Forward and backward genealogy, lot and serial linkage, equipment use, and material consumption are configured into the Opcenter data model — so a recall trace, deviation investigation, or customer-audit query is a query against the audited record, not a spreadsheet reconstruction.',
      },
      {
        icon: 'Cloud',
        title: 'Azure Landing Zone Engineered for Regulated Manufacturing',
        description:
          'Microsoft Azure landing zone with private networking, Entra ID + MFA, Key Vault, monitoring, and Terraform-defined infrastructure — patterns your security team recognises and can sign off as part of your CSV, IATF, AS, or ISO audit-readiness scope.',
      },
    ],
    badges: [
      'ISA-95',
      'ISA-88',
      'IATF 16949',
      'AS9100',
      'ISO 9001',
      'ISO 13485',
      'FDA 21 CFR Part 11',
      'FSMA 204',
      'MESA Model',
    ],
  },

  complianceDetail: {
    frameworks: [
      'ISA-95 (Enterprise–Control System Integration)',
      'ISA-88 (Batch Control)',
      'MESA International MOM Reference Model',
      'IATF 16949 (Automotive Quality Management)',
      'AS9100 (Aerospace Quality Management)',
      'ISO 9001 (Quality Management)',
      'ISO 13485 (Medical Device Manufacturing)',
      'FDA 21 CFR Part 11 (Electronic Records & Signatures, where applicable)',
      'FDA FSMA 204 (Food Traceability, where applicable)',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation & audit work',
        description:
          'We structure the implementation so your Quality and Validation teams have the configuration, change logs, integration runbooks, and test evidence they need to execute their IQ/OQ/PQ, CSV, IATF, AS, ISO, or GMP audit-readiness work — alongside the Siemens-supplied Opcenter validation packages. We do not author Siemens-supplied validation packages and we do not perform validation or audit qualification on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'Opcenter audit trail as the system of record',
        description:
          'Every operation Opcenter executes — work order release, equipment use, parameter capture, signature, deviation, inspection, schedule change, disposition — is logged with actor, timestamp, action, and outcome on the Opcenter audit trail, with Azure-side platform logs preserved alongside for end-to-end traceability.',
      },
      {
        icon: 'FileSignature',
        title: 'Electronic work instruction & e-signature configuration',
        description:
          'Opcenter electronic work instructions and signature workflows are configured with awareness of 21 CFR Part 11 (where applicable), IATF 16949, AS9100, ISO 13485, and ISO 9001 expectations — attributable, contemporaneous, original, accurate, and reviewable. Predicate-rule decisions stay with your Quality team.',
      },
      {
        icon: 'GitBranch',
        title: 'As-built genealogy & forward / backward trace',
        description:
          'Material, lot, serial, and equipment linkage from receiving through production consumption to finished goods is configured into the Opcenter data model — so recall trace, customer-audit response, and FSMA / DSCSA-style inquiries (where applicable) are queries against the audited record, not spreadsheet reconstructions.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-scoped access on Azure',
        description:
          'Microsoft Entra ID with enforced MFA, conditional access policies, role-scoped access for operator, planner, supervisor, quality, automation, plant IT, and admin populations, and least-privilege defaults across the landing zone and APIs.',
      },
      {
        icon: 'Building2',
        title: 'Microsoft Azure landing zone',
        description:
          'Azure landing zone for regulated manufacturing workloads — private endpoints, Key Vault for secrets, Terraform-defined infrastructure, environment promotion gates, monitoring via Application Insights and Log Analytics, and backup / DR patterns your security and operations teams can sign.',
      },
    ],
    auditNote:
      'Our implementation engineering — Opcenter configuration across the MOM disciplines in scope (Execution, APS, Quality, Intelligence, R&D), ISA-95-aligned integration, Microsoft Azure landing zone, BI layer, and lifecycle ops — is designed with audit-trail, electronic-record, as-built-genealogy, role-scoped-access, and Azure-platform awareness so your Quality, Validation, and Regulatory teams have the artifacts they need to execute their own CSV, IQ/OQ/PQ, IATF 16949, AS9100, ISO 9001, ISO 13485, GMP, or FSMA audit-readiness work. Final regulatory submission, validation execution, IQ/OQ/PQ authoring, certification / audit qualification, and any inspection outcome (FDA, EMA, IATF, AS, ISO, customer audit, or other authority) remain solely the customer’s responsibility, executed by the customer’s Quality, Validation, or Regulatory function. Siemens Opcenter is supplied and licensed by Siemens under the customer’s contract with Siemens; AIvanceWorks does not resell Opcenter licenses, does not author Siemens-supplied validation packages on Siemens’ behalf, and does not represent, attest, or warrant compliance with any regulatory or industry framework on behalf of any customer.',
    partnerAgreements: ['DPA', 'SLA', 'Quality / Technical Agreement (where required by the customer)'],
  },

  imageFeatures: [
    {
      heading: 'Electronic Work Instructions, In the Hands of Operators',
      description:
        'Opcenter operator-guided execution on shop-floor terminals, in-line data capture, and electronic signatures at the step — so the as-built record is built as the work runs, not reconstructed at the end of the shift.',
      image: {
        src: '/images/solutions/manufacturing-operations-management/feature-1.jpg',
        alt: 'Manufacturing operator confirming an electronic work-instruction step on a shop-floor terminal',
      },
    },
    {
      heading: 'OEE, Schedule Attainment & Scrap — Live for Plant Leadership',
      description:
        'Opcenter Intelligence and Power BI dashboards on the MOM data layer surface OEE, throughput, downtime, scrap, and schedule attainment live — so supervisors, planners, quality, and plant leadership are looking at the same numbers, in real time.',
      image: {
        src: '/images/solutions/manufacturing-operations-management/feature-2.jpg',
        alt: 'Plant supervisor reviewing live OEE and schedule-attainment dashboards on a large-format shop-floor display',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Manufacturing Execution Systems (MES)',
      description:
        'Need just the execution layer — electronic batch records for pharma, biologics, or medical device — instead of the full MOM suite? Our MES practice delivers PAS-X on Microsoft Cloud for Manufacturing for regulated pharma execution, where 21 CFR Part 11 and EU GMP Annex 11 dominate the buyer conversation.',
      href: '/solutions/mes',
      icon: 'Factory',
      pageType: 'solution',
    },
    {
      title: 'Custom Software Development',
      description:
        'Beyond Opcenter, every plant has bespoke needs — operator-experience extensions, BI on top of the MOM data layer, and Azure-side glue. Our custom development practice is the engineering core that wraps and extends the MOM platform for the way your line actually runs.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
    {
      title: 'Data Engineering',
      description:
        'Once execution, planning, quality, and intelligence data are flowing on the MOM data layer, the next question is "what is the plant telling us?" Our data engineering practice connects Opcenter, the historian, and ERP into the reporting and analytics layer your operations leadership acts on.',
      href: '/services/data-engineering',
      icon: 'Database',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Are you selling Siemens Opcenter licenses, or are you implementing Opcenter?',
      answer:
        'We are an implementation and integration partner. Siemens Opcenter is supplied and licensed by Siemens under your contract with Siemens. Our engagement is the Opcenter implementation — discovery, configuration to your work centers and master recipes, ERP / automation / historian / QMS / PLM integration over an ISA-95-aligned surface, the Microsoft Azure landing zone, the BI layer on top, hypercare, and lifecycle ops. We do not resell Opcenter licenses and we do not author Siemens-supplied validation packages on Siemens\' behalf.',
    },
    {
      question:
        'Are you a Siemens-certified Opcenter partner?',
      answer:
        'We have Opcenter implementation and integration delivery experience, but we are not marketed under a Siemens-certified Opcenter partner badge on this page. If your procurement requires a Siemens-certified implementation lead, we can work alongside that partner on the Azure landing zone, ISA-95 integration surface, BI layer, and operator-experience extensions where our engineering is well-suited.',
    },
    {
      question:
        'What is the difference between MES and MOM, and which do I need?',
      answer:
        'MES is one discipline — operator-guided execution, electronic work instructions, and as-built genealogy on the shop floor. MOM (Manufacturing Operations Management, per ISA-95 and the MESA reference model) is the broader platform that adds advanced planning & scheduling, quality (SPC / NCMR / CAPA / supplier quality), manufacturing intelligence (OEE / throughput / scrap / downtime), and R&D / formula / NPI hand-off — running on a shared MOM data layer instead of five disconnected products. If you only need pharma-style electronic batch records on a regulated line, our MES practice (Werum PAS-X on Microsoft Cloud for Manufacturing) is the better fit. If you need execution plus planning plus quality plus intelligence on a shared digital thread across discrete or process manufacturing, MOM is the better fit.',
    },
    {
      question:
        'Why Siemens Opcenter on Microsoft Azure — what is the stack rationale?',
      answer:
        'Siemens Opcenter is one of the most widely deployed MOM product suites across discrete and process manufacturing, with the five MOM disciplines (Execution, APS, Quality, Intelligence, R&D) already in use across the global manufacturing base. Microsoft Azure provides a landing zone with identity (Microsoft Entra ID), private networking, secrets management, monitoring, backup / DR, and Terraform-defined infrastructure — that aligns with the Azure estate your IT and security teams already operate. The combination lets you stand on a proven MOM product suite instead of building one, while keeping the rest of the platform on a cloud posture your team already knows.',
    },
    {
      question:
        'How does Opcenter fit alongside our existing ERP, automation, historian, QMS, and PLM?',
      answer:
        'Opcenter is designed to coexist with the ERP, control system, historian, QMS, and PLM you already run — using documented APIs and standard data exchange formats aligned with ISA-95 boundaries (orders, materials, BOMs, confirmations, setpoints, equipment state, process data, quality results, specifications). We design and build the integration surface; your IT and automation teams own the connectors into the validated stack, so existing CSV, qualification, and master-data work is preserved. We name those systems by category, not by product, because we do not claim partnerships or pre-built connectors with any third-party ERP, automation, historian, QMS, or PLM vendor.',
    },
    {
      question:
        'Can we roll Opcenter out one line, plant, or discipline at a time instead of a single cutover?',
      answer:
        'Yes — this is the default approach, not an option. Single big-bang MOM cutovers are one of the most common failure modes in manufacturing transformation programs, and we design against them. Each line, plant, or discipline (Execution first, then APS, then Quality, then Intelligence, then R&D) is implemented to go live independently, with clear data, integration, and validation boundaries. This lets you prove operational fit on one corridor of the program, train operators, planners, and quality teams incrementally, and expand the rollout without pausing live production.',
    },
    {
      question:
        'How does the implementation handle audit trail, IATF 16949, AS9100, ISO 13485, and 21 CFR Part 11?',
      answer:
        'Opcenter provides the audit trail, electronic work instruction framework, and signature framework. Our implementation configures the work instructions, equipment use, quality plans, and signature flows with awareness of IATF 16949, AS9100, ISO 9001, ISO 13485, FDA 21 CFR Part 11 (where applicable), and the ISA-95 / ISA-88 reference models — attributable, contemporaneous, original, accurate, and reviewable. Computer-system validation, predicate-rule decisions, certification / audit qualification, and any inspection outcome remain with your Quality and Validation function; we do not make IATF, AS, ISO, GMP, or FDA certification on your behalf.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by plant and are defined during discovery — we do not quote fixed durations or fixed regulatory outcomes on a public page. Discovery is where we map your work-center, scheduling, execution, quality, and NPI workflows, inventory the systems you already run, agree the Opcenter module scope (which of the five MOM disciplines, in which order, on which lines) and the ISA-95 integration surface, and frame the Microsoft Azure landing zone before any production-bound work begins. The build is typically phased so the highest-priority line and discipline go live first and your team can review the platform before later phases land.',
    },
  ],

  cta: {
    title:
      'Looking to deliver Siemens Opcenter MOM on Microsoft Azure?',
    description:
      'Book a free 30-minute discovery call. We will walk through your work-center, scheduling, execution, quality, and NPI workflows, the systems you already run, the Opcenter module scope, and the Microsoft Azure landing zone — and outline a realistic, phased implementation for your plant. Opcenter licensing stays with Siemens; validation and audit qualification stay with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the platform map', href: '#signature' },
  },

  _unverified: [
    'Page positions AIvanceWorks as an Opcenter delivery / integration partner with capability framing only (no Siemens-certified partner badge claim, no Siemens or Opcenter logo). Legal review recommended pre-publish to confirm capability framing is acceptable and does not require Siemens sign-off, mirroring the MES + PAS-X stance.',
    'Microsoft Azure referenced as the cloud landing zone we build on; no "Microsoft Solutions Partner" / "Microsoft Cloud for Manufacturing partner" badge claim on this page. Confirm with marketing whether to add an explicit Microsoft Partner badge in a future revision.',
    'complianceSpotlight.badges and complianceDetail.frameworks — standards and reference-model names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "implementation / design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No third-party ERP, automation, PLC, SCADA, historian, QMS, or PLM vendor names on the page (only Opcenter and Microsoft Azure are named). Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
    'hero.heroImage, imageFeatures[0].image, imageFeatures[1].image — placeholder photos copied from the neighbouring MES solution folder. Replace with MOM-specific Unsplash imagery (discrete-manufacturing operator at an Opcenter-style work instruction terminal, plant supervisor at an OEE / schedule-attainment board, NPI / R&D-to-shop-floor hand-off scene) before publish per §11.3 / §11.5.',
  ],
};

export default manufacturingOperationsManagement;
