// No hooks, handlers or browser APIs here — this renders a static header and a
// map over a module-level array, so it stays on the server. Marking it
// 'use client' shipped the component and its three icons to the browser and
// added it to the homepage hydration pass for nothing.
import { Rocket, DollarSign, ShieldCheck } from 'lucide-react';
import { IconTile } from '@/components/shared/primitives';
import { SECTION_Y } from '@/lib/section-spacing';

const challenges = [
  {
    title: 'Trouble Getting to Market?',
    description:
      'Our product development team is top-tier experienced and dedicated to launching your product to market instantly.',
    icon: Rocket,
  },
  {
    title: 'High Cost of In-House Teams?',
    description:
      'Our development team offers top-tier development expertise. We make your budget work without sacrificing quality.',
    icon: DollarSign,
  },
  {
    title: 'Regulatory Compliance',
    description:
      'We ensure your software meets HIPAA, HL7/FHIR, and GDPR standards from the start — built in, not bolted on.',
    icon: ShieldCheck,
  },
];

export function ChallengesSection() {
  return (
    <section data-section="home-challenges" className={`${SECTION_Y} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-white" />

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
            Are You Facing These{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Obstacles?
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
            We understand the obstacles that hold businesses back — and we solve them.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-6 md:p-7"
            >
              <IconTile icon={challenge.icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2 leading-snug">
                {challenge.title}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
