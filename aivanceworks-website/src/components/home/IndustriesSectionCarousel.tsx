'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, Container, AutoplayToggle } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCarouselAutoplay } from '@/hooks/useCarouselAutoplay';
import type { HomeIndustry } from '@/data/home/industries';

// ── Variant: Category-card carousel ──
// Same card language as IndustriesSectionCatalog (image band fading into the
// dark surface, icon tile, tagline, CheckCircle2 proof list) but presented as
// a sliding track instead of a bento grid — mirroring the ServicesSection
// carousel mechanics (responsive visible count, autoplay, dots, arrows) so the
// two homepage catalogs read as one system.

const AUTOPLAY_MS = 4500;
/** Cap the proof list so every card in a row lands on the same height. */
const MAX_PROOF = 3;

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return count;
}

export function IndustriesSectionCarousel({ industries }: { industries: HomeIndustry[] }) {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const trackRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, industries.length - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const { containerRef, isPaused, setPaused, pause } = useCarouselAutoplay<HTMLDivElement>({
    onTick: nextSlide,
    intervalMs: AUTOPLAY_MS,
  });

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    pause();
  };

  const handleNext = () => {
    nextSlide();
    pause();
  };

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const totalDots = maxIndex + 1;

  return (
    <Section
      data-section="home-industries-carousel"
      tone="dark"
      size="md"
      withGrid
      /* Top padding halved off the `md` scale. This section follows
         WhyChooseUsSection, whose own bottom padding already contributes half
         the band — stacked, they put 116px above "Software Built Around Your
         Industry" at 1920px, which read as a gap rather than as a section
         start. Bottom keeps the standard `md` rhythm. */
      className="pt-4 md:pt-5 lg:pt-6 xl:pt-7 3xl:pt-8"
    >
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
            <h2 className="text-h2 font-bold text-text-light tracking-tight text-balance mb-3">
              Software Built Around Your <span className="text-brand-400">Industry</span>
            </h2>
            <p className="text-copy-sm md:text-copy text-text-light/70 leading-relaxed text-pretty">
              Vertical-specific software and AI, engineered for the way your industry actually
              operates — from the first patient record to the final mile.
            </p>
          </div>
          <Link
            href="/industry"
            className="group inline-flex items-center shrink-0 text-brand-300 hover:text-brand-200 font-semibold text-copy-sm transition-colors duration-300 py-1"
          >
            View all industries
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </Link>
        </div>

        {/* Carousel track. The outer div is the autoplay visibility target —
            `trackRef` is already taken by the scroll-reveal observer. */}
        <div ref={containerRef}>
        <div
          ref={trackRef}
          className="scroll-step overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Industries we serve"
          onMouseEnter={pause}
          onFocusCapture={pause}
        >
          <div
            className="flex items-stretch transition-transform duration-500 ease-in-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {industries.map((industry, idx) => {
              const Icon = getLucideIcon(industry.icon ?? 'HelpCircle');
              const isVisible = idx >= currentIndex && idx < currentIndex + visibleCount;
              return (
                <div
                  key={industry.href}
                  // Width is CSS-driven, not derived from `visibleCount`. SSR has no
                  // viewport, so the hook starts at 1 and only corrects after
                  // hydration — an inline width guaranteed a post-hydration layout
                  // shift on every tablet and desktop load. These breakpoints must
                  // stay in sync with useVisibleCount().
                  className="w-full flex-shrink-0 px-2 sm:w-1/2 md:px-2.5 lg:w-1/3"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${idx + 1} of ${industries.length}`}
                  aria-hidden={isVisible ? undefined : true}
                >
                  <Link
                    href={industry.href}
                    tabIndex={isVisible ? undefined : -1}
                    aria-label={`${industry.name} — ${industry.short}`}
                    className={cn(
                      'group flex h-full flex-col overflow-hidden rounded-2xl bg-surface-elevated border border-border-dark transition-all duration-300',
                      'outline-none hover:border-brand-400/50 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
                      'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark-to'
                    )}
                  >
                    {/* Image header band — fades into the dark card surface */}
                    <div className="relative w-full h-28 md:h-36 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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

                      <p className="text-copy-sm text-text-light/55 leading-relaxed mb-4 -mt-1">
                        {industry.tagline}
                      </p>

                      <ul className="grid gap-2 mb-4">
                        {industry.proof.slice(0, MAX_PROOF).map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className="h-4 w-4 mt-0.5 shrink-0 text-brand-400"
                              aria-hidden="true"
                            />
                            <span className="text-copy-sm text-text-light/80 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <span className="mt-auto inline-flex items-center gap-1.5 text-text-light font-semibold text-copy-sm">
                        {industry.hasPage
                          ? `Explore ${industry.name}`
                          : `Talk to us about ${industry.name}`}
                        <ArrowUpRight className="h-4 w-4 text-brand-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4 mt-5 md:mt-6">
          {/* Dots */}
          {/* The visible dot stays small, but the button itself is a 24px-tall
              hit area — an 8px target fails WCAG 2.5.8 / Lighthouse target-size. */}
          <div className="flex items-center">
            <AutoplayToggle
              isPaused={isPaused}
              onToggle={setPaused}
              label="industries carousel"
              className="mr-1 text-text-light/50 hover:text-brand-400"
            />
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurrentIndex(index);
                  pause();
                }}
                className="group flex h-6 min-w-6 items-center justify-center px-1"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              >
                <span
                  className={cn(
                    'block h-1.5 sm:h-2 rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'bg-brand-400 w-5 sm:w-7'
                      : 'bg-text-light/20 w-1.5 sm:w-2 group-hover:bg-text-light/40'
                  )}
                />
              </button>
            ))}
          </div>

          {/* Arrows + View all */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="p-1.5 sm:p-2 rounded-lg border border-border-dark text-text-light/50 hover:text-brand-300 hover:border-brand-400/50 transition-all duration-200"
                aria-label="Previous industries"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 sm:p-2 rounded-lg border border-border-dark text-text-light/50 hover:text-brand-300 hover:border-brand-400/50 transition-all duration-200"
                aria-label="Next industries"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <Link
              href="/industry"
              className="inline-flex items-center text-brand-300 hover:text-brand-200 font-semibold text-label text-copy-sm"
            >
              View all
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
