import { BRAND_PREFIX } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Pharma / Biotech — Drug Discovery)
// Buyer: VP / Head of Discovery Informatics, Head of Computational Chemistry,
//   Director of Cheminformatics / Research IT, and Chief Scientific Officer
//   at US pharma (mid-cap to large) and US biotech (Series B+) and contract
//   research organizations doing discovery work. Their teams sit between the
//   wet lab and IT and answer to scientific QA, IP governance, and the
//   eventual GLP / IND chain downstream.
//
// Buyer mindset: "I need to compress hit-to-lead and improve candidate quality
//   without losing control of our chemistry IP or breaking the validated tools
//   my scientists already rely on. If your AI hallucinates around chemistry or
//   your platform leaks structures into an external model, I lose my budget
//   and possibly my job."
//
// Top 3 buyer questions (drive composition order):
//   1. "How does this fit alongside our existing ELN, LIMS, registration, and
//      cheminformatics stack — or are you asking me to rip and replace?"
//   2. "How is our proprietary chemistry — compound structures, assay data,
//      generative outputs — protected from training external models?"
//   3. "Can your AI/ML models be trusted for hit-to-lead or lead-optimization
//      decisions, or are we just bolting another black box onto the bench?"
//
// Key trust issue: Discovery software that promises a faster pipeline but
//   either (a) leaks IP into vendor cloud models, (b) ships ML with no
//   documented validation that the QA team can review, or (c) silently
//   displaces the validated tools their scientists already trust.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner for discovery teams. Scientific
//     validation, GLP nonclinical work, IND-enabling decisions, and any
//     regulatory submission are owned by the customer's research leadership,
//     QA, and regulatory functions.
//   - No vendor names anywhere on the page (no Schrödinger, OpenEye, Certara,
//     ChemAxon, Dotmatics, Benchling, BIOVIA, RDKit, BioNeMo, AlphaFold,
//     Boltz, Chai, etc.).
//   - No instrument or ELN/LIMS vendor names.
//   - Framework names (21 CFR Part 11, GLP, GxP, FDA GMLP, HIPAA, GDPR) are
//     retained for audience-signaling and SEO, always framed as design
//     awareness — never as certification or compliance promises.
//   - No fabricated outcomes (no "X% faster hit-to-lead", "Y% attrition
//     reduction", "Z compounds advanced") — capability framing only.
//   - No fixed durations or fixed costs.
//
// Signature: DiscoveryPipelineSpine — hierarchical / flow visualization
//   (§8.3 patterns 2 + 3) — the five canonical discovery stages
//   (Target ID → Hit ID → Hit-to-Lead → Lead Optimization → Candidate
//   Selection) flowing left-to-right as the top band, a software capability
//   rail beneath each stage, and a shared IP-protected research data
//   foundation below — wrapped in a design-awareness regulatory perimeter.
//   Argument: "Discovery software is only useful if it carries your IP
//   forward, your scientists forward, and your QA forward — across every
//   stage, from target to candidate."
//
// Composition mirrors the ai-pharma precedent (same regulated life-sciences
// archetype, same liability stance), slightly leaner (no complianceDeepDive —
// pre-clinical discovery is not Part 11 territory by default; complianceSpotlight
// alone carries the trust signal):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → signature (dark) → benefitsGrid (warm) →
//   complianceSpotlight (light) → processTimeline (warm) →
//   relatedPages (light) → faq (warm) → ctaBlock (accent)
//
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no verified discovery engagement.
//   - No IntegrationsPanel — liability stance forbids naming ELN / LIMS /
//     cheminformatics vendors. Integration capability is woven into feature
//     prose where it carries credibility for the discovery informatics buyer.
//   - No complianceDeepDive — discovery work is not 21 CFR Part 11 by default
//     (unlike clinical operations / GxP). complianceSpotlight carries the
//     IP-protection and engineering-discipline signal the buyer needs.

