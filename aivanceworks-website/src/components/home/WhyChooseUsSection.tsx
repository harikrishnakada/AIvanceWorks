import { Award, Clock, Shield, Users } from 'lucide-react';

const differentiators = [
  {
    title: 'AI-First Approach',
    description:
      'We use AI-augmented development workflows to deliver faster and smarter. Our team has production experience with Azure AI Foundry, LangChain, and RAG frameworks.',
    stat: '3x',
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
    title: 'Startup-Friendly',
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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Companies Choose AIvanceWorks
          </h2>
          <p className="text-lg text-gray-600">
            We combine deep technical expertise with a partnership mindset to deliver measurable business outcomes.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="relative flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-blue-600" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Stat */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {item.stat}
                  </span>
                  <span className="text-sm text-gray-500">{item.statLabel}</span>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
