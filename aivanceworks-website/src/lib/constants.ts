// ─────────────────────────────────────────────────────────────────────────────
// Branding is env-driven. Every brand string below reads from an environment
// variable with the current value as its fallback, so changing the brand is a
// deployment concern rather than a code change.
//
// These are all `NEXT_PUBLIC_*`, which Next inlines at build time. Every route
// here is statically prerendered, so the values are baked into the HTML at
// build — changing an env var requires a rebuild, not just a restart.
//
// Set them in `.env.local` for local work and in the hosting provider's env
// settings for production. `.env.example` documents the full set.
//
// ⚠ `NEXT_PUBLIC_SITE_URL` currently resolves to `http://localhost:3000` from
// `.env`, which is correct for local development but means any production build
// that inherits that file emits localhost canonicals sitewide. Set it explicitly
// in the deploy environment.
// ─────────────────────────────────────────────────────────────────────────────

/** Reads an env var, falling back when it is unset *or* set to an empty string. */
function env(value: string | undefined, fallback: string): string {
  return value && value.trim().length > 0 ? value : fallback;
}

export const CONTACT_EMAIL = env(process.env.NEXT_PUBLIC_CONTACT_EMAIL, 'contact@hdssoftware.com');
export const SUPPORT_EMAIL = env(process.env.NEXT_PUBLIC_SUPPORT_EMAIL, CONTACT_EMAIL);
export const FROM_EMAIL = env(process.env.EMAIL_FROM_ADDRESS, 'notifications@hdssoftware.com');

/** Short brand abbreviation used as a prefix throughout the navigation. */
export const BRAND_PREFIX = env(process.env.NEXT_PUBLIC_BRAND_PREFIX, 'HDS');

/** Public-facing brand / site name. */
export const sitename = env(process.env.NEXT_PUBLIC_SITE_NAME, 'HDS Software');

export const SITE_CONFIG = {
  name: sitename,
  /** Two-to-three letter mark rendered inside the logo tile. */
  abbreviation: BRAND_PREFIX,
  description: env(
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    'AI-first software development for startups. Expert teams in AI agents, RAG frameworks, Azure cloud, and custom development.'
  ),
  url: env(process.env.NEXT_PUBLIC_SITE_URL, 'https://devsolve.io'),
  ogImage: '/og-default.jpg',
  links: {
    twitter: env(process.env.NEXT_PUBLIC_TWITTER_URL, 'https://twitter.com/devsolve'),
    linkedin: env(process.env.NEXT_PUBLIC_LINKEDIN_URL, 'https://linkedin.com/company/devsolve'),
    github: env(process.env.NEXT_PUBLIC_GITHUB_URL, 'https://github.com/devsolve'),
  },
  /** Twitter/X handle used in card metadata. */
  twitterHandle: env(process.env.NEXT_PUBLIC_TWITTER_HANDLE, '@aivanceworks'),
  creator: `${sitename} Team`,
  company: {
    name: sitename,
    /** Registered entity name — appears in copyright and legal copy. */
    legalName: env(process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME, 'C10 LLC'),
    slogan: env(
      process.env.NEXT_PUBLIC_COMPANY_SLOGAN,
      'Transform Your Ideas Into Intelligent Solutions'
    ),
    email: CONTACT_EMAIL,
    phone: env(process.env.NEXT_PUBLIC_COMPANY_PHONE, '+1 (555) 123-4567'),
    address: {
      street: env(process.env.NEXT_PUBLIC_COMPANY_STREET, '123 Tech Street'),
      city: env(process.env.NEXT_PUBLIC_COMPANY_CITY, 'San Francisco'),
      state: env(process.env.NEXT_PUBLIC_COMPANY_STATE, 'CA'),
      zip: env(process.env.NEXT_PUBLIC_COMPANY_ZIP, '94102'),
      country: env(process.env.NEXT_PUBLIC_COMPANY_COUNTRY, 'US'),
    },
  },
} as const;


export const TECHNOLOGIES =  {
      title: 'Technologies',
      icon: 'Cpu',
      description: 'Our core tech stack',
      links: [
        { label: 'Next.js / React.js', href: '/services/web-app-development', icon: 'Globe' },
        { label: 'TypeScript / JavaScript', href: '/services/web-app-development', icon: 'Code2' },
        { label: '.NET 10', href: '/services/custom-software-development', icon: 'Layers' },
        { label: 'Python', href: '/services/generative-ai', icon: 'Cpu' },
        { label: 'Microsoft SQL', href: '/services/data-engineering', icon: 'Server' },
        { label: 'Azure', href: '/services/cloud-infrastructure', icon: 'Cloud' },
        { label: 'AWS', href: '/services/cloud-infrastructure', icon: 'Zap' },
      ],
    } as const;

export const CONTACT_CONFIG = {
  email: {
    contact: CONTACT_EMAIL,
    support: SUPPORT_EMAIL,
    from: process.env.EMAIL_FROM_ADDRESS || FROM_EMAIL,
  },
  phone: '+1 (555) 123-4567',
  responseTime: '24 hours',
  availability: {
    days: 'Monday - Friday',
    hours: '9:00 AM - 6:00 PM EST',
  },
  booking: {
    consultationDuration: 30,
    consultationType: 'Free Discovery Call',
    platforms: ['Zoom', 'Microsoft Teams', 'Google Meet'],
  },
} as const;
