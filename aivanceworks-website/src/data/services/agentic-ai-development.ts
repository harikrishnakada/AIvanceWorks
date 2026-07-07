import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Engineering / CTO / Head of AI / Head of Automation at a US mid-to-large
//   company (200–5,000+ employees). Has already seen generative-AI demos and now wants
//   AI that *does things* — takes actions across their tools and systems, not just
//   produces text. Owns a high-visibility bet to turn agent hype into something that
//   runs reliably without becoming a risk incident.
// Measured on: shipping AI that works in production, operational leverage from
//   automating multi-step work, and NOT creating an incident (an agent that took a
//   wrong, expensive, or irreversible action).
// Top 3 questions buyers arrive with:
//   (a) "Will the agent actually complete multi-step work reliably in production — or
//        is it a demo that falls apart on the fifth step / on edge cases?"
//   (b) "When it acts autonomously, how do I stay in control — what stops it from doing
//        something wrong or irreversible, and can I see and audit what it did?"
//   (c) "How does it connect to our actual tools and systems, and do we own it / not get
//        locked into one model vendor?"
// Key trust issue: LOSS OF CONTROL over an autonomous system. With a chatbot a wrong
//   answer is embarrassing; with an agent that *acts*, a wrong action can be destructive
//   or irreversible. The nightmare is a "runaway agent" with no guardrails, no human
//   checkpoint, and no audit trail — plus the demo-to-production gap (agents that loop
//   forever, hallucinate tool calls, or fail silently mid-task).
//
// Signature: AgentAutonomySpectrum (NEW, single-use) — four ordered autonomy levels
//   (Assist → Recommend → Act with Approval → Bounded Autonomy) along a gradient axis
//   (left = more human control, right = more agent autonomy). Each level names what the
//   agent does, where the human stays in control, and the guardrail that makes it safe.
//   Visualization pattern: comparison/spectrum (catalog #4) + gradient axis.
//   Why a NEW signature (Component Reuse Rule): no existing signature expresses a
//   control/autonomy gradient. ModelLifecycleLoop is a cyclical ML lifecycle;
//   GenAiPipelineArchitecture is a layered RAG/guardrail pipeline; AutomationOrchestrationFlow
//   (intelligent-automation) is a two-column RPA-vs-IA comparison. The ordered autonomy
//   axis and the human-control / guardrail pairing at each step ARE the emotional argument
//   and the liability boundary, and an ordered axis is exactly what a FeatureGrid cannot
//   express.
//   Emotional argument: "Autonomy is a dial you control, not a switch you flip. We build
//   agents that act with exactly the oversight each task warrants — and never with more
//   autonomy than you have authorized."
//
// Composition: Archetype B default (mirrors generative-ai.ts / ml-development.ts):
//   hero → metricsStrip → featureGrid → imageFeatures → signature → benefitsGrid →
//   techStackBlock → engagementModels → relatedPages → faq → ctaBlock.
//   10 visible sections (Archetype B ceiling).
//   - ProcessTimeline DROPPED — consistent with the whole AI house (generative-ai,
//     conversational-ai, intelligent-automation, ml-development); the FAQ covers delivery
//     cadence and the signature carries the depth.
//   - BenefitsGrid KEPT — this buyer's trust issue is best answered in outcome language
//     (production reliability, control, no runaway agents, traceability, ownership), all
//     capability-framed for greenfield integrity.
//   - imageFeatures included in the composition after featureGrid per the page brief, but
//     ServiceDetailTemplate renders imageFeatures as null (§11.5 service-page imagery:
//     services use an SVG hero illustration, not photos). Placeholder photos exist at
//     public/images/services/agentic-ai-development/ for spec/parity with solution pages;
//     they do NOT render on this page. Matches the ml-development / api-development / poc
//     precedent: "imageFeatures renders null on ServiceDetailTemplate."
//
// Archetype B-vs-C / B-vs-D confirmation (§9.5 audience test):
//   - vs D (Commerce): the buyer's primary concern is execution quality and control
//     (does the agent work, does it stay in bounds), NOT a revenue/conversion KPI. The
//     deliverable is a running agent system, not a money-making storefront → B.
//   - vs C (Regulated): control, guardrails, and audit logging are front-and-center, but
//     this buyer is NOT gated by an external regulator on this purchase — control is THEIR
//     own operational fear (a wrong autonomous action), not a compliance obligation. So the
//     control/guardrail framing lives in the signature, metrics, features, and benefits as
//     a buyer-outcome — there is no ComplianceDeepDive, because compliance is not the gate.
//
// Differentiation from neighbors (must not cannibalize):
//   - generative-ai: GenAI *generates* (RAG, content, answers); "AI Agents" is one feature
//     there. This page is the deep specialization on *action* — the whole page is agents
//     that act, multi-agent orchestration, tool use, and the control plane.
//   - conversational-ai: chat surfaces that *answer*. Agents act beyond conversation.
//   - intelligent-automation: targets VP Ops with an "beyond RPA / operational outcome"
//     framing for business-process automation. This page targets the technical builder
//     (VP Eng/CTO) and is about *building agent systems* — the engineering substrate.
//     The two are cross-linked so they complement rather than overlap.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → FeatureGrid (warm) → [imageFeatures null] →
//   Signature (dark) → BenefitsGrid (light) → TechStackBlock (warm) →
//   EngagementModels (light) → RelatedPages (warm) → FAQ (light) → CTA (accent)
//   Two darks (hero + signature), no adjacency, CTA accent — rhythm rules satisfied.
//
// Agentic AI Development maps to the AI & Machine Learning pillar in the services catalog.
// Buyers search "agentic ai development", "ai agent development", "multi-agent systems",
// "autonomous ai agents", "ai agent orchestration", "tool calling agents", "MCP integration".
// NO complex third-party integration claims are made anywhere on this page (hard
// constraint): every statement is a capability we build (agent design, tool/function
// calling, MCP connectivity, guardrails) or a tool in our stack, framed greenfield-honest,
// so nothing on the page is a liability.

