'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cloud, Code2, Database, Globe, Settings, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'AI & Machine Learning',
    description:
      'Deploy production-ready AI agents, RAG frameworks, and LLM integrations that automate workflows and enhance decision-making with Azure AI Foundry.',
    icon: Bot,
    href: '/services/ai-machine-learning',
  },
  {
    title: 'Cloud Engineering',
    description:
      'Migrate and optimize your infrastructure on Azure or AWS. Our certified architects design scalable systems that reduce cloud costs by up to 50%.',
    icon: Cloud,
    href: '/services/cloud-engineering',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Build enterprise applications with .NET, React, and Next.js. From MVPs to complex platforms, we deliver production-grade software on schedule.',
    icon: Code2,
    href: '/services/full-stack-development',
  },
  {
    title: 'Data Engineering',
    description:
      'Transform raw data into actionable insights with ETL pipelines, Power BI dashboards, and Azure Synapse. Make data-driven decisions faster.',
    icon: Database,
    href: '/services/data-engineering',
  },
  {
    title: 'Enterprise Integration',
    description:
      'Modernize legacy systems and integrate disparate applications with minimal disruption. API integrations, migrations, and service bus implementations.',
    icon: Globe,
    href: '/services/enterprise-integration',
  },
  {
    title: 'DevOps & CI/CD',
    description:
      'Accelerate deployments with Azure DevOps, GitHub Actions, and Kubernetes. Automate testing, reduce errors, and ship features faster.',
    icon: Settings,
    href: '/services/devops-automation',
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const visibleCount = useVisibleCount();
  const maxIndex = services.length - visibleCount;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    nextSlide();
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const totalDots = maxIndex + 1;

  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-7">
          <div className="max-w-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-text-heading mb-1 sm:mb-2">
              End-to-End Software Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-text-body leading-relaxed">
              From AI strategy to production deployment, we deliver the full spectrum of software development services your business needs to thrive.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg border border-border hover:border-accent/30 hover:bg-accent/5 text-muted-foreground hover:text-accent transition-all duration-200"
              aria-label="Previous services"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-border hover:border-accent/30 hover:bg-accent/5 text-muted-foreground hover:text-accent transition-all duration-200"
              aria-label="Next services"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
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
                className="flex-shrink-0 px-1.5 sm:px-2"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full border-border bg-surface-white rounded-xl sm:rounded-2xl hover:shadow-card hover:border-border-hover hover:-translate-y-1 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/8 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                      </div>
                      <CardTitle className="text-sm sm:text-base font-bold text-text-heading group-hover:text-accent-hover transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <CardDescription className="text-text-body text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <div className="mt-3 flex items-center text-accent-hover font-semibold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
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
          <div className="flex gap-1.5">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-5 sm:w-7'
                    : 'bg-border w-1.5 sm:w-2 hover:bg-border-hover'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Arrows + View All */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex sm:hidden gap-1.5">
              <button
                onClick={prevSlide}
                className="p-1.5 rounded-lg border border-border hover:border-accent/30 hover:bg-accent/5 text-muted-foreground hover:text-accent transition-all"
                aria-label="Previous services"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg border border-border hover:border-accent/30 hover:bg-accent/5 text-muted-foreground hover:text-accent transition-all"
                aria-label="Next services"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center text-accent-hover hover:text-accent font-semibold text-xs sm:text-sm"
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
