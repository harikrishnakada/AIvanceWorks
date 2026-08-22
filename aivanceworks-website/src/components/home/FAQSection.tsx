// Server component. The accordion is native <details>/<summary>, so the whole
// section — prose, markup and its FAQPage JSON-LD — renders on the server with
// no hydration and no JavaScript. The previous version used useState purely to
// toggle a max-height class, which made the entire FAQ a client component.
//
// `name="home-faq"` gives the exclusive-accordion behaviour the useState version
// had (opening one closes the others) where supported, and degrades to
// independently-openable panels where it is not — no JS fallback needed.
import { ChevronDown } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateFAQSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import { SECTION_Y } from '@/lib/section-spacing';
import { Container } from '@/components/shared/primitives';

export function FAQSection() {
  const faqs = [
    {
      question: 'What is AI software development and how can it help my business?',
      answer:
        `AI software development helps businesses implement artificial intelligence solutions like AI agents, RAG frameworks, and machine learning models. ${SITE_CONFIG.name} specializes in turning AI concepts into production-ready systems that automate workflows, enhance decision-making, and reduce operational costs. Our clients typically see 40-60% efficiency improvements within the first quarter.`,
    },
    {
      question: 'How much does it cost to hire an AI development consultant?',
      answer:
        `AI development costs vary based on project scope and complexity. ${SITE_CONFIG.name} offers competitive boutique rates of $135-225/hour, significantly lower than enterprise consultancies ($400-900/hour) while maintaining the same quality. We provide fixed-price projects, time-and-materials, and retainer options to match your budget and timeline.`,
    },
    {
      question: 'What is a RAG framework and why do businesses need it?',
      answer:
        'RAG (Retrieval-Augmented Generation) is an AI architecture that combines large language models with your company\'s proprietary data. Instead of generic AI responses, RAG systems provide accurate, context-aware answers from your documents, databases, and knowledge bases. Businesses use RAG for customer support automation, document processing, and internal knowledge management.',
    },
    {
      question: 'How long does it take to build a custom AI solution?',
      answer:
        `Custom AI solution timelines depend on complexity. A proof-of-concept RAG system takes 2-4 weeks. Production-ready AI agents with integrations typically require 6-12 weeks. Enterprise AI platforms may take 3-6 months. ${SITE_CONFIG.name} uses agile methodology with bi-weekly demos, so you see progress and can adjust requirements throughout development.`,
    },
    {
      question: 'What Azure certifications does your team have?',
      answer:
        'Our team holds multiple Microsoft certifications including AI-102 (Azure AI Engineer), AZ-204 (Azure Developer), DP-420 (Cosmos DB Developer), and AZ-900 (Azure Fundamentals). This ensures enterprise-grade architecture decisions and best practices for cloud security, scalability, and cost optimization on Azure.',
    },
    {
      question: 'Do you work with startups or only enterprise clients?',
      answer:
        `${SITE_CONFIG.name} works with both startups and mid-market enterprises (50-5000 employees). Our boutique model means startups get enterprise-quality expertise at accessible pricing, while larger organizations benefit from our agility and personalized service. We've helped Series A startups build MVPs and scaled systems for established companies with millions of users.`,
    },
  ];

  return (
    <section data-section="home-faq" className={`${SECTION_Y} bg-white`}>
      {/* FAQ Schema */}
      <JsonLd data={generateFAQSchema(faqs)} />

      <Container width="default">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-h2 font-black text-gray-900 mb-1.5 sm:mb-2 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-copy text-gray-500 leading-relaxed">
            Get answers to common questions about AI development, our process, and what to expect.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              name="home-faq"
              open={index === 0}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gray-200 open:border-brand-200 open:shadow-glow-faint"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-3.5 sm:p-5 text-left transition-colors hover:bg-brand-50/30 [&::-webkit-details-marker]:hidden">
                <span className="font-bold text-gray-900 pr-6 text-copy">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 bg-gray-100 group-open:bg-brand-100 group-open:rotate-180">
                  <ChevronDown className="h-4 w-4 text-gray-400 transition-colors group-open:text-brand-600" />
                </div>
              </summary>
              <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 text-gray-500 leading-relaxed text-copy">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
