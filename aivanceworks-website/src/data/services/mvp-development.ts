import type { ServicePageData } from '@/types/pages';

const mvpDevelopment: ServicePageData = {
  slug: 'mvp-development',
  title: 'MVP Development',
  shortDescription:
    '12 weeks from kickoff to a production V1 with real paying customers. Weekly demos, real users by week 5, zero black-box phases.',

  metaTitle: 'MVP Development | 12 Weeks to Production V1 | AIvanceWorks',
  metaDescription:
    'MVP development sprints that ship a production-ready V1 in 12 weeks. Weekly demos, real users by week 5, paying customers by launch. Dual-track roadmap with founder visibility at every phase.',
  keywords: [
    'mvp development',
    'startup mvp development',
    '12 week mvp',
    'mvp engineering team',
    'fast mvp build',
    'production mvp development',
  ],
  canonicalPath: '/services/mvp-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'MVP Development', href: '/services/mvp-development' },
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
  signatureComponent: 'MvpDualTrackRoadmap',
  heroIllustrationComponent: 'MvpHeroIllustration',

  hero: {
    badge: 'Technical Service',
    headline: 'From kickoff to paying customers in 12 weeks.',
    subhead:
      'A production-ready V1 in your hands in 12 weeks. Real users touching it by week 5. Weekly demos so you see working software every sprint — no black-box build phases.',
    primaryCta: { label: 'Book MVP Intake Call', href: '/contact' },
    secondaryCta: { label: 'See the roadmap', href: '#signature' },
  },

  metricsStrip: [
    { value: '12 Weeks', label: 'Kickoff to V1 launch', description: 'Fixed timeline' },
    { value: '12 Demos', label: 'Working software weekly', description: 'No black-box phases' },
    { value: 'Week 5', label: 'Real users in the product', description: 'Not an internal beta' },
    { value: 'V1 in Prod', label: 'Paying customers by launch', description: 'Revenue-ready' },
  ],

  features: [
    {
      icon: 'Lock',
      title: 'Auth & user model',
      description:
        'Email, OAuth, and magic-link flows on top of a strongly-typed user model ready for role-based access.',
    },
    {
      icon: 'Server',
      title: 'Backend & data layer',
      description:
        'Type-safe API, schema migrations, and a data layer that separates domain logic from transport.',
    },
    {
      icon: 'Layout',
      title: 'Frontend & design system',
      description:
        'A production-grade component library tuned to your brand, accessible by default, mobile-first.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile-friendly PWA',
      description:
        "Responsive-first builds with Progressive Web App capability, so your first mobile experience doesn't need a separate native app.",
    },
    {
      icon: 'CreditCard',
      title: 'Billing & subscriptions',
      description:
        'Stripe integration with subscription lifecycle, proration, invoicing, and receipts — production-ready from day one.',
    },
    {
      icon: 'Activity',
      title: 'Observability & deployment',
      description:
        'CI/CD, error tracking, metrics, and production logging wired in before Week 1 ends. No guessing in prod.',
    },
  ],

  benefits: [
    {
      icon: 'Eye',
      title: 'Founder visibility every week',
      description:
        'A demo every Friday showing working software you can click through, not slides. You always know what was built and what was not.',
      stat: '12',
      statLabel: 'working-software demos',
    },
    {
      icon: 'Users',
      title: 'Real users, not internal betas',
      description:
        'By Week 5 you have actual external users in the product, providing the feedback loop that turns guesses into decisions.',
      stat: 'Week 5',
      statLabel: 'first external users',
    },
    {
      icon: 'Rocket',
      title: 'A V1 you can charge for',
      description:
        'Week 12 launches a production-hardened V1 with billing, observability, and a runbook. Not a prototype — a product.',
      stat: 'Production',
      statLabel: 'from day one',
    },
    {
      icon: 'Compass',
      title: 'Ruthless scope management',
      description:
        'Weekly scope reviews with your input. We cut before we cram. You always know what is in and what is out before it becomes a problem.',
    },
  ],

  capabilities: [
    'Modern auth (email, OAuth, magic link)',
    'Type-safe API with versioning',
    'Automated database migrations',
    'Stripe billing + subscription lifecycle',
    'Production observability (errors, metrics, logs)',
    'CI/CD from Day 1',
    'Accessibility (WCAG 2.1 AA) baked in',
    'Mobile-responsive PWA',
    'Automated visual regression',
    'SEO and analytics instrumentation',
  ],

  technologies: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Prisma / Drizzle',
    'PostgreSQL',
    'Stripe',
    'Vercel / Azure',
    'Sentry',
    'PostHog',
    'GitHub Actions',
    'Playwright',
  ],

  engagementModels: [
    {
      name: '8-Week Rapid MVP',
      duration: '8 weeks',
      priceFrom: '$65,000',
      whatsIncluded: [
        '6 weekly demos',
        'Core auth, data, and UI',
        'One primary user flow',
        'Production deploy',
      ],
      suitableFor: 'Tight budget founders validating a single flow',
      primaryCta: { label: 'Book 8-Week MVP', href: '/contact?mvp=8w' },
    },
    {
      name: '12-Week Full MVP',
      duration: '12 weeks',
      priceFrom: '$110,000',
      whatsIncluded: [
        '12 weekly demos',
        'Full auth, data, UI, and billing',
        'Real users by Week 5',
        'Production hardening + runbook',
        'V1 launch with paying customers',
      ],
      suitableFor: 'Standard MVP engagements with paying-customer target',
      primaryCta: { label: 'Book 12-Week MVP', href: '/contact?mvp=12w' },
      featured: true,
    },
    {
      name: '16-Week Enhanced MVP',
      duration: '16 weeks',
      priceFrom: '$160,000',
      whatsIncluded: [
        '16 weekly demos',
        'Multiple user flows or multi-tenant',
        'Advanced integrations (CRM, analytics, etc.)',
        'Dedicated design work',
        'Extended post-launch support window',
      ],
      suitableFor: 'Complex MVPs with integration or multi-persona needs',
      primaryCta: { label: 'Book 16-Week MVP', href: '/contact?mvp=16w' },
    },
  ],

  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Not sure what to build first? A 2-week discovery sprint validates your idea and produces the backlog we build from.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Software Dev for Startups',
      description:
        'Need an ongoing dev partner after launch? See our flexible startup engagement models — scale the team up or down as your stage demands.',
      href: '/services/startup-development',
      icon: 'Lightbulb',
      pageType: 'service',
    },
    {
      title: 'SaaS Software Development',
      description:
        'Ready to scale your MVP into a multi-tenant SaaS platform? See how we add subscription billing, tenant isolation, and enterprise features to a proven product.',
      href: '/services/saas-development',
      icon: 'Layers',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How do I know progress is real and not a demo trick?',
      answer:
        'Every Friday you get a live URL pointing at the actual production-equivalent environment. You click through real functionality. No slides, no screen recordings of happy paths. If we cannot demo it, we say so.',
    },
    {
      question: 'What happens if scope has to change mid-sprint?',
      answer:
        'We cut before we cram. Every Monday we review the backlog and explicitly decide what is in for the week and what is deferred. Scope changes during a sprint are rare and always accompanied by a visible trade-off so you are the one making the call.',
    },
    {
      question: 'Do you use AI tools to accelerate the build?',
      answer:
        'Yes — internally, for code generation, review, and testing — wherever it makes our engineers faster without hurting code quality. The output is always reviewed by a senior engineer before it touches your production.',
    },
    {
      question: "What if I don't have designs yet?",
      answer:
        'We can bring design capacity or work off your existing design system. For founders without designs, the 12-Week Full MVP includes basic design work; for heavier design needs, the 16-Week Enhanced tier adds dedicated design.',
    },
    {
      question: 'What happens after Week 12?',
      answer:
        'You own the codebase, the infrastructure, the runbook, and all the docs. You can take it in-house, hire other engineers, or continue with us on a retainer. No lock-in. We prefer clients who come back because they want to, not because they are stuck.',
    },
  ],

  cta: {
    title: "Ready to put working software in real users' hands in 12 weeks?",
    description:
      'Book a 30-minute intake call. We will walk through your idea, map the highest-risk parts, and give you a no-pressure proposal within 48 hours.',
    primaryCta: { label: 'Book intake call', href: '/contact' },
    secondaryCta: { label: 'See our process', href: '#signature' },
  },

  _unverified: [
    'metricsStrip — all four claims are part of the promise we are making. Verify these are achievable before publishing.',
    'engagementModels[*].priceFrom — placeholder prices. Confirm with user.',
    'capabilities — none individually verified yet.',
    'technologies — confirm the stack actually matches what we deliver on every MVP.',
    'faq[2] — "AI tools" claim — verify our actual policy on AI usage in client code.',
  ],
};

export default mvpDevelopment;
