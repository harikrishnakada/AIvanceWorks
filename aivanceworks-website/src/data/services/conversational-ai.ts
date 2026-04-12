import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Customer Experience / Head of Customer Support / Director of Operations
//   at a mid-market to enterprise company (200–5,000+ employees) with significant support volume
// Measured on: CSAT/NPS, support cost per ticket, first-contact resolution, agent headcount efficiency
// Dominant question: "Can you build a chatbot that actually handles real customer questions —
//   not just FAQ redirects?"
// Key trust issue: burned by dumb bots — rule-based chatbots or early NLP bots that couldn't
//   handle off-script questions, hallucinated confidently, frustrated customers into calling anyway,
//   and had no analytics to tell you what was going wrong
// Signature: ConversationalFlowArchitecture — interactive layered architecture from channels through
//   intent recognition, knowledge retrieval, dialogue engine, guardrails, to human handoff.
//   Carries the argument: "A real conversational AI system is an architecture, not a widget —
//   intent, knowledge, dialogue, safety, and handoff, all orchestrated."
//
// Composition follows Archetype B recipe (matches Generative AI / NLP Document AI reference).
// ProcessTimeline dropped — signature already communicates architecture depth,
//   and FAQ addresses delivery cadence. TechStackBlock + EngagementModels demonstrate execution capability.
// No deviations from archetype. 10 sections at ceiling, justified for core AI service.

