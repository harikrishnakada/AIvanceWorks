import type { SolutionPageData } from '@/types/pages';

// Archetype B — Technical Solution (Wealth & Investment Management, US)
//
// Repositioned 2026-04-29 from Archetype C (Regulated) per SME (Russell) input.
// Plan: .agents/plans/wealth-investment-management-rewrite.md
//
// Buyer (firm): Head of Wealth Management / CTO of the Wealth Division at a
//   tier-1 wirehouse, regional bank wealth division, private bank, or large
//   broker-dealer. Also addressable: independent broker-dealers, large RIAs
//   ($1B+ AUM), multi-family offices, trust companies, and bank trust
//   departments. Russell's transcript phrase: "It needs to be connected with
//   the main server and main system of the bank. It can't be like its own
//   thing. It has to be interconnected." This is a bank-stack integration
//   buyer, not a regulator-defense buyer.
//
// End-clients (the "profile" the advisor opens — ALL of these in one platform):
//   individuals, households, trusts, family offices, institutional accounts
//   (foundations, endowments, corporate retirement), and business owners with
//   mixed personal + business wealth. Industry-canonical noun: "client".
//   "Household" is a sub-relationship for grouping individuals, not the
//   universe.
//
// Top 3 buyer questions:
//   1. "Will this integrate with our core banking system, custodian, CRM, and
//      planning stack the way our IT team needs it to?"
//   2. "Can our advisors lead a client meeting from one screen — every account,
//      asset, and entity in one view — across mass-affluent through
//      institutional clients?"
//   3. "How does the platform capture wealth that isn't custodied — homes,
//      private businesses, art, trusts, private equity stakes — alongside the
//      custodial book?"
//
// Key trust issue: Prior wealth-tech vendors that built standalone advisor
//   portals that didn't integrate cleanly into the bank's core, custodian, or
//   planning stack — leaving advisors toggling between five systems and
//   re-entering household data into each one. Russell explicit: "It can't be
//   like its own thing." Integration depth is the load-bearing trust signal.
//
// Signature: ClientWealthCanvas — hierarchical / architectural visualization
//   (§8.3 #2). Three bands: How wealth gets in (top, 4 input tiles) → The
//   unified client (middle, the centered core card with 6 wealth-domain pillars
//   plus a client-type strip) → What the advisor does next (bottom, 4 output
//   tiles). Argument: "One screen, every asset, every entity. The advisor
//   opens the client's profile and walks the meeting from there."
//
// Composition follows Archetype B precedent (technical solution). Deviations
// recorded against the constitution:
//   - Compliance sections (ComplianceSpotlight, ComplianceDeepDive) DROPPED —
//     was central under prior Archetype C framing. The new buyer is led by
//     integration depth, not regulator-defense. Suitability / KYC kept as a
//     FEATURE for advisor-file completeness, not as a regulatory exhibit.
//   - Composition density 11 sections — slight overshoot of §6.3's 6–10
//     target. Justified for a $50M-tier engagement requiring breadth across
//     multi-segment, multi-stack integration, manual + automated ingestion,
//     advisor workflow, and bank-core connectivity.
//   - Same-vertical peer in relatedPages (Financial Document Management) per
//     §10 v2.1 exception. Records-only is a legitimate narrower-scope
//     alternative for a buyer whose mandate is narrower than full advisor
//     workstation replacement.
//   - ImageFeatures retained per §11.5 two-track imagery — existing photos at
//     /images/solutions/wealth-investment-management/ fit the new positioning.

