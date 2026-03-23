'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { value: '3x', label: 'Faster Development', icon: Zap },
  { value: '50%', label: 'Cost Reduction', icon: TrendingUp },
  { value: '99.9%', label: 'Uptime SLA', icon: Clock },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-blue-50/30 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb05_1px,transparent_1px),linear-gradient(to_bottom,#2563eb05_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Soft gradient orbs — hidden on small screens for performance */}
      <div className="hidden md:block absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[120px]" />
      <div className="hidden md:block absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-50/30 rounded-full blur-[100px]" />

      {/* On mobile/tablet: natural flow with tight padding. On lg+: fill viewport minus header */}
      <div className="relative max-w-[1440px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2 md:py-3 lg:py-4">
        {/* Main Hero Card */}
        <div className="relative w-full bg-gradient-to-br from-[#1a1f36] via-[#1e2744] to-[#1a2038] rounded-2xl md:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.06] shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
          {/* Card internal glow effects */}
          <div className="absolute top-0 left-1/3 w-[500px] h-56 bg-blue-500/[0.07] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-48 bg-indigo-500/[0.06] rounded-full blur-[80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative px-5 py-6 sm:px-6 sm:py-7 md:px-10 md:py-8 lg:px-16 lg:py-11">
            {/* Content */}
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/[0.12] border border-blue-400/[0.15] text-blue-300 text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 tracking-wide">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
                </span>
                AI-Powered Cloud Computing
              </div>

              <h1 className="text-[22px] leading-[1.15] sm:text-[26px] md:text-3xl lg:text-5xl font-black tracking-tight text-white mb-2.5 sm:mb-3 md:mb-4">
                Build Smarter Software,{' '}
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
                  Ship Faster
                </span>
              </h1>

              <p className="text-[13px] leading-relaxed sm:text-sm md:text-[15px] lg:text-lg text-white/60 max-w-2xl mx-auto mb-4 sm:mb-5">
                Serpent Software is an AI integrated cloud computing software development company including services such as MVP Development, SaaS Development and several other development services.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-500 shadow-[0_8px_30px_rgba(37,99,235,0.4)] text-[13px] sm:text-sm md:text-sm px-5 sm:px-6 md:px-7 h-10 sm:h-10 md:h-11 font-bold rounded-xl transition-all duration-300"
                >
                  <Link href="/book-consultation">
                    Book Consultation Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-white/15 text-white hover:border-white/30 hover:bg-white/[0.06] text-[13px] sm:text-sm md:text-sm px-5 sm:px-6 md:px-7 h-10 sm:h-10 md:h-11 rounded-xl transition-all duration-300"
                >
                  <Link href="/services">
                    <Play className="mr-2 h-3.5 w-3.5" />
                    View Our Services
                  </Link>
                </Button>
              </div>

              {/* Stat Cards Row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.07] rounded-lg sm:rounded-xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-3.5 md:py-2.5 lg:px-4 lg:py-3 hover:bg-white/[0.08] hover:border-blue-400/20 transition-all duration-300"
                  >
                    <stat.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 text-blue-400 mb-1 sm:mb-1.5 mx-auto" />
                    <div className="text-sm sm:text-lg md:text-lg lg:text-2xl font-black text-white">
                      {stat.value}
                    </div>
                    <div className="text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px] text-white/40 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Bar */}
            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/[0.06]">
              <p className="text-[8px] sm:text-[10px] md:text-[11px] text-white/30 text-center mb-1.5 sm:mb-2 uppercase tracking-[0.2em] font-semibold">
                Trusted by innovative companies
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-1">
                {['TechStartup', 'FinanceAI', 'CloudFirst', 'DataFlow'].map((name) => (
                  <div key={name} className="text-[10px] sm:text-xs md:text-sm font-bold text-white/20 hover:text-white/40 transition-colors">{name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
