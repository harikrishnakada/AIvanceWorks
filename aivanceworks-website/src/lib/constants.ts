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
    legalName: 'C10 LLC',
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
    //{ label: 'AI', href: '/services/ai-machine-learning' },
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
  // AI menu (standalone top-level dropdown — grouped: Solutions + Services)
  aiMlMenu: {
    title: 'AI',
    icon: 'Brain',
    description: 'Intelligent automation & agents',
    groups: [
      {
        title: 'AI Industry Solutions',
        icon: 'Sparkles',
        description: 'AI-powered industry platforms',
        links: [
          { label: 'C10 AI Pharma', href: '/solutions/ai-pharma', icon: 'Pill' },
          { label: 'C10 AI Healthcare', href: '/solutions/ai-healthcare', icon: 'Stethoscope' },
          { label: 'C10 AI Infrastructure', href: '/solutions/ai-infrastructure', icon: 'Server' },
        ],
      },
      {
        title: 'Automation & Intelligence',
        icon: 'Brain',
        description: 'AI capability building blocks',
        links: [
          { label: 'Generative AI', href: '/services/generative-ai', icon: 'Sparkles' },
          { label: 'NLP & Document AI', href: '/services/nlp-document-ai', icon: 'FileText' },
          { label: 'Custom AI Agents', href: '/services/conversational-ai', icon: 'MessageCircle' },
          { label: 'Computer Vision', href: '/services/computer-vision', icon: 'Eye' },
        ],
      },
    ],
  },
  // Mega menu columns for "Services" dropdown
  servicesMenu: [
     {
      title: 'Advisory',
      icon: 'MessageSquare',
      description: 'Strategic guidance & consulting',
      links: [
        { label: 'C10 IT Consulting', href: '/services/c10-it-consulting', icon: 'MessageSquare' },
        { label: 'C10 Cloud Computing', href: '/services/c10-cloud-computing', icon: 'Cloud' },
        { label: 'C10 Architecture Advisory', href: '/services/c10-architecture-advisory', icon: 'Layers' },
      ],
    },
        {
      title: 'Enterprise',
      icon: 'Building2',
      description: 'Business platforms at scale',
      links: [
        { label: 'ERP', href: '/services/erp-development', icon: 'Rocket' },
        { label: 'CRM', href: '/services/crm', icon: 'Lightbulb' },
        { label: 'HCM', href: '/services/human-capital-management', icon: 'Users' },
      ],
    },
    {
      title: 'Software Engineering',
      icon: 'Code2',
      description: 'End-to-end software solutions',
      links: [
        // Client-facing entry points (original)
        { label: 'Custom Software Development', href: '/services/custom-software-development', icon: 'Settings' },
        { label: 'API Development', href: '/services/api-development', icon: 'Webhook' },
        { label: 'Proof of Concept (PoC)', href: '/services/proof-of-concept', icon: 'FlaskConical' },
        { label: 'MVP Development', href: '/services/mvp-development', icon: 'Rocket' },
        { label: 'Market Research', href: '/services/market-research', icon: 'Search' },
        { label: 'SaaS Software Development', href: '/services/saas-development', icon: 'Layers' },
        { label: 'Web App Development', href: '/services/web-app-development', icon: 'Globe' },
        { label: 'Mobile App & Cross-Platform Development', href: '/services/mobile-development', icon: 'Smartphone' },
        { label: 'Legacy Modernization', href: '/services/application-modernization', icon: 'RefreshCw' },
        { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: 'Palette' },
        { label: 'Quality Engineering & Testing', href: '/services/quality-engineering', icon: 'CheckCircle' },
      ],
    },  
    {
      title: 'Infrastructure Management',
      icon: 'Server',
      description: 'Cloud & DevOps excellence',
      links: [
        { label: 'Cloud Migration & Modernization', href: '/services/cloud-migration', icon: 'Cloud' },
        { label: 'Cloud Infrastructure & Operations', href: '/services/cloud-infrastructure', icon: 'Server' },
        { label: 'Managed Infrastructure Services', href: '/services/managed-infrastructure', icon: 'ServerCog' },
        { label: 'DevOps', href: '/services/devops', icon: 'GitBranch' },
        { label: 'Platform Engineering', href: '/services/platform-engineering', icon: 'Cpu' },
        { label: 'Data Engineering', href: '/services/data-engineering', icon: 'Database' },
        { label: 'Security & Compliance', href: '/services/security-compliance', icon: 'Shield' },
      ],
    }  
  ],
  // Mega menu columns for "Solutions" dropdown
  solutionsMenu: [
    {
      heading: 'Clinical',
      description: 'Clinical trial operations & technology',
      icon: 'Stethoscope',
      links: [
        { label: 'CTMS', href: '/solutions/ctms', icon: 'Workflow' },
        { label: 'Regulatory Information Management (RIM)', href: '/solutions/regulatory-information-management', icon: 'FileText' },
      ],
    },

    // {
    //   heading: 'E-Commerce & Retail',
    //   icon: 'ShoppingCart',
    //   links: [
    //     { label: 'E-Commerce Websites', href: '/solutions/e-commerce-websites', icon: 'ShoppingCart' },
    //     { label: 'Retail Websites', href: '/solutions/retail-websites', icon: 'Store' },
    //   ],
    // },
   {
      heading: 'HealthCare Technologies',
      description: 'Patient & hospital systems',
      icon: 'Heart',
      links: [
        { label: 'Patient Portals', href: '/solutions/patient-portals', icon: 'Heart' },
        { label: 'EHR Development', href: '/solutions/ehr-development', icon: 'Activity' },
        { label: 'EMR Development', href: '/solutions/emr-development', icon: 'ClipboardList' },
        { label: 'Hospital Management Systems', href: '/solutions/hospital-management-systems', icon: 'Building2' },
        { label: 'Hospital Information Systems', href: '/solutions/hospital-information-systems', icon: 'Network' },
      ],
    },
     {
      heading: 'Life Sciences',
      description: 'Solutions for pharma, biotech, and clinical research',
      icon: 'FlaskConical',
      links: [
        { label: 'ETMF', href: '/solutions/etmf', icon: 'FileText' },
        { label: 'Randomization and Trial Supply Management', href: '/solutions/rtsm', icon: 'Package' },
        { label: 'Drug Discovery', href: '/solutions/drug-discovery', icon: 'FlaskConical' },
        { label: 'Laboratory Information Management Systems (LIMS)', href: '/solutions/lims', icon: 'Microscope' }
      ],
    },
      {
      heading: 'Manufacturing & Supply Chain',
      description: 'Manufacturing and supply chain management systems',
      icon: 'Truck',
      links: [
        { label: 'Electronic Batch Records (EBR)', href: '/solutions/electronic-batch-records', icon: 'FileSignature' },
        { label: 'Manufacturing Execution Systems (MES)', href: '/solutions/mes', icon: 'Factory' },
        { label: 'Manufacturing Operations Management (MOM)', href: '/solutions/manufacturing-operations-management', icon: 'Layers' },
        { label: 'Supply Chain Management (SCM)', href: '/solutions/supply-chain-management', icon: 'Truck' },
        { label: 'Warehouse Management Systems (WMS)', href: '/solutions/warehouse-management-systems', icon: 'Warehouse' }
      ],
    },
         {
      heading: 'Insurance',
      description: 'Carrier & agency software systems',
      icon: 'Shield',
      links: [
        { label: 'Insurance Portals', href: '/solutions/insurance-portals', icon: 'Shield' },
        { label: 'Underwriting Software', href: '/solutions/underwriting-software', icon: 'TrendingUp' },
        { label: 'Agency Management Software', href: '/solutions/agency-management-software', icon: 'Building2' },
        { label: 'Policy Administration Systems', href: '/solutions/policy-administration-systems', icon: 'Layers' },
        { label: 'Quoting Software', href: '/solutions/quoting-software', icon: 'Cpu' },
        { label: 'Document Management Software', href: '/solutions/document-management-software', icon: 'Settings' },
      ],
    }

  ],
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
