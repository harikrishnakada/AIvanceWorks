import { BRAND_PREFIX } from '@/lib/constants';
import type { IndustryPageData } from '@/types/pages';

const manufacturingSupplyChain: IndustryPageData = {
  slug: 'manufacturing-supply-chain',
  name: 'Manufacturing & Supply Chain',
  title: `${BRAND_PREFIX} Manufacturing & Supply Chain Software Development`,
  shortDescription:
    'Custom software and AI that connect the shop floor to the decision layer — MES dashboards, supply-chain visibility, WMS, predictive maintenance, ERP integration, and operational analytics — built on top of the systems you already run, not in place of them.',

  metaTitle: 'Manufacturing & Supply Chain Software Development | MES, WMS & ERP Integration',
  metaDescription:
    'We build the software that connects the shop floor to the decision layer — custom MES and production dashboards, supply-chain visibility platforms, WMS, predictive maintenance, ERP integration, and operational analytics. The data and intelligence layer on top of SAP, Oracle, SCADA, and your 3PLs — not a replacement for them.',
  keywords: [
    'manufacturing software development',
    'supply chain software development',
    'custom MES software',
    'manufacturing execution system development',
    'warehouse management system development',
    'ERP integration services',
    'SAP integration development',
    'predictive maintenance software',
    'supply chain visibility platform',
    'OEE dashboard development',
    'manufacturing analytics software',
    'OPC-UA integration',
  ],
  canonicalPath: '/book-consultation?industry=manufacturing-supply-chain',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industry' },
    { label: `${BRAND_PREFIX} Manufacturing & Supply Chain`, href: '/industry/manufacturing-supply-chain' },
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

  industry: 'manufacturing',

  icon: 'Factory',
  homeCard: {
    tagline:
      'Connecting the shop floor to the decision layer — built on top of SAP, Oracle, and the plant systems you already run.',
    short: 'Connecting the shop floor to the decision layer, on the systems you already run.',
    image: '/images/industries/msc/category-card.jpg',
    alt: 'Automated production line on a modern factory floor',
    proof: ['MES Dashboards', 'ERP Integration', 'Predictive Maintenance'],
  },

  hero: {
    kicker: 'Industries · Manufacturing & Supply Chain',
    headline: 'From the shop floor to the decision layer — we build the software that connects them.',
    subhead:
      'Your machines, your warehouse, your 3PLs, and your ERP each hold part of the picture — and none of them talk. We are the software engineers who build the layer in between: the pipelines, dashboards, and intelligence that turn operations data into visibility, and visibility into action. We build on top of SAP, Oracle, and your plant-floor systems — not as a replacement for them.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
    heroImage: {
      src: '/images/industries/msc/hero.jpg',
      alt: 'Modern manufacturing plant floor with connected machinery and operations data dashboards',
    },
    standards: ['OPC-UA', 'MQTT / Sparkplug B', 'ISA-95 / Purdue', 'EDI', 'SOC 2', 'ISO 27001'],
    standardsLabel: 'Built to the standards plant-floor and supply-chain systems run on',
  },

  // ── Problem statement (lead with the pain) ──
  pressures: {
    title: 'Operations runs on data — most of it is trapped where no one can use it',
    intro:
      'The floor generates more data every shift, the ERP holds the financials, the warehouse and 3PLs hold the inventory — and none of it lines up into a view anyone can act on. These are the gaps we build software to close. We are not here to replace your ERP or your machines; we are the layer that makes them work together.',
    items: [
      {
        icon: 'Layers',
        title: 'The ERP can’t see the floor',
        description:
          'SAP, Oracle, or Dynamics runs the business, but it was never built to surface work-in-progress, machine utilization, or shift-level yield in real time. Managers fly blind between month-end closes.',
      },
      {
        icon: 'Split',
        title: 'Fragmented systems, no single view',
        description:
          'ERP, WMS, MES, CMMS, and 3PL feeds each tell a different version of the truth. Reconciling them by hand and by spreadsheet is slow, late, and always slightly wrong.',
      },
      {
        icon: 'CircuitBoard',
        title: 'IoT investment that never paid off',
        description:
          'You bought the sensors and the SCADA upgrade, and the data still sits in a historian no one queries. The hardware is in place; the software layer that turns it into intelligence is not.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Maintenance is still reactive',
        description:
          'Equipment fails before anyone sees it coming, and unplanned downtime cascades through the schedule. The signals to predict it already exist — they just aren’t wired into a model or an alert.',
      },
      {
        icon: 'ClipboardList',
        title: 'Inventory and ops run on spreadsheets',
        description:
          'Stock counts, reorder points, supplier follow-up, and pick-pack-ship still live in spreadsheets and email. It works until it doesn’t — and it doesn’t scale past the next growth spike.',
      },
    ],
  },

  // ── AI & technology catalog (dark bento) ──
  capabilities: {
    title: 'The software we build — from the machine to the management report',
    highlightText: 'from the machine to the management report',
    subtitle:
      'Six software layers that connect operations data to the people who act on it. Each is built on top of the systems you already run, with an AI layer that sharpens decisions over time — not a gimmick wrapped around every feature.',
    groups: [
      {
        icon: 'Gauge',
        title: 'MES & Production Dashboards',
        description: 'Real-time floor visibility for teams past the spreadsheet, short of a full SAP rollout.',
        items: [
          'Work-in-progress & shift scheduling',
          'Machine utilization & yield monitoring',
          'Digital quality-control checklists',
          'Live production dashboards by line & cell',
          'Anomaly detection & automated alert routing when throughput drops',
        ],
      },
      {
        icon: 'Network',
        title: 'Supply Chain Visibility Platforms',
        description: 'One coherent operations view, pulled from sources that were never meant to agree.',
        items: [
          'Supplier portals & purchase-order tracking',
          'Inbound shipment visibility & ETAs',
          'Inventory reconciliation across systems',
          'Demand-forecasting dashboards',
          'API-first pipelines from ERP, WMS, 3PL & EDI feeds',
        ],
      },
      {
        icon: 'Warehouse',
        title: 'Inventory & Warehouse Management',
        description: 'Software-layer WMS for distributors, 3PLs, and manufacturers running their own space.',
        items: [
          'Real-time stock levels & location tracking',
          'FIFO / LIFO & reorder automation',
          'Barcode & QR scanning integrations',
          'Pick-pack-ship workflows',
          'Multi-warehouse & multi-client (3PL) support',
        ],
      },
      {
        icon: 'Activity',
        title: 'Predictive Maintenance & Monitoring',
        description: 'The software and data layer that makes existing sensor investments finally useful.',
        items: [
          'Equipment health scores & failure-probability models',
          'Maintenance scheduling automation',
          'Downtime reporting & root-cause views',
          'IoT, OPC-UA & SCADA data integration',
          'Connects to existing CMMS platforms',
        ],
      },
      {
        icon: 'Workflow',
        title: 'ERP Integration & Workflow Automation',
        description: 'The glue layer between systems that don’t talk out of the box.',
        items: [
          'Middleware & APIs across SAP, Oracle, Dynamics & Epicor',
          'Custom modules for workflows the ERP doesn’t support',
          'EDI, 3PL & partner-system connectors',
          'Agentic automation for procurement triggers & invoice matching',
          'Exception routing across connected systems',
        ],
      },
      {
        icon: 'BarChart3',
        title: 'Operational Analytics & BI',
        description: 'The decision layer — built on the data sources you already have.',
        items: [
          'OEE & cost-per-unit dashboards',
          'Supplier scorecards & shift-level performance',
          'Demand-vs-capacity planning views',
          'Built on SQL, ERP exports & IoT feeds',
          'Natural-language querying for plant managers — answers without an analyst bottleneck',
        ],
      },
    ],
  },

  // ── Trust, OT/IT boundary & data security (prominent) ──
  complianceDetail: {
    title: 'Software that respects the plant network and the data on it.',
    statement:
      'Manufacturing software lives where IT meets OT — production data, supplier terms, and in many cases export-controlled or regulated specifications. Connecting the floor to the cloud without opening the plant network to risk is the hard part, and it is where we start. Network segmentation, least-privilege access, and data security are designed in from the first commit, never bolted on before go-live.',
    frameworks: [
      'SOC 2',
      'ISO 27001',
      'IEC 62443',
      'NIST CSF',
      'ITAR / EAR (export-controlled data)',
      'GDPR / CCPA',
    ],
    safeguards: [
      {
        icon: 'Split',
        title: 'IT / OT boundary by design',
        description:
          'We bridge plant-floor systems to the cloud through segmented, one-way-where-possible data paths aligned to the ISA-95 / Purdue model — so production data flows up without exposing controllers to the corporate network or the internet.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Least-privilege access & audit trails',
        description:
          'Role-based access, scoped service accounts, and tamper-evident audit logs across every integration — so you can see who touched what, and supplier or auditor access stays exactly as narrow as it should be.',
      },
      {
        icon: 'FileLock2',
        title: 'Export-controlled & sensitive data handling',
        description:
          'For defense, aerospace, and regulated manufacturers, we design data residency, access controls, and segregation aligned to ITAR / EAR expectations so controlled technical data stays inside the right boundary.',
      },
      {
        icon: 'Plug',
        title: 'Secure industrial connectivity',
        description:
          'We integrate via OPC-UA, MQTT/Sparkplug B, and modern historian APIs with encryption and authentication enabled — not flat, unauthenticated polling that turns the data layer into an attack surface.',
      },
      {
        icon: 'GitCompareArrows',
        title: 'Traceability & data lineage',
        description:
          'Every metric in a dashboard can be traced back to its source system and transformation, so reconciliation, recalls, and supplier disputes rest on a defensible data lineage rather than a spreadsheet no one trusts.',
      },
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with secrets held in a managed vault and key-rotation policies that satisfy SOC 2 and ISO 27001 expectations.',
      },
    ],
    auditNote:
      'We provide the architecture documentation, network and data-flow diagrams, and control evidence your IT security, OT, and compliance teams need — and we walk them through the IT/OT boundary, access model, and data-handling controls before a single line is connected to the plant network.',
    partnerAgreements: ['DPA', 'SLA', 'Security architecture review'],
  },

  // ── Sub-verticals (who we serve) ──
  segments: {
    title: 'Operations isn’t one buyer — and we don’t build like it is',
    subtitle:
      'A mid-market plant, a 3PL, and a logistics-tech startup share almost nothing about how they buy or what they need built. We scope, integrate, and frame the work to fit each one — and we’re honest about where the software layer ends.',
    items: [
      {
        icon: 'Factory',
        name: 'Mid-Market Manufacturers',
        buyer: 'Plant Manager · IT Director · 50–500 employees',
        needs: [
          'Floor-level data the ERP never surfaces',
          'A custom MES short of a full SAP rollout',
          'ERP integration that actually connects systems',
          'Live production dashboards by line and shift',
        ],
      },
      {
        icon: 'Truck',
        name: 'Distributors & 3PLs',
        buyer: 'Director of Operations · VP Logistics',
        needs: [
          'Custom WMS or inventory platform',
          'Real-time stock visibility across locations',
          'Multi-client support and SLA reporting',
          'Pick-pack-ship and reorder automation',
        ],
      },
      {
        icon: 'Rocket',
        name: 'Supply-Chain & Logistics-Tech Startups',
        buyer: 'Founder · Head of Product',
        needs: [
          'A full platform build, MVP-first',
          'Engineering capacity without an in-house team',
          'API-first architecture that scales',
          'Investor- and audit-ready foundations from day one',
        ],
      },
      {
        icon: 'Wrench',
        name: 'Plant Operations & Maintenance',
        buyer: 'Operations Manager · Maintenance Lead',
        needs: [
          'A predictive-maintenance software layer',
          'Value from sensors and SCADA already in place',
          'Downtime reporting and failure prediction',
          'Integration with the existing CMMS',
        ],
      },
      {
        icon: 'TrendingUp',
        name: 'COO & VP Operations',
        buyer: 'COO · VP Operations',
        needs: [
          'A single view across fragmented systems',
          'Unified operational analytics and BI',
          'OEE, cost-per-unit, and capacity planning',
          'Natural-language answers, no analyst bottleneck',
        ],
      },
      {
        icon: 'Building2',
        name: 'Multi-Site & Regulated Manufacturers',
        buyer: 'Director of Digital · IT / OT Leadership',
        needs: [
          'Standardized data across plants and lines',
          'A secure, segmented IT/OT integration layer',
          'Export-controlled and regulated data handling',
          'Custom workflows the ERP can’t support',
        ],
      },
    ],
    footerNote:
      'Not sure which path fits? A short consultation will map your segment, the systems and data sources you already run, and the fastest route from trapped operations data to a view your team can act on.',
  },

  // ── Technology & standards ──
  techStandards: {
    title: 'We speak your stack — and your floor',
    subtitle:
      'The systems and data sources manufacturing and supply chain already run on, and the platforms, standards, and AI frameworks we build with on top of them.',
    systemsTitle: 'Systems & data sources you already run',
    systems: [
      'ERP — SAP, Oracle, Microsoft Dynamics 365, Epicor, NetSuite',
      'SCADA, PLCs & historians (OSIsoft PI, Ignition)',
      'CMMS (IBM Maximo, Fiix, UpKeep)',
      'WMS / TMS & existing inventory systems',
      'EDI, 3PL & supplier-portal APIs',
      'OPC-UA, Modbus & MQTT endpoints',
      'Barcode, QR & RFID scanning hardware',
    ],
    technologiesTitle: 'Platforms, standards & AI frameworks',
    technologies: [
      'Azure',
      'AWS',
      'OPC-UA',
      'MQTT / Sparkplug B',
      'ISA-95',
      'Apache Kafka',
      'Snowflake',
      'Databricks',
      '.NET',
      'Python',
      'TypeScript',
      'Next.js',
      'Azure OpenAI',
      'PyTorch',
      'LangChain',
      'Power BI',
    ],
  },

  // ── Relevant services we bring to manufacturing (cross-links) ──
  services: {
    title: 'The services we bring to manufacturing & supply chain',
    subtitle:
      'The engineering and AI capabilities we apply to the hardest problems on the floor and across the supply chain — explore each.',
    items: [
      {
        title: 'Custom Software Development',
        description:
          'End-to-end builds — MES, WMS, and supply-chain platforms — engineered for your operation instead of forcing the operation to fit off-the-shelf tools.',
        href: '/services/custom-software-development',
        icon: 'Code2',
      },
      {
        title: 'Data Engineering',
        description:
          'The pipelines that pull ERP, WMS, 3PL, and IoT feeds into one coherent, analytics-ready operations view — our strongest differentiator in this space.',
        href: '/services/data-engineering',
        icon: 'Database',
      },
      {
        title: 'API Development',
        description:
          'The integration and middleware layer between SAP, Oracle, Epicor, EDI, and plant-floor systems that don’t talk out of the box — the glue most vendors bolt on too late.',
        href: '/services/api-development',
        icon: 'Webhook',
      },
      {
        title: 'ML Development',
        description:
          'Predictive-maintenance models, demand forecasting, and anomaly detection trained on your operations data — not generic templates.',
        href: '/services/ml-development',
        icon: 'Brain',
      },
      {
        title: 'Intelligent Automation',
        description:
          'Agentic workflows that automate procurement triggers, invoice matching, and exception routing across the systems you’ve connected.',
        href: '/services/intelligent-automation',
        icon: 'Workflow',
      },
      {
        title: 'Generative AI',
        description:
          'Natural-language querying of operational data, so plant managers get dashboard answers in plain English — built on governed LLMs with human oversight.',
        href: '/services/generative-ai',
        icon: 'Sparkles',
      },
    ],
  },

  faqTitle: 'Questions operations and engineering teams ask',
  faqs: [
    {
      question: 'What kinds of manufacturing and supply chain software do you build?',
      answer:
        'We build the software layer that connects the floor to the decision layer: custom MES and production dashboards (work-in-progress, machine utilization, yield, quality checklists), supply-chain visibility and management platforms (supplier portals, PO tracking, inbound visibility, demand forecasting), inventory and warehouse management systems (real-time stock, location tracking, reorder automation, pick-pack-ship), predictive maintenance and equipment monitoring, ERP integration and workflow automation, and operational analytics and BI dashboards (OEE, cost-per-unit, supplier scorecards). We work with mid-market manufacturers, distributors and 3PLs, supply-chain and logistics-tech startups, plant operations and maintenance teams, and COO / VP Operations leadership.',
    },
    {
      question: 'Are you replacing our ERP — our SAP or Oracle?',
      answer:
        'No. We are software-first and ERP-agnostic: we build on top of and alongside the ERP you already run, not in place of it. The ERP runs the business; our job is the operational layer it was never designed for — surfacing floor-level data in real time, connecting siloed systems, and building the custom modules and middleware that SAP, Oracle, Dynamics, and Epicor don’t handle out of the box. That’s a realistic, high-value niche where mid-market manufacturers are consistently underserved, and it doesn’t require us to own the ERP relationship.',
    },
    {
      question: 'We bought IoT sensors and a SCADA upgrade but aren’t getting value. Can you help?',
      answer:
        'This is one of the most common situations we see. We’re not the hardware or IoT vendor — we’re the software and data layer that makes existing sensor investments useful. We integrate with your IoT sensor APIs, OPC-UA endpoints, and SCADA historians, then build the predictive-maintenance models, equipment health scores, downtime reporting, and dashboards that turn that raw signal into maintenance intelligence and action. The hardware is already in place; we build the layer that finally pays it back.',
    },
    {
      question: 'How do you connect plant-floor systems to the cloud without creating a security risk?',
      answer:
        'Carefully, and by design from the first commit. We bridge OT and IT through segmented, least-privilege data paths aligned to the ISA-95 / Purdue model, so production data flows up to dashboards and analytics without exposing controllers to the corporate network or the internet. We integrate over authenticated, encrypted industrial protocols (OPC-UA, MQTT/Sparkplug B) rather than flat polling, enforce role-based access with audit trails, and — for defense, aerospace, and regulated manufacturers — design data handling aligned to ITAR / EAR and ISO 27001 expectations. We walk your IT security and OT teams through the boundary and access model before anything connects to the plant network.',
    },
    {
      question: 'Where does AI actually fit in manufacturing and supply chain software?',
      answer:
        'AI is an intelligence layer that activates once your data is connected and ready to work harder — not a gimmick on every feature. In practice that means anomaly detection on production KPIs with automated alert routing when throughput drops, predictive-maintenance models that score failure probability before equipment goes down, demand forecasting across your supply chain, agentic workflows that automate procurement triggers and invoice matching, and natural-language querying that lets a plant manager ask a question in plain English and get a dashboard answer without waiting on an analyst. Each one makes the underlying MES, WMS, or analytics system sharper over time.',
    },
    {
      question: 'We’re a logistics-tech startup with no in-house engineering — can you build our platform?',
      answer:
        'Yes. We help founders ship an MVP-first platform on an API-first architecture that scales, so you’re not re-platforming after your first growth spike or enterprise deal. That means a working product fast — a supply-chain visibility core, a WMS, or a forecasting engine — with the ERP, 3PL, EDI, and data integrations your product depends on, engineered to be investor- and audit-ready from day one.',
    },
  ],

  cta: {
    title: 'Let’s connect your floor to your decision layer.',
    description:
      'Operations runs on data that’s trapped in systems that don’t talk. Start with a consultation: we’ll map your systems and data sources, the gaps between them, and the fastest realistic route from trapped operations data to a view your team can act on.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
  },

  _unverified: [
    'All content uses capability framing only — no client names, case studies, testimonials, or measured outcome metrics are claimed.',
    'complianceDetail.frameworks — "SOC 2" and "ISO 27001" listed; confirm whether {SITE_CONFIG.name} holds these attestations or is in progress. IEC 62443, NIST CSF, and ITAR / EAR framing describes security-architecture and data-handling design practices, not held certifications or a legal compliance guarantee.',
    'techStandards.systems & capabilities — integration names (SAP, Oracle, Dynamics, Epicor, NetSuite, OSIsoft PI, Ignition, Maximo, Fiix, UpKeep, OPC-UA, MQTT/Sparkplug, Modbus, EDI) describe competencies; confirm which have actually shipped before implying delivered volume.',
    'services — cross-links point to live /services/* pages. hero.secondaryCta / cta.secondaryCta anchor to #services.',
    'Dedicated solution pages exist for MES, supply-chain-management, warehouse-management-systems, and manufacturing-operations-management; consider adding direct cross-links to those /solutions/* pages if the team wants tighter funnel coupling.',
  ],
};

export default manufacturingSupplyChain;
