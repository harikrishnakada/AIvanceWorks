import { BRAND_PREFIX } from '@/lib/constants';
import type { ServicePageData } from '@/types/pages';

// Archetype C — Regulated Solution rhythm applied to an Enterprise Service.
//   The HR / People buyer answers to BOTH the audit chair (FLSA, ACA,
//   EEOC, ADA, I-9, state wage law) AND the executive team (retention,
//   time-to-hire, engagement, total-cost-of-workforce). That blended
//   accountability anchors the page in compliance framing while keeping
//   workforce-outcome cadence in the benefits and signature sections (§6.5).
//
//   This page sits under the Services > Enterprise menu (alongside ERP and
//   CRM) because it sells a development capability — we build the HCM
//   platform; we are not the HRIS, payroll provider, or benefits broker.
//
// Buyer: CHRO / VP of Human Resources / Head of People Operations /
//   Director of HR Technology at US mid-market and lower-enterprise
//   employers (roughly 250–5,000 employees, multi-state, often multi-
//   entity). Secondary buyer: Total Rewards lead and Talent Acquisition
//   lead.
//
// Buyer mindset: "We are stitched together with five disconnected point
//   tools — payroll here, an ATS there, a learning system that nobody
//   uses, spreadsheets for everything else. Every state we hire into adds
//   a new wage and leave rule. We need one workforce platform that we
//   can actually live inside, that does not take eighteen months to
//   stand up, and that keeps us out of trouble while it helps us hire
//   and keep the right people."
//
// Top 3 buyer questions:
//   1. "Can we run hire-to-retire on one platform — recruiting,
//       onboarding, core HR, payroll-ready data, time, benefits,
//       performance, learning, offboarding — without forcing my team
//       into seven disconnected logins?"
//   2. "How do you keep us aligned with US federal AND multi-state
//       employment law (FLSA, ACA, EEOC, ADA, I-9, FMLA, COBRA, state
//       wage and leave rules) as we hire across states and as those
//       rules change?"
//   3. "Will my managers and employees actually use this — or are we
//       buying another HRIS that the People team has to babysit?"
//
// Key trust issue: Mid-market HR leaders have been burned by (a) 18-month
//   suite implementations that arrive half-configured, (b) point tools
//   that never talk to each other and force the People team into Excel
//   as the integration layer, (c) compliance gaps that surface as DOL
//   or state audits years later, and (d) employee-facing tools so
//   unfriendly that adoption stalls and the data goes stale.
//
// Liability stance (this page is written under explicit user direction):
//   - We are a software engineering partner. Tax filing, payroll
//     funding, benefits brokerage, ERISA fiduciary roles, EEO-1 /
//     1095-C / W-2 submission, and any regulatory determination remain
//     with the customer's HR, payroll, benefits-broker, tax, and legal
//     teams.
//   - No claims of certification, accreditation, or special partnership
//     with any payroll, ATS, benefits, or HCM vendor.
//   - No fixed durations, no fixed costs, no fabricated retention,
//     engagement, or compliance percentages.
//   - US labor-law framework names (FLSA, ACA, EEOC, ADA, I-9, FMLA,
//     COBRA, FCRA, OSHA, SOC 2, HIPAA for benefits PHI) are retained
//     for audience signaling and SEO; framed as engineering and design
//     awareness, never as legal compliance promises.
//   - No vendor name-dropping for HCM suites or point tools — capability
//     is described in feature prose, not in an integration chip grid.
//   - No promised SLA, RTO, RPO, or uptime numbers on the page.
//
// Signature: WorkforceLifecycleSpine — a process / flow visualization
//   (§8.3 pattern 3): five lifecycle phases (Attract → Hire & Onboard →
//   Develop & Engage → Perform & Reward → Transition) rendered as a
//   continuous horizontal spine, with module cards anchored to each
//   phase and a "people data fabric" foundation underneath. Argument:
//   "HCM is not a stack of point tools — it is one spine that carries
//   every employee from offer letter to off-boarding, on one source of
//   truth."
//
// Hero illustration: WorkforceHeroIllustration — an inline SVG showing
//   five lifecycle phase nodes orbiting a central "one record" hub with
//   a people-data-fabric ribbon beneath, communicating the page's core
//   argument in a single glance (§11.5 service hero pattern).
//
// Composition (10 sections — within Archetype C density target):
//   hero (dark) → metricsStrip (light) → featureGrid (warm) →
//   complianceSpotlight (light) → signature (dark) → benefitsGrid (warm) →
//   processTimeline (light) → relatedPages (warm) → faq (light) →
//   ctaBlock (accent)
//
// Deviations from Archetype C recipe:
//   - No IntegrationsPanel — per user direction, integration capability
//     is described in feature and FAQ prose. A vendor chip grid would
//     misrepresent a greenfield engagement.
//   - No ComplianceDeepDive — the lighter ComplianceSpotlight carries
//     the trust argument without making framework-mapped safeguard
//     claims that could be read as compliance certification.
//   - No CaseStudySpotlight — greenfield, no verified case yet.
//   - No EngagementModels — the page intentionally avoids fixed-price
//     tiered cards (per user direction on liability framing). Scope and
//     investment are confirmed during discovery, framed in the FAQ.
//   - No imageFeatures — ServiceDetailTemplate does not render image
//     features; service pages use a single hero illustration per §11.5.
//     The photos remain available for marketing use but are not rendered.

