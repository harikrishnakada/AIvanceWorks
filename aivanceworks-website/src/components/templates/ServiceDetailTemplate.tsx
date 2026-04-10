import type { ReactNode } from 'react';
import type { ServicePageData, SectionKey } from '@/types/pages';
import { Breadcrumbs } from '@/components/shared/primitives';
import {
  Hero,
  MetricsStrip,
  FeatureGrid,
  BenefitsGrid,
  ProcessTimeline,
  TechStackBlock,
  IntegrationsPanel,
  FAQ,
  CTABlock,
  DiscoveryMethodology,
  EngagementModels,
  ComplianceSpotlight,
  PersonaComparison,
  RelatedPages,
} from '@/components/shared/sections';

export interface ServiceDetailTemplateProps {
  data: ServicePageData;
  /**
   * The signature section component, resolved by the page route and
   * passed in. Kept as a React node so the template stays dumb about
   * which signature component belongs to which page.
   */
  signature?: ReactNode;
  /**
   * Optional illustration rendered in the Hero right column.
   * When provided, hero metrics are suppressed (they render via MetricsStrip instead).
   */
  heroIllustration?: ReactNode;
}

export const ServiceDetailTemplate = ({
  data,
  signature,
  heroIllustration,
}: ServiceDetailTemplateProps) => {
  const sectionRenderers: Record<SectionKey, () => ReactNode> = {
    hero: () => (
      <Hero
        badge={data.hero.badge}
        badgeHref={data.hero.badgeHref}
        headline={data.hero.headline}
        subhead={data.hero.subhead}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        metrics={heroIllustration ? undefined : data.hero.metrics}
        heroIllustration={heroIllustration}
      />
    ),
    metricsStrip: () =>
      data.metricsStrip ? <MetricsStrip metrics={data.metricsStrip} /> : null,
    featureGrid: () =>
      data.features ? <FeatureGrid features={data.features} /> : null,
    benefitsGrid: () =>
      data.benefits ? <BenefitsGrid benefits={data.benefits} /> : null,
    processTimeline: () =>
      data.processSteps ? <ProcessTimeline steps={data.processSteps} /> : null,
    techStackBlock: () =>
      data.capabilities && data.technologies ? (
        <TechStackBlock
          capabilities={data.capabilities}
          technologies={data.technologies}
        />
      ) : null,
    integrationsPanel: () =>
      data.integrations ? (
        <IntegrationsPanel integrations={data.integrations} />
      ) : null,
    discoveryMethodology: () =>
      data.methodology ? <DiscoveryMethodology methods={data.methodology} /> : null,
    engagementModels: () =>
      data.engagementModels ? (
        <EngagementModels models={data.engagementModels} />
      ) : null,
    complianceDeepDive: () => null, // not used by services
    complianceSpotlight: () =>
      data.complianceSpotlight ? (
        <ComplianceSpotlight
          eyebrow={data.complianceSpotlight.eyebrow}
          title={data.complianceSpotlight.title}
          highlightText={data.complianceSpotlight.highlightText}
          statusText={data.complianceSpotlight.statusText}
          pillars={data.complianceSpotlight.pillars}
          badges={data.complianceSpotlight.badges}
        />
      ) : null,
    personaComparison: () =>
      data.personaComparison ? (
        <PersonaComparison
          eyebrow={data.personaComparison.eyebrow}
          title={data.personaComparison.title}
          highlightText={data.personaComparison.highlightText}
          subtitle={data.personaComparison.subtitle}
          personas={data.personaComparison.personas}
          footerNote={data.personaComparison.footerNote}
        />
      ) : null,
    imageFeatures: () => null, // not used by services (wired in Task 5)
    relatedPages: () =>
      data.relatedPages ? (
        <RelatedPages
          pages={data.relatedPages}
          eyebrow="Keep Exploring"
          title="See This Capability in Action"
          subtitle="Discover how this service powers real-world solutions."
        />
      ) : null,
    faq: () => <FAQ faqs={data.faqs} />,
    ctaBlock: () => (
      <CTABlock
        title={data.cta.title}
        description={data.cta.description}
        primaryCta={data.cta.primaryCta}
        secondaryCta={data.cta.secondaryCta}
      />
    ),
    signature: () => signature ?? null,
  };

  return (
    <>
      <Breadcrumbs items={data.breadcrumb} />
      {data.composition.map((key, idx) => {
        const renderer = sectionRenderers[key];
        const content = renderer();
        if (!content) return null;
        return <div key={`${key}-${idx}`}>{content}</div>;
      })}
    </>
  );
};
