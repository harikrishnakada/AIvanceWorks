import type { SolutionPageData } from '@/types/pages';

// Archetype B — Technical Service (Embedded Finance Engineering)
// With cherry-pick from Archetype C: `roleBoundary` section.
//
// Rewritten 2026-04-29. Plan: .agents/plans/digital-banking-wallets-rewrite.md
// SME: src/subject-matter-expert/digital-banking-wallets-context.md
//
// Old positioning (archived): Archetype C (Regulated Solution). Buyer was CDO /
//   SVP Digital Banking at a mid-market US bank or credit union. Framing was
//   "we build your integrated digital banking platform — BSA/AML compliant,
//   exam-ready, FIS/Fiserv/Jack Henry integrated."
//
// New positioning: AIvanceWorks is an engineering services firm that integrates
//   the BaaS + sponsor-bank + core + KYC + AML + card-issuer ecosystem on behalf
//   of operators. We do not hold licenses, do not act as sponsor bank, do not
//   issue cards as principal, do not hold customer funds, do not own the customer
//   relationship.
//
// New buyer (primary): CTO + Head of Embedded Finance at a vertical-SaaS company
//   or non-financial brand embedding finance via BaaS. CTO voice on deep technical
//   sections (signature, integrations panel, FAQ). LOB voice on offerings, verticals.
//
// De-prioritized buyers (present in features/FAQ but not hero):
//   - Founder / CEO at fintech operators (Chime / Mercury / Brex pattern)
//   - Chief Digital Officer at community bank / credit union
//
// Three offerings (featureGrid tiles):
//   1. Digital Wallet Platform Development
//   2. Neobank Platform Engineering
//   3. Embedded Finance & BaaS Integration
//
// Constitution deviations recorded per §12.4 (small deviations — no constitution
// amendment required):
//   1. ARCHETYPE SHIFT — was C (Regulated, bank CDO), now B with C cherry-pick
//      (Technical, vertical-SaaS CTO + LOB Head of Embedded Finance). Rationale:
//      positioning pivot per SME — engineering team for embedded finance operators,
//      not a bank vendor.
//   2. `imageFeatures` DROPPED — deviates from §11.5 two-track imagery default
//      for solution pages. Rationale: data-heavy operator-stack page; mid-page
//      photo strip would dilute the integration-competence argument. Hero photo
//      retained.
//   3. `complianceDeepDive` DROPPED — sibling regulated solutions
//      (financial-document-management, wealth-investment-management) keep it; this
//      page does not. Rationale: new buyer is not a regulated entity; their BaaS
//      provider + sponsor bank carry the audit posture.
//   4. `benefitsGrid` DROPPED — benefits absorbed into the three offering tiles +
//      signature + integrations panel for the CTO+LOB read. Separate benefits
//      section becomes redundant.
//   5. `complianceSpotlight` DROPPED — folded into `roleBoundary`'s "how we work
//      alongside your compliance team and BaaS provider" framing. Compliance is not
//      the load-bearing differentiator on this page; integration competence is (per
//      SME value-prop ranking #1).
//   6. `roleBoundary` ADDED — new single-use section (component in
//      `components/signature/`). Under the new positioning, explicit scope-and-role
//      clarification is a load-bearing trust signal that no existing component
//      carries cleanly.
//   7. SECTION COUNT = 10 — at the §6.3 max and §6.4 Archetype B max. Inside hard
//      limits.
//   8. `DigitalBankingTransactionFlow` SIGNATURE REFRAMED IN PLACE — same component
//      file/name preserved (per §8.4 swappability + §8.5 file-location stability)
//      with rewritten doc block, tile arrays, and band labels reflecting the
//      operator-stack argument.
//   9. NO SAME-VERTICAL PEER LINK in `relatedPages` — buyer personas don't overlap
//      with financial-document-management or wealth-investment-management per §10
//      v2.1 strict criterion.
//  10. TONE DRIFTS (3 minor, §4.2 hard rules still pass) — FeatureGrid renders
//      light (spec: warm); RelatedPages renders warm (spec: light); FAQ
//      renders light (spec: warm). Drifts exist because the dispatch template
//      does not pass tone overrides to shared section components. §4.2 hard
//      rules verified at runtime: two darks max ✓, no adjacent darks ✓, final
//      is accent ✓, no three adjacent same-tone ✓. Accepted without template
//      plumbing change per §12.4.