const humanCapitalManagement: ServicePageData = {
  slug: 'human-capital-management',
  title: `${BRAND_PREFIX} Human Capital Management`,
  shortDescription:
    'Custom human capital management platforms — recruiting, onboarding, core HR, payroll-ready data, time and absence, benefits, performance, learning, and offboarding — engineered on one workforce record so US employers can run hire-to-retire on a single system.',

  metaTitle:
    'Custom Human Capital Management Software Development | HCM Platforms for US Employers',
  metaDescription:
    'Custom human capital management (HCM) software development for US mid-market and enterprise employers. Recruiting, onboarding, core HR, payroll-ready data, time, benefits, performance, learning, and offboarding — engineered on one workforce record, with US labor-law awareness designed in.',
  keywords: [
    'human capital management software',
    'HCM software development',
    'custom HCM platform',
    'HR software development',
    'HRIS development',
    'core HR platform',
    'employee lifecycle software',
    'talent management software',
    'workforce management platform',
    'multi-state payroll-ready HR system',
    'US labor law HR software',
    'mid-market HCM software',
  ],
  canonicalPath: '/services/human-capital-management',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    {
      label: `${BRAND_PREFIX} Human Capital Management`,
      href: '/services/human-capital-management',
    },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'complianceSpotlight',
    'signature',
    'benefitsGrid',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'enterprise',
  signatureComponent: 'WorkforceLifecycleSpine',
  heroIllustrationComponent: 'WorkforceHeroIllustration',

  hero: {
    badge: 'Enterprise Service',
    headline:
      'One workforce platform for hire-to-retire — built for the way US employers actually run.',
    subhead:
      'Custom HCM platforms that bring recruiting, onboarding, core HR, payroll-ready data, time, benefits, performance, learning, and offboarding onto one workforce record — engineered with US federal and multi-state employment-law awareness from day one.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the workforce spine', href: '#signature' },
    metrics: [
      {
        value: 'One record',
        label: 'A single workforce record across the lifecycle',
        description:
          'Recruiting, onboarding, core HR, time, benefits, performance, and learning read and write to one employee record — so the People team stops reconciling spreadsheets across point tools.',
      },
      {
        value: 'Multi-state',
        label: 'Engineered for US multi-state employment',
        description:
          'Worker classification, jurisdiction-aware wage and leave rules, and state-by-state policy variants are first-class concepts in the data model — not bolted on after launch.',
      },
      {
        value: 'Manager-grade',
        label: 'Interfaces built for managers and employees, not admins',
        description:
          'Self-service for employees and managers is treated as the primary surface — so adoption is the design goal, not a post-launch project.',
      },
    ],
  },

  // Audience test (§9.5): a CHRO / VP HR / Head of People Ops reading these
  // four values in 8 seconds wants "one platform, US-law aware, employees
  // actually use it, and we can defend it in an audit". Unified record,
  // multi-state awareness, adoption-first design, and audit-aware engineering
  // lead. No fabricated retention/engagement percentages.
  metricsStrip: [
    {
      value: 'One platform',
      label: 'Hire-to-retire on a single workforce record',
      description:
        'Recruiting, onboarding, core HR, time and absence, benefits enrollment, performance, learning, and offboarding on one data model — so the People team owns one system of record, not seven.',
    },
    {
      value: 'Multi-state aware',
      label: 'US federal and state employment-law modeling',
      description:
        'FLSA classification, ACA tracking, EEOC and ADA data, I-9 employment-eligibility workflows, FMLA and state-leave variants, and state wage rules engineered as configurable workforce policies — not hard-coded assumptions.',
    },
    {
      value: 'Adoption-first',
      label: 'Manager and employee self-service designed in',
      description:
        'Employee and manager self-service surfaces are treated as the primary product — clean approvals, mobile-friendly task lists, and accessible flows your workforce will actually use.',
    },
    {
      value: 'Audit-aware',
      label: 'Workforce-data audit trail engineered from day one',
      description:
        'Every change to compensation, classification, eligibility, accrual, or status carries an actor, timestamp, and reason — so your HR, finance, and legal teams can defend the record long after the change is made.',
    },
  ],

  features: [
    {
      icon: 'Users',
      title: 'Recruiting & Applicant Tracking (ATS)',
      description:
        'Job requisitions, candidate pipelines, structured interview scorecards, offer workflows, and EEO-aware candidate data capture — engineered to support FCRA-aware background-check handoffs and structured-hiring practices your TA team can defend.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Onboarding & I-9 Employment Eligibility',
      description:
        'New-hire task flows, document collection, Form I-9 Section 1 / Section 2 capture workflows, federal and state withholding (W-4 / state W-4) intake, policy acknowledgments, and Day-1 readiness — designed so onboarding is the same experience for every hire, in every state.',
    },
    {
      icon: 'Building2',
      title: 'Core HR & Workforce Records',
      description:
        'One employee record across positions, departments, cost centers, locations, supervisors, employment status, classification, and compensation — with effective-dated history and the audit trail HR, finance, and legal teams can rely on.',
    },
    {
      icon: 'Clock',
      title: 'Time, Attendance & Absence',
      description:
        'Time entry, scheduling, accruals, PTO and FMLA-style leave categories, jurisdiction-aware overtime modeling, meal and rest-period tracking — engineered with FLSA classification and state wage-and-hour variants as configurable rules.',
    },
    {
      icon: 'HeartHandshake',
      title: 'Benefits Administration & Open Enrollment',
      description:
        'Plan modeling, eligibility rules, dependents, life events, COBRA-aware events, ACA full-time tracking, and open-enrollment campaigns — designed to feed your benefits broker, carrier file feeds, and ACA reporting workstream cleanly.',
    },
    {
      icon: 'DollarSign',
      title: 'Payroll-Ready Workforce Data',
      description:
        'Pay rates, earnings codes, deductions, garnishments, classifications, and pay-cycle data engineered to feed your payroll engine through a clean, auditable interface — so payroll runs from the same workforce truth as everything else.',
    },
    {
      icon: 'TrendingUp',
      title: 'Performance, Goals & Compensation Reviews',
      description:
        'Goal cascades, continuous-feedback flows, performance cycles, calibration views, merit and bonus planning, and equity-grant modeling — built so managers run reviews inside the same record they use to manage their teams every day.',
    },
    {
      icon: 'GraduationCap',
      title: 'Learning, Compliance Training & Skills',
      description:
        'Course assignment, completion tracking, mandatory-training cycles (anti-harassment, safety, role-specific compliance), skill libraries, and certification expirations — engineered so completions live on the same record that benefits, performance, and payroll use.',
    },
    {
      icon: 'LogOut',
      title: 'Offboarding, COBRA & Final-Pay Workflows',
      description:
        'Separation workflows, asset return, knowledge transfer, COBRA-aware benefits transition handoffs, final-pay event capture, and access revocation — designed so offboarding is as structured as onboarding, with the audit trail to match.',
    },
  ],

  benefits: [
    {
      icon: 'Layers',
      title: 'One Source Of Truth For The Workforce',
      description:
        'Recruiting, onboarding, core HR, time, benefits, performance, learning, and offboarding read and write to one employee record — so the People team stops reconciling spreadsheets across five point tools and the executive team stops asking "which headcount number is right?"',
    },
    {
      icon: 'MapPin',
      title: 'Multi-State Employment, Modeled Properly',
      description:
        'Worker classification, jurisdiction-aware wage rules, state-specific leave categories, and policy variants are first-class concepts in the data model — so adding the next state is a configuration decision, not a re-platforming project.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Workforce Data You Can Defend',
      description:
        'Effective-dated history, actor-stamped changes, and policy-aware approvals on every record — so HR, finance, and legal can answer "who changed this, when, and why" long after the change was made.',
    },
    {
      icon: 'Smartphone',
      title: 'Self-Service Your Workforce Will Use',
      description:
        'Employee and manager self-service designed as the primary surface, not an afterthought — mobile-friendly task lists, clear approvals, and accessible flows so the data stays current because the workforce keeps it current.',
    },
    {
      icon: 'BarChart3',
      title: 'People Analytics On One Clean Record',
      description:
        'Headcount, turnover, time-to-hire, internal mobility, span of control, compensation distribution, training completion, and accrual liability surfaced from one data model — so workforce analytics are derived once, not stitched together monthly.',
    },
    {
      icon: 'Workflow',
      title: 'Configurable, Not Custom-Coded',
      description:
        'Policies, approval chains, eligibility rules, and lifecycle events are configuration, not hard-coded logic — so a new policy, state, or business unit is a workforce-admin change, not a developer ticket.',
    },
  ],

  processSteps: [
    {
      title: 'Discovery, Workforce Mapping & Policy Inventory',
      description:
        'We walk your current employee lifecycle, point-tool inventory, multi-state footprint, classification practices, leave and wage policies, benefits structure, and reporting needs — and frame the engineering and policy shape before any production-bound code is written. Tax, legal, and benefits-fiduciary decisions remain with your teams.',
      duration: 'Scoped during discovery',
      deliverable:
        'Lifecycle map, current-state HR tool inventory, multi-state policy register, prioritized HCM engineering roadmap',
    },
    {
      title: 'Architecture, Data Model & Policy Engineering Plan',
      description:
        'Design the HCM platform architecture — one employee record, configurable policies, audit-trail patterns, integration interfaces with your payroll engine and benefits feeds, identity and access model, and the analytics layer — alongside your HR, IT, payroll, and legal stakeholders. Trade-offs are made explicitly, not by default.',
      duration: 'Phased per engagement',
      deliverable:
        'Architecture document, employee-data model, policy-engine blueprint, integration plan, audit and access design',
    },
    {
      title: 'Build & Iterate Module By Module',
      description:
        'Iterative full-stack development of the platform — module by module, from core HR outward — with HR and manager review sessions on real workflows at every step. Engineering artifacts (test coverage, runbooks, change logs, accessibility checks) are part of the build, not a hand-off afterthought.',
      duration: 'Phased per engagement',
      deliverable:
        'Working platform in staging, module-level demos, configuration toolkits, audit-trail dashboards, runbooks',
    },
    {
      title: 'Data Migration, Payroll Handoff & Pre-Launch Hardening',
      description:
        'Migrate workforce records from your legacy HR, ATS, payroll, and time systems through documented, idempotent loaders. Wire the platform to your payroll engine, benefits carriers, and identity provider through interfaces your IT team controls. Run end-to-end UAT against real lifecycle events before launch.',
      duration: 'Phased per engagement',
      deliverable:
        'Migrated workforce records, reconciliation reports, integration runbooks, UAT scripts and sign-off, security review notes',
    },
    {
      title: 'Launch, Hypercare & Lifecycle Operations',
      description:
        'Phased rollout — by business unit, by state, or by module — so a launch can proceed without freezing the rest of the workforce. An initial hypercare period covers payroll-cycle support, open-enrollment readiness, audit-question response, and change-control reviews so the platform stays in a known state as policies evolve.',
      duration: 'Defined per engagement',
      deliverable:
        'Production deployment, monitoring dashboards, hypercare support, payroll-cycle playbooks, change-control runbooks',
    },
  ],

  capabilities: [
    'One workforce record across recruiting, HR, time, benefits, performance, learning, and offboarding',
    'Effective-dated history with actor-stamped audit trail on every change',
    'Configurable policy engine for multi-state wage, leave, classification, and eligibility rules',
    'Form I-9 employment-eligibility intake workflows (Section 1 / Section 2 capture)',
    'Federal W-4 and state withholding intake with version history',
    'ACA full-time tracking and reporting-ready event capture',
    'EEOC and ADA-aware candidate and employee data capture (voluntary disclosure flows)',
    'FCRA-aware background-check handoff workflows',
    'PTO, FMLA-style leave, jurisdiction-specific leave, and accrual modeling',
    'Open-enrollment campaign engine with eligibility, dependents, and life-event handling',
    'Compensation history, merit and bonus planning, and equity-grant modeling',
    'Continuous performance feedback, goal cascades, and calibration workflows',
    'Learning, mandatory-training cycle tracking, and certification-expiration alerting',
    'Manager and employee mobile-first self-service with WCAG 2.1 AA accessibility',
    'Payroll-ready data interface engineered for clean handoff to your payroll engine',
    'Identity, SSO, role-based access, and least-privilege defaults for HR data',
  ],

  technologies: [
    'TypeScript / Next.js (React)',
    'Node.js / .NET 10 / ASP.NET Core',
    'PostgreSQL / Azure SQL',
    'Object storage (S3-compatible / Azure Blob)',
    'Redis / event streaming patterns',
    'Identity (OIDC / SAML, SSO with your existing IdP)',
    'Infrastructure-as-code (Terraform)',
    'Kubernetes or managed container platforms',
    'OpenTelemetry / Prometheus / Grafana',
    'GitHub Actions / Azure DevOps Pipelines',
    'WCAG 2.1 AA accessibility tooling',
  ],

  complianceSpotlight: {
    eyebrow: 'US Employment-Law Awareness',
    title: 'Engineered with US federal and multi-state',
    highlightText: 'employment-law awareness',
    statusText:
      'HCM platforms are designed around the US labor-law landscape your People, payroll, benefits-broker, and legal teams operate inside. We engineer the platform to fit how your team works with these frameworks — final regulatory determinations, filings, and fiduciary roles remain with your teams.',
    pillars: [
      {
        icon: 'Scale',
        title: 'FLSA & State Wage Awareness',
        description:
          'Worker classification, overtime modeling, meal and rest periods, and jurisdiction-aware wage rules engineered as configurable policy — not hard-coded assumptions about a single state.',
      },
      {
        icon: 'FileCheck',
        title: 'ACA, COBRA & Benefits Event Capture',
        description:
          'ACA full-time tracking, COBRA-qualifying-event workflows, dependent and life-event handling, and carrier-feed-ready event capture — designed to feed your benefits broker and ACA reporting workstream.',
      },
      {
        icon: 'UserCheck',
        title: 'I-9, EEOC & ADA Data Flows',
        description:
          'Form I-9 employment-eligibility intake, voluntary EEOC and ADA disclosure flows, and FCRA-aware background-check handoffs — engineered as structured workflows your TA and People teams can defend.',
      },
      {
        icon: 'History',
        title: 'Audit Trail On Every Workforce Change',
        description:
          'Effective-dated history with actor, timestamp, and reason on every compensation, classification, eligibility, accrual, and status change — so workforce data is defensible long after the change is made.',
      },
    ],
    badges: [
      'FLSA-aware',
      'ACA-aware',
      'COBRA-aware',
      'EEOC-aware',
      'ADA-aware',
      'I-9 workflows',
      'FMLA & state leave',
      'WCAG 2.1 AA',
    ],
  },

  relatedPages: [
    {
      title: 'ERP Development',
      description:
        'HCM and ERP share the same audit chair — one workforce record on the HR side, one general ledger on the finance side. Our ERP engagement frames the financial backbone your HCM platform will hand payroll-ready data into, so people and finance read from the same numbers.',
      href: '/services/erp-development',
      icon: 'Rocket',
      pageType: 'service',
    },
    {
      title: 'CRM',
      description:
        'When the People system and the customer system both run on custom platforms we build, your sales-to-delivery handoff and your hire-to-deploy handoff share the same engineering DNA. Our CRM practice is the customer-facing twin of this HCM engagement.',
      href: '/services/crm',
      icon: 'Lightbulb',
      pageType: 'service',
    },
    {
      title: 'Custom Software Development',
      description:
        'An HCM platform is a custom software engagement — long-lived, multi-module, integration-heavy, regulated. Our custom-software practice is where the engineering standards on this page come from.',
      href: '/services/custom-software-development',
      icon: 'Settings',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question:
        'What does your "human capital management" engagement actually cover?',
      answer:
        'Recruiting and applicant tracking, onboarding with I-9 and tax-withholding intake, core HR and workforce records, time and absence, benefits administration with ACA tracking, payroll-ready data, performance and compensation reviews, learning and compliance training, and offboarding — engineered on one workforce record. The exact module scope is decided during discovery so you do not pay to rebuild a module that already works in your estate. Tax filing, payroll funding, benefits fiduciary roles, and any regulatory submission remain with your HR, payroll, benefits-broker, tax, and legal teams.',
    },
    {
      question:
        'Are you a payroll provider, a benefits broker, or a compliance certifier?',
      answer:
        'No. We are a software engineering partner. We build the platform that holds your workforce record, runs the lifecycle workflows, and hands clean, auditable data to your payroll engine, benefits carriers, and reporting workstreams. Tax filing, payroll funding, benefits brokerage, ERISA fiduciary roles, EEO-1, 1095-C, W-2, and any regulatory determination or submission remain with your existing providers and internal teams. We do not represent partnerships, certifications, or special status with any payroll, ATS, benefits, or HCM vendor.',
    },
    {
      question:
        'How do you handle US multi-state employment law as we hire across states?',
      answer:
        'Worker classification (FLSA exempt / non-exempt), state-by-state wage and overtime rules, jurisdiction-specific leave categories (FMLA and state leave), meal and rest periods, paid-sick-leave variants, and state-level policy differences are engineered as configurable policy in the data model — not hard-coded for one jurisdiction. Adding the next state becomes a configuration decision your People-Ops team makes, with the platform tracking effective-dated history of every policy change. The specific rules in scope are confirmed during discovery against the states you operate in; legal interpretation remains with your employment counsel.',
    },
    {
      question:
        'How does the platform connect to our existing payroll, benefits, identity, and reporting systems?',
      answer:
        'The platform is designed to coexist with the payroll engine, benefits carrier feeds, identity provider, and reporting tools you already run, through documented interfaces your IT team controls. Payroll-ready data, benefits-event feeds, SSO and SAML / OIDC handoffs, and downstream reporting extracts are engineered as first-class interfaces — not after-the-fact exports. We do not require a rip-and-replace of your existing payroll or benefits estate, and we do not claim partnerships or pre-built integrations with any specific payroll, benefits, ATS, or HCM vendor.',
    },
    {
      question:
        'Will our managers and employees actually use this, or is it another HRIS the People team has to babysit?',
      answer:
        'Employee and manager self-service is treated as the primary product surface — not an afterthought on top of an admin console. That means mobile-friendly task lists, clear approvals, accessible flows (WCAG 2.1 AA), and a small number of moments-that-matter (offer accept, first day, open enrollment, performance check-in, leave request) designed for the people who actually use them. Adoption is a design outcome of the build, not a change-management project layered on at the end.',
    },
    {
      question:
        'What does a typical engagement look like, and how do you scope it?',
      answer:
        'Engagement scope, timeline, and investment vary by program and are confirmed during discovery — we do not quote fixed durations or fixed costs on a public page. Discovery is where we map your current lifecycle, point-tool inventory, multi-state footprint, classification practices, benefits structure, and reporting needs before any production-bound code is written. After discovery, the build is typically phased module by module so a single module (often core HR plus onboarding) can go live first and your team can review it before later modules land.',
    },
  ],

  cta: {
    title: 'Tired of running People Operations across five disconnected tools?',
    description:
      'Book a free 30-minute discovery call. We will walk your current employee lifecycle, multi-state footprint, and integration estate, and outline a realistic engineering scope for a workforce platform you can actually run from. Tax, payroll-funding, and fiduciary decisions remain with your teams.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the workforce spine', href: '#signature' },
  },

  _unverified: [
    'Entire page is written as capability framing for a greenfield engagement. No fabricated retention, engagement, time-to-hire, or compliance percentages. No fixed durations or fixed costs. No specific SLA, RTO, RPO, or uptime promises. Recommended for HR / employment-law / payroll-fiduciary review before publish to confirm liability framing.',
    'US labor-law framework names (FLSA, ACA, COBRA, EEOC, ADA, I-9, FMLA, FCRA, OSHA, HIPAA for benefits PHI, SOC 2, WCAG 2.1 AA) appear as design-awareness signals only. No certification, accreditation, or legal-compliance promise is implied or stated. Confirm pre-publish.',
    'No vendor names retained for HCM suites, ATS, payroll engines, benefits carriers, or identity providers. Verify by grep before publish.',
    'Hero image and additional marketing photos sourced per §11.5 (Unsplash; landscape; human faces; industry-appropriate; no clichés) are available at /public/images/services/human-capital-management/ but are not rendered by ServiceDetailTemplate; service hero uses the inline SVG illustration (WorkforceHeroIllustration). Confirm rights-of-use before any future use.',
  ],
};

export default humanCapitalManagement;
