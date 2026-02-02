import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'FAQ - Coming Soon | AIvanceWorks',
  description:
    'Our comprehensive FAQ page is coming soon. In the meantime, check our homepage FAQ section or contact us directly with your questions.',
  canonical: `${SITE_CONFIG.url}/faq`,
  noIndex: true, // Don't index placeholder pages
});

export default function FAQPlaceholderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <HelpCircle className="w-10 h-10 text-blue-600" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            FAQ Page Coming Soon
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building a comprehensive FAQ page to help answer your questions about our
            services, pricing, and process. In the meantime, you can find answers in a few places.
          </p>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <Link
              href="/#faq"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <HelpCircle className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Homepage FAQ</h3>
              <p className="text-sm text-gray-600 mb-3">
                Check our FAQ section on the homepage for common questions and answers
              </p>
              <div className="flex items-center justify-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                View FAQ Section
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <MessageCircle className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600 mb-3">
                Have a specific question? Reach out directly and we'll respond within 24 hours
              </p>
              <div className="flex items-center justify-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0" />
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#faq">
                View Homepage FAQ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Support</Link>
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
