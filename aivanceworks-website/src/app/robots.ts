import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Do NOT disallow /_next/ — it serves every JS chunk, stylesheet and
        // optimized image. Blocking it stops crawlers rendering the site and
        // keeps /_next/image results out of Google Images.
        disallow: ['/api/', '/admin/'],
      },
      // Allow AI crawlers explicitly
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // 'anthropic-ai' and 'Claude-Web' are the legacy agent names;
        // 'ClaudeBot' is the current one. Keep all three.
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
