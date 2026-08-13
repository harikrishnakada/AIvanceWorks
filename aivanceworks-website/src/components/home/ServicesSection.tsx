'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cloud, Code2, Database, Globe, Settings, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SECTION_Y, CARD_SLIDE_X } from '@/lib/section-spacing';
import { useCarouselAutoplay } from '@/hooks/useCarouselAutoplay';
import { AutoplayToggle } from '@/components/shared/primitives';

// NOTE: five of these six cards pointed at slugs that do not exist
// (/services/ai-machine-learning, /cloud-engineering, /full-stack-development,
// /enterprise-integration, /devops-automation) and 404'd straight from the
// homepage. Each now targets the closest registered page in src/data/services.
// The card titles are unchanged — retitle them if you'd rather they match the
// destination pages exactly.
const services = [
  {
    title: 'AI & Machine Learning',
    description:
      'Deploy production-ready AI agents, RAG frameworks, and LLM integrations that automate workflows and enhance decision-making with Azure AI Foundry.',
    icon: Bot,
    href: '/services/ai-development',
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-600',
  },
  {
    title: 'Cloud Engineering',
    description:
      'Migrate and optimize your infrastructure on Azure or AWS. Our certified architects design scalable systems that reduce cloud costs by up to 50%.',
    icon: Cloud,
    href: '/services/cloud-infrastructure',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Build enterprise applications with .NET, React, and Next.js. From MVPs to complex platforms, we deliver production-grade software on schedule.',
    icon: Code2,
    href: '/services/custom-software-development',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Data Engineering',
    description:
      'Transform raw data into actionable insights with ETL pipelines, Power BI dashboards, and Azure Synapse. Make data-driven decisions faster.',
    icon: Database,
    href: '/services/data-engineering',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Enterprise Integration',
    description:
      'Modernize legacy systems and integrate disparate applications with minimal disruption. API integrations, migrations, and service bus implementations.',
    icon: Globe,
    href: '/services/enterprise-software-development',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    title: 'DevOps & CI/CD',
    description:
      'Accelerate deployments with Azure DevOps, GitHub Actions, and Kubernetes. Automate testing, reduce errors, and ship features faster.',
    icon: Settings,
    href: '/services/devops',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
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

          {/* Desktop Navigation Arrows */}
          {/* <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg border border-gray-200 hover:border-brand-300 hover:bg-brand-50 text-gray-400 hover:text-brand-600 transition-all duration-200"
              aria-label="Previous services"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-gray-200 hover:border-brand-300 hover:bg-brand-50 text-gray-400 hover:text-brand-600 transition-all duration-200"
              aria-label="Next services"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div> */}
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.href}
                // CSS-driven width, not `visibleCount`: the hook starts at 1 on the
                // server and corrects after hydration, so an inline width shifted
                // the layout on every tablet/desktop load. Keep these breakpoints
                // in sync with useVisibleCount().
                className={`w-full flex-shrink-0 sm:w-1/2 lg:w-1/3 ${CARD_SLIDE_X}`}
              >
                <Link href={service.href} className="group block h-full">
                  {/* Card shell, icon tile and type scale match the challenges
                      and why-choose-us cards — same padding, same 48px tile,
                      same title/body sizes — so the three sections read as one
                      card system rather than three. */}
                  <Card className="h-full border-border-light bg-surface-white rounded-xl shadow-card-sm hover:shadow-brand-card hover:border-brand-200 transition-all duration-300">
                    <CardHeader className="space-y-0 p-6 md:p-7 pb-0">
                      <div
                        className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                      </div>
                      <CardTitle className="text-lg md:text-xl font-semibold text-text-heading leading-snug text-balance group-hover:text-brand-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    {/* Slightly deeper bottom padding than the top: the last
                        line here is the hover-only "Learn more" row, so without
                        it the card reads bottom-tight whenever it isn't hovered. */}
                    <CardContent className="px-6 md:px-7 pb-8 md:pb-9 pt-2">
                      <CardDescription className="text-text-body text-sm md:text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center text-brand-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        Learn more
                        <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
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
              className="mr-1 text-gray-400 hover:text-brand-600"
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
                  className={`block h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-brand-600 w-5 sm:w-7'
                      : 'bg-gray-200 w-1.5 sm:w-2 group-hover:bg-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Arrows + View All */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex sm:hidden gap-1.5">
              <button
                onClick={prevSlide}
                className="p-1.5 rounded-lg border border-gray-200 hover:border-brand-300 text-gray-400 hover:text-brand-600 transition-all"
                aria-label="Previous services"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg border border-gray-200 hover:border-brand-300 text-gray-400 hover:text-brand-600 transition-all"
                aria-label="Next services"
              >
                <ChevronRight className="h-3.5 w-3.5" />
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
