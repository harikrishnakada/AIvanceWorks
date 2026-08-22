import { BRAND_PREFIX } from '@/lib/constants';
import { SECTION_Y } from '@/lib/section-spacing';
import { Container } from '@/components/shared/primitives';

// Company statement to customers — presented as a deliberate, quote-like
// declaration on a clean white ground so it reads as a brand promise rather
// than another content block.
export function StatementSection() {
  return (
    <section data-section="home-statement" className={`${SECTION_Y} bg-white`}>
      <Container width="default" className="text-center">
        {/* Eyebrow and quote run tight on phones — this block has to clear the
            fold alongside the hero, and mobile is where that budget is thinnest. */}
        <p
          data-statement-eyebrow
          className="text-label-sm text-brand-600 uppercase tracking-[0.2em] font-semibold mb-2.5 sm:mb-4"
        >
          Our Promise
        </p>

        <figure className="relative">
          <blockquote className="relative">
            {/* <p
              data-statement-quote
              className="text-label font-semibold leading-snug text-gray-900 tracking-tight"
            >
              At <span className="text-brand-600">{BRAND_PREFIX}</span>, we bring an impact-driven mindset, collaborative environment,
              and innovative thinking to deliver solutions to your problems.
            </p> */}
            {false && (
              <p
                data-statement-quote
                className="text-label font-semibold leading-snug text-gray-900 tracking-tight"
              >
                {/* Brand-colored quote marks framing the promise */}
                <span aria-hidden="true" className="font-serif text-brand-600 align-[-0.15em] text-[1.6em] leading-[0] mr-1">
                  &ldquo;
                </span>
                At <span className="text-brand-600">{BRAND_PREFIX}</span>, we create Application and Systems that <span className="text-brand-600">won&rsquo;t breakdown.</span>
                <span aria-hidden="true" className="font-serif text-brand-600 align-[-0.35em] text-[1.6em] leading-[0] ml-1">
                  &rdquo;
                </span>
              </p>
            )}
          </blockquote>

          {/* Divider + specialization line */}
          {1==1 && (
          <div
            data-statement-divider
            className="mt-3 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-500/60" />
            <figcaption className="text-label-sm font-medium text-gray-500">
              HIPAA, SOC 2, GDPR compliant
            </figcaption>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-500/60" />
          </div>
          )}
        </figure>
      </Container>
    </section>
  );
}
