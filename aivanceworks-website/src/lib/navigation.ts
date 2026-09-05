// Site navigation tree, split out of constants.ts.
//
// It is ~13 KB of data and it is imported by Header, MobileMenu, Footer and the
// services/solutions index pages — i.e. it reaches the client on every route.
// Keeping it in constants.ts meant any module that wanted SITE_CONFIG or
// CONTACT_CONFIG pulled this in as well.

import { BRAND_PREFIX } from './constants';

// AI capability services. Shared by `aiMlMenu` (still consumed by the /services
// and /solutions pillar sections) and by the first column of the Services mega
// menu, which is where these now surface in the header — the standalone "AI"
// top-level dropdown is hidden. Defined once so the two stay in sync.
const AI_SERVICES_GROUP = {
  title: 'AI & Data',
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
    { label: `${BRAND_PREFIX} Data Engineering`, href: '/services/data-engineering', icon: 'Database' },
    { label: `${BRAND_PREFIX} Data Analytics`, href: '/services/data-analytics', icon: 'BarChart3' }
  ],
} as const;

/** Keys into `NAV_MENUS` — the dropdown panels a `type: 'dropdown'` item can open. */
export type NavMenuKey =
  | 'ai'
  | 'services'
  | 'advisory'
  | 'enterprise'
  | 'industries'
  | 'solutions';

/**
 * One top-level entry in the header.
 *
 * `type` and `isEnabled` are properties of the ITEM, not of a breakpoint — the
 * same list, in the same order, renders at every width. Header and MobileMenu
 * both read `main` and neither is allowed to add, drop or reorder anything.
 *
 * This replaced three hand-maintained menus (a desktop block, a tablet block and
 * a mobile accordion set) that each filtered `main` by hardcoded label strings.
 * They had drifted: Advisory appeared only at 768-1023px, and Industries was a
 * dropdown on tablet but a plain link on desktop and mobile.
 *
 * To retire an item, set `isEnabled: false` rather than deleting or commenting
 * it out — the entry keeps its slot in the order, so flipping the flag back puts
 * it where it belongs instead of at the end.
 */
export type NavItem =
  | { readonly label: string; readonly href: string; readonly type: 'link'; readonly isEnabled: boolean }
  | {
    readonly label: string;
    readonly href: string;
    readonly type: 'dropdown';
    /** Which `NAV_MENUS` panel this trigger opens. */
    readonly menu: NavMenuKey;
    readonly isEnabled: boolean;
  };

const MAIN_NAV: readonly NavItem[] = [

  { label: 'Industries', href: '/industry', type: 'link', isEnabled: true },
  { label: 'Services', href: '/services', type: 'dropdown', menu: 'services', isEnabled: true },
  // { label: 'Our Company', href: '/services', type: 'link', isEnabled: true },
  { label: 'Solutions', href: '/solutions', type: 'dropdown', menu: 'solutions', isEnabled: true },
  { label: 'Insights', href: '/blog', type: 'link', isEnabled: true },
  // { label: 'About', href: '/about', type: 'link', isEnabled: true },
  { label: 'About', href: '/services', type: 'link', isEnabled: true },
  { label: 'Contact', href: '/contact', type: 'link', isEnabled: true },

  { label: 'AI', href: '/services', type: 'dropdown', menu: 'ai', isEnabled: false },
  { label: 'Advisory', href: '/services', type: 'dropdown', menu: 'advisory', isEnabled: false },
  { label: 'Enterprise', href: '/services', type: 'dropdown', menu: 'enterprise', isEnabled: false },
  { label: 'Case Studies', href: '/case-studies', type: 'link', isEnabled: false }
];

