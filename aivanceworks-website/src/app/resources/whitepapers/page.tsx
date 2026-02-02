import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Mail, Download } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Whitepapers & Research - Coming Soon | AIvanceWorks',
  description:
    'AIvanceWorks whitepapers and industry research coming soon. Download comprehensive guides on AI/ML, cloud architecture, and enterprise software.',
  canonical: `${SITE_CONFIG.url}/resources/whitepapers`,
  noIndex: true, // Don't index placeholder pages
});

export default function WhitepapersPlaceholderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Whitepapers & Research
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're developing in-depth whitepapers on AI/ML implementation, cloud architecture
            patterns, and enterprise software best practices.
          </p>

          {/* Upcoming Topics */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Download className="w-6 h-6 text-blue-600 mr-2" />
              Upcoming Whitepapers
            </h2>
            <p className="text-gray-600 mb-6">
              Topics we're currently researching and documenting:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📄</span>
                <span>
                  <strong>Enterprise RAG Architecture:</strong> Designing production-ready
                  retrieval-augmented generation systems
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📄</span>
                <span>
                  <strong>Azure AI Foundry Best Practices:</strong> Comprehensive guide to
                  enterprise AI deployment
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📄</span>
                <span>
                  <strong>Agentic AI ROI Analysis:</strong> Measuring business impact of autonomous
                  AI systems
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📄</span>
                <span>
                  <strong>Cloud Migration Playbook:</strong> Step-by-step guide for on-premises to
                  Azure migration
                </span>
              </li>
            </ul>
          </div>

          {/* Alternative Resources */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Available Resources Now
            </h3>
            <p className="text-gray-600 mb-4">
              While we finalize our whitepapers, explore our blog for detailed technical articles
              and case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/blog">Technical Blog</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href="/case-studies">Case Studies</Link>
              </Button>
            </div>
          </div>

          {/* Newsletter Signup CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white mb-8">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-2">Get Early Access</h2>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter to receive whitepapers as soon as they're published, plus
              exclusive technical insights.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-gray-100"
            >
              <Link href="/#newsletter">Subscribe for Updates</Link>
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
            First whitepaper expected: <span className="font-medium">Q2 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
