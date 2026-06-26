import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroCta {
  label: string;
  href: string;
}

export interface IndustryHeroProps {
  kicker?: string;
  headline: string;
  subhead: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  heroImage: { src: string; alt: string };
  standards?: string[];
  standardsLabel?: string;
}

/**
 * IndustryHero — bespoke, editorial full-bleed hero for industry pages.
 * Distinct from the service/solution Hero: oversized display headline with an
 * accent rule, and a full-width "standards ribbon" docked to the bottom of the
 * image card rather than inline metric figures.
 */
export const IndustryHero = ({
  kicker,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  heroImage,
  standards,
  standardsLabel = 'Built to the standards your industry runs on',
}: IndustryHeroProps) => (
  <section data-section="industry-hero" className="relative overflow-hidden">
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-2">
      <div className="relative w-full overflow-hidden rounded-2xl lg:rounded-3xl border border-border-subtle shadow-brand-panel bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to">
        {/* Background image */}
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        {/* Scrim — readable on the left, image breathes on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark-from/95 from-0% via-surface-dark-via/80 via-50% to-transparent to-95% pointer-events-none" />
        {/* Glow + grid */}
        <div className="absolute -top-10 left-1/4 w-[520px] h-64 bg-brand-500/[0.10] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 pt-12 sm:pt-14 md:pt-20 lg:pt-24 pb-0 max-w-3xl lg:max-w-[62%]">
          {kicker && (
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-400" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
                {kicker}
              </span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light leading-[1.05] tracking-tight text-balance mb-6">
            {headline}
          </h1>
          <p className="text-base md:text-lg text-text-light/70 leading-relaxed max-w-[56ch] mb-8">
            {subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pb-12 md:pb-16">
            <Button
              asChild
              size="lg"
              className="bg-brand-600 hover:bg-brand-500 text-text-light shadow-glow-sm font-semibold rounded-xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-text-light/25 text-text-light hover:border-text-light/40 hover:bg-glass-hover rounded-xl backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>

        {/* Standards ribbon docked to the bottom of the card */}
        {standards && standards.length > 0 && (
          <div className="relative z-10 border-t border-text-light/10 bg-surface-dark-to/40 backdrop-blur-sm">
            <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-4 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light/40 shrink-0">
                {standardsLabel}
              </span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {standards.map((s, i) => (
                  <span key={s} className="flex items-center gap-5">
                    {i > 0 && (
                      <span className="h-1 w-1 rounded-full bg-brand-400/60" aria-hidden="true" />
                    )}
                    <span className="text-sm font-medium text-text-light/80">{s}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);
