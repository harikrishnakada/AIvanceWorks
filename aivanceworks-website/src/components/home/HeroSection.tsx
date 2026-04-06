'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, Clock, TrendingUp } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const partners = [
  { name: 'Google', logo: '/partners/google.svg', width: 'w-[70px] sm:w-[85px] md:w-[100px] lg:w-[120px]' },
  { name: 'Microsoft', logo: '/partners/microsoft.svg', width: 'w-[80px] sm:w-[95px] md:w-[115px] lg:w-[135px]' },
];

const stats = [
  { value: '5x', label: 'Faster Development', icon: Zap },
  { value: '50%', label: 'Cost Reduction', icon: TrendingUp },
  { value: '53.95%', label: 'Uptime SLA', icon: Clock },
];

export function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 via-brand-50/30 to-white overflow-hidden
        flex flex-col
        xl:min-h-[calc(100dvh-4.5rem)]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="hidden md:block absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-50/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Outer wrapper */}
      <div
        className="relative flex-1 flex flex-col max-w-[1440px] w-full mx-auto
          px-2 sm:px-3 md:px-6 lg:px-8
          py-1.5 sm:py-2 md:py-3 lg:py-4"
      >
        {/* Hero Card */}
        <div
          className="flex flex-col relative w-full
            xl:flex-1
            bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to
            rounded-2xl lg:rounded-3xl
            border border-white/[0.06]
            shadow-brand-panel
            overflow-hidden"
        >
          {/* Glow orbs */}
          <div className="absolute top-0 left-1/3 w-[500px] h-56 bg-brand-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-48 bg-accent-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Card body */}
          <div
            className="relative flex flex-col
              xl:flex-1
              px-4 sm:px-6 md:px-10 lg:px-16
              pt-4 sm:pt-5 md:pt-7 lg:pt-9
              pb-2 sm:pb-2.5 md:pb-3 lg:pb-4"
          >
            {/* Hero content */}
            <div
              className="flex flex-col items-center text-center max-w-3xl mx-auto w-full
                xl:flex-1 xl:justify-center"
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
                  bg-brand-500/[0.12] border border-brand-400/[0.15]
                  text-brand-300 text-[10px] sm:text-[11px] font-semibold tracking-wide
                  mb-2 sm:mb-2.5"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400" />
                </span>
                AI-Powered Cloud Computing
              </div>

              {/* Headline */}
              <h1
                className="text-[20px] leading-[1.15] sm:text-[26px] md:text-[34px] lg:text-[44px]
                  font-black tracking-tight text-white
                  mb-1.5 sm:mb-2 md:mb-3"
              >
                Built Smarter Software,{' '}
                <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
                  Delivered Faster
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-[12px] leading-relaxed sm:text-[13px] md:text-sm lg:text-base
                  text-white/60 max-w-xl mx-auto
                  mb-2.5 sm:mb-3 md:mb-4"
              >
                 {SITE_CONFIG.name} is a cloud computing software development company including services
                in AI Development, SaaS Development and several other development services.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5 w-full sm:w-auto">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-brand-600 text-white hover:bg-brand-500
                    shadow-glow-sm
                    text-[12px] sm:text-[13px] px-5 sm:px-6
                    h-9 sm:h-10 font-bold rounded-xl transition-all duration-300"
                >
                  <Link href="/book-consultation">
                    Book an Appointment
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-white/20 text-white
                    hover:border-white/35 hover:bg-white/[0.06]
                    text-[12px] sm:text-[13px] px-5 sm:px-6
                    h-9 sm:h-10 rounded-xl transition-all duration-300"
                >
                  <Link href="/services">
                    <Play className="mr-2 h-3 w-3" />
                    View Our Services
                  </Link>
                </Button>
              </div>

              {/* Stat Cards */}
              <div
                className="grid grid-cols-3 gap-2 sm:gap-3
                  w-full max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.07]
                      rounded-xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3
                      hover:bg-white/[0.08] hover:border-brand-400/20 transition-all duration-300"
                  >
                    <stat.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-brand-400 mb-1 mx-auto" />
                    <div className="text-sm sm:text-base lg:text-xl font-black text-white leading-none mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-white/40 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners bar */}
            <div className="mt-3 sm:mt-4 md:mt-5 pt-3 sm:pt-4 border-t border-white/[0.08] shrink-0">
              <p
                className="text-[9px] sm:text-[10px] text-brand-400/60 text-center
                  uppercase tracking-[0.2em] font-semibold mb-1"
              >
                Trusted Technology
              </p>
              <h2
                className="text-center text-xs sm:text-sm md:text-base lg:text-lg
                  font-black text-white mb-2 sm:mb-3"
              >
                Our Partners &{' '}
                <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <div className="flex items-center justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-28">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className={`relative h-5 sm:h-6 md:h-7 lg:h-8 ${partner.width}
                      opacity-45 hover:opacity-85 transition-opacity duration-300`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
              <p className="text-center text-[8px] sm:text-[9px] md:text-[10px] text-white/25 mt-2 font-medium">
                Building with the world&apos;s leading platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
