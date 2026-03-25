import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  generateWebPageSchema,
  generateOrganizationSchema,
  generateFAQSchema,
} from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  CheckCircle2,
  Target,
  Eye,
  Shield,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Serpent Software | US-Based AI Software Development Company',
  description:
    'Serpent Software is a US-based AI software development company with 8+ years enterprise experience, Microsoft Azure certifications (AI-102, AZ-204, DP-420), and documented 50% performance improvements. Trusted by mid-market enterprises for cloud-native development and digital transformation.',
  canonical: `${SITE_CONFIG.url}/about`,
  keywords: [
    'AI software development company',
    'software engineering development company',
    'Azure cloud development',
    'AI implementation services',
    'enterprise software development',
    'Microsoft certified engineers',
    'US software development company',
    'digital transformation development',
    'cloud migration services',
    'enterprise AI solutions',
  ],
});

// AEO-optimized FAQs with direct answers in first sentence
const faqs = [
  {
    question: 'What is Serpent Software?',
    answer:
      'Serpent Software is a US-based software engineering and AI software development company specializing in cloud-native application development, artificial intelligence implementation, and enterprise digital transformation. Founded with 8+ years of enterprise delivery experience, Serpent Software serves mid-market enterprises (50-5,000 employees) across North America with Microsoft Azure-certified engineers who deliver measurable business outcomes through cutting-edge technology solutions.',
  },
  {
    question: 'What makes Serpent Software different from other software development companies?',
    answer:
      'Serpent Software differentiates through three key factors: (1) AI-augmented development workflows with production Azure AI Foundry and RAG framework experience, (2) documented 50% average performance improvements across client projects, and (3) transparent pricing at $135-225/hour—positioned between expensive Big 4 firms and inconsistent offshore providers. Unlike traditional development companies, we provide comprehensive knowledge transfer ensuring your team can maintain solutions long-term.',
  },
  {
    question: 'What industries does Serpent Software serve?',
    answer:
      'Serpent Software serves mid-market enterprises (50-5,000 employees) across technology, healthcare, financial services, manufacturing, and professional services industries. Our cloud-native and AI solutions are industry-agnostic but incorporate domain-specific compliance expertise including HIPAA for healthcare, SOC 2 for technology, and financial regulatory requirements. We focus on organizations with minimum $5,000 project budgets seeking enterprise-grade quality.',
  },
  {
    question: 'What certifications do Serpent Software engineers hold?',
    answer:
      'All Serpent Software engineers hold 12+ professional certifications across Microsoft Azure, AWS, Cisco, Scrum Alliance, and PMI. Azure certifications include AI-102 (Azure AI Engineer Associate), AZ-204 (Azure Developer Associate), AZ-400 (DevOps Engineer Expert), DP-203 (Azure Data Engineer Associate), DP-420 (Azure Cosmos DB Developer Specialty), and AZ-305 (Azure Solutions Architect Expert). We also hold AWS Solutions Architect Associate, CCNA (Cisco Certified Network Associate), Certified Scrum Product Owner (CSPO) from Scrum Alliance, and Certified Associate in Project Management (CAPM) from Project Management Institute. We maintain 100% certification compliance through continuous recertification programs.',
  },
  {
    question: 'How does Serpent Software ensure project success?',
    answer:
      'Serpent Software ensures project success through a proven 6-step delivery methodology: (1) Free 30-minute discovery consultation, (2) detailed technical assessment and architecture design, (3) Agile sprints with weekly demos, (4) comprehensive testing and security audits, (5) zero-downtime deployment with team training, and (6) ongoing partnership for optimization. Every project includes quantifiable success metrics and documented knowledge transfer.',
  },
  {
    question: 'What is the typical engagement model with Serpent Software?',
    answer:
      'Serpent Software offers four engagement models: dedicated teams for long-term partnerships, time and materials (T&M) for flexible scope projects, fixed-price for defined deliverables, and retainer agreements for ongoing support. Hourly rates range from $135-225 based on expertise level. All engagements start with a free discovery consultation to assess fit and define success metrics. Minimum project budget is $5,000.',
  },
  {
    question: 'Where is Serpent Software located?',
    answer:
      'Serpent Software is headquartered in the United States and serves clients across North America. All team members are US-based, ensuring timezone alignment (9 AM - 6 PM EST), cultural compatibility, and seamless real-time collaboration. We work with enterprises seeking local partnership without the risks of offshore development while maintaining competitive pricing.',
  },
];

