'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Card supplies the shell only (radius, border, shadow). The header/content
// sub-components are gone: their padding contract assumes a stacked light card,
// and this tile layers copy over a full-bleed image instead.
import { Card } from '@/components/ui/card';
import { Bot, Cloud, Code2, Database, Globe, Settings, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SECTION_Y, CARD_SLIDE_X } from '@/lib/section-spacing';
import { useCarouselAutoplay } from '@/hooks/useCarouselAutoplay';
import { AutoplayToggle, IconTile } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';

// Card titles are intentionally broader than the pages they link to — each one
// targets the closest registered page in src/data/services. Retitle them if
// you'd rather they match the destination pages exactly.
//
// `image` mirrors the industries card-image convention (see
// IndustriesSectionCarousel): a purpose-shot category-card asset, distinct from
// the service page hero. Only data-engineering has one today. Cards without an
// image render a brand-native blueprint band in the same dark register as that
// shot rather than a stock photo — the existing /images/services/*/hero.jpg
// files are documented placeholders (warm portrait stock) and would clash. Drop
// a landscape ~1280x640 category-card.jpg into the matching folder and add the
// `image`/`imageAlt` pair here to swap the band for a photo.
//
// No per-card icon colour: the tiles use the shared IconTile primitive on its
// token-backed `brand` variant. The previous sky/emerald/amber/rose/violet
// literals were raw Tailwind palette values, so five of the six tiles ignored
// data-theme entirely and stayed blue-and-amber under the purple theme.
type Service = {
  title: string;
  description: string;
  icon: typeof Bot;
  href: string;
  image?: string;
};

const services: Service[] = [
  {
    title: 'AI & ML Development',
    description:
      'Deploy production-ready AI agents, RAG frameworks, and LLM integrations that automate workflows and enhance decision-making with Azure AI Foundry.',
    icon: Bot,
    href: '/services/ai-development',
    image: '/images/services/ai-development/cateogry-card_AIML.jpg',
  },
  {
    title: 'Cloud Engineering',
    description:
      'Migrate and optimize your infrastructure on Azure or AWS. Our certified architects design scalable systems that reduce cloud costs by up to 50%.',
    icon: Cloud,
    href: '/services/cloud-infrastructure',
    image: '/images/services/cloud-engineering/cateogry-card_CE.jpg',
  },
  {
    title: 'SaaS Development',
    description:
      'Multi-tenant architecture, subscription billing, and scalable infrastructure — engineered as a platform, not patched onto a web app after launch.',
    icon: Code2,
    href: '/services/saas-development',
    image: '/images/services/SaaS-development/cateogry-card_SAAS.jpg',
  },
  {
    title: 'Data Engineering',
    description:
      'Transform raw data into actionable insights with ETL pipelines, Power BI dashboards, and Azure Synapse. Make data-driven decisions faster.',
    icon: Database,
    href: '/services/data-engineering',
    // Filename typo ("cateogry") is the asset as delivered — keep the two in
    // sync if the file is ever renamed.
    image: '/images/services/data-engineering/cateogry-card.jpg',
  },
  {
    title: 'Enterprise Integration',
    description:
      'Modernize legacy systems and integrate disparate applications with minimal disruption. API integrations, migrations, and service bus implementations.',
    icon: Globe,
    href: '/services/enterprise-software-development',
    image: '/images/services/enterprise-ai-development/cateogry-card_EI.jpg',
  },
  {
    title: 'DevOps & CI/CD',
    description:
      'Accelerate deployments with Azure DevOps, GitHub Actions, and Kubernetes. Automate testing, reduce errors, and ship features faster.',
    icon: Settings,
    href: '/services/devops',
    image: '/images/services/cicd/cateogry-card.jpg',
  },
];

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

