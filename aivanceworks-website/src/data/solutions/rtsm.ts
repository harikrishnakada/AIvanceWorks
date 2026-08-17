import { BRAND_PREFIX, SITE_CONFIG } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Life Sciences / Clinical Supply)
// Buyer: Head / Director of Clinical Supply Chain, VP of Clinical
//   Operations, Director of IRT / RTSM, Head of Biometrics, or
//   Clinical Systems leader at US biotechs, mid-size pharma sponsors,
//   and contract research organizations (CROs). Secondary: Trial Supply
//   Manager, Unblinded Pharmacist, Clinical Programmer.
//
// Buyer mindset: "Our randomization integrity, blinding boundaries,
//   and drug supply at site protect the study. If randomization breaks,
//   sites stock out, or the audit trail has gaps, we lose the study —
//   not a sprint."
//
// Top 3 buyer questions:
//   1. "Will the randomization and blinding integrity hold — controlled
//       roles, emergency-unblinding workflow, and an audit trail my
//       sponsor, statistician, and inspectors can accept?"
//   2. "Will it actually reduce drug waste and stockouts — depot and
//       site inventory awareness, expiry windows, and resupply triggers
//       that fit our protocol and our depot / CMO model?"
//   3. "Will it coexist with our EDC, CTMS, eTMF, eCOA, depot, and IRT
//       partners without forcing a rip-and-replace of stack we already
//       validated?"
//
// Key trust issue: blown blinding (a regulatory and statistical disaster),
//   site stockouts that cause missed visits or screen-fails, drug expiry
//   write-offs from poor forecasting, and inspection findings on the
//   randomization audit trail the customer thought was solid.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Statistical-randomization
//     list generation, randomization-list QC, blinding-design sign-off,
//     IQ/OQ/PQ authoring, computer-systems validation (CSV), sponsor
//     acceptance, and any regulatory submission remain with the
//     customer's biostatistics, QA, clinical supply, and regulatory
//     functions.
//   - No vendor names anywhere on the page (no Veeva, Suvoda, Calyx,
//     Almac, 4G Clinical, Signant Health, Cenduit, IQVIA, Medidata,
//     Oracle, Endpoint Clinical, etc.). No EDC / eCOA / CTMS / eTMF /
//     depot vendor names either. Integration capability is described
//     as documented APIs and standard exchange formats.
//   - Framework names (21 CFR Part 11, EU Annex 11, ICH-GCP, GAMP 5,
//     HIPAA, GDPR) are retained for audience-signaling and SEO, but
//     always framed as design awareness — never as certification or
//     compliance promises.
//   - No fixed durations, no fixed costs, no promised regulatory
//     outcomes, no promised enrollment or waste-reduction percentages.
//
// Signature: RandomizationSupplyControlPlane — hierarchical / role-aware
//   visualization (§8.3 patterns 2 + 4) — three horizontal bands (design
//   → conduct → supply) each split by a vertical blinding boundary into
//   a blinded lane (what study coordinators and CRAs see) and an
//   unblinded lane (what the unblinded pharmacist, statistician, and
//   supply manager see). Argument: "Randomization, dispensation, and
//   resupply sit on one engine — and the blinding boundary is enforced
//   in the data model, not in a spreadsheet your team is hoping nobody
//   shares."
//
// Composition mirrors the CTMS and AI Pharma precedents (same regulated
// life-sciences archetype, same liability stance):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) →
//   signature (dark) → complianceDeepDive (light) → benefitsGrid (warm)
//   → processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from the Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no verified RTSM engagement
//     yet.
//   - No IntegrationsPanel — the liability stance forbids naming EDC,
//     eCOA, CTMS, eTMF, or depot vendors. Integration capability is
//     woven into feature prose and the signature visual instead.
//   - ComplianceSpotlight placed before signature as trust gate (same
//     pattern as CTMS, ai-pharma, lims, ehr-development).

