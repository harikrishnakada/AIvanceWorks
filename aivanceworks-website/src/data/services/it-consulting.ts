import type { ServicePageData } from '@/types/pages';

// Archetype C — Regulated (adapted for an advisory service engagement)
// Buyer: CIO / VP of IT / VP of Technology Strategy at a mid-market to
//        enterprise (500–5,000 employee) firm in a regulated sector —
//        healthcare systems, insurance carriers, regional banks and credit
//        unions, state/federal contractors, life sciences, and publicly-
//        traded (SOX) companies.
// Measured on: on-time audit readiness, zero material IT findings on the
//              next audit, IT spend growth under budget, digital-
//              transformation ROI defensible to the board, vendor-risk
//              posture, system availability during transformation.
// Dominant question: "How do I make a multi-year technology bet — vendor
//                     pick, cloud move, platform consolidation, post-M&A
//                     integration — that my auditor, my board, and my CFO
//                     can all live with?"
// Key trust issue: burned by generic IT consulting firms (boutique or
//                  big-four) that delivered vendor-skewed strategy decks
//                  with no regulatory lens. Classic failure modes the
//                  buyer has either experienced or heard in the peer
//                  network: (1) roadmap recommends a tool that later fails
//                  vendor risk review (no BAA, bad data residency, SOC 2
//                  scope mismatch); (2) "transformation program" arrives
//                  as a deck no one will own; (3) technology due diligence
//                  on an acquisition misses the compliance debt, which
//                  then surfaces as a finding on the next audit; (4)
//                  consultant quietly paid by the vendor they recommend.
// Signature: RegulatedItDecisionGauntlet — a horizontal flow visualizing
//            the five evaluation gates every candidate IT decision runs
//            through before it reaches the roadmap: Business Outcome Fit,
//            Regulatory & Audit Fit, Vendor & Supply-Chain Risk, Data
//            Sovereignty & Residency, Board Defensibility & TCO. Carries
//            the argument: "No IT decision leaves our framework without
//            passing every gate — so the roadmap is defensible to your
//            auditor, your board, and your CFO before you sign anything."
//
// Composition is Archetype C adapted for a strategic service:
//   DiscoveryMethodology replaces the usual FeatureGrid because the
//   engagement sells disciplines, not product features.
//   ComplianceDeepDive kept (per §2.1 v2.1 extension) because the whole
//   page argument is "technology decisions engineered for auditors" —
//   the governance-and-evidence apparatus IS the engagement deliverable,
//   not an attribute of a shipped system.
//   IntegrationsPanel dropped — not relevant for an advisory service
//   producing documents.
//   CaseStudySpotlight dropped — no verified case yet (greenfield).
//   BenefitsGrid dropped — complianceDeepDive and engagementModels
//   together already carry "what you get." Adding a benefitsGrid would
//   push the page past the 10-section density ceiling without adding
//   material the buyer does not already have by section 7.
//   10 sections total — at density ceiling, justified for an enterprise
//   advisory page targeting auditor-gated buyers.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → DiscoveryMethodology (warm) →
//   Signature (dark) → ComplianceDeepDive (light) → ProcessTimeline (warm) →
//   EngagementModels (light) → RelatedPages (warm) → FAQ (light) → CTA (accent)

