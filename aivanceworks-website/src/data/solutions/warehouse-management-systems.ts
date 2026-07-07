import { BRAND_PREFIX } from '@/lib/constants';
import type { SolutionPageData } from '@/types/pages';

// Archetype C base, B-leaning narrative — Warehouse Management Systems (WMS)
// (Manufacturing & Supply Chain).
//
// Buyer: VP / Director of Warehouse Operations, Director of Distribution /
//   Fulfillment, Head of Logistics, or Operations Director at a US 3PL,
//   distributor, manufacturer-with-DC, or omnichannel retailer running one or
//   more distribution centers. Secondary: Director of Supply Chain IT,
//   Continuous-Improvement / IE lead, and (in food, pharma, and medical-device
//   warehouses) Director of Quality / Regulatory.
//
// Buyer mindset: "I'm measured on throughput, order accuracy, lines picked per
//   hour, on-time ship, and labor cost per unit. A WMS program that drags on
//   for two years, or a SaaS platform we have to bend our whole operation
//   around, both end the same way — peak season arrives and we're back on
//   spreadsheets and RF guns held together with workarounds. Tell me honestly
//   whether I should buy a platform or build one — and which one you'd put MY
//   operation on."
//
// Top 3 buyer questions (these drive the composition order):
//   1. "Should I buy a SaaS WMS platform or build a custom one — and how do I
//       reason about that for MY operation, not in the abstract?" (THE page's
//       core differentiator — surfaced in the signature + the FeatureGrid.)
//   2. "Will it actually lift throughput, order accuracy, and labor
//       productivity in my building — or just be another screen between my
//       pickers and the work?"
//   3. "Will it coexist with my ERP, OMS, TMS, carriers, automation (conveyor,
//       sortation, AS/RS, AMRs), and shop-floor devices — without ripping out
//       integrations and master data my team already runs?"
//
// Key trust issue: WMS go-lives that stalled in a multi-year configuration
//   swamp, missed peak, forced the operation to conform to a rigid platform's
//   "best-practice" template, and left supervisors running parallel
//   spreadsheets — while the integration and customization bill kept running.
//   The build-vs-buy decision is exactly where this buyer has been burned:
//   sold a platform that didn't fit, or sold a custom build that became
//   unmaintainable.
//
// Archetype rationale (self-challenge §9.6):
//   - Default was Archetype C, to match every Manufacturing & Supply Chain
//     sibling (EBR, MES, MOM, SCM). Audience test: the WMS operating buyer is
//     measured on a P&L / throughput KPI first, not on surviving an audit —
//     the WMS system class itself is not regulated the way EBR / MES (21 CFR
//     Part 11) or pharma SCM (DSCSA) are. That pulls toward Archetype B
//     (Technical: "prove you can build / deliver it"). But a real traceability
//     and food/pharma-warehouse compliance layer exists (FSMA 204, lot/FEFO,
//     cold-chain, OSHA, hazmat), and house consistency matters.
//   - Conclusion: Archetype C STRUCTURE (complianceSpotlight + complianceDeepDive
//     retained, placed mid-page as hygiene — not as the lead gate), with a
//     B-leaning NARRATIVE that leads on build-vs-buy and operational throughput.
//     The signature is the page's argument, not the compliance section.
//
// Liability / vendor stance (mirrors the SCM / MES / MOM sibling pattern):
//   - We are a software engineering and integration partner. We do NOT sell or
//     resell any packaged WMS product. The "buy" path on this page is advisory
//     — we help the buyer reason about and select a SaaS platform; we do not
//     claim to be a reseller or certified implementer of any named platform.
//   - No commercial WMS / SaaS-WMS vendor names anywhere on the page (no
//     Manhattan, Blue Yonder/JDA, Körber, SAP EWM, Oracle WMS, Infor,
//     HighJump, Softeon, Microsoft D365 SCM, Fishbowl, ShipBob, Deposco,
//     Generix, etc.).
//   - No ERP / OMS / TMS / carrier / automation / robotics vendor names (no
//     SAP, Oracle, NetSuite, Shopify, FedEx/UPS, Dematic, Honeywell
//     Intelligrated, AutoStore, 6 River, Locus, Zebra, etc.). Categories only.
//   - Framework / standard names (FDA FSMA 204, 21 CFR Part 11 where
//     electronic records apply, GS1 / GTIN-SSCC / EPCIS, cGMP / GDP for
//     regulated-goods warehouses, OSHA, NIST CSF, SOC 2) are retained for
//     audience signaling and SEO, but always framed as engineering design
//     awareness — never as certification or compliance promises.
//   - No fixed durations, no fixed costs, no promised operational outcomes.
//
// Signature: WmsBuildVsBuyDecision — comparison visualization (§8.3 pattern 4).
//   Two columns (Buy a SaaS WMS platform / Build a custom WMS) with a shared
//   "decision spine" of factors (fit to your flow, speed to value, total cost
//   over 5 yrs, integration & automation control, change velocity, lock-in,
//   compliance ownership), plus a neutral "how we help either way" footer. NEW
//   signature component: the build-vs-buy tension is a comparison, which the
//   sibling "control tower / lifecycle spine" hierarchical signatures cannot
//   carry, and which a plain FeatureGrid cannot carry (§8.2 — a signature must
//   show a relationship/transformation a grid can't). This is the one element
//   on the page that directly answers the buyer's #1 question.
//
// Composition (mirrors the sibling rhythm, with the signature carrying the
//   build-vs-buy argument; compliance is hygiene, not the lead gate):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → signature (dark) → complianceSpotlight (warm) →
//   complianceDeepDive (light) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from Archetype C recipe:
//   - Signature placed BEFORE complianceSpotlight (not after). The buyer's
//     primary decision is build-vs-buy, so the page makes its argument first;
//     compliance is the mid-page hygiene gate, not the lead. Still: max two
//     dark sections (hero + signature), no adjacent darks, CTA is accent.
//   - No CaseStudySpotlight — greenfield; no verified WMS engagement yet.
//   - No IntegrationsPanel — liability stance forbids naming ERP, OMS, TMS,
//     carrier, automation, or WMS vendors. Integration capability is woven
//     into feature prose, the capabilities list, and the signature spine.

