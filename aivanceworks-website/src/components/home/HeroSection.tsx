'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { value: '3x', label: 'Faster Development', icon: Zap },
  { value: '50%', label: 'Cost Reduction', icon: TrendingUp },
  { value: '99.9%', label: 'Uptime SLA', icon: Clock },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-light">
      <div className="relative max-w-[1440px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2 md:py-3 lg:py-4">
        {/* Main Hero Card */}
        <div className="relative w-full bg-gradient-to-br from-surface-dark via-surface to-surface-dark rounded-2xl md:rounded-2xl lg:rounded-3xl overflow-hidden border border-border-subtle shadow-panel">
          {/* Card internal glow effects */}
          <div className="hidden md:block absolute top-0 left-1/3 w-[500px] h-56 bg-accent/[0.07] rounded-full blur-[100px]" />
          <div className="hidden md:block absolute bottom-0 right-1/3 w-[400px] h-48 bg-accent/[0.06] rounded-full blur-[80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative px-5 py-6 sm:px-6 sm:py-7 md:px-10 md:py-8 lg:px-16 lg:py-11">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/8 border border-accent/15 text-accent text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 tracking-wide">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </span>
              AI-Native Software Development
            </div>

            <h1 className="text-[22px] leading-[1.15] sm:text-[26px] md:text-3xl lg:text-5xl font-black tracking-tight text-text-light mb-2.5 sm:mb-3 md:mb-4">
              We engineer software that{' '}
              <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
                ships, scales, and stands.
              </span>
            </h1>

            <p className="text-[13px] leading-relaxed sm:text-sm md:text-[15px] lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-5">
              Production-grade systems for healthcare and fintech — from AI agents to enterprise platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-accent text-text-heading hover:bg-accent-hover hover:shadow-glow text-[13px] sm:text-sm md:text-sm px-5 sm:px-6 md:px-7 h-10 sm:h-10 md:h-11 font-semibold rounded-[10px] transition-all duration-300"
              >
                <Link href="/contact">
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-transparent border-border-subtle text-text-light hover:border-muted-foreground hover:bg-glass-bg hover:text-text-light text-[13px] sm:text-sm md:text-sm px-5 sm:px-6 md:px-7 h-10 sm:h-10 md:h-11 rounded-[10px] transition-all duration-300"
              >
                <Link href="/contact">
                  Get an estimate
                </Link>
              </Button>
            </div>

            {/* Stat Cards Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-lg sm:rounded-xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-3.5 md:py-2.5 lg:px-4 lg:py-3 hover:border-accent/20 transition-all duration-300"
                >
                  <stat.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 text-accent mb-1 sm:mb-1.5 mx-auto" />
                  <div className="text-sm sm:text-lg md:text-lg lg:text-2xl font-black text-accent">
                    {stat.value}
                  </div>
                  <div className="text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px] text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Bar */}
          <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-glass-border">
            <p className="text-[8px] sm:text-[10px] md:text-[11px] text-text-light/30 text-center mb-1.5 sm:mb-2 uppercase tracking-[0.2em] font-semibold">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-1">
              {['TechStartup', 'FinanceAI', 'CloudFirst', 'DataFlow'].map((name) => (
                <div key={name} className="text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground hover:text-text-subtle transition-colors">{name}</div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
