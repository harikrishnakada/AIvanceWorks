import type { SolutionPageData } from '@/types/pages';

const eCommerceWebsites: SolutionPageData = {
  slug: 'e-commerce-websites',
  title: 'Custom E-commerce Development with AI-Powered Personalisation',
  shortDescription:
    'Custom Next.js storefronts and platform migrations with AI personalisation, tokenized checkout, and headless architecture — built for performance, owned by you.',

  metaTitle: 'Custom E-commerce Development | Headless Storefronts',
  metaDescription:
    'Custom e-commerce development on Next.js and Azure/AWS. Headless architecture, AI personalisation, platform migrations from Shopify/Magento/WooCommerce, and tokenized PCI checkout.',
  keywords: [
    'custom e-commerce development',
    'headless e-commerce',
    'Next.js e-commerce',
    'AI e-commerce personalisation',
    'e-commerce platform migration',
    'Shopify alternative custom build',
    'e-commerce conversion optimisation',
    'B2B e-commerce development',
    'scalable e-commerce architecture',
    'custom storefront development',
    'PCI compliant checkout',
    'ERP e-commerce integration',
  ],
  canonicalPath: '/solutions/e-commerce-websites',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'E-commerce Websites', href: '/solutions/e-commerce-websites' },
  ],

  // Archetype D (commerce) with two deliberate drops:
  // - caseStudySpotlight: omitted per Decision B (greenfield — no real case data yet).
  // - integrationsPanel: omitted per Decision C (integration names are woven into
  //   features[], faqs[], and techStackBlock.capabilities instead).
  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'retail',
  signatureComponent: 'EcommerceAiShowcase',

  hero: {
    badge: 'E-commerce Solutions',
    headline: 'Headless commerce, built for performance — and owned by you.',
    subhead:
      'Custom Next.js storefronts on Azure/AWS with AI-powered personalisation, tokenized checkout, and full platform-migration expertise. Architected for Core Web Vitals leadership and to scale without per-transaction platform fees.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the AI showcase', href: '#signature' },
    heroImage: {
      src: '/images/solutions/e-commerce-websites/hero.jpg',
      alt: 'E-commerce fulfillment operation with digital inventory management',
    },
    metrics: [
      {
        value: 'Sub-1.5s',
        label: 'Target LCP',
        description: 'Architected for Core Web Vitals leadership',
      },
      {
        value: 'Headless',
        label: 'Architecture',
        description: 'Next.js frontend + decoupled commerce backend',
      },
      {
        value: 'Migration-ready',
        label: 'Platform experience',
        description: 'Shopify, Magento, WooCommerce, Salesforce Commerce Cloud',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'Custom-built',
      label: 'Conversion Architecture',
      description:
        'Every page, component, and checkout step designed for your specific conversion funnel — not adapted from a template.',
    },
    {
      value: '<1.5s',
      label: 'Target LCP',
      description:
        'Next.js App Router with SSR, image optimisation, and edge caching — architected to this standard.',
    },
    {
      value: 'AI-powered',
      label: 'Personalisation Engine',
      description:
        'Real-time product recommendations, dynamic bundling, and personalised search results architected to lift average order value.',
    },
    {
      value: 'Frictionless',
      label: 'Checkout Flow',
      description:
        'Tokenized payments, express options, and progress-optimised checkout designed to minimise cart abandonment.',
    },
  ],

  features: [
    {
      icon: 'ShoppingCart',
      title: 'Custom Storefront & Product Catalogue',
      description:
        'Pixel-perfect storefronts with advanced filtering, faceted search, variant management, and rich product pages optimised for both conversion and organic search — built to your brand, not a template.',
    },
    {
      icon: 'Sparkles',
      title: 'AI Product Recommendations & Personalisation',
      description:
        'Real-time recommendation engine using collaborative filtering and browsing behaviour to surface relevant products at every stage of the customer journey, architected to lift conversion rate and average order value.',
    },
    {
      icon: 'Package',
      title: 'Inventory & Order Management',
      description:
        'Real-time inventory tracking across warehouses, automated reorder triggers, order lifecycle management, and fulfilment partner integrations so your operations team has full visibility without switching between tools.',
    },
    // Integration-woven feature (Decision C mitigation 1) — checkout + payments.
    {
      icon: 'CreditCard',
      title: 'Checkout & Payment Optimisation',
      description:
        'Tokenized checkout with Stripe, Braintree, or Adyen keeps raw card data out of your environment (PCI DSS SAQ A), while supporting Apple Pay, Google Pay, Buy-Now-Pay-Later, multi-currency, and localised tax calculation via Avalara or TaxJar.',
    },
    // Integration-woven feature (Decision C mitigation 1) — headless + migrations.
    {
      icon: 'Globe',
      title: 'Multi-Channel & Headless Architecture',
      description:
        'A headless commerce architecture decouples your storefront from your commerce backend, enabling consistent experiences across web, mobile, and social commerce. Supports migrations from Shopify, Magento, WooCommerce, and Salesforce Commerce Cloud with full SEO redirect maps.',
    },
    // Integration-woven feature (Decision C mitigation 1) — marketing + analytics.
    {
      icon: 'BarChart2',
      title: 'Marketing & Analytics Ready',
      description:
        'GA4, Meta Pixel, and Klaviyo integration via server-side tagging for resilient attribution that survives ad-blockers and iOS tracking changes. Revenue attribution, funnel analysis, and lifetime value reporting built into the dashboard.',
    },
  ],

  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Conversion-First Architecture',
      description:
        'A storefront designed specifically for your customers and products — with CRO principles built into every page, from product hierarchy to checkout friction — typically outperforms template-based platforms adapted to fit your business.',
    },
    {
      icon: 'Zap',
      title: 'Performance Leadership',
      description:
        'Next.js App Router with server-side rendering, automatic image optimisation, and global CDN delivery are architected to produce Core Web Vitals scores of the kind that Google rewards in organic search rankings and that typically correlate with lower bounce rates.',
    },
    {
      icon: 'Sparkles',
      title: 'Personalisation Built In, Not Bolted On',
      description:
        'Every visitor sees a storefront adapted to their behaviour and preferences — product recommendations, dynamic banners, personalised search results — architected into the storefront from day one rather than layered on via third-party tags.',
    },
    {
      icon: 'Layers',
      title: 'Scalable Without Platform Constraints',
      description:
        'Custom architecture is built to handle high-traffic events (Black Friday, product launches) without platform fees that scale with revenue, and supports new channels, markets, and product lines without rebuilding.',
    },
    {
      icon: 'Shield',
      title: 'Full Ownership & No Platform Lock-In',
      description:
        'You own the codebase, the data, and the infrastructure. No per-transaction fees, no forced platform upgrades, no risk of a third-party platform change breaking your business.',
    },
  ],

  processSteps: [
    {
      title: 'Market Research & UX Discovery',
      description:
        'We analyse your target customer segments, competitor storefronts, and current conversion bottlenecks to define a product strategy grounded in data. For migrations, we audit your existing platform to identify what to preserve, improve, and replace.',
      duration: '1–2 weeks',
      deliverable:
        'Competitive analysis, user journey maps, conversion audit (for migrations), and prioritised feature roadmap',
    },
    {
      title: 'Design & Prototyping',
      description:
        'We design the storefront with CRO principles embedded throughout: clear product hierarchy, minimal-friction checkout, mobile-first layouts, and strategic social proof placement. Interactive prototypes validated before development begins.',
      duration: '2–4 weeks',
      deliverable:
        'High-fidelity Figma designs, interactive prototype, design system, mobile specification',
    },
    {
      title: 'Storefront Development',
      description:
        'Frontend development in Next.js with App Router, TypeScript, and Tailwind CSS. Backend commerce logic via a headless CMS and custom API layer, with AI recommendation and personalisation services built in from the start rather than layered on later.',
      duration: '6–12 weeks',
      deliverable:
        'Staging storefront with all agreed features, Core Web Vitals report, accessibility audit',
    },
    {
      title: 'Payment, Fulfilment & Systems Integration',
      description:
        'We integrate your chosen payment gateway (Stripe, Braintree, Adyen), shipping carriers, ERP or inventory system, and marketing tools. For platform migrations from Shopify, Magento, or WooCommerce, we handle full product, order, and customer data migration with reconciliation.',
      duration: '2–4 weeks',
      deliverable:
        'Integration test documentation, data migration reconciliation report, end-to-end transaction test results',
    },
    {
      title: 'Launch, SEO Validation & Growth Optimisation',
      description:
        'Production launch with DNS migration support, 301 redirect mapping for SEO preservation, Google Search Console setup, and a structured A/B testing programme to continuously improve conversion rate post-launch. We provide a defined hypercare period of monitoring and optimisation support.',
      duration: '1–2 weeks',
      deliverable:
        'Live production site, SEO redirect map, Search Console configuration, A/B test plan, hypercare support SLA',
    },
  ],

  capabilities: [
    'Headless commerce architecture (API-first)',
    'AI product recommendations and personalisation',
    'Multi-currency and international tax support',
    'Advanced faceted search and filtering',
    'Real-time inventory synchronisation',
    'Multi-warehouse and 3PL fulfilment integration',
    'Progressive Web App (PWA) support',
    'SEO-optimised product and category pages',
    'A/B testing and conversion rate optimisation',
    'WCAG 2.1 AA accessibility compliance',
    // Decision C mitigation 3 — ERP/CRM capability bullet.
    'ERP/CRM-ready — architected for NetSuite, SAP, and Salesforce integrations without double-entry',
  ],

  technologies: [
    'Next.js 15 / React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js / .NET (API layer)',
    'PostgreSQL / MongoDB',
    'Azure / AWS (cloud hosting)',
    'Azure AI / OpenAI (recommendations)',
    'Algolia / Azure Cognitive Search',
    'Stripe / Braintree / Adyen',
    'Contentful / Sanity.io (headless CMS)',
    'Vercel (frontend hosting)',
    'Terraform (IaC)',
  ],

  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Migrating platforms or building from scratch? A discovery sprint validates your conversion strategy and scopes the technical build.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'MVP Development',
      description:
        'Want to test the market first? Our 12-week MVP process launches a core storefront with real transactions before you commit to the full build.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
  ],

  faqs: [
    // NEW per Decision C mitigation 2 — migration without downtime.
    {
      question:
        'Can you migrate our existing Shopify, Magento, or WooCommerce store without customer-facing downtime?',
      answer:
        'Yes. Platform migrations are a structured process we handle end-to-end. We audit your existing store, map all products, categories, customer accounts, and order history, then migrate data to the new platform with full reconciliation. Cutover runs in parallel so the legacy store continues serving traffic until DNS flips, and we generate a complete 301 redirect map to preserve SEO equity — the most common oversight that causes organic traffic drops after a platform migration. We pilot with a representative data subset before the full migration and always build a rollback plan.',
    },
    // NEW per Decision C mitigation 2 — ERP/CRM integration.
    {
      question:
        'How do you integrate the storefront with our existing ERP or CRM?',
      answer:
        'We build a dedicated integration layer so the storefront is decoupled from your core systems. We build integrations with NetSuite and SAP on the ERP side and Salesforce on the CRM side, using their native REST APIs, middleware platforms (MuleSoft, Azure Logic Apps), or purpose-built adapters where the vendor APIs are thin. The integration layer handles bi-directional sync of products, pricing, inventory, customers, and orders — eliminating double-entry and keeping all systems in agreement in near real-time.',
    },
    {
      question: 'How do you handle payment processing and PCI compliance?',
      answer:
        'We integrate with Stripe, Braintree, Adyen, or your existing payment processor of choice. By using hosted payment fields and tokenisation, the custom storefront itself never handles raw card data, which means it falls under PCI DSS SAQ A (the lightest compliance tier) rather than requiring a full PCI audit. We document the payment architecture for your compliance records and test all payment flows end-to-end before launch.',
    },
    {
      question: 'Will a custom build outperform Shopify for SEO?',
      answer:
        'A well-built custom Next.js storefront is architected to outperform Shopify for Core Web Vitals (particularly LCP and CLS) because there is no platform overhead — every request is optimised for your specific product catalogue. You also get full control over URL structures, schema markup, meta data, and canonical tags without workarounds. The SEO advantage compounds over time as Google rewards sites with consistently strong performance signals.',
    },
    {
      question:
        'How do you handle high-traffic events like product launches or seasonal peaks?',
      answer:
        'The infrastructure is designed for elastic scaling from day one. We deploy on Azure or AWS with auto-scaling groups, a global CDN for static and semi-static content, database read replicas for query-heavy catalogue pages, and Redis caching for sessions and product data. Before major traffic events, we conduct load testing to validate the system handles projected peak load without degradation.',
    },
    {
      question: 'Do you build B2B e-commerce as well as B2C?',
      answer:
        'Yes. B2B e-commerce has significantly different requirements — customer-specific pricing, quote workflows, purchase order support, credit terms, multi-buyer account management, and approval workflows — and template platforms handle these poorly. We build B2B commerce platforms with configurable pricing engines, account hierarchy management, and integration with your ERP or CRM from the ground up. We also support hybrid models that serve both B2B and B2C customer segments from a single platform.',
    },
    {
      question: 'What does ongoing maintenance and support look like after launch?',
      answer:
        'We offer tiered managed service agreements covering security patching, dependency updates, performance monitoring, and a monthly allocation of engineering hours for new features and optimisations. The codebase is fully documented and handed over to you, so you are never locked into our support — you can choose to maintain it in-house, with another agency, or with us.',
    },
  ],

  imageFeatures: [
    {
      heading: 'Storefronts That Convert, Not Just Display',
      description: 'AI-powered product recommendations, dynamic pricing, and optimized checkout flows. Every storefront decision is backed by conversion data, not guesswork.',
      image: {
        src: '/images/solutions/e-commerce-websites/feature-1.jpg',
        alt: 'Shopper browsing products on a mobile e-commerce application',
      },
    },
    {
      heading: 'Real-Time Analytics You Can Act On',
      description: 'Conversion funnels, cart abandonment tracking, and revenue dashboards — all in one place. See what\'s working, what\'s not, and where to invest next.',
      image: {
        src: '/images/solutions/e-commerce-websites/feature-2.jpg',
        alt: 'E-commerce performance dashboard showing conversion analytics and revenue data',
      },
    },
  ],

  cta: {
    title: 'Ready to Build a Storefront That Actually Converts?',
    description:
      'Book a free 30-minute discovery call. We will review your current platform, traffic patterns, and conversion goals, then give you a candid assessment of what a custom build would deliver for your business.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the AI showcase', href: '#signature' },
  },

  // === _unverified review (Phase 7) ===
  // Audience: business decision-makers (founders, VPs of Digital, heads of e-commerce).
  // Test applied: "does this element move the buyer toward trust, a lead, or clarity?"
  //
  // RESOLVED items (removed from array):
  //   hero.metrics[0] "Sub-1.5s Target LCP" — kept, architectural target framing is honest.
  //   hero.metrics[2] "Migration-ready" — kept, describes architecture readiness, platform names are what buyers search for.
  //   metricsStrip[0] "25–45% CVR uplift" — REPLACED with "Custom-built / Conversion Architecture" (uncited % erodes trust).
  //   metricsStrip[1] "<1.5s Target LCP" — kept, architectural target.
  //   metricsStrip[2] "20–30% AOV lift" — REPLACED with "AI-powered / Personalisation Engine".
  //   metricsStrip[3] "35–50% cart-abandonment reduction" — REPLACED with "Frictionless / Checkout Flow".
  //   features[3] Stripe/Braintree/Adyen — kept, "we build with" framing is honest for greenfield.
  //   features[4] migration list — SOFTENED "We handle migrations from" → "Supports migrations from".
  //   features[5] GA4/Meta Pixel/Klaviyo — SOFTENED "Integrated" (past tense) → "integration" (noun).
  //   benefits[1] — already softened in Phase 2 code review; kept softened version.
  //   processSteps[*] durations — kept, present-tense engagement ranges are standard consulting framing.
  //   capabilities[10] ERP/CRM bullet — kept, "architected for" is honest capability framing.
  //   technologies[8] — kept, tech stack list is not an integration claim.
  //   faqs[0] migration-without-downtime — kept, process description in present tense is standard service marketing.
  //   faqs[1] ERP/CRM integration — SOFTENED "We have experience integrating with" → "We build integrations with".
  //   faqs[2] PCI/payments — kept, present-tense capability description.
  //   EcommerceAiShowcase tiles — verified clean (zero outcome language, zero stats chips).
  //
  // REMAINING items below are content-team reminders, not integrity flags:
  _unverified: [
    'caseStudySpotlight — intentionally omitted per Decision B. Build one when a real e-commerce case study exists.',
    'integrationsPanel — intentionally omitted per Decision C. The integrations story lives in features[3–5], faqs[0–1], and capabilities[10] prose instead of a dedicated section.',
  ],
};

export default eCommerceWebsites;
