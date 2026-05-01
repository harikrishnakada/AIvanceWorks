import type { SolutionPageData } from '@/types/pages';

// Archetype B (Technical Service) with cherry-pick from C: roleBoundary section.
//
// Rewritten 2026-04-30 (deregulated). Plan: .agents/plans/financial-document-management-rewrite.md
//
// Old positioning (archived): Archetype C (Regulated Solution). Buyer was CCO
//   at a mid-market regulated US financial firm. Framing was "books-and-records
//   that survive the exam — SEC 17a-4(f) WORM-or-audit-trail, FINRA 4511,
//   BSA/AML, SOX, GLBA compliant by design."
//
// New positioning: AIvanceWorks is an engineering services firm that builds,
//   integrates, and embeds document management platforms across regulated
//   industries — this page covers our financial-services practice. We do not
//   act as a books-and-records vendor of record, do not provide regulatory
//   advice, do not provide audit attestation. The platform is owned by the
//   client; the regulatory program is owned by the client's compliance team.
//
// New buyer mix (operator-led with vendor track):
//   PRIMARY (operator) — CTO / Head of Operations / VP Engineering at a
//     wirehouse, regional-bank wealth division, RIA, broker-dealer, lender, or
//     wealth firm. Mandate: modernize document operations across CRM,
//     custodian, OMS, lending, and M365.
//   SECONDARY (vendor) — CTO at a financial SaaS vendor (advisor-tech,
//     lending-tech, AML-tech, wealth-tech) embedding DMS into their product.
//
// Three offerings (featureGrid tiles):
//   1. DMS Modernization for Financial Firms (operator)
//   2. Embedded Document Management for Financial SaaS (vendor)
//   3. Intelligent Document Processing & Capture (both)
//
// Build OR integrate posture: per-engagement decision. Operator engagements
//   typically integrate-and-extend M365/Purview, iManage Work, NetDocuments,
//   M-Files, Box for Financial Services, Laserfiche, or Hyland OnBase. Vendor
//   engagements typically build cloud-native on Azure Blob immutable / S3
//   Object Lock / GCP Cloud Storage Bucket Lock. Document AI runs across both.
//
// Constitution deviations recorded per §12.4 (small deviations — no amendment
// required):
//   1. ARCHETYPE SHIFT — was C (Regulated, CCO buyer), now B with C cherry-pick
//      (Technical, operator-CTO + vendor-CTO mixed buyer).
//   2. complianceSpotlight DROPPED — folded into roleBoundary bullet 3 +
//      one in-line plumbing reference. No longer the page's trust gate.
//   3. complianceDeepDive DROPPED — operator's CCO is a consumer, not the
//      buyer. Compliance plumbing surfaces in role-boundary + FAQ Q3 only.
//   4. benefitsGrid DROPPED — absorbed into the three offering tiles +
//      signature argument + integrations panel. Mirrors digital-banking-wallets.
//   5. roleBoundary ADDED but POSITIVELY FRAMED — same component as
//      digital-banking-wallets, content inverted from "what we do not do" to
//      "how we engage." Self-challenged per §9.6 (see spec §2.7 rationale).
//   6. BooksAndRecordsControlPlane SIGNATURE REFRAMED IN PLACE — same file +
//      registry entry preserved (§8.4); doc block + tile content + band/
//      connector labels rewritten for operator-and-vendor read.
//   7. SECTION COUNT = 11 — overshoots Archetype B's 8–10 by 1; matches the
//      accepted deviation in wealth-investment-management.ts. Justified by
//      multi-buyer breadth requiring offering tiles + integration depth +
//      process + engagement-model + image proof.
//   8. imageFeatures RETAINED — existing photos at /public/images/solutions/
//      financial-document-management/ fit the deregulated positioning; alt
//      text rewritten from "compliance team" framing to records & ops.
//   9. relatedPages SERVICES-ONLY per §10 default — three cross-links
//      (nlp-document-ai, application-modernization, security-compliance).
//      wealth-investment-management same-vertical peer NOT cross-linked
//      (would narrow the page's dual-buyer reach).

