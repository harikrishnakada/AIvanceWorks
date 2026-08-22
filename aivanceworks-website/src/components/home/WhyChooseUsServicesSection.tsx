// Static header plus two module-level arrays — no hooks, handlers or browser
// APIs, so this stays a server component and never enters the homepage
// hydration pass.
import Link from 'next/link';
import { SITE_CONFIG, CONTACT_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { CheckList, Container, StepBadge } from '@/components/shared/primitives';
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

      <Container width="default" className="relative">
        {/* The h2 sits outside the two-column grid rather than at the top of
            the left column. Inside it, no vertical alignment kept the card
            clear of the heading — centered put the card's top edge level with
            the h2's first line, and even bottom-aligned it still crossed the
            last line, reading as if the card were sitting on the heading. Out
            here the heading owns its own row and both columns start beneath it.
            max-w-2xl preserves the original half-width measure so the line
            breaks the same way it did in the column.
            text-text-heading, not text-gray-900 as the sibling sections use:
            the purple theme tints --text-heading to #1e1033, so a raw gray-900
            h2 would stay neutral while the h3s beneath it shifted purple.
            Identical rendering on blue/black. */}
        <h2 className="text-h2 font-black text-text-heading mb-6 sm:mb-8 lg:mb-10 leading-tight text-balance max-w-2xl">
          Why Clients Choose{' '}
          <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </h2>

        {/* No items-* override, so both columns take the default `stretch` and
            share one row height — the two-column read the section wants. Any
            alignment value instead makes the shorter column float against the
            taller one, which is what made the card look like it was riding up
            on the heading or trailing off the bottom. */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16">
          {/* ── Left: the reasons ──────────────────────────────────────── */}
          {/* Fixed spacing, deliberately NOT justify-between against the
              stretched row height — that distributed the card's surplus into
              these two gaps and visibly loosened the list's rhythm. The card is
              the only element here with a visible boundary, so it alone needs to
              span the row; the list's few pixels of trailing whitespace are
              invisible without a border to measure them against. */}
          <ol className="space-y-4 sm:space-y-5">
            {reasons.map((item, i) => (
              <li key={item.title} className="flex gap-3 sm:gap-4">
                <StepBadge step={i + 1} className="mt-0.5" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-1 leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="text-copy-sm md:text-copy text-text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* ── Right: the conversion card ─────────────────────────────── */}
          {/* flex flex-col so the CTA can take mt-auto and sit on the card's
              bottom edge once the card is stretched taller than its content.
              md:py-8 rather than the md:py-10 this card used to carry: the extra
              padding was most of why the card overshot the reasons list, and
              trimming it means neither column has to stretch far to meet the
              other. */}
          <div className="bg-surface-white border border-border-light rounded-xl shadow-card-sm px-6 py-8 md:px-7 md:py-8 flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-5 leading-snug">
              Start Your Project
            </h3>
            <CheckList
              items={startingPoints}
              className="mb-6 text-copy-sm md:text-copy"
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
              className="w-full mt-auto bg-brand-600 hover:bg-brand-700 text-text-light focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              <Link href="/book-consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
