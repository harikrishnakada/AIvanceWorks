import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Engineering / CTO at a mid-market enterprise (200–2,000 engineers)
// Measured on: time-to-market for new features, system reliability, developer productivity, scalability
// Dominant question: "How do we modernize without shutting down production?"
// Key trust issue: burned by "big bang" rewrites that went 2x over budget, 3x over timeline,
//   or got cancelled halfway — leaving two half-working systems. Skeptical of anyone who says
//   "let's just rewrite it." Wants incremental, risk-managed transformation.
// Signature: StranglerFigDiagram — interactive phased monolith decomposition showing modules
//   being extracted one by one while production stays live.
//
// Composition follows Archetype B recipe with adjustments:
//   - TechStackBlock dropped — VP of Eng already understands the tech; ProcessTimeline is more
//     valuable for this risk-averse buyer who needs to see HOW the work is sequenced safely.
//   - ProcessTimeline cherry-picked (risk-averse buyer needs process confidence before benefits).
//   - 10 sections total — matches MVP Development and SaaS Development density.

const applicationModernization: ServicePageData = {
  slug: 'application-modernization',
  title: 'Application Modernization',
  shortDescription:
    'Incremental legacy system transformation that keeps production live. Module-by-module decomposition, strangler fig migration, and cloud-native re-architecture — without the big-bang rewrite risk.',

  metaTitle: 'Application Modernization | Legacy System Transformation',
  metaDescription:
    'Application modernization services that transform legacy monoliths into modern architectures incrementally. Strangler fig pattern, API-first migration, and cloud-native re-architecture — production stays live throughout.',
  keywords: [
    'application modernization',
    'legacy system modernization',
    'monolith to microservices',
    'legacy application migration',
    'strangler fig pattern',
    'application modernization services',
    'legacy system transformation',
    'cloud native modernization',
    'technical debt reduction',
    'legacy code modernization',
    'software modernization strategy',
    'incremental modernization',
  ],
  canonicalPath: '/services/application-modernization',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Application Modernization', href: '/services/application-modernization' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'processTimeline',
    'benefitsGrid',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'StranglerFigDiagram',
  heroIllustrationComponent: 'AppModHeroIllustration',

  hero: {
    badge: 'Technical Service',
    headline: 'Modernize your legacy system without stopping production.',
    subhead:
      'Module-by-module decomposition using the strangler fig pattern. Your system stays live, your team ships features, and the monolith shrinks sprint by sprint.',
    primaryCta: { label: 'Book Modernization Call', href: '/contact' },
    secondaryCta: { label: 'See the approach', href: '#signature' },
  },

  // Audience test: VP of Engineering evaluating a modernization partner needs immediate
  // reassurance that this is NOT a big-bang rewrite. Every metric signals the incremental,
  // risk-managed approach. All greenfield-safe (these describe our approach, not past outcomes).
  metricsStrip: [
    {
      value: 'Zero Downtime',
      label: 'Production stays live',
      description: 'No big-bang cutovers',
    },
    {
      value: 'Incremental',
      label: 'Strangler fig pattern',
      description: 'Module-by-module extraction',
    },
    {
      value: 'Deployable',
      label: 'At every phase',
      description: 'Working system throughout',
    },
    {
      value: 'Reversible',
      label: 'Built-in rollback',
      description: 'Each step can be undone',
    },
  ],

  // Audience test: VP of Eng evaluates modernization partners on their technical breadth —
  // can this team handle the FULL spectrum of modernization (not just "rewrite in React")?
  // Each card maps to a specific modernization challenge the buyer faces today.
  features: [
    {
      icon: 'Search',
      title: 'Legacy Assessment & Roadmapping',
      description:
        'Systematic evaluation of your codebase — dependency mapping, complexity scoring, and a prioritized modernization roadmap that sequences extraction by risk and business value.',
    },
    {
      icon: 'GitBranch',
      title: 'Monolith-to-Microservices Decomposition',
      description:
        'Domain-driven decomposition that identifies service boundaries within your monolith. We extract modules into independently deployable services with well-defined contracts.',
    },
    {
      icon: 'Layers',
      title: 'Strangler Fig Migration',
      description:
        'Incremental replacement where new functionality routes through modern services while legacy handles the rest. The monolith shrinks as services grow — no cutover required.',
    },
    {
      icon: 'Plug',
      title: 'API-First Modernization',
      description:
        'Wrap legacy systems with modern REST or GraphQL APIs. External consumers get a clean interface immediately while internal modernization proceeds at its own pace.',
    },
    {
      icon: 'Database',
      title: 'Database Migration & Modernization',
      description:
        'Schema decomposition, data migration strategies, and the transition from shared databases to service-owned data stores — without data loss or extended maintenance windows.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud-Native Transformation',
      description:
        'Containerization, orchestration, and infrastructure as code for modernized services. Each extracted module gets its own deployment pipeline and scaling configuration.',
    },
  ],

  processSteps: [
    {
      title: 'Legacy Assessment',
      description:
        'Codebase analysis, dependency mapping, and complexity scoring. We identify module boundaries, coupling hotspots, and the extraction sequence that minimizes risk while maximizing early value.',
      duration: 'Weeks 1–2',
      deliverable: 'Dependency map, complexity scores, prioritized extraction backlog',
    },
    {
      title: 'Architecture Design',
      description:
        'Target architecture definition, service boundary design, and migration strategy per module. Each module gets an assigned approach: extract, wrap, replatform, or retire.',
      duration: 'Weeks 2–3',
      deliverable: 'Target architecture, per-module migration strategy, ADRs',
    },
    {
      title: 'Foundation Layer',
      description:
        'Set up the infrastructure for the modern architecture: service mesh, API gateway, CI/CD pipelines, observability, and the routing layer that enables strangler fig traffic shifting.',
      duration: 'Weeks 3–5',
      deliverable: 'Infrastructure ready, routing layer deployed, first service template',
    },
    {
      title: 'Incremental Extraction',
      description:
        'Extract modules one by one. Each extraction follows the same cadence: build the service, validate in parallel with legacy, shift traffic, confirm, decommission the legacy module.',
      duration: 'Ongoing',
      deliverable: 'One service extracted per sprint cycle, regression-tested',
    },
    {
      title: 'Validation & Handover',
      description:
        'Performance validation, load testing, runbook creation, and knowledge transfer. Your team inherits a documented, observable system with clear ownership per service.',
      duration: 'Final 2 weeks',
      deliverable: 'Performance benchmarks, runbooks, team onboarding complete',
    },
  ],

  // Audience test: VP of Eng is measured on time-to-market, reliability, and team productivity.
  // Frame benefits as what they get (business outcomes), not what we build (technical outputs).
  // Greenfield-safe: framed as capabilities of the approach, not claims about past results.
  benefits: [
    {
      icon: 'Rocket',
      title: 'Ship Features While You Modernize',
      description:
        'New functionality goes through modern services from day one. Your roadmap does not pause while legacy transforms — the business keeps moving forward.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Reduce Blast Radius of Failures',
      description:
        'Independent services mean a failure in one module does not cascade across the entire system. Each service has its own deployment, scaling, and recovery — no more system-wide outages from a single bad deploy.',
    },
    {
      icon: 'Users',
      title: 'Teams Can Move Independently',
      description:
        'Decoupled services with clear contracts mean teams own their domain end-to-end. No more waiting for other teams to finish before you can deploy. Faster iteration, less coordination overhead.',
    },
    {
      icon: 'TrendingUp',
      title: 'Scale What Needs Scaling',
      description:
        'Independent services scale independently. When one part of the system gets load, scale that service without scaling (and paying for) everything else.',
    },
  ],

  capabilities: [
    'Legacy system assessment and dependency mapping',
    'Monolith-to-microservices decomposition (DDD)',
    'Strangler fig pattern implementation',
    'API-first modernization (REST, GraphQL)',
    'Database decomposition and data migration',
    'Cloud-native containerization (Docker, Kubernetes)',
    'Infrastructure as Code for modernized services',
    'CI/CD pipeline setup per service',
    'Service mesh and API gateway configuration',
    'Observability and distributed tracing',
  ],

  technologies: [
    '.NET / ASP.NET Core',
    'React / Angular / Next.js',
    'TypeScript',
    'Docker',
    'Kubernetes',
    'Azure Container Apps',
    'Terraform / Bicep',
    'Azure Service Bus / Dapr',
    'Azure DevOps / GitHub Actions',
    'Azure API Management',
    'Application Insights',
    'Azure SQL / Cosmos DB',
  ],

  engagementModels: [
    {
      name: 'Modernization Assessment',
      duration: '3 weeks',
      priceFrom: '$25,000',
      whatsIncluded: [
        'Codebase and dependency analysis',
        'Module boundary identification',
        'Complexity and risk scoring',
        'Prioritized extraction roadmap',
        'Per-module migration strategy recommendation',
      ],
      suitableFor: 'Teams who need a data-backed modernization plan before committing to execution',
      primaryCta: { label: 'Book Assessment', href: '/contact?mod=assessment' },
    },
    {
      name: 'Phased Modernization',
      duration: '16–24 weeks',
      priceFrom: '$180,000',
      whatsIncluded: [
        'Full assessment (included)',
        'Foundation layer setup (infra, routing, CI/CD)',
        'Extraction of 4–6 priority modules',
        'Production traffic shifting per module',
        'Performance validation and load testing',
        'Team handover and runbooks',
      ],
      suitableFor: 'Mid-market enterprises ready to execute on modernization with measurable sprint-by-sprint progress',
      primaryCta: { label: 'Book Modernization Call', href: '/contact?mod=phased' },
      featured: true,
    },
    {
      name: 'Ongoing Modernization',
      duration: 'Monthly retainer',
      priceFrom: '$45,000/month',
      whatsIncluded: [
        'Continued module extraction',
        'Architecture guidance and ADR management',
        'Performance tuning and optimization',
        'Team mentoring and pair programming',
        'Legacy decommissioning support',
        'On-call escalation for modernized services',
      ],
      suitableFor: 'Organizations with large legacy estates needing a sustained modernization partner beyond the initial extraction phase',
      primaryCta: { label: 'Discuss Retainer', href: '/contact?mod=retainer' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Migration & Modernization',
      description:
        'Modernized applications need a cloud home. We migrate your newly extracted services to Azure or AWS with the right hosting strategy per workload.',
      href: '/services/cloud-migration',
      icon: 'CloudUpload',
      pageType: 'service',
    },
    {
      title: 'Quality Engineering & Testing',
      description:
        'Modernizing without test automation is flying blind. We set up the test framework and CI quality gates that make incremental extraction safe — catch regressions before they reach production.',
      href: '/services/quality-engineering',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
    {
      title: 'Agency Management Software',
      description:
        'Modernizing an insurance AMS? See how we apply the strangler-fig approach to replace legacy agency management systems — carrier integrations, commission engine, and producer tools — without a rip-and-replace migration.',
      href: '/solutions/agency-management-software',
      icon: 'Building2',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'How do you keep production running during modernization?',
      answer:
        'We use the strangler fig pattern: new services run alongside the legacy system. Traffic routes to the new service for modernized functionality and to the legacy system for everything else. At no point is the entire system cut over at once — each module migrates independently with its own validation window and rollback path.',
    },
    {
      question: 'How long does a full modernization take?',
      answer:
        'It depends on the size and complexity of the monolith. A typical mid-market system with 4–6 priority modules takes 16–24 weeks for the initial extraction phase. Larger estates with dozens of modules run as ongoing engagements over 6–12 months. The assessment (3 weeks) produces a realistic timeline based on your specific codebase.',
    },
    {
      question: 'Can you just wrap our legacy system with APIs instead of rewriting it?',
      answer:
        'Yes — API-first modernization is one of our core approaches. We place a modern API layer in front of legacy functionality so external consumers (and new internal services) interact through clean REST or GraphQL interfaces. This buys time for deeper modernization while delivering immediate integration value.',
    },
    {
      question: 'Do we need to modernize everything at once?',
      answer:
        'No. The assessment identifies which modules to extract first based on business value, risk, and coupling. Many organizations modernize their highest-value, lowest-risk modules first to demonstrate value, then continue with a sustained modernization cadence. Some legacy modules may never need modernization if they are stable, low-maintenance, and decoupled.',
    },
    {
      question: 'What happens to our existing data during modernization?',
      answer:
        'Each module extraction includes a data migration strategy. We decompose shared databases into service-owned stores using techniques like change data capture, dual-write with reconciliation, or event-sourced synchronization. Data integrity is validated at every step — no extended maintenance windows, no data loss.',
    },
    {
      question: 'What if the modernization needs to be paused or reprioritized?',
      answer:
        'Because each module is extracted independently, the system is in a valid, deployable state at the end of every extraction cycle. You can pause between modules, reprioritize the extraction order, or reduce team size without leaving the system in a broken intermediate state. This is the fundamental advantage of incremental over big-bang.',
    },
  ],

  cta: {
    title: 'Ready to modernize without the rewrite risk?',
    description:
      'Book a 30-minute call. We will discuss your legacy system, identify the highest-value extraction targets, and outline what an incremental modernization engagement looks like for your architecture.',
    primaryCta: { label: 'Book modernization call', href: '/contact' },
    secondaryCta: { label: 'See our approach', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable modernization engagements. Confirm with user before publishing.',
    'engagementModels[1].duration — "16–24 weeks" for phased modernization. Confirm achievability for a typical 4–6 module extraction.',
    'processSteps[3].deliverable — "one service extracted per sprint cycle" cadence claim. Confirm realistic extraction velocity.',
    'engagementModels[0].duration — "3 weeks" for assessment. Confirm this is achievable for a mid-market monolith.',
  ],
};

export default applicationModernization;
