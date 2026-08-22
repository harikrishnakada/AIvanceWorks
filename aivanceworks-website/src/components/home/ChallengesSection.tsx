// No hooks, handlers or browser APIs here — this renders a static header and a
// map over a module-level array, so it stays on the server. Marking it
// 'use client' shipped the component and its three icons to the browser and
// added it to the homepage hydration pass for nothing.
import { Zap, CalendarCheck, DollarSign, LifeBuoy, Rocket, BadgeCheck } from 'lucide-react';
import { Container } from '@/components/shared/primitives';
import { IconTile } from '@/components/shared/primitives';
import { SITE_CONFIG } from '@/lib/constants';
import { SECTION_Y, SECTION_Y_TIGHT, CARD_GRID_GAP } from '@/lib/section-spacing';

const challenges = [
  {
    title: 'Express Delivery Needed?',
    description:
      'We speed up the clock by simplifying development stages with AI-powered workflows.',
    icon: Zap,
  },
  // {
  //   title: 'Response Time Struggles?',
  //   description:
  //     'We come back with a confirmed, booked appointment within 24 hours — and our development team promises your first draft deployed on Vercel in week one.',
  //   icon: CalendarCheck,
  // },
  {
    title: 'High Cost of In-House Teams?',
    description:
      'Our development team offers top-tier development expertise. We make your budget work without sacrificing quality.',
    icon: DollarSign,
  },
  {
    title: 'IT Staff Struggling to Adapt to What’s New?',
    description:
      'Our dedicated team is always available for help, routine maintenance, and in-depth technical assistance. No need to retrain your employees on the newest technology — we are here to fill that gap.',
    icon: LifeBuoy,
  },
  {
    title: 'Timeline Delays Going to Market?',
    description:
      'Most projects take months to plan, build, and test. We deliver products in weeks, not months — our product development team is top-tier experienced and dedicated to launching your product to market fast.',
    icon: Rocket,
  },
  {
    title: 'IT Not Certified for What You Need?',
    description: `Deep expertise in the Azure ecosystem ensures enterprise-grade solutions. ${SITE_CONFIG.name}’s dedicated development team holds AI-102, AZ-204, and DP-420 certifications, and more.`,
    icon: BadgeCheck,
  },
];

// The <h2> lives in one place but can be rendered from either `part`, so the
// cards can point at it with aria-labelledby wherever it ends up.
const CHALLENGES_HEADING_ID = 'home-challenges-heading';

// Which slice of the section to render.
//
//   'full'  — heading + subtitle + cards, the normal standalone section.
//   'title' — the <h2> alone. The homepage puts this inside its first-fold
//             wrapper so the title lands in the landing view (app/page.tsx).
//   'body'  — subtitle + cards, i.e. everything the fold must NOT show. Pair it
//             with a 'title' render; two 'full'/'title' renders on one page
//             would duplicate the heading id.
//
// A DOM split is unavoidable here: the fold wrapper's boundary has to fall
// between the title and the cards, and one element cannot straddle it. The
// `part` prop keeps that split inside this component rather than spreading the
// markup across two of them, and it stays self-adjusting — the alternative,
// rendering the section once and reserving space for the title with a hardcoded
// height in CSS, breaks the moment the heading copy or type scale changes.
type ChallengesPart = 'full' | 'title' | 'body';

export function ChallengesSection({ part = 'full' }: { part?: ChallengesPart } = {}) {
  // Emphasis carried by a single solid brand color, not a background-clip
  // gradient — gradient text is decorative and thins out the glyphs at these
  // sizes.
  const title = (
    <h2
      id={CHALLENGES_HEADING_ID}
      className="text-h2 lg:text-4xl font-black text-gray-900 leading-tight text-balance"
    >
      Are You Facing These <span className="text-brand-600">Obstacles?</span>
    </h2>
  );

  if (part === 'title') {
    return (
      <div
        data-section="home-challenges-intro"
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-7 lg:py-8"
      >
        <div data-challenges-intro className="text-center max-w-2xl mx-auto">
          {title}
        </div>
      </div>
    );
  }

  return (
    // Light grey ground so the white cards read as raised against it, and so
    // the section separates cleanly from the white StatementSection above and
    // ServicesSection below. surface-warm is the theme token, so it tracks the
    // active theme's neutral instead of a hardcoded grey.
    <section
      data-section="home-challenges"
      // Points at the heading whether it sits inside this section or up in the
      // fold, so the cards keep their accessible name either way.
      aria-labelledby={CHALLENGES_HEADING_ID}
      className={`${SECTION_Y_TIGHT} relative overflow-hidden`}
    >
      <Container width="default" className="relative">
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          {part === 'full' && <div className="mb-2">{title}</div>}
          {/* gray-500 clears 4.5:1 on white but only hits ~4.1:1 on the grey
              ground — gray-600 keeps the subhead readable at ~6.5:1. */}
          <p className="text-label md:text-copy text-gray-600 leading-relaxed">
            We understand the obstacles that hold businesses back — and we solve them.
          </p>
        </div>

        {/* Cards grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${CARD_GRID_GAP}`}>
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-6 md:p-7"
            >
              <IconTile icon={challenge.icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-h3 font-semibold text-text-heading mb-2 leading-snug text-balance">
                {challenge.title}
              </h3>
              <p className="text-copy text-text-body leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
