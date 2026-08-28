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
import { ComplianceSpotlight } from '@/components/shared/sections/ComplianceSpotlight';
import { SECTION_Y_TIGHT } from '@/lib/section-spacing';

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
      heading: 'Design Sprints',
      description: 'A compressed five-day cycle to prototype, validate, and decide on direction before committing to build.',
      image: {
        src: '/images/solutions/e-commerce-websites/feature-1.jpg',
        alt: 'Shopper browsing products on a mobile e-commerce application',
      },
    },
    {
      heading: 'Prototype Validation',
      description: 'Low-fidelity prototypes put in front of real users within days to separate signal from opinion.',
      image: {
        src: '/images/solutions/e-commerce-websites/feature-2.jpg',
        alt: 'E-commerce performance dashboard showing conversion analytics and revenue data',
      },
    },
  ],
    complianceSpotlight: {
    eyebrow: 'Trust by default',
    title: 'HIPAA-Compliant by Design',
    highlightText: 'HIPAA-Compliant',
    statusText: 'SOC 2 Type II · HIPAA · HITECH Compliant',
    pillars: [
      {
        icon: 'Shield',
        title: 'Data Encryption',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit. All PHI encrypted end-to-end with zero-knowledge architecture.',
      },
      {
        icon: 'Lock',
        title: 'Access Controls',
        description:
          'Role-based access with MFA, session management, and audit trails. Every access logged and traceable.',
      },
      {
        icon: 'Eye',
        title: 'Audit & Monitoring',
        description:
          'Real-time security monitoring, automated compliance reporting, and penetration testing. Continuous compliance validation.',
      },
    ],
    badges: [
      'HIPAA',
      'HITECH',
      'SOC 2 Type II',
      'HL7 FHIR',
      '21 CFR Part 11',
      'NIST 800-66',
    ],
  },
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

   

     {/* Company Statement - Brand promise to customers */}
      <StatementSection />

        {/* Challenges title only — its subtitle and cards render below the
            fold and come into view on scroll. */}
        {/* <ChallengesSection part="title" /> */}
      </div>


      {/* Our Partners - Partner logos with tier names */}
      {/* <PartnersSection /> */}

   {/* Services Overview - 6 service cards */}
      <ServicesSection />



         <WhyChooseUsServicesSection />

      {/* Vertical rhythm trimmed on the home page only. Three separate trims:
          - `pb-*`: this section is followed immediately by EcommerceAiShowcase, and
            the two `md`/`lg` bands stacked to ~104px of blank white above "AI, BUILT IN".
          - `pt-*`: same collision on the other side, against WhyChooseUsServicesSection
            above. Matches the `pb-*` scale so the section reads symmetrical.
          - `stackClassName`: the default gap-16/20 (64/80px) between the two feature
            rows was the largest gap on the page — halved so "Prototype Validation"
            sits with "Design Sprints" instead of reading as its own section.
          The shared component keeps its standard `size="md"` rhythm and gap-16 md:gap-20
          stack for every other page that uses it. */}
      <ImageFeature
        features={data.imageFeatures}
        className="pt-3 md:pt-4 lg:pt-5 xl:pt-6 3xl:pt-8 pb-3 md:pb-4 lg:pb-5 xl:pb-6 3xl:pb-8"
        stackClassName="gap-8 md:gap-10"
      />
      
      <EcommerceAiShowcase />
       
       {/* Our Delivery - What we deliver in week one, as a numbered rail */}
      <OurDelivery />

      {/* Before We Build, We Draw It - rotating stage of two engineering
          blueprints (AI approach routing, SaaS layer stack) */}
      {/* <BlueprintShowcase /> */}

      <ComplianceSpotlight
                eyebrow={data.complianceSpotlight.eyebrow}
                title={data.complianceSpotlight.title}
                highlightText={data.complianceSpotlight.highlightText}
                statusText={data.complianceSpotlight.statusText}
                pillars={data.complianceSpotlight.pillars}
                badges={data.complianceSpotlight.badges}
                fullBleed
                /* `fullBleed` forces size="flush" (py-0), and ExperienceSection
                   below only contributes pt-4/5/6 — so the two sections were
                   separated by a ~16-24px band that read as a collision between
                   the dark compliance panel and the experience cards. Add the
                   standard `md` bottom rhythm here so the band lands at the same
                   scale as every other section boundary on the page. */
                className="pb-4 md:pb-5 lg:pb-6 xl:pb-7 3xl:pb-8"
                /* Panel default is py-10 md:py-14 lg:py-16. Full-bleed on the
                   home page it read as a wide black band above "HIPAA-Compliant"
                   and below the badge row, so halve it here only — the boxed
                   instances on the service/solution templates keep the default. */
                panelClassName="py-5 md:py-7 lg:py-8"
              />

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
