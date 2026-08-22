'use client';

/**
 * BlueprintShowcase — homepage stage that rotates through the engineering
 * blueprints we normally only show on individual service pages.
 *
 * The argument it makes: the ChallengesSection above it lists the obstacles a
 * buyer arrives with. This section answers the unspoken follow-up — "fine, but
 * do you actually know how to build it?" — by putting two real internal
 * artefacts on screen: the routing we run before choosing an AI approach, and
 * the layer stack we design a SaaS platform against. Claims are cheap; a
 * working diagram someone can click through is not.
 *
 * Why a slideshow rather than both stacked: each exhibit is a dense, full-width
 * diagram. Side by side they compete; stacked they add two screens of scroll to
 * a homepage. A stage shows one at a time and lets the visitor pick.
 *
 * Mechanics follow the established homepage carousel system — `useCarouselAutoplay`
 * (off-screen / hidden-tab / reduced-motion aware) and a `--fill-duration` value
 * shared between the JS timer and the countdown ring so the two can't drift.
 *
 * Controls are a pager — ‹ current exhibit ›  — not a tablist, because only the
 * active panel is ever mounted; advertising two tabs for one panel would
 * describe a structure that isn't in the DOM. The exhibit is named rather than
 * reduced to a dot, so the visitor can see what they're moving between.
 *
 * Two different kinds of interaction, two different responses:
 *   - Arrow presses are stage control. They re-time the rotation and it keeps
 *     going, so the slideshow survives being steered.
 *   - Touching, hovering, or focusing the diagram is content engagement, and
 *     stops rotation for good. Yanking a panel away mid-read would be hostile.
 */

import { useCallback, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Layers,
  Pause,
  Play,
} from 'lucide-react';
import { Container } from '@/components/shared/primitives';
import { AiApproachSelector, SaasArchitectureBlueprint } from '@/components/signature';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCarouselAutoplay } from '@/hooks/useCarouselAutoplay';

const AUTOPLAY_MS = 5000;

const EXHIBITS = [
  {
    id: 'ai-approach',
    icon: GitBranch,
    label: 'Choosing the AI approach',
    /** The name shown in the pager at every width — `label` is the long form
     *  that only ever reaches assistive tech. See the note at the pager label. */
    shortLabel: 'AI Development',
    kind: 'Decision routing',
    lede: '',
    hint: 'Click any approach to see when it fits and what we build.',
    href: '/services/ai-development',
    linkLabel: 'See AI development',
    render: () => <AiApproachSelector embedded />,
  },
  {
    id: 'saas-architecture',
    icon: Layers,
    label: 'Architecting a SaaS platform',
    shortLabel: 'SaaS Development',
    kind: 'System blueprint',
    lede: '',
    hint: 'Click any layer to explore its components.',
    href: '/services/saas-development',
    linkLabel: 'See SaaS development',
    render: () => <SaasArchitectureBlueprint embedded />,
  },
] as const;

