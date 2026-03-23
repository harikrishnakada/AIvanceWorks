'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Serpent Software transformed our document processing workflow with their RAG solution. What used to take our team days now happens in minutes. The ROI was evident within the first month.",
    author: 'Sarah Chen',
    title: 'CTO',
    company: 'FinanceFlow (Series B Startup)',
    avatar: 'SC',
  },
  {
    quote:
      "Their Azure migration expertise saved us from a costly mistake. They found inefficiencies in our architecture that reduced our cloud spend by 50% while improving performance. True partners, not just vendors.",
    author: 'Michael Torres',
    title: 'VP of Engineering',
    company: 'HealthTech Solutions',
    avatar: 'MT',
  },
  {
    quote:
      "We needed an AI consulting partner who understood both the technology and business implications. Serpent Software delivered a production-ready AI agent system that our competitors are still trying to figure out.",
    author: 'Jennifer Park',
    title: 'Founder & CEO',
    company: 'DataDriven AI',
    avatar: 'JP',
  },
  {
    quote:
      "The team's Microsoft certifications gave us confidence, but their hands-on approach sealed the deal. They worked alongside our developers, ensuring knowledge transfer at every step.",
    author: 'David Martinez',
    title: 'Director of Technology',
    company: 'RetailNext',
    avatar: 'DM',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-6 sm:py-8 lg:py-12 relative overflow-hidden">
      {/* Clean white bg with subtle blue wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[150px]" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-1.5 sm:mb-2 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            Don't just take our word for it. Here&apos;s what teams are saying about working with us.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-1 left-2 sm:left-4 lg:left-8 z-10">
            <Quote className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-blue-200/60" />
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-9 border border-gray-100 shadow-[0_12px_40px_rgba(37,99,235,0.08)]">
            <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex flex-col justify-center">
              {/* Quote */}
              <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4 sm:mb-5 lg:mb-6 font-medium">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-gray-500 text-[11px] sm:text-xs md:text-sm">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4 sm:mt-5">
            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-5 sm:w-7'
                      : 'bg-gray-200 w-1.5 sm:w-2 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-1.5 sm:gap-2">
              <button
                onClick={prevSlide}
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                }}
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
