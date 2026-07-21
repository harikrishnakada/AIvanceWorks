import { BRAND_PREFIX } from '@/lib/constants';
import type { IndustryPageData } from '@/types/pages';

const retail: IndustryPageData = {
  slug: 'retail',
  name: 'Retail',
  title: `${BRAND_PREFIX} Retail Software Development`,
  shortDescription:
    'Custom software and AI that connect how people shop with how retailers operate — storefronts and headless commerce, POS and omnichannel, inventory and order management, retail-native CRM and loyalty, marketplaces, analytics, and the integrations that tie it all together. We build both sides of the experience layer, on top of the platforms you already run.',

  metaTitle: 'Retail Software Development | E-Commerce, POS, Inventory, CRM & Retail Integration',
  metaDescription:
    'We build the software layer that connects the shopping experience to retail operations — custom e-commerce and headless storefronts, POS and omnichannel, inventory and order management, retail-native CRM and loyalty, multi-vendor marketplaces, and retail analytics. Platform-agnostic by design: we work with Shopify, Magento, WooCommerce, Stripe, and Square, or build fully custom — no platform bias.',
  keywords: [
    'retail software development',
    'e-commerce platform development',
    'headless commerce development',
    'custom POS software development',
    'omnichannel retail software',
    'inventory management system development',
    'order management system development',
    'retail CRM and loyalty platform',
    'multi-vendor marketplace development',
    'retail analytics and business intelligence',
    'retail systems integration',
    'DTC ecommerce development',
  ],
  canonicalPath: '/industry/retail',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industry' },
    { label: `${BRAND_PREFIX} Retail`, href: '/industry/retail' },
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

  industry: 'retail',

  icon: 'ShoppingBag',
  homeCard: {
    tagline:
      'The software layer that connects how people shop with how retailers operate — from browse to buy to reorder.',
    short: 'Both sides of the retail experience layer — storefront to back office.',
    image: '/images/industries/retail/hero.jpg',
    alt: 'A modern retail storefront and checkout counter with connected screens',
    proof: ['E-Commerce & POS', 'Inventory & OMS', 'Retail CRM & Loyalty'],
  },

  hero: {
    kicker: 'Industries · Retail',
    headline: 'Retail is won or lost at the experience layer. We build both sides of it.',
    subhead:
      'Customer experience on the front, operational efficiency on the back — and the software in between that keeps them in sync. Whether you are a DTC brand who has outgrown Shopify and needs a custom storefront, or an established retailer whose POS, inventory, and online channels never talk to each other, we build the layer that connects browse to buy to reorder. Platform-agnostic by design: on top of the systems you already run, or fully custom — your business model decides, not our certification portfolio.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
    heroImage: {
      src: '/images/industries/retail/hero.jpg',
      alt: 'Retail operations — an omnichannel storefront, checkout, and a unified inventory and orders dashboard',
    },
    standards: ['PCI DSS', 'Headless / API-first', 'Shopify · Magento · WooCommerce', 'Stripe / Square APIs', 'SOC 2', 'GDPR / CCPA'],
    standardsLabel: 'Built to the standards, platforms, and payment rails retail runs on',
  },

  // ── Problem statement (lead with the pain) ──
  pressures: {
    title: 'Every touchpoint generates data — and none of it lines up into a single view of the customer or the stock',
    intro:
      'The storefront knows what people browsed, the POS knows what sold in-store, the warehouse knows what is left, and the email tool knows who clicked — and none of them agree with each other. That gap is where sales leak: oversold items, orphaned carts, loyal customers treated like strangers, and reorder decisions made on last month’s guess. We build software to close it — and we are honest about the two very different starting points retailers come to us with. Some need a storefront or platform built from scratch. Others need their existing POS, inventory, and commerce systems connected, extended, or selectively replaced — not a full rewrite.',
    items: [
      {
        icon: 'ShoppingCart',
        title: 'Outgrown the storefront you started on',
        description:
          'Shopify or WooCommerce got you launched, but the checkout flow, promotions logic, or catalog model you actually need doesn’t fit the template anymore — and every workaround is another app subscription and another point of fragility.',
      },
      {
        icon: 'Store',
        title: 'In-store and online don’t share a brain',
        description:
          'The POS runs the register, the site runs online orders, and neither knows the other’s inventory. You oversell what the store already sold, and a customer who bought in person is a stranger the moment they open your email.',
      },
      {
        icon: 'Boxes',
        title: 'Inventory guessed, not known',
        description:
          'Stock lives in per-channel silos — a spreadsheet for the warehouse, the platform’s count for online, a manual tally for the floor. Reorders are guesswork, overstock ties up cash, and the bestseller is out of stock the week it matters most.',
      },
      {
        icon: 'Users',
        title: 'A generic CRM that was never built for retail',
        description:
          'Your CRM was designed for a sales pipeline, not a purchase cycle. Loyalty is bolted on with plugins, offers aren’t personalized, and there’s no model for purchase frequency, reactivation, or who’s about to lapse.',
      },
      {
        icon: 'BarChart3',
        title: 'Numbers that arrive too late to act on',
        description:
          'Margin by product, turn rate by location, channel attribution — leadership asks and someone rebuilds it by hand from POS exports and platform CSVs, days later. By the time the report lands, the decision window has closed.',
      },
    ],
  },

  // ── Software catalog (dark bento) ──
  capabilities: {
    title: 'The software we build — from browse to buy to reorder',
    highlightText: 'from browse to buy to reorder',
    subtitle:
      'Seven software layers that connect the shopping experience to retail operations. We build them from scratch or on top of the platform you already run — headless, hybrid, or fully custom. Where your customer data is ready to work harder, an AI layer sharpens the decisions — personalized recommendations, demand forecasting, churn prediction — not a gimmick wrapped around every feature.',
    groups: [
      {
        icon: 'ShoppingCart',
        title: 'E-Commerce Platforms & Storefronts',
        description: 'For brands who’ve outgrown the template — built from scratch, or headless on top of your existing commerce backbone.',
        items: [
          'Product catalog management & merchandising rules',
          'Cart, checkout & multi-currency / multi-region support',
          'Promotions & discount engine',
          'Customer account portals & order history',
          'Headless builds on Shopify, Magento or WooCommerce — custom frontend, same backbone',
        ],
      },
      {
        icon: 'CreditCard',
        title: 'POS & Omnichannel Systems',
        description: 'Most retailers don’t need a new POS — they need their POS connected to everything else.',
        items: [
          'Payment processing — card, NFC & mobile wallets',
          'Receipt generation, returns & refund flows',
          'Staff management & register workflows',
          'Real-time inventory sync across store and online',
          'Integrates with Stripe & Square APIs and existing processors — integration-first, not rip-and-replace',
        ],
      },
      {
        icon: 'PackageSearch',
        title: 'Inventory & Order Management',
        description: 'One unified view of stock across stores, warehouses, and channels — instead of per-channel silos.',
        items: [
          'Real-time stock tracking across locations & channels',
          'SKU & barcode management, multi-warehouse allocation',
          'Automated reorder triggers & order routing logic',
          'Unified order management across every channel',
          'AI demand forecasting by SKU, location & season — reorder from data, not guesswork',
        ],
      },
      {
        icon: 'HeartHandshake',
        title: 'Retail CRM & Customer Loyalty',
        description: 'Retail-native CRM with loyalty and purchase-frequency logic baked in — not a generic CRM with plugins bolted on.',
        items: [
          'Unified customer profiles across online & in-store',
          'Loyalty program management & tiered rewards',
          'Segmented triggers & personalized offer delivery',
          'Purchase-frequency & reactivation workflows',
          'AI churn prediction, next-purchase timing & product recommendations',
        ],
      },
      {
        icon: 'Store',
        title: 'Marketplace & Multi-Vendor Platforms',
        description: 'For retailers expanding into multi-vendor, B2B2C, or wholesale ordering models.',
        items: [
          'Vendor onboarding portals & per-vendor catalogs',
          'Commission, settlement & payout logic',
          'Order routing to sellers & fulfillment coordination',
          'Buyer-facing search, discovery & storefront',
          'B2B / wholesale ordering channels for distributors',
        ],
      },
      {
        icon: 'LineChart',
        title: 'Retail Analytics & Business Intelligence',
        description: 'The decision layer — built on the POS, commerce, and ERP data you already generate.',
        items: [
          'Sales performance & customer behavior dashboards',
          'Inventory turn rates & channel attribution',
          'Margin analysis by product and location',
          'Built on POS exports, Shopify APIs, GA & ERP — one reporting layer',
          'AI predictive reorder, price-elasticity modeling & anomaly alerts',
        ],
      },
      {
        icon: 'Cable',
        title: 'Retail Systems Integration & Modernization',
        description: 'Connecting and modernizing the stack you already run — often the first, lowest-commitment engagement.',
        items: [
          'POS-to-ERP integrations & inventory sync across platforms',
          'API bridges between commerce and fulfillment systems',
          'Payment gateway migrations',
          'Legacy system modernization — extend or selectively replace',
          'A diagnostic first step that maps the fastest path to a larger build',
        ],
      },
    ],
  },

  // ── Trust, payment & customer-data security (prominent) ──
  complianceDetail: {
    title: 'Software that protects the payment and the customer behind every transaction.',
    statement:
      'Retail software sits on top of the two most sensitive things a business holds: how customers pay and who they are. A storefront takes card data, a POS moves money at the register, a CRM concentrates purchase history and personal detail, and a marketplace routes payouts to third-party sellers. Connecting all of that into one platform without turning it into a breach surface is the hard part, and it is where we start. PCI-aligned payment flows, customer-data isolation, and least-privilege access are designed in from the first commit, never bolted on before launch.',
    frameworks: [
      'PCI DSS (cardholder data & checkout)',
      'SOC 2',
      'ISO 27001',
      'GDPR / CCPA (customer PII)',
      'PSD2 / SCA (where applicable)',
      'ADA / WCAG (accessible storefronts)',
    ],
    safeguards: [
      {
        icon: 'CreditCard',
        title: 'PCI-aligned, tokenized payment flows',
        description:
          'Checkout and POS payments run through tokenized, PCI-aligned flows on established processors (Stripe, Square, Adyen) — so card data stays out of your database and the platform can move money without becoming a cardholder-data liability.',
      },
      {
        icon: 'Split',
        title: 'Customer & vendor data isolation',
        description:
          'Multi-vendor marketplaces and multi-brand platforms keep each seller’s catalog, orders, and payouts isolated by design — and customer PII is scoped so no vendor, staff role, or integration sees more than it should.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Least-privilege access & audit trails',
        description:
          'Role-based access for store staff, merchandisers, vendors, and customers, with scoped service accounts and tamper-evident audit logs across every integration — so you can see who touched what, and access stays exactly as narrow as it should be.',
      },
      {
        icon: 'FileCheck2',
        title: 'Privacy, consent & data-subject rights',
        description:
          'Consent capture, preference management, and data-subject request handling (access, deletion, portability) are engineered into the CRM and loyalty layer, so GDPR/CCPA obligations rest on a defensible trail rather than a manual scramble.',
      },
      {
        icon: 'Plug',
        title: 'Secure platform & processor connectivity',
        description:
          'We integrate over authenticated, encrypted APIs to your commerce platform, processor, and ERP with credential rotation and per-integration scoping — not shared keys or flat polling that turn the integration layer into an attack surface.',
      },
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with secrets held in a managed vault and key-rotation policies that satisfy SOC 2 and ISO 27001 expectations.',
      },
    ],
    auditNote:
      'We provide the architecture documentation, data-flow diagrams, and control evidence your IT, security, and finance teams need — and we walk them through the payment model, customer-data isolation, and access controls before a single live card, customer record, or vendor payout flows through the system.',
    partnerAgreements: ['DPA', 'SLA', 'Security architecture review'],
  },

  // ── Sub-verticals (who we serve) ──
  segments: {
    title: 'Retail isn’t one buyer — and we don’t build like it is',
    subtitle:
      'A DTC brand launching a custom storefront and a regional chain modernizing a legacy POS share almost nothing about how they buy or what they need built. We scope the work to two realistic tracks: builders who need software created, and modernizers who need existing systems connected, extended, or selectively replaced — and we’re honest about which one you’re on.',
    items: [
      {
        icon: 'ShoppingBag',
        name: 'DTC Brands & E-Commerce Startups',
        buyer: 'Founder · Head of E-Commerce',
        needs: [
          'A custom storefront past Shopify’s limitations',
          'Or a headless build on the commerce backbone you keep',
          'Checkout, promotions & catalog logic that fits your model',
          'An MVP-first platform engineered to scale',
        ],
      },
      {
        icon: 'Store',
        name: 'Mid-Market Omnichannel Retailers',
        buyer: 'Director of E-Commerce · VP of Retail Ops',
        needs: [
          'Inventory sync between store and online channels',
          'Unified order management across every channel',
          'A single, real-time view of stock and orders',
          'Integration-first work — not a full rewrite',
        ],
      },
      {
        icon: 'LayoutGrid',
        name: 'Retail Marketplace Startups',
        buyer: 'Founder · Head of Product',
        needs: [
          'A custom multi-vendor marketplace platform',
          'Vendor onboarding, commissions & settlement logic',
          'Order routing to sellers & buyer-facing discovery',
          'API-first architecture that scales with vendors',
        ],
      },
      {
        icon: 'Building2',
        name: 'Regional Retail Chains',
        buyer: 'CIO · Director of IT',
        needs: [
          'Legacy POS connected to everything else',
          'A BI and analytics layer on existing systems',
          'Payment gateway migration & modernization',
          'Selective replacement, not a rip-and-replace',
        ],
      },
      {
        icon: 'Warehouse',
        name: 'Wholesale & B2B Distributors',
        buyer: 'VP Operations · Head of Sales',
        needs: [
          'A digital B2B ordering channel to replace manual orders',
          'Account-specific pricing & catalogs',
          'Order routing and fulfillment coordination',
          'ERP and inventory integration',
        ],
      },
      {
        icon: 'Sparkles',
        name: 'DTC Brands Scaling Loyalty',
        buyer: 'Head of CRM · Growth Lead',
        needs: [
          'Retail-native CRM to replace generic email tools',
          'Loyalty, tiers & personalized offer delivery',
          'Purchase-intelligence: frequency, churn, reactivation',
          'AI product recommendations from purchase history',
        ],
      },
    ],
    footerNote:
      'Retail runs on financial rails and flows into fulfillment — so a single engagement often touches our Fintech work (checkout, buy-now-pay-later, settlement, and fraud monitoring) and our Logistics work (fulfillment, last-mile, and returns). A short consultation will map your track, the platforms and processors you already run, and the fastest route from scattered channel data to a single view of the customer and the stock.',
  },

  // ── Technology & standards ──
  techStandards: {
    title: 'We speak your stack — and stay platform-agnostic by design',
    subtitle:
      'The platforms, processors, and data sources retailers already run on, and the frameworks and AI tooling we build with on top of them. Whether you’re on Shopify, Magento, WooCommerce, or a fully custom stack, we work with what you have and build what you need — no platform bias.',
    systemsTitle: 'Platforms & systems you already run',
    systems: [
      'Commerce — Shopify (Plus), Magento / Adobe Commerce, WooCommerce, BigCommerce',
      'Payments — Stripe, Square, Adyen, PayPal, Braintree',
      'POS — Square, Shopify POS, Lightspeed, Clover',
      'ERP & accounting — NetSuite, SAP, QuickBooks',
      'Marketing & CRM — Klaviyo, Mailchimp, HubSpot, Salesforce',
      'Marketplaces — Amazon (Seller / FBA), eBay, Walmart',
      'Analytics — Google Analytics, Meta / TikTok pixels',
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
      'Headless / composable commerce',
      'PostgreSQL',
      'Snowflake',
      'Azure OpenAI',
      'PyTorch',
      'Power BI',
    ],
  },

  // ── Relevant services we bring to retail (cross-links) ──
  services: {
    title: 'The services we bring to retail',
    subtitle:
      'The engineering and AI capabilities we apply to the hardest problems in commerce, operations, and customer intelligence — explore each.',
    items: [
      {
        title: 'Custom Software Development',
        description:
          'End-to-end builds — storefronts, POS, OMS, marketplaces, and loyalty platforms — engineered for your business model instead of forcing retail to fit a template.',
        href: '/services/custom-software-development',
        icon: 'Code2',
      },
      {
        title: 'API Development',
        description:
          'The integration layer that ends channel silos — commerce, payment, POS, ERP, and marketplace APIs stitched into one coherent system. Our strongest differentiator in this space.',
        href: '/services/api-development',
        icon: 'Webhook',
      },
      {
        title: 'Data Engineering',
        description:
          'The pipelines that pull POS, commerce, marketing, and ERP feeds into one analytics-ready view of the customer and the stock — the foundation every dashboard sits on.',
        href: '/services/data-engineering',
        icon: 'Database',
      },
      {
        title: 'ML Development',
        description:
          'Personalized recommendations, demand forecasting, churn prediction, and price-elasticity models trained on your purchase history — not generic templates.',
        href: '/services/ml-development',
        icon: 'Brain',
      },
      {
        title: 'Intelligent Automation',
        description:
          'Agentic workflows for automated reorder triggers, order routing, reactivation campaigns, and anomaly alerts across the channels you’ve connected.',
        href: '/services/intelligent-automation',
        icon: 'Workflow',
      },
      {
        title: 'Generative AI',
        description:
          'Natural-language querying of sales and customer data, plus AI-assisted merchandising and product content — built on governed LLMs with human oversight.',
        href: '/services/generative-ai',
        icon: 'Sparkles',
      },
    ],
  },

  faqTitle: 'Questions retail and e-commerce teams ask',
  faqs: [
    {
      question: 'What kinds of retail software do you build?',
      answer:
        'We build the software layer that connects the shopping experience to retail operations: custom e-commerce platforms and storefronts (catalog, cart and checkout, multi-currency, promotions, customer portals) including headless builds on top of Shopify, Magento, or WooCommerce; POS and omnichannel systems (payments, returns, staff management, real-time store-and-online inventory sync); inventory and order management (multi-location stock tracking, reorder triggers, SKU and barcode management, order routing); retail-native CRM and loyalty platforms (unified profiles, loyalty logic, segmented offers); multi-vendor and B2B marketplace platforms (vendor onboarding, commissions, settlement, discovery); retail analytics and BI (sales, margin, turn rate, channel attribution, forecasting); and systems integration and modernization that connects the stack you already run. We work with DTC brands and e-commerce startups, mid-market omnichannel retailers, marketplace startups, regional chains, wholesale and B2B distributors, and brands scaling loyalty.',
    },
    {
      question: 'Are you going to force us onto a specific platform like Shopify or Magento?',
      answer:
        'No. We are platform-agnostic by design — we build what fits your business model, not what fits our certification portfolio. If your commerce backbone is working, we build headless or hybrid experiences on top of Shopify, Magento, or WooCommerce so you get a custom frontend without leaving the platform. If you’ve genuinely outgrown the template, or you have requirements no platform supports cleanly, we build fully custom. Headless, hybrid, or from scratch — the decision follows your business, not a platform bias.',
    },
    {
      question: 'We have a POS and existing systems — do we need to rip everything out and start over?',
      answer:
        'Almost never. Most retailers don’t need a new POS — they need their POS connected to everything else. We lead with integration and modernization: POS-to-ERP integrations, inventory sync across platforms, API bridges between commerce and fulfillment, payment gateway migrations, and selective modernization of legacy components. This is usually a lower-commitment first engagement with high diagnostic value — it maps your stack, closes the most painful gaps, and reveals the fastest realistic path to a larger build if one makes sense. Where a component genuinely can’t keep up, we replace that piece — not the whole system.',
    },
    {
      question: 'Our online and in-store systems don’t share inventory — can you fix that?',
      answer:
        'Yes — this is one of the most common problems we solve. When the POS, the website, and the warehouse each hold a different stock count, you oversell online what the store already sold and lose sales on items that are actually available. We build the real-time inventory sync and unified order management layer that gives you one view of stock across every location and channel, with automated reorder triggers and order routing on top. Where you want it, an AI demand-forecasting layer turns reorder decisions from guesswork into SKU-, location-, and season-level predictions.',
    },
    {
      question: 'Where does AI actually fit in retail software?',
      answer:
        'AI is an intelligence layer that activates once your customer and sales data is connected — not a gimmick on every screen. In practice it means personalized recommendations that surface the right product to the right customer based on purchase and browsing history; demand forecasting that predicts SKU-level inventory needs by location and season to cut overstock and stockouts; churn prediction that flags at-risk customers before they lapse and triggers reactivation campaigns; and dynamic pricing signals that surface margin and competitive intelligence in the merchandising dashboard. Each one makes the underlying commerce, inventory, CRM, or analytics system sharper over time.',
    },
    {
      question: 'What makes your retail CRM different from just using Salesforce or a generic CRM?',
      answer:
        'Generic CRMs were built for a sales pipeline, not a retail purchase cycle — so loyalty, purchase frequency, and reactivation get bolted on through plugins that never quite fit. We build retail-native CRM: unified customer profiles that merge online and in-store touchpoints, loyalty and tier logic as first-class features, segmented triggers and personalized offer delivery, and purchase-frequency and reactivation workflows designed into the model. With your purchase history in one place, we layer in churn prediction, next-purchase-timing models, and product recommendations — baked in, not bolted on.',
    },
    {
      question: 'Can you build a multi-vendor marketplace or a B2B ordering platform?',
      answer:
        'Yes. For retailers expanding into multi-vendor or B2B2C models, we build custom marketplace software: vendor onboarding portals, per-vendor catalog management, commission and settlement logic, order routing to sellers, and buyer-facing search and discovery. For wholesale and B2B distributors, we build digital ordering channels with account-specific pricing and catalogs to replace manual, email-and-spreadsheet ordering. Both are common paths for established DTC brands moving into a marketplace channel or distributors digitizing how buyers order.',
    },
    {
      question: 'Do you also handle payments, checkout, and fulfillment?',
      answer:
        'Yes — and that’s where retail meets two of our other practices. Payments, buy-now-pay-later, merchant analytics, and fraud monitoring are fintech-adjacent, so we build the financial operations layer from checkout to settlement using PCI-aligned, tokenized flows on processors like Stripe, Square, and Adyen. On the other side, fulfillment, last-mile delivery, and returns flow from retail operations into logistics software — so a retailer managing their own fulfillment often benefits from our Logistics work too. One engagement can cover checkout, the money movement behind it, and the fulfillment that follows.',
    },
  ],

  cta: {
    title: 'Let’s connect how your customers shop with how you operate.',
    description:
      'Retail data is scattered across a storefront, a POS, a warehouse count, and an email tool — and none of them agree. Start with a consultation: we’ll map the platforms and processors you already run, whether you’re building or modernizing, and the fastest realistic route from scattered channel data to one view of the customer and the stock.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
  },

  _unverified: [
    'All content uses capability framing only — no client names, case studies, testimonials, or measured outcome metrics are claimed.',
    'IMAGES REQUIRED: /images/industries/retail/hero.jpg and /images/industries/retail/category-card.jpg must be added. The hero degrades gracefully (background image at opacity-35 over a dark gradient), but the homepage Industries card renders broken without category-card.jpg — retail is NOT yet added to HOME_INDUSTRY_ORDER in content.ts for this reason. Add it there once the card image exists.',
    'complianceDetail.frameworks — "SOC 2" and "ISO 27001" listed; confirm whether AIvanceWorks holds these attestations or is in progress. PCI DSS, GDPR/CCPA, PSD2/SCA, and ADA/WCAG framing describes payment-handling and data-protection design practices, not held certifications or a legal compliance guarantee.',
    'techStandards.systems & capabilities — platform/processor names (Shopify, Magento/Adobe Commerce, WooCommerce, BigCommerce, Stripe, Square, Adyen, PayPal, Braintree, Lightspeed, Clover, NetSuite, SAP, QuickBooks, Klaviyo, Mailchimp, HubSpot, Salesforce, Amazon, eBay, Walmart) describe competencies; confirm which have actually shipped before implying delivered volume.',
    'services — cross-links point to live /services/* pages. hero.secondaryCta / cta.secondaryCta anchor to #services.',
    'Cross-vertical bridges to Fintech and Logistics are referenced in segments.footerNote and FAQ; a Logistics industry page exists. Confirm a Fintech industry/solution page exists (or is planned) before adding a hard cross-link.',
  ],
};

export default retail;
