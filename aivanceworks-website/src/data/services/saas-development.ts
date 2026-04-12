import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: SaaS founder, CTO, or VP Engineering at a company building a subscription-based software product
// Dominant question: "Can this team build a production-grade multi-tenant SaaS platform?"
// Signature: SaasArchitectureBlueprint — layered architecture diagram showing the key layers of a SaaS platform
//
// Composition follows MVP Development reference (same archetype, same buyer mindset).
// Deviations from Archetype B recipe:
//   - ProcessTimeline dropped — TechStackBlock + EngagementModels demonstrate depth; signature
//     already communicates architectural process. 10 sections matches MVP Development density.
//   - RelatedPages added after EngagementModels (standard for all pages per v1.4).

const saasDevelopment: ServicePageData = {
  slug: 'saas-development',
  title: 'SaaS Software Development',
  shortDescription:
    'End-to-end SaaS product development — multi-tenant architecture, subscription billing, user management, and scalable cloud infrastructure. From first commit to paying customers.',

  metaTitle: 'SaaS Software Development | Multi-Tenant Platform Engineering',
  metaDescription:
    'Custom SaaS development with multi-tenant architecture, Stripe billing, role-based access, and Azure/AWS infrastructure. We build subscription platforms designed to scale from day one.',
  keywords: [
    'saas software development',
    'saas development company',
    'custom saas development',
    'multi-tenant saas platform',
    'saas product development',
    'subscription software development',
    'saas application development',
    'build a saas product',
    'saas platform engineering',
    'white label saas development',
    'saas mvp development',
    'enterprise saas development',
  ],
  canonicalPath: '/services/saas-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'SaaS Software Development', href: '/services/saas-development' },
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
  signatureComponent: 'SaasArchitectureBlueprint',
  heroIllustrationComponent: 'SaasHeroIllustration',

  hero: {
    badge: 'SaaS Engineering',
    headline: 'Your SaaS platform, built for real tenants from day one.',
    subhead:
      'Multi-tenant architecture, subscription billing, and scalable infrastructure — engineered as a platform, not patched onto a web app after launch.',
    primaryCta: { label: 'Book a SaaS Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the architecture', href: '#signature' },
  },

  // Audience test: SaaS founder/CTO evaluating a dev partner needs to see platform-grade capability
  // signals immediately. Every metric is capability-framed (greenfield-safe, no fabricated outcomes).
  metricsStrip: [
    {
      value: 'Multi-Tenant',
      label: 'Isolation by default',
      description: 'Per-tenant data, config, and feature flags',
    },
    {
      value: 'Stripe-Ready',
      label: 'Billing from sprint one',
      description: 'Subscriptions, metering, invoicing',
    },
    {
      value: 'API-First',
      label: 'Built for integrations',
      description: 'Versioned REST + webhook infrastructure',
    },
    {
      value: 'Cloud-Native',
      label: 'Azure or AWS',
      description: 'IaC, autoscaling, zero-downtime deploys',
    },
  ],

  // Audience test: CTO/founder thinks in product capabilities, not engineering abstractions.
  // Each card maps to a SaaS platform need they can evaluate against their requirements doc.
  features: [
    {
      icon: 'Building2',
      title: 'Multi-Tenant Architecture',
      description:
        'Tenant isolation at the data, configuration, and feature level. Choose between database-per-tenant, schema-per-tenant, or row-level isolation based on your scale and compliance needs.',
    },
    {
      icon: 'CreditCard',
      title: 'Subscription Billing & Monetization',
      description:
        'Stripe integration with subscription lifecycle management — plan tiers, usage-based metering, proration, dunning, invoicing, and self-service plan changes. Revenue-ready from the first deploy.',
    },
    {
      icon: 'Users',
      title: 'User Management & RBAC',
      description:
        'Multi-level access control: platform admins, tenant admins, and end users with configurable roles and permissions. SSO via SAML/OIDC for enterprise tenants. Invite flows and team management built in.',
    },
    {
      icon: 'Plug',
      title: 'API-First Platform Design',
      description:
        'Versioned REST APIs with OpenAPI documentation, webhook infrastructure for tenant integrations, and rate limiting per plan tier. Your platform is an integration target from day one.',
    },
    {
      icon: 'BarChart3',
      title: 'Analytics & Tenant Insights',
      description:
        'Platform-level dashboards for MRR, churn, usage, and tenant health. Per-tenant usage analytics your customers can access. Product telemetry to inform your roadmap decisions.',
    },
    {
      icon: 'Server',
      title: 'Scalable Cloud Infrastructure',
      description:
        'Infrastructure as Code on Azure or AWS with autoscaling, zero-downtime deployments, and environment parity. Designed so your infrastructure costs scale linearly with your tenant count, not exponentially.',
    },
  ],

  // Audience test: SaaS founder cares about business outcomes — faster revenue, lower risk,
  // competitive advantage. Frame benefits as what the buyer gets, not what we build.
  benefits: [
    {
      icon: 'Rocket',
      title: 'Ship Your First Paying Tenant Faster',
      description:
        'Billing, auth, and tenant management are built into the platform from the first sprint — not bolted on after a prototype proves out. You are collecting revenue the moment you launch, not three months after.',
    },
    {
      icon: 'Layers',
      title: 'Architecture That Scales With Your Business',
      description:
        'Multi-tenant isolation, connection pooling, and autoscaling are structural decisions made on day one. When you go from 10 tenants to 10,000, the architecture does not need to be rewritten.',
    },
    {
      icon: 'DollarSign',
      title: 'Revenue Infrastructure Built In',
      description:
        'Plan tiers, usage metering, proration, dunning, and self-service billing are platform features, not afterthoughts. Your monetization model is a first-class citizen of the codebase.',
    },
    {
      icon: 'Shield',
      title: 'Enterprise-Ready From the Start',
      description:
        'SSO, RBAC, audit logging, and tenant-level data isolation make your platform sellable to enterprise buyers from day one. You do not need a separate "enterprise edition" later.',
    },
    {
      icon: 'Eye',
      title: 'Full Visibility Into Platform Health',
      description:
        'MRR dashboards, tenant health scores, usage analytics, and infrastructure monitoring give you a clear picture of your business and your platform at every stage of growth.',
    },
  ],

  capabilities: [
    'Multi-tenant data isolation (DB-per-tenant, schema, or row-level)',
    'Subscription billing with Stripe (plans, metering, dunning, invoicing)',
    'User management with SSO (SAML, OIDC) and RBAC',
    'Versioned REST API with OpenAPI documentation',
    'Webhook infrastructure for tenant integrations',
    'Feature flags and per-tenant configuration',
    'Rate limiting and API quota management per plan tier',
    'Platform analytics (MRR, churn, usage, tenant health)',
    'Zero-downtime deployments with blue-green or rolling strategy',
    'Infrastructure as Code (Terraform / Bicep)',
  ],

  technologies: [
    'Next.js / React',
    'TypeScript',
    '.NET / ASP.NET Core',
    'PostgreSQL / Azure SQL',
    'Stripe',
    'Azure / AWS',
    'Redis',
    'Terraform',
    'Docker / Kubernetes',
    'GitHub Actions',
    'Sentry / PostHog',
    'LaunchDarkly / Flagsmith',
  ],

  engagementModels: [
    {
      name: 'SaaS Foundation',
      duration: '10 weeks',
      priceFrom: '$85,000',
      whatsIncluded: [
        'Multi-tenant architecture + auth',
        'Stripe billing integration',
        'Core product flow (one user journey)',
        'Admin dashboard',
        'Production deployment on Azure/AWS',
      ],
      suitableFor: 'Founders validating a SaaS idea with paying customers',
      primaryCta: { label: 'Book Foundation Call', href: '/contact?saas=foundation' },
    },
    {
      name: 'Full SaaS Platform',
      duration: '16 weeks',
      priceFrom: '$160,000',
      whatsIncluded: [
        'Everything in Foundation',
        'Multiple user roles + SSO',
        'API + webhook infrastructure',
        'Usage metering + advanced billing',
        'Tenant-facing analytics',
        'Onboarding flows + invite system',
      ],
      suitableFor: 'Teams building a multi-tenant platform with integration needs',
      primaryCta: { label: 'Book Platform Call', href: '/contact?saas=platform' },
      featured: true,
    },
    {
      name: 'Enterprise SaaS',
      duration: '24+ weeks',
      priceFrom: '$280,000',
      whatsIncluded: [
        'Everything in Full Platform',
        'White-label / custom branding per tenant',
        'Advanced RBAC + audit logging',
        'Data residency + compliance controls',
        'Marketplace or plugin architecture',
        'Dedicated support tier engineering',
      ],
      suitableFor: 'Companies building enterprise-grade SaaS with compliance or marketplace needs',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?saas=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'MVP Development',
      description:
        'Need to prove the idea first? Our 12-week MVP sprint gets a production V1 with paying customers — then we scale it into a full SaaS platform.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Product Discovery',
      description:
        'Not sure which features to build first? A discovery sprint maps your market, validates assumptions, and produces the prioritised backlog we build from.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Application Modernization',
      description:
        'Already have a legacy system you want to transform into a SaaS platform? We decompose monoliths incrementally — extracting multi-tenant architecture without a full rewrite.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How do you handle multi-tenancy — is our data truly isolated?',
      answer:
        'We offer three isolation models depending on your compliance and scale requirements: database-per-tenant (strongest isolation, higher cost), schema-per-tenant (good isolation, moderate cost), and row-level isolation with tenant-scoped queries (most cost-efficient, suitable for most SaaS products). Every model enforces tenant boundaries at the application, query, and infrastructure layers. We choose the model during architecture design based on your regulatory needs, expected tenant count, and budget.',
    },
    {
      question: 'Can you integrate Stripe billing with usage-based pricing?',
      answer:
        'Yes. We build Stripe integrations that support flat-rate subscriptions, per-seat pricing, usage-based metering, and hybrid models. The billing system handles plan upgrades and downgrades with proration, failed payment retry (dunning), invoice generation, and self-service plan management for your customers. We wire billing events into your platform analytics so you can track MRR, churn, and expansion revenue from day one.',
    },
    {
      question: 'What if we already have a prototype and need to scale it?',
      answer:
        'We start with an architecture assessment of your existing codebase — data model, tenant isolation, billing integration, and infrastructure. From there we produce a migration plan that introduces multi-tenant architecture, proper billing, and scalable infrastructure incrementally, without a full rewrite. Most prototype-to-platform migrations fit the Full SaaS Platform tier.',
    },
    {
      question: 'How do you support enterprise features like SSO and audit logging?',
      answer:
        'SSO is implemented via SAML 2.0 and OIDC so enterprise tenants can use their identity provider (Okta, Azure AD, Google Workspace). Audit logging captures every significant action with timestamp, actor, tenant, resource, and outcome — queryable by tenant admins and exportable for compliance review. Both features are part of the Full SaaS Platform and Enterprise tiers.',
    },
    {
      question: 'Do you build white-label or multi-brand SaaS platforms?',
      answer:
        'Yes — the Enterprise tier includes per-tenant branding: custom domains, logos, color themes, and email templates. The white-label system is theme-driven so new tenant brands are configured, not coded. This is useful for SaaS platforms that resell to agencies, franchises, or channel partners who need their own branding.',
    },
    {
      question: 'What happens after the platform launches?',
      answer:
        'You own the codebase, infrastructure, and all documentation. You can bring development in-house, hire other engineers, or continue with us on a monthly retainer for feature development, scaling support, and infrastructure management. We provide a full handoff package including architecture docs, runbooks, and deployment guides. No lock-in.',
    },
  ],

  cta: {
    title: 'Ready to build a SaaS platform that scales?',
    description:
      'Book a 30-minute strategy call. We will review your product requirements, discuss multi-tenancy and billing architecture, and outline a realistic scope and timeline for your SaaS build.',
    primaryCta: { label: 'Book SaaS Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the architecture', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable SaaS builds. Confirm with user before publishing.',
    'engagementModels[0].duration — "10 weeks" estimate for SaaS Foundation. Confirm achievability.',
    'technologies — confirm the stack matches what we deliver on SaaS engagements (e.g., LaunchDarkly vs Flagsmith).',
    'capabilities — none individually verified against shipped work yet.',
    'faq[1] — Stripe usage-based metering claim — verify we have implemented this pattern.',
  ],
};

export default saasDevelopment;
