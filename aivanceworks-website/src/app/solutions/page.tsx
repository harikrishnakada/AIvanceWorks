import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';
import { getLucideIcon } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = constructMetadata({
  title: 'Industry Solutions — Healthcare, Insurance & E-Commerce Software',
  description: `${SITE_CONFIG.name} builds custom software solutions for healthcare, insurance, and e-commerce. HIPAA-compliant portals, claims systems, and AI-powered storefronts.`,
  canonical: `${SITE_CONFIG.url}/solutions`,
  keywords: [
    'healthcare software solutions',
    'insurance software development',
    'e-commerce development',
    'patient portal development',
    'insurance portal',
    'custom software solutions',
  ],
});

const solutionsPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    generateWebPageSchema(
      'Industry Solutions',
      `${SITE_CONFIG.url}/solutions`
    ),
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
          name: 'Solutions',
          item: `${SITE_CONFIG.url}/solutions`,
        },
      ],
    },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={solutionsPageSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm mb-6">
            Industry Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            Software Solutions Built for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            We design and develop custom software that solves real problems in healthcare,
            insurance, and e-commerce — with deep domain expertise and modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              <Link href="/case-studies">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      {NAVIGATION.solutionsMenu.map((category, catIdx) => (
        <section
          key={category.heading}
          id={category.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          className={catIdx % 2 === 0 ? 'py-8 lg:py-12 bg-white' : 'py-8 lg:py-12 bg-gray-50'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                {(() => {
                  const Icon = getLucideIcon(category.icon);
                  return <Icon className="h-6 w-6 text-blue-600" />;
                })()}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{category.heading}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.links.map((link) => (
                <Link key={link.href} href={link.href} className="group">
                  <Card className="h-full border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        {(() => {
                          const Icon = getLucideIcon(link.icon);
                          return <Icon className="h-5 w-5 text-blue-600" />;
                        })()}
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {link.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
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
      ))}

      {/* CTA */}
      <section className="py-8 lg:py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We build custom software for any vertical. Tell us about your requirements
            and we&apos;ll show you how our team can deliver.
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
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
