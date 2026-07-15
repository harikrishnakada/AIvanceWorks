'use client';

import Image from 'next/image';
import { SECTION_Y_AFTER_TIGHT } from '@/lib/section-spacing';

// Logos are sized by display HEIGHT (w-auto) using whitespace-trimmed assets,
// with per-logo heights tuned to each mark's cap-height so the letterforms read
// at a consistent visual size. Microsoft is a near-pure wordmark (~95% cap),
// Google carries a descender (~80% cap), and the AWS lockup is only ~52% text
// (smile below), so AWS renders taller to match the others' letter height.
// intrinsicW/H are the trimmed pixel dimensions and only set the aspect ratio.
const partners = [
  {
    name: 'Google',
    logo: '/partners/google-trim.png',
    tier: '',
    intrinsicW: 2182,
    intrinsicH: 719,
    height: 'h-[22px] sm:h-[24px] md:h-[28px] lg:h-[33px]',
  },
  {
    name: 'Microsoft',
    logo: '/partners/ms-trim.png',
    tier: '',
    intrinsicW: 3823,
    intrinsicH: 818,
    height: 'h-[18px] sm:h-[20px] md:h-[23px] lg:h-[27px]',
  },
  {
    name: 'Amazon Web Services',
    logo: '/partners/aws-trim.png',
    tier: '',
    intrinsicW: 2378,
    intrinsicH: 1423,
    height: 'h-[28px] sm:h-[32px] md:h-[37px] lg:h-[43px]',
  },
  {
    name: 'Oracle',
    logo: '/partners/oracle-trim.png',
    tier: '',
    intrinsicW: 3554,
    intrinsicH: 734,
    height: 'h-[18px] sm:h-[20px] md:h-[23px] lg:h-[27px]',
  },
];

// One half of the marquee track. With only a few partners the base set is too
// narrow to fill wide viewports, so repeat it enough that a single half spans
// past the widest screens — keeping the loop gap-free at any width.
const HALF_REPEAT = 4;
const marqueeLogos = Array.from({ length: HALF_REPEAT }).flatMap(() => partners);

export function PartnersSection() {
  return (
    <section data-section="home-partners" className={`${SECTION_Y_AFTER_TIGHT} bg-white`}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-5 sm:mb-6 lg:mb-8 max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs text-brand-600 uppercase tracking-[0.2em] font-semibold mb-1.5 sm:mb-2">
            Trusted Technology
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900">
            Our{' '}
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
        </div>

        {/* Logos — infinite horizontal marquee. The track holds two identical
            halves; spacing is per-item padding (not flex gap) so every gap,
            including the seam between halves, is equal and the loop is seamless. */}
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeLogos, ...marqueeLogos].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                aria-hidden={i >= marqueeLogos.length}
                className="group flex shrink-0 flex-col items-center justify-start px-5 sm:px-7 md:px-8 lg:px-10"
              >
                {/* Fixed-height box (matches the tallest mark) so logos vertically center */}
                <div className="flex h-[28px] sm:h-[32px] md:h-[37px] lg:h-[44px] items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.intrinsicW}
                    height={partner.intrinsicH}
                    className={`w-auto ${partner.height} object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>

                {/* Tier name — rendered only when set, so empty tiers add no gap */}
                {partner.tier && (
                  <span className="mt-2 sm:mt-2.5 text-[9px] sm:text-[10px] md:text-xs text-gray-400 group-hover:text-brand-600 uppercase tracking-[0.12em] font-semibold whitespace-nowrap transition-colors duration-300">
                    {partner.tier}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-5 lg:mt-6 font-medium">
          Building with the world&apos;s leading platforms
        </p>
      </div>
    </section>
  );
}
