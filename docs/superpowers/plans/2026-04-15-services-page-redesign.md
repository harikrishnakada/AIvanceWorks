# Services Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `/services` to surface all 26 individual services from the navbar mega-menu, grouped into four pillar sections with a sticky navigation strip.

**Architecture:** Three new server components (`ServiceCard`, `ServicePillarSection`) plus one client component (`ServicesNavStrip`) are composed in the updated `services/page.tsx`. All data comes from `NAVIGATION` in `@/lib/constants.ts` and `getAllServicePageSlugs()` from `@/lib/content.ts` — no new data files needed.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, Lucide React, shadcn/ui Button

---

## File Map

| Action | Path | Responsibility |
|--------|------|---------------|
| Create | `src/components/services/ServiceCard.tsx` | Single service card — linked or non-linked variant |
| Create | `src/components/services/ServicePillarSection.tsx` | Section header + responsive grid of ServiceCards |
| Create | `src/components/services/ServicesNavStrip.tsx` | Sticky pillar pill nav with IntersectionObserver active state |
| Modify | `src/app/services/page.tsx` | Wire all components, supply NAVIGATION data and descriptions |

---

## Task 1: Create `ServiceCard` component

**Files:**
- Create: `src/components/services/ServiceCard.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/services/ServiceCard.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  label: string;
  description: string;
  /** Omit for services without a built-out page */
  href?: string;
  icon: LucideIcon;
}

export function ServiceCard({ label, description, href, icon: Icon }: ServiceCardProps) {
  const inner = (
    <div
      className={`group h-full rounded-xl border bg-white p-5 transition-all duration-200 ${
        href
          ? 'border-gray-200 hover:border-brand-300 hover:shadow-md cursor-pointer'
          : 'border-gray-100 opacity-80'
      }`}
    >
      <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center mb-3">
        <Icon className="h-4.5 w-4.5 text-brand-600" />
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{label}</h3>
        {href && (
          <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-500 transition-all duration-150 mt-0.5" />
        )}
      </div>
      <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{inner}</Link>;
  }
  return <div className="h-full">{inner}</div>;
}
```

- [ ] **Step 2: Type-check**

```bash
cd aivanceworks-website && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors related to `ServiceCard.tsx`

- [ ] **Step 3: Commit**

```bash
git add aivanceworks-website/src/components/services/ServiceCard.tsx
git commit -m "feat(services): add ServiceCard component"
```

---

## Task 2: Create `ServicePillarSection` component

**Files:**
- Create: `src/components/services/ServicePillarSection.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/services/ServicePillarSection.tsx
import type { LucideIcon } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export interface PillarLink {
  label: string;
  href: string;
  icon: string;
}

interface ServicePillarSectionProps {
  id: string;
  title: string;
  description: string;
  CategoryIcon: LucideIcon;
  links: readonly PillarLink[];
  builtOutSlugs: string[];
  iconMap: Record<string, LucideIcon>;
  descriptions: Record<string, string>;
  /** bg-white or bg-gray-50 for alternating sections */
  bg?: 'white' | 'gray';
}

