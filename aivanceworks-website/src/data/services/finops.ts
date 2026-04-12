import type { ServicePageData } from '@/types/pages';

// Archetype A — Strategic Service
// Buyer: VP of Infrastructure / VP of Engineering / CTO at a mid-market enterprise (500–5,000 employees)
//   accountable for cloud spend and under pressure from the CFO to explain and control it.
// Measured on: cloud spend as % of revenue, cost per unit (per customer, per transaction),
//   forecast accuracy, engineering productivity relative to infrastructure cost.
// Dominant question: "How do we actually reduce cloud spend — and keep it reduced — without
//   breaking production or re-hiring our way out of chaos every six months?"
// Key trust issue: burned by two things —
//   (a) one-time audits that produced a spreadsheet, surfaced savings, and saw them erode
//       within six months because no governance was left behind; and
//   (b) vendor-driven optimization ("buy more RIs!") that solved for the vendor, not the buyer.
// Signature: FinOpsCostWaterfall — systematic waterfall showing the five optimization levers
//   cascading from an unoptimized baseline to a governed, predictable steady state. The emotional
//   argument: "this isn't one lever — it's a stacked, structured practice."
//
// Composition based on Archetype A recipe with cherry-picks:
//   - BenefitsGrid cherry-picked from Archetype B — the buyer needs to see what the engagement
//     produces, not just how we work. Mirrors Cloud Strategy's composition choice.
//   - EngagementModels kept — VP of Infra needs pricing transparency to bring a number to finance.
//   - 10 sections total — at the ceiling but justified for enterprise-facing strategic service,
//     same density as /services/cloud-strategy.

