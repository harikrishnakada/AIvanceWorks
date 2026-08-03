import { JsonLd } from '@/components/seo/JsonLd';
import { generateWebPageSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import { constructMetadata } from '@/lib/seo';
import { getHomeIndustries } from '@/lib/content';
// Only import what is actually rendered below. The unrendered variants
// (PartnersSection, IndustriesSection*, CaseStudiesSection, TestimonialsSection)
// are still available from '@/components/home' — but importing them here pulls
// them into this route's client bundle even while their JSX stays commented out.
import {
  HeroSection,
  ExperienceSection,
  StatementSection,
  ChallengesSection,
  ServicesSection,
  WhyChooseUsSection,
  FAQSection,
  CTASection,
  IndustriesSectionCarousel,
} from '@/components/home';

// One title for both the <title> tag and the WebPage schema. The homepage had no
// `metadata` of its own, so it inherited the layout's bare brand-name title with
// no canonical and no OG tags — while its WebPage schema advertised a different,
// longer title. A mismatch between <title> and the WebPage/Organization schema
// is exactly the signal Google uses for the Knowledge Panel.
const HOME_TITLE = `AI-First Software Consulting | ${SITE_CONFIG.name}`;

export const metadata = constructMetadata({
  title: HOME_TITLE,
  description: SITE_CONFIG.description,
  canonical: SITE_CONFIG.url,
});

export default async function HomePage() {
  const industries = await getHomeIndustries();

  return (
    <>
      <JsonLd data={generateWebPageSchema(HOME_TITLE, SITE_CONFIG.url)} />

      {/* Hero Section - Headline, subheadline, dual CTA, Partners */}
      <HeroSection />

      {/* Our Partners - Partner logos with tier names */}
      {/* <PartnersSection /> */}

      {/* Company Statement - Brand promise to customers */}
      <StatementSection />

      {/* Are You Facing These Challenges? - 3 challenge cards */}
      <ChallengesSection />


      {/* Services Overview - 6 service cards */}
      <ServicesSection />

      {/* Our Experience - Certifications and stats */}
      <ExperienceSection />

      {/* Why Companies Choose Us - 5 differentiator cards */}
      <WhyChooseUsSection />

      {/* Industries - Category card slideshow into vertical landing pages */}
      <IndustriesSectionCarousel industries={industries} />



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
