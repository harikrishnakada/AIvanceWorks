'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateFAQSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'What is AI software consulting and how can it help my business?',
    answer:
      'AI software consulting helps businesses implement artificial intelligence solutions like AI agents, RAG frameworks, and machine learning models. AIvanceWorks specializes in turning AI concepts into production-ready systems that automate workflows, enhance decision-making, and reduce operational costs. Our clients typically see 40-60% efficiency improvements within the first quarter.',
  },
  {
    question: 'How much does it cost to hire an AI development consultant?',
    answer:
      'AI development consulting costs vary based on project scope and complexity. AIvanceWorks offers competitive boutique rates of $135-225/hour, significantly lower than enterprise consultancies ($400-900/hour) while maintaining the same quality. We provide fixed-price projects, time-and-materials, and retainer options to match your budget and timeline.',
  },
  {
    question: 'What is a RAG framework and why do businesses need it?',
    answer:
      'RAG (Retrieval-Augmented Generation) is an AI architecture that combines large language models with your company\'s proprietary data. Instead of generic AI responses, RAG systems provide accurate, context-aware answers from your documents, databases, and knowledge bases. Businesses use RAG for customer support automation, document processing, and internal knowledge management.',
  },
  {
    question: 'How long does it take to build a custom AI solution?',
    answer:
      'Custom AI solution timelines depend on complexity. A proof-of-concept RAG system takes 2-4 weeks. Production-ready AI agents with integrations typically require 6-12 weeks. Enterprise AI platforms may take 3-6 months. AIvanceWorks uses agile methodology with bi-weekly demos, so you see progress and can adjust requirements throughout development.',
  },
  {
    question: 'What Azure certifications does your team have?',
    answer:
      'Our team holds multiple Microsoft certifications including AI-102 (Azure AI Engineer), AZ-204 (Azure Developer), DP-420 (Cosmos DB Developer), and AZ-900 (Azure Fundamentals). This ensures enterprise-grade architecture decisions and best practices for cloud security, scalability, and cost optimization on Azure.',
  },
  {
    question: 'Do you work with startups or only enterprise clients?',
    answer:
      'AIvanceWorks works with both startups and mid-market enterprises (50-5000 employees). Our boutique model means startups get enterprise-quality expertise at accessible pricing, while larger organizations benefit from our agility and personalized service. We\'ve helped Series A startups build MVPs and scaled systems for established companies with millions of users.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      {/* FAQ Schema */}
      <JsonLd data={generateFAQSchema(faqs)} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about AI consulting, our process, and what to expect.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
