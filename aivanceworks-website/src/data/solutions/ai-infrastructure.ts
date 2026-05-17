import type { SolutionPageData } from '@/types/pages';

// Archetype B (Technical) adapted for an "AI Industry Solution" page —
//   a technical infrastructure platform sold to a technical buyer. Composition
//   borrows the regulated-precedent rhythm (hero → metrics → features →
//   imageFeatures → signature → benefits → process → relatedPages → faq →
//   cta) but drops compliance sections, since this buyer answers to engineering
//   leadership and budget owners, not regulators.
//
// Buyer: VP of Engineering / Head of AI Platform / Director of ML Platform
//   Engineering / CTO at US enterprises scaling AI workloads — companies
//   building AI products, embedding AI into existing products, or moving from
//   AI experiments into AI in production.
//
// Buyer mindset: "Our AI ambitions are running ahead of our infrastructure.
//   We need GPU compute, data, networking, autoscaling, and cost guardrails
//   set up properly — not twelve months of cloud bills hemorrhaging while we
//   figure it out."
//
// Top 3 buyer questions:
//   1. "Can you architect AI infrastructure that scales for training AND
//       inference without locking us into one hyperscaler, blowing our GPU
//       budget, or skipping cost guardrails?"
//   2. "How do you handle data placement, multi-region availability, and the
//       operational complexity of AI workloads — observability, autoscaling,
//       networking — in production?"
//   3. "How do we keep AI infrastructure under control — predictable cost,
//       predictable latency, predictable rollback — as model versions and
//       workloads evolve?"
//
// Key trust issue: Untamed GPU spend, brittle production AI that breaks at
//   scale, and AI platforms that take twelve months to build and still feel
//   half-finished. The reverse risk: infrastructure built without portability
//   that locks the company into one cloud forever.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Cloud-provider selection,
//     workload classification, data residency, and operational ownership are
//     owned by the customer's engineering and leadership teams.
//   - No claims of partnerships, certifications, or special status with any
//     hyperscaler or AI vendor.
//   - No fixed durations, no fixed costs, no fabricated savings percentages.
//   - No specific uptime, latency, or cost-reduction promises on the page.
//   - Hyperscaler names (AWS, Azure, GCP) are retained only where the buyer
//     needs cloud-aware framing; framed as design awareness, never as a
//     partnership.
//   - No "complex integrations" panel — per user direction, integration
//     capability is described in feature prose, not in a vendor chip grid.
//
// Signature: AiInfrastructureStack — hierarchical / architectural visualization
//   (§8.3 pattern 2) — four tiers of an AI infrastructure stack (Workloads →
//   Compute & Orchestration → Data & Memory → Network/Identity/Cost/
//   Observability foundation), with left/right engineering annotations and a
//   workload-anchor caption beneath. Argument: "AI infrastructure is a stack
//   of decisions — get them right once, scale on them forever."
//
// Composition follows the AI Pharma precedent at the rhythm level (one
// signature in the middle, image features before signature, related pages
// before FAQ), minus the compliance sections:
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   imageFeatures (light) → signature (dark) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from Archetype B recipe:
//   - No EngagementModels — solution pages do not expose engagement tiers.
//   - No CaseStudySpotlight — greenfield; no verified engagement yet.
//   - No TechStackBlock — technology depth is woven into the signature and
//     feature prose; a chip grid was judged not to earn its place for a
//     platform-engineering buyer who already knows the names.

