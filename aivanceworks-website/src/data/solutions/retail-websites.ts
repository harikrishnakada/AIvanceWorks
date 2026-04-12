import type { SolutionPageData } from '@/types/pages';

// Archetype D — Commerce Solution (Retail).
// Buyer: VP of Digital / Head of E-commerce / COO / Owner at a multi-channel
//   retail brand ($20M–$500M GMV, 5–500 stores, or DTC scaling into wholesale).
//   Dominant question: "Will this make me more money?" measured in
//   omnichannel revenue, conversion rate, BOPIS/click-and-collect adoption,
//   and customer LTV — not raw page-speed numbers.
// Trust issue burned by: multi-year "replatforms" that shipped late, broke
//   POS/ERP integrations, collapsed SEO on cutover, and still didn't lift
//   conversion. Buyers are allergic to generic "digital transformation"
//   pitches and to per-transaction platform fees that scale with success.
//
// Differentiation vs. /solutions/e-commerce-websites:
//   E-commerce Websites targets pure-play transactional storefronts. Retail
//   Websites targets BRAND + STORES — omnichannel retailers where the
//   website has to orchestrate physical inventory, POS, BOPIS, clienteling,
//   and loyalty alongside digital commerce. The signature, features,
//   benefits, process, and FAQs lean into that reality. Both pages
//   cross-link to each other with journey-aware descriptions.
//
// Composition — Archetype D default with one deliberate swap:
//   featureGrid and imageFeatures sit before the signature to establish
//   capability context; signature carries the "unified retail" argument
//   at the narrative break, then benefitsGrid → techStackBlock →
//   processTimeline close out the business case. No complianceDeepDive
//   (PCI is handled via tokenized checkout capability framing, addressed
//   in features + FAQ prose). No caseStudySpotlight — greenfield.
//   No integrationsPanel — vendor names woven into feature prose and FAQ
//   answers instead, per the audience-test resolution of "developer-lens
//   chip grids don't move a business buyer."

