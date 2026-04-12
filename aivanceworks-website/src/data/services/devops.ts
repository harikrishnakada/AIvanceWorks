import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: Engineering Manager / Head of DevOps at a mid-market company (200–2,000 employees)
// Measured on: deployment frequency, change failure rate, MTTR, developer velocity (DORA metrics)
// Dominant question: "How do we deploy faster and more reliably without creating a toolchain nobody can maintain?"
// Key trust issue: burned by consultants who built overly complex multi-tool pipelines that internal
//   teams couldn't maintain — reverted to manual processes within months
// Signature: CiCdPipelineBlueprint — three-lane pipeline architecture (Build, Deploy, Operate) with
//   stage nodes and approval gates. Click any stage to see what we implement and the tools involved.
//
// Composition based on Archetype B recipe:
//   - BenefitsGrid dropped — outcomes folded into ProcessTimeline deliverables and hero subhead
//     (same pattern as cloud-infrastructure.ts; risk-averse technical buyer wants capabilities, not
//     marketing benefits)
//   - ProcessTimeline kept — buyer cares about engagement structure and handoff; signature shows
//     pipeline architecture, not engagement phases — no duplication
//   - 10 sections total — at ceiling, justified for a landing page that maps to a broad core service
//
// DevOps is a client-facing landing page mapping to Cloud Infrastructure & Operations (core service 2.3).
// It exists because buyers search "DevOps consulting" and "CI/CD pipeline setup" — not
// "Cloud Infrastructure & Operations."