const aiInfrastructure: SolutionPageData = {
  slug: 'ai-infrastructure',
  title: 'C10 AI Infrastructure',
  shortDescription:
    'Custom AI infrastructure platforms — GPU compute, data fabric, orchestration, networking, and cost guardrails — engineered for training, fine-tuning, inference, and agentic workloads. Built for portability, observability, and predictable spend.',

  metaTitle:
    'Custom AI Infrastructure Development | GPU Compute, Data Fabric & Orchestration',
  metaDescription:
    'AI infrastructure development for US enterprises scaling AI workloads. Custom-engineered platforms for training, inference, fine-tuning, and agentic AI — GPU compute, data fabric, orchestration, observability, and cost guardrails designed in from day one.',
  keywords: [
    'AI infrastructure development',
    'custom AI platform engineering',
    'GPU compute platform',
    'AI training infrastructure',
    'AI inference platform',
    'ML platform engineering',
    'AI data fabric',
    'AI workload orchestration',
    'enterprise AI infrastructure',
    'AI cost optimization platform',
    'multi-region AI infrastructure',
    'AI observability platform',
  ],
  canonicalPath: '/solutions/ai-infrastructure',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'C10 AI Infrastructure', href: '/solutions/ai-infrastructure' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'signature',
    'benefitsGrid',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'ai-industry',
  signatureComponent: 'AiInfrastructureStack',

  hero: {
    badge: 'AI Industry Solutions',
    headline:
      'AI infrastructure built for the workload you actually have.',
    subhead:
      'Custom-engineered AI platforms for training, fine-tuning, inference, and agentic workloads — designed for GPU efficiency, multi-region availability, observability across every tier, and the cost guardrails that keep AI budgets predictable as your roadmap scales.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the infrastructure stack', href: '#signature' },
    heroImage: {
      src: '/images/solutions/ai-infrastructure/hero.jpg',
      alt: 'Modern data center with rows of illuminated server racks supporting high-performance compute workloads',
    },
    metrics: [
      {
        value: 'Workload-aware',
        label: 'Engineered for training, inference, and agentic AI',
        description:
          'Compute, scheduling, and data tiers shaped to fit the actual workloads your AI team is running — not a one-size-fits-all reference architecture.',
      },
      {
        value: 'Cost-aware',
        label: 'Guardrails, budgets, and chargeback by design',
        description:
          'Quotas, budget alerts, and per-workload chargeback are platform features from day one — so finance, platform, and AI leads read the same spend story.',
      },
      {
        value: 'Portable',
        label: 'Designed for cloud and region portability',
        description:
          'Infrastructure-as-code abstractions and provider-aware patterns so a workload can move across regions or providers without rewriting the platform.',
      },
    ],
  },

  // Audience test (§9.5): a VP of Engineering / Head of AI Platform reading
  // these four values in 8 seconds wants to know "will this scale my AI
  // workloads without burning my budget?" Workload fit, cost discipline,
  // observability, and resilience lead. Compliance signals are intentionally
  // not headlined — this buyer is not the auditor.
  metricsStrip: [
    {
      value: 'Workload-aware',
      label: 'Shaped to training, inference, and agentic AI',
      description:
        'GPU and CPU pools, scheduling policies, and data tiers configured to the workloads your AI team is actually running — production inference, batch training, fine-tuning, and agentic pipelines.',
    },
    {
      value: 'Cost-aware',
      label: 'Guardrails, budgets, and chargeback baked in',
      description:
        'Quotas, budget alerts, spot / reserved / on-demand mixing, and per-workload chargeback designed as platform features — so AI infrastructure does not become a quarterly cost-cleanup project.',
    },
    {
      value: 'Observable',
      label: 'One telemetry layer across compute, data, model, and spend',
      description:
        'Utilization, throughput, model performance, data freshness, and cost surfaced through a single observability layer — so platform, data, and AI teams act on the same numbers.',
    },
    {
      value: 'Portable',
      label: 'Built to move across regions and providers',
      description:
        'Infrastructure described as code with provider-aware abstractions and standard interfaces — so a workload, region, or provider change does not force a platform rewrite.',
    },
  ],

  features: [
    {
      icon: 'Cpu',
      title: 'GPU & Accelerated Compute Platforms',
      description:
        'Custom-engineered GPU and CPU pools with workload affinity, queue isolation, and right-sized capacity — so training, fine-tuning, and inference workloads share infrastructure without starving each other.',
    },
    {
      icon: 'Workflow',
      title: 'AI Workload Orchestration',
      description:
        'Container orchestration, autoscaling, and job scheduling tuned to AI workload shapes — long-running training jobs, bursty inference traffic, and step-by-step agentic pipelines coexist on one platform.',
    },
    {
      icon: 'Database',
      title: 'AI Data Fabric',
      description:
        'Object, block, and lakehouse storage tied to vector stores, feature stores, and dataset versioning — so your AI workloads read from data with documented lineage, not a tangle of one-off pipelines.',
    },
    {
      icon: 'Network',
      title: 'Network & Region Architecture',
      description:
        'Private routing, zone isolation, and multi-region patterns engineered into the platform — supporting low-latency inference, data residency choices, and failover paths your platform team can reason about.',
    },
    {
      icon: 'TrendingDown',
      title: 'Cost Guardrails & FinOps Discipline',
      description:
        'Budgets, quotas, anomaly alerts, and per-workload chargeback designed in from day one — so a runaway training job or misconfigured inference deployment surfaces before the invoice does.',
    },
    {
      icon: 'Gauge',
      title: 'Observability & Platform Reliability',
      description:
        'Compute utilization, model performance, data freshness, and spend exposed through one telemetry layer — with explicit failure domains, retry semantics, and recovery paths your on-call engineers can rehearse.',
    },
  ],

  benefits: [
    {
      icon: 'Rocket',
      title: 'Faster Path From AI Prototype to Production',
      description:
        'A platform designed for the full lifecycle — training, fine-tuning, evaluation, deployment, and inference — so your AI team spends less time wiring infrastructure and more time shipping features users feel.',
    },
    {
      icon: 'TrendingDown',
      title: 'Predictable AI Spend, Not Quarterly Surprises',
      description:
        'Cost guardrails, budgets, and per-workload chargeback are platform features from day one. Finance, platform, and AI leadership read the same dashboard, so spend conversations happen before the bill, not after.',
    },
    {
      icon: 'Gauge',
      title: 'One Telemetry Layer Across Compute, Data, Model & Cost',
      description:
        'Utilization, throughput, model performance, data freshness, and spend surfaced through a single observability layer — so platform, data, and AI teams stop debating whose dashboard is correct.',
    },
    {
      icon: 'GitBranch',
      title: 'Portable Infrastructure Across Regions and Providers',
      description:
        'Provider-aware infrastructure-as-code, standard interfaces, and explicit abstractions — so a region move, provider change, or hybrid posture does not force a platform rewrite or a year-long migration.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Resilience Designed, Not Assumed',
      description:
        'Failure domains, retry semantics, queue isolation, and recovery paths are explicit engineering decisions — so a single zone, model, or job failure does not cascade across the platform.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Workload Mapping & Engineering Framing',
      description:
        'We walk your current and planned AI workloads — training, inference, fine-tuning, agentic — inventory your existing data, identity, and networking estate, and frame the engineering and integration shape before scoping the build. Cloud-provider selection and data residency decisions remain with your team.',
      duration: 'Scoped during discovery',
      deliverable:
        'Workload map, current-state cloud and data inventory, cost-driver assessment, prioritized engineering roadmap',
    },
    {
      title: 'Architecture & Engineering Plan',
      description:
        'Design the AI infrastructure architecture — compute pools, orchestration, data fabric, network, identity, observability, and cost guardrails — alongside your platform, security, and finance stakeholders. Trade-offs between cost, latency, portability, and resilience are made explicitly, not by default.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, infrastructure-as-code blueprint, network and identity design, cost-guardrail plan, observability plan',
    },
    {
      title: 'Build & Iterate',
      description:
        'Iterative full-stack development of the platform — compute pools, schedulers, data fabric, observability, and cost-control tooling — with engineering artifacts (test coverage, runbooks, change logs) captured as part of the build. Workload-by-workload demos with your AI and platform engineers keep the platform anchored to real usage.',
      duration: 'Phased per engagement',
      deliverable:
        'Working platform in staging, infrastructure-as-code repository, observability dashboards, cost-guardrail tooling, runbooks',
    },
    {
      title: 'Integration & Handoff to Your Platform Team',
      description:
        'Connect the platform to your existing identity, data, and CI/CD estate via documented interfaces your platform team controls. Run end-to-end load and failure-mode testing, and assemble the engineering documentation set your platform and SRE teams need to operate the platform themselves.',
      duration: 'Phased per engagement',
      deliverable:
        'Integration runbooks, load and failure-mode test reports, security review notes, engineering documentation set',
    },
    {
      title: 'Production Rollout, Hypercare & Lifecycle Operations',
      description:
        'Workload-by-workload rollout so a single AI workload can run on the new platform while existing workloads continue uninterrupted. An initial hypercare period covers monitoring, scaling response, cost-anomaly triage, and change-control reviews so the platform stays in a known state as model versions evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, scaling and cost playbooks, change-control runbooks, hypercare support',
    },
  ],

  capabilities: [
    'GPU and CPU pools with workload affinity and queue isolation',
    'Container orchestration and autoscaling tuned to AI workload shapes',
    'Job scheduling for training, fine-tuning, batch, and inference traffic',
    'Object, block, and lakehouse storage with documented data lineage',
    'Vector stores, feature stores, and embedding pipelines',
    'Dataset versioning and reproducibility hooks for training runs',
    'Private network fabric with zone isolation and multi-region patterns',
    'Identity, secrets, and key management with least-privilege defaults',
    'Cost guardrails: budgets, quotas, anomaly alerts, and per-workload chargeback',
    'Spot, reserved, and on-demand capacity mixing for cost-aware compute',
    'Observability for compute utilization, model performance, data freshness, and spend',
    'Infrastructure-as-code abstractions for region and provider portability',
    'CI/CD pipelines for model and platform changes with rollback paths',
    'WCAG 2.1 AA accessibility for any operator and platform-admin interfaces',
  ],

  technologies: [
    'Python (ML / platform tooling)',
    'TypeScript / Node.js',
    '.NET 10 / ASP.NET Core',
    'Kubernetes',
    'Terraform (IaC)',
    'Docker / OCI containers',
    'PostgreSQL / Azure SQL',
    'Object storage (S3-compatible / Azure Blob / GCS)',
    'Open-source vector stores',
    'Prometheus / OpenTelemetry / Grafana',
    'Argo / Kubeflow / Ray (open-source orchestration patterns)',
    'GitHub Actions / Azure DevOps Pipelines',
  ],

  imageFeatures: [
    {
      heading: 'A Platform Your AI Team Can Iterate On',
      description:
        'AI infrastructure designed so your data scientists, ML engineers, and platform engineers can ship model and pipeline changes through the same pipelines, dashboards, and guardrails — without bespoke tooling for every workload.',
      image: {
        src: '/images/solutions/ai-infrastructure/feature-1.jpg',
        alt: 'Engineering team reviewing infrastructure architecture and observability dashboards on multiple monitors',
      },
    },
    {
      heading: 'Compute, Data & Network — Engineered as One Stack',
      description:
        'Compute pools, data fabric, network fabric, and observability designed as one platform — so a workload, region, or provider change is a configuration decision, not a re-architecture.',
      image: {
        src: '/images/solutions/ai-infrastructure/feature-2.jpg',
        alt: 'Cloud infrastructure engineer working in a modern operations center surrounded by network and compute telemetry displays',
      },
    },
  ],

  relatedPages: [
    {
      title: 'C10 Cloud Computing',
      description:
        'AI infrastructure rides on cloud foundations. Our C10 Cloud Computing engagement frames the cloud architecture, landing zones, and provider posture your AI platform will inherit — so the AI tier sits on cloud decisions you can stand behind.',
      href: '/services/c10-cloud-computing',
      icon: 'Cloud',
      pageType: 'service',
    },
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'AI workloads run on the cloud operating model underneath them. Our Cloud Infrastructure & Operations engagement designs the landing zones, IaC patterns, and day-2 operational model that GPU clusters, vector stores, and inference services depend on — so the AI platform inherits cloud foundations you already trust.',
      href: '/services/cloud-infrastructure',
      icon: 'Cloud',
      pageType: 'service',
    },
    {
      title: 'Generative AI',
      description:
        'Once the infrastructure is in place, the next question is what AI workloads run on it. Our Generative AI practice ships RAG, agentic, and LLM-powered applications on top of platforms engineered exactly like this one.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'What does "AI infrastructure" actually include in your engagements?',
      answer:
        'Compute (GPU and CPU pools with scheduling and autoscaling), data fabric (object, block, lakehouse, vector and feature stores with dataset versioning), network (private routing, zone isolation, multi-region patterns), identity (secrets, keys, least-privilege defaults), observability (telemetry across compute, data, model, and spend), and cost guardrails (budgets, quotas, chargeback). Each tier is engineered to fit the AI workloads your team actually runs — training, fine-tuning, inference, agentic — rather than dropping a reference architecture and walking away.',
    },
    {
      question:
        'Do you lock us into a single cloud provider?',
      answer:
        'No. We design the platform with provider-aware abstractions and infrastructure described as code, so a region move, provider change, or hybrid posture is a configuration decision rather than a platform rewrite. Cloud-provider selection itself remains with your engineering and leadership teams — we surface the trade-offs (cost, latency, portability, available services) and build to the decision you make. We do not represent partnerships or special status with any cloud vendor.',
    },
    {
      question:
        'How do you keep AI infrastructure costs under control?',
      answer:
        'Cost guardrails are platform features, not a quarterly cleanup. We design budgets, quotas, anomaly detection, spot / reserved / on-demand capacity mixing, and per-workload chargeback into the platform from day one — so finance, platform, and AI leadership read the same spend story. Specific cost outcomes depend on workload mix, model choices, and capacity decisions your team owns; we engineer the guardrails so those decisions happen in daylight.',
    },
    {
      question:
        'How does this work alongside our existing cloud, data, and identity estate?',
      answer:
        'The platform is designed to coexist with the cloud accounts, data warehouses, identity providers, and CI/CD pipelines you already run, via documented interfaces your platform team controls. We do not require a rip-and-replace of your existing estate; we engineer the AI infrastructure to sit alongside it and integrate through standard interfaces. We do not claim partnerships, certifications, or pre-built integrations with any third-party vendor.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by program and are defined during discovery — we do not quote fixed durations or fixed costs on a public page. Discovery is where we map your AI workloads, inventory your cloud and data estate, identify cost drivers, and frame the engineering shape before any production-bound code is written. After discovery, the build is typically phased so the highest-priority workload runs on the new platform first and your team can review it before later workloads land.',
    },
    {
      question:
        'How do you handle resilience, failover, and disaster recovery for AI workloads?',
      answer:
        'Failure domains, retry semantics, queue isolation, and recovery paths are explicit engineering decisions made during architecture, not assumptions made after a production incident. Multi-region patterns, zone-aware scheduling, and rollback hooks for both model and platform changes are designed in where the workload justifies them. Specific resilience targets (RTO, RPO, regional availability) are agreed with your team during discovery based on the workloads in scope; we engineer the platform to meet those targets rather than publishing them as defaults.',
    },
  ],

  cta: {
    title: 'Scaling AI workloads ahead of your infrastructure?',
    description:
      'Book a free 30-minute discovery call. We will review your current and planned AI workloads, talk through the compute, data, and cost-guardrail shape, and outline a realistic engineering scope. Cloud-provider and architectural decisions remain with your team.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the infrastructure stack', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing for a greenfield engagement. No fabricated outcomes, no fixed durations, no fixed costs, no specific cost-reduction or uptime promises. Recommended for legal review before publish to confirm liability framing for AI workloads.',
    'Hyperscaler names and open-source projects (Kubernetes, Terraform, Prometheus, OpenTelemetry, Grafana, Argo, Kubeflow, Ray, S3-compatible, Azure Blob, GCS, GitHub Actions, Azure DevOps) appear in the technologies list as commonly-used industry tooling. No partnership, endorsement, or certification is claimed for any of these. Confirm pre-publish.',
    'No vendor names retained for AI-specific platforms (no NVIDIA AI Enterprise, no Databricks, no Snowflake, no specific vector-DB or feature-store products). Verify by grep before publish.',
    'imageFeatures and hero images use placeholder paths; source Unsplash photos per §11.5 (industry-appropriate, human faces preferred, no clichés) before publish.',
  ],
};

export default aiInfrastructure;
