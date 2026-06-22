'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const heroSlides = [
  { src: '/images/home_hero/hero_slide_1a.jpg', alt: 'AIvanceWorks Cloud & AI Solutions' },
  { src: '/images/home_hero/home_hero_slide2.jpg', alt: 'AIvanceWorks Software Development' },
  { src: '/images/home_hero/home_hero_slide3b.jpg', alt: 'AIvanceWorks Custom Engineering' },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-section="home-hero"
      className="relative bg-gradient-to-b from-gray-50 via-brand-50/30 to-white overflow-hidden
        flex flex-col"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="hidden md:block absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-50/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Outer wrapper */}
      <div
        className="relative flex-1 flex flex-col w-full
          px-4 sm:px-6 md:px-8 lg:px-12
          pt-4 sm:pt-5 md:pt-6 lg:pt-8
          pb-2 sm:pb-2 md:pb-3 lg:pb-3"
      >
        {/* Hero Card */}
        <div
          className="flex flex-col relative w-full
            min-h-[450px] sm:min-h-[490px] md:min-h-[544px] lg:min-h-[604px]
            rounded-2xl lg:rounded-3xl
            border border-white/[0.06]
            shadow-brand-panel
            overflow-hidden"
        >
          {/* Sliding background images */}
          {heroSlides.map((slide, index) => (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
              style={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

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
              AI-Powered Cloud Computing
            </div>
          </div>

          {/* Card body */}
          <div
            className="relative flex flex-1 flex-col
              px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28
              pt-14 sm:pt-16 md:pt-18 lg:pt-20
              pb-4 sm:pb-5 md:pb-6 lg:pb-7"
          >
            {/* Hero content */}
            <div
              className="flex flex-1 flex-col items-center justify-evenly text-center max-w-5xl mx-auto w-full"
            >
              {/* Headline */}
              <h1
                className="text-[28px] leading-[1.1] sm:text-[44px] md:text-[58px] lg:text-[72px] xl:text-[80px]
                  font-black tracking-tight text-white"
              >
                We Build SaaS for{' '}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent whitespace-nowrap">
                  Buisnesses
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl
                  text-white/65 max-w-2xl mx-auto"
              >
                 {SITE_CONFIG.name} is a cloud computing software development company including services
                in AI Development, SaaS Development and several other development services.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none sm:w-auto mx-auto mt-4 sm:mt-6 md:mt-8">
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
        </div>
      </div>
    </section>
  );
}
