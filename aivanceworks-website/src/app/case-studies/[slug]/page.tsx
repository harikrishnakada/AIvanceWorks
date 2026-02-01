import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return constructMetadata({
    title: caseStudy.title,
    description: caseStudy.excerpt,
    image: caseStudy.image,
    canonical: `${SITE_CONFIG.url}/case-studies/${caseStudy.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: caseStudy.title,
          description: caseStudy.excerpt,
          image: caseStudy.image,
          datePublished: caseStudy.publishedAt,
          author: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
          },
        }}
      />

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-12 lg:py-16 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {caseStudy.industry}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {caseStudy.excerpt}
            </p>

            {/* Metrics Banner */}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-200">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">{metric.suffix}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {caseStudy.image && (
          <div className="relative w-full h-[400px] lg:h-[500px] bg-gray-100">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Client Info */}
          {caseStudy.client && (
            <Card className="p-6 mb-12 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Client Overview</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {caseStudy.client.name && (
                  <div>
                    <div className="text-gray-500">Company</div>
                    <div className="font-medium">{caseStudy.client.name}</div>
                  </div>
                )}
                {caseStudy.client.size && (
                  <div>
                    <div className="text-gray-500">Size</div>
                    <div className="font-medium">{caseStudy.client.size}</div>
                  </div>
                )}
                {caseStudy.client.location && (
                  <div>
                    <div className="text-gray-500">Location</div>
                    <div className="font-medium">{caseStudy.client.location}</div>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Services Used */}
          {caseStudy.services && caseStudy.services.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Challenge */}
          {caseStudy.challenge && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{caseStudy.challenge}</p>
            </section>
          )}

          {/* Solution - Placeholder for now */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Detailed solution content will be added through the Sanity CMS. This section will
                include the comprehensive approach we took to solve the client's challenges,
                including architecture decisions, implementation details, and key milestones.
              </p>
            </div>
          </section>

          {/* Technologies */}
          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Results */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.metrics.map((metric, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-blue-600">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {metric.suffix}
                        </div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 mb-12">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-gray-600">{caseStudy.testimonial.role}</div>
              </div>
            </Card>
          )}

          {/* CTA */}
          <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-blue-100 mb-6">
              Let's discuss how we can help transform your business with our proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-gray-100"
              >
                <Link href="/contact">Start Your Project</Link>
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
          </Card>
        </div>
      </article>
    </>
  );
}
