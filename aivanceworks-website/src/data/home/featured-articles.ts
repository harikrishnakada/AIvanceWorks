/**
 * Which blog articles appear in the homepage "What We're Writing About"
 * section, and in what order. Edit this file to curate the homepage — no
 * component change needed.
 *
 * A slug listed here that no longer exists in the CMS is skipped, not
 * rendered as a broken card.
 */
export const HOME_FEATURED_ARTICLE_SLUGS = [
  'agentic-ai-enterprise-automation',
  'software-development',
  'cloud-migration-strategy-2026',
];

/** Max cards to show. The grid is 3-up on desktop, so multiples of 3 fit best. */
export const HOME_FEATURED_ARTICLE_LIMIT = 3;

/**
 * When fewer than `HOME_FEATURED_ARTICLE_LIMIT` slugs above resolve to a real
 * post, top up with the most recent articles (never repeating one already
 * listed). Set to false to show only what is listed above.
 */
export const HOME_FEATURED_FILL_WITH_LATEST = true;
