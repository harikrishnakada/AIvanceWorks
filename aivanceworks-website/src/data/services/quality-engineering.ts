import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service (with strategic lean)
// Buyer: VP of Engineering / Director of Engineering / QA Lead at a mid-market company (200–5,000 employees)
// Measured on: release velocity, production defect rate, engineering team efficiency
// Dominant question: "How do I set up test automation for my existing codebase without slowing down releases?"
// Key trust issue: burned by testing consultants who delivered frameworks nobody on the team could maintain,
//   or who produced a strategy PDF that gathered dust. The buyer needs transferable, maintainable infrastructure.
// Signature: TestCoveragePyramid — interactive test pyramid showing balanced coverage across Unit, Integration,
//   API/Contract, and E2E tiers. Communicates "we design test architecture, not just write test scripts."
//
// Composition based on Archetype B recipe:
//   - BenefitsGrid dropped — outcome messaging folded into feature descriptions to keep density at 10 sections.
//   - ProcessTimeline kept — VP Eng evaluating a QA partner wants to see how the engagement is structured.
//   - TechStackBlock kept — testing is a deeply technical service; buyers evaluate by tool expertise.
//   - EngagementModels kept — pricing transparency needed to bring a number to their boss.

const qualityEngineering: ServicePageData = {
  slug: 'quality-engineering',
  title: 'Quality Engineering & Testing',
  shortDescription:
    'Standalone quality engineering — test strategy design, automation framework setup, CI-integrated quality gates, and performance testing for existing codebases. Your team owns everything we build.',

  metaTitle: 'Quality Engineering & Testing | Test Automation Services',
  metaDescription:
    'Test automation framework setup, CI/CD quality gates, performance testing, and security testing for existing codebases. Structured test strategy, hands-on implementation, full team handoff.',
  keywords: [
    'quality engineering services',
    'test automation consulting',
    'test automation framework setup',
    'QA engineering services',
    'software testing services',
    'CI/CD quality gates',
    'performance testing services',
    'test strategy consulting',
    'playwright testing services',
    'automated testing setup',
    'test coverage improvement',
    'security testing services',
  ],
  canonicalPath: '/services/quality-engineering',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Quality Engineering & Testing', href: '/services/quality-engineering' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'processTimeline',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'TestCoveragePyramid',
  heroIllustrationComponent: 'QualityEngHeroIllustration',

  hero: {
    badge: 'Quality Engineering',
    headline: 'Test infrastructure your team can actually maintain.',
    subhead:
      'A structured test strategy, a working automation framework, and CI-integrated quality gates — built for your codebase, then handed off to your team with training.',
    primaryCta: { label: 'Book a QE Assessment Call', href: '/contact' },
    secondaryCta: { label: 'See the testing pyramid', href: '#signature' },
  },

  // Audience test: VP of Eng evaluating a QA partner needs to see structured, tangible capability
  // signals immediately. Every metric is capability-framed (greenfield-safe).
  // "Framework-First" → signals we start with architecture, not ad-hoc scripts.
  // "CI-Integrated" → addresses the #1 practical question (does this run on every commit?).
  // "Multi-Layer" → addresses breadth across test types.
  // "Transferable" → directly addresses the key trust issue (your team owns it after handoff).
  metricsStrip: [
    {
      value: 'Framework-First',
      label: 'Test architecture',
      description: 'Strategy and structure before scripts',
    },
    {
      value: 'CI-Integrated',
      label: 'Quality gates',
      description: 'Tests run on every commit and PR',
    },
    {
      value: 'Multi-Layer',
      label: 'Coverage pyramid',
      description: 'Unit, integration, API, E2E, performance',
    },
    {
      value: 'Transferable',
      label: 'Your team owns it',
      description: 'Full handoff with documentation and training',
    },
  ],

  // Audience test: VP of Eng thinks in QA capabilities they need to fill.
  // Each card maps to a specific testing gap the buyer is trying to close.
  // Feature descriptions carry outcome framing (BenefitsGrid was dropped to control density).
  features: [
    {
      icon: 'ClipboardCheck',
      title: 'Test Strategy & Architecture Design',
      description:
        'A structured assessment of your current test coverage, gaps, and risk areas — followed by a test strategy that maps test types to application layers, defines ownership, and sequences implementation so your team builds on a solid foundation.',
    },
    {
      icon: 'Cog',
      title: 'Test Automation Framework Setup',
      description:
        'A configured, running automation framework — Playwright, Cypress, or Jest/xUnit depending on your stack — with project structure, naming conventions, test data management, and CI hooks. Not a prototype; a production-grade foundation your team extends from day one.',
    },
    {
      icon: 'GitPullRequest',
      title: 'CI/CD Quality Gates',
      description:
        'Tests integrated into your build pipeline so every commit and pull request runs the relevant suite. Quality gates that block merges when coverage drops or critical tests fail — enforced by the pipeline, not by discipline alone.',
    },
    {
      icon: 'Gauge',
      title: 'Performance & Load Testing',
      description:
        'Load tests, stress tests, and performance baselines using k6 or Artillery — configured to run in CI and alert on regressions. Identify bottlenecks before your users do, with repeatable benchmarks your team can run before any release.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Security Testing',
      description:
        'Automated security scanning integrated into the pipeline — OWASP dependency checks, API security validation, and authenticated vulnerability scans. Surface security issues during development, not during a penetration test three weeks before launch.',
    },
    {
      icon: 'Accessibility',
      title: 'Accessibility Testing',
      description:
        'Automated WCAG 2.1 AA compliance checks using axe and Lighthouse, integrated into CI. Catch accessibility regressions on every build so compliance is continuous, not a one-time audit that drifts out of date with every subsequent sprint.',
    },
  ],

  processSteps: [
    {
      title: 'Test Audit & Gap Analysis',
      description:
        'We review your existing codebase, CI pipeline, test coverage, and defect patterns. The audit identifies which layers are undertested, where manual QA creates bottlenecks, and which test types will deliver the highest risk reduction per effort.',
      duration: 'Week 1',
      deliverable: 'Test audit report, coverage heatmap, prioritized gap analysis',
    },
    {
      title: 'Test Strategy & Architecture',
      description:
        'Based on the audit, we design a test strategy that maps test types to application layers, defines the coverage pyramid targets, selects frameworks and tools, and sequences the implementation so the highest-risk gaps are addressed first.',
      duration: 'Week 2',
      deliverable: 'Test strategy document, framework selection rationale, implementation sequence',
    },
    {
      title: 'Framework Setup & Initial Suite',
      description:
        'We configure the chosen frameworks, establish project structure and conventions, write the first suite of critical-path tests, and set up test data management. Your team pair-programs with us during this phase to build ownership from the start.',
      duration: 'Week 3–5',
      deliverable: 'Running test framework, initial test suite, configuration documentation',
    },
    {
      title: 'CI Integration & Quality Gates',
      description:
        'Tests are wired into your CI/CD pipeline with quality gates that enforce coverage thresholds and block failing builds. Performance baselines and security scans are added to the pipeline. Dashboard reporting gives visibility into test health across branches.',
      duration: 'Week 5–6',
      deliverable: 'CI pipeline configuration, quality gate rules, test dashboard',
    },
    {
      title: 'Training & Handoff',
      description:
        'Your team receives hands-on training on the framework, conventions, and CI configuration. We deliver a runbook covering how to write new tests, debug failures, maintain test data, and extend the framework. The codebase is yours — no consultant dependency.',
      duration: 'Week 7–8',
      deliverable: 'Training sessions, team runbook, framework extension guide, handoff sign-off',
    },
  ],

  capabilities: [
    'Test strategy and architecture design',
    'Test automation framework setup (Playwright, Cypress, Jest, xUnit, NUnit)',
    'CI/CD quality gate integration (GitHub Actions, Azure DevOps)',
    'Performance and load testing (k6, Artillery)',
    'Security testing and OWASP compliance scanning',
    'Accessibility testing and WCAG 2.1 AA automation',
    'API testing and contract testing (Postman, Pact)',
    'Test data management and fixture strategies',
    'Coverage analysis and gap identification',
    'Team training and framework handoff',
  ],

  technologies: [
    'Playwright',
    'Cypress',
    'Jest',
    'xUnit / NUnit',
    'k6',
    'Artillery',
    'Postman',
    'OWASP ZAP',
    'Lighthouse',
    'axe',
    'GitHub Actions',
    'Azure DevOps',
  ],

  engagementModels: [
    {
      name: 'Test Audit',
      duration: '2 weeks',
      priceFrom: '$12,000',
      whatsIncluded: [
        'Codebase and CI pipeline review',
        'Test coverage heatmap',
        'Defect pattern analysis',
        'Prioritized gap report',
        'Framework recommendation',
      ],
      suitableFor: 'Teams that need a clear picture of their testing gaps before committing to a full engagement',
      primaryCta: { label: 'Book Test Audit', href: '/contact?qe=audit' },
    },
    {
      name: 'Full QE Setup',
      duration: '8 weeks',
      priceFrom: '$65,000',
      whatsIncluded: [
        'Complete 5-step process above',
        'Test strategy and architecture',
        'Automation framework configured and running',
        'CI/CD quality gates live',
        'Performance and security testing in pipeline',
        'Team training and handoff package',
      ],
      suitableFor: 'Teams ready to stand up a complete test automation practice with CI integration and team ownership',
      primaryCta: { label: 'Book QE Setup Call', href: '/contact?qe=full' },
      featured: true,
    },
    {
      name: 'Ongoing QE Partnership',
      duration: 'Monthly',
      priceFrom: '$15,000/mo',
      whatsIncluded: [
        'Everything in Full QE Setup',
        'Dedicated QE engineer embedded in your team',
        'Continuous test suite expansion',
        'Performance regression monitoring',
        'Monthly coverage and quality reporting',
        'Framework upgrades and maintenance',
      ],
      suitableFor: 'Teams that want ongoing QE capacity without hiring full-time — test coverage that grows with your codebase',
      primaryCta: { label: 'Book Partnership Call', href: '/contact?qe=ongoing' },
    },
  ],

  relatedPages: [
    {
      title: 'Custom Software Development',
      description:
        'Building new software? We embed quality engineering into the development process from sprint one — test strategy, automation, and CI gates built alongside the product.',
      href: '/services/custom-software-development',
      icon: 'Code',
      pageType: 'service',
    },
    {
      title: 'Application Modernization',
      description:
        'Modernizing a legacy system? Test automation is the safety net that makes incremental migration possible — catch regressions before they reach production.',
      href: '/services/application-modernization',
      icon: 'RefreshCw',
      pageType: 'service',
    },
    {
      title: 'DevOps',
      description:
        'Need the CI/CD pipeline that runs these tests on every commit? Our DevOps service builds the deployment pipelines, testing gates, and environment promotion your test framework depends on.',
      href: '/services/devops',
      icon: 'GitBranch',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Will my team be able to maintain the test framework after the engagement ends?',
      answer:
        'That is the explicit goal of every engagement. We pair-program with your engineers during framework setup, deliver a runbook covering test creation, debugging, data management, and framework extension, and run dedicated training sessions before handoff. The framework uses industry-standard tools your developers already know or can learn quickly — not a proprietary system that requires us to maintain it.',
    },
    {
      question: 'Which test automation framework do you recommend?',
      answer:
        'It depends on your stack and team. For web applications, Playwright is our default recommendation — it handles cross-browser testing, is fast, and has strong TypeScript support. For teams already invested in Cypress, we work with that. For .NET backends, xUnit or NUnit. For Node.js APIs, Jest with Supertest. The framework decision is made during the test strategy phase based on your codebase, CI environment, and team skills — not our preference.',
    },
    {
      question: 'How do you decide which tests to write first?',
      answer:
        'The test audit identifies your highest-risk, lowest-coverage areas — the code paths where a bug would cause the most damage and where you currently have no automated safety net. We prioritize critical user journeys and high-change-frequency modules first. The goal is maximum risk reduction per test written, not a coverage percentage target for its own sake.',
    },
    {
      question: 'Can you integrate tests into our existing CI/CD pipeline?',
      answer:
        'Yes. We work with GitHub Actions, Azure DevOps, GitLab CI, Jenkins, and CircleCI. Quality gates are configured so tests run on every commit and PR, with coverage thresholds that block merges when they drop below the agreed floor. If your pipeline needs restructuring to support parallel test execution or faster feedback loops, we handle that as part of the CI integration step.',
    },
    {
      question: 'Should we hire QA engineers or outsource test automation?',
      answer:
        'Most teams benefit from a hybrid approach. We set up the framework, write the initial critical-path suite, integrate it into CI, and train your developers to write tests as part of their workflow — because the people closest to the code write the best tests. For teams that want dedicated QE capacity without a full-time hire, our ongoing partnership model embeds a QE engineer in your team on a monthly basis.',
    },
    {
      question: 'What if we already have some tests but they are unreliable or slow?',
      answer:
        'The test audit covers existing test suites — we analyze flaky tests, slow runners, and architectural issues that make tests brittle. Common fixes include isolating test data, parallelizing execution, replacing brittle selectors with stable ones, and restructuring tests that depend on execution order. We stabilize what is worth keeping and replace what is not, rather than starting from scratch.',
    },
  ],

  cta: {
    title: 'Ready to build test infrastructure that actually sticks?',
    description:
      'Book a 30-minute call. We will review your current test coverage, CI pipeline, and release process — and outline what a structured QE engagement looks like for your codebase.',
    primaryCta: { label: 'Book QE assessment call', href: '/contact' },
    secondaryCta: { label: 'See the testing pyramid', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable QE engagements. Confirm with user before publishing.',
    'engagementModels[1].duration — "8 weeks" for Full QE Setup. Confirm achievability across different codebase sizes.',
    'processSteps durations — week ranges are illustrative. Confirm actual engagement cadence.',
    'engagementModels[2].priceFrom — "$15,000/mo" for ongoing partnership. Confirm against actual cost model.',
  ],
};

export default qualityEngineering;