const rtsm: SolutionPageData = {
  slug: 'rtsm',
  title: `${BRAND_PREFIX} Custom Randomization & Trial Supply Management (RTSM / IRT) Software`,
  shortDescription:
    'Custom Randomization and Trial Supply Management (RTSM / IRT) software for US sponsors, biotechs, and CROs — randomization, kit dispensation, depot and site inventory, expiry and resupply forecasting, and emergency unblinding on a single role-aware platform built around your protocol.',

  metaTitle:
    'Custom RTSM / IRT Software Development | Randomization & Trial Supply',
  metaDescription:
    'Custom Randomization and Trial Supply Management (RTSM / IRT) software development for US sponsors, biotechs, and CROs. Randomization, kit dispensation, depot and site inventory, expiry, resupply forecasting, and emergency unblinding on one role-aware platform built around your protocol.',
  keywords: [
    'RTSM software development',
    'IRT software development',
    'randomization and trial supply management',
    'interactive response technology',
    'clinical trial randomization software',
    'clinical supply chain software',
    'drug supply forecasting software',
    'IWRS software',
    'IVRS software',
    '21 CFR Part 11 randomization',
    'ICH-GCP randomization software',
    'emergency unblinding software',
    'sponsor IRT software',
    'CRO RTSM software',
  ],
  canonicalPath: '/solutions/rtsm',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: `${BRAND_PREFIX} RTSM`, href: '/solutions/rtsm' },
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
  signatureComponent: 'RandomizationSupplyControlPlane',

  hero: {
    badge: 'Clinical Solutions',
    headline:
      'Randomization your statisticians trust. Supply your sites actually receive.',
    subhead:
      'Custom Randomization and Trial Supply Management (RTSM / IRT) software for US sponsors, biotechs, and CROs — randomization, kit dispensation, depot and site inventory, expiry and resupply forecasting, and emergency unblinding on one role-aware platform built around your protocol.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the control plane', href: '#signature' },
    heroImage: {
      src: '/images/solutions/rtsm/hero.jpg',
      alt: 'Clinical pharmacist preparing study drug kits in a clinical trial dispensing area',
    },
    metrics: [
      {
        value: 'Role-aware by design',
        label: 'Blinded and unblinded lanes enforced in the data model',
        description:
          'Blinding boundaries are enforced at the application and data layer — not in a spreadsheet, not by an honor system — so blinded study teams, CRAs, and sites only ever see what their role allows.',
      },
      {
        value: 'Supply you can plan',
        label: 'Depot, site, expiry, and resupply in one model',
        description:
          'Depot inventory, site inventory, kit expiry windows, and resupply triggers live on one model your clinical supply team can actually forecast against — instead of three spreadsheets that drift apart.',
      },
      {
        value: 'Built to coexist',
        label: 'With your EDC, CTMS, eTMF, eCOA, and depot partners',
        description:
          'Documented APIs and standard data formats your integration team can stand behind — no rip-and-replace of the EDC, CTMS, eTMF, eCOA, or depot connections your team already relies on.',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'One randomization engine',
      label: 'Schedules, stratification, treatment arms, kit assignment',
      description:
        'A single randomization engine that ingests your randomization list, applies stratification, and assigns kits at the visit — instead of a chain of emailed lists and ad-hoc spreadsheets.',
    },
    {
      value: 'Blinding boundary enforced',
      label: 'Role-scoped views for blinded and unblinded users',
      description:
        'Blinded study teams, CRAs, and sites see kit IDs and visit status; unblinded pharmacists, statisticians, and supply managers see treatment, drug pool, and shipment detail — boundary enforced in code.',
    },
    {
      value: 'Site stock you can trust',
      label: 'Depot, shipment, site inventory, and expiry in one view',
      description:
        'Visit-driven dispensation, depot-to-site shipments, lot and expiry tracking, and resupply triggers on a single inventory model — so the site has what it needs the day the subject walks in.',
    },
    {
      value: 'Emergency unblinding, controlled',
      label: 'Authorized roles, reason capture, full audit trail',
      description:
        'Emergency-unblinding workflows with authorized-role gating, reason capture, immediate notification, and an immutable audit trail your QA and pharmacovigilance teams can reconstruct.',
    },
  ],

  features: [
    {
      icon: 'Shuffle',
      title: 'Randomization & treatment-arm assignment',
      description:
        'Ingest your statistician-generated randomization list, support stratified, block, and adaptive schemes, and assign treatment at the visit with deterministic, reproducible logic — no shadow randomization in spreadsheets.',
    },
    {
      icon: 'PackageCheck',
      title: 'Kit dispensation & visit workflows',
      description:
        'Visit-driven kit requests, kit assignment, dispensation confirmation, and re-dispensation on a single subject-visit timeline — the site sees the kit ID, the unblinded pharmacist sees the actual treatment.',
    },
    {
      icon: 'Warehouse',
      title: 'Depot & site inventory management',
      description:
        'Depot inventory, lot and expiry tracking, depot-to-site shipments, site-level kit balances, and quarantine workflows on one inventory model — so supply, depot, and site state stay in sync.',
    },
    {
      icon: 'TrendingUp',
      title: 'Resupply forecasting & expiry management',
      description:
        'Visit-projected demand, expiry-aware lot selection, configurable resupply thresholds, and depot-level triggers your clinical supply team can tune per study — instead of a quarterly spreadsheet exercise.',
    },
    {
      icon: 'AlertTriangle',
      title: 'Emergency unblinding & code break',
      description:
        'Authorized-role gated unblinding flows with reason capture, immediate notification, role-scoped revelation, and an immutable audit record — designed for pharmacovigilance and serious-adverse-event workflows.',
    },
    {
      icon: 'Network',
      title: 'EDC, CTMS, eTMF, eCOA & depot integration',
      description:
        'Documented APIs and standard exchange formats for randomization, kit, visit, inventory, and shipment events — so your EDC, CTMS, eTMF, eCOA, and depot or CMO partners stay in sync without manual reconciliation.',
    },
  ],

  benefits: [
    {
      icon: 'ShieldCheck',
      title: 'Randomization integrity your statisticians trust',
      description:
        'Randomization, stratification, and kit assignment run on a deterministic engine, with a full audit trail and role-scoped access — so the integrity of the schedule and the blind is preserved across the trial.',
    },
    {
      icon: 'EyeOff',
      title: 'Blinding boundary that survives audit',
      description:
        'Blinded and unblinded roles are enforced at the application and data layer, with separate views, separate exports, and separate API surfaces — so the blind survives staff turnover, sponsor reviews, and inspections.',
    },
    {
      icon: 'Truck',
      title: 'Site supply your coordinators can rely on',
      description:
        'Visit-driven dispensation, depot-to-site shipments, lot and expiry tracking, and resupply triggers in one model — so missed visits and screen-fails caused by stockouts stop being the story.',
    },
    {
      icon: 'Recycle',
      title: 'Less drug waste, fewer expiry write-offs',
      description:
        'Expiry-aware lot selection, projected demand, and configurable resupply thresholds give your clinical supply team a forecasting tool that matches the way they actually plan — not a spreadsheet they re-build every cycle.',
    },
    {
      icon: 'Network',
      title: 'Coexists with the stack your team already runs',
      description:
        'Documented APIs and standard data formats let the RTSM platform sit alongside your EDC, CTMS, eTMF, eCOA, and depot partners — your IT team owns the connectors, and the systems your team relies on stay in place.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, scope & engineering framing',
      description:
        'We map your protocol families, randomization design, blinding model, depot and site supply chain, current IRT / RTSM landscape, and integration points; identify the highest-pain workflows; and frame the engineering and integration shape before scoping the build. Randomization-list generation, statistical sign-off, and validation strategy stay with your team.',
      duration: 'Scoped during discovery',
      deliverable:
        'Protocol workflow map, randomization-design summary, system inventory, integration outline, prioritized roadmap, engineering and integration framing document',
    },
    {
      title: 'Architecture & validation-aware engineering plan',
      description:
        'Design the randomization engine, kit and visit data model, blinding-aware role model, inventory and resupply model, audit-trail architecture, and integration topology, alongside your IT, biostatistics, QA, and clinical supply stakeholders. Documents are produced as inputs into your computer-systems validation work.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, data model, blinding-role model, audit-trail design, security architecture, integration outline, validation-input package',
    },
    {
      title: 'Build & iterate',
      description:
        'Iterative full-stack development of the platform — randomization, kit dispensation, depot and site inventory, expiry and resupply, emergency unblinding, and reporting modules — with engineering artifacts (test coverage, traceability matrices, change logs) captured as part of the build rather than reverse-engineered at the end.',
      duration: 'Phased per engagement',
      deliverable:
        'Working platform, engineering artifact set, audit-trail dashboards, configurable study templates, integration hooks',
    },
    {
      title: 'Integration & handoff to your QA / clinical supply function',
      description:
        'Connect to your existing EDC, CTMS, eTMF, eCOA, depot, and CMO systems via documented APIs and standard data formats, run end-to-end UAT with your clinical supply, biostatistics, and CRA teams, and assemble the engineering documentation your QA function uses as inputs into IQ/OQ/PQ and CSV.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set for QA / CSV intake',
    },
    {
      title: 'Deployment, hypercare & lifecycle operations',
      description:
        'Phased rollout to study teams, depot partners, and sites with an initial hypercare period covering randomization stability, supply behavior, change-control reviews, and adoption support — so the platform stays in a known state as studies progress and protocols amend.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbook, hypercare support, training materials',
    },
  ],

  capabilities: [
    'Audit-trail logging and e-signature support in regulated randomization and dispensation workflows',
    'Role-scoped access enforcing blinded vs. unblinded lanes at the data model',
    'Configurable randomization schemes — stratified, block, dynamic / adaptive — driven by your statistician-provided list',
    'Visit-driven kit assignment, dispensation, and re-dispensation workflows',
    'Depot and site inventory with lot, expiry, and quarantine awareness',
    'Resupply forecasting with expiry-aware lot selection and configurable thresholds',
    'Emergency-unblinding workflow with role gating, reason capture, and notification',
    'Documented APIs and standard data formats for EDC, CTMS, eTMF, eCOA, depot, and CMO',
    'Subject and PHI data segmentation, tokenization, and least-privilege defaults',
    'WCAG 2.1 AA accessibility for sponsor, supply, and site-facing interfaces',
    'Engineering artifacts and traceability your QA team can use as CSV inputs',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Python (statistical & integration tooling)',
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
      'Engineered with blinding integrity, audit-trail, and validation awareness for regulated randomization and supply',
    highlightText:
      'blinding integrity, audit-trail, and validation awareness',
    statusText:
      'Engineering posture aligned with the practices common in ICH-GCP, 21 CFR Part 11, EU Annex 11, GAMP 5, HIPAA, and GDPR environments',
    pillars: [
      {
        icon: 'EyeOff',
        title: 'Blinding boundary as first-class engineering',
        description:
          'Blinded and unblinded lanes are designed into the data model, the API surface, and the UI — not bolted on. Role transitions, exports, and emergency-unblinding events are logged as engineering-first events your QA team can review.',
      },
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
    ],
    badges: [
      'ICH-GCP',
      '21 CFR Part 11',
      'EU Annex 11',
      'GAMP 5',
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
      'GAMP 5 (computerised system lifecycle)',
      'HIPAA + HITECH',
      'GDPR',
      'CDISC standards (ODM / SDTM / Define-XML, where applicable)',
    ],
    safeguards: [
      {
        icon: 'EyeOff',
        title: 'Blinding boundary enforced at the data layer',
        description:
          'Blinded and unblinded roles are scoped at the application and data layer. Blinded users never receive treatment, drug pool, or unblinded inventory data through any view, export, or API. Unblinded views are separately authorized and separately logged.',
      },
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your validation work',
        description:
          'We structure the build so your QA function has the documentation, traceability, and test evidence they need to execute computer-systems validation (CSV) under GAMP 5 expectations. We do not perform validation, write IQ/OQ/PQ, or accept the system on your behalf.',
      },
      {
        icon: 'History',
        title: 'Audit trail as an engineering default',
        description:
          'Every action — randomization, dispensation, shipment, inventory adjustment, unblinding, role transition, and configuration change — is logged with actor, timestamp, resource, before/after state, and outcome. Audit records are immutable and exportable for your QA, sponsor, and inspection reviewers.',
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
          'Subject and patient data is tokenized at the application gateway, scoped by role, and kept out of supply, depot, and shipment-facing layers wherever the work allows. Least-privilege defaults across modules and APIs.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & access control',
        description:
          'Standards-based identity with enforced MFA, role-scoped access across sponsor, CRO, biostatistics, pharmacy, supply, depot, and IT users, and session controls designed for regulated clinical environments.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for regulated environments',
        description:
          'Hosted on cloud regions and configurations commonly used for sensitive clinical data, with private endpoints, infrastructure defined and reviewed via Terraform, and environment promotion gates your QA and IT teams can sign.',
      },
    ],
    auditNote:
      `Every component is engineered with blinding-aware role scoping, audit-trail logging, traceability, and lifecycle artifacts your QA, biostatistics, clinical supply, IT, and regulatory teams can use as inputs into their own computer-systems validation (CSV) and inspection-readiness work. Statistical-randomization list generation, randomization-list QC, blinding-design sign-off, final validation execution, IQ/OQ/PQ authoring, sponsor acceptance, and any regulatory submission remain solely the customer’s responsibility, executed by the customer’s biostatistics, QA, clinical supply, and regulatory functions. ${SITE_CONFIG.name} does not represent, attest, or warrant compliance with ICH-GCP, 21 CFR Part 11, EU Annex 11, GAMP 5, HIPAA, GDPR, or any other regulatory framework on behalf of any customer.`,
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Site supply your coordinators can rely on',
      description:
        'Visit-driven dispensation, depot-to-site shipments, lot and expiry tracking, and resupply triggers in one model — so missed visits and screen-fails caused by stockouts stop being the story your study managers have to explain.',
      image: {
        src: '/images/solutions/rtsm/feature-1.jpg',
        alt: 'Clinical pharmacy staff member organizing investigational product kits on labeled storage shelves',
      },
    },
    {
      heading: 'Randomization and visit decisions, role-aware',
      description:
        'Site coordinators see the kit they need; the unblinded pharmacist and statistician see the treatment, drug pool, and depot view — both on one platform, separated by a blinding boundary engineered into the data model.',
      image: {
        src: '/images/solutions/rtsm/feature-2.jpg',
        alt: 'Clinical research coordinator reviewing subject randomization information on a tablet in a clinical setting',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Clinical Trial Management Systems (CTMS)',
      description:
        'An RTSM handles the randomization and drug supply; a CTMS runs the rest of the trial around it. Our CTMS engagement builds the operational control plane for studies, sites, visits, monitoring, and payments — designed to coexist with your RTSM through documented APIs your IT team owns.',
      href: '/solutions/ctms',
      icon: 'Workflow',
      pageType: 'solution',
    },
    {
      title: 'Electronic Trial Master File (eTMF)',
      description:
        'Randomization integrity and supply decisions only hold up if the essential documents behind them are inspection-ready. Our eTMF engagement builds the zone-aware, audit-trail-aware evidence spine your QA team can answer "are we inspection-ready" against — any day, not just at study lock.',
      href: '/solutions/etmf',
      icon: 'FileText',
      pageType: 'solution',
    },
    {
      title: 'Security & Compliance',
      description:
        'Randomization and supply software lives or dies inside the audit trail and the blinding boundary. Our security & compliance practice helps shape your stack with audit-trail logging, role-scoped access, and lifecycle engineering your QA team can review and your sponsors can accept.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Will this RTSM replace our EDC, CTMS, eTMF, or eCOA system?',
      answer:
        'No. The RTSM we build is designed to coexist with the EDC, CTMS, eTMF, eCOA, depot, and CMO systems you already run, using documented APIs and standard data exchange formats (for example, HL7 FHIR R4 and CDISC ODM where applicable). It is the role-aware engine for randomization, kit dispensation, depot and site inventory, expiry and resupply, and emergency unblinding — and it hands off to your validated upstream and downstream systems through connections your IT and integration teams own.',
    },
    {
      question:
        'How do you handle blinding integrity and emergency unblinding?',
      answer:
        'Blinded and unblinded lanes are enforced at the application and data layer — not by an honor system on top of a single view. Blinded study teams, CRAs, and sites see kit IDs, visit status, and site-level kit counts; unblinded pharmacists, statisticians, and supply managers see treatment, drug pool, depot detail, and shipment lots. Emergency unblinding runs through an authorized-role gated workflow with re-authentication, reason capture, immediate notification, role-scoped revelation, and an immutable audit record your QA and pharmacovigilance teams can reconstruct.',
    },
    {
      question:
        'Will the platform satisfy a sponsor or FDA / EMA inspection?',
      answer:
        'We are a software engineering partner. We engineer the platform with the blinding-aware, audit-trail, e-signature, role-scoped access, and traceability practices that are common in ICH-GCP, 21 CFR Part 11, EU Annex 11, and GAMP 5 environments, and we deliver an engineering artifact set your QA team can use as inputs into computer-systems validation (CSV). Statistical-randomization list generation, list QC, blinding-design sign-off, IQ/OQ/PQ authoring, sponsor acceptance, and inspection responses are owned by your biostatistics, QA, clinical supply, and regulatory functions. We do not represent compliance with any framework on your behalf.',
    },
    {
      question:
        'How are depot, site inventory, expiry, and resupply handled?',
      answer:
        'Depot inventory, site inventory, lot and expiry, quarantine, and shipment status all live on one inventory model. Visit-driven dispensation updates site balances; depot-to-site shipments are tracked with lot detail and expiry windows; expiry-aware lot selection chooses which kit to assign next; and configurable resupply thresholds — set per study and per depot — generate the triggers your clinical supply team plans against. Forecasting is projected from the protocol visit schedule and configured demand assumptions your supply lead controls.',
    },
    {
      question:
        'How do you handle subject data, PHI, and access control?',
      answer:
        'Subject and patient data is tokenized at the application gateway, segmented by sensitivity, and access-scoped by role — sponsor, CRO, site, pharmacy, biostatistics, supply, depot, and IT users each see only what their role requires. PHI is kept out of supply, depot, and shipment-facing layers wherever the work allows. Every action is logged with actor, timestamp, resource, and outcome so your QA and sponsor reviewers can trace activity through the platform. The engineering practices are aligned with what customers in regulated clinical environments typically expect; we make no compliance certifications on your behalf.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Scope, timeline, and investment vary by program and are defined during discovery — we do not quote fixed durations, fixed costs, or fixed inspection outcomes on a public page. Discovery is where we map your protocol families, randomization design, blinding model, depot and site supply chain, current IRT / RTSM landscape, and integration points, then frame the engineering and integration shape before any production-bound code is written. After discovery, the build is typically phased so the highest-priority capability goes live first and your clinical supply, biostatistics, and QA teams can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Bringing randomization and trial supply onto one platform?',
    description:
      'Book a free 30-minute discovery call. We will review your protocol families, randomization design, blinding model, depot and site supply chain, current systems, and integration constraints, then outline a realistic engineering and integration shape. Statistical sign-off, validation, sponsor acceptance, and regulatory decisions remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the control plane', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing with explicit customer-ownership of statistical-randomization list generation, randomization-list QC, blinding-design sign-off, validation, IQ/OQ/PQ, CSV, sponsor acceptance, and regulatory submission. Legal review recommended before publish to confirm liability framing.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification or attestation.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement"; confirm no internal estimates leak into copy.',
    'No vendor names retained anywhere on the page (no Veeva, Suvoda, Calyx, Almac, 4G Clinical, Signant Health, Cenduit, IQVIA, Medidata, Oracle, Endpoint Clinical, etc.). No EDC / eCOA / CTMS / eTMF / depot / CMO vendor names either. Verify by grep before publish.',
    'imageFeatures alt text describes generic clinical-supply and clinical-research scenes; confirm photo content matches before publish.',
  ],
};

export default rtsm;
