import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateWebPageSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getIndustryPageData, getAllIndustryPageSlugs } from '@/lib/content';
import { IndustryDetailTemplate } from '@/components/templates';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustryPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getIndustryPageData(slug);

  if (!data) {
    return constructMetadata({
      title: 'Industry Not Found',
      description: 'The requested industry could not be found.',
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

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getIndustryPageData(slug);
  if (!data) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        data.metaTitle,
        `${SITE_CONFIG.url}${data.canonicalPath}`
      ),
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
      <IndustryDetailTemplate data={data} />
    </>
  );
}
