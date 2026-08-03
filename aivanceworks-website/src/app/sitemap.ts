import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import {
  getAllServicePageSlugs,
  getAllIndustryPageSlugs,
  getAllPosts,
  getAllCaseStudies,
} from '@/lib/content';

// Must stay in sync with the categoryMap in
// src/app/blog/category/[category]/page.tsx — those are the only category
// routes that generateStaticParams builds, so listing others would 404.
const BLOG_CATEGORY_SLUGS = [
  'ai-development',
  'cloud-architecture',
  'software-engineering',
  'case-studies',
  'industry-insights',
];

// Async because the blog and case-study registries go through the CMS
// abstraction layer (src/lib/content.ts), which returns promises.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-consultation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // NOTE: /solutions and /solutions/* are deliberately absent. The section is
    // built but has no nav entry, so it is noindex until it ships — and listing a
    // noindex URL in the sitemap is reported as an error in Search Console.
    // Re-add here at the same time as removing `noIndex` from
    // src/app/solutions/page.tsx and src/app/solutions/[slug]/page.tsx.
    {
      url: `${baseUrl}/industry`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    // NOTE: /faq, /careers and /resources/* are deliberately absent — they are
    // still marked noIndex, and listing a noindex URL in the sitemap is
    // reported as an error in Search Console. Add them back when they ship.
  ];

  // The detail pages are the bulk of the site (~76 URLs) and were previously
  // absent from the sitemap entirely. Drive them from the same registries the
  // routes use, so a new data file can never be silently left out again.
  const lastModified = new Date();

  const servicePages = getAllServicePageSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const industryPages = getAllIndustryPageSlugs().map((slug) => ({
    url: `${baseUrl}/industry/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts, blog category indexes and case studies. /blog and /case-studies
  // were listed but none of their children were, so every post and case study
  // depended on being crawled through pagination.
  const [posts, caseStudies] = await Promise.all([getAllPosts(), getAllCaseStudies()]);

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // Real publish/update dates rather than build time, so a re-deploy does not
    // tell Search Console that all content changed.
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogCategories = BLOG_CATEGORY_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/category/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const caseStudyPages = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...blogPosts,
    ...blogCategories,
    ...caseStudyPages,
  ];
}
