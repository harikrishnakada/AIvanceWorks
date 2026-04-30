// src/app/services/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain, Code2, Server, Cpu,
  Bot, Rocket, Layers, Lightbulb, Globe, Smartphone,
  Settings, Palette, MessageSquare,
  GitBranch, Cloud, RefreshCw, Shield,
  Activity, Zap, TrendingUp, Database,
  Search, CheckCircle, Eye,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllServicePageSlugs } from '@/lib/content';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ServicesNavStrip } from '@/components/services/ServicesNavStrip';
import { ServicePillarSection } from '@/components/services/ServicePillarSection';

export const metadata: Metadata = constructMetadata({
  title: 'Enterprise Software Consulting Services',
  description:
    'Custom software, AI solutions & Azure cloud services for startups. Expert in RAG, full-stack dev & DevOps. Projects from $5K. Book free consultation today.',
  canonical: `${SITE_CONFIG.url}/services`,
  keywords: [
    'software consulting services',
    'custom software development',
    'AI consulting',
    'Azure cloud services',
    'enterprise software solutions',
  ],
});

// ─── Icon lookup ─────────────────────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
  Brain, Code2, Server, Cpu,
  Bot, Rocket, Layers, Lightbulb, Globe, Smartphone,
  Settings, Palette, MessageSquare,
  GitBranch, Cloud, RefreshCw, Shield,
  Activity, Zap, TrendingUp, Database,
  Search, CheckCircle, Eye,
};

// ─── Short descriptions (keyed by slug) ──────────────────────────────────────
const SERVICE_DESCRIPTIONS: Record<string, string> = {
  // AI Solutions (legacy slugs — kept for backward compatibility)
  'ai-strategy-consulting': 'Define your AI roadmap with expert guidance from strategy through implementation.',
  'generative-ai': 'Build production-ready generative AI applications with GPT-4, Claude, and Azure OpenAI.',
  'nlp-document-ai': 'Extract insights from unstructured documents with intelligent NLP pipelines.',
  'conversational-ai': 'Deploy AI-powered chatbots and virtual assistants that understand context.',
  'computer-vision': 'Automate visual inspection, recognition, and analysis with deep learning models.',
  'intelligent-automation': 'Orchestrate complex workflows with autonomous AI agents that reason and act.',
   // Software Engineering
  'product-discovery': 'Validate your idea with user research, prototyping, and technical feasibility analysis.',
  'mvp-development': 'Ship a focused, investor-ready MVP in weeks — not months.',
  'saas-development': 'Build scalable multi-tenant SaaS platforms designed for growth.',
  'startup-development': 'Full-stack development tailored to the pace and constraints of startups.',
  'web-app-development': 'High-performance web applications with React, Next.js, and .NET backends.',
  'mobile-development': 'Cross-platform mobile apps for iOS and Android with React Native or Flutter.',
  'custom-software-development': 'Bespoke software engineered to fit your exact business processes.',
  'application-modernization': 'Migrate legacy systems to modern cloud-native architectures without downtime.',
  'ui-ux-design': 'User-centered design that converts — from wireframes to polished interfaces.',
  'quality-engineering': 'Automated testing frameworks that catch defects before they reach production.',
  'architecture-advisory': 'Pragmatic architecture decisions that balance scalability, cost, and speed.',
  'it-consulting': 'Technology strategy and advisory for CTOs, founders, and engineering leaders.',
  // Infrastructure
  'cloud-strategy': 'Cloud readiness assessments and migration roadmaps for AWS and Azure.',
  'cloud-migration': 'Lift-and-shift or re-architect — zero-downtime migrations to the cloud.',
  'cloud-infrastructure': 'Production-grade cloud infrastructure built with Terraform and IaC best practices.',
  'devops': 'CI/CD pipelines and DevOps culture that ship 10× more with fewer incidents.',
  'platform-engineering': 'Internal developer platforms that accelerate engineering team productivity.',
  'data-engineering': 'ETL pipelines, data warehouses, and real-time analytics on Azure and AWS.',
  'finops': 'Cloud cost optimization strategies that reduce spend by 30–50% without sacrificing performance.',
  'security-compliance': 'Zero Trust security architecture, IAM, and compliance for HIPAA, SOC 2, and GDPR.',
};

// Tech badges for the Technologies section
const TECH_BADGES = NAVIGATION.servicesMenu[2].links.map((link) => ({
  label: link.label,
  href: link.href,
  icon: link.icon,
}));

// Jump-to anchors shown in hero
const JUMP_TO = [
  { label: 'AI Solutions', id: 'ai-solutions' },
  { label: 'Software Engineering', id: 'software-engineering' },
  { label: 'Infrastructure', id: 'infrastructure' },
  { label: 'Technologies', id: 'technologies' },
];