export function BlueprintShowcase() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const [index, setIndex] = useState(0);

  // Depending on `index` is deliberate, not an oversight. The hook rebuilds its
  // interval whenever `onTick` changes identity, so tying that identity to the
  // current slide restarts the 5s countdown every time the slide changes — from
  // the timer OR from an arrow press. That is what keeps the ring and the timer
  // showing the same number, and it means an arrow press re-times the rotation
  // instead of stopping it.
  const advance = useCallback(() => {
    setIndex((index + 1) % EXHIBITS.length);
  }, [index]);

  const { containerRef, isPaused, isRunning, setPaused, pause } =
    useCarouselAutoplay<HTMLDivElement>({
      onTick: advance,
      intervalMs: AUTOPLAY_MS,
    });

  // Arrow navigation is stage control, not content engagement, so it does NOT
  // pause — rotation continues from the new slide. Engaging with the diagram
  // itself still stops it (see the stage handlers below).
  const step = (delta: number) => {
    setIndex((prev) => (prev + delta + EXHIBITS.length) % EXHIBITS.length);
  };

  const active = EXHIBITS[index];
  const ActiveIcon = active.icon;

  return (
    <section
      data-section="home-blueprints"
      className="relative overflow-hidden py-8 md:py-10 lg:py-14 bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light"
    >
      {/* Faint plan-grid ground, matching the dark Section primitive, so the
          diagrams read as drawings on a drafting surface. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[680px] h-72 bg-brand-500/[0.10] rounded-full blur-[140px]"
      />

      <div className="relative z-10">
        <Container>
          {/* ── Header ──────────────────────────────────────────────────── */}
          <div
            ref={headerRef}
            className="scroll-step max-w-3xl mb-6 md:mb-8"
          >
            <h2 className="text-h2 font-bold tracking-tight text-balance mb-3">
              Before We Build, We{' '}
              <span className="text-brand-400">Draw It</span>
            </h2>
            <p className="text-copy-sm md:text-copy text-text-light/70 leading-relaxed text-pretty">
              Two of the working diagrams our engineers take into a first
              engagement — the decision routing behind an AI build, and the layer
              stack behind a SaaS platform. Click through them the way a client
              would.
            </p>
          </div>

          {/* ── Pager ───────────────────────────────────────────────────────
              One exhibit on screen at a time, named between two arrows. Only
              the active panel is ever mounted, so this is a pager rather than a
              tablist — advertising two tabs when only one panel exists would
              describe a structure that isn't there. */}
          {/* items-stretch so the arrows take their height from the pill and the
              three pieces read as one rail at every breakpoint. */}
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Engineering blueprints"
            className="flex items-stretch gap-1.5 sm:gap-3 mb-6 md:mb-8"
          >
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={`Previous blueprint: ${EXHIBITS[(index - 1 + EXHIBITS.length) % EXHIBITS.length].label}`}
              className="flex w-9 shrink-0 items-center justify-center rounded-xl border border-border-dark bg-white/[0.02] text-text-light/60 transition-colors duration-300 hover:border-brand-400/40 hover:bg-brand-500/[0.10] hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark-to sm:w-11"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>

            {/* Current exhibit. The countdown ring doubles as the pause control,
                so timing and affordance are one object rather than a progress
                bar sitting beside a media glyph. The ring only renders while the
                timer is genuinely ticking, so a stopped stage never implies
                movement. */}
            <div className="relative flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-brand-400/40 bg-brand-500/[0.10] px-2 py-2 sm:justify-center sm:gap-3 sm:px-3 sm:pr-12">
              <button
                type="button"
                onClick={() => setPaused(!isPaused)}
                aria-pressed={isPaused}
                aria-label={isPaused ? 'Start blueprint slideshow' : 'Pause blueprint slideshow'}
                title={isPaused ? 'Start slideshow' : 'Pause slideshow'}
                className="group relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-400/25 bg-surface-dark-to/40 transition-colors duration-300 hover:border-brand-400/50 hover:bg-brand-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark-to sm:h-10 sm:w-10"
              >
                <svg
                  viewBox="0 0 36 36"
                  className="absolute inset-0 h-full w-full -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white/[0.07]"
                  />
                  {isRunning && (
                    <circle
                      // Keyed on the slide so the sweep restarts each advance.
                      key={index}
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="blueprint-ring text-brand-400"
                      style={{ '--fill-duration': `${AUTOPLAY_MS}ms` } as React.CSSProperties}
                    />
                  )}
                </svg>
                {isPaused ? (
                  <Play
                    className="relative h-3 w-3 translate-x-px text-text-light/75 sm:h-3.5 sm:w-3.5 transition-colors duration-300 group-hover:text-brand-300"
                    aria-hidden="true"
                  />
                ) : (
                  <Pause
                    className="relative h-3 w-3 text-text-light/75 transition-colors duration-300 group-hover:text-brand-300 sm:h-3.5 sm:w-3.5"
                    aria-hidden="true"
                  />
                )}
              </button>

              {/* Which exhibit is on screen — with a pager there is no selected
                  tab to carry that. Live only while rotation is stopped: an
                  auto-advancing region set to `polite` would interrupt a screen
                  reader every 5 seconds, which is why WAI's carousel guidance
                  wants `off` until the user takes control. */}
              {/* The name has to hold one line. Phone width can't take the long
                  form — at 360px "Architecting a SaaS platform" cleared the
                  space by 1px and at 320px it overflowed by 39px — so the short
                  name is what ships at EVERY width rather than swapping
                  vocabulary at 640px and describing the exhibit two different
                  ways. `whitespace-nowrap` makes the single line a guarantee
                  rather than a hope. The full name still reaches screen readers
                  through the arrows' labels and the slide's aria-label.

                  The second line is the exhibit's kind at every width too. Run
                  state used to live here on mobile, but the play/pause glyph and
                  the countdown ring already carry that — spending the only
                  descriptive line on it cost phone visitors the one label that
                  says what they're looking at. */}
              <p className="min-w-0 sm:flex-none" aria-live={isPaused ? 'polite' : 'off'}>
                <span className="flex items-center gap-2">
                  <ActiveIcon
                    className="hidden h-4 w-4 shrink-0 text-brand-300 sm:block"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap text-copy-sm font-semibold leading-tight text-text-light">
                    {active.shortLabel}
                  </span>
                </span>
                <span className="mt-0.5 block whitespace-nowrap text-label leading-tight text-text-light/45">
                  {active.kind}
                </span>
              </p>

              {/* Absolute so it anchors the pill's right edge without pulling the
                  centred name off-centre. Hidden on mobile, where the name needs
                  every pixel and two arrows already show there is more to see. */}
              <span
                className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-label font-medium tabular-nums text-text-light/40 sm:block"
                aria-hidden="true"
              >
                {index + 1}/{EXHIBITS.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label={`Next blueprint: ${EXHIBITS[(index + 1) % EXHIBITS.length].label}`}
              className="flex w-11 shrink-0 items-center justify-center rounded-xl border border-border-dark bg-white/[0.02] text-text-light/60 transition-colors duration-300 hover:border-brand-400/40 hover:bg-brand-500/[0.10] hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark-to"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* ── Stage ───────────────────────────────────────────────────── */}
          <div
            ref={containerRef}
            onMouseEnter={pause}
            onPointerDownCapture={pause}
            onFocusCapture={pause}
            // Touch has no hover to pause on, and on a phone the panel is taller
            // than the viewport — so a reader scrolling through the diagram would
            // have it swapped out from under them. The first touch anywhere in
            // the stage (including the one that starts a scroll) means engaged,
            // so rotation stops for good.
            onTouchStartCapture={pause}
          >
            <div
              // Keyed on the exhibit so the entrance replays and each diagram
              // mounts with its own focus state cleared.
              key={active.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${EXHIBITS.length}: ${active.label}`}
              id={`blueprint-panel-${active.id}`}
              className="blueprint-panel-in rounded-2xl border border-border-dark bg-white/[0.02] px-4 py-6 sm:px-6 md:px-8 md:py-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8 mb-6 md:mb-8">
                <p className="max-w-2xl text-copy-sm md:text-copy text-text-light/75 leading-relaxed text-pretty">
                  {active.lede}
                </p>
                <Link
                  href={active.href}
                  className="group inline-flex shrink-0 items-center text-copy-sm font-semibold text-brand-300 hover:text-brand-200 transition-colors duration-300 py-1"
                >
                  {active.linkLabel}
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                </Link>
              </div>

              {active.render()}

              <p className="text-center text-label text-text-light/35 mt-6">
                {active.hint}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
