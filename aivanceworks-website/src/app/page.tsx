import { JsonLd } from '@/components/seo/JsonLd';
import { generateWebPageSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import {
  HeroSection,
  ExperienceSection,
  ChallengesSection,
  ServicesSection,
  WhyChooseUsSection,
  CaseStudiesSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={generateWebPageSchema(
          'AI-First Software Consulting | AIvanceWorks',
          SITE_CONFIG.url
        )}
      />

      {/* Hero Section - Headline, subheadline, dual CTA, Partners */}
      <HeroSection />

      {/* Our Experience - Certifications and stats */}
      <ExperienceSection />

      {/* Are You Facing These Challenges? - 3 challenge cards */}
      <ChallengesSection />

      {/* Why Companies Choose Us - 5 differentiator cards */}
      <WhyChooseUsSection />

      {/* Services Overview - 6 service cards */}
      <ServicesSection />

      {/* Case Studies Preview - 3 featured case studies */}
      {/* <CaseStudiesSection /> */}

      {/* Testimonials Carousel */}
      {/* <TestimonialsSection /> */}

       {/* Final CTA Section */}
      <CTASection />

      {/* FAQ Section with Schema Markup */}
      <FAQSection />
     
    </>
  );
}
