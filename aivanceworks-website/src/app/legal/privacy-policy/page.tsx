import { Metadata } from 'next';
import { getMarkdownContent, extractMarkdownMetadata } from '@/lib/markdown';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { MarkdownPage } from '@/components/legal/MarkdownPage';
import { SITE_CONFIG } from '@/lib/constants';

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const content = await getMarkdownContent('privacy-policy.md');
  const metadata = extractMarkdownMetadata(content);

  return constructMetadata({
    title: 'Privacy Policy | AIvanceWorks',
    description:
      'AIvanceWorks Privacy Policy: Learn how we collect, use, and protect your personal information. GDPR, CCPA, and DPDP Act compliant. Last updated February 2, 2026.',
    canonical: `${SITE_CONFIG.url}/legal/privacy-policy`,
    keywords: [
      'privacy policy',
      'data protection',
      'GDPR compliance',
      'CCPA compliance',
      'personal information',
      'data privacy',
      'AIvanceWorks privacy',
    ],
  });
}

export default async function PrivacyPolicyPage() {
  // Read markdown content
  const content = await getMarkdownContent('privacy-policy.md');
  const metadata = extractMarkdownMetadata(content);

  // Generate schema markup
  const pageSchema = generateWebPageSchema(
    'Privacy Policy - AIvanceWorks',
    `${SITE_CONFIG.url}/legal/privacy-policy`
  );

  return (
    <>
      <JsonLd data={pageSchema} />
      <MarkdownPage
        content={content}
        title={metadata.title}
        lastUpdated={metadata.lastUpdated}
        effectiveDate={metadata.effectiveDate}
        documentUrl={`${SITE_CONFIG.url}/legal/privacy-policy`}
      />
    </>
  );
}
