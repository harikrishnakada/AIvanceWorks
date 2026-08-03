// Server component. Only the Cal.com embed needs the client — see BookingEmbed.
import Link from 'next/link';
import { Calendar, Video, Users, CheckCircle, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { constructMetadata } from '@/lib/seo';
import { BookingEmbed } from './BookingEmbed';

const DESCRIPTION =
  'Schedule a free 30-minute discovery call to discuss your software development needs. Get expert advice on AI solutions, cloud migration, and custom development.';

// As a 'use client' page this could not export metadata, so it rendered
// <title>/<meta> from the body and shipped no canonical and no OG tags at all —
// on a priority-0.9 conversion page.
export const metadata = constructMetadata({
  title: `Book a Free Consultation - 30-Minute Strategy Session | ${SITE_CONFIG.name}`,
  description: DESCRIPTION,
  canonical: `${SITE_CONFIG.url}/book-consultation`,
});

export default function BookConsultationPage() {
  return (
    <>
      {/* A plain div, not <main> — the root layout already renders this page's
          single <main id="main-content">, and nesting a second one is invalid. */}
      <div className="min-h-screen py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Free Discovery Consultation',
              serviceType: 'Consulting',
              description:
                '30-minute free strategy session to discuss software development, AI solutions, and cloud migration needs.',
              provider: { '@id': `${SITE_CONFIG.url}/#organization` },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />

        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Book Your Free Strategy Session
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              In 30 minutes, we'll discuss your project goals, technical requirements, and provide
              actionable recommendations — no strings attached.
            </p>
          </div>

          {/* What to Expect Section */}
          <div className="mb-12 grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Calendar className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <div className="mb-2 text-3xl font-bold text-primary">30 min</div>
              <p className="text-sm text-muted-foreground">Free consultation</p>
            </div>

            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Video className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <div className="mb-2 text-3xl font-bold text-primary">Video</div>
              <p className="text-sm text-muted-foreground">Zoom or Teams</p>
            </div>

            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Users className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <div className="mb-2 text-3xl font-bold text-primary">Expert</div>
              <p className="text-sm text-muted-foreground">Solutions Architect</p>
            </div>

            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <CheckCircle className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <div className="mb-2 text-3xl font-bold text-primary">Plan</div>
              <p className="text-sm text-muted-foreground">Get action steps</p>
            </div>
          </div>

          {/* Cal.com Embed - the only client-side island on this page */}
          <div className="mb-12 rounded-lg bg-muted/30 p-8">
            <BookingEmbed />
          </div>

          {/* Benefits Section */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">What We'll Cover:</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>Your project goals and success criteria</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>Current technical challenges and pain points</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>Recommended architecture and technology stack</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>Timeline estimates and project phases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>Budget alignment and engagement models</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>Next steps and action plan</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">How to Prepare:</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    →
                  </span>
                  <span>Brief overview of your project or idea</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    →
                  </span>
                  <span>Key business objectives and success metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    →
                  </span>
                  <span>Current technology stack (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    →
                  </span>
                  <span>Timeline expectations and constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    →
                  </span>
                  <span>Budget range and engagement preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    →
                  </span>
                  <span>List of questions for our team</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Trusted by 50+ companies • 100% satisfaction rate • 24h response time
            </p>
          </div>

          {/* Alternative Contact CTA */}
          <div className="mt-12 rounded-lg bg-muted/50 p-8 text-center">
            <Mail className="mx-auto mb-4 h-12 w-12 text-muted-foreground" aria-hidden="true" />
            <h2 className="mb-2 text-xl font-semibold">Prefer to send a message first?</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              If you'd like to provide more details before scheduling a call, you can reach out via
              our contact form.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
