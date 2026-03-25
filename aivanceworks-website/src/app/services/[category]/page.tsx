import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Bot, Cloud, Code2, Database, Settings, ArrowLeftRight, Shield,
  ArrowRight, ChevronRight, CheckCircle2
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllServiceCategories, getServiceCategoryBySlug } from '@/lib/content';
import { SITE_CONFIG } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ category: string }>;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Code2,
  Bot,
  Database,
  Settings,
  ArrowLeftRight,
  Shield,
};

export async function generateStaticParams() {
  const categories = getAllServiceCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getServiceCategoryBySlug(categorySlug);

  if (!category) {
    return constructMetadata({
      title: 'Service Not Found',
      description: 'The requested service category could not be found.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${category.name} Services | Serpent Software`,
    description: `${category.shortDescription}. Expert solutions with projects starting at ${category.startingPrice}. Book a free consultation today.`,
    canonical: `${SITE_CONFIG.url}/services/${category.slug}`,
    keywords: [
      category.name.toLowerCase(),
      ...category.capabilities.slice(0, 5).map(c => c.toLowerCase()),
    ],
  });
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getServiceCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon] || Bot;

  const categorySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        `${category.name} Services`,
        `${SITE_CONFIG.url}/services/${category.slug}`
      ),
      generateServiceSchema({
        name: category.name,
        description: category.description,
        url: `${SITE_CONFIG.url}/services/${category.slug}`,
      }),
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
        ],
      },
      // Add OfferCatalog if services exist
      ...(category.services.length > 0
        ? [
            {
              '@type': 'OfferCatalog',
              name: `${category.name} Service Catalog`,
              itemListElement: category.services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.name,
                  description: service.shortDescription,
                  url: `${SITE_CONFIG.url}/services/${category.slug}/${service.slug}`,
                },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  minPrice: service.startingPrice.replace(/[^0-9]/g, ''),
                  priceCurrency: 'USD',
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <JsonLd data={categorySchema} />

      {/* Breadcrumb */}
      <nav className="bg-surface-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-text-heading">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-text-heading">
                Services
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <li>
              <span className="text-text-heading font-medium">{category.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${category.gradient} text-white py-16 lg:py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-text-light">
                {category.name}
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent-hover"
                >
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/10"
                >
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 text-text-light">Typical Results</h3>
              <ul className="space-y-4">
                {category.typicalRoi.map((roi, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{roi}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-sm text-white/70">Projects starting at</div>
                <div className="text-3xl font-bold text-text-light">{category.startingPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services Section (if available) */}
      {category.services.length > 0 && (
        <section className="py-8 lg:py-12 bg-surface-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-heading mb-4">
                Our {category.name} Services
              </h2>
              <p className="text-lg text-text-body max-w-2xl mx-auto">
                Specialized solutions tailored to your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${category.slug}/${service.slug}`}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-accent/15 hover:shadow-card transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-text-heading group-hover:text-accent transition-colors">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-text-body text-base leading-relaxed mb-4">
                        {service.shortDescription}
                      </CardDescription>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          From {service.startingPrice}
                        </span>
                        <span className="flex items-center text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities Section */}
      <section className="py-8 lg:py-12 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-text-heading mb-6">
                Key Capabilities
              </h2>
              <p className="text-lg text-text-body mb-8">
                Our team brings deep expertise across the full spectrum of {category.name.toLowerCase()} services.
              </p>
              <ul className="space-y-4">
                {category.capabilities.map((capability, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-text-body">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-heading mb-6">
                Technologies We Use
              </h2>
              <p className="text-lg text-text-body mb-8">
                We leverage industry-leading tools and platforms to deliver exceptional results.
              </p>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-surface-white rounded-lg border border-border text-sm text-text-body hover:border-accent/15 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-12 bg-surface-dark text-text-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-text-light">
            Ready to Get Started with {category.name}?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your requirements.
            We'll provide a detailed proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-hover"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-text-light hover:bg-white/10"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
