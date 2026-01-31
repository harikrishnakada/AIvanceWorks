import { JsonLd } from '@/components/seo/JsonLd';
import { generateWebPageSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import {
  HeroSection,
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

      {/* Hero Section - Headline, subheadline, dual CTA */}
      <HeroSection />

      {/* Services Overview - 6 service cards */}
      <ServicesSection />

      {/* Why Choose Us - 4 differentiators with stats */}
      <WhyChooseUsSection />

      {/* Case Studies Preview - 3 featured case studies */}
      <CaseStudiesSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* FAQ Section with Schema Markup */}
      <FAQSection />

      {/* Final CTA Section */}
      <CTASection />
    </>
  );
}
