import { BRAND_PREFIX } from '@/lib/constants';
import type { IndustryPageData } from '@/types/pages';

const logistics: IndustryPageData = {
  slug: 'logistics',
  name: 'Logistics',
  title: `${BRAND_PREFIX} Logistics & Delivery Software Development`,
  shortDescription:
    'Custom software and AI that give logistics operators visibility and control across every mile — TMS, fleet and telematics dashboards, route optimization, carrier integrations, fulfillment software, and operational analytics — built on top of the systems you already run, not in place of them.',

  metaTitle: 'Logistics Software Development | TMS, Fleet, Route Optimization & Carrier Integration',
  metaDescription:
    'We build the software layer that gives logistics operators visibility across every mile — custom TMS, fleet and telematics dashboards, route optimization and dispatch, freight and carrier integration platforms, fulfillment software, and logistics analytics. The data and intelligence layer on top of Samsara, Geotab, FedEx, UPS, and your carrier APIs — not a replacement for them.',
  keywords: [
    'logistics software development',
    'custom TMS development',
    'transportation management system development',
    'fleet management software development',
    'route optimization software',
    'last-mile delivery software',
    'carrier integration platform',
    'freight management software',
    'EDI integration services',
    'telematics dashboard development',
    '3PL software development',
    'proof of delivery app',
  ],
  canonicalPath: '/book-consultation?industry=logistics',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industry' },
    { label: `${BRAND_PREFIX} Logistics`, href: '/industry/logistics' },
  ],

  composition: [
    'hero',
    'pressures',
    'capabilities',
    'compliance',
    'segments',
    'techStandards',
    'services',
    'faq',
    'cta',
  ],

  industry: 'logistics',

  icon: 'Truck',
  homeCard: {
    tagline:
      'Visibility and control across every mile — the software layer on top of your TMS, telematics, and carrier systems.',
    short: 'Visibility and control across every mile — from TMS to telematics.',
    image: '/images/industries/logistics/category-card-1.jpg',
    alt: 'Towering warehouse racking aisle in a distribution center',
    proof: ['TMS', 'Fleet Telematics', 'Route Optimization'],
  },

  hero: {
    kicker: 'Industries · Logistics',
    headline: 'Logistics runs on timing — we build the software that keeps it.',
    subhead:
      'Your TMS, your fleet telematics, your carrier portals, and your warehouse each hold part of the journey — and none of them line up into one view. We are the software engineers who build the layer in between: the dashboards, integrations, and intelligence that turn shipment data into visibility, and visibility into on-time delivery. We build on top of Samsara, Geotab, FedEx, and the systems you already run — not in place of them.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
    heroImage: {
      src: '/images/industries/logistics/hero.jpg',
      alt: 'Logistics operations — trucks, fleet tracking, and a real-time dispatch and delivery dashboard',
    },
    standards: ['EDI X12 / EDIFACT', 'API-first integration', 'GPS / Telematics APIs', 'HOS / ELD', 'SOC 2', 'PCI DSS'],
    standardsLabel: 'Built to the standards carriers, fleets, and freight networks run on',
  },

  // ── Problem statement (lead with the pain) ──
  pressures: {
    title: 'Movement generates data on every leg — most of it never reaches the people dispatching the next load',
    intro:
      'The trucks report their position, the carriers hold the tracking, the warehouse holds the inventory, and the analytics live in a spreadsheet built last quarter — none of it lines up into a view anyone can act on in real time. These are the gaps we build software to close. We are not here to replace your TMS or your telematics; we are the layer that makes them usable.',
    items: [
      {
        icon: 'ClipboardList',
        title: 'Dispatch still runs on spreadsheets',
        description:
          'Load assignment, carrier follow-up, and route planning happen in spreadsheets, texts, and a whiteboard. It works until volume spikes — then the gaps turn into missed pickups and late deliveries no one saw coming.',
      },
      {
        icon: 'Split',
        title: 'Carrier portals that never talk',
        description:
          'Rates in one portal, tracking in another, BOLs in email, LTL quotes in a fourth tab. Dispatchers toggle between carrier logins all day, and there is no single view of where every shipment actually is.',
      },
      {
        icon: 'MapPinOff',
        title: 'No proof, no visibility on the last mile',
        description:
          'Drivers run routes off a printed manifest, customers call asking where their order is, and there is no photo, signature, or barcode capture when it lands. Disputes come down to “we think it was delivered.”',
      },
      {
        icon: 'SatelliteDish',
        title: 'Telematics hardware that never paid off',
        description:
          'You pay for Samsara, Geotab, or Motive every month, and the data sits in the vendor’s dashboard — disconnected from your dispatch, your customers, and your own KPIs. The signal is there; the software that makes it actionable is not.',
      },
      {
        icon: 'BarChartBig',
        title: 'A TMS with no intelligence layer',
        description:
          'The system runs the loads but can’t tell you on-time performance by lane, cost-per-shipment by carrier, or which SLA is about to breach. Leadership asks for the number and someone rebuilds it by hand, late, every month.',
      },
    ],
  },

  // ── AI & technology catalog (dark bento) ──
  capabilities: {
    title: 'The software we build — from the first mile to the final delivery',
    highlightText: 'from the first mile to the final delivery',
    subtitle:
      'Six software layers that connect movement data to the people who act on it. Each is built on top of the systems you already run, with an AI layer that sharpens decisions over time — predictive ETAs, dynamic carrier selection, exception intelligence — not a gimmick wrapped around every feature.',
    groups: [
      {
        icon: 'Route',
        title: 'Transportation Management Systems (TMS)',
        description: 'Purpose-built dispatch for freight brokers, 3PLs, and shippers past the spreadsheet, short of enterprise bloat.',
        items: [
          'Load planning, tendering & carrier assignment',
          'Rate comparison & lane-level pricing',
          'Shipment tracking & status workflows',
          'Delivery confirmation & document capture',
          'Dynamic AI carrier selection by cost, performance history & lane coverage',
        ],
      },
      {
        icon: 'Gauge',
        title: 'Fleet Management & Telematics Dashboards',
        description: 'The software layer on top of the telematics hardware you already pay for — not another box on the dash.',
        items: [
          'Real-time GPS tracking & geofencing',
          'Driver performance & safety scoring',
          'Vehicle utilization & maintenance alerts',
          'HOS (Hours of Service) compliance monitoring',
          'Unified ops view across Samsara, Geotab & Verizon Connect APIs',
        ],
      },
      {
        icon: 'Waypoints',
        title: 'Route Optimization & Dispatch Platforms',
        description: 'Last-mile and field-service routing that re-plans itself when the day goes sideways.',
        items: [
          'Multi-stop route optimization & sequencing',
          'Real-time re-routing on traffic & delay events',
          'Driver mobile apps for delivery confirmation',
          'Proof-of-delivery capture — photo, signature & barcode',
          'ML route scoring that learns from delivery history by zone, time & driver',
        ],
      },
      {
        icon: 'Network',
        title: 'Freight & Carrier Integration Platforms',
        description: 'A freight operations product dispatchers actually want to use — backed by solid API engineering.',
        items: [
          'Multi-carrier rate shopping in one interface',
          'EDI & API integration with FedEx, UPS & LTL networks',
          'Freight document automation — BOL, POD & customs docs',
          'Tracking aggregation across carriers into a single view',
          'No more toggling between carrier portals all day',
        ],
      },
      {
        icon: 'PackageCheck',
        title: 'Warehouse & Fulfillment Operations',
        description: 'Fulfillment-oriented WMS for 3PLs and e-commerce operators — distinct from production-floor systems.',
        items: [
          'Inbound receiving & putaway logic',
          'Pick-pack-ship workflows',
          'Returns processing & reverse logistics',
          'Client-facing inventory portals for multi-client 3PLs',
          'Integrates with Shopify, WooCommerce, Amazon & ERP',
        ],
      },
      {
        icon: 'BarChart3',
        title: 'Logistics Analytics & Operational Intelligence',
        description: 'The decision layer — built on the TMS, carrier, and telematics data you already generate.',
        items: [
          'Cost-per-shipment & on-time delivery by lane and carrier',
          'Exception reporting & customer SLA dashboards',
          'Demand forecasting for capacity & seasonal planning',
          'Built on existing TMS, ERP & carrier feeds — no infrastructure overhaul',
          'Anomaly detection on exceptions with predictive delay alerts before an SLA breaches',
        ],
      },
    ],
  },

  // ── Trust, carrier-data & payment security (prominent) ──
  complianceDetail: {
    title: 'Software that respects carrier relationships and the data moving through them.',
    statement:
      'Logistics software sits on top of sensitive operational data — carrier rates, customer addresses, driver HOS records, and in many cases freight payments and settlements. Connecting carriers, fleets, and customers into one platform without leaking rate cards or exposing payment rails is the hard part, and it is where we start. Access controls, data isolation, and payment-grade security are designed in from the first commit, never bolted on before go-live.',
    frameworks: [
      'SOC 2',
      'ISO 27001',
      'PCI DSS (freight payments & settlements)',
      'FMCSA / HOS — ELD data integrity',
      'C-TPAT / customs data handling',
      'GDPR / CCPA',
    ],
    safeguards: [
      {
        icon: 'Split',
        title: 'Carrier & customer data isolation',
        description:
          'Multi-client 3PL and broker platforms keep each customer’s rates, shipments, and contacts isolated by design — so one client can never see another’s lanes, pricing, or volume, and your rate cards stay yours.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Least-privilege access & audit trails',
        description:
          'Role-based access for dispatchers, drivers, customers, and carriers, with scoped service accounts and tamper-evident audit logs across every integration — so you can see who touched what, and external access stays exactly as narrow as it should be.',
      },
      {
        icon: 'CreditCard',
        title: 'Payment & settlement data handling',
        description:
          'For carrier settlements, fuel-card data, and freight invoicing, we design tokenized, PCI-aligned payment flows and segregated financial data — so the operations platform can touch money movement without becoming a payment-fraud surface.',
      },
      {
        icon: 'FileCheck2',
        title: 'HOS / ELD & compliance data integrity',
        description:
          'Hours-of-Service and ELD-sourced records are captured and retained with integrity and clear lineage, so DOT and FMCSA reporting rests on a defensible trail rather than a manually edited export.',
      },
      {
        icon: 'Plug',
        title: 'Secure carrier & EDI connectivity',
        description:
          'We integrate over authenticated, encrypted carrier APIs and EDI channels with credential rotation and per-carrier scoping — not shared logins or flat polling that turn the integration layer into an attack surface.',
      },
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with secrets held in a managed vault and key-rotation policies that satisfy SOC 2 and ISO 27001 expectations.',
      },
    ],
    auditNote:
      'We provide the architecture documentation, data-flow diagrams, and control evidence your IT, security, and finance teams need — and we walk them through the access model, carrier-data isolation, and payment-handling controls before a single live carrier credential or settlement flow is connected.',
    partnerAgreements: ['DPA', 'SLA', 'Security architecture review'],
  },

  // ── Sub-verticals (who we serve) ──
  segments: {
    title: 'Logistics isn’t one buyer — and we don’t build like it is',
    subtitle:
      'A regional 3PL, a freight broker, and a last-mile operator share almost nothing about how they buy or what they need built. We scope, integrate, and frame the work to fit each one — and we’re honest about where the software layer ends and the carrier relationship begins.',
    items: [
      {
        icon: 'Truck',
        name: 'Regional 3PLs (10–100 trucks)',
        buyer: 'Director of Operations · Dispatch Manager',
        needs: [
          'A custom TMS to replace spreadsheet dispatch',
          'A driver mobile app with status and POD',
          'A real-time visibility dashboard for the whole board',
          'Load planning and carrier assignment that scales',
        ],
      },
      {
        icon: 'Network',
        name: 'Freight Brokers',
        buyer: 'VP Operations · Broker Principal',
        needs: [
          'A carrier integration platform, not five open tabs',
          'Multi-carrier rate shopping in one interface',
          'Tracking aggregation across every carrier',
          'Freight document automation — BOL, POD, customs',
        ],
      },
      {
        icon: 'MapPin',
        name: 'Last-Mile & Courier Operators',
        buyer: 'Head of Dispatch · Operations Manager',
        needs: [
          'Multi-stop route optimization and re-routing',
          'A driver app with proof-of-delivery capture',
          'Customer notification and ETA workflows',
          'An end to spreadsheet-based routing',
        ],
      },
      {
        icon: 'PackageCheck',
        name: 'E-commerce Fulfillment & 3PLs',
        buyer: 'Fulfillment Director · Operations Lead',
        needs: [
          'A fulfillment-oriented WMS and pick-pack-ship flow',
          'A client-facing inventory portal per customer',
          'Returns and reverse-logistics processing',
          'Shopify, WooCommerce, Amazon & ERP integration',
        ],
      },
      {
        icon: 'Rocket',
        name: 'Logistics-Tech Startups',
        buyer: 'Founder · Head of Product',
        needs: [
          'A full platform build, MVP-first',
          'Engineering capacity without an in-house team',
          'API-first architecture that scales with volume',
          'Investor- and audit-ready foundations from day one',
        ],
      },
      {
        icon: 'LineChart',
        name: 'Enterprise Shippers',
        buyer: 'VP Logistics · Supply Chain Director',
        needs: [
          'A BI and analytics layer on the existing TMS',
          'On-time performance and cost-per-shipment by lane',
          'Customer SLA dashboards and exception reporting',
          'Insight without ripping out what already works',
        ],
      },
    ],
    footerNote:
      'Logistics is the outbound layer of every manufacturing operation, and freight runs on financial rails — so a single engagement often touches our Manufacturing & Supply Chain and Fintech work too. A short consultation will map your segment, the systems and carriers you already run, and the fastest route from scattered shipment data to a view your team can act on.',
  },

  // ── Technology & standards ──
  techStandards: {
    title: 'We speak your stack — and your carriers',
    subtitle:
      'The systems, carriers, and data sources logistics operators already run on, and the platforms, standards, and AI frameworks we build with on top of them.',
    systemsTitle: 'Systems & carriers you already run',
    systems: [
      'TMS — McLeod, MercuryGate, Project44 or in-house',
      'Telematics — Samsara, Geotab, Verizon Connect, Motive',
      'Carriers — FedEx, UPS, USPS, DHL & LTL networks',
      'E-commerce — Shopify, WooCommerce, Amazon (Seller / FBA)',
      'ERP & accounting — NetSuite, SAP, QuickBooks',
      'EDI networks, VANs & carrier APIs',
      'ELD / HOS devices & GPS hardware',
    ],
    technologiesTitle: 'Platforms, standards & AI frameworks',
    technologies: [
      'AWS',
      'Azure',
      'EDI X12 / EDIFACT',
      'REST / GraphQL APIs',
      'Google Maps & Mapbox routing',
      'Apache Kafka',
      'Snowflake',
      'PostgreSQL',
      '.NET',
      'Python',
      'TypeScript',
      'Next.js',
      'React Native',
      'Azure OpenAI',
      'PyTorch',
      'Power BI',
    ],
  },

  // ── Relevant services we bring to logistics (cross-links) ──
  services: {
    title: 'The services we bring to logistics',
    subtitle:
      'The engineering and AI capabilities we apply to the hardest problems in movement, tracking, and delivery — explore each.',
    items: [
      {
        title: 'Custom Software Development',
        description:
          'End-to-end builds — TMS, WMS, route platforms, and driver apps — engineered for your operation instead of forcing dispatch to fit a generic tool.',
        href: '/services/custom-software-development',
        icon: 'Code2',
      },
      {
        title: 'API Development',
        description:
          'Carrier integrations (FedEx, UPS, LTL), EDI, and telematics APIs — the connectivity layer that ends portal-toggling. Our strongest differentiator in this space.',
        href: '/services/api-development',
        icon: 'Webhook',
      },
      {
        title: 'Data Engineering',
        description:
          'The pipelines that pull TMS, carrier, telematics, and EDI feeds into one coherent, analytics-ready shipment view — the foundation every dashboard sits on.',
        href: '/services/data-engineering',
        icon: 'Database',
      },
      {
        title: 'ML Development',
        description:
          'Predictive ETAs, route scoring, demand forecasting, and exception anomaly detection trained on your delivery history — not generic templates.',
        href: '/services/ml-development',
        icon: 'Brain',
      },
      {
        title: 'Intelligent Automation',
        description:
          'Agentic workflows for dynamic carrier selection, automated SLA-breach notifications, and freight document automation across the carriers you’ve connected.',
        href: '/services/intelligent-automation',
        icon: 'Workflow',
      },
      {
        title: 'Generative AI',
        description:
          'Natural-language querying of shipment and fleet data, so dispatchers and ops managers get answers in plain English — built on governed LLMs with human oversight.',
        href: '/services/generative-ai',
        icon: 'Sparkles',
      },
    ],
  },

  faqTitle: 'Questions operations and dispatch teams ask',
  faqs: [
    {
      question: 'What kinds of logistics software do you build?',
      answer:
        'We build the software layer that gives logistics operators visibility and control across every mile: custom Transportation Management Systems (load planning, carrier assignment, rate comparison, shipment tracking, delivery confirmation), fleet management and telematics dashboards (real-time GPS, driver scoring, vehicle utilization, HOS compliance), route optimization and dispatch platforms (multi-stop routing, real-time re-routing, driver mobile apps, proof-of-delivery capture), freight and carrier integration platforms (multi-carrier rate shopping, EDI/API connectivity, document automation), warehouse and fulfillment software for 3PLs and e-commerce, and logistics analytics (cost-per-shipment, on-time performance, SLA dashboards, demand forecasting). We work with regional 3PLs, freight brokers, last-mile and courier operators, e-commerce fulfillment centers, logistics-tech startups, and enterprise shippers.',
    },
    {
      question: 'Are you replacing our TMS or our telematics — our Samsara or Geotab?',
      answer:
        'No. We are software-first and platform-agnostic: we build on top of and alongside the systems you already run, not in place of them. We are not the telematics hardware vendor — we build the software layer on top of Samsara, Geotab, Verizon Connect, and Motive that turns their raw feeds into a unified ops view your dispatchers and ops managers actually use. Where you have a TMS that runs loads but offers no real intelligence layer, we build the analytics, integrations, and workflows on top of it. Where dispatch is still on spreadsheets, we build the purpose-built TMS to replace that — sized to your operation, not enterprise bloat.',
    },
    {
      question: 'We pay for telematics hardware but the data isn’t actionable — can you help?',
      answer:
        'This is one of the most common situations we see. The hardware reports faithfully, but the data sits in the vendor’s dashboard — disconnected from your dispatch board, your customers, and your own KPIs. We integrate with the telematics APIs (Samsara, Geotab, Verizon Connect) and present the data where it’s useful: real-time GPS and geofencing in your ops view, driver performance and safety scoring, vehicle utilization, maintenance alerts, and HOS compliance monitoring — alongside the rest of your operation, not in a separate tab. You keep the hardware; we build the layer that finally pays it back.',
    },
    {
      question: 'We’re a freight broker juggling carrier portals — what do you build?',
      answer:
        'A freight operations product, not enterprise middleware. We build a carrier integration platform with multi-carrier rate shopping, EDI and API connectivity to FedEx, UPS, and LTL networks, freight document automation for BOLs, PODs, and customs docs, and tracking aggregation that pulls every carrier into a single view. The difference from heavyweight enterprise tooling is the interface: a clean, usable platform dispatchers actually want to open, backed by solid API engineering underneath — so you stop toggling between five carrier logins to move one load.',
    },
    {
      question: 'Where does AI actually fit in logistics software?',
      answer:
        'AI is an intelligence layer that activates once your shipment data is connected — not a gimmick on every feature. In practice it means predictive ETAs that factor historical lane performance, weather, and carrier reliability into delivery estimates; dynamic carrier selection that routes loads to the optimal carrier by cost, availability, and performance score rather than dispatcher habit; exception intelligence that detects delays and notifies customers before an SLA breaches; and demand forecasting that helps 3PLs plan capacity through seasonal volume swings. Each one makes the underlying TMS, routing, or analytics system sharper over time.',
    },
    {
      question: 'We’re a logistics-tech startup with no in-house engineering — can you build our platform?',
      answer:
        'Yes. We help founders ship an MVP-first platform on an API-first architecture that scales, so you’re not re-platforming after your first growth spike or enterprise deal. That means a working product fast — a TMS core, a routing engine, a freight visibility layer, or a fulfillment platform — with the carrier, EDI, telematics, and data integrations your product depends on, engineered to be investor- and audit-ready from day one.',
    },
    {
      question: 'Do you also handle freight payments, carrier settlements, and invoicing?',
      answer:
        'Yes — freight runs on financial rails, and that’s where this work meets our Fintech practice. We build the financial operations layer alongside the logistics platform: carrier settlements, freight invoice automation, fuel-card data integration, and payment reconciliation, designed with PCI-aligned, tokenized payment flows and segregated financial data. The operations platform can touch money movement without becoming a payment-fraud surface, and your settlement runs stop living in a spreadsheet.',
    },
  ],

  cta: {
    title: 'Let’s give your operation visibility across every mile.',
    description:
      'Logistics runs on data that’s scattered across a TMS, a telematics dashboard, a stack of carrier portals, and a spreadsheet. Start with a consultation: we’ll map the systems and carriers you already run, the gaps between them, and the fastest realistic route from scattered shipment data to a view your team can act on.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
  },

  _unverified: [
    'All content uses capability framing only — no client names, case studies, testimonials, or measured outcome metrics are claimed.',
    'complianceDetail.frameworks — "SOC 2" and "ISO 27001" listed; confirm whether {SITE_CONFIG.name} holds these attestations or is in progress. PCI DSS, FMCSA / HOS (ELD), and C-TPAT framing describes payment-handling and data-integrity design practices, not held certifications or a legal compliance guarantee.',
    'techStandards.systems & capabilities — integration names (McLeod, MercuryGate, Project44, Samsara, Geotab, Verizon Connect, Motive, FedEx, UPS, USPS, DHL, LTL networks, Shopify, WooCommerce, Amazon, NetSuite, SAP, QuickBooks, EDI X12/EDIFACT) describe competencies; confirm which have actually shipped before implying delivered volume.',
    'services — cross-links point to live /services/* pages. hero.secondaryCta / cta.secondaryCta anchor to #services.',
    'Cross-vertical bridges to Manufacturing & Supply Chain and Fintech are referenced in segments.footerNote and FAQ; confirm a Fintech industry/solution page exists (or is planned) before adding a hard cross-link.',
  ],
};

export default logistics;
