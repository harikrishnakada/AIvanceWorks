import type { ServicePageData } from '@/types/pages';

// Archetype A — Strategic Service
// Buyer: VP of Product / Head of Product / CPO at a mid-market company (200–2,000 employees)
//   or growth-stage startup (Series A–C). Semi-technical.
// Measured on: product adoption, NPS, time-to-market, conversion rates on digital surfaces
// Dominant question: "How do I know if my product's UX is actually the problem?"
// Key trust issue: "The last agency delivered pretty mockups that engineers couldn't build."
//   The buyer's skepticism centers on design-as-art vs. design-as-engineering-input.
//   Our positioning: every deliverable is buildable, token-backed, and engineer-ready.
// Signature: DesignMaturitySpectrum — a 3-stage maturity model (Ad Hoc → Structured → Systematic)
//   letting the buyer self-assess and see the journey. Comparison/Process hybrid pattern.
//
// Composition follows Archetype A recipe (same as Product Discovery, Cloud Strategy).
// No deviations from the archetype.

const uiUxDesign: ServicePageData = {
  slug: 'ui-ux-design',
  title: 'UI/UX Design',
  shortDescription:
    'User experience research, interface design, and design system creation that produces buildable, engineer-ready artifacts — not slide decks that gather dust.',

  metaTitle: 'UI/UX Design Services | Research, Wireframes & Design Systems',
  metaDescription:
    'UI/UX design consulting that delivers usability audits, wireframes, interactive prototypes, and design systems your engineering team can build from. Research-driven, engineer-ready.',
  keywords: [
    'ui ux design services',
    'ux design consulting',
    'ux audit',
    'design system consulting',
    'wireframing services',
    'user research consulting',
    'usability testing services',
    'ux strategy',
    'product design services',
    'accessibility audit',
    'design sprint',
    'figma to code',
  ],
  canonicalPath: '/services/ui-ux-design',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'discoveryMethodology',
    'signature',
    'processTimeline',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'DesignMaturitySpectrum',
  heroIllustrationComponent: 'UiUxHeroIllustration',

  // ─── Hero ──────────────────────────────────────────────────
  // Audience test: VP of Product who suspects UX is the bottleneck.
  // Headline addresses the trust gap directly: "buildable" is the key word.
  // Subhead names the deliverables so the buyer sees specifics, not fluff.
  hero: {
    badge: 'Design Service',
    headline: 'Design that ships, not design that sits in Figma.',
    subhead:
      'Usability audits, wireframes, interactive prototypes, and design systems — every artifact built to hand off to your engineering team, not to a presentation deck.',
    primaryCta: { label: 'Book a Design Consultation', href: '/contact' },
    secondaryCta: { label: 'See our approach', href: '#signature' },
  },

  // ─── Metrics Strip ─────────────────────────────────────────
  // Audience test: VP of Product scanning for structure. Deliverable-framed metrics
  // that communicate tangibility and fixed scope. No uncited percentages.
  // Greenfield-safe: these describe engagement shape, not past outcomes.
  metricsStrip: [
    {
      value: '2–4 weeks',
      label: 'Audit to design system',
      description: 'Fixed timeline, scoped engagement',
    },
    {
      value: 'Buildable',
      label: 'Every deliverable',
      description: 'Token-backed, engineer-ready artifacts',
    },
    {
      value: 'Research-Led',
      label: 'User evidence, not opinions',
      description: 'Decisions backed by real user data',
    },
    {
      value: 'Handoff-Ready',
      label: 'Figma-to-code bridge',
      description: 'Design tokens and component specs included',
    },
  ],

  // ─── Methodology ───────────────────────────────────────────
  // Audience test: VP of Product wants to see recognized UX research methodologies —
  // signals that we approach design rigorously, not artistically.
  // Each card names a method they've heard of and explains what it produces.
  methodology: [
    {
      icon: 'Users',
      name: 'User Research & Interviews',
      description:
        'Structured interviews and contextual inquiry with real users to surface pain points, workflows, and unmet needs — the evidence base for every design decision.',
    },
    {
      icon: 'Search',
      name: 'Usability Audits',
      description:
        'Heuristic evaluation and task-flow analysis of your existing product. We identify friction points, accessibility gaps, and conversion blockers with prioritized recommendations.',
    },
    {
      icon: 'Layout',
      name: 'Wireframing & Prototyping',
      description:
        'Low-fidelity wireframes for structure validation, then interactive prototypes in Figma for user testing — before a single line of production code is written.',
    },
    {
      icon: 'Palette',
      name: 'Design Systems',
      description:
        'A component library with design tokens, spacing scales, typography, and interaction patterns — documented, versioned, and ready for your front-end team to implement.',
    },
  ],

  // ─── Process Steps ─────────────────────────────────────────
  // Audience test: the VP of Product wants to see a structured, repeatable process —
  // not a "creative journey." Each step has a concrete deliverable.
  processSteps: [
    {
      title: 'Discovery & Audit',
      description:
        'Stakeholder interviews, existing product audit, and user research planning. We align on business goals, identify the core UX problems, and define success criteria for the engagement.',
      duration: 'Week 1',
      deliverable: 'UX audit report, research plan, success criteria',
    },
    {
      title: 'User Research',
      description:
        'Up to eight user interviews or usability tests on the current product. Synthesis into persona profiles, journey maps, and a prioritized list of UX opportunities.',
      duration: 'Week 1–2',
      deliverable: 'Persona profiles, journey maps, opportunity matrix',
    },
    {
      title: 'Information Architecture & Wireframes',
      description:
        'Site maps, user flows, and low-fidelity wireframes for key screens. Validated with stakeholders and tested with users before moving to high fidelity.',
      duration: 'Week 2–3',
      deliverable: 'Site map, user flows, annotated wireframes',
    },
    {
      title: 'Visual Design & Prototyping',
      description:
        'High-fidelity designs in Figma with interactive prototypes. Design tokens, component specifications, and responsive breakpoints documented alongside every screen.',
      duration: 'Week 3–4',
      deliverable: 'Figma prototype, design token spec, component library draft',
    },
    {
      title: 'Handoff & Design System',
      description:
        'Final design system package with component documentation, interaction specifications, and accessibility annotations. Walk-through session with your engineering team.',
      duration: 'Week 4',
      deliverable: 'Design system, handoff documentation, engineering walk-through',
    },
  ],

  // ─── Engagement Models ─────────────────────────────────────
  // Audience test: VP of Product needs to bring a number to their boss.
  // Three tiers map to the three most common buying scenarios.
  engagementModels: [
    {
      name: 'UX Audit',
      duration: '1–2 weeks',
      priceFrom: '$8,000',
      whatsIncluded: [
        'Heuristic evaluation of existing product',
        'Accessibility assessment (WCAG 2.1 AA)',
        'Task-flow friction analysis',
        'Prioritized recommendations report',
        'Stakeholder readout session',
      ],
      suitableFor: 'Teams who suspect UX issues but need evidence before committing to a redesign',
      primaryCta: { label: 'Book UX Audit', href: '/contact?design=audit' },
    },
    {
      name: 'Full Design Sprint',
      duration: '3–4 weeks',
      priceFrom: '$22,000',
      whatsIncluded: [
        'Full 5-step process above',
        'Up to 8 user interviews or usability tests',
        'Persona profiles and journey maps',
        'Interactive Figma prototype',
        'Design token specification',
        'Engineering handoff session',
      ],
      suitableFor: 'New products or major feature redesigns where research and prototyping must precede development',
      primaryCta: { label: 'Book Design Sprint', href: '/contact?design=sprint' },
      featured: true,
    },
    {
      name: 'Design System Build',
      duration: '6–8 weeks',
      priceFrom: '$45,000',
      whatsIncluded: [
        'Everything in Full Design Sprint',
        'Complete component library in Figma',
        'Design token system (colors, spacing, typography)',
        'Interaction pattern documentation',
        'Accessibility compliance review',
        'Developer implementation guide',
        'Team training session',
      ],
      suitableFor: 'Organizations building or scaling a product team who need a shared design language across multiple products',
      primaryCta: { label: 'Book Design System Build', href: '/contact?design=system' },
    },
  ],

  // ─── Related Pages ─────────────────────────────────────────
  // Mix of services and solutions. Journey-aware descriptions per §13 Step 10.
  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'Need to validate the idea before designing it? A 2-week discovery sprint produces the research and prioritized backlog that feeds directly into design.',
      href: '/services/product-discovery',
      icon: 'Compass',
      pageType: 'service',
    },
    {
      title: 'MVP Development',
      description:
        'Design done? We take your wireframes, prototypes, and design system and ship a production V1 — no gap between design and engineering.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'Patient Portals',
      description:
        'See how UX research and design systems apply to healthcare — patient-facing portals where usability directly impacts health outcomes and compliance.',
      href: '/solutions/patient-portals',
      icon: 'Stethoscope',
      pageType: 'solution',
    },
  ],

  // ─── FAQs ──────────────────────────────────────────────────
  // Audience test: these are the real questions a VP of Product asks on a sales call.
  // Each answer leads with the direct answer, then expands. 50–120 words each.
  faqs: [
    {
      question: 'What do I actually get at the end of a UX engagement?',
      answer:
        'Tangible, buildable artifacts: a UX audit report with prioritized recommendations, persona profiles, journey maps, annotated wireframes, an interactive Figma prototype, and a design token specification. If you opt for the Design System Build, you also get a complete component library with documentation and a developer implementation guide. Every deliverable is designed to hand off to your engineering team — not to sit in a slide deck.',
    },
    {
      question: 'How is this different from hiring a design agency?',
      answer:
        'Design agencies optimize for visual polish. We optimize for buildability. Every wireframe includes responsive breakpoints. Every design system includes tokens your front-end team can implement directly. Every prototype maps to real user flows validated through research. The result is design that ships into production, not design that lives in Figma indefinitely.',
    },
    {
      question: 'Do we need our own designer on staff?',
      answer:
        'No. Our engagements are structured to produce self-contained deliverables your team can implement without a dedicated designer. The design system includes enough documentation and component specs that your engineers can build from it directly. If you later hire a designer, the system gives them a foundation instead of a blank canvas.',
    },
    {
      question: 'Can you work with our existing design system?',
      answer:
        'Yes. We can audit and extend an existing design system rather than building from scratch. If your current system has gaps — missing components, inconsistent tokens, poor documentation — we identify those gaps in the audit phase and scope the work to fill them. You keep what works and replace what does not.',
    },
    {
      question: 'How do you handle accessibility?',
      answer:
        'Accessibility is built into every step, not bolted on at the end. Our audits evaluate against WCAG 2.1 AA standards. Wireframes include focus order and screen reader annotations. Design systems specify color contrast ratios, touch targets, and keyboard navigation patterns. The final deliverable includes an accessibility compliance report.',
    },
    {
      question: 'Can you build what you design?',
      answer:
        'Yes. Most clients continue with us into development, and our design process is engineered to flow directly into a build engagement. The design tokens, component specs, and responsive breakpoints we produce are the same artifacts our engineering team uses. You are never obligated — the deliverables are yours regardless of what you do next.',
    },
  ],

  // ─── CTA ───────────────────────────────────────────────────
  cta: {
    title: 'Ready to turn UX from a bottleneck into a competitive advantage?',
    description:
      'Book a free 30-minute consultation. We will review your current product, identify where design is holding you back, and outline what a structured UX engagement looks like for your situation.',
    primaryCta: { label: 'Book free consultation', href: '/contact' },
    secondaryCta: { label: 'See our approach', href: '#methodology' },
  },

  // ─── Unverified ────────────────────────────────────────────
  _unverified: [
    'metricsStrip[0]: "2–4 weeks" timeline — confirm achievability for audit-to-design-system engagement.',
    'engagementModels[*].priceFrom — all three prices are placeholder. Confirm with user before publishing.',
    'engagementModels[0].duration — "1–2 weeks" for UX Audit. Confirm achievability.',
    'processSteps durations — week ranges are illustrative. Confirm actual design cadence.',
    'faq[5] — "most clients continue" claim is aspirational until we have real conversion data.',
  ],
};

export default uiUxDesign;