const drugDiscovery: SolutionPageData = {
  slug: 'drug-discovery',
  title: `${BRAND_PREFIX} Drug Discovery Software`,
  shortDescription:
    'Custom software for drug discovery — in-silico screening platforms, ADMET and property-prediction tooling, cheminformatics data foundations, knowledge graphs, and AI-assisted analytics — engineered to sit alongside the ELN, LIMS, and chemistry stack your scientists already rely on.',

  metaTitle:
    'Drug Discovery Software Development | Cheminformatics, AI & ML for Pharma R&D',
  metaDescription:
    'Custom drug discovery software for US pharma and biotech: virtual screening, ADMET prediction, cheminformatics data foundations, knowledge graphs, and AI-assisted analytics — engineered with IP protection and audit awareness, designed to coexist with your existing ELN, LIMS, and chemistry stack.',
  keywords: [
    'drug discovery software',
    'drug discovery software development',
    'AI drug discovery software',
    'cheminformatics platform development',
    'in-silico screening software',
    'virtual screening platform',
    'ADMET prediction software',
    'computational chemistry software',
    'discovery informatics platform',
    'pharma R&D software development',
    'lead optimization software',
    'hit-to-lead software',
    'medicinal chemistry software',
    'discovery data platform',
  ],
  canonicalPath: '/solutions/drug-discovery',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: `${BRAND_PREFIX} Drug Discovery`, href: '/solutions/drug-discovery' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'signature',
    'benefitsGrid',
    'complianceSpotlight',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'pharma',
  signatureComponent: 'DiscoveryPipelineSpine',

  hero: {
    badge: 'Pharma & Biotech Solutions',
    headline:
      'Drug discovery software — built around how your computational and medicinal chemists actually work.',
    subhead:
      'Custom platforms for in-silico screening, ADMET and property prediction, cheminformatics data foundations, knowledge graphs, and AI-assisted analytics — engineered to sit alongside the ELN, LIMS, registration, and chemistry tooling your scientists already rely on.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the discovery spine', href: '#signature' },
    heroImage: {
      src: '/images/solutions/drug-discovery/hero.jpg',
      alt: 'Computational chemist reviewing a three-dimensional molecular structure on a workstation display',
    },
    metrics: [
      {
        value: 'Target → candidate',
        label: 'Software across every discovery stage',
        description:
          'One engineering foundation supporting target identification, hit identification, hit-to-lead, lead optimization, and candidate-selection software for your discovery teams.',
      },
      {
        value: 'Your IP, your boundary',
        label: 'Chemistry data stays inside your tenancy',
        description:
          'Platforms architected so compound structures, assay data, and generative outputs stay inside an IP boundary your IT and security teams define and review.',
      },
      {
        value: 'Built to coexist',
        label: 'With the ELN, LIMS, and chemistry tools you run',
        description:
          'Designed to sit alongside the ELN, LIMS, registration, and cheminformatics tools your scientists already use — your IT and integration teams own the actual connectors.',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'Faster hit-to-lead loop',
      label: 'Search, screening, and analytics in one workspace',
      description:
        'Workflows that compress the search → screen → score → decide loop for medicinal and computational chemists — with the underlying data lineage preserved underneath.',
    },
    {
      value: 'Better candidate quality',
      label: 'ADMET, selectivity, and property signals up front',
      description:
        'Property, ADMET, and selectivity prediction surfaced earlier in the workflow — supporting your chemists’ design decisions, not replacing their judgment.',
    },
    {
      value: 'Chemistry IP discipline',
      label: 'Structures and assays inside a defined boundary',
      description:
        'Compound structures, registration data, and generative outputs handled inside an IP boundary your IT and security teams configure — never silently shipped to vendor-trained models.',
    },
    {
      value: 'Built to coexist',
      label: 'APIs the systems your scientists already use can consume',
      description:
        'Designed to integrate with the ELN, LIMS, registration, and chemistry tools your scientists already trust — using documented APIs and standard chemistry data formats.',
    },
  ],

  features: [
    {
      icon: 'FlaskConical',
      title: 'In-Silico Screening & Virtual Library Workflows',
      description:
        'Custom platforms for virtual library design, docking pipelines, similarity and pharmacophore search, and structure-based screening — orchestrated so your computational chemists can move from a query to a ranked, annotated shortlist inside one workspace.',
    },
    {
      icon: 'Microscope',
      title: 'ADMET & Property Prediction Platforms',
      description:
        'Software for ADMET, physicochemical, and selectivity prediction — model registries, batch scoring pipelines, and explainability hooks so your chemists see not just a number but the data and model lineage behind it.',
    },
    {
      icon: 'Network',
      title: 'Knowledge Graphs Over Your Research Sources',
      description:
        'Graphs that connect targets, compounds, assays, scientific literature, and internal experiments — so your scientists can traverse the relationships between programs, projects, and prior work without re-running searches across siloed systems.',
    },
    {
      icon: 'Database',
      title: 'Cheminformatics Data Foundation',
      description:
        'A research data fabric across your compound registration, assay results, screening data, and structure activity records — with schema-level lineage, controlled chemistry vocabularies, and role-scoped access so AI and analytics workloads run on data with documented provenance.',
    },
    {
      icon: 'GitBranch',
      title: 'Lab Data Integration & Workflow Automation',
      description:
        'Connectors and workflow automation that sit alongside your ELN, LIMS, registration, and instrument-data systems via documented APIs and standard formats — your IT and integration teams own the connections; we own the discovery-side application logic.',
    },
    {
      icon: 'ShieldCheck',
      title: 'MLOps & Model Governance for Chemistry Models',
      description:
        'Model cards, training data fingerprints, evaluation harnesses, drift detection, retraining gates, and change-control logs for every chemistry model — engineering artifacts your QA, IT, and downstream regulatory teams can review as part of their own validation work.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Compressed Hit-to-Lead Loops for Your Chemists',
      description:
        'Workflows that compress the search → screen → score → decide loop — virtual screening, property prediction, literature search, and internal experiments accessible from one workspace with the underlying data lineage preserved.',
    },
    {
      icon: 'Target',
      title: 'Better Signals Going Into Pre-Clinical',
      description:
        'Property, ADMET, and selectivity signals surfaced earlier in the workflow — supporting your chemists’ design decisions and giving your pre-clinical team a stronger candidate package to build from.',
    },
    {
      icon: 'Lock',
      title: 'Your Chemistry IP Stays Your Chemistry IP',
      description:
        'Compound structures, assay data, registration records, and generative outputs handled inside an IP boundary your IT and security teams define. Generative and ML pipelines are configured so proprietary structures are not silently used to train external models.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Discovery Stack',
      description:
        'We sit alongside the ELN, LIMS, registration, and cheminformatics tools your scientists already rely on — using documented APIs and standard chemistry data formats. Adding discovery software capability without forcing you to displace the validated tooling your bench already trusts.',
    },
    {
      icon: 'FileCheck',
      title: 'Transparent ML for Chemistry, Not Another Black Box',
      description:
        'Chemistry models ship with model cards, training data lineage, evaluation results, confidence reporting, and change-control history — so your chemists and your QA team can read the model behind the score before any decision is made.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Workflow Mapping & Engineering Framing',
      description:
        'We map your discovery workflows end to end — target identification, hit identification, hit-to-lead, lead optimization, candidate selection — audit data readiness across your chemistry systems, and frame the engineering and integration shape before scoping the build. Scientific direction and program decisions stay with your team.',
      duration: 'Scoped during discovery',
      deliverable:
        'Discovery workflow map, data readiness audit, engineering and integration outline, prioritized roadmap',
    },
    {
      title: 'Architecture, Data Strategy & IP Boundary',
      description:
        'Design the platform architecture, cheminformatics data foundation, model lifecycle, IP boundary, and security posture — including audit-trail design, role-scoped access, MLOps practices, and tenancy boundaries — alongside your IT, security, and QA stakeholders.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, chemistry data model, MLOps plan, IP-boundary design, integration outline',
    },
    {
      title: 'Build & Iterate',
      description:
        'Iterative full-stack development of the discovery platform — data pipelines, model services, screening workflows, knowledge graph, chemist-facing UI, and governance tooling — with engineering artifacts (test coverage, evaluation results, change logs) captured as part of the build.',
      duration: 'Phased per engagement',
      deliverable:
        'Working discovery platform, engineering artifact set, model cards, audit-trail dashboards, integration hooks',
    },
    {
      title: 'Integration With Your Discovery Stack & QA Handoff',
      description:
        'Connect to your existing ELN, LIMS, registration, and chemistry systems via documented APIs and standard formats, run end-to-end UAT with your discovery informatics and chemistry stakeholders, and assemble the engineering documentation set your QA team needs as inputs into their own validation work.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set',
    },
    {
      title: 'Deployment, Hypercare & Lifecycle Operations',
      description:
        'Phased rollout to your computational and medicinal chemistry teams. An initial hypercare period covers monitoring, model drift response, retraining considerations, and change-control reviews so the platform stays in a known state as your programs evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, drift / retraining playbooks, hypercare support',
    },
  ],

  capabilities: [
    'IP-boundary design for compound structures, assay data, and generative outputs',
    'Schema-level lineage and controlled chemistry vocabularies across research sources',
    'Role-scoped access for chemists, informatics, QA, IT, and external collaborators',
    'Audit-trail logging and change-control history for chemistry pipelines and models',
    'Model cards, evaluation harnesses, drift detection, and retraining gates for chemistry ML',
    'Documented APIs and standard chemistry data formats for ELN / LIMS / registration integration',
    'Tenant isolation and private-network deployment patterns for sensitive research data',
    'WCAG 2.1 AA accessibility for chemist-facing interfaces',
    'Engineering artifacts your QA team can use as validation inputs',
    'Security engineering aligned with practices common in regulated research environments',
  ],

  technologies: [
    'Python (cheminformatics / ML tooling)',
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure AI services',
    'Azure Machine Learning + MLflow',
    'Azure Key Vault (key & secret management)',
    'Azure SQL / PostgreSQL / Cosmos DB',
    'Snowflake / Databricks',
    'Graph databases (Neo4j / Cosmos DB Gremlin)',
    'Terraform (IaC)',
    'OpenTelemetry + Application Insights (audit & observability)',
    'Open chemistry data formats (SDF, MOL, SMILES, InChI)',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered with IP protection, data discipline, and audit awareness for discovery work',
    highlightText: 'IP protection, data discipline, and audit awareness',
    statusText:
      'Engineering posture aligned with the practices common in GLP, GxP, 21 CFR Part 11, FDA GMLP, HIPAA, and GDPR environments — applied to discovery software that feeds the downstream regulated chain',
    pillars: [
      {
        icon: 'Lock',
        title: 'Chemistry IP Inside a Defined Boundary',
        description:
          'Compound structures, registration data, assay results, and generative outputs are handled inside an IP boundary your IT and security teams configure. Generative and ML pipelines are designed so proprietary chemistry is not silently used to train external models.',
      },
      {
        icon: 'FileCheck',
        title: 'Data Discipline Your Downstream QA Can Read',
        description:
          'Schema-level lineage, immutable audit records, controlled chemistry vocabularies, and database-level constraints — applied so research data stays attributable and contemporaneous when your QA, GLP, and IND-enabling teams pick it up later.',
      },
      {
        icon: 'GitBranch',
        title: 'Chemistry ML Lifecycle Artifacts Your QA Can Review',
        description:
          'Model cards, training data fingerprints, evaluation harnesses, drift monitoring, and change-control logs for every chemistry model — every prediction arrives with a documented lifecycle your chemists and reviewers can read.',
      },
    ],
    badges: [
      'GLP',
      'GxP',
      '21 CFR Part 11',
      'FDA GMLP',
      'HIPAA',
      'GDPR',
      'SOC 2 (design awareness)',
    ],
  },

  imageFeatures: [
    {
      heading: 'In-Silico Screening, Inside Your IP Boundary',
      description:
        'Virtual screening, docking, and similarity workflows orchestrated inside a tenancy your IT and security teams configure — so your chemists can move from query to ranked shortlist without exposing proprietary structures to external models.',
      image: {
        src: '/images/solutions/drug-discovery/feature-1.jpg',
        alt: 'Medicinal chemist using a tablet at the bench to annotate experimental results from a screening plate',
      },
    },
    {
      heading: 'Property and ADMET Signals, Earlier in the Workflow',
      description:
        'ADMET, selectivity, and physicochemical prediction surfaced beside the chemist’s design view — with model cards, confidence reporting, and lineage on every score, so your team sees the chemistry behind the number, not just the number.',
      image: {
        src: '/images/solutions/drug-discovery/feature-2.jpg',
        alt: 'Researcher in lab safety eyewear focused on a screening assay during a discovery experiment',
      },
    },
  ],

  relatedPages: [
    {
      title: 'AI for Pharma & Biotech',
      description:
        'Drug discovery is one of three software pillars in our pharma practice. The broader AI Pharma engagement also covers clinical operations tooling and healthcare AI software — the same engineering foundation, applied across your full R&D-to-clinical chain.',
      href: '/solutions/ai-pharma',
      icon: 'Microscope',
      pageType: 'solution',
    },
    {
      title: 'Generative AI Engineering',
      description:
        'Bringing generative chemistry, retrieval over your protocols and literature, or scaffold-generation tooling into discovery? Our generative AI practice is where the IP-boundary, evaluation harness, and grounding patterns behind this page are engineered.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
    {
      title: 'Data Engineering',
      description:
        'Discovery software is only as trustworthy as the data fabric underneath it. Our data engineering practice builds the cheminformatics, assay, and research-data lineage layer this platform reads from — your QA team can audit the pipeline end-to-end.',
      href: '/services/data-engineering',
      icon: 'Database',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'How does drug discovery software fit alongside our existing ELN, LIMS, registration, and cheminformatics stack?',
      answer:
        'Our platforms are designed to coexist with the ELN, LIMS, registration, and chemistry tooling your scientists already use — connecting via documented APIs and standard chemistry data formats (SDF, MOL, SMILES, InChI, and the integration endpoints those systems expose). Your IT and integration teams own the actual connections into your validated tools; we own the discovery-side application logic, the data fabric beneath it, and the chemist-facing UI on top. We do not claim partnerships, certifications, or pre-built integrations with any third-party ELN, LIMS, or cheminformatics vendor — every connector is engineered to your environment.',
    },
    {
      question:
        'How is our proprietary chemistry IP protected when AI and ML are in the loop?',
      answer:
        'Compound structures, registration data, assay results, and any generative outputs are handled inside an IP boundary your IT and security teams define. Generative and ML pipelines are configured so proprietary chemistry is not silently used to train external models — the boundary, the tenancy, and the data-flow rules are written into the architecture from day one and reviewable by your security function. Training pipelines use scoped, internal datasets; retrieval and inference run inside the tenancy you control. The engineering practices we apply are aligned with what customers in regulated research environments typically expect, but we make no compliance certifications on your behalf.',
    },
    {
      question:
        'Can your AI/ML models be trusted for hit-to-lead and lead-optimization decisions?',
      answer:
        'Every chemistry model we ship arrives with a documented lifecycle — model card, training data lineage, evaluation harness results, confidence reporting, and change-control history. ADMET, selectivity, and property predictions surface alongside the data and model lineage behind them, not as bare scores. The role of the model is to support your chemists’ design decisions, not replace them — confidence thresholds, human-in-the-loop review patterns, and clinician- or chemist-facing explainability hooks are first-class engineering features. Your scientific leadership decides how the outputs are used.',
    },
    {
      question:
        'Does pre-clinical discovery software need to be 21 CFR Part 11 or GLP compliant?',
      answer:
        'Most discovery and early lead optimization work sits before GLP nonclinical safety, so 21 CFR Part 11 and full GxP validation are usually not required for the discovery platform itself. But the data, models, and audit trail you build during discovery eventually flow into GLP nonclinical, IND-enabling, and regulated downstream work — and your QA team will ask to trace it. We engineer the platform with audit-trail logging, lineage, role-scoped access, and lifecycle artifacts your QA team can use as inputs if and when GLP / GxP applicability is established. Validation execution, GLP determination, and any regulatory submission remain with your QA and regulatory functions.',
    },
    {
      question:
        'What does a typical drug discovery engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by program and are defined during discovery — we do not quote fixed durations or fixed scientific outcomes on a public page. Discovery is where we map your computational and medicinal chemistry workflows end to end, audit data readiness across your ELN / LIMS / registration / chemistry stack, and frame the engineering and integration shape before any production-bound code is written. After discovery, the build is typically phased so the highest-priority capability (for example, an in-silico screening workspace or an ADMET prediction service) goes live first and your team can review the platform before later phases land.',
    },
    {
      question:
        'Can you build platforms for ADMET prediction, generative chemistry, or virtual screening specifically?',
      answer:
        'Yes — each of those is a candidate engagement shape under this practice. ADMET and property-prediction platforms wrap your internal and selected published models with batch scoring, model cards, confidence reporting, and explainability hooks. Generative chemistry tooling is engineered with retrieval over your internal sources, IP-boundary controls, and evaluation harnesses that track factuality and synthetic accessibility over time. Virtual screening platforms orchestrate library design, docking, similarity, and pharmacophore workflows alongside your chemists’ existing tools. We engineer the software; your chemistry and informatics leadership choose which underlying scientific approaches and reference models to bring inside the platform, and your team owns the scientific interpretation of every output.',
    },
  ],

  cta: {
    title: 'Building discovery software around your chemistry stack?',
    description:
      'Book a free 30-minute discovery call. We will review your computational and medicinal chemistry workflows, talk through the engineering and integration shape against the ELN, LIMS, registration, and chemistry tooling you already run, and outline a realistic scope. Scientific direction and IP governance remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the discovery spine', href: '#signature' },
  },

  _unverified: [
    'imageFeatures and hero.heroImage — three photos in public/images/solutions/drug-discovery/ are temporary copies of the ai-pharma photos to keep the page rendering and the build green. Before publish, replace hero.jpg with a computational-chemistry / molecular-visualization scene, feature-1.jpg with a medicinal-chemist-at-bench scene aligned to in-silico screening copy, and feature-2.jpg with an assay / screening-plate scene aligned to ADMET copy. Confirm Unsplash licensing on the chosen photos.',
    'Entire page is written as capability framing with explicit customer ownership of scientific validation, GLP determination, and any regulatory submission. Legal review recommended before publish to confirm liability framing on the chemistry-IP and AI-decisioning claims.',
    'complianceSpotlight.badges — framework names (GLP, GxP, 21 CFR Part 11, FDA GMLP, HIPAA, GDPR, SOC 2) retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No vendor names retained anywhere on the page (no Schrödinger, OpenEye, Certara, ChemAxon, Dotmatics, Benchling, BIOVIA, RDKit, BioNeMo, AlphaFold, Boltz, Chai, or ELN / LIMS vendor names). Verify by grep before publish.',
  ],
};

export default drugDiscovery;
