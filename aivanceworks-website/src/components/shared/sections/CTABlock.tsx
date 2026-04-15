import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface CTABlockCta {
  label: string;
  href: string;
}

export interface CTABlockProps {
  title: string;
  description: string;
  primaryCta: CTABlockCta;
  secondaryCta?: CTABlockCta;
  className?: string;
}

export const CTABlock = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTABlockProps) => (
  <section
    data-section="cta-block"
    className={cn('relative py-8 sm:py-12 lg:py-16 overflow-hidden', className)}
  >
    {/* Light backdrop bridges adjacent light sections */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-white" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-brand-panel-lg">
        {/* Subtle grid pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"
        />

        {/* Decorative glow blurs */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent-500/10 rounded-full blur-[80px]"
        />

        <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/75 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-brand-600 text-white hover:bg-brand-500 shadow-glow-sm font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/15 text-white hover:border-white/30 hover:bg-white/[0.06] rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
