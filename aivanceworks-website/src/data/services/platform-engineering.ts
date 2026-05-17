import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service.
//
// Buyer: VP Engineering / Director of Platform Engineering / Head of
//   Developer Experience at US mid-market to enterprise companies
//   (200–5,000 engineers). Measured on engineering velocity (DORA-style
//   metrics — lead time, deployment frequency, MTTR), platform adoption
//   (share of services scaffolded from golden paths), engineer experience
//   (time-to-first-commit for new hires, on-call toil), and infrastructure
//   consistency across teams.
//
// Buyer mindset: "Every team is reinventing CI/CD, infra patterns, and dev
//   environments. Toil is killing velocity. I want golden paths, a
//   developer portal, and self-service infrastructure — without forking my
//   SRE team into ten directions or locking us into one vendor stack."
//
// Top 3 buyer questions:
//   1. "Can you build a platform on standards we already use — Kubernetes,
//       Terraform, GitOps — without locking us into a closed vendor stack?"
//   2. "How do you make a developer platform something engineers actually
//       adopt, not another tile graveyard nobody opens?"
//   3. "How do you hand the platform over so our platform / SRE team can
//       operate and evolve it once your engagement ends?"
//
// Key trust issue: previous platform projects that turned into long
//   consulting tails (the team became dependent on the vendor), Backstage
//   installs nobody inside maintained, and IDPs that competed with — rather
//   than rode on — the CI/CD investment the engineering org already made.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Tool selection, cloud-provider
//     choice, and operational ownership remain with the customer's
//     engineering and leadership teams.
//   - No claims of partnerships, certifications, or special status with
//     Backstage, HashiCorp, Spotify, any hyperscaler, or any commercial IDP
//     vendor.
//   - No fixed durations, fixed costs, or fabricated outcome percentages.
//   - No specific velocity, adoption, or cost-reduction promises on the page.
//   - Tool names appear as commonly-used industry tooling, not as
//     endorsements. No integration chip grid — toolchain awareness is woven
//     into the feature and capability prose.
//
// Signature: PlatformEngineeringControlPlane — hierarchical / architectural
//   visualization (§8.3 pattern 2). Four tiers — Developer Experience,
//   Golden Paths, Self-Service Infrastructure, and Cloud / Identity / Cost
//   / Ownership foundation — with left/right engineering annotations and
//   an adoption-anchor caption beneath. Argument: "A developer platform is
//   a stack of decisions — get adoption, portability, and handoff right at
//   each tier, and engineering velocity follows."
//
// Composition (Archetype B, 9 sections — within 8–10 target density):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   signature (dark) → techStackBlock (light) → processTimeline (warm) →
//   relatedPages (light) → faq (warm) → ctaBlock (accent)
//
// Deviations from Archetype B default recipe:
//   - BenefitsGrid dropped — technical buyer prefers capability and
//     toolchain depth over marketing-ROI framing without measurable
//     evidence. Same rationale as devops.ts and data-engineering.ts.
//   - EngagementModels dropped — engagement shape, duration, and price are
//     defined during discovery. Publishing fixed tiers would introduce
//     liability and over-promise on a greenfield engagement.
//   - TechStackBlock placed AFTER signature so the buyer sees the layered
//     architecture first, then validates the toolchain choices (process-
//     before-proof ordering for the risk-averse platform buyer).
//
// Imagery: SVG hero illustration per §11.5 service-page imagery rule. The
//   abstract platform-stack illustration communicates "layered, opinionated,
//   self-service" — concepts no stock photo can carry as cleanly. No mid-page
//   ImageFeatures — service-template does not render them and the constitution
//   reserves photography for solutions pages.

