import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative bg-surface rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-border-subtle">
          {/* Background Pattern — hex color intentionally kept; cannot be expressed as Tailwind opacity token */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#84CC1604_1px,transparent_1px),linear-gradient(to_bottom,#84CC1604_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-[80px]" />

          <div className="relative px-4 py-7 sm:px-8 sm:py-9 lg:px-14 lg:py-12">
            <div className="max-w-3xl mx-auto text-center">
              {/* Headline */}
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-text-light mb-2.5 sm:mb-4 leading-tight">
                Ready to Build Something{' '}
                <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
                  Intelligent?
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-5 leading-relaxed">
                Let&apos;s discuss how AI and cloud solutions can transform your business.
                Book a free 30-minute consultation with our experts — no commitment required.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-accent text-text-heading hover:bg-accent-hover shadow-glow text-xs sm:text-sm md:text-base px-5 sm:px-7 h-9 sm:h-10 md:h-11 font-bold rounded-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Start a project
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto bg-transparent border-border-subtle text-text-light hover:border-muted-foreground hover:bg-transparent hover:text-text-light text-xs sm:text-sm md:text-base px-5 sm:px-7 h-9 sm:h-10 md:h-11 rounded-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Trust Note */}
              <p className="mt-4 text-[11px] sm:text-xs md:text-sm text-muted-foreground font-medium">
                Join 50+ companies that have accelerated their AI journey with Serpent Software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
