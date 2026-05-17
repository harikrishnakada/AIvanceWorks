import { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  Target,
  Eye,
  Shield,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  Compass,
  Sparkles,
  Search,
  ClipboardList,
  GitBranch,
  ShieldCheck,
  Rocket,
  HeartHandshake,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  generateWebPageSchema,
  generateOrganizationSchema,
  generateFAQSchema,
} from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = constructMetadata({
  title: `About ${SITE_CONFIG.name} — US-Based AI Consulting & Software Engineering`,
  description: `${SITE_CONFIG.name} is a US-based AI consulting and software engineering company with 8+ years of enterprise delivery experience, Microsoft Azure-certified engineers, and documented 50% performance improvements for mid-market enterprises.`,
  canonical: `${SITE_CONFIG.url}/about`,
  keywords: [
    'AI consulting company',
    'software engineering consultancy',
    'Azure cloud consulting',
    'AI implementation services',
    'enterprise software development',
    'Microsoft certified consultants',
    'US software consultancy',
    'digital transformation consulting',
  ],
});

// ─── Stats ───────────────────────────────────────────────────────────────────
const STATS = [
  { value: '8+', label: 'Years Enterprise Delivery' },
  { value: '50%', label: 'Avg. Performance Improvement' },
  { value: '100%', label: 'Azure-Certified Engineers' },
  { value: '$5K+', label: 'Minimum Project Budget' },
];

// ─── At-a-glance facts ──────────────────────────────────────────────────────
const FACTS = [
  { label: 'Company Type', value: 'AI Consulting & Software Engineering' },
  { label: 'Headquarters', value: 'United States' },
  { label: 'Geographic Focus', value: 'North America' },
  { label: 'Experience', value: '8+ Years Enterprise Delivery' },
  { label: 'Target Clients', value: 'Mid-Market (50–5,000 employees)' },
  { label: 'Minimum Budget', value: '$5,000+' },
  { label: 'Hourly Rates', value: '$135–225 / hour' },
  { label: 'Security Posture', value: 'SOC 2 aligned, Microsoft Enterprise Security' },
];

// ─── Core values ─────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: Award,
    title: 'Technical Excellence',
    body: 'Production-grade builds on modern stacks — .NET 10, React, Next.js, Angular, and Azure AI Foundry.',
  },
  {
    icon: CheckCircle,
    title: 'Transparency',
    body: 'Clear communication, honest timelines, and value-driven pricing. No hidden costs, no surprises.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    body: 'AI-augmented workflows, RAG frameworks, and agentic systems applied to real business problems.',
  },
  {
    icon: Users,
    title: 'Partnership',
    body: 'We operate as an extension of your team with deep knowledge transfer so you stay self-sufficient.',
  },
  {
    icon: Shield,
    title: 'Security First',
    body: 'Enterprise-grade security and compliance baked in from day one — never bolted on later.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Impact',
    body: 'Every engagement tied to quantifiable business outcomes with documented performance gains.',
  },
];

// ─── Why choose us — long-form ───────────────────────────────────────────────
const WHY = [
  {
    title: 'Pioneers in AI-Augmented Development',
    body: 'Real-world experience with Azure AI Foundry, RAG frameworks, and agentic AI systems — production deployments, not slideware.',
    bullets: [
      'Azure AI Foundry integration for enterprise AI platforms',
      'Retrieval-Augmented Generation (RAG) frameworks',
      'Agentic AI systems with autonomous decisioning',
    ],
  },
  {
    title: 'Certified Cloud & Delivery Expertise',
    body: 'Multi-vendor certifications across Microsoft Azure, AWS, and modern cloud-native architectures. Senior engineers only.',
    bullets: [
      'AI-102 · Azure AI Engineer Associate',
      'AZ-204 · Azure Developer Associate',
      'DP-420 · Azure Cosmos DB Developer Specialty',
      'AWS Solutions Architect Associate · CCNA · CSPO · CAPM',
    ],
  },
  {
    title: 'Modern Technology Stack',
    body: 'We build with the latest enterprise-grade technologies — .NET 10, React, Next.js, Angular, and cutting-edge AI frameworks — so your solutions are future-ready from day one.',
    bullets: [],
  },
  {
    title: 'Premium Value, Transparent Pricing',
    body: 'Positioned between expensive Big 4 firms and inconsistent offshore providers. High ROI at $135–225 / hour with transparent pricing and measurable outcomes.',
    bullets: [],
  },
];

