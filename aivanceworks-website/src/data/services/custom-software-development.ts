import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Engineering / CTO / Director of Technology at a mid-market enterprise (200–5,000 employees)
// Measured on: delivering digital products on time and budget, reducing technical debt, enabling
//   business operations through software
// Dominant question: "Can this team handle the full stack at enterprise scale — APIs, microservices,
//   real-time, not just frontends?"
// Key trust issue: "The last agency built something that worked in demo but fell apart in production —
//   couldn't scale, couldn't be maintained, used patterns nobody on our team understood."
// Signature: SoftwareDeliveryPipeline — 6-phase interactive pipeline showing end-to-end software
//   delivery from requirements through production support. Process/flow pattern (catalog #3).
//   Emotional argument: "This isn't a black box — here's exactly how your software gets built."
//
// Composition follows SaaS Development and Web App Development references (same archetype).
// Deviations from Archetype B recipe:
//   - ProcessTimeline dropped — signature carries the process narrative; TechStackBlock +
//     EngagementModels demonstrate depth. 10 sections matches pilot density.
//   - RelatedPages added after EngagementModels (standard for all pages per v1.4).
//
// Differentiation from Web App Development page: this is the CORE service page covering the
// full breadth of custom software (enterprise apps, microservices, event-driven architecture,
// real-time systems, Blazor, cross-platform). Web App Dev is a landing page focused specifically
// on web applications. Custom Software Dev targets a buyer evaluating broad technical capability.

