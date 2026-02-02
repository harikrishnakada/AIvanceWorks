import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Wrench, ArrowRight, BookOpen, Mail } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Developer Tools & Resources - Coming Soon | AIvanceWorks',
  description:
    'AIvanceWorks developer tools and resources coming soon. Explore our blog for technical insights on AI, cloud, and software development.',
  canonical: `${SITE_CONFIG.url}/resources/tools`,
  noIndex: true, // Don't index placeholder pages
});

export default function ToolsPlaceholderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <Wrench className="w-10 h-10 text-blue-600" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Developer Tools & Resources
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're curating a collection of developer tools, code snippets, and technical resources.
            Check back soon!
          </p>

          {/* Alternative Resources */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">In The Meantime</h2>
            <p className="text-gray-600 mb-6">
              Explore our blog for technical articles, tutorials, and insights on AI/ML, cloud
              architecture, and modern development practices.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/blog"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <BookOpen className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Technical Blog</h3>
                <p className="text-sm text-gray-600">
                  In-depth articles and tutorials
                </p>
              </Link>
              <Link
                href="/services"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <Wrench className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Our Services</h3>
                <p className="text-sm text-gray-600">
                  AI/ML, cloud, and development services
                </p>
              </Link>
            </div>
          </div>

          {/* Newsletter Signup CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white mb-8">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-2">Get Notified</h2>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter to be the first to know when new tools and resources are
              available.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-gray-100"
            >
              <Link href="/#newsletter">Subscribe to Newsletter</Link>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/blog">
                Read Our Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Expected Launch */}
          <p className="mt-8 text-sm text-gray-500">
            Expected launch: <span className="font-medium">Q2 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
