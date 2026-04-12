import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Engineering / CTO / Director of Technology at a mid-market company (100–5,000 employees)
// Measured on: application reliability, delivery timelines, team velocity, cost per feature
// Dominant question: "How do you ensure the app performs in production and doesn't break?"
// Key trust issue: "The last agency delivered something that looked great in demos but was
//   brittle in production — no tests, poor architecture, impossible for my team to maintain."
// Signature: WebAppBuildPipeline — 5-stage engineering pipeline (Scope → Build → Test → Ship → Monitor)
//   with quality gates between stages. Process/flow pattern. Addresses trust issue directly by
//   showing the engineering rigor behind the deliverable.
//
// Composition follows SaaS Development and MVP Development references (same archetype).
// Deviations from Archetype B recipe:
//   - ProcessTimeline dropped — signature carries the process narrative; TechStackBlock +
//     EngagementModels demonstrate depth. 10 sections matches pilot density.
//   - RelatedPages added after EngagementModels (standard for all pages per v1.4).

const webAppDevelopment: ServicePageData = {
  slug: 'web-app-development',
  title: 'Web App Development',
  shortDescription:
    'Modern web application development — responsive frontends, robust APIs, production-grade infrastructure. From requirements to a running system your team can maintain and scale.',

  metaTitle: 'Web App Development | Production-Grade Custom Web Applications',
  metaDescription:
    'Custom web application development with React, Next.js, Angular, and .NET. Responsive, tested, production-ready web apps with CI/CD, monitoring, and full code ownership from day one.',
  keywords: [
    'web app development',
    'web application development company',
    'custom web app development',
    'web app development services',
    'build a web application',
    'enterprise web application development',
    'react web app development',
    'next.js web application',
    'full stack web development',
    'web application development services',
    'progressive web app development',
    'responsive web application',
  ],
  canonicalPath: '/services/web-app-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Web App Development', href: '/services/web-app-development' },
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
  signatureComponent: 'WebAppBuildPipeline',
  heroIllustrationComponent: 'WebAppHeroIllustration',

  hero: {
    badge: 'Web Engineering',
    headline: 'Web applications built to run in production, not just in demos.',
    subhead:
      'Responsive frontends, robust APIs, automated testing, and production infrastructure — engineered as a system from day one, not stitched together after launch.',
    primaryCta: { label: 'Book a Web App Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the build pipeline', href: '#signature' },
  },

  // Audience test: VP of Engineering / CTO evaluating a dev partner needs to see production-grade
  // signals immediately. Every metric is capability-framed (greenfield-safe, no fabricated outcomes).
  // "Production-Grade" → addresses trust issue (brittle code). VP cares. ✓
  // "Ship Weekly" → transparency and velocity signal. VP cares. ✓
  // "Full-Stack" → one team, not multiple vendors. VP cares. ✓
  // "Own Everything" → no lock-in, code ownership. VP cares. ✓
  metricsStrip: [
    {
      value: 'Production-Grade',
      label: 'Built for real traffic',
      description: 'Tested, monitored, deployed with CI/CD',
    },
    {
      value: 'Ship Weekly',
      label: 'Working software every sprint',
      description: 'Demo-able progress, no black boxes',
    },
    {
      value: 'Full-Stack',
      label: 'One team, frontend to cloud',
      description: 'UI, API, data, infrastructure',
    },
    {
      value: 'Own Everything',
      label: 'Your code, your infrastructure',
      description: 'Zero vendor lock-in',
    },
  ],

  // Audience test: VP of Engineering evaluates vendors on technical depth across the stack.
  // Each card maps to a real capability area they assess when comparing dev partners.
  // All capability-framed (greenfield-safe). No outcome claims.
  features: [
    {
      icon: 'Globe',
      title: 'Responsive Frontend Development',
      description:
        'Component-driven frontends with React, Next.js, Angular, or Vue.js. Accessible by default (WCAG 2.1 AA), mobile-first, and built on a typed design system your team can extend.',
    },
    {
      icon: 'Server',
      title: 'API & Backend Engineering',
      description:
        'RESTful and GraphQL APIs built on .NET, Node.js, or Python. Type-safe contracts, versioned endpoints, and a service layer that separates business logic from transport.',
    },
    {
      icon: 'Database',
      title: 'Database Design & Performance',
      description:
        'Schema design, automated migrations, query optimization, and caching strategy. SQL and NoSQL — PostgreSQL, Azure SQL, Cosmos DB, MongoDB — chosen to match your data access patterns.',
    },
    {
      icon: 'Lock',
      title: 'Authentication & Security',
      description:
        'OAuth 2.0, SSO (SAML, OIDC), role-based access control, and encryption at rest and in transit. Authentication is a first-class architectural layer, not a bolted-on middleware.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud Infrastructure & DevOps',
      description:
        'Infrastructure as Code on Azure or AWS. CI/CD pipelines, staging environments, zero-downtime deployments, and production monitoring wired in before the first feature ships.',
    },
    {
      icon: 'TestTube2',
      title: 'Testing & Quality Engineering',
      description:
        'Unit, integration, and end-to-end tests built alongside every feature. Automated visual regression, performance benchmarks, and security scanning in the CI pipeline.',
    },
  ],

  // Audience test: VP of Engineering cares about outcomes — reliability, maintainability,
  // speed, and ownership. Frame benefits as what the buyer gets, not what we build.
  // All capability-framed (greenfield-safe).
  benefits: [
    {
      icon: 'Eye',
      title: 'Working Software Every Week',
      description:
        'A live URL every Friday showing real functionality you can click through. No slides, no recordings. If it is not demo-able, we say so — you always know exactly where the project stands.',
    },
    {
      icon: 'TrendingUp',
      title: 'Architecture That Scales With Load',
      description:
        'Connection pooling, caching layers, and autoscaling are structural decisions made during architecture design. When traffic grows, the application bends instead of breaking.',
    },
    {
      icon: 'FileCode2',
      title: 'A Codebase Your Team Can Maintain',
      description:
        'Typed code, consistent patterns, automated tests, and architecture decision records. When your team opens the repo — or a new hire onboards — the codebase explains itself.',
    },
    {
      icon: 'Rocket',
      title: 'Production-Ready From Day One',
      description:
        'CI/CD, error tracking, performance monitoring, and structured logging are wired in before the first feature is built. Production readiness is not a final sprint — it is the starting condition.',
    },
    {
      icon: 'Shield',
      title: 'Full Ownership, Zero Lock-In',
      description:
        'Your code lives in your repository, runs on your cloud account, and deploys through your CI/CD pipeline. Full IP ownership from the first commit. Walk away any time with everything.',
    },
  ],

  capabilities: [
    'Full-stack web application development (React, Next.js, Angular, Vue.js, .NET)',
    'RESTful API and GraphQL design with versioning',
    'Real-time features (WebSockets, SignalR)',
    'Progressive Web Apps (PWA) with offline support',
    'Database design, migrations, and performance tuning',
    'Authentication and authorization (OAuth, SSO, RBAC)',
    'CI/CD pipelines with automated testing gates',
    'Infrastructure as Code on Azure or AWS',
    'Production observability (errors, metrics, logs, alerts)',
    'Accessibility (WCAG 2.1 AA) built into the component layer',
  ],

  technologies: [
    'Next.js / React',
    'Angular',
    'TypeScript',
    '.NET / ASP.NET Core',
    'Node.js',
    'PostgreSQL / Azure SQL',
    'Azure / AWS',
    'Terraform / Bicep',
    'Docker',
    'GitHub Actions',
    'Playwright / Cypress',
    'Sentry / Application Insights',
  ],

  engagementModels: [
    {
      name: 'Starter Build',
      duration: '8 weeks',
      priceFrom: '$60,000',
      whatsIncluded: [
        'Core application flow (one user journey)',
        'Authentication + user management',
        'Responsive frontend + API',
        'CI/CD + production deployment',
        'Weekly demos',
      ],
      suitableFor: 'Teams validating a focused web application with a single core workflow',
      primaryCta: { label: 'Book Starter Build Call', href: '/contact?webapp=starter' },
    },
    {
      name: 'Full Application',
      duration: '14 weeks',
      priceFrom: '$130,000',
      whatsIncluded: [
        'Multiple user flows and roles',
        'Third-party integrations (CRM, payment, analytics)',
        'Advanced auth (SSO, RBAC)',
        'Automated test suite (unit, integration, E2E)',
        'Performance optimization + caching',
        'Full documentation + architecture decision records',
      ],
      suitableFor: 'Teams building a complete web application with integrations and multiple user roles',
      primaryCta: { label: 'Book Full App Call', href: '/contact?webapp=full' },
      featured: true,
    },
    {
      name: 'Enterprise Platform',
      duration: '20+ weeks',
      priceFrom: '$220,000',
      whatsIncluded: [
        'Everything in Full Application',
        'Complex integrations (ERP, legacy systems, data pipelines)',
        'Advanced security and compliance controls',
        'Load testing + infrastructure hardening',
        'In-house team onboarding + knowledge transfer',
        'Extended post-launch support window',
      ],
      suitableFor: 'Organizations building enterprise-grade web applications with compliance, integration, or scale requirements',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?webapp=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'MVP Development',
      description:
        'Have a new product idea with a fixed deadline? Our 12-week MVP sprint takes you from concept to paying customers — then we scale it into a full web application.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'SaaS Software Development',
      description:
        'Building a multi-tenant product? See how we add subscription billing, tenant isolation, and usage metering to a web application foundation.',
      href: '/services/saas-development',
      icon: 'Layers',
      pageType: 'service',
    },
    {
      title: 'UI/UX Design',
      description:
        'Need the UX designed before building? Our research-driven design engagements produce wireframes, prototypes, and design systems your engineering team can build from directly.',
      href: '/services/ui-ux-design',
      icon: 'Palette',
      pageType: 'service',
    },
  ],

  // FAQs driven by top 3 buyer questions and key trust issue.
  // Each answer leads with a direct response in the first sentence (AEO optimization).
  faqs: [
    {
      question: 'What tech stack do you use for web applications?',
      answer:
        'We build with React, Next.js, Angular, and Vue.js on the frontend, and .NET, Node.js, or Python on the backend — chosen to match your requirements, team familiarity, and long-term maintenance plan. If you have an existing stack, we work within it. If you are starting fresh, we recommend a stack during the architecture phase and document the rationale in an architecture decision record so the choice is traceable, not tribal.',
    },
    {
      question: 'How do you ensure quality in production?',
      answer:
        'Every feature is built alongside automated tests — unit, integration, and end-to-end. A CI/CD pipeline runs the full test suite, security scans, and build checks on every pull request before code reaches staging. Production deployments use zero-downtime strategies with rollback capability. Error tracking, performance monitoring, and structured logging are wired in from the first week — not added after launch.',
    },
    {
      question: 'What does a typical engagement timeline look like?',
      answer:
        'Most web application builds run 8 to 20 weeks depending on scope. The first two weeks focus on architecture design, environment setup, and CI/CD — production infrastructure is live before the first feature is built. From week three, you see working software in weekly demos. The timeline is fixed at the start of the engagement based on a scoped backlog, not a rough estimate.',
    },
    {
      question: 'Can you work with our existing codebase?',
      answer:
        'Yes. We start with an architecture assessment of your current application — code quality, test coverage, infrastructure, and deployment process. From there we produce a plan that introduces improvements incrementally alongside new feature work. We do not require a full rewrite to start delivering value.',
    },
    {
      question: 'Who owns the code and intellectual property?',
      answer:
        'You do. From the first commit. Your code lives in your repository, runs on your cloud account, and deploys through your CI/CD pipeline. Our contract assigns all intellectual property to you. There is no proprietary framework, no hosted platform dependency, and no exit fee. If you want to bring development in-house at any point, the codebase and documentation transfer is built into the engagement.',
    },
    {
      question: 'How do you handle scope changes mid-project?',
      answer:
        'Scope changes happen in daylight. Every Monday we review the backlog and explicitly decide what is in for the week and what is deferred. If a new requirement surfaces, we evaluate the trade-off — what it costs in timeline or budget, what gets deferred — and you make the call. No silent scope expansion, no surprise invoices.',
    },
  ],

  cta: {
    title: 'Ready to build a web application that works in production?',
    description:
      'Book a 30-minute strategy call. We will walk through your requirements, discuss architecture and stack options, and outline a realistic scope and timeline — no pressure, no commitment.',
    primaryCta: { label: 'Book web app strategy call', href: '/contact' },
    secondaryCta: { label: 'See the build pipeline', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable web app engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "8 weeks" for Starter Build. Confirm achievability for a single-flow app.',
    'engagementModels[1].duration — "14 weeks" for Full Application. Confirm achievability.',
    'technologies — confirm the stack matches what we deliver on web app engagements (e.g., Angular availability, Python backend offering).',
    'capabilities — none individually verified against shipped work yet.',
    'faq[2] — "8 to 20 weeks" timeline range. Confirm this aligns with actual engagement durations.',
  ],
};

export default webAppDevelopment;
