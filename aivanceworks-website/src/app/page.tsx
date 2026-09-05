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
import { SECTION_Y_LOOSE, SECTION_Y_TIGHT } from '@/lib/section-spacing';

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
      description: 'Our five-day design-sprint compresses the traditional discovery-to-roadmapped pipeline, problem framing, rapid prototyping, and structured validation, into a single cycle, forcing hypothesis-driven trade-offs before any engineering resources are committed. Rather than building on speculation, the sprint front-loads risk reduction: day one to two converge on a testable problem statement and solution architecture and produces a functional highly capable prototype.',
      /* Natural pixel dimensions, read off the asset — ImageFeature builds the
         frame from this ratio so the photo is never cropped. This one is 1.5006,
         so the 3:2 fallback would have been harmless; feature-2 below is 1.4035
         and was losing ~7% of its height before these were supplied. */
      image: {
        src: '/images/solutions/e-commerce-websites/feature-1.jpg',
        alt: 'Shopper browsing products on a mobile e-commerce application',
        width: 1280,
        height: 853,
      },
    },
    {
      heading: 'Prototype Validation',
      description: 'Early-Stage prototypes are put in front of real users who test the product like a consumer.  Through initial to launch phase prototyping and validation we know where to place more emphasis and development on, to have the launch process stress free. The rigorous process helps separate signals from scratch, a trend from an outlier,and combined with our expertise, pushes the services we provide to develop the exact product requested.',
      image: {
        src: '/images/solutions/e-commerce-websites/feature-2.jpg',
        alt: 'E-commerce performance dashboard showing conversion analytics and revenue data',
        width: 1280,
        height: 912,
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

      {/* Home-page-only overrides. Two of them:
          - `className={SECTION_Y_LOOSE}`: the shared component hardcodes
            `size="md"`, and on this page it is bracketed by
            WhyChooseUsServicesSection above and EcommerceAiShowcase below, both
            now on the `lg` scale. Sitting a tighter section between two looser
            ones read as a squeeze, so this call site is lifted to the same
            SECTION_PADDING.lg the neighbours use. Merged through `cn`, and `py`
            is a tailwind-merge conflict group, so this replaces the component's
            `md` padding rather than stacking with it.
          - `stackClassName`: the default gap-16/20 (64/80px) between the two feature
            rows was the largest gap on the page — halved so "Prototype Validation"
            sits with "Design Sprints" instead of reading as its own section.
          The shared component keeps its standard `size="md"` rhythm and gap-16 md:gap-20
          stack for every other page that uses it. */}
      <ImageFeature
        features={data.imageFeatures}
        className={SECTION_Y_LOOSE}
        stackClassName="gap-8 md:gap-10"
        /* Same body scale as the reason list in WhyChooseUsServicesSection
           directly above (text-copy-sm md:text-copy, 17→18px below md and
           18→20px from md up), so the two sections read as one voice. The
           component's default `text-lead` runs to 24px, which made these the
           largest paragraphs on the home page. Both tokens are fluid clamps, so
           this stays responsive at every width — no breakpoint list to keep in
           sync. Solution pages keep the default.

           `leading-relaxed` is restated on purpose, not redundantly: the
           component's default class list already carries it, but tailwind-merge
           treats `font-size` and `leading` as CONFLICTING groups (Tailwind v4's
           `text-lg/7` shorthand sets both), so passing a size here strips the
           default leading and the line-height falls back to the token's own
           1.55/1.65. Without this the two sections matched on size and still
           read differently. */
        descriptionClassName="text-copy-sm md:text-copy leading-relaxed"
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
