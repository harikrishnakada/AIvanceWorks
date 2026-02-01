import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export function constructMetadata({
  title,
  description,
  image = SITE_CONFIG.ogImage,
  noIndex = false,
  canonical,
  keywords = [],
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  keywords?: string[];
} = {}): Metadata {
  const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const metaDescription = description || SITE_CONFIG.description;
  const safeImage = typeof image === 'string' && image.length > 0 ? image : SITE_CONFIG.ogImage;
  const metaImage = safeImage.startsWith('http') ? safeImage : `${SITE_CONFIG.url}${safeImage}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_CONFIG.creator }],
    creator: SITE_CONFIG.creator,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical || SITE_CONFIG.url,
      title: metaTitle,
      description: metaDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@aivanceworks',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...(canonical && {
      alternates: {
        canonical,
      },
    }),
  };
}
