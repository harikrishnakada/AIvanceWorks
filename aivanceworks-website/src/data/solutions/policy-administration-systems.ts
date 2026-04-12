import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Insurance, core system-of-record)
// Buyer: CIO / VP IT Transformation / COO at a mid-market P&C or specialty
//   insurance carrier. Secondary: Chief Underwriting Officer (product config),
//   Chief Actuary (rating / filings), VP Claims (lifecycle hand-offs), Head of
//   Reinsurance (cession ledger).
// Measured on: platform resilience, speed-to-market for new products and states,
//   total cost of ownership, audit readiness, disaster recovery, and the
//   successful retirement of legacy core systems without disrupting in-force
//   business, billing, or claims.
//
// Top 3 buyer questions:
//   1. "Can you replace or extend our legacy policy admin without breaking
//      in-force business, billing, claims feeds, and reinsurance ledgers?"
//   2. "How are product configuration, rating, and state filings handled
//      without a six-month code release for every rate revision?"
//   3. "Is the platform auditable, regulator-ready, and DR-ready from day
//      one — across NAIC, state DOI, SOC 2, and our own board's risk framework?"
//
// Key trust issue: Prior PAS modernization programs that ran 18 months over,
//   cost multiples of the original estimate, and left the carrier's book-of-
//   business stranded between two systems. Vendor demos that were not
//   production-proven. "Rip and replace" is a career-limiting move — the buyer
//   needs to see a phased, strangler-style replacement path that keeps the
//   lights on while the core is modernized.
//
// Signature: PolicyLifecycleControlPlane — hierarchical / architectural
//   visualization (§8.3 #2). Three bands: Product factory (top) → Policy
//   lifecycle engine (middle, the centered core card with Quote · Bind · Issue
//   · Endorse · Renew · Cancel) → Evidence & integration layer (bottom).
//   Argument: "One control plane owns every policy, every state, every line —
//   product changes flow down, evidence flows up."
//
// Composition follows underwriting-software / quoting-software precedent (same
// Archetype C regulated-insurance pattern). Deviations:
//   - No CaseStudySpotlight — greenfield; no verified PAS replacement engagement.
//   - ComplianceSpotlight placed before signature as a trust gate (same as
//     EHR / HMS / Underwriting / Quoting precedent).
//   - ComplianceDeepDive elevated to standalone after signature — PAS buyers
//     live inside the regulatory gate; this is not optional.
//   - ImageFeatures added after FeatureGrid per §11.5 two-track imagery.
//   - No PersonaComparison — single primary buyer type (carrier IT leadership);
//     secondary personas (CUO, actuary, claims) are consumers of capabilities,
//     not separate portal experiences.
//   - relatedPages includes one same-vertical peer solution (Underwriting
//     Software) per §10 v2.1 exception — same CIO/CUO buyer persona evaluates
//     underwriting and policy admin as two halves of the core insurance stack.

