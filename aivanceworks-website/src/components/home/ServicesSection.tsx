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
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-600',
  },
  {
    title: 'Cloud Engineering',
    description:
      'Migrate and optimize your infrastructure on Azure or AWS. Our certified architects design scalable systems that reduce cloud costs by up to 50%.',
    icon: Cloud,
    href: '/services/cloud-engineering',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Build enterprise applications with .NET, React, and Next.js. From MVPs to complex platforms, we deliver production-grade software on schedule.',
    icon: Code2,
    href: '/services/full-stack-development',
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
    href: '/services/enterprise-integration',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    title: 'DevOps & CI/CD',
    description:
      'Accelerate deployments with Azure DevOps, GitHub Actions, and Kubernetes. Automate testing, reduce errors, and ship features faster.',
    icon: Settings,
    href: '/services/devops-automation',
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
    <section data-section="home-services" className="py-7 sm:py-8 lg:py-10 bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
          <div className="w-full text-center max-w-3xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-1 sm:mb-2">
              End-to-End Software Development Services
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
                className="flex-shrink-0 px-1.5 sm:px-2"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full border-gray-100 bg-white rounded-xl sm:rounded-2xl hover:shadow-brand-card hover:border-brand-200 transition-all duration-300">
                    <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${service.iconBg} flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${service.iconColor}`} />
                      </div>
                      <CardTitle className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <CardDescription className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <div className="mt-3 flex items-center text-brand-600 font-semibold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
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
                    ? 'bg-brand-600 w-5 sm:w-7'
                    : 'bg-gray-200 w-1.5 sm:w-2 hover:bg-gray-300'
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
