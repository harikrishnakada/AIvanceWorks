// Projection shape for the homepage Industries section.
//
// This is a VIEW type only — it carries no data. The single source of truth
// for every industry (name, icon, card copy, chips, image) is
// `src/data/industries/*.ts`. The homepage cards are built from those files
// via `getHomeIndustries()` in `src/lib/content.ts`, which flattens each
// industry's canonical fields + `homeCard` block into this shape.

export interface HomeIndustry {
  /** Plain display name — "Healthcare", "Travel & Hospitality". */
  name: string;
  /** Full sentence — always visible, carries the message. */
  tagline: string;
  /** Short line for tight layouts (panels, collapsed states, aria-labels). */
  short: string;
  /** Concrete capability chips in the buyer's own vocabulary. */
  proof: string[];
  /** Link into the industry's /industry page — or the booking flow when it has none. */
  href: string;
  /**
   * False for card-only industries (no `/industry/<slug>` page). Card CTAs read
   * as an invitation to talk rather than "Explore …", which would promise a page.
   */
  hasPage: boolean;
  /** Purpose-shot category-card image (distinct from the industry hero). */
  image: string;
  alt: string;
  /** Lucide icon name — resolved via getLucideIcon. */
  icon: string;
}
