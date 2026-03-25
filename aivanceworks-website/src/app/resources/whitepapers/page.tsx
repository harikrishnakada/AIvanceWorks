import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Mail, Download } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Whitepapers & Research - Coming Soon | Serpent Software',
  description:
    'Serpent Software whitepapers and industry research coming soon. Download comprehensive guides on AI/ML, cloud architecture, and enterprise software.',
  canonical: `${SITE_CONFIG.url}/resources/whitepapers`,
  noIndex: true, // Don't index placeholder pages
});

export default function WhitepapersPlaceholderPage() {
  return (
    <div className="min-h-screen bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface-warm mb-6">
            <FileText className="w-10 h-10 text-accent" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-4">
            Whitepapers & Research
          </h1>

          {/* Description */}
          <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto leading-relaxed">
            We're developing in-depth whitepapers on AI/ML implementation, cloud architecture
            patterns, and enterprise software best practices.
          </p>

          {/* Upcoming Topics */}
          <div className="bg-white rounded-xl p-8 border border-border shadow-sm mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-text-heading mb-4 flex items-center">
              <Download className="w-6 h-6 text-accent mr-2" />
              Upcoming Whitepapers
            </h2>
            <p className="text-text-body mb-6">
              Topics we're currently researching and documenting:
            </p>
            <ul className="space-y-3 text-text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-accent mr-2">📄</span>
                <span>
                  <strong>Enterprise RAG Architecture:</strong> Designing production-ready
                  retrieval-augmented generation systems
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">📄</span>
                <span>
                  <strong>Azure AI Foundry Best Practices:</strong> Comprehensive guide to
                  enterprise AI deployment
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">📄</span>
                <span>
                  <strong>Agentic AI ROI Analysis:</strong> Measuring business impact of autonomous
                  AI systems
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">📄</span>
                <span>
                  <strong>Cloud Migration Playbook:</strong> Step-by-step guide for on-premises to
                  Azure migration
                </span>
              </li>
            </ul>
          </div>

          {/* Alternative Resources */}
          <div className="bg-surface-warm rounded-xl p-6 border border-border mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-text-heading mb-3">
              Available Resources Now
            </h3>
            <p className="text-text-body mb-4">
              While we finalize our whitepapers, explore our blog for detailed technical articles
              and case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="flex-1 border-border text-text-heading hover:border-accent">
                <Link href="/blog">Technical Blog</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 border-border text-text-heading hover:border-accent">
                <Link href="/case-studies">Case Studies</Link>
              </Button>
            </div>
          </div>

          {/* Newsletter Signup CTA */}
          <div className="bg-surface-dark rounded-xl p-8 text-text-light mb-8">
            <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h2 className="text-2xl font-bold mb-2 text-text-light">Get Early Access</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our newsletter to receive whitepapers as soon as they're published, plus
              exclusive technical insights.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-hover"
            >
              <Link href="/#newsletter">Subscribe for Updates</Link>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
              <Link href="/blog">
                Read Our Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-text-heading hover:border-accent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Expected Launch */}
          <p className="mt-8 text-sm text-muted-foreground">
            First whitepaper expected: <span className="font-medium text-text-heading">Q2 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
