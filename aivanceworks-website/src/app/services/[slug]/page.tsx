import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateWebPageSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getServicePageData, getAllServicePageSlugs } from '@/lib/content';
import { ServiceDetailTemplate } from '@/components/templates';
import {
  DiscoveryBeforeAfter,
  DiscoveryHeroIllustration,
  MvpDualTrackRoadmap,
  MvpHeroIllustration,
  SaasArchitectureBlueprint,
  SaasHeroIllustration,
  CloudReadinessMatrix,
  CloudStrategyHeroIllustration,
  FinOpsCostWaterfall,
  FinOpsHeroIllustration,
  StartupGrowthTimeline,
  StartupHeroIllustration,
  CrossPlatformPipeline,
  MobileDevHeroIllustration,
  WebAppBuildPipeline,
  WebAppHeroIllustration,
  StranglerFigDiagram,
  AppModHeroIllustration,
  SoftwareDeliveryPipeline,
  CustomDevHeroIllustration,
  DesignMaturitySpectrum,
  UiUxHeroIllustration,
  TestCoveragePyramid,
  QualityEngHeroIllustration,
  ArchitectureDecisionTree,
  ArchitectureAdvisoryHeroIllustration,
  GenAiPipelineArchitecture,
  GenAiHeroIllustration,
  CloudMigrationWavePlanner,
  CloudMigrationHeroIllustration,
  InfraOpsControlPlane,
  CloudInfraHeroIllustration,
  DocumentProcessingPipeline,
  NlpDocAiHeroIllustration,
  ConversationalFlowArchitecture,
  ConversationalAiHeroIllustration,
  ComputerVisionPipeline,
  ComputerVisionHeroIllustration,
  CiCdPipelineBlueprint,
  DevOpsHeroIllustration,
  AutomationOrchestrationFlow,
  IntelligentAutoHeroIllustration,
  ComplianceCoverageMatrix,
  SecurityComplianceHeroIllustration,
  AiStrategyFrameworkBlueprint,
  AiStrategyHeroIllustration,
  RegulatedItDecisionGauntlet,
  ItConsultingHeroIllustration,
} from '@/components/signature';
import type { ReactNode } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServicePageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getServicePageData(slug);

  if (!data) {
    return constructMetadata({
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    canonical: `${SITE_CONFIG.url}${data.canonicalPath}`,
    keywords: data.keywords,
  });
}

const SIGNATURE_COMPONENTS: Record<string, ReactNode> = {
  DiscoveryBeforeAfter: <DiscoveryBeforeAfter />,
  MvpDualTrackRoadmap: <MvpDualTrackRoadmap />,
  SaasArchitectureBlueprint: <SaasArchitectureBlueprint />,
  CloudReadinessMatrix: <CloudReadinessMatrix />,
  FinOpsCostWaterfall: <FinOpsCostWaterfall />,
  StartupGrowthTimeline: <StartupGrowthTimeline />,
  CrossPlatformPipeline: <CrossPlatformPipeline />,
  WebAppBuildPipeline: <WebAppBuildPipeline />,
  StranglerFigDiagram: <StranglerFigDiagram />,
  SoftwareDeliveryPipeline: <SoftwareDeliveryPipeline />,
  DesignMaturitySpectrum: <DesignMaturitySpectrum />,
  TestCoveragePyramid: <TestCoveragePyramid />,
  ArchitectureDecisionTree: <ArchitectureDecisionTree />,
  GenAiPipelineArchitecture: <GenAiPipelineArchitecture />,
  CloudMigrationWavePlanner: <CloudMigrationWavePlanner />,
  InfraOpsControlPlane: <InfraOpsControlPlane />,
  DocumentProcessingPipeline: <DocumentProcessingPipeline />,
  ConversationalFlowArchitecture: <ConversationalFlowArchitecture />,
  ComputerVisionPipeline: <ComputerVisionPipeline />,
  CiCdPipelineBlueprint: <CiCdPipelineBlueprint />,
  AutomationOrchestrationFlow: <AutomationOrchestrationFlow />,
  ComplianceCoverageMatrix: <ComplianceCoverageMatrix />,
  AiStrategyFrameworkBlueprint: <AiStrategyFrameworkBlueprint />,
  RegulatedItDecisionGauntlet: <RegulatedItDecisionGauntlet />,
};

const HERO_ILLUSTRATION_COMPONENTS: Record<string, ReactNode> = {
  DiscoveryHeroIllustration: <DiscoveryHeroIllustration />,
  MvpHeroIllustration: <MvpHeroIllustration />,
  SaasHeroIllustration: <SaasHeroIllustration />,
  CloudStrategyHeroIllustration: <CloudStrategyHeroIllustration />,
  FinOpsHeroIllustration: <FinOpsHeroIllustration />,
  StartupHeroIllustration: <StartupHeroIllustration />,
  MobileDevHeroIllustration: <MobileDevHeroIllustration />,
  WebAppHeroIllustration: <WebAppHeroIllustration />,
  AppModHeroIllustration: <AppModHeroIllustration />,
  CustomDevHeroIllustration: <CustomDevHeroIllustration />,
  UiUxHeroIllustration: <UiUxHeroIllustration />,
  QualityEngHeroIllustration: <QualityEngHeroIllustration />,
  ArchitectureAdvisoryHeroIllustration: <ArchitectureAdvisoryHeroIllustration />,
  GenAiHeroIllustration: <GenAiHeroIllustration />,
  CloudMigrationHeroIllustration: <CloudMigrationHeroIllustration />,
  CloudInfraHeroIllustration: <CloudInfraHeroIllustration />,
  NlpDocAiHeroIllustration: <NlpDocAiHeroIllustration />,
  ConversationalAiHeroIllustration: <ConversationalAiHeroIllustration />,
  ComputerVisionHeroIllustration: <ComputerVisionHeroIllustration />,
  DevOpsHeroIllustration: <DevOpsHeroIllustration />,
  IntelligentAutoHeroIllustration: <IntelligentAutoHeroIllustration />,
  SecurityComplianceHeroIllustration: <SecurityComplianceHeroIllustration />,
  AiStrategyHeroIllustration: <AiStrategyHeroIllustration />,
  ItConsultingHeroIllustration: <ItConsultingHeroIllustration />,
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getServicePageData(slug);
  if (!data) notFound();

  const signature = SIGNATURE_COMPONENTS[data.signatureComponent];
  const heroIllustration = HERO_ILLUSTRATION_COMPONENTS[data.heroIllustrationComponent];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(data.metaTitle, `${SITE_CONFIG.url}${data.canonicalPath}`),
      generateServiceSchema({
        name: data.title,
        description: data.shortDescription,
        url: `${SITE_CONFIG.url}${data.canonicalPath}`,
      }),
      {
        '@type': 'BreadcrumbList',
        itemListElement: data.breadcrumb.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.label,
          item: `${SITE_CONFIG.url}${crumb.href}`,
        })),
      },
      ...(data.faqs.length > 0 ? [generateFAQSchema(data.faqs)] : []),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <ServiceDetailTemplate
        data={data}
        signature={signature}
        heroIllustration={heroIllustration}
      />
    </>
  );
}
