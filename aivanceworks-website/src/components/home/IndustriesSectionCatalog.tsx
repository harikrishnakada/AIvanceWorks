'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { HomeIndustry } from '@/data/home/industries';

// ── Variant: Capabilities Bento ──
// Borrows the visual language of the industry-page "What we build" catalog
// (IndustryCapabilities): a dark section with an asymmetric bento grid where
// each card carries an icon tile, a title, a description, and a CheckCircle2
// checklist. The difference here is that every card is a Link into its
// /industry page, with an image header band fading into the dark surface —
// giving the homepage its imagery while keeping the catalog's checklist read.
//
// Eight industries map onto a symmetric bento rhythm on a 6-column grid:
// three balanced panels on top (2+2+2), two wide feature tiles across the
// centre (3+3), and three balanced panels to close (2+2+2) — every row fills
// the full width. The wide (col-span-3) tiles carry the taller image band and
// anchor the eye on the middle row.

const BENTO_SPANS = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
];

export function IndustriesSectionCatalog({ industries }: { industries: HomeIndustry[] }) {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section data-section="home-industries-catalog" tone="dark" size="md" withGrid>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/3 w-[620px] h-72 bg-brand-500/[0.09] rounded-full blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[480px] h-56 bg-accent-500/[0.06] rounded-full blur-[110px]"
      />

      <Container>
        {/* Header */}
        <div
          ref={headerRef}
          className="scroll-step flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-6 md:mb-8"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-light tracking-tight text-balance mb-3">
              Software Built Around Your{' '}
              <span className="text-brand-400">Industry</span>
            </h2>
            <p className="text-sm md:text-base text-text-light/70 leading-relaxed text-pretty">
              Vertical-specific software and AI, engineered for the way your industry actually
              operates — from the first patient record to the final mile.
            </p>
          </div>
          <Link
            href="/industry"
            className="group inline-flex items-center shrink-0 text-brand-300 hover:text-brand-200 font-semibold text-sm transition-colors duration-300"
          >
            View all industries
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </Link>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          className="scroll-stagger grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-6"
        >
          {industries.map((industry, idx) => {
            const Icon = getLucideIcon(industry.icon ?? 'HelpCircle');
            const span = BENTO_SPANS[idx] ?? 'lg:col-span-2';
            const featured = span.endsWith('span-3');
            return (
              <Link
                key={industry.href}
                href={industry.href}
                aria-label={`${industry.name} — ${industry.short}`}
                className={cn(
                  'group flex flex-col overflow-hidden rounded-2xl bg-surface-elevated border border-border-dark transition-all duration-300',
                  'outline-none hover:border-brand-400/50 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
                  'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark-to',
                  span
                )}
              >
                {/* Image header band — fades into the dark card surface */}
                <div className={cn('relative w-full overflow-hidden', featured ? 'h-28 md:h-36' : 'h-24 md:h-28')}>
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/25 to-transparent"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 md:p-6 -mt-6 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/[0.12] border border-brand-400/20 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-text-light leading-tight">
                      {industry.name}
                    </h3>
                  </div>

                  <p className="text-sm text-text-light/55 leading-relaxed mb-4 -mt-1">
                    {industry.tagline}
                  </p>

                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mb-4">
                    {industry.proof.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                        <span className="text-sm text-text-light/80 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto inline-flex items-center gap-1.5 text-text-light font-semibold text-sm">
                    Explore {industry.name}
                    <ArrowUpRight className="h-4 w-4 text-brand-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
