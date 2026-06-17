import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service ("I need to know it can be built. Prove it.")
// Buyer: CTO / VP Engineering / Head of Innovation / Director of R&D at a US
//   mid-market company or funded startup — or a product leader / founder carrying a
//   high-risk technical bet (a new AI feature, a hard integration, an aggressive
//   performance/cost target, a novel architecture) who must decide whether to commit
//   a full build budget.
// Measured on: R&D budget efficiency, making the right build / pivot / stop call,
//   not sinking months into something that cannot work, de-risking before a board or
//   investor commitment.
// Top 3 buyer questions:
//   (1) Can this actually be built and perform the way we need?
//   (2) How fast and how cheaply can I get a definitive answer?
//   (3) What do I walk away with — and will you tell me honestly if it won't work?
// #1 trust issue: PoCs that balloon into endless prototypes (scope creep), and vendors
//   who deliver a flashy demo that dodges the hard question and always says "yes, build it"
//   to win the follow-on contract. ANSWERED via fixed scope, success criteria agreed up
//   front, an honest go/pivot/stop verdict, and an explicit "a PoC is a disposable
//   feasibility experiment, not production software" boundary (also our liability boundary).
//
// Signature: PocFeasibilityVerdict — a narrowing feasibility funnel (riskiest assumption →
//   minimal experiment → measured against criteria) that resolves into one of three honest
//   verdicts: Greenlight / Pivot / Stop. The argument it carries: you leave with a clear,
//   evidence-backed decision — even when the honest answer is "don't build this."
//
// Composition — Archetype B recipe, adapted:
//   - ProcessTimeline DROPPED: the signature funnel already expresses the method
//     (hypothesis → build minimum → measure → verdict), so a separate timeline would
//     duplicate it (Archetype B §6.4 "drop ProcessTimeline if the signature is a process").
//   - TechStackBlock KEPT: a technical buyer evaluating a PoC partner wants to see the
//     breadth we can prototype across to trust we can test their specific bet.
//   - 10 sections total — within the constitution's max-10 density rule.

