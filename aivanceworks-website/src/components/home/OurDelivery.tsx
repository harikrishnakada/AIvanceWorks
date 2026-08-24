'use client';

import { Rocket } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { SECTION_Y } from '@/lib/section-spacing';
import { Container } from '@/components/shared/primitives';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Week-one delivery sequence. These are a real ordered flow (first contact →
// scoping → deployment), which is why the rail is numbered — the order carries
// information the reader needs, rather than decorating the section.
const milestones = [
  'Guaranteed call within 24 hours with your dedicated team’s seasoned rep',
  'Discovery call with the CEO',
  'Consulting session with an IT expert',
  'Quote finalization',
  'Product estimate',
  'Discovery scoped',
  'MVP deployed',
  'First draft deployed on AWS or Azure',
  'Week-one progress update with your IT expert',
];

export function OurDelivery() {
  // Reveal only enhances an already-visible default — the rows render fully
  // visible server-side and the `revealed` class replays them as an entrance.
  const railRef = useScrollReveal<HTMLOListElement>({ threshold: 0.1 });

  return (
    // Light grey ground, same token the ChallengesSection uses, so this reads
    // as part of the page's established alternating rhythm rather than a new
    // hardcoded grey. It sits between two white-ground sections.
 
    <section
      data-section="home-delivery"
      className={`${SECTION_Y} relative overflow-hidden bg-surface-warm`}
    >
      <Container width="default" className="relative">
        {/* Two even columns spanning the full Container, matching the two-column
            pattern the rest of the home page uses (WhyChooseUsServicesSection).
            The previous fixed column caps plus `justify-center` floated both
            masses inward, so this section's content edges did not line up with
            the section above or below it — the rail in particular stopped well
            short of the shared right edge. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 lg:items-start">

          {/* ── Left: the claim ─────────────────────────────────────────── */}
          {/* max-w-[34rem] caps the heading measure so the claim does not grow
              to half of a 2048px container; the column itself still starts on
              the Container's left edge. */}
          <div className="max-w-[34rem]">
            <h2 className="text-h2 font-black text-gray-900 leading-tight text-balance">
              What We Promise in{' '}
              <span className="text-brand-600">Week One</span>
            </h2>
            <p className="mt-2 text-copy text-gray-600 leading-relaxed max-w-prose">
              Most engagements spend the first month scheduling. Here is what
              {' '}{SITE_CONFIG.name} puts on the table in the first seven days.
            </p>

            {/* Day 1 → Day 7 meter. Not a hero-metric tile — a scale label for
                the rail beside it, so the nine steps have a horizon. */}
            <div className="mt-4 sm:mt-5 flex items-center gap-3 max-w-xs">
              <span className="text-label font-semibold text-gray-600 tabular-nums">
                Day 1
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-brand-600 to-brand-600/20"
              />
              <span className="text-label font-semibold text-gray-600 tabular-nums">
                Day 7
              </span>
            </div>
          </div>

          {/* ── Right: the numbered rail ────────────────────────────────── */}
          {/* The rail now fills its half of the grid, so every row's right edge
              ends on the Container's right edge like the card grids elsewhere.
              Labels are short, so the row keeps a max-w on the text rather than
              stretching the sentence across the full column. */}
          <ol
            ref={railRef}
            className="delivery-rail relative w-full"
          >
            {/* Continuous spine behind the nodes. Sits under the row content
                and stops short of the last node so the sequence reads as
                arriving somewhere rather than trailing off. border-light
                (#e2e8f0) all but disappears against the surface-warm ground
                (#f1f5f9), so the spine uses gray-300. */}
            <span
              aria-hidden="true"
              className="delivery-spine absolute left-[15px] sm:left-[17px] top-4 bottom-6 w-px bg-gray-300"
            />

            {milestones.map((item, i) => {
              const isLast = i === milestones.length - 1;
              return (
                <li
                  key={item}
                  className="delivery-step group relative flex items-center gap-3 sm:gap-4
                    rounded-lg py-2 pl-0 pr-2 sm:py-2.5 sm:pr-4
                    transition-colors duration-300 hover:bg-surface-white"
                  style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
                >
                  {/* Node */}
                  <span
                    className={`relative z-10 flex-shrink-0 flex items-center justify-center
                      h-[31px] w-[31px] sm:h-[35px] sm:w-[35px] rounded-full
                      text-label font-bold tabular-nums
                      border transition-all duration-300
                      ${
                        isLast
                          ? 'bg-brand-600 border-brand-600 text-white shadow-brand-badge'
                          : 'bg-surface-white border-gray-300 text-brand-600 group-hover:border-brand-600'
                      }`}
                  >
                    {isLast ? (
                      <Rocket className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
                    ) : (
                      String(i + 1).padStart(2, '0')
                    )}
                  </span>

                  {/* Label */}
                  <span
                    className={`text-copy-sm sm:text-copy leading-snug text-balance max-w-[38ch] ${
                      isLast
                        ? 'font-bold text-gray-900'
                        : 'font-semibold text-text-heading'
                    }`}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