const platformEngineering: ServicePageData = {
  slug: 'platform-engineering',
  title: 'Platform Engineering',
  shortDescription:
    'Internal developer platforms, golden paths, and self-service infrastructure — engineered for engineer adoption, portability, and clean handoff to your platform team.',

  metaTitle:
    'Platform Engineering Services | Internal Developer Platforms & Golden Paths',
  metaDescription:
    'Platform engineering consulting for US enterprises: internal developer platforms (IDPs), developer portals, golden paths, and self-service infrastructure. Built on open standards, designed for adoption, and handed off to your platform team.',
  keywords: [
    'platform engineering services',
    'internal developer platform',
    'IDP consulting',
    'developer portal implementation',
    'Backstage consulting',
    'golden paths engineering',
    'self-service infrastructure',
    'developer experience consulting',
    'paved roads engineering',
    'GitOps platform engineering',
    'Kubernetes platform engineering',
    'enterprise platform engineering',
  ],
  canonicalPath: '/services/platform-engineering',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Platform Engineering', href: '/services/platform-engineering' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'techStackBlock',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'infrastructure',
  signatureComponent: 'PlatformEngineeringControlPlane',
  heroIllustrationComponent: 'PlatformEngineeringHeroIllustration',

  hero: {
    badge: 'Infrastructure Management',
    headline: 'Developer platforms your engineers actually use.',
    subhead:
      'Internal developer platforms, opinionated golden paths, and self-service infrastructure — built on open standards your team already trusts, designed for adoption from day one, and handed off so your platform team owns the next decade.',
    primaryCta: { label: 'Book Platform Engineering Call', href: '/contact' },
    secondaryCta: { label: 'See the platform stack', href: '#signature' },
  },

  // Audience test: a VP Engineering / Head of Platform scanning the page in
  // 8 seconds wants to know "is this a real engineering platform or another
  // shelfware portal?" Four concerns lead: adoption, portability, observable
  // toil, and handoff. Every metric is capability-framed — no fabricated
  // outcomes, no fixed velocity improvements, no vendor endorsements.
  metricsStrip: [
    {
      value: 'Adoption-First',
      label: 'Engineered for engineers to choose, not be forced',
      description:
        'Golden paths designed to be the easiest option a developer reaches for — so adoption grows from convenience, not from policy.',
    },
    {
      value: 'Open-Standards',
      label: 'Built on tooling you can extend, audit, and replace',
      description:
        'Infrastructure-as-code, GitOps, and open developer-portal patterns — so the platform stays a system you operate, not a black box.',
    },
    {
      value: 'Toil-Aware',
      label: 'On-call toil and lead time surfaced as metrics',
      description:
        'Lead time, deployment frequency, scaffolded-service share, and on-call interrupt rate exposed alongside the platform — so investment is steered by data, not anecdote.',
    },
    {
      value: 'Handoff-Ready',
      label: 'Documented, governed, owned by your team',
      description:
        'Runbooks, contribution guides, and ownership boundaries are part of the deliverable — so your platform engineers operate and evolve the platform once we step out.',
    },
  ],

  features: [
    {
      icon: 'LayoutGrid',
      title: 'Developer Portal & Service Catalog',
      description:
        'A developer portal built on open patterns (commonly Backstage or equivalent) with a service catalog, ownership metadata, scaffolding templates, and searchable docs — so engineers find what they need without asking three Slack channels.',
    },
    {
      icon: 'Workflow',
      title: 'Golden Paths & Paved Roads',
      description:
        'Opinionated, scaffolded paths for the most common engineering jobs — new service, new pipeline, new environment — with logging, metrics, security scanning, and observability defaults wired in at scaffold time.',
    },
    {
      icon: 'Cloud',
      title: 'Self-Service Infrastructure',
      description:
        'Infrastructure-as-code modules behind a developer-facing interface — environments, clusters, databases, queues, and storage provisioned through pull requests instead of tickets, with policy and cost guardrails enforced in code.',
    },
    {
      icon: 'GitBranch',
      title: 'Standardized CI/CD & GitOps',
      description:
        'Pipeline templates, reusable workflows, and GitOps-driven environment promotion — so every team ships through the same gated path with the same security, policy, and rollback semantics, instead of bespoke pipelines per team.',
    },
    {
      icon: 'Gauge',
      title: 'Platform Observability & DORA Metrics',
      description:
        'Lead time, deployment frequency, change-failure rate, and MTTR surfaced alongside platform adoption, on-call toil, and pipeline reliability — so the platform team manages the platform with the same rigor product teams manage their services.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Security, Policy & Compliance as Code',
      description:
        'Policy-as-code, secret management, RBAC, and security scanning wired into the golden paths — so security controls travel with every new service instead of being bolted on after a release goes hot.',
    },
  ],

  capabilities: [
    'Internal developer platform (IDP) architecture and reference design',
    'Developer portal implementation with service catalog and ownership metadata',
    'Software templates and scaffolding for new services, libraries, and pipelines',
    'Golden path design for the highest-traffic engineering workflows',
    'Self-service infrastructure modules behind developer-facing interfaces',
    'Standardized CI/CD pipeline templates and reusable workflows',
    'GitOps-driven environment promotion, rollback, and drift detection',
    'Policy-as-code enforcement (network, identity, cost, security)',
    'Secret, certificate, and configuration delivery integrated with golden paths',
    'Observability defaults baked into scaffolds — logs, metrics, traces',
    'DORA metrics, adoption metrics, and on-call toil dashboards',
    'Contribution model, runbooks, and ownership boundaries for the platform team',
    'WCAG 2.1 AA accessibility for any developer-facing portal interfaces',
  ],

  technologies: [
    'TypeScript / Node.js',
    '.NET 10 / ASP.NET Core',
    'Python (platform tooling)',
    'Kubernetes',
    'Terraform (IaC)',
    'Docker / OCI containers',
    'Helm',
    'Backstage (open-source developer portal)',
    'Argo CD / Flux (GitOps)',
    'GitHub Actions / Azure DevOps Pipelines',
    'OpenTelemetry / Prometheus / Grafana',
    'Open Policy Agent (OPA)',
  ],

  processSteps: [
    {
      title: 'Discovery, Engineering Audit & Adoption Framing',
      description:
        'We map the current engineering toolchain, inventory bespoke CI/CD and infrastructure patterns, and shadow two or three teams to understand the highest-toil developer workflows. The output is a prioritized engineering-toil map and a platform roadmap framed around the workflows that earn the most adoption first.',
      duration: 'Scoped during discovery',
      deliverable:
        'Engineering toolchain inventory, developer-toil map, prioritized platform roadmap, success-metric definition (adoption, lead time, toil)',
    },
    {
      title: 'Architecture & Engineering Plan',
      description:
        'Design the platform architecture — developer portal, scaffolding system, golden-path templates, self-service infrastructure modules, observability defaults, and ownership model — alongside your platform, security, and SRE stakeholders. Trade-offs between portability, vendor reliance, and operational simplicity are made explicitly.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, developer-portal blueprint, golden-path catalog plan, IaC module specification, observability and ownership plan',
    },
    {
      title: 'Pilot Build with One Engineering Team',
      description:
        'Build the first golden path end-to-end with one volunteer engineering team — developer portal, scaffolding, CI/CD template, infrastructure provisioning, and observability defaults. The pilot is the proof point: a real team shipping real services through the platform, with measured adoption and toil signals before any org-wide rollout.',
      duration: 'Phased per engagement',
      deliverable:
        'Working platform pilot, first golden path in production use, pilot adoption and toil metrics, refined platform conventions',
    },
    {
      title: 'Org-Wide Rollout & Path Expansion',
      description:
        'Expand golden paths beyond the pilot — additional service templates, environment modules, security and compliance paths, and team-by-team onboarding. We work alongside your engineering leadership on the adoption motion so the platform earns trust team-by-team instead of being mandated top-down.',
      duration: 'Phased per engagement',
      deliverable:
        'Expanded golden-path catalog, scaffolded services across multiple teams, adoption and toil dashboards, onboarding playbooks',
    },
    {
      title: 'Handoff to Your Platform Team & Lifecycle Operations',
      description:
        'Transfer the platform to your in-house platform / SRE team via documented runbooks, contribution guides, golden-path ownership, and a defined maintenance cadence. An initial hypercare period covers incident response, golden-path evolution, and the first cycle of platform metrics review with your engineering leadership.',
      duration: 'Defined per engagement',
      deliverable:
        'Documented handoff package, ownership boundaries, contribution guides, platform metrics review cadence, hypercare support',
    },
  ],

  relatedPages: [
    {
      title: 'DevOps & CI/CD Automation',
      description:
        'A developer platform rides on solid CI/CD foundations. Our DevOps engagement designs the pipelines, gating, and deployment automation your golden paths will scaffold onto — so the platform inherits a delivery pipeline you already trust.',
      href: '/services/devops',
      icon: 'GitBranch',
      pageType: 'service',
    },
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Platform engineering only earns adoption when the cloud underneath is reliable. Our Cloud Infrastructure engagement frames the landing zones, IaC patterns, and operational model your developer platform will provision on top of.',
      href: '/services/cloud-infrastructure',
      icon: 'Cloud',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'A developer platform is only as trustworthy as the guardrails baked into it. Our Security & Compliance engagement wires identity, secrets, policy-as-code, and audit controls into the golden paths — so self-service speed and a defensible security posture come in the same release.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'What does "platform engineering" actually mean in your engagements?',
      answer:
        'We design and build internal developer platforms (IDPs) — a developer portal, scaffolding and golden-path templates, self-service infrastructure modules, standardized CI/CD, and the observability and ownership model around all of it. The product is an engineering platform your developers self-serve from and your platform team owns. We do not sell a packaged commercial IDP — every engagement is custom-engineered to fit your existing toolchain, cloud estate, and engineering culture.',
    },
    {
      question: 'Do you lock us into Backstage, or any other developer-portal product?',
      answer:
        'No. The developer portal is one tier of the platform, and we build it with open-source patterns (Backstage is a common starting point, but not the only one). The tool choice is part of discovery and depends on your existing investment, contribution model, and operational comfort. We do not represent partnerships or special status with Backstage, Spotify, HashiCorp, or any commercial IDP vendor — and we design every tier so the underlying tool can be replaced without a platform rewrite.',
    },
    {
      question: 'How do you make sure engineers actually adopt the platform?',
      answer:
        'Adoption is a design problem, not a mandate problem. We start with two or three real engineering teams, shadow their highest-toil workflows, and build the first golden path so it is genuinely the easiest option for them — not the politically correct one. The pilot ships real services through the platform before any org-wide rollout. We surface adoption and on-call toil as metrics from day one so the platform team can steer expansion by evidence, and we work with your engineering leadership on the adoption motion rather than parachuting a portal in and walking away.',
    },
    {
      question: 'How does the platform integrate with our existing CI/CD, cloud, and identity?',
      answer:
        'The platform is designed to ride on the CI/CD, cloud accounts, identity provider, and observability stack you already operate — via documented interfaces your platform team controls. We do not require a rip-and-replace of your existing investments; the developer portal, golden paths, and self-service modules wrap the systems you already trust. We do not claim partnerships, certifications, or pre-built integrations with any third-party vendor — every integration is engineered as a documented capability of the platform.',
    },
    {
      question: 'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement shape, timeline, and investment are defined during discovery — we do not quote fixed durations or fixed costs on a public page. Discovery is where we map your engineering toolchain, inventory bespoke patterns, shadow real teams, and frame the platform roadmap around adoption-first workflows. After discovery, build is typically phased: pilot with one team, then expand golden paths and onboard additional teams, then formally hand the platform over to your in-house platform team. The handoff is part of the deliverable, not an afterthought.',
    },
    {
      question: 'How do you avoid a long consulting tail where we stay dependent on you?',
      answer:
        'Handoff is engineered in from day one. Runbooks, contribution guides, ownership boundaries, and a documented maintenance cadence are part of the deliverable — not a separate workstream at the end. Your platform engineers participate in the build itself (pairing on scaffolds, reviewing IaC modules, contributing golden paths) so the platform feels like theirs by the time we step out. An initial hypercare period covers the first cycle of platform metrics and golden-path evolution, but the goal is explicit: your team operates and evolves the platform after the engagement ends.',
    },
  ],

  cta: {
    title: 'Engineering teams reinventing the same wheel?',
    description:
      'Book a free 30-minute Platform Engineering call. We will walk through your current engineering toolchain, the workflows that are draining the most time, and a realistic scope for a developer platform your team will actually adopt — and own.',
    primaryCta: { label: 'Book Platform Engineering Call', href: '/contact' },
    secondaryCta: { label: 'See the platform stack', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing for a greenfield engagement. No fabricated outcomes, no fixed durations, no fixed costs, and no specific velocity, adoption, or cost-reduction promises. Recommended for legal review before publish to confirm liability framing.',
    'Tool names (Backstage, Argo CD, Flux, HashiCorp / Terraform, Helm, Kubernetes, OpenTelemetry, Prometheus, Grafana, Open Policy Agent, GitHub Actions, Azure DevOps) appear in technologies and feature prose as commonly-used industry tooling. No partnership, endorsement, or certification is claimed for any of these. Confirm pre-publish.',
    'No integration chip grid included by design — toolchain awareness is woven into feature prose to avoid implying commercial relationships with vendors. Verify by grep before publish.',
  ],
};

export default platformEngineering;
