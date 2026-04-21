import { Award, Clock, Shield, Users, Code2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

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
];

export function WhyChooseUsSection() {
  return (
    <section data-section="home-why-choose-us" className="py-7 sm:py-8 lg:py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-white" />

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2 leading-tight">
            Why Companies Choose C10 Software
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
            We combine deep technical expertise with a partnership mindset to deliver measurable business outcomes.
          </p>
        </div>

        {/* Cards grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col p-5 sm:p-6
                bg-white rounded-xl border border-gray-200
                hover:border-brand-200 hover:shadow-md
                transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4 flex-shrink-0
                group-hover:bg-brand-50 transition-colors duration-300">
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 group-hover:text-brand-600 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Stat — subtle, bottom of card */}
              <div className="mt-auto flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-black text-brand-600">
                  {item.stat}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">
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
