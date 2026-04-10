import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateWebPageSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getServicePageData } from '@/lib/content';
import { ServiceDetailTemplate } from '@/components/templates';
import { MvpDualTrackRoadmap } from '@/components/signature';

const SLUG = 'mvp-development';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicePageData(SLUG);
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

export default async function MvpDevelopmentPage() {
  const data = await getServicePageData(SLUG);
  if (!data) notFound();

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
      <ServiceDetailTemplate data={data} signature={<MvpDualTrackRoadmap />} />
    </>
  );
}