const conversationalAi: ServicePageData = {
  slug: 'conversational-ai',
  title: 'Conversational AI',
  shortDescription:
    'AI-powered chatbots, virtual assistants, and voice interfaces that resolve customer questions — with knowledge retrieval, dialogue management, and human handoff built in.',

  metaTitle: 'Conversational AI Development | Chatbots & Virtual Assistants',
  metaDescription:
    'Conversational AI engineering — AI chatbots, virtual assistants, and multi-channel support agents with knowledge retrieval, intent recognition, human handoff, and conversation analytics.',
  keywords: [
    'conversational ai development',
    'ai chatbot development',
    'virtual assistant development',
    'ai customer support bot',
    'knowledge base chatbot',
    'multi-channel chatbot',
    'chatbot with human handoff',
    'azure bot service',
    'enterprise chatbot development',
    'ai powered customer service',
    'voice assistant development',
    'conversational ai platform',
  ],
  canonicalPath: '/services/conversational-ai',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Conversational AI', href: '/services/conversational-ai' },
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
  signatureComponent: 'ConversationalFlowArchitecture',
  heroIllustrationComponent: 'ConversationalAiHeroIllustration',

  hero: {
    badge: 'Conversational AI',
    headline: 'Chatbots that resolve questions. Not redirect them.',
    subhead:
      'AI-powered conversational agents with knowledge retrieval, dialogue management, and human handoff — built to actually handle what your customers ask.',
    primaryCta: { label: 'Book a Conversational AI Call', href: '/contact' },
    secondaryCta: { label: 'See the architecture', href: '#signature' },
  },

  // Audience test: VP of CX scanning in 8 seconds. "Knowledge-Powered" → confirms this is
  // not a decision-tree bot. "Multi-Channel" → covers their web, mobile, Teams, Slack needs.
  // "Human Handoff" → directly addresses the #2 buyer question. "Analytics Built In" →
  // signals this isn't a black box. All four are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'Knowledge-Powered',
      label: 'Not a decision tree',
      description: 'Retrieves from your actual knowledge base',
    },
    {
      value: 'Multi-Channel',
      label: 'Web, mobile, Teams, Slack, voice',
      description: 'One agent, every channel',
    },
    {
      value: 'Human Handoff',
      label: 'With full context',
      description: 'Escalation without customers repeating themselves',
    },
    {
      value: 'Analytics Built In',
      label: 'From day one',
      description: 'See what works and what needs improving',
    },
  ],

  // Audience test: VP of CX evaluating whether we cover their specific conversational AI need.
  // Chatbots & Virtual Assistants is the core ask. Knowledge-Base Agents addresses "can it
  // answer real questions?" Multi-Channel covers deployment surface. Intent Recognition shows
  // NLU depth beyond keyword matching. Human Handoff addresses the #2 trust question directly.
  // Conversation Analytics answers "how do I know it's working?"
  features: [
    {
      icon: 'MessageSquare',
      title: 'AI Chatbots & Virtual Assistants',
      description:
        'Conversational agents powered by LLMs that understand natural language, maintain context across turns, and resolve inquiries — not just deflect them to a help article.',
    },
    {
      icon: 'BookOpen',
      title: 'Knowledge-Base Agents',
      description:
        'Retrieval-augmented agents grounded in your documentation, FAQs, product catalogs, and support history — answers sourced from your actual knowledge, not hallucinated.',
    },
    {
      icon: 'Globe',
      title: 'Multi-Channel Deployment',
      description:
        'One conversational agent deployed across web chat, mobile apps, Microsoft Teams, Slack, and voice — consistent experience on every channel your customers and employees use.',
    },
    {
      icon: 'Brain',
      title: 'Intent Recognition & Context',
      description:
        'Natural language understanding that identifies what the user needs, tracks conversation context across multiple turns, and handles follow-up questions without losing the thread.',
    },
    {
      icon: 'ArrowRightLeft',
      title: 'Human Agent Handoff',
      description:
        'Seamless escalation to human agents with full conversation history, identified intent, and attempted resolution steps — so the customer never has to repeat themselves.',
    },
    {
      icon: 'BarChart3',
      title: 'Conversation Analytics',
      description:
        'Dashboards showing resolution rates, handoff frequency, common intents, failed queries, and customer satisfaction — the data you need to improve the agent continuously.',
    },
  ],

  // Audience test: VP of CX evaluating outcomes. Each benefit addresses a specific pain point
  // this buyer has experienced: dumb bots (→ real resolution), customers repeating themselves
  // (→ context-aware handoff), no visibility (→ measurable performance), scaling support costs
  // (→ handle volume), and stale answers (→ knowledge stays current).
  // All framed as capabilities ("designed for", "built to"), not claimed outcomes.
  benefits: [
    {
      icon: 'CheckCircle2',
      title: 'Actually Resolve Questions',
      description:
        'Conversational agents built to answer real questions from your knowledge base — not redirect users to a help center link or loop them through a decision tree until they give up.',
    },
    {
      icon: 'ArrowRightLeft',
      title: 'Handoff Without Repetition',
      description:
        'When the agent escalates, the human agent sees the full conversation, the identified intent, and what was already tried. The customer picks up where they left off, not from the beginning.',
    },
    {
      icon: 'BarChart3',
      title: 'Measure What Matters',
      description:
        'Resolution rate, handoff rate, common failure points, and satisfaction scores — visible from day one. You know exactly where the agent is strong and where it needs improvement.',
    },
    {
      icon: 'TrendingUp',
      title: 'Handle Volume Without Scaling Headcount',
      description:
        'Conversational agents that handle routine inquiries at any volume — freeing your support team to focus on complex cases that require human judgment and empathy.',
    },
    {
      icon: 'RefreshCw',
      title: 'Knowledge That Stays Current',
      description:
        'The retrieval pipeline connects to your live documentation, product catalog, and support articles. When your content updates, the agent answers correctly — no manual retraining required.',
    },
  ],

  capabilities: [
    'AI-powered chatbot and virtual assistant development',
    'Knowledge-base-powered conversational agents (RAG)',
    'Multi-channel deployment (web, mobile, Teams, Slack, voice)',
    'Intent recognition and natural language understanding',
    'Dialogue management and multi-turn context tracking',
    'Human agent handoff with context preservation',
    'Conversation analytics and continuous improvement dashboards',
    'Voice assistant and voice interface development',
    'Content safety and response guardrails',
    'Integration with CRM, helpdesk, and ticketing systems',
  ],

  technologies: [
    'Azure OpenAI',
    'Azure Bot Service',
    'LangChain',
    'LangGraph',
    'Semantic Kernel',
    'Azure AI Search',
    'Azure Communication Services',
    'Python',
    'Node.js',
    'TypeScript',
    'FastAPI',
    'Docker',
  ],

  engagementModels: [
    {
      name: 'Conversational AI Discovery Sprint',
      duration: '2 weeks',
      priceFrom: '$12,000',
      whatsIncluded: [
        'Use case validation and conversation flow mapping',
        'Knowledge base assessment and retrieval feasibility',
        'Architecture design and channel strategy',
        'Working prototype on your actual content',
        'Go/no-go recommendation with production estimate',
      ],
      suitableFor: 'Teams evaluating whether a conversational AI agent can handle their customer inquiries before committing to a full build',
      primaryCta: { label: 'Book Discovery Sprint', href: '/contact?chat=discovery' },
    },
    {
      name: 'Production Conversational Agent',
      duration: '6–10 weeks',
      priceFrom: '$55,000',
      whatsIncluded: [
        'Full conversational agent with knowledge retrieval',
        'Intent recognition and dialogue management',
        'Human handoff with context preservation',
        'Deployment on agreed channels (web, Teams, Slack)',
        'Analytics dashboard and monitoring',
        'Handover documentation and runbook',
      ],
      suitableFor: 'Teams ready to deploy a production conversational agent on one or more channels with a defined knowledge base and handoff workflow',
      primaryCta: { label: 'Book Production Build', href: '/contact?chat=production' },
      featured: true,
    },
    {
      name: 'Enterprise Conversational Platform',
      duration: '12+ weeks',
      priceFrom: '$120,000',
      whatsIncluded: [
        'Everything in Production Agent',
        'Multi-channel deployment (web, mobile, Teams, Slack, voice)',
        'Multi-language support',
        'Advanced analytics and conversation intelligence',
        'CRM and helpdesk integration',
        'Team training and knowledge transfer',
        'Ongoing support retainer options',
      ],
      suitableFor: 'Organizations deploying conversational AI across multiple channels, languages, or departments, needing platform-level conversational infrastructure',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?chat=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'Generative AI',
      description:
        'Your chatbot is one surface for a broader AI capability. We build the RAG pipelines, agent frameworks, and LLM orchestration that power conversational agents — and extend to any AI-powered application.',
      href: '/services/generative-ai',
      icon: 'Brain',
      pageType: 'service',
    },
    {
      title: 'NLP & Document AI',
      description:
        'Need your agent to answer questions from PDFs, scanned documents, or unstructured files? Our document processing pipeline extracts and structures content so your chatbot retrieves accurate answers.',
      href: '/services/nlp-document-ai',
      icon: 'FileText',
      pageType: 'service',
    },
    {
      title: 'Intelligent Automation',
      description:
        'Conversations that trigger actions — not just answers. We build AI-augmented workflows that let your chatbot process requests, update records, and complete tasks on behalf of customers.',
      href: '/services/intelligent-automation',
      icon: 'Zap',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How is this different from an off-the-shelf chatbot like Intercom or Zendesk bots?',
      answer:
        'Off-the-shelf chatbots typically match keywords against pre-written responses or follow decision trees. They work for simple FAQ deflection but break down when customers ask questions in their own words, need multi-turn context, or have requests that cross knowledge domains. A custom conversational agent uses LLMs for natural language understanding, retrieves answers from your actual knowledge base via RAG, maintains conversation context across turns, and escalates to humans with full context when needed. The tradeoff: more upfront investment, but significantly higher resolution rates and a system that improves with your content.',
    },
    {
      question: 'What happens when the bot cannot answer a question?',
      answer:
        'The agent is designed to know its limits. Every response carries a confidence score. When confidence is low, the agent routes the conversation to a human agent with the full transcript, identified intent, and what was already attempted. The customer does not start over. The analytics dashboard tracks these handoffs so you can see which question types are escalating and feed that back into knowledge base improvements.',
    },
    {
      question: 'Can the chatbot access our internal knowledge base and documentation?',
      answer:
        'Yes. The retrieval pipeline connects to your existing content — help articles, product documentation, internal wikis, FAQ databases, and support ticket history. We build the ingestion, embedding, and search infrastructure so the agent retrieves relevant content in real time. When your documentation changes, the agent reflects those changes automatically — no manual retraining step.',
    },
    {
      question: 'Which channels can the agent be deployed on?',
      answer:
        'The conversational agent deploys to web chat widgets, mobile apps, Microsoft Teams, Slack, and voice interfaces. The core dialogue engine is channel-agnostic — one agent serves all channels with channel-specific adaptations for UI and interaction patterns. You can start with a single channel and expand to others without rebuilding the agent.',
    },
    {
      question: 'How do you prevent the bot from giving wrong answers?',
      answer:
        'Guardrails are built into the pipeline at multiple layers. The retrieval layer uses confidence scoring to ensure answers are grounded in your knowledge base — not hallucinated. Content safety filters catch inappropriate or off-topic responses. Response validation checks for factual consistency against source documents. And the human handoff mechanism ensures anything below the confidence threshold goes to a person, not to the customer as a guess.',
    },
    {
      question: 'How long does it take to go from kickoff to a working agent?',
      answer:
        'The Discovery Sprint produces a working prototype in 2 weeks using your actual content. A production build typically takes 6–10 weeks depending on the number of channels, the size and complexity of your knowledge base, and whether integrations with CRM or helpdesk systems are involved. The production build includes intent recognition, dialogue management, handoff workflows, analytics, and deployment — not just the chatbot interface.',
    },
  ],

  cta: {
    title: 'Ready to build a chatbot that actually works?',
    description:
      'Book a 30-minute call. We will discuss your support volume, knowledge base, and channel requirements — and outline what a production conversational agent looks like for your organization.',
    primaryCta: { label: 'Book a conversational AI call', href: '/contact' },
    secondaryCta: { label: 'See the architecture', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable conversational AI engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Discovery Sprint. Confirm achievability.',
    'engagementModels[1].duration — "6–10 weeks" for Production Agent. Confirm achievability for typical chatbot builds with knowledge retrieval and handoff.',
    'capabilities — none individually verified against shipped work yet.',
    'technologies — confirm the stack matches what we actually deliver (e.g., Azure Bot Service vs. other frameworks, FastAPI vs. other backends).',
  ],
};

export default conversationalAi;
