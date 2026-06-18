// src/app/services/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain, Code2, Server, Cpu,
  Bot, Rocket, Layers, Lightbulb, Globe, Smartphone,
  Settings, Palette, MessageSquare,
  GitBranch, Cloud, RefreshCw, Shield,
  Activity, Zap, TrendingUp, Database,
  Search, CheckCircle, Eye, Building2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllServicePageSlugs } from '@/lib/content';
import { NAVIGATION, SITE_CONFIG, TECHNOLOGIES } from '@/lib/constants';
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
  'market-research': 'Data-driven market sizing, competitive intelligence, and buyer persona research — before you build.',
  'erp-development': 'Unify finance, operations, HR, and supply chain on a single ERP platform.',
  'saas-development': 'Build scalable multi-tenant SaaS platforms designed for growth.',
  'crm': 'Custom CRM builds and Salesforce / HubSpot / Dynamics customization, designed around how your team actually sells.',
  'web-app-development': 'High-performance web applications with React, Next.js, and .NET backends.',
  'mobile-development': 'Cross-platform mobile apps for iOS and Android with React Native or Flutter.',
  'custom-software-development': 'Bespoke software engineered to fit your exact business processes.',
  'application-modernization': 'Migrate legacy systems to modern cloud-native architectures without downtime.',
  'ui-ux-design': 'User-centered design that converts — from wireframes to polished interfaces.',
  'quality-engineering': 'Automated testing frameworks that catch defects before they reach production.',
  'c10-architecture-advisory': 'Pragmatic architecture decisions that balance scalability, cost, and speed.',
  'c10-it-consulting': 'Technology strategy and advisory for CTOs, founders, and engineering leaders.',
  // Infrastructure
  'c10-cloud-computing': 'Cloud readiness assessments and migration roadmaps for AWS and Azure.',
  'cloud-migration': 'Lift-and-shift or re-architect — zero-downtime migrations to the cloud.',
  'cloud-infrastructure': 'Production-grade cloud infrastructure built with Terraform and IaC best practices.',
  'devops': 'CI/CD pipelines and DevOps culture that ship 10× more with fewer incidents.',
  'platform-engineering': 'Internal developer platforms that accelerate engineering team productivity.',
  'data-engineering': 'ETL pipelines, data warehouses, and real-time analytics on Azure and AWS.',
  'security-compliance': 'Zero Trust security architecture, IAM, and compliance for HIPAA, SOC 2, and GDPR.',
};

// Tech badges for the Technologies section
const TECH_BADGES = TECHNOLOGIES.links.map((link) => ({
  label: link.label,
  href: link.href,
  icon: link.icon,
}));

