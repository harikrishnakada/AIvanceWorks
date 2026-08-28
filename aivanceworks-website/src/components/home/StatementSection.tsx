import { BRAND_PREFIX } from '@/lib/constants';
import { Container, Section } from '@/components/shared/primitives';

// Company statement to customers — presented as a deliberate, quote-like
// declaration on the shared black ground (Section tone="dark", the same field
// the hero and the industries carousel paint) so it reads as a brand promise
// rather than another content block. size="md" is the literal value SECTION_Y
// resolves to, so the vertical rhythm is unchanged by the tone swap.
export function StatementSection() {
  return (
    <Section data-section="home-statement" tone="dark" size="md">
      {/* The promise is nudged DOWN its own band with a TRANSFORM — it sits
          lower, further from the hero and closer to ServicesSection, while the
          section's height is untouched, so neither neighbour moves by a pixel.
          Padding cannot do this: growing pt pushes ServicesSection and the rest
          of the page down, and trading pb for pt to compensate collapses the
          band's bottom edge, which is the shared rhythm with the section below.
          A transform runs after layout and costs no height, so it is the only
          way to move this block with both neighbours frozen — the same rule the
          hero description and CTA follow.

          Kept under the bottom padding at every tier so the black band never
          clips the text (Section is overflow-hidden). Tune per height tier via
          --statement-drop in styles/first-fold.css; do NOT convert to margin. */}
      <Container
        width="default"
        className="text-center [transform:translateY(var(--statement-drop,0px))]"
      >
        {/* Eyebrow and quote run tight on phones — this block has to clear the
            fold alongside the hero, and mobile is where that budget is thinnest. */}
        <p
          data-statement-eyebrow
          className="text-label-sm text-brand-300 uppercase tracking-[0.2em] font-semibold mb-2.5 sm:mb-4"
        >
          Our Promise
        </p>

        <figure className="relative">
          <blockquote className="relative">
            {/* <p
              data-statement-quote
              className="text-label font-semibold leading-snug text-text-light tracking-tight"
            >
              At <span className="text-brand-300">{BRAND_PREFIX}</span>, we bring an impact-driven mindset, collaborative environment,
              and innovative thinking to deliver solutions to your problems.
            </p> */}
            {false && (
              <p
                data-statement-quote
                className="text-label font-semibold leading-snug text-text-light tracking-tight"
              >
                {/* Brand-colored quote marks framing the promise */}
                <span aria-hidden="true" className="font-serif text-brand-300 align-[-0.15em] text-[1.6em] leading-[0] mr-1">
                  &ldquo;
                </span>
                At <span className="text-brand-300">{BRAND_PREFIX}</span>, we create applications and systems that <span className="text-brand-300">won&rsquo;t break down.</span>
                <span aria-hidden="true" className="font-serif text-brand-300 align-[-0.35em] text-[1.6em] leading-[0] ml-1">
                  &rdquo;
                </span>
              </p>
            )}
          </blockquote>

          {/* Divider + specialization line. Hairlines run at brand-400 rather
              than brand-500: on the black theme a low-alpha stroke has no grey
              substrate to sit on, so decorative strokes move up a tier. */}
          {1==1 && (
          <div
            data-statement-divider
            className="mt-3 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-400/70" />
            <figcaption className="text-label-sm font-medium text-text-light/70">
              HIPAA, SOC 2, GDPR compliant
            </figcaption>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-400/70" />
          </div>
          )}
        </figure>
      </Container>
    </Section>
  );
}
