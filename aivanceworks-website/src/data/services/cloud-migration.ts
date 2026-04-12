import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Infrastructure / Director of IT Operations at a mid-market enterprise (500–5,000 employees)
// Measured on: uptime/SLA during migration, migration timeline adherence, cost reduction post-migration,
//   minimizing business disruption
// Dominant question: "How do you migrate without causing downtime to our production systems?"
// Key trust issue: burned by migrations that went sideways — extended outages during cutover,
//   applications that broke post-migration because dependencies weren't mapped, timelines that
//   tripled because nobody assessed workload complexity upfront. Skeptical of "just lift and shift."
// Signature: CloudMigrationWavePlanner — phased wave visualization showing workloads grouped
//   into migration waves with validation gates between each wave. Answers the core trust issue:
//   migrations happen in controlled phases, not chaotic all-at-once cutovers.
//
// Composition follows Archetype B recipe with adjustments:
//   - TechStackBlock dropped — buyer gets technical depth from FeatureGrid (migration approaches)
//     + ProcessTimeline (sequencing). EngagementModels is more actionable for "bring a number to my boss."
//   - ProcessTimeline cherry-picked (risk-averse buyer needs process confidence before benefits).
//   - ProcessTimeline placed BEFORE BenefitsGrid per heuristic 3 (process before proof for risk-averse).
//   - 10 sections total — matches Application Modernization and SaaS Development density.