const financialDocumentManagement: SolutionPageData = {
  slug: 'financial-document-management',
  title:
    'Document Management Engineering for Financial Firms & Financial SaaS Vendors',

  shortDescription:
    "Engineering services for financial firms modernizing document operations and SaaS vendors embedding records into their products. Three offerings: DMS Modernization (extend M365/Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase, or run a strangler-fig migration off SharePoint sprawl); Embedded Document Management for Financial SaaS (cloud-native build on Azure Blob immutable / S3 Object Lock / GCS Bucket Lock); and Intelligent Document Processing & Capture (OCR, classification, extraction).",

  metaTitle: 'Document Management for Financial Services | Modernize, Embed, Integrate',
  metaDescription:
    'Document management engineering for financial firms and financial SaaS vendors. We modernize, embed, or integrate the DMS your stack needs — built or extended.',
  keywords: [
    'document management engineering financial services',
    'embedded document management financial SaaS',
    'iManage integration financial services',
    'NetDocuments financial services',
    'M365 Purview financial services',
    'M-Files financial services',
    'Box for Financial Services',
    'intelligent document processing financial services',
    'document AI financial services',
    'DMS modernization financial firms',
    'cloud-native records platform',
    'multi-tenant DMS for SaaS',
    'Azure Blob immutable records',
    'S3 Object Lock records',
    'document management for RIAs and broker-dealers',
    'document management for wealth firms',
  ],
  canonicalPath: '/solutions/financial-document-management',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    {
      label: 'Document Management',
      href: '/solutions/financial-document-management',
    },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'signature',
    'integrationsPanel',
    'processTimeline',
    'roleBoundary',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'fintech',
  signatureComponent: 'BooksAndRecordsControlPlane',

  hero: {
    badge: 'Finance Solutions',
    headline: 'Document management engineered into your firm.',
    subhead:
      'For financial firms modernizing document operations and SaaS vendors embedding records into their products — three engineering paths: DMS modernization, embedded document management, and intelligent document processing.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the document control plane', href: '#signature' },
    heroImage: {
      src: '/images/solutions/financial-document-management/hero.jpg',
      alt: 'Records and operations professional reviewing documents on a tablet in a modern wealth management workspace',
    },
    metrics: [
      {
        value: 'Three Paths',
        label: 'Modernize · Embed · Capture',
        description: 'DMS Modernization, Embedded DMS for SaaS, Intelligent Document Processing',
      },
      {
        value: 'Build or Extend',
        label: 'Cloud-native or DMS-platform-integrated',
        description: 'Per engagement — Azure Blob immutable / S3 Object Lock, or extend M365 / iManage / NetDocuments',
      },
      {
        value: 'Integration-First',
        label: 'CRM, custodian, OMS, lending, M365, eSign',
        description: 'Salesforce FSC / Wealthbox / Redtail, Schwab / Fidelity / Pershing, Orion / Tamarac, nCino / Encompass, DocuSign',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'Three Offering Paths',
      label: 'Modernize · Embed · Capture',
      description:
        'DMS Modernization for financial firms, Embedded Document Management for financial SaaS vendors, and Intelligent Document Processing & Capture across both — three coherent engineering paths, one shared engineering bench.',
    },
    {
      value: 'Build or Extend',
      label: 'Cloud-native or DMS-platform-integrated',
      description:
        'Per-engagement decision: cloud-native records layer on Azure Blob immutable tier, AWS S3 Object Lock, or GCP Cloud Storage Bucket Lock — or extension of the DMS your firm already runs (M365 + Purview, iManage Work, NetDocuments, M-Files, Box for Financial Services, Laserfiche, Hyland OnBase).',
    },
    {
      value: 'Integration-First',
      label: 'CRM, custodian, OMS, lending, M365, eSign',
      description:
        'Built to ingest from Salesforce Financial Services Cloud, Wealthbox, Redtail; Orion, Tamarac, Black Diamond; Schwab, Fidelity, Pershing; nCino, Encompass, Calyx; Microsoft 365; DocuSign and Adobe Sign.',
    },
    {
      value: 'Compliance-Aware Engineering',
      label: 'Alongside your compliance team',
      description:
        "Your compliance team defines the retention matrix, policies, and audit program; we engineer the platform that enforces them — and coordinate with your SOC 2 / SOC 1 / ISO audit firm on the engineering artifacts they need to attest against.",
    },
  ],

  features: [
    {
      icon: 'RefreshCw',
      title: 'DMS Modernization for Financial Firms',
      description:
        "For operators replacing SharePoint sprawl, network shares, or a legacy DMS that doesn't integrate with the rest of the stack. We extend the platform you already run — M365 + Microsoft Purview, iManage Work, NetDocuments, M-Files, Box for Financial Services, Laserfiche, or Hyland OnBase — wiring it into Salesforce Financial Services Cloud / Wealthbox / Redtail, custodian feeds (Schwab / Fidelity / Pershing), Orion / Tamarac / Black Diamond, nCino / Encompass / Calyx, and DocuSign / Adobe Sign with classification, retention rules, hold workflows, and audit trail. Or we run a strangler-fig migration off SharePoint sprawl onto a cloud-native records layer your firm owns end-to-end. Your compliance team defines the rules; we engineer the platform that enforces them.",
    },
    {
      icon: 'Layers',
      title: 'Embedded Document Management for Financial SaaS',
      description:
        "For SaaS vendors whose financial-firm customers keep asking for the same multi-tenant records features — retention rules, legal hold APIs, audit history, immutable storage. We build a cloud-native records layer inside your product, on Azure Blob Storage immutable tiers, AWS S3 with Object Lock, or GCP Cloud Storage Bucket Lock. Multi-tenant retention engine, hold-and-release APIs, audit trail export, and identity-aware document services that compose into your existing workflow and customer-tenant model. Designed to satisfy your customer firm's compliance program; the vendor doesn't carry the regulatory exposure.",
    },
    {
      icon: 'Brain',
      title: 'Intelligent Document Processing & Capture',
      description:
        'Classification is the gate — bad metadata at ingestion breaks retention, search, supervisory review, and everything downstream. We build the OCR + extraction + entity-resolution + classification pipeline running on Azure AI Document Intelligence, AWS Textract, GCP Document AI, or custom OCR + classification models (Tesseract, layout transformers) where data residency or cost requires. Pre-trained for financial document types: KYC packets, advisory agreements, account opening forms, suitability questionnaires, trade confirmations, loan disclosures, AML CDD records, supervisory communications. Plugs into either offering above — same pipeline, different consumer.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Document Landscape Mapping',
      description:
        "We inventory document types, source systems (CRM, custodian, OMS, lending, M365, existing DMS), the retention matrix as your compliance team defines it, integration estate, and current-state gaps. Decide build-vs-extend per document type — does this class fit an extension of M365 / Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, or Hyland OnBase, or does it want a cloud-native build on Azure Blob immutable / S3 Object Lock / GCS Bucket Lock?",
      duration: '2–3 weeks',
      deliverable:
        'Document taxonomy, retention rule matrix as configured by your compliance team, integration inventory, build-vs-extend decision per document type, prioritized scope',
    },
    {
      title: 'Architecture, Classification Schema & Integration Design',
      description:
        'Finalize storage substrate per document type, the classification taxonomy, retention rule encoding, hold framework, audit log spec, and integration contracts. For vendor (embedded SaaS) engagements we add multi-tenant data-isolation design and embedding-API surface; for operator engagements we add supervisory review surfaces and the audit-export runbook for engagements that require it.',
      duration: '1–2 weeks',
      deliverable:
        'Storage substrate decision per document type, classification schema, retention rule spec, hold framework, integration contracts, audit-export runbook (where applicable)',
    },
    {
      title: 'Build, Integrate & Embed',
      description:
        'Full-stack development. For operator engagements: extend the DMS platform via its API (M365 Graph + Purview, iManage Work API, NetDocuments REST, M-Files API, Box API, Laserfiche API, Hyland OnBase API) or stand up the cloud-native records layer; build source-system integrations (CRM / custodian / OMS / lending / M365 / eSign), document AI pipeline, retention/hold/audit modules. For vendor engagements: build the multi-tenant records layer inside your product on Azure Blob immutable / S3 Object Lock / GCS Bucket Lock with embedding APIs. Bi-weekly demos to compliance, operations, and IT.',
      duration: '10–16 weeks',
      deliverable:
        'Functional platform in staging, source-system integrations verified, document AI pipeline tested, retention engine and audit log validated, CI/CD pipeline with separation-of-duties controls',
    },
    {
      title: 'Migration & Reconciliation',
      description:
        'Extract, classify, and migrate existing documents from prior DMS, SharePoint, network shares, custodian archives, and paper sources with row-level reconciliation reporting. Validate retention rule application, metadata completeness, and audit log integrity across all migrated documents before any cutover. Source-of-truth reconciliation between the migrated platform and originating systems is signed off in writing.',
      duration: '3–6 weeks',
      deliverable:
        'Migrated documents with reconciliation sign-off, retention validation report, migration audit log, source-of-truth reconciliation, rollback plan',
    },
    {
      title: 'UAT, Training & Phased Go-Live',
      description:
        'UAT with operations, compliance, and IT to verify document workflows, retention application, hold scoping, audit log queries, and integration round-trips. Role-specific training. Phased rollout by document type, business line, jurisdiction, or tenant. 30-day hypercare with daily standups during the first two weeks.',
      duration: '2–3 weeks',
      deliverable:
        'Production deployment, role-based training materials, runbook handover, supervisory and operations playbooks, 30-day hypercare SLA',
    },
  ],

  capabilities: [
    'Document capture and ingestion from CRM, custodian, OMS, lending, M365, eSign, and existing DMS platforms',
    'AI-assisted classification, OCR, and metadata extraction',
    "Configurable retention engine — rules driven by your compliance team's matrix",
    'Immutable storage on Azure Blob immutable tier, AWS S3 Object Lock, or GCP Cloud Storage Bucket Lock — or extension of M365 / Purview, iManage Work, NetDocuments retention features',
    'Legal and supervisory hold with chain-of-custody export',
    'Tamper-evident audit log (every access, modification, share, hold action, and destruction)',
    'Role-based access control with review and approval surfaces',
    'MFA and identity integration (Entra ID / AWS Cognito / Auth0)',
    'Multi-tenant document services for embedded SaaS deployments',
    'DMS-platform extension (M365 Graph + Purview, iManage Work API, NetDocuments REST, M-Files API, Box API, Laserfiche, Hyland OnBase)',
    'WCAG 2.1 AA accessibility compliance',
  ],

  technologies: [
    'React / Next.js',
    '.NET / ASP.NET Core',
    'Node.js / TypeScript',
    'Python (Document AI / classification)',
    'Azure App Service / AWS Fargate',
    'Azure Blob Storage (immutable tier) / AWS S3 (Object Lock) / GCP Cloud Storage (Bucket Lock)',
    'Azure AI Document Intelligence / AWS Textract / GCP Document AI',
    'Azure SQL / PostgreSQL',
    'Microsoft Entra ID / AWS Cognito / Auth0',
    'Azure Key Vault / AWS KMS',
    'Azure Service Bus / AWS SQS',
    'Microsoft Graph API',
    'Terraform / Bicep',
    'OpenTelemetry / Application Insights',
  ],

  integrations: [
    {
      name: 'M365 + Microsoft Purview',
      category: 'DMS Platform',
      connectionMethod: 'Microsoft Graph API + Purview API',
      capabilities: [
        'Email / Teams / SharePoint document ingestion and classification',
        'Retention label and policy mapping to records vault rules',
        'Permission inheritance from Entra ID groups',
      ],
    },
    {
      name: 'iManage Work',
      category: 'DMS Platform',
      connectionMethod: 'iManage REST API',
      capabilities: [
        'Workspace and folder structure integration',
        'Document version and metadata sync',
        'Records-management module extension',
      ],
    },
    {
      name: 'NetDocuments / M-Files / Box for Financial Services',
      category: 'DMS Platform',
      connectionMethod: 'REST API per platform',
      capabilities: [
        'Cabinet / vault / workspace integration',
        'Metadata-driven classification mapping',
        'Retention and legal-hold workflow extension',
      ],
    },
    {
      name: 'Salesforce Financial Services Cloud / Wealthbox / Redtail / Practifi',
      category: 'CRM',
      connectionMethod: 'REST API + platform events / webhooks',
      capabilities: [
        'Client and household record ingestion with relationship context',
        'Advisory agreement and KYC document capture',
        'Bi-directional document reference linking',
      ],
    },
    {
      name: 'Orion / Tamarac / Black Diamond / Addepar / eMoney',
      category: 'Portfolio Management',
      connectionMethod: 'REST API + scheduled file extract',
      capabilities: [
        'Performance reports and statements ingestion',
        'Account-level document linking',
        'Retention rule application per advisory account',
      ],
    },
    {
      name: 'Schwab / Fidelity / Pershing',
      category: 'Custodian',
      connectionMethod: 'SFTP / direct feed / partner API',
      capabilities: [
        'Custodian-generated statement and confirm ingestion',
        'Account opening packet capture and indexing',
        'Trade confirmation lifecycle tracking',
      ],
    },
    {
      name: 'nCino / Encompass / Calyx',
      category: 'Lending Origination',
      connectionMethod: 'REST API + webhook events',
      capabilities: [
        'Loan file capture from origination through close',
        'Disclosure and TRID document indexing',
        'Servicing-handoff document continuity',
      ],
    },
    {
      name: 'DocuSign / Adobe Sign',
      category: 'eSignature',
      connectionMethod: 'REST API + webhook',
      capabilities: [
        'Executed agreement auto-filing to the records platform',
        'Audit envelope data capture and retention assignment',
        'Signed-package retention scheduling at completion',
      ],
    },
    {
      name: 'Azure Blob Storage (immutable tier)',
      category: 'Storage Substrate',
      connectionMethod: 'Azure SDK (Java / .NET / Python / Node)',
      capabilities: [
        'Time-based retention policies enforced at the storage layer',
        'Legal hold lock per blob with audit',
        'Immutable storage substrate for cloud-native records builds',
      ],
    },
    {
      name: 'AWS S3 (Object Lock)',
      category: 'Storage Substrate',
      connectionMethod: 'AWS SDK + S3 Object Lock APIs',
      capabilities: [
        'Compliance-mode and governance-mode retention',
        'Legal hold per object with audit',
        'Immutable storage substrate for cloud-native records builds',
      ],
    },
    {
      name: 'GCP Cloud Storage (Bucket Lock)',
      category: 'Storage Substrate',
      connectionMethod: 'GCP SDK + Bucket Lock APIs',
      capabilities: [
        'Bucket-level retention policies enforced at the storage layer',
        'Legal hold per object',
        'Immutable storage substrate for cloud-native records builds',
      ],
    },
    {
      name: 'Azure AI Document Intelligence / AWS Textract / GCP Document AI',
      category: 'Document AI',
      connectionMethod: 'REST API per provider',
      capabilities: [
        'OCR and structured-form extraction across financial document types',
        'Custom-trained models for KYC, advisory agreements, loan files, suitability forms',
        'Output feeds the classification engine and retention rule mapping',
      ],
    },
  ],

  imageFeatures: [
    {
      heading: 'Every document, retrievable in seconds.',
      description:
        'Pull any record and see its complete access history — who viewed, who shared, who held — without an emergency search across SharePoint, the CRM, and the network share.',
      image: {
        src: '/images/solutions/financial-document-management/feature-1.jpg',
        alt: 'Financial-services professional reviewing records and access history at a workstation',
      },
    },
    {
      heading: 'One platform across every source system.',
      description:
        'Account opening packets, advisory agreements, trade confirms, lending files, and supervisory communications in one classified vault — not fragmented across five systems.',
      image: {
        src: '/images/solutions/financial-document-management/feature-2.jpg',
        alt: 'Wealth management operations and IT team reviewing document workflows together at a conference table',
      },
    },
  ],

  roleBoundary: {
    eyebrow: 'How we engage',
    heading: 'You own the platform. We engineer it.',
    intro:
      'We are an engineering services firm. The platform we build or extend lives in your tenant, on your cloud account, or inside your product. We deliver code, configuration, and integration — and partner with your compliance team, IT, audit firm, and DMS / CRM / custodian / OMS vendors throughout.',
    bullets: [
      'Code, configuration, and integration — built, tested, documented, and version-controlled in your repository.',
      'Tenant ownership — the records vault sits in your Azure subscription, AWS account, M365 tenant, or SaaS product. We hand off the keys.',
      'Compliance-aware engineering — your compliance team defines the retention matrix, policies, and audit program; we make the platform enforce them.',
      'Collaborative delivery — bi-weekly demos to compliance, operations, and IT during the build; runbook walkthroughs and knowledge transfer at handover.',
      'Audit-firm coordination — we provide the engineering artifacts (architecture, data flow, control descriptions) your SOC 2 / SOC 1 / ISO firm needs to attest against.',
      "Vendor and platform partnership — we extend M365 / Purview, iManage, NetDocuments, M-Files, Box, and integrate with your custodian / CRM / OMS / lending vendors. We don't replace those relationships.",
    ],
    collaboration:
      'Built alongside your compliance team, supervisory principals, IT and security team, external auditors, and DMS / CRM / custodian platform vendors.',
  },

  relatedPages: [
    {
      title: 'NLP & Document AI',
      description:
        'Classification is the gate that keeps the records platform usable. Our document-AI engagement designs the OCR, extraction, and classification pipeline that tags KYC files, advisory agreements, trade confirms, loan disclosures, and supervisory communications correctly at ingestion — so the retention engine, search, and supervisory review have the right metadata to work with.',
      href: '/services/nlp-document-ai',
      icon: 'FileText',
      pageType: 'service',
    },
    {
      title: 'Application Modernization',
      description:
        "Most operator engagements start by escaping SharePoint sprawl, network shares, or a legacy DMS that doesn't integrate. Our modernization engagement runs the strangler-fig migration that retires the old store while the new records platform takes over — without a cutover surprise in the middle.",
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'A records platform is one layer of the security stack. Our security & compliance engagement covers identity, secrets, and Zero-Trust controls across every system your team and your customers rely on — so the records platform sits inside a hardened identity and access perimeter, not next to one.',
      href: '/services/security-compliance',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Do you build from scratch, or extend the DMS we already run?',
      answer:
        "Both — the decision is per-engagement and per-document-type. Operator engagements typically integrate-and-extend the DMS your firm already runs (M365 + Microsoft Purview, iManage Work, NetDocuments, M-Files, Box for Financial Services, Laserfiche, or Hyland OnBase), or run a strangler-fig migration off SharePoint sprawl onto a cloud-native records layer your firm owns end-to-end. Vendor engagements typically build cloud-native inside your product on Azure Blob immutable, AWS S3 Object Lock, or GCP Cloud Storage Bucket Lock. We make the call during discovery, document type by document type, against the platforms you already license and the workflows you actually run.",
    },
    {
      question: "We're a SaaS vendor embedding records in our product. How does the embedded option work?",
      answer:
        "A cloud-native records layer inside your codebase, on top of Azure Blob immutable, AWS S3 Object Lock, or GCP Cloud Storage Bucket Lock as the storage substrate. Multi-tenant retention engine, hold-and-release APIs, audit trail export, and identity-aware document services that compose into your existing workflow and customer-tenant model. The records layer operates as a module of your product, not a separate platform your customer has to license. The platform is designed to satisfy your customer firm's compliance program; the vendor doesn't carry the regulatory exposure.",
    },
    {
      question: 'How does the platform handle complex retention rules across multiple regulations and jurisdictions?',
      answer:
        "Retention rules configured as a matrix during discovery — each document type mapped to its applicable retention period. Your compliance team defines the matrix (which regulations apply where — SEC 17a-4, FINRA 4511, IRS, BSA/AML, SOX, GLBA, NYDFS, state, or whatever your firm's program calls for); we engineer the engine that enforces it. Where multiple regulations apply, the longest required period governs. Rules are managed by compliance administrators through a configuration interface — no code change is required when a regulation updates or your firm registers in a new state.",
    },
    {
      question: 'How does the platform integrate with our CRM, custodian feeds, lending platform, and M365?',
      answer:
        'Integration patterns by source: REST APIs and platform events for CRMs (Salesforce Financial Services Cloud, Wealthbox, Redtail, Practifi); REST or scheduled file extracts for portfolio platforms (Orion, Tamarac, Black Diamond, Addepar, eMoney); SFTP and partner feeds for custodians (Schwab, Fidelity, Pershing); REST and webhooks for lending (nCino, Encompass, Calyx); Microsoft Graph for M365 / SharePoint; webhooks for eSignature (DocuSign, Adobe Sign). The source system stays the system of record for the originating workflow; the records platform becomes the system of record for the document and its lifecycle.',
    },
    {
      question: 'What does the audit log capture, and how does legal hold scope to a single matter or client?',
      answer:
        'The audit log captures every record access, download, share, modification, hold action, and destruction with timestamp, actor identity, IP, source system, and action type — protected against modification and exportable as structured reports. Legal hold is scoped through the admin console by custodian, account, matter, date range, or keyword; records matching the scope are frozen until formally lifted, and records outside it continue through their normal lifecycle without disruption. Every hold placement, modification, and lift is logged with actor and timestamp, producing a chain-of-custody record that travels with any export.',
    },
    {
      question: 'What does an engagement typically cost and how long does it take?',
      answer:
        'A typical operator engagement (DMS Modernization) or vendor engagement (Embedded DMS for SaaS) runs 18–30 weeks from discovery to first-line production, depending on document landscape complexity, integration count, build-vs-extend decisions, and migration volume. Phased delivery — storage substrate, retention engine, audit log, and integrations come online before the full platform. A discovery engagement produces a realistic cost and timeline assessment grounded in your specific landscape, registrations, and integration estate — not a generic brochure number.',
    },
  ],

  cta: {
    title: 'Ready to modernize, embed, or integrate document management for your stack?',
    description:
      'Book a free 30-minute discovery call. We will review your document landscape, source systems, integration estate, retention requirements as your compliance team defines them, and audit-day exposure — then outline a realistic build-vs-extend scope and timeline for your engagement.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the document control plane', href: '#signature' },
  },

  _unverified: [
    'hero.metrics[*] — all three are capability-framed (Three Paths, Build or Extend, Integration-First). Greenfield-safe; no outcome claims.',
    'metricsStrip[*] — all four values are capability-framed (Three Offering Paths, Build or Extend, Integration-First, Compliance-Aware Engineering). Greenfield-safe.',
    'features[*] — three offering tiles. Tile prose names specific platforms (M365/Purview, iManage, NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase, Salesforce FSC, Schwab, Fidelity, Pershing, Orion, Tamarac, Black Diamond, nCino, Encompass, Calyx, Azure Blob immutable, S3 Object Lock, GCS Bucket Lock, Azure AI Document Intelligence, AWS Textract, GCP Document AI). Greenfield-honest "we build / we extend / we run" framing throughout. Confirm framing on Schwab/Fidelity/Pershing direct-feed access (partner-program credentials required) before publishing.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope. Confirm which integrations have been built in production vs. which are reference-implementation capability.',
    'processSteps[*].duration — phase durations sum to 18–30 weeks. Confirm against actual planned engagement structure.',
    'faqs[5] — 18–30 week engagement range; confirm against actual planned engagement structure.',
    'BooksAndRecordsControlPlane signature reframe — band labels and tile content are capability descriptions, not measured claims. Greenfield-safe; no numeric stats embedded.',
    'roleBoundary — positively framed engagement section. Six bullets describe deliverables and partnerships; no fabricated outcomes. Self-challenged per constitution §9.6 against the negative pattern from digital-banking-wallets.',
  ],
};

export default financialDocumentManagement;
