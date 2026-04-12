import type { SolutionPageData } from '@/types/pages';

// Archetype C — Regulated Solution (Insurance) with Commerce-flavored benefits.
// Buyer: VP of Product / Chief Distribution Officer / VP of Digital at mid-market
//   carriers, MGAs, and digital-native InsurTechs. Secondary: Chief Underwriting
//   Officer, Chief Actuary (owns filed rates), Head of Agency / Partnerships.
// Dominant question: "Will every quote match our filed rates across every state
//   and every line — while still being fast enough for a consumer-facing channel?"
// Key trust issue: A previous vendor's quoting tool silently drifted off filed
//   rates during a rate revision — causing DOI remediation and almost costing the
//   carrier its certificate of authority in two states. "Speed without filed-rate
//   discipline" is the page's single emotional argument.
// Signature: FiledRateQuotingFlow — process/flow pattern (§8.3 #3). A 4-stage
//   pipeline visualization (multi-channel intake → rules+enrichment → rating +
//   filed-rate verification gate → bind-ready quote). Argument: "Every quote on
//   filed rates, in seconds — across every channel."
//
// Composition follows underwriting-software / hospital-management-systems precedent
// (same Archetype C pattern). Deviations:
//   - Commerce-flavored benefits language (speed-to-bind, producer adoption) cherry-
//     picked from Archetype D — justified by dual-KPI buyer (revenue AND compliance).
//     Primary compliance framing retained (Archetype C). Per §6.5 B-vs-D guidance
//     and constitution audience test — regulatory gate always wins on framing.
//   - No CaseStudySpotlight — greenfield, no verified filed-rate deployment.
//   - ComplianceSpotlight placed before signature as trust gate (same as EHR/HMS/
//     Underwriting precedent).
//   - relatedPages includes one same-vertical peer solution (Underwriting Software)
//     per §10 v2.1 exception — same C-suite buyer persona (CUO/VP Product both
//     evaluate quoting and underwriting as a single rating-engine-centric stack).

