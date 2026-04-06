import { Award, Clock, Shield, Users } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const differentiators = [
  {
    title: 'AI - Powered Cloud Computing',
    description:
      'We use AI-augmented development workflows to deliver faster and smarter. Our team has production experience with Azure AI Foundry, LangChain, and RAG frameworks.',
    stat: '5x',
    statLabel: 'Faster Development',
    icon: Award,
  },
  {
    title: 'Microsoft Certified',
    description:
      'Our architects hold AI-102, AZ-204, and DP-420 certifications. Deep expertise in Azure ecosystem ensures enterprise-grade solutions.',
    stat: '8+',
    statLabel: 'Years Experience',
    icon: Shield,
  },
  {
    title: 'Startup-Enterprise',
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
    <section className="py-6 sm:py-8 lg:py-12 relative overflow-hidden">
      {/* Subtle blue gradient wash background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/30 to-white" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/30 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2 leading-tight">
            Why Companies Choose {SITE_CONFIG.name}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
            We combine deep technical expertise with a partnership mindset to deliver measurable business outcomes.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="relative flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-brand-card hover:border-brand-100 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-50 flex items-center justify-center">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-brand-600" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-2.5 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                  {item.description}
                </p>

                {/* Stat */}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-brand-600">
                    {item.stat}
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-400 font-medium">{item.statLabel}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
