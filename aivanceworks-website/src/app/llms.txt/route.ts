import { SITE_CONFIG, CONTACT_EMAIL } from '@/lib/constants';
import {
  getAllServicePageSlugs,
  getAllSolutionPageSlugs,
  getAllIndustryPageSlugs,
} from '@/lib/content';

export const dynamic = 'force-static';

/**
 * /llms.txt — the llmstxt.org convention: a plain-text, machine-readable map of
 * the site for AI crawlers and agents. Also read by Lighthouse's `llms-txt`
 * audit in the agentic-browsing category.
 *
 * Generated rather than committed as a static `public/llms.txt` for two
 * reasons: the URLs must follow `SITE_CONFIG.url` (per CLAUDE.md convention #8,
 * the brand and domain are never hardcoded), and the page lists are derived
 * from the same registries the routes use, so a new data file can't silently
 * go missing here.
 */

/** Turns "ai-development" into "Ai Development" as a last-resort label. */
function titleize(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function linkList(baseUrl: string, prefix: string, slugs: string[]): string {
  return slugs
    .slice()
    .sort()
    .map((slug) => `- [${titleize(slug)}](${baseUrl}${prefix}/${slug})`)
    .join('\n');
}

export function GET(): Response {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '');
  const { name, description } = SITE_CONFIG;
  const { legalName } = SITE_CONFIG.company;

  const body = `# ${name}

> ${name} (legal entity ${legalName}) is a US-based, AI-first software consultancy. ${description}

Engagements typically start with a free 30-minute discovery call. Contact: ${CONTACT_EMAIL}.
Site content is organized as Services (capability offerings), Solutions (packaged
industry products), and Industries (vertical landing pages).

## Core pages

- [Home](${baseUrl}/): Company overview, primary capabilities, and featured work
- [Services](${baseUrl}/services): Full catalog of engineering and advisory services
- [Solutions](${baseUrl}/solutions): Packaged, industry-specific software products
- [Industries](${baseUrl}/industry): Vertical practice areas and domain expertise
- [About](${baseUrl}/about): Company background, approach, and delivery model
- [Contact](${baseUrl}/contact): Contact form and direct contact details
- [Book a consultation](${baseUrl}/book-consultation): Schedule a free 30-minute discovery call

## Services

${linkList(baseUrl, '/services', getAllServicePageSlugs())}

## Solutions

${linkList(baseUrl, '/solutions', getAllSolutionPageSlugs())}

## Industries

${linkList(baseUrl, '/industry', getAllIndustryPageSlugs())}

## Optional

- [Blog](${baseUrl}/blog): Technical articles on AI, cloud, and software delivery
- [Case Studies](${baseUrl}/case-studies): Client engagement write-ups and outcomes
- [Team](${baseUrl}/team): Team structure and expertise
- [Privacy Policy](${baseUrl}/legal/privacy-policy): Data handling and privacy practices
- [Terms of Service](${baseUrl}/legal/terms-of-service): Terms governing use of the site
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
