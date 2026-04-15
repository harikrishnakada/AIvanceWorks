export const CONTACT_EMAIL = 'serpentsoftware@gmail.com';
export const SUPPORT_EMAIL = 'serpentsoftware@gmail.com';
export const FROM_EMAIL = 'notifications@serpentsoftware.com';

export const sitename = 'C10 Software';
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
    // { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  // Service pillars (used by footer, services page, etc.)
  // AI & ML is NOT listed here — it has its own top-level menu (aiMlMenu)
  services: [
    { label: 'Software Engineering', href: '/services/software-engineering' },
    { label: 'Cloud & Infrastructure', href: '/services/cloud-engineering' },
    { label: 'Security & Compliance', href: '/services/security-compliance' },
  ],
  // AI & ML menu (standalone top-level dropdown)
  aiMlMenu: {
    title: 'AI',
    icon: 'Brain',
    description: 'Intelligent automation & agents',
    links: [
      { label: 'AI Strategy & Consulting', href: '/services/ai-strategy-consulting', icon: 'MessageSquare' },
      { label: 'Generative AI', href: '/services/generative-ai', icon: 'Zap' },
      { label: 'NLP & Document AI', href: '/services/nlp-document-ai', icon: 'Search' },
      { label: 'Conversational AI', href: '/services/conversational-ai', icon: 'MessageCircle' },
      { label: 'Computer Vision', href: '/services/computer-vision', icon: 'Eye' },
      { label: 'Intelligent Automation', href: '/services/intelligent-automation', icon: 'Activity' },
    ],
  },
  // Mega menu columns for "Services" dropdown
  servicesMenu: [
    {
      title: 'Software Engineering',
      icon: 'Code2',
      description: 'End-to-end software solutions',
      links: [
        // Client-facing entry points (original)
        { label: 'Product Discovery', href: '/services/product-discovery', icon: 'Search' },
        { label: 'MVP Development', href: '/services/mvp-development', icon: 'Rocket' },
        { label: 'SaaS Software Development', href: '/services/saas-development', icon: 'Layers' },
        { label: 'Software Dev for Startups', href: '/services/startup-development', icon: 'Lightbulb' },
        { label: 'Web App Development', href: '/services/web-app-development', icon: 'Globe' },
        { label: 'Mobile App & Cross-Platform Development', href: '/services/mobile-development', icon: 'Smartphone' },
        { label: 'Custom Software Development', href: '/services/custom-software-development', icon: 'Settings' },
        { label: 'Application Modernization', href: '/services/application-modernization', icon: 'RefreshCw' },
        { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: 'Palette' },
        { label: 'Quality Engineering & Testing', href: '/services/quality-engineering', icon: 'CheckCircle' },
        { label: 'Architecture Advisory', href: '/services/architecture-advisory', icon: 'Layers' },
        { label: 'IT Consulting', href: '/services/it-consulting', icon: 'MessageSquare' },
      ],
    },
    {
      title: 'Infrastructure',
      icon: 'Server',
      description: 'Cloud & DevOps excellence',
      links: [
        { label: 'Cloud Strategy & Assessment', href: '/services/cloud-strategy', icon: 'Search' },
        { label: 'Cloud Migration & Modernization', href: '/services/cloud-migration', icon: 'Cloud' },
        { label: 'Cloud Infrastructure & Operations', href: '/services/cloud-infrastructure', icon: 'Server' },
        { label: 'DevOps', href: '/services/devops', icon: 'GitBranch' },
        { label: 'Platform Engineering', href: '/services/platform-engineering', icon: 'Cpu' },
        { label: 'Data Engineering', href: '/services/data-engineering', icon: 'Database' },
        { label: 'FinOps & Cloud Cost Optimization', href: '/services/finops', icon: 'TrendingUp' },
        { label: 'Security & Compliance', href: '/services/security-compliance', icon: 'Shield' },
      ],
    },
    {
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