export function ServicePillarSection({
  id,
  title,
  description,
  CategoryIcon,
  links,
  builtOutSlugs,
  iconMap,
  descriptions,
  bg = 'white',
}: ServicePillarSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 py-16 ${bg === 'gray' ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
            <CategoryIcon className="h-6 w-6 text-brand-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{description}</p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link) => {
            const slug = link.href.split('/').pop() ?? '';
            const isBuiltOut = builtOutSlugs.includes(slug);
            const Icon = iconMap[link.icon] ?? CategoryIcon;
            const desc =
              descriptions[slug] ??
              `${link.label} services for modern businesses.`;

            return (
              <ServiceCard
                key={link.href + link.label}
                label={link.label}
                description={desc}
                href={isBuiltOut ? link.href : undefined}
                icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd aivanceworks-website && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add aivanceworks-website/src/components/services/ServicePillarSection.tsx
git commit -m "feat(services): add ServicePillarSection component"
```

---

## Task 3: Create `ServicesNavStrip` component

**Files:**
- Create: `src/components/services/ServicesNavStrip.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/services/ServicesNavStrip.tsx
'use client';

import { useEffect, useState } from 'react';

const PILLARS = [
  { id: 'ai-solutions', label: 'AI Solutions' },
  { id: 'software-engineering', label: 'Software Engineering' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'technologies', label: 'Technologies' },
] as const;

export function ServicesNavStrip() {
  const [activeId, setActiveId] = useState<string>(PILLARS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    PILLARS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sticky top-16 md:top-[4.5rem] lg:top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex gap-2 overflow-x-auto py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PILLARS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                activeId === id
                  ? 'bg-brand-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd aivanceworks-website && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add aivanceworks-website/src/components/services/ServicesNavStrip.tsx
git commit -m "feat(services): add ServicesNavStrip sticky nav component"
```

---

## Task 4: Rebuild `services/page.tsx`

**Files:**
- Modify: `src/app/services/page.tsx`

- [ ] **Step 1: Replace the entire file content**

```tsx
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

// ─── Icon lookup ──────────────────────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
  Brain, Code2, Server, Cpu,
  Bot, Rocket, Layers, Lightbulb, Globe, Smartphone,
  Settings, Palette, MessageSquare,
  GitBranch, Cloud, RefreshCw, Shield,
  Activity, Zap, TrendingUp, Database,
  Search, CheckCircle, Eye,
};

// ─── Short descriptions for every service card ────────────────────────────────
// Keyed by the slug (last segment of the href).
const SERVICE_DESCRIPTIONS: Record<string, string> = {
  // AI Solutions
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

// Tech badge data for the Technologies section
const TECH_BADGES = NAVIGATION.servicesMenu[2].links.map((link) => ({
  label: link.label,
  href: link.href,
  icon: link.icon,
}));

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

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        data-section="services-hero"
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 lg:py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Enterprise Software Consulting Services That Drive Growth
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {SITE_CONFIG.name} delivers end-to-end software consulting services for US-based
              startups and mid-market companies. Our expertise spans cloud engineering, AI/ML
              solutions, full-stack development, data analytics, DevOps automation, enterprise
              integration, and security compliance. With projects starting at $5,000 and senior
              teams averaging 10+ years of experience, we transform complex business challenges
              into production-ready software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
            {/* Jump-to strip */}
            <p className="text-sm text-gray-400">
              Jump to:{' '}
              {[
                { label: 'AI Solutions', id: 'ai-solutions' },
                { label: 'Software Engineering', id: 'software-engineering' },
                { label: 'Infrastructure', id: 'infrastructure' },
                { label: 'Technologies', id: 'technologies' },
              ].map((item, i, arr) => (
                <span key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-300 hover:text-white transition-colors underline-offset-2 hover:underline"
                  >
                    {item.label}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="mx-2 text-gray-600">·</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── Sticky pillar nav ─────────────────────────────────── */}
      <ServicesNavStrip />

      {/* ── AI Solutions pillar ───────────────────────────────── */}
      <ServicePillarSection
        id="ai-solutions"
        title={NAVIGATION.aiMlMenu.title + ' Solutions'}
        description={NAVIGATION.aiMlMenu.description}
        CategoryIcon={Brain}
        links={NAVIGATION.aiMlMenu.links}
        builtOutSlugs={builtOutSlugs}
        iconMap={iconMap}
        descriptions={SERVICE_DESCRIPTIONS}
        bg="white"
      />

      {/* ── Software Engineering pillar ───────────────────────── */}
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

      {/* ── Infrastructure pillar ────────────────────────────── */}
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

      {/* ── Technologies section ─────────────────────────────── */}
      <section
        id="technologies"
        className="scroll-mt-32 py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <Cpu className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {NAVIGATION.servicesMenu[2].title}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700 hover:shadow-sm transition-all duration-150"
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
      <section data-section="services-why-choose-us" className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Teams Choose {SITE_CONFIG.name}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">AI-First Expertise</h3>
                    <p className="text-gray-600">
                      Deep specialization in RAG frameworks, AI agents, and Azure AI Foundry —
                      not generalists learning on your dime.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Senior-Only Teams</h3>
                    <p className="text-gray-600">
                      Every project staffed with 10+ years experience. Direct access to architects
                      and founders, not account managers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Measurable ROI</h3>
                    <p className="text-gray-600">
                      We track and report business outcomes, not just deliverables.
                      Most clients see ROI within 60-90 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Start Your Project</h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Free 30-minute consultation',
                  'Projects starting at $5,000',
                  'No long-term contracts required',
                  'US-based senior engineers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
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
        className="py-8 lg:py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project requirements. We&apos;ll provide
            a detailed proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-gray-100"
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
```

- [ ] **Step 2: Type-check**

```bash
cd aivanceworks-website && npx tsc --noEmit 2>&1 | head -50
```

Expected: no errors

- [ ] **Step 3: Start dev server and verify visually**

```bash
cd aivanceworks-website && npm run dev
```

Navigate to `http://localhost:3000/services` and verify:
- Hero renders with jump-to links
- Sticky nav strip appears below hero and stays visible on scroll
- "AI Solutions" section has 6 cards, all linked (click one — it should navigate)
- "Software Engineering" section has 12 cards, all linked
- "Infrastructure" section has 8 cards — `platform-engineering` and `data-engineering` cards render but are NOT links (no hover arrow)
- "Technologies" section shows chip/badge row, each chip links to its service page
- "Why Choose Us" and CTA sections are intact
- Resize to 375px — cards stack to 1 column, nav strip scrolls horizontally
- Resize to 768px — cards show 2 columns

- [ ] **Step 4: Commit**

```bash
git add aivanceworks-website/src/app/services/page.tsx
git commit -m "feat(services): rebuild services page with full nav service listing"
```
