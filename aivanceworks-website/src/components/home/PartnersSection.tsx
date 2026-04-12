'use client';

import Image from 'next/image';

const partners = [
  { name: 'Google', logo: '/partners/google.svg', width: 'w-[90px] sm:w-[110px] md:w-[120px] lg:w-[140px]' },
  { name: 'Microsoft', logo: '/partners/microsoft.svg', width: 'w-[100px] sm:w-[120px] md:w-[130px] lg:w-[150px]' },
  { name: 'Amazon Web Services', logo: '/partners/aws.svg', width: 'w-[70px] sm:w-[85px] md:w-[95px] lg:w-[110px]' },
];

export function PartnersSection() {
  return (
    <section data-section="home-partners" className="py-4 sm:py-6 lg:py-8">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6">
        <div className="relative bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to rounded-2xl md:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.06] shadow-brand-panel">
          {/* Background effects */}
          <div className="absolute top-0 left-1/4 w-[400px] h-40 bg-brand-500/[0.06] rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-32 bg-accent-500/[0.05] rounded-full blur-[60px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-8 lg:px-16 lg:py-10">
            {/* Heading */}
            <div className="text-center mb-5 sm:mb-6 lg:mb-8">
              <p className="text-[10px] sm:text-xs text-brand-400/60 uppercase tracking-[0.2em] font-semibold mb-1.5 sm:mb-2">
                Trusted Technology
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white">
                Our Partners &{' '}
                <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
            </div>

            {/* Logos — centered row with equal visual spacing */}
            <div className="flex items-center justify-center gap-10 sm:gap-14 md:gap-16 lg:gap-20">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className={`relative h-6 sm:h-7 md:h-8 lg:h-10 ${partner.width} opacity-50 hover:opacity-90 transition-opacity duration-300`}
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

            {/* Bottom tagline */}
            <p className="text-center text-[10px] sm:text-xs text-white/25 mt-4 sm:mt-5 lg:mt-6 font-medium">
              Building with the world&apos;s leading platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
