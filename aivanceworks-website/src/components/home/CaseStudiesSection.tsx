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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Results for Real Companies
            </h2>
            <p className="text-lg text-gray-600">
              See how we've helped startups and enterprises achieve measurable business outcomes with AI and cloud solutions.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug || index}
              href={`/case-studies/${study.slug}`}
              className="group flex flex-col bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600 bg-white/80 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {study.excerpt}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">{metric.suffix}</div>
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