const devops: ServicePageData = {
  slug: 'devops',
  title: 'DevOps',
  shortDescription:
    'CI/CD pipeline design, deployment automation, and release management — built for your team to operate on day one, not depend on us indefinitely.',

  metaTitle: 'DevOps Consulting | CI/CD Pipelines, Deployment Automation',
  metaDescription:
    'DevOps consulting services: CI/CD pipeline design, deployment automation, environment promotion, security scanning, and release management. Built for handoff, not dependency.',
  keywords: [
    'devops consulting',
    'CI/CD pipeline setup',
    'deployment automation',
    'devops services',
    'CI/CD consulting',
    'release management',
    'pipeline automation',
    'azure devops consulting',
    'github actions CI/CD',
    'devops pipeline design',
  ],
  canonicalPath: '/services/devops',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'DevOps', href: '/services/devops' },
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
  signatureComponent: 'CiCdPipelineBlueprint',
  heroIllustrationComponent: 'DevOpsHeroIllustration',

  hero: {
    badge: 'Cloud & Infrastructure',
    headline: 'Ship faster without breaking production.',
    subhead:
      'CI/CD pipelines, deployment automation, and release management — designed for your team to operate on day one, not depend on us indefinitely.',
    primaryCta: { label: 'Book DevOps Call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline', href: '#signature' },
  },

  // Audience test: Engineering Manager scanning for immediate proof of relevance.
  // Every metric is capability-framed (no fabricated stats). Each addresses a core concern:
  // automation → gating → visibility → independence.
  metricsStrip: [
    {
      value: 'CI/CD-First',
      label: 'Every deployment automated',
      description: 'No manual steps, no SSH-to-prod',
    },
    {
      value: 'Gated Deploys',
      label: 'Promotion with approvals',
      description: 'Dev → staging → production with gates',
    },
    {
      value: 'Observable',
      label: 'Monitor what you ship',
      description: 'Metrics, logs, alerts, rollback',
    },
    {
      value: 'Handoff-Ready',
      label: 'Your team owns it',
      description: 'Documented, trained, independent',
    },
  ],

  // Audience test: Engineering Manager scans capabilities to confirm we cover their pipeline needs.
  // Each feature maps to a real DevOps concern they'd evaluate against competitors.
  // Icons chosen from Lucide for DevOps/infrastructure domain.
  features: [
    {
      icon: 'GitBranch',
      title: 'CI/CD Pipeline Design',
      description:
        'Azure DevOps or GitHub Actions pipelines with branch policies, automated testing gates, artifact management, and environment-specific configuration.',
    },
    {
      icon: 'ArrowUpDown',
      title: 'Environment Promotion',
      description:
        'Structured dev → staging → production promotion with approval gates, configuration isolation, and deployment tracking across every environment.',
    },
    {
      icon: 'FileCode',
      title: 'Pipeline Infrastructure as Code',
      description:
        'Build agents, container registries, secrets, and pipeline resources managed through Terraform or Bicep — so your CI/CD system is reproducible and version-controlled.',
    },
    {
      icon: 'RefreshCcw',
      title: 'Release Management',
      description:
        'Feature flags, blue-green deployments, canary releases, and rollback automation for zero-downtime production deployments.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Security in the Pipeline',
      description:
        'SAST, dependency scanning, secret detection, and compliance checks integrated into every build — not bolted on as an afterthought.',
    },
    {
      icon: 'Activity',
      title: 'Post-Deploy Observability',
      description:
        'Health checks, performance dashboards, alert rules, and documented runbooks so your team knows what happened after every deployment.',
    },
  ],

  processSteps: [
    {
      title: 'Pipeline Assessment',
      description:
        'We audit your current CI/CD state — what is automated, what is manual, what is fragile — and produce a gap analysis with a prioritized remediation plan.',
      duration: 'Week 1',
      deliverable: 'Current-state assessment, gap analysis, remediation roadmap',
    },
    {
      title: 'Pipeline Architecture',
      description:
        'Design the target CI/CD architecture: branching strategy, environment topology, testing stages, approval gates, artifact management, and secret handling.',
      duration: 'Week 1–2',
      deliverable: 'Pipeline architecture document, environment topology diagram',
    },
    {
      title: 'Pipeline Implementation',
      description:
        'Build the pipelines in Azure DevOps or GitHub Actions. Configure build agents, artifact registries, environment connections, secret management, and deployment triggers.',
      duration: 'Week 2–4',
      deliverable: 'Working pipelines for dev, staging, and production',
    },
    {
      title: 'Testing & Security Gates',
      description:
        'Integrate automated testing, security scanning, and compliance checks into the pipeline. Every build runs unit tests, SAST, and dependency checks before promotion.',
      duration: 'Week 4–5',
      deliverable: 'Integrated test and security gates, pipeline compliance report',
    },
    {
      title: 'Knowledge Transfer & Handoff',
      description:
        'Structured onboarding for your team covering pipeline operations, troubleshooting, rollback procedures, and day-2 maintenance. Handoff is paired working, not a slide deck.',
      duration: 'Week 5–6',
      deliverable: 'Team onboarding complete, runbooks validated, operational handoff signed',
    },
  ],

  // Audience test: Engineering Manager cares about the specific tools and platforms.
  // This buyer evaluates technical depth by recognizing the tools they already use or want to adopt.
  capabilities: [
    'CI/CD pipeline design (Azure DevOps, GitHub Actions, GitLab CI)',
    'Environment promotion and deployment gating',
    'Infrastructure as Code for pipeline resources (Terraform, Bicep)',
    'Container-based builds (Docker, Azure Container Registry)',
    'Release management (feature flags, blue-green, canary)',
    'Security integration (SAST, SCA, secret detection)',
    'Monitoring and post-deploy observability',
    'Release orchestration and rollback automation',
    'Monorepo and multi-service pipeline design',
    'GitOps workflows (ArgoCD, Flux)',
  ],
  technologies: [
    'Azure DevOps',
    'GitHub Actions',
    'Docker',
    'Azure Container Registry',
    'Terraform',
    'Helm',
    'Azure Key Vault',
    'Application Insights',
    'SonarQube',
    'Grafana',
    'ArgoCD',
    'Flux',
  ],

  engagementModels: [
    {
      name: 'Pipeline Quick Fix',
      duration: '2–3 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'Current-state pipeline assessment',
        'Gap analysis and remediation roadmap',
        'Quick-win implementation (up to 30 hours)',
        'Security scan integration',
        'Runbooks for remediated pipelines',
      ],
      suitableFor: 'Teams with existing CI/CD that needs hardening, not a full rebuild',
      primaryCta: { label: 'Book Quick Fix Call', href: '/contact?devops=quickfix' },
    },
    {
      name: 'Full DevOps Build',
      duration: '6–8 weeks',
      priceFrom: '$45,000',
      whatsIncluded: [
        'Full 5-step process above',
        'Pipeline architecture and design',
        'CI/CD for all environments (dev, staging, production)',
        'Testing and security gate integration',
        'Release management and rollback automation',
        'Structured knowledge transfer and runbooks',
      ],
      suitableFor: 'Teams starting fresh or replacing fragile manual deployment processes',
      primaryCta: { label: 'Book DevOps Build Call', href: '/contact?devops=full' },
      featured: true,
    },
    {
      name: 'DevOps Build + Managed Ops',
      duration: '6–8 week build + ongoing',
      priceFrom: '$45,000 + $5,000/mo',
      whatsIncluded: [
        'Everything in Full DevOps Build',
        'Ongoing pipeline monitoring and maintenance',
        'Monthly pipeline reviews and optimization',
        'Build agent management and updates',
        'Security scanning updates and remediation',
        'Direct Slack/Teams channel with DevOps engineers',
      ],
      suitableFor: 'Teams that want CI/CD operated for them while they focus on shipping features',
      primaryCta: { label: 'Book Managed Ops Call', href: '/contact?devops=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Need more than pipelines? Cloud Infrastructure covers your full cloud environment — IaC, networking, monitoring, and disaster recovery alongside your CI/CD.',
      href: '/services/cloud-infrastructure',
      icon: 'Server',
      pageType: 'service',
    },
    {
      title: 'Platform Engineering',
      description:
        'CI/CD in place? A developer platform gives your teams self-service provisioning, golden paths, and standardized toolchains on top of your pipelines.',
      href: '/services/platform-engineering',
      icon: 'Layers',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'CI/CD shipping fast but security still manual? We bake SAST, DAST, IaC policy checks, and secret scanning into the pipeline — so every release ships with controls your auditor can verify.',
      href: '/services/security-compliance',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Do you work with Azure DevOps, GitHub Actions, or both?',
      answer:
        'Both, and we also work with GitLab CI. Most engagements use Azure DevOps or GitHub Actions because those are where the majority of mid-market teams already have their repositories and project management. The pipeline architecture phase determines which platform fits your existing workflows, team skills, and organizational requirements. We do not push a preferred tool — we work with what makes sense for your team.',
    },
    {
      question: 'What if we already have pipelines that kind of work?',
      answer:
        'That is exactly what the Pipeline Quick Fix engagement is for. We assess your current pipelines, identify the fragile points and gaps, and produce a prioritized remediation roadmap. Quick wins get implemented within the engagement. Many teams have CI that runs tests but no CD, or deployment scripts that work but have no rollback, gating, or observability. We harden what exists before recommending anything new.',
    },
    {
      question: 'Will our team be able to maintain the pipelines after you leave?',
      answer:
        'That is the entire design goal. Every pipeline is documented, every deployment has a runbook, and your team completes structured onboarding before handoff. We build with the tools your team already knows or can reasonably learn — not exotic toolchains that require a specialist to operate. If your team cannot confidently operate the pipelines on day one, handoff is not complete.',
    },
    {
      question: 'How do you handle secrets and environment configuration?',
      answer:
        'Secrets live in Azure Key Vault or a comparable secrets manager — never in pipeline definitions, environment variables visible in logs, or configuration files committed to source control. Each environment has isolated configuration. Pipelines authenticate via managed identities or service connections with scoped permissions, following least-privilege principles.',
    },
    {
      question: 'Can you set up pipelines for a monorepo or multiple services?',
      answer:
        'Yes. Monorepo pipelines use path-based triggers so each service builds independently when its code changes, without triggering unrelated builds. Multi-service architectures get per-service pipelines with shared pipeline templates for consistency. The architecture phase maps your repository structure to a pipeline topology that scales as you add services.',
    },
    {
      question: 'What does zero-downtime deployment actually mean?',
      answer:
        'It means users experience no interruption during a deployment. We implement this through blue-green deployments (two identical environments, traffic switches after validation), canary releases (gradual traffic shift to the new version), or rolling updates (container-level replacement with health checks). The right strategy depends on your application architecture and risk tolerance — the pipeline architecture phase determines which approach fits.',
    },
  ],

  cta: {
    title: 'Ready to ship faster without the deployment anxiety?',
    description:
      'Book a 30-minute call. We will discuss your current pipeline state, what is slowing you down, and whether a quick fix or full build engagement fits.',
    primaryCta: { label: 'Book DevOps call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline blueprint', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices. Confirm with user before publishing.',
    'engagementModels[0].duration — "2–3 weeks" for Pipeline Quick Fix. Confirm achievability.',
    'engagementModels[0].whatsIncluded — "up to 30 hours" quick-win scope. Confirm.',
    'processSteps durations — week ranges are illustrative. Confirm actual delivery cadence.',
    'engagementModels[2].priceFrom — "$5,000/mo" managed ops pricing. Confirm pricing model.',
  ],
};

export default devops;
