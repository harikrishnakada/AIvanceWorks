import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: Startup founder (CEO/CPO) at seed to Series A stage, semi-technical or non-technical
// Measured on: runway efficiency, time-to-market, hitting milestones for next fundraise
// Dominant question: "How fast can you build my product, and what will it cost?"
// Key trust issue: "The last dev shop took my money, disappeared, and delivered something I couldn't ship."
// Signature: StartupGrowthTimeline — 3-stage journey (Validate → Scale → Mature) showing
//   how the engagement grows with the startup. Process/Comparison hybrid pattern.
//
// Composition follows MVP Development and SaaS Development references (same archetype).
// Deviations from Archetype B recipe:
//   - ProcessTimeline dropped — EngagementModels already communicates how-we-work;
//     signature already visualizes the staged journey. 10 sections matches pilot density.
//   - RelatedPages added after EngagementModels (standard for all pages per v1.4).

const startupDevelopment: ServicePageData = {
  slug: 'startup-development',
  title: 'Software Dev for Startups',
  shortDescription:
    'Startup-focused software development — flexible teams that scale from MVP to Series B. Weekly demos, full code ownership, zero vendor lock-in.',

  metaTitle: 'Software Development for Startups | Flexible Dev Teams',
  metaDescription:
    'Startup software development with flexible team scaling, weekly demos, and full code ownership. From MVP build to Series B infrastructure — engineering that grows with your company.',
  keywords: [
    'software development for startups',
    'startup software development company',
    'startup dev team',
    'hire developers for startup',
    'outsource startup development',
    'startup engineering team',
    'startup CTO services',
    'early stage startup development',
    'startup technical partner',
    'flexible development team',
    'startup product development',
    'seed stage software development',
  ],
  canonicalPath: '/services/startup-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Software Dev for Startups', href: '/services/startup-development' },
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
  signatureComponent: 'StartupGrowthTimeline',
  heroIllustrationComponent: 'StartupHeroIllustration',

  hero: {
    badge: 'For Startups',
    headline: 'Your dev team — without the hiring risk.',
    subhead:
      'Ship product on your timeline, not a recruitment cycle. Flexible engineering teams that scale from MVP through Series B and beyond.',
    primaryCta: { label: 'Book a Startup Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See how we scale', href: '#signature' },
  },

  // Audience test: startup founder needs to see startup-specific signals immediately.
  // All metrics are capability-framed (greenfield-safe, no fabricated outcomes).
  // "Startup-Focused" → confirms this page is for them, not generic enterprise.
  // "Ship Weekly" → addresses transparency fear.
  // "Own Everything" → addresses lock-in fear.
  // "Scale On Demand" → addresses commitment/flexibility fear.
  metricsStrip: [
    {
      value: 'Startup-Focused',
      label: 'Built for early-stage pace',
      description: 'Flexible teams, not fixed contracts',
    },
    {
      value: 'Ship Weekly',
      label: 'Working software every sprint',
      description: 'No black-box build phases',
    },
    {
      value: 'Own Everything',
      label: 'Your code, your infrastructure',
      description: 'Zero vendor lock-in',
    },
    {
      value: 'Scale On Demand',
      label: 'Grow or shrink the team',
      description: 'As your runway dictates',
    },
  ],

  // Audience test: founder/CTO evaluates capabilities through the lens of "does this
  // team understand what startups actually need?" Each card maps to a startup-specific
  // concern, not generic software capabilities.
  features: [
    {
      icon: 'Rocket',
      title: 'MVP & Product Builds',
      description:
        'Full product builds from idea to production. We scope aggressively, ship iteratively, and get working software in front of real users as fast as your runway demands.',
    },
    {
      icon: 'Eye',
      title: 'Weekly Demo Cadence',
      description:
        'A live URL every Friday showing real functionality you can click through. No slides, no recordings. If it is not demo-able, we say so — you always know exactly where things stand.',
    },
    {
      icon: 'Users',
      title: 'Flexible Team Scaling',
      description:
        'Start with two engineers. Add three more after your raise. Scale back between milestones. Your team size matches your stage, not an annual contract.',
    },
    {
      icon: 'Layers',
      title: 'Full-Stack Architecture',
      description:
        'API design, frontend, mobile, infrastructure, and CI/CD — a complete engineering capability you can plug in without building five separate vendor relationships.',
    },
    {
      icon: 'FileCheck',
      title: 'Investor-Ready Engineering',
      description:
        'Clean architecture, typed code, test coverage, and documentation that holds up under technical due diligence. Your codebase becomes an asset, not a liability.',
    },
    {
      icon: 'ArrowRightLeft',
      title: 'Seamless Handoff',
      description:
        'Architecture docs, runbooks, deployment guides, and paired onboarding sessions. When you hire your own team, the transition is a handshake — not a hostage negotiation.',
    },
  ],

  // Audience test: startup founder cares about business outcomes — speed, ownership,
  // fundraising, cost efficiency. Frame benefits as what the founder gets, not what we build.
  benefits: [
    {
      icon: 'Zap',
      title: 'Ship on Your Timeline, Not Ours',
      description:
        'Sprint-based delivery with weekly deployable increments. Your roadmap drives the pace. Scope changes happen in daylight, with visible trade-offs — never in a backroom.',
    },
    {
      icon: 'Shield',
      title: 'Code You Own, From Day One',
      description:
        'Full IP ownership from the first commit. Your code lives in your repository, runs on your cloud account, and deploys through your CI/CD pipeline. Walk away any time with everything.',
    },
    {
      icon: 'TrendingUp',
      title: 'Engineering That Impresses Investors',
      description:
        'Typed code, automated testing, infrastructure as code, and architecture decision records. When a due diligence engineer opens your repo, they find a codebase that signals maturity.',
    },
    {
      icon: 'Scaling',
      title: 'Grow the Team Without the HR Overhead',
      description:
        'Add senior engineers in days, not months. No recruiter fees, no onboarding ramp, no equity dilution. Scale up for a push, scale down between milestones — the team matches your burn rate.',
    },
    {
      icon: 'RefreshCw',
      title: 'Architecture That Survives the Pivot',
      description:
        'Modular design, API-first architecture, and infrastructure automation built in from the start. When your market shifts — and it will — the codebase bends instead of breaking.',
    },
  ],

  capabilities: [
    'Full-stack web application development (MVP through scale)',
    'Mobile-responsive Progressive Web Apps (PWA)',
    'Cross-platform mobile development (React Native, Flutter)',
    'API-first architecture with versioning',
    'Authentication and user management (OAuth, SSO, magic link)',
    'Stripe integration for billing and subscriptions',
    'CI/CD and production observability from day one',
    'Infrastructure as Code on Azure or AWS',
    'Automated testing and quality engineering',
    'Technical documentation for investor due diligence',
  ],

  technologies: [
    'Next.js / React',
    'TypeScript',
    '.NET / ASP.NET Core',
    'PostgreSQL / Azure SQL',
    'Stripe',
    'Azure / AWS',
    'Vercel',
    'GitHub Actions',
    'Sentry',
    'PostHog',
    'Playwright',
    'Docker',
  ],

  engagementModels: [
    {
      name: 'Sprint Team',
      duration: '4+ weeks',
      priceFrom: '$18,000/mo',
      whatsIncluded: [
        '2–3 senior engineers',
        'Weekly demos + async standups',
        'Focused product sprint',
        'Full code ownership from day one',
        'CI/CD and staging environment',
      ],
      suitableFor: 'Pre-seed and seed founders building a focused MVP or first feature set',
      primaryCta: { label: 'Book Sprint Team Call', href: '/contact?startup=sprint' },
    },
    {
      name: 'Dedicated Team',
      duration: 'Ongoing',
      priceFrom: '$35,000/mo',
      whatsIncluded: [
        '3–5 engineers (frontend, backend, infra)',
        'Technical lead + architecture oversight',
        'Sprint planning + retrospectives',
        'Production monitoring + on-call',
        'Investor-ready documentation',
        'Scale up or down monthly',
      ],
      suitableFor: 'Series A startups with an active product and growing user base',
      primaryCta: { label: 'Book Dedicated Team Call', href: '/contact?startup=dedicated' },
      featured: true,
    },
    {
      name: 'Scale-Up Package',
      duration: 'Ongoing',
      priceFrom: '$65,000/mo',
      whatsIncluded: [
        '5+ engineers across specialties',
        'Dedicated tech lead + PM',
        'Infrastructure hardening + autoscaling',
        'Performance and security audits',
        'In-house team onboarding + knowledge transfer',
        'Architecture decision records',
      ],
      suitableFor: 'Series B+ startups scaling product and preparing for in-house engineering',
      primaryCta: { label: 'Book Scale-Up Call', href: '/contact?startup=scaleup' },
    },
  ],

  relatedPages: [
    {
      title: 'MVP Development',
      description:
        'Have a specific product idea with a fixed timeline? Our 12-week MVP sprint gets you from concept to paying customers with weekly demos.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Product Discovery',
      description:
        'Not sure what to build first? A 2-week discovery sprint validates your assumptions and produces the prioritized backlog we build from.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'SaaS Software Development',
      description:
        'Building a subscription product? See how we engineer multi-tenant SaaS platforms with billing, auth, and scale-ready infrastructure from the first sprint.',
      href: '/services/saas-development',
      icon: 'Layers',
      pageType: 'service',
    },
  ],

  // FAQs driven by the top 3 buyer questions and key trust issue.
  // Each answer leads with a direct response in the first sentence (AEO optimization).
  faqs: [
    {
      question: 'How is this different from hiring freelancers or a generic agency?',
      answer:
        'Freelancers give you individual contributors without architecture oversight or team continuity. Generic agencies sell fixed-scope projects that assume you know exactly what you need upfront. We provide a cross-functional engineering team that works in your stack, ships weekly, and scales with your stage — with a technical lead who owns architecture decisions across the entire codebase. When your requirements change mid-sprint, we adapt. When you raise a round and need to double the team, we can do it in weeks, not months.',
    },
    {
      question: 'What if I need to scale up quickly after raising a round?',
      answer:
        'We can add senior engineers to your team within two to three weeks. Because our engineers work from a shared codebase with consistent patterns, conventions, and CI/CD, new team members onboard against a real product — not a blank slate. Most post-raise scale-ups move from the Sprint Team to Dedicated Team tier and add engineers incrementally as hiring targets take shape.',
    },
    {
      question: 'Who owns the code and IP?',
      answer:
        'You do. From the first commit. Your code lives in your GitHub or GitLab repository, runs on your cloud account, and deploys through your CI/CD pipeline. Our contract assigns all intellectual property to you. There is no proprietary framework, no hosted platform dependency, and no exit fee. If you want to walk away tomorrow with everything, you can.',
    },
    {
      question: 'How do I stay in control of the product if I am not technical?',
      answer:
        'Weekly demos give you a live URL to click through real features every Friday. Sprint planning sessions let you set priorities. Scope changes happen in writing with visible trade-offs. You do not need to read code — you need to see working software and make decisions about what gets built next. That is exactly what our process is designed around.',
    },
    {
      question: 'What happens when I am ready to hire my own engineering team?',
      answer:
        'We plan for it from day one. Architecture decision records, runbooks, deployment guides, and code documentation are maintained throughout the engagement. When you hire, we run paired onboarding sessions where your new engineers work alongside ours for two to four weeks. The handoff is structured — not a dump of credentials and a "good luck" email.',
    },
    {
      question: 'Can you help with investor-facing technical materials?',
      answer:
        'Yes. We maintain architecture documentation, technology stack rationale, and infrastructure diagrams that founders use in fundraising decks and due diligence packages. We can also prepare technical one-pagers for investor conversations and be available for technical due diligence calls if your investors want to speak with the engineering team directly.',
    },
  ],

  cta: {
    title: 'Ready to build without the hiring risk?',
    description:
      'Book a 30-minute strategy call. We will walk through your product, map the engineering needs to your stage, and outline a realistic scope and team structure — no pressure, no commitment.',
    primaryCta: { label: 'Book startup strategy call', href: '/contact' },
    secondaryCta: { label: 'See how we scale', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder monthly rates based on comparable startup engagements. Confirm with user before publishing.',
    'engagementModels[1].duration — "Ongoing" framing. Confirm minimum commitment period.',
    'technologies — confirm the stack matches what we deliver on startup engagements (e.g., Vercel vs Azure default).',
    'capabilities — none individually verified against shipped work yet.',
    'faq[1] — "two to three weeks" scale-up claim. Confirm realistic onboarding timeline for new engineers.',
    'faq[5] — investor due diligence availability claim. Confirm this is a service we actually offer.',
  ],
};

export default startupDevelopment;
