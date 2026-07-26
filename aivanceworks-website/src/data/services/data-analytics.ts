import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service (sibling of data-engineering.ts).
// Buyer: mixed but business-leaning — Head of Analytics / BI Manager, CFO / Finance
//   Director, CEO / founder (mid-market), Head of Product, COO / VP Operations, and
//   the data team lead. Measured on: decision speed (how fast the business gets a
//   trustworthy answer), metric consistency (does every dashboard agree), self-service
//   (can business users answer their own questions), and analytics ROI (are dashboards
//   actually used to make decisions, or abandoned after week two).
// Top 3 questions buyers arrive with:
//   (a) "Why do our five dashboards show five different revenue numbers?"
//   (b) "Can my team answer their own questions without queueing behind an analyst?"
//   (c) "Is our data even ready for this, or are we building on sand?"
// Key trust issue: been burned by BI tool rollouts that produced dashboards nobody
//   trusts (inconsistent metrics), or analytics projects built on a fragile data
//   foundation that fell apart the first time a number was questioned in a board meeting.
//
// THE BOUNDARY (critical): Data Engineering ends at the Gold layer — curated, trusted,
//   business-ready data. Data Analytics STARTS at the Gold layer. This page builds the
//   INTELLIGENCE layer (dashboards, semantic layer, self-service, ML-adjacent insight),
//   NOT the infrastructure layer (pipelines, warehouse, ETL, medallion, governance
//   infra, streaming). Those belong to /services/data-engineering and are deliberately
//   left out here (see brief "What to Leave Out"). The DE→DA handoff is surfaced in the
//   hero subhead, the signature (built on the Gold layer), engagement tier 1 (readiness
//   assessment), a dedicated FAQ, and the Data Engineering relatedPages card.
//
// Signature: SemanticLayerModel — a side-by-side comparison on the same Gold layer:
//   WITHOUT a governed semantic layer, four BI surfaces re-derive a metric and show four
//   different numbers; WITH analytics engineering, one governed definition feeds every
//   surface identically. Metric selector (MRR / Active User / Churn) swaps the numbers.
//   Visualization pattern: Comparison (catalog #4) + architectural layer diagram (#2).
//   Emotional argument: "Define each metric once and five dashboards stop disagreeing."
//   This is the page's strongest differentiator — most firms skip this layer entirely.
//
// Composition: Archetype B with adjustments:
//   - TechStackBlock DROPPED. The analytics buyer skews more business (CFO, CEO, Head of
//     Analytics) than the data-engineering buyer (Head of Data / VP Eng). Per §9.5 a
//     developer-lens technology chip grid is lower value here; tool names (Power BI,
//     Looker, Tableau, Metabase, dbt metrics layer, LookML) are woven into feature prose
//     instead. Same call as enterprise-software-development.ts.
//   - BenefitsGrid KEPT (data-engineering dropped it) — it carries the "When Dashboards
//     Aren't Enough" AI differentiator layer (predictive, anomaly detection, NL querying,
//     ML models), which is distinct from data-engineering's pipeline-intelligence AI
//     angle. Uses the new optional `benefitsHeading` (constitution v2.14).
//   - ProcessTimeline KEPT — the risk-averse "burned by BI projects" buyer needs to see
//     safe sequencing, and the readiness-assessment-first guardrail lives in step 1.
//   - 10 sections total — within the 8–10 target density for Archetype B.
//
// Tone rhythm (defaults baked into shared sections; template does not override):
//   Hero (dark) → MetricsStrip (light) → FeatureGrid (light) → Signature (dark) →
//   BenefitsGrid (warm) → ProcessTimeline (light) → EngagementModels (warm) →
//   RelatedPages (warm) → FAQ (light) → CTA (accent).
//   Two darks (hero + signature), non-adjacent; no 3+ same-tone run; CTA accent. §4 ok.
//
// Data Analytics maps to the Infrastructure Management category (beside Data Engineering)
//   per user direction — the DE→DA handoff makes nav adjacency the strongest cross-sell.
//   Buyers search "business intelligence consulting", "Power BI development", "analytics
//   engineering", "semantic layer / metrics layer", "self-service analytics", "dbt
//   metrics" — not internal category labels.

