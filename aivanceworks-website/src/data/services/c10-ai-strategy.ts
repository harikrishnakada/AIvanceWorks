import type { ServicePageData } from '@/types/pages';

// Archetype C — Regulated/governed (adapted for an advisory service engagement)
//
// Why C and not A (self-challenge, §9.6):
//   The brief labels the archetype "Technical / running-system deliverables"
//   (B), but the content is entirely advisory artifacts (assessment, roadmap,
//   governance framework) — there is no running system, so B is out. The
//   buyer mindset in the brief ("knows they need AI but doesn't know where to
//   start") reads as Archetype A, and AIvanceWorks already ships an
//   Archetype-A AI strategy page (/services/ai-strategy-consulting). Building
//   a second Archetype-A AI strategy page would duplicate it. The audience
//   test (§9.5) and the user's archetype guidance ("regulated → C; does the
//   buyer answer to a regulator or a revenue target?") resolve it: this page
//   is the C10 *Advisory-practice* AI strategy offering — the nav-visible
//   sibling of c10-it-consulting / c10-cloud-computing / c10-architecture-
//   advisory — positioned for governance-mature and regulated enterprises
//   where AI *risk and governance is the gate*. AI risk is now a board- and
//   risk-committee-level concern (EU AI Act, NIST AI RMF, model-risk regimes),
//   so the buyer answers to a governance body, not just a P&L. That makes C
//   the honest, differentiated, non-duplicative call. Mirrors the c10-it-
//   consulting composition (its Advisory-batch sibling) for batch coherence.
//
// Buyer: CIO / Chief Data & AI Officer / Chief Risk Officer / CISO at a
//   mid-to-large enterprise (500–5,000 employees) in a governance-mature or
//   regulated sector — financial services (banks, insurers), healthcare and
//   life sciences, public sector, and publicly-traded (SOX) companies.
// Measured on: a defensible AI investment portfolio, AI risk posture (model
//   risk, bias, data privacy), board/risk-committee confidence in the AI
//   program, avoided spend on failed pilots, and regulatory readiness (EU AI
//   Act, NIST AI RMF, sector rules).
// Top 3 questions: (1) "Which AI use cases do we actually fund — and can I
//   defend those choices to my board and risk committee?" (2) "How do we adopt
//   AI without creating a regulatory, model-risk, or reputational liability?"
//   (3) "How is this different from a vendor's AI team that just wants to sell
//   us their platform?"
// Key trust issue: burned by vendor-skewed AI strategy decks with no
//   governance lens — roadmaps full of AI ideas, no risk tiering, no path past
//   the risk committee, and pilots that either died in "pilot purgatory" or
//   surfaced bias/privacy problems on real data.
// Signature: AiUseCasePortfolioMatrix — a Business Value × Readiness quadrant
//   with an AI-risk-tier overlay (EU AI Act / NIST AI RMF). Carries the
//   argument: "A list of AI ideas is not a strategy; a sequenced, risk-tiered
//   portfolio is — fund the defensible quick wins, gate the high-risk bets."
//
// Composition is Archetype C adapted for a strategic service (mirrors
//   c10-it-consulting):
//   DiscoveryMethodology replaces FeatureGrid — the engagement sells
//     disciplines, not product features.
//   ComplianceDeepDive kept (§2.1 v2.1 services extension) because the AI
//     governance apparatus IS the deliverable, not an attribute of a shipped
//     system — exactly the c10-it-consulting precedent.
//   IntegrationsPanel / CaseStudySpotlight / BenefitsGrid dropped — advisory
//     produces documents (no integrations), greenfield (no verified case), and
//     complianceDeepDive + engagementModels already carry "what you get"
//     without pushing past the 10-section ceiling.
//   imageFeatures / photos omitted — per §11.5 service pages use an SVG hero
//     illustration and render imageFeatures as null; the sibling advisory
//     pages carry no photos. (Deviation from the generic photo instruction in
//     the page brief — recorded in the constitution changelog v2.9.)
//   10 sections — at density ceiling, justified for an enterprise advisory
//     page targeting board/risk-committee-gated buyers.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → DiscoveryMethodology (warm) →
//   Signature (dark) → ComplianceDeepDive (light) → ProcessTimeline (warm) →
//   EngagementModels (light) → RelatedPages (warm) → FAQ (light) → CTA (accent)