const itConsulting: ServicePageData = {
  slug: 'it-consulting',
  title: 'IT Consulting',
  shortDescription:
    'Vendor-neutral IT strategy, vendor selection, and technology due diligence for regulated industries — every recommendation audited against regulatory, vendor-risk, and board-defensibility gates before it lands in your roadmap.',

  metaTitle: 'IT Consulting for Regulated Industries | Strategy, Vendor Selection, Due Diligence',
  metaDescription:
    'IT consulting built for CIOs in regulated industries — technology strategy, vendor evaluation, build-vs-buy analysis, and technology due diligence that survive audit review, board scrutiny, and vendor-risk screens.',
  keywords: [
    'it consulting',
    'it consulting services',
    'it strategy consulting',
    'technology consulting',
    'it consulting for regulated industries',
    'vendor selection consulting',
    'technology due diligence',
    'build vs buy analysis',
    'digital transformation consulting',
    'enterprise it consulting',
    'healthcare it consulting',
    'financial services it consulting',
    'ciso it advisory',
    'it roadmap consulting',
  ],
  canonicalPath: '/services/it-consulting',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'IT Consulting', href: '/services/it-consulting' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'discoveryMethodology',
    'signature',
    'complianceDeepDive',
    'processTimeline',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'RegulatedItDecisionGauntlet',
  heroIllustrationComponent: 'ItConsultingHeroIllustration',

  hero: {
    badge: 'Regulated Industries',
    headline: 'Technology decisions your auditor, board, and CFO can all live with.',
    subhead:
      'Vendor-neutral IT strategy, vendor selection, and technology due diligence — every recommendation run through a five-gate regulatory, vendor-risk, and board-defensibility review before it enters your roadmap.',
    primaryCta: { label: 'Book Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the decision gauntlet', href: '#signature' },
  },

  // Audience test: a regulated-industry CIO scans top metrics in under 10
  // seconds. Every value is capability-framed (greenfield-safe) — no uncited
  // % claims. Each metric answers a specific CIO/audit-committee question:
  //  - "Are you independent, or are you a reseller?"
  //  - "Do you actually understand the regulatory regime I answer to?"
  //  - "What do I walk out with — a deck, or decisions?"
  //  - "Can I hand the rationale to my auditor without rewriting it?"
  metricsStrip: [
    {
      value: 'Vendor-Neutral',
      label: 'Independent advisory',
      description: 'No reseller margins, no kickbacks, no shortlist bias',
    },
    {
      value: 'Audit-Mapped',
      label: 'Every decision framework-tied',
      description: 'HIPAA · SOC 2 · PCI-DSS · SOX · ISO 27001',
    },
    {
      value: 'Decision-Grade',
      label: 'Artifacts, not slideware',
      description: 'ADRs, scored matrices, signed business cases',
    },
    {
      value: 'Board-Ready',
      label: 'Governance package included',
      description: 'Investment memo built for audit committees',
    },
  ],

  // Audience test: a CIO reading a "methodology" grid is looking for (a) do
  // you own the disciplines I need, (b) does the vocabulary match the way my
  // audit committee and CFO already talk about technology, (c) does the list
  // cover the decisions that actually land on my desk. Each card names a
  // discipline the buyer has seen cited in analyst reports and board memos.
  methodology: [
    {
      icon: 'Compass',
      name: 'Technology Strategy & Roadmap',
      description:
        'Multi-year technology roadmaps sequenced against business outcomes, regulatory commitments, and capital plans — so every initiative has a funding window, a control owner, and a defensible business case before it enters execution.',
    },
    {
      icon: 'Scale',
      name: 'Vendor Evaluation & Selection',
      description:
        'Structured vendor scoring that weights regulatory fit, data residency, BAA/DPA availability, SOC 2 scope, and supply-chain risk alongside functional fit — so the shortlist you take to procurement has already survived the questions your auditor will ask.',
    },
    {
      icon: 'GitCompareArrows',
      name: 'Build vs. Buy & Technology Due Diligence',
      description:
        'Structured build-vs-buy analysis and pre-acquisition technology due diligence — surfacing regulatory debt, integration exposure, and hidden TCO before the term sheet is signed, not after the first audit cycle catches the gap.',
    },
    {
      icon: 'LayoutGrid',
      name: 'Operating Model & IT Governance',
      description:
        'Target-state operating models, RACI for technology decisions, and IT governance designs that match the regulatory posture you report on — so ownership, escalation, and evidence trails are established before the first tool is deployed.',
    },
  ],

  // ComplianceDeepDive repurposed as the governance-apparatus layer that
  // makes each recommendation audit-defensible. Audience test: a CIO reading
  // this asks "does this firm actually know how my decisions get reviewed?"
  // Each safeguard names a specific decision-record artifact or control —
  // not a marketing pillar. Frameworks listed match the regulatory regimes
  // regulated-industry CIOs reconcile their IT spend against.
  complianceDeepDive: {
    frameworks: ['HIPAA / HITECH', 'SOC 2 Type II', 'PCI-DSS v4.0', 'SOX ITGC', 'ISO 27001', 'GDPR / CCPA'],
    safeguards: [
      {
        icon: 'FileCheck',
        title: 'Architecture Decision Records (ADRs)',
        description:
          'Every material technology decision captured as a dated ADR — options considered, regulatory constraints, evaluation scoring, and the chosen path with rationale. Designed to drop directly into your audit evidence package without rework.',
      },
      {
        icon: 'ClipboardList',
        title: 'Vendor Risk & Third-Party Assessment',
        description:
          'Structured vendor risk reviews covering SOC 2 scope, BAA / DPA availability, data residency, subprocessor transparency, and financial stability — packaged for your third-party risk management (TPRM) program and regulatory file.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Regulatory-Fit Matrix',
        description:
          'Each recommended technology mapped to the control obligations it inherits — HIPAA safeguards, SOC 2 trust criteria, PCI-DSS scope, SOX ITGC, state privacy regimes — so the matrix your audit team reviews is the one we wrote, not one they reverse-engineer.',
      },
      {
        icon: 'Briefcase',
        title: 'Board-Ready Investment Memo',
        description:
          'Every recommended initiative summarized as an investment memo your audit committee or board can evaluate — business case, risk register, regulatory implications, and sequencing — in the language governance bodies already use.',
      },
      {
        icon: 'GitBranch',
        title: 'Change & Transition Plan',
        description:
          'Target-state architecture paired with a staged transition plan — data migration, identity cutover, control inheritance, and rollback gates — documented so operations, security, and audit leaders all sign off on the same path.',
      },
      {
        icon: 'UserCheck',
        title: 'Independent, Reseller-Free Engagement',
        description:
          'We do not resell software, take vendor referral fees, or run a partner program. The vendor shortlist we recommend is the one the evaluation produced — documented so your procurement and internal audit teams can verify the independence of the process.',
      },
    ],
    auditNote:
      'Our deliverables are written for the people who review your technology decisions after they are made — internal audit, external auditors, board audit committees, and regulators. ADRs, vendor risk assessments, regulatory-fit matrices, and investment memos are produced in formats your governance team can adopt directly, not marketing artifacts that require translation.',
    partnerAgreements: ['NDA', 'MSA', 'BAA on request'],
  },

  processSteps: [
    {
      title: 'Regulatory & Business Scoping',
      description:
        'Align with executive sponsors, the audit committee liaison, and business unit owners on the decision in scope — vendor selection, cloud move, platform consolidation, M&A integration — plus the regulatory regimes in play and the audit calendar the plan must survive.',
      duration: 'Week 1',
      deliverable: 'Scope document, regulatory applicability matrix, stakeholder and governance map',
    },
    {
      title: 'Current-State Assessment',
      description:
        'Structured review of the existing technology estate, vendor relationships, IT operating model, and control inventory. Gaps, concentration risks, and undocumented dependencies are surfaced before any forward-looking recommendation is drafted.',
      duration: 'Week 1–2',
      deliverable: 'Current-state landscape map, vendor concentration analysis, control inventory',
    },
    {
      title: 'Options Analysis & Decision Gauntlet',
      description:
        'Every candidate path — vendor shortlist, build option, buy option, platform choice, acquisition target — run through the five-gate evaluation: business outcome fit, regulatory and audit fit, vendor and supply-chain risk, data sovereignty, and board defensibility and TCO.',
      duration: 'Week 2–3',
      deliverable: 'Scored options matrix, decision gauntlet results, ADRs for each path',
    },
    {
      title: 'Roadmap, Business Case & Governance',
      description:
        'Top-priority decisions sequenced into a phased roadmap with funding windows, control owners, and regulatory milestones. Each initiative arrives paired with an investment memo built for the audit committee or board that will approve the spend.',
      duration: 'Week 3–4',
      deliverable: 'IT roadmap, investment memos, operating-model and governance blueprint',
    },
    {
      title: 'Executive Handover & Audit Package',
      description:
        'Executive readout with the CIO, CFO, audit-committee liaison, and relevant business leaders. Deliverables are organized as an audit-ready package your internal audit and external auditor teams can adopt directly without reformatting.',
      duration: 'Week 4',
      deliverable: 'Executive readout, audit-ready evidence package, transition plan',
    },
  ],

  engagementModels: [
    {
      name: 'IT Advisory Quick Look',
      duration: '2 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'Focused scope: one decision (vendor pick, platform call, or build-vs-buy)',
        'Regulatory applicability review against your audit regime',
        'Vendor risk and shortlist screen (up to 3 candidates)',
        'Scored options matrix with recommended path',
        'Executive summary memo for your leadership or audit committee',
      ],
      suitableFor:
        'Leaders facing one time-boxed decision — a vendor renewal, a platform call, or a pre-procurement readiness check — who need an independent second opinion before signing',
      primaryCta: { label: 'Book Quick Look', href: '/contact?it=quicklook' },
    },
    {
      name: 'Strategic IT Assessment',
      duration: '4–6 weeks',
      priceFrom: '$45,000',
      whatsIncluded: [
        'Full 5-step process above',
        'Current-state estate and operating-model review',
        'Decision gauntlet applied to all candidate initiatives',
        '18–24 month sequenced IT roadmap with funding windows',
        'Investment memos for top priorities, audit-committee-ready',
        'Architecture Decision Records (ADRs) for every recommendation',
        'Regulatory-fit matrix and vendor risk assessments',
      ],
      suitableFor:
        'CIOs and VPs of IT scoping a multi-year strategy, a platform consolidation, or a digital transformation that must survive audit review and board approval',
      primaryCta: { label: 'Book Full Assessment', href: '/contact?it=assessment' },
      featured: true,
    },
    {
      name: 'Enterprise Technology Advisory',
      duration: '8–12 weeks',
      priceFrom: '$95,000',
      whatsIncluded: [
        'Everything in the Strategic IT Assessment',
        'Technology due diligence on an acquisition target',
        'Post-merger integration (PMI) technology plan',
        'Multi-business-unit operating model design',
        'Executive steering-committee facilitation',
        'Audit-liaison support through the next audit cycle',
        'Extended handover and transition advisory',
      ],
      suitableFor:
        'Executive sponsors running a transformation, M&A integration, or audit-triggered remediation that crosses multiple business units and reporting lines',
      primaryCta: { label: 'Book Advisory Call', href: '/contact?it=advisory' },
    },
  ],

  relatedPages: [
    {
      title: 'Security & Compliance Consulting',
      description:
        'Advisory surfaced a control gap or audit finding? Our security and compliance team engineers the Zero-Trust architecture, identity model, and evidence package that close the gap — same regulatory lens, execution instead of strategy.',
      href: '/services/security-compliance',
      icon: 'ShieldCheck',
      pageType: 'service',
    },
    {
      title: 'Cloud Strategy & Assessment',
      description:
        'Roadmap recommends a cloud move or multi-cloud rationalization? We take the decision into detailed cloud readiness, migration waves, and landing-zone design — without the regulatory framing getting lost between strategy and execution.',
      href: '/services/cloud-strategy',
      icon: 'Cloud',
      pageType: 'service',
    },
    {
      title: 'AI Strategy & Consulting',
      description:
        'IT strategy flagged AI as a priority investment area? A dedicated AI strategy engagement applies the same vendor-neutral assessment discipline to AI — maturity, use case prioritization, and governance — before any model or platform is funded.',
      href: '/services/ai-strategy-consulting',
      icon: 'Brain',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Which industries and regulatory regimes do you work in?',
      answer:
        'Our focus is regulated industries where technology decisions must survive audit review — healthcare systems and providers (HIPAA, HITECH), insurance carriers and payers (state DOI regimes, SOX for publicly-traded), financial services (SOC 2, PCI-DSS, GLBA), state and federal contractors (FedRAMP, CMMC, FISMA), life sciences (GxP, 21 CFR Part 11), and publicly-traded companies under SOX ITGC. If your regulator is not listed, we can scope applicability and map controls before the engagement starts.',
    },
    {
      question: 'How do you stay vendor-neutral when every consultant claims to be?',
      answer:
        'Structurally. We do not resell software, take vendor referral fees, or run a partner program — independence is designed into the business model, not claimed in marketing copy. Our engagement documentation discloses any vendor relationships up front, the scoring criteria are defined before any shortlist is reviewed, and the evaluation matrices are written so your procurement and internal audit teams can verify the reasoning themselves. If your governance process requires a formal independence attestation, we provide it.',
    },
    {
      question: 'How does your technology due diligence differ from a Big-4 accounting firm review?',
      answer:
        'A Big-4 technology due diligence is typically optimized for financial control and post-deal accounting. Ours is optimized for regulatory and operational risk inside the technology estate — vendor risk and subprocessor chains, SOC 2 and HIPAA scope gaps, licensing exposure, technical debt that becomes an audit finding, integration cost to your existing control environment, and retention of critical engineering staff through close. We frequently run alongside Big-4 financial due diligence rather than in place of it, and structure the deliverable so both workstreams feed the same investment committee.',
    },
    {
      question: 'Can you work alongside our Big-4 or boutique consulting firm?',
      answer:
        'Yes. Most mid-market and enterprise CIOs already have a prime consulting relationship — typically one of the Big-4 or a boutique — and bring us in for independent technical review, vendor risk assessment, or regulatory-lens validation on specific decisions. We coordinate scope in writing up front, share deliverables on an agreed cadence, and avoid duplication. The goal is a stronger governance package, not a second opinion for its own sake.',
    },
    {
      question: 'What do we walk out of the engagement with?',
      answer:
        'Decision-grade artifacts, not slide decks. Specifically: a sequenced IT roadmap with funding windows and control owners, Architecture Decision Records (ADRs) for every material recommendation, a regulatory-fit matrix mapping each initiative to the HIPAA / SOC 2 / PCI-DSS / SOX obligations it inherits, vendor risk assessments for each recommended technology, investment memos formatted for your audit committee or board, and a target operating model and governance blueprint. Every artifact is designed to be adopted by your team and submitted into your audit evidence file without rework.',
    },
    {
      question: 'Do you implement what you recommend, or only advise?',
      answer:
        'We are an advisory service — the deliverable is decisions and documentation, not shipped systems. Many clients engage our security and compliance, cloud, or custom engineering teams for execution once the strategy is approved, because the regulatory framing we establish during the advisory translates cleanly into implementation. You are never obligated. If you prefer to keep implementation internal or with a different partner, the artifacts we produce are designed so any qualified team — internal or external — can execute against them.',
    },
  ],

  cta: {
    title: 'Ready to make the technology call your auditor and your board can both sign off on?',
    description:
      'Book a 30-minute call. We will walk through the decision on your desk — vendor pick, platform consolidation, build-vs-buy, M&A technology due diligence — and outline what a vendor-neutral, audit-mapped advisory engagement looks like for your organization.',
    primaryCta: { label: 'Book Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the decision gauntlet', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder indicative pricing; confirm with user before publishing.',
    'engagementModels[*].duration — typical ranges for advisory engagements; confirm against real delivery estimates.',
    'processSteps durations — week ranges are indicative; confirm actual engagement cadence once first delivery completes.',
    'complianceDeepDive.partnerAgreements — "BAA on request" depends on whether any engagement involves access to PHI; confirm standard contract posture.',
    'faq[3] — "most mid-market and enterprise CIOs already have a prime consulting relationship" is a market observation, not a case-study claim. Acceptable as industry framing; flagged for review.',
  ],
};

export default itConsulting;
