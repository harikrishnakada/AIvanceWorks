import { BRAND_PREFIX } from '@/lib/constants';
import type { IndustryPageData } from '@/types/pages';

const foodBeverage: IndustryPageData = {
  slug: 'food-beverage',
  name: 'Food & Beverage',
  title: `${BRAND_PREFIX} Food & Beverage Software Development`,
  shortDescription:
    'Custom software and AI for the businesses that feed people — restaurant and food-service management, POS and digital ordering, menu and food-costing intelligence, food distribution and supply-chain platforms, traceability and inventory, and F&B analytics. We build the software layer that connects how food businesses operate, from the kitchen to the customer and from the supplier to the shelf — on top of the tools you already run.',

  metaTitle:
    'Food & Beverage Software Development | Restaurant, POS, Food Costing, Distribution & Traceability',
  metaDescription:
    'We build the software layer that runs modern food & beverage businesses — restaurant and food-service management, custom POS and digital ordering, recipe and food-costing platforms, food distribution and supply-chain software, traceability and inventory, and F&B analytics. Ops-first and platform-aware: we work with Toast, Square, Uber Eats, DoorDash, QuickBooks, and NetSuite, or build fully custom.',
  keywords: [
    'food and beverage software development',
    'restaurant management software development',
    'custom POS and online ordering system',
    'ghost kitchen software',
    'recipe and food costing software',
    'food distribution software',
    'food traceability software',
    'restaurant inventory management software',
    'catering management software',
    'DTC food subscription platform',
    'F&B analytics and business intelligence',
    'food supply chain software',
  ],
  canonicalPath: '/industry/food-beverage',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industry' },
    { label: `${BRAND_PREFIX} Food & Beverage`, href: '/industry/food-beverage' },
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

  industry: 'food-beverage',

  icon: 'Utensils',
  homeCard: {
    tagline:
      'The software layer that runs modern food businesses — from the kitchen to the customer, from the supplier to the shelf.',
    short: 'Ops-first F&B software — food service, distribution, and the data in between.',
    image: '/images/industries/food-beverage/category-card.jpg',
    alt: 'A guest enjoying a plated dish at a restaurant table',
    proof: ['Restaurant & POS', 'Food Costing & Menu', 'Distribution & Traceability'],
  },

  hero: {
    kicker: 'Industries · Food & Beverage',
    headline: 'From kitchen to customer — we build the software that runs modern F&B businesses.',
    subhead:
      'Food and beverage moves fast, runs on thin margins, and lives across a dozen disconnected tools — a POS here, a spreadsheet for food cost there, phone-and-email orders from suppliers, and a delivery app that owns your customer. We build the software layer that connects how you operate: front-of-house to back-of-house, kitchen to customer, supplier to shelf. Ops-first and experience-forward, compliance-aware without leading with it. We lead with food service and distribution, extend into the software layer for food manufacturing, and build on top of the platforms you already run — or fully custom when you have outgrown them.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
    heroImage: {
      src: '/images/industries/food-beverage/hero.jpg',
      alt: 'Food & beverage operations — a commercial kitchen pass connected to ordering, inventory, and food-cost dashboards',
    },
    standards: [
      'PCI DSS',
      'FSMA 204 traceability-ready',
      'HACCP-aware data capture',
      'Toast · Square · Clover',
      'Uber Eats / DoorDash APIs',
      'SOC 2',
    ],
    standardsLabel: 'Built to the standards, platforms, and rails food businesses actually run on',
  },

  // ── Problem statement (lead with the pain) ──
  pressures: {
    title: 'Food businesses run on a dozen tools that never talk — and the margin leaks in the gaps between them',
    intro:
      'The POS knows what sold, the spreadsheet knows what it cost, the supplier invoice arrives by email, the delivery app owns the customer, and the walk-in cooler knows what is about to spoil — and none of them agree with each other. In a business that already runs on single-digit margins, that gap is where the money quietly goes: over-ordered stock that spoils, dishes priced below cost because ingredient prices moved, 86’d items during peak service, and reorder decisions made on last week’s guess. We build the software to close it — and we are honest that food businesses come to us from two different places. Some need a platform built; others need the tools they already run connected, extended, or selectively replaced.',
    items: [
      {
        icon: 'ChefHat',
        title: 'Outgrown Toast, Square, or the off-the-shelf stack',
        description:
          'The generic POS got you open, but multi-location reporting, modifier logic, catering quotes, or the workflow you actually run doesn’t fit the template anymore — and every gap is another add-on subscription and another export to reconcile by hand.',
      },
      {
        icon: 'Percent',
        title: 'Margin bleeds silently in a spreadsheet',
        description:
          'Food cost lives in a workbook that’s already out of date. When an ingredient price jumps, nobody sees it until the P&L lands weeks later — and by then you’ve been selling a hero dish below cost for a month.',
      },
      {
        icon: 'Store',
        title: 'Multi-location and multi-brand chaos',
        description:
          'Restaurant groups and ghost-kitchen operators run several brands and locations off tools built for one. Orders route to the wrong station, each site reports differently, and there’s no single backend that sees the whole operation.',
      },
      {
        icon: 'Truck',
        title: 'Distribution still runs on phone, email, and paper',
        description:
          'Food distributors take orders by phone and fax, price each customer from memory, and dispatch routes on a whiteboard. There’s no customer portal, no driver app, and no way to see which perishable routes are about to lose money to spoilage.',
      },
      {
        icon: 'BarChart3',
        title: 'No single view of sales, cost, or stock',
        description:
          'Leadership asks for margin by item, waste by location, or supplier performance — and someone rebuilds it by hand from POS exports and invoices, days later. By the time the report lands, the prep, purchasing, and pricing decisions it should have informed are already made.',
      },
    ],
  },

  // ── Software catalog (dark bento) ──
  capabilities: {
    title: 'The software we build — from the kitchen to the customer, from the supplier to the shelf',
    highlightText: 'from the kitchen to the customer',
    subtitle:
      'Seven software layers that connect food operations end to end. We build them from scratch or on top of the POS, accounting, and ordering platforms you already run. And where your kitchen and sales data is ready to work harder, an AI layer sharpens the decisions — menu engineering, demand forecasting, supplier price intelligence — not a gimmick bolted onto every screen.',
    groups: [
      {
        icon: 'Utensils',
        title: 'Restaurant & Food Service Management',
        description: 'A unified ops platform from front-of-house to back-of-house — not a checklist of disconnected modules.',
        items: [
          'Order & table management with kitchen coordination',
          'Staff scheduling, labor tracking & shift workflows',
          'Multi-location & multi-brand operational reporting',
          'Catering & event management with client portals',
          'Built for groups, caterers & ghost kitchens past off-the-shelf tools',
        ],
      },
      {
        icon: 'CreditCard',
        title: 'POS & Digital Ordering Platforms',
        description: 'Custom point-of-sale and ordering across dine-in, takeaway, and delivery — mobile-first and kiosk-ready.',
        items: [
          'Dine-in, takeaway & delivery order flows with modifier logic',
          'Menu management, split billing & kitchen display (KDS) integration',
          'Native staff apps & self-service kiosk interfaces',
          'Payment processing via Stripe & Square APIs',
          'AI upsell suggestions & time-of-day dynamic pricing',
        ],
      },
      {
        icon: 'CookingPot',
        title: 'Menu, Recipe & Food Costing',
        description: 'Margin intelligence, not just a recipe database — where most operators bleed money silently.',
        items: [
          'Ingredient-level cost tracking & recipe scaling',
          'Menu engineering dashboards — profit margin by item',
          'Nutritional analysis & allergen labeling',
          'Vendor price comparison & cost-change alerts',
          'AI menu engineering — promote, reprice, or retire by margin and velocity',
        ],
      },
      {
        icon: 'Boxes',
        title: 'Food Distribution & Supply Chain',
        description: 'For food distributors and wholesalers digitizing manual, phone-and-email ordering.',
        items: [
          'Customer ordering portals & account-specific pricing catalogs',
          'Route-based delivery scheduling & driver mobile apps',
          'Lot tracking, invoicing & fulfillment coordination',
          'Integrates with ERP & accounting — QuickBooks, NetSuite',
          'AI demand forecasting by customer & SKU to cut spoilage on perishable routes',
        ],
      },
      {
        icon: 'PackageSearch',
        title: 'Food Traceability & Inventory',
        description: 'Upstream and downstream product visibility — the software infrastructure for traceability.',
        items: [
          'Lot-number tracking from supplier to customer',
          'Expiry-date management & FIFO enforcement',
          'Waste logging & cold-chain data capture',
          'Recall-readiness reporting & supplier audit trails',
          'We build the software; we partner with regulatory consultants for HACCP/FDA plans',
        ],
      },
      {
        icon: 'LineChart',
        title: 'F&B Analytics & Business Intelligence',
        description: 'The decision layer — built on the POS, ERP, and operational data you already generate.',
        items: [
          'Sales by item, location & daypart',
          'Food cost vs. budget & margin dashboards',
          'Supplier performance scorecards & waste reporting',
          'Customer ordering-behavior analysis',
          'AI menu-performance prediction & automated low-margin alerts',
        ],
      },
      {
        icon: 'Cable',
        title: 'Systems Integration & Modernization',
        description: 'Connecting and extending the stack you already run — often the first, lowest-commitment engagement.',
        items: [
          'POS-to-accounting & POS-to-ERP integrations',
          'Delivery-marketplace API bridges (Uber Eats, DoorDash, Grubhub)',
          'DTC ecommerce & subscription engines for food brands',
          'Legacy modernization — extend or selectively replace',
          'A diagnostic first step that maps the fastest path to a larger build',
        ],
      },
    ],
  },

  // ── Traceability, payments & food-data trust (honest scope) ──
  complianceDetail: {
    title: 'Software built for traceability and safe payments — with an honest line around what we build and what we don’t.',
    statement:
      'Food software sits on top of two things a business can’t afford to get wrong: the safety trail behind what it sells and the money it takes at the point of sale. We build the software infrastructure for traceability — lot and batch tracking, expiry and FIFO enforcement, supplier data capture, recall-readiness reporting, and tamper-evident audit trails — engineered to support FSMA 204 recordkeeping and HACCP data-capture obligations. And we build PCI-aligned, tokenized payment flows so a POS can move money without becoming a cardholder-data liability. What we do not do is write your HACCP or FDA food-safety plan — that is a regulatory domain, and we partner with food-safety consultants who own it. This is a deliberate, defensible scope: we give your safety program a system of record, not a compliance guarantee.',
    frameworks: [
      'FSMA 204 / FDA Food Traceability Rule (recordkeeping)',
      'HACCP-aware data capture (plans via partners)',
      'PCI DSS (payments & POS)',
      'SOC 2',
      'GDPR / CCPA (customer data)',
      'ADA / WCAG (accessible ordering)',
    ],
    safeguards: [
      {
        icon: 'Barcode',
        title: 'Lot & batch traceability by design',
        description:
          'Lot numbers, batch codes, and supplier data are captured at receiving and carried downstream to the customer — so one-up, one-back traceability is a query, not a warehouse scramble when a supplier issues a notice.',
      },
      {
        icon: 'FileCheck2',
        title: 'Recall-readiness reporting & audit trails',
        description:
          'Tamper-evident audit logs and recall-readiness reports let you scope an affected lot, identify who received it, and produce records for a mock or real recall in minutes — the recordkeeping backbone FSMA 204 expects.',
      },
      {
        icon: 'CreditCard',
        title: 'PCI-aligned, tokenized payment flows',
        description:
          'POS and online payments run through tokenized, PCI-aligned flows on established processors (Stripe, Square, Adyen) — so card data stays out of your database and the platform can take money without becoming a cardholder-data liability.',
      },
      {
        icon: 'ThermometerSnowflake',
        title: 'Expiry, FIFO & cold-chain data capture',
        description:
          'Expiry-date management, FIFO enforcement, and cold-chain temperature capture are engineered into inventory workflows — so perishable stock is used in the right order and out-of-range events are logged, not lost.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Least-privilege access across sites & vendors',
        description:
          'Role-based access for kitchen staff, managers, drivers, and wholesale customers, with scoped service accounts across every location and integration — so each role and partner sees exactly what it should and no more.',
      },
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with secrets held in a managed vault and key-rotation policies that satisfy SOC 2 and enterprise-customer security reviews.',
      },
    ],
    auditNote:
      'We provide the architecture documentation, data-flow diagrams, and traceability records your operations, finance, and food-safety partners need — and we walk your HACCP or FDA consultant through the data model so their plan and our system of record line up. We build the software layer; we don’t author the regulatory plan.',
    partnerAgreements: ['DPA', 'SLA', 'Traceability data-flow review'],
  },

  // ── Sub-verticals (who we serve) ──
  segments: {
    title: 'Food & beverage isn’t one buyer — and we don’t build like it is',
    subtitle:
      'A restaurant group unifying three locations, a ghost-kitchen operator routing five brands, and a regional distributor replacing phone orders share almost nothing about how they buy or what they need built. We lead with food service and distribution, extend into the software layer for food manufacturing, and are honest about which track you’re on.',
    items: [
      {
        icon: 'Store',
        name: 'Restaurant Groups (3–20 locations)',
        buyer: 'Owner · Director of Operations',
        needs: [
          'A unified ops platform across every location',
          'One reporting layer instead of per-site exports',
          'Food-cost and labor visibility that’s current, not monthly',
          'Integration-first work on the POS you keep',
        ],
      },
      {
        icon: 'CookingPot',
        name: 'Ghost & Dark Kitchen Operators',
        buyer: 'Founder · Head of Operations',
        needs: [
          'Multi-brand order routing into one kitchen backend',
          'Custom ordering & kitchen-management platform',
          'Delivery-marketplace API aggregation',
          'A single view across brands and channels',
        ],
      },
      {
        icon: 'Utensils',
        name: 'Catering Companies',
        buyer: 'Owner · Events Director',
        needs: [
          'Catering & event management to replace manual quoting',
          'A client portal for orders, changes & approvals',
          'Recipe scaling and per-event food costing',
          'Scheduling and staffing tied to the calendar',
        ],
      },
      {
        icon: 'Truck',
        name: 'Regional Food Distributors',
        buyer: 'Owner · VP of Operations',
        needs: [
          'A customer ordering portal to replace phone & email',
          'Account-specific pricing catalogs & invoicing',
          'Route scheduling and a driver mobile app',
          'ERP and accounting integration',
        ],
      },
      {
        icon: 'ShoppingCart',
        name: 'Specialty & DTC Food Brands',
        buyer: 'Founder · Head of E-Commerce',
        needs: [
          'A custom D2C storefront past template limits',
          'A subscription and recurring-box engine',
          'Reorder and churn prediction from purchase history',
          'Inventory tied to fulfillment and 3PLs',
        ],
      },
      {
        icon: 'Factory',
        name: 'Mid-Market Food Manufacturers',
        buyer: 'Operations · Production Manager',
        needs: [
          'Recipe & costing software off the spreadsheet',
          'Production tracking and batch records',
          'Lot traceability and inventory visibility',
          'The software layer — regulatory plans via partners',
        ],
      },
    ],
    footerNote:
      'Food businesses move product and take payment — so a single engagement often reaches into our Logistics work (route optimization, fleet and last-mile delivery for operators running their own trucks) and our Retail work (grocery, specialty food retail, and DTC storefronts and subscriptions). A short consultation will map your track, the platforms you already run, and the fastest route from a dozen disconnected tools to one operating picture.',
  },

  // ── Technology & standards ──
  techStandards: {
    title: 'We speak your stack — from the POS to the ERP',
    subtitle:
      'The platforms, processors, and data sources food businesses already run on, and the frameworks and AI tooling we build with on top of them. Whether you’re on Toast, Square, or a fully custom stack, we work with what you have and build what you need — no platform bias.',
    systemsTitle: 'Platforms & systems you already run',
    systems: [
      'POS & ordering — Toast, Square, Clover, Lightspeed',
      'Delivery marketplaces — Uber Eats, DoorDash, Grubhub APIs',
      'Payments — Stripe, Square, Adyen, PayPal',
      'Accounting & ERP — QuickBooks, NetSuite, Sage',
      'Inventory & procurement — MarketMan, xtraCHEF, Restaurant365',
      'Ecommerce & subscription — Shopify, Recharge (DTC food brands)',
      'Analytics — Google Analytics, Power BI',
    ],
    technologiesTitle: 'Frameworks, standards & AI tooling',
    technologies: [
      'AWS',
      'Azure',
      'Next.js',
      'React Native',
      'TypeScript',
      '.NET',
      'Node.js',
      'Python',
      'GraphQL / REST APIs',
      'PostgreSQL',
      'Snowflake',
      'Azure OpenAI',
      'PyTorch',
      'Power BI',
    ],
  },

  // ── Relevant services we bring to F&B (cross-links) ──
  services: {
    title: 'The services we bring to food & beverage',
    subtitle:
      'The engineering and AI capabilities we apply to the hardest problems in food operations, distribution, and margin intelligence — explore each.',
    items: [
      {
        title: 'Custom Software Development',
        description:
          'End-to-end builds — food-service platforms, POS, ordering, distribution portals, and costing tools — engineered for how you actually run instead of forcing your operation into a template.',
        href: '/services/custom-software-development',
        icon: 'Code2',
      },
      {
        title: 'API Development',
        description:
          'The integration layer that ends the disconnected-tools problem — POS, accounting, ERP, and delivery-marketplace APIs stitched into one coherent system.',
        href: '/services/api-development',
        icon: 'Webhook',
      },
      {
        title: 'Data Engineering',
        description:
          'The pipelines that pull POS, invoice, inventory, and delivery feeds into one analytics-ready view of sales, cost, and stock — the foundation every food-cost dashboard sits on.',
        href: '/services/data-engineering',
        icon: 'Database',
      },
      {
        title: 'ML Development',
        description:
          'Demand forecasting, menu-performance prediction, spoilage reduction, and reorder and churn models trained on your kitchen and sales data — not generic templates.',
        href: '/services/ml-development',
        icon: 'Brain',
      },
      {
        title: 'Intelligent Automation',
        description:
          'Agentic workflows for automated reorder triggers, prep-quantity planning, supplier price alerts, and low-margin item flags across the systems you’ve connected.',
        href: '/services/intelligent-automation',
        icon: 'Workflow',
      },
      {
        title: 'Generative AI',
        description:
          'Natural-language querying of sales and food-cost data, plus AI-assisted menu descriptions and content — built on governed LLMs with human oversight.',
        href: '/services/generative-ai',
        icon: 'Sparkles',
      },
    ],
  },

  faqTitle: 'Questions food & beverage operators ask',
  faqs: [
    {
      question: 'What kinds of food & beverage software do you build?',
      answer:
        'We build the software layer that runs food businesses end to end: restaurant and food-service management platforms (order and table management, kitchen coordination, staff scheduling, catering and multi-location reporting); custom POS and digital ordering (dine-in, takeaway, delivery, modifier logic, KDS integration, kiosks); menu, recipe and food-costing software (ingredient-level cost tracking, recipe scaling, menu-engineering dashboards, vendor price comparison); food distribution and supply-chain platforms (customer portals, route scheduling, driver apps, account-specific pricing); food traceability and inventory (lot tracking, expiry and FIFO, waste logging, recall-readiness reporting); and F&B analytics and BI. We lead with food service and distribution, and extend into the software layer for food manufacturers.',
    },
    {
      question: 'Are you going to force us off Toast or Square onto something new?',
      answer:
        'No. Most food businesses don’t need to rip out their POS — they need it connected to everything else and extended where the template stops. If Toast, Square, or Clover is working, we build on top of it: integrations to your accounting and ERP, delivery-marketplace API bridges, custom reporting, and the workflows the off-the-shelf tool doesn’t cover. If you’ve genuinely outgrown it — multi-brand routing, catering, complex modifier logic, or requirements no platform supports cleanly — we build fully custom. Integration-first is usually the lowest-commitment, highest-value first engagement.',
    },
    {
      question: 'How does the food-costing software actually protect our margins?',
      answer:
        'This is where most operators bleed money silently. We build recipe and food-costing software as a margin-intelligence tool, not just a recipe database: ingredient-level cost tracking that updates as supplier prices move, recipe scaling, menu-engineering dashboards that show profit margin by item, and vendor price comparison with cost-change alerts. The moment an ingredient price jumps, you see which dishes just went underwater — instead of finding out weeks later on the P&L. Where your data is ready, an AI layer recommends which items to promote, reprice, or retire based on margin and velocity.',
    },
    {
      question: 'Can you build software for food distribution and wholesale?',
      answer:
        'Yes — it’s one of our strongest F&B tracks. For food distributors and wholesalers we build customer ordering portals that replace phone-and-email orders, account-specific pricing catalogs, route-based delivery scheduling, driver mobile apps, lot tracking, and invoicing — integrated with QuickBooks or NetSuite. Because many distributors run their own fleet, this often reaches into our Logistics work: route optimization, fleet management, and last-mile tracking layered on top of order management. One client, two verticals covered. An AI demand-forecasting layer can predict pre-build quantities by customer and SKU to cut spoilage on perishable routes.',
    },
    {
      question: 'Do you handle food safety and FDA / HACCP compliance?',
      answer:
        'We build the software infrastructure for traceability and food safety — lot and batch tracking from supplier to customer, expiry and FIFO enforcement, cold-chain data capture, supplier audit trails, and recall-readiness reporting engineered to support FSMA 204 recordkeeping and HACCP data-capture obligations. What we do not do is author your HACCP or FDA food-safety plan — that’s a regulatory domain, and we partner with food-safety consultants who own it and make sure their plan and our system of record line up. It’s an honest, defensible scope: we give your safety program a system of record, not a compliance guarantee.',
    },
    {
      question: 'We’re a ghost kitchen running several brands — can you unify the backend?',
      answer:
        'Yes. Multi-brand order routing is a defining ghost- and dark-kitchen problem: orders arrive across Uber Eats, DoorDash, Grubhub, and your own channels for several brands, and the kitchen has no unified backend. We build a custom ordering and kitchen-management platform that aggregates every channel and brand into one order stream, routes tickets to the right stations, and gives you a single operational and financial view across the whole operation — instead of juggling a separate tablet per marketplace per brand.',
    },
    {
      question: 'We’re a DTC food brand — can you build our storefront and subscriptions?',
      answer:
        'Yes, and this is where food and beverage overlaps with our Retail work. For specialty and DTC food brands we build custom D2C storefronts past template limits, subscription and recurring-box engines, and reorder- and churn-prediction models trained on purchase history to predict next-order timing and flag customers about to lapse. We tie the storefront to inventory and fulfillment (including 3PLs) so the front end and the back end share one picture of stock.',
    },
    {
      question: 'Where does AI actually fit in food & beverage software?',
      answer:
        'AI is an intelligence layer that activates once your kitchen and sales data is connected — not a gimmick on every screen. In practice: menu engineering that surfaces which items to promote, reprice, or retire based on margin, velocity, and customer preference; demand forecasting that predicts daily prep quantities to minimize waste and prevent 86’d items during peak service; supplier price intelligence that monitors ingredient-cost fluctuations across vendors and flags when switching improves margin; and reorder prediction that, for DTC food brands and subscription boxes, forecasts churn and next-order timing. Each one makes the underlying POS, costing, distribution, or analytics system sharper over time.',
    },
  ],

  cta: {
    title: 'Let’s connect how you run — from the kitchen to the customer.',
    description:
      'Food & beverage data is scattered across a POS, a food-cost spreadsheet, supplier invoices, and a delivery app — and none of them agree. Start with a consultation: we’ll map the platforms you already run, whether you’re in food service, distribution, or manufacturing, and the fastest realistic route from a dozen disconnected tools to one operating picture.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
  },

  _unverified: [
    'All content uses capability framing only — no client names, case studies, testimonials, or measured outcome metrics are claimed.',
    'IMAGES: hero uses /images/industries/food-beverage/hero.jpg (present). Per request, the homepage category card reuses the same hero.jpg (no separate category-card.jpg). Cropping differs between the wide hero and the homepage bento tile — confirm the single image reads well at the card aspect ratio, or supply a purpose-shot category-card.jpg later.',
    'complianceDetail.frameworks — "SOC 2" listed; confirm whether AIvanceWorks holds this attestation or is in progress. FSMA 204, HACCP, PCI DSS, GDPR/CCPA, and ADA/WCAG framing describes software recordkeeping and data-protection design practices, NOT held certifications, a food-safety guarantee, or regulatory-plan authorship (explicitly scoped to partners).',
    'techStandards.systems & capabilities — platform names (Toast, Square, Clover, Lightspeed, Uber Eats, DoorDash, Grubhub, Stripe, Adyen, PayPal, QuickBooks, NetSuite, Sage, MarketMan, xtraCHEF, Restaurant365, Shopify, Recharge) describe integration competencies; confirm which have actually shipped before implying delivered volume.',
    'services — cross-links point to live /services/* pages (custom-software-development, api-development, data-engineering, ml-development, intelligent-automation, generative-ai). hero.secondaryCta / cta.secondaryCta anchor to #services.',
    'Cross-vertical bridges to Logistics and Retail are referenced in segments.footerNote and FAQ; both industry pages exist and are registered.',
    'Registered in content.ts INDUSTRY_PAGE_MODULES and added to HOME_INDUSTRY_ORDER. Nav entry already present in constants.ts (line ~141).',
  ],
};

export default foodBeverage;