const quotingSoftware: SolutionPageData = {
  slug: 'quoting-software',
  title: 'Custom Insurance Quoting Software Development for Carriers & MGAs',
  shortDescription:
    'Custom insurance quoting platforms for carriers, MGAs, and agencies on Azure — multi-channel intake, rating engine integration, filed-rate verification, and bind-ready quotes built for state DOI compliance.',

  metaTitle: 'Insurance Quoting Software Development | Filed-Rate-Integrated Platforms',
  metaDescription:
    'Custom insurance quoting software for carriers, MGAs, and agencies. Multi-channel quote intake, rating engine integration, filed-rate verification, and bind-ready workflows — architected for state DOI and NAIC compliance.',
  keywords: [
    'insurance quoting software',
    'custom insurance quoting platform',
    'insurance quote engine development',
    'multi-carrier quoting software',
    'rating engine integration',
    'insurance quote-to-bind platform',
    'consumer insurance quoting portal',
    'agent broker quoting software',
    'MGA quoting platform',
    'filed rate quoting software',
    'insurance quote API',
    'comparative rating software',
  ],
  canonicalPath: '/solutions/quoting-software',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Quoting Software', href: '/solutions/quoting-software' },
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
  signatureComponent: 'FiledRateQuotingFlow',

  hero: {
    badge: 'Insurance Solutions',
    headline: 'Consumer-speed quotes. Filed-rate discipline. Every channel.',
    subhead:
      'Custom insurance quoting platforms built on Azure — multi-channel intake, configurable rules and eligibility, native integration with Earnix, Guidewire, and Duck Creek rating engines, and a filed-rate verification gate that stamps every quote with its state and rate version.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the quoting flow', href: '#signature' },
    heroImage: {
      src: '/images/solutions/quoting-software/hero.jpg',
      alt: 'Insurance product team reviewing a quoting workflow on a shared screen in a modern office',
    },
    metrics: [
      {
        value: 'Filed-Rate',
        label: 'Integrity by design',
        description: 'Every quote verified against the filed rate version',
      },
      {
        value: 'Multi-Channel',
        label: 'Consumer · agent · broker · API',
        description: 'One rating spine across every distribution path',
      },
      {
        value: 'Engine-Native',
        label: 'Works with Earnix, Guidewire, Duck Creek',
        description: 'Integrates with your rating engine — no rebuild',
      },
    ],
  },

  // Audience test (§9.5): VP of Product / Chief Distribution Officer evaluating a
  // quoting platform needs to see filed-rate integrity, channel breadth, engine
  // compatibility, and configurability — without fabricated percentage claims.
  // All four metrics are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'Filed-Rate Verified',
      label: 'Every Quote On-Rate',
      description:
        'Architected so every quote is verified against the active filed rate for that state, line, and effective date — with a traceable rate-version stamp.',
    },
    {
      value: 'Sub-Second',
      label: 'Consumer-Facing Quote Performance',
      description:
        'Designed for sub-second rating response on consumer and comparative-rater channels — so your digital experience does not bottleneck on a slow quote.',
    },
    {
      value: 'Multi-Line · Multi-State',
      label: 'Configurable by Jurisdiction',
      description:
        'Rules, eligibility, questions, and rate-deck bindings configurable per state and per line of business — without a code release for routine rate revisions.',
    },
    {
      value: 'Bind-Ready',
      label: 'Quote-to-Policy Built In',
      description:
        'Quote, comparison, down-payment, e-signature, and policy-admin handoff in one flow — designed to convert the first click into an in-force policy.',
    },
  ],

  // Audience test: VP of Product / CDO thinks in distribution functions, not
  // engineering features. Each card maps to a quoting-workflow responsibility.
  features: [
    {
      icon: 'FileInput',
      title: 'Multi-Channel Quote Intake',
      description:
        'Unified quote entry for consumer web, agent and broker portals, comparative-rater feeds, and partner API callers — one canonical submission model, not a separate stack per channel.',
    },
    {
      icon: 'Database',
      title: 'Data Enrichment for Rating',
      description:
        'Automated pre-fill and rating-variable enrichment from Verisk/ISO, LexisNexis, credit, MVR, CLUE, and geocoding — so quotes are accurate on the first response, not after a second round of questions.',
    },
    {
      icon: 'SlidersHorizontal',
      title: 'Rules & Eligibility Engine',
      description:
        'Configurable appetite, eligibility, and underwriting guardrails per state and line. Hard-stops, soft-refers, and authority-level routing — defined by your product team, not buried in code.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Filed-Rate Verification Gateway',
      description:
        'Every rating call runs through a filed-rate gateway that verifies the quote against the active filing and stamps the response with the rate version, state, and effective date — built so rate drift cannot silently ship.',
    },
    {
      icon: 'Scale',
      title: 'Comparative Quoting & Carrier Shop',
      description:
        'Side-by-side comparison across lines, coverage options, and (for MGAs and agencies) multiple carriers — with explainable premium drivers so the agent or consumer understands why one quote beats another.',
    },
    {
      icon: 'CheckCircle2',
      title: 'Bind Workflow & Policy Handoff',
      description:
        'Down-payment, e-signature, supplemental questions, and a clean handoff into Guidewire, Duck Creek, Sapiens, or your proprietary policy admin — designed so the same quote becomes the bound policy.',
    },
  ],

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Quote-to-Bind',
      description:
        'A unified intake, enrichment, and rating pipeline collapses the multi-system rekeying that slows most quoting tools. Architected so producers and consumers hit a bind-ready quote in one flow, not three.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Rate Integrity Across Channels',
      description:
        'Every channel — consumer, agent, broker API, comparative rater — hits the same filed-rate gateway, so the same risk gets the same price. Rate-version stamping gives compliance a defensible audit trail.',
    },
    {
      icon: 'Users',
      title: 'Higher Producer Adoption',
      description:
        'A quoting experience built around what agents and brokers actually do — pre-fill, side-by-side carrier comparison, explainable premiums, and in-flight saving — tends to replace side-channel spreadsheets instead of adding to them.',
    },
    {
      icon: 'Expand',
      title: 'Rapid Line & State Expansion',
      description:
        'Configurable rate-deck bindings and jurisdiction rules mean adding a new state or a new line of business is a configuration and filing exercise — not a code release and a six-month integration.',
    },
    {
      icon: 'DollarSign',
      title: 'Lower Total Cost of Quoting',
      description:
        'A custom platform on Azure eliminates the per-quote licensing fees and per-carrier surcharges typical of legacy comparative raters, with infrastructure-as-code keeping hosting costs predictable as volume scales.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Rate/Channel Mapping',
      description:
        'We map your current quoting channels, rate-filing cadence, rating engines, and policy admin touchpoints. We document per-state variations, producer workflows, and the exact points where rate drift or rekeying currently occurs — before a line of code is written.',
      duration: '2–3 weeks',
      deliverable: 'Channel map, rate-filing inventory, rating engine integration plan, eligibility rule catalogue, prioritized feature backlog',
    },
    {
      title: 'Architecture & Rate-Gateway Design',
      description:
        'Platform architecture designed around a single rating spine and a filed-rate verification gateway. Integration pattern for your rating engine (Earnix, Guidewire Rating, Duck Creek Rating, or proprietary) documented with failure-mode and rate-version-rollover strategy.',
      duration: '2–3 weeks',
      deliverable: 'Architecture decision records, rate gateway design, rating engine integration spec, Azure infrastructure blueprint, security architecture',
    },
    {
      title: 'Core Platform Development',
      description:
        'Iterative development with bi-weekly demos to product, underwriting, and distribution stakeholders. Multi-channel intake, rules engine, rate gateway, comparison UI, and bind workflow built in React/Next.js and .NET with domain-driven design.',
      duration: '10–16 weeks',
      deliverable: 'Functional quoting platform in staging across agreed channels, test coverage report, performance benchmarks',
    },
    {
      title: 'Integration & Compliance Testing',
      description:
        'Connect to rating engines, policy admin, enrichment providers, and e-signature. Conduct end-to-end rate-integrity testing against filed rates, performance testing at consumer-channel volume, fair lending and disparate-impact review, and WCAG 2.1 AA accessibility validation.',
      duration: '4–6 weeks',
      deliverable: 'Integration documentation, rate-integrity test report, performance benchmark, fair lending test results, accessibility audit',
    },
    {
      title: 'Phased Go-Live, Training & Hypercare',
      description:
        'Line-by-line and state-by-state rollout with role-specific training for product, underwriting, and distribution. Dedicated hypercare period with engineering support, rate-drift monitoring, and channel-level adoption dashboards.',
      duration: '2–3 weeks',
      deliverable: 'Production deployment, training materials, rate-drift monitoring dashboards, runbook, support SLA',
    },
  ],

  capabilities: [
    'Multi-channel intake (consumer, agent, broker API, comparative rater)',
    'Configurable rules, eligibility, and underwriting guardrails',
    'Filed-rate verification with rate-version stamping',
    'Rating engine integration (Earnix, Guidewire, Duck Creek)',
    'Automated enrichment (Verisk, LexisNexis, MVR, CLUE, credit)',
    'Comparative quoting and explainable premium drivers',
    'Quote-to-bind workflow with e-signature and policy handoff',
    'Multi-line and multi-state jurisdiction configuration',
    'Fair lending and disparate-impact testing hooks',
    'Mobile-responsive and accessible (WCAG 2.1 AA)',
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
    'Azure Document Intelligence (OCR)',
    'Power BI Embedded',
    'Terraform (IaC)',
  ],

  integrations: [
    {
      name: 'Earnix',
      category: 'Rating Engine',
      connectionMethod: 'REST API',
      capabilities: [
        'Real-time rating and pricing calls',
        'What-if scenario and rate-impact modelling',
        'Rate optimization analytics feedback',
      ],
    },
    {
      name: 'Guidewire PolicyCenter & Rating Management',
      category: 'Rating + Policy Admin',
      connectionMethod: 'REST + SOAP',
      capabilities: [
        'Real-time rating against filed rate decks',
        'Quote-to-bind and submission lifecycle',
        'Product model synchronisation',
      ],
    },
    {
      name: 'Duck Creek Policy & Rating',
      category: 'Rating + Policy Admin',
      connectionMethod: 'REST + direct DB bridge',
      capabilities: [
        'Policy and rating data exchange',
        'Rate-deck-aware quote generation',
        'Bind and issuance handoff',
      ],
    },
    {
      name: 'Verisk / ISO',
      category: 'Bureau Data',
      connectionMethod: 'REST API + batch',
      capabilities: [
        'Loss-cost data and classifications',
        'Rating variable enrichment',
        'Catastrophe model feeds',
      ],
    },
    {
      name: 'LexisNexis Risk Solutions',
      category: 'Third-Party Data',
      connectionMethod: 'REST API',
      capabilities: [
        'Pre-fill and identity verification',
        'Claims history and risk attributes',
        'Property and vehicle data',
      ],
    },
    {
      name: 'SERFF',
      category: 'Regulatory Filing',
      connectionMethod: 'SERFF API + batch export',
      capabilities: [
        'Rate and form filing documentation exports',
        'State-specific regulatory reporting',
        'Filing-to-rate-deck traceability',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Built on filed rates',
    title: 'Filed-Rate Integrity, DOI-Ready, NAIC-Aligned',
    highlightText: 'Filed-Rate Integrity, DOI-Ready',
    statusText: 'NAIC · State DOI · SERFF · Fair Lending · SOC 2',
    pillars: [
      {
        icon: 'ShieldCheck',
        title: 'Filed-Rate Integrity',
        description:
          'Every quote verified against the active filed rate and stamped with state, line, and rate version — so rate drift cannot silently ship across channels.',
      },
      {
        icon: 'Scale',
        title: 'Fair Lending & Disparate Impact',
        description:
          'Rating variables and model outputs tested against protected classes, configurable per state and aligned to NAIC AI/ML guidance for insurance.',
      },
      {
        icon: 'FileCheck',
        title: 'Audit-Ready Evidence',
        description:
          'Every quote, rule evaluation, rate call, and producer action logged with timestamp, actor, inputs, and outcome — structured for state DOI review.',
      },
    ],
    badges: [
      'NAIC Model Laws',
      'State DOI',
      'SERFF',
      'Fair Lending',
      'SOC 2 Type II',
      'WCAG 2.1 AA',
    ],
  },

  complianceDetail: {
    frameworks: [
      'NAIC Insurance Data Security Model Law',
      'State DOI Rate Filing (SERFF)',
      'Fair Lending Compliance',
      'SOC 2 Type II',
      'WCAG 2.1 AA accessibility',
    ],
    safeguards: [
      {
        icon: 'ShieldCheck',
        title: 'Filed-rate verification gateway',
        description:
          'Every rating call is routed through a gateway that verifies the response against the active filing, flags mismatches, and stamps every quote with its rate version — built so rate drift cannot silently ship to production.',
      },
      {
        icon: 'Scale',
        title: 'Fair lending & disparate impact testing',
        description:
          'Rating variables and model outputs tested against protected classes. Configurable per state and aligned with NAIC guidance on AI/ML in insurance; disparate-impact reports exportable for regulatory review.',
      },
      {
        icon: 'FileCheck',
        title: 'Quote-level audit trail',
        description:
          'Every quote preserves its full decision trail — rules fired, data sources consulted, rating inputs and outputs, rate version, and producer actions — structured for state DOI review and internal audit.',
      },
      {
        icon: 'Lock',
        title: 'Data encryption & key management',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit. Applicant PII encrypted with keys managed through Azure Key Vault with automated rotation policies and access-logged unwrap events.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & role-based access',
        description:
          'Azure AD B2C with enforced MFA for agents, brokers, and administrators. Role-based access distinguishes product, underwriting, distribution, and admin roles with least-privilege defaults.',
      },
      {
        icon: 'Activity',
        title: 'Rate-drift monitoring & alerting',
        description:
          'Automated monitors compare production quote distributions against expected filed-rate behaviour and alert on anomalies — so drift is caught in hours, not in a DOI market-conduct exam.',
      },
    ],
    auditNote:
      'Every module is architected to keep quotes on-filed-rate across channels and to produce the documentation, audit trails, and disparate-impact evidence a state DOI examiner or market-conduct reviewer will ask for. We are not regulatory counsel and recommend your compliance team review final filings and model documentation before submission.',
    partnerAgreements: ['DPA', 'SLA'],
  },

  imageFeatures: [
    {
      heading: 'One Rating Spine, Every Channel',
      description:
        'Consumer web, agent portal, broker API, and comparative raters all hit the same rating engine and filed-rate gateway — so the same risk gets the same price, everywhere.',
      image: {
        src: '/images/solutions/quoting-software/feature-1.jpg',
        alt: 'Insurance agent and client reviewing quote options on a laptop at a consultation desk',
      },
    },
    {
      heading: 'Consumer-Speed Quotes on Filed Rates',
      description:
        'Sub-second rating, side-by-side comparison, and a clean bind path — designed for the moment a consumer or producer has the buying intent, not ten minutes later.',
      image: {
        src: '/images/solutions/quoting-software/feature-2.jpg',
        alt: 'Person getting an online insurance quote on a mobile device with a comparison view',
      },
    },
  ],

  relatedPages: [
    {
      title: 'Underwriting Software',
      description:
        'Quoting and underwriting share a rating spine. Our underwriting platform adds the enrichment, scoring, and workbench that sit behind every quote that needs a human decision — built for the same carriers and MGAs.',
      href: '/solutions/underwriting-software',
      icon: 'TrendingUp',
      pageType: 'solution',
    },
    {
      title: 'Product Discovery',
      description:
        'Planning a quoting platform overhaul? A discovery sprint maps your rating engines, distribution channels, and state-by-state filing landscape before development begins.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'MVP Development',
      description:
        'Want to launch on one line and one state first? Our 12-week MVP process ships a production-ready quoting flow your producers and consumers can actually use — while you plan the full rollout.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Will every quote always match our filed rates across every state and line?',
      answer:
        'Yes — and this is the single most important design constraint of the platform. Every rating call is routed through a filed-rate verification gateway that checks the quote against the active filing for that state, line, and effective date, and stamps the response with the rate version. Rate-drift monitors run in production and alert on distribution anomalies so drift is caught in hours, not in a market-conduct exam. We build this into the architecture from day one because filed-rate integrity is the single line a carrier cannot cross.',
    },
    {
      question: 'Can this integrate with our rating engine — Earnix, Guidewire, Duck Creek, or a proprietary one?',
      answer:
        'Yes. We build against Earnix, Guidewire Rating Management, Duck Creek Rating, Sapiens, and proprietary rating engines using REST APIs, SOAP services, and direct database bridges where an API does not exist. The platform is deliberately engine-agnostic — the filed-rate gateway sits between the quoting workflow and whichever engine owns the rate math, so you can replace or add a rating engine without replacing the quoting platform. Integration architecture is documented as part of discovery so there are no surprises at build time.',
    },
    {
      question: 'Does it support consumer, agent, broker, and comparative-rater channels from one platform?',
      answer:
        'Yes. One canonical submission model and one rating spine power every channel — consumer web, agent and broker portals, comparative-rater feeds, and partner API callers. Each channel gets its own presentation and authentication posture, but they all hit the same rules engine, rating engine, and filed-rate gateway. That is what makes rate integrity possible across channels; any architecture that forks rating logic per channel is the architecture that eventually drifts.',
    },
    {
      question: 'How do you handle NAIC AI/ML guidance, fair lending, and disparate-impact testing?',
      answer:
        'Rating variables and any model-assisted scoring are tested against protected classes, configurable per state, and aligned with NAIC guidance on AI/ML in insurance. The system generates disparate-impact reports and explainability documentation that your compliance and actuarial teams can review before filing. We focus on explainable rules and model outputs so every rating decision can be traced to its inputs — no black-box rating. We are not regulatory counsel and recommend your compliance team sign off on final filings and model documentation.',
    },
    {
      question: 'What does implementation typically cost and how long does it take?',
      answer:
        'A custom quoting platform covering multi-channel intake, rules, rate gateway, comparison, and a bind workflow typically takes 18–30 weeks from kickoff to first production line-of-business go-live, depending on the number of channels, lines, states, and integrations in phase one. Investment typically ranges from $200,000 to $750,000 for a full custom build. We deliver in phases — the highest-priority line and channel go live first, so your team sees operational impact before the full platform is complete.',
    },
    {
      question: 'Can we start with one line of business and one state, then expand?',
      answer:
        'Yes — this is the default approach, not an option. Big-bang multi-state, multi-line quoting launches are a well-known failure mode, and we design against them. Each line, each state, and each channel is a configuration unit with its own rate-deck binding, eligibility rules, and filing trail. Once the core platform is live, adding a state is typically a configuration and filing exercise of a few weeks, and adding a line is 4–8 weeks of configuration plus integration testing — not a platform rebuild.',
    },
  ],

  cta: {
    title: 'Ready to Quote at Consumer Speed — On Filed Rates?',
    description:
      'Book a free 30-minute discovery call. We will review your current quoting channels, rating engine footprint, filing cadence, and distribution strategy, then give you a realistic assessment of what a custom quoting platform would cost and deliver for your carrier, MGA, or agency.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the quoting flow', href: '#signature' },
  },

  _unverified: [
    'hero.metrics — all three are capability-framed (Filed-Rate, Multi-Channel, Engine-Native); greenfield-safe, no outcome claims to verify.',
    'metricsStrip[0..3] — all four values are capability-framed, not outcome percentages. Greenfield-safe.',
    'complianceSpotlight.badges / complianceDetail.frameworks — "SOC 2 Type II" listed; confirm whether company has SOC 2 Type II attestation or is in progress.',
    'integrations[*].capabilities — listed capabilities reflect typical integration scope and filed-rate-aware behaviour; confirm which integrations have been built in production vs. architected as capability.',
    'integrations — six systems listed (Earnix, Guidewire, Duck Creek, Verisk, LexisNexis, SERFF). Greenfield: framed as "we build against" via prose. Confirm framing is honest across all references; e.g., Earnix and SERFF integrations may be architectural knowledge only.',
    'complianceDetail.safeguards[1] — fair lending / disparate-impact testing framed as a built capability. Confirm whether the testing hooks and exports are part of a shipped reference implementation or described as planned capability.',
    'complianceDetail.safeguards[5] — rate-drift monitoring described as automated and production-alerting. Confirm whether the monitoring pipeline exists in any reference implementation.',
    'faq[4] — pricing range "$200k–$750k" and timeline "18–30 weeks" are estimates based on project complexity. Confirm with user / services-catalog before publishing.',
    'faq[5] — "4–8 weeks" per new line and "a few weeks" per new state are estimates. Confirm against actual planned delivery windows.',
    'processSteps durations — reflect estimated typical delivery cadence for insurance quoting platforms; confirm against actual past engagements before publishing as firm windows.',
    'benefits[*] — all five benefits framed in architectural/capability language ("architected for", "designed so", "tends to") per greenfield integrity rule. No outcome percentages claimed. Verify language bar is met.',
    'FiledRateQuotingFlow signature — stage-level time indicators ("sub-second", "< 10s") are capability targets for a well-built quoting platform; not measured from a shipped engagement. Confirm before publishing if claim-strength upgrades are needed.',
  ],
};

export default quotingSoftware;
