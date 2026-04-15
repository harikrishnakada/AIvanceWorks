'use client';

import Image from 'next/image';
import { Zap, Clock, TrendingUp } from 'lucide-react';

const certifications = [
  {
    src: '/images/certifications/ai-104.png',
    alt: 'Microsoft Certified: Azure AI Engineer Associate',
    title: 'Azure AI Engineer',
    level: 'Associate',
    code: 'AI-104',
  },
  {
    src: '/images/certifications/AZ-204.png',
    alt: 'Microsoft Certified: Azure Developer Associate',
    title: 'Azure Developer',
    level: 'Associate',
    code: 'AZ-204',
  },
];

const stats = [
  { value: '5x', label: 'Faster Development', icon: Zap },
  { value: '50%', label: 'Cost Reduction', icon: TrendingUp },
  { value: '53.95%', label: 'Uptime SLA', icon: Clock },
];

export function ExperienceSection() {
  return (
    <section data-section="home-experience" className="relative overflow-hidden pt-0.5 sm:pt-0.5 md:pt-1 pb-1 sm:pb-1.5 md:pb-2">

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Dark card */}
        <div className="relative w-full
          bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to
          rounded-2xl lg:rounded-3xl
          border border-white/[0.06]
          shadow-brand-panel
          overflow-hidden">

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/3 w-[400px] h-40 bg-brand-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-32 bg-accent-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Card body */}
          <div className="relative
            px-4 sm:px-8 md:px-12 lg:px-16
            py-3 sm:py-4 md:py-5 lg:py-6">

            {/* Header */}
            <div className="text-center mb-2 sm:mb-3 md:mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
                bg-brand-500/[0.12] border border-brand-400/[0.15]
                text-brand-300 text-[10px] sm:text-[11px] font-semibold tracking-wide mb-2 sm:mb-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400" />
                </span>
                Microsoft Certified Professional
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl
                font-black tracking-tight text-white mb-1.5">
                Our{' '}
                <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/75 leading-relaxed max-w-md mx-auto">
                Industry-recognized Microsoft certifications backed by hands-on Azure cloud and AI engineering.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
              {certifications.map((cert) => (
                <div key={cert.code} className="group flex flex-col items-center gap-2 sm:gap-3">

                  {/* Badge image */}
                  <div className="relative
                    w-[55px] h-[55px]
                    sm:w-[70px] sm:h-[70px]
                    md:w-[80px] md:h-[80px]
                    lg:w-[90px] lg:h-[90px]
                    drop-shadow-[0_6px_18px_rgba(var(--brand-shadow-rgb),0.35)]
                    group-hover:drop-shadow-[0_10px_28px_rgba(var(--brand-shadow-rgb),0.55)]
                    group-hover:scale-[1.04]
                    transition-all duration-300">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 55px, (max-width: 768px) 70px, (max-width: 1024px) 80px, 90px"
                    />
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <p className="text-[9px] sm:text-[10px] text-brand-400/70 font-semibold uppercase tracking-widest mb-0.5">
                      Microsoft Certified
                    </p>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {cert.title}
                    </h3>
                    <span className="inline-block mt-1 text-[9px] sm:text-[10px] font-semibold
                      px-2 py-0.5 rounded-full
                      bg-brand-500/[0.15] border border-brand-400/[0.2] text-brand-300 tracking-wide">
                      {cert.level} · {cert.code}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto mt-4 sm:mt-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.07]
                    rounded-xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3
                    text-center hover:bg-white/[0.08] hover:border-brand-400/20 transition-all duration-300"
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

            {/* Footer note */}
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/[0.08] text-center">
              <p className="text-[9px] sm:text-[10px] text-white/50 font-medium tracking-wide">
                Verified credentials issued by Microsoft · Building enterprise solutions on Azure
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
