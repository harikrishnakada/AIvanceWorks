// Shared vertical rhythm for page sections. This is the single source of truth:
// the `Section` primitive imports SECTION_PADDING from here, so a section using
// the primitive and a section using these constants directly land on the same
// scale. Change it here, nowhere else.
//
// ─── Why these numbers ───
// The previous scale was `py-5 sm:py-6 lg:py-8` — 20/24/32px, and frozen at `lg`.
// That was the main reason sections read as cramped on anything larger than a
// laptop: at 1920px every section had 32px of breathing room.
//
// The new scale grows to `xl` and `3xl`, but is deliberately RESTRAINED at the
// low end. Measured first: the home page was already 10852px tall — 16.3 screens
// of scroll — at 375px, and section padding accounted for only 476px of that. The
// length is content, not air. Constitution §10.4's documented py-12/16/20-24 would
// have added ~680px to the breakpoint that is already longest and has no reported
// problem. Making the phone scroll further to fix a desktop complaint is a net UX
// loss, so the base grows ~4% and the real growth lands from `lg` up.

/** The four section padding steps. Consumed by the `Section` primitive. */
export const SECTION_PADDING = {
  /** No padding. For first-fold sections whose height comes from the one-viewport
      wrapper in app/page.tsx rather than from their own padding. */
  flush: 'py-0',
  /** Tight — sections that already carry internal padding via a card shell. */
  sm: 'py-4 md:py-5 lg:py-6 xl:py-7 3xl:py-8',
  /** Standard — most sections. */
  md: 'py-8 md:py-10 lg:py-12 xl:py-14 3xl:py-16',
  /** Generous — sections that need to feel like a chapter break. */
  lg: 'py-10 md:py-12 lg:py-16 xl:py-16 3xl:py-20',

  /* NOTE these are ONE section's padding, but two adjacent sections each
     contribute theirs, so the visible band between them is DOUBLE the number
     here. An earlier revision used 3xl:py-24, which produced a ~192px blank
     band that read as a gap rather than as rhythm. Sized for the gap instead:
     3xl:py-16 lands ~128px between sections. When tuning these, measure the
     BAND, not the padding. */
} as const;

export const SECTION_Y_LOOSE: string = SECTION_PADDING.lg;

// Standard section — used by most page sections (services, challenges,
// why-choose-us, CTA, FAQ, industries, partners, etc.). Kept as a named export
// so the ~19 existing consumers pick up the new scale without being rewritten.
export const SECTION_Y: string = SECTION_PADDING.md;

// Tight section — used by the dark "panel" sections (experience, industries
// spotlight) that already carry their own internal padding via the card shell.
export const SECTION_Y_TIGHT: string = SECTION_PADDING.sm;

// Standard gap between cards in a card grid (services, challenges,
// why-choose-us, case studies). Was `gap-3 sm:gap-4` (12/16px), which read as
// cards fused together once they grew past ~500px wide. Matches the gutter the
// services carousel produces from CARD_SLIDE_X, so a grid and a carousel of the
// same cards read identically.
export const CARD_GRID_GAP = 'gap-4 md:gap-5 lg:gap-6 xl:gap-8 3xl:gap-10';

// Per-slide horizontal padding for card carousels. Adjacent slides each
// contribute this, so the visible gutter equals CARD_GRID_GAP.
export const CARD_SLIDE_X = 'px-2 md:px-2.5 lg:px-3 xl:px-4 3xl:px-5';

// Standard section that immediately follows a SECTION_Y_TIGHT section — keeps
// the shared bottom rhythm but trims the top so the two tight sections don't
// double up on whitespace.
export const SECTION_Y_AFTER_TIGHT =
  'pt-6 md:pt-8 lg:pt-10 xl:pt-12 3xl:pt-16 pb-10 md:pb-12 lg:pb-16 xl:pb-20 3xl:pb-24';
