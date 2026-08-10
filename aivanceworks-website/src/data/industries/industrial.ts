import type { IndustryCardData } from '@/types/pages';

// Card-only industry — presented as a category card on the homepage and the
// /industry index. No detail page, so the card routes into the booking flow.
// Promote to a full `IndustryPageData` file (and move its registry entry in
// lib/content.ts) when the page gets built.

const industrial: IndustryCardData = {
  slug: 'industrial',
  name: 'Industrial',
  shortDescription:
    'Custom software and AI for industrial operators — plant and asset operations, OT/IT integration, predictive maintenance, energy and utilities systems, and industrial analytics.',

  icon: 'Factory',
  href: '/book-consultation?industry=industrial',

  homeCard: {
    tagline:
      'The software layer over plant, asset, and field operations — where OT data becomes decisions the business can act on.',
    short: 'Industrial software — asset operations, OT/IT integration, and plant analytics.',
    image: '/images/industries/industrial/category-card.jpg',
    alt: 'An industrial plant with pipework and processing equipment at dusk',
    proof: ['Asset & Plant Operations', 'OT / IT Integration', 'Predictive Maintenance'],
  },
};

export default industrial;