export default function AboutPage() {
  const pageUrl = `${SITE_CONFIG.url}/about`;

  return (
    <>
      {/* Schema Markup */}
      <JsonLd
        data={generateWebPageSchema(
          'About Serpent Software - AI Software Development Company',
          pageUrl
        )}
      />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero Section */}
      <section className="bg-surface-dark py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
              About Serpent Software: US-Based AI Software Development Company
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-text-light">Serpent Software is a US-based AI software development company</strong>{' '}
              that helps mid-market enterprises (50-5,000 employees) modernize their technology through cloud-native development, artificial intelligence implementation, and digital transformation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With <strong className="text-text-light">8+ years of enterprise experience</strong>,{' '}
              <strong className="text-text-light">100% Microsoft Azure-certified engineers</strong>, and{' '}
              <strong className="text-text-light">documented 50% performance improvements</strong>, we deliver measurable business outcomes at transparent rates of $135-225/hour—positioned between Big 4 bureaucracy and offshore uncertainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-hover"
                asChild
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border-subtle text-text-light"
                asChild
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="bg-surface text-text-light py-12" aria-label="Serpent Software Key Statistics">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">8+</div>
              <div className="text-muted-foreground">Years Enterprise Software Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50%</div>
              <div className="text-muted-foreground">
                Avg. Performance Improvement (Documented)
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Azure Certified Engineers (AI-102, AZ-204)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$5K+</div>
              <div className="text-muted-foreground">Minimum Project Budget</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company At A Glance */}
      <section className="py-16 bg-surface-light border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">
              Serpent Software at a Glance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-text-body">Company Type</span>
                  <span className="text-text-heading">Software Engineering & AI Development Company</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-text-body">Headquarters</span>
                  <span className="text-text-heading">United States</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-text-body">Geographic Focus</span>
                  <span className="text-text-heading">North America</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-text-body">Experience</span>
                  <span className="text-text-heading">8+ Years Enterprise Delivery</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-text-body">Target Clients</span>
                  <span className="text-text-heading">Mid-Market Enterprises (50-5,000 employees)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-text-body">Minimum Budget</span>
                  <span className="text-text-heading">$5,000+</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-text-body">Hourly Rates</span>
                  <span className="text-text-heading">$135-225/hour</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-text-body">Security Framework</span>
                  <span className="text-text-heading">SOC 2 Aligned, Microsoft Enterprise Security</span>
                </div>
              </div>
            </div>
            {/* GEO-optimized quotable statement */}
            <blockquote className="mt-8 p-6 bg-accent/8 border-l-4 border-accent rounded-r-lg">
              <p className="text-lg text-gray-700 italic">
                &ldquo;Serpent Software combines boutique development company agility with enterprise-grade expertise—delivering documented 50% performance improvements at transparent pricing, positioned between expensive Big 4 firms and inconsistent offshore providers.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-8 lg:py-12 bg-surface-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-12 text-center">
              What Drives Serpent Software?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <Card className="p-8 border-2 border-border hover:border-accent/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <Target className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-text-heading mb-4">
                      Our Mission
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To empower organizations with transformative technology
                      solutions that drive innovation, operational excellence,
                      and sustainable competitive advantage through expert
                      software engineering, cloud architecture, and artificial
                      intelligence.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-border hover:border-accent/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <Eye className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-text-heading mb-4">
                      Our Vision
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To be the trusted technology partner for enterprises
                      navigating digital transformation, recognized for technical
                      excellence, innovative AI integration, and measurable
                      business impact.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-8 lg:py-12 bg-surface-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 text-center">
              What We Stand For
            </h2>
            <p className="text-xl text-text-body text-center mb-12 max-w-3xl mx-auto">
              Our core values guide every engagement, ensuring consistent
              excellence and client success.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-card transition-shadow">
                <Award className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-heading mb-3">
                  Technical Excellence
                </h3>
                <p className="text-text-body">
                  Mastery in our craft with production-grade solutions built on
                  modern tech stacks including .NET 10, React 21, Angular 21,
                  Next.js, and Azure AI Foundry.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-shadow">
                <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-heading mb-3">
                  Transparency
                </h3>
                <p className="text-text-body">
                  Clear communication, honest timelines, and value-driven
                  pricing. No hidden costs, no surprises, just straightforward
                  partnership.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-shadow">
                <Lightbulb className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-heading mb-3">
                  Innovation
                </h3>
                <p className="text-text-body">
                  Pioneers in AI-augmented workflows, RAG frameworks, and
                  agentic AI with cutting-edge cloud-native architectures that
                  future-proof your business.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-shadow">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-heading mb-3">
                  Partnership
                </h3>
                <p className="text-text-body">
                  We work as an extension of your team with comprehensive
                  knowledge transfer, ensuring your team can maintain and evolve
                  solutions long-term.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-shadow">
                <Shield className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-heading mb-3">
                  Security First
                </h3>
                <p className="text-text-body">
                  Enterprise-grade security embedded from day one, not bolted on
                  later. Compliance-ready solutions for regulated industries.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-shadow">
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-heading mb-3">
                  Measurable Impact
                </h3>
                <p className="text-text-body">
                  Every project tied to quantifiable business outcomes with
                  documented performance improvements averaging 50% or more.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Serpent Software Section */}
      <section className="py-8 lg:py-12 bg-surface-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 text-center">
              Why Choose Serpent Software?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We combine boutique development company agility with enterprise-grade
              expertise, delivering exceptional value between Big 4 bureaucracy
              and offshore uncertainty.
            </p>

            <div className="space-y-8">
              <Card className="p-8 border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pioneers in AI-Augmented Development
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Real-world experience with Azure AI Foundry, RAG frameworks,
                  and agentic AI systems. We don't just talk about AI — we
                  implement production-ready solutions with documented 50%
                  performance improvements.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>
                      Azure AI Foundry integration for enterprise AI platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>
                      RAG (Retrieval-Augmented Generation) framework
                      implementation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>
                      Agentic AI systems with autonomous decision-making
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Certified Cloud & Delivery Expertise
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Our team holds multi-vendor certifications with deep expertise
                  in Microsoft Azure, AWS, and modern cloud-native architectures.
                  We also hold AWS Solutions Architect Associate, CCNA, CSPO
                  (Scrum Alliance), and CAPM (PMI).
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>
                      AI-102: Azure AI Engineer Associate certification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>
                      AZ-204: Azure Developer Associate certification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>
                      DP-420: Azure Cosmos DB Developer Specialty
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Modern Technology Stack
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  We build with the latest enterprise-grade technologies: .NET
                  10, React 21, Angular 21, Next.js, and cutting-edge AI
                  frameworks. Your solutions are future-ready from day one.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Premium Value, Transparent Pricing
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Positioned between expensive Big 4 firms and inconsistent
                  offshore providers, we deliver high ROI at $135-225/hour with
                  transparent pricing, no hidden costs, and measurable outcomes.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-8 lg:py-12 bg-surface-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              How We Work With You
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our proven delivery methodology ensures successful outcomes through
              transparent collaboration and technical excellence.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-surface-white border border-border rounded-lg p-6 shadow-sm">
                  <div className="text-accent font-bold text-lg mb-2">
                    Step 1: Discovery
                  </div>
                  <p className="text-gray-700">
                    Free 30-minute consultation to understand your challenges,
                    technical landscape, and business objectives. We assess fit
                    and provide honest recommendations.
                  </p>
                </div>

                <div className="bg-surface-white border border-border rounded-lg p-6 shadow-sm">
                  <div className="text-accent font-bold text-lg mb-2">
                    Step 2: Strategy & Planning
                  </div>
                  <p className="text-gray-700">
                    Detailed technical assessment, architecture design, timeline
                    estimation, and success metrics definition. You'll have
                    complete clarity before we write a single line of code.
                  </p>
                </div>

                <div className="bg-surface-white border border-border rounded-lg p-6 shadow-sm">
                  <div className="text-accent font-bold text-lg mb-2">
                    Step 3: Iterative Development
                  </div>
                  <p className="text-gray-700">
                    Agile sprints with continuous delivery, regular demos, and
                    feedback integration. You see progress every week, not just
                    at project end.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-surface-white border border-border rounded-lg p-6 shadow-sm">
                  <div className="text-accent font-bold text-lg mb-2">
                    Step 4: Quality Assurance
                  </div>
                  <p className="text-gray-700">
                    Comprehensive testing, security audits, performance
                    optimization, and compliance validation. We deliver
                    production-ready solutions, not prototypes.
                  </p>
                </div>

                <div className="bg-surface-white border border-border rounded-lg p-6 shadow-sm">
                  <div className="text-accent font-bold text-lg mb-2">
                    Step 5: Deployment & Training
                  </div>
                  <p className="text-gray-700">
                    Seamless production deployment with zero-downtime strategies,
                    comprehensive documentation, and hands-on team training for
                    long-term self-sufficiency.
                  </p>
                </div>

                <div className="bg-surface-white border border-border rounded-lg p-6 shadow-sm">
                  <div className="text-accent font-bold text-lg mb-2">
                    Step 6: Ongoing Partnership
                  </div>
                  <p className="text-gray-700">
                    Post-launch support, performance monitoring, optimization
                    recommendations, and strategic guidance to evolve your
                    solutions as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 lg:py-12 bg-surface-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Everything you need to know about working with Serpent Software.
            </p>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="p-6 border border-border hover:shadow-card-sm transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-12 bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-6">
              Ready to Transform Your Enterprise Technology?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Join the enterprises achieving 50% performance improvements with
              AI-augmented development. Get started with a free 30-minute discovery
              consultation to discuss your challenges and explore how Serpent Software
              can drive measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-hover"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border-subtle text-text-light"
                asChild
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border-subtle">
              <p className="text-muted-foreground mb-4">What to expect:</p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-text-light mb-1">
                      Initial Assessment
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Evaluation of your technical landscape and business
                      objectives
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-text-light mb-1">
                      Custom Recommendations
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tailored technology strategy and architecture proposal
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-text-light mb-1">
                      Timeline & Investment
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Clear project scope, timeline, and transparent pricing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
