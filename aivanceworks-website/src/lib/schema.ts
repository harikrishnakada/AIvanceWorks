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

export function generateContactPointSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.company.name,
    url: SITE_CONFIG.url,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: SITE_CONFIG.company.email,
        telephone: SITE_CONFIG.company.phone,
        availableLanguage: ['English'],
        areaServed: 'US',
        hoursAvailable: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SITE_CONFIG.company.email,
        availableLanguage: ['English'],
        areaServed: 'US',
      },
    ],
  };
}

// Enhanced Organization schema for Team page with employee/expertise details
export function generateTeamOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.company.name,
    url: SITE_CONFIG.url,
    description: 'US-based AI consulting and software engineering company with Azure-certified senior engineers.',
    foundingDate: '2025',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    // Employee/Team details for E-E-A-T
    employee: {
      '@type': 'QuantitativeValue',
      value: '10-50',
      unitText: 'employees',
    },
    // Expertise areas
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Azure AI Foundry',
      'RAG Frameworks',
      'Agentic AI Systems',
      'Microsoft Azure',
      'Cloud Architecture',
      'Full-Stack Development',
      'DevOps Automation',
      '.NET Development',
      'React Development',
      'Next.js',
    ],
    // Credentials for E-E-A-T
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'AI-102: Azure AI Engineer Associate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'AZ-204: Azure Developer Associate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'AZ-305: Azure Solutions Architect Expert',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'AZ-400: DevOps Engineer Expert',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'DP-420: Azure Cosmos DB Developer Specialty',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft',
        },
      },
    ],
    // Service offerings
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Staff Augmentation',
          description: 'Individual senior engineers integrated with your team',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dedicated Teams',
          description: 'Full delivery teams from 4-15+ specialists',
        },
      },
    ],
  };
}

export function generateFreeConsultationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free Discovery Consultation',
    serviceType: 'Consulting',
    description:
      '30-minute free strategy session to discuss software development, AI solutions, cloud migration, and custom development needs with our expert Solutions Architects.',
    provider: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      eligibleRegion: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };
}
