'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getLucideIcon } from '@/lib/icons';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// ── Industry index: Reveal Cards ──
// The Accenture-style reveal from IndustriesSectionReveal, retuned for the
// /industry index and moved onto the page's own token palette (dark surface +
// brand ramp) instead of the homepage variant's hardcoded white/gray.
//
// Differences from the homepage variant, all in service of "smooth, not drastic":
//  • The name + icon + arrow live ABOVE the panel and never move. Only colour
//    and supporting copy animate, so nothing jumps under the cursor.
//  • The panel is the photograph itself, defocused behind a dark scrim, rather
//    than an opaque wipe or a colour wash. The card never changes subject; it
//    just pulls focus. Brand colour stays on the arrow, chips, and CTA.
//  • Easing is ease-out-quint over 600ms with the body copy trailing on a short
//    stagger, so the reveal settles rather than snaps.
//  • No hover? (touch, coarse pointer) The panel is simply already up — one
//    markup tree, no duplicated mobile card. That fallback lives in
//    scroll-animations.css under `.reveal-card-panel` / `.reveal-card-body`;
//    see the note there for why it isn't a Tailwind arbitrary variant.

/** Proof chips beyond this crowd the panel at the shortest card height. */
const MAX_PROOF = 3;

export interface IndustryRevealCard {
  slug: string;
  name: string;
  /** Sentence that carries the message once the panel is up. */
  description: string;
  /** Capability chips in the buyer's vocabulary. */
  proof: string[];
  image: string;
  alt: string;
  /** Lucide icon name — the industry's identity across the site. */
  icon: string;
  /** Deep link to the industry's own page (secondary affordance). */
  href: string;
  /** Where the card itself goes — the booking flow. */
  bookHref: string;
}

/** Shared easing + timing so every layer of the reveal moves as one gesture. */
const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

/** Panel body copy: hidden at rest, lifted in behind the static header. */
const RISE_IN = cn(
  'translate-y-2.5 opacity-0',
  'group-hover:translate-y-0 group-hover:opacity-100',
  'group-focus-within:translate-y-0 group-focus-within:opacity-100',
  // Tailwind v4 emits `translate-*` as the standalone `translate` property, so
  // `transition-transform` alone would leave the lift un-animated.
  'transition-[translate,opacity] duration-500',
  EASE,
  'motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100'
);