const customSoftwareDevelopment: ServicePageData = {
  slug: 'custom-software-development',
  title: 'Custom Software Development',
  shortDescription:
    'End-to-end custom software development — from architecture through production. Full-stack web applications, APIs, microservices, and enterprise systems built on modern frameworks with full code ownership.',

  metaTitle: 'Custom Software Development | Full-Stack Engineering Services',
  metaDescription:
    'Custom software development with .NET, React, Next.js, and cloud-native architecture. Enterprise applications, APIs, microservices, and real-time systems — built for production, owned by you.',
  keywords: [
    'custom software development',
    'custom software development company',
    'custom software development services',
    'bespoke software development',
    'enterprise software development',
    'custom application development',
    'software development company',
    'full stack development services',
    'custom software engineering',
    'software development outsourcing',
    'microservices development',
    'enterprise application development',
  ],
  canonicalPath: '/services/custom-software-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Custom Software Development', href: '/services/custom-software-development' },
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
  signatureComponent: 'SoftwareDeliveryPipeline',
  heroIllustrationComponent: 'CustomDevHeroIllustration',

  hero: {
    badge: 'Custom Software Engineering',
    headline: 'Custom software that works in production, not just in demo.',
    subhead:
      'Full-stack development from architecture through deployment — built on modern frameworks, tested under real load, owned by you, maintainable by your team.',
    primaryCta: { label: 'Book a Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See our delivery process', href: '#signature' },
  },

  // Audience test: VP of Engineering / CTO evaluating a dev partner needs to see breadth of
  // capability and production-grade signals immediately. Every metric is capability-framed
  // (greenfield-safe, no fabricated outcomes).
  // "Full-Stack" → addresses breadth concern (not just frontend). VP cares. ✓
  // "Production-Hardened" → addresses trust issue (demo vs. production). VP cares. ✓
  // "Your Code" → addresses lock-in fear. VP cares. ✓
  // "Enterprise-Ready" → signals scale, not startup-only. VP cares. ✓
  metricsStrip: [
    {
      value: 'Full-Stack',
      label: 'Frontend to infrastructure',
      description: 'UI, API, data, cloud — one team',
    },
    {
      value: 'Production-Hardened',
      label: 'Tested under real load',
      description: 'CI/CD, monitoring, zero-downtime deploys',
    },
    {
      value: 'Your Code',
      label: 'Full ownership from day one',
      description: 'Your repo, your cloud, your IP',
    },
    {
      value: 'Enterprise-Ready',
      label: 'Built for scale and compliance',
      description: 'Microservices, SSO, audit trails',
    },
  ],

  // Audience test: VP of Engineering evaluates vendors on technical breadth across the stack.
  // Each card maps to a real capability area they assess when comparing dev partners.
  // This page is BROADER than Web App Development — it includes enterprise patterns,
  // microservices, real-time systems, and event-driven architecture.
  // All capability-framed (greenfield-safe). No outcome claims.
  features: [
    {
      icon: 'Globe',
      title: 'Web Application Development',
      description:
        'Full-stack web applications with React, Next.js, Angular, or Blazor. Server-rendered and single-page architectures with responsive design, typed component systems, and accessibility built into the component layer.',
    },
    {
      icon: 'Server',
      title: 'API & Backend Engineering',
      description:
        'RESTful and GraphQL APIs on .NET or Node.js. Type-safe contracts, versioned endpoints, and a service layer that separates business logic from transport — designed for internal teams and third-party consumers.',
    },
    {
      icon: 'Boxes',
      title: 'Microservices & Event-Driven Architecture',
      description:
        'Service decomposition, event sourcing, and message-driven communication via Azure Service Bus, Dapr, or RabbitMQ. Designed for teams that need independent deployability and horizontal scaling.',
    },
    {
      icon: 'Zap',
      title: 'Real-Time & High-Performance Systems',
      description:
        'WebSocket and SignalR-powered applications for live dashboards, collaboration tools, and notification systems. Optimized for low latency and high concurrency under production traffic patterns.',
    },
    {
      icon: 'Lock',
      title: 'Enterprise Security & Identity',
      description:
        'OAuth 2.0, SAML, OIDC single sign-on, multi-factor authentication, and role-based access control. Audit logging, data encryption, and compliance controls integrated as architectural layers — not afterthoughts.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud-Native Infrastructure',
      description:
        'Infrastructure as Code on Azure or AWS. Container orchestration, serverless functions, CI/CD pipelines, and production observability wired in from the first sprint — not bolted on before launch.',
    },
  ],

  // Audience test: VP of Engineering cares about outcomes — reliability, maintainability,
  // time-to-value, and total cost of ownership. Frame benefits as what the buyer gets,
  // not what we build. All capability-framed (greenfield-safe).
  benefits: [
    {
      icon: 'Eye',
      title: 'Visibility at Every Phase',
      description:
        'Weekly demos on a live URL showing real functionality. Sprint planning with your input. Scope changes happen in writing with visible trade-offs. You always know what was built, what is next, and what it costs.',
    },
    {
      icon: 'Layers',
      title: 'Architecture That Survives Growth',
      description:
        'Separation of concerns, connection pooling, caching, and autoscaling are structural decisions made during design. When your user base grows or requirements shift, the architecture bends instead of breaking.',
    },
    {
      icon: 'FileCode2',
      title: 'A Codebase Your Team Can Own',
      description:
        'Typed code, consistent patterns, automated tests, and architecture decision records. When your engineers open the repo, the codebase explains itself. Handoff is a structured process, not a credential dump.',
    },
    {
      icon: 'Shield',
      title: 'Production-Grade From Sprint One',
      description:
        'CI/CD, error tracking, performance monitoring, and structured logging are active before the first feature ships. Production readiness is the starting condition, not a final sprint before launch.',
    },
    {
      icon: 'RefreshCw',
      title: 'No Vendor Lock-In, Ever',
      description:
        'Your code lives in your repository, runs on your cloud account, and deploys through your pipeline. Full IP ownership from the first commit. Continue with us, bring it in-house, or hire another team — you leave with everything.',
    },
  ],

  capabilities: [
    'Full-stack web application development (.NET, React, Next.js, Angular, Vue.js, Blazor)',
    'RESTful API and GraphQL design with versioning and documentation',
    'Microservices architecture with event-driven communication (Dapr, Azure Service Bus)',
    'Real-time applications (SignalR, WebSockets)',
    'Progressive Web Apps (PWA) with offline support',
    'Enterprise SSO (SAML, OIDC) and role-based access control',
    'Database design, migrations, and performance optimization (SQL Server, PostgreSQL, Cosmos DB)',
    'Container orchestration and serverless architecture (Docker, Kubernetes, Azure Functions)',
    'CI/CD pipelines with automated testing gates',
    'Production observability (error tracking, metrics, logging, alerting)',
  ],

  technologies: [
    'C# / .NET / ASP.NET Core',
    'React / Next.js',
    'Angular',
    'Blazor',
    'TypeScript',
    'Node.js',
    'PostgreSQL / SQL Server / Azure SQL',
    'Cosmos DB / MongoDB',
    'Azure / AWS',
    'Docker / Kubernetes',
    'Terraform / Bicep',
    'GitHub Actions / Azure DevOps',
  ],

  engagementModels: [
    {
      name: 'Focused Build',
      duration: '8–12 weeks',
      priceFrom: '$75,000',
      whatsIncluded: [
        'Architecture design and environment setup',
        'Core application flow (one primary user journey)',
        'Authentication and user management',
        'CI/CD pipeline and production deployment',
        'Weekly demos and sprint planning',
      ],
      suitableFor: 'Teams building a focused application with a single core workflow or validating a concept',
      primaryCta: { label: 'Book Focused Build Call', href: '/contact?custom=focused' },
    },
    {
      name: 'Full Application',
      duration: '14–20 weeks',
      priceFrom: '$150,000',
      whatsIncluded: [
        'Everything in Focused Build',
        'Multiple user flows and role-based access',
        'Third-party integrations (CRM, ERP, payment, analytics)',
        'Automated test suite (unit, integration, E2E)',
        'Performance optimization and caching strategy',
        'Full documentation and architecture decision records',
      ],
      suitableFor: 'Organizations building a complete application with integrations, multiple user roles, and compliance needs',
      primaryCta: { label: 'Book Full Application Call', href: '/contact?custom=full' },
      featured: true,
    },
    {
      name: 'Enterprise Platform',
      duration: '24+ weeks',
      priceFrom: '$300,000',
      whatsIncluded: [
        'Everything in Full Application',
        'Microservices or event-driven architecture',
        'Complex integrations (legacy systems, data pipelines, message brokers)',
        'Advanced security, audit logging, and compliance controls',
        'Load testing and infrastructure hardening',
        'In-house team onboarding and structured knowledge transfer',
      ],
      suitableFor: 'Enterprises building mission-critical systems with scale, compliance, or complex integration requirements',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?custom=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'MVP Development',
      description:
        'Have a product idea with a fixed deadline? Our 12-week MVP sprint gets production software in front of real users — the fastest path from requirements to paying customers.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Application Modernization',
      description:
        'Have a legacy system holding you back? We assess, plan, and execute the transformation — monolith to microservices, on-prem to cloud, technical debt to clean architecture.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'E-Commerce Websites',
      description:
        'See custom development applied to commerce — conversion-optimized platforms with tokenized checkout, inventory management, and AI-driven personalization.',
      href: '/solutions/e-commerce-websites',
      icon: 'ShoppingCart',
      pageType: 'solution',
    },
  ],

  // FAQs driven by the top 3 buyer questions and key trust issue.
  // Each answer leads with a direct response in the first sentence (AEO optimization).
  faqs: [
    {
      question: 'What types of software do you build?',
      answer:
        'We build full-stack web applications, enterprise systems, APIs, microservices, real-time applications, and progressive web apps. Our core stack is .NET and React/Next.js, but we also work with Angular, Blazor, Vue.js, and Node.js. If you have an existing stack, we work within it. If you are starting fresh, we recommend a stack during architecture design and document the rationale so the choice is traceable.',
    },
    {
      question: 'How do you prevent projects from going over timeline and budget?',
      answer:
        'Fixed-scope engagements start with a detailed architecture phase where we define the backlog, identify risks, and set a realistic timeline before development begins. Weekly demos give you visibility into real progress — not status reports. Scope changes happen in daylight with visible trade-offs: if something new comes in, something else comes out or the timeline extends with your approval. No silent expansion, no surprise invoices.',
    },
    {
      question: 'Can my team maintain and extend what you build?',
      answer:
        'Yes — maintainability is a design constraint, not an afterthought. We use typed code, consistent patterns, automated tests, and architecture decision records that document why things were built the way they were. When you hire or onboard engineers, we run paired sessions where your team works alongside ours for two to four weeks. The handoff includes architecture docs, runbooks, deployment guides, and a working CI/CD pipeline your team already understands.',
    },
    {
      question: 'How do you handle enterprise requirements like SSO and compliance?',
      answer:
        'SSO is implemented via SAML 2.0 and OIDC so your team can use their existing identity provider. Role-based access control is built as an architectural layer with configurable permissions. Audit logging captures every significant action with timestamp, actor, and outcome. Compliance requirements — HIPAA, SOC 2, PCI — are treated as architectural constraints identified during the design phase, not as a checklist applied before launch.',
    },
    {
      question: 'What does working with your team look like day-to-day?',
      answer:
        'You get a dedicated engineering team with a technical lead who owns architecture decisions across the codebase. Sprints are weekly with a planning session at the start and a demo at the end. Communication happens in your tools — Slack, Teams, or email. You have access to the repository, CI/CD pipeline, and project board at all times. There are no black-box phases where you wait weeks to see what was built.',
    },
    {
      question: 'Who owns the code and intellectual property?',
      answer:
        'You do. From the first commit. Your code lives in your repository, runs on your cloud account, and deploys through your CI/CD pipeline. Our contract assigns all intellectual property to you. There is no proprietary framework, no hosted platform dependency, and no exit fee. If you want to bring development in-house or hire another team at any point, you leave with everything.',
    },
  ],

  cta: {
    title: 'Ready to build software that works at scale?',
    description:
      'Book a 30-minute strategy call. We will walk through your requirements, discuss architecture and stack options, and outline a realistic scope and timeline — no pressure, no commitment.',
    primaryCta: { label: 'Book strategy call', href: '/contact' },
    secondaryCta: { label: 'See our delivery process', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable custom software engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "8–12 weeks" for Focused Build. Confirm achievability for single-flow applications.',
    'engagementModels[1].duration — "14–20 weeks" for Full Application. Confirm achievability.',
    'technologies — confirm the full stack list matches what we deliver (e.g., Blazor, Angular, MongoDB availability).',
    'capabilities — none individually verified against shipped work yet.',
    'faq[2] — "two to four weeks" paired onboarding claim. Confirm realistic timeline.',
    'relatedPages[1] — Application Modernization page does not exist yet. Link will 404 until that page is created.',
  ],
};

export default customSoftwareDevelopment;
