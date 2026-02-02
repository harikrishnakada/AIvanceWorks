export const CONTACT_EMAIL = 'aivanceworks@gmail.com';
export const SUPPORT_EMAIL = 'aivanceworks@gmail.com';
export const FROM_EMAIL = 'notifications@aivanceworks.com';

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
    email: CONTACT_EMAIL,
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
    { label: 'About', href: '/about' }
    // { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
    { label: 'Cloud Engineering', href: '/services/cloud-engineering' },
    { label: 'Full-Stack Development', href: '/services/full-stack-development' },
    { label: 'Data Engineering', href: '/services/data-engineering' },
    { label: 'DevOps & CI/CD', href: '/services/devops-automation' },
    { label: 'Enterprise Integration', href: '/services/enterprise-integration' },
    { label: 'Security & Compliance', href: '/services/security-compliance' },
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
