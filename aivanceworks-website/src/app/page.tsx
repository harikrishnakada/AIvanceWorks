import { JsonLd } from '@/components/seo/JsonLd';
import { generateWebPageSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import { getHomeIndustries } from '@/lib/content';
import {
  HeroSection,
  ExperienceSection,
  PartnersSection,
  StatementSection,
  IndustriesSection,
  ChallengesSection,
  ServicesSection,
  WhyChooseUsSection,
  CaseStudiesSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
  IndustriesSectionExpanding,
  IndustriesSectionShowcase,
  IndustriesSectionCatalog,
} from '@/components/home';

export default async function HomePage() {
  const industries = await getHomeIndustries();

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

      {/* Our Partners - Partner logos with tier names */}
      {/* <PartnersSection /> */}

      {/* Company Statement - Brand promise to customers */}
      <StatementSection />

      {/* Services Overview - 6 service cards */}
      <ServicesSection />

      {/* Why Companies Choose Us - 5 differentiator cards */}
      <WhyChooseUsSection />

      {/* Our Experience - Certifications and stats */}
      <ExperienceSection />

      {/* Are You Facing These Challenges? - 3 challenge cards */}
      <ChallengesSection />

      {/* Industries - Expanding category cards for vertical landing pages */}
      <IndustriesSectionCatalog industries={industries} />



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
