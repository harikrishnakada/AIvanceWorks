import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, Clock, Calendar } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateContactPointSchema } from '@/lib/schema';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE_CONFIG, CONTACT_CONFIG } from '@/lib/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us - Get a Free Consultation',
  description:
    'Contact AIvanceWorks for AI solutions, cloud migration, and custom development. Get a response within 24 hours or book a free 30-minute discovery call with our expert team.',
  canonical: `${SITE_CONFIG.url}/contact`,
  keywords: [
    'contact',
    'consulting',
    'free consultation',
    'software development inquiry',
    'AI consulting',
    'cloud migration help',
  ],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateContactPointSchema()),
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section - Direct Answer (AEO Optimization) */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Contact AIvanceWorks to discuss your AI, cloud, or custom development needs. We respond
            within 24 hours, or you can book a free 30-minute discovery call to get started
            immediately.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column: Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Right Column: Contact Info & Trust Signals */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${CONTACT_CONFIG.email.contact}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {CONTACT_CONFIG.email.contact}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${CONTACT_CONFIG.phone}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {CONTACT_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">
                      {CONTACT_CONFIG.availability.days}
                      <br />
                      {CONTACT_CONFIG.availability.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-muted-foreground">Within {CONTACT_CONFIG.responseTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="rounded-lg bg-muted/50 p-6">
              <h3 className="mb-4 text-lg font-semibold">Why Choose AIvanceWorks?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>50+ Projects Delivered Successfully</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>100% Client Satisfaction Rate</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>24-hour Response Time Guarantee</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>Microsoft Certified (Azure Solutions Architect, AI Engineer)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>8+ Years of Enterprise Software Delivery</span>
                </li>
              </ul>
            </div>

            {/* Book Consultation CTA */}
            <div className="rounded-lg bg-primary/10 p-6">
              <h3 className="mb-2 text-lg font-semibold">Prefer to talk first?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Book a free 30-minute discovery call with our Solutions Architect. No strings
                attached — we'll discuss your project and provide actionable recommendations.
              </p>
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                Book Free Consultation
              </Link>
            </div>

            {/* What Happens Next */}
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-lg font-semibold">What happens next?</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <span>
                    <strong>Initial Review:</strong> Our Solutions Architect reviews your inquiry
                    within 24 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </span>
                  <span>
                    <strong>First Response:</strong> We send initial recommendations and suggest
                    next steps
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </span>
                  <span>
                    <strong>Discovery Call:</strong> We schedule a free consultation to discuss
                    your project in detail
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </span>
                  <span>
                    <strong>Proposal:</strong> You receive a detailed project plan, timeline, and
                    fixed-price quote
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