// Jump-to anchors shown in hero — mirrors the header's Services mega menu
const JUMP_TO = [
  { label: 'Automation & Intelligence', id: 'automation-intelligence' },
  { label: 'Advisory', id: 'advisory' },
  { label: 'Enterprise', id: 'enterprise' },
  { label: 'Software Engineering', id: 'software-engineering' },
  { label: 'Infrastructure Management', id: 'infrastructure-management' },
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
        className="relative overflow-hidden"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-2 sm:pb-3 md:pb-4 lg:pb-5">
          <div
            className="relative w-full overflow-hidden
              bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to
              rounded-2xl lg:rounded-3xl
              border border-border-subtle
              shadow-brand-panel"
          >
            {/* Glow orbs */}
            <div className="absolute top-0 left-1/3 w-[500px] h-56 bg-brand-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-48 bg-accent-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 md:py-14 lg:py-16">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/[0.12] border border-brand-400/[0.15] text-brand-300 text-xs sm:text-sm font-semibold tracking-wide mb-4 md:mb-5">
                  Our Services
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-light mb-4 md:mb-5 leading-[1.15] tracking-tight">
                  Enterprise Software Consulting Services That{' '}
                  <span className="bg-gradient-to-r from-brand-400 to-indigo-400 bg-clip-text text-transparent">
                    Drive Growth
                  </span>
                </h1>
                <p className="text-base md:text-lg text-text-subtle leading-relaxed max-w-[60ch] mb-6">
                  {SITE_CONFIG.name} delivers end-to-end software consulting services for US-based
                  startups and mid-market companies. Our expertise spans cloud engineering, AI/ML
                  solutions, full-stack development, data analytics, DevOps automation, enterprise
                  integration, and security compliance. With projects starting at $5,000 and senior
                  teams averaging 10+ years of experience, we transform complex business challenges
                  into production-ready software solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-600 hover:bg-brand-500 text-text-light shadow-glow-sm font-semibold rounded-xl"
                  >
                    <Link href="/contact">Get Free Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-text-light/20 text-text-light hover:border-text-light/35 hover:bg-glass-bg rounded-xl"
                  >
                    <Link href="/case-studies">View Case Studies</Link>
                  </Button>
                </div>
                {/* Jump-to strip */}
                <p className="text-sm text-text-subtle pt-6 border-t border-text-light/[0.12]">
                  Jump to:{' '}
                  {JUMP_TO.map((item, i) => (
                    <span key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-text-light/70 hover:text-text-light transition-colors underline-offset-2 hover:underline"
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
          </div>
        </div>
      </section>

      {/* ── Sticky pillar nav ────────────────────────────────── */}
      <ServicesNavStrip />

      {/* ── Automation & Intelligence ────────────────────────── */}
      <ServicePillarSection
        id="automation-intelligence"
        title={NAVIGATION.aiMlMenu.groups[0].title}
        description={NAVIGATION.aiMlMenu.groups[0].description}
        CategoryIcon={Brain}
        links={NAVIGATION.aiMlMenu.groups[0].links}
        builtOutSlugs={builtOutSlugs}
        iconMap={iconMap}
        descriptions={SERVICE_DESCRIPTIONS}
        bg="white"
      />

      {/* ── Advisory ─────────────────────────────────────────── */}
      <ServicePillarSection
        id="advisory"
        title={NAVIGATION.servicesMenu[0].title}
        description={NAVIGATION.servicesMenu[0].description}
        CategoryIcon={MessageSquare}
        links={NAVIGATION.servicesMenu[0].links}
        builtOutSlugs={builtOutSlugs}
        iconMap={iconMap}
        descriptions={SERVICE_DESCRIPTIONS}
        bg="gray"
      />

      {/* ── Enterprise ───────────────────────────────────────── */}
      <ServicePillarSection
        id="enterprise"
        title={NAVIGATION.servicesMenu[1].title}
        description={NAVIGATION.servicesMenu[1].description}
        CategoryIcon={Building2}
        links={NAVIGATION.servicesMenu[1].links}
        builtOutSlugs={builtOutSlugs}
        iconMap={iconMap}
        descriptions={SERVICE_DESCRIPTIONS}
        bg="white"
      />

      {/* ── Software Engineering ─────────────────────────────── */}
      <ServicePillarSection
        id="software-engineering"
        title={NAVIGATION.servicesMenu[2].title}
        description={NAVIGATION.servicesMenu[2].description}
        CategoryIcon={Code2}
        links={NAVIGATION.servicesMenu[2].links}
        builtOutSlugs={builtOutSlugs}
        iconMap={iconMap}
        descriptions={SERVICE_DESCRIPTIONS}
        bg="gray"
      />

      {/* ── Infrastructure Management ────────────────────────── */}
      <ServicePillarSection
        id="infrastructure-management"
        title={NAVIGATION.servicesMenu[3].title}
        description={NAVIGATION.servicesMenu[3].description}
        CategoryIcon={Server}
        links={NAVIGATION.servicesMenu[3].links}
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
                {TECHNOLOGIES.title}
              </h2>
              <p className="text-sm text-text-muted mt-0.5">
                {TECHNOLOGIES.description}
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
        className="py-12 bg-surface-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light px-6 sm:px-10 lg:px-14 py-12 lg:py-16 shadow-card text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg text-text-muted mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project requirements. We&apos;ll provide
              a detailed proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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
        </div>
      </section>
    </>
  );
}
