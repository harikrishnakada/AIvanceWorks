import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service (reliability/operations-trust lean)
// Buyer: VP of Engineering / Head of Infrastructure / CTO at a mid-market company or
//   funded startup running production cloud infra WITHOUT a 24/7 SRE/ops team.
// Measured on: uptime/SLA, incident MTTR, cloud spend, freeing engineers from firefighting.
// Top 3 buyer questions:
//   (1) Who responds when it breaks at 2am, how fast?
//   (2) Do I keep visibility/control or get a black box?
//   (3) What's covered and how is it different from hiring an SRE?
// #1 trust issue: opaque managed-services vendors → slow ticket queues, offshore L1 that
//   just re-escalates, lock-in, lost visibility. ANSWERED in roleBoundary and FAQ explicitly.
// Signature: ManagedOpsLifecycle — continuous closed loop: Monitor → Detect → Respond →
//   Remediate → Optimize → back to Monitor. Distinct from InfraOpsControlPlane's linear
//   four-quadrant build lifecycle; this is an always-on operational loop.
//
// Composition based on Archetype B recipe (reliability/ops-trust lean):
//   - roleBoundary placed after signature to directly defuse the black-box/lock-in fear
//     once the buyer has seen the operations model.
//   - ProcessTimeline dropped — signature already shows the ops loop; avoid duplication.
//   - 10 sections total — matches the page mandate exactly.