export default function ServicesPage() {
  const builtOutSlugs = getAllServicePageSlugs();

  const servicesListSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        'Enterprise Software Consulting Services',
        `${SITE_CONFIG.url}/services`
      ),
    ],
  };

  return (
    <>
      <JsonLd data={servicesListSchema} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        data-section="services-hero"
        className="bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light py-10 lg:py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Enterprise Software Consulting Services That Drive Growth
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              {SITE_CONFIG.name} delivers end-to-end software consulting services for US-based
              startups and mid-market companies. Our expertise spans cloud engineering, AI/ML
              solutions, full-stack development, data analytics, DevOps automation, enterprise
              integration, and security compliance. With projects starting at $5,000 and senior
              teams averaging 10+ years of experience, we transform complex business challenges
              into production-ready software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border-subtle text-text-light hover:bg-white/10"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
            {/* Jump-to strip */}
            <p className="text-sm text-text-subtle">
              Jump to:{' '}
              {JUMP_TO.map((item, i) => (
                <span key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-text-muted hover:text-text-light transition-colors underline-offset-2 hover:underline"
                  >
                    {item.label}
                  </a>
                  {i < JUMP_TO.length - 1 && (
                    <span className="mx-2 text-text-subtle">·</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── Sticky pillar nav ────────────────────────────────── */}
      <ServicesNavStrip />

      {/* ── AI Solutions ─────────────────────────────────────── */}
      <ServicePillarSection
        id="ai-solutions"
        title="AI Solutions"
        description={NAVIGATION.aiMlMenu.description}
        CategoryIcon={Brain}
        links={NAVIGATION.aiMlMenu.groups[1].links}
        builtOutSlugs={builtOutSlugs}
        iconMap={iconMap}
        descriptions={SERVICE_DESCRIPTIONS}
        bg="white"
      />

      {/* ── Software Engineering ─────────────────────────────── */}
      <ServicePillarSection
        id="software-engineering"
        title={NAVIGATION.servicesMenu[0].title}
        description={NAVIGATION.servicesMenu[0].description}
        CategoryIcon={Code2}
        links={NAVIGATION.servicesMenu[0].links}
        builtOutSlugs={builtOutSlugs}
        iconMap={iconMap}
        descriptions={SERVICE_DESCRIPTIONS}
        bg="gray"
      />

      {/* ── Infrastructure ───────────────────────────────────── */}
      <ServicePillarSection
        id="infrastructure"
        title={NAVIGATION.servicesMenu[1].title}
        description={NAVIGATION.servicesMenu[1].description}
        CategoryIcon={Server}
        links={NAVIGATION.servicesMenu[1].links}
        builtOutSlugs={builtOutSlugs}
        iconMap={iconMap}
        descriptions={SERVICE_DESCRIPTIONS}
        bg="white"
      />

      {/* ── Technologies ─────────────────────────────────────── */}
      <section id="technologies" className="scroll-mt-32 py-12 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <Cpu className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-heading">
                {NAVIGATION.servicesMenu[2].title}
              </h2>
              <p className="text-sm text-text-muted mt-0.5">
                {NAVIGATION.servicesMenu[2].description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {TECH_BADGES.map((tech) => {
              const Icon = iconMap[tech.icon] ?? Cpu;
              return (
                <Link
                  key={tech.href + tech.label}
                  href={tech.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light bg-surface-white text-sm font-medium text-text-secondary hover:border-brand-300 hover:text-brand-700 hover:shadow-sm transition-all duration-150"
                >
                  <Icon className="h-4 w-4 text-brand-500" />
                  {tech.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section data-section="services-why-choose-us" className="py-8 lg:py-12 bg-surface-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-heading mb-6">
                Why Teams Choose {SITE_CONFIG.name}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    n: '1',
                    title: 'AI-First Expertise',
                    body: 'Deep specialization in RAG frameworks, AI agents, and Azure AI Foundry — not generalists learning on your dime.',
                  },
                  {
                    n: '2',
                    title: 'Senior-Only Teams',
                    body: 'Every project staffed with 10+ years experience. Direct access to architects and founders, not account managers.',
                  },
                  {
                    n: '3',
                    title: 'Measurable ROI',
                    body: 'We track and report business outcomes, not just deliverables. Most clients see ROI within 60-90 days.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center">
                      <span className="text-brand-600 font-bold">{item.n}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-heading mb-1">{item.title}</h3>
                      <p className="text-text-body">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-white rounded-2xl p-8 shadow-card border border-border-light">
              <h3 className="text-xl font-semibold text-text-heading mb-6">Start Your Project</h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Free 30-minute consultation',
                  'Projects starting at $5,000',
                  'No long-term contracts required',
                  'US-based senior engineers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" size="lg">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        data-section="services-cta"
        className="py-8 lg:py-12 bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project requirements. We&apos;ll provide
            a detailed proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-surface-white text-brand-700 hover:bg-surface-light"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