const finops: ServicePageData = {
  slug: 'finops',
  title: 'FinOps & Cloud Cost Optimization',
  shortDescription:
    'A structured cloud cost engagement that audits your spend, eliminates waste, and establishes the governance practices that keep savings permanent — not a one-time report that gathers dust.',

  metaTitle: 'FinOps & Cloud Cost Optimization | Azure & AWS Cost Consulting',
  metaDescription:
    'FinOps consulting that audits cloud spend, right-sizes resources, optimizes commitments, and establishes ongoing governance. Savings that compound — not a one-time spreadsheet.',
  keywords: [
    'finops consulting',
    'cloud cost optimization',
    'aws cost optimization',
    'azure cost optimization',
    'cloud cost management',
    'cloud spend audit',
    'cloud cost governance',
    'cloud tagging strategy',
    'reserved instance management',
    'cloud cost allocation',
    'finops practice setup',
    'cloud waste elimination',
  ],
  canonicalPath: '/services/finops',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'FinOps & Cloud Cost Optimization', href: '/services/finops' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'discoveryMethodology',
    'signature',
    'processTimeline',
    'benefitsGrid',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'infrastructure',
  signatureComponent: 'FinOpsCostWaterfall',
  heroIllustrationComponent: 'FinOpsHeroIllustration',

  hero: {
    badge: 'Strategic Service',
    headline: 'Cloud cost clarity that outlasts the audit.',
    subhead:
      'A structured engagement that audits your cloud spend, eliminates waste, and builds the governance your team runs after we leave — so savings compound instead of eroding in six months.',
    primaryCta: { label: 'Book FinOps Call', href: '/contact' },
    secondaryCta: { label: 'See the framework', href: '#signature' },
  },

  // Audience test: VP of Infrastructure under CFO pressure needs immediate signal that
  // (a) this is systematic, not a single-lever quick fix; and (b) the engagement produces
  // ongoing practice, not a dead spreadsheet. Every metric is deliverable-framed
  // (greenfield-safe — describes our engagement, no fabricated past outcomes).
  metricsStrip: [
    {
      value: '4 weeks',
      label: 'Audit to governance',
      description: 'Structured phases, predictable timeline',
    },
    {
      value: '4 Levers',
      label: 'Systematic optimization',
      description: 'Visibility, right-sizing, commitments, governance',
    },
    {
      value: 'Dashboard',
      label: 'Live cost visibility',
      description: 'Shared accountability, not a static report',
    },
    {
      value: 'Ongoing',
      label: 'Practice that sticks',
      description: 'Policies, alerts, review cadence built in',
    },
  ],

  // Audience test: VP of Infrastructure evaluates FinOps partners on the rigor of their
  // framework. These are the four lenses we apply — aligned with the FinOps Foundation's
  // three-phase model (Inform, Optimize, Operate), adapted to our methodology. Each card
  // describes the lens, not fabricated past work.
  methodology: [
    {
      icon: 'Eye',
      name: 'Cost Visibility & Allocation',
      description:
        'Tagging strategy, showback/chargeback models, and cost attribution to teams, products, or tenants — so every dollar has an owner and every team sees what they consume.',
    },
    {
      icon: 'Scissors',
      name: 'Right-Sizing & Waste Elimination',
      description:
        'Systematic identification of oversized resources, idle workloads, orphaned storage, and expired capacity. Waste is surfaced with evidence and remediated through your change process.',
    },
    {
      icon: 'TrendingDown',
      name: 'Rate & Commitment Optimization',
      description:
        'Reserved instance planning, savings plan structuring, and spot-instance strategy — sized to your actual usage pattern and growth profile, not vendor-recommended defaults.',
    },
    {
      icon: 'Shield',
      name: 'Governance & Forecasting',
      description:
        'Budget policies, anomaly detection, spend forecasting, and review cadences that turn cost management into an ongoing practice your team runs without us after handover.',
    },
  ],

  processSteps: [
    {
      title: 'Cloud Spend Audit',
      description:
        'Automated and manual analysis of your current cloud spend across accounts and services. Waste surfaced, top spenders identified, and optimization candidates ranked by effort-to-savings ratio.',
      duration: 'Week 1',
      deliverable: 'Cost audit report, waste inventory, ranked optimization candidate list',
    },
    {
      title: 'Tagging & Allocation Setup',
      description:
        'Tagging standard designed and applied across resources. Cost allocation framework maps spend to teams, products, or cost centers so governance policies have something to enforce against.',
      duration: 'Week 1–2',
      deliverable: 'Tagging standard, cost allocation framework, retroactive tagging plan',
    },
    {
      title: 'Optimization Execution',
      description:
        'Right-sizing, waste elimination, and commitment purchases executed in coordination with your engineering teams. Every change documented with before/after evidence for finance review.',
      duration: 'Week 2–3',
      deliverable: 'Right-sizing change log, commitment purchase plan, waste remediation evidence',
    },
    {
      title: 'Governance & Dashboards',
      description:
        'Budget policies, anomaly detection, forecasting models, and executive dashboards deployed. Alerts route to the teams accountable for the spend, not a generic inbox.',
      duration: 'Week 3–4',
      deliverable: 'Budget policies, anomaly detection rules, cost dashboards, alert routing',
    },
    {
      title: 'FinOps Practice Handover',
      description:
        'Monthly review cadence, accountability model, and team enablement sessions. Your engineering and finance teams leave with the practices, rituals, and playbook to sustain cost discipline.',
      duration: 'Week 4',
      deliverable: 'FinOps playbook, review cadence, team training complete, handover signed',
    },
  ],

  // Audience test: VP of Infrastructure wants to know what the engagement produces —
  // concrete outcomes they can explain to finance and operations. Frame benefits as
  // deliverable-tied outcomes of the engagement, not fabricated performance claims.
  benefits: [
    {
      icon: 'Map',
      title: 'A Clear Cost Map',
      description:
        'Every dollar of cloud spend allocated to a team, product, or cost center. No more "IT cost" black box — finance and engineering look at the same numbers and agree on what they mean.',
    },
    {
      icon: 'Scissors',
      title: 'Immediate Waste Elimination',
      description:
        'Oversized instances, idle workloads, orphaned storage, and expired commitments surfaced and removed during the engagement — not left on a list for "later when we have time."',
    },
    {
      icon: 'BarChart3',
      title: 'Forecast Accuracy',
      description:
        'Spend forecasting tied to actual usage drivers, not last-year-plus-X. Finance gets predictable numbers to plan against; engineering gets early warning before budgets break.',
    },
    {
      icon: 'Shield',
      title: 'A Practice That Runs Itself',
      description:
        'Governance policies, review cadences, and an accountability model your organization operates after we leave — so costs do not drift back up in six months.',
    },
  ],

  engagementModels: [
    {
      name: '1-Week Cost Quick Scan',
      duration: '1 week',
      priceFrom: '$10,000',
      whatsIncluded: [
        'Automated spend analysis across accounts',
        'Top waste and right-sizing candidates',
        'Commitment utilization review',
        'Executive summary with ranked opportunities',
        'Data-backed scope for a full engagement',
      ],
      suitableFor: 'Teams who want a data-backed view of their waste before committing to a full FinOps engagement',
      primaryCta: { label: 'Book Quick Scan', href: '/contact?finops=quickscan' },
    },
    {
      name: '4-Week Full FinOps Engagement',
      duration: '4 weeks',
      priceFrom: '$45,000',
      whatsIncluded: [
        'Full 5-step process above',
        'Tagging strategy and cost allocation',
        'Right-sizing and waste elimination execution',
        'Commitment planning and purchase',
        'Governance policies and dashboards',
        'FinOps practice handover and team training',
      ],
      suitableFor: 'Mid-market enterprises needing a complete FinOps setup — audit, optimization, and ongoing governance in one structured engagement',
      primaryCta: { label: 'Book Full Engagement', href: '/contact?finops=full' },
      featured: true,
    },
    {
      name: 'Ongoing FinOps Retainer',
      duration: 'Monthly retainer',
      priceFrom: '$8,000/month',
      whatsIncluded: [
        'Monthly optimization review and execution',
        'Commitment portfolio management',
        'Anomaly investigation and response',
        'Forecasting and budget updates',
        'Quarterly FinOps maturity review',
        'Direct Slack/Teams access to FinOps engineers',
      ],
      suitableFor: 'Organizations that want sustained cost discipline without building an in-house FinOps team — or need bench depth alongside internal staff',
      primaryCta: { label: 'Discuss Retainer', href: '/contact?finops=retainer' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Strategy & Assessment',
      description:
        'Still planning your cloud journey? A structured assessment builds the business case with TCO upfront — so cost discipline starts before migration, not after the bill surprises finance.',
      href: '/services/cloud-strategy',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Cost is a symptom of how infrastructure is built. We design IaC-first cloud environments with tagging, cost governance, and right-sizing baked into the platform — not bolted on later.',
      href: '/services/cloud-infrastructure',
      icon: 'Server',
      pageType: 'service',
    },
    {
      title: 'Cloud Migration & Modernization',
      description:
        'Migrating soon? Migration decisions lock in costs for years. We apply FinOps principles during wave planning — so your new cloud environment is optimized from day one, not day 180.',
      href: '/services/cloud-migration',
      icon: 'CloudUpload',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How much can we realistically save?',
      answer:
        'Savings vary significantly by cloud maturity. Environments that have never been systematically optimized usually have more headroom than teams with basic right-sizing already in place. We do not quote a savings number before the audit — that kind of up-front promise is exactly what erodes trust when reality lands differently. The 1-Week Quick Scan is designed to give you an evidence-backed estimate of your specific optimization potential before you commit to a full engagement.',
    },
    {
      question: 'What access do you need to our cloud accounts?',
      answer:
        'Read-only access to your billing, cost management, and resource inventory APIs is enough for the audit phase. For optimization execution, we work through your existing change management process — we recommend changes and your team approves and applies them, or we apply them under your supervision. We never need production write credentials or unsupervised access.',
    },
    {
      question: 'How is this different from what AWS or Azure recommend for free?',
      answer:
        'Cloud vendor tools are a useful starting point, but they carry a built-in bias — they prioritize staying on the platform and buying more commitments. We evaluate their recommendations against your specific usage patterns, growth plans, and architectural constraints. We also look at categories the vendor tools surface poorly: tagging discipline, tenant-level allocation, architectural waste, and the organizational accountability that keeps savings from eroding.',
    },
    {
      question: 'Do we need a dedicated FinOps team to work with you?',
      answer:
        'No. Most mid-market clients do not have a dedicated FinOps role — which is why the engagement ends with a practice handover designed for an engineering-finance partnership, not a specialized team. For larger organizations with existing FinOps staff, we operate as capacity and capability bench rather than as the primary practitioners.',
    },
    {
      question: 'What happens to savings after the engagement ends?',
      answer:
        'The governance setup is designed to prevent cost drift. Budget policies, anomaly detection, and review cadences catch new waste before it compounds. The monthly review ritual gives your team the accountability structure to sustain discipline. Clients who want sustained hands-on optimization continue with us on a retainer; clients who prefer independence leave with the tools and playbook to run FinOps internally.',
    },
    {
      question: 'Can you handle multi-cloud environments (Azure + AWS + GCP)?',
      answer:
        'Yes. The five-lever framework is cloud-neutral, though the specific tactics and tools differ per platform. We use native vendor tools (Azure Cost Management, AWS Cost Explorer, GCP Billing) alongside cross-cloud allocation and tagging frameworks to produce a unified view of spend — so you can compare platforms, allocate fairly, and forecast across all of them.',
    },
  ],

  cta: {
    title: 'Ready to take control of your cloud spend?',
    description:
      'Book a 30-minute call. We will discuss your current environment, spend level, and optimization goals — and outline what a structured FinOps engagement looks like for your organization.',
    primaryCta: { label: 'Book FinOps call', href: '/contact' },
    secondaryCta: { label: 'See the framework', href: '#signature' },
  },

  _unverified: [
    'metricsStrip[0]: "4 weeks" timeline — confirm achievability for full engagement including governance handover.',
    'engagementModels[*].priceFrom — placeholder prices benchmarked against comparable FinOps engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "1 week" for Quick Scan. Confirm achievability with our tooling stack.',
    'engagementModels[2].priceFrom — "$8,000/month" retainer pricing. Confirm with user.',
    'processSteps durations — week ranges are illustrative. Confirm actual engagement cadence against delivery capacity.',
    'methodology alignment with FinOps Foundation model — reference is accurate (Inform/Optimize/Operate is public framework), but confirm we want to imply alignment.',
  ],
};

export default finops;