const c10AiStrategy: ServicePageData = {
  slug: 'c10-ai-strategy',
  title: 'C10 AI Strategy',
  shortDescription:
    'Vendor-neutral AI strategy for governed enterprises — AI readiness assessment, risk-tiered use case prioritization, a phased roadmap, and a responsible-AI governance framework your board and risk committee can stand behind.',

  metaTitle: 'AI Strategy Consulting for Governed Enterprises | Roadmap & Governance',
  metaDescription:
    'AI strategy advisory for CIOs, Chief Data & AI Officers, and risk leaders in regulated industries — AI readiness assessment, risk-tiered use case prioritization, a 12–24 month roadmap, and a responsible-AI governance framework mapped to the EU AI Act and NIST AI RMF.',
  keywords: [
    'ai strategy consulting',
    'enterprise ai strategy',
    'ai governance framework',
    'responsible ai consulting',
    'ai readiness assessment',
    'ai use case prioritization',
    'ai risk management',
    'eu ai act compliance consulting',
    'nist ai rmf',
    'ai roadmap consulting',
    'ai model risk management',
    'ai strategy for financial services',
    'ai strategy for healthcare',
  ],
  canonicalPath: '/services/c10-ai-strategy',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'C10 AI Strategy', href: '/services/c10-ai-strategy' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'discoveryMethodology',
    'signature',
    'complianceDeepDive',
    'processTimeline',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'ai-ml',
  signatureComponent: 'AiUseCasePortfolioMatrix',
  heroIllustrationComponent: 'AiStrategyAdvisoryHeroIllustration',

  hero: {
    badge: 'AI Strategy · Advisory',
    headline: 'An AI strategy your board and your risk committee can stand behind.',
    subhead:
      'Vendor-neutral AI strategy for governed enterprises — readiness assessment, risk-tiered use case prioritization, and a phased roadmap with a responsible-AI governance framework, before you fund a single model.',
    primaryCta: { label: 'Book Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the prioritization matrix', href: '#signature' },
  },

  // Audience test: a CIO / Chief Data & AI Officer / CRO scans these in under
  // 10 seconds. Every value is capability-framed (greenfield-safe) — no uncited
  // % claims, no outcome promises. Each answers a specific buyer question:
  //  - "Are you independent, or are you selling me a platform?"  → Vendor-Neutral
  //  - "Do you treat AI risk seriously, the way my regulator does?" → Risk-Tiered
  //  - "What can I take to my board?" → Board-Ready
  //  - "Is governance bolted on after, or designed in?" → Governance-First
  metricsStrip: [
    {
      value: 'Vendor-Neutral',
      label: 'Independent AI advisory',
      description: 'No model or platform reseller fees, no shortlist bias',
    },
    {
      value: 'Risk-Tiered',
      label: 'Every use case classified',
      description: 'Mapped to EU AI Act tiers and the NIST AI RMF',
    },
    {
      value: 'Board-Ready',
      label: 'Investment case + risk register',
      description: 'Built for your risk committee, not a sales deck',
    },
    {
      value: 'Governance-First',
      label: 'Responsible-AI framework',
      description: 'Designed before any model is funded',
    },
  ],

  // Audience test: a CIO reading a "methodology" grid wants (a) do you own the
  // disciplines my AI program needs, (b) does the vocabulary match how my risk
  // committee and CFO already talk about AI, (c) does the list cover the
  // decisions that actually land on my desk. Each card names a discipline the
  // buyer has seen cited in analyst reports and board memos.
  methodology: [
    {
      icon: 'BarChart3',
      name: 'AI Readiness & Maturity Assessment',
      description:
        'Structured evaluation across five dimensions — data quality and lineage, talent, technology, business processes, and existing AI investments — so you start from an honest current-state baseline, not an aspirational one.',
    },
    {
      icon: 'Target',
      name: 'Use Case Discovery & Risk-Tiered Prioritization',
      description:
        'Facilitated workshops surface candidate use cases, then score each on business value and feasibility and classify it by AI-risk tier — so the portfolio you fund is sequenced by impact and screened for regulatory exposure before anything starts.',
    },
    {
      icon: 'Map',
      name: 'AI Roadmap & Business Case',
      description:
        'The priority use cases are sequenced into a 12–24 month phased roadmap, each paired with a business case and a model-risk view your finance and risk functions can evaluate — including the honest build-vs-buy-vs-partner call.',
    },
    {
      icon: 'ShieldCheck',
      name: 'Responsible-AI Governance Framework',
      description:
        'Responsible-AI principles, an AI risk taxonomy, an oversight operating model, and model-validation protocols — designed at the strategy stage and mapped to the NIST AI RMF and EU AI Act, so governance is architecture, not a retrofit.',
    },
  ],

  // ComplianceDeepDive repurposed as the AI-governance apparatus that makes the
  // strategy defensible. Audience test: a Chief Risk Officer / CIO asks "does
  // this firm actually understand how my AI decisions get reviewed?" Each
  // safeguard names a concrete governance artifact, not a marketing pillar.
  // Frameworks listed are the AI-governance regimes governed enterprises now
  // reconcile their AI programs against. Greenfield-honest: these are the
  // frameworks we design TO, not certifications we hold or audits we have
  // passed — validation and certification remain the client's to own.
  complianceDeepDive: {
    frameworks: ['NIST AI RMF', 'EU AI Act', 'ISO/IEC 42001', 'ISO/IEC 23894', 'Model Risk (SR 11-7-aligned)', 'SOC 2 / HIPAA / GLBA (as applicable)'],
    safeguards: [
      {
        icon: 'ClipboardList',
        title: 'AI Use-Case Risk Register & Tiering',
        description:
          'Every candidate use case classified by AI-risk tier — mapped to EU AI Act risk categories and NIST AI RMF impact levels — and recorded in a risk register your governance team can adopt directly, so high-risk use cases are flagged before, not after, a pilot is funded.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Responsible-AI Principles & Policy',
        description:
          'A responsible-AI policy tailored to your organization — fairness, transparency, accountability, human oversight, and acceptable-use boundaries — written so it can be ratified by your AI governance body and referenced in your regulatory file, not left as an aspiration on a slide.',
      },
      {
        icon: 'GitCompareArrows',
        title: 'Model Risk & Validation Framework',
        description:
          'A model-risk framework covering bias and fairness testing, explainability expectations, drift monitoring, and validation gates — structured along established model-risk-management lines (SR 11-7-aligned for financial-services buyers) so each model has a defined review and challenge process before it influences a decision.',
      },
      {
        icon: 'Database',
        title: 'Data Governance & Privacy Alignment',
        description:
          'Data lineage, classification, PII and PHI handling, residency, and retention reviewed against the use cases on the roadmap — so the data foundations an AI program depends on are mapped to your privacy obligations (GDPR/CCPA, HIPAA, GLBA) before models are trained on them.',
      },
      {
        icon: 'LayoutGrid',
        title: 'AI Governance Operating Model',
        description:
          'Roles, an AI oversight committee charter, RACI for AI decisions, and escalation paths — so accountability for model approval, monitoring, and incident response is established and owned before the first model reaches production, not improvised after an incident.',
      },
      {
        icon: 'UserCheck',
        title: 'Independent, Reseller-Free Advisory',
        description:
          'We do not resell models, platforms, or licenses, take vendor referral fees, or run a partner program. Foundation-model and infrastructure recommendations are the ones the evaluation produced — documented so your procurement and internal audit teams can verify the independence of the reasoning.',
      },
    ],
    auditNote:
      'Our deliverables are written for the people who review AI decisions: your AI governance body, model-risk and internal-audit functions, and — where applicable — your regulator. The risk register, responsible-AI policy, model-risk framework, and governance operating model are produced in formats your governance team can adopt directly. We design strategy and governance frameworks; validation, conformity assessment, and regulatory filings remain owned by your organization and its counsel.',
    partnerAgreements: ['NDA', 'MSA', 'DPA on request'],
  },

  processSteps: [
    {
      title: 'AI Ambition & Governance Scoping',
      description:
        'Align with executive sponsors, the risk/compliance liaison, and business unit leaders on AI ambitions, constraints, the regulatory regimes in play, and what a successful, defensible outcome looks like — before the assessment begins.',
      duration: 'Week 1',
      deliverable: 'Scope document, AI ambition statement, regulatory applicability matrix, stakeholder map',
    },
    {
      title: 'AI Readiness & Landscape Assessment',
      description:
        'Structured review of your data assets and lineage, talent, technology, existing AI investments, and competitive context. We map what you have — and what is missing — across all five readiness dimensions before recommending where AI belongs.',
      duration: 'Week 1–2',
      deliverable: 'AI maturity scorecard, current-state landscape map, data-readiness and gap analysis',
    },
    {
      title: 'Use Case Discovery & Risk-Tiered Scoring',
      description:
        'Facilitated workshops with each business unit surface candidate use cases. Every one is scored for business value and feasibility and classified by AI-risk tier, so the portfolio is prioritized by impact and screened for regulatory exposure in the same pass.',
      duration: 'Week 2–3',
      deliverable: 'Use case inventory, prioritization matrix, AI-risk register with tiering',
    },
    {
      title: 'Roadmap, Business Case & Model-Risk View',
      description:
        'Priority use cases are sequenced into a 12–24 month phased roadmap, each with a business case, a build-vs-buy-vs-partner recommendation, and a model-risk view. The roadmap accounts for data dependencies, team capacity, and governance gates.',
      duration: 'Week 3–4',
      deliverable: 'AI roadmap, business cases for top 3–5 use cases, model-risk view, investment summary',
    },
    {
      title: 'Responsible-AI Framework & Executive Handover',
      description:
        'Responsible-AI principles, AI risk taxonomy, governance operating model, and model-validation protocols designed for your organization and mapped to the NIST AI RMF and EU AI Act. Concludes with an executive readout and a handover package built for your team to execute.',
      duration: 'Week 4',
      deliverable: 'Responsible-AI framework, governance operating model, executive readout package',
    },
  ],

  engagementModels: [
    {
      name: 'AI Strategy Quick Scan',
      duration: '2 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'AI readiness evaluation across 5 dimensions',
        'Stakeholder discovery interviews',
        'Top 5–8 AI use case candidates identified',
        'High-level value, feasibility, and AI-risk-tier screen',
        'Executive readiness summary with priority recommendations',
      ],
      suitableFor:
        'Leaders who need an independent, data-backed view of where AI fits — and which use cases carry regulatory risk — before committing to a full assessment',
      primaryCta: { label: 'Book Quick Scan', href: '/contact?ai=quickscan' },
    },
    {
      name: 'AI Strategy & Governance Assessment',
      duration: '4–6 weeks',
      priceFrom: '$45,000',
      whatsIncluded: [
        'Full 5-step process above',
        'AI maturity scorecard across all five dimensions',
        'Business-unit use case workshops and discovery',
        'Risk-tiered prioritization matrix for all candidates',
        '12–24 month AI roadmap with phased initiatives',
        'Business cases and model-risk view for top 3–5 use cases',
        'Responsible-AI framework and governance operating model',
      ],
      suitableFor:
        'Mid-market to enterprise organizations planning their first major AI program — or resetting one — that must survive board and risk-committee scrutiny',
      primaryCta: { label: 'Book Full Assessment', href: '/contact?ai=assessment' },
      featured: true,
    },
    {
      name: 'Enterprise AI Transformation Advisory',
      duration: '8–12 weeks',
      priceFrom: '$95,000',
      whatsIncluded: [
        'Everything in the Strategy & Governance Assessment',
        'Multi-business-unit workshop series',
        'Detailed financial and model-risk modeling for top use cases',
        'AI operating model and talent development plan',
        'Change management and adoption framework',
        'Foundation-model and infrastructure evaluation guidance',
        'Executive steering-committee and AI governance-body facilitation',
      ],
      suitableFor:
        'Enterprises undergoing AI-driven transformation that need organizational design and a standing governance function alongside the strategy',
      primaryCta: { label: 'Book Advisory Call', href: '/contact?ai=transform' },
    },
  ],

  relatedPages: [
    {
      title: 'Enterprise AI Development',
      description:
        'Roadmap approved and a priority use case ready to build? We take it into governed production — wrapping the model in the security, data governance, scalable architecture, and operations a large organization requires before go-live.',
      href: '/services/enterprise-ai-development',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
    {
      title: 'C10 IT Consulting',
      description:
        'AI strategy is one bet inside a larger technology agenda? Our IT advisory applies the same vendor-neutral, audit-mapped discipline to vendor selection, cloud, and platform decisions — the broader roadmap your AI program sits inside.',
      href: '/services/c10-it-consulting',
      icon: 'MessageSquare',
      pageType: 'service',
    },
    {
      title: 'AI Infrastructure',
      description:
        'Roadmap calls for running AI at production scale? See the governed platform layer — compute, data, and model-serving — engineered to carry the use cases your strategy prioritized without becoming a compliance gap.',
      href: '/solutions/ai-infrastructure',
      icon: 'Server',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'How is this different from your AI Strategy & Consulting service?',
      answer:
        'Both produce an AI strategy, but the lens differs. Our AI Strategy & Consulting engagement is the exploratory, AI-pillar offering for organizations getting started with AI. C10 AI Strategy is the Advisory-practice engagement for governed and regulated enterprises — financial services, healthcare, life sciences, public sector, and SOX-reporting companies — where AI risk and governance is the gate. Here, every use case is risk-tiered against the EU AI Act and NIST AI RMF, the deliverables include a model-risk framework and governance operating model, and the whole engagement is built to survive board and risk-committee review. If AI governance is a board-level concern for you, this is the engagement designed for it.',
    },
    {
      question: 'How do you stay vendor-neutral when every consultant claims to be?',
      answer:
        'Structurally. We do not resell AI models, platforms, or licenses, take vendor referral fees, or run a partner program — independence is designed into the business model, not claimed in marketing copy. Scoring criteria for any model or infrastructure recommendation are defined before evaluation, the reasoning is documented so your procurement and internal-audit teams can verify it, and any vendor relationship is disclosed up front. If the evidence points at an open-source model, a hybrid, or no AI at all, we document that with the same rigor.',
    },
    {
      question: 'Do we need an existing AI team or mature data to start?',
      answer:
        'No. The assessment is designed for wherever you are today — from zero internal AI capability to a team already running experiments. The maturity assessment specifically evaluates talent, data lineage, and organizational readiness, and the roadmap accounts for your actual baseline rather than an idealized future state. Where data foundations are not ready, the roadmap sequences the data engineering work ahead of the models that depend on it, instead of assuming the data is fit for use.',
    },
    {
      question: 'How do you handle AI regulations like the EU AI Act and model-risk rules?',
      answer:
        'Regulatory exposure is assessed during prioritization, not bolted on afterward. Each use case is classified by AI-risk tier — mapped to EU AI Act risk categories and NIST AI RMF impact levels — and high-risk use cases (for example, those affecting credit, employment, or essential services) are flagged for a governance gate before any build. For financial-services buyers, the model-risk framework is structured along established model-risk-management lines (SR 11-7-aligned). We design the strategy and governance frameworks to these regimes; formal conformity assessment, validation, and regulatory filings remain owned by your organization and its counsel.',
    },
    {
      question: 'How do you handle the sensitive information shared in discovery workshops?',
      answer:
        'The assessment uses facilitated workshops, structured interviews, and document reviews — not direct access to your production data systems. Information discussed is treated as confidential under an NDA agreed before the engagement begins and is not retained after it concludes. Where the engagement touches regulated data, a DPA (and a BAA, if PHI is involved) is put in place. Information-handling procedures and access boundaries are documented in the scope document delivered at kickoff.',
    },
    {
      question: 'Can you implement the roadmap after the assessment, or only advise?',
      answer:
        'We are an advisory service — the deliverable is decisions and documentation, not shipped systems. Most organizations that complete the assessment continue into implementation, because the prioritized use cases, business cases, and governance framework we produce flow directly into engineering engagements with our enterprise AI, data, and security teams. You are never obligated. The deliverables are yours regardless, and the roadmap is written so any qualified team — internal or external — can execute against it.',
    },
  ],

  cta: {
    title: 'Ready to build an AI strategy your board and your regulator can both live with?',
    description:
      'Book a 30-minute call. We will discuss your AI ambitions, current capabilities, regulatory context, and timeline — and outline what a vendor-neutral, governance-first assessment looks like for your organization.',
    primaryCta: { label: 'Book Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the prioritization matrix', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder indicative pricing; confirm with user before publishing.',
    'engagementModels[*].duration — typical ranges for advisory engagements; confirm against real delivery estimates.',
    'processSteps durations — week ranges are indicative; confirm actual assessment cadence once first delivery completes.',
    'signature (AiUseCasePortfolioMatrix) — the plotted use cases and their positions/risk tiers are an illustrative cross-industry example of the prioritization logic, NOT a client deliverable or measured data. Acceptable as a methodology illustration; flagged so it is not mistaken for a case study.',
    'faq[5] — "most organizations continue into implementation" is aspirational until real conversion data exists. Flagged for review.',
    'complianceDeepDive.partnerAgreements — "DPA on request" / BAA posture depends on whether an engagement touches regulated data; confirm standard contract posture.',
  ],
};

export default c10AiStrategy;
