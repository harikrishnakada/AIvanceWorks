// Shared vertical rhythm for homepage sections. Centralizing these keeps the
// spacing between sections consistent and lets it be tuned in one place.

// Standard section — used by most homepage sections (services, challenges,
// why-choose-us, CTA, FAQ, industries, partners, etc.)
export const SECTION_Y = 'py-4 sm:py-5 lg:py-7';

// Tight section — used by the dark "panel" sections (experience, industries
// spotlight) that already carry their own internal padding via the card shell.
export const SECTION_Y_TIGHT = 'pt-0.5 sm:pt-0.5 md:pt-1 pb-1 sm:pb-1.5 md:pb-2';

// Standard section that immediately follows a SECTION_Y_TIGHT section — keeps
// the shared bottom rhythm but trims the top so the two tight sections don't
// double up on whitespace.
export const SECTION_Y_AFTER_TIGHT = 'pt-3 sm:pt-4 lg:pt-5 pb-4 sm:pb-5 lg:pb-7';
