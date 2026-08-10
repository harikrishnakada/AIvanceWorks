import type { IndustryCardData } from '@/types/pages';

// Card-only industry — presented as a category card on the homepage and the
// /industry index. No detail page, so the card routes into the booking flow.
// Promote to a full `IndustryPageData` file (and move its registry entry in
// lib/content.ts) when the page gets built.

const construction: IndustryCardData = {
  slug: 'construction',
  name: 'Construction',
  shortDescription:
    'Custom software and AI for construction firms, contractors, and project managers — BIM, project controls, field operations, safety compliance, and construction analytics.',

  icon: 'HardHat',
  href: '/book-consultation?industry=construction',

  homeCard: {
    tagline:
      'The software layer that connects the office to the jobsite — how construction firms plan, execute, and control projects.',
    short: 'Construction software — BIM, project controls, field operations, and safety.',
    image: '/images/industries/construction/category-card.jpg',
    alt: 'A construction site with cranes and a building under structural work',
    proof: ['BIM & Design Coordination', 'Project Controls', 'Field & Safety Ops'],
  },
};

export default construction;
