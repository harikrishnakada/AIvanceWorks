import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Engineering / Director of Infrastructure at a mid-market enterprise (500–5,000 employees)
// Measured on: uptime SLAs, deployment velocity, cloud cost efficiency, team productivity
// Dominant question: "Can you build production-grade infrastructure with IaC that my team can maintain?"
// Key trust issue: burned by consultants who built environments nobody internal could understand or maintain
// Signature: InfraOpsControlPlane — four-quadrant operational lifecycle (Provision, Deploy, Observe, Recover)
//
// Composition based on Archetype B recipe:
//   - ProcessTimeline placed before TechStackBlock (risk-averse buyer wants to see how we work)
//   - BenefitsGrid dropped — outcomes folded into ProcessTimeline deliverables and EngagementModels copy
//   - EngagementModels kept (key buyer question: build-and-handoff vs ongoing ops)
//   - 10 sections total — at ceiling, justified for a broad-scope technical infrastructure service

const cloudInfrastructure: ServicePageData = {
  slug: 'cloud-infrastructure',
  title: 'Cloud Infrastructure & Operations',
  shortDescription:
    'Production-grade cloud infrastructure designed with IaC, container orchestration, observability, and disaster recovery — built for your team to own and operate.',

  metaTitle: 'Cloud Infrastructure & Operations | IaC, Kubernetes, CI/CD',
  metaDescription:
    'Cloud infrastructure services: Infrastructure as Code (Terraform, Bicep), Kubernetes orchestration, CI/CD pipelines, monitoring, and disaster recovery. Built for handoff, not dependency.',
  keywords: [
    'cloud infrastructure services',
    'infrastructure as code',
    'terraform consulting',
    'kubernetes managed services',
    'cloud operations',
    'CI/CD pipeline setup',
    'cloud monitoring',
    'disaster recovery planning',
    'azure infrastructure',
    'cloud environment management',
  ],
  canonicalPath: '/services/cloud-infrastructure',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cloud Infrastructure & Operations', href: '/services/cloud-infrastructure' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'processTimeline',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'infrastructure',
  signatureComponent: 'InfraOpsControlPlane',
  heroIllustrationComponent: 'CloudInfraHeroIllustration',

  hero: {
    badge: 'Cloud & Infrastructure',
    headline: 'Infrastructure your team can own on day one.',
    subhead:
      'Production-grade cloud environments built with Infrastructure as Code, full observability, and documented runbooks — so your team operates with confidence, not dependency.',
    primaryCta: { label: 'Book Infrastructure Call', href: '/contact' },
    secondaryCta: { label: 'See how we build', href: '#signature' },
  },

  // Audience test: VP of Engineering evaluating an infrastructure partner needs to see
  // concrete deliverables and operational maturity signals. Every metric is capability-framed.
  metricsStrip: [
    {
      value: 'IaC-First',
      label: 'Every resource in code',
      description: 'Terraform or Bicep — nothing manual',
    },
    {
      value: 'Full Stack',
      label: 'Compute to observability',
      description: 'Networking, containers, CI/CD, monitoring, DR',
    },
    {
      value: 'Handoff-Ready',
      label: 'Documented and transferable',
      description: 'Runbooks, ADRs, team onboarding',
    },
    {
      value: 'Ops-Capable',
      label: 'Build or build + operate',
      description: 'Flexible engagement models',
    },
  ],

  // Audience test: VP of Engineering scans capabilities to confirm we cover their stack.
  // These map directly to the service catalog capabilities for Cloud Infrastructure & Operations.
  features: [
    {
      icon: 'FileCode',
      title: 'Infrastructure as Code',
      description:
        'Terraform, Bicep, or Pulumi modules that provision your entire environment from a single repository. Version-controlled, peer-reviewed, drift-detected.',
    },
    {
      icon: 'Container',
      title: 'Container Orchestration',
      description:
        'Kubernetes clusters, Azure Container Apps, or ECS — configured with auto-scaling, health checks, and resource governance for production workloads.',
    },
    {
      icon: 'Workflow',
      title: 'CI/CD Pipeline Design',
      description:
        'Azure DevOps or GitHub Actions pipelines with environment promotion, automated testing gates, and rollback capability built into every deployment.',
    },
    {
      icon: 'Activity',
      title: 'Monitoring & Observability',
      description:
        'Application Insights, Log Analytics, and custom dashboards that give your team real-time visibility into performance, errors, and resource utilization.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Security & Secret Management',
      description:
        'Azure Key Vault integration, network segmentation, identity-based access, and security baselines applied at the infrastructure layer — not bolted on later.',
    },
    {
      icon: 'RotateCcw',
      title: 'Disaster Recovery & Business Continuity',
      description:
        'Geo-redundant backups, failover automation, and tested recovery procedures with documented RPO/RTO targets for every critical workload.',
    },
  ],

  processSteps: [
    {
      title: 'Environment Architecture',
      description:
        'We assess your requirements, compliance constraints, and team capabilities — then produce an architecture design with landing zone topology, networking, and security boundaries.',
      duration: 'Week 1–2',
      deliverable: 'Architecture design document, ADRs, landing zone diagram',
    },
    {
      title: 'IaC Foundation & Provisioning',
      description:
        'Infrastructure modules built in Terraform or Bicep with CI/CD for the IaC itself. Environments provisioned: dev, staging, production — all from code, all repeatable.',
      duration: 'Week 2–4',
      deliverable: 'IaC repository, provisioned environments, pipeline for infra changes',
    },
    {
      title: 'Application Platform & Pipelines',
      description:
        'Container orchestration, CI/CD pipelines for application deployments, secret management, and environment promotion workflows configured and tested.',
      duration: 'Week 4–6',
      deliverable: 'Application deployment pipelines, container platform, secret management',
    },
    {
      title: 'Observability & DR',
      description:
        'Monitoring dashboards, alerting rules, log aggregation, and disaster recovery procedures implemented and tested. Every alert has a documented runbook.',
      duration: 'Week 6–8',
      deliverable: 'Monitoring stack, alert runbooks, DR test results, recovery procedures',
    },
    {
      title: 'Knowledge Transfer & Handoff',
      description:
        'Structured onboarding sessions for your team covering IaC workflows, deployment procedures, incident response, and day-2 operations. Handoff is not a slide deck — it is paired working.',
      duration: 'Week 8–9',
      deliverable: 'Team onboarding complete, runbooks validated, operational handoff signed',
    },
  ],

  // Audience test: VP of Engineering cares about the specific tools and which
  // platforms we work with. This buyer evaluates technical depth by stack familiarity.
  capabilities: [
    'Infrastructure as Code (Terraform, Bicep, ARM Templates, Pulumi)',
    'Container orchestration (Kubernetes, Azure Container Apps, AKS, ECS)',
    'CI/CD pipeline design (Azure DevOps, GitHub Actions, GitOps)',
    'Serverless architecture (Azure Functions, Durable Functions, Lambda)',
    'Cloud networking (VNets, VPN Gateway, ExpressRoute, Private Endpoints)',
    'Monitoring & observability (Application Insights, Log Analytics, Grafana)',
    'Disaster recovery & business continuity planning',
    'Landing zone design and environment provisioning',
    'Secret management (Azure Key Vault, AWS Secrets Manager)',
    'Event-driven architecture (Azure Service Bus, Event Grid, Logic Apps)',
  ],
  technologies: [
    'Terraform',
    'Bicep',
    'Docker',
    'Kubernetes',
    'Azure DevOps',
    'GitHub Actions',
    'Azure Functions',
    'Azure Container Apps',
    'Application Insights',
    'Azure Key Vault',
    'Azure Service Bus',
    'Pulumi',
  ],

  engagementModels: [
    {
      name: 'Infrastructure Build',
      duration: '8–12 weeks',
      priceFrom: '$60,000',
      whatsIncluded: [
        'Full architecture design and ADRs',
        'IaC repository (Terraform or Bicep)',
        'Dev, staging, and production environments',
        'CI/CD pipelines for infrastructure and applications',
        'Monitoring, alerting, and dashboards',
        'Disaster recovery configuration and testing',
        'Structured knowledge transfer and runbooks',
      ],
      suitableFor: 'Teams building a new cloud environment or replacing ad-hoc infrastructure with production-grade IaC',
      primaryCta: { label: 'Book Infrastructure Call', href: '/contact?infra=build' },
      featured: true,
    },
    {
      name: 'Infrastructure Build + Managed Ops',
      duration: '8–12 week build + ongoing',
      priceFrom: '$60,000 + $8,000/mo',
      whatsIncluded: [
        'Everything in Infrastructure Build',
        'Ongoing infrastructure monitoring and incident response',
        'Monthly infrastructure reviews and optimization',
        'Patch management and security updates',
        'Capacity planning and scaling adjustments',
        'Direct Slack/Teams channel with infrastructure engineers',
      ],
      suitableFor: 'Teams that want production infrastructure operated for them while they focus on application development',
      primaryCta: { label: 'Book Managed Ops Call', href: '/contact?infra=managed' },
    },
    {
      name: 'Infrastructure Audit & Remediation',
      duration: '3–4 weeks',
      priceFrom: '$25,000',
      whatsIncluded: [
        'Architecture and security review',
        'IaC coverage assessment',
        'Cost optimization analysis',
        'Observability gap assessment',
        'Prioritized remediation roadmap',
        'Quick-win implementation (up to 40 hours)',
      ],
      suitableFor: 'Teams with existing infrastructure that needs a health check, security review, or cost optimization pass',
      primaryCta: { label: 'Book Audit Call', href: '/contact?infra=audit' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Strategy & Assessment',
      description:
        'Not sure which workloads go where? A structured assessment maps your environment and produces the migration roadmap we build from.',
      href: '/services/cloud-strategy',
      icon: 'Compass',
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
      title: 'Security & Compliance',
      description:
        'Infrastructure in place but your next audit looming? Our security and compliance engagement wires Zero-Trust identity, Key Vault, and SIEM into the environment you already run — and produces the evidence your auditor needs.',
      href: '/services/security-compliance',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Do you build infrastructure and hand it off, or can you operate it ongoing?',
      answer:
        'Both. Our default engagement is a build-and-handoff: we design, implement, document, and train your team to operate independently. If you prefer managed operations, we offer an ongoing retainer where our engineers monitor, maintain, and optimize the infrastructure while your team focuses on application development. Most clients start with a build engagement and decide on managed ops during handoff.',
    },
    {
      question: 'What does "handoff-ready" mean in practice?',
      answer:
        'It means your team can operate the infrastructure without calling us. Concretely: every resource is in version-controlled IaC, every deployment has a pipeline, every alert has a runbook, every architectural decision is documented in an ADR, and your engineers have completed structured onboarding sessions with our team. Handoff is paired working, not a slide deck.',
    },
    {
      question: 'Do you work with Azure, AWS, or both?',
      answer:
        'We work primarily with Microsoft Azure and AWS. Most engagements are single-cloud (Azure is our deepest expertise), but we support multi-cloud and hybrid architectures where business requirements justify the added complexity. The architecture phase determines which platform fits your workloads, compliance requirements, and team skills.',
    },
    {
      question: 'What if we already have infrastructure but it was set up ad-hoc?',
      answer:
        'That is exactly what our Infrastructure Audit & Remediation engagement addresses. We assess your current state — IaC coverage, security posture, observability gaps, cost efficiency — produce a prioritized remediation roadmap, and implement quick wins within the engagement. Many clients start here before deciding on a full rebuild or incremental improvement.',
    },
    {
      question: 'How do you handle secrets and access control?',
      answer:
        'Secrets live in Azure Key Vault or AWS Secrets Manager — never in code, environment variables, or configuration files. Access follows least-privilege principles with identity-based authentication (Managed Identities on Azure, IAM Roles on AWS). We implement network segmentation, private endpoints, and security baselines at the infrastructure layer from day one.',
    },
    {
      question: 'What does disaster recovery look like?',
      answer:
        'We define RPO and RTO targets per workload based on business criticality, then implement geo-redundant backups, failover automation, and recovery procedures to meet those targets. Every DR configuration is tested during the engagement — not just documented. You receive tested recovery procedures and a DR runbook your team can execute without our involvement.',
    },
  ],

  cta: {
    title: 'Ready to build infrastructure your team can own?',
    description:
      'Book a 30-minute call. We will discuss your current environment, what you need built, and whether a build, managed ops, or audit engagement fits.',
    primaryCta: { label: 'Book infrastructure call', href: '/contact' },
    secondaryCta: { label: 'See our cloud strategy service', href: '/services/cloud-strategy' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices. Confirm with user before publishing.',
    'engagementModels[0].duration — "8–12 weeks" is illustrative. Confirm typical engagement length.',
    'engagementModels[2].whatsIncluded — "up to 40 hours" remediation. Confirm scope.',
    'processSteps durations — week ranges are illustrative. Confirm actual delivery cadence.',
    'engagementModels[1].priceFrom — "$8,000/mo" managed ops. Confirm pricing model.',
  ],
};

export default cloudInfrastructure;
