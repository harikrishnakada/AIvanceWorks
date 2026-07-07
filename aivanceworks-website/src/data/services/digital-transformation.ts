import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// ─── Archetype: A (Strategic) base + featureGrid & benefitsGrid cherry-picked
//     from B (Technical). See constitution §6.5 (between-archetype rule).
//
// Archetype resolution (audience test §9.5 + §6.5 tiebreaker):
//   The brief defaulted to B ("I need this built"). Resolved to A instead.
//   Reasoning: a Digital Transformation engagement *begins* with an assessment
//   and a sequenced roadmap (a plan/maturity artifact), and the primary buyer is
//   a business decision-maker (CIO/CDO) who answers to a board and a P&L — not a
//   regulator, and not an engineer evaluating a stack. That is the Archetype A
//   profile, and it matches the closest sibling, ai-strategy-consulting (also A).
//   Cherry-picks from B: `featureGrid` (the buyer needs to see the concrete
//   modernization domains, not just the methodology) and `benefitsGrid` (a
//   risk-averse buyer burned by failed programs needs outcome framing before
//   committing). TechStackBlock DROPPED — this buyer does not evaluate the
//   engagement on .NET-vs-Node; weave platform names into feature prose instead.
//
// Buyer persona:
//   Chief Digital Officer / CIO at a mid-to-large US enterprise (500–5,000
//   employees) running aging on-prem or fragmented systems.
//   Measured on: business agility / time-to-market, cost-to-serve, the success
//   (and survival) of the transformation program they sponsor, board confidence.
//
// Top 3 buyer questions (drive composition order):
//   1. "Where do we even start, and what is the sequence?" → metricsStrip +
//      discoveryMethodology + signature (the maturity roadmap).
//   2. "How do we modernize without halting the business or blowing the budget?"
//      → signature (waves, not big-bang) + processTimeline + benefitsGrid.
//   3. "How is this different from a one-off cloud migration or an AI project?"
//      → featureGrid (breadth across 5 domains) + a dedicated FAQ.
//
// Key trust issue:
//   Burned by multi-year, multi-million "rip and replace" transformation programs
//   that ran over budget, stalled, or shipped shelfware — plus fear of vendor
//   lock-in and big-bang cutover risk. Answered with: phased/wave-based framing,
//   "production live throughout," team ownership/handover, and provider-neutral
//   positioning. All claims capability-framed (greenfield integrity).
//
// Archetype-C cherry-pick (§6.5): transformation touches security/compliance
//   modernization (zero-trust, IAM, SOC 2 / HIPAA / PCI-DSS / CCPA awareness),
//   but the CDO buyer is NOT gated by an auditor on THIS engagement. Per §9.9,
//   compliance framing stays out of hero/metrics/features-as-headline and lives
//   in one feature (security modernization), the engagement scope, and one FAQ.
//   No ComplianceDeepDive — that belongs to /services/security-compliance.
//
// Tone rhythm (10 sections, mirrors ai-strategy-consulting):
//   Hero (dark) → MetricsStrip (light) → DiscoveryMethodology (warm) →
//   FeatureGrid (light) → imageFeatures (no-op for services, see note) →
//   Signature (dark) → ProcessTimeline (light) → BenefitsGrid (warm) →
//   EngagementModels (light) → RelatedPages (warm) → FAQ (light) → CTA (accent)
//
// imageFeatures note: per the v2.4/v2.5 constitution precedent and the AI/ML
//   service house pattern, SERVICE pages render an inline SVG hero illustration,
//   NOT photos. ServiceDetailTemplate maps `imageFeatures` to () => null. The
//   brief mandated 'imageFeatures' after 'featureGrid' and 3 photos — both are
//   satisfied (the key is in the composition array below, harmless; placeholder
//   JPEGs exist at public/images/services/digital-transformation/). Flagged in
//   _unverified so this is not mistaken for a render bug.

