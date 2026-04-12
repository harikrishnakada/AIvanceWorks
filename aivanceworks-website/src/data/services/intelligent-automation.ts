import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Operations / COO / Director of Process Improvement at a mid-to-large
//   enterprise (500–5,000 employees) managing high-volume, judgment-dependent workflows
// Measured on: operational efficiency, cost per transaction, SLA compliance, error rates,
//   headcount-to-output ratio
// Dominant question: "How is this different from the RPA we already tried — and that broke
//   when our forms changed?"
// Key trust issue: burned by RPA vendors — fragile bots that broke on every process change,
//   could only handle rule-based tasks, and required constant maintenance that ate the
//   promised ROI. The moment a process required judgment, the bot failed.
// Signature: AutomationOrchestrationFlow — comparison-flow showing Traditional RPA
//   (dim, muted) vs Intelligent Automation (highlighted) across 5 workflow stages.
//   Carries the argument: "This isn't RPA that records and replays — it's AI that
//   understands, reasons, and acts, with human oversight where it matters."
//
// Composition follows Archetype B recipe (matches Generative AI / NLP Doc AI reference).
// ProcessTimeline dropped — signature already communicates depth, FAQ addresses delivery
//   cadence. TechStackBlock + EngagementModels demonstrate execution capability.
// No deviations from archetype. 10 sections at ceiling, justified for core AI service
//   spanning workflow automation, cognitive automation, process mining, decision support,
//   document routing, and human-in-the-loop design.

