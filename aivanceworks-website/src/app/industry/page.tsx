import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getIndustryCards } from '@/lib/content';
import { Section, Container, Breadcrumbs } from '@/components/shared/primitives';
import { IndustryRevealGrid, type IndustryRevealCard } from '@/components/industry';

export const metadata: Metadata = constructMetadata({
  title: 'Industries We Serve | AIvanceWorks',
  description:
    'Deep, compliance-first software and AI expertise built around the realities of each industry — from healthcare to travel and hospitality.',
  canonical: `${SITE_CONFIG.url}/industry`,
});

export default async function IndustryIndexPage() {
  // The industry data files stay the single source of truth; `getIndustryCards`
  // flattens both full-page and card-only industries into one card shape, so
  // this page never has to know which kind it is rendering. `href` already
  // points at the detail page, or at the booking flow where there isn't one.
  const industries = await getIndustryCards();

  const cards: IndustryRevealCard[] = industries.map((industry) => ({
    slug: industry.slug,
    name: industry.name,
    description: industry.tagline,
    proof: industry.proof,
    image: industry.image,
    alt: industry.alt,
    icon: industry.icon,
    href: industry.hasPage ? industry.href : undefined,
    bookHref: `/book-consultation?industry=${industry.slug}`,
  }));

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

      <Section tone="dark" size="lg" withGrid>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 w-[520px] h-64 bg-accent-500/[0.07] rounded-full blur-[130px]"
        />
        <Container>
          <p className="max-w-2xl text-sm md:text-base text-text-light/70 leading-relaxed text-pretty mb-6 md:mb-8">
            Pick the vertical closest to yours and we&apos;ll walk your stack, your compliance
            bar, and your roadmap on a 30-minute call.
          </p>
          <IndustryRevealGrid industries={cards} />
        </Container>
      </Section>
    </>
  );
}
