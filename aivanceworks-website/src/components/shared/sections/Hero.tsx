import Image from 'next/image';
import Link from 'next/link';
import { Container, type Metric } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroProps {
  badge?: string;
  badgeHref?: string;
  headline: string;
  subhead: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  metrics?: Metric[];
  metricsTitle?: string;
  className?: string;
  heroImage?: { src: string; alt: string };
  heroIllustration?: React.ReactNode;
}

export const Hero = ({
  badge,
  badgeHref,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  metrics,
  heroImage,
  heroIllustration,
  className,
}: HeroProps) => {
  const hasMetrics = !!(metrics && metrics.length > 0);
  const hasImage = !!heroImage;
  const hasIllustration = !!heroIllustration;

  return (
    <section className={cn('relative overflow-hidden', className)}>
      {/* Outer wrapper — matches homepage HeroSection spacing */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-2 sm:pb-3 md:pb-4 lg:pb-5">
        {/* Hero Card Box */}
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

          {hasImage ? (
            /* ── Full-bleed background image with content overlay ── */
            <div className="relative z-10 min-h-[400px] md:min-h-[440px]">
              {/* Background image — fills entire card */}
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-40"
              />
              {/* Gradient scrim — dark on left for text readability, transparent on right to show image */}
              <div className="absolute inset-0 bg-gradient-to-r from-surface-dark-from/90 via-surface-dark-via/70 to-transparent pointer-events-none" />
              {/* Bottom edge fade into card background */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-dark-to to-transparent pointer-events-none" />

              {/* Content overlay */}
              <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 md:py-14 lg:py-16 max-w-2xl">
                {badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/[0.12] border border-brand-400/[0.15] text-brand-300 text-xs sm:text-sm font-semibold tracking-wide mb-4 md:mb-5 backdrop-blur-sm">
                    {badgeHref ? (
                      <Link href={badgeHref} className="hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full">
                        {badge}
                      </Link>
                    ) : badge}
                  </div>
                )}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-light mb-4 md:mb-5 leading-[1.15] tracking-tight">
                  {headline}
                </h1>
                <p className="text-base md:text-lg text-text-light/70 leading-relaxed mb-6">
                  {subhead}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-500 text-text-light shadow-glow-sm font-semibold rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
                    <Link href={primaryCta.href}>{primaryCta.label}</Link>
                  </Button>
                  {secondaryCta && (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-text-light/25 text-text-light hover:border-text-light/40 hover:bg-glass-hover rounded-xl backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                      <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                    </Button>
                  )}
                </div>
                {/* Inline metrics below CTAs */}
                {hasMetrics && (
                  <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 pt-6 border-t border-text-light/[0.12]">
                    {metrics!.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-xl md:text-2xl font-bold text-text-light">{metric.value}</div>
                        <div className="text-xs text-text-subtle">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* ── Standard layout: content left, illustration/metrics right ── */
            <div
              className={cn(
                'relative z-10 px-6 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 md:py-14 lg:py-16',
                (hasIllustration || hasMetrics) ? '' : 'max-w-4xl mx-auto text-center'
              )}
            >
              <div
                className={cn(
                  'grid gap-10 md:gap-12 items-center',
                  (hasIllustration || hasMetrics) ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
                )}
              >
                <div>
                  {badge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/[0.12] border border-brand-400/[0.15] text-brand-300 text-xs sm:text-sm font-semibold tracking-wide mb-4 md:mb-5">
                      {badgeHref ? (
                        <Link href={badgeHref} className="hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full">
                          {badge}
                        </Link>
                      ) : badge}
                    </div>
                  )}
                  <h1 className={cn(
                    "text-3xl sm:text-4xl md:text-5xl font-bold text-text-light mb-4 md:mb-5 leading-[1.15] tracking-tight",
                    (hasIllustration || hasMetrics) ? "lg:text-[3.25rem]" : "lg:text-6xl"
                  )}>
                    {headline}
                  </h1>
                  <p className={cn(
                    "text-base md:text-lg text-text-subtle leading-relaxed max-w-[54ch]",
                    (hasIllustration || hasMetrics) ? "mb-6" : "mb-8 mx-auto"
                  )}>
                    {subhead}
                  </p>
                  <div className={cn(
                    "flex flex-col sm:flex-row gap-3",
                    !(hasIllustration || hasMetrics) && "justify-center"
                  )}>
                    <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-500 text-text-light shadow-glow-sm font-semibold rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
                      <Link href={primaryCta.href}>{primaryCta.label}</Link>
                    </Button>
                    {secondaryCta && (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-text-light/20 text-text-light hover:border-text-light/35 hover:bg-glass-bg rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                      >
                        <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                      </Button>
                    )}
                  </div>
                  {/* Inline metrics for illustration/no-image heroes */}
                  {hasMetrics && !hasImage && (
                    <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 pt-6 border-t border-border-subtle">
                      {metrics!.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-xl md:text-2xl font-bold text-brand-400">{metric.value}</div>
                          <div className="text-xs text-text-subtle">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Right column: illustration or nothing */}
                {hasIllustration && (
                  <div className="flex items-center justify-center">
                    {heroIllustration}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