const retailWebsites: SolutionPageData = {
  slug: 'retail-websites',
  title: 'Custom Retail Website Development for Omnichannel Brands',
  shortDescription:
    'Custom retail websites that unify online storefronts with physical stores — BOPIS, endless aisle, POS-integrated inventory, and loyalty wallets architected into a single Next.js brand experience you own outright.',

  metaTitle: 'Custom Retail Website Development | Omnichannel Commerce',
  metaDescription:
    'Custom retail website development on Next.js for omnichannel brands. BOPIS, ship-from-store, POS and ERP integration, unified inventory, clienteling, and loyalty — built on Azure or AWS with no per-transaction platform fees.',
  keywords: [
    'custom retail website development',
    'omnichannel retail website',
    'retail e-commerce development',
    'BOPIS website development',
    'buy online pickup in store',
    'ship from store e-commerce',
    'POS integrated website',
    'headless retail commerce',
    'retail website Next.js',
    'retail brand storefront',
    'clienteling software',
    'unified commerce platform',
  ],
  canonicalPath: '/solutions/retail-websites',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Retail Websites', href: '/solutions/retail-websites' },
  ],

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
  signatureComponent: 'UnifiedRetailCommerceMap',

  hero: {
    badge: 'Retail Solutions',
    headline: 'A retail website that works the way your stores do.',
    subhead:
      'Custom Next.js storefronts that sit on top of your POS, ERP, and inventory systems — so online, in-store, and marketplace sales share one stock ledger, one customer profile, and one order book.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the commerce map', href: '#signature' },
    heroImage: {
      src: '/images/solutions/retail-websites/hero.jpg',
      alt: 'Curated brand retail store interior with merchandised product shelving',
    },
    metrics: [
      {
        value: 'Unified',
        label: 'Online + in-store',
        description: 'One inventory, one customer, one order book across every channel',
      },
      {
        value: 'BOPIS-ready',
        label: 'Omnichannel fulfilment',
        description: 'Buy online, pickup in store, ship-from-store, curbside — built in',
      },
      {
        value: 'You own it',
        label: 'No platform fees',
        description: 'Your codebase, your infrastructure, no per-transaction tax on growth',
      },
    ],
  },

  metricsStrip: [
    {
      value: 'Brand-led',
      label: 'Storytelling + commerce',
      description:
        'Editorial lookbooks, brand campaigns, and transactional commerce built into one Next.js app — not two stitched systems.',
    },
    {
      value: 'Store-aware',
      label: 'Local inventory visibility',
      description:
        'Shoppers see real stock per location, reserve for pickup, and check availability before the drive — reducing wasted trips and cancelled orders.',
    },
    {
      value: 'POS-integrated',
      label: 'Unified checkout',
      description:
        'Online carts, associate-assisted sales, and in-store POS all write to the same order record — one receipt, one returns policy, one customer history.',
    },
    {
      value: 'Composable',
      label: 'Headless architecture',
      description:
        'Swap CMS, payment, search, or loyalty without replatforming — the storefront is decoupled from every system it talks to.',
    },
  ],

  features: [
    {
      icon: 'Sparkles',
      title: 'Editorial brand storefronts',
      description:
        'Lookbooks, campaign pages, lifestyle editorial, and shoppable stories built alongside the product catalogue — so the website is the brand, not just a checkout. Powered by a headless CMS (Sanity, Contentful, or Storyblok) your marketing team edits without a deploy.',
    },
    {
      icon: 'Store',
      title: 'Store locator with live inventory',
      description:
        'Real-time stock visibility per store location, with "reserve for pickup" and "check availability near me" flows. Indexed for local SEO so Google surfaces your nearest store for "near me" retail queries.',
    },
    {
      icon: 'ShoppingBag',
      title: 'BOPIS, ship-from-store & curbside',
      description:
        'Buy online and pick up in store, ship from the nearest store to shorten delivery windows, or collect curbside — all orchestrated on the same order record. We build the handoff flows with your OMS, whether that is Manhattan, NewStore, Fluent Commerce, or a custom service layer.',
    },
    {
      icon: 'CreditCard',
      title: 'Tokenized checkout & unified payments',
      description:
        'We build with Stripe, Adyen, or Braintree using tokenized fields so raw card data never touches your environment (PCI DSS SAQ A). Apple Pay, Google Pay, Buy-Now-Pay-Later (Affirm, Klarna, Afterpay), gift cards, and store credit all post to the same order and receipt format as your POS.',
    },
    {
      icon: 'Gift',
      title: 'Loyalty, wallet & clienteling',
      description:
        'Loyalty accounts earned and redeemed across web, mobile, and store — we build integrations with Yotpo, Smile.io, or LoyaltyLion, or a custom scheme on your own data. Store associates see the same customer history and wishlist the web shows, so clienteling conversations start with context, not cold.',
    },
    {
      icon: 'Search',
      title: 'AI search, personalization & discovery',
      description:
        'Faceted search, visual search, and personalized recommendations built on Algolia or Constructor.io with a thin ML layer on top. Shoppers see the right collection first, associates get recommended up-sell on the POS, and the email system inherits the same affinity signals.',
    },
  ],

  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Omnichannel revenue, not just online revenue',
      description:
        'A retail website architected for BOPIS, ship-from-store, and endless aisle opens up orders that pure e-commerce and pure brick-and-mortar each miss — and surfaces inventory that would otherwise sit unsold in one location while another stockout loses a sale.',
    },
    {
      icon: 'Layers',
      title: 'One customer, one brand, every touchpoint',
      description:
        'A unified customer profile means a shopper who buys online and returns in-store isn\'t treated as two people. Loyalty points earned on the app are redeemable at POS. The clienteling conversation your associate has on Tuesday is informed by the browse session on Sunday.',
    },
    {
      icon: 'Package',
      title: 'Inventory you can trust — and sell',
      description:
        'A single stock ledger, synced in near real-time from POS, ERP, and warehouse systems, eliminates the most common retail failure: selling something you don\'t have. Fewer cancelled orders, fewer angry reviews, and confident "available at your store" promises.',
    },
    {
      icon: 'Zap',
      title: 'Performance that rewards the brand',
      description:
        'Next.js with server-side rendering, image optimization, and edge caching is architected to deliver Core Web Vitals scores Google rewards in organic search — particularly valuable for retail brands competing for category and "near me" queries against marketplaces.',
    },
    {
      icon: 'Shield',
      title: 'Full ownership, no platform tax',
      description:
        'You own the code, the data, the infrastructure, and the roadmap. No per-transaction fees that scale with success, no forced platform upgrades, no risk of a third-party price change wiping out your margin on Black Friday.',
    },
  ],

  processSteps: [
    {
      title: 'Retail discovery & channel audit',
      description:
        'We map your current tech stack — POS, ERP, OMS, WMS, CDP, loyalty, marketing — and audit how orders, inventory, and customers flow (or don\'t flow) between them today. For replatforms, we audit the existing storefront for SEO equity, conversion bottlenecks, and content debt.',
      duration: '1–2 weeks',
      deliverable:
        'Current-state system map, omnichannel gap analysis, SEO audit (for replatforms), and a prioritized build roadmap',
    },
    {
      title: 'Brand UX & CRO design',
      description:
        'We design the storefront as a brand experience with commerce mechanics baked in — editorial templates, product hierarchy, store locator flows, BOPIS checkout, and loyalty touchpoints. Mobile-first, accessibility-tested, and CRO principles embedded in every template.',
      duration: '2–4 weeks',
      deliverable:
        'High-fidelity Figma designs, interactive prototype, design system, mobile specification, template inventory',
    },
    {
      title: 'Storefront & integration build',
      description:
        'Frontend in Next.js with App Router, TypeScript, and Tailwind. Headless CMS for brand content, headless commerce for cart and checkout, and a dedicated integration layer that keeps the storefront decoupled from your POS, ERP, and OMS so any one system can change without a full rebuild.',
      duration: '8–14 weeks',
      deliverable:
        'Staging storefront with all agreed features, Core Web Vitals report, accessibility audit, integration test documentation',
    },
    {
      title: 'Omnichannel cutover & data migration',
      description:
        'For replatforms, we migrate products, customers, order history, and loyalty balances with full reconciliation. For new builds, we connect POS and inventory systems, pilot BOPIS at a subset of stores, and run end-to-end transaction tests before a full cutover. SEO redirect maps are generated before DNS flips — the most common oversight behind post-launch organic drops.',
      duration: '2–4 weeks',
      deliverable:
        'Data migration reconciliation report, SEO 301 redirect map, BOPIS pilot results, end-to-end transaction test results',
    },
    {
      title: 'Launch, hypercare & growth optimization',
      description:
        'Production launch with DNS migration, Google Search Console setup, A/B testing program, and a defined hypercare window of monitoring, bug triage, and iteration. Post-launch, we set up a cadence for conversion optimization, new-store onboarding, and seasonal peak readiness (Black Friday, holiday, back-to-school).',
      duration: '1–2 weeks + hypercare',
      deliverable:
        'Live production site, Search Console + analytics configuration, A/B test plan, hypercare SLA, seasonal-peak runbook',
    },
  ],

  capabilities: [
    'Editorial + commerce architecture in one Next.js app',
    'BOPIS, ship-from-store, curbside, and endless aisle orchestration',
    'Store locator with real-time per-location stock visibility',
    'POS and ERP integration layer (Shopify POS, Lightspeed, NCR, Dynamics 365 Retail, SAP, NetSuite)',
    'Unified customer profile across web, mobile, and in-store',
    'Clienteling tools for store associates (wishlists, history, recommendations)',
    'Loyalty and gift-card wallets shared across channels',
    'AI-powered search, visual search, and personalized recommendations',
    'SEO-optimized product, category, and local store pages',
    'WCAG 2.1 AA accessibility compliance',
    'Composable architecture — swap CMS, payment, or search without replatforming',
  ],

  technologies: [
    'Next.js 15 / React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js / .NET (integration layer)',
    'PostgreSQL / MongoDB',
    'Azure / AWS (cloud hosting)',
    'Sanity / Contentful / Storyblok (headless CMS)',
    'Algolia / Constructor.io (search)',
    'Stripe / Adyen / Braintree (tokenized payments)',
    'Azure AI / OpenAI (recommendations)',
    'Vercel (frontend hosting)',
    'Terraform (IaC)',
  ],

  relatedPages: [
    {
      title: 'E-commerce Websites',
      description:
        'Pure-play online storefront with no physical retail footprint? Our e-commerce template focuses on headless commerce, conversion, and platform migrations without the store integration overhead.',
      href: '/solutions/e-commerce-websites',
      icon: 'ShoppingCart',
      pageType: 'solution',
    },
    {
      title: 'Product Discovery',
      description:
        'Scoping a retail replatform or a unified-commerce initiative? A 2-week discovery sprint validates the channel strategy and produces the integration map we build from.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Mobile App Development',
      description:
        'Retail website live, now ready for the app? See how we build associate-clienteling and shopper apps that share the same commerce core as your website — one data spine, two front-ends.',
      href: '/services/mobile-development',
      icon: 'Smartphone',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'Can you integrate with our existing POS and ERP, or do we have to rip them out?',
      answer:
        'We integrate, not replace. The custom storefront sits behind a dedicated integration layer that talks to your existing POS (Shopify POS, Lightspeed, NCR, Oracle Retail, Square) and ERP (Microsoft Dynamics 365 Retail, SAP, NetSuite, Acumatica) via their native APIs or middleware like MuleSoft and Azure Logic Apps. The integration layer handles bi-directional sync of products, prices, inventory, customers, and orders so the storefront always sees the same truth as the store. If a core system ever needs to change, you swap the adapter in that layer — not the whole website.',
    },
    {
      question:
        'How do you handle BOPIS, ship-from-store, and curbside without breaking our store operations?',
      answer:
        'Omnichannel fulfilment flows are designed alongside your store operations team, not on top of them. The order-orchestration logic — which store fulfils, what the associate sees, how inventory is decremented, how the shopper is notified — is configurable per store and per SKU. We typically pilot BOPIS at a subset of stores before a full rollout, so associates get comfortable with the pick-pack-notify workflow and we can tune the rules before every location goes live. Ship-from-store and curbside follow the same pattern: start small, measure, scale.',
    },
    {
      question:
        'Will a custom retail website actually pay back vs. Shopify Plus or Salesforce Commerce Cloud?',
      answer:
        'The honest answer is "it depends on your size and integration depth." For retailers under ~$5M GMV with simple POS and a single warehouse, a platform like Shopify Plus is usually the right call. Above that — especially with multiple stores, complex ERP integration, international tax, or a brand that wants editorial content as a first-class citizen — custom becomes materially cheaper over a 3–5 year horizon because platform fees scale with revenue while custom infrastructure costs don\'t. We will give you a candid build-vs-buy assessment in discovery before you commit.',
    },
    {
      question: 'How do you migrate from our current platform without tanking SEO?',
      answer:
        'SEO preservation is a first-class deliverable, not an afterthought. Before cutover we crawl the legacy site to generate a complete 301 redirect map for every indexed URL, preserve canonical tags and structured data across the new templates, and keep URL patterns where feasible. Post-launch we monitor Google Search Console daily during hypercare to catch any crawl or ranking issues early. Most organic traffic drops after a retail replatform come from missed redirects — we treat that as the first release blocker, not the last.',
    },
    {
      question:
        'What about PCI compliance — do we need to go through a full audit?',
      answer:
        'In almost all cases, no. We architect checkout using hosted payment fields and tokenization via Stripe, Adyen, or Braintree so raw card data never touches your application. That puts the storefront under PCI DSS SAQ A — the lightest compliance tier — rather than a full SAQ D audit. We document the payment architecture for your compliance records and test the full checkout, refund, and chargeback flows end-to-end before launch.',
    },
    {
      question:
        'How do you handle peak events like Black Friday, product drops, or holiday seasons?',
      answer:
        'The infrastructure is architected for elastic scaling from day one. We deploy on Azure or AWS with auto-scaling compute, a global CDN for static and semi-static content, read replicas for catalogue-heavy queries, and a Redis cache for sessions and inventory snapshots. Ahead of major peaks we run load tests against projected traffic, tune the cache layer, and ship a seasonal-peak runbook so your ops team knows exactly what to watch and which dials to turn if something spikes.',
    },
    {
      question:
        'What does ongoing support look like after launch, and can we take it in-house?',
      answer:
        'We offer tiered managed-service agreements covering security patching, dependency updates, performance monitoring, and a monthly pool of engineering hours for new features and optimization. The codebase is fully documented and handed over to you — you are never locked into our support. Many retailers run a split model: in-house for day-to-day merchandising and content, us for integrations, infrastructure, and larger features. Either way, the code is yours.',
    },
  ],

  imageFeatures: [
    {
      heading: 'The Brand Shows Up Before the Checkout',
      description:
        'Editorial lookbooks, campaign pages, and lifestyle storytelling live alongside the product catalogue. The website is the brand, not a commodity checkout funnel — and your marketing team edits it without a deploy.',
      image: {
        src: '/images/solutions/retail-websites/feature-1.jpg',
        alt: 'Retail shopping bags arranged against a dark surface, conveying branded purchase experience',
      },
    },
    {
      heading: 'Online and Store Share One Receipt',
      description:
        'POS-integrated checkout means in-store sales, online orders, BOPIS pickups, and associate-assisted sales all write to one order record. One customer history, one returns policy, one loyalty balance — everywhere.',
      image: {
        src: '/images/solutions/retail-websites/feature-2.jpg',
        alt: 'Shopper paying with a mobile wallet at an in-store point-of-sale terminal',
      },
    },
  ],

  cta: {
    title: 'Ready to build a retail website that respects your stores?',
    description:
      'Book a free 30-minute discovery call. We will review your current stack, channel mix, and commerce goals, then give you a candid read on whether a custom omnichannel build is the right next step — or whether a platform would serve you better.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the commerce map', href: '#signature' },
  },

  // === _unverified review (Phase 3 audience-test pass) ===
  // Buyer tested against: VP of Digital / Head of E-commerce / COO / owner at
  // a multi-channel retail brand. KPI: omnichannel revenue, conversion, LTV.
  // Test applied to every element: "does this move this buyer toward trust,
  // a lead, or clarity, and is the framing honest for a greenfield company?"
  //
  // RESOLVED items (removed or rewritten — not kept in _unverified):
  //   hero.metrics[*]       — all three reframed as capability statements
  //                           ("Unified", "BOPIS-ready", "You own it") rather
  //                           than uncited outcome percentages.
  //   metricsStrip[*]       — same approach as /solutions/e-commerce-websites
  //                           (Decision v1.4): every metric is a capability
  //                           descriptor, no uncited % ranges, no
  //                           "clients see" framing.
  //   features[2] BOPIS     — vendor names (Manhattan, NewStore, Fluent)
  //                           woven in with "we build the handoff flows with
  //                           your OMS, whether that is X, Y, or Z" —
  //                           capability framing, not shipped-work framing.
  //   features[3] payments  — Stripe/Adyen/Braintree framed as "we build with"
  //                           and explicit PCI SAQ A capability claim (true).
  //   features[4] loyalty   — Yotpo/Smile.io/LoyaltyLion framed as
  //                           "we build integrations with" (greenfield-safe).
  //   features[5] search    — Algolia/Constructor.io framed as the
  //                           underlying search tech, not as shipped case.
  //   benefits[*]           — all five are outcome-framed, but every claim is
  //                           architectural ("architected for", "means",
  //                           "eliminates") rather than outcome-reported.
  //                           No "we achieved", no "clients see", no stats.
  //   processSteps[*]       — present-tense engagement descriptions; duration
  //                           ranges are standard consulting framing, not
  //                           outcome claims.
  //   capabilities[3]       — POS/ERP vendor list framed as integration
  //                           capability scope, not shipped-client list.
  //   faqs[0] POS/ERP       — "We integrate with X, Y, Z via their native
  //                           APIs" — capability framing.
  //   faqs[1] BOPIS         — Process description in present tense;
  //                           "we typically pilot at a subset of stores"
  //                           describes the method, not a specific past case.
  //   faqs[2] build-vs-buy  — Deliberate honesty move: acknowledges when
  //                           Shopify Plus is the right call; discovery
  //                           framed as assessment not sales. Builds trust
  //                           with the exact skeptical buyer this page
  //                           targets.
  //   faqs[3] SEO migration — Process description; "we treat X as the first
  //                           release blocker" is a methodology claim.
  //   faqs[4] PCI           — Architectural claim (SAQ A follows from
  //                           tokenized + hosted fields) — verifiable.
  //   faqs[5] peak events   — Capability description, no perf numbers.
  //
  // REMAINING items are deferred content-team reminders, not integrity flags:
  _unverified: [
    'caseStudySpotlight — intentionally omitted. Add a real retail case study ' +
      'here when one is signed off for public use (client name, metrics, quote).',
    'integrationsPanel — intentionally omitted. Vendor names (Shopify POS, ' +
      'NCR, Dynamics 365 Retail, SAP, NetSuite, Manhattan, NewStore, Fluent, ' +
      'Algolia, Yotpo, Stripe, Adyen) are woven into features[2–5], ' +
      'capabilities[3], and faqs[0] prose instead of a developer-lens grid.',
  ],
};

export default retailWebsites;
