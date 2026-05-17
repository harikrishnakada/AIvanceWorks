// src/app/solutions/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp, Shield, Heart, Pill, Building2, Activity,
  CreditCard, FileText, Layers, Cpu, Settings, FlaskConical,
  CheckCircle, Sparkles, Stethoscope, ShoppingCart, Server,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllSolutionPageSlugs } from '@/lib/content';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { SolutionsNavStrip } from '@/components/solutions/SolutionsNavStrip';
import { ServiceCard } from '@/components/services/ServiceCard';

export const metadata: Metadata = constructMetadata({
  title: 'Industry Solutions — Healthcare, Insurance & Pharma Software',
  description: `${SITE_CONFIG.name} builds custom software solutions for healthcare, insurance, and pharma. HIPAA-compliant portals, claims systems, and LIMS.`,
  canonical: `${SITE_CONFIG.url}/solutions`,
  keywords: [
    'healthcare software solutions',
    'insurance software development',
    'pharma software solutions',
    'patient portal development',
    'insurance portal',
    'custom software solutions',
  ],
});

// ─── Icon lookup ─────────────────────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
  TrendingUp, Shield, Heart, Pill, Building2, Activity,
  CreditCard, FileText, Layers, Cpu, Settings, FlaskConical,
  Sparkles, Stethoscope, ShoppingCart, Server,
};

// ─── Short descriptions (keyed by slug) ──────────────────────────────────────
const SOLUTION_DESCRIPTIONS: Record<string, string> = {
  // AI Industry Solutions
  'ai-pharma': 'AI for pharma — drug discovery acceleration, clinical trial intelligence, and regulatory automation.',
  'ai-healthcare': 'AI for healthcare — clinical decision support, diagnostic imaging, and patient engagement at scale.',
  'ai-retail': 'AI for retail — demand forecasting, hyper-personalization, and intelligent merchandising.',
  'ai-infrastructure': 'AI-ready infrastructure — GPU clusters, vector databases, and MLOps platforms built for scale.',
  // Insurance
  'insurance-portals': 'Customer, agent, and broker portals that streamline policy servicing end-to-end.',
  'underwriting-software': 'Automated underwriting workbenches with rules engines and risk scoring.',
  'agency-management-software': 'Unified CRM, commissions, and policy lifecycle tools for independent agencies.',
  'policy-administration-systems': 'Modern PAS platforms covering quote, bind, issue, endorse, and renewal.',
  'quoting-software': 'Real-time rating engines and comparative quoting across carriers and lines.',
  'document-management-software': 'Compliant document storage, e-signature, and retention for insurance operations.',
  // Healthcare
  'patient-portals': 'HIPAA-compliant patient portals for scheduling, messaging, and medical records access.',
  'ehr-emr-development': 'Custom EHR/EMR builds and integrations with HL7, FHIR, and major clinical systems.',
  'hospital-management-systems': 'End-to-end HMS covering OPD, IPD, billing, pharmacy, labs, and analytics.',
  // Pharma
  'lims': 'Laboratory Information Management Systems for sample, instrument, and QA/QC workflows.',
  'regulatory-information-management': 'RIM platforms for submissions, dossier tracking, and global regulatory compliance.',
};

// Jump-to anchors shown in hero
const JUMP_TO = [
  { label: 'AI Industry Solutions', id: 'ai-industry-solutions' },
  ...NAVIGATION.solutionsMenu.map((cat) => ({
    label: cat.heading,
    id: cat.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  })),
];