// ─── Delivery approach ───────────────────────────────────────────────────────
const APPROACH = [
  {
    n: '01',
    icon: Search,
    title: 'Discovery',
    body: 'Free 30-minute consultation to understand your challenges, technical landscape, and business objectives.',
  },
  {
    n: '02',
    icon: ClipboardList,
    title: 'Strategy & Planning',
    body: 'Detailed technical assessment, architecture design, timeline estimation, and success metrics — before a line of code.',
  },
  {
    n: '03',
    icon: GitBranch,
    title: 'Iterative Development',
    body: 'Agile sprints with continuous delivery, weekly demos, and feedback loops. Visible progress, every week.',
  },
  {
    n: '04',
    icon: ShieldCheck,
    title: 'Quality Assurance',
    body: 'Comprehensive testing, security audits, performance tuning, and compliance validation — production-ready, not prototypes.',
  },
  {
    n: '05',
    icon: Rocket,
    title: 'Deployment & Training',
    body: 'Zero-downtime deployments, full documentation, and hands-on team training for long-term self-sufficiency.',
  },
  {
    n: '06',
    icon: HeartHandshake,
    title: 'Ongoing Partnership',
    body: 'Post-launch support, performance monitoring, and strategic consulting as your business evolves.',
  },
];

// ─── FAQs (kept; tokenized brand name) ───────────────────────────────────────
const FAQS = [
  {
    question: `What is ${SITE_CONFIG.name}?`,
    answer: `${SITE_CONFIG.name} is a US-based AI consulting and software engineering company specializing in cloud-native application development, AI implementation, and digital transformation. Founded with 8+ years of enterprise delivery experience, we serve mid-market enterprises (50–5,000 employees) across North America with Azure-certified engineers who deliver measurable business outcomes.`,
  },
  {
    question: `What makes ${SITE_CONFIG.name} different from other consultancies?`,
    answer: `Three things: (1) AI-augmented development workflows with production Azure AI Foundry and RAG experience, (2) documented 50% average performance improvements across client projects, and (3) transparent pricing at $135–225/hour — positioned between Big 4 firms and inconsistent offshore providers. Every engagement includes comprehensive knowledge transfer so your team owns the solution long-term.`,
  },
  {
    question: `What industries does ${SITE_CONFIG.name} serve?`,
    answer: `Mid-market enterprises across technology, healthcare, insurance, manufacturing, and pharma. Our cloud-native and AI solutions are industry-agnostic but incorporate domain-specific compliance expertise — HIPAA for healthcare, SOC 2 for technology, and GxP for pharma.`,
  },
  {
    question: 'What certifications do your consultants hold?',
    answer: 'Engineers hold 12+ professional certifications across Microsoft Azure (AI-102, AZ-204, AZ-400, DP-203, DP-420, AZ-305), AWS (Solutions Architect Associate), Cisco (CCNA), Scrum Alliance (CSPO), and PMI (CAPM). We maintain 100% certification compliance through continuous recertification.',
  },
  {
    question: 'How do you ensure project success?',
    answer: 'A proven six-step methodology: discovery, strategy & planning, iterative development, quality assurance, deployment & training, and ongoing partnership. Every project includes quantifiable success metrics and documented knowledge transfer.',
  },
  {
    question: `What engagement models does ${SITE_CONFIG.name} offer?`,
    answer: 'Four models: dedicated teams for long-term partnerships, time and materials (T&M) for flexible scope, fixed-price for defined deliverables, and retainers for ongoing support. Hourly rates range from $135–225 based on expertise. Minimum project budget is $5,000.',
  },
  {
    question: 'Where are you located?',
    answer: 'Headquartered in the United States with all team members based in North America. Timezone-aligned (9 AM – 6 PM EST), with cultural compatibility and seamless real-time collaboration — local partnership without the risks of offshore development.',
  },
];

