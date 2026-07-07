import { BRAND_PREFIX } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Life Sciences / Clinical Operations)
// Buyer: Head of Clinical Documentation, Director / VP of Clinical
//   Operations, Head of TMF Operations, or CIO at US biotechs, mid-size
//   pharma sponsors, and contract research organizations (CROs).
//   Secondary: Clinical QA / GCP QA Lead, Director of Regulatory
//   Operations, Document Management Lead.
//
// Buyer mindset: "Our TMF can be inspected at any time. If it isn't
//   inspection-ready every day — not just at study lock — we are exposed.
//   Whatever we run has to map cleanly to the TMF Reference Model, give
//   us an honest completeness picture across studies and sites, and stay
//   inside the audit trail our QA team will be asked about."
//
// Top 3 buyer questions:
//   1. "Will our TMF be inspection-ready continuously — not just rebuilt
//       in the weeks before a sponsor or health-authority inspection?"
//   2. "Will it manage essential documents per the TMF Reference Model
//       across studies, sites, and vendors — instead of becoming another
//       shared drive with a folder convention nobody follows?"
//   3. "Will it coexist with our CTMS, EDC, safety, QMS, and finance
//       systems through documented APIs and standard exchange formats —
//       without forcing a rip-and-replace of stack we already validated?"
//
// Key trust issue: late TMF reconstruction in the weeks before an
//   inspection, missing or expired essential documents discovered at the
//   wrong time, QC backlog that grows faster than the team can clear it,
//   and "shared drive plus spreadsheet" implementations that fail under
//   sponsor or regulator scrutiny.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Validation execution, IQ/OQ/PQ
//     authoring, computer-systems validation (CSV), sponsor acceptance,
//     TMF Reference Model conformance claims, and any regulatory
//     submission remain with the customer's QA, clinical operations, and
//     regulatory functions.
//   - No vendor names anywhere on the page (no Veeva, Phlexglobal /
//     IQVIA TMF, Wingspan, NextDocs, Montrium, Florence, etc.). No CTMS,
//     EDC, safety, or QMS vendor names either. Integration capability is
//     described as documented APIs and standard exchange formats.
//   - Framework names (TMF Reference Model, ICH-GCP, 21 CFR Part 11,
//     EU Annex 11, HIPAA, GDPR) are retained for audience-signaling and
//     SEO, but always framed as design awareness — never as certification
//     or compliance promises.
//   - No fixed durations, no fixed costs, no promised regulatory outcomes,
//     no promised inspection-readiness scores or document-completeness
//     metrics.
//
// Signature: EtmfEvidenceLifecycleSpine — hierarchical / flow
//   visualization (§8.3 patterns 2 + 3) — three bands (capture sources →
//   document lifecycle → inspection-ready outputs) sitting inside a
//   design-awareness perimeter labeled with the frameworks common to
//   regulated clinical documentation. Argument: "Every essential
//   document — wherever it originates — lands in one zone-aware,
//   audit-trail-aware spine your QA, sponsor, and inspection reviewers
//   can read at any moment, not just at lock."
//
// Composition mirrors the CTMS / AI Pharma / LIMS precedents (same
// regulated, life-sciences archetype, same liability stance):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) → signature (dark) →
//   complianceDeepDive (light) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from the Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no verified eTMF engagement yet.
//   - No IntegrationsPanel — the liability stance forbids naming CTMS,
//     EDC, safety, QMS, or finance vendors. Integration capability is
//     woven into feature prose and the signature visual instead.
//   - ComplianceSpotlight placed before signature as trust gate (same
//     pattern as ctms, ai-pharma, lims, ehr-development).