const dataAnalytics: ServicePageData = {
  slug: 'data-analytics',
  title: `${BRAND_PREFIX} Data Analytics`,
  shortDescription:
    'Business intelligence, analytics engineering, and self-service reporting — a governed intelligence layer built on data your team actually trusts.',

  metaTitle: 'Data Analytics Services | BI, Analytics Engineering, Self-Service',
  metaDescription:
    'Data analytics consulting: BI dashboards (Power BI, Looker, Tableau, Metabase), analytics engineering and semantic layers, self-service enablement, product and financial analytics, and predictive/AI-driven insight — built on your governed data.',
  keywords: [
    'data analytics services',
    'business intelligence consulting',
    'BI dashboard development',
    'Power BI consulting',
    'Looker consulting',
    'Tableau consulting',
    'analytics engineering',
    'semantic layer / metrics layer',
    'self-service analytics',
    'product analytics',
    'financial reporting dashboards',
    'predictive analytics dashboards',
  ],
  canonicalPath: '/services/data-analytics',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: `${BRAND_PREFIX} Data Analytics`, href: '/services/data-analytics' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'benefitsGrid',
    'processTimeline',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'infrastructure',
  signatureComponent: 'SemanticLayerModel',
  heroIllustrationComponent: 'DataAnalyticsHeroIllustration',

  hero: {
    badge: 'Infrastructure Management',
    headline: 'Your data is already telling you something.',
    subhead:
      'Analytics engineering, BI platforms, and self-service reporting — built on data your team actually trusts, and tied to the decisions you actually have to make.',
    primaryCta: { label: 'Book an analytics call', href: '/contact' },
    secondaryCta: { label: 'See the semantic layer', href: '#signature' },
  },

  // Audience test: a Head of Analytics or CFO scanning for 8 seconds needs to see
  // that this is decision-intelligence, not another BI tool rollout. Every metric is
  // capability-framed (greenfield integrity — no fabricated stats). Four concerns:
  // consistency, self-service, decision focus, data-foundation honesty.
  metricsStrip: [
    {
      value: 'Governed',
      label: 'One metric, one definition',
      description: 'A semantic layer so every dashboard agrees on the number',
    },
    {
      value: 'Self-Service',
      label: 'Answers without the queue',
      description: 'Business users explore governed data without waiting on an analyst',
    },
    {
      value: 'Decision-First',
      label: 'Built around decisions',
      description: 'Every dashboard maps to an action — not a vanity chart nobody opens',
    },
    {
      value: 'Foundation-Checked',
      label: 'We validate the data first',
      description: 'A readiness assessment before we build a single dashboard',
    },
  ],

  // Audience test: the analytics buyer confirms we cover their surface — BI, the
  // semantic layer (the differentiator), self-service, product, finance, and strategy.
  // Tool names are woven in (no separate TechStackBlock). Icons from Lucide.
  features: [
    {
      icon: 'BarChart3',
      title: 'Business Intelligence & Dashboards',
      description:
        'Executive KPI dashboards, departmental performance reporting, and operational monitoring — plus self-service layers for non-technical users. Built on Power BI, Looker, Tableau, or Metabase to match your stack and your team\'s skills.',
    },
    {
      icon: 'Layers',
      title: 'Analytics Engineering & Semantic Layer',
      description:
        'The governed layer between Gold data and dashboards: metric definitions, reusable data models, and calculation logic built with the dbt metrics layer, LookML, or platform-native semantic models — so "MRR" or "active user" means one thing across the whole org.',
    },
    {
      icon: 'Users',
      title: 'Self-Service Analytics Enablement',
      description:
        'Semantic-layer configuration, row-level security for multi-team access, pre-built report templates, and data-literacy training — so business users answer their own questions without routing every report request through the data team.',
    },
    {
      icon: 'TrendingUp',
      title: 'Product & Customer Analytics',
      description:
        'Funnels, retention cohorts, feature-adoption metrics, segmentation, and LTV modeling for product and growth teams — built on event data from Segment, Amplitude, Mixpanel, or your own warehouse-native event streams.',
    },
    {
      icon: 'Wallet',
      title: 'Financial & Operational Reporting',
      description:
        'P&L dashboards, budget-vs-actuals, cash-flow visibility, and board-ready reporting packages — built with the period comparisons, hierarchy rollups, and variance analysis finance actually needs, not approximated in a generic chart tool.',
    },
    {
      icon: 'Compass',
      title: 'Data Strategy & Analytics Roadmap',
      description:
        'For teams earlier in the journey: a data-maturity assessment, use-case prioritization by business value, and a phased roadmap that sequences data engineering and analytics work in the right order — so you don\'t buy dashboards before the data is ready.',
    },
  ],

  // "When Dashboards Aren't Enough" — the AI differentiator layer. Distinct from
  // data-engineering's pipeline-intelligence AI angle. Capability-framed, no stats.
  benefitsHeading: {
    eyebrow: 'When Dashboards Aren\'t Enough',
    title: 'Beyond "what happened" to "what\'s next"',
    subtitle:
      'Predictive and AI-driven analytics, surfaced inside the dashboards your team already uses — not spun off into a separate data-science project.',
  },
  benefits: [
    {
      icon: 'LineChart',
      title: 'Predictive Analytics',
      description:
        'Forecasting models embedded directly in your BI dashboards — revenue forecasting, demand prediction, churn risk — so the dashboard answers not just what happened, but what is likely to happen next.',
    },
    {
      icon: 'BellRing',
      title: 'Anomaly Detection',
      description:
        'Automated alerts when a key metric deviates from its expected pattern — so a broken funnel or a revenue dip reaches the right person before anyone spots it in a dashboard on Monday.',
    },
    {
      icon: 'MessageSquareText',
      title: 'Natural-Language Querying',
      description:
        'Business users ask questions in plain English and get accurate, governed answers pulled from your Gold layer — no SQL to write, no analyst bottleneck to wait behind.',
    },
    {
      icon: 'BrainCircuit',
      title: 'Customer & Product ML Models',
      description:
        'LTV prediction, churn-propensity scoring, and segmentation surfaced as analytics outputs inside the tools your team already opens — not as a standalone model that lives in a notebook nobody runs.',
    },
  ],

  processSteps: [
    {
      title: 'Analytics Readiness & Decision Mapping',
      description:
        'We assess whether your data foundation is ready for analytics, and map the decisions the business actually needs to make. If pipelines are fragile or the Gold layer is missing, we say so — and scope data engineering first rather than building dashboards on sand.',
      duration: 'Week 1',
      deliverable: 'Data-readiness assessment, prioritized decision/use-case list, phased plan',
    },
    {
      title: 'Semantic Layer & Metric Definitions',
      description:
        'We define your core metrics once — MRR, active user, churn, gross margin — in a governed semantic layer (dbt metrics, LookML, or platform-native), agreed with finance and the business so every dashboard downstream answers the same question the same way.',
      duration: 'Week 1–3',
      deliverable: 'Governed metric definitions, semantic models, metric ownership sign-off',
    },
    {
      title: 'Dashboard & Report Build',
      description:
        'We build the executive, departmental, product, and financial dashboards on your chosen BI platform — reading exclusively from the governed semantic layer, with the calculated fields, hierarchies, and period comparisons each audience needs.',
      duration: 'Week 3–6',
      deliverable: 'Working dashboards and reporting packages on Power BI / Looker / Tableau / Metabase',
    },
    {
      title: 'Self-Service & Governance',
      description:
        'We configure row-level security for multi-team access, publish reusable report templates, and set up the guardrails that let business users explore governed data safely — so self-service scales without a proliferation of conflicting one-off reports.',
      duration: 'Week 5–8',
      deliverable: 'Row-level security, self-service templates, access model, governance guardrails',
    },
    {
      title: 'Enablement & Handoff',
      description:
        'We run data-literacy and tool training with your teams, document the semantic layer and every dashboard, and hand off in paired working sessions — so your team can define new metrics and build new reports without waiting on us.',
      duration: 'Week 7–8',
      deliverable: 'Training sessions, metric & dashboard documentation, team onboarding complete',
    },
  ],

  engagementModels: [
    {
      name: 'Analytics Readiness Assessment',
      duration: '1–2 weeks',
      priceFrom: '$6,000',
      whatsIncluded: [
        'Data-maturity and foundation-readiness assessment',
        'Decision and use-case prioritization by business value',
        'Metric inventory and consistency review',
        'Phased roadmap sequencing data engineering and analytics work',
        'Recommended engagement and BI-platform fit',
      ],
      suitableFor: 'Teams unsure whether their data foundation is ready for analytics investment',
      primaryCta: { label: 'Book Readiness Assessment', href: '/contact?da=assessment' },
    },
    {
      name: 'BI Platform Build',
      duration: '4–8 weeks',
      priceFrom: '$25,000',
      whatsIncluded: [
        'Dashboards for executive, departmental, and operational reporting',
        'Core metric definitions in a governed semantic layer',
        'Self-service analytics layer for non-technical users',
        'Row-level security and access model',
        'Team enablement, documentation, and handoff',
      ],
      suitableFor: 'Teams with a reliable data foundation who need dashboards and self-service built and handed off',
      primaryCta: { label: 'Book BI Platform Call', href: '/contact?da=bi' },
    },
    {
      name: 'Analytics Engineering + BI',
      duration: '6–10 weeks',
      priceFrom: '$40,000',
      whatsIncluded: [
        'Everything in the BI Platform Build',
        'Full semantic / metrics layer with governed calculation logic',
        'Reusable data models across every dashboard and team',
        'Product and financial analytics surfaces as needed',
        'Self-service enablement and data-literacy training',
        'Optional predictive / anomaly-detection layer',
      ],
      suitableFor: 'Teams who need the full intelligence layer — governed metrics, BI, and self-service — built as one coherent system',
      primaryCta: { label: 'Book Analytics Engineering Call', href: '/contact?da=analytics-eng' },
      featured: true,
    },
    {
      name: 'Ongoing Analytics Support',
      duration: 'Monthly, ongoing',
      priceFrom: '$4,000/mo',
      whatsIncluded: [
        'Continuous dashboard and report development',
        'New metric definitions added to the semantic layer',
        'Dashboard maintenance and metric change management',
        'Analytics support without hiring a full-time analytics engineer',
        'Direct Slack / Teams channel with the analytics team',
      ],
      suitableFor: 'Teams who want continuous analytics capacity without a full-time analytics-engineering hire',
      primaryCta: { label: 'Book Ongoing Support Call', href: '/contact?da=support' },
    },
  ],

  relatedPages: [
    {
      title: 'Data Engineering',
      description:
        'Don\'t have a clean data foundation yet? Start there. We build the pipelines, warehouse, and governed Gold layer your analytics runs on — because dashboards on unreliable data are the most common reason BI projects fail.',
      href: '/services/data-engineering',
      icon: 'Database',
      pageType: 'service',
    },
    {
      title: 'ML Development',
      description:
        'Ready to go beyond dashboards? We train custom models — churn scoring, forecasting, recommendation, classification — on your governed Gold layer, and ship them to production with drift monitoring, not a notebook that rots.',
      href: '/services/ml-development',
      icon: 'BrainCircuit',
      pageType: 'service',
    },
    {
      title: 'Generative AI',
      description:
        'Want your team to query the data in plain English? We build RAG systems and NLP interfaces on top of your analytics layer — governed answers from your Gold data, no SQL and no analyst bottleneck.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Do we need a solid data foundation before you build our analytics?',
      answer:
        'Usually yes — and we check before we build. Every analytics engagement starts with a data-readiness assessment. If your pipelines are fragile, your warehouse is unstructured, or there is no trusted "Gold" layer of curated data, we tell you plainly and scope a Data Engineering engagement first. We do not build dashboards on data we cannot trust, because analytics built on an unreliable foundation is the single most common reason BI projects are abandoned. If your foundation is already solid, we move straight into the analytics build.',
    },
    {
      question: 'How is Data Analytics different from your Data Engineering service?',
      answer:
        'Data Engineering builds and operates the infrastructure — pipelines, the data warehouse or lakehouse, and the tested transformation layer that produces curated, business-ready "Gold" data. Data Analytics starts where that ends: it is the intelligence layer on top — dashboards, the semantic/metrics layer, self-service reporting, and predictive insight that turn Gold-layer data into decisions. Engineering answers "is the data available, clean, and reliable?"; Analytics answers "what is the data telling us, and what should we do about it?" Many teams need both, sequenced in that order.',
    },
    {
      question: 'What is a semantic layer, and why does it matter so much?',
      answer:
        'A semantic layer is where each business metric is defined exactly once — what counts as "monthly recurring revenue," an "active user," or "customer churn" — as governed calculation logic that every dashboard reads from. Without it, each analyst re-derives metrics in their own tool, and you end up with five dashboards showing five different revenue numbers and no one sure which to trust. Most analytics firms skip this layer entirely, which is precisely why metric inconsistency is so common. Building it is our strongest differentiator: it makes every downstream dashboard trustworthy by construction.',
    },
    {
      question: 'Which BI tool should we use — Power BI, Looker, Tableau, or Metabase?',
      answer:
        'It depends on your existing stack, your team\'s skills, and your budget. Power BI is a strong default for Microsoft-centric organizations and finance-heavy reporting. Looker fits teams that want a code-defined semantic layer (LookML) and are on Google Cloud or BigQuery. Tableau excels at rich visual exploration for analyst-heavy teams. Metabase is a pragmatic, lower-cost choice for teams that want fast self-service without heavy licensing. The readiness assessment evaluates the fit against your requirements before we commit — and because metrics live in a governed semantic layer, you are not locked to one tool forever.',
    },
    {
      question: 'Can business users really self-serve without creating a new mess?',
      answer:
        'Yes — when self-service is built correctly, not just switched on. It fails when it is treated as a tool rollout: hand everyone a BI license and you get a sprawl of conflicting one-off reports. It succeeds when the data is clean, metrics are governed in a semantic layer, row-level security controls who sees what, and the tool is configured for the business user rather than the data engineer. We set up all of that, plus reusable report templates and data-literacy training, so your teams answer their own questions safely and every answer still traces back to one governed definition.',
    },
    {
      question: 'Do you build predictive and AI-driven analytics, or just dashboards?',
      answer:
        'Both. Most engagements center on governed dashboards and self-service reporting, but when the question shifts from "what happened" to "what is likely next," we embed predictive models directly in the dashboards — revenue and demand forecasting, churn-risk and LTV scoring, and automated anomaly detection that alerts you before a problem surfaces. Business users can also query the data in plain English. These are surfaced as analytics outputs inside the tools your team already uses, not spun off into a separate data-science project. For deeper custom modeling, we hand off cleanly to our ML Development service.',
    },
  ],

  cta: {
    title: 'Ready to make decisions on numbers your team trusts?',
    description:
      'Book a 30-minute call. We will talk through the decisions you need to make, whether your data foundation is ready, and whether a readiness assessment or a full analytics build is the right starting point.',
    primaryCta: { label: 'Book an analytics call', href: '/contact' },
    secondaryCta: { label: 'See the semantic layer', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices from the brief ($6k / $25k / $40k / $4k-mo). Human sign-off required before publishing (§9.7).',
    'engagementModels[*].duration — week ranges from the brief. Confirm achievability.',
    'processSteps durations — week ranges are illustrative. Confirm actual delivery cadence.',
    'signature (SemanticLayerModel) — the metric values (e.g. $4.21M, 82,400, 5.8%) are ILLUSTRATIVE of divergence-vs-consistency, not client data. Reviewer: confirm the "illustrative" caption is acceptable (§9.1 / precedent v2.10).',
  ],
};

export default dataAnalytics;
