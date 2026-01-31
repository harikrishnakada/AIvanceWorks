import { SITE_CONFIG } from './constants';

type JsonLd = Record<string, unknown>;

export function generateOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.company.name,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo.png`,
      width: 600,
      height: 60,
    },
    description: SITE_CONFIG.description,
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.company.address.city,
      addressRegion: SITE_CONFIG.company.address.state,
      addressCountry: SITE_CONFIG.company.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE_CONFIG.company.email,
      availableLanguage: 'English',
    },
    sameAs: [
      SITE_CONFIG.links.linkedin,
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.twitter,
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$$',
    slogan: SITE_CONFIG.company.slogan,
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Azure Cloud Services',
      'Custom Software Development',
      'RAG Frameworks',
      'AI Agents',
      'DevOps',
      'Data Analytics',
    ],
  };
}

export function generateWebSiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateWebPageSchema(pageName: string, pageUrl: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageName,
    isPartOf: {
      '@id': `${SITE_CONFIG.url}/#website`,
    },
    about: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    description: SITE_CONFIG.description,
  };
}

export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      worksFor: {
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    serviceType: 'Software Development',
    description,
    provider: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };
}
