'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const heroSlides = [
  {
    src: '/images/home_hero/home_hero_slide3b.jpg',
    alt: 'Engineering team collaborating on enterprise software architecture',
  },
  {
    src: '/images/home_hero/office_working.jpg',
    alt: 'Developers building cloud applications in a modern office',
  },
  {
    src: '/images/industries/msc/hero.jpg',
    alt: 'Automated manufacturing and supply chain operations',
  },
  {
    src: '/images/home_hero/planes_parked.jpg',
    alt: 'Commercial aircraft on an airport apron at dawn',
  },
  {
    src: '/images/home_hero/twisted_build.jpg',
    alt: 'Contemporary high-rise office tower seen from below',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Only slides that have actually been shown get mounted. All five slides are
  // stacked at `inset-0`, so mounting them up front puts five full-viewport
  // images in the viewport at once — the browser fetches every one of them and
  // they starve the LCP image of bandwidth on mobile connections.
  const [mountedSlides, setMountedSlides] = useState<number[]>([0]);

  useEffect(() => {
    // An auto-advancing background is decorative motion; honour the OS setting.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % heroSlides.length;
        setMountedSlides((mounted) =>
          mounted.includes(next) ? mounted : [...mounted, next]
        );
        return next;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    // The hero owns no height of its own: `flex-1` makes it absorb whatever the
    // "Our Promise" statement leaves over inside the one-viewport fold wrapper
    // in app/page.tsx. That is what keeps hero + statement — and nothing past
    // them — in the landing view at every device height. A fixed height or a
    // viewport fraction here breaks it in one direction or the other: too tall
    // and the statement is cut off, too short and the next section leaks in.
    <section
      data-section="home-hero"
      className="relative bg-gray-950 overflow-hidden
        flex flex-1 flex-col"
    >
      {/* Outer wrapper */}
      <div className="relative flex-1 flex flex-col w-full">
        {/* Hero stage — full-bleed, no frame */}
        <div
          className="flex flex-1 flex-col relative w-full
            sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]
            overflow-hidden"
        >
          {/* Sliding background images — only slides that have been reached are
              mounted, so the first paint downloads exactly one hero image. */}
          {heroSlides.map((slide, index) =>
            mountedSlides.includes(index) ? (
              <div
                key={slide.src}
                className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
                style={{ opacity: index === currentSlide ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={index === 0 ? slide.alt : ''}
                  aria-hidden={index === 0 ? undefined : true}
                  fill
                  // Without `sizes`, Next picks the 3840px srcset candidate for
                  // a `fill` image even on a 412px-wide phone.
                  sizes="100vw"
                  quality={70}
                  className="object-cover"
                  priority={index === 0}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </div>
            ) : null
          )}
          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
          {/* Center scrim — the slides vary a lot in brightness; this holds
              body-text contrast on the light ones without flattening the photo */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,0,0,0.45),transparent_75%)]" />

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/3 w-[500px] h-56 bg-brand-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-48 bg-accent-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Badge — floats at top-center of the dark card, above the headline */}
          <div className="absolute top-4 sm:top-5 md:top-6 left-1/2 -translate-x-1/2 z-20">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full whitespace-nowrap
                bg-brand-500/[0.12] border border-brand-400/[0.20]
                text-brand-300 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide
                backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400" />
              </span>
              AI-Powered Software
            </div>
          </div>

          {/* Card body — the data-hero-* hooks below are targeted by the
              short-viewport compaction rules in styles/first-fold.css, which
              key off viewport HEIGHT (a 1280x720 laptop and a 375x667 phone
              have the same problem and no width breakpoint can express it). */}
          <div
            data-hero-body
            className="relative flex flex-1 flex-col
              px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28
              pt-12 sm:pt-14 md:pt-16 lg:pt-16
              pb-9 sm:pb-14 md:pb-16 lg:pb-16"
          >
            {/* Hero content */}
            <div
              className="flex flex-1 flex-col items-center justify-center text-center max-w-5xl mx-auto w-full"
            >
              {/* Headline — no forced <br />; the copy is long enough that a hard
                  break overflows narrow viewports. `text-balance` splits it
                  evenly at every width instead. */}
              <h1
                className="text-[28px] leading-[1.1] sm:text-[40px] md:text-[52px] lg:text-[58px] xl:text-[64px]
                  font-black tracking-tight text-white text-balance"
              >
                Our software serves{' '}
                <span className="text-brand-300">
                  Founders and Businesses
                </span>
              </h1>

              {/* Subheadline — pushed down toward the CTA buttons */}
              <p
                data-hero-sub
                className="text-sm leading-snug sm:text-base sm:leading-relaxed md:text-lg lg:text-xl
                  text-white/75 max-w-2xl mx-auto text-pretty
                  mt-4 sm:mt-6 md:mt-7 mb-6 sm:mb-9 md:mb-10"
              >
                {SITE_CONFIG.name} is a custom software development company launched in 2026,
                offering services and packages in Product Development, AI Development,
                SaaS Development and several other development services.
              </p>

              {/* CTA Buttons */}
              <div
                data-hero-cta
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none sm:w-auto mx-auto"
              >
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-brand-600 text-white hover:bg-brand-500
                    shadow-glow-sm
                    text-sm sm:text-base md:text-lg px-6 sm:px-8
                    h-11 sm:h-12 md:h-13 font-bold rounded-xl transition-all duration-300
                    justify-center"
                >
                  <Link href="/book-consultation" className="inline-flex items-center justify-center w-full sm:w-auto">
                    <span className="relative">
                      Book an Appointment
                      <ArrowRight className="absolute left-full top-1/2 -translate-y-1/2 ml-2 h-4 w-4 shrink-0" />
                    </span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-white/20 text-white
                    hover:border-white/35 hover:bg-white/[0.06]
                    text-sm sm:text-base md:text-lg px-6 sm:px-8
                    h-11 sm:h-12 md:h-13 rounded-xl transition-all duration-300
                    justify-center"
                >
                  <Link href="/services" className="inline-flex items-center justify-center w-full sm:w-auto">
                    <span className="relative">
                      <Play className="absolute right-full top-1/2 -translate-y-1/2 mr-2 h-3.5 w-3.5 shrink-0" />
                      View Our Services
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll cue — the hero now owns the full fold, so signal there's more below */}
          <a
            href="#below-hero"
            aria-label="Scroll to page content"
            className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-20
              hidden sm:flex flex-col items-center gap-2 group
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
              focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full p-1"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 group-hover:text-white/90">
              Scroll
            </span>
            <span className="relative block h-9 w-px overflow-hidden bg-gradient-to-b from-white/35 to-transparent">
              <span className="hero-scroll-dot absolute inset-x-0 top-0 block h-2.5 w-px bg-white/90" />
            </span>
          </a>
        </div>
      </div>
      <span id="below-hero" className="sr-only scroll-mt-20" />
    </section>
  );
}
