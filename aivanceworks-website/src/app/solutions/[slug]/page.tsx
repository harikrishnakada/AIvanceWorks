import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateWebPageSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getSolutionPageData, getAllSolutionPageSlugs } from '@/lib/content';
import { SolutionDetailTemplate } from '@/components/templates';
import {
  PortalArchitectureMap,
  ClaimsFlowComparison,
  EcommerceAiShowcase,
} from '@/components/signature';
import type { ReactNode } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pilotData = await getSolutionPageData(slug);

  if (!pilotData) {
    return constructMetadata({
      title: 'Solution Not Found',
      description: 'The requested solution could not be found.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: pilotData.metaTitle,
    description: pilotData.metaDescription,
    canonical: `${SITE_CONFIG.url}${pilotData.canonicalPath}`,
    keywords: pilotData.keywords,
  });
}

const SIGNATURE_COMPONENTS: Record<string, ReactNode> = {
  PortalArchitectureMap: <PortalArchitectureMap />,
  ClaimsFlowComparison: <ClaimsFlowComparison />,
  EcommerceAiShowcase: <EcommerceAiShowcase />,
};

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const pilotData = await getSolutionPageData(slug);
  if (!pilotData) notFound();

  const signature = SIGNATURE_COMPONENTS[pilotData.signatureComponent];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        pilotData.metaTitle,
        `${SITE_CONFIG.url}${pilotData.canonicalPath}`
      ),
      generateServiceSchema({
        name: pilotData.title,
        description: pilotData.shortDescription,
        url: `${SITE_CONFIG.url}${pilotData.canonicalPath}`,
      }),
      {
        '@type': 'BreadcrumbList',
        itemListElement: pilotData.breadcrumb.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.label,
          item: `${SITE_CONFIG.url}${crumb.href}`,
        })),
      },
      ...(pilotData.faqs.length > 0 ? [generateFAQSchema(pilotData.faqs)] : []),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <SolutionDetailTemplate data={pilotData} signature={signature} />
    </>
  );
}
