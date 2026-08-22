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
  WhyChooseUsServicesSection,
  FAQSection,
  CTASection,
  IndustriesSectionCarousel,
  FeaturedArticlesSection,
} from '@/components/home';
import { ImageFeature } from '@/components/shared/sections/ImageFeature';
import { EcommerceAiShowcase } from '@/components/signature/EcommerceAiShowcase';
import { BenefitsGrid } from '@/components/shared/sections/BenefitsGrid';

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

  const data ={
     imageFeatures: [
    {
      heading: 'Storefronts That Convert, Not Just Display',
      description: 'AI-powered product recommendations, dynamic pricing, and optimized checkout flows. Every storefront decision is backed by conversion data, not guesswork.',
      image: {
        src: '/images/solutions/e-commerce-websites/feature-1.jpg',
        alt: 'Shopper browsing products on a mobile e-commerce application',
      },
    },
    {
      heading: 'Real-Time Analytics You Can Act On',
      description: 'Conversion funnels, cart abandonment tracking, and revenue dashboards — all in one place. See what\'s working, what\'s not, and where to invest next.',
      image: {
        src: '/images/solutions/e-commerce-websites/feature-2.jpg',
        alt: 'E-commerce performance dashboard showing conversion analytics and revenue data',
      },
    },
  ],
    benefits: [
    {
      icon: 'TrendingUp',
      title: 'Conversion-First Architecture',
      description:
        'A storefront designed specifically for your customers and products — with CRO principles built into every page, from product hierarchy to checkout friction — typically outperforms template-based platforms adapted to fit your business.',
    },
    {
      icon: 'Zap',
      title: 'Performance Leadership',
      description:
        'Next.js App Router with server-side rendering, automatic image optimization, and global CDN delivery are architected to produce Core Web Vitals scores of the kind that Google rewards in organic search rankings and that typically correlate with lower bounce rates.',
    }
  ]
  }

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

   

        {/* Challenges title only — its subtitle and cards render below the
            fold and come into view on scroll. */}
        {/* <ChallengesSection part="title" /> */}
      </div>

     {/* Company Statement - Brand promise to customers */}
      <StatementSection />

      {/* Our Partners - Partner logos with tier names */}
      {/* <PartnersSection /> */}

   {/* Services Overview - 6 service cards */}
      <ServicesSection />

      {/* Our Delivery - What we deliver in week one, as a numbered rail */}
      <OurDelivery />

      <ImageFeature features={data.imageFeatures} />

      <EcommerceAiShowcase />

      <BenefitsGrid
                benefits={data.benefits}
                eyebrow={undefined}
                title={undefined}
                subtitle={undefined}
                className='py-2 md:py-2.5 lg:py-3 xl:py-3.5 3xl:py-4'
              />
       
      <WhyChooseUsServicesSection />

      {/* Before We Build, We Draw It - rotating stage of two engineering
          blueprints (AI approach routing, SaaS layer stack) */}
      <BlueprintShowcase />

      {/* Our Experience - Certifications and stats */}
      <ExperienceSection />

      {/* Why Companies Choose Us - 6 differentiator cards */}
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