const wealthInvestmentManagement: SolutionPageData = {
  slug: 'wealth-investment-management',
  title:
    'Custom Wealth & Investment Management Software Development for Wealth Divisions, RIAs, Broker-Dealers & Family Offices',

  shortDescription:
    'Custom wealth and investment management platforms for wirehouses, regional bank wealth divisions, private banks, broker-dealers, RIAs, and family offices — a unified advisor workstation that holds every client\'s full picture across individual, household, trust, and institutional accounts, integrated IT-team-led with your core banking, custodian, CRM, and planning stack.',

  metaTitle:
    'Wealth & Investment Management Software Development | Wealth Divisions, RIAs, Broker-Dealers, Family Offices',
  metaDescription:
    'Custom wealth and investment management software for wirehouses, regional bank wealth divisions, RIAs, broker-dealers, and family offices. A unified advisor workstation, manual + connected ingestion of every asset and entity, and IT-led integration into your core banking, custodian, CRM, and planning stack.',
  keywords: [
    'wealth management software development',
    'investment management platform',
    'custom wealth management platform',
    'advisor workstation software',
    'wealth division platform',
    'family office platform development',
    'private bank wealth platform',
    'RIA software development',
    'broker-dealer wealth platform',
    'household wealth aggregation platform',
    'client portal wealth management',
    'portfolio management software development',
    'multi-custodian wealth platform',
    'bank core integration wealth',
  ],
  canonicalPath: '/solutions/wealth-investment-management',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    {
      label: 'Wealth & Investment Management',
      href: '/solutions/wealth-investment-management',
    },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'signature',
    'benefitsGrid',
    'integrationsPanel',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'finance',
  signatureComponent: 'ClientWealthCanvas',

  hero: {
    badge: 'Finance Solutions',
    headline: 'Every asset, every entity, one advisor workstation.',
    subhead:
      'For wirehouses, banks, RIAs, broker-dealers, and family offices — a unified advisor platform that holds every client\'s full wealth picture and integrates IT-team-led with your core banking, custodian, CRM, and planning stack.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the client canvas', href: '#signature' },
    heroImage: {
      src: '/images/solutions/wealth-investment-management/hero.jpg',
      alt: 'Wealth advisor reviewing a client portfolio and financial plan on a tablet during an in-office meeting',
    },
    metrics: [
      {
        value: 'Bank-Core Integrated',
        label: 'IT-architecture-led',
        description:
          'Designed to fit your core banking, custodian, CRM, and planning stack — not sit beside it',
      },
      {
        value: 'Multi-Segment Ready',
        label: 'Mass affluent → institutional',
        description:
          'Individual, household, trust, family office, and institutional clients in one configurable platform',
      },
      {
        value: 'Advisor-First',
        label: 'Workstation, not order entry',
        description:
          'Built for proposal, IPS, planning, and meeting prep — not a trading platform',
      },
    ],
  },

  // Audience test (§9.5): Head of Wealth / CTO of Wealth Division evaluating
  // a platform vendor. They want capability breadth, integration honesty, and
  // multi-segment scale — not regulator-defense framing or fabricated outcome
  // percentages. All four metrics are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'Unified Client Canvas',
      label: 'Every wealth domain in one view',
      description:
        'Real estate, businesses, brokerage, retirement, multi-bank cash, insurance, trusts, alternatives, and liabilities on one screen — net worth computed live across every entity in the relationship.',
    },
    {
      value: 'Bank-Core Interconnected',
      label: 'Core · custodian · CRM · planning · market data',
      description:
        'IT-architecture-led integration into the systems your firm already runs — core banking, custodial platforms, CRM, planning tools, market data, and document management. Designed to fit your stack, not replace it.',
    },
    {
      value: 'Mixed Ingestion: Manual + Connected',
      label: 'Custodied and non-custodied wealth',
      description:
        'Advisor and paraplanner entry for non-custodied wealth (homes, private businesses, art, partnership stakes) alongside automated feeds from custodians, banks, planning tools, and account aggregators where the data lives.',
    },
    {
      value: 'Multi-Segment Scalable',
      label: 'Individual · Household · Trust · Family Office · Institutional',
      description:
        'One platform configured per client segment — mass affluent through ultra-high-net-worth, family offices, and institutional accounts (foundations, endowments, corporate retirement) advised by your wealth practice.',
    },
  ],

  // Audience test: CTO / Head of Wealth thinks in capabilities the platform
  // delivers AND how those capabilities sit inside the firm's existing stack.
  // Each card is a feature, not a regulator artifact. Vendor names appear in
  // the IntegrationsPanel and selected feature prose for credibility.
  features: [
    {
      icon: 'LayoutDashboard',
      title: 'Unified Client Profile',
      description:
        'One screen for every client — every account, asset, and entity in a single view across individual, household, trust, family office, and institutional relationships. The advisor opens the profile and walks the meeting from there.',
    },
    {
      icon: 'Workflow',
      title: 'Manual + Connected Ingestion',
      description:
        'Advisor and paraplanner entry for non-custodied wealth — homes, private businesses, art, collectibles, partnership stakes, life insurance cash value — alongside automated feeds from custodians, banks, planning tools, and market data. Net worth computed live.',
    },
    {
      icon: 'Calculator',
      title: 'Budget, Cash Flow & Goals',
      description:
        'A budget-sheet workflow built into onboarding and reviews — income sources, recurring expenses, savings rate, surplus available for investment, and goal tracking — woven directly into the recommendation flow rather than living in a separate tool.',
    },
    {
      icon: 'FileSignature',
      title: 'Proposal, IPS & Recommendation Workflow',
      description:
        'Proposed allocation against the client\'s risk profile and existing book, IPS (Investment Policy Statement) generation, proposal review and acceptance tracking. Designed for advice — not order entry — so trade execution stays in your custodian or OMS.',
    },
    {
      icon: 'CalendarCheck',
      title: 'Meeting Preparation & Quarterly Reviews',
      description:
        'Quarterly review packets generated from the client canvas — performance vs. benchmark, allocation drift, progress against goals, action items from the prior meeting. Advisors arrive prepared; clients see a consistent professional review every cycle.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Suitability, KYC & Source-of-Wealth File',
      description:
        'Risk tolerance questionnaires, accredited investor verification, source-of-wealth documentation, and trust / entity authority docs — kept current as the advisor\'s client file. Operational completeness for the advisor, not regulatory exhibits for an examiner.',
    },
  ],

  benefits: [
    {
      icon: 'Eye',
      title: 'One Screen, the Full Client Picture',
      description:
        'Advisors open one profile and see every account, asset, and entity in the relationship. No toggle tax between custodian, planning, CRM, document management. The meeting moves at the speed of advice.',
    },
    {
      icon: 'Network',
      title: 'Built Into Your Bank Stack, Not Beside It',
      description:
        'Integration with core banking, custodian, CRM, planning, market data, and document management is the architecture, not an afterthought. Your IT team dictates the patterns; we engineer to them.',
    },
    {
      icon: 'Layers',
      title: 'Multi-Segment Scalability',
      description:
        'One platform configured per segment — mass affluent, HNW households, UHNW family offices, trust accounts, institutional clients. New segments arrive as configuration, not as a separate platform.',
    },
    {
      icon: 'Home',
      title: 'Non-Custodied Wealth, Captured Properly',
      description:
        'Homes, private businesses, art, trust holdings, partnership stakes, and life insurance cash value persisted with the same rigor as the custodial book — so the net-worth picture in the meeting is real, not "everything except the hard stuff."',
    },
    {
      icon: 'TrendingUp',
      title: 'Faster Advisor Workflow, Higher AUM Capture',
      description:
        'A unified workstation removes the system-toggle friction that limits how many clients an advisor can serve well — and surfaces the held-away wealth and goal gaps that drive the next conversation, the next plan, and the next AUM commitment.',
    },
    {
      icon: 'RefreshCw',
      title: 'Vendor-Replaceable Integration Middleware',
      description:
        'Integration middleware decouples the platform from any single custodian, CRM, planning tool, or market-data vendor. A future vendor swap or M&A consolidation is a configuration project — not a re-platform.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Bank IT Architecture Review',
      description:
        'We start where Russell\'s SME framing demands: with your IT team. End-to-end review of your core banking, custodian, CRM, planning, market-data, and document-management stack, the integration patterns IT requires, and the advisor + supervisor workflows your firm runs today across each client segment.',
      duration: '3–5 weeks',
      deliverable:
        'IT architecture review document, system inventory, integration pattern map, advisor and supervisor workflow maps by segment, prioritized capability backlog, manual-ingestion entity model',
    },
    {
      title: 'Architecture, Data Model & Integration Design',
      description:
        'Platform architecture designed around a unified client canvas, a manual + connected ingestion model that handles custodied and non-custodied wealth as first-class entities, and the integration patterns your IT team specified — for each custodian, CRM, planning, market-data, and bank-core system in scope.',
      duration: '3–4 weeks',
      deliverable:
        'Architecture decision records, entity and ownership model (individuals, households, trusts, family offices, institutional), integration spec per system, Azure infrastructure blueprint, security architecture, DR strategy',
    },
    {
      title: 'Core Platform & Advisor Workstation Development',
      description:
        'Iterative development with bi-weekly demos to wealth, advisor, and operations stakeholders. Advisor workstation, unified client canvas, manual ingestion UX, proposal / IPS workflow, planning bridge, meeting-prep tooling, and supervisory views built in React/Next.js and .NET with domain models that mirror how your firm runs the practice — not a generic CRM rebadged.',
      duration: '14–22 weeks',
      deliverable:
        'Functional platform in staging for first segment(s), unified client canvas, proposal/IPS engine, planning and budget integration, supervisory views, test coverage report, performance benchmarks',
    },
    {
      title: 'Bank-Core, Custodian & Vendor Integration + Data Migration',
      description:
        'Connect bank core systems, custodial feeds, CRM, planning, market data, account aggregation, and document management. Run book-of-business migration with reconciliation against custodial and bank-of-record sources. Execute end-to-end integration testing, penetration testing, and disaster-recovery rehearsal.',
      duration: '6–10 weeks',
      deliverable:
        'Integration documentation per system, migration reconciliation reports, penetration test results, DR rehearsal sign-off, multi-tenant configuration per segment, rollback plan',
    },
    {
      title: 'Phased Rollout, Advisor Training & Hypercare',
      description:
        'Phased go-live by branch, channel, segment, or region — with the legacy systems running in parallel where IT requires it. Advisor and operations training, dedicated hypercare with engineering on-call, and a documented retirement plan for each legacy tool the platform replaces.',
      duration: '3–4 weeks per channel',
      deliverable:
        'Production deployment for first channel, reconciliation dashboards, advisor and operations training materials, retirement plan per legacy tool, runbook, support SLA',
    },
  ],

  capabilities: [
    'Unified client canvas across individual, household, trust, family office, and institutional accounts',
    'Manual ingestion for non-custodied wealth (real estate, businesses, art, partnership stakes, insurance cash value)',
    'Multi-custodian, multi-bank account aggregation with live net-worth calculation',
    'Budget, cash flow, savings rate, and surplus-for-investment analysis',
    'Proposal and IPS workflow with risk-profile fit and acceptance tracking',
    'Quarterly review and meeting-prep generation with allocation drift and goal tracking',
    'Configurable supervisory chain by branch, channel, region, or segment',
    'Suitability, KYC, accredited-investor, and source-of-wealth file management',
    'Mobile-responsive and accessible (WCAG 2.1 AA) advisor and client UX',
    'Vendor-replaceable integration middleware for custodian, CRM, planning, and market-data systems',
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
    'Azure API Management',
    'Power BI Embedded',
    'Terraform (IaC)',
    'Azure Application Insights',
  ],

  integrations: [
    {
      name: 'FIS · Jack Henry · Fiserv · Temenos',
      category: 'Bank Core',
      connectionMethod: 'Via your bank\'s API gateway',
      capabilities: ['Customer-of-record, balances, and money-movement events'],
    },
    {
      name: 'Schwab · Fidelity · Pershing',
      category: 'Custodians',
      connectionMethod: 'Schwab Open API · Wealthscape · NetX360+',
      capabilities: ['Accounts, positions, tax lots, and transaction history'],
    },
    {
      name: 'SEI Trust 3000 · FIS Global Plus · Innovest',
      category: 'Trust Accounting',
      connectionMethod: 'REST + file gateway',
      capabilities: ['Trust holdings, beneficiaries, multi-entity ownership'],
    },
    {
      name: 'Addepar · Black Diamond · Orion · Tamarac',
      category: 'Portfolio Accounting',
      connectionMethod: 'Documented vendor APIs',
      capabilities: ['Performance, allocation, householding, and reconciliation'],
    },
    {
      name: 'eMoney · MoneyGuidePro · RightCapital · Holistiplan',
      category: 'Financial Planning',
      connectionMethod: 'REST + SSO',
      capabilities: ['Plans, goals, Monte Carlo, tax-aware planning'],
    },
    {
      name: 'Salesforce FSC · Redtail · Wealthbox',
      category: 'CRM',
      connectionMethod: 'REST + webhook events',
      capabilities: ['Clients, households, activities, suitability bridge'],
    },
    {
      name: 'Bloomberg · Refinitiv · FactSet · Morningstar',
      category: 'Market Data',
      connectionMethod: 'Your firm\'s enterprise feed',
      capabilities: ['Pricing, reference, benchmarks, security master'],
    },
    {
      name: 'Plaid · Yodlee · MX · Akoya · ByAllAccounts',
      category: 'Held-Away Aggregation',
      connectionMethod: 'OAuth bank connections',
      capabilities: ['Outside cash, investments, liabilities, categorized transactions'],
    },
    {
      name: 'DocuSign · Box · NetDocuments · iManage',
      category: 'Documents & E-Sign',
      connectionMethod: 'REST + SSO',
      capabilities: ['Client vault, suitability and KYC files, signatures'],
    },
  ],

  imageFeatures: [
    {
      heading: 'Every Asset, Every Entity, One Profile',
      description:
        'Custodied positions, multi-bank cash, real estate, business interests, trusts — all in one screen the advisor can lead a client meeting from.',
      image: {
        src: '/images/solutions/wealth-investment-management/feature-1.jpg',
        alt: 'Wealth advisor reviewing portfolio analytics and a financial plan on a laptop with paper documents at a desk',
      },
    },
    {
      heading: 'Built Into Your Bank Stack, Not Beside It',
      description:
        'IT-architecture-led integration into core banking, custodian, CRM, and planning — so your advisors work in one surface, not five.',
      image: {
        src: '/images/solutions/wealth-investment-management/feature-2.jpg',
        alt: 'Wealth advisor and clients in a meeting reviewing investment recommendations on a screen at a conference table',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Application Modernization',
      description:
        'Replacing a legacy advisor portal or wealth back-office? Our strangler-fig modernization preserves trade flow, custodial feeds, and the existing book of business while the new platform takes over channel by channel — no big-bang re-platform.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'Your bank\'s IT and information-security teams will set the bar — IAM, encryption, audit controls, and pen-test posture. Our security and compliance practice maps the controls your firm requires to the platform we\'re building, before they become a launch blocker.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
    {
      title: 'Financial Document Management',
      description:
        'Don\'t need a full advisor-workstation rebuild — just modernize document operations? Same vertical, narrower scope: DMS modernization, embedded document management for financial SaaS, and intelligent document processing — built or extended around the platforms your firm already runs.',
      href: '/solutions/financial-document-management',
      icon: 'ShieldCheck',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question:
        'Who is this for — wirehouses, banks, RIAs, broker-dealers, or family offices?',
      answer:
        'All of the above. The platform is built for any firm running a professional fee-plus-commission wealth practice — tier-1 wirehouses, regional bank wealth divisions, private banks, large independent broker-dealers, RIAs ($1B+ AUM), multi-family offices, trust companies, and bank trust departments. The deepest engagements are wealth divisions inside larger banks where the platform must integrate with the bank\'s core systems; the same architecture configures down to a single-channel RIA or family-office practice.',
    },
    {
      question:
        'How does this integrate with our core banking system, custodian, and planning tools?',
      answer:
        'It is integrated, not standalone — that point is non-negotiable. Discovery starts with your IT team\'s architecture review, not with us prescribing a stack. Bank core systems (FIS, Jack Henry, Fiserv, Temenos, Finastra) are integrated via your bank\'s own API gateway, ESB, or middleware — the pattern your IT team prefers, not against the core directly. Custodian (Schwab Open API, Fidelity Integration Xchange, Pershing NetX), CRM (Salesforce FSC, Redtail, Wealthbox), planning (eMoney, MoneyGuidePro, RightCapital, Holistiplan), aggregation (Plaid, Yodlee, MX, Akoya, ByAllAccounts), and document management (DocuSign, Box, NetDocuments, iManage) connect via documented vendor APIs. Market data (Bloomberg, Refinitiv, FactSet) flows through your firm\'s existing enterprise license — we integrate to the feed terminal or vendor SDK your firm already pays for. An integration middleware layer keeps the platform vendor-replaceable for any single component.',
    },
    {
      question:
        'Can it handle individual, household, trust, family office, and institutional clients in one platform?',
      answer:
        'Yes. The data model treats individuals, households, trusts, family offices, and institutional accounts (foundations, endowments, corporate retirement) as first-class entities with multi-entity ownership relationships. A multi-generational family office with revocable trusts, a foundation, and an operating-company stake renders in the same client canvas as a mass-affluent household — configured per segment, not implemented per segment. New segments arrive as configuration units (entity types, supervisory chain, fee schedule, document set) rather than as separate platforms.',
    },
    {
      question: 'Is this an order-entry / trading system?',
      answer:
        'No. This is a wealth management platform — for advice, planning, recommendation, and the supervised relationship — not for trading-desk order entry. Proposed allocations, IPS generation, and proposal acceptance are first-class workflows, but order execution stays in your custodian platform or OMS via integration. Trading-desk and asset-manager OMS use cases (Aladdin / Charles River for portfolio managers) are explicitly out of scope. Wealth advisors using the platform route execution through their existing custodian or OMS, with the resulting fills, allocations, and tax lots flowing back into the client canvas.',
    },
    {
      question:
        'How is wealth that isn\'t custodied — homes, businesses, art, private equity — captured and kept current?',
      answer:
        'Manually, by the advisor or paraplanner, with a workflow built for the job. Real estate, private businesses, partnership stakes, art, collectibles, and life-insurance cash value are first-class entities in the client canvas with valuation method, last-updated date, supporting documents (appraisals, K-1s, statements), and ownership / entity attribution. Periodic update prompts surface in the advisor\'s queue so the picture stays current. Held-away custodied accounts can flow in automatically through aggregation services (Plaid, Yodlee, MX, Akoya, ByAllAccounts). Net worth is computed live across both the manual and automated layers.',
    },
    {
      question:
        'How does the budget and cash-flow planning workflow tie into investment recommendations?',
      answer:
        'It feeds them directly. The budget-sheet workflow — income sources, recurring expenses, savings rate, surplus available for investment, goal funding — is built into onboarding and reviews rather than living in a separate planning tool. The recommendation engine uses the surplus and goal gaps as direct inputs: a household with $4,000/month surplus and a college-funding gap surfaces a different proposal than a household with the same income but no surplus. Your existing planning tool (eMoney, MoneyGuidePro, RightCapital, Holistiplan) can layer in via integration where deeper modeling is required.',
    },
    {
      question:
        'What does a custom wealth and investment management engagement typically cost and how long does it take?',
      answer:
        'A custom wealth platform with a unified advisor workstation, manual + connected ingestion, proposal and IPS workflow, planning and meeting-prep tooling, full bank-core / custodian / CRM / planning integration, and a first segment live is a multi-quarter engagement at minimum. The largest scope — a tier-1 wirehouse or bank wealth division platform serving thousands of advisors and tens of thousands of households across every client segment — runs into multi-million / tens-of-millions territory. Phased delivery is standard — the first segment goes live before the broader rollout. A discovery engagement produces a realistic cost and timeline grounded in your firm\'s specific stack, segment mix, and integration depth — not a generic brochure number.',
    },
  ],

  cta: {
    title: 'Ready to Give Your Advisors One Screen for Every Client?',
    description:
      'Book a free 30-minute discovery call. We\'ll review your wealth-stack architecture, custodial and CRM landscape, planning tools, and segment mix — then give you a realistic assessment of what a custom wealth platform with a unified client canvas, manual + connected ingestion, and IT-led integration would cost and deliver for your firm.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the client canvas', href: '#signature' },
  },

  _unverified: [
    'hero.metrics — all three are capability-framed (Bank-Core Integrated, Multi-Segment Ready, Advisor-First). Greenfield-safe; no outcome claims to verify.',
    'metricsStrip[0..3] — all four values are capability-framed (Unified Client Canvas, Bank-Core Interconnected, Mixed Ingestion, Multi-Segment Scalable). No outcome percentages claimed.',
    'integrations[*] — nine integration entries spanning bank cores, custodians, trust accounting, portfolio accounting, planning, CRM, market data, aggregation, and document management. Audited and trimmed 2026-04-29 per self-challenge: dropped BNY Mellon and State Street (institutional custody, off-audience for wealth advisors), dropped Microsoft Dynamics 365 (off-vertical for US wealth). Bank core connectionMethod reframed to acknowledge integration via the bank\'s middleware/ESB/API gateway, not direct against the core. Market data connectionMethod reframed to acknowledge enterprise license is brought by the firm. Greenfield framing applied via prose throughout.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope. Confirm which integrations have been built in production engagements vs. which are reference-implementation capability before publishing as shipped work.',
    'processSteps durations — reflect estimated typical delivery cadence for a wealth platform engagement. Confirm against actual planned delivery windows before publishing as firm estimates.',
    'faq[6] — pricing framed qualitatively ("multi-quarter, multi-million / tens-of-millions for tier-1") rather than as a single number. The "$50M for tier-1 wirehouse" figure from SME conversation is implied by "tens-of-millions" but not cited as an explicit number — confirm whether to publish $50M as an explicit anchor.',
    'features — all six are capability descriptions of platform features the engagement would deliver. No past-tense shipped claims. Confirm for any feature that should be removed or constrained before publishing.',
    'ClientWealthCanvas signature — band labels, ingestion sources, wealth-domain pillars, and advisor-action outputs are all capability descriptions. No numeric stats embedded. Greenfield-safe.',
    'imageFeatures — existing photos retained from prior page version. Alt text retained verbatim; confirm continued accuracy under the new positioning.',
    'cta.description — discovery-call framing intentionally chosen over an explicit pricing range; confirm preference.',
  ],
};

export default wealthInvestmentManagement;