const cloudMigration: ServicePageData = {
  slug: 'cloud-migration',
  title: 'Cloud Migration & Modernization',
  shortDescription:
    'End-to-end cloud migration execution — from on-premises to Azure or AWS — using a wave-based approach that validates every workload before cutover. Your systems move to the cloud without disrupting the business.',

  metaTitle: 'Cloud Migration & Modernization | Azure & AWS Migration Services',
  metaDescription:
    'Cloud migration services that move your workloads to Azure or AWS in validated waves. Rehost, replatform, or rearchitect — each workload gets the right migration strategy with zero-downtime cutover.',
  keywords: [
    'cloud migration services',
    'azure migration',
    'aws migration',
    'cloud migration company',
    'application migration to cloud',
    'data center migration',
    'lift and shift migration',
    'cloud replatforming',
    'hybrid cloud migration',
    'cloud modernization services',
    'zero downtime migration',
    'workload migration',
  ],
  canonicalPath: '/services/cloud-migration',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cloud Migration & Modernization', href: '/services/cloud-migration' },
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

  category: 'infrastructure',
  signatureComponent: 'CloudMigrationWavePlanner',
  heroIllustrationComponent: 'CloudMigrationHeroIllustration',

  hero: {
    badge: 'Cloud Migration',
    headline: 'Move to the cloud without disrupting your business.',
    subhead:
      'Wave-based migration that validates every workload before cutover. Each application gets the right strategy — rehost, replatform, or rearchitect — and moves on a timeline your operations team controls.',
    primaryCta: { label: 'Book Migration Call', href: '/contact' },
    secondaryCta: { label: 'See the wave approach', href: '#signature' },
  },

  // Audience test: VP of Infrastructure evaluating a migration partner needs immediate
  // reassurance that this is NOT a reckless "move everything at once" approach. Every
  // metric signals the controlled, validated, wave-based migration. All greenfield-safe
  // (describe our methodology, not fabricated past outcomes).
  metricsStrip: [
    {
      value: 'Zero Downtime',
      label: 'Migration by design',
      description: 'Validated cutover with rollback path',
    },
    {
      value: 'Wave-Based',
      label: 'Phased execution',
      description: 'Each wave validated before next begins',
    },
    {
      value: 'Per-Workload',
      label: 'Right strategy per app',
      description: 'Rehost, replatform, or rearchitect',
    },
    {
      value: 'Post-Migration',
      label: 'Optimization included',
      description: 'Not just moved — verified and tuned',
    },
  ],

  // Audience test: VP of Infra evaluates migration partners on their breadth of
  // migration approaches — can this team handle rehosting a simple VM AND rearchitecting
  // a complex legacy app for cloud-native? Each card maps to a specific migration
  // challenge the buyer is facing today.
  features: [
    {
      icon: 'CloudUpload',
      title: 'Azure & AWS Migration',
      description:
        'Full execution of on-premises to cloud migration on Azure or AWS. We handle compute, storage, networking, and identity — moving your environment to the cloud provider that fits your workloads and team.',
    },
    {
      icon: 'GitBranch',
      title: 'Application Migration Strategies',
      description:
        'Each application assessed and assigned the right approach: rehost for quick wins, replatform for managed-service gains, rearchitect for cloud-native performance. No blanket lift-and-shift.',
    },
    {
      icon: 'Database',
      title: 'Data Migration & Database Modernization',
      description:
        'Schema migration, data replication, and cutover orchestration for SQL Server, Oracle, PostgreSQL, and NoSQL workloads. Continuous sync during migration ensures zero data loss at cutover.',
    },
    {
      icon: 'Network',
      title: 'Hybrid Cloud & Connectivity',
      description:
        'VPN, ExpressRoute, or Direct Connect setup for hybrid scenarios. Secure connectivity between on-premises and cloud during migration and for workloads that stay hybrid long-term.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Migration Validation & Testing',
      description:
        'Automated validation at every stage — functional testing, performance benchmarking, security scanning, and dependency verification. Each workload is proven working before traffic cuts over.',
    },
    {
      icon: 'Gauge',
      title: 'Post-Migration Optimization',
      description:
        'Right-sizing, reserved instance planning, monitoring setup, and performance tuning after migration completes. Your cloud environment is optimized from day one — not left running at on-premises cost levels.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Wave Planning',
      description:
        'Workload inventory, dependency mapping, and migration wave sequencing. Each workload gets a migration strategy and a wave assignment based on risk, dependencies, and business priority.',
      duration: 'Weeks 1–2',
      deliverable: 'Workload inventory, dependency map, wave plan with per-app strategy',
    },
    {
      title: 'Environment Preparation',
      description:
        'Cloud landing zone setup: networking, identity, security baselines, monitoring, and IaC pipelines. The target environment is production-ready before a single workload moves.',
      duration: 'Weeks 2–4',
      deliverable: 'Landing zone deployed, networking configured, IaC pipelines operational',
    },
    {
      title: 'Pilot Wave Migration',
      description:
        'First wave of 2–3 lower-risk workloads migrated, validated, and running in production. Proves the migration approach, tests connectivity, and calibrates the team before higher-risk waves.',
      duration: 'Weeks 4–6',
      deliverable: 'Pilot workloads live in cloud, validation report, lessons-learned log',
    },
    {
      title: 'Production Waves',
      description:
        'Subsequent waves execute in parallel streams. Each wave follows the same cadence: migrate, validate, cutover, confirm. Wave size increases as confidence builds and the process matures.',
      duration: 'Weeks 6–16',
      deliverable: 'Production workloads migrated per wave, cutover reports, rollback tested',
    },
    {
      title: 'Optimization & Handover',
      description:
        'Post-migration optimization: right-sizing, cost governance setup, monitoring dashboards, runbooks, and team enablement. Your operations team inherits a documented, optimized cloud environment.',
      duration: 'Final 2 weeks',
      deliverable: 'Optimization report, cost governance, runbooks, team onboarding complete',
    },
  ],

  // Audience test: VP of Infra is measured on uptime, timeline, and cost. Frame benefits
  // as what they get (operational outcomes), not what we build (technical outputs).
  // Greenfield-safe: framed as capabilities of the wave-based approach, not claims about
  // past results.
  benefits: [
    {
      icon: 'Clock',
      title: 'Migrate Without Disrupting Operations',
      description:
        'Wave-based execution with validated cutovers means production stays live throughout. Each workload has a tested rollback path — your users never experience an unplanned outage from migration activity.',
    },
    {
      icon: 'Target',
      title: 'Right Strategy for Every Workload',
      description:
        'No blanket approach. Each application is assessed and migrated using the strategy that fits — quick rehost for commodity workloads, replatforming for managed-service leverage, rearchitecting for cloud-native performance.',
    },
    {
      icon: 'CheckCircle2',
      title: 'Validated at Every Stage',
      description:
        'Automated testing, performance benchmarking, and dependency verification run at every migration stage. Issues are caught and resolved before cutover — not discovered in production on Monday morning.',
    },
    {
      icon: 'TrendingDown',
      title: 'Optimized From Day One',
      description:
        'Post-migration optimization is part of the engagement, not an afterthought. Right-sizing, reserved instances, monitoring, and cost governance are configured before handover — your cloud spend is controlled from the start.',
    },
  ],

  capabilities: [
    'Azure & AWS migration (on-premises to cloud)',
    'Application migration (rehost, replatform, rearchitect)',
    'Data migration and database modernization (SQL Server, Oracle, PostgreSQL, NoSQL)',
    'Mainframe and legacy infrastructure modernization',
    'Migration wave planning and dependency mapping',
    'Hybrid cloud connectivity (VPN, ExpressRoute, Direct Connect)',
    'Landing zone design and implementation',
    'Post-migration optimization and right-sizing',
    'Automated migration validation and testing',
    'Cutover orchestration with tested rollback',
  ],

  technologies: [
    'Microsoft Azure',
    'AWS',
    'Azure Migrate',
    'Azure Site Recovery',
    'AWS Migration Hub',
    'Terraform / Bicep',
    'Docker / Kubernetes',
    'Azure Container Apps',
    'Azure SQL Database',
    'Cosmos DB',
    'Azure DevOps / GitHub Actions',
    'Application Insights',
  ],

  engagementModels: [
    {
      name: 'Migration Assessment & Wave Plan',
      duration: '3 weeks',
      priceFrom: '$25,000',
      whatsIncluded: [
        'Full workload inventory and dependency mapping',
        'Per-workload migration strategy recommendation',
        'Migration wave sequencing',
        'Risk assessment and timeline estimate',
        'Landing zone architecture blueprint',
      ],
      suitableFor: 'Teams who have a cloud strategy but need a detailed execution plan before committing to migration',
      primaryCta: { label: 'Book Assessment', href: '/contact?migration=assessment' },
    },
    {
      name: 'Full Migration Execution',
      duration: '12–20 weeks',
      priceFrom: '$150,000',
      whatsIncluded: [
        'Migration assessment (included)',
        'Landing zone setup and IaC pipelines',
        'Wave-based migration of 10–30 workloads',
        'Automated validation and cutover orchestration',
        'Post-migration optimization and right-sizing',
        'Team handover with runbooks and documentation',
      ],
      suitableFor: 'Mid-market enterprises ready to execute a complete data center or workload migration to Azure or AWS',
      primaryCta: { label: 'Book Migration Call', href: '/contact?migration=full' },
      featured: true,
    },
    {
      name: 'Ongoing Migration Support',
      duration: 'Monthly retainer',
      priceFrom: '$40,000/month',
      whatsIncluded: [
        'Continued wave execution for large estates',
        'Complex workload rearchitecting',
        'Database migration and data sync',
        'Performance tuning and optimization',
        'Cloud operations support and incident response',
        'Team mentoring and capability building',
      ],
      suitableFor: 'Organizations with large workload estates (50+ applications) needing sustained migration execution beyond a single engagement',
      primaryCta: { label: 'Discuss Retainer', href: '/contact?migration=retainer' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Strategy & Assessment',
      description:
        'Not sure where to start? A structured assessment maps every workload, builds the business case, and produces the migration roadmap this engagement executes against.',
      href: '/services/cloud-strategy',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Migration complete? We design and operate the cloud infrastructure your workloads run on — IaC, monitoring, disaster recovery, and ongoing operational management.',
      href: '/services/cloud-infrastructure',
      icon: 'Server',
      pageType: 'service',
    },
    {
      title: 'Application Modernization',
      description:
        'Some workloads need more than migration — they need rearchitecting. For legacy monoliths that should become cloud-native services, our modernization team handles the transformation.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How do you avoid downtime during migration?',
      answer:
        'We use a wave-based approach with validated cutovers. Each workload is replicated to the cloud environment and validated before traffic is switched. The cutover itself is orchestrated with a tested rollback path — if anything fails validation, traffic routes back to the source within minutes. At no point is a workload unavailable to users during migration.',
    },
    {
      question: 'How do you decide between rehost, replatform, and rearchitect?',
      answer:
        'During the assessment phase, each workload is evaluated against complexity, cloud readiness, dependency count, and business value. Rehosting fits cloud-ready workloads where speed matters. Replatforming applies when managed services offer clear operational or cost advantages. Rearchitecting is recommended only when the workload fundamentally benefits from cloud-native patterns and the investment is justified by long-term value.',
    },
    {
      question: 'What if we already have a cloud strategy or assessment?',
      answer:
        'We can start from your existing assessment. If you have a workload inventory and migration roadmap from a prior engagement, we validate it against our dependency mapping, confirm the wave plan, and move directly into environment preparation and migration execution. No need to redo work that is already sound.',
    },
    {
      question: 'How long does a typical migration take?',
      answer:
        'A mid-market migration of 10–30 workloads typically takes 12–20 weeks end-to-end including assessment, environment setup, wave execution, and optimization. Larger estates with 50+ workloads run as ongoing engagements. The assessment phase (3 weeks) produces a realistic timeline based on your specific workload count, complexity, and dependency structure.',
    },
    {
      question: 'How are databases migrated without data loss?',
      answer:
        'Database migration uses continuous replication during the migration window. We set up data sync between source and target, validate data integrity, and only cut over when the target is fully synchronized and tested. For complex databases, we use Azure Database Migration Service or AWS DMS with change data capture to maintain real-time sync until the final cutover window.',
    },
    {
      question: 'What happens after migration is complete?',
      answer:
        'Post-migration includes optimization (right-sizing, reserved instances, cost governance), monitoring setup (dashboards, alerting, incident routing), and a full handover package (runbooks, architecture docs, team training). You own the environment and documentation. You can operate independently, bring in your own team, or continue with us on a retainer for ongoing management.',
    },
  ],

  cta: {
    title: 'Ready to move your systems to the cloud?',
    description:
      'Book a 30-minute call. We will discuss your current environment, workload count, and migration drivers — and outline what a wave-based migration engagement looks like for your infrastructure.',
    primaryCta: { label: 'Book migration call', href: '/contact' },
    secondaryCta: { label: 'See the wave approach', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable cloud migration engagements. Confirm with user before publishing.',
    'engagementModels[1].duration — "12–20 weeks" for full migration of 10–30 workloads. Confirm achievability.',
    'engagementModels[0].duration — "3 weeks" for migration assessment. Confirm this is realistic for a mid-market workload inventory.',
    'processSteps[3].duration — "Weeks 6–16" for production waves. Highly variable — confirm reasonable range.',
  ],
};

export default cloudMigration;
