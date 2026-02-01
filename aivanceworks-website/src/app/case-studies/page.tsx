import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Case Studies - Real Results from Real Projects',
  description:
    'Explore AIvanceWorks case studies showcasing AI implementations, cloud migrations, and custom software development projects with measurable business outcomes.',
  canonical: `${SITE_CONFIG.url}/case-studies`,
  keywords: [
    'software development case studies',
    'AI implementation examples',
    'cloud migration success stories',
    'enterprise software projects',
  ],
});

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <>
      <JsonLd
        data={generateWebPageSchema(
          'Case Studies - Real Results',
          `${SITE_CONFIG.url}/case-studies`
        )}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Real Results from Real Projects
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Explore how we've helped companies transform their businesses through
              AI solutions, cloud migrations, and custom software development.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                Case studies coming soon. Check back later!
              </p>
              <p className="text-gray-500 text-sm">
                In the meantime, explore our services or get in touch to discuss your project.
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Button asChild variant="outline">
                  <Link href="/services">View Services</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Image */}
                    <div className="relative aspect-video bg-gray-100">
                      {study.image ? (
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                          <span className="text-sm font-medium text-blue-600 bg-white/80 px-3 py-1 rounded-full">
                            {study.industry}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.services.slice(0, 2).map((service) => (
                          <span
                            key={service}
                            className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {study.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {study.excerpt}
                      </p>

                      {/* Metrics */}
                      {study.metrics && study.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                          {study.metrics.slice(0, 3).map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-bold text-blue-600">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-500">
                                {metric.suffix}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                        Read case study
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
