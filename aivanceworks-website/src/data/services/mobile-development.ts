import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Product, CTO, or Director of Digital at a mid-market company or growth-stage startup
// Measured on: time-to-market for mobile product, app store performance, user engagement, dev cost efficiency
// Dominant question: "Should I build native or cross-platform — and can this team actually ship to both stores?"
// Key trust issue: "The last dev shop built something that looked great in demos but crashed on real devices,
//   took twice as long, and left us with two codebases we couldn't maintain."
// Signature: CrossPlatformPipeline — horizontal flow showing shared codebase → iOS + Android outputs
//   with shared layers highlighted. Hierarchical/Flow hybrid pattern (§8.3 patterns 2+3).
//
// Composition follows MVP Development / SaaS Development / Startup Development references (same archetype).
// Deviations from Archetype B recipe:
//   - ProcessTimeline dropped — EngagementModels + signature communicate the delivery story;
//     10 sections matches pilot density for this archetype.
//   - RelatedPages added after EngagementModels (standard for all pages per v1.4).

const mobileDevelopment: ServicePageData = {
  slug: 'mobile-development',
  title: 'Mobile App & Cross-Platform Development',
  shortDescription:
    'Native and cross-platform mobile development for iOS and Android. One shared codebase, native performance, deployed to both app stores — built by one team, not two.',

  metaTitle: 'Mobile App Development | Cross-Platform iOS & Android',
  metaDescription:
    'Custom mobile app development for iOS and Android using React Native, Flutter, and .NET MAUI. One codebase, native performance, app store deployment — built by one engineering team.',
  keywords: [
    'mobile app development',
    'cross-platform mobile development',
    'react native development',
    'flutter app development',
    'ios android app development',
    'custom mobile app development company',
    'mobile application development services',
    'cross-platform app development',
    'native mobile app development',
    'mobile app development company',
    'maui mobile development',
    'enterprise mobile app development',
  ],
  canonicalPath: '/services/mobile-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Mobile App Development', href: '/services/mobile-development' },
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
  signatureComponent: 'CrossPlatformPipeline',
  heroIllustrationComponent: 'MobileDevHeroIllustration',

  hero: {
    badge: 'Mobile Engineering',
    headline: 'Your mobile app — built for both platforms from day one.',
    subhead:
      'Cross-platform mobile development that ships to iOS and Android from a shared codebase. Native performance, one engineering team, no platform duplication.',
    primaryCta: { label: 'Book a Mobile Strategy Call', href: '/contact' },
    secondaryCta: { label: 'See the architecture', href: '#signature' },
  },

  // Audience test: VP of Product/CTO evaluating a mobile dev partner needs to see
  // platform-grade capability signals immediately. Every metric is capability-framed
  // (greenfield-safe, no fabricated outcomes).
  // "Cross-Platform" → confirms shared-codebase approach.
  // "App Store Ready" → they want to know we ship to stores, not just build demos.
  // "Native Feel" → addresses performance fear.
  // "Offline-First" → differentiator that signals architectural depth.
  metricsStrip: [
    {
      value: 'Cross-Platform',
      label: 'iOS + Android from one codebase',
      description: 'React Native, Flutter, or .NET MAUI',
    },
    {
      value: 'App Store Ready',
      label: 'Build-to-deployment pipeline',
      description: 'Submission, review, and release automation',
    },
    {
      value: 'Native Feel',
      label: 'Platform-native UI and performance',
      description: 'No compromise on speed or polish',
    },
    {
      value: 'Offline-First',
      label: 'Works without connectivity',
      description: 'Local data sync architecture',
    },
  ],

  // Audience test: VP of Product evaluates capabilities through the lens of
  // "can this team handle what I need?" Each card maps to a concrete mobile
  // engineering concern, not abstract technology descriptions.
  features: [
    {
      icon: 'Smartphone',
      title: 'Cross-Platform Development',
      description:
        'Build for iOS and Android from a single codebase using React Native, Flutter, or .NET MAUI. Choose the framework that fits your team, timeline, and existing tech stack.',
    },
    {
      icon: 'Code2',
      title: 'Native Development When It Matters',
      description:
        'Some apps demand native. We build in Swift for iOS and Kotlin for Android when platform-specific APIs, GPU-intensive features, or raw performance require it.',
    },
    {
      icon: 'Bell',
      title: 'Push Notifications & Real-Time',
      description:
        'Engagement infrastructure — push notifications, in-app messaging, and real-time updates via WebSockets. Keep users coming back with timely, relevant interactions.',
    },
    {
      icon: 'WifiOff',
      title: 'Offline-First Architecture',
      description:
        'Local-first data storage with background sync so your app works in subways, hospitals, warehouses, and anywhere else connectivity is unreliable.',
    },
    {
      icon: 'Upload',
      title: 'App Store Deployment Pipeline',
      description:
        'Automated build, testing, and submission to the Apple App Store and Google Play. Version management, release notes, and review compliance handled from day one.',
    },
    {
      icon: 'Plug',
      title: 'Backend & API Integration',
      description:
        'Connect your mobile app to existing systems — REST APIs, GraphQL, authentication providers, payment gateways, and third-party services. No island apps.',
    },
  ],

  // Audience test: VP of Product cares about business outcomes — speed, cost efficiency,
  // maintenance, and user experience. Frame benefits as what the buyer gets, not what we build.
  benefits: [
    {
      icon: 'Users',
      title: 'Ship to Both Platforms Without Doubling the Team',
      description:
        'A shared codebase means one engineering team builds for iOS and Android simultaneously. Feature parity by default, not as a catch-up exercise after each release.',
    },
    {
      icon: 'Gauge',
      title: 'Native Performance From a Shared Codebase',
      description:
        'Cross-platform does not mean slow. React Native and Flutter compile to native code, delivering the fluid animations and responsive touch interactions your users expect.',
    },
    {
      icon: 'Wrench',
      title: 'One Codebase to Maintain, Not Two',
      description:
        'Bug fixes, feature updates, and security patches land on both platforms in a single PR. Your maintenance cost scales with your feature set, not your platform count.',
    },
    {
      icon: 'Rocket',
      title: 'From First Commit to App Store in Weeks',
      description:
        'Automated build pipelines, device testing, and store submission workflows are wired in from the first sprint. Your app goes from code to users without manual deployment bottlenecks.',
    },
    {
      icon: 'Shield',
      title: 'Architecture That Survives OS Updates',
      description:
        'Modular architecture with platform abstraction layers means OS updates, new device sizes, and API deprecations are isolated changes — not full rewrites.',
    },
  ],

  capabilities: [
    'Cross-platform development (React Native, Flutter, .NET MAUI)',
    'Native iOS development (Swift, SwiftUI)',
    'Native Android development (Kotlin, Jetpack Compose)',
    'Progressive Web App (PWA) development',
    'Offline-first data sync architecture',
    'Push notification infrastructure (APNs, FCM)',
    'App Store and Google Play submission pipeline',
    'Mobile API design and backend integration',
    'Real-time features (WebSockets, server-sent events)',
    'Device testing and mobile CI/CD (Fastlane, App Center)',
  ],

  technologies: [
    'React Native',
    'Flutter',
    '.NET MAUI',
    'TypeScript',
    'Expo',
    'Swift / SwiftUI',
    'Kotlin / Jetpack Compose',
    'Firebase',
    'Azure Mobile Services',
    'Fastlane',
    'GitHub Actions',
    'Sentry',
  ],

  engagementModels: [
    {
      name: 'Mobile MVP',
      duration: '8 weeks',
      priceFrom: '$55,000',
      whatsIncluded: [
        'Cross-platform app (iOS + Android)',
        'Core user flow + authentication',
        'Push notification infrastructure',
        'App store submission for both platforms',
        'CI/CD and staging environment',
      ],
      suitableFor: 'Founders validating a mobile product idea on both platforms',
      primaryCta: { label: 'Book Mobile MVP Call', href: '/contact?mobile=mvp' },
    },
    {
      name: 'Full Mobile App',
      duration: '14 weeks',
      priceFrom: '$120,000',
      whatsIncluded: [
        'Everything in Mobile MVP',
        'Offline-first architecture',
        'Backend API integration',
        'Multiple user flows and screens',
        'Analytics and crash reporting',
        'App store optimization (ASO)',
      ],
      suitableFor: 'Companies building a production mobile product with backend integration',
      primaryCta: { label: 'Book Full App Call', href: '/contact?mobile=full' },
      featured: true,
    },
    {
      name: 'Enterprise Mobile Suite',
      duration: '20+ weeks',
      priceFrom: '$200,000',
      whatsIncluded: [
        'Everything in Full Mobile App',
        'MDM and enterprise distribution',
        'SSO and role-based access',
        'Complex integrations (EHR, ERP, CRM)',
        'Accessibility compliance (WCAG)',
        'White-label or multi-tenant support',
      ],
      suitableFor: 'Enterprises deploying mobile apps to employees, partners, or regulated industries',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?mobile=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'MVP Development',
      description:
        'Need to validate your mobile idea on a fixed timeline? Our 12-week MVP sprint gets a working product with real users by week 5 — then you scale.',
      href: '/services/mvp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'SaaS Software Development',
      description:
        'Building a SaaS product with a mobile companion app? See how we engineer multi-tenant platforms with mobile experiences from day one.',
      href: '/services/saas-development',
      icon: 'Layers',
      pageType: 'service',
    },
    {
      title: 'E-commerce Websites',
      description:
        'Launching mobile commerce? See how we build shopping experiences with native checkout, push notifications, and offline product browsing.',
      href: '/solutions/e-commerce-websites',
      icon: 'ShoppingCart',
      pageType: 'solution',
    },
  ],

  // FAQs driven by top 3 buyer questions + key trust issue.
  // Each answer leads with a direct response in the first sentence (AEO optimization).
  // Consistent depth: 60–100 words per answer.
  faqs: [
    {
      question: 'Should I build a native app or go cross-platform?',
      answer:
        'Cross-platform is the right choice for most apps. React Native and Flutter compile to native code, delivering the performance and UI fidelity that users expect on both iOS and Android — from a single codebase. Native development (Swift, Kotlin) makes sense when your app depends on platform-specific APIs like ARKit, advanced GPU processing, or deep OS integration that cross-platform frameworks cannot access. We evaluate your requirements and recommend the approach that fits your timeline, budget, and technical needs.',
    },
    {
      question: 'How long does it take to build a mobile app?',
      answer:
        'A focused mobile app with core features ships in 8 to 14 weeks depending on complexity. The Mobile MVP tier delivers a working cross-platform app with authentication, one core user flow, and app store submission in 8 weeks. More complex apps with offline sync, backend integrations, and multiple user flows fit the 14-week Full Mobile App tier. Enterprise apps with compliance, MDM, and complex integrations take 20 or more weeks.',
    },
    {
      question: 'How do you handle updates for both iOS and Android?',
      answer:
        'With a shared codebase, a single pull request lands the same feature or bug fix on both platforms simultaneously. Our CI/CD pipeline builds, tests, and submits to both the Apple App Store and Google Play in one release cycle. Platform-specific changes — like adapting to a new iOS version or Android API — are isolated behind abstraction layers so they do not cascade through the entire codebase.',
    },
    {
      question: 'What does the app store submission process look like?',
      answer:
        'We handle the full submission pipeline. Automated builds via Fastlane produce signed binaries for both stores. Screenshots, metadata, and release notes are prepared per store guidelines. We manage the Apple review process — including addressing rejection feedback — and Google Play review. Post-launch, version management and staged rollouts are part of the ongoing release workflow.',
    },
    {
      question: 'Can you integrate with our existing backend and APIs?',
      answer:
        'Yes. We design the mobile app to connect to your existing backend systems via REST, GraphQL, or gRPC. If you need a new backend, we build that too. Authentication integrates with your existing identity provider — OAuth, SAML, or custom auth. Third-party service integrations (payment gateways, analytics, CRM, push providers) are built as modular adapters so individual services can be swapped without rewriting the app.',
    },
    {
      question: 'What happens after the app launches?',
      answer:
        'You own the codebase, the app store accounts, and all infrastructure. You can bring maintenance in-house, hire other engineers, or continue with us on a retainer for feature development, OS update support, and performance monitoring. We provide a full handoff package including architecture docs, deployment guides, and store account documentation. No lock-in and no proprietary dependencies.',
    },
  ],

  cta: {
    title: 'Ready to put your app in both stores?',
    description:
      'Book a 30-minute strategy call. We will evaluate your mobile requirements, recommend native vs. cross-platform, and outline a realistic timeline and scope — no pressure, no commitment.',
    primaryCta: { label: 'Book mobile strategy call', href: '/contact' },
    secondaryCta: { label: 'See the architecture', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable mobile builds. Confirm with user before publishing.',
    'engagementModels[0].duration — "8 weeks" estimate for Mobile MVP. Confirm achievability for cross-platform + store submission.',
    'technologies — confirm the stack matches what we deliver on mobile engagements (e.g., .NET MAUI vs React Native/Flutter as default recommendation).',
    'capabilities — none individually verified against shipped work yet.',
    'faq[0] — cross-platform recommendation as default. Confirm this aligns with our actual consulting advice.',
  ],
};

export default mobileDevelopment;
