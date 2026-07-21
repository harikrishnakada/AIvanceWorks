import { BRAND_PREFIX } from '@/lib/constants';
import type { IndustryPageData } from '@/types/pages';

const banking: IndustryPageData = {
  slug: 'banking',
  name: 'Banking',
  title: `${BRAND_PREFIX} Banking & Financial Services Software Development`,
  shortDescription:
    'Custom software and AI for banks, credit unions, lenders, wealth managers, and the financial operations inside every business — core banking modernization, digital and mobile banking, financial CRM, loan and lending platforms, wealth management tooling, fraud and AML, and banking analytics. We build the software layer that powers how financial institutions serve customers, manage money, and operate at scale — from the branch to the mobile app to the back office.',

  metaTitle:
    'Banking Software Development | Core Banking, Digital & Mobile Banking, Financial CRM, Lending, Fraud & AML',
  metaDescription:
    'We build the software layer that powers financial institutions — core banking modernization, digital and mobile banking, financial CRM, loan origination and servicing, wealth management tooling, fraud detection and AML, and banking analytics. Built for retail, commercial, and community banks, credit unions, neobanks, lenders, wealth managers, and corporate treasury — with SOC 2, PCI DSS, GLBA, and BSA/AML requirements engineered in from the first commit.',
  keywords: [
    'banking software development',
    'core banking system development',
    'digital banking platform development',
    'mobile banking app development',
    'financial CRM software',
    'loan origination and lending software',
    'wealth management software development',
    'fraud detection and AML software',
    'KYC AML software development',
    'banking analytics and business intelligence',
    'credit union software development',
    'neobank platform development',
  ],
  canonicalPath: '/industry/banking',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industry' },
    { label: `${BRAND_PREFIX} Banking`, href: '/industry/banking' },
  ],

  composition: [
    'hero',
    'whoWeServe',
    'pressures',
    'solutions',
    'compliance',
    'segments',
    'techStandards',
    'services',
    'faq',
    'cta',
  ],

  industry: 'banking',

  icon: 'Landmark',
  homeCard: {
    tagline:
      'The software layer that powers how financial institutions serve customers, manage money, and operate at scale.',
    short: 'Banking software — from core to customer, branch to mobile app to back office.',
    image: '/images/industries/banking/hero.jpg',
    alt: 'A bank cash machine on a blue façade, representing modern banking infrastructure',
    proof: ['Core & Digital Banking', 'Lending & Financial CRM', 'Fraud, AML & Analytics'],
  },

  hero: {
    kicker: 'Industries · Banking & Financial Services',
    headline: 'From core to customer — we engineer the banking software layer.',
    subhead:
      'Banking software built for how financial institutions actually work. We build the layer that powers how you serve customers, manage money, and operate at scale — the core and the ledgers, the online and mobile channels customers touch, the CRM and lending workflows your teams run, and the fraud, AML, and analytics that keep it all safe and measurable. Not a generic "digitize your operations" pitch: purpose-built software on top of the core and rails you already run, or fully custom where you have outgrown them.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore the solutions', href: '#solutions' },
    heroImage: {
      src: '/images/industries/banking/hero.jpg',
      alt: 'Banking infrastructure — a bank cash machine on a blue façade, standing in for the software layer behind modern financial services',
    },
    standards: ['SOC 2', 'PCI DSS', 'GLBA', 'BSA / AML-ready', 'KYC · Plaid / Socure / Jumio', 'GDPR / CCPA'],
    standardsLabel: 'Built to the security, payment, and regulatory frameworks financial institutions run on',
  },

  // ── Who we serve (expandable dropdown — required per client feedback) ──
  whoWeServe: {
    title: 'Who we serve',
    summary: '13 types of financial institution — retail to corporate, community banks to neobanks',
    subtitle:
      'We build for institutions across the financial spectrum — deposit-taking banks and credit unions, lenders and wealth managers, insurers and payment processors, and the financial operations that live inside non-financial businesses. If you serve customers, move money, or manage financial relationships at scale, the software layer we build applies.',
    types: [
      'Retail Banks',
      'Commercial Banks',
      'Private Banks',
      'Corporate Banks',
      'Credit Unions',
      'Community Banks',
      'Neobanks & Digital-Only Banks',
      'Mortgage Companies & Lenders',
      'Wealth Management Firms',
      'Financial Brokerages & Trading Firms',
      'Insurance Companies',
      'Payment Processors & Fintech Startups',
      'Financial Operations',
    ],
    excludedNote:
      'Not hedge funds. Hedge funds build proprietary trading platforms in-house, and that is not the software layer we engineer. Our wealth and investment work is advisor- and client-facing tooling for institutional and individual investor relationships — not algorithmic trading systems.',
  },

  // ── Problem statement (lead with the pain) ──
  pressures: {
    title: 'The core keeps the ledger — everything customers and staff actually touch is bolted on around it',
    intro:
      'Most financial institutions run on a core that was never designed for a mobile app, a modern lending workflow, or a single view of the customer — so every capability the business needs gets added as a separate system that only half-talks to the core and never talks to each other. That gap is where the friction lives: customers who can’t self-serve, relationship managers working blind, underwriting that crawls, and fraud caught after the money has moved. We build the software layer that closes it — and we’re honest about the two starting points institutions come to us with: some need a purpose-built platform, others need the core they already run connected, extended, and given a modern experience.',
    items: [
      {
        icon: 'Landmark',
        title: 'A core you can’t compete on the experience of',
        description:
          'The core banking system keeps the ledger accurate but was never built for the channels and workflows customers expect. Every modern capability — mobile, digital onboarding, real-time transfers — is a bolt-on, and the roadmap is gated by what the core will allow.',
      },
      {
        icon: 'Smartphone',
        title: 'A digital channel that feels a decade behind',
        description:
          'The online banking portal and mobile app are white-label or dated, customers can’t do half of what they can at a neobank, and the branded, full-featured experience you actually want doesn’t fit the platform you licensed.',
      },
      {
        icon: 'UsersRound',
        title: 'A CRM that was never built for a financial relationship',
        description:
          'The CRM is a generic sales pipeline. It has no unified view across checking, savings, loans, and investments, no relationship-manager workflow, and no model for the financial lifecycle — so cross-sell is guesswork and attrition is a surprise.',
      },
      {
        icon: 'FileClock',
        title: 'Lending and onboarding that run on manual steps',
        description:
          'Loan origination is a chain of document collection, re-keying, and hand-offs; underwriting is slow and inconsistent; and KYC/onboarding is a manual scramble across disconnected tools — so decisions take days and applicants drop out.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Risk and fraud seen only after the fact',
        description:
          'Transaction monitoring, sanctions screening, and SAR generation live in separate systems and spreadsheets. Anomalies surface in a report after the money has moved, and AML reviews consume analyst time that pattern-detection should be doing.',
      },
    ],
  },

  // ── Solutions catalog (rendered as dropdown + solutions box) ──
  capabilities: {
    title: 'The software we build — from core to customer',
    highlightText: 'from core to customer',
    subtitle:
      'Eight software layers that power how financial institutions serve customers, manage money, and operate. We build them on top of the core and rails you already run, or fully custom where you’ve outgrown them. And where your financial data is ready to work harder, an AI layer sharpens the decisions — credit risk, fraud, attrition, forecasting — a balanced intelligence layer, not a gimmick on every screen.',
    groups: [
      {
        icon: 'Landmark',
        title: 'Core Banking Systems',
        description:
          'Custom core banking capability for banks, credit unions, and neobanks — account management, loan origination and servicing, deposit management, currency exchange, remittance and wire transfer, and regulatory reporting. Built for institutions that need a purpose-built core, or modern modules and APIs layered on the core they already run.',
        items: [
          'Account, deposit & ledger management',
          'Loan origination & servicing modules',
          'Currency exchange, remittance & wire transfer',
          'Regulatory reporting & reconciliation',
          'API layers and modern UX on top of an existing core',
        ],
        aiAngle:
          'ML-assisted reconciliation and anomaly detection on ledger and transaction data, flagging breaks and exceptions before they reach a report.',
        note:
          'Realistic scope: core banking modernization and extension for mid-market institutions — custom modules, API layers, and modern UX on top of your existing core. We are not competing with Temenos or FIS to rip-and-replace a Tier-1 core.',
      },
      {
        icon: 'LayoutDashboard',
        title: 'Digital Banking Portals & Online Banking',
        description:
          'Customer-facing online banking platforms for banks and credit unions replacing dated portals or launching digital-first channels — mobile-responsive, API-connected to the core, with biometric and MFA authentication built in.',
        items: [
          'Account dashboards & transaction history',
          'Fund transfers, bill pay & scheduled payments',
          'Loan applications & document upload',
          'Biometric and multi-factor authentication',
          'API-connected to the core banking system',
        ],
        aiAngle:
          'Personalized financial insights — spending categorization, savings recommendations, and next-best-action prompts surfaced directly in the dashboard.',
      },
      {
        icon: 'Smartphone',
        title: 'Mobile Banking Applications',
        description:
          'Native iOS and Android mobile banking apps for banks, credit unions, and neobanks that need a branded, full-featured experience beyond what white-label platforms offer.',
        items: [
          'Account & card management, freeze/unfreeze',
          'Mobile check deposit & P2P transfers',
          'Push notifications & in-app support',
          'Biometric login & digital wallet (Apple Pay, Google Pay)',
          'Branded, full-featured — beyond white-label limits',
        ],
        aiAngle:
          'In-app spending insights and proactive alerts — low-balance prediction, unusual-charge nudges, and personalized savings prompts on the customer’s phone.',
      },
      {
        icon: 'UsersRound',
        title: 'Financial CRM',
        description:
          'Purpose-built CRM for financial institutions — designed around the financial relationship, not a generic sales pipeline. Unified customer profiles across products, relationship-manager dashboards, onboarding workflows, and cross-sell intelligence.',
        items: [
          'Unified profiles across checking, savings, loans & investments',
          'Relationship-manager dashboards & books of business',
          'Lead, opportunity & onboarding workflow automation',
          'Customer lifecycle & cross-sell / upsell intelligence',
          'One relationship model across banking, wealth, insurance & brokerage',
        ],
        aiAngle:
          'Next-best-product recommendations, churn-risk scoring for high-value relationships, and automated relationship-manager alerts when a client’s behavior signals attrition.',
        note:
          'This is Financial CRM, not Banking CRM — it applies across banking, wealth management, insurance, and brokerage relationships, because the object it is built around is the financial relationship itself.',
      },
      {
        icon: 'HandCoins',
        title: 'Loan & Lending Platforms',
        description:
          'Custom loan origination, underwriting, and servicing software for banks, credit unions, mortgage companies, and fintech lenders who need a configurable platform rather than a rigid off-the-shelf LOS.',
        items: [
          'Application intake & document collection',
          'Credit decisioning workflows & approval automation',
          'Loan account management & payment processing',
          'Collections & delinquency workflows',
          'Configurable rules — not a rigid off-the-shelf LOS',
        ],
        aiAngle:
          'ML-assisted credit risk scoring, document extraction from loan applications, and automated decision recommendations with a human-in-the-loop override.',
      },
      {
        icon: 'TrendingUp',
        title: 'Wealth Management & Investment Platforms',
        description:
          'Custom wealth management and investment software for private banks, wealth management firms, and financial brokerages — advisor-facing and client-facing tooling that integrates with market data feeds and custodian APIs.',
        items: [
          'Client portfolio dashboards & performance reporting',
          'Asset allocation modeling & rebalancing tools',
          'Financial planning modules & advisor workstations',
          'Market-data feed & custodian API integration',
          'Client portals for institutional & individual investors',
        ],
        aiAngle:
          'Portfolio insight surfacing and client-attrition signals for advisors — highlighting accounts that need attention before assets move.',
        note:
          'Explicit exclusion: no proprietary trading platforms or algorithmic trading systems for hedge funds — those firms build in-house. This is advisor- and client-facing wealth management tooling, not an execution engine.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Fraud Detection & Risk Management',
        description:
          'Custom fraud detection and risk management platforms — transaction monitoring, KYC/AML workflow automation, sanctions screening, SAR generation, and risk-scoring dashboards, integrated with identity-verification APIs and regulatory pipelines.',
        items: [
          'Real-time transaction monitoring & anomaly detection',
          'KYC / AML workflow automation & case management',
          'Sanctions screening & SAR generation',
          'Risk-scoring dashboards for analysts',
          'Integrates with Plaid, Socure & Jumio identity APIs',
        ],
        aiAngle:
          'ML models that detect behavioral anomalies in real time, adaptive fraud scoring that improves with transaction volume, and automated AML pattern flagging to cut analyst review time.',
      },
      {
        icon: 'BarChart3',
        title: 'Banking Analytics & Business Intelligence',
        description:
          'Custom analytics and BI platforms built on top of your existing core banking data — no full data-warehouse overhaul required to get product profitability, portfolio health, and executive reporting in one place.',
        items: [
          'Product profitability & customer-lifetime-value modeling',
          'Branch & channel performance dashboards',
          'Loan portfolio health & deposit trend analysis',
          'Executive reporting & board packs',
          'Built on existing core data — no warehouse rip-and-replace',
        ],
        aiAngle:
          'Predictive deposit-outflow modeling, credit-portfolio stress-test simulations, and automated anomaly alerts on the financial metrics leadership watches.',
      },
    ],
  },

  // ── Compliance & security posture (acknowledged, not led with) ──
  complianceDetail: {
    title: 'We build with financial security and compliance engineered in — not bolted on.',
    statement:
      'We are a software engineering firm, not a compliance consultancy — so we don’t lead with a certification wall. But banking software sits on top of money and identity, and the frameworks that govern it are part of how we build, not an afterthought before launch. SOC 2, PCI DSS, GLBA, GDPR, and BSA/AML framework compatibility shape the architecture from the first commit: tokenized payment flows, customer-data isolation, least-privilege access, and defensible audit trails. We give your risk, security, and compliance teams a system they can stand behind — and we work alongside your compliance officers and regulators rather than claiming to replace them.',
    frameworks: [
      'SOC 2',
      'PCI DSS (payments & card data)',
      'GLBA (financial privacy)',
      'BSA / AML framework compatibility',
      'GDPR / CCPA (customer PII)',
      'ISO 27001',
    ],
    safeguards: [
      {
        icon: 'CreditCard',
        title: 'PCI-aligned, tokenized payment flows',
        description:
          'Card and payment data runs through tokenized, PCI-aligned flows on established processors — so sensitive card data stays out of your database and the platform can move money without becoming a cardholder-data liability.',
      },
      {
        icon: 'ScanFace',
        title: 'KYC / AML & identity verification, engineered in',
        description:
          'Onboarding and monitoring integrate with identity-verification and screening APIs (Plaid, Socure, Jumio) and support BSA/AML recordkeeping — SAR generation, sanctions screening, and case management on a defensible audit trail rather than a manual scramble.',
      },
      {
        icon: 'Split',
        title: 'Customer & tenant data isolation',
        description:
          'Multi-brand and multi-institution platforms keep each book of customers, accounts, and transactions isolated by design, and customer PII is scoped so no role, service, or integration sees more than it should.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Least-privilege access & audit trails',
        description:
          'Role-based access for tellers, relationship managers, underwriters, and administrators, with scoped service accounts and tamper-evident audit logs across every integration — so who touched what is always answerable.',
      },
      {
        icon: 'FileCheck2',
        title: 'Privacy, consent & data-subject rights',
        description:
          'Consent capture, preference management, and data-subject request handling (access, deletion, portability) are engineered into the platform so GLBA and GDPR/CCPA obligations rest on a defensible trail, not a manual effort.',
      },
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with secrets held in a managed vault and key-rotation policies that satisfy SOC 2 and ISO 27001 expectations.',
      },
    ],
    auditNote:
      'We provide the architecture documentation, data-flow diagrams, and control evidence your risk, security, and compliance teams need — and we walk them through the payment model, data isolation, and access controls before a single live account, card, or customer record flows through the system. We build the software layer to clear the bar; your compliance officers and examiners own the program.',
    partnerAgreements: ['DPA', 'SLA', 'Security architecture review'],
  },

  // ── Target buyer segments (rich personas — distinct from Who We Serve) ──
  segments: {
    title: 'Financial institutions don’t buy alike — and we don’t build like they do',
    subtitle:
      'A community bank replacing a dated portal, a credit union adding member self-service, and a neobank building from scratch share almost nothing about how they buy or what they need built. We scope the work to where each institution actually is — and we’re honest about whether you need a platform built or a core connected and extended.',
    items: [
      {
        icon: 'Building2',
        name: 'Regional & Community Banks',
        buyer: 'CIO · Head of Retail Banking',
        needs: [
          'A modern digital banking portal to replace a dated one',
          'A branded, full-featured mobile banking app',
          'Channels API-connected to the existing core',
          'Integration-first work — not a core rip-and-replace',
        ],
      },
      {
        icon: 'Users',
        name: 'Credit Unions',
        buyer: 'CEO · VP of Technology',
        needs: [
          'A member self-service portal on the legacy core',
          'A loan origination & member onboarding platform',
          'Member-relationship CRM, not a generic pipeline',
          'Modern UX without replacing the whole core',
        ],
      },
      {
        icon: 'Rocket',
        name: 'Neobanks & Digital-Only Banks',
        buyer: 'Founder · Head of Product',
        needs: [
          'An end-to-end digital banking platform built from scratch',
          'Core capability, mobile app & onboarding as one product',
          'API-first architecture that scales with accounts',
          'Fraud, KYC & AML designed in from day one',
        ],
      },
      {
        icon: 'Gem',
        name: 'Private Banks & Wealth Management Firms',
        buyer: 'Head of Wealth · COO',
        needs: [
          'A wealth management platform off spreadsheet reporting',
          'Advisor workstations & client portfolio portals',
          'Performance reporting & rebalancing tooling',
          'Financial CRM built around the client relationship',
        ],
      },
      {
        icon: 'HandCoins',
        name: 'Mortgage Companies & Lenders',
        buyer: 'COO · Head of Lending',
        needs: [
          'Custom loan origination & decisioning to replace a manual LOS',
          'Document collection & underwriting workflow automation',
          'ML-assisted credit risk scoring with human override',
          'Servicing, payments & collections in one platform',
        ],
      },
      {
        icon: 'LineChart',
        name: 'Financial Brokerages & Trading Firms',
        buyer: 'CTO · Head of Operations',
        needs: [
          'A client portal to replace fragmented reporting',
          'Portfolio & performance reporting tooling',
          'Market-data feed & custodian API integration',
          'Advisor- and client-facing tooling (not an execution engine)',
        ],
      },
      {
        icon: 'Umbrella',
        name: 'Insurance Companies',
        buyer: 'CIO · VP of Operations',
        needs: [
          'A financial operations platform for policy & claims workflows',
          'Financial CRM across the customer relationship',
          'Document management & processing automation',
          'Integration across policy, billing & CRM systems',
        ],
      },
      {
        icon: 'Briefcase',
        name: 'Corporate Treasury (Non-Financial Business)',
        buyer: 'Treasurer · VP of Finance',
        needs: [
          'A treasury management dashboard for cash visibility',
          'Payment operations & approval workflows',
          'Bank-connectivity & reconciliation automation',
          'Internal financial reporting leadership can act on',
        ],
      },
    ],
    footerNote:
      'Banking software rarely stops at the institution’s edge — so a single engagement often reaches into our Retail work (payment processing, POS integrations, and merchant banking tools that connect fintech to retail clients) and our Real Estate work (mortgage origination, escrow platforms, and investor portals that bridge banking and proptech). A short consultation will map your institution type, the core and rails you already run, and the fastest route from a bolted-on stack to a coherent software layer.',
  },

  // ── Technology & standards ──
  techStandards: {
    title: 'We speak your stack — core, rails, identity, and data',
    subtitle:
      'The cores, processors, identity providers, and data sources financial institutions already run on, and the frameworks and AI tooling we build with on top of them. Whether you’re on a legacy core, a modern banking-as-a-service stack, or building fully custom, we work with what you have and build what you need.',
    systemsTitle: 'Cores, rails & systems you already run',
    systems: [
      'Core banking — FIS, Fiserv, Jack Henry, Temenos, Mambu',
      'Payments & cards — Stripe, Marqeta, Adyen, ACH / wire rails',
      'Open banking & data — Plaid, MX, Finicity',
      'Identity & KYC — Plaid Identity, Socure, Jumio, Alloy',
      'Ledgers & ERP — NetSuite, SAP, QuickBooks (treasury)',
      'Market data & custody — custodian APIs, market-data feeds',
      'Analytics & BI — Snowflake, Power BI, Tableau',
    ],
    technologiesTitle: 'Frameworks, standards & AI tooling',
    technologies: [
      'AWS',
      'Azure',
      'Next.js',
      'React Native',
      'TypeScript',
      '.NET',
      'Node.js',
      'Python',
      'GraphQL / REST APIs',
      'Event streaming (Kafka)',
      'PostgreSQL',
      'Snowflake',
      'Azure OpenAI',
      'PyTorch',
      'Power BI',
    ],
  },

  // ── Relevant services we bring to banking (cross-links) ──
  services: {
    title: 'The services we bring to banking',
    subtitle:
      'The engineering, data, and AI capabilities we apply to the hardest problems in core modernization, lending, risk, and customer intelligence — explore each.',
    items: [
      {
        title: 'Custom Software Development',
        description:
          'End-to-end builds — core modules, digital and mobile banking, lending, wealth, and CRM platforms — engineered for how your institution actually operates instead of forcing it into a template.',
        href: '/services/custom-software-development',
        icon: 'Code2',
      },
      {
        title: 'API Development',
        description:
          'The integration layer that connects a bolted-on stack — core banking, payment rails, KYC, and data-aggregation APIs stitched into one coherent system. Often the first, lowest-commitment engagement.',
        href: '/services/api-development',
        icon: 'Webhook',
      },
      {
        title: 'Data Engineering',
        description:
          'The pipelines that pull core, transaction, and channel data into one analytics-ready view — the foundation every banking dashboard, risk model, and BI report sits on.',
        href: '/services/data-engineering',
        icon: 'Database',
      },
      {
        title: 'ML Development',
        description:
          'Credit risk scoring, fraud and anomaly detection, attrition prediction, and deposit-outflow forecasting trained on your institution’s data — not generic templates.',
        href: '/services/ml-development',
        icon: 'Brain',
      },
      {
        title: 'Intelligent Automation',
        description:
          'Agentic workflows for loan decisioning, AML case triage, onboarding, and relationship-manager alerts — with human-in-the-loop approval across the systems you’ve connected.',
        href: '/services/intelligent-automation',
        icon: 'Workflow',
      },
      {
        title: 'Security & Compliance',
        description:
          'Zero-trust identity, encryption, and audit-ready architecture aligned to SOC 2, PCI DSS, GLBA, and BSA/AML — engineered into the build, evidenced for your risk and compliance teams.',
        href: '/services/security-compliance',
        icon: 'ShieldCheck',
      },
    ],
  },

  faqTitle: 'Questions banking and financial-services teams ask',
  faqs: [
    {
      question: 'What kinds of banking software do you build?',
      answer:
        'We build the software layer that powers financial institutions from core to customer: core banking capability (account, deposit, and ledger management, loan origination and servicing, currency exchange, remittance and wire transfer, regulatory reporting) as purpose-built modules or modern layers on your existing core; digital banking portals and online banking (dashboards, transfers, bill pay, loan applications, biometric and MFA authentication); native iOS and Android mobile banking apps; Financial CRM built around the financial relationship; loan and lending platforms (origination, underwriting, servicing, collections); wealth management and investment tooling (advisor workstations, client portals, portfolio reporting); fraud detection and risk management (transaction monitoring, KYC/AML, sanctions screening, SAR generation); and banking analytics and BI on top of your existing core data. We serve retail, commercial, private, corporate, and community banks, credit unions, neobanks, mortgage companies and lenders, wealth managers, brokerages, insurers, payment processors, and corporate treasury.',
    },
    {
      question: 'Is this generic fintech, or banking specifically?',
      answer:
        'Banking specifically. The distinction shows up most clearly in the CRM: we build Financial CRM, not a generic sales CRM with a banking skin. It is designed around the financial relationship — unified profiles across checking, savings, loans, and investments, relationship-manager workflows, and a model for the customer’s financial lifecycle — and it applies across banking, wealth management, insurance, and brokerage. The same principle runs through everything we build: core banking, lending, fraud/AML, and analytics are engineered for how financial institutions actually operate, not adapted from a generic industry template.',
    },
    {
      question: 'Do you work with hedge funds or build trading platforms?',
      answer:
        'No. Hedge funds build their proprietary trading and execution platforms in-house, and algorithmic or high-frequency trading systems are not the software layer we engineer. Our wealth management and investment work is deliberately advisor-facing and client-facing: portfolio dashboards, performance reporting, asset allocation and rebalancing tools, financial planning modules, and client portals for private banks, wealth management firms, and brokerages serving institutional and individual investors. If you need an execution engine, we are not the right fit — and we would rather say so up front.',
    },
    {
      question: 'Do we have to replace our core banking system?',
      answer:
        'Almost never, and we won’t pretend otherwise. Replacing a core is a multi-year, high-risk program, and for most mid-market institutions it is the wrong first move. Our realistic engagement is core banking modernization and extension: custom modules, API layers, and modern UX built on top of the core you already run — a digital banking portal, a mobile app, a lending platform, or a Financial CRM that connects to the core rather than replacing it. We are not competing with Temenos or FIS to rip-and-replace a Tier-1 core. Where a specific capability genuinely can’t be extended, we build that piece — not the whole system.',
    },
    {
      question: 'How do you handle compliance, KYC, and AML?',
      answer:
        'We are a software engineering firm, not a compliance consultancy, so we don’t author your compliance program — but the frameworks that govern banking are engineered into how we build. SOC 2, PCI DSS, GLBA, GDPR/CCPA, and BSA/AML framework compatibility shape the architecture from the first commit: tokenized PCI-aligned payment flows, customer-data isolation, least-privilege access, and tamper-evident audit trails. For KYC and AML specifically, we integrate identity-verification and screening APIs (Plaid, Socure, Jumio, Alloy) and build the workflow automation, sanctions screening, SAR generation, and case management your program runs on. We give your risk, security, and compliance teams a defensible system and the evidence to stand behind it; they own the program and the examinations.',
    },
    {
      question: 'Where does AI actually fit in banking software?',
      answer:
        'AI is a balanced intelligence layer that activates once your financial data is connected — not a gimmick on every screen. The four highest-value applications: fraud and AML intelligence (real-time transaction anomaly detection and automated regulatory flagging); credit risk modeling (ML-assisted underwriting that reduces manual review time and improves decision consistency, with human-in-the-loop override); customer attrition prediction (identifying at-risk relationships before they close accounts or move assets); and financial forecasting (deposit-outflow modeling, loan-portfolio stress testing, and revenue forecasting for planning teams). Each one makes the underlying core, lending, CRM, or analytics system sharper over time.',
    },
    {
      question: 'We already have several systems that don’t talk to each other — where do we start?',
      answer:
        'That’s the most common starting point, and integration is usually the lowest-commitment, highest-value first engagement. Before building anything new, we map the core, channels, payment rails, and identity and data systems you already run, and connect them through an API layer so the pieces finally share one picture. That work closes the most painful gaps quickly and reveals the fastest realistic path to a larger build — a digital portal, a mobile app, a lending platform, or a Financial CRM — if one makes sense. It also means the software layer we build later sits on a foundation that already holds together.',
    },
    {
      question: 'Does banking work connect to your other industries?',
      answer:
        'Often, yes. Banking software rarely stops at the institution’s edge. Payment processing, POS integrations, and merchant banking tools connect our banking work to our Retail practice, so a fintech serving retail clients can have both sides built by one team. And mortgage origination, escrow platforms, and investor portals bridge banking and proptech, connecting to our Real Estate work. A single engagement can span the money movement, the merchant side, and the property side of a financial product — one team, one coherent software layer.',
    },
  ],

  cta: {
    title: 'Let’s engineer the software layer beneath how you serve, lend, and operate.',
    description:
      'Banking capability is scattered across a core that keeps the ledger and a dozen systems bolted on around it — and none of them share a picture of the customer or the risk. Start with a consultation: we’ll map your institution type, the core and rails you already run, whether you’re building or modernizing, and the fastest realistic route from a bolted-on stack to a coherent software layer.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore the solutions', href: '#solutions' },
  },

  _unverified: [
    'CLIENT-FEEDBACK STRUCTURE: "Who We Serve" is rendered as an expandable dropdown (IndustryWhoWeServe) listing the 13 institution types with hedge funds explicitly excluded; the 8 core offerings render as a dropdown + solutions-box selector (IndustrySolutions) per Russell\'s format requirement. Solutions list content is a first pass — Russell noted the list is "to be finalized"; structure is ready to swap copy.',
    'All content uses capability framing only — no client names, case studies, testimonials, or measured outcome metrics are claimed.',
    'IMAGES: hero uses /images/industries/banking/hero.jpg (present — a blue bank cash-machine photo). Per request, the homepage category card reuses the same hero.jpg (no separate category-card.jpg). The hero image subject (an ATM) sits on the right; confirm it reads well cropped to the homepage bento card band, or supply a purpose-shot category-card.jpg later. Note the photographed brand ("Halifax") is incidental stock; confirm licensing/appropriateness before launch.',
    'complianceDetail.frameworks — SOC 2 and ISO 27001 are listed; confirm whether AIvanceWorks holds these attestations or is in progress. PCI DSS, GLBA, GDPR/CCPA, and BSA/AML framing describes security and data-protection ENGINEERING practices and framework compatibility, NOT held certifications, a regulatory-compliance guarantee, or authorship of the institution\'s compliance program (explicitly scoped to the client\'s compliance officers/examiners).',
    'techStandards.systems & solutions — core/processor/identity vendor names (FIS, Fiserv, Jack Henry, Temenos, Mambu, Stripe, Marqeta, Adyen, Plaid, MX, Finicity, Socure, Jumio, Alloy, NetSuite, SAP, QuickBooks, Snowflake, Power BI, Tableau) describe integration competencies; confirm which have actually shipped before implying delivered volume.',
    'services — cross-links point to live /services/* pages (custom-software-development, api-development, data-engineering, ml-development, intelligent-automation, security-compliance). hero/cta secondaryCta anchor to #solutions.',
    'Cross-vertical bridges to Retail and Real Estate are referenced in segments.footerNote and the final FAQ; both industry pages exist and are registered. Existing banking-adjacent SOLUTION pages also exist (wealth-investment-management, digital-banking-wallets, financial-document-management) — consider cross-linking to them once this page is live.',
    'Registered in content.ts INDUSTRY_PAGE_MODULES and added to HOME_INDUSTRY_ORDER (featured slot). Nav entry already present in constants.ts (industriesMenu, /industry/banking). Nav icon updated Building2 → Landmark to match the industry icon.',
  ],
};

export default banking;