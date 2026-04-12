'use client';

import { Rocket, DollarSign, ShieldCheck } from 'lucide-react';

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
      'Our development team offers top-tier development expertise. We make your budget work.',
    icon: DollarSign,
  },
  {
    title: 'Regulatory Compliance',
    description:
      'We ensure your software meets HIPAA, HL7/FHIR, and GDPR standards from the start.',
    icon: ShieldCheck,
  },
];

export function ChallengesSection() {
  return (
    <section data-section="home-challenges" className="py-6 sm:py-8 lg:py-12 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/30 to-white" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/30 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
            Are You Facing These {''}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Challenges?
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
            We understand the obstacles that hold businesses back and we solve them.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="relative flex flex-col items-center text-center
                p-5 sm:p-6 lg:p-7
                bg-white rounded-xl sm:rounded-2xl border border-gray-100
                shadow-sm hover:shadow-brand-card hover:border-brand-100
                transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-3">
                <challenge.icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-600" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
