import type { ReactNode } from 'react';
import type { IndustryPageData, IndustrySectionKey } from '@/types/pages';
import { Breadcrumbs } from '@/components/shared/primitives';
import {
  IndustryHero,
  IndustryPressures,
  IndustryCapabilities,
  IndustryCompliance,
  IndustrySegments,
  IndustryTechStandards,
  IndustryServices,
  IndustryFaq,
  IndustryCta,
} from '@/components/industry';

export interface IndustryDetailTemplateProps {
  data: IndustryPageData;
}

/**
 * IndustryDetailTemplate — renders a deep, standalone industry landing page
 * ("Industry hub" archetype) from a bespoke, industry-only section library.
 * It deliberately does NOT reuse the service/solution sections, so the page
 * has its own layout language while staying on the shared theme tokens.
 */
export const IndustryDetailTemplate = ({ data }: IndustryDetailTemplateProps) => {
  const sectionRenderers: Record<IndustrySectionKey, () => ReactNode> = {
    hero: () => (
      <IndustryHero
        kicker={data.hero.kicker}
        headline={data.hero.headline}
        subhead={data.hero.subhead}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        heroImage={data.hero.heroImage}
        standards={data.hero.standards}
        standardsLabel={data.hero.standardsLabel}
      />
    ),
    pressures: () => (
      <IndustryPressures
        title={data.pressures.title}
        intro={data.pressures.intro}
        items={data.pressures.items}
      />
    ),
    capabilities: () => (
      <IndustryCapabilities
        title={data.capabilities.title}
        highlightText={data.capabilities.highlightText}
        subtitle={data.capabilities.subtitle}
        groups={data.capabilities.groups}
      />
    ),
    compliance: () => (
      <IndustryCompliance
        title={data.complianceDetail.title}
        statement={data.complianceDetail.statement}
        frameworks={data.complianceDetail.frameworks}
        safeguards={data.complianceDetail.safeguards}
        auditNote={data.complianceDetail.auditNote}
        partnerAgreements={data.complianceDetail.partnerAgreements}
      />
    ),
    segments: () => (
      <IndustrySegments
        title={data.segments.title}
        subtitle={data.segments.subtitle}
        items={data.segments.items}
        footerNote={data.segments.footerNote}
      />
    ),
    techStandards: () => (
      <IndustryTechStandards
        title={data.techStandards.title}
        subtitle={data.techStandards.subtitle}
        systemsTitle={data.techStandards.systemsTitle}
        systems={data.techStandards.systems}
        technologiesTitle={data.techStandards.technologiesTitle}
        technologies={data.techStandards.technologies}
      />
    ),
    services: () => (
      <IndustryServices
        title={data.services.title}
        subtitle={data.services.subtitle}
        items={data.services.items}
      />
    ),
    faq: () => (
      <IndustryFaq title={data.faqTitle} intro={data.faqIntro} faqs={data.faqs} />
    ),
    cta: () => (
      <IndustryCta
        title={data.cta.title}
        description={data.cta.description}
        primaryCta={data.cta.primaryCta}
        secondaryCta={data.cta.secondaryCta}
      />
    ),
  };

  return (
    <>
      <Breadcrumbs items={data.breadcrumb} />
      {data.composition.map((key, idx) => {
        const renderer = sectionRenderers[key];
        const content = renderer ? renderer() : null;
        if (!content) return null;
        return (
          <div key={`${key}-${idx}`} id={key} className="scroll-mt-24">
            {content}
          </div>
        );
      })}
    </>
  );
};