export function IndustryRevealGrid({ industries }: { industries: IndustryRevealCard[] }) {
  const gridRef = useScrollReveal<HTMLUListElement>({ threshold: 0.1 });

  return (
    <ul
      ref={gridRef}
      className="scroll-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
    >
      {industries.map((industry) => {
        const Icon = getLucideIcon(industry.icon ?? 'Building2');

        return (
          <li
            key={industry.slug}
            className={cn(
              'reveal-card group relative isolate h-[19rem] sm:h-[20rem] lg:h-[21rem]',
              'overflow-hidden rounded-2xl border border-border-dark',
              'transition-[transform,box-shadow,border-color] duration-500',
              EASE,
              'hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-brand-panel-lg',
              'focus-within:-translate-y-1 focus-within:border-brand-400/40',
              'motion-reduce:transition-none motion-reduce:hover:translate-y-0'
            )}
          >
            {/* Photograph — a slow drift, never a lurch. */}
            <Image
              src={industry.image}
              alt={industry.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={cn(
                'object-cover scale-[1.01]',
                'transition-transform duration-[900ms]',
                EASE,
                'group-hover:scale-[1.06] group-focus-within:scale-[1.06]',
                'motion-reduce:transition-none motion-reduce:group-hover:scale-[1.01]'
              )}
            />

            {/* Rest scrims: top keeps the header legible, bottom seats the card
                on the dark section instead of floating on it. It clears as the
                panel arrives — the panel's backdrop-filter samples everything
                behind it, so leaving this in place would dim the photograph
                twice and the blurred image would read as flat black.
                Explicit `black/NN`: `surface-dark/NN` resolves to transparent
                black in this theme's var-indirection, so the tint would be a
                lie about what actually paints. */}
            <div
              aria-hidden="true"
              className={cn(
                'reveal-card-scrim absolute inset-0 bg-gradient-to-b from-black/75 via-black/10 to-black/55',
                'transition-opacity duration-500',
                EASE,
                'group-hover:opacity-0 group-focus-within:opacity-0',
                'motion-reduce:transition-none'
              )}
            />

            {/* The panel — a brand wash that rises behind the header. */}
            <div
              aria-hidden="true"
              className={cn(
                'reveal-card-panel absolute inset-0',
                // The panel IS the photograph, defocused. Contrast comes mostly
                // from `backdrop-brightness`, which scales the image down in
                // proportion to how bright it is — a flat scrim heavy enough to
                // tame the brightest photo turns every other one to mud. The
                // tint only deepens toward the CTA rule at the floor.
                'backdrop-blur-2xl backdrop-brightness-90 backdrop-saturate-125',
                'bg-gradient-to-t from-black/45 via-black/24 to-black/16',
                'translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0',
                'transition-transform duration-[600ms]',
                EASE,
                // Reduced motion: crossfade in place, no travel.
                'motion-reduce:transition-opacity motion-reduce:duration-200',
                'motion-reduce:translate-y-0 motion-reduce:opacity-0',
                'motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100'
              )}
            />

            {/* Whole-card target: the booking flow. Sits above the panel so the
                entire surface is clickable, below the inline links below it. */}
            <Link
              href={industry.bookHref}
              aria-label={`Book a consultation about ${industry.name}`}
              className={cn(
                'absolute inset-0 z-20 rounded-2xl outline-none',
                'focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-inset'
              )}
            >
              <span className="sr-only">{industry.description}</span>
            </Link>

            {/* Header — anchored, never animates position. */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-3 p-5">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
                    'border border-white/20 bg-white/10 text-text-light',
                    'transition-colors duration-500 group-hover:border-white/40 group-hover:bg-white/20'
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="text-lg lg:text-xl font-semibold leading-tight text-text-light text-balance [text-shadow:0_1px_10px_rgb(0_0_0/0.6)]">
                  {industry.name}
                </h2>
              </div>

              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                  'border border-white/25 bg-white/10 text-text-light',
                  'transition-colors duration-500',
                  'group-hover:border-white group-hover:bg-white group-hover:text-brand-700',
                  'group-focus-within:border-white group-focus-within:bg-white group-focus-within:text-brand-700'
                )}
              >
                <ArrowUpRight
                  className={cn(
                    'h-[1.05rem] w-[1.05rem] transition-transform duration-500',
                    EASE,
                    'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                    'motion-reduce:transition-none motion-reduce:group-hover:translate-x-0'
                  )}
                />
              </span>
            </div>

            {/* Panel body — sits directly under the anchored header so the copy
                reads as one block, with the CTA pinned to the card's floor.
                z-30 (not z-10) so the secondary link below isn't trapped
                beneath the whole-card overlay's stacking context. */}
            {/* The text shadow is contrast insurance, not decoration: the copy
                sits on a photograph, and a future category-card shot could be
                far brighter than today's six. */}
            <div className="reveal-card-body pointer-events-none absolute inset-0 z-30 flex flex-col gap-3 p-5 pt-[4.5rem] [text-shadow:0_1px_10px_rgb(0_0_0/0.6)]">
              <p className={cn('text-sm leading-relaxed text-text-light/90', RISE_IN, 'delay-[140ms]')}>
                {industry.description}
              </p>

              <ul className={cn('flex flex-wrap gap-1.5', RISE_IN, 'delay-[220ms]')}>
                {industry.proof.slice(0, MAX_PROOF).map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-text-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className={cn(
                  'mt-auto flex items-center justify-between gap-3 border-t border-white/20 pt-3',
                  RISE_IN,
                  'delay-[300ms]'
                )}
              >
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-light">
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>

                {/* Sibling link (not nested) so the industry page keeps an
                    entry point from its own index. */}
                <Link
                  href={industry.href}
                  className={cn(
                    'pointer-events-auto relative shrink-0 rounded-sm text-xs font-medium',
                    'text-text-light/75 underline underline-offset-4 decoration-white/30',
                    'transition-colors hover:text-text-light hover:decoration-white',
                    'outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                  )}
                >
                  Industry overview
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