/** Drag distance, in px, that commits to a slide change instead of snapping back. */
const SWIPE_COMMIT_PX = 48;

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = services.length - visibleCount;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const { containerRef, isPaused, setPaused, pause } = useCarouselAutoplay<HTMLElement>({
    onTick: nextSlide,
    intervalMs: 4000,
  });

  // Every manual control routes through these two, so "the user took over"
  // is expressed in exactly one place: touching the carousel stops autoplay
  // for good. Re-starting it is the toggle's job, not an implicit timeout —
  // content that resumes moving under you is the thing WCAG 2.2.2 is about.
  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    pause();
  }, [maxIndex, pause]);

  const goNext = useCallback(() => {
    nextSlide();
    pause();
  }, [nextSlide, pause]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      pause();
    },
    [pause]
  );

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const totalDots = maxIndex + 1;

  /* ---- Drag / swipe -------------------------------------------------- */
  // Pointer events rather than touch events, so a mouse drag works too. No
  // `setPointerCapture`: capturing retargets the subsequent `click`, which on
  // this carousel lands on a card `<Link>` — capture would break navigation.
  // Window listeners give the same "keep tracking outside the element"
  // behaviour without touching the click target.
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: React.PointerEvent) => {
    // Primary button only; let the browser own right-click and middle-click.
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    dragStartX.current = event.clientX;
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (event: PointerEvent) => {
      if (dragStartX.current === null) return;
      const dx = event.clientX - dragStartX.current;
      // Past ~4px this is a drag, not a click. Latch it now so the flag is
      // already set by the time the click fires on release.
      if (Math.abs(dx) > 4) suppressClick.current = true;
      setDragOffset(dx);
    };

    const handleEnd = (event: PointerEvent) => {
      const startX = dragStartX.current;
      dragStartX.current = null;
      setIsDragging(false);
      setDragOffset(0);
      if (startX === null) return;

      const dx = event.clientX - startX;
      if (dx <= -SWIPE_COMMIT_PX) goNext();
      else if (dx >= SWIPE_COMMIT_PX) goPrev();
    };

    const handleCancel = () => {
      dragStartX.current = null;
      setIsDragging(false);
      setDragOffset(0);
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleEnd);
    window.addEventListener('pointercancel', handleCancel);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleEnd);
      window.removeEventListener('pointercancel', handleCancel);
    };
  }, [isDragging, goNext, goPrev]);

  // Runs in the capture phase, so it beats the `<Link>`'s own handler: a drag
  // that happens to end over a card must not navigate.
  const handleClickCapture = (event: React.MouseEvent) => {
    if (!suppressClick.current) return;
    suppressClick.current = false;
    event.preventDefault();
    event.stopPropagation();
  };

  /* ---- Keyboard ------------------------------------------------------ */
  // No `tabIndex` on the region: the arrow buttons and card links are already
  // in the tab order, and this fires whenever focus is anywhere inside. Adding
  // a focusable wrapper would only buy an extra empty tab stop.
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <section ref={containerRef} data-section="home-services" className={`${SECTION_Y} bg-white`}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
          <div className="w-full text-center max-w-3xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-1 sm:mb-2">
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
                Custom {' '}
              </span>
              Software Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
              From AI strategy to production deployment, we deliver the full spectrum of software development services your business needs to thrive.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={viewportRef}
          className="overflow-hidden touch-pan-y select-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="Software development services"
          onPointerDown={handlePointerDown}
          onClickCapture={handleClickCapture}
          onKeyDown={handleKeyDown}
        >
          <div
            // Polite only once autoplay has stopped. While the timer is running
            // this would announce a new slide every four seconds, which is noise,
            // not information — the APG carousel pattern calls for exactly this swap.
            aria-live={isPaused ? 'polite' : 'off'}
            className={cn(
              'flex',
              isDragging
                ? 'transition-none'
                : 'transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none'
            )}
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% + ${dragOffset}px))`,
            }}
          >
            {services.map((service, index) => {
              const isSlideVisible = index >= currentIndex && index < currentIndex + visibleCount;
              return (
              <div
                key={service.href}
                // CSS-driven width, not `visibleCount`: the hook starts at 1 on the
                // server and corrects after hydration, so an inline width shifted
                // the layout on every tablet/desktop load. Keep these breakpoints
                // in sync with useVisibleCount().
                className={`w-full flex-shrink-0 sm:w-1/2 lg:w-1/3 ${CARD_SLIDE_X}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${services.length}`}
                aria-hidden={isSlideVisible ? undefined : true}
              >
                {/* Off-screen cards leave the tab order. Otherwise tabbing into
                    one scrolls the overflow-hidden viewport sideways, which
                    desyncs it from the translate and leaves the track stranded
                    mid-slide. */}
                <Link
                  href={service.href}
                  tabIndex={isSlideVisible ? undefined : -1}
                  // Before this the card fell back to the UA outline — a
                  // sub-1px hairline that all but vanished against the card
                  // border. brand-600, not the brand-500 the dots and arrows
                  // use: the shipping `black` theme lifts brand-500 to #60a5fa,
                  // which is 2.54:1 on a white card and misses the 3:1 WCAG
                  // 1.4.11 asks of a focus indicator. brand-600 clears it in
                  // every theme (5.17:1 blue/black). Focus rings are never
                  // visible two at a time, so the one-step difference from the
                  // neighbouring controls cannot be perceived.
                  className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-white"
                  // A drag that starts on a card must not also start a native
                  // image/link drag — that hijacks the pointer stream mid-swipe.
                  draggable={false}
                >
                  {/* Full-bleed image tile. The previous split card gave the
                      picture a 144px band — a 2.96:1 letterbox for a 16:9
                      asset — and then covered its lower half with the fade into
                      the white body, so roughly a third of the shot survived.
                      Here the image is the card: it runs edge to edge and the
                      copy sits on a scrim over it.

                      This is deliberately NOT the industries construction any
                      more. That pattern works there because its fade lands on a
                      dark card, which reads as vignetting rather than erasure,
                      and because its photos are edge-tolerant. Neither holds
                      for a centred radial burst fading into white. */}
                  <Card
                    className={cn(
                      'relative isolate flex h-full min-h-[360px] md:min-h-[400px] flex-col justify-end',
                      'overflow-hidden rounded-xl border border-border-dark shadow-card-sm',
                      'transition-all duration-300 group-hover:border-brand-400/50 group-hover:shadow-brand-card',
                      // Base tone sits under both variants: it is the whole
                      // surface on a drawn card, and the letterbox backstop on
                      // a photographed one whose aspect does not match the tile.
                      index % 2 === 0
                        ? 'bg-gradient-to-br from-brand-900 via-surface-dark-via to-surface-dark-to'
                        : 'bg-gradient-to-bl from-brand-900 via-surface-dark-via to-surface-dark-to'
                    )}
                  >
                    {service.image ? (
                      // Sized to the image's own aspect, not stretched to the
                      // card's. Filling a 1.07 portrait tile with a 1.78 asset
                      // made object-cover throw away 40% of the width and scale
                      // what was left up by 1.11 — the picture read as zoomed
                      // in. An aspect-video box matches the 16:9 source
                      // exactly, so the whole frame survives at 1:1. It still
                      // bleeds to the top and both sides; the scrim carries its
                      // lower edge into the copy, so there is no visible seam.
                      <div className="absolute inset-x-0 top-0 aspect-video overflow-hidden">
                        <Image
                          src={service.image}
                          // Decorative, so the whole set announces
                          // consistently. The image is atmosphere; the title
                          // and description already name the service. With a
                          // real alt here this one card's accessible name
                          // opened with "Thousands of luminous data streams…"
                          // while its five image-less siblings opened with
                          // their service name. It also matches the drawn
                          // tiles, which are aria-hidden for the same reason.
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                      </div>
                    ) : (
                      // Blueprint tile, held in the same dark register as the
                      // photographed cards so a mixed row still reads as one
                      // set. Decorative only — the card's name and description
                      // carry the meaning.
                      <div aria-hidden="true" className="absolute inset-0">
                        {/* Grid is written literally rather than reusing
                            --brand-grid-light: that token is 1.2% white, tuned
                            for a full-bleed section, and disappears at card
                            scale. */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
                        <div
                          className={cn(
                            'absolute -top-10 h-56 w-72 rounded-full bg-brand-500/40 blur-3xl',
                            index % 2 === 0 ? '-left-8' : '-right-8'
                          )}
                        />
                        <div
                          className={cn(
                            'absolute top-16 h-44 w-56 rounded-full bg-accent-500/25 blur-3xl',
                            index % 2 === 0 ? 'right-0' : 'left-0'
                          )}
                        />
                        {/* Concentric rings echoing the radial burst in the
                            data-engineering shot, so the drawn tiles rhyme with
                            the photographed one. The centre is pushed off the
                            edge — a complete circle reads as a radar target
                            rather than texture. */}
                        <div
                          className={cn(
                            'absolute -top-24 h-[26rem] w-[26rem] rounded-full opacity-[0.13]',
                            'bg-[repeating-radial-gradient(circle_at_center,transparent_0,transparent_15px,rgba(255,255,255,0.55)_15px,rgba(255,255,255,0.55)_16px)]',
                            'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105',
                            'motion-reduce:transition-none motion-reduce:group-hover:scale-100',
                            index % 2 === 0 ? '-right-32' : '-left-32'
                          )}
                        />
                      </div>
                    )}

                    {/* Scrim, weighted to what is underneath it.

                        Over a photo the stops are set by contrast rather than
                        by eye: at the top of the copy block the scrim is ~0.88
                        opaque, which holds text-light above 4.5:1 even where it
                        crosses the brightest pixel a photo can supply (pure
                        white). Above the copy it falls away fast so the picture
                        stays open.

                        A drawn tile needs almost none of that. Its darkest base
                        already gives text-light ~10:1, so the photo-strength
                        scrim bought no legibility and simply crushed the grid,
                        glows, and rings into a flat near-black rectangle. This
                        one only seats the copy. */}
                    <div
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-0 bg-gradient-to-t',
                        service.image
                          ? 'from-surface-dark/[0.97] from-0% via-surface-dark/[0.88] via-[42%] to-surface-dark/[0.18]'
                          : 'from-surface-dark/[0.85] from-0% via-surface-dark/[0.45] via-[45%] to-transparent'
                      )}
                    />

                    {/* Docked to the corner rather than stacked above the
                        title. In the copy block it rode on top of a
                        variable-length description, so the six tiles landed at
                        six different heights across a row. Up here they align,
                        and the copy block loses ~60px — which is 60px more
                        picture above the scrim. */}
                    {/* The stock `glass` variant is a 3%-white fill, which is
                        fine on a known dark panel but not here: the tile sits
                        in the corner where the scrim is weakest (~0.25), so
                        over a light photograph the fill and its brand-400 glyph
                        would both wash out. The overrides give it a dark
                        backing of its own — twMerge lets these win over the
                        variant — so the tile stays legible against any image
                        that lands behind it. */}
                    <IconTile
                      icon={service.icon}
                      size="md"
                      variant="glass"
                      className="absolute top-5 left-5 md:top-6 md:left-6 z-10 bg-surface-dark/70 text-brand-200 ring-1 ring-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />

                    {/* Kept tight on purpose. Every pixel this block spends is
                        a pixel of picture under the scrim. */}
                    <div className="relative flex flex-col p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-semibold text-text-light leading-snug text-balance">
                        {service.title}
                      </h3>
                      {/* Light type on a dark ground reads lighter than it
                          measures, so this gets a touch more leading than the
                          same copy had on white.

                          The four-line floor keeps the block a constant height.
                          These descriptions are all within 17 characters of
                          each other but wrap to either three or four lines
                          depending on where the words break, which left the
                          titles sitting at different heights across a row. `lh`
                          tracks whatever line-height the breakpoint resolves
                          to, so this needs no per-breakpoint pixel value; where
                          the unit is unsupported the floor is simply ignored
                          and the layout falls back to today's behaviour. */}
                      <p className="mt-1.5 min-h-[4lh] text-sm md:text-base text-text-light/85 leading-relaxed text-pretty">
                        {service.description}
                      </p>
                      {/* Always visible. It used to be opacity-0 until hover,
                          which meant the only affordance telling you the card
                          was a link never appeared on a touch device or for a
                          keyboard user. Hover now moves the arrow, not the
                          row's existence. */}
                      <span className="mt-4 inline-flex items-center text-brand-300 font-semibold text-sm">
                        Learn more
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-4 sm:mt-5">
          {/* Dots */}
          {/* 24px hit area around a small visual dot — see target-size (WCAG 2.5.8). */}
          <div className="flex items-center">
            <AutoplayToggle
              isPaused={isPaused}
              onToggle={setPaused}
              label="services carousel"
              className="mr-1 text-gray-500 hover:text-brand-600"
            />
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className="group flex h-6 min-w-6 items-center justify-center px-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              >
                <span
                  className={`block h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-brand-600 w-5 sm:w-7'
                      : 'bg-gray-200 w-1.5 sm:w-2 group-hover:bg-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Arrows + View All. One cluster at every breakpoint — the arrows
              used to be `sm:hidden`, which left tablet and desktop with dots as
              the only way to drive the carousel by hand. */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={goPrev}
                // gray-500, not gray-400: these chevrons are the primary manual
                // control on desktop, and gray-400 on white is ~2.6:1 — under the
                // 3:1 that WCAG 1.4.11 asks of meaningful non-text controls.
                className="p-1.5 sm:p-2 rounded-lg border border-gray-300 hover:border-brand-300 hover:bg-brand-50 text-gray-500 hover:text-brand-600 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                aria-label="Previous services"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                // gray-500, not gray-400: these chevrons are the primary manual
                // control on desktop, and gray-400 on white is ~2.6:1 — under the
                // 3:1 that WCAG 1.4.11 asks of meaningful non-text controls.
                className="p-1.5 sm:p-2 rounded-lg border border-gray-300 hover:border-brand-300 hover:bg-brand-50 text-gray-500 hover:text-brand-600 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                aria-label="Next services"
              >
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold text-xs sm:text-sm"
            >
              View all
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
