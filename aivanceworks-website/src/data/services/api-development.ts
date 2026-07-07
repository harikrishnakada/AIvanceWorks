import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service ("I need this built. Prove you can.")
// Buyer: CTO / VP Engineering / Head of Platform / Engineering Lead at a US mid-market
//   company or funded startup who needs an API built — a backend API that powers their own
//   web and mobile apps, a partner API exposed to selected integrators, or a public API for
//   a developer audience. A technical buyer who can tell a hardened, documented API from
//   "an endpoint that returns JSON."
// Measured on: shipping a secure, reliable interface their own apps and partners can build
//   on without constant support tickets, breaking changes, or security incidents — and a
//   codebase their team can own and maintain afterward.
// Top 3 buyer questions:
//   (1) Can you build an API that's secure, documented, and won't break the apps that depend on it?
//   (2) Will it stay reliable and predictable under real traffic?
//   (3) Can my team — and our partners — actually use and maintain it, and do we own it?
// #1 trust issue: APIs that ship as undocumented, unversioned, insecure endpoints that break
//   every consumer on a change and become a fragile maintenance liability — plus vendors who
//   hand over something nobody can integrate against without hand-holding. ANSWERED via
//   contract-first design, auth/rate-limiting/validation built in, a versioning strategy that
//   protects existing consumers, shipped interactive docs, and full ownership with no lock-in.
//
// Liability boundary (per user brief): this page describes building the buyer's OWN APIs and
//   the standard protocols/controls we build with (REST, GraphQL, OAuth 2.0, OpenAPI, rate
//   limiting). It deliberately makes NO claim of shipping complex third-party/enterprise
//   integrations (no SAP/Salesforce/etc. "we integrate with" claims) — every statement is a
//   capability we can stand behind, not an outcome or integration we'd be liable for.
//
// Signature: ApiRequestLifecycle — the anatomy of a production-grade API. A single request
//   descends through the hardening layers (gateway → auth → rate limiting → validation →
//   business logic → data) inside one published, versioned contract. Argument: "Returning
//   JSON is easy. We build the layers around it that make an API safe to expose, version,
//   and depend on." A relationship/topology a FeatureGrid cannot express (catalog §8.3 #2).
//
// Composition — standard Archetype B recipe (mirrors mvp-development / proof-of-concept):
//   hero → metricsStrip → featureGrid → signature → benefitsGrid → techStackBlock →
//   engagementModels → relatedPages → faq → ctaBlock. Two darks (hero + signature),
//   CTA accent, 10 sections — within the constitution's density and rhythm rules.

