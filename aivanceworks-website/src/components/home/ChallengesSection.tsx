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
    <section data-section="home-challenges" className="py-7 sm:py-8 lg:py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-white" />

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
            Are You Facing These{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Challenges?
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
            We understand the obstacles that hold businesses back — and we solve them.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="group flex flex-col p-5 sm:p-6
                bg-white rounded-xl border border-gray-200
                hover:border-brand-200 hover:shadow-md
                transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4 flex-shrink-0
                group-hover:bg-brand-50 transition-colors duration-300">
                <challenge.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 group-hover:text-brand-600 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
