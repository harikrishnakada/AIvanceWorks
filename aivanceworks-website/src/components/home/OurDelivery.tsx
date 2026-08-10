'use client';

import { Rocket } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { SECTION_Y } from '@/lib/section-spacing';
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
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center ">
        {/* Eyebrow and quote run tight on phones — this block has to clear the
            fold alongside the hero, and mobile is where that budget is thinnest. */}
        <p
          data-statement-eyebrow
          className="text-[10px] sm:text-xs text-brand-600 uppercase tracking-[0.2em] font-semibold mb-3 sm:mb-5"
        >
          Our Promise
        </p>
      </div>
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* The rail is nine short rows, so at 1440px+ a stretched two-column
            grid leaves the claim stranded at the top of a tall empty column.
            Centering the claim against the rail keeps the two masses balanced. */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-6 lg:gap-12 xl:gap-16 lg:items-center lg:max-w-6xl lg:mx-auto">

          {/* ── Left: the claim ─────────────────────────────────────────── */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight text-balance">
              What We Promise in{' '}
              <span className="text-brand-600">Week One</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-prose">
              Most engagements spend the first month scheduling. Here is what
              {' '}{SITE_CONFIG.name} puts on the table in the first seven days.
            </p>

            {/* Day 1 → Day 7 meter. Not a hero-metric tile — a scale label for
                the rail beside it, so the nine steps have a horizon. */}
            <div className="mt-4 sm:mt-5 flex items-center gap-3 max-w-xs">
              <span className="text-[11px] sm:text-xs font-semibold text-gray-600 tabular-nums">
                Day 1
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-brand-600 to-brand-600/20"
              />
              <span className="text-[11px] sm:text-xs font-semibold text-gray-600 tabular-nums">
                Day 7
              </span>
            </div>
          </div>

          {/* ── Right: the numbered rail ────────────────────────────────── */}
          <ol ref={railRef} className="delivery-rail relative max-w-3xl">
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
                    rounded-lg py-2 pl-0 pr-2 sm:py-2.5
                    transition-colors duration-300 hover:bg-surface-white"
                  style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
                >
                  {/* Node */}
                  <span
                    className={`relative z-10 flex-shrink-0 flex items-center justify-center
                      h-[31px] w-[31px] sm:h-[35px] sm:w-[35px] rounded-full
                      text-[11px] sm:text-xs font-bold tabular-nums
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
                    className={`text-sm sm:text-base leading-snug text-balance ${
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
      </div>
    </section>
  );
}
