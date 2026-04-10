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
  | 'signature';

export interface ImageFeatureData {
  heading: string;
  description: string;
  image: { src: string; alt: string };
}

// ─── Base page data ─────────────────────────────────────

export interface BasePageData {
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
    heroImage?: { src: string; alt: string };
  };

  metricsStrip?: HeroMetric[];
  features?: FeatureItem[];
  benefits?: BenefitItem[];
  processSteps?: ProcessStepData[];
  capabilities?: string[];
  technologies?: string[];
  integrations?: IntegrationGroup[];
  complianceSpotlight?: ComplianceSpotlightData;
  personaComparison?: PersonaComparisonData;
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
  signatureComponent: string;
}