const agenticAiDevelopment: ServicePageData = {
  slug: 'agentic-ai-development',
  title: `${BRAND_PREFIX} Agentic AI Development`,
  shortDescription:
    'Autonomous and semi-autonomous AI agents that reason, plan, use your tools, and complete multi-step work — with human oversight and guardrails built in from the first sprint.',

  metaTitle: 'Agentic AI Development | Autonomous AI Agents & Multi-Agent Systems',
  metaDescription:
    'Agentic AI engineering — autonomous and semi-autonomous AI agents that reason, plan, call tools, and act, with multi-agent orchestration, human-in-the-loop approval, guardrails, and full observability. Agents that act, under your control.',
  keywords: [
    'agentic ai development',
    'ai agent development',
    'autonomous ai agents',
    'multi-agent systems',
    'ai agent orchestration',
    'tool calling agents',
    'mcp integration',
    'model context protocol',
    'human in the loop ai agents',
    'langgraph development',
    'ai agent guardrails',
    'production ai agents',
  ],
  canonicalPath: '/services/agentic-ai-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: `${BRAND_PREFIX} Agentic AI Development`, href: '/services/agentic-ai-development' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures', // after featureGrid per brief; ServiceDetailTemplate renders null (§11.5)
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'ai-ml',
  signatureComponent: 'AgentAutonomySpectrum',
  heroIllustrationComponent: 'AgenticAiHeroIllustration',

  hero: {
    badge: 'Agentic AI',
    headline: 'Agents that take action. Under your control.',
    subhead:
      'Autonomous and semi-autonomous AI agents that reason, plan, use your tools, and complete multi-step work — with oversight and guardrails built in from day one.',
    primaryCta: { label: 'Book an Agentic AI Call', href: '/contact' },
    secondaryCta: { label: 'See the autonomy spectrum', href: '#signature' },
  },

  // Audience test: VP of Eng / CTO scanning in 8 seconds. Each metric answers one of the
  // four things this buyer carries: agents that ACT (not just generate), they set the
  // autonomy, it stays bounded and auditable, and it reaches production. All capability-
  // framed (greenfield integrity — no fabricated performance stats).
  metricsStrip: [
    {
      value: 'Action, Not Answers',
      label: 'Agents that act',
      description: 'Tool use and multi-step execution',
    },
    {
      value: 'You Set Autonomy',
      label: 'Oversight by design',
      description: 'From assist to bounded autonomy',
    },
    {
      value: 'Guardrailed',
      label: 'Bounded and auditable',
      description: 'Policy limits, kill switch, full logs',
    },
    {
      value: 'Production-Bound',
      label: 'Built to ship',
      description: 'Not a demo that loops forever',
    },
  ],

  // Audience test: technical buyer confirming we cover the actual building blocks of an
  // agent system and the control plane around it. Features 5 and 6 (human-in-the-loop,
  // guardrails) directly answer the dominant trust question. Icons from Lucide.
  features: [
    {
      icon: 'Bot',
      title: 'Single-Agent Workflows',
      description:
        'An agent that reasons over a goal, plans the steps, calls the right tools, and works through a multi-step task — with retries and stop conditions so it finishes or fails cleanly, instead of looping forever.',
    },
    {
      icon: 'Network',
      title: 'Multi-Agent Orchestration',
      description:
        'Specialized agents — planner, researcher, executor, reviewer — coordinated through a controlled workflow, so complex work is split across roles with explicit handoffs instead of one overloaded prompt doing everything.',
    },
    {
      icon: 'Wrench',
      title: 'Tool & Function Calling',
      description:
        'Agents act through typed tools — functions, API calls, database queries, searches — with validated inputs and outputs, so the agent works through interfaces you define rather than improvising on a live system.',
    },
    {
      icon: 'Cable',
      title: 'MCP & System Connectivity',
      description:
        'We connect agents to your systems using the Model Context Protocol (MCP), the open standard for exposing tools to agents — built on the APIs your systems already provide, never brittle screen scraping.',
    },
    {
      icon: 'UserCheck',
      title: 'Human-in-the-Loop Controls',
      description:
        'Approval gates, confidence thresholds, and risk-tagged actions, so consequential or irreversible steps pause for a person. This is the line between a useful agent and a liability.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Guardrails & Observability',
      description:
        'A policy envelope — allowed tools, spend limits, scopes, loop limits — plus a kill switch and full action logging, so every step the agent took is bounded and traceable after the fact.',
    },
  ],

  // imageFeatures: included in composition per the page brief, but ServiceDetailTemplate
  // renders this section as null for service pages (§11.5 — services use the SVG hero
  // illustration above, not photos). Placeholder photos for spec parity live at
  // public/images/services/agentic-ai-development/{hero,feature-1,feature-2}.jpg. Image
  // specs if a future template change renders them:
  //   hero.jpg     — engineers reviewing an agent run trace / workflow graph on a large
  //                  monitor in a modern office (human faces, diverse, no cliché robot art).
  //   feature-1.jpg — two engineers pair-working on agent tooling at a laptop.
  //   feature-2.jpg — a team reviewing an agent action log / approval dashboard together.
  //   Landscape, min 1200px wide, Unsplash, no color grading. alt text describes the scene.

  // Audience test: technical buyer evaluating outcomes. Each benefit answers a specific
  // scar/fear this buyer carries — demos dying in prod (→ reliability), loss of control
  // (→ autonomy dial), runaway agents (→ bounded), no audit trail (→ traceable), vendor
  // lock-in (→ ownership). All framed as capabilities ("built to", "designed to") —
  // greenfield-safe.
  benefits: [
    {
      icon: 'Rocket',
      title: 'Across the Production Gap',
      description:
        'Agent systems built to run on real tasks — with retries, timeouts, stop conditions, and error handling — not a flashy demo that falls apart on the fifth step or the first edge case.',
    },
    {
      icon: 'SlidersHorizontal',
      title: 'You Control the Autonomy',
      description:
        'Every agent ships at the autonomy level you choose, from suggest-only to bounded-autonomous. You can dial it down per task, and the agent never exceeds the authority you have granted it.',
    },
    {
      icon: 'ShieldCheck',
      title: 'No Runaway Agents',
      description:
        'Hard policy envelopes, risk-gated actions, and a kill switch mean an agent acts inside the limits you set and escalates anything outside them — instead of improvising on a live system.',
    },
    {
      icon: 'ScrollText',
      title: 'Every Action Is Traceable',
      description:
        'A complete action log records what the agent did, with what inputs, and who approved it — so you can review, debug, and explain any decision after the fact, not guess at what happened.',
    },
    {
      icon: 'KeyRound',
      title: 'You Own the System',
      description:
        'Built on open agent frameworks with a documented architecture and a multi-model design — so you are not locked to a single model vendor and not dependent on us to keep the agent running.',
    },
  ],

  // Audience test: technical buyer validates depth here. Everything listed is industry-
  // proven and we build with it (greenfield capability framing). Capabilities = what we
  // do; technologies = what we build with. No claim of past shipped integrations.
  capabilities: [
    'Agent design: goal framing, planning, and tool selection',
    'Single-agent task automation with retries and stop conditions',
    'Multi-agent orchestration (planner, executor, reviewer roles)',
    'Tool and function calling with typed, validated interfaces',
    'Model Context Protocol (MCP) tool and system connectivity',
    'Retrieval grounding so agents act on facts, not guesses',
    'Human-in-the-loop approval gates and confidence-based routing',
    'Policy envelopes: allowed tools, spend limits, scopes, loop limits',
    'Agent observability: run tracing, action logs, and a kill switch',
    'Multi-model agent design (Claude, GPT, open-source) — no lock-in',
  ],
  technologies: [
    'Python',
    'LangGraph',
    'LangChain',
    'Model Context Protocol (MCP)',
    'Claude',
    'Azure OpenAI',
    'Semantic Kernel',
    'FastAPI',
    'Vector databases',
    'OpenTelemetry',
    'Docker',
    'AWS / Azure / GCP',
  ],

  engagementModels: [
    {
      name: 'Agent Feasibility Sprint',
      duration: '2 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'Use case and task decomposition for one workflow',
        'Tool and system-surface assessment (what the agent can act on)',
        'Autonomy-level and guardrail design',
        'Working prototype of the agent on your workflow',
        'Go / no-go recommendation with production estimate',
      ],
      suitableFor:
        'Teams who need to know whether an agent can reliably handle a workflow — and at what autonomy level — before committing to a full build',
      primaryCta: { label: 'Book Feasibility Sprint', href: '/contact?agent=feasibility' },
    },
    {
      name: 'Production Agent Build',
      duration: '8–12 weeks',
      priceFrom: '$80,000',
      whatsIncluded: [
        'Single or multi-agent system for a defined workflow',
        'Tool / function calling and MCP connectivity',
        'Human-in-the-loop approval gates and confidence routing',
        'Guardrails: policy envelope, loop limits, and kill switch',
        'Observability, run tracing, and action logging',
        'Handover documentation and runbook',
      ],
      suitableFor:
        'Teams with a validated workflow ready to put an agent into production with the controls to run it safely',
      primaryCta: { label: 'Book Production Build', href: '/contact?agent=production' },
      featured: true,
    },
    {
      name: 'Agent Build + Managed Operation',
      duration: '8–12 week build + ongoing',
      priceFrom: '$80,000 + $7,500/mo',
      whatsIncluded: [
        'Everything in Production Agent Build',
        'Ongoing monitoring and incident response',
        'Guardrail and prompt tuning as tasks evolve',
        'Model evaluation and upgrades as new models ship',
        'Direct Slack/Teams channel with the agent team',
      ],
      suitableFor:
        'Teams that want their agents monitored and tuned in production while they focus on product and operations',
      primaryCta: { label: 'Book Managed Operation Call', href: '/contact?agent=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'Generative AI',
      description:
        'Need the generation layer underneath the agent? When the task is retrieval and answering rather than acting, our generative AI engagement builds the RAG pipelines and grounding that agents reason over before they act.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
    {
      title: 'Native AI Development',
      description:
        'Agents are one pattern inside a larger AI-native product. When you are building software designed around a foundation model from day one — the UX, the prompt layer, and the infrastructure — this is the architecture engagement the agents live inside.',
      href: '/services/native-ai-development',
      icon: 'Boxes',
      pageType: 'service',
    },
    {
      title: 'C10 AI Infrastructure',
      description:
        'Running agents in production needs a platform underneath them. Our AI infrastructure engagement builds the compute, data fabric, and cost guardrails that agentic workloads actually run on — engineered for portability and predictable spend.',
      href: '/solutions/ai-infrastructure',
      icon: 'Server',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'How is agentic AI different from generative AI or a chatbot?',
      answer:
        'A generative AI system or chatbot produces an output — an answer, a summary, a draft. An agent takes actions: it reasons over a goal, plans the steps, calls tools, and works through a multi-step task, observing each result before deciding the next move. The distinction matters for risk. A wrong answer from a chatbot is embarrassing; a wrong action from an agent — sending the wrong message, changing the wrong record — can be costly or irreversible. That is exactly why we build the autonomy levels and guardrails on this page: an agent that acts is only useful if it acts under control.',
    },
    {
      question: 'What stops the agent from doing something it should not?',
      answer:
        'Several layers, and you choose how strict they are. Each tool the agent can use is defined and risk-tagged, so consequential or irreversible actions route to a human for approval rather than running automatically. The agent operates inside a policy envelope — an allow-list of tools, spend limits, scopes, and loop and step limits — and an operator kill switch can stop it at any moment. Anything outside the envelope causes the agent to stop and escalate instead of improvising. Every action is logged with its inputs and approver. The autonomy spectrum on this page shows the four levels of control you can dial between.',
    },
    {
      question: 'Will the agent actually work in production, or just in a demo?',
      answer:
        'Production reliability is the design target, not an afterthought. The most common failure modes for agents — looping forever, hallucinating a tool call, or failing silently mid-task — are handled with explicit stop conditions, typed and validated tool interfaces, retries with backoff, and timeouts. We start with a feasibility sprint that runs the agent on your real workflow to find where it struggles before a full build, so you get an honest verdict on reliability rather than a polished demo that breaks on the fifth step.',
    },
    {
      question: 'How does the agent connect to our tools and systems?',
      answer:
        'Through interfaces you control. We build agent connectivity using the Model Context Protocol (MCP) — the open standard for exposing tools and systems to agents — together with typed function and API calls, on top of the APIs your systems already provide. We do not screen-scrape, and we do not claim pre-built connectors to specific third-party products: each tool is defined, validated, and risk-tagged for your environment. That keeps the agent working through stable interfaces and keeps the connections something you own and can audit.',
    },
    {
      question: 'Do we own the agent, or are we locked into you or one model vendor?',
      answer:
        'You own it. Agents are built on open frameworks (such as LangGraph) with a documented architecture, defined tools, and a multi-model design so you can route between Claude, GPT, or open-source models rather than depending on a single provider. Handover includes a runbook and knowledge transfer so your engineers can operate, extend, and adjust the agent without us. If you choose the managed option, that is a convenience, not a dependency — you can take operations in-house at any point.',
    },
    {
      question: 'We are not sure agents are the right fit for our problem — where do we start?',
      answer:
        'Start with the Agent Feasibility Sprint. In two weeks we decompose your target workflow, map the tools and systems an agent would need to act on, design the autonomy level and guardrails that fit, and build a working prototype on your real workflow. You get an honest go / no-go verdict with a production estimate. Sometimes the right answer is a simpler automation or a generative-AI assistant rather than a full agent — and saying so is a legitimate outcome. You leave with a clear decision and the evidence behind it.',
    },
  ],

  cta: {
    title: 'Ready to put an agent to work — safely?',
    description:
      'Book a 30-minute call. We will discuss your workflow, which tasks an agent could take on, and the autonomy level and guardrails that fit your risk tolerance.',
    primaryCta: { label: 'Book an agentic AI call', href: '/contact' },
    secondaryCta: { label: 'See the autonomy spectrum', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable agentic-AI engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Agent Feasibility Sprint. Confirm achievability.',
    'engagementModels[1].duration — "8–12 weeks" for Production Agent Build. Confirm typical engagement length for single/multi-agent builds.',
    'engagementModels[2].priceFrom — "$7,500/mo" managed operation. Confirm pricing model.',
    'technologies — confirm the stack matches what we actually deliver (e.g., LangGraph for orchestration, MCP for connectivity, OpenTelemetry for tracing).',
    'images at public/images/services/agentic-ai-development/ are placeholder copies for spec parity only; they do NOT render — ServiceDetailTemplate renders imageFeatures as null for service pages (§11.5). Replace with the documented subjects only if a future template change renders service imageFeatures.',
  ],
};

export default agenticAiDevelopment;