const warehouseManagementSystems: SolutionPageData = {
  slug: 'warehouse-management-systems',
  title: `${BRAND_PREFIX} Warehouse Management Systems (WMS) — Build vs. Buy, Done Right`,
  shortDescription:
    'Warehouse Management System (WMS) software for US distributors, 3PLs, manufacturers, and omnichannel retailers. We help you make the build-vs-buy call honestly — select and integrate a scalable SaaS WMS, or engineer a custom WMS around a complex supply-chain operation that no off-the-shelf platform fits — optimizing inventory accuracy, order picking, and labor planning either way.',

  metaTitle:
    'Warehouse Management Systems (WMS) | Build vs. Buy, SaaS or Custom',
  metaDescription:
    'WMS software for US distributors, 3PLs, manufacturers, and omnichannel retailers. Decide build vs. buy with a partner who has no platform to sell you: select and integrate a scalable SaaS WMS, or engineer a custom warehouse management system for a complex operation. Inventory accuracy, directed picking, slotting, labor planning, and coexistence with your ERP, OMS, TMS, carriers, and automation.',
  keywords: [
    'warehouse management system',
    'WMS software',
    'custom WMS development',
    'WMS build vs buy',
    'SaaS WMS platform',
    'warehouse management software development',
    'inventory management software',
    'order picking software',
    'directed picking software',
    'warehouse slotting software',
    'labor management system warehouse',
    'WMS integration services',
    '3PL warehouse software',
    'distribution center software',
    'fulfillment software',
    'WMS ERP integration',
    'cold chain warehouse software',
    'FSMA 204 warehouse traceability',
  ],
  canonicalPath: '/solutions/warehouse-management-systems',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    {
      label: `${BRAND_PREFIX} Warehouse Management Systems`,
      href: '/solutions/warehouse-management-systems',
    },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'signature',
    'complianceSpotlight',
    'complianceDeepDive',
    'benefitsGrid',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'manufacturing',
  signatureComponent: 'WmsBuildVsBuyDecision',

  hero: {
    badge: 'Manufacturing & Supply Chain Solutions',
    headline: 'The right WMS — whether you should buy one or build one.',
    subhead:
      'Warehouse Management System software for US distributors, 3PLs, manufacturers, and omnichannel retailers. We have no WMS product to sell you — so we make the build-vs-buy call honestly, then either select and integrate a scalable SaaS platform or engineer a custom WMS around the way your building actually runs: inventory accuracy, directed picking, slotting, and labor planning that fits your flow, not someone else’s template.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See build vs. buy', href: '#signature' },
    heroImage: {
      src: '/images/solutions/warehouse-management-systems/hero.jpg',
      alt: 'Warehouse operations manager reviewing live order-picking and inventory dashboards on a distribution-center floor',
    },
    metrics: [
      {
        value: 'Build or buy — honestly',
        label: 'A partner with no WMS platform to push on you',
        description:
          'We sell engineering, not a packaged WMS. That means the build-vs-buy recommendation is made on the fit to your operation — not on which license we earn commission against.',
      },
      {
        value: 'Inventory you can trust',
        label: 'Accuracy, directed picking & labor planning by design',
        description:
          'Real-time, location-level inventory; directed put-away and picking; slotting; and labor planning engineered so the floor works from one truth — not RF guns and spreadsheets that disagree.',
      },
      {
        value: 'Coexistence-first',
        label: 'Works with the ERP, OMS, TMS, carriers & automation you run',
        description:
          'Designed to coexist with your ERP, order, transportation, carrier, and automation (conveyor, sortation, AS/RS, AMR) systems via documented APIs and standard formats — so existing master data and validated integrations stay put.',
      },
    ],
  },

  // Audience test (§9.5): a VP / Director of Warehouse Operations reading these
  // in 8 seconds wants to know "will this lift throughput and accuracy, fit my
  // flow, and not become a two-year swamp?" — not "will this pass an audit?"
  // The four values lead with the build-vs-buy honesty, operational fit,
  // exception-led labor, and coexistence. FSMA / traceability framing lives
  // mid-page in ComplianceSpotlight / DeepDive (§9.9).
  metricsStrip: [
    {
      value: 'Vendor-neutral',
      label: 'Build-vs-buy advice from a partner with nothing to resell',
      description:
        'We do not resell any WMS product, so the recommendation — SaaS platform or custom build — is driven by your order profile, SKU complexity, automation, and growth curve, not by a license we are incentivized to sell.',
    },
    {
      value: 'Fit to your flow',
      label: 'Configured or built around your building, not a template',
      description:
        'Your zones, your wave and pick strategies, your packing and shipping rules, your KPIs. We configure the SaaS platform — or engineer the custom WMS — to the way your operators, supervisors, and planners actually work.',
    },
    {
      value: 'Exception-led labor',
      label: 'Throughput, accuracy & labor surfaced as work, not dashboards',
      description:
        'Short picks, replenishment gaps, dock and door congestion, cycle-count variances, and labor bottlenecks surface as ranked, owned exceptions — so supervisors act on signal instead of scrolling charts.',
    },
    {
      value: 'Coexistence-first',
      label: 'No rip-and-replace of your ERP, OMS, TMS or automation links',
      description:
        'Designed to coexist with the ERP, OMS, TMS, carrier, EDI, and automation / robotics connections you already run — your IT and automation teams control the connectors, so existing master data and validated interfaces are preserved.',
    },
  ],

  // Features lead with what the warehouse operating team gets, and — because
  // build-vs-buy is THE page's differentiator — the first feature is the
  // decision framework itself. Compliance signals woven in, not headlined
  // (§9.9). No vendor names anywhere.
  features: [
    {
      icon: 'Scale',
      title: 'Build-vs-Buy Decision, Made on Your Operation',
      description:
        'We start by reasoning through the SaaS-platform-vs-custom-build decision against your real order profile, SKU and UOM complexity, automation footprint, peak curve, and 5-year cost — so you choose the path that fits your building, and you choose it before a line of production code or a license is committed.',
    },
    {
      icon: 'PackageCheck',
      title: 'Real-Time, Location-Level Inventory',
      description:
        'License-plate / LPN tracking, lot, serial, expiry, and location-level inventory across receiving, put-away, transfers, and shipping — so the floor, planning, and customer service read one inventory truth instead of reconciling RF logs against the ERP after the fact.',
    },
    {
      icon: 'Route',
      title: 'Directed Put-Away, Picking & Slotting',
      description:
        'Directed put-away, zone and wave picking, batch / cluster / pick-and-pass strategies, FEFO / FIFO logic, and slotting optimization — configured to your travel paths and order mix so pickers walk less and accuracy goes up.',
    },
    {
      icon: 'Users',
      title: 'Labor Planning & Productivity',
      description:
        'Labor planning, task interleaving, and engineered-standard tracking — so supervisors staff to the forecasted wave, balance work across zones, and see lines-per-hour and accuracy by associate without standing over a clipboard.',
    },
    {
      icon: 'Truck',
      title: 'Inbound, Cross-Dock, Outbound & Shipping',
      description:
        'ASN-driven receiving, cross-dock and flow-through, packing, cartonization, parcel and LTL shipping, and yard / dock-door coordination — with the carrier and document linkage your shipping team needs captured at the right step.',
    },
    {
      icon: 'Plug',
      title: 'ERP, OMS, TMS, Carrier & Automation Integration',
      description:
        'A documented integration surface to your ERP, OMS, TMS, carrier, EDI, and warehouse automation (conveyor, sortation, AS/RS, AMR, pick-to-light) — so the WMS orchestrates the building while your existing systems of record stay in place and your IT team controls the connectors.',
    },
  ],

  benefits: [
    {
      icon: 'Scale',
      title: 'A Build-vs-Buy Call You Can Defend to the Board',
      description:
        'Because we have no platform to sell, the SaaS-vs-custom recommendation comes with the reasoning, the cost model, and the trade-offs written down — so when you take the decision upstairs, you can show why this path fits your operation and what you’d give up on the other.',
    },
    {
      icon: 'Gauge',
      title: 'Throughput & Accuracy as Live Signals',
      description:
        'Lines per hour, order accuracy, dock-to-stock time, and cycle-count variance surfaced where supervisors and the plant manager work — so the floor acts on the same numbers in real time instead of waiting for the morning report.',
    },
    {
      icon: 'Settings',
      title: 'Configured or Built to Your Building — Not a Template',
      description:
        'Your zones, your wave and pick strategies, your packing and shipping rules, your KPI set. Whether we configure a SaaS platform or engineer a custom WMS, the workflows fit the way your operators and supervisors actually work — not a generic reference template the operation has to bend around.',
    },
    {
      icon: 'CalendarClock',
      title: 'Built to Survive Peak — Not Stall Before It',
      description:
        'We design against the multi-year WMS swamp: a phased, zone-by-zone or wave-by-wave rollout so a single area runs on the new system and proves out before peak, instead of a big-bang cutover that risks the whole building when volume is highest.',
    },
    {
      icon: 'Network',
      title: 'No Rip-and-Replace of Your Stack',
      description:
        'The WMS is designed to coexist with the ERP, OMS, TMS, carrier, EDI, and automation connections you already run — your IT and automation teams own the connectors, so existing master data, contracts, and validated interfaces stay in place.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Operation Mapping & Build-vs-Buy Framing',
      description:
        'We walk your receive, put-away, replenish, pick, pack, ship, and returns workflows; profile your order mix, SKU / UOM complexity, automation footprint, and peak curve; inventory your existing ERP, OMS, TMS, carrier, EDI, and automation connections; and reason through the build-vs-buy decision — SaaS platform vs. custom WMS — against the cost, fit, and risk for your operation, before any build or license is committed. For food, pharma, and medical-device warehouses, FSMA 204, cGMP / GDP, and any regulatory decisions stay with your Quality and Regulatory function.',
      duration: 'Scoped during discovery',
      deliverable:
        'Operation map, order / SKU profile, current-state system inventory, written build-vs-buy recommendation with cost model, prioritized roadmap',
    },
    {
      title: 'Architecture / Platform-Fit & Engineering Plan',
      description:
        'On the build path: design the WMS architecture, inventory and location data model, directed put-away / pick / slotting engine, labor model, audit-trail and access posture, and the ERP / OMS / TMS / carrier / automation integration surface. On the buy path: design the configuration, the gap-fit, the extension points, and the same integration surface around the selected SaaS platform. Either way the integration and security architecture is built alongside your IT, automation, and (where relevant) Quality stakeholders.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture / configuration document, inventory & location data model, integration surface outline, security architecture, labor-model design',
    },
    {
      title: 'Build / Configure & Iterate',
      description:
        'Iterative full-stack development of the custom WMS — receiving, put-away, inventory, picking, packing, shipping, labor, and admin tooling — or iterative configuration and extension of the selected SaaS platform, with engineering artifacts (test coverage, configuration history, change logs) captured as part of the work. Zone-by-zone demos with operators, supervisors, and planners keep the system anchored to real floor work.',
      duration: 'Phased per engagement',
      deliverable:
        'Working WMS / configured platform in staging, engineering artifact set, configuration documentation, KPI dashboards',
    },
    {
      title: 'Integration, Automation & UAT',
      description:
        'Connect to your existing ERP, OMS, TMS, carrier, EDI, and warehouse automation (conveyor, sortation, AS/RS, AMR, pick-to-light) via documented APIs and standard data formats your IT and automation teams control. Run UAT with receiving, picking, packing, shipping, and supervisor stakeholders, and — for regulated-goods warehouses — assemble the engineering documentation set your Quality and Regulatory teams use as inputs into their own FSMA 204, cGMP / GDP, or audit-readiness work.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, automation interface tests, UAT sign-off, security test report, engineering documentation set',
    },
    {
      title: 'Phased Go-Live, Hypercare & Lifecycle Operations',
      description:
        'Zone-by-zone, wave-by-wave, or DC-by-DC go-live so a single area of the building can run on the new system while the rest continues uninterrupted — and so the operation is proven out before peak. An initial hypercare period covers monitoring, defect triage, change-control reviews, and tuning so the system stays in a known state as your SKUs, order profile, automation, and SLAs evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, change-control playbooks, hypercare support',
    },
  ],

  capabilities: [
    'Build-vs-buy decision framework — SaaS platform vs. custom WMS, scored against your operation',
    'License-plate / LPN tracking with lot, serial, expiry, and location-level inventory',
    'Directed put-away, zone / wave / batch / cluster picking, and FEFO / FIFO logic',
    'Slotting optimization configured to your travel paths and order mix',
    'Labor planning, task interleaving, and engineered-standard productivity tracking',
    'ASN-driven receiving, cross-dock / flow-through, packing, and cartonization',
    'Parcel and LTL shipping, manifesting, and carrier / document linkage',
    'Cycle counting, replenishment, and inventory-accuracy exception handling',
    'Event-driven exception engine — short picks, replenishment gaps, dock congestion, labor bottlenecks',
    'GS1 / GTIN / SSCC / EPCIS-aware barcode and label data structures',
    'FSMA 204 traceability and lot / FEFO data engineered into the inventory record (regulated-goods warehouses)',
    'Documented APIs and standard formats for ERP, OMS, TMS, carrier, EDI, and automation / robotics integration',
    'Role-scoped access for receiving, picking, packing, shipping, supervisor, quality, and admin populations',
    'WCAG 2.1 AA accessibility for supervisor, planning, and back-office interfaces',
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
      'Engineered with inventory-integrity, traceability, and audit-trail awareness for regulated-goods warehouses',
    highlightText: 'inventory-integrity, traceability, and audit-trail awareness',
    statusText:
      'Engineering posture aligned with practices common in FDA FSMA 204, cGMP / GDP warehousing, GS1 / EPCIS, OSHA, 21 CFR Part 11 (where electronic records apply), NIST CSF, and SOC 2 environments',
    pillars: [
      {
        icon: 'GitBranch',
        title: 'Lot, Serial & FEFO Traceability by Design',
        description:
          'Lot, serial, expiry, license-plate, and location lineage are engineered into the inventory model — so a recall trace, FSMA 204 inquiry, or customer-audit query in a food / pharma / device warehouse is a query against the audited record, not a spreadsheet reconstruction.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Audit-Trail & Inventory-Integrity Discipline',
        description:
          'Every receipt, put-away, move, pick, adjustment, count, and shipment is logged with actor, timestamp, location, and quantity. Audit records are immutable at the database layer so your Quality, Regulatory, and customer-audit reviewers can read a continuous inventory history.',
      },
      {
        icon: 'Lock',
        title: 'Identity, Access & Cloud Security Posture',
        description:
          'Standards-based identity with enforced MFA, role-scoped access across receiving, picking, packing, shipping, quality, and admin populations, and a cloud security posture engineered with awareness of NIST CSF and SOC 2 practices. Certification and qualification remain your team’s decision.',
      },
    ],
    badges: [
      'FDA FSMA 204',
      'cGMP / GDP (regulated-goods warehousing)',
      'GS1 / GTIN / SSCC / EPCIS',
      'OSHA',
      '21 CFR Part 11 (where applicable)',
      'NIST CSF',
      'SOC 2',
    ],
  },

  complianceDetail: {
    frameworks: [
      'FDA FSMA 204 (Food Traceability Final Rule, where applicable)',
      'cGMP / GDP (Good Distribution Practice, regulated-goods warehousing)',
      'GS1 / GTIN / SSCC / EPCIS (identification & event standards)',
      'OSHA (warehouse worker safety, where applicable)',
      '21 CFR Part 11 (Electronic Records & Signatures, where applicable)',
      'NIST Cybersecurity Framework (CSF)',
      'SOC 2 (security & availability practices)',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Engineering artifacts for your compliance work',
        description:
          'For food, pharma, and medical-device warehouses, we structure the build so your Quality and Regulatory teams have the documentation, traceability, and test evidence they need for their own FSMA 204, cGMP / GDP, and audit-readiness work. We do not author SOPs or perform regulatory filings on your behalf.',
      },
      {
        icon: 'Activity',
        title: 'Audit-trail logging as an engineering default',
        description:
          'Every receipt, put-away, move, pick, adjustment, cycle count, and shipment is logged with actor, timestamp, location, and quantity. Audit records are immutable at the database layer so your Quality, customer auditors, and (where applicable) regulators can read a continuous inventory and chain-of-custody history.',
      },
      {
        icon: 'GitBranch',
        title: 'Lot, serial & FEFO traceability as a first-class feature',
        description:
          'Lot, serial, expiry, license-plate, and location linkage from receipt through put-away, transfer, pick, and outbound shipment are engineered into the inventory model — so recall trace, complaint follow-up, and FSMA 204 inquiries are queries against the audited record, not spreadsheet reconstructions.',
      },
      {
        icon: 'Thermometer',
        title: 'Cold-chain & condition-aware storage (where applicable)',
        description:
          'For temperature-controlled warehouses, storage-zone temperature and excursion events can be captured and time-aligned to lots and locations. Lane / zone qualification and excursion disposition remain with your Quality / GDP function — the platform provides the engineered evidence trail those decisions are made against.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-scoped access',
        description:
          'Standards-based identity with enforced MFA, role-scoped access for receiving, picking, packing, shipping, supervisor, quality, and admin populations, and least-privilege defaults across modules, APIs, and automation interfaces.',
      },
      {
        icon: 'Building2',
        title: 'Cloud infrastructure for distribution operations',
        description:
          'Hosted on cloud regions and configurations commonly used for distribution and regulated-goods workloads, with private endpoints, infrastructure defined and reviewed via Terraform, and environment promotion gates your team can sign.',
      },
    ],
    auditNote:
      'Every component is engineered with audit-trail logging, lot / serial / FEFO traceability capture, inventory-integrity controls, role-scoped access, and lifecycle artifacts your Quality, Regulatory, and security teams can use as inputs into their own FSMA 204, cGMP / GDP, OSHA, GS1 / EPCIS, NIST CSF, or SOC 2 work. FSMA 204 traceability filings, cGMP / GDP qualification, OSHA compliance, SOC 2 attestation, and any inspection or audit outcome (FDA, OSHA, customer audit, or other authority) remain solely the customer’s responsibility, executed by the customer’s Quality, Regulatory, Safety, or Security function. AIvanceWorks is a software engineering and integration partner, does not resell any packaged WMS product, and does not represent, attest, or warrant compliance with any regulatory or industry framework on behalf of any customer.',
    partnerAgreements: ['DPA', 'SLA', 'Quality / Technical Agreement (where required by the customer)'],
  },

  imageFeatures: [
    {
      heading: 'Directed Picking, In the Hands of the Floor',
      description:
        'Directed put-away and picking on RF and mobile devices, location-level inventory, and labor tasking — so pickers work from one system of truth instead of paper pick lists and a spreadsheet shadow.',
      image: {
        src: '/images/solutions/warehouse-management-systems/feature-1.jpg',
        alt: 'Warehouse associate scanning a barcoded carton on an RF device while picking from racked inventory',
      },
    },
    {
      heading: 'Throughput & Inventory Accuracy, Live for Operations',
      description:
        'Lines per hour, order accuracy, dock-to-stock time, and cycle-count variance surfaced live — so supervisors and the DC manager act on the same numbers in real time, not yesterday’s report.',
      image: {
        src: '/images/solutions/warehouse-management-systems/feature-2.jpg',
        alt: 'Distribution-center supervisor reviewing live throughput and inventory-accuracy dashboards on a floor workstation',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Supply Chain Management (SCM)',
      description:
        'The warehouse is one node in a wider network. Once the WMS runs your building, our SCM practice extends the chain of custody upstream and downstream — supplier-to-customer visibility, cold-chain trace, and disruption alerts across plants, 3PLs, and carriers.',
      href: '/solutions/supply-chain-management',
      icon: 'Truck',
      pageType: 'solution',
    },
    {
      title: 'Custom Software Development',
      description:
        'On the build path, a WMS is custom software at heart — your zones, your pick strategies, your automation. Our custom development practice is the engineering core that builds warehouse systems around the way your building actually runs.',
      href: '/services/custom-software-development',
      icon: 'Code2',
      pageType: 'service',
    },
    {
      title: 'Enterprise Integration & Migration',
      description:
        'Whether you buy a SaaS WMS or build one, the hard part is the seams — ERP, OMS, TMS, carrier, EDI, and automation. Our enterprise integration practice builds and owns the integration surface that lets the WMS orchestrate the floor without disturbing your systems of record.',
      href: '/services/enterprise-integration',
      icon: 'ArrowLeftRight',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Should I buy a SaaS WMS platform or build a custom one?',
      answer:
        'It depends on your operation, and that is exactly the decision we help you make first. A scalable SaaS WMS platform usually wins when your flows are reasonably standard, you want faster speed-to-value, and you can fit your processes to the platform’s model. A custom-built WMS usually wins when you have a complex or unusual supply-chain operation — unusual order profiles, deep automation, multi-tenant 3PL billing, or processes that are themselves a competitive advantage — that an off-the-shelf platform would force you to bend around. Because we sell engineering and not a packaged WMS, our recommendation is driven by fit, 5-year cost, and risk for your building — not by a license we are paid to push.',
    },
    {
      question:
        'Do you resell or implement a specific WMS product?',
      answer:
        'We are a software engineering and integration partner. We do not resell any packaged WMS product, and we are not a certified implementer marketed under any platform vendor’s badge on this page. On the buy path, we help you select, configure, extend, and integrate a SaaS WMS platform you license directly. On the build path, we engineer a custom WMS around your operation. Either way, what we deliver is the engineering, the integration surface, and the documentation — not a license you buy through us.',
    },
    {
      question:
        'What kinds of warehouses and operations do you build WMS solutions for?',
      answer:
        'We work with US-based distributors, third-party logistics (3PL) providers, manufacturers with distribution centers, and omnichannel retailers — including food, pharmaceutical, and medical-device warehouses where lot, FEFO, and FSMA 204 traceability matter. The common thread is custom fit: an inventory model, pick and slotting strategy, labor model, and integration surface tailored to your building and the ERP, OMS, TMS, carrier, and automation systems you already run. We are not a fit if you simply want a packaged, pre-validated, off-the-shelf WMS bought and resold through us — that is a different procurement.',
    },
    {
      question:
        'How does the WMS fit alongside our existing ERP, OMS, TMS, carriers, and automation?',
      answer:
        'The WMS is designed to coexist with the ERP, OMS, TMS, carrier, EDI hubs, and warehouse automation (conveyor, sortation, AS/RS, AMR, pick-to-light) you already run — using documented APIs and standard data exchange formats. Your IT and automation teams own the actual connectors into your validated stack, so existing master data, contracts, and validated interfaces are preserved. We do not claim partnerships, certifications, or pre-built integrations with any third-party ERP, OMS, TMS, carrier, automation, or WMS vendor; we build the engineering surface your team uses to integrate.',
    },
    {
      question:
        'Can we roll the WMS out one zone or DC at a time without stopping operations?',
      answer:
        'Yes — this is the default approach, not an option. Big-bang WMS cutovers that miss peak are one of the most common failure modes in distribution, and we design against them. Each zone, wave, or DC is built or configured to go live independently, with clear data and integration boundaries. This lets you prove throughput, accuracy, and labor performance on a single area, train operators and supervisors incrementally, and expand the rollout — ideally well before peak season — without risking the whole building at once.',
    },
    {
      question:
        'How does the WMS handle FSMA 204, lot / FEFO traceability, and audit trail?',
      answer:
        'For food, pharmaceutical, and medical-device warehouses, lot, serial, expiry, license-plate, and location lineage are engineered into the inventory model; audit records are immutable at the database layer; and FSMA 204 traceability data points are engineered into the inbound and outbound record. The same audit trail that gives your team inventory integrity also gives Quality, Regulatory, and customer auditors a continuous history. FSMA 204 filings, cGMP / GDP qualification, OSHA compliance, and any inspection outcome remain with your Quality, Regulatory, and Safety functions; we make no regulatory certification on your behalf.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by operation and are defined during discovery — we do not quote fixed durations or fixed outcomes on a public page. Discovery is where we map your receive / put-away / pick / pack / ship / returns workflows, profile your order and SKU complexity, inventory the systems and automation you already run, and produce a written build-vs-buy recommendation with a cost model before any production-bound code or license is committed. The work is then typically phased so the highest-priority zone or DC goes live first — before peak — and your team can review the system before later phases land.',
    },
  ],

  cta: {
    title: 'Not sure whether to build or buy your WMS?',
    description:
      'Book a free 30-minute discovery call. We will walk through your receive, put-away, pick, pack, ship, and returns workflows, your order and SKU profile, the systems and automation you already run, and give you an honest build-vs-buy read — SaaS platform or custom WMS — with a realistic, phased scope. We have no WMS product to sell you, so the recommendation is about your operation, not our license.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See build vs. buy', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing for a greenfield company. The build-vs-buy "vendor-neutral, nothing to resell" positioning is a factual claim about the engagement model — confirm with leadership it is accurate (we genuinely do not resell any WMS product) before publish.',
    'complianceSpotlight.badges and complianceDetail.frameworks — framework names (FSMA 204, cGMP/GDP, GS1/EPCIS, OSHA, 21 CFR Part 11, NIST CSF, SOC 2) retained for SEO and audience signaling; pre-publish, confirm legal accepts framing as "engineering design awareness" rather than certification.',
    'processSteps — durations replaced with "scoped during discovery" / "phased per engagement." Confirm no internal estimates leak into copy.',
    'No commercial WMS, SaaS-WMS, ERP, OMS, TMS, carrier, automation, or robotics vendor names retained anywhere on the page. Verify by grep before publish.',
    'No fixed pricing or duration quoted on the page; all FAQs route timing and cost questions back to discovery.',
    'hero.heroImage, imageFeatures[0].image, imageFeatures[1].image — placeholder photos copied from the neighbouring supply-chain-management solution folder. Replace with WMS-specific Unsplash imagery (DC supervisor at a throughput/order dashboard, associate scanning a carton on an RF device while picking from racking, packing/shipping station) before publish per §11.3 / §11.5.',
  ],
};

export default warehouseManagementSystems;
