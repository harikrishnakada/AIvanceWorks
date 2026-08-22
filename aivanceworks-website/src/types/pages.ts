// ─── Shared atom types ──────────────────────────────────

export interface HeroMetric {
  value: string;
  label: string;
  description: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface ProcessStepData {
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IntegrationGroup {
  name: string;
  category: string;
  connectionMethod: string;
  capabilities: string[];
}

export interface MethodologyCard {
  icon: string;
  name: string;
  description: string;
}

export interface EngagementModelData {
  name: string;
  duration: string;
  priceFrom?: string;
  whatsIncluded: string[];
  suitableFor: string;
  primaryCta: CTA;
  featured?: boolean;
}

export interface SafeguardItem {
  icon: string;
  title: string;
  description: string;
}

export interface ComplianceDetail {
  title?: string;       // section heading override (industry pages)
  statement?: string;   // thesis paragraph override (industry pages)
  frameworks: string[];
  safeguards: SafeguardItem[];
  auditNote: string;
  partnerAgreements?: string[];
}

export interface CompliancePillar {
  icon: string;
  title: string;
  description: string;
}

export interface ComplianceSpotlightData {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  statusText: string;
  pillars: CompliancePillar[];
  badges?: string[];
}

export type PersonaAccent = 'brand' | 'accent' | 'secondary';

export interface PersonaCard {
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
  accent?: PersonaAccent;
}

export interface PersonaComparisonData {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  personas: PersonaCard[];
  footerNote?: string;
}

export interface RelatedPageItem {
  title: string;
  description: string;
  href: string;
  icon: string;                          // Lucide icon name
  pageType: 'service' | 'solution';      // enables type badge + future auto-matching
}

// A single cross-link from a flagship SERVICE page into an industry vertical
// page (/industry/<slug>). Distinct from RelatedPageItem (which links
// services/solutions and carries a pageType badge) — this routes the "how we
// build" flagship down into the "who we build for" vertical surfaces.
export interface IndustryDirectoryLink {
  name: string;         // vertical name, e.g. "Real Estate & PropTech"
  connector: string;    // one-line "Building for X? See our Y page." connector
  href: string;         // /industry/<slug>
  icon: string;         // Lucide icon name
}

export interface IndustryDirectoryData {
  eyebrow?: string;
  title: string;
  highlightText?: string;   // optional substring of title rendered in accent
  subtitle?: string;
  items: IndustryDirectoryLink[];
}

export interface CaseStudyRef {
  slug: string;
  clientName: string;
  headline: string;
  metrics: { value: string; label: string }[];
  quote?: { text: string; author: string; title: string };
  imagePath?: string;
}

// ─── Section keys (template dispatch) ───────────────────

export type SectionKey =
  | 'hero'
  | 'metricsStrip'
  | 'featureGrid'
  | 'benefitsGrid'
  | 'processTimeline'
  | 'techStackBlock'
  | 'integrationsPanel'
  | 'faq'
  | 'ctaBlock'
  | 'discoveryMethodology'
  | 'engagementModels'
  | 'complianceDeepDive'
  | 'complianceSpotlight'
  | 'personaComparison'
  | 'relatedPages'
  | 'imageFeatures'
  | 'roleBoundary'
  | 'industryDirectory'
  | 'signature';

export interface ImageFeatureData {
  heading: string;
  description: string;
  image: { src: string; alt: string };
}

export interface RoleBoundaryData {
  eyebrow?: string;
  heading: string;
  intro: string;
  bullets: string[];
  collaboration: string;
}

// A single category within the AI & Technology capability catalog
// (e.g. "Clinical AI", "Patient Experience"). Rendered as one glass card
// on the dark CapabilityGroups section.
export interface CapabilityGroupItem {
  icon: string;            // Lucide icon name
  title: string;
  description?: string;    // optional one-line framing under the title
  items: string[];         // bulleted capabilities
  aiAngle?: string;        // optional AI-layer line, surfaced in the solutions detail box
  note?: string;           // optional scope / realism note (e.g. "not a Tier-1 core replacement")
}

export interface CapabilityGroupsData {
  eyebrow?: string;
  title?: string;
  highlightText?: string;  // optional substring of title rendered in accent
  subtitle?: string;
  groups: CapabilityGroupItem[];
}

// ─── Base page data ────────────────────────────────────

/**
 * Hero artwork, rendered full-bleed inside the hero card.
 *
 * The image is **right-aligned** — it occupies the right portion of the card
 * and dissolves leftward into the card gradient via a mask, so the copy column
 * sits on clean surface rather than on top of the picture. That geometry exists
 * because the service/solution artwork is centre-composed: a card-wide
 * `object-cover` puts the subject behind the H1 and leaves only the dull
 * periphery visible. Below `lg` the card is too narrow to split, so the image
 * fills it and a vertical scrim carries legibility instead.
 */
export interface HeroImage {
  src: string;
  /** Decorative background — pass `''` unless the image carries meaning the H1 doesn't. */
  alt: string;
  /**
   * CSS `object-position` for the crop, e.g. `'50% 30%'`. Use it when the
   * subject is not centred in the source. Defaults to `'center'`.
   */
  focal?: string;
  /**
   * How hard to seat the artwork into the hero's dark register. Bright,
   * high-key sources (light-blue and lavender 3D renders) need `'strong'` or
   * they glare against the dark card; dark editorial photography wants
   * `'soft'`. Defaults to `'soft'`.
   */
  dim?: 'none' | 'soft' | 'strong';
}

export interface BasePageData {
  isEnabled?: boolean; //default is true, set to false to hide page from navigation and prevent access to the page
  slug: string;
  title: string;
  shortDescription: string;

  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalPath: string;

  breadcrumb: BreadcrumbItem[];

  composition: SectionKey[];

  hero: {
    badge?: string;
    badgeHref?: string;
    headline: string;
    subhead: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
    metrics?: HeroMetric[];
    heroImage?: HeroImage;
    /** Run the hero card edge to edge instead of as a Container-width panel. */
    fullBleed?: boolean;
  };

  metricsStrip?: HeroMetric[];
  features?: FeatureItem[];
  benefits?: BenefitItem[];
  benefitsHeading?: {                // optional header for the BenefitsGrid section
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  };
  processSteps?: ProcessStepData[];
  capabilities?: string[];
  technologies?: string[];
  integrations?: IntegrationGroup[];
  complianceSpotlight?: ComplianceSpotlightData;
  personaComparison?: PersonaComparisonData;
  roleBoundary?: RoleBoundaryData;
  relatedPages?: RelatedPageItem[];      // internal cross-links (SEO + funnel)
  faqs: FAQItem[];
  cta: {
    title: string;
    description: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
  };

  _unverified?: string[];
}

// ─── Solution extension ─────────────────────────────────

export type SolutionIndustry = 'healthcare' | 'insurance' | 'retail' | 'fintech' | string;

export interface SolutionPageData extends BasePageData {
  industry: SolutionIndustry;
  industryMetrics?: HeroMetric[];
  complianceDetail?: ComplianceDetail;
  caseStudySpotlight?: CaseStudyRef;
  imageFeatures?: ImageFeatureData[];
  signatureComponent: string; // component identifier, e.g. 'PortalArchitectureMap'
}

// ─── Service extension ──────────────────────────────────

export type ServiceCategory = 'software-engineering' | 'infrastructure' | 'ai-ml' | 'strategy' | string;

export interface ServicePageData extends BasePageData {
  category: ServiceCategory;
  methodology?: MethodologyCard[];
  engagementModels?: EngagementModelData[];
  pricing?: {
    startingPrice: string;
    whatsIncluded: string[];
  };
  // ComplianceDeepDive on services is a v2.1 extension driven by
  // /services/security-compliance. Services that sell compliance as the
  // product need the full safeguards + frameworks + audit-note detail, not
  // just the lighter ComplianceSpotlight. Optional — most services ignore it.
  complianceDeepDive?: ComplianceDetail;
  // Cross-vertical navigation into /industry/<slug> pages. Rendered via the
  // 'industryDirectory' composition key by the IndustryDirectory shared
  // section. Driven by the flagship /services/enterprise-software-development
  // page (the "how we build" surface that sits above the industry verticals).
  industryDirectory?: IndustryDirectoryData;
  signatureComponent: string;
  heroIllustrationComponent: string;
}

// ─── Industry page (standalone type — NOT a service/solution) ──────────
// An industry page is a deep, standalone vertical landing surface (e.g.
// Healthcare). It has its OWN bespoke section components and layout language
// — it deliberately does not reuse the service/solution section library, so
// it stands out while staying on the shared theme tokens. See the "Industry
// hub" archetype in the Services & Solutions constitution.

export type IndustryKey = 'healthcare' | 'insurance' | 'life-sciences' | 'manufacturing' | string;

// Section dispatch keys unique to the Industry template.
export type IndustrySectionKey =
  | 'hero'
  | 'whoWeServe'
  | 'pressures'
  | 'capabilities'
  | 'solutions'
  | 'compliance'
  | 'segments'
  | 'techStandards'
  | 'services'
  | 'faq'
  | 'cta';

// "Who we serve" — the explicit list of business types within an industry,
// presented as an expandable dropdown. Distinct from `segments` (rich buyer
// personas with pains + needs); this is the plain, scannable roster of
// institution types, with an optional honest note on who is out of scope.
export interface WhoWeServeData {
  title: string;
  subtitle?: string;
  summary?: string;      // one-line count/summary shown on the toggle (e.g. "13 institution types")
  types: string[];       // the business types served
  excludedNote?: string; // who we explicitly do NOT serve, and why
}

// A sub-vertical / buyer segment within the industry.
export interface IndustrySegment {
  icon: string;        // Lucide icon name
  name: string;        // "Hospitals & Health Systems"
  buyer: string;       // "CIO / CMIO / VP of Digital"
  needs: string[];     // what this segment needs from us
}

// A cross-link from the industry page into a relevant service page.
export interface IndustryServiceLink {
  title: string;
  description: string;
  href: string;
  icon: string;        // Lucide icon name
}

// Homepage-card-only presentation for an industry. The card image is distinct
// from the industry hero image (a purpose-shot category card), and the tagline
// and proof chips are card-length copy that differs from the SEO
// shortDescription. Optional: an industry without a homeCard simply does not
// appear in the homepage Industries section.
export interface IndustryHomeCard {
  tagline: string;      // full-sentence card message
  short: string;        // concise line for tight layouts / aria-labels
  image: string;        // /images/industries/<folder>/category-card.jpg
  alt: string;          // alt text for the card image
  proof: string[];      // concrete capability chips in the buyer's vocabulary
}

/**
 * A "card-only" industry — one we present as a category card on the homepage
 * and the /industry index without a detail page behind it.
 *
 * Full industries (`IndustryPageData`) carry the same information across
 * `slug`/`name`/`icon`/`homeCard`/`canonicalPath`. Both shapes are flattened to
 * a single card projection by `getIndustryCards()` in `src/lib/content.ts`, so
 * card consumers never need to know which kind they're rendering.
 */
export interface IndustryCardData {
  slug: string;
  /** Plain display name — e.g. "Construction", "Industrial". */
  name: string;
  /** Sentence used wherever the card copy isn't available. */
  shortDescription: string;
  /** Lucide icon name — the industry's visual identity across the site. */
  icon: string;
  /**
   * Where the card links. There is no `/industry/<slug>` page for these, so
   * they route into the booking flow instead of a dead route.
   */
  href: string;
  homeCard: IndustryHomeCard;
}

export interface IndustryPageData {
  isEnabled?: boolean;
  slug: string;
  title: string;
  /** Plain display name — e.g. "Healthcare", "Travel & Hospitality". */
  name: string;
  shortDescription: string;

  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalPath: string;

  breadcrumb: BreadcrumbItem[];
  composition: IndustrySectionKey[];
  industry: IndustryKey;

  /** Lucide icon name — the industry's visual identity across the site. */
  icon: string;
  /** Homepage Industries section card presentation (optional). */
  homeCard?: IndustryHomeCard;

  /**
   * Explicit "who we serve" roster (optional). Rendered as an expandable
   * dropdown via the `whoWeServe` composition key. Independent of `segments`.
   */
  whoWeServe?: WhoWeServeData;

  hero: {
    kicker?: string;                         // single industry label (not a per-section eyebrow)
    headline: string;
    subhead: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
    heroImage: { src: string; alt: string };
    standards?: string[];                    // thin standards ribbon under the hero
    standardsLabel?: string;                 // label that precedes the standards ribbon
  };

  pressures: {
    title: string;
    intro: string;
    items: FeatureItem[];                    // the industry's pain points
  };

  capabilities: CapabilityGroupsData;        // the bento AI & technology catalog

  complianceDetail: ComplianceDetail;        // prominent, non-negotiable

  segments: {
    title: string;
    subtitle?: string;
    items: IndustrySegment[];
    footerNote?: string;
  };

  techStandards: {
    title: string;
    subtitle?: string;
    systemsTitle: string;
    systems: string[];
    technologiesTitle: string;
    technologies: string[];
  };

  services: {
    title: string;
    subtitle?: string;
    items: IndustryServiceLink[];
  };

  faqTitle?: string;                         // FAQ section heading override
  faqIntro?: string;                         // optional FAQ section intro
  faqs: FAQItem[];

  cta: {
    title: string;
    description: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
  };

  _unverified?: string[];
}
