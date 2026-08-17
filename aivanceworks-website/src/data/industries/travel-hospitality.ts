import { BRAND_PREFIX } from '@/lib/constants';
import type { IndustryPageData } from '@/types/pages';

const travelHospitality: IndustryPageData = {
  slug: 'travel-hospitality',
  name: 'Travel & Hospitality',
  title: `${BRAND_PREFIX} Travel & Hospitality Software Development`,
  shortDescription:
    'Custom software and AI for hotels, airlines, travel agencies, and restaurants — built journey-first to run the guest experience, not just the back office, from the first search to a loyal returning guest.',

  metaTitle: 'Travel & Hospitality Software Development | Booking, PMS & Guest Apps',
  metaDescription:
    'We build custom travel and hospitality software — booking engines, guest experience and loyalty apps, custom PMS, OTA portals, and F&B technology — for hotels, airlines, travel agencies, and restaurant chains. API-first, PCI-compliant, AI-ready.',
  keywords: [
    'travel software development',
    'hospitality software development',
    'hotel booking engine development',
    'custom PMS development',
    'travel portal development',
    'OTA software development',
    'guest experience app',
    'hotel loyalty app development',
    'GDS integration',
    'NDC airline integration',
    'restaurant ordering system',
    'travel AI development',
  ],
  canonicalPath: '/industry/travel-hospitality',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industry' },
    { label: `${BRAND_PREFIX} Travel & Hospitality`, href: '/industry/travel-hospitality' },
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

  industry: 'travel-hospitality',

  icon: 'Plane',
  homeCard: {
    tagline:
      'Journey-first platforms for hotels, airlines, agencies, and restaurants — one seamless guest experience from first search to loyal return.',
    short: 'Journey-first platforms for hotels, airlines, agencies, and restaurants.',
    image: '/images/industries/travel-hospitality/category-card.jpg',
    alt: 'Vintage map and travel ephemera arranged on a desk',
    proof: ['Booking Engines', 'PMS / POS', 'Guest Loyalty'],
  },

  hero: {
    kicker: 'Industries · Travel & Hospitality',
    headline: 'Software that moves with modern travelers — from first search to loyal guest.',
    subhead:
      "Travelers expect one seamless journey; your teams are stuck stitching together booking engines, PMS, POS, and loyalty tools that were never built to talk to each other. We design and build the platform in between — software that runs the experience, not just the back office.",
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
    heroImage: {
      src: '/images/industries/travel-hospitality/hero.jpg',
      alt: 'Guests arriving at the lobby of a modern hotel in the evening',
    },
    standards: ['PCI DSS', 'GDPR', 'CCPA', 'SOC 2', 'GDS / NDC', 'WCAG 2.2'],
    standardsLabel: 'Built to the standards travel platforms run on',
  },

  // ── Problem statement (lead with the pain) ──
  pressures: {
    title: 'The forces reshaping how people travel — and how you run',
    intro:
      'Margins are squeezed by OTA commissions, guest expectations are set by the best app someone used yesterday, and your operations run on systems that were never designed to connect. These are the pressures we build software to relieve — which is why we lead with the journey, not the product.',
    items: [
      {
        icon: 'Unplug',
        title: 'A disconnected guest journey',
        description:
          'Booking, check-in, room service, dining, and loyalty live in separate systems. No one sees the whole guest, so personalization and upsell opportunities slip away.',
      },
      {
        icon: 'Boxes',
        title: 'Outgrown off-the-shelf systems',
        description:
          'Opera, Cloudbeds, and generic PMS tools force the operation to fit the software. Operators who have scaled past them need custom control they cannot get off the shelf.',
      },
      {
        icon: 'TrendingDown',
        title: 'OTA dependence, thin margins',
        description:
          'Every OTA booking is a commission and a guest relationship you do not own. Without a strong direct channel, you are effectively renting your own customers.',
      },
      {
        icon: 'ClipboardList',
        title: 'Manual, fragmented operations',
        description:
          'Housekeeping, crew coordination, table management, and reservations run on spreadsheets and phone calls — creating errors, delays, and overworked staff.',
      },
      {
        icon: 'Smartphone',
        title: 'Rising traveler expectations',
        description:
          'Travelers expect mobile-first, instant, and personalized — digital check-in, in-app everything. Anything slower feels broken, and they book elsewhere next time.',
      },
    ],
  },

  // ── AI & technology catalog (dark bento) ──
  capabilities: {
    title: 'Platforms we design, build, and connect — across the traveler journey',
    highlightText: 'across the traveler journey',
    subtitle:
      'From the first search to the post-stay review, these are the systems we build — and the AI layer that makes each one smarter over time.',
    groups: [
      {
        icon: 'CalendarCheck',
        title: 'Booking & Reservation Platforms',
        description: 'Custom engines built for surge and scale.',
        items: [
          'Multi-channel booking (web, mobile, OTA-connected)',
          'Real-time availability, dynamic-pricing-ready',
          'GDS & OTA integration (Amadeus, Sabre, Expedia APIs)',
          'Surge-load handling for seasonal and event peaks',
          'AI smart-pricing and demand-based availability surfacing',
        ],
      },
      {
        icon: 'ConciergeBell',
        title: 'Guest Experience & Loyalty',
        description: 'One coherent journey, pre-arrival to post-stay.',
        items: [
          'Digital check-in / check-out',
          'In-app concierge and room-service requests',
          'Loyalty point tracking and personalized offers',
          'Multi-property and resort brand apps',
          'The guest journey as one product, not bolted-on tools',
        ],
      },
      {
        icon: 'Building2',
        title: 'Property & Operations Management (PMS)',
        description: 'Custom control where off-the-shelf cannot keep up.',
        items: [
          'Housekeeping and staff task workflows',
          'Room inventory and rate management',
          'Billing, folio, and night-audit',
          'White-label PMS for boutique chains and serviced apartments',
          'A modern replacement for outgrown tools (Opera, Cloudbeds)',
        ],
      },
      {
        icon: 'Globe',
        title: 'Travel Portal & OTA Development',
        description: 'API-first marketplaces and distribution.',
        items: [
          'Flight + hotel + activity bundling',
          'White-label agency and B2B distributor portals',
          'GDS, NDC airline, and car-rental API connectivity',
          'Integrated payment gateways and multi-currency',
          'MVP-first builds for OTA startups',
        ],
      },
      {
        icon: 'UtensilsCrossed',
        title: 'Restaurant & F&B Technology',
        description: 'POS-connected ordering, tables, and loyalty.',
        items: [
          'Digital ordering and table reservations',
          'Kitchen display system integration',
          'Menu management across locations',
          'F&B loyalty programs and offers',
          'An add-on for hotels or a standalone for chains',
        ],
      },
      {
        icon: 'LineChart',
        title: 'Data, Analytics & AI Integration',
        description: 'The intelligence layer behind every system.',
        items: [
          'Revenue management and occupancy dashboards',
          'Demand forecasting and dynamic pricing',
          'Customer segmentation and churn prediction',
          'AI trip-recommendation engines',
          'NLP review analysis and sentiment trends',
        ],
      },
    ],
  },

  // ── Payments, privacy & trust (prominent) ──
  complianceDetail: {
    title: 'Payments and traveler data you can be trusted with.',
    statement:
      'Travelers hand you their card, their passport details, and their itinerary. Booking platforms live and die on that trust — so every system we build starts from payment security and data privacy, designed in from the first commit, never bolted on before launch.',
    frameworks: [
      'PCI DSS',
      'GDPR',
      'CCPA',
      'SOC 2',
      'PSD2 / SCA',
      '3-D Secure',
      'WCAG 2.2',
      'OpenTravel',
    ],
    safeguards: [
      {
        icon: 'CreditCard',
        title: 'PCI DSS-compliant payments',
        description:
          'Card data is tokenized and vaulted with a compliant payment provider. Your application is architected so raw card numbers never touch your servers, shrinking PCI scope from the start.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Traveler data privacy by design',
        description:
          'GDPR and CCPA consent, data-subject rights, and regional data residency are built into the data model — not patched in after a complaint or a cross-border deal.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Fraud & chargeback protection',
        description:
          '3-D Secure, velocity checks, and anomaly detection guard against card fraud and account takeover across booking, payment, and loyalty flows.',
      },
      {
        icon: 'Network',
        title: 'Secure GDS, OTA & payment integration',
        description:
          'Every external connection — GDS, NDC, OTA, gateways — is authenticated, rate-limited, and monitored, with graceful degradation when a partner feed goes down.',
      },
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with secrets held in a managed vault and key-rotation policies that satisfy PCI and SOC 2 expectations.',
      },
      {
        icon: 'Accessibility',
        title: 'Accessible and resilient under load',
        description:
          'Booking surfaces are built to WCAG 2.2 AA and load-tested for seasonal surges, so the platform stays open and usable exactly when demand spikes.',
      },
    ],
    auditNote:
      'We provide the architecture documentation, data-flow diagrams, and control evidence your acquirer, payment provider, or SOC 2 auditor needs — and we walk your security and finance teams through PCI scope and data handling before a single booking is taken.',
    partnerAgreements: ['DPA', 'SLA', 'PCI SAQ support'],
  },

  // ── Sub-verticals (who we serve) ──
  segments: {
    title: "Travel and hospitality isn't one buyer — and we don't build like it is",
    subtitle:
      'A boutique resort, a regional airline, and an OTA startup share almost nothing about how they buy or what they need built. We scope, integrate, and frame the work to fit each one.',
    items: [
      {
        icon: 'Hotel',
        name: 'Boutique Hotels & Resorts',
        buyer: 'GM · Owner · Director of Operations',
        needs: [
          'Replace a generic PMS they have outgrown',
          'A branded guest app for the whole stay',
          'Direct booking that reduces OTA dependence',
          'Housekeeping and operations that run themselves',
        ],
      },
      {
        icon: 'Plane',
        name: 'Regional Airlines & Charter',
        buyer: 'COO · Head of Operations',
        needs: [
          'Replace manual crew and ops coordination',
          'Passenger self-service (booking, changes, check-in)',
          'Reliable scheduling and disruption handling',
          'Integration with GDS and NDC distribution',
        ],
      },
      {
        icon: 'Compass',
        name: 'Travel Agencies & OTA Startups',
        buyer: 'Founder · Head of Product',
        needs: [
          'A full travel portal without an in-house tech team',
          'MVP-first, built to scale after launch',
          'Flight, hotel, and activity bundling',
          'GDS, NDC, and payment integrations that work',
        ],
      },
      {
        icon: 'UtensilsCrossed',
        name: 'Restaurant Chains',
        buyer: 'COO · Director of Technology',
        needs: [
          'Unify a fragmented, multi-location POS',
          'Online ordering and table reservations',
          'A loyalty program guests actually use',
          'Kitchen and delivery-platform integration',
        ],
      },
      {
        icon: 'Map',
        name: 'Tour Operators',
        buyer: 'Owner · Operations Lead',
        needs: [
          'A booking engine to replace manual bookings',
          'A customer portal for itineraries and payments',
          'Activity and package inventory management',
          'Channel and reseller distribution',
        ],
      },
    ],
    footerNote:
      'Not sure which path fits? A short consultation will map your segment, your existing systems, and the fastest route from manual operations to a platform.',
  },

  // ── Technology & standards ──
  techStandards: {
    title: 'We speak your stack',
    subtitle:
      'The systems travel and hospitality already run on, and the platforms, standards, and AI frameworks we build with.',
    systemsTitle: 'Systems & distribution you already run',
    systems: [
      'PMS integration or replacement (Opera, Cloudbeds, Mews)',
      'GDS connectivity (Amadeus, Sabre, Travelport)',
      'OTA & channel managers (Expedia, Booking.com)',
      'NDC airline distribution',
      'POS & kitchen display (Toast, Square, Oracle Micros)',
      'Payment gateways (Stripe, Adyen, Braintree)',
      'Loyalty, CRM & marketing automation',
    ],
    technologiesTitle: 'Platforms, standards & AI frameworks',
    technologies: [
      'Azure',
      'AWS',
      'OpenTravel (OTA)',
      'NDC',
      'PCI DSS',
      'GraphQL',
      'REST APIs',
      '.NET',
      'Python',
      'TypeScript',
      'React Native',
      'Next.js',
      'Azure OpenAI',
      'LangChain',
      'Databricks',
      'Stripe',
    ],
  },

  // ── Relevant services we bring to travel & hospitality (cross-links) ──
  services: {
    title: 'The services we bring to travel & hospitality',
    subtitle:
      'The engineering and AI capabilities we apply to the hardest problems in travel and hospitality — explore each.',
    items: [
      {
        title: 'Conversational AI',
        description:
          'Booking-support chatbots and agentic travel-planning assistants that handle questions, changes, and upsell — in any language.',
        href: '/services/conversational-ai',
        icon: 'MessagesSquare',
      },
      {
        title: 'Generative AI',
        description:
          'Guest copilots, itinerary generation, and NLP that turns thousands of reviews into actionable sentiment.',
        href: '/services/generative-ai',
        icon: 'Sparkles',
      },
      {
        title: 'Mobile App Development',
        description:
          'Guest apps, digital check-in, and passenger self-service — mobile-first and built for the whole journey.',
        href: '/services/mobile-development',
        icon: 'Smartphone',
      },
      {
        title: 'API Development',
        description:
          'API-first integration across GDS, NDC, OTA, payments, and POS — the connective tissue of a travel platform.',
        href: '/services/api-development',
        icon: 'Webhook',
      },
      {
        title: 'Data Engineering',
        description:
          'Revenue dashboards, demand-forecasting pipelines, and analytics-ready foundations that unify your systems.',
        href: '/services/data-engineering',
        icon: 'Database',
      },
      {
        title: 'Application Modernization',
        description:
          'Migrate legacy PMS/CRS off brittle platforms onto a modern, integrable architecture — without disrupting bookings.',
        href: '/services/application-modernization',
        icon: 'RefreshCw',
      },
    ],
  },

  faqTitle: 'Questions travel & hospitality teams ask',
  faqs: [
    {
      question: 'What kinds of travel and hospitality software do you build?',
      answer:
        'We build across the full traveler journey: booking and reservation platforms, guest-experience and loyalty apps, custom property and operations management systems (PMS), travel portals and OTA marketplaces, restaurant and F&B technology, and the data, analytics, and AI layer that makes them smarter. We work with boutique hotels and resorts, regional airlines and charters, travel agencies and OTA startups, restaurant chains, and tour operators.',
    },
    {
      question: 'Can you integrate with our existing PMS, GDS, and OTA channels?',
      answer:
        "Yes. We integrate with major property management systems (Opera, Cloudbeds, Mews), GDS platforms (Amadeus, Sabre, Travelport), NDC airline feeds, OTA and channel managers (Expedia, Booking.com), POS systems, and payment gateways. Where a system exposes limited APIs, we build a secure middleware layer so your existing workflows don't have to change — and when you've outgrown an off-the-shelf PMS entirely, we can replace it with a custom platform you control.",
    },
    {
      question: 'How do you handle payments and PCI compliance?',
      answer:
        'Payment security is designed in from the start. We architect booking and loyalty flows so card data is tokenized and vaulted with a PCI-compliant payment provider — your application is built so raw card numbers never touch your servers, which keeps your PCI scope small. We implement 3-D Secure, fraud and chargeback protection, and multi-currency handling, and we provide the data-flow documentation your acquirer or auditor needs.',
    },
    {
      question: "We're a travel startup with no tech team — can you build our platform?",
      answer:
        "Absolutely. We help founders ship an MVP-first travel portal or booking platform on an architecture that scales, so you're not re-platforming after your first growth spike. That means a working product fast — flight, hotel, and activity bundling, GDS/NDC and payment integrations, and a guest or agency portal — engineered to be investor- and audit-ready from day one.",
    },
    {
      question: 'Where does AI actually fit in a travel or hospitality platform?',
      answer:
        'We anchor AI as an intelligence layer, not a gimmick wrapped around every feature. That means revenue management and demand forecasting, dynamic pricing, customer segmentation and churn prediction for repeat bookings, AI trip-recommendation engines, and NLP that turns guest reviews into sentiment trends. On the front line, conversational AI handles booking support and agentic travel planning. Each one makes the underlying booking engine, PMS, or portal smarter over time.',
    },
    {
      question: 'Can you build guest experience and loyalty as one product instead of separate tools?',
      answer:
        'Yes — and we recommend it. Rather than bolting a CRM onto a separate loyalty system, we build the guest journey as one coherent product: pre-arrival digital check-in, in-app concierge and room service, loyalty tracking, and personalized post-stay offers. One experience means one view of the guest, which is exactly where real personalization and upsell come from.',
    },
  ],

  cta: {
    title: "Let's build the platform that moves with your travelers.",
    description:
      "Travel and hospitality runs on connected systems and guest trust. Start with a consultation: we'll map your segment, your existing systems, and the fastest realistic route from manual operations to a platform you own.",
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
  },

  _unverified: [
    'All content uses capability framing only — no client names, case studies, testimonials, or measured outcome metrics are claimed.',
    'complianceDetail.frameworks — "SOC 2" listed; confirm whether {SITE_CONFIG.name} holds a SOC 2 attestation or is in progress. PCI DSS framing describes architecting client applications to reduce PCI scope, not a held QSA certification.',
    'techStandards.systems & capabilities — integration names (Opera, Cloudbeds, Mews, Amadeus, Sabre, Travelport, Expedia, Booking.com, Toast, Square, Oracle Micros, Stripe, Adyen, Braintree) describe competencies; confirm which have actually shipped before implying delivered volume.',
    'services — cross-links point to live /services/* pages. hero.secondaryCta / cta.secondaryCta anchor to #services.',
  ],
};

export default travelHospitality;
