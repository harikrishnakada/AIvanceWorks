import { Award, Clock, Shield, Users, Code2, FileCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { IconTile } from '@/components/shared/primitives';
import { SECTION_Y, CARD_GRID_GAP } from '@/lib/section-spacing';

const differentiators = [
  {
    title: 'AI-Powered Cloud Computing',
    description:
      'We use AI-augmented development workflows to deliver faster and smarter. Production experience with Azure AI Foundry, LangChain, and RAG frameworks.',
    stat: '5x',
    statLabel: 'Faster Development',
    icon: Award,
  },
  {
    title: 'Microsoft Certified',
    description:
      'Our architects hold AI-102, AZ-204, and DP-420 certifications. Deep expertise in the Azure ecosystem ensures enterprise-grade solutions.',
    stat: '8+',
    statLabel: 'Years Experience',
    icon: Shield,
  },
  {
    title: 'Dedicated Development Teams',
    description:
      'A boutique team that integrates directly with yours. Full transparency, daily standups, and seamless collaboration from day one.',
    stat: '100%',
    statLabel: 'Team Integration',
    icon: Code2,
  },
  {
    title: 'Startup to Enterprise',
    description:
      'Boutique pricing with enterprise quality. We work shoulder-to-shoulder with your team, ensuring knowledge transfer and long-term success.',
    stat: '50%',
    statLabel: 'Cost Savings',
    icon: Users,
  },
  {
    title: 'End-to-End Delivery',
    description:
      'From architecture to deployment, we own the entire delivery lifecycle. Agile methodology with transparent communication and predictable timelines.',
    stat: '100%',
    statLabel: 'On-Time Delivery',
    icon: Clock,
  },
  {
    title: 'Regulatory & Compliance',
    description:
      'Security and compliance built into the delivery lifecycle, not bolted on at the end. We design to SOC 2, HIPAA, and GDPR controls with audit-ready documentation.',
    stat: '100%',
    statLabel: 'Audit-Ready Delivery',
    icon: FileCheck,
  },
];

export function WhyChooseUsSection() {
  return (
    <section data-section="home-why-choose-us" className={`${SECTION_Y} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-white" />

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2 leading-tight">
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
               Who we are
              </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
            We combine deep technical expertise with a partnership mindset to deliver measurable business outcomes.
          </p>
        </div>

        {/* Cards grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${CARD_GRID_GAP}`}>
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="flex flex-col bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-6 md:p-7"
            >
              <IconTile icon={item.icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Stat — subtle, bottom of card */}
              <div className="mt-auto flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-black text-brand-600">
                  {item.stat}
                </span>
                {/* gray-400 on white is 2.6:1 — below the 4.5:1 minimum for
                    text this size. gray-600 clears it at ~7:1. */}
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium">
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
