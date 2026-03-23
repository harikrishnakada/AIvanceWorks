import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-6 sm:py-8 lg:py-12 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#1a1f36] via-[#1e2744] to-[#1a2038] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(37,99,235,0.2)]">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px]" />

          <div className="relative px-4 py-7 sm:px-8 sm:py-9 lg:px-14 lg:py-12">
            <div className="max-w-3xl mx-auto text-center">
              {/* Headline */}
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2.5 sm:mb-4 leading-tight">
                Ready to Build Something{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Intelligent?
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/50 mb-4 sm:mb-5 leading-relaxed">
                Let&apos;s discuss how AI and cloud solutions can transform your business.
                Book a free 30-minute consultation with our experts — no commitment required.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-500 shadow-[0_8px_30px_rgba(37,99,235,0.4)] text-xs sm:text-sm md:text-base px-5 sm:px-7 h-9 sm:h-10 md:h-11 font-bold rounded-xl transition-all duration-300"
                >
                  <Link href="/book-consultation">
                    <Calendar className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Book Free Consultation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-white/15 text-white hover:border-white/30 hover:bg-white/[0.06] text-xs sm:text-sm md:text-base px-5 sm:px-7 h-9 sm:h-10 md:h-11 rounded-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Trust Note */}
              <p className="mt-4 text-[11px] sm:text-xs md:text-sm text-white/30 font-medium">
                Join 50+ companies that have accelerated their AI journey with Serpent Software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