const proofOfConcept: ServicePageData = {
  slug: 'proof-of-concept',
  title: 'Proof of Concept (PoC) Development',
  shortDescription:
    'A focused, time-boxed experiment that tests your riskiest technical assumption against measurable success criteria — so you get a clear build, pivot, or stop decision before committing a full build budget.',

  metaTitle: 'Proof of Concept (PoC) Development | Validate Feasibility First',
  metaDescription:
    'Proof of concept development that tests your riskiest technical assumption against measurable success criteria in 2–4 weeks. Get a clear go, pivot, or stop verdict — backed by real data — before you commit a full build budget.',
  keywords: [
    'proof of concept development',
    'poc development services',
    'technical feasibility study',
    'proof of concept software',
    'feasibility prototype',
    'validate technical feasibility',
    'poc vs mvp',
    'ai proof of concept',
    'de-risk software project',
  ],
  canonicalPath: '/services/proof-of-concept',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Proof of Concept (PoC) Development', href: '/services/proof-of-concept' },
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

  category: 'software-engineering',
  signatureComponent: 'PocFeasibilityVerdict',
  heroIllustrationComponent: 'PocHeroIllustration',

  hero: {
    badge: 'Technical Service',
    headline: 'Find out if it can be built — before you bet on it.',
    subhead:
      'A time-boxed experiment that tests your riskiest assumption against measurable criteria — so you get a clear build, pivot, or stop decision before committing budget.',
    primaryCta: { label: 'Scope a proof of concept', href: '/contact' },
    secondaryCta: { label: 'See how we reach a verdict', href: '#signature' },
  },

  // Audience test: CTO / Head of Innovation scanning in 8 seconds for "fast, bounded,
  // and ends in a real answer." All four are process/capability facts about how we run a
  // PoC — not fabricated outcome numbers.
  metricsStrip: [
    {
      value: '2–4 Weeks',
      label: 'Idea to evidence',
      description: 'Time-boxed, fixed scope',
    },
    {
      value: '1 Hypothesis',
      label: 'One question, answered',
      description: 'The riskiest assumption first',
    },
    {
      value: 'Go / Pivot / Stop',
      label: 'A clear verdict',
      description: 'Backed by real test data',
    },
    {
      value: 'Fixed Scope',
      label: 'No runaway prototype',
      description: 'A defined start and a defined end',
    },
  ],

  // Audience test: these six map directly to what a rigorous PoC must contain (problem,
  // scope, success criteria, resources, findings, recommendation). Framed as what the
  // buyer gets, not internal process jargon.
  features: [
    {
      icon: 'Target',
      title: 'A testable hypothesis',
      description:
        'We pin down the single technical question worth answering and write it as a measurable, pass-or-fail hypothesis — before a line of code is written.',
    },
    {
      icon: 'Minimize2',
      title: 'Deliberately narrow scope',
      description:
        'We build only the minimum needed to test the core assumption — no polish, no extra features, no over-engineering the experiment to look like a product.',
    },
    {
      icon: 'Gauge',
      title: 'Measurable success criteria',
      description:
        'Concrete thresholds agreed up front — response time, accuracy, throughput, cost — so "did it work?" is settled by data, never by opinion.',
    },
    {
      icon: 'Boxes',
      title: 'Resources mapped early',
      description:
        'A clear picture of the technologies, data, and skills a full build would need — surfaced while it is still cheap to change course.',
    },
    {
      icon: 'ClipboardList',
      title: 'Documented results & findings',
      description:
        'Evidence from the experiment: what performed, what broke, what surprised us, and the technical hurdles a production build would have to clear.',
    },
    {
      icon: 'Signpost',
      title: 'An actionable recommendation',
      description:
        'A direct call — greenlight, pivot, or stop — with the reasoning and the data behind it, so your next decision is grounded rather than guessed.',
    },
  ],

  // Audience test: outcomes that justify the spend to a CTO and to their board.
  // Capability-framed (greenfield-honest) — no invented ROI numbers.
  benefits: [
    {
      icon: 'ShieldCheck',
      title: 'De-risk before you spend',
      description:
        'Test the assumption that could sink the whole project for a fraction of a full build, while the budget at stake is still small.',
    },
    {
      icon: 'Compass',
      title: 'Decide on evidence, not optimism',
      description:
        'Replace "we think it will work" with test data your whole team — and your board — can stand behind when the budget conversation happens.',
    },
    {
      icon: 'Ban',
      title: 'A "no" is a win too',
      description:
        'An honest stop recommendation saves you months of building the wrong thing. Telling you when not to build is the entire point of a proof of concept.',
    },
    {
      icon: 'Workflow',
      title: 'A clean line to the real build',
      description:
        'If the verdict is go, you walk into full development with a validated approach, a mapped tech stack, and the hard questions already answered.',
    },
  ],

  // Audience test: a technical buyer wants to see the breadth we can prototype across to
  // trust we can test their specific bet. Framed as what a PoC engagement covers and the
  // tools we build with — not implied shipped delivery history.
  capabilities: [
    'Riskiest-assumption hypothesis design',
    'Minimal end-to-end vertical slice (not a full application)',
    'Measurable success-criteria definition (latency, accuracy, throughput, cost)',
    'Technical feasibility & performance benchmarking',
    'AI/ML model and prompt feasibility spikes',
    'Third-party API and data-source feasibility checks',
    'Architecture and scalability assessment',
    'Findings report with a go / pivot / stop recommendation',
    'Effort, cost, and resource estimate for the full build',
    'Throwaway-by-design prototype code, documented and handed over',
  ],
  technologies: [
    'Python',
    '.NET',
    'TypeScript',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Azure',
    'AWS',
    'Azure OpenAI',
    'LangChain',
    'Docker',
    'REST & GraphQL APIs',
  ],

  engagementModels: [
    {
      name: 'Feasibility Spike',
      duration: '1 week',
      priceFrom: '$8,000',
      whatsIncluded: [
        'One sharply defined hypothesis',
        'A minimal experiment to test it',
        'Pass / fail against agreed criteria',
        'A short findings summary with a recommendation',
      ],
      suitableFor:
        'A single, sharp technical question you need answered fast before a bigger decision.',
      primaryCta: { label: 'Scope a spike', href: '/contact?poc=spike' },
    },
    {
      name: 'Proof of Concept',
      duration: '2–4 weeks',
      priceFrom: '$20,000',
      featured: true,
      whatsIncluded: [
        'Hypothesis and measurable success-criteria workshop',
        'A minimal end-to-end vertical slice',
        'Performance and feasibility benchmarking',
        'Documented results and findings',
        'A clear go / pivot / stop recommendation',
        'Effort and cost estimate for the full build',
      ],
      suitableFor:
        'Validating a core technical bet before committing to a full build or a production roadmap.',
      primaryCta: { label: 'Scope a PoC', href: '/contact?poc=standard' },
    },
    {
      name: 'Prototype & Roadmap',
      duration: '4–6 weeks',
      priceFrom: 'Custom',
      whatsIncluded: [
        'Everything in Proof of Concept',
        'A more complete, demonstrable prototype',
        'A production architecture recommendation',
        'A phased build roadmap and risk register',
        'A stakeholder demo and decision workshop',
      ],
      suitableFor:
        'Teams that need a demonstrable prototype and a credible plan to take it to production.',
      primaryCta: { label: 'Discuss a prototype', href: '/contact?poc=prototype' },
    },
  ],

  relatedPages: [
    {
      title: 'MVP Development',
      description:
        'Verdict is go? We turn a validated proof of concept into a production V1 in 12 weeks — same team, no restart, no lost context.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Market Research',
      description:
        'Proving the tech is only half the bet. Market research sizes the opportunity and validates the buyer before — or alongside — your feasibility test.',
      href: '/services/market-research',
      icon: 'Search',
      pageType: 'service',
    },
    {
      title: 'Generative AI',
      description:
        'Proving an AI feature? See how we take a validated GenAI concept into a production-grade application — with retrieval quality, guardrails, and monitoring built in.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: "What's the difference between a proof of concept and an MVP?",
      answer:
        'A proof of concept answers one question — "can this actually be built and work?" — with the minimum experiment needed to find out. It is disposable by design. An MVP is the first real, shippable version of a product that users can pay for. You do a PoC to decide whether to build; you do an MVP to start building. Doing them in the wrong order is how budgets get burned on ideas that were never feasible.',
    },
    {
      question: 'How long does a proof of concept take, and how do you keep it from sprawling?',
      answer:
        'Most proofs of concept run two to four weeks. We keep them bounded by agreeing the single hypothesis and the pass/fail success criteria before we start — and by building only what is needed to test that hypothesis. When something tempting but out of scope appears, it goes on the recommendations list for the full build, not into the experiment. Fixed scope and a defined end date are the whole discipline of a PoC.',
    },
    {
      question: 'What do I actually receive at the end?',
      answer:
        'You receive a documented findings report: the hypothesis, the success criteria, the measured results, the technical hurdles we hit, and a direct recommendation — go, pivot, or stop — with the reasoning behind it. You also receive an effort and cost estimate for the full build and the prototype code itself. The code is a feasibility experiment, documented and handed over, not a production system.',
    },
    {
      question: 'Will you tell us honestly if the idea is not feasible?',
      answer:
        'Yes — that is the value you are paying for. A proof of concept that always concludes "build it" is worthless. If the evidence says the assumption does not hold, we recommend stopping or pivoting, and we show you the data behind that call. An honest no, delivered in week three, is far cheaper than discovering the same thing after a six-month build.',
    },
    {
      question: 'Can the proof-of-concept code be used in production?',
      answer:
        'No, and we are deliberate about that. PoC code is built to answer a feasibility question quickly, not to meet the security, scalability, and maintainability standards a production system needs. Hardening throwaway code into production is a common and expensive mistake. If the verdict is go, we use what we learned to build the real thing properly — with the validated approach carried forward, but the code rebuilt to production standards.',
    },
    {
      question: 'Do we own the code and findings?',
      answer:
        'Yes. The findings report, the success-criteria definitions, the benchmark data, and the prototype code are all yours. You can take the recommendation to another team, build it in-house, or continue with us. There is no lock-in and no proprietary tooling you depend on to read your own results.',
    },
  ],

  cta: {
    title: 'Have a high-risk technical bet? Prove it before you build it.',
    description:
      'Book a 30-minute call. We will pin down the riskiest assumption, define what "success" measurably looks like, and scope a proof of concept that answers it.',
    primaryCta: { label: 'Scope a proof of concept', href: '/contact' },
    secondaryCta: { label: 'See how we reach a verdict', href: '#signature' },
  },

  _unverified: [
    'engagementModels[0].priceFrom — "$8,000" is illustrative. Confirm with pricing review before publishing.',
    'engagementModels[1].priceFrom — "$20,000" is illustrative. Confirm with pricing review before publishing.',
    'metricsStrip[0] / faqs[1] — "2–4 weeks" is the typical PoC window we offer; confirm it matches the standard engagement we want to commit to publicly.',
  ],
};

export default proofOfConcept;
