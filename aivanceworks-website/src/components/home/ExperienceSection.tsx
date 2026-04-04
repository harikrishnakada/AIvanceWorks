'use client';

import Image from 'next/image';

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

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-1.5 sm:py-2 md:py-3">

      <div className="relative max-w-[1440px] w-full mx-auto px-2 sm:px-3 md:px-6 lg:px-8">

        {/* Dark card */}
        <div className="relative w-full
          bg-gradient-to-br from-[#1a1f36] via-[#1e2744] to-[#1a2038]
          rounded-2xl lg:rounded-3xl
          border border-white/[0.06]
          shadow-[0_20px_60px_rgba(37,99,235,0.15)]
          overflow-hidden">

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/3 w-[400px] h-40 bg-blue-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-32 bg-indigo-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Card body */}
          <div className="relative
            px-4 sm:px-8 md:px-12 lg:px-16
            py-4 sm:py-5 md:py-7 lg:py-9">

            {/* Header */}
            <div className="text-center mb-4 sm:mb-5 md:mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
                bg-blue-500/[0.12] border border-blue-400/[0.15]
                text-blue-300 text-[10px] sm:text-[11px] font-semibold tracking-wide mb-2 sm:mb-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                </span>
                Microsoft Certified Professional
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl
                font-black tracking-tight text-white mb-1.5">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/50 leading-relaxed max-w-md mx-auto">
                Industry-recognized Microsoft certifications backed by hands-on Azure cloud and AI engineering.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-24">
              {certifications.map((cert) => (
                <div key={cert.code} className="group flex flex-col items-center gap-2 sm:gap-3">

                  {/* Badge image */}
                  <div className="relative
                    w-[65px] h-[65px]
                    sm:w-[85px] sm:h-[85px]
                    md:w-[100px] md:h-[100px]
                    lg:w-[115px] lg:h-[115px]
                    drop-shadow-[0_6px_18px_rgba(37,99,235,0.35)]
                    group-hover:drop-shadow-[0_10px_28px_rgba(37,99,235,0.55)]
                    group-hover:scale-[1.04]
                    transition-all duration-300">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 65px, (max-width: 768px) 85px, (max-width: 1024px) 100px, 115px"
                    />
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <p className="text-[9px] sm:text-[10px] text-blue-400/70 font-semibold uppercase tracking-widest mb-0.5">
                      Microsoft Certified
                    </p>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {cert.title}
                    </h3>
                    <span className="inline-block mt-1 text-[9px] sm:text-[10px] font-semibold
                      px-2 py-0.5 rounded-full
                      bg-blue-500/[0.15] border border-blue-400/[0.2] text-blue-300 tracking-wide">
                      {cert.level} · {cert.code}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/[0.08] text-center">
              <p className="text-[9px] sm:text-[10px] text-white/25 font-medium tracking-wide">
                Verified credentials issued by Microsoft · Building enterprise solutions on Azure
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