const apiDevelopment: ServicePageData = {
  slug: 'api-development',
  title: `${BRAND_PREFIX} API Development`,
  shortDescription:
    'Design and build secure, versioned, well-documented REST and GraphQL APIs — contract-first, hardened by default, and ready for your own apps and partners to build on.',

  metaTitle: 'API Development Services | REST & GraphQL APIs | AIvanceWorks',
  metaDescription:
    'API development services that design and build secure, versioned, well-documented REST and GraphQL APIs. Contract-first design, OAuth 2.0 auth, rate limiting, and interactive docs your apps and partners can build on.',
  keywords: [
    'api development',
    'api development services',
    'rest api development',
    'graphql api development',
    'custom api development',
    'contract-first api design',
    'backend api development',
    'secure api development',
    'api design services',
  ],
  canonicalPath: '/services/api-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: `${BRAND_PREFIX} API Development`, href: '/services/api-development' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'ApiRequestLifecycle',
  heroIllustrationComponent: 'ApiHeroIllustration',

  hero: {
    badge: 'Technical Service',
    headline: 'APIs built to be exposed, versioned, and depended on.',
    subhead:
      'We design and build REST and GraphQL APIs contract-first — secured, documented, and versioned, so your own apps and partners can integrate without breaking.',
    primaryCta: { label: 'Scope your API', href: '/contact' },
    secondaryCta: { label: 'See how a request flows', href: '#signature' },
  },

  // Audience test: a CTO / VP Eng scanning in 8 seconds for "do they know how to build a real
  // API, not just an endpoint." All four are capability/how-we-build facts — no fabricated
  // outcome numbers, no implied shipped history.
  metricsStrip: [
    {
      value: 'Contract-First',
      label: 'Designed before built',
      description: 'A published OpenAPI / GraphQL spec, agreed up front',
    },
    {
      value: 'OAuth 2.0',
      label: 'Secured by default',
      description: 'Auth, scopes, and rate limits built in — not bolted on',
    },
    {
      value: 'Versioned',
      label: 'Consumers never break',
      description: 'Backward compatibility by design',
    },
    {
      value: 'Docs Included',
      label: 'Self-serve integration',
      description: 'An interactive reference ships with the build',
    },
  ],

  // Audience test: these six map to what separates a production-grade API from a bare endpoint
  // — the exact checklist a technical buyer runs down. Framed as what they get, not jargon.
  features: [
    {
      icon: 'FileCode2',
      title: 'Contract-first API design',
      description:
        'We model your resources and endpoints and publish a REST or GraphQL contract — an OpenAPI spec or schema — before a line of code is written, so everyone agrees on the shape up front.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Authentication & access control',
      description:
        'OAuth 2.0, OpenID Connect, API keys, and JWTs with scope- and role-based authorization, so every request is identified and only does what it is allowed to do.',
    },
    {
      icon: 'GitBranch',
      title: 'Versioning without breakage',
      description:
        'A clear versioning strategy and backward-compatibility rules, so you can ship new capabilities without breaking the apps and partners already calling the API.',
    },
    {
      icon: 'Gauge',
      title: 'Rate limiting & resilience',
      description:
        'Quotas, throttling, sensible timeouts, and retry behavior that keep the API stable and fair when traffic spikes — and keep one noisy consumer from degrading everyone else.',
    },
    {
      icon: 'CheckCircle2',
      title: 'Validation & predictable errors',
      description:
        'Strict request validation, consistent error contracts, and clean pagination, so consumers get the same predictable response shape every time instead of guessing.',
    },
    {
      icon: 'BookOpen',
      title: 'Docs & developer experience',
      description:
        'An interactive, always-current API reference with real examples, so the developers consuming your API can integrate themselves instead of opening a support ticket.',
    },
  ],

  // Audience test: outcomes that justify the engagement to a CTO and their team.
  // Capability-framed (greenfield-honest) — what the build is architected to do, not
  // promised metrics from work we haven't shipped.
  benefits: [
    {
      icon: 'Plug',
      title: 'Integrations that just work',
      description:
        'Your own apps, mobile clients, and approved partners connect against a documented, predictable contract — so onboarding a new consumer is a self-serve task, not a project.',
    },
    {
      icon: 'Lock',
      title: 'Safe to expose',
      description:
        'Authentication, authorization, rate limiting, and validation are designed in from the start, so opening an endpoint to the outside world is a deliberate decision, not a risk.',
    },
    {
      icon: 'Layers',
      title: 'Evolve without breaking anyone',
      description:
        'A versioning discipline lets you add fields, endpoints, and capabilities while existing consumers keep working untouched — change without a coordinated migration scramble.',
    },
    {
      icon: 'KeyRound',
      title: 'Yours to own and run',
      description:
        'You receive the source, the API contract, the test suite, and a runbook. No proprietary tooling and no lock-in — your team can maintain and extend it without us.',
    },
  ],

  // Audience test: a technical buyer wants to see the breadth of what an API engagement
  // covers and the standard tools we build with — framed as capabilities and stack, not
  // implied shipped delivery history. No complex third-party integrations claimed.
  capabilities: [
    'RESTful API design & development',
    'GraphQL schema design & resolvers',
    'Contract-first design with OpenAPI / Swagger',
    'OAuth 2.0, OpenID Connect, API keys & JWT authentication',
    'Role- and scope-based authorization',
    'API versioning & backward-compatibility strategy',
    'Rate limiting, throttling & quota management',
    'Request validation, pagination & consistent error contracts',
    'Webhooks & event callbacks',
    'Interactive API documentation & developer onboarding',
    'Contract & integration testing',
    'Structured logging, metrics & request tracing',
  ],

  technologies: [
    '.NET / ASP.NET Core Web API',
    'Node.js',
    'TypeScript',
    'C#',
    'REST',
    'GraphQL',
    'OpenAPI / Swagger',
    'OAuth 2.0 / OIDC',
    'PostgreSQL',
    'Azure API Management',
    'Docker',
    'Postman',
  ],

  engagementModels: [
    {
      name: 'API Design Sprint',
      duration: '1–2 weeks',
      priceFrom: '$9,000',
      whatsIncluded: [
        'Endpoint and resource modeling',
        'A published OpenAPI or GraphQL contract',
        'Auth, versioning & error-handling strategy',
        'A build-ready spec your team or ours can implement',
      ],
      suitableFor:
        'Teams that want a solid, agreed API contract locked down before any code is written.',
      primaryCta: { label: 'Scope a design sprint', href: '/contact?api=design' },
    },
    {
      name: 'API Build',
      duration: '4–8 weeks',
      priceFrom: '$45,000',
      featured: true,
      whatsIncluded: [
        'Contract-first design workshop',
        'A production REST or GraphQL API',
        'Authentication, rate limiting & validation',
        'Interactive documentation with examples',
        'Contract and integration test suite',
        'Deployment with logging and monitoring',
      ],
      suitableFor:
        'Building a new API to power your own apps or expose to selected partners.',
      primaryCta: { label: 'Scope an API build', href: '/contact?api=build' },
    },
    {
      name: 'API Platform',
      duration: 'Custom',
      priceFrom: 'Custom',
      whatsIncluded: [
        'Everything in API Build',
        'An API gateway with centralized policy management',
        'Multiple services under one versioned contract',
        'A self-serve developer portal',
        'Onboarding and lifecycle documentation',
      ],
      suitableFor:
        'Standing up several APIs, or running a partner- or developer-facing API program.',
      primaryCta: { label: 'Discuss an API platform', href: '/contact?api=platform' },
    },
  ],

  relatedPages: [
    {
      title: 'Legacy Modernization',
      description:
        'Need to free a legacy system’s data and logic? API-first modernization wraps it in a clean, modern API — so new apps build against the API while the old system is replaced behind it.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'Custom Software Development',
      description:
        'Need the application behind the API too? Our custom software practice builds the full web or mobile product on top of the API — same team, one consistent codebase.',
      href: '/services/custom-software-development',
      icon: 'Settings',
      pageType: 'service',
    },
    {
      title: 'SaaS Software Development',
      description:
        'Building a SaaS platform? A clean, versioned API is what lets your customers and their tools build on your product. See how we develop multi-tenant SaaS around that API layer.',
      href: '/services/saas-development',
      icon: 'Layers',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'What kinds of APIs do you build?',
      answer:
        'We design and build REST and GraphQL APIs in three common shapes: internal APIs that power your own web and mobile apps, partner APIs you expose to selected integrators, and public APIs aimed at a developer audience. Every one is built contract-first, with authentication, versioning, and documentation treated as part of the build rather than an afterthought. The goal is the same in all three cases — an interface that other software can rely on without surprises.',
    },
    {
      question: 'How do you keep an API from breaking the apps that depend on it?',
      answer:
        'We agree a versioning strategy at design time and follow backward-compatibility rules: additive changes go into the current version, and anything that would break existing callers goes into a new version with a clear migration path. Consumers are never forced to change the day you ship. Combined with a published contract and contract tests, this means you can keep evolving the API while the apps and partners already using it keep working untouched.',
    },
    {
      question: 'How do you secure an API?',
      answer:
        'We build with standard, proven controls: OAuth 2.0 and OpenID Connect or API keys for authentication, scope- and role-based authorization so each caller only does what it is permitted to, strict input validation, and rate limiting to protect against abuse and runaway traffic. Traffic is encrypted in transit, and secrets are kept out of code. Security is designed into the contract from the start — it is not a layer we try to add after the API already works.',
    },
    {
      question: 'REST or GraphQL — which is right for us?',
      answer:
        'It depends on your consumers. REST is simple, cacheable, and a safe default for most public and partner APIs. GraphQL shines when clients need to fetch varied, nested data in a single round trip — common for rich mobile and single-page apps. We help you choose during the design phase based on who is calling the API and how, and we build either to the same standard. The right answer is the one your consumers find easiest to build against.',
    },
    {
      question: 'Will my team be able to use and maintain it?',
      answer:
        'Yes — that is a design goal, not an afterthought. The API ships with an interactive reference, real request and response examples, and clean, conventional code your engineers can read. We hand over the contract, the test suite, and a runbook covering deployment and common operational tasks. The aim is an API your team can extend and operate confidently on their own, whether or not you continue to work with us.',
    },
    {
      question: 'Do we own the API and the code?',
      answer:
        'Yes. The source code, the API contract, the documentation, the tests, and the infrastructure configuration are all yours. There is no proprietary framework you depend on us to maintain and no lock-in. You can keep building with us, take it in-house, or hand it to another team — the API and everything around it goes with you.',
    },
  ],

  cta: {
    title: 'Need an API your apps and partners can actually build on?',
    description:
      'Book a 30-minute call. We will map your endpoints, your consumers, and your auth and versioning needs — and scope an API contract worth building on.',
    primaryCta: { label: 'Scope your API', href: '/contact' },
    secondaryCta: { label: 'See how a request flows', href: '#signature' },
  },

  _unverified: [
    'metricsStrip[*] — capability/how-we-build claims (contract-first, OAuth 2.0, versioned, docs included). Confirm these describe our standard API delivery before publishing.',
    'engagementModels[0].priceFrom — "$9,000" is illustrative. Confirm with pricing review.',
    'engagementModels[1].priceFrom — "$45,000" is illustrative. Confirm with pricing review.',
    'engagementModels[*].duration — "1–2 weeks" / "4–8 weeks" are typical windows; confirm they match what we want to commit to publicly.',
    'technologies — confirm this stack reflects what we actually build APIs with (esp. Azure API Management as our default gateway).',
  ],
};

export default apiDevelopment;
