'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "AIvanceWorks transformed our document processing workflow with their RAG solution. What used to take our team days now happens in minutes. The ROI was evident within the first month.",
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
      "We needed an AI consulting partner who understood both the technology and business implications. AIvanceWorks delivered a production-ready AI agent system that our competitors are still trying to figure out.",
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-200">
            Don't just take our word for it. Here's what teams are saying about working with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-0 lg:left-8">
            <Quote className="h-16 w-16 text-blue-400/20" />
          </div>

          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="min-h-[200px] flex flex-col justify-center">
              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-blue-200 text-sm">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