const policyAdministrationSystems: SolutionPageData = {
  slug: 'policy-administration-systems',
  title: 'Custom Policy Administration System Development for Carriers & MGAs',

  shortDescription:
    'Custom policy administration systems for insurance carriers and MGAs on Azure — configurable product factory, end-to-end policy lifecycle, rating and filing integration, and a phased path off legacy core systems.',

  metaTitle: 'Policy Administration System Development | Core Insurance PAS Platforms',
  metaDescription:
    'Custom policy administration system development for insurance carriers and MGAs. Product factory, policy lifecycle engine, rating and filing integration, and a phased modernization path off legacy core — architected for NAIC, state DOI, and SOC 2.',
  keywords: [
    'policy administration system development',
    'custom policy administration software',
    'insurance core system modernization',
    'policy admin platform insurance',
    'policy lifecycle management software',
    'insurance product factory',
    'legacy insurance system replacement',
    'Guidewire PolicyCenter alternative',
    'Duck Creek Policy alternative',
    'P&C core system development',
    'carrier core platform',
    'insurance policy management system',
  ],
  canonicalPath: '/solutions/policy-administration-systems',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    {
      label: 'Policy Administration Systems',
      href: '/solutions/policy-administration-systems',
    },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'complianceSpotlight',
    'signature',
    'complianceDeepDive',
    'benefitsGrid',
    'integrationsPanel',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'insurance',
  signatureComponent: 'PolicyLifecycleControlPlane',

  hero: {
    badge: 'Insurance Solutions',
    headline: 'One control plane for every policy. Every state. Every line.',
    subhead:
      'Custom policy administration systems built on Azure — a configurable product factory, an explainable policy lifecycle engine, native rating and SERFF filing integration, and a phased strangler path off your legacy core that keeps in-force business, billing, and claims running the whole way.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the control plane', href: '#signature' },
    heroImage: {
      src: '/images/solutions/policy-administration-systems/hero.jpg',
      alt: 'Insurance technology leader reviewing core platform architecture on a boardroom display',
    },
    metrics: [
      {
        value: 'Configurable',
        label: 'Product factory',
        description: 'Rate decks, forms, coverages — per state and line',
      },
      {
        value: 'Strangler-Path',
        label: 'Legacy replacement',
        description: 'Phased cutover with in-force business protected',
      },
      {
        value: 'Audit-Ready',
        label: 'Regulator-graded by design',
        description: 'NAIC, state DOI, SOC 2, SERFF',
      },
    ],
  },

  // Audience test (§9.5): CIO / VP IT at a mid-market carrier evaluating a PAS
  // replacement needs to see configurability, integration honesty, regulatory
  // posture, and migration safety — without fabricated percentage claims. All
  // four metrics are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'Configurable Product Factory',
      label: 'Rates, Forms, Coverages',
      description:
        'Rate decks, coverage forms, eligibility, and endorsement rules configurable per state and line of business — routine revisions are a filing and configuration exercise, not a six-month code release.',
    },
    {
      value: 'Strangler Migration',
      label: 'Phased Legacy Replacement',
      description:
        'Architected for line-by-line, state-by-state cutover with a policy-event bridge that keeps the legacy core, billing, claims, and reinsurance feeds in sync until each module is safely retired.',
    },
    {
      value: 'Native Rating & Filing',
      label: 'Earnix · Guidewire · SERFF',
      description:
        'Built to connect real-time rating engines (Earnix, Guidewire Rating, Duck Creek Rating) and SERFF filing packages so product, pricing, and filings share one rate-version spine.',
    },
    {
      value: 'Audit-Ready Evidence',
      label: 'Every Policy, Every Decision',
      description:
        'Every policy event — quote, bind, endorsement, renewal, cancellation — produces a traceable audit trail with actor, inputs, rules fired, and rate version, structured for state DOI and internal audit review.',
    },
  ],

  // Audience test: CIO / VP IT thinks in core-system functions, not engineering
  // patterns. Each card maps to a PAS responsibility; vendor names appear in
  // prose where they add credibility ("Guidewire", "Duck Creek", "SERFF").
  features: [
    {
      icon: 'Layers',
      title: 'Product Factory & Coverage Catalog',
      description:
        'Configurable product definitions, coverage forms, rating factors, and eligibility rules organized by line of business and jurisdiction. Your product and actuarial teams model new products and state variants in configuration — not in a release train.',
    },
    {
      icon: 'Workflow',
      title: 'Policy Lifecycle Engine',
      description:
        'Quote, bind, issue, endorse, cancel, reinstate, and renew — one event-driven engine owns every state transition on the policy, with versioned policy objects and deterministic replay for any historical point-in-time view.',
    },
    {
      icon: 'Calculator',
      title: 'Rating & Filing Integration',
      description:
        'Real-time rating engine integration with Earnix, Guidewire Rating Management, Duck Creek Rating, or your proprietary engine — plus SERFF-ready filing packages that tie every bound policy to the rate version on file for its state and effective date.',
    },
    {
      icon: 'RefreshCw',
      title: 'Endorsement & Renewal Orchestration',
      description:
        'Mid-term endorsements, batch renewals, and automatic renewal rule evaluation with pro-rata and short-rate calculations, configurable notice generation, and clean hand-offs into billing and document production.',
    },
    {
      icon: 'Link2',
      title: 'Billing, Claims & Reinsurance Bridge',
      description:
        'Event-driven connectors to Guidewire BillingCenter, Duck Creek Billing, Guidewire ClaimCenter, Duck Creek Claims, and reinsurance ledgers — built so policy changes propagate accurately without the nightly batch reconciliation legacy cores depend on.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Audit Trail & Regulatory Evidence',
      description:
        'Every policy event captured with actor, inputs, rule evaluations, rate version, and outcome. Exportable evidence packages for state DOI market-conduct exams, NAIC reporting, and internal audit — built in, not bolted on.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Time-to-Market for Products and States',
      description:
        'A configuration-first product factory means launching a new line, filing a new state, or revising a rate becomes a filing and configuration sprint — not a platform release. Architected to shrink the gap between an actuarial decision and a live product.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Safer Legacy Replacement',
      description:
        'A strangler-style cutover with a policy-event bridge keeps the legacy core in sync until each line and state is independently proven on the new platform. Designed to eliminate the big-bang migration that most failed PAS programs actually are.',
    },
    {
      icon: 'DollarSign',
      title: 'Lower Total Cost of Ownership',
      description:
        'Azure-native architecture and infrastructure-as-code replace per-seat legacy licensing and fragile on-premises clusters. Built so your IT finance team can model hosting cost against premium volume — not against vendor tiers that expire every three years.',
    },
    {
      icon: 'Scale',
      title: 'Regulator-Ready by Construction',
      description:
        'Every policy event is auditable, every rating call is tied to a filed rate version, and every module produces the evidence packages a state DOI or NAIC reviewer will ask for. Compliance is a property of the platform, not a documentation effort before an exam.',
    },
    {
      icon: 'TrendingUp',
      title: 'Scalable for Growth and M&A',
      description:
        'Multi-tenant architecture and configurable products mean an acquired book of business can be absorbed as a new tenant with its own lines and states. Designed for the carrier that will look different in three years than it does today.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Core-System Mapping',
      description:
        'We inventory your current core, billing, claims, reinsurance, and rating landscape end-to-end, identify the policy-event bridge points, map your line and state footprint, and define the phased strangler plan — which module in which line moves first, what stays on legacy, and how the two talk during the transition.',
      duration: '3–4 weeks',
      deliverable:
        'Core-system inventory, policy-event bridge design, phased migration plan, lines-and-states footprint, integration map, prioritized feature backlog',
    },
    {
      title: 'Architecture, Rating Spine & Product Factory Design',
      description:
        'Platform architecture designed around a single rating spine, a configurable product factory, and an event-sourced policy lifecycle engine. Integration pattern for each connected system (rating, billing, claims, reinsurance, document production) documented with failure-mode and rate-version-rollover strategy.',
      duration: '3–4 weeks',
      deliverable:
        'Architecture decision records, product factory design, event model, rating integration spec, Azure infrastructure blueprint, security architecture, DR strategy',
    },
    {
      title: 'Core Platform Development',
      description:
        'Iterative development with bi-weekly demos to IT, actuarial, underwriting, and claims stakeholders. Product factory, policy lifecycle engine, rating integration, endorsement and renewal orchestration, and the legacy bridge built in React/Next.js and .NET with domain-driven design that mirrors insurance business logic.',
      duration: '16–24 weeks',
      deliverable:
        'Functional policy administration platform in staging for agreed lines of business, event-sourced lifecycle with replay, legacy bridge, test coverage report, performance benchmarks',
    },
    {
      title: 'Integration, Data Migration & Compliance Testing',
      description:
        'Connect billing, claims, reinsurance, document production, and rating engines. Run the first line-and-state data migration with reconciliation, execute end-to-end compliance testing, penetration testing, and disaster-recovery rehearsal. Prepare state DOI evidence packages for the first go-live line.',
      duration: '6–10 weeks',
      deliverable:
        'Integration documentation, migration reconciliation reports, penetration test results, DR rehearsal sign-off, DOI evidence package for first line, rollback plan',
    },
    {
      title: 'Phased Go-Live, Legacy Strangler & Hypercare',
      description:
        'Line-by-line and state-by-state rollout with the legacy bridge running in parallel. Dedicated hypercare with engineering on-call, policy-event reconciliation monitors, and a documented plan for retiring each legacy module as the new platform proves itself in production.',
      duration: '3–4 weeks per line',
      deliverable:
        'Production deployment for first line, event-reconciliation dashboards, retirement plan per legacy module, training materials, runbook, support SLA',
    },
  ],

  capabilities: [
    'Configurable product factory (rates, forms, coverages per state and line)',
    'Event-sourced policy lifecycle with historical replay',
    'Real-time rating engine integration (Earnix, Guidewire, Duck Creek)',
    'SERFF-ready filing packages with rate-version traceability',
    'Endorsement, renewal, cancellation, and reinstatement orchestration',
    'Legacy core bridge for phased strangler migration',
    'Billing, claims, and reinsurance event-driven connectors',
    'Multi-tenant architecture (carrier, MGA, program)',
    'Policy-event audit trail for DOI and internal audit',
    'Mobile-responsive and accessible (WCAG 2.1 AA) back-office UX',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure App Service',
    'Azure AD B2C / Entra External ID',
    'Azure Key Vault',
    'SQL Server / Azure SQL Database',
    'Azure Blob Storage',
    'Azure Service Bus',
    'Azure Event Grid',
    'Azure API Management',
    'Power BI Embedded',
    'Terraform (IaC)',
    'Azure Application Insights',
  ],

  integrations: [
    {
      name: 'Guidewire PolicyCenter',
      category: 'Legacy Core / Bridge Target',
      connectionMethod: 'REST + SOAP + policy-event bridge',
      capabilities: [
        'Bi-directional policy data and endorsement sync',
        'Parallel-run reconciliation during phased cutover',
        'Rating Management integration for filed rates',
      ],
    },
    {
      name: 'Duck Creek Policy',
      category: 'Legacy Core / Bridge Target',
      connectionMethod: 'REST + direct DB bridge + event feed',
      capabilities: [
        'Policy lifecycle event exchange',
        'Rating integration for rate-version alignment',
        'Billing and claims data synchronization',
      ],
    },
    {
      name: 'Sapiens CoreSuite',
      category: 'Legacy Core / Bridge Target',
      connectionMethod: 'REST + webhook events',
      capabilities: [
        'Policy administration data exchange',
        'Multi-line-of-business support',
        'Claims lifecycle hand-off',
      ],
    },
    {
      name: 'Earnix',
      category: 'Rating Engine',
      connectionMethod: 'REST API',
      capabilities: [
        'Real-time rating and pricing calls',
        'What-if and rate-impact modeling',
        'Rate-version stamping on every bound policy',
      ],
    },
    {
      name: 'SERFF',
      category: 'Regulatory Filing',
      connectionMethod: 'SERFF API + batch export',
      capabilities: [
        'Rate, rule, and form filing packages',
        'State-specific regulatory reporting exports',
        'Filing-to-rate-deck traceability',
      ],
    },
    {
      name: 'Guidewire BillingCenter / ClaimCenter',
      category: 'Billing & Claims Bridge',
      connectionMethod: 'REST + event bus',
      capabilities: [
        'Policy-change propagation into billing',
        'Claims lifecycle hand-off from policy events',
        'Reconciliation reporting for parallel-run periods',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Built for the regulator in the room',
    title: 'Regulator-Ready, Audit-Graded, DR-Tested by Design',
    highlightText: 'Regulator-Ready, Audit-Graded, DR-Tested',
    statusText: 'NAIC · State DOI · SERFF · SOC 2 · Business Continuity',
    pillars: [
      {
        icon: 'FileCheck',
        title: 'Filed-Rate Traceability',
        description:
          'Every bound policy ties back to the exact rate version, form version, and state filing on record for its effective date — so a market-conduct exam is a query, not a file hunt.',
      },
      {
        icon: 'Scale',
        title: 'Explainable Policy Events',
        description:
          'Every policy event — bind, endorsement, renewal, cancel — captures actor, inputs, rules fired, and outcome. No black-box core; every decision can be replayed and reviewed.',
      },
      {
        icon: 'ShieldCheck',
        title: 'DR, BCP & Data Security',
        description:
          'AES-256 encryption, Azure Key Vault, MFA, role-based access, and a tested disaster-recovery plan with documented RTO and RPO per line of business.',
      },
    ],
    badges: [
      'NAIC Model Laws',
      'State DOI',
      'SERFF',
      'SOC 2 Type II',
      'Business Continuity',
      'WCAG 2.1 AA',
    ],
  },

  complianceDetail: {
    frameworks: [
      'NAIC Insurance Data Security Model Law',
      'State DOI Rate, Rule & Form Filing (SERFF)',
      'SOC 2 Type II',
      'Business Continuity & Disaster Recovery',
      'WCAG 2.1 AA accessibility',
    ],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Filed-rate & form traceability',
        description:
          'Every policy event — quote, bind, endorsement, renewal — is stamped with the rate and form version in force for its state and effective date. Audit queries return the filed-rate lineage without spreadsheet reconstruction.',
      },
      {
        icon: 'Scale',
        title: 'Event-sourced audit trail',
        description:
          'Policy state changes are persisted as an append-only event log with actor, inputs, rule evaluations, and outcomes. Historical point-in-time policy views and market-conduct evidence packages are replayable on demand.',
      },
      {
        icon: 'Lock',
        title: 'Data encryption & key management',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit. Policyholder PII and underwriting data encrypted with keys managed through Azure Key Vault with automated rotation and access-logged unwrap events.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-based access',
        description:
          'Azure AD B2C or Entra External ID with enforced MFA. Role-based access distinguishes product, underwriting, claims, billing, compliance, and admin functions with least-privilege defaults on every module.',
      },
      {
        icon: 'Activity',
        title: 'Disaster recovery & business continuity',
        description:
          'Multi-region Azure deployment with documented RTO and RPO per line of business. Infrastructure-as-code (Terraform) enables environment replication, and DR rehearsals are built into the engagement plan — not deferred to a post-launch checklist.',
      },
      {
        icon: 'Layers',
        title: 'Strangler-safe migration controls',
        description:
          'The legacy-to-modern policy-event bridge runs in reconciliation mode during cutover, with event-by-event parity checks and an emergency rollback path per line and state. Designed so a surprise during migration is a caught exception, not a production outage.',
      },
    ],
    auditNote:
      'Every module is architected to produce the filed-rate traceability, event-sourced evidence, and disaster-recovery posture a state DOI market-conduct exam, NAIC reviewer, or SOC 2 auditor will ask for. We are not regulatory counsel and recommend your compliance team and actuarial reviewers sign off on rate and form filings before submission.',
    partnerAgreements: ['DPA', 'SLA', 'BCP'],
  },

  imageFeatures: [
    {
      heading: 'One Platform, Every Policy Event',
      description:
        'Quote, bind, endorsement, renewal, cancel — one event-sourced engine owns the policy, with rate version and state filing attached to every transition.',
      image: {
        src: '/images/solutions/policy-administration-systems/feature-1.jpg',
        alt: 'Insurance technology team reviewing core platform architecture on shared monitors in a modern office',
      },
    },
    {
      heading: 'A Phased Path Off Legacy, With the Lights On',
      description:
        'Line-by-line, state-by-state cutover with a reconciling legacy bridge — so in-force business, billing, and claims keep running the whole way through the strangler.',
      image: {
        src: '/images/solutions/policy-administration-systems/feature-2.jpg',
        alt: 'Insurance executives and architects collaborating over a modernization roadmap at a conference table',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Underwriting Software',
      description:
        'Policy admin is the system of record; underwriting is the decision layer that feeds it. Our underwriting platform plugs directly into the lifecycle engine, so every bound policy carries the decision evidence the regulator will ask for.',
      href: '/solutions/underwriting-software',
      icon: 'TrendingUp',
      pageType: 'solution',
    },
    {
      title: 'Application Modernization',
      description:
        'Planning to retire a legacy core? Our strangler-fig modernization approach is the engineering practice behind the phased cutover this solution depends on — same principles, applied to your specific legacy estate.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'Product Discovery',
      description:
        'Scoping a PAS replacement? A discovery sprint maps your core, billing, claims, and reinsurance touchpoints — and the legacy bridge design — before a line of code is written.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Can you replace our legacy policy admin without breaking in-force business, billing, or claims?',
      answer:
        'Yes — and this is the single most important design constraint of the engagement. We architect a strangler cutover with a policy-event bridge that keeps your legacy core, billing, claims, and reinsurance feeds in sync while the new platform takes over one line and one state at a time. In-force policies continue to be administered on the legacy system until their line is independently proven on the new platform, with reconciliation monitors running in production and a documented rollback path at every stage. Big-bang cutovers are the failure mode we design against.',
    },
    {
      question: 'How do you handle product configuration, rating, and state filings?',
      answer:
        'The platform is built around a configurable product factory — rate decks, coverage forms, eligibility rules, and endorsement behaviors are data, not code. Your product and actuarial teams can model new products, state variants, and rate revisions through configuration and a SERFF-ready filing package. Real-time rating integrates with Earnix, Guidewire Rating Management, Duck Creek Rating, or a proprietary engine, and every bound policy is stamped with the rate version on file for its state and effective date. Routine rate revisions become a filing and configuration exercise, not a six-month release train.',
    },
    {
      question: 'Is the platform auditable and regulator-ready from day one?',
      answer:
        'Yes. Every policy event — quote, bind, endorsement, renewal, cancel, reinstate — is persisted as an append-only audit record with actor, inputs, rules fired, rate version, and outcome. Market-conduct exam evidence packages, NAIC reporting exports, and SOC 2 audit artifacts are capabilities of the platform, not a documentation scramble before an exam. We are not regulatory counsel and recommend your compliance team sign off on filings, but the evidence the regulator will ask for is already in the platform.',
    },
    {
      question: 'How do you handle disaster recovery and business continuity for a core system?',
      answer:
        'Disaster recovery is architected into the platform, not bolted on. Multi-region Azure deployment, documented RTO and RPO per line of business, infrastructure-as-code for full environment replication, and DR rehearsals built into the engagement plan before production go-live. For a core insurance system, DR is a board-level conversation, and we design so your CIO can answer "we rehearse our recovery" instead of "we have a runbook."',
    },
    {
      question: 'Can we start with one line of business and one state, then expand?',
      answer:
        'Yes — this is the default pattern, not a concession. Each line of business, state, and channel is a configuration unit with its own product definitions, rate bindings, and filing trail. The strangler bridge keeps the legacy system authoritative for lines that have not yet migrated, so you can move one line and one state at a time with the rest of the book untouched. New lines typically take several weeks of configuration plus integration and compliance testing once the core platform is live — not a platform rebuild.',
    },
    {
      question: 'What does a custom PAS engagement typically cost and how long does it take?',
      answer:
        'A custom policy administration platform with a configurable product factory, lifecycle engine, rating and filing integration, and a phased legacy strangler for a first line of business is a multi-quarter engagement. Scope is driven by lines, states, legacy systems in play, and the depth of billing, claims, and reinsurance integration. Phased delivery is standard — the first line goes live on the new platform before the broader strangler begins. A discovery engagement produces a realistic cost and timeline assessment grounded in your specific legacy estate, not a generic brochure number.',
    },
  ],

  cta: {
    title: 'Ready to Modernize Your Core Without Betting the Book?',
    description:
      'Book a free 30-minute discovery call. We will review your current core, billing, claims, and reinsurance landscape, your line and state footprint, and your filing cadence, then give you a realistic assessment of what a custom policy administration platform — and a phased strangler path off your legacy core — would cost and deliver for your carrier or MGA.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the control plane', href: '#signature' },
  },

  _unverified: [
    'hero.metrics — all three are capability-framed (Configurable, Strangler-Path, Audit-Ready); greenfield-safe, no outcome claims to verify.',
    'metricsStrip[0..3] — all four values are capability-framed (not outcome percentages). Greenfield-safe.',
    'complianceSpotlight.badges / complianceDetail.frameworks — "SOC 2 Type II" listed; confirm whether the company has a current attestation or is in progress before publishing.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope and strangler-bridge behavior; confirm which integrations have been built in production vs. which are architectural knowledge and reference-implementation capability.',
    'integrations — six systems listed (Guidewire Policy/Billing/Claims, Duck Creek Policy, Sapiens, Earnix, SERFF). Greenfield: framed as "we build against" via prose. Confirm the framing is honest across all references; some of these (e.g., Sapiens, Earnix) may be architectural knowledge only.',
    'complianceDetail.safeguards[4] — DR with documented RTO/RPO per line of business framed as a built capability. Confirm whether the DR posture is a reference-implementation deliverable or an aspirational design target for the first engagement.',
    'complianceDetail.safeguards[5] — legacy-to-modern policy-event bridge with event-by-event parity checks and per-line rollback is the page\'s single highest-impact claim. Confirm that the bridge pattern has been prototyped or documented in sufficient depth before publishing.',
    'faq[5] — pricing and timeline intentionally framed qualitatively ("multi-quarter engagement", "scope-driven") rather than as a range. Confirm whether a pricing range is appropriate for publication or whether the discovery-call framing is preferred.',
    'processSteps durations — reflect estimated typical delivery cadence for a carrier PAS engagement; confirm against actual planned delivery windows before publishing as firm estimates.',
    'PolicyLifecycleControlPlane signature — band labels, product-factory inputs, lifecycle stages, and evidence-layer outputs are capability descriptions, not measured claims. Greenfield-safe; no numeric stats embedded.',
  ],
};

export default policyAdministrationSystems;
