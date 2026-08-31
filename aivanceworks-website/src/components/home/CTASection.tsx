import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { NAVIGATION } from '@/lib/navigation';
import { Container } from '@/components/shared/primitives';

export function CTASection() {
  return (
    /* No top padding at all: the band above this section is owned entirely by
       FeaturedArticles' bottom padding (pb-8..16), which on its own is already
       a standard single-section band. This section adding its own on top is
       what made the gap read as dead space rather than as rhythm — both
       sections are white (FeaturedArticles is tone="light"), so there is no
       colour change to break the two bands apart, and the dark panel below
       carries its own py-7..20 besides.

       The bottom is SECTION_PADDING.md, written out rather than composed from
       the token: Tailwind scans source text for class names, so building the
       string at runtime would emit no CSS. Keep it in sync by hand if the scale
       in lib/section-spacing.ts changes. It stays on the standard scale so
       FAQSection below does not move. */
    <section
      data-section="home-cta"
      className="pt-0
        pb-8 md:pb-10 lg:pb-12 xl:pb-14 3xl:pb-16
        relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-white" />

      <Container width="default" className="relative">
        <div className="relative bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-brand-panel-lg">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent-500/10 rounded-full blur-[80px]" />

          <div className="relative px-4 py-7 sm:px-8 sm:py-9 lg:px-14 lg:py-12 xl:py-16 3xl:py-20">
            <div className="max-w-3xl xl:max-w-4xl 3xl:max-w-5xl mx-auto text-center">
              {/* Headline */}
              <h2 className="text-h2 font-black text-white mb-2.5 sm:mb-4 text-balance">
                Ready to Build Something{' '}
                <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                  Intelligent?
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-lead text-white/75 mb-4 sm:mb-5 max-w-[70ch] mx-auto text-pretty">
                Let&apos;s discuss how AI and cloud solutions can transform your business.
                Book a free 30-minute consultation with our experts — no commitment required.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-brand-600 text-white hover:bg-brand-500 shadow-glow-sm text-copy px-5 sm:px-7 xl:px-9 h-11 md:h-12 xl:h-12 3xl:h-14 font-bold rounded-xl transition-all duration-300"
                >
                  <Link href="/book-consultation">
                    <Calendar className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Book an Appointment
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-white/15 text-white hover:border-white/30 hover:bg-white/[0.06] text-copy px-5 sm:px-7 h-11 md:h-12 rounded-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Trust Note */}
              <p className="mt-4 text-label md:text-copy-sm text-white/30 font-medium">
                Join 50+ companies that have accelerated their AI journey with {SITE_CONFIG.name}.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
