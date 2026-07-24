import { BRAND_PREFIX } from '@/lib/constants';
import { SECTION_Y } from '@/lib/section-spacing';

// Company statement to customers — presented as a deliberate, quote-like
// declaration on a clean white ground so it reads as a brand promise rather
// than another content block.
export function StatementSection() {
  return (
    <section data-section="home-statement" className={`${SECTION_Y} bg-white`}>
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center ">
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-xs text-brand-600 uppercase tracking-[0.2em] font-semibold mb-4 sm:mb-5">
          Our Promise
        </p>

        <figure className="relative">
          {/* Oversized opening quote mark as a soft backdrop */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none font-serif text-[7rem] sm:text-[9rem] leading-none text-brand-500/10"
          >
            &ldquo;
          </span>

          <blockquote className="relative">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold leading-snug text-gray-900 tracking-tight">
              At{' '}
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
                {BRAND_PREFIX}
              </span>
              , we bring an impact-driven mindset, collaborative environment,
              and innovative thinking to deliver solutions to your problems.
            </p>
          </blockquote>

          {/* Divider + specialization line */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-500/60" />
            <figcaption className="text-sm sm:text-base font-medium text-gray-500">
              We specialize in{' '}
              <span className="font-semibold text-gray-900">Enterprise B2B SaaS</span>{' '}
              services
            </figcaption>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-500/60" />
          </div>
        </figure>
      </div>
    </section>
  );
}
