export const CONTACT_EMAIL = 'serpentsoftware@gmail.com';
export const SUPPORT_EMAIL = 'serpentsoftware@gmail.com';
export const FROM_EMAIL = 'notifications@serpentsoftware.com';

export const SITE_CONFIG = {
  name: 'Serpent Software',
  description:
    'AI-first software development for startups. Expert teams in AI agents, RAG frameworks, Azure cloud, and custom development.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://serpentsoftware.com',
  ogImage: '/og-default.jpg',
  links: {
    twitter: 'https://twitter.com/serpentsoftware',
    linkedin: 'https://linkedin.com/company/serpentsoftware',
    github: 'https://github.com/serpentsoftware',
  },
  creator: 'Serpent Software Team',
  company: {
    name: 'Serpent Software',
    legalName: 'Serpent Software LLC',
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
    { label: 'What We Do', href: '/services' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  // Legacy flat list (used by footer, services page, etc.)
  services: [
    { label: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
    { label: 'Cloud Engineering', href: '/services/cloud-engineering' },
    { label: 'Full-Stack Development', href: '/services/full-stack-development' },
    { label: 'Data Engineering', href: '/services/data-engineering' },
    { label: 'DevOps & CI/CD', href: '/services/devops-automation' },
    { label: 'Enterprise Integration', href: '/services/enterprise-integration' },
    { label: 'Security & Compliance', href: '/services/security-compliance' },
  ],
  // Mega menu columns for "What We Do"
  whatWeDo: [
    {
      title: 'Artificial Intelligence',
      icon: 'Brain',
      description: 'Intelligent automation & agents',
      links: [
        { label: 'AI Development', href: '/services/ai-machine-learning', icon: 'Cpu' },
        { label: 'AI-Driven Diagnostics', href: '/services/ai-diagnostics', icon: 'Activity' },
        { label: 'AI Automation Systems', href: '/services/ai-automation', icon: 'Zap' },
        { label: 'AI Agents for Finance', href: '/services/ai-finance', icon: 'TrendingUp' },
        { label: 'AI Agents for Healthcare', href: '/services/ai-healthcare', icon: 'Heart' },
      ],
    },
    {
      title: 'Services',
      icon: 'Code2',
      description: 'End-to-end software solutions',
      links: [
        { label: 'AI Development', href: '/services/ai-machine-learning', icon: 'Bot' },
        { label: 'MVP Development', href: '/services/mvp-development', icon: 'Rocket' },
        { label: 'SaaS Software Development', href: '/services/saas-development', icon: 'Layers' },
        { label: 'Software Dev for Startups', href: '/services/startup-development', icon: 'Lightbulb' },
        { label: 'Enterprise Applications', href: '/services/enterprise-integration', icon: 'Building2' },
        { label: 'Web App Development', href: '/services/full-stack-development', icon: 'Globe' },
        { label: 'Mobile App Development', href: '/services/mobile-development', icon: 'Smartphone' },
        { label: 'Custom Software', href: '/services/custom-software', icon: 'Settings' },
        { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: 'Palette' },
        { label: 'Product Discovery', href: '/services/product-discovery', icon: 'Search' },
        { label: 'E-Commerce', href: '/services/e-commerce', icon: 'ShoppingCart' },
        { label: 'IT Consulting', href: '/services/it-consulting', icon: 'MessageSquare' },
        { label: 'IT Support', href: '/services/it-support', icon: 'Headphones' },
      ],
    },
    {
      title: 'Infrastructure',
      icon: 'Server',
      description: 'Cloud & DevOps excellence',
      links: [
        { label: 'DevOps', href: '/services/devops-automation', icon: 'GitBranch' },
        { label: 'Cloud Migration', href: '/services/cloud-engineering', icon: 'Cloud' },
        { label: 'CI/CD Pipeline Setup', href: '/services/ci-cd-pipeline', icon: 'RefreshCw' },
        { label: 'Security', href: '/services/security-compliance', icon: 'Shield' },
      ],
    },
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
