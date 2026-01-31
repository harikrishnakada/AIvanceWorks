import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cloud, Code2, Database, Globe, Settings } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'AI & Machine Learning',
    description:
      'Deploy production-ready AI agents, RAG frameworks, and LLM integrations that automate workflows and enhance decision-making with Azure AI Foundry.',
    icon: Bot,
    href: '/services/ai-machine-learning',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Cloud Engineering',
    description:
      'Migrate and optimize your infrastructure on Azure or AWS. Our certified architects design scalable systems that reduce cloud costs by up to 50%.',
    icon: Cloud,
    href: '/services/cloud-engineering',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Build enterprise applications with .NET, React, and Next.js. From MVPs to complex platforms, we deliver production-grade software on schedule.',
    icon: Code2,
    href: '/services/full-stack-development',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Data Engineering',
    description:
      'Transform raw data into actionable insights with ETL pipelines, Power BI dashboards, and Azure Synapse. Make data-driven decisions faster.',
    icon: Database,
    href: '/services/data-engineering',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Enterprise Integration',
    description:
      'Modernize legacy systems and integrate disparate applications with minimal disruption. API integrations, migrations, and service bus implementations.',
    icon: Globe,
    href: '/services/enterprise-integration',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'DevOps & CI/CD',
    description:
      'Accelerate deployments with Azure DevOps, GitHub Actions, and Kubernetes. Automate testing, reduce errors, and ship features faster.',
    icon: Settings,
    href: '/services/devops-automation',
    gradient: 'from-slate-500 to-gray-600',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            End-to-End Software Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From AI strategy to production deployment, we deliver the full spectrum of software consulting services your business needs to thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group">
              <Card className="h-full border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