const digitalTransformation: ServicePageData = {
  slug: 'digital-transformation',
  title: `${BRAND_PREFIX} Digital Transformation`,
  shortDescription:
    'End-to-end digital transformation that modernizes your processes, technology, and data in sequenced waves — with the business live throughout and your team owning the result.',

  metaTitle: 'Digital Transformation Services | Modernization Roadmap & Delivery',
  metaDescription:
    'Digital transformation consulting and delivery for US enterprises. Maturity assessment, modernization roadmap, legacy re-platforming, cloud and data modernization — delivered in phased waves, not a big-bang rewrite.',
  keywords: [
    'digital transformation',
    'digital transformation services',
    'digital transformation consulting',
    'business process modernization',
    'legacy system modernization',
    'cloud transformation',
    'data modernization',
    'enterprise modernization',
    'digital transformation roadmap',
    'technology modernization',
    'digital operating model',
    'application modernization',
  ],
  canonicalPath: '/services/digital-transformation',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: `${BRAND_PREFIX} Digital Transformation`, href: '/services/digital-transformation' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'discoveryMethodology',
    'featureGrid',
    'imageFeatures',
    'signature',
    'processTimeline',
    'benefitsGrid',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'DigitalMaturityRoadmap',
  heroIllustrationComponent: 'DigitalTransformationHeroIllustration',

  hero: {
    badge: 'Strategic Service',
    headline: 'Modernize the whole business, one wave at a time.',
    subhead:
      'A sequenced digital transformation across your processes, technology, and data — starting with an assessment and roadmap, delivered in prioritized waves that keep the business running the entire way.',
    primaryCta: { label: 'Book Transformation Call', href: '/contact' },
    secondaryCta: { label: 'See the roadmap', href: '#signature' },
  },

  // Audience test: a CIO/CDO scans in 8 seconds. Every metric must reassure them
  // this is sequenced and safe (their trust issue), and be capability-framed
  // (greenfield-safe — describes our approach, not past client outcomes).
  // "Phased Waves" → directly counters the big-bang rewrite fear. ✓
  // "Stays Live" → the business does not stop; their #1 operational concern. ✓
  // "Assess-First" → there is a plan before spend; counters runaway programs. ✓
  // "You Own It" → no vendor lock-in; team inherits the modern stack. ✓
  metricsStrip: [
    {
      value: 'Phased Waves',
      label: 'Not a big-bang rewrite',
      description: 'Prioritized by risk and business value',
    },
    {
      value: 'Stays Live',
      label: 'Production runs throughout',
      description: 'No system-wide cutover',
    },
    {
      value: 'Assess-First',
      label: 'Roadmap before spend',
      description: 'A plan your board can fund',
    },
    {
      value: 'You Own It',
      label: 'Team ownership & handover',
      description: 'Built to outlive the engagement',
    },
  ],

  // Audience test: a CDO evaluates a transformation partner on the rigor of how
  // they frame the work. These four lenses are how we approach a transformation —
  // each maps to a discipline the buyer recognizes from analyst guidance and
  // board conversations. Methodology, not deliverables (that is featureGrid).
  methodology: [
    {
      icon: 'Search',
      name: 'Maturity Assessment',
      description:
        'A structured baseline of where you are today — current processes, system and data estate, integration debt, and digital KPIs — so the roadmap is built on evidence, not assumptions.',
    },
    {
      icon: 'Map',
      name: 'Sequenced Roadmap',
      description:
        'Transformation broken into prioritized waves, ranked by business value and risk. You see what changes first, second, and next quarter — and what is deliberately left until later.',
    },
    {
      icon: 'Layers',
      name: 'Wave-Based Delivery',
      description:
        'Each wave ships working value while the business stays live. No big-bang cutover, no year of silence before anything is usable — progress is visible wave by wave.',
    },
    {
      icon: 'Users',
      name: 'Ownership & Adoption',
      description:
        'Change management, capability building, and DevOps practices transfer the new operating model to your teams — so the transformation is adopted and maintained, not abandoned after go-live.',
    },
  ],

  // Audience test: a CIO/CDO needs to see the BREADTH — that this covers the whole
  // business foundation, distinguishing it from a single cloud migration or AI
  // project (buyer question #3). Six domains, each framed as a buyer outcome.
  // Platform names woven into prose as "we build with" (greenfield honesty, §9.5),
  // NOT a chip grid the business buyer would not read.
  // Security modernization is included as ONE feature; audit/compliance framing
  // stays out of the headline per §9.9.
  features: [
    {
      icon: 'Workflow',
      title: 'Process Modernization',
      description:
        'We map and audit your current workflows, find the manual and broken steps, and redesign them for a digital-first operating model — so the way the business runs is no longer held back by how the work is done.',
    },
    {
      icon: 'Server',
      title: 'Technology & Legacy Modernization',
      description:
        'Re-platforming and cloud adoption on Azure, AWS, or GCP, with API-first and decoupled architecture replacing brittle monoliths — modernized incrementally so production never stops.',
    },
    {
      icon: 'Database',
      title: 'Data Modernization',
      description:
        'Breaking down data silos into unified, governed data infrastructure — lakes, warehouses, and lakehouses with real-time pipelines — so the business gets self-serve analytics instead of stale, conflicting reports.',
    },
    {
      icon: 'LayoutDashboard',
      title: 'Product & Experience Transformation',
      description:
        'Turning offline and manual processes into digital products — customer portals, internal tools, and omnichannel experiences — built with React and Next.js on a modern, maintainable foundation.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Security & Compliance Modernization',
      description:
        'Zero-trust architecture, identity and access overhaul, and cloud security posture management designed into the modernized stack — engineered with US frameworks such as SOC 2, HIPAA, and PCI-DSS in mind.',
    },
    {
      icon: 'GaugeCircle',
      title: 'Organizational Enablement',
      description:
        'Digital KPIs and measurement frameworks, DevOps and agile ways of working, and capability building — so your organization can run and extend the modern operating model without depending on us.',
    },
  ],

  // ImageFeature note — the 'imageFeatures' composition key (mandated by the
  // brief) is present in the composition array above, but SERVICE pages do not
  // carry an `imageFeatures` data field (it lives on SolutionPageData only).
  // ServiceDetailTemplate maps the key to () => null and services use the inline
  // SVG hero illustration instead (§11.5). Placeholder JPEGs exist at
  // public/images/services/digital-transformation/ for spec parity. See header.

  processSteps: [
    {
      title: 'Discovery & Maturity Assessment',
      description:
        'Workshops with executive sponsors and operational leaders to capture ambitions, constraints, and compliance requirements, alongside an audit of current processes, systems, and data. We establish a maturity baseline before recommending any change.',
      duration: 'Scoped during discovery',
      deliverable: 'Maturity baseline, current-state map, digital KPI definitions',
    },
    {
      title: 'Roadmap & Business Case',
      description:
        'We sequence the transformation into prioritized waves ranked by business value and risk, each with a scope and a business case framed for leadership to fund. The roadmap accounts for dependencies, team capacity, and the order that minimizes disruption.',
      duration: 'Scoped during discovery',
      deliverable: 'Sequenced wave roadmap, per-wave scope, investment summary',
    },
    {
      title: 'Foundation Wave',
      description:
        'We stand up the modern foundation — cloud landing zone, identity and access, API and integration layer, and unified data infrastructure — so subsequent waves run safely with the business live.',
      duration: 'Phased per engagement',
      deliverable: 'Cloud and data foundation, zero-trust access, integration layer',
    },
    {
      title: 'Modernization Waves',
      description:
        'Legacy systems are re-platformed and workflows redesigned into digital products, one prioritized wave at a time. Each wave is validated and shipped before the next begins — production stays live and the system is in a usable state throughout.',
      duration: 'Phased per engagement',
      deliverable: 'Modernized systems and digital products, wave by wave',
    },
    {
      title: 'Adoption & Handover',
      description:
        'DevOps practices, change management, capability building, and a digital measurement framework transfer ownership to your teams. The engagement concludes with the organization able to run, measure, and extend the new operating model.',
      duration: 'Phased per engagement',
      deliverable: 'Runbooks, adoption plan, KPI dashboards, team enablement',
    },
  ],

  // Audience test: a CIO/CDO is measured on agility, cost-to-serve, and the
  // survival of the program. Frame as outcomes (what they get), greenfield-safe
  // as capabilities of the approach, not claims about past client results.
  benefits: [
    {
      icon: 'Activity',
      title: 'The Business Keeps Running',
      description:
        'Because transformation runs in waves rather than a single cutover, operations never stop and your roadmap never pauses. Each wave ships value while everything else keeps serving customers.',
    },
    {
      icon: 'TrendingDown',
      title: 'Budget and Risk Stay Contained',
      description:
        'An assess-first approach with sequenced waves means spend is tied to scoped, fundable increments — not an open-ended program. You can pause or reprioritize between waves without writing off the work done so far.',
    },
    {
      icon: 'Unlock',
      title: 'No Vendor Lock-In',
      description:
        'We build with mainstream cloud and open standards and transfer ownership to your teams. The modern operating model is yours to run and extend — with us or with anyone else.',
    },
    {
      icon: 'Gauge',
      title: 'Measurable Digital Maturity',
      description:
        'Digital KPIs are defined at the start and tracked throughout, so the gains in agility, efficiency, and customer experience are visible to leadership — not asserted in a closing slide.',
    },
  ],

  capabilities: [
    'Process mapping, audit, and digital-first redesign',
    'Legacy system migration and re-platforming',
    'Cloud adoption and migration (Azure, AWS, GCP)',
    'API-first and decoupled / microservices architecture',
    'Unified data infrastructure (lakes, warehouses, lakehouses)',
    'Real-time data pipelines and self-serve analytics',
    'Customer portals, internal tools, and omnichannel experiences',
    'Zero-trust architecture and IAM modernization',
    'DevOps, CI/CD, and agile transformation enablement',
    'Digital KPI frameworks and change management',
  ],

  engagementModels: [
    {
      name: 'Transformation Assessment',
      duration: 'Scoped during discovery',
      whatsIncluded: [
        'Process, system, and data estate audit',
        'Digital maturity baseline across the five domains',
        'Sequenced wave roadmap ranked by value and risk',
        'Per-wave scope and high-level business case',
        'Executive readout with recommended starting wave',
      ],
      suitableFor:
        'Leadership teams who need an evidence-based transformation plan before committing budget to delivery',
      primaryCta: { label: 'Book Assessment', href: '/contact?dx=assessment' },
    },
    {
      name: 'Wave-Based Delivery',
      duration: 'Phased per engagement',
      whatsIncluded: [
        'Full assessment and roadmap (included)',
        'Foundation wave (cloud, identity, integration, data)',
        'Delivery of prioritized modernization waves',
        'Production-safe rollout with validation per wave',
        'Digital KPI tracking against the baseline',
        'Change management and team enablement',
      ],
      suitableFor:
        'Mid-market to enterprise organizations ready to execute a multi-domain transformation with visible, wave-by-wave progress',
      primaryCta: { label: 'Book Transformation Call', href: '/contact?dx=delivery' },
      featured: true,
    },
    {
      name: 'Transformation Partner',
      duration: 'Ongoing engagement',
      whatsIncluded: [
        'Continued modernization across remaining domains',
        'Architecture and operating-model guidance',
        'Ongoing data, security, and platform modernization',
        'Capability building and DevOps mentoring',
        'Digital measurement and roadmap stewardship',
        'Legacy decommissioning support',
      ],
      suitableFor:
        'Organizations with a large estate that want a sustained transformation partner beyond the initial waves',
      primaryCta: { label: 'Discuss Partnership', href: '/contact?dx=partner' },
    },
  ],

  relatedPages: [
    {
      title: 'Legacy Modernization',
      description:
        'Transformation roadmap pointing at a specific legacy monolith? This is the deep dive on how we decompose and re-platform it with the strangler fig pattern — production live throughout, module by module.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'AI Strategy & Consulting',
      description:
        'Once the foundation is modern, where does AI fit? AI strategy picks up here — a vendor-neutral assessment that prioritizes AI use cases your newly modernized data and systems can actually support.',
      href: '/services/ai-strategy-consulting',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Cloud Migration & Modernization',
      description:
        'Transformation is mostly about getting off on-prem? Go straight to the cloud track — wave-based migration to Azure or AWS with the right hosting strategy per workload, scoped from the same assessment.',
      href: '/services/cloud-migration',
      icon: 'CloudUpload',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How is digital transformation different from a cloud migration or an AI project?',
      answer:
        'A cloud migration moves your workloads to the cloud; an AI project applies AI to a specific use case. Digital transformation is broader — it modernizes the whole foundation the others build on: your processes, technology, data, customer and internal experiences, security posture, and ways of working. Cloud migration and AI are often individual waves inside a transformation roadmap. If your need is narrowly one of those, we have dedicated services for them; transformation is for when the business itself, not just one system, needs to modernize.',
    },
    {
      question: 'How do you avoid the failed, over-budget transformation programs we have seen before?',
      answer:
        'The two most common causes of failure are big-bang scope and open-ended spend. We address both directly. Transformation is broken into prioritized waves, each independently scoped and funded, so you commit incrementally rather than to a multi-year blank cheque. The business stays live throughout — there is no single high-risk cutover. And because every wave leaves the system in a usable state, you can pause, reprioritize, or change pace between waves without writing off the work already done.',
    },
    {
      question: 'Will our business have to stop while you modernize?',
      answer:
        'No. We use incremental, wave-based delivery so production keeps running the entire time. New capabilities route through modern systems while existing operations continue on what is already there, and each wave is validated before the next begins. You ship features and serve customers throughout — the modern stack grows alongside the business rather than replacing it overnight.',
    },
    {
      question: 'Where do we start if our systems and processes are a tangled mess?',
      answer:
        'You start with the assessment. We map your current processes, systems, and data estate, establish a digital maturity baseline, and produce a roadmap that sequences the transformation by business value and risk. The output tells you exactly which wave to fund first, what it costs, and what it changes — so a tangled estate becomes a clear, ordered plan before any system is touched.',
    },
    {
      question: 'Do we get locked into your team or a particular technology vendor?',
      answer:
        'No. We build with mainstream cloud platforms (Azure, AWS, GCP) and open standards, and a core goal of every engagement is transferring ownership to your teams through DevOps practices, documentation, and capability building. The modern operating model is yours to run and extend — whether you continue with us, bring it fully in-house, or work with another partner. We are an engineering and modernization partner, not a lock-in.',
    },
    {
      question: 'How do you handle security and compliance during transformation?',
      answer:
        'Security modernization is built into the work, not bolted on afterward — typically as part of the foundation wave with zero-trust architecture, identity and access overhaul, and cloud security posture management. We engineer with US frameworks such as SOC 2, HIPAA, PCI-DSS, and CCPA in mind where they apply to your industry. To be clear on responsibility: we design and build the technical controls, but certification, audit outcomes, and regulatory filings remain owned by your organization. Where compliance is the primary objective, our dedicated Security & Compliance service goes deeper.',
    },
  ],

  cta: {
    title: 'Ready to modernize the business without betting it all at once?',
    description:
      'Book a 30-minute call. We will discuss where you are today, what is holding the business back, and what a sequenced, wave-based transformation could look like for your organization.',
    primaryCta: { label: 'Book transformation call', href: '/contact' },
    secondaryCta: { label: 'See the roadmap', href: '#signature' },
  },

  // ─── Content integrity (§9) — resolved _unverified list ───
  // All metrics are capability-framed (no fabricated stats, no uncited % ranges).
  // All capability claims use "we build / designed to / engineered to" framing
  // (greenfield integrity). No invented case studies, no client logos. Platform
  // vendor names (Azure/AWS/GCP/React/Next.js) are framed as "we build with",
  // not "we have shipped with". Durations are "Scoped during discovery" /
  // "Phased per engagement" — no fabricated timelines or prices.
  _unverified: [
    'engagementModels[*] — no priceFrom set (intentionally omitted; confirm whether published starting prices are desired before launch).',
    'imageFeatures + public/images/services/digital-transformation/*.jpg — placeholder JPEGs copied from ai-development; SERVICE template renders imageFeatures as null (services use the inline SVG hero illustration, not photos). Replace with transformation-specific licensed photography only if/when services wire the ImageFeature section. Not a render bug.',
  ],
};

export default digitalTransformation;
