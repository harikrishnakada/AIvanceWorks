import Image from 'next/image';
import Link from 'next/link';
import { Container, type Metric } from '@/components/shared/primitives';
import type { HeroImage } from '@/types/pages';
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
  heroImage?: HeroImage;
  heroIllustration?: React.ReactNode;
  /**
   * Lifts the centred copy stack slightly above true centre, so the title sits
   * closer to the badge instead of stranding ~150px of dead space between them.
   * Opt-in because the shared Hero also serves solution pages, which keep the
   * true-centre placement. The offset itself lives in page-hero-fold.css, which
   * owns the height budget and gates it to viewports that have the slack.
   */
  raiseCopy?: boolean;
  /**
   * Runs the hero card edge to edge instead of sitting it inside the page
   * Container as a rounded panel. The copy still resolves to Container bounds,
   * so a full-bleed hero keeps the same left edge as every section below it.
   * Defaults to false — the panel treatment stays the norm.
   */
  fullBleed?: boolean;
}

/**
 * How hard the artwork is pushed into the hero's dark register. Applied as an
 * overlay rather than image opacity: opacity blends the picture into a gradient
 * behind it and turns it to mush, an overlay keeps the subject's own contrast.
 */
const DIM: Record<NonNullable<HeroImage['dim']>, string> = {
  none: 'bg-transparent',
  soft: 'bg-surface-dark-from/25',
  strong: 'bg-surface-dark-from/55',
};

/* Shared by both hero branches. `sm:flex-wrap` because Button carries
   `whitespace-nowrap` — without it two long service labels overflow the copy
   column. The `mt` collapses with the lede's `mb` (block parent), so the visible
   band is the mt value, not the sum. */
