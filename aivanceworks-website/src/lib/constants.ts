export const CONTACT_EMAIL = 'serpentsoftware@gmail.com';
export const SUPPORT_EMAIL = 'serpentsoftware@gmail.com';
export const FROM_EMAIL = 'notifications@serpentsoftware.com';
export const BRAND_PREFIX = 'C10';
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
    // { label: 'Solutions', href: '/solutions' }, // hidden from UI (content preserved)
    { label: 'Industries', href: '/industry' },
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
      // AI Industry Solutions group hidden from UI (content preserved)
      // {
      //   title: 'AI Industry Solutions',
      //   icon: 'Sparkles',
      //   description: 'AI-powered industry platforms',
      //   links: [
      //     { label: 'C10 AI Pharma', href: '/solutions/ai-pharma', icon: 'Pill' },
      //     { label: 'C10 AI Healthcare', href: '/solutions/ai-healthcare', icon: 'Stethoscope' },
      //     { label: 'C10 AI Infrastructure', href: '/solutions/ai-infrastructure', icon: 'Server' },
      //   ],
      // },
      {
        title: 'AI Services',
        icon: 'Brain',
        description: 'AI capability building blocks',
        links: [
          { label: `${BRAND_PREFIX} AI Development`, href: '/services/ai-development', icon: 'Compass' },
          { label: `${BRAND_PREFIX} ML Development`, href: '/services/ml-development', icon: 'Workflow' },
          { label: `${BRAND_PREFIX} Native AI Development`, href: '/services/native-ai-development', icon: 'Brain' },
          { label: `${BRAND_PREFIX} Generative AI`, href: '/services/generative-ai', icon: 'Sparkles' },
          { label: `${BRAND_PREFIX} Agentic AI Development`, href: '/services/agentic-ai-development', icon: 'Bot' },
          { label: `${BRAND_PREFIX} Enterprise AI Development`, href: '/services/enterprise-ai-development', icon: 'Building2' },
          { label: `${BRAND_PREFIX} NLP & Document AI`, href: '/services/nlp-document-ai', icon: 'FileText' },
          { label: `${BRAND_PREFIX} Conversational AI`, href: '/services/conversational-ai', icon: 'MessageCircle' },
          { label: `${BRAND_PREFIX} Computer Vision`, href: '/services/computer-vision', icon: 'Eye' },
        ],
      },
    ],
  },
  // Advisory menu (standalone top-level dropdown — next to AI)
  advisoryMenu: {
    title: 'Advisory',
    icon: 'MessageSquare',
    description: 'Strategic guidance & consulting',
    groups: [
      {
        title: 'Consulting',
        icon: 'MessageSquare',
        description: 'Strategic guidance & consulting',
        links: [
          { label: `${BRAND_PREFIX} Product Discovery`, href: '/services/product-discovery', icon: 'Lightbulb' },
          { label: `${BRAND_PREFIX} AI Strategy`, href: '/services/c10-ai-strategy', icon: 'Brain' },
          { label: `${BRAND_PREFIX} IT Consulting`, href: '/services/c10-it-consulting', icon: 'MessageSquare' },
          { label: `${BRAND_PREFIX} Cloud Computing`, href: '/services/c10-cloud-computing', icon: 'Cloud' },
          { label: `${BRAND_PREFIX} Architecture Advisory`, href: '/services/c10-architecture-advisory', icon: 'Layers' },
        ],
      },
    ],
  },
  // Enterprise menu (standalone top-level dropdown — business platforms at scale)
  enterpriseMenu: {
    title: 'Enterprise',
    icon: 'Building2',
    description: 'Business platforms at scale',
    groups: [
      {
        title: 'Enterprise',
        icon: 'Building2',
        description: 'Business platforms at scale',
        links: [
          { label: `${BRAND_PREFIX} ERP`, href: '/services/erp-development', icon: 'Rocket' },
          { label: `${BRAND_PREFIX} CRM`, href: '/services/crm', icon: 'Lightbulb' },
          // { label: `${BRAND_PREFIX} HCM`, href: '/services/human-capital-management', icon: 'Users' },
        ],
      },
    ],
  },
  // Industries menu (standalone top-level dropdown — vertical landing pages)
  industriesMenu: {
    title: 'Industries',
    icon: 'Heart',
    description: 'Vertical-specific software & AI',
    groups: [
      {
        title: 'Industries',
        icon: 'Heart',
        description: 'Built around your industry',
        links: [
          { label: `${BRAND_PREFIX} Healthcare`, href: '/industry/healthcare', icon: 'Stethoscope' },
          { label: `${BRAND_PREFIX} Travel & Hospitality`, href: '/industry/travel-hospitality', icon: 'Plane' },
          { label: `${BRAND_PREFIX} Real Estate`, href: '/industry/real-estate', icon: 'Building2' },
          { label: `${BRAND_PREFIX} Manufacturing & Supply Chain`, href: '/industry/manufacturing-supply-chain', icon: 'Factory' },
          { label: `${BRAND_PREFIX} Logistics`, href: '/industry/logistics', icon: 'Truck' },
        ],
      },
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
        { label: `${BRAND_PREFIX} MVP Development`, href: '/services/mvp-development', icon: 'Rocket' },
        { label: `${BRAND_PREFIX} API Development`, href: '/services/api-development', icon: 'Webhook' },
        { label: `${BRAND_PREFIX} Digital Transformation`, href: '/services/digital-transformation', icon: 'Rocket' },
        { label: `${BRAND_PREFIX} SaaS Software Development`, href: '/services/saas-development', icon: 'Layers' },
        { label: `${BRAND_PREFIX} Custom Software Development`, href: '/services/custom-software-development', icon: 'Settings' },
        { label: `${BRAND_PREFIX} Mobile App Development`, href: '/services/mobile-development', icon: 'Smartphone' },
        { label: `${BRAND_PREFIX} Web App Development`, href: '/services/web-app-development', icon: 'Globe' },
        { label: `${BRAND_PREFIX} Proof of Concept (PoC)`, href: '/services/proof-of-concept', icon: 'FlaskConical' },
        { label: `${BRAND_PREFIX} Legacy Modernization`, href: '/services/application-modernization', icon: 'RefreshCw' },
        { label: `${BRAND_PREFIX} UI/UX Design`, href: '/services/ui-ux-design', icon: 'Palette' },
        { label: `${BRAND_PREFIX} Quality Engineering & Testing`, href: '/services/quality-engineering', icon: 'CheckCircle' },
        // { label: `${BRAND_PREFIX} Market Research`, href: '/services/market-research', icon: 'Search' }, // hidden from UI
      ],
    },
    {
      title: 'Infrastructure Management',
      icon: 'Server',
      description: 'Cloud & DevOps excellence',
      links: [
        { label: `${BRAND_PREFIX} Data Engineering`, href: '/services/data-engineering', icon: 'Database' },
        { label: `${BRAND_PREFIX} Platform Engineering`, href: '/services/platform-engineering', icon: 'Cpu' },
        { label: `${BRAND_PREFIX} DevOps & Cloud Engineering`, href: '/services/devops', icon: 'GitBranch' },
        { label: `${BRAND_PREFIX} IaaS (Infrastructure as a Service)`, href: '/services/managed-infrastructure', icon: 'ServerCog' },
        { label: `${BRAND_PREFIX} Cloud Migration & Modernization`, href: '/services/cloud-migration', icon: 'Cloud' },
        { label: `${BRAND_PREFIX} Cloud Infrastructure & Operations`, href: '/services/cloud-infrastructure', icon: 'Server' },
        { label: `${BRAND_PREFIX} Security & Compliance`, href: '/services/security-compliance', icon: 'Shield' },
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
        { label: `${BRAND_PREFIX} Patient Portals`, href: '/solutions/patient-portals', icon: 'Heart' },
        { label: `${BRAND_PREFIX} EHR Development`, href: '/solutions/ehr-development', icon: 'Activity' },
        { label: `${BRAND_PREFIX} EMR Development`, href: '/solutions/emr-development', icon: 'ClipboardList' },
        { label: `${BRAND_PREFIX} Hospital Management Systems`, href: '/solutions/hospital-management-systems', icon: 'Building2' },
        { label: `${BRAND_PREFIX} Hospital Information Systems`, href: '/solutions/hospital-information-systems', icon: 'Network' },
      ],
    },
     {
      heading: 'Life Sciences',
      description: 'Solutions for pharma, biotech, and clinical research',
      icon: 'FlaskConical',
      links: [
        { label: `${BRAND_PREFIX} ETMF`, href: '/solutions/etmf', icon: 'FileText' },
        { label: `${BRAND_PREFIX} Randomization and Trial Supply Management`, href: '/solutions/rtsm', icon: 'Package' },
        { label: `${BRAND_PREFIX} Drug Discovery`, href: '/solutions/drug-discovery', icon: 'FlaskConical' },
        { label: `${BRAND_PREFIX} Laboratory Information Management Systems (LIMS)`, href: '/solutions/lims', icon: 'Microscope' }
      ],
    },
      {
      heading: 'Manufacturing & Supply Chain',
      description: 'Manufacturing and supply chain management systems',
      icon: 'Truck',
      links: [
        { label: `${BRAND_PREFIX} Electronic Batch Records (EBR)`, href: '/solutions/electronic-batch-records', icon: 'FileSignature' },
        { label: `${BRAND_PREFIX} Manufacturing Execution Systems (MES)`, href: '/solutions/mes', icon: 'Factory' },
        { label: `${BRAND_PREFIX} Manufacturing Operations Management (MOM)`, href: '/solutions/manufacturing-operations-management', icon: 'Layers' },
        { label: `${BRAND_PREFIX} Supply Chain Management (SCM)`, href: '/solutions/supply-chain-management', icon: 'Truck' },
        { label: `${BRAND_PREFIX} Warehouse Management Systems (WMS)`, href: '/solutions/warehouse-management-systems', icon: 'Warehouse' }
      ],
    },
         {
      heading: 'Insurance',
      description: 'Carrier & agency software systems',
      icon: 'Shield',
      links: [
        { label: `${BRAND_PREFIX} Insurance Portals`, href: '/solutions/insurance-portals', icon: 'Shield' },
        { label: `${BRAND_PREFIX} Underwriting Software`, href: '/solutions/underwriting-software', icon: 'TrendingUp' },
        { label: `${BRAND_PREFIX} Agency Management Software`, href: '/solutions/agency-management-software', icon: 'Building2' },
        { label: `${BRAND_PREFIX} Policy Administration Systems`, href: '/solutions/policy-administration-systems', icon: 'Layers' },
        { label: `${BRAND_PREFIX} Quoting Software`, href: '/solutions/quoting-software', icon: 'Cpu' },
        { label: `${BRAND_PREFIX} Document Management Software`, href: '/solutions/document-management-software', icon: 'Settings' },
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
