'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { HomeIndustry } from '@/data/home/industries';
import { SECTION_Y } from '@/lib/section-spacing';

// ── Variant: Bento Spotlight ──
// All five industries visible at once in an asymmetric bento grid — the
// "glance". Hovering (or focusing) a tile spotlights it: its image pushes in,
// the scrim deepens, and the full detail (tagline + proof + CTA) slides up,
// while the siblings dim back so the eye lands on one thing at a time.
//
// On touch / small screens there is no hover, so every tile shows its detail
// by default; the spotlight interaction is a desktop enhancement, never a gate
// on the message.

// Layout spans parallel to homeIndustries order:
// healthcare · travel · real-estate · manufacturing · logistics
const LAYOUT = [
  'sm:col-span-2 lg:col-span-4 lg:row-span-2', // Healthcare — feature tile
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
];

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function IndustriesSectionShowcase({ industries }: { industries: HomeIndustry[] }) {
  // Which tile is under the pointer / keyboard focus, so the rest can dim.
  const [active, setActive] = useState<number | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      data-section="home-industries-showcase"
      className={`${SECTION_Y} bg-white`}
    >
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
            <ChevronRight className="ml-0.5 h-4 w-4" />
          </Link>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          className="scroll-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-3
            gap-2.5 lg:gap-3 auto-rows-[220px] sm:auto-rows-[230px] lg:auto-rows-fr lg:h-[620px]"
          onMouseLeave={() => setActive(null)}
        >
          {industries.map((industry, i) => {
            const featured = i === 0;
            const dimmed = active !== null && active !== i;
            return (
              <Link
                key={industry.href}
                href={industry.href}
                aria-label={`${industry.name} — ${industry.short}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                style={{ opacity: dimmed ? 0.55 : 1, transitionTimingFunction: EASE }}
                className={`group relative block overflow-hidden rounded-2xl min-h-0
                  outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
                  transition-opacity duration-500 motion-reduce:transition-none
                  ${LAYOUT[i]}`}
              >
                {/* Image — pushes in when this tile is spotlighted */}
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    lg:group-hover:scale-105 lg:group-focus-visible:scale-105
                    motion-reduce:transition-none motion-reduce:lg:group-hover:scale-100"
                />

                {/* Base scrim + a second layer that deepens on spotlight */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-black/0 lg:group-hover:bg-black/25 lg:group-focus-visible:bg-black/25 transition-colors duration-500 motion-reduce:transition-none"
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                  <h3
                    className={`text-white font-black [text-wrap:balance] mb-2
                      ${featured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg lg:text-xl'}`}
                  >
                    {industry.name}
                  </h3>

                  {/* Detail — always shown below lg; hover/focus-gated at lg+ */}
                  <div
                    className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none
                      opacity-100 translate-y-0
                      lg:opacity-0 lg:translate-y-3
                      lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                      lg:group-focus-visible:opacity-100 lg:group-focus-visible:translate-y-0"
                  >
                    <p
                      className={`text-white/85 leading-relaxed mb-3
                        ${featured ? 'text-sm lg:text-base max-w-md' : 'text-xs sm:text-sm max-w-sm'}`}
                    >
                      {industry.short}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {industry.proof.map((item) => (
                        <span
                          key={item}
                          className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:px-2.5 rounded-full
                            bg-white/10 backdrop-blur-sm border border-white/20 text-white tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors duration-300">
                      Explore {industry.name}
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