export default function AboutPage() {
  const pageUrl = `${SITE_CONFIG.url}/about`;

  return (
    <>
      <JsonLd
        data={generateWebPageSchema(
          `About ${SITE_CONFIG.name} — AI Consulting & Software Engineering`,
          pageUrl
        )}
      />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateFAQSchema(FAQS)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        data-section="about-hero"
        className="py-8 lg:py-12 bg-surface-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light px-6 sm:px-10 lg:px-14 py-10 lg:py-14 shadow-card">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/15 text-brand-300 text-xs font-medium mb-5">
                About {SITE_CONFIG.name}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                US-based AI consulting &{' '}
                <span className="bg-gradient-to-r from-brand-400 to-indigo-400 bg-clip-text text-transparent">
                  software engineering
                </span>{' '}
                for mid-market enterprises
              </h1>
              <p className="text-base sm:text-lg text-text-muted mb-4 leading-relaxed">
                {SITE_CONFIG.name} helps mid-market enterprises (50–5,000 employees)
                modernize through cloud-native development, applied AI, and
                disciplined digital transformation.
              </p>
              <p className="text-sm sm:text-base text-text-subtle mb-8 leading-relaxed">
                8+ years of enterprise experience · 100% Microsoft Azure-certified
                engineers · documented 50% performance improvements · transparent
                pricing at $135–225/hour.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
                  <Link href="/book-consultation">Schedule Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border-subtle text-text-light hover:bg-white/10"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <section
        data-section="about-stats"
        aria-label={`${SITE_CONFIG.name} key statistics`}
        className="py-10 bg-surface-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border-light bg-surface-white px-5 py-6 text-center shadow-sm"
              >
                <div className="text-3xl sm:text-4xl font-bold text-brand-600 mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── At a glance ──────────────────────────────────────── */}
      <section
        data-section="about-at-a-glance"
        className="py-12 bg-surface-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <Compass className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading">
                {SITE_CONFIG.name} at a glance
              </h2>
              <p className="text-sm text-text-muted mt-0.5">
                Boutique agility, enterprise-grade expertise — at a glance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between gap-4 py-3 border-b border-border-light"
              >
                <span className="text-sm font-medium text-text-muted">
                  {fact.label}
                </span>
                <span className="text-sm text-text-heading text-right">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 rounded-2xl border-l-4 border-brand-500 bg-surface-white px-6 py-5 shadow-sm">
            <p className="text-base sm:text-lg text-text-body italic">
              &ldquo;{SITE_CONFIG.name} combines boutique consultancy agility with
              enterprise-grade expertise — delivering documented 50% performance
              improvements at transparent pricing, positioned between Big 4 firms
              and inconsistent offshore providers.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <section
        data-section="about-mission-vision"
        className="py-12 bg-surface-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <Target className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading">
                What drives us
              </h2>
              <p className="text-sm text-text-muted mt-0.5">
                Mission and vision behind every engagement.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border-light bg-surface-white p-6 sm:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-7 h-7 text-brand-600" />
                <h3 className="text-xl font-semibold text-text-heading">
                  Our Mission
                </h3>
              </div>
              <p className="text-text-body leading-relaxed">
                Empower organizations with transformative technology solutions
                that drive innovation, operational excellence, and sustainable
                competitive advantage through expert software engineering, cloud
                architecture, and artificial intelligence.
              </p>
            </div>

            <div className="rounded-2xl border border-border-light bg-surface-white p-6 sm:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-7 h-7 text-brand-600" />
                <h3 className="text-xl font-semibold text-text-heading">
                  Our Vision
                </h3>
              </div>
              <p className="text-text-body leading-relaxed">
                Be the trusted technology partner for enterprises navigating
                digital transformation — recognized for technical excellence,
                innovative AI integration, and measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core values ──────────────────────────────────────── */}
      <section
        data-section="about-core-values"
        className="py-12 bg-surface-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading">
                What we stand for
              </h2>
              <p className="text-sm text-text-muted mt-0.5">
                Six values that guide every engagement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border-light bg-surface-white p-6 shadow-card hover:shadow-md hover:border-brand-200 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">
                  {title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ────────────────────────────────────── */}
      <section
        data-section="about-why-choose-us"
        className="py-12 bg-surface-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <Award className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading">
                Why choose {SITE_CONFIG.name}
              </h2>
              <p className="text-sm text-text-muted mt-0.5">
                Boutique agility, enterprise-grade outcomes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {WHY.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border-light bg-surface-white p-6 sm:p-7 shadow-card"
              >
                <h3 className="text-lg font-semibold text-text-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-text-body leading-relaxed mb-4">{item.body}</p>
                {item.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-text-body"
                      >
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────── */}
      <section
        data-section="about-approach"
        className="py-12 bg-surface-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <Compass className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading">
                How we work with you
              </h2>
              <p className="text-sm text-text-muted mt-0.5">
                A proven six-step delivery methodology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPROACH.map(({ n, icon: Icon, title, body }) => (
              <div
                key={n}
                className="rounded-2xl border border-border-light bg-surface-white p-6 shadow-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-brand-600">
                    STEP {n}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">
                  {title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section data-section="about-faq" className="py-12 bg-surface-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-heading mb-3">
              Frequently asked questions
            </h2>
            <p className="text-text-muted">
              Everything you need to know about working with {SITE_CONFIG.name}.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border-light bg-surface-white p-5 sm:p-6 shadow-sm open:shadow-card transition-shadow"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                  <h3 className="text-base sm:text-lg font-semibold text-text-heading">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex-shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section data-section="about-cta" className="py-12 bg-surface-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light px-6 sm:px-10 lg:px-14 py-12 lg:py-16 shadow-card text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to transform your enterprise technology?
            </h2>
            <p className="text-base sm:text-lg text-text-muted mb-8 max-w-2xl mx-auto">
              Join the enterprises achieving documented 50% performance gains with
              AI-augmented development. Schedule a free 30-minute discovery call to
              discuss your challenges and explore the path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-surface-white text-brand-700 hover:bg-surface-light"
              >
                <Link href="/book-consultation">Book Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
              {[
                {
                  title: 'Initial Assessment',
                  body: 'Evaluation of your technical landscape and business objectives.',
                },
                {
                  title: 'Custom Recommendations',
                  body: 'Tailored technology strategy and architecture proposal.',
                },
                {
                  title: 'Timeline & Investment',
                  body: 'Clear project scope, timeline, and transparent pricing.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div className="text-sm text-text-muted">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
