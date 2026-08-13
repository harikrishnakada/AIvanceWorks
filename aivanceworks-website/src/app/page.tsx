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
  BlueprintShowcase,
  OurDelivery,
  ServicesSection,
  WhyChooseUsSection,
  FAQSection,
  CTASection,
  IndustriesSectionCarousel,
  FeaturedArticlesSection,
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

      {/* First fold — the hero plus the Challenges heading, and nothing else.
          This wrapper is exactly one viewport tall (minus the fixed header) and
          the hero inside it is `flex-1`, so the hero absorbs whatever height the
          heading doesn't use. Both stay fully visible on landing without the
          challenge cards leaking in, on a 667px phone and a 1080px desktop
          alike — neither piece needs a hardcoded height for it to work. */}
      <div
        className="flex flex-col
          min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-5rem)]"
      >
        {/* Hero Section - Headline, subheadline, dual CTA, Partners */}
        <HeroSection />

        {/* Company Statement - Brand promise to customers */}
        <StatementSection />

        {/* Challenges title only — its subtitle and cards render below the
            fold and come into view on scroll. */}
        {/* <ChallengesSection part="title" /> */}
      </div>

      {/* Are You Facing These Challenges? - subtitle + cards, titled by the
          `part="title"` render above (linked via aria-labelledby). */}
      <ChallengesSection />

      {/* Our Partners - Partner logos with tier names */}
      {/* <PartnersSection /> */}

      {/* Our Delivery - What we deliver in week one, as a numbered rail */}
      <OurDelivery />

      
      {/* Services Overview - 6 service cards */}
      <ServicesSection />
      {/* Before We Build, We Draw It - rotating stage of two engineering
          blueprints (AI approach routing, SaaS layer stack) */}
      <BlueprintShowcase />

      {/* Our Experience - Certifications and stats */}
      <ExperienceSection />

      {/* Why Companies Choose Us - 5 differentiator cards */}
      <WhyChooseUsSection />

      {/* Industries - Category card slideshow into vertical landing pages */}
      <IndustriesSectionCarousel industries={industries} />

      {/* Featured Articles - curated in src/data/home/featured-articles.ts */}
      <FeaturedArticlesSection />

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
