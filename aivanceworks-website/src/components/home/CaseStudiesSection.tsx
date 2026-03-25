import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getFeaturedCaseStudies } from '@/lib/content';

// Fallback placeholder data for when no case studies exist in Sanity yet
const placeholderCaseStudies = [
  {
    title: 'AI-Powered Document Processing for FinTech Startup',
    excerpt:
      'Implemented a RAG-based document intelligence system that automated 80% of manual document review, reducing processing time from days to minutes.',
    industry: 'FinTech',
    services: ['AI Solutions', 'Azure Cloud'],
    metrics: [
      { label: 'Processing Time', value: '95%', suffix: 'Reduction' },
      { label: 'Cost Savings', value: '$2M', suffix: 'Annually' },
      { label: 'Accuracy', value: '99.2%', suffix: 'Rate' },
    ],
    slug: 'fintech-document-processing',
    image: null,
  },
  {
    title: 'Azure Migration for Healthcare SaaS Platform',
    excerpt:
      'Migrated a legacy on-premises system to Azure with zero downtime. Implemented HIPAA-compliant architecture with 50% infrastructure cost reduction.',
    industry: 'Healthcare',
    services: ['Cloud Migration', 'DevOps'],
    metrics: [
      { label: 'Infrastructure Cost', value: '50%', suffix: 'Reduction' },
      { label: 'Deployment Time', value: '10x', suffix: 'Faster' },
      { label: 'Uptime', value: '99.99%', suffix: 'SLA' },
    ],
    slug: 'healthcare-azure-migration',
    image: null,
  },
  {
    title: 'Real-Time Analytics Dashboard for E-Commerce',
    excerpt:
      'Built a Power BI analytics platform with Azure Synapse that provides real-time insights into customer behavior and inventory management.',
    industry: 'E-Commerce',
    services: ['Data Analytics', 'Web Development'],
    metrics: [
      { label: 'Decision Speed', value: '5x', suffix: 'Faster' },
      { label: 'Revenue Impact', value: '23%', suffix: 'Increase' },
      { label: 'Data Freshness', value: 'Real-time', suffix: '' },
    ],
    slug: 'ecommerce-analytics',
    image: null,
  },
];

export async function CaseStudiesSection() {
  // Try to fetch featured case studies from Sanity
  const featuredCaseStudies = await getFeaturedCaseStudies(3);

  // Use Sanity data if available, otherwise use placeholder data
  const caseStudies = featuredCaseStudies.length > 0 ? featuredCaseStudies : placeholderCaseStudies;
  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-7">
          <div className="max-w-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-text-heading mb-1.5 sm:mb-2 leading-tight">
              Real Results for Real Companies
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-text-body leading-relaxed">
              See how we&apos;ve helped startups and enterprises achieve measurable business outcomes with AI and cloud solutions.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0 rounded-xl border-border hover:border-accent/30 hover:bg-accent/5 hover:text-accent-hover font-semibold transition-all duration-200">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug || index}
              href={`/case-studies/${study.slug}`}
              className="group flex flex-col bg-surface-white rounded-2xl overflow-hidden border border-border hover:shadow-card hover:border-border-hover transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-surface-warm to-border relative">
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent-hover bg-surface-white/90 px-4 py-1.5 rounded-full shadow-sm">
                      {study.industry}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-4 sm:p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs font-semibold text-accent-hover bg-accent/8 px-2.5 py-1 rounded-lg"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-text-heading mb-1.5 sm:mb-2 group-hover:text-accent-hover transition-colors line-clamp-2">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-text-body text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                  {study.excerpt}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm sm:text-base font-black text-accent-hover">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">{metric.suffix}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
