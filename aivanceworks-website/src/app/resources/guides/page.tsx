import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Mail } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Technical Guides - Coming Soon | AIvanceWorks',
  description:
    'AIvanceWorks technical guides and tutorials coming soon. Visit our blog for detailed guides on AI, cloud architecture, and development.',
  canonical: `${SITE_CONFIG.url}/resources/guides`,
  noIndex: true, // Don't index placeholder pages
});

export default function GuidesPlaceholderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <BookOpen className="w-10 h-10 text-blue-600" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical Guides & Tutorials
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're creating comprehensive guides on AI/ML, cloud architecture, and software
            development best practices. Stay tuned!
          </p>

          {/* Current Guides Preview */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Blog</h2>
            <p className="text-gray-600 mb-6">
              While we're building our dedicated guides section, check out our blog for detailed
              technical content:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>RAG Framework Implementation Guides</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Azure AI Foundry Tutorials</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Cloud Migration Strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Agentic AI Development Patterns</span>
              </li>
            </ul>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/blog">
                Browse All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Newsletter Signup CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white mb-8">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="mb-6 opacity-90">
              Get notified when new guides and tutorials are published. Join our newsletter for
              technical insights delivered to your inbox.
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
              <Link href="/services">View Services</Link>
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
