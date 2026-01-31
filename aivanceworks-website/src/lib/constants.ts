export const SITE_CONFIG = {
  name: 'AIvanceWorks',
  description:
    'AI-first software consulting for startups. Expert teams in AI agents, RAG frameworks, Azure cloud, and custom development.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aivanceworks.com',
  ogImage: '/og-default.jpg',
  links: {
    twitter: 'https://twitter.com/aivanceworks',
    linkedin: 'https://linkedin.com/company/aivanceworks',
    github: 'https://github.com/aivanceworks',
  },
  creator: 'AIvanceWorks Team',
  company: {
    name: 'AIvanceWorks',
    legalName: 'AIvanceWorks LLC',
    slogan: 'Transform Your Ideas Into Intelligent Solutions',
    email: 'contact@aivanceworks.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Tech Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'US',
    },
  },
} as const;

export const NAVIGATION = {
  main: [
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'AI Solutions', href: '/services/ai-solutions' },
    { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { label: 'Custom Development', href: '/services/custom-software-development' },
    { label: 'Data Analytics', href: '/services/data-analytics' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'DevOps', href: '/services/devops' },
  ],
} as const;
