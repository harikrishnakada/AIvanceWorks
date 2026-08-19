// Static header plus two module-level arrays — no hooks, handlers or browser
// APIs, so this stays a server component and never enters the homepage
// hydration pass.
import Link from 'next/link';
import { SITE_CONFIG, CONTACT_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { CheckList, StepBadge } from '@/components/shared/primitives';
import { SECTION_Y } from '@/lib/section-spacing';

// Ordered on purpose — the numbering is the reason a reader trusts the third
// point, so the sequence carries meaning rather than decorating the column.
const reasons = [
  {
    title: 'AI-First Expertise',
    description:
      'Deep specialization in RAG frameworks, AI agents, and Azure AI Foundry — not generalists learning on your dime.',
  },
  {
    title: 'Senior-Only Teams',
    description:
      'Every project staffed with 10+ years experience. Direct access to architects and founders, not account managers.',
  },
  {
    title: 'Measurable ROI',
    description:
      'We track and report business outcomes, not just deliverables. Most clients see ROI within 60-90 days.',
  },
];

const startingPoints = [
  `Free ${CONTACT_CONFIG.booking.consultationDuration}-minute consultation`,
  'Projects starting at $5,000',
  'No long-term contracts required',
  'Security and Compliance guranteed',
];

export function WhyChooseUsServicesSection() {
  return (
    // Gradient ground rather than flat white — the card on the right is
    // surface-white, and on a white section it would have nothing to sit
    // against. Same treatment WhyChooseUsSection and CTASection use.
    <section
      data-section="home-why-choose-us-services"
      className={`${SECTION_Y} relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-white" />

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center lg:max-w-6xl lg:mx-auto">
          {/* ── Left: the reasons ──────────────────────────────────────── */}
          <div>
            {/* text-text-heading, not text-gray-900 as the sibling sections
                use: the purple theme tints --text-heading to #1e1033, so a raw
                gray-900 h2 would stay neutral while the h3s directly beneath it
                shifted purple. Identical rendering on blue/black. */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-text-heading mb-4 sm:mb-5 leading-tight text-balance">
              Why Clients Choose{' '}
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
            </h2>

            <ol className="space-y-4 sm:space-y-5">
              {reasons.map((item, i) => (
                <li key={item.title} className="flex gap-3 sm:gap-4">
                  <StepBadge step={i + 1} className="mt-0.5" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-1 leading-snug text-balance">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Right: the conversion card ─────────────────────────────── */}
          <div className="bg-surface-white border border-border-light rounded-xl shadow-card-sm px-6 py-8 md:px-7 md:py-10">
            <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-5 leading-snug">
              Start Your Project
            </h3>
            <CheckList
              items={startingPoints}
              className="mb-6 text-sm md:text-base"
            />
            {/* Explicit brand tokens rather than the Button's `default`
                variant. That variant paints `bg-primary`, which is the shadcn
                token — a second, independent color system that happens to
                agree with --brand-600 in all three themes today. Nothing
                enforces that, so a future theme could set --brand-600 and
                leave --primary behind. Every other primary CTA in the app
                (EngagementModels, about, MobileMenu) names the brand token
                directly; this one now does too.
                The ring is also explicit: the variant ships ring-1 ring-ring,
                and a 1px ring at brand-on-white is thin for a control this
                size — ring-2 with an offset matches the in-card CTA in
                EngagementModels. */}
            <Button
              asChild
              size="lg"
              className="w-full bg-brand-600 hover:bg-brand-700 text-text-light focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              <Link href="/book-consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
