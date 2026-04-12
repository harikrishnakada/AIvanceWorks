import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Engineering / CTO / Head of AI at a mid-to-large enterprise (500–5,000+ employees)
// Measured on: delivering production AI capabilities, time-to-production for AI initiatives, business value from AI
// Dominant question: "Can you build a production-ready RAG system that actually works with our data?"
// Key trust issue: burned by AI hype — vendor demos that fell apart on real data, POCs that never shipped,
//   hallucination incidents that embarrassed the team in front of stakeholders
// Signature: GenAiPipelineArchitecture — interactive layered pipeline from data sources through guardrails
//   to production output. Carries the argument: "Every production AI system has these layers. We build all of them."
//
// Composition follows Archetype B recipe (matches MVP Development / SaaS Development reference).
// No deviations from archetype. 10 sections at ceiling, justified for flagship AI service.
// ProcessTimeline dropped — signature already communicates architecture depth,
//   and FAQ addresses delivery cadence. TechStackBlock + EngagementModels demonstrate execution capability.

const generativeAi: ServicePageData = {
  slug: 'generative-ai',
  title: 'Generative AI',
  shortDescription:
    'Production generative AI systems — RAG pipelines, AI agents, and LLM integrations built with retrieval quality, guardrails, and monitoring from the first sprint.',

  metaTitle: 'Generative AI Development | RAG Systems & AI Agents',
  metaDescription:
    'Generative AI engineering — production RAG pipelines, agentic workflows, and LLM integrations with multi-model orchestration, guardrails, and monitoring. From prototype to production AI.',
  keywords: [
    'generative ai development',
    'rag system development',
    'ai agent development',
    'llm integration services',
    'retrieval augmented generation',
    'ai engineering services',
    'production ai systems',
    'langchain development',
    'azure openai integration',
    'enterprise ai development',
    'ai agent workflow automation',
    'vector database implementation',
  ],
  canonicalPath: '/services/generative-ai',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Generative AI', href: '/services/generative-ai' },
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
  signatureComponent: 'GenAiPipelineArchitecture',
  heroIllustrationComponent: 'GenAiHeroIllustration',

  hero: {
    badge: 'AI Engineering',
    headline: 'Production AI systems. Not prototypes that never ship.',
    subhead:
      'RAG pipelines, AI agents, and LLM integrations built for production — with retrieval quality, guardrails, and monitoring from the first sprint.',
    primaryCta: { label: 'Book AI Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline', href: '#signature' },
  },

  // Audience test: VP of Eng scanning in 8 seconds. "Production-Grade" → confirms not a demo shop.
  // "RAG + Agents" → confirms core capability match. "Multi-Model" → no vendor lock-in.
  // "Monitored" → signals operational maturity. All four are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'Production-Grade',
      label: 'Built to ship',
      description: 'Not a notebook demo',
    },
    {
      value: 'RAG + Agents',
      label: 'Core capabilities',
      description: 'Retrieval, orchestration, action',
    },
    {
      value: 'Multi-Model',
      label: 'No vendor lock-in',
      description: 'GPT-4, Claude, Llama, open-source',
    },
    {
      value: 'Monitored',
      label: 'From day one',
      description: 'Evaluation, guardrails, observability',
    },
  ],

  // Audience test: VP of Eng evaluating whether we cover their specific GenAI need.
  // RAG and Agents are the two biggest request categories. LLM Integration covers the entry point.
  // Orchestration shows depth beyond single-model calls. Fine-Tuning for advanced requirements.
  // Evaluation & Guardrails directly addresses the hallucination trust issue.
  features: [
    {
      icon: 'Search',
      title: 'RAG Systems',
      description:
        'Retrieval-augmented generation pipelines that connect LLMs to your data — document ingestion, semantic chunking, embedding pipelines, and hybrid search for accurate, grounded responses.',
    },
    {
      icon: 'Bot',
      title: 'AI Agents',
      description:
        'Autonomous AI workflows that reason, plan, and act — tool orchestration, multi-step execution, and human-in-the-loop checkpoints for tasks that require judgment.',
    },
    {
      icon: 'Plug',
      title: 'LLM Integration',
      description:
        'Azure OpenAI, Azure AI Foundry, and open-source model deployment integrated into your existing applications — API design, prompt engineering, and response handling built for production traffic.',
    },
    {
      icon: 'GitBranch',
      title: 'Model Orchestration',
      description:
        'Multi-model routing, fallback chains, and cost optimization using LangChain, LangGraph, and Semantic Kernel. Route queries to the right model based on complexity, cost, and latency requirements.',
    },
    {
      icon: 'Cpu',
      title: 'Fine-Tuning & Optimization',
      description:
        'Custom model training on your domain data when off-the-shelf models fall short. LoRA fine-tuning, evaluation benchmarks, and performance optimization for latency and cost targets.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Evaluation & Guardrails',
      description:
        'Hallucination detection, content safety filters, response quality scoring, and citation verification built into the pipeline — not bolted on after launch.',
    },
  ],

  // Audience test: VP of Eng evaluating outcomes. Each benefit addresses a specific pain point
  // this buyer has experienced: POCs dying (→ production focus), hallucinations (→ retrieval trust),
  // vendor lock-in (→ multi-model), safety gaps (→ guardrails), and ops blindness (→ observability).
  // All framed as capabilities ("designed for", "built into"), not claimed outcomes.
  benefits: [
    {
      icon: 'Rocket',
      title: 'From Prototype to Production',
      description:
        'AI systems built to ship to real users — with infrastructure, monitoring, and runbooks designed for production operations, not a demo that lives in a notebook.',
    },
    {
      icon: 'Target',
      title: 'Retrieval You Can Trust',
      description:
        'RAG architectures designed for retrieval precision — semantic chunking strategies, relevance scoring, citation tracing, and hybrid search so your AI gives grounded answers, not hallucinated ones.',
    },
    {
      icon: 'Layers',
      title: 'No Vendor Lock-In',
      description:
        'Multi-model orchestration so you can route between GPT-4, Claude, Llama, or your own fine-tuned model. Switch providers or add new models without re-architecting.',
    },
    {
      icon: 'Shield',
      title: 'Guardrails From Day One',
      description:
        'Content safety, hallucination detection, and output validation built into the pipeline from the first sprint — not retrofitted after a production incident.',
    },
    {
      icon: 'Activity',
      title: 'Observable AI',
      description:
        'Prompt traces, latency metrics, token cost tracking, and quality scores — your AI system is as observable as your production API. No black-box inference calls.',
    },
  ],

  capabilities: [
    'RAG pipeline architecture (ingestion, embedding, retrieval, generation)',
    'Agentic AI workflow design and tool orchestration',
    'Azure OpenAI Service and Azure AI Foundry deployment',
    'Multi-model orchestration (LangChain, LangGraph, Semantic Kernel)',
    'Vector database implementation and optimization',
    'Custom model fine-tuning and evaluation',
    'Prompt engineering and optimization frameworks',
    'Production monitoring and observability for AI systems',
    'Content safety and guardrail implementation',
    'ML pipeline design and CI/CD for AI models',
  ],

  technologies: [
    'Azure OpenAI',
    'Azure AI Foundry',
    'LangChain',
    'LangGraph',
    'Semantic Kernel',
    'Python',
    'ChromaDB',
    'Azure AI Search',
    'PyTorch',
    'MLflow',
    'Hugging Face',
    'FastAPI',
    'Docker',
    'GitHub Actions',
  ],

  engagementModels: [
    {
      name: 'AI Discovery Sprint',
      duration: '2 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'Use case validation and feasibility assessment',
        'Architecture design and technology selection',
        'Working prototype with your real data',
        'Go/no-go recommendation with production estimate',
      ],
      suitableFor: 'Teams evaluating whether a GenAI approach is feasible for their use case before committing to a full build',
      primaryCta: { label: 'Book Discovery Sprint', href: '/contact?ai=discovery' },
    },
    {
      name: 'Production AI Build',
      duration: '8–12 weeks',
      priceFrom: '$80,000',
      whatsIncluded: [
        'Full RAG pipeline or AI agent system',
        'Production infrastructure (Azure or AWS)',
        'Evaluation framework and guardrails',
        'Monitoring, logging, and observability',
        'Handover documentation and runbook',
      ],
      suitableFor: 'Teams ready to build a production AI system — RAG, agents, or LLM integration — with a clear use case',
      primaryCta: { label: 'Book Production Build', href: '/contact?ai=production' },
      featured: true,
    },
    {
      name: 'Enterprise AI Platform',
      duration: '16+ weeks',
      priceFrom: '$180,000',
      whatsIncluded: [
        'Everything in Production Build',
        'Multi-model orchestration and routing',
        'Custom fine-tuning pipeline',
        'Advanced evaluation and testing suite',
        'Team training and knowledge transfer',
        'Ongoing support retainer options',
      ],
      suitableFor: 'Organizations building AI capabilities across multiple use cases or teams, needing platform-level infrastructure',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?ai=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'AI Strategy & Consulting',
      description:
        'Not sure which AI use cases to prioritize before committing to an engineering build? Our strategy assessment validates business cases, scores use cases by impact and feasibility, and produces a roadmap so your GenAI investment starts with the right problem.',
      href: '/services/ai-strategy-consulting',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'NLP & Document AI',
      description:
        'Processing unstructured documents before they reach your RAG pipeline? Our Document AI service handles extraction, classification, and structuring so your retrieval layer ingests clean, indexed data.',
      href: '/services/nlp-document-ai',
      icon: 'FileText',
      pageType: 'service',
    },
    {
      title: 'Conversational AI',
      description:
        'The most common surface for generative AI is a conversational agent. We build production chatbots and virtual assistants powered by the same RAG pipelines, guardrails, and orchestration — deployed across web, mobile, Teams, and Slack.',
      href: '/services/conversational-ai',
      icon: 'MessageSquare',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How do you handle hallucinations in RAG systems?',
      answer:
        'Hallucination control is built into the pipeline at multiple layers. We use semantic chunking strategies optimized for retrieval precision, hybrid search combining dense and sparse retrieval, relevance scoring with configurable thresholds, and citation tracing that links every generated statement back to source documents. The evaluation framework continuously measures retrieval quality and flags responses that lack grounding. No RAG system eliminates hallucination entirely, but a well-built pipeline reduces it to a manageable, measurable rate.',
    },
    {
      question: 'Can you work with our existing data sources and infrastructure?',
      answer:
        'Yes. The ingestion layer is designed to connect to whatever you already have — databases, document stores, APIs, SharePoint, Confluence, S3 buckets, or real-time event streams. We build connectors specific to your data landscape and handle the extraction, transformation, and embedding pipeline. The AI system deploys on your cloud infrastructure (Azure or AWS) or alongside it.',
    },
    {
      question: 'What models do you support — are we locked into one provider?',
      answer:
        'We build multi-model architectures by default. The orchestration layer can route between Azure OpenAI (GPT-4, GPT-4o), Anthropic Claude, Meta Llama, Mistral, and other open-source models — choosing the right model per query based on complexity, cost, and latency. You can switch providers or add new models without re-architecting the system. This also means you control your cost profile as model pricing evolves.',
    },
    {
      question: 'How long does it take to go from a working prototype to production?',
      answer:
        'The AI Discovery Sprint produces a working prototype in 2 weeks. From there, a production build typically takes 8–12 weeks depending on the complexity of your data sources, the number of integration points, and whether fine-tuning is involved. The production build includes infrastructure, evaluation, guardrails, monitoring, and a handover package — not just the model layer.',
    },
    {
      question: 'Do you handle model selection or do we need to decide first?',
      answer:
        'We handle model selection as part of the architecture design. During the Discovery Sprint, we evaluate candidate models against your use case — accuracy, latency, cost, and data sensitivity constraints. The production system is built with multi-model support so you are not locked into the initial choice. If a better model launches next quarter, swapping it in is a configuration change, not a rebuild.',
    },
    {
      question: 'What happens when new models are released — does our system become obsolete?',
      answer:
        'The orchestration and evaluation layers are model-agnostic by design. When a new model is released, we add it to the routing layer and run it through the evaluation suite against your existing benchmarks. If it performs better, it gets promoted. If not, nothing changes. Your data pipeline, guardrails, monitoring, and application integration remain stable regardless of which model sits underneath.',
    },
  ],

  cta: {
    title: 'Ready to build AI that actually ships?',
    description:
      'Book a 30-minute call. We will discuss your use case, assess feasibility, and outline what a production AI system looks like for your organization.',
    primaryCta: { label: 'Book AI strategy call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable AI engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Discovery Sprint. Confirm achievability.',
    'engagementModels[1].duration — "8–12 weeks" for Production Build. Confirm achievability for typical RAG/agent builds.',
    'capabilities — none individually verified against shipped work yet.',
    'technologies — confirm the stack matches what we actually deliver (e.g., ChromaDB vs. other vector DBs, FastAPI vs. other frameworks).',
    'faq[0] — hallucination control claims are architecturally accurate but not verified against a shipped engagement.',
  ],
};

export default generativeAi;
