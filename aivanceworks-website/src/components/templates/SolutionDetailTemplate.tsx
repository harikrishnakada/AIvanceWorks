import type { ReactNode } from 'react';
import type { SolutionPageData, SectionKey } from '@/types/pages';
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
  ComplianceDeepDive,
  ComplianceSpotlight,
  PersonaComparison,
  RelatedPages,
  ImageFeature,
} from '@/components/shared/sections';

export interface SolutionDetailTemplateProps {
  data: SolutionPageData;
  signature?: ReactNode;
}

export const SolutionDetailTemplate = ({
  data,
  signature,
}: SolutionDetailTemplateProps) => {
  const sectionRenderers: Record<SectionKey, () => ReactNode> = {
    hero: () => (
      <Hero
        badge={data.hero.badge}
        badgeHref={data.hero.badgeHref}
        headline={data.hero.headline}
        subhead={data.hero.subhead}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        metrics={data.hero.metrics}
        heroImage={data.hero.heroImage}
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
    complianceDeepDive: () =>
      data.complianceDetail ? (
        <ComplianceDeepDive
          frameworks={data.complianceDetail.frameworks}
          safeguards={data.complianceDetail.safeguards}
          auditNote={data.complianceDetail.auditNote}
          partnerAgreements={data.complianceDetail.partnerAgreements}
        />
      ) : null,
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
    discoveryMethodology: () => null,
    engagementModels: () => null,
    imageFeatures: () =>
      data.imageFeatures && data.imageFeatures.length > 0 ? (
        <ImageFeature features={data.imageFeatures} />
      ) : null,
    relatedPages: () =>
      data.relatedPages ? <RelatedPages pages={data.relatedPages} /> : null,
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
