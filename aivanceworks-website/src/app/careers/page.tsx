import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Careers - Coming Soon | Serpent Software',
  description:
    'Join the Serpent Software team. Career opportunities for experienced software engineers, AI specialists, and cloud architects coming soon.',
  canonical: `${SITE_CONFIG.url}/careers`,
  noIndex: true, // Don't index placeholder pages
});

export default function CareersPlaceholderPage() {
  return (
    <div className="min-h-screen bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface-warm mb-6">
            <Briefcase className="w-10 h-10 text-accent" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-4">
            Careers at Serpent Software
          </h1>

          {/* Description */}
          <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building a world-class team of AI and cloud specialists. Career opportunities for
            experienced engineers coming soon.
          </p>

          {/* What We Look For */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-lg border border-border">
              <Award className="w-8 h-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-text-heading mb-2">Senior Expertise</h3>
              <p className="text-sm text-text-body">
                10+ years experience in software engineering, AI/ML, or cloud architecture
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-border">
              <Users className="w-8 h-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-text-heading mb-2">Collaborative Spirit</h3>
              <p className="text-sm text-text-body">
                Team players who thrive in client-facing and collaborative environments
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-border">
              <TrendingUp className="w-8 h-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-text-heading mb-2">Continuous Learning</h3>
              <p className="text-sm text-text-body">
                Passion for staying current with Azure, AI/ML, and modern development practices
              </p>
            </div>
          </div>

          {/* Our Culture */}
          <div className="bg-white rounded-xl p-8 border border-border shadow-sm mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-text-heading mb-4">What We Offer</h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Work on cutting-edge AI and cloud projects for innovative startups</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Competitive compensation and benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Continuous learning with certification support (Microsoft, AWS, PMI, Scrum Alliance)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Remote-first culture with flexible work arrangements</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Collaborative team environment focused on technical excellence</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <p className="text-lg text-text-body">
              Interested in joining our team? Get in touch to learn about future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-text-heading hover:border-accent">
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>

          {/* Expected Launch */}
          <p className="mt-8 text-sm text-muted-foreground">
            Job postings expected: <span className="font-medium text-text-heading">Q2 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
