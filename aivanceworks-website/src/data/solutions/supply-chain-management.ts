import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Manufacturing & Life Sciences supply chain)
// Buyer: VP / Director of Supply Chain, Chief Supply Chain Officer (CSCO), or
//   Director of Global Logistics at a US pharmaceutical, biologics, medical
//   device, food & beverage, or specialty manufacturer with a multi-tier,
//   temperature-sensitive, lot-tracked supply chain.
//   Secondary: Director of S&OP / Planning, Director of Quality (GDP /
//   distribution), Director of Trade Compliance.
//
// Buyer mindset: "I get blamed every time a shipment is late, a lot is
//   recalled, a cold-chain excursion is missed, or a DSCSA / FSMA filing
//   surfaces a gap. I need a single chain of custody from supplier to
//   customer — not five disconnected dashboards stitched together by
//   spreadsheet."
//
// Top 3 buyer questions:
//   1. "Will I get one source of truth across our suppliers, contract
//       manufacturers, 3PLs, and carriers — or are we just buying another
//       silo to integrate later?"
//   2. "Can we actually see cold-chain excursions, lot-level trace, and
//       DSCSA / FSMA-relevant chain-of-custody data — not generic dashboards?"
//   3. "Will it coexist with our ERP, WMS, TMS, and OMS — without unwinding
//       integrations and master data we already validated?"
//
// Key trust issue: "Control tower" programs that promised end-to-end
//   visibility, took two years to stand up, surfaced no real exceptions, and
//   left the planners back in spreadsheets — while the integration bill kept
//   running.
//
// Liability stance (this page mirrors the LIMS / AI Pharma / EHR / MES
//   pattern; written under explicit user direction):
//   - We are a software engineering partner. DSCSA / FSMA filings, GDP
//     qualification, carrier qualification, customs / export filings, and
//     any regulatory or audit outcome are owned by the customer's Quality,
//     Trade Compliance, and Regulatory functions.
//   - No commercial SCM, control-tower, visibility, or planning vendor names
//     anywhere on the page (no SAP IBP / SAP SCM, Oracle SCM Cloud, Blue
//     Yonder, Kinaxis, o9, Manhattan Associates, Coupa, e2open, Project44,
//     FourKites, Tive, Sensitech, Roambee, BluJay, GEP, etc.).
//   - No ERP / WMS / TMS / OMS vendor names (no SAP, Oracle, Infor, JDA,
//     Microsoft Dynamics, NetSuite, Manhattan, Körber, etc.).
//   - No carrier, broker, or 3PL brand names.
//   - Framework names (DSCSA, FDA FSMA 204, GDP, USP <1079>, IATA CEIV
//     Pharma, ISO 28000, ISA-95, C-TPAT, 21 CFR Part 11 where electronic
//     records apply) are retained for audience signaling and SEO, but always
//     framed as engineering design awareness — never as certification or
//     compliance promises.
//   - No fixed durations, no fixed costs, no promised operational outcomes.
//
// Signature: SupplyChainControlTower — hierarchical / flow visualization
//   (§8.3 patterns 2 + 3). Six lifecycle stages (Plan → Source → Inbound →
//   Cold-Chain & Transit → Warehouse & Inventory → Deliver & Returns) on a
//   shared engineering foundation (event ingestion, lot/serial genealogy,
//   audit-ready chain of custody, partner coexistence). Framework chips
//   render as a top row.
//
// Composition mirrors the MES precedent (same regulated buyer cluster, same
// liability stance):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → complianceSpotlight (warm) → signature (dark) →
//   complianceDeepDive (light) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from Archetype C recipe:
//   - No CaseStudySpotlight — greenfield; no verified SCM engagement yet.
//   - No IntegrationsPanel — liability stance forbids naming ERP, WMS, TMS,
//     OMS, carrier, or visibility-platform vendors. Integration capability
//     is woven into feature prose, capabilities list, and the signature
//     foundation bar instead.
//   - ComplianceSpotlight placed before signature as trust gate (same
//     pattern as LIMS, AI Pharma, EHR/EMR, HMS, MES).

