import { JsonLd } from '@/components/seo/JsonLd';
import { generateWebPageSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={generateWebPageSchema(
          'AI-First Software Consulting | AIvanceWorks',
          SITE_CONFIG.url
        )}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
            Transform Your Ideas Into Intelligent Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-first software consulting for startups. Expert teams in AI agents, RAG
            frameworks, Azure cloud, and custom development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors"
            >
              Book Free Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-brand-600 bg-white border-2 border-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
            >
              View Services
            </a>
          </div>
        </section>

        {/* Services Preview */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Solutions',
                  description:
                    'Custom AI agents, RAG frameworks, and document intelligence solutions.',
                  href: '/services/ai-solutions',
                },
                {
                  title: 'Cloud Solutions',
                  description:
                    'Azure migration, AWS services, and cloud architecture optimization.',
                  href: '/services/cloud-solutions',
                },
                {
                  title: 'Custom Development',
                  description:
                    'End-to-end software development tailored to your business needs.',
                  href: '/services/custom-software-development',
                },
                {
                  title: 'Data Analytics',
                  description:
                    'Power BI dashboards, ETL pipelines, and data warehousing solutions.',
                  href: '/services/data-analytics',
                },
                {
                  title: 'Web Development',
                  description:
                    'Modern web applications using React, Next.js, and Angular.',
                  href: '/services/web-development',
                },
                {
                  title: 'DevOps',
                  description:
                    'CI/CD pipelines, infrastructure automation, and cloud deployment.',
                  href: '/services/devops',
                },
              ].map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get expert guidance on your next software project. Schedule a free
              30-minute consultation with our team.
            </p>
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors"
            >
              Schedule Free Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