const intelligentAutomation: ServicePageData = {
  slug: 'intelligent-automation',
  title: 'Intelligent Automation',
  shortDescription:
    'AI-augmented workflow automation that handles judgment-dependent tasks — combining LLM reasoning with process orchestration to automate what RPA cannot.',

  metaTitle: 'Intelligent Automation | AI Workflow Automation Services',
  metaDescription:
    'AI-augmented workflow automation that goes beyond RPA — cognitive automation, process mining, AI-powered decision support, and human-in-the-loop design for complex business processes.',
  keywords: [
    'intelligent automation services',
    'ai workflow automation',
    'cognitive automation',
    'intelligent process automation',
    'ai augmented rpa',
    'business process automation ai',
    'process mining ai',
    'ai decision support systems',
    'human in the loop automation',
    'workflow automation ai',
    'llm business process automation',
    'enterprise workflow automation',
  ],
  canonicalPath: '/services/intelligent-automation',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Intelligent Automation', href: '/services/intelligent-automation' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'ai-ml',
  signatureComponent: 'AutomationOrchestrationFlow',
  heroIllustrationComponent: 'IntelligentAutoHeroIllustration',

  hero: {
    badge: 'AI Automation',
    headline: 'Automate the workflows RPA cannot touch.',
    subhead:
      'AI-augmented automation for processes that require judgment, interpretation, and adaptation — not just rule-based recording and replay.',
    primaryCta: { label: 'Book Automation Call', href: '/contact' },
    secondaryCta: { label: 'See the difference', href: '#signature' },
  },

  // Audience test: VP of Ops scanning in 8 seconds. "Beyond RPA" → confirms this addresses
  // their trust issue. "Judgment Calls" → confirms AI reasoning, not just rules.
  // "Existing Systems" → no rip-and-replace. "Human Oversight" → safety and control.
  // All four are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'Beyond RPA',
      label: 'AI reasoning, not rules',
      description: 'Handles what bots cannot',
    },
    {
      value: 'Judgment Calls',
      label: 'Cognitive automation',
      description: 'Interpretation, not just clicks',
    },
    {
      value: 'Existing Systems',
      label: 'Integrates, not replaces',
      description: 'ERP, CRM, document systems',
    },
    {
      value: 'Human Oversight',
      label: 'Where it matters',
      description: 'Confidence-based routing',
    },
  ],

  // Audience test: VP of Ops evaluating whether we cover their specific automation need.
  // Workflow Automation is the core ask. Cognitive Automation addresses the judgment question.
  // Process Mining answers "how do you find what to automate?" Document Processing covers
  // the doc-heavy workflows. Decision Support is the AI reasoning layer. Human-in-the-Loop
  // directly addresses the control/safety trust issue.
  features: [
    {
      icon: 'Workflow',
      title: 'AI-Augmented Workflow Automation',
      description:
        'End-to-end workflow automation that combines AI reasoning with process orchestration — handling variations, exceptions, and edge cases that break rule-based bots.',
    },
    {
      icon: 'Brain',
      title: 'Cognitive Automation',
      description:
        'Automation for tasks that require interpretation and judgment — classifying requests, extracting meaning from unstructured inputs, and making context-aware decisions within your process.',
    },
    {
      icon: 'BarChart3',
      title: 'Process Mining & Optimization',
      description:
        'AI-driven discovery of automation candidates across your operations — analyzing process patterns, identifying bottlenecks, and prioritizing workflows by automation potential and business impact.',
    },
    {
      icon: 'FileText',
      title: 'Intelligent Document Routing',
      description:
        'AI-powered document classification and routing that reads, understands, and directs incoming documents to the right workflow — invoices, claims, applications, correspondence.',
    },
    {
      icon: 'Scale',
      title: 'AI-Powered Decision Support',
      description:
        'Decision engines that evaluate complex criteria, score confidence, and recommend actions within your workflows — augmenting human judgment, not replacing it.',
    },
    {
      icon: 'UserCheck',
      title: 'Human-in-the-Loop Design',
      description:
        'Confidence-based routing that escalates to human reviewers when AI certainty falls below your threshold — exceptions are handled, not dropped.',
    },
  ],

  // Audience test: VP of Ops evaluating outcomes. Each benefit addresses a specific pain point:
  // RPA fragility (→ handles judgment), integration anxiety (→ works with existing systems),
  // headcount pressure (→ scales without adding people), process opacity (→ measurable),
  // maintenance burden (→ adapts when processes change). All framed as capabilities.
  benefits: [
    {
      icon: 'Brain',
      title: 'Handles What RPA Cannot',
      description:
        'Processes that require interpretation, judgment, and context-aware decisions — not just screen scraping and click recording. AI reasoning handles the variations that break rule-based bots.',
    },
    {
      icon: 'Puzzle',
      title: 'Works With Your Existing Systems',
      description:
        'API-native integration with your ERP, CRM, document management, and workflow systems. No rip-and-replace — automation connects to what you already have via APIs and webhooks.',
    },
    {
      icon: 'TrendingUp',
      title: 'Scale Without Proportional Headcount',
      description:
        'Handle growing volume without proportionally growing your operations team. Automation absorbs the routine and judgment-assisted work; your team focuses on exceptions and strategy.',
    },
    {
      icon: 'Activity',
      title: 'Measurable Process Intelligence',
      description:
        'Every automated workflow produces metrics — throughput, processing time, error rates, confidence scores, and escalation patterns. You see what is working and where to optimize next.',
    },
    {
      icon: 'RefreshCw',
      title: 'Adapts When Processes Change',
      description:
        'AI-powered automation adapts to process variations instead of breaking. When forms change, inputs vary, or rules evolve, the system adjusts — no bot repair cycle.',
    },
  ],

  capabilities: [
    'AI-augmented workflow automation (LLM reasoning + process orchestration)',
    'Cognitive automation for judgment-dependent tasks',
    'Process mining and automation candidate identification',
    'Intelligent document processing, classification, and routing',
    'AI-powered decision support and confidence scoring',
    'Human-in-the-loop review workflows with escalation routing',
    'Business process automation with LLM integration',
    'System integration via APIs, webhooks, and event-driven connectors',
    'Process monitoring, metrics, and continuous optimization',
    'Exception handling and graceful degradation design',
  ],

  technologies: [
    'Azure OpenAI',
    'LangChain',
    'LangGraph',
    'Semantic Kernel',
    'Azure Logic Apps',
    'Azure Functions',
    'Power Automate',
    'Python',
    'Azure Service Bus',
    'Azure Event Grid',
    'FastAPI',
    'Docker',
  ],

  engagementModels: [
    {
      name: 'Automation Discovery Sprint',
      duration: '2 weeks',
      priceFrom: '$12,000',
      whatsIncluded: [
        'Process analysis for 3–5 target workflows',
        'Automation feasibility and complexity assessment',
        'Integration mapping with existing systems',
        'Prioritized automation roadmap by ROI and complexity',
        'Go/no-go recommendation with production estimate',
      ],
      suitableFor: 'Teams evaluating which processes to automate first — need a data-backed view before committing to a build',
      primaryCta: { label: 'Book Discovery Sprint', href: '/contact?automation=discovery' },
    },
    {
      name: 'Production Automation Build',
      duration: '8–12 weeks',
      priceFrom: '$70,000',
      whatsIncluded: [
        'Full automation for 2–3 target workflows',
        'AI decision engine with confidence scoring',
        'Human-in-the-loop review workflows',
        'System integration (ERP, CRM, document systems)',
        'Monitoring dashboard and process metrics',
        'Handover documentation and runbook',
      ],
      suitableFor: 'Teams ready to automate specific workflows with clear process definitions and integration requirements',
      primaryCta: { label: 'Book Production Build', href: '/contact?automation=production' },
      featured: true,
    },
    {
      name: 'Enterprise Automation Platform',
      duration: '16+ weeks',
      priceFrom: '$160,000',
      whatsIncluded: [
        'Everything in Production Build',
        'Process mining across departments',
        'Multi-workflow orchestration platform',
        'Advanced decision support and routing',
        'Custom model training for domain-specific tasks',
        'Team training and knowledge transfer',
      ],
      suitableFor: 'Organizations automating across multiple departments or process families, needing platform-level orchestration',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?automation=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'Generative AI',
      description:
        'Your automation workflows can leverage LLM reasoning for document understanding, content generation, and complex decision-making — GenAI powers the cognitive layer in your automation pipeline.',
      href: '/services/generative-ai',
      icon: 'Brain',
      pageType: 'service',
    },
    {
      title: 'NLP & Document AI',
      description:
        'Automate the document-heavy parts of your workflows — extraction, classification, and routing that feed structured data directly into your automation pipeline.',
      href: '/services/nlp-document-ai',
      icon: 'FileText',
      pageType: 'service',
    },
    {
      title: 'AI Strategy & Consulting',
      description:
        'Not sure which processes to automate first? A strategy engagement maps your automation landscape and prioritizes candidates by business impact, complexity, and organizational readiness.',
      href: '/services/ai-strategy-consulting',
      icon: 'Compass',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How is this different from RPA?',
      answer:
        'Traditional RPA records screen interactions and replays them — it works for predictable, rule-based tasks but breaks when forms change, inputs vary, or the process requires judgment. Intelligent automation adds an AI reasoning layer: LLMs that understand document content, classify requests, evaluate complex criteria, and make confidence-scored decisions. The automation adapts to variation instead of failing on it. RPA and intelligent automation can coexist — RPA handles the mechanical steps while AI handles the judgment-dependent ones.',
    },
    {
      question: 'Can this handle processes that require human judgment?',
      answer:
        'That is the core differentiator. The AI decision engine evaluates complex criteria and scores confidence on every decision. When confidence is high, the automation proceeds. When confidence falls below your threshold, the workflow routes to a human reviewer with context and a recommended action pre-filled. Your team reviews and decides rather than starting from scratch. Over time, the system learns from human decisions to handle similar cases with higher confidence.',
    },
    {
      question: 'What systems do you integrate with?',
      answer:
        'The automation layer connects via APIs, webhooks, and event-driven integrations — not screen scraping. We build connectors for ERP systems (SAP, NetSuite, Dynamics), CRM platforms (Salesforce, HubSpot), document management systems (SharePoint, Confluence), email and communication tools, and custom internal applications. The integration layer handles data mapping, validation, and error handling so the automation stays resilient when downstream systems change.',
    },
    {
      question: 'How do you identify which processes to automate?',
      answer:
        'The Discovery Sprint analyzes your target workflows across five dimensions: volume (how often the process runs), complexity (how many decision points and variations), error rate (where mistakes are most costly), integration points (what systems are involved), and judgment dependency (what percentage requires human interpretation). The output is a prioritized roadmap — not every process benefits from AI automation, and the Sprint identifies which ones do.',
    },
    {
      question: 'What happens when a process changes?',
      answer:
        'AI-powered automation handles process variation by design. The classification and decision layers understand content semantically — they are not tied to specific form fields, button positions, or screen layouts. When processes evolve, the AI adapts to new input formats and routing patterns. Major process redesigns may require retraining or reconfiguration, but the automation does not break silently — monitoring detects drift in confidence scores and processing patterns.',
    },
    {
      question: 'How long does it take to see results from automation?',
      answer:
        'The Discovery Sprint produces a prioritized automation roadmap in 2 weeks. A production automation build for 2–3 workflows typically takes 8–12 weeks including integration, testing, and human-in-the-loop setup. You see measurable results — throughput improvements, error rate changes, processing time reductions — from the first automated workflow. The platform approach (16+ weeks) rolls out automation across departments incrementally.',
    },
  ],

  cta: {
    title: 'Ready to automate the workflows RPA cannot handle?',
    description:
      'Book a 30-minute call. We will discuss your target workflows, integration landscape, and where AI-augmented automation can deliver the most impact.',
    primaryCta: { label: 'Book automation call', href: '/contact' },
    secondaryCta: { label: 'See the difference', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable AI automation engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Discovery Sprint. Confirm achievability for process analysis.',
    'engagementModels[1].duration — "8–12 weeks" for Production Build. Confirm achievability for 2–3 workflow automations.',
    'capabilities — none individually verified against shipped work yet.',
    'technologies — confirm the stack matches what we actually deliver (e.g., Power Automate vs. other orchestration tools).',
    'faq[1] — "system learns from human decisions" claim is architecturally accurate but not verified against a shipped engagement.',
  ],
};

export default intelligentAutomation;
