import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight, CheckCircle2, Clock, FileText, ArrowRight,
  ChevronDown
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateFAQSchema, generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getAllServiceCategories,
  getServiceCategoryBySlug,
  getServiceBySlug,
} from '@/lib/content';
import { SITE_CONFIG } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllServiceCategories();
  const params: { category: string; slug: string }[] = [];

  categories.forEach((category) => {
    category.services.forEach((service) => {
      params.push({
        category: category.slug,
        slug: service.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const service = getServiceBySlug(categorySlug, slug);
  const category = getServiceCategoryBySlug(categorySlug);

  if (!service || !category) {
    return constructMetadata({
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${service.name} Services | Enterprise AI Solutions`,
    description: `${service.shortDescription}. Starting at ${service.startingPrice}. ${service.typicalResults}. Free consultation available.`,
    canonical: `${SITE_CONFIG.url}/services/${category.slug}/${service.slug}`,
    keywords: [
      service.name.toLowerCase(),
      ...service.capabilities.slice(0, 5).map((c) => c.toLowerCase()),
      category.name.toLowerCase(),
    ],
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { category: categorySlug, slug } = await params;
  const service = getServiceBySlug(categorySlug, slug);
  const category = getServiceCategoryBySlug(categorySlug);

  if (!service || !category) {
    notFound();
  }

  // Get related services (other services in same category)
  const relatedServices = category.services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const serviceDetailSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        `${service.name} Services`,
        `${SITE_CONFIG.url}/services/${category.slug}/${service.slug}`
      ),
      {
        '@type': 'Service',
        '@id': `${SITE_CONFIG.url}/services/${category.slug}/${service.slug}#service`,
        serviceType: service.name,
        name: service.name,
        description: service.description,
        provider: {
          '@id': `${SITE_CONFIG.url}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: service.startingPrice.replace(/[^0-9]/g, ''),
            priceCurrency: 'USD',
            description: `${service.name} starting price`,
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.name} Capabilities`,
          itemListElement: service.capabilities.map((cap) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: cap,
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_CONFIG.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${SITE_CONFIG.url}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: category.name,
            item: `${SITE_CONFIG.url}/services/${category.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: service.name,
            item: `${SITE_CONFIG.url}/services/${category.slug}/${service.slug}`,
          },
        ],
      },
      // FAQ Schema
      ...(service.faqs.length > 0 ? [generateFAQSchema(service.faqs)] : []),
    ],
  };

  return (
    <>
      <JsonLd data={serviceDetailSchema} />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm overflow-x-auto">
            <li className="flex-shrink-0">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <li className="flex-shrink-0">
              <Link href="/services" className="text-gray-500 hover:text-gray-700">
                Services
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <li className="flex-shrink-0">
              <Link
                href={`/services/${category.slug}`}
                className="text-gray-500 hover:text-gray-700"
              >
                {category.name}
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <li className="flex-shrink-0">
              <span className="text-gray-900 font-medium">{service.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm mb-6">
                <Link
                  href={`/services/${category.slug}`}
                  className="hover:text-blue-200"
                >
                  {category.name}
                </Link>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                {service.name}
              </h1>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/contact">Get Your Custom Assessment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800"
                >
                  <Link href="/case-studies">See It In Action</Link>
                </Button>
              </div>
            </div>

            {/* ROI Card */}
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Typical Results</h3>
              <div className="space-y-6">
                {service.roiMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <span className="text-xl font-bold">{metric.value}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{metric.metric}</div>
                      <div className="text-sm text-gray-400">{metric.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-sm text-gray-400">Projects starting at</div>
                <div className="text-3xl font-bold">{service.startingPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive {service.name.toLowerCase()} services include:
              </p>
              <ul className="space-y-4">
                {service.capabilities.map((capability, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Industry-leading tools and platforms for exceptional results.
              </p>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Ideal Use Cases */}
              {service.idealUseCases.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Ideal Use Cases
                  </h3>
                  <ul className="space-y-3">
                    {service.idealUseCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <ArrowRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {service.processSteps.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Implementation Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A proven methodology to deliver results on schedule
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <Card className="h-full bg-white">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                      <div className="flex items-start gap-2 text-sm">
                        <FileText className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{step.deliverable}</span>
                      </div>
                    </CardContent>
                  </Card>
                  {idx < service.processSteps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600">
                <strong>Total Timeline:</strong>{' '}
                {service.processSteps.reduce((acc, step) => {
                  const match = step.duration.match(/(\d+)/);
                  return acc + (match ? parseInt(match[1], 10) : 0);
                }, 0)}-
                {service.processSteps.reduce((acc, step) => {
                  const match = step.duration.match(/(\d+)(?:-(\d+))?/);
                  return acc + (match ? parseInt(match[2] || match[1], 10) : 0);
                }, 0)}{' '}
                weeks depending on complexity
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about {service.name.toLowerCase()}
              </p>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600">
                Explore other {category.name.toLowerCase()} capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${category.slug}/${related.slug}`}
                  className="group"
                >
                  <Card className="h-full border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {related.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{related.shortDescription}</p>
                      <div className="flex items-center text-blue-600 font-medium text-sm">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Your Custom {service.name} Assessment
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a 30-minute discovery call to discuss your requirements. We'll assess your
            use case, estimate ROI, and provide a tailored implementation roadmap — no
            commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-gray-100"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">Request Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