const supplyChainManagement: SolutionPageData = {
  slug: 'supply-chain-management',
  title: 'Custom Supply Chain Management (SCM) Software',
  shortDescription:
    'Custom Supply Chain Management software for pharmaceutical, biologics, medical device, food & beverage, and specialty manufacturers — one chain of custody from supplier to customer, with cold-chain visibility, lot-level trace, and disruption alerts built around the way your network actually runs.',

  metaTitle:
    'Custom Supply Chain Management (SCM) Software | End-to-End Visibility & Cold-Chain',
  metaDescription:
    'Custom Supply Chain Management (SCM) software for pharma, life sciences, food & beverage, and regulated manufacturers. End-to-end visibility from raw-material sourcing to cold-chain logistics, lot/serial genealogy, FSMA / DSCSA-aware chain of custody, and disruption alerting — built around your ERP, WMS, TMS, and carrier network.',
  keywords: [
    'supply chain management software',
    'custom SCM software development',
    'supply chain control tower',
    'pharma supply chain software',
    'cold chain visibility software',
    'cold chain monitoring software',
    'DSCSA software',
    'FSMA 204 traceability software',
    'lot and serial traceability',
    'good distribution practice software',
    'GDP compliance software',
    'supply chain risk software',
    'logistics visibility software',
    'manufacturing supply chain software',
  ],
  canonicalPath: '/solutions/supply-chain-management',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Supply Chain Management', href: '/solutions/supply-chain-management' },
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
  signatureComponent: 'SupplyChainControlTower',

  hero: {
    badge: 'Manufacturing & Supply Chain Solutions',
    headline:
      'End-to-end supply-chain visibility — from raw material to last mile.',
    subhead:
      'Custom Supply Chain Management software for pharmaceutical, biologics, medical device, food & beverage, and specialty manufacturers. One chain of custody from supplier to customer — cold-chain temperatures, lot and serial trace, disruption alerts, and S&OP signals on a platform designed to coexist with the ERP, WMS, TMS, and carrier connections you already run.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the control tower', href: '#signature' },
    heroImage: {
      src: '/images/solutions/supply-chain-management/hero.jpg',
      alt: 'Supply chain planner reviewing a live shipment and cold-chain dashboard in a logistics operations center',
    },
    metrics: [
      {
        value: 'One chain of custody',
        label: 'Plan → source → make → move → deliver, in one view',
        description:
          'A single record per lot and per shipment that follows the goods from supplier to customer — so planners, quality, and trade compliance read the same trace, not five disconnected systems.',
      },
      {
        value: 'Cold-chain aware',
        label: 'Temperature, humidity & excursion alerts in context',
        description:
          'In-transit temperature, humidity, GPS, shock, and excursion events captured against each lot and shipment — surfaced as actionable work, not raw sensor noise.',
      },
      {
        value: 'Coexistence-first',
        label: 'Works with the ERP, WMS, TMS & carriers you already run',
        description:
          'Designed to coexist with your existing ERP, warehouse, transportation, order, and carrier systems via documented APIs and standard data formats — so master data and validated integrations stay put.',
      },
    ],
  },

  // Audience test (§9.5): a VP Supply Chain or CSCO reading these in 8 seconds
  // wants to know "will this give me real visibility, real exception handling,
  // and not force a rip-and-replace?" — not "will this pass an audit?" The
  // four values lead with chain of custody, exception handling, visibility,
  // and coexistence. DSCSA / FSMA / GDP framing lives mid-page in the
  // ComplianceSpotlight and DeepDive (§9.9).
  metricsStrip: [
    {
      value: 'Network-wide',
      label: 'One platform across suppliers, plants, 3PLs & carriers',
      description:
        'Suppliers, contract manufacturers, internal plants, warehouses, 3PLs, and carriers feed a single record per lot and per shipment — so planners, supply, and quality stop reconciling spreadsheets.',
    },
    {
      value: 'Exception-led',
      label: 'Disruptions surface as work, not dashboards',
      description:
        'Late POs, missed ASNs, cold-chain excursions, short shipments, and OTIF risk surface as ranked exceptions with owners, SLAs, and routing — instead of a wall of charts no one acts on.',
    },
    {
      value: 'Lot-level trace',
      label: 'Forward & backward genealogy as a query',
      description:
        'Lot, serial, and batch lineage across receiving, production consumption, transfer, and outbound — so recall, deviation, and complaint investigations are a query, not a multi-day spreadsheet exercise.',
    },
    {
      value: 'Coexistence-first',
      label: 'No rip-and-replace of your ERP, WMS, TMS or carrier links',
      description:
        'Designed to coexist with the ERP, WMS, TMS, OMS, EDI, and carrier connections you already run — your IT team controls the actual connectors, so existing master data and validated interfaces are preserved.',
    },
  ],

  // Features lead with what the supply-chain operating team gets (planning,
  // sourcing, inbound capture, cold-chain visibility, warehouse/inventory
  // discipline, deliver/returns). Compliance signals are woven in, not
  // headlined (§9.9). No vendor names anywhere.
  features: [
    {
      icon: 'LineChart',
      title: 'Demand, Supply & S&OP Signals',
      description:
        'Demand forecasts, supply commitments, capacity, and inventory positions reconciled into a single planning view — so planners, supply leaders, and commercial teams negotiate against the same numbers in a working S&OP cadence.',
    },
    {
      icon: 'Handshake',
      title: 'Supplier Onboarding & Performance',
      description:
        'Supplier records, qualification status, contract terms, POs, ASNs, on-time / in-full performance, and quality history — so sourcing and quality teams see supplier risk and reliability instead of fragmented PO data.',
    },
    {
      icon: 'PackageSearch',
      title: 'Inbound, Lot & Serial Capture',
      description:
        'Inbound shipments tracked from ASN through dock receipt — lot, serial, expiry, supplier reference, and shipping documentation linked at receipt so chain of custody starts at the door, not at the warehouse spreadsheet.',
    },
    {
      icon: 'Thermometer',
      title: 'Cold-Chain & In-Transit Visibility',
      description:
        'Carrier events, temperature, humidity, GPS, shock, and excursion alerts captured against each lot and shipment — engineered with awareness of GDP, USP <1079>, and IATA CEIV Pharma expectations. Carrier qualification and disposition stay with your Quality / GDP team.',
    },
    {
      icon: 'Warehouse',
      title: 'Warehouse & Inventory Choreography',
      description:
        'Lot-level inventory positions, FEFO pick logic, transfer orders, cycle counts, and expiry watchlists — so warehouses and 3PLs run against the same lot truth as planning, quality, and finance.',
    },
    {
      icon: 'RotateCcw',
      title: 'Outbound, Returns, Recalls & OTIF',
      description:
        'Outbound shipments, on-time / in-full tracking, customer returns, complaint linkage, and recall workflows — with an audited record of every actor, location, and transition so quality and customer-service teams act from the same evidence trail.',
    },
  ],

  benefits: [
    {
      icon: 'Eye',
      title: 'Real Visibility — Not Another Dashboard Page',
      description:
        'Lot and shipment state, cold-chain status, inbound/outbound exceptions, and supplier performance surfaced where planners, quality, and customer service work — instead of buried in five tools that nobody reconciles.',
    },
    {
      icon: 'AlertTriangle',
      title: 'Disruptions Surface as Work',
      description:
        'Late POs, missed ASNs, cold-chain excursions, OTIF risk, and inventory aging surface as ranked, owned exceptions with SLAs — so operations teams act on signal instead of scrolling through charts.',
    },
    {
      icon: 'Settings',
      title: 'Configured to Your Network — Not a Vendor Template',
      description:
        'Your supplier tiers, your distribution model, your cold-chain lanes, your reporting set. Workflows, fields, KPIs, and approvals are configured to the way your planners, buyers, warehouse, and quality teams actually work — not bent around someone else\'s product.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Chain-of-Custody Your QA & Inspectors Can Stand Behind',
      description:
        'Every lot, shipment, excursion, transfer, and disposition is captured with actor, timestamp, location, and conditions. The same engineering that gives your team live visibility also gives quality, regulatory, and customer auditors a continuous evidence trail.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Stack',
      description:
        'The platform is designed to coexist with the ERP, WMS, TMS, OMS, EDI, and carrier integrations you already run — your IT and integration teams control the connectors, so existing master data, contracts, and validated interfaces stay in place.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Network Mapping & Engineering Framing',
      description:
        'We walk your plan, source, make-coordination, move, and deliver workflows; inventory your existing ERP, WMS, TMS, OMS, EDI, supplier, and carrier connections; identify chain-of-custody, cold-chain, and exception-handling gaps; and frame the engineering and integration shape — before scoping the build. DSCSA, FSMA, GDP, and customs filing strategy stay with your Quality, Trade Compliance, and Regulatory functions.',
      duration: 'Scoped during discovery',
      deliverable:
        'Network map, current-state system inventory, chain-of-custody & cold-chain gap notes, prioritized engineering roadmap',
    },
    {
      title: 'Architecture & Engineering Plan',
      description:
        'Design the SCM platform architecture, lot/serial and shipment data model, event ingestion and exception engine, partner-onboarding model, audit-trail and access posture, and ERP/WMS/TMS/OMS integration surface alongside your IT, integration, security, and Quality stakeholders. Framework expectations (DSCSA, FSMA 204, GDP, USP <1079>, IATA CEIV Pharma, ISO 28000, ISA-95, C-TPAT) are built into the engineering plan as design awareness — not certification claims.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, lot/serial & shipment data model, event-driven exception design, security architecture, integration surface outline',
    },
    {
      title: 'Build & Iterate',
      description:
        'Iterative full-stack development of the SCM platform — planning view, supplier & PO, inbound capture, cold-chain & transit, warehouse & inventory, deliver & returns, and admin tooling — with engineering artifacts (test coverage, validation-support evidence, change logs) captured as part of the build. Lane-by-lane demos with planners, warehouse, and quality keep the platform anchored to real operational work.',
      duration: 'Phased per engagement',
      deliverable:
        'Working SCM modules in staging, engineering artifact set, configuration documentation, audit-trail dashboards',
    },
    {
      title: 'Integration & Handoff to Your QA / Trade-Compliance Function',
      description:
        'Connect to your existing ERP, WMS, TMS, OMS, EDI, supplier portals, and carrier / sensor feeds via documented APIs and standard data formats your IT team controls. Run UAT with planning, warehouse, quality, and trade-compliance stakeholders, and assemble the engineering documentation set your Quality and Compliance teams use as inputs into their own qualification, GDP, DSCSA, and FSMA traceability work. We do not author validation protocols, qualify carriers, or perform DSCSA / FSMA filings on your behalf.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, UAT sign-off, security test report, engineering documentation set for your compliance work',
    },
    {
      title: 'Phased Go-Live, Hypercare & Lifecycle Operations',
      description:
        'Lane-by-lane, supplier-tier-by-tier, or region-by-region go-live so a single corridor of your network can run on the new platform while the rest of the chain continues uninterrupted. An initial hypercare period covers monitoring, defect triage, change-control reviews, and tuning so the platform stays in a known state as your network, suppliers, and SLAs evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbooks, hypercare support',
    },
  ],

  capabilities: [
    'Lot, serial, and batch genealogy with forward & backward trace as a first-class query',
    'Event-driven exception engine — late PO, missed ASN, cold-chain excursion, OTIF risk',
    'Cold-chain visibility engineered with GDP, USP <1079>, and IATA CEIV Pharma awareness',
    'DSCSA-aware product identifier, transaction, and chain-of-ownership data structures',
    'FDA FSMA 204 traceability data points engineered into the inbound / outbound record',
    'Supplier onboarding, qualification status, performance scoring, and risk views',
    'Lot-level inventory across plants, warehouses, and 3PLs with FEFO pick logic',
    'Carrier event ingestion (temperature, humidity, GPS, shock) tied to lot and shipment',
    'Demand, supply, and S&OP signals reconciled to a single planning view',
    'Returns, complaints, and recall workflows linked to the chain of custody',
    'Role-scoped access for planning, sourcing, warehouse, quality, trade compliance, and admin',
    'Documented APIs and standard data formats for ERP, WMS, TMS, OMS, EDI, supplier & carrier integration',
    'WCAG 2.1 AA accessibility for planner, warehouse, and operations interfaces',
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
    'Azure Event Grid',
    'OpenTelemetry + Application Insights',
    'Terraform (IaC)',
    'Power BI Embedded',
  ],

  complianceSpotlight: {
    eyebrow: 'Engineering posture',
    title:
      'Engineered with chain-of-custody, cold-chain, and traceability awareness for regulated supply chains',
    highlightText: 'chain-of-custody, cold-chain, and traceability awareness',
    statusText:
      'Engineering posture aligned with practices common in DSCSA, FDA FSMA 204, GDP, USP <1079>, IATA CEIV Pharma, ISO 28000, ISA-95, and C-TPAT environments',
    pillars: [
      {
        icon: 'GitBranch',
        title: 'Lot, Serial & Batch Genealogy by Design',
        description:
          'Forward and backward genealogy, lot and serial linkage, supplier reference, and material consumption are engineered into the data model — so recall trace, deviation, or complaint investigation is a query, not a spreadsheet reconstruction.',
      },
      {
        icon: 'Thermometer',
        title: 'Cold-Chain & GDP Awareness',
        description:
          'Carrier event capture (temperature, humidity, GPS, shock, excursion) is engineered with awareness of GDP, USP <1079>, and IATA CEIV Pharma expectations. Carrier qualification, lane qualification, and disposition decisions stay with your Quality / GDP function.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Audit-Trail & Data-Integrity Discipline',
        description:
          'Schema-level lineage, immutable audit records, controlled vocabularies, and database-level constraints make supplier, PO, shipment, lot, and disposition data traceable for your Quality, Regulatory, customer-audit, and inspector reviewers.',
      },
    ],
    badges: [
      'DSCSA',
      'FDA FSMA 204',
      'GDP',
      'USP <1079>',
      'IATA CEIV Pharma',
      'ISO 28000',
      'ISA-95',
      'C-TPAT',
      '21 CFR Part 11 (where applicable)',
    ],
  },

  complianceDetail: {
    frameworks: [
      'DSCSA (Drug Supply Chain Security Act)',
      'FDA FSMA 204 (Food Traceability Final Rule)',
      'GDP (Good Distribution Practice)',
      'USP <1079> (Risks & Recommended Practices, Storage & Distribution)',
      'IATA CEIV Pharma (Air Cargo, Pharma)',
      'ISO 28000 (Supply Chain Security)',
      'ISA-95 (Enterprise–Control System integration)',
      'C-TPAT (Customs-Trade Partnership Against Terrorism)',
      '21 CFR Part 11 (Electronic Records & Signatures, where applicable)',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your compliance work',
        description:
          'We structure the build so your Quality, GDP, Trade Compliance, and Regulatory teams have the documentation, traceability, and test evidence they need for their own DSCSA, FSMA 204, GDP, and customs work. We do not author SOPs, qualify carriers, or perform regulatory filings on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'Audit-trail logging as an engineering default',
        description:
          'Every shipment, lot, transfer, excursion, disposition, and access event is logged with actor, timestamp, location, and conditions. Audit records are immutable at the database layer so your Quality, customer auditors, and regulators can read a continuous chain-of-custody history.',
      },
      {
        icon: 'GitBranch',
        title: 'Lot, serial & batch genealogy as a first-class feature',
        description:
          'Lot, serial, supplier reference, and batch linkage from receipt through transfer, production consumption, and outbound shipment are engineered into the data model — so recall trace, complaint follow-up, and FSMA 204 / DSCSA inquiries are queries against the audited record, not spreadsheet reconstructions.',
      },
      {
        icon: 'Thermometer',
        title: 'Cold-chain & in-transit data integrity',
        description:
          'Temperature, humidity, GPS, shock, and excursion events from your carrier and sensor partners are captured and time-aligned to each lot and shipment. Carrier qualification, lane qualification, and excursion disposition remain with your Quality / GDP function — the platform provides the engineered evidence trail those decisions are made against.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-scoped access',
        description:
          'Standards-based identity with enforced MFA, role-scoped access for planning, sourcing, warehouse, quality, trade compliance, finance, and admin populations, and least-privilege defaults across modules, APIs, and partner connections.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for regulated supply chains',
        description:
          'Hosted on cloud regions and configurations commonly used for regulated supply-chain workloads, with private endpoints, infrastructure defined and reviewed via Terraform, and environment promotion gates your team can sign.',
      },
    ],
    auditNote:
      'Every component is engineered with audit-trail logging, lot and serial genealogy capture, cold-chain event recording, role-scoped access, and lifecycle artifacts your Quality, GDP, Trade Compliance, and Regulatory teams can use as inputs into their own DSCSA, FDA FSMA 204, GDP, USP <1079>, IATA CEIV Pharma, ISO 28000, and customs work. DSCSA Authorized Trading Partner status, FSMA 204 traceability filings, GDP / GxP qualification, carrier qualification, customs and export filings, and any inspection or audit outcome (FDA, CBP, EMA, MHRA, or other authority) remain solely the customer’s responsibility, executed by the customer’s Quality, Trade Compliance, or Regulatory function. AIvanceWorks does not represent, attest, or warrant compliance with any regulatory framework on behalf of any customer.',
    partnerAgreements: ['DPA', 'SLA', 'Quality / Technical Agreement (where required by the customer)'],
  },

  imageFeatures: [
    {
      heading: 'Cold-Chain Visibility, From the Lane to the Planner',
      description:
        'Carrier temperature, humidity, GPS, and excursion events tied to each lot and shipment — so the planner, quality reviewer, and customer-service rep see the same in-transit truth in real time.',
      image: {
        src: '/images/solutions/supply-chain-management/feature-1.jpg',
        alt: 'Logistics operator monitoring a live cold-chain shipment map and temperature trace on a control-tower workstation',
      },
    },
    {
      heading: 'One Chain of Custody, From Supplier to Customer',
      description:
        'Lot, serial, supplier reference, transfer, and disposition events captured against a single record per lot — so trace, recall, and audit questions resolve in a query, not a spreadsheet.',
      image: {
        src: '/images/solutions/supply-chain-management/feature-2.jpg',
        alt: 'Warehouse supervisor scanning lot-coded pallets while reviewing inbound and outbound chain-of-custody on a tablet',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Manufacturing Execution Systems (MES)',
      description:
        'Plant operations and supply chain share a chain of custody. Our MES practice builds the in-plant execution layer that feeds lot, genealogy, and batch-record data into the supply-chain platform — so the warehouse and the line read the same lot truth.',
      href: '/solutions/mes',
      icon: 'Factory',
      pageType: 'solution',
    },
    {
      title: 'Custom Software Development',
      description:
        'An SCM platform is custom software at heart — your supplier tiers, your distribution model, your cold-chain lanes. Our custom development practice is the engineering core that builds supply-chain platforms around the way your network actually runs.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
    {
      title: 'Data Engineering',
      description:
        'Once chain-of-custody, cold-chain, and exception data are flowing, the next question is "what is the network telling us?" Our data engineering practice connects SCM, ERP, WMS, and carrier feeds into the reporting and analytics layer your planners and quality teams act on.',
      href: '/services/data-engineering',
      icon: 'Database',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Are you offering a packaged SCM / control-tower product, or a custom build?',
      answer:
        'We are a software engineering partner that builds custom Supply Chain Management platforms around your supplier network, your distribution model, your cold-chain lanes, and the ERP, WMS, TMS, and carrier connections you already run. We do not sell a packaged, pre-validated SCM or control-tower product, and we do not perform DSCSA filings, FSMA 204 filings, GDP qualification, or carrier qualification on your behalf. What we deliver is the platform plus engineering artifacts your team uses as inputs into their own compliance work — audit logs, lot and serial genealogy, configuration history, and documentation.',
    },
    {
      question:
        'What kinds of supply chains do you build SCM platforms for?',
      answer:
        'We build SCM platforms for US-based pharmaceutical (small molecule and biologics) supply chains, medical device manufacturers, food & beverage manufacturers subject to FSMA 204, and specialty / regulated process manufacturers with multi-tier, temperature-sensitive, lot-tracked supply chains. The common thread is custom: a supplier model, lot/serial data model, exception engine, and reporting set tailored to your network and the ERP, WMS, TMS, and carrier systems you already run. We are not a fit if you want a packaged, pre-validated, off-the-shelf control tower — that is a different procurement.',
    },
    {
      question:
        'How does the SCM platform fit alongside our existing ERP, WMS, TMS, OMS, and carrier connections?',
      answer:
        'The platform is designed to coexist with the ERP, WMS, TMS, OMS, EDI hubs, supplier portals, and carrier / sensor feeds you already run — using documented APIs and standard data exchange formats. Your IT and integration teams own the actual connectors into your validated stack, so existing master data, contract terms, and validated interfaces are preserved. We do not claim partnerships, certifications, or pre-built integrations with any third-party ERP, WMS, TMS, OMS, carrier, or visibility vendor; we build the engineering surface your team uses to integrate.',
    },
    {
      question:
        'Can we roll the SCM platform out one lane, region, or supplier tier at a time?',
      answer:
        'Yes — this is the default approach, not an option. Single big-bang control-tower cutovers are one of the most common failure modes in supply-chain programs, and we design against them. Each lane, region, or supplier tier is built to go live independently, with clear data and integration boundaries. This lets you prove visibility and exception handling on a single corridor, train planners and warehouse teams incrementally, and expand the rollout without disrupting commercial supply.',
    },
    {
      question:
        'How does the platform handle DSCSA, FDA FSMA 204, GDP, and cold-chain expectations?',
      answer:
        'Lot, serial, supplier reference, transfer, and disposition events are captured against a single chain-of-custody record; audit records are immutable at the database layer; and cold-chain event ingestion is engineered with awareness of GDP, USP <1079>, and IATA CEIV Pharma expectations. DSCSA product identifier, transaction, and chain-of-ownership structures are engineered into the data model; FSMA 204 traceability data points are engineered into the inbound and outbound record. Authorized Trading Partner status, filings, qualifications, predicate-rule decisions, and any inspection outcome remain with your Quality, Trade Compliance, and Regulatory functions. We make no DSCSA, FSMA, GDP, or regulatory certification on your behalf.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by network and are defined during discovery — we do not quote fixed durations or fixed regulatory outcomes on a public page. Discovery is where we map your plan / source / make / move / deliver workflows, inventory the systems you already run, identify the highest-leverage corridor (often a single cold-chain lane or supplier tier that represents your hardest exception pattern), and frame the engineering and integration shape before any production-bound code is written. The build is typically phased so the highest-priority lane goes live first and your team can review the platform before later phases land.',
    },
  ],

  cta: {
    title: 'Looking for an SCM platform that fits your network?',
    description:
      'Book a free 30-minute discovery call. We will walk through your plan, source, make, move, and deliver workflows, the systems you already run, and the engineering shape of a custom Supply Chain Management platform — and outline a realistic, phased scope for your network. DSCSA, FSMA, GDP, carrier qualification, and any regulatory or inspection outcomes remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the control tower', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing with explicit customer-ownership of DSCSA / FSMA 204 filings, GDP qualification, carrier qualification, customs filings, and inspection outcomes. Legal review recommended before publish to confirm liability framing.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No vendor names retained anywhere on the page (no commercial SCM, control-tower, visibility, planning, ERP, WMS, TMS, OMS, carrier, sensor, or 3PL vendor names). Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
    'hero.heroImage, imageFeatures[0].image, imageFeatures[1].image — placeholder photos sourced from neighboring solution folder (MES). Replace with SCM-specific Unsplash imagery (logistics operations center / cold-chain dashboard, in-transit cold-chain sensor or container, warehouse lot-scan with chain-of-custody view) before publish per §11.3 / §11.5.',
  ],
};

export default supplyChainManagement;
