import { Metadata } from 'next';
import Link from 'next/link';
import {
  Bot, Cloud, Code2, Database, Settings, ArrowLeftRight, Shield, ArrowRight
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllServiceCategories } from '@/lib/content';
import { SITE_CONFIG } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = constructMetadata({
  title: 'Software Development Services | Serpent Software',
  description: 'Custom software, AI solutions & Azure cloud services for startups. Expert in RAG, full-stack dev & DevOps. Projects from $5K. Start your project today.',
  canonical: `${SITE_CONFIG.url}/services`,
  keywords: [
    'software development services',
    'custom software development',
    'AI development services',
    'Azure cloud services',
    'enterprise software solutions',
  ],
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Code2,
  Bot,
  Database,
  Settings,
  ArrowLeftRight,
  Shield,
};

export default function ServicesPage() {
  const categories = getAllServiceCategories();

  const servicesListSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema('Software Development Services', `${SITE_CONFIG.url}/services`),
      {
        '@type': 'ItemList',
        itemListElement: categories.map((cat, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: cat.name,
            description: cat.shortDescription,
            url: `${SITE_CONFIG.url}/services/${cat.slug}`,
            provider: {
              '@id': `${SITE_CONFIG.url}/#organization`,
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={servicesListSchema} />

      {/* Hero Section */}
      <section className="bg-surface-dark text-text-light py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Software Development Services That Drive Growth
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Serpent Software delivers end-to-end software development services for US-based startups
              and mid-market companies. Our expertise spans cloud engineering, AI/ML solutions,
              full-stack development, data analytics, DevOps automation, enterprise integration,
              and security compliance. With projects starting at $5,000 and senior teams averaging
              10+ years of experience, we transform complex business challenges into production-ready
              software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
                <Link href="/contact">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border-subtle text-text-light hover:bg-glass-bg"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 lg:py-12 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-heading mb-4">
              Our Service Categories
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Seven strategic capability areas designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Bot;
              return (
                <Link
                  key={category.slug}
                  href={`/services/${category.slug}`}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-accent/30 hover:shadow-card transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-7 w-7 text-text-light" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-accent-hover transition-colors">
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-text-body text-base leading-relaxed mb-4">
                        {category.shortDescription}
                      </CardDescription>

                      {/* ROI Highlights */}
                      <div className="space-y-2 mb-4">
                        {category.typicalRoi.slice(0, 2).map((roi, idx) => (
                          <div key={idx} className="flex items-center text-sm text-text-body">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                            {roi}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          From {category.startingPrice}
                        </span>
                        <span className="flex items-center text-accent-hover font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 lg:py-12 bg-surface-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-heading mb-6">
                Why Teams Choose Serpent Software
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-heading mb-1">AI-First Expertise</h3>
                    <p className="text-text-body">
                      Deep specialization in RAG frameworks, AI agents, and Azure AI Foundry —
                      not generalists learning on your dime.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-heading mb-1">Senior-Only Teams</h3>
                    <p className="text-text-body">
                      Every project staffed with 10+ years experience. Direct access to architects
                      and founders, not account managers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-heading mb-1">Measurable ROI</h3>
                    <p className="text-text-body">
                      We track and report business outcomes, not just deliverables.
                      Most clients see ROI within 60-90 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-white rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-text-heading mb-6">
                Start Your Project
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-body">Free 30-minute consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-body">Projects starting at $5,000</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-body">No long-term contracts required</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-body">US-based senior engineers</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent-hover" size="lg">
                <Link href="/contact">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-12 bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-light mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project requirements.
            We'll provide a detailed proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-hover"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border-subtle text-text-light hover:bg-glass-bg"
            >
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