const digitalBankingWallets: SolutionPageData = {
  slug: 'digital-banking-wallets',

  title:
    'Digital Banking & Wallet Platform Engineering for Embedded Finance Operators',

  shortDescription:
    'Engineering services for vertical-SaaS companies, non-financial brands, and fintech operators embedding finance via BaaS. We integrate the BaaS provider, sponsor bank, core banking platform, KYC/AML vendors, and card-issuing stack into three coherent offerings: Digital Wallet Platform Development, Neobank Platform Engineering, and Embedded Finance & BaaS Integration.',

  metaTitle: 'Embedded Finance & Digital Wallet Engineering | BaaS Integration',
  metaDescription:
    'Engineering services for embedded finance operators. We integrate BaaS, KYC/AML, and card issuers into digital wallets, neobanks, and embedded finance products.',
  keywords: [
    'embedded finance development',
    'BaaS integration engineering',
    'digital wallet platform development',
    'neobank platform engineering',
    'vertical SaaS embedded finance',
    'fintech operator engineering',
    'Unit BaaS integration',
    'Treasury Prime integration',
    'Synctera integration',
    'Mambu implementation',
    'Thought Machine implementation',
    'Finxact integration',
    'Marqeta card issuing integration',
    'Galileo integration',
    'Lithic card issuing',
    'Alloy KYC integration',
    'Persona identity verification',
    'sponsor bank integration',
    'KYC AML orchestration',
    'embedded banking integration',
    'healthcare patient pay wallet',
    'platform ledger reconciliation',
  ],
  canonicalPath: '/solutions/digital-banking-wallets',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Digital Banking & Wallets', href: '/solutions/digital-banking-wallets' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'integrationsPanel',
    'processTimeline',
    'roleBoundary',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'fintech',
  signatureComponent: 'DigitalBankingTransactionFlow',

  hero: {
    badge: 'Embedded Finance Engineering',
    headline: 'Build wallets, neobanks, and embedded finance.',
    subhead:
      'For vertical SaaS, marketplaces, and non-financial brands embedding finance — we integrate BaaS, sponsor banks, KYC/AML vendors, and card-issuing platforms into compliance-aware digital products.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the integration stack', href: '#signature' },
    heroImage: {
      src: '/images/solutions/digital-banking-wallets/digital-wallets.jpg',
      alt: 'Engineering team reviewing BaaS and payment-rail integration architecture on a modern workstation',
    },
    metrics: [
      {
        value: 'Three Offerings',
        label: 'Digital Wallets · Neobank Platforms · Embedded Finance',
        description: 'One engineering team across the full embedded finance product range',
      },
      {
        value: 'Ecosystem-Fluent',
        label: 'BaaS · Core · KYC · AML · Card issuer',
        description: 'We build integrations across the full fintech vendor stack',
      },
      {
        value: 'Healthcare + Vertical-SaaS',
        label: 'Primary verticals',
        description: 'Patient-pay wallets, payroll, gig, marketplace, and B2B embedded finance',
      },
      {
        value: 'Integration-First',
        label: 'Not greenfield',
        description: 'Speed to launch comes from proven cores — Mambu, Thought Machine, Finxact, sdk.finance',
      },
    ],
  },

  // Audience test (§9.5): CTO + Head of Embedded Finance at a vertical-SaaS /
  // non-financial brand. They want to know what we integrate, for which verticals,
  // how we approach compliance without becoming a regulatory burden, and how fast
  // they can ship. All four metrics are capability-framed (greenfield-safe — no
  // outcome percentages).
  metricsStrip: [
    {
      value: 'Operator-Stack Integration',
      label: 'BaaS · Sponsor bank · Core · KYC · AML · Card issuer',
      description:
        'We build the integration layer that turns the fintech vendor stack into your product — so your engineering team ships features, not vendor glue.',
    },
    {
      value: 'Healthcare + Vertical-SaaS Fluency',
      label: 'Primary verticals',
      description:
        'Patient-pay wallets, HSA/FSA platforms, payroll, gig, marketplace seller wallets, and B2B embedded finance — domain fluency that generalist services firms lack.',
    },
    {
      value: 'Compliance-Aware Engineering',
      label: 'Alongside your compliance team and BaaS provider',
      description:
        'We engineer to the standards your BaaS provider, sponsor bank, and audit firm require — KYC/AML orchestration, ledger reconciliation, and audit-ready evidence design built from the first sprint.',
    },
    {
      value: 'Speed via Proven Cores',
      label: 'Mambu · Thought Machine · Finxact · sdk.finance',
      description:
        'We build on established core banking platforms so your team is not paying for infrastructure reinvention — speed to launch comes from proven cores, not greenfield builds.',
    },
  ],

  // Audience test: CTO / Head of Embedded Finance reads these as the three
  // embedded finance entry points. Each tile follows the SME §10 rhythm:
  // what it is / who it's for / what we deliver / one-line proof. Consistent
  // ~100-word descriptions per tile so the grid reads as three equal options.
  features: [
    {
      icon: 'Wallet',
      title: 'Digital Wallet Platform Development',
      description:
        'We engineer closed-loop, semi-closed, open-loop, and embedded wallet variants for healthcare patient-pay, payroll, gig platforms, marketplaces, and retail loyalty programs. Table-stakes delivery includes identity-verified onboarding, P2P transfers, top-ups, bill pay, QR/NFC payments, Apple Pay and Google Pay tokenization, virtual card issuance, multi-currency support where applicable, and a full operator back-office with distinct compliance, support, finance, and fraud workspaces. Closed-loop and semi-closed wallets carry the lowest regulatory friction of the three offerings — the practical first step for most non-financial brands entering embedded finance.',
    },
    {
      icon: 'Layers',
      title: 'Neobank Platform Engineering',
      description:
        'We integrate a sponsor bank, BaaS provider, core banking platform, KYC/AML vendors, and card-issuing stack into a coherent operator product — we do not build a bank from scratch. Buyers include fintech operators, vertical-SaaS companies adding a banking product line, and regional financial institutions modernizing their retail digital offering — including community banks and credit unions on FIS, Fiserv, and Jack Henry. We deliver the operator front-end, product logic, and brand layer over an orchestrated vendor stack, with speed to launch coming from proven cores: Mambu, Thought Machine, Finxact, sdk.finance, and Temenos.',
    },
    {
      icon: 'Plug',
      title: 'Embedded Finance & BaaS Integration',
      description:
        'The highest-growth segment of fintech: non-financial brands offering accounts, cards, payments, or lending inside their existing customer experience without becoming a bank — the Toast Capital and Shopify Balance pattern. We deliver API orchestration between the brand\'s product, the BaaS provider, and the sponsor bank; ledger design and reconciliation between platform-side truth and partner-bank truth; KYC/KYB orchestration across multiple vendors; card issuance flows; dispute and chargeback handling; 1099 and tax reporting; and program-manager tooling. We solve the engineering half of embedded finance so your team ships product, not vendor-integration work.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Stack Mapping',
      description:
        'We inventory your existing product, your team\'s technical constraints, and the BaaS landscape relevant to your use case. We map wallet-variant choices, sponsor-bank options, KYC/AML vendor fit, and core platform candidates against your regulatory posture and go-to-market timeline. The output is a clear picture of the vendor stack before a line of code is written.',
      duration: '2–3 weeks',
      deliverable:
        'Operator context memo, BaaS and sponsor-bank shortlist, KYC/AML vendor recommendation, core platform recommendation, wallet-variant decision, integration architecture diagram, prioritized feature backlog',
    },
    {
      title: 'Architecture & Vendor Selection',
      description:
        'We design the integration architecture — the data flows between your product surface, the integration layer we engineer, and the ecosystem vendors. We work through API surface contracts, ledger design, compliance-event routing, and reconciliation strategy alongside your compliance officers and the BaaS provider\'s technical team.',
      duration: '3–4 weeks',
      deliverable:
        'Architecture decision records, API surface contracts per vendor, ledger design spec, compliance-event routing map, reconciliation strategy, security architecture, Azure infrastructure blueprint',
    },
    {
      title: 'Core Platform Development',
      description:
        'Iterative development with bi-weekly demos to product, compliance, and engineering stakeholders. We build the operator front-end, product logic, and integration middleware in React/Next.js and .NET — domain models that mirror how embedded finance actually works, not a generic CRUD application dressed up with financial terminology.',
      duration: '12–18 weeks',
      deliverable:
        'Functional operator platform in staging with agreed modules, test coverage report, integration documentation per vendor, compliance-event log structure, operator back-office workspaces',
    },
    {
      title: 'Integration & Compliance Validation',
      description:
        'We connect to the BaaS provider, core banking platform, KYC/AML vendors, and card issuer and run end-to-end integration testing across the full transaction lifecycle. We test compliance-event routing, ledger reconciliation, dispute handling, and the evidence-package structure your BaaS provider and sponsor bank will require.',
      duration: '4–6 weeks',
      deliverable:
        'Integration test results per vendor, reconciliation validation against partner-bank ledger, penetration test results, compliance evidence package, rollback plan',
    },
    {
      title: 'Phased Launch & Hypercare',
      description:
        'Feature-by-feature or market-by-market rollout with your BaaS provider\'s program-management team involved from the first go-live checklist. Transaction reconciliation monitoring is active from day one. A dedicated hypercare period keeps our engineering team on-call while the operator product finds its production baseline.',
      duration: '2–3 weeks',
      deliverable:
        'Production deployment, operator runbook, monitoring dashboards, reconciliation reports, BaaS program-launch documentation, support SLA',
    },
  ],

  capabilities: [
    'BaaS API orchestration across Unit, Treasury Prime, Synctera, Column, Stripe',
    'Multi-vendor KYC/KYB orchestration via Alloy, Persona, Socure, Sumsub',
    'Platform ledger design and reconciliation against partner-bank ledger',
    'Card issuance integration via Marqeta, Galileo, Lithic, Stripe Issuing',
    'Multi-rail payment connectivity (ACH, FedNow, RTP, Visa Direct, Mastercard Send)',
    'AML and transaction monitoring routing via Hummingbird, Unit21, Sardine, Feedzai',
    'Wallet variants: closed-loop, semi-closed, open-loop, embedded',
    'Operator back-office workspaces (compliance, support, finance, fraud)',
    'Dispute and chargeback handling end-to-end',
    'Examiner evidence-package design and on-demand export',
    'Mobile-pay tokenization (Apple Pay, Google Pay)',
    'Multi-currency wallet support where applicable',
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
    'Terraform (IaC)',
    'Azure Application Insights',
  ],

  // Audience test: CTO reads this panel to verify we know the ecosystem by name
  // and understand how the vendors differ. All capabilities voiced in present-tense
  // capability form ("we build integrations with..."), never past-tense outcome
  // voice ("we shipped with...", "we delivered for...").
  //
  // Sponsor banks (Lead Bank, Cross River, Sutton Bank, Pacific West Bank) appear
  // in prose only (FAQ + roleBoundary). They are a contractual operator relationship,
  // not a technical integration — intentionally excluded from this array per spec.
  integrations: [
    {
      name: 'Unit',
      category: 'BaaS Provider',
      connectionMethod: 'REST API + webhooks',
      capabilities: [
        'Account creation, funding, and lifecycle management via Unit\'s operator API',
        'ACH, card, and wire transaction routing through the Unit ledger',
        'Webhook-driven compliance-event routing for KYC decisions and transaction flags',
      ],
    },
    {
      name: 'Treasury Prime',
      category: 'BaaS Provider',
      connectionMethod: 'REST API + webhooks',
      capabilities: [
        'Account and sub-account provisioning for operator and end-customer products',
        'ACH push/pull, debit card issuance, and wire orchestration via Treasury Prime API',
        'Compliance-event feeds for transaction monitoring and KYC status updates',
      ],
    },
    {
      name: 'Synctera',
      category: 'BaaS Provider',
      connectionMethod: 'REST API + webhooks',
      capabilities: [
        'Account, card, and transaction lifecycle management through Synctera\'s operator layer',
        'KYC/KYB status integration and compliance-event routing',
        'Reconciliation data feeds for platform-side ledger alignment',
      ],
    },
    {
      name: 'Column',
      category: 'BaaS Provider',
      connectionMethod: 'REST API',
      capabilities: [
        'Direct-to-bank API integration for accounts, ACH, and wire origination',
        'Operator sub-account structure for marketplace and multi-party use cases',
        'Transaction data feeds for ledger design and reconciliation',
      ],
    },
    {
      name: 'Stripe (Treasury / Issuing)',
      category: 'BaaS Provider',
      connectionMethod: 'REST API + webhooks',
      capabilities: [
        'Stripe Treasury integration for financial accounts, money movement, and balance management',
        'Stripe Issuing integration for virtual and physical card programs',
        'Webhook-driven event routing for authorizations, disputes, and compliance events',
      ],
    },
    {
      name: 'Mambu',
      category: 'Core Banking Platform',
      connectionMethod: 'REST API + event streams',
      capabilities: [
        'Core account and product configuration for loan, deposit, and wallet products',
        'Ledger and accounting event streaming for real-time balance and transaction data',
        'Product-rule configuration for interest, fees, and transaction limits',
      ],
    },
    {
      name: 'Thought Machine',
      category: 'Core Banking Platform',
      connectionMethod: 'REST API + Vault SDK',
      capabilities: [
        'Smart-contract-based product configuration via Vault Core',
        'Real-time ledger event streaming for balance, position, and account lifecycle data',
        'Flexible product engine for deposit, loan, and embedded finance products',
      ],
    },
    {
      name: 'Finxact',
      category: 'Core Banking Platform',
      connectionMethod: 'REST API',
      capabilities: [
        'Account, deposit, and product lifecycle management via Finxact\'s open API',
        'Ledger and transaction data feeds for reconciliation and reporting',
        'Product configuration for checking, savings, and money-movement products',
      ],
    },
    {
      name: 'sdk.finance',
      category: 'Core Banking Platform',
      connectionMethod: 'REST API',
      capabilities: [
        'Wallet, account, and ledger management for embedded and operator-facing products',
        'Multi-currency account and transaction support',
        'Back-office and compliance tooling integration via sdk.finance operator API',
      ],
    },
    {
      name: 'FIS · Fiserv · Jack Henry',
      category: 'Core Banking (Community-Bank Modernization)',
      connectionMethod: 'REST API + batch reconciliation',
      capabilities: [
        'Account, customer, and transaction data integration for community-bank and credit-union modernization use cases',
        'Batch and real-time reconciliation between legacy core and new digital product layer',
        'Bi-directional account lifecycle and balance sync',
      ],
    },
    {
      name: 'Marqeta',
      category: 'Card Issuing',
      connectionMethod: 'REST API + webhooks',
      capabilities: [
        'Virtual and physical card issuance for operator card programs',
        'Real-time authorization decisioning and transaction controls via Marqeta Just-in-Time (JIT) funding',
        'Card lifecycle management: activate, freeze, close, PIN set, and dispute routing',
      ],
    },
    {
      name: 'Galileo',
      category: 'Card Issuing',
      connectionMethod: 'REST API',
      capabilities: [
        'Debit and prepaid card issuance for operator and consumer card programs',
        'Transaction authorization, velocity controls, and merchant-category restrictions',
        'Card lifecycle management and account-level spend controls',
      ],
    },
    {
      name: 'Lithic',
      category: 'Card Issuing',
      connectionMethod: 'REST API + webhooks',
      capabilities: [
        'Programmatic virtual and physical card issuance for B2B and consumer programs',
        'Authorization controls and real-time spend rules via Lithic API',
        'Webhook-driven transaction and dispute event routing',
      ],
    },
    {
      name: 'Stripe Issuing',
      category: 'Card Issuing',
      connectionMethod: 'REST API + webhooks',
      capabilities: [
        'Virtual and physical card creation and management within the Stripe ecosystem',
        'Authorization controls and spending limits at the card and cardholder level',
        'Dispute handling and evidence submission via Stripe Issuing API',
      ],
    },
    {
      name: 'Alloy',
      category: 'Identity & KYC',
      connectionMethod: 'REST API',
      capabilities: [
        'KYC/KYB decisioning orchestration across multiple data sources and identity vendors',
        'Risk-based decisioning rules and manual-review escalation workflows',
        'Audit-ready decision record persistence with inputs, data sources, and outcomes',
      ],
    },
    {
      name: 'Persona',
      category: 'Identity & KYC',
      connectionMethod: 'REST API + webhooks',
      capabilities: [
        'Identity verification, document capture, and selfie-matching for account onboarding',
        'KYB and business entity verification workflows',
        'Webhook-driven status updates for integration with onboarding orchestration',
      ],
    },
    {
      name: 'Socure',
      category: 'Identity & KYC',
      connectionMethod: 'REST API',
      capabilities: [
        'Predictive identity verification with fraud and synthetic-identity signals',
        'OFAC and sanctions screening integrated into the onboarding flow',
        'Document verification and liveness detection for high-risk onboarding paths',
      ],
    },
    {
      name: 'Sumsub',
      category: 'Identity & KYC',
      connectionMethod: 'REST API',
      capabilities: [
        'End-to-end KYC and KYB verification with global document coverage',
        'Continuous monitoring for ongoing customer due diligence',
        'Audit trail and decision record export for compliance review',
      ],
    },
    {
      name: 'Hummingbird',
      category: 'AML & Transaction Monitoring',
      connectionMethod: 'REST API + case-management webhooks',
      capabilities: [
        'Case management and SAR drafting workflow integration for transaction alerts',
        'Investigation and disposition tracking with full audit trail',
        'Evidence-package export for examiner and BaaS-provider compliance review',
      ],
    },
    {
      name: 'Unit21',
      category: 'AML & Transaction Monitoring',
      connectionMethod: 'REST API',
      capabilities: [
        'Configurable transaction monitoring rules and alert routing',
        'Case management and SAR workflow for compliance team operations',
        'Audit-ready alert history and disposition records',
      ],
    },
    {
      name: 'Sardine',
      category: 'AML & Transaction Monitoring',
      connectionMethod: 'REST API + JS SDK',
      capabilities: [
        'Fraud and AML signal scoring at transaction and account level',
        'Device intelligence and behavioral signals for fraud detection',
        'Rules engine for velocity, pattern, and network-based risk assessment',
      ],
    },
    {
      name: 'Feedzai',
      category: 'AML & Transaction Monitoring',
      connectionMethod: 'REST API',
      capabilities: [
        'Machine-learning-based transaction risk scoring for real-time monitoring',
        'Configurable alert thresholds and case routing for compliance operations',
        'Integration with core transaction stream for batch and real-time monitoring',
      ],
    },
  ],

  roleBoundary: {
    eyebrow: 'Scope & posture',
    heading: 'Where AIvanceWorks fits',
    intro:
      'We are an engineering services firm for licensed institutions and embedded finance operators. We bring deep integration competence across the BaaS, sponsor-bank, core, KYC, AML, and card-issuer ecosystem — and the engineering discipline to make it compliance-aware and audit-ready.',
    bullets: [
      'We do not hold or apply for banking, money-transmitter, or EMI licenses.',
      'We do not act as sponsor bank, BaaS provider, card issuer, or processor.',
      'We do not provide regulatory or legal advice; clients retain their own counsel and compliance officers.',
      'We do not own the customer relationship or hold customer funds.',
      'We do not perform underwriting decisions on a balance-sheet basis.',
      'We do not provide audit, attestation, or certification (PCI-DSS, SOC 2, HITRUST). We engineer to those standards alongside the client\'s audit firm.',
    ],
    collaboration:
      'We work alongside your compliance officers, sponsor bank, BaaS provider, KYC and AML vendors, card-issuing platform, and external auditors. The license, the regulatory exposure, and the customer trust belong to our client. We bring the engineering.',
  },

  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Planning to embed finance? A discovery sprint maps your BaaS, sponsor-bank, KYC, and card-issuing choices before a line of code is written.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'MVP Development',
      description:
        'Want to ship one feature first? Our 12-week MVP process delivers a wallet, account opening, or P2P module while the broader platform is planned.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Security & Compliance',
      description:
        'Embedded finance demands SDLC discipline. Our security practice builds the IAM, encryption, and audit controls your BaaS provider and sponsor bank will require.',
      href: '/services/security-compliance',
      icon: 'Shield',
      pageType: 'service',
    },
  ],

  // Audience test: CTO + Head of Embedded Finance. Each answer leads with the
  // direct answer in the first sentence. Answers 50–120 words per §9.8.
  // Sponsor-bank framing concentrated in Q2 where it naturally belongs.
  // Consistent depth across all six answers.
  faqs: [
    {
      question:
        "What's the difference between embedded finance, a wallet, and a neobank — and which do we need?",
      answer:
        "A digital wallet stores value and enables payments within a defined scope — closed-loop (your ecosystem only), semi-closed (a defined merchant network), or open-loop (connected to payment rails). A neobank is a full-spectrum banking product — accounts, cards, payments — built on a sponsor bank and BaaS stack. Embedded finance is the broader category: any financial product living inside a non-financial brand's existing product experience. Which you need depends on your regulatory appetite, your customer use case, and your go-to-market timeline. A wallet or single embedded feature is the fastest entry. We help you make that choice in discovery before committing to a direction.",
    },
    {
      question: 'Do we need our own banking license?',
      answer:
        "For most embedded finance operators, no — and that is the business model. A sponsor bank (Lead Bank, Cross River, Sutton Bank, Pacific West Bank) provides the regulated infrastructure and FDIC coverage. A BaaS provider (Unit, Treasury Prime, Synctera, Column, Stripe) supplies the APIs over that infrastructure. You, as the operator, build the customer experience and product logic on top. The regulatory exposure sits with the sponsor bank and BaaS provider; your obligations are contractual, not chartered. Closed-loop and semi-closed wallets carry even less regulatory friction — often executable in many US states without a money-transmitter license depending on scope. We help you understand the tradeoffs in discovery.",
    },
    {
      question:
        'How do you integrate with a BaaS provider like Unit, Treasury Prime, Synctera, Column, or Stripe?',
      answer:
        "We build the integration layer between your operator product surface and the BaaS provider's API — handling account provisioning, transaction routing, compliance-event feeds, webhook processing, and the ledger reconciliation between your platform's truth and the partner bank's truth. Each BaaS provider has a distinct API surface, event model, and operator agreement pattern. We work from the BaaS provider's documentation and your program-manager requirements to design the integration, then build, test, and validate it against end-to-end transaction scenarios before go-live. We also build the operator back-office tooling — compliance, support, finance, and fraud workspaces — that your internal teams will use.",
    },
    {
      question:
        'How do you handle KYC, AML, and reconciliation across our internal ledger and the partner-bank ledger?',
      answer:
        "KYC is orchestrated across multiple vendors (Alloy, Persona, Socure, Sumsub) with a decisioning layer that persists audit-ready records of every verification input, data source, and outcome. AML transaction monitoring is routed through your chosen vendor (Hummingbird, Unit21, Sardine, Feedzai) with case-management integration for your compliance team. Reconciliation is one of the harder engineering problems in embedded finance — your platform's ledger and the partner bank's ledger diverge under real transaction volume, and month-end breaks are common in poorly designed systems. We design the reconciliation architecture from the first sprint so your finance team is not doing it by hand at month-end.",
    },
    {
      question: 'Can we start with one feature and expand later?',
      answer:
        "Yes — and this is the default pattern, not a concession. Most successful embedded finance programs launch with one product: a wallet, an account opening flow, or a P2P transfer feature. The integration architecture we design is configuration-first so that a second product — a card program, a lending product, a new wallet variant — arrives as integration scope, not a platform rebuild. The BaaS provider's operator agreement typically anticipates product expansion. We document the expansion path in the architecture phase so your team knows exactly what adding the next feature entails before the first one ships.",
    },
    {
      question:
        'What does an embedded-finance engagement typically cost and how long does it take?',
      answer:
        "Scope drives both. A single embedded feature — a closed-loop patient-pay wallet or a BaaS account-opening flow — is a shorter engagement than a full neobank platform with card issuance, multi-rail payments, and AML monitoring. Complexity comes from the number of vendor integrations, the ledger reconciliation design, the compliance architecture, and the operator back-office tooling required. Timeline also depends on the BaaS provider's onboarding and program-approval timeline, which we factor into the project plan. A discovery engagement produces a realistic cost and timeline grounded in your specific operator stack and product scope — not a generic range.",
    },
  ],

  cta: {
    title: 'Ready to add embedded finance without becoming a bank?',
    description:
      "Book a free 30-minute discovery call. We'll review your BaaS landscape, sponsor-bank options, and integration scope, then give you a realistic assessment of what's buildable and what we'd recommend for your specific operator stack.",
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the integration stack', href: '#signature' },
  },

  _unverified: [
    'metricsStrip[0..3] — all four values capability-framed (no outcome percentages). Greenfield-safe.',
    'hero.metrics[0..3] — capability-framed. Greenfield-safe.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope per vendor. Confirm which integrations have been built in production vs. which are architectural / reference-implementation capability before publishing as shipped work.',
    'processSteps[0..4].duration — typical engagement-cadence estimates. Confirm against actual planned delivery windows before publishing as firm estimates.',
    'integrations[*] — full ecosystem listed. All voiced with present-tense capability framing — confirm this framing is honest across all named vendors per §9.5 before publishing.',
    'faq[5] — pricing and timeline intentionally framed qualitatively, not as a numeric range. Confirm whether a price range is appropriate for publication.',
    'roleBoundary.bullets — every "we do not…" statement must be confirmable by leadership. Confirm before publishing that no current or planned offering crosses one of these boundaries.',
    'DigitalBankingTransactionFlow — band labels and tile descriptions are capability descriptions, no numeric stats. Greenfield-safe.',
    'faq[1].answer — sponsor banks named by name (Lead Bank, Cross River, Sutton Bank, Pacific West Bank). Confirm these are the four to name on the public page.',
  ],
};

export default digitalBankingWallets;