const managedInfrastructure: ServicePageData = {
  slug: 'managed-infrastructure',
  title: `${BRAND_PREFIX} Managed Infrastructure Services`,
  shortDescription:
    'Always-on cloud operations — monitoring, incident response, patching, scaling, cost optimization, and DR — run inside your own cloud accounts with full visibility and no lock-in.',

  metaTitle: 'Managed Infrastructure Services | 24/7 Cloud Operations & On-Call',
  metaDescription:
    'Managed cloud infrastructure: 24/7 monitoring, SLA-backed incident response, patching, scaling, cost optimization, and disaster recovery — operated in your cloud accounts. Full visibility, no lock-in.',
  keywords: [
    'managed infrastructure services',
    'managed cloud operations',
    '24/7 infrastructure monitoring',
    'cloud incident response',
    'SRE as a service',
    'managed cloud infrastructure',
    'cloud operations management',
    'patch management cloud',
    'cloud cost optimization service',
    'managed devops services',
    'infrastructure on-call',
    'azure managed services',
    'aws managed operations',
  ],
  canonicalPath: '/services/managed-infrastructure',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: `${BRAND_PREFIX} Managed Infrastructure Services`, href: '/services/managed-infrastructure' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'roleBoundary',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'infrastructure',
  signatureComponent: 'ManagedOpsLifecycle',
  heroIllustrationComponent: 'ManagedInfraHeroIllustration',

  hero: {
    badge: 'Infrastructure Management',
    headline: 'Your cloud infrastructure, operated around the clock.',
    subhead:
      'We monitor, maintain, scale, and cost-optimize your cloud infrastructure 24/7 — in your accounts, with full visibility and no lock-in.',
    primaryCta: { label: 'Talk to our ops team', href: '/contact' },
    secondaryCta: { label: 'See the operations loop', href: '#signature' },
  },

  // Audience test: VP of Engineering scanning for operational coverage signals.
  // All metrics are capability-framed — no fabricated numbers.
  metricsStrip: [
    {
      value: '24/7',
      label: 'Monitoring & response',
      description: 'On-call coverage, not business hours',
    },
    {
      value: 'Your Cloud',
      label: 'We operate in your accounts',
      description: 'You keep full ownership and control',
    },
    {
      value: 'SLA-Backed',
      label: 'Severity-based response',
      description: 'Defined response and escalation targets',
    },
    {
      value: 'Full Lifecycle',
      label: 'Monitor to optimize',
      description: 'Incident response, patching, scaling, cost, DR',
    },
  ],

  // Audience test: VP of Engineering scans features to see if the scope matches what
  // they need covered. Descriptions are buyer-facing operational outcomes, not jargon.
  features: [
    {
      icon: 'Activity',
      title: '24/7 Monitoring & Alerting',
      description:
        'Continuous observability across your cloud environment — application health, infrastructure metrics, log streams, and custom thresholds — with alert routing to named on-call engineers.',
    },
    {
      icon: 'Bell',
      title: 'Incident Response & On-Call',
      description:
        'Severity-tiered on-call rotation with SLA-backed response targets. Named engineers investigate and resolve incidents end-to-end — no ticket queues, no re-escalation to an offshore L1.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Patching & Maintenance',
      description:
        'Scheduled OS, runtime, dependency, and security updates applied against tested runbooks — keeping your environment current without surprise production breakage.',
    },
    {
      icon: 'TrendingUp',
      title: 'Scaling & Capacity Management',
      description:
        'Proactive autoscaling reviews, resource right-sizing, and capacity planning to handle growth and seasonal load — before you hit a wall, not after.',
    },
    {
      icon: 'DollarSign',
      title: 'Cost Monitoring & Optimization',
      description:
        'FinOps-aligned cost monitoring, idle-resource identification, and right-sizing recommendations reviewed monthly — keeping cloud spend under control as your environment evolves.',
    },
    {
      icon: 'DatabaseBackup',
      title: 'Backup, DR & Security Hygiene',
      description:
        'Backup verification, DR drills, and security baseline enforcement run on a defined schedule — so your recovery posture stays real and tested, not just documented.',
    },
  ],

  roleBoundary: {
    eyebrow: 'Ownership & Boundaries',
    heading: 'You own the cloud. We run the operations.',
    intro:
      'We operate inside your cloud accounts, with your tooling, under your access controls. Every runbook, every configuration change, every incident record is yours — documented, transferable, and clean. If you ever want to bring operations back in-house or move to a different provider, we prepare a full handoff package. No lock-in, no black box, no dependency by design.',
    bullets: [
      'Cloud account and resource ownership stays with you — we work inside your environment, not ours.',
      'All runbooks, alert configurations, and operational documentation are co-owned and accessible to your team at all times.',
      'You retain direct access to every tool we operate with: observability dashboards, alert channels, cost reports.',
      'On-call escalation paths are transparent — you see who is on-call and how incidents are tracked.',
      'Clean exit protocol: we produce a structured handoff package including runbooks, tool configs, and a transition plan.',
    ],
    collaboration:
      'We work as an extension of your team — sharing incident channels, joining your stand-ups during incidents, and producing monthly operational reviews with your engineering leadership.',
  },

  // Audience test: ops-minded VP of Engineering expects to see specific tool names.
  // Framed as "tools we operate with" — not implied shipped delivery history.
  capabilities: [
    '24/7 monitoring & alerting (metrics, logs, traces)',
    'Incident response & severity-tiered on-call rotation',
    'Log aggregation & observability stack management',
    'Patch & vulnerability management (OS, runtime, dependencies)',
    'Autoscaling & capacity planning reviews',
    'Cloud cost monitoring & rightsizing (FinOps)',
    'Backup verification & disaster recovery testing',
    'IaC-managed change control (all changes in code, PR-reviewed)',
    'Runbook-driven operations (every alert has a documented response)',
    'Security baseline enforcement & drift detection',
  ],
  technologies: [
    'Datadog',
    'Grafana',
    'PagerDuty',
    'Opsgenie',
    'Azure Monitor',
    'AWS CloudWatch',
    'Application Insights',
    'Terraform',
    'Kubernetes',
    'Sentry',
    'Azure',
    'AWS',
  ],

  engagementModels: [
    {
      name: 'Monitoring & Incident Response',
      duration: 'Ongoing monthly',
      priceFrom: '$4,000/mo',
      whatsIncluded: [
        '24/7 infrastructure monitoring and alerting',
        'SLA-backed incident response with named on-call engineers',
        'Incident post-mortems and root-cause documentation',
        'Monthly operational review and health report',
        'Direct escalation channel (Slack / Teams)',
      ],
      suitableFor:
        'Teams that have their infrastructure in place and need always-on eyes and a response team — without adding full-time on-call headcount.',
      primaryCta: { label: 'Start a conversation', href: '/contact?managed=response' },
    },
    {
      name: 'Fully Managed Operations',
      duration: 'Ongoing monthly',
      priceFrom: '$9,000/mo',
      featured: true,
      whatsIncluded: [
        'Everything in Monitoring & Incident Response',
        'OS, runtime, and security patch management',
        'Scaling and capacity planning reviews',
        'Cloud cost monitoring and monthly rightsizing recommendations',
        'Backup verification and DR drill schedule',
        'Security baseline enforcement and drift detection',
        'IaC-managed change control for all infrastructure changes',
        'Dedicated named engineers and monthly leadership review',
      ],
      suitableFor:
        'Teams running production cloud infra who need full day-2 operations coverage — monitoring, incident response, patching, cost, security, and DR — without building an internal SRE team.',
      primaryCta: { label: 'Explore fully managed', href: '/contact?managed=fully' },
    },
    {
      name: 'Co-Managed / Embedded SRE',
      duration: 'Ongoing monthly',
      priceFrom: 'Custom',
      whatsIncluded: [
        'Shared on-call rotation with your engineering team',
        'Knowledge transfer and runbook co-authoring',
        'Incident response support alongside your team',
        'Capacity planning and cost review sessions',
        'Defined escalation paths — your team retains primary ownership',
      ],
      suitableFor:
        'Teams with an existing ops or SRE function who need augmentation, coverage gaps filled, or expertise in specific cloud domains — without a full managed-ops handoff.',
      primaryCta: { label: 'Discuss co-managed', href: '/contact?managed=comanaged' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Need the environment built first? We design and provision production-grade cloud infrastructure, then operate it for you on day two.',
      href: '/services/cloud-infrastructure',
      icon: 'Server',
      pageType: 'service',
    },
   {
      title: 'Platform Engineering',
      description:
        'Infrastructure in place? A developer platform gives your teams self-service provisioning, golden paths, and standardized toolchains on top of it.',
      href: '/services/platform-engineering',
      icon: 'Layers',
      pageType: 'service',
    },
    {
      title: 'DevOps',
      description:
        'Managed infrastructure is running — now accelerate what deploys on top of it. We build and automate CI/CD pipelines and deployment workflows that integrate cleanly with your managed environment.',
      href: '/services/devops',
      icon: 'GitBranch',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How do you take over our existing, running infrastructure without downtime?',
      answer:
        'We follow a structured onboarding process: first, a read-only discovery phase where we map your environment, review existing runbooks, and identify monitoring gaps — without touching anything. Next, we stand up our observability and alerting layer alongside your current setup. Then we run a shadow on-call period where our engineers shadow your team\'s incidents before going live. The cutover to primary on-call is staged, with your team available as backup. Typical onboarding is three to four weeks and produces zero downtime.',
    },
    {
      question: 'What happens if we want to bring operations back in-house?',
      answer:
        'Exit is designed in from day one. We maintain all runbooks, alert configurations, tool settings, and incident history in a form you own and can access at any time. When you decide to transition, we produce a handoff package — complete runbooks, on-call rotation guides, tool access credentials, and a joint transition plan. We run a shadow period in reverse, with your team taking primary and our engineers as backup. There is no proprietary tooling, no data lock-in, and no dependency on our systems beyond standard cloud-vendor tooling.',
    },
    {
      question: "What's the difference between managed infrastructure and hiring an SRE?",
      answer:
        'Hiring an SRE gives you one engineer — who has off days, gets sick, and takes vacations. Managed infrastructure gives you a team with documented coverage, redundant on-call rotations, breadth across cloud platforms, and operational tooling already in place. You also skip the six-to-nine month ramp time a new hire needs to understand your environment. The trade-off is direct control; that\'s why we operate inside your accounts and share visibility rather than running a black box.',
    },
    {
      question: 'How does on-call and incident escalation work?',
      answer:
        'Alerts from your monitoring stack route to our on-call rotation via PagerDuty or Opsgenie. The on-call engineer acknowledges within the SLA target for the incident severity, begins investigation, and either resolves or escalates to a second engineer. You receive a real-time update channel — typically a dedicated Slack or Teams thread per incident — and a post-mortem document for every Sev1 and Sev2 event. Escalation paths are documented and visible to your team at all times.',
    },
    {
      question: 'Do you work inside our cloud accounts, or do you run a separate managed environment?',
      answer:
        'We operate exclusively inside your cloud accounts. We request the minimum IAM permissions needed for monitoring, change management, and incident response — no broader than your internal SRE team would hold. You retain ownership of every resource, and you can review our access at any time. We do not run your workloads in our own accounts or through a proprietary management plane.',
    },
    {
      question: 'Do you support both Azure and AWS?',
      answer:
        'Yes. We operate with both Azure and AWS, and support single-cloud and multi-cloud environments. Our monitoring and observability tooling integrates with Azure Monitor, Application Insights, AWS CloudWatch, Datadog, and Grafana depending on your existing stack. Most engagements are single-cloud; for multi-cloud environments we document the per-cloud responsibilities clearly in the runbooks.',
    },
  ],

  cta: {
    title: 'Ready to stop firefighting your infrastructure?',
    description:
      'Book a 30-minute call. We will review your current environment, discuss coverage gaps, and determine which engagement model fits your team.',
    primaryCta: { label: 'Book a call', href: '/contact' },
    secondaryCta: { label: 'See how we build infrastructure', href: '/services/cloud-infrastructure' },
  },

  _unverified: [
    'engagementModels[0].priceFrom — "$4,000/mo" is illustrative. Confirm with pricing review before publishing.',
    'engagementModels[1].priceFrom — "$9,000/mo" is illustrative. Confirm with pricing review before publishing.',
    'faqs[0] onboarding timeline — "three to four weeks" is illustrative. Confirm typical onboarding cadence.',
  ],
};

export default managedInfrastructure;
