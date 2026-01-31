import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Build Something Intelligent?
              </h2>

              {/* Supporting Text */}
              <p className="text-lg lg:text-xl text-blue-100 mb-10 leading-relaxed">
                Let's discuss how AI and cloud solutions can transform your business.
                Book a free 30-minute consultation with our experts — no commitment required.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg text-base px-8 h-12"
                >
                  <Link href="/book-consultation">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-base px-8 h-12"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Trust Note */}
              <p className="mt-8 text-sm text-blue-200">
                Join 50+ companies that have accelerated their AI journey with AIvanceWorks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
