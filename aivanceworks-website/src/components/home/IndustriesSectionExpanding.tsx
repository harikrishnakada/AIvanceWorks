'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { HomeIndustry } from '@/data/home/industries';
import { SECTION_Y } from '@/lib/section-spacing';

// ── Variant: Expanding Panels (ELEKS-style) ──
// A row of image panels; the hovered/focused one grows to reveal its message
// while the rest compress to vertical labels. One decisive layout property
// (flex-grow) is animated, scoped to five elements.

// Shared easing — matches the site's scroll-reveal curve (ease-out-quint).
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function IndustriesSectionExpanding({ industries }: { industries: HomeIndustry[] }) {
  // First panel starts expanded so the section reads fully without interaction.
  const [active, setActive] = useState(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const panelsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const stackRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section data-section="home-industries-expanding" className={`${SECTION_Y} bg-white`}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-step text-center max-w-3xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-1 sm:mb-2">
            Software Built Around Your Industry
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
            Vertical-specific software and AI, engineered for the way your industry actually
            operates — from the first patient record to the final mile.
          </p>
        </div>

        {/* ── Desktop: expanding panels ── */}
        <div
          ref={panelsRef}
          className="scroll-step hidden lg:flex gap-2 h-[440px] xl:h-[500px]"
          onMouseLeave={() => setActive(0)}
        >
          {industries.map((industry, i) => {
            const isActive = i === active;
            return (
              <Link
                key={industry.href}
                href={industry.href}
                aria-label={`${industry.name} — ${industry.short}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group relative block min-w-0 overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 transition-[flex-grow] duration-700 motion-reduce:transition-none"
                style={{ flexGrow: isActive ? 4 : 1, flexBasis: 0, transitionTimingFunction: EASE }}
              >
                {/* Image — slow zoom on the active panel */}
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={`object-cover transition-transform duration-[1200ms] motion-reduce:transition-none motion-reduce:scale-100 ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  style={{ transitionTimingFunction: EASE }}
                />

                {/* Legibility scrim */}
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 transition-opacity duration-700 motion-reduce:transition-none ${
                    isActive ? 'opacity-100' : 'opacity-90'
                  }`}
                />

                {/* Collapsed label — vertical, fades out as the panel expands */}
                <div
                  className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-300 motion-reduce:transition-none ${
                    isActive ? 'opacity-0' : 'opacity-100 delay-200'
                  }`}
                >
                  <span className="block [writing-mode:vertical-rl] rotate-180 text-white font-bold text-sm xl:text-base tracking-wide whitespace-nowrap [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
                    {industry.name}
                  </span>
                </div>

                {/* Expanded content — rises in after the panel has grown */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-6 xl:p-8 transition-all duration-500 motion-reduce:transition-none motion-reduce:translate-y-0 ${
                    isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h3 className="text-white font-bold text-xl xl:text-2xl mb-2 whitespace-nowrap">
                    {industry.name}
                  </h3>
                  <p className="text-white/85 text-sm xl:text-base leading-relaxed max-w-md mb-4">
                    {industry.short}
                  </p>
                  <span className="inline-flex items-center text-white font-semibold text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors duration-300">
                    Explore {industry.name}
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transition-none" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Mobile / tablet: stacked image cards ── */}
        <div ref={stackRef} className="scroll-stagger lg:hidden flex flex-col gap-2.5 sm:gap-3">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              aria-label={`${industry.name} — ${industry.short}`}
              className="group relative block h-40 sm:h-48 md:h-52 overflow-hidden rounded-xl sm:rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-[0.99] transition-transform duration-200 motion-reduce:transition-none"
            >
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                style={{ transitionTimingFunction: EASE }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-white/85 text-xs sm:text-sm leading-snug line-clamp-2">
                    {industry.short}
                  </p>
                </div>
                <span className="shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white group-hover:bg-white group-hover:text-gray-900 transition-colors duration-300 motion-reduce:transition-none">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer link */}
        <div className="flex justify-end mt-4 sm:mt-5">
          <Link
            href="/industry"
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold text-xs sm:text-sm"
          >
            View all industries
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