const HERO_ACTIONS_ROW =
  'flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 mt-10 lg:mt-12';

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
  raiseCopy = false,
  fullBleed = false,
}: HeroProps) => {
  const hasMetrics = !!(metrics && metrics.length > 0);
  const hasImage = !!heroImage;
  const hasIllustration = !!heroIllustration;
  // The bare hero (no image, no illustration, no metrics) centres its copy —
  // the badge has to follow it, or it reads as a stray tag in the corner.
  const centeredCopy = !hasImage && !hasIllustration && !hasMetrics;

  /**
   * The eyebrow badge is a page-level label (service category, solution
   * family), not part of the headline stack — so it rides at the top of the
   * card rather than travelling with the vertically-centred copy. Rendered
   * once here so every hero variant, and therefore every service and solution
   * page, gets the same placement.
   */
  const badgeNode = badge ? (
    <div
      data-hero-badge
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/[0.12] border border-brand-400/[0.15] text-brand-300 text-label sm:text-copy-sm font-semibold tracking-wide backdrop-blur-sm"
    >
      {badgeHref ? (
        <Link href={badgeHref} className="hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full">
          {badge}
        </Link>
      ) : badge}
    </div>
  ) : null;

  /**
   * Copy bounds. In panel mode the card is already Container-width, so the copy
   * only needs the card's own inset padding. In full-bleed mode the card runs to
   * the viewport edges, so the copy re-enters the Container — otherwise the
   * headline would start at x=20 on a 2560px screen while every section below it
   * starts at 256.
   */
  const ContentBounds = ({ children }: { children: React.ReactNode }) => {
    // Badge sits above the centred block; the copy still centres against
    // whatever height is left, so the fold reads the same as before.
    const inner = (
      <>
        {badgeNode && (
          <div className={cn('mb-6 md:mb-8', centeredCopy && 'text-center')}>{badgeNode}</div>
        )}
        <div
          data-hero-raise={raiseCopy ? 'true' : undefined}
          className="flex flex-1 flex-col justify-center"
        >
          {children}
        </div>
      </>
    );

    return fullBleed ? (
      <Container
        width="default"
        data-hero-bounds
        className="relative z-10 flex flex-1 flex-col py-8 sm:py-10 md:py-14 lg:py-16"
      >
        {inner}
      </Container>
    ) : (
      <div
        data-hero-bounds
        className="relative z-10 flex flex-1 flex-col px-6 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 md:py-14 lg:py-16"
      >
        {inner}
      </div>
    );
  };

  const card = (
    <div
      // min-height lives in page-hero-fold.css, which resolves it against the
      // header and breadcrumb heights so the card closes the fold. flex-col is
      // what lets the branch below stretch into whatever height that yields —
      // the orbs and grid overlay are absolute, so they stay out of the flow.
      data-hero-card
      className={cn(
        `relative flex w-full flex-col overflow-hidden
          bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to`,
        !fullBleed &&
          'rounded-2xl lg:rounded-3xl border border-border-subtle shadow-brand-panel'
      )}
    >
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-56 bg-brand-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-48 bg-accent-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {hasImage ? (
        /* ── Background image with content overlay ── */
        <div className="relative z-10 flex flex-1 flex-col">
          {/*
            Right-aligned image well. Below lg the card is too narrow to
            split, so the image fills it and the vertical scrim below
            carries legibility. From lg it occupies the right 56% and
            dissolves leftward via a mask, which means a centre-composed
            source lands its subject in the *visible* half instead of behind
            the headline.
          */}
          <div
            className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[56%] xl:w-[54%]
              lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.28)_16%,rgba(0,0,0,0.85)_44%,black_66%)]
              pointer-events-none"
          >
            <Image
              src={heroImage!.src}
              alt={heroImage!.alt}
              fill
              priority
              fetchPriority="high"
              // Roughly half the viewport once the split kicks in.
              sizes="(min-width: 1024px) 56vw, 100vw"
              // Shown at real fidelity now (the dim overlay replaces the old
              // opacity-40), so it needs quality headroom. Still the LCP
              // element on every service and solution page.
              quality={72}
              style={{ objectPosition: heroImage!.focal ?? 'center' }}
              className="object-cover"
            />
            {/* Seats the artwork in the card's dark register. An overlay,
                not image opacity — opacity blends the picture into the
                gradient behind it and flattens the subject's contrast. */}
            <div className={cn('absolute inset-0', DIM[heroImage!.dim ?? 'soft'])} />
          </div>

          {/* Copy-side scrim. Vertical below lg (copy sits over the image
              there); horizontal from lg, where it only has to cover the
              handoff zone the mask is already fading. */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark-from/97 via-surface-dark-from/86 to-surface-dark-from/52 lg:hidden pointer-events-none" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-surface-dark-from/90 from-0% via-surface-dark-via/45 via-40% to-transparent to-62% pointer-events-none" />
          {/* Bottom edge fade into card background */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-dark-to/90 to-transparent pointer-events-none" />

          {/* Content overlay */}
          <ContentBounds>
            <div className="max-w-3xl lg:max-w-[52%]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-light mb-4 md:mb-5 leading-[1.15] tracking-tight text-balance">
                {headline}
              </h1>
              <p data-hero-lede className="text-lead text-text-light/75 leading-relaxed max-w-[56ch] mb-6 text-pretty">
                {subhead}
              </p>
              <div data-hero-actions className={HERO_ACTIONS_ROW}>
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
                <div data-hero-metrics className="flex flex-wrap gap-x-8 gap-y-3 mt-8 pt-6 border-t border-text-light/[0.12]">
                  {metrics!.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-xl md:text-2xl font-bold text-text-light">{metric.value}</div>
                      <div className="text-label text-text-subtle">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ContentBounds>
        </div>
      ) : (
        /* ── Standard layout: content left, illustration/metrics right ── */
        <ContentBounds>
          <div
            className={cn(
              'grid gap-10 md:gap-12 items-center',
              (hasIllustration || hasMetrics)
                ? 'lg:grid-cols-2'
                : 'lg:grid-cols-1 max-w-4xl mx-auto text-center'
            )}
          >
            <div>
              <h1 className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-bold text-text-light mb-4 md:mb-5 leading-[1.15] tracking-tight",
                (hasIllustration || hasMetrics) ? "lg:text-[3.25rem]" : "lg:text-6xl"
              )}>
                {headline}
              </h1>
              <p
                data-hero-lede
                className={cn(
                "text-lead text-text-subtle leading-relaxed max-w-[54ch]",
                (hasIllustration || hasMetrics) ? "mb-6" : "mb-8 mx-auto"
              )}>
                {subhead}
              </p>
              <div
                data-hero-actions
                className={cn(
                HERO_ACTIONS_ROW,
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
              {hasMetrics && (
                <div data-hero-metrics className="flex flex-wrap gap-x-8 gap-y-3 mt-8 pt-6 border-t border-border-subtle">
                  {metrics!.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-xl md:text-2xl font-bold text-brand-400">{metric.value}</div>
                      <div className="text-label text-text-subtle">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Right column: bespoke illustration, or nothing */}
            {hasIllustration && (
              <div className="flex items-center justify-center">
                {heroIllustration}
              </div>
            )}
          </div>
        </ContentBounds>
      )}
    </div>
  );

  return (
    <section
      data-section="hero"
      data-hero-bleed={fullBleed}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Panel mode sits the card on the shared page Container so its edges match
          every section below it. Was a hand-rolled px ladder, which put this card
          at left=49 on a 2560px screen while the sections under it started at 256. */}
      {fullBleed ? (
        card
      ) : (
        <Container
          // Panel mode runs one tier wider than the body Container. Below ~1400px
          // both tiers are viewport-bound so nothing moves; from 1920px up the
          // hero card gains ~64px of width per side, which is what stops it
          // reading as a narrow slab floating in dead margin on a large display.
          width="wide"
          className="pt-2 sm:pt-2.5 md:pt-3 lg:pt-4 pb-2 sm:pb-3 md:pb-4 lg:pb-5"
        >
          {card}
        </Container>
      )}
    </section>
  );
};
