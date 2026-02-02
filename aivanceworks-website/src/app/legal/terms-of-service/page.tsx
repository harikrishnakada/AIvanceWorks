import { Metadata } from 'next';
import { getMarkdownContent, extractMarkdownMetadata } from '@/lib/markdown';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { MarkdownPage } from '@/components/legal/MarkdownPage';
import { SITE_CONFIG } from '@/lib/constants';

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const content = await getMarkdownContent('terms-of-service.md');
  const metadata = extractMarkdownMetadata(content);

  return constructMetadata({
    title: 'Terms of Service | AIvanceWorks',
    description:
      'AIvanceWorks Terms of Service: Review our service agreements, intellectual property rights, payment terms, and legal obligations. Professional software consulting terms.',
    canonical: `${SITE_CONFIG.url}/legal/terms-of-service`,
    keywords: [
      'terms of service',
      'service agreement',
      'consulting terms',
      'legal terms',
      'software development contract',
      'AIvanceWorks terms',
    ],
  });
}

export default async function TermsOfServicePage() {
  // Read markdown content
  const content = await getMarkdownContent('terms-of-service.md');
  const metadata = extractMarkdownMetadata(content);

  // Generate schema markup
  const pageSchema = generateWebPageSchema(
    'Terms of Service - AIvanceWorks',
    `${SITE_CONFIG.url}/legal/terms-of-service`
  );

  return (
    <>
      <JsonLd data={pageSchema} />
      <MarkdownPage
        content={content}
        title={metadata.title}
        lastUpdated={metadata.lastUpdated}
        effectiveDate={metadata.effectiveDate}
        documentUrl={`${SITE_CONFIG.url}/legal/terms-of-service`}
      />
    </>
  );
}
