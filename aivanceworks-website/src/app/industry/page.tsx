import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getAllIndustryPageSlugs, getIndustryPageData } from '@/lib/content';
import { Section, Container, IconTile, Breadcrumbs } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export const metadata: Metadata = constructMetadata({
  title: 'Industries We Serve | AIvanceWorks',
  description:
    'Deep, compliance-first software and AI expertise built around the realities of each industry — from healthcare to travel and hospitality.',
  canonical: `${SITE_CONFIG.url}/industry`,
});

const INDUSTRY_ICONS: Record<string, string> = {
  healthcare: 'HeartPulse',
  'travel-hospitality': 'Plane',
  'real-estate': 'Building2',
  'manufacturing-supply-chain': 'Factory',
  logistics: 'Truck',
};

export default async function IndustryIndexPage() {
  const slugs = getAllIndustryPageSlugs();
  const industries = (
    await Promise.all(slugs.map((slug) => getIndustryPageData(slug)))
  ).filter((d): d is NonNullable<typeof d> => Boolean(d));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema('Industries We Serve', `${SITE_CONFIG.url}/industry`),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industry' },
        ]}
      />

      <Section tone="dark" size="lg" withGrid>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/3 w-[560px] h-64 bg-brand-500/[0.08] rounded-full blur-[120px]"
        />
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-300 mb-3">
              Industries
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-5 tracking-tight text-balance">
              Software built around the realities of your industry
            </h1>
            <p className="text-base md:text-lg text-text-light/70 leading-relaxed text-pretty">
              Every industry has its own buyers, pressures, and compliance bar. We bring deep,
              vertical-specific engineering and AI — not generic templates — to the work.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="light" size="lg">
        <Container>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = getLucideIcon(INDUSTRY_ICONS[industry.slug] ?? 'Building2');
              return (
                <Link
                  key={industry.slug}
                  href={industry.canonicalPath}
                  className="group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  <div className="h-full bg-surface-white border border-border-light rounded-2xl shadow-card-sm hover:shadow-card hover:border-brand-300 transition-all p-7 md:p-8">
                    <IconTile
                      icon={Icon}
                      size="lg"
                      variant="brand"
                      className="mb-6 group-hover:scale-110 transition-transform"
                    />
                    <h2 className="text-xl md:text-2xl font-semibold text-text-heading mb-3 group-hover:text-brand-600 transition-colors">
                      {industry.title}
                    </h2>
                    <p className="text-sm md:text-base text-text-body leading-relaxed mb-5">
                      {industry.shortDescription}
                    </p>
                    <div className="flex items-center text-brand-600 font-medium text-sm">
                      Explore {industry.breadcrumb[industry.breadcrumb.length - 1].label}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