const etmf: SolutionPageData = {
  slug: 'etmf',
  title: `${BRAND_PREFIX} Custom Electronic Trial Master File (eTMF) Systems`,
  shortDescription:
    'Custom Electronic Trial Master File (eTMF) systems for sponsors, biotechs, and CROs — one zone-aware, audit-trail-aware evidence spine across studies, sites, and vendors, built around the TMF Reference Model and the way your clinical documentation team actually runs.',

  metaTitle:
    'Custom eTMF Development | Electronic Trial Master File Systems',
  metaDescription:
    'Custom Electronic Trial Master File (eTMF) development for US sponsors, biotechs, and CROs. One inspection-ready evidence spine across studies, sites, and vendors — zone-aware, audit-trail-aware, designed around the TMF Reference Model and the way your clinical documentation team actually runs.',
  keywords: [
    'eTMF software development',
    'custom eTMF development',
    'electronic trial master file',
    'eTMF system development',
    'TMF Reference Model software',
    'clinical documentation software',
    'sponsor eTMF software',
    'CRO eTMF software',
    'biotech eTMF software',
    'ICH-GCP eTMF software',
    '21 CFR Part 11 eTMF',
    'inspection-ready eTMF',
    'trial master file management',
  ],
  canonicalPath: '/solutions/etmf',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: `${BRAND_PREFIX} eTMF`, href: '/solutions/etmf' },
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
  signatureComponent: 'EtmfEvidenceLifecycleSpine',

  hero: {
    badge: 'Clinical Solutions',
    headline:
      'An eTMF your QA team trusts and your inspectors can actually read.',
    subhead:
      'Custom Electronic Trial Master File systems for US sponsors, biotechs, and CROs — one zone-aware, audit-trail-aware evidence spine across studies, sites, and vendors, built around the TMF Reference Model and the way your clinical documentation team actually runs.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the evidence spine', href: '#signature' },
    heroImage: {
      src: '/images/solutions/etmf/hero.jpg',
      alt: 'Clinical operations professional reviewing essential trial documents on a laptop in a research office',
    },
    metrics: [
      {
        value: 'One evidence spine',
        label: 'Across studies, sites, and vendors',
        description:
          'A single zone-aware record of every essential document — sponsor, site, vendor, and system-generated — instead of a shared drive plus a folder convention nobody follows.',
      },
      {
        value: 'Inspection-ready every day',
        label: 'Not just rebuilt before an inspection',
        description:
          'A live view of expected vs. received essential documents per study, site, and TMF zone, so your QA team can answer "are we inspection-ready" at any moment, not just at study lock.',
      },
      {
        value: 'Built to coexist',
        label: 'With your CTMS, EDC, safety, and QMS stack',
        description:
          'Documented APIs and standard exchange formats your integration team can stand behind — no rip-and-replace of the systems your team already relies on.',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'Zone-aware filing',
      label: 'TMF Reference Model zones, sections, artifacts',
      description:
        'Every document classified, indexed, and filed against TMF Reference Model zones, sections, and artifact types — so completeness is measurable, not guessed.',
    },
    {
      value: 'Continuous completeness view',
      label: 'Expected vs. received per study and site',
      description:
        'Live dashboards of expected vs. received essential documents per study, site, country, and zone, replacing reconstruction work in the weeks before inspection.',
    },
    {
      value: 'QC and review off the inbox',
      label: 'Quality checks, reviewer queues, exception handling',
      description:
        'A QC and review engine with reviewer queues, exception handling, and re-work loops — so QC stops being a manual triage exercise across email and spreadsheets.',
    },
    {
      value: 'Sponsor & CRO exchange built in',
      label: 'Documented APIs, standard exchange formats',
      description:
        'Sponsor-to-CRO and CRO-to-sponsor document exchange handled by the platform via documented APIs and standard formats — not by zipped folders on shared drives.',
    },
  ],

  features: [
    {
      icon: 'FolderTree',
      title: 'TMF Reference Model classification & filing',
      description:
        'Zone, section, and artifact-aware classification with configurable study templates so each new protocol does not start from a blank folder structure. Expected-document lists are maintained per study and per country.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'QC, review & exception handling',
      description:
        'Reviewer queues, completeness and legibility checks, metadata validation, and exception workflows with owners, due dates, and escalation — engineered to fit the way your TMF QC team actually triages work.',
    },
    {
      icon: 'PenLine',
      title: 'E-signature & approval workflows',
      description:
        'Role-scoped review and approval flows with re-authentication, signed-meaning capture, and tamper-evident records, designed around the practices common in 21 CFR Part 11 and EU Annex 11 environments.',
    },
    {
      icon: 'LayoutDashboard',
      title: 'Inspection-readiness dashboards',
      description:
        'Live views of expected vs. received documents per study, site, country, and TMF zone, with drill-down to the document, version, and review history — so your QA team can answer inspection questions in minutes, not weeks.',
    },
    {
      icon: 'History',
      title: 'Audit-trail-first document history',
      description:
        'Every action — upload, classify, QC, approve, sign, supersede, re-open — logged with actor, timestamp, document, version, and outcome. Immutable history exportable for your QA, sponsor, and inspection reviewers.',
    },
    {
      icon: 'Share2',
      title: 'Sponsor, CRO & vendor exchange',
      description:
        'Documented APIs and standard exchange formats for sponsor-to-CRO and CRO-to-sponsor document handoffs, central lab and IRT vendor packages, and CTMS / EDC / safety system bridges your IT team controls.',
    },
  ],

  benefits: [
    {
      icon: 'ShieldCheck',
      title: 'Inspection-ready as a daily state, not a project',
      description:
        'A continuous view of expected vs. received essential documents — per study, site, country, and TMF zone — replaces the pre-inspection reconstruction sprint your team has lived through before.',
    },
    {
      icon: 'FolderTree',
      title: 'One zone-aware evidence spine across studies',
      description:
        'TMF Reference Model classification at the artifact level, applied consistently across studies, countries, and sites — so completeness is measurable and reviewable, not a folder convention people forget.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'QC and review that scales with the portfolio',
      description:
        'Reviewer queues, exception handling, and re-work loops engineered into the platform — so QC capacity scales with study volume instead of forcing your team to swap quality for throughput.',
    },
    {
      icon: 'Network',
      title: 'Coexists with the stack your team already runs',
      description:
        'Documented APIs and standard data formats let the eTMF sit alongside your CTMS, EDC, safety, QMS, and finance systems — your IT team owns the connectors, and the systems your team already relies on stay in place.',
    },
    {
      icon: 'Share2',
      title: 'Sponsor and CRO handoffs your auditors can follow',
      description:
        'Document exchange between sponsors, CROs, and vendors flows through the platform with a documented audit trail — so handoffs survive vendor turnover and remain reviewable years later.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, scope & engineering framing',
      description:
        'We map your TMF Reference Model implementation, current document landscape (shared drives, legacy eTMF, CRO transfer packages), expected-document lists per study type, QC workload, and integration points with CTMS / EDC / safety / QMS; identify the highest-pain workflows; and frame the engineering and integration shape before scoping the build. Validation strategy and sponsor acceptance criteria stay with your team.',
      duration: 'Scoped during discovery',
      deliverable:
        'Document landscape map, TMF Reference Model gap review, QC workflow map, integration outline, prioritized roadmap, engineering and integration framing document',
    },
    {
      title: 'Architecture & validation-aware engineering plan',
      description:
        'Design the data model, classification schema, audit-trail architecture, role-scoped access model, QC and review engine, e-signature workflow, and integration topology, alongside your IT, security, QA, and clinical operations stakeholders. Documents are produced as inputs into your computer-systems validation work.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, data model, classification schema, audit-trail design, security architecture, integration outline, validation-input package',
    },
    {
      title: 'Build & iterate',
      description:
        'Iterative full-stack development of the platform — capture, classification, QC, approval, e-signature, filing, inspection-readiness, audit-trail, and exchange modules — with engineering artifacts (test coverage, traceability matrices, change logs) captured as part of the build rather than reverse-engineered at the end.',
      duration: 'Phased per engagement',
      deliverable:
        'Working platform, engineering artifact set, audit-trail dashboards, configurable study templates, integration hooks',
    },
    {
      title: 'Integration & handoff to your QA / clinical operations function',
      description:
        'Connect to your existing CTMS, EDC, safety, QMS, and finance systems via documented APIs and standard data formats, run end-to-end UAT with your TMF, QC, and clinical operations teams, and assemble the engineering documentation your QA function uses as inputs into IQ/OQ/PQ and CSV.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set for QA / CSV intake',
    },
    {
      title: 'Deployment, hypercare & lifecycle operations',
      description:
        'Phased rollout to study teams, TMF QC reviewers, sponsors, and CRO partners with an initial hypercare period covering filing stability, change-control reviews, and adoption support — so the platform stays in a known state as studies progress and document volume grows.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbook, hypercare support, training materials',
    },
  ],

  capabilities: [
    'TMF Reference Model classification at zone, section, and artifact level',
    'Configurable expected-document lists per study type, phase, and country',
    'QC, review, and exception workflows with reviewer queues and escalation',
    'E-signature and approval workflows with re-authentication and signed-meaning capture',
    'Immutable audit trail across every document action, version, and reviewer',
    'Inspection-readiness dashboards for studies, sites, countries, and zones',
    'Role-scoped access for sponsor, CRO, site, QC, QA, and inspection reviewer users',
    'Documented APIs and standard data formats for CTMS, EDC, safety, QMS, and finance',
    'PHI / subject data segmentation, tokenization, and least-privilege defaults',
    'WCAG 2.1 AA accessibility for sponsor and reviewer-facing interfaces',
    'Engineering artifacts and traceability your QA team can use as CSV inputs',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Python (classification, OCR & integration tooling)',
    'Azure App Service / Azure Container Apps',
    'Azure AD / Entra ID (identity & MFA)',
    'Azure Key Vault (key & secret management)',
    'Azure SQL / PostgreSQL',
    'Azure Blob Storage (immutable / WORM tiers)',
    'Azure Service Bus / Event Grid',
    'Terraform (IaC)',
    'OpenTelemetry + Application Insights (audit & observability)',
    'HL7 FHIR R4 / CDISC ODM (open data standards)',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered with audit-trail, e-signature, and inspection awareness for regulated clinical documentation',
    highlightText:
      'audit-trail, e-signature, and inspection awareness',
    statusText:
      'Engineering posture aligned with the practices common in TMF Reference Model, ICH-GCP, 21 CFR Part 11, EU Annex 11, HIPAA, and GDPR environments',
    pillars: [
      {
        icon: 'ShieldCheck',
        title: 'Audit-trail-aware engineering',
        description:
          'Audit logging, e-signature support, and approval gates designed as first-class engineering features. Your QA team executes validation; the platform supplies the engineering evidence and inspection-ready trail.',
      },
      {
        icon: 'FolderTree',
        title: 'Zone-aware classification by design',
        description:
          'TMF Reference Model zone, section, and artifact awareness is engineered into the data model — not bolted on as a folder convention. Expected-document lists are configurable per study type, phase, and country.',
      },
      {
        icon: 'Lock',
        title: 'Subject and PHI data treated as first class',
        description:
          'Subject and patient data inside essential documents is segmented, access-scoped at the application layer by default, and kept out of dashboards and exchange payloads wherever the work allows.',
      },
    ],
    badges: [
      'TMF Reference Model',
      'ICH-GCP',
      '21 CFR Part 11',
      'EU Annex 11',
      'HIPAA',
      'GDPR',
      'HL7 FHIR',
    ],
  },

  complianceDetail: {
    frameworks: [
      'TMF Reference Model (zone / section / artifact classification)',
      'ICH-GCP (Good Clinical Practice)',
      '21 CFR Part 11 (electronic records & signatures)',
      'EU Annex 11 (computerised systems)',
      'HIPAA + HITECH',
      'GDPR',
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
          'Every document action — upload, classify, QC, approve, sign, supersede, archive, and re-open — is logged with actor, timestamp, document, version, before / after state, and outcome. Audit records are immutable and exportable for your QA, sponsor, and inspection reviewers.',
      },
      {
        icon: 'PenLine',
        title: 'E-signature support designed for regulated workflows',
        description:
          'E-signature flows are engineered with re-authentication, signed-meaning capture, and tamper-evident records — aligned with the practices common in 21 CFR Part 11 and EU Annex 11 environments. Acceptance of those signatures for any specific regulatory purpose is your team’s decision.',
      },
      {
        icon: 'Archive',
        title: 'Retention, lock, and controlled-access archive',
        description:
          'Study-level lock, retention policies, and a controlled-access archive engineered into the platform — so closed studies remain reviewable for retention periods your QA and regulatory teams define, without surfacing inside operational workflows.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & access control',
        description:
          'Standards-based identity with enforced MFA, role-scoped access across sponsor, CRO, site, QC, QA, and inspection reviewer users, and session controls designed for regulated clinical environments.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for regulated environments',
        description:
          'Hosted on cloud regions and configurations commonly used for sensitive clinical data, with private endpoints, immutable / WORM storage tiers for archived records, and infrastructure defined and reviewed via Terraform.',
      },
    ],
    auditNote:
      'Every component is engineered with audit-trail logging, role-scoped access, traceability, and lifecycle artifacts your QA, clinical operations, IT, and regulatory teams can use as inputs into their own computer-systems validation (CSV) and inspection-readiness work. Final validation execution, IQ/OQ/PQ authoring, sponsor acceptance, TMF Reference Model conformance claims, and any regulatory submission remain solely the customer’s responsibility, executed by the customer’s QA and regulatory functions. AIvanceWorks does not represent, attest, or warrant compliance with the TMF Reference Model, ICH-GCP, 21 CFR Part 11, EU Annex 11, HIPAA, GDPR, or any other regulatory framework on behalf of any customer.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'Clearer signals for your TMF and QC reviewers',
      description:
        'Reviewer queues, completeness views, and exception dashboards that surface the next blocking document per study and site — supporting your QC and QA team instead of replacing their judgement.',
      image: {
        src: '/images/solutions/etmf/feature-1.jpg',
        alt: 'Clinical documentation reviewer working through trial document checklists on a laptop',
      },
    },
    {
      heading: 'Sponsor and CRO exchange your auditors can follow',
      description:
        'Document handoffs between sponsors, CROs, and vendors engineered as part of the platform — with a documented audit trail your QA, sponsor, and inspection reviewers can read years later.',
      image: {
        src: '/images/solutions/etmf/feature-2.jpg',
        alt: 'Clinical operations and quality team members reviewing trial documents together on screen',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Clinical Trial Management Systems (CTMS)',
      description:
        'An eTMF tracks the evidence; a CTMS runs the trial that produces it. Our CTMS engagement builds the operational control plane for studies, sites, visits, monitoring, and payments — designed to coexist with the eTMF through documented APIs your IT team owns.',
      href: '/solutions/ctms',
      icon: 'Workflow',
      pageType: 'solution',
    },
    {
      title: 'Randomization & Trial Supply Management (RTSM / IRT)',
      description:
        'Inspection-ready essential documents are one trust gate; randomization integrity and drug accountability are the other. Our RTSM engagement builds the role-aware randomization, dispensation, and depot / site supply engine — designed to coexist with your eTMF and CTMS through documented APIs your IT team owns.',
      href: '/solutions/rtsm',
      icon: 'Shuffle',
      pageType: 'solution',
    },
    {
      title: 'Security & Compliance',
      description:
        'Trial documentation software lives or dies inside the audit trail. Our security & compliance practice helps shape your stack with audit-trail logging, role-scoped access, and lifecycle engineering your QA team can review and your sponsors can accept.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Will this eTMF replace our CTMS, EDC, safety, or QMS system?',
      answer:
        'No. The eTMF we build is designed to coexist with the CTMS, EDC, safety, QMS, and finance systems you already run, using documented APIs and standard data exchange formats. It is the inspection-ready evidence spine for essential documents — capture, classification, QC, approval, e-signature, filing, and archive — and it hands off to your operational and validated upstream / downstream systems through connections your IT and integration teams own.',
    },
    {
      question:
        'Will the platform satisfy a sponsor or FDA / EMA inspection?',
      answer:
        'We are a software engineering partner. We engineer the platform with the audit-trail, e-signature, role-scoped access, and traceability practices that are common in TMF Reference Model, ICH-GCP, 21 CFR Part 11, and EU Annex 11 environments, and we deliver an engineering artifact set your QA team can use as inputs into computer-systems validation (CSV) and inspection-readiness reviews. Final validation execution, IQ/OQ/PQ authoring, sponsor acceptance, TMF Reference Model conformance claims, and inspection responses are owned by your QA, clinical operations, and regulatory functions. We do not represent compliance with any framework on your behalf.',
    },
    {
      question:
        'How is TMF Reference Model classification handled?',
      answer:
        'Zone, section, and artifact awareness is engineered into the data model — not added as a folder convention on top of a generic document store. Expected-document lists are configurable per study type, phase, and country, and completeness views show expected vs. received per study, site, and zone in real time. Your TMF and QA teams define and maintain the classification scheme; the platform enforces and reports against it consistently across studies.',
    },
    {
      question:
        'How do you handle PHI and access control across sponsor, CRO, and site users?',
      answer:
        'Subject and patient data inside essential documents is segmented, access-scoped at the application layer, and kept out of dashboards and exchange payloads wherever the work allows. Role-scoped access spans sponsor, CRO, site, QC, QA, and inspection reviewer users — each role sees only the documents and metadata their work requires. Every access and action is logged with actor, timestamp, document, and outcome. The engineering practices are aligned with what customers in regulated clinical environments typically expect; we make no compliance certifications on your behalf.',
    },
    {
      question:
        'How does sponsor-to-CRO and CRO-to-sponsor document exchange work?',
      answer:
        'Document exchange is engineered into the platform via documented APIs and standard exchange formats — not as zipped folders on a shared drive. Transfer manifests, source-of-record metadata, and audit trails travel with each exchange so the receiving organization can verify completeness and reviewers on either side can follow handoff history years later. Your IT and integration teams own the connectors to specific sponsor or CRO endpoints.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Scope, timeline, and investment vary by program and are defined during discovery — we do not quote fixed durations, fixed costs, or fixed inspection outcomes on a public page. Discovery is where we map your TMF Reference Model implementation, current document landscape, expected-document lists, QC workload, and integration points, then frame the engineering and integration shape before any production-bound code is written. After discovery, the build is typically phased so the highest-priority capability goes live first and your clinical documentation and QA teams can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Bringing your trial master file onto one evidence spine?',
    description:
      'Book a free 30-minute discovery call. We will review your TMF Reference Model implementation, current document landscape, QC workload, and integration constraints, then outline a realistic engineering and integration shape. Validation, sponsor acceptance, and regulatory decisions remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the evidence spine', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing with explicit customer-ownership of validation, IQ/OQ/PQ, computer-systems validation (CSV), sponsor acceptance, TMF Reference Model conformance claims, and any regulatory submission. Legal review recommended before publish to confirm liability framing.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification or attestation.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement"; confirm no internal estimates leak into copy.',
    'No vendor names retained anywhere on the page (no Veeva, Phlexglobal / IQVIA TMF, Wingspan, NextDocs, Montrium, Florence, etc.). No CTMS / EDC / safety / QMS vendor names either. Verify by grep before publish.',
    'imageFeatures alt text describes generic clinical-documentation scenes; confirm photo content matches before publish.',
  ],
};

export default etmf;