export const NAVIGATION = {
  main: MAIN_NAV,
  // Service pillars (used by footer, services page, etc.)
  // AI & ML is NOT listed here — it has its own top-level menu (aiMlMenu)
  // These are pillar-level entries, not individual services. The first two used
  // to point at /services/software-engineering and /services/cloud-engineering,
  // neither of which is a registered slug — two sitewide footer links 404'd on
  // every page. They now target the matching pillar sections on /services, which
  // is what the labels actually describe. (Both anchors render; the
  // #infrastructure-management section was previously advertised but missing.)
  services: [
    { label: 'AI & Data', href: '/services#automation-intelligence' },
    { label: 'Consulting', href: '/services#advisoryg' },
    { label: 'Software Engineering', href: '/services#software-engineering' },
    { label: 'Cloud & Infrastructure', href: '/services#infrastructure-management' }
  ],
  // AI menu — hidden from the header (`isEnabled: false` in `main`). Kept because
  // the /services and /solutions pages still read `groups[0]` for their
  // "Automation & Intelligence" pillar section. The links reach the header via
  // the first column of `servicesMenu`.
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
      AI_SERVICES_GROUP,
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
          //{ label: `${BRAND_PREFIX} Banking`, href: '/industry/banking', icon: 'Landmark', showInNavigationMenu: true },
          { label: `${BRAND_PREFIX} Logistics`, href: '/industry/logistics', icon: 'Truck', showInNavigationMenu: true },
          { label: `${BRAND_PREFIX} Hospitality`, href: '/industry/travel-hospitality', icon: 'Plane', showInNavigationMenu: true },
          { label: `${BRAND_PREFIX} Real Estate`, href: '/industry/real-estate', icon: 'Building2', showInNavigationMenu: true },
          // { label: `${BRAND_PREFIX} Healthcare`, href: '/industry/healthcare', icon: 'Stethoscope', showInNavigationMenu: true },
          { label: `${BRAND_PREFIX} Retail`, href: '/industry/retail', icon: 'ShoppingBag', showInNavigationMenu: false },
          { label: `${BRAND_PREFIX} Food & Beverage`, href: '/industry/food-beverage', icon: 'Utensils', showInNavigationMenu: false },
          { label: `${BRAND_PREFIX} Manufacturing & Supply Chain`, href: '/industry/manufacturing-supply-chain', icon: 'Factory', showInNavigationMenu: true },
        ],
      },
    ],
  },
  // Mega menu columns for "Services" dropdown — AI Services leads the row.
  servicesMenu: [
    {
      title: 'Advisory',
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
    AI_SERVICES_GROUP,
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
        { label: `${BRAND_PREFIX} Enterprise Software Development`, href: '/services/enterprise-software-development', icon: 'Building2' },
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
    // {
    //   heading: 'Clinical',
    //   description: 'Clinical trial operations & technology',
    //   icon: 'Stethoscope',
    //   links: [
    //     { label: 'CTMS', href: '/solutions/ctms', icon: 'Workflow' },
    //     { label: 'Regulatory Information Management (RIM)', href: '/solutions/regulatory-information-management', icon: 'FileText' },
    //   ],
    // },

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
       { label: `${BRAND_PREFIX} CTMS`, href: '/solutions/ctms', icon: 'Workflow' },
        { label: `${BRAND_PREFIX} Regulatory Information Management (RIM)`, href: '/solutions/regulatory-information-management', icon: 'FileText' },
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

// ─────────────────────────────────────────────────────────────────────────────
// Dropdown panel registry
// ─────────────────────────────────────────────────────────────────────────────

export type NavMenuLink = {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
  /**
   * Industries only: some verticals have pages but are deliberately kept out of
   * the header. Absent means "show it" — only an explicit `false` hides a link.
   */
  readonly showInNavigationMenu?: boolean;
};

export type NavMenuColumn = {
  readonly title: string;
  readonly description?: string;
  readonly icon: string;
  readonly links: readonly NavMenuLink[];
};

export type NavMenu = {
  /** Rendered one per grid cell. Column COUNT picks the panel width: see NavMegaPanel. */
  readonly columns: readonly NavMenuColumn[];
  /** Footer bar of the panel. */
  readonly cta: { readonly prompt: string; readonly href: string; readonly label: string };
  /** Optional emphasised "see all" row appended to the last column's links. */
  readonly viewAll?: { readonly label: string; readonly href: string; readonly icon: string };
};

const BOOK_CONSULTATION = {
  href: '/book-consultation',
  label: 'Book a free consultation',
} as const;

/**
 * Normalises the four differently-shaped menu objects above into one shape so a
 * single component can render any of them.
 *
 * The shapes differ for historical reasons: `servicesMenu`/`solutionsMenu` are
 * flat column arrays while `aiMlMenu`/`advisoryMenu`/`enterpriseMenu`/
 * `industriesMenu` wrap theirs in `.groups`, and `solutionsMenu` calls the
 * column title `heading`. Those originals are left alone — /services and
 * /solutions still read them directly, and /solutions reads `.heading` — so the
 * translation happens here rather than in a rename that would reach into
 * unrelated pages.
 */
export const NAV_MENUS: Record<NavMenuKey, NavMenu> = {
  ai: {
    columns: NAVIGATION.aiMlMenu.groups,
    cta: { prompt: 'Explore AI capabilities', ...BOOK_CONSULTATION },
  },
  services: {
    columns: NAVIGATION.servicesMenu,
    cta: { prompt: 'Not sure where to start?', ...BOOK_CONSULTATION },
  },
  advisory: {
    columns: NAVIGATION.advisoryMenu.groups,
    cta: { prompt: 'Need strategic guidance?', ...BOOK_CONSULTATION },
  },
  enterprise: {
    columns: NAVIGATION.enterpriseMenu.groups,
    cta: { prompt: 'Scaling a business platform?', ...BOOK_CONSULTATION },
  },
  industries: {
    columns: NAVIGATION.industriesMenu.groups,
    cta: { prompt: "Don't see your industry?", ...BOOK_CONSULTATION },
    viewAll: { label: 'See all Industries', href: '/industry', icon: 'LayoutGrid' },
  },
  solutions: {
    columns: NAVIGATION.solutionsMenu.map((group) => ({
      title: group.heading,
      description: group.description,
      icon: group.icon,
      links: group.links,
    })),
    cta: { prompt: 'Need a custom solution?', ...BOOK_CONSULTATION },
  },
};

/**
 * The nav as it actually renders — the ONLY list Header and MobileMenu may
 * iterate. Order is `main`'s order; membership is `isEnabled`. Neither component
 * filters further.
 */
export const ENABLED_NAV_ITEMS: readonly NavItem[] = NAVIGATION.main.filter(
  (item) => item.isEnabled
);
