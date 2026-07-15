'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { HomeIndustry } from '@/data/home/industries';
import { SECTION_Y } from '@/lib/section-spacing';

// ── Variant: Reveal Cards (Accenture-style) ──
// A grid of image cards. Image + title always visible (the glance). On hover
// or focus, a solid brand-colored panel wipes UP over the image — exactly the
// Accenture reveal — exposing the description, proof chips, and a circular
// ">" arrow. No rotation; the image never moves.
//
// Graceful degradation:
//  • prefers-reduced-motion → the panel crossfades in place instead of sliding.
//  • touch / < lg (no hover) → a static stacked card that shows everything.

// Column spans parallel to homeIndustries order, on a 6-col desktop grid:
// three cards across, then two wider cards.
const SPAN = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'sm:col-span-2 lg:col-span-3',
];

export function IndustriesSectionReveal({ industries }: { industries: HomeIndustry[] }) {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLUListElement>({ threshold: 0.1 });

  return (
    <section data-section="home-industries-reveal" className={`${SECTION_Y} bg-white`}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="scroll-step flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-6 mb-4 sm:mb-5"
        >
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-gray-900 mb-1.5 [text-wrap:balance]">
              Software Built Around Your Industry
            </h2>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 leading-relaxed max-w-xl">
              Vertical-specific software and AI, engineered for the way your industry actually
              operates — from the first patient record to the final mile.
            </p>
          </div>
          <Link
            href="/industry"
            className="inline-flex items-center shrink-0 text-brand-600 hover:text-brand-700 font-semibold text-xs sm:text-sm transition-colors duration-300"
          >
            View all industries
            <ArrowUpRight className="ml-0.5 h-4 w-4" />
          </Link>
        </div>

        {/* Card grid */}
        <ul
          ref={gridRef}
          className="scroll-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4"
        >
          {industries.map((industry, i) => (
            <li key={industry.href} className={SPAN[i]}>
              {/* ── Desktop / hover: Accenture reveal ── */}
              <Link
                href={industry.href}
                aria-label={`${industry.name} — ${industry.short}`}
                className="group relative hidden lg:block h-72 overflow-hidden rounded-2xl
                  outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                {/* Image (subtle push-in on hover) */}
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                {/* Rest scrim for title legibility */}
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

                {/* Resting title */}
                <h3 className="absolute inset-x-0 bottom-0 p-5 text-white font-black text-xl [text-wrap:balance]">
                  {industry.name}
                </h3>

                {/* The panel — wipes up over the image */}
                <div
                  className="absolute inset-0 flex flex-col justify-between p-5
                    bg-gradient-to-br from-brand-600 to-brand-800
                    translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0
                    transition-transform duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    motion-reduce:transition-opacity motion-reduce:duration-300
                    motion-reduce:translate-y-0 motion-reduce:opacity-0
                    motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
                >
                  <div>
                    <h3 className="text-white font-black text-xl mb-2 [text-wrap:balance]">
                      {industry.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">{industry.short}</p>
                  </div>

                  <div className="flex items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {industry.proof.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full
                            bg-white/15 border border-white/30 text-white tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Circular ">" arrow — always present; fills white on hover */}
                <span
                  aria-hidden
                  className="absolute bottom-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full
                    border border-white/40 bg-white/10 backdrop-blur-sm text-white
                    transition-colors duration-300 group-hover:bg-white group-hover:text-brand-700 group-hover:border-white"
                >
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>

              {/* ── Touch / < lg: static card, everything visible ── */}
              <Link
                href={industry.href}
                aria-label={`${industry.name} — ${industry.short}`}
                className="group lg:hidden flex flex-col overflow-hidden rounded-2xl
                  bg-gradient-to-br from-brand-600 to-brand-800 h-full
                  outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
                  active:scale-[0.99] transition-transform duration-200 motion-reduce:transition-none"
              >
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 text-white font-black text-lg">
                    {industry.name}
                  </h3>
                </div>
                <div className="flex flex-col grow p-4">
                  <p className="text-white/90 text-sm leading-relaxed mb-3">{industry.short}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {industry.proof.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full
                          bg-white/15 border border-white/30 text-white tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-white font-semibold text-sm">
                    Explore {industry.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
