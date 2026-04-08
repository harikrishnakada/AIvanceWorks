export const CONTACT_EMAIL = 'serpentsoftware@gmail.com';
export const SUPPORT_EMAIL = 'serpentsoftware@gmail.com';
export const FROM_EMAIL = 'notifications@serpentsoftware.com';

export const sitename = 'aiDevsoft';
export const SITE_CONFIG = {
  name: sitename,
  description:
    'AI-first software development for startups. Expert teams in AI agents, RAG frameworks, Azure cloud, and custom development.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://serpentsoftware.com',
  ogImage: '/og-default.jpg',
  links: {
    twitter: 'https://twitter.com/serpentsoftware',
    linkedin: 'https://linkedin.com/company/serpentsoftware',
    github: 'https://github.com/serpentsoftware',
  },
  creator: `${sitename} Team`,
  company: {
    name: sitename,
    legalName: 'Rovasoft LLC',
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
    { label: 'AI & ML', href: '/services/ai-machine-learning' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industry', href: '/industry' },
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
  // AI & ML menu (standalone top-level dropdown)
  aiMlMenu: {
    title: 'AI and ML',
    icon: 'Brain',
    description: 'Intelligent automation & agents',
    links: [
      { label: 'Custom AI Agents', href: '/services/ai-machine-learning/agentic-ai-automation', icon: 'Zap' },
      { label: 'AI Strategy & Consulting', href: '/services/ai-machine-learning/ai-strategy-consulting', icon: 'MessageSquare' },
      { label: 'RAG Framework Development', href: '/services/ai-machine-learning/rag-frameworks', icon: 'Search' },
      { label: 'AI-Driven Diagnostics', href: '/services/ai-diagnostics', icon: 'Activity' },
      //{ label: 'AI Agents for Finance', href: '/services/ai-finance', icon: 'TrendingUp' },
      //{ label: 'AI Agents for Healthcare', href: '/services/ai-healthcare', icon: 'Heart' },
    ],
  },
  // Mega menu columns for "Services" dropdown
  servicesMenu: [
    {
      title: 'Software Engineering',
      icon: 'Code2',
      description: 'End-to-end software solutions',
      links: [
        { label: 'Product Discovery', href: '/services/product-discovery', icon: 'Search' },
        { label: 'AI Development', href: '/services/ai-machine-learning', icon: 'Bot' },
        { label: 'MVP Development', href: '/services/mvp-development', icon: 'Rocket' },
        { label: 'SaaS Software Development', href: '/services/saas-development', icon: 'Layers' },
        { label: 'Software Dev for Startups', href: '/services/startup-development', icon: 'Lightbulb' },
        { label: 'Enterprise Applications', href: '/services/enterprise-integration', icon: 'Building2' },
        { label: 'Web App Development', href: '/services/full-stack-development', icon: 'Globe' },
        { label: 'Mobile App Development', href: '/services/mobile-development', icon: 'Smartphone' },
        { label: 'Custom Software', href: '/services/custom-software', icon: 'Settings' },
        { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: 'Palette' },
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
    {
      title: 'Technologies',
      icon: 'Cpu',
      description: 'Our core tech stack',
      links: [
        { label: 'Next.js / React.js', href: '/services/full-stack-development', icon: 'Globe' },
        { label: 'TypeScript / JavaScript', href: '/services/full-stack-development', icon: 'Code2' },
        { label: '.NET 10', href: '/services/full-stack-development', icon: 'Layers' },
        { label: 'Python', href: '/services/ai-machine-learning', icon: 'Cpu' },
        { label: 'Microsoft SQL', href: '/services/data-engineering', icon: 'Server' },
        { label: 'Azure', href: '/services/cloud-engineering', icon: 'Cloud' },
        { label: 'AWS', href: '/services/cloud-engineering', icon: 'Zap' },
      ],
    },
  ],
  // Mega menu columns for "Solutions" dropdown
  solutionsMenu: [
    {
      heading: 'HealthCare',
      icon: 'Heart',
      links: [
        { label: 'Patient Portals', href: '/solutions/patient-portals', icon: 'Heart' },
        { label: 'EHR & EMR Development', href: '/solutions/ehr-emr-development', icon: 'Activity' },
        { label: 'Hospital Management Systems', href: '/solutions/hospital-management-systems', icon: 'Building2' },
      ],
    },
    {
      heading: 'Insurance',
      icon: 'Shield',
      links: [
        { label: 'Insurance Portals', href: '/solutions/insurance-portals', icon: 'Shield' },
        { label: 'Underwriting Software', href: '/solutions/underwriting-software', icon: 'TrendingUp' },
        { label: 'Agency Management Software', href: '/solutions/agency-management-software', icon: 'Building2' },
        { label: 'Policy Administration Systems', href: '/solutions/policy-administration-systems', icon: 'Layers' },
        { label: 'Quoting Software', href: '/solutions/quoting-software', icon: 'Cpu' },
        { label: 'Document Management Software', href: '/solutions/document-management-software', icon: 'Settings' },
      ],
    },
    {
      heading: 'E-Commerce & Retail',
      icon: 'ShoppingCart',
      links: [
        { label: 'E-Commerce Websites', href: '/solutions/e-commerce-websites', icon: 'ShoppingCart' },
        { label: 'Retail Websites', href: '/solutions/retail-websites', icon: 'Store' },
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