export default function SolutionsPage() {
  const builtOutSlugs = getAllSolutionPageSlugs();

  const solutionsPageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        'Industry Solutions',
        `${SITE_CONFIG.url}/solutions`
      ),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_CONFIG.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Solutions',
            item: `${SITE_CONFIG.url}/solutions`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={solutionsPageSchema} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        data-section="solutions-hero"
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
                  Industry Solutions
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-light mb-4 md:mb-5 leading-[1.15] tracking-tight">
                  Software Solutions Built for{' '}
                  <span className="bg-gradient-to-r from-brand-400 to-indigo-400 bg-clip-text text-transparent">
                    Your Industry
                  </span>
                </h1>
                <p className="text-base md:text-lg text-text-subtle leading-relaxed max-w-[60ch] mb-6">
                  {SITE_CONFIG.name} designs and delivers custom software that solves real
                  problems in insurance, healthcare, and pharma — with deep domain
                  expertise, modern engineering, and compliance built in from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-600 hover:bg-brand-500 text-text-light shadow-glow-sm font-semibold rounded-xl"
                  >
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-text-light/20 text-text-light hover:border-text-light/35 hover:bg-glass-bg rounded-xl"
                  >
                    <Link href="/case-studies">See Our Work</Link>
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
      <SolutionsNavStrip pillars={JUMP_TO} />

      {/* ── AI Industry Solutions ────────────────────────────── */}
      <section
        id="ai-industry-solutions"
        data-section="solutions-category"
        data-category="AI Industry Solutions"
        className="scroll-mt-32 py-12 bg-surface-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading">
                {NAVIGATION.aiMlMenu.groups[0].title}
              </h2>
              <p className="text-sm text-text-muted mt-0.5">
                {NAVIGATION.aiMlMenu.groups[0].description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NAVIGATION.aiMlMenu.groups[0].links.map((link) => {
              const slug = link.href.split('/').pop() ?? '';
              const isBuiltOut = builtOutSlugs.includes(slug);
              const Icon = iconMap[link.icon] ?? Sparkles;
              const desc =
                SOLUTION_DESCRIPTIONS[slug] ??
                `${link.label} — AI-native solutions tailored to your industry.`;

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

      {/* ── Industry pillars ─────────────────────────────────── */}
      {NAVIGATION.solutionsMenu.map((category, catIdx) => {
        const sectionId = category.heading
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-');
        const CategoryIcon = iconMap[category.icon] ?? Building2;
        // AI Industry Solutions is white, so start the first industry pillar on gray.
        const bgClass =
          catIdx % 2 === 0 ? 'bg-surface-light' : 'bg-surface-white';

        return (
          <section
            key={category.heading}
            id={sectionId}
            data-section="solutions-category"
            data-category={category.heading}
            className={`scroll-mt-32 py-12 ${bgClass}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <CategoryIcon className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-heading">
                    {category.heading}
                  </h2>
                  <p className="text-sm text-text-muted mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.links.map((link) => {
                  const slug = link.href.split('/').pop() ?? '';
                  const isBuiltOut = builtOutSlugs.includes(slug);
                  const Icon = iconMap[link.icon] ?? CategoryIcon;
                  const desc =
                    SOLUTION_DESCRIPTIONS[slug] ??
                    `${link.label} tailored to your industry workflows.`;

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
      })}

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section
        data-section="solutions-why-choose-us"
        className="py-12 bg-surface-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading mb-6">
                Why Industry Leaders Choose {SITE_CONFIG.name}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    n: '1',
                    title: 'Deep Domain Expertise',
                    body: 'Engineers who know HIPAA, HL7/FHIR, PCI, SOC 2, and GxP — not generalists learning regulated industries on your dime.',
                  },
                  {
                    n: '2',
                    title: 'Compliance by Design',
                    body: 'Security, auditability, and regulatory controls built into architecture from day one, not bolted on at the end.',
                  },
                  {
                    n: '3',
                    title: 'Outcome-Focused Delivery',
                    body: 'We measure success in claims processed, patients served, and dollars saved — not story points shipped.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center">
                      <span className="text-brand-600 font-bold">{item.n}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-heading mb-1">
                        {item.title}
                      </h3>
                      <p className="text-text-body">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-white rounded-2xl p-6 sm:p-8 shadow-card border border-border-light">
              <h3 className="text-xl font-semibold text-text-heading mb-6">
                Start Your Industry Project
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Free 30-minute discovery call',
                  'Industry-specific solution architecture',
                  'Compliance-ready engineering teams',
                  'US-based senior consultants',
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
        data-section="solutions-cta"
        className="py-12 bg-surface-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light px-6 sm:px-10 lg:px-14 py-12 lg:py-16 shadow-card text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-base sm:text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            We build custom software for any regulated or specialized vertical. Tell us
            about your requirements and we&apos;ll show you how our team can deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-surface-white text-brand-700 hover:bg-surface-light"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
