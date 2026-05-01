import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: VP of Operations / Head of Data / Director of Process Improvement at a mid-to-large
//   enterprise (500–10,000+ employees) managing high-volume document processing
// Measured on: operational efficiency, processing throughput, error reduction, cost per processed document
// Dominant question: "Can you extract accurate, structured data from our messy real-world documents?"
// Key trust issue: burned by OCR tools and document automation vendors whose demos worked on clean PDFs
//   but failed on scanned forms, inconsistent layouts, handwritten notes, and real-world edge cases
// Signature: DocumentProcessingPipeline — interactive staged pipeline from document intake through
//   extraction, classification, validation, to structured output. Carries the argument: "This is a
//   system, not just OCR — every document type flows through extraction, intelligence, and validation
//   before data reaches your systems."
//
// Composition follows Archetype B recipe (matches Generative AI reference).
// ProcessTimeline dropped — signature already communicates pipeline depth,
//   and FAQ addresses delivery cadence. TechStackBlock + EngagementModels demonstrate execution capability.
// No deviations from archetype. 10 sections at ceiling, justified for core AI service with
//   substantial depth across extraction, classification, search, routing, and knowledge base construction.

const nlpDocumentAi: ServicePageData = {
  slug: 'nlp-document-ai',
  title: 'NLP & Document AI',
  shortDescription:
    'Intelligent document processing, text analytics, and semantic search — extraction, classification, and structuring of unstructured data from PDFs, scans, emails, and forms at production scale.',

  metaTitle: 'NLP & Document AI | Intelligent Document Processing',
  metaDescription:
    'NLP and document AI engineering — intelligent document processing, text analytics, semantic search, and entity extraction. Turn unstructured documents into structured, actionable data.',
  keywords: [
    'nlp services',
    'document ai',
    'intelligent document processing',
    'document processing automation',
    'ocr automation',
    'text analytics services',
    'entity extraction',
    'semantic search implementation',
    'document classification',
    'azure document intelligence',
    'unstructured data processing',
    'document data extraction',
  ],
  canonicalPath: '/services/nlp-document-ai',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'NLP & Document AI', href: '/services/nlp-document-ai' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'ai-ml',
  signatureComponent: 'DocumentProcessingPipeline',
  heroIllustrationComponent: 'NlpDocAiHeroIllustration',

  hero: {
    badge: 'Document Intelligence',
    headline: 'Turn documents into data your systems can use.',
    subhead:
      'Extraction, classification, and semantic search for the messy documents OCR tools choke on — scanned forms, handwritten notes, and inconsistent layouts.',
    primaryCta: { label: 'Book Document AI Call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline', href: '#signature' },
  },

  // Audience test: VP of Ops scanning in 8 seconds. "Any Format" → confirms this handles their
  // messy docs, not just clean PDFs. "Structured Output" → data goes where they need it.
  // "Human-in-the-Loop" → directly addresses accuracy trust issue. "Production Scale" → not a demo.
  // All four are capability-framed (greenfield-safe).
  metricsStrip: [
    {
      value: 'Any Format',
      label: 'PDFs, scans, forms, handwriting',
      description: 'Not just clean digital docs',
    },
    {
      value: 'Structured Output',
      label: 'JSON, tables, your schema',
      description: 'Data your systems can consume',
    },
    {
      value: 'Human-in-the-Loop',
      label: 'Confidence scoring + review',
      description: 'Catch errors before they propagate',
    },
    {
      value: 'Production Scale',
      label: 'Batch and real-time processing',
      description: 'Not a demo on 10 documents',
    },
  ],

  // Audience test: VP of Ops evaluating whether we cover their specific document processing need.
  // Document Intelligence is the core ask. Classification answers "how do we route incoming docs?"
  // Entity Extraction answers "can you pull specific fields?" Semantic Search addresses findability.
  // Text Analytics covers summarization and sentiment for text-heavy datasets.
  // Knowledge Base Construction is the high-value play — turning doc archives into searchable assets.
  features: [
    {
      icon: 'FileText',
      title: 'Document Intelligence & OCR',
      description:
        'Data extraction from PDFs, scanned documents, images, and forms using Azure Document Intelligence — layout analysis, table extraction, and field recognition for documents that rule-based OCR cannot handle.',
    },
    {
      icon: 'FolderTree',
      title: 'Text Classification & Routing',
      description:
        'Automated document classification that routes incoming documents to the right workflow — by type, urgency, department, or custom categories trained on your document taxonomy.',
    },
    {
      icon: 'ScanSearch',
      title: 'Entity Extraction',
      description:
        'Named entity recognition that pulls structured data — names, dates, amounts, addresses, policy numbers, medical codes — from unstructured text and documents into fields your systems expect.',
    },
    {
      icon: 'Search',
      title: 'Semantic Search',
      description:
        'Search that understands meaning, not just keywords — semantic search across your document corpus so teams find the right document by describing what they need, not guessing the exact phrase.',
    },
    {
      icon: 'BarChart3',
      title: 'Text Analytics & Summarization',
      description:
        'Sentiment analysis, topic modeling, and automated summarization across customer feedback, support tickets, survey responses, and other text-heavy data sources.',
    },
    {
      icon: 'BookOpen',
      title: 'Knowledge Base Construction',
      description:
        'Transform document collections into searchable knowledge bases — automated indexing, cross-referencing, and structured navigation built from your existing document corpus.',
    },
  ],

  // Audience test: VP of Ops evaluating outcomes. Each benefit addresses a specific pain point
  // this buyer has experienced: OCR failing on real docs (→ handle messy ones), accuracy guessing
  // (→ measurable accuracy), standalone tools (→ system integration), headcount scaling (→ automation),
  // and static deployments (→ continuous improvement). All framed as capabilities, not claimed outcomes.
  benefits: [
    {
      icon: 'Target',
      title: 'Accuracy You Can Measure',
      description:
        'Confidence scoring on every extracted field with human-in-the-loop review queues for low-confidence results. You see extraction accuracy rates across document types — not just a demo on clean samples.',
    },
    {
      icon: 'Puzzle',
      title: 'Handle the Messy Ones',
      description:
        'Built for the documents that break OCR — inconsistent layouts, mixed languages, handwritten notes, poor scan quality. The extraction pipeline adapts to your actual document landscape, not ideal samples.',
    },
    {
      icon: 'Zap',
      title: 'From Documents to Decisions',
      description:
        'Extracted data flows directly into your ERP, CRM, data warehouse, or workflow system — structured, validated, and ready to use. No manual re-keying, no spreadsheet intermediaries.',
    },
    {
      icon: 'TrendingUp',
      title: 'Scale Without Adding Headcount',
      description:
        'Process thousands of documents per day without proportionally scaling your data entry team. Batch processing for high-volume intake, real-time processing for time-sensitive workflows.',
    },
    {
      icon: 'RefreshCw',
      title: 'Continuous Improvement',
      description:
        'Extraction models improve over time as they learn from corrections and new document types. Monitoring dashboards track accuracy, processing time, and error patterns across your document portfolio.',
    },
  ],

  capabilities: [
    'Document Intelligence & OCR (Azure Document Intelligence, custom models)',
    'Text classification and automated document routing',
    'Named entity recognition and structured field extraction',
    'Semantic search implementation (Azure AI Search, vector + keyword hybrid)',
    'Data extraction from PDFs, scans, images, and forms',
    'Knowledge base construction and document indexing',
    'Text analytics, summarization, and sentiment analysis',
    'Document processing pipeline design and orchestration',
    'Human-in-the-loop validation and confidence scoring workflows',
    'Integration with ERP, CRM, and business workflow systems',
  ],

  technologies: [
    'Azure Document Intelligence',
    'Azure AI Search',
    'Azure Cognitive Services',
    'Python',
    'spaCy',
    'Hugging Face Transformers',
    'LangChain',
    'FastAPI',
    'Docker',
    'PostgreSQL',
  ],

  engagementModels: [
    {
      name: 'Document AI Discovery Sprint',
      duration: '2 weeks',
      priceFrom: '$12,000',
      whatsIncluded: [
        'Use case validation on your actual documents',
        'Extraction accuracy baseline on 3–5 document types',
        'Architecture design and integration mapping',
        'Working prototype with your real documents',
        'Go/no-go recommendation with production estimate',
      ],
      suitableFor: 'Teams evaluating whether intelligent document processing is feasible for their document types before committing to a full build',
      primaryCta: { label: 'Book Discovery Sprint', href: '/contact?docai=discovery' },
    },
    {
      name: 'Production Document Pipeline',
      duration: '6–10 weeks',
      priceFrom: '$60,000',
      whatsIncluded: [
        'Full extraction pipeline for agreed document types',
        'Classification and routing engine',
        'Human-in-the-loop review workflows',
        'Integration with your existing systems',
        'Monitoring dashboard and accuracy tracking',
        'Handover documentation and runbook',
      ],
      suitableFor: 'Teams ready to automate document processing for a defined set of document types with clear integration requirements',
      primaryCta: { label: 'Book Production Build', href: '/contact?docai=production' },
      featured: true,
    },
    {
      name: 'Enterprise Document Intelligence',
      duration: '12+ weeks',
      priceFrom: '$140,000',
      whatsIncluded: [
        'Everything in Production Pipeline',
        'Multi-document-type support across departments',
        'Semantic search across full document corpus',
        'Knowledge base construction and navigation',
        'Custom model training for specialized documents',
        'Team training and knowledge transfer',
      ],
      suitableFor: 'Organizations processing multiple document types across departments, needing a platform-level document intelligence capability',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?docai=enterprise' },
    },
  ],

  relatedPages: [
    {
      title: 'Generative AI',
      description:
        'Your extracted document data becomes the knowledge source for RAG systems, AI agents, and LLM-powered applications — retrieval-augmented generation built on the structured data your pipeline produces.',
      href: '/services/generative-ai',
      icon: 'Brain',
      pageType: 'service',
    },
    {
      title: 'Computer Vision',
      description:
        'Some documents are images. For scanned forms, camera-captured receipts, and photo-based data entry, computer vision preprocessing enhances image quality before it enters the extraction pipeline — improving accuracy upstream.',
      href: '/services/computer-vision',
      icon: 'Scan',
      pageType: 'service',
    },
    {
      title: 'Financial Document Management',
      description:
        'Document AI is the gate that keeps a records platform clean. See the same OCR and classification stack applied to financial document management — KYC files, advisory agreements, trade confirms, and loan disclosures tagged correctly at ingestion so retention rules, search, and supervisory review work without a manual indexing pass.',
      href: '/solutions/financial-document-management',
      icon: 'ShieldCheck',
      pageType: 'solution',
    },
  ],

  faqs: [
    {
      question: 'What document types can you process?',
      answer:
        'The extraction pipeline handles PDFs (digital and scanned), images (JPEG, PNG, TIFF), Microsoft Office documents, email attachments, and structured forms. Azure Document Intelligence provides pre-built models for invoices, receipts, ID documents, tax forms, and health insurance cards. For specialized document types unique to your organization, we train custom extraction models on your sample documents during the Discovery Sprint.',
    },
    {
      question: 'How accurate is the extraction?',
      answer:
        'Accuracy depends on document quality and complexity. Pre-built models for standard document types (invoices, receipts) achieve high extraction accuracy out of the box. Custom models trained on your specific documents improve with each correction cycle. Every extracted field carries a confidence score, and the human-in-the-loop review queue routes low-confidence extractions to your team for verification — so errors are caught before they reach downstream systems.',
    },
    {
      question: 'How does this integrate with our existing systems?',
      answer:
        'The pipeline outputs structured data via REST API, webhook, or direct database writes — formatted to match your target system schema. We build connectors for ERP systems, CRM platforms, data warehouses, document management systems, and workflow engines. The integration layer handles field mapping, data validation, and error handling so extracted data arrives clean and ready to use.',
    },
    {
      question: 'What happens when the system encounters a document it cannot process?',
      answer:
        'Every document gets a processing confidence score. Documents below the confidence threshold are routed to a human review queue with the partial extraction pre-filled — your team corrects rather than re-enters from scratch. Failed documents are logged with the failure reason, and patterns in failures feed back into model improvement. The system degrades gracefully, never silently drops a document.',
    },
    {
      question: 'Can you handle handwritten documents and poor-quality scans?',
      answer:
        'Yes, with expectations set appropriately. Azure Document Intelligence handles printed text on poor-quality scans well. Handwriting recognition works for structured fields (dates, amounts, short text) with reasonable accuracy; free-form handwritten paragraphs are harder. During the Discovery Sprint, we test your actual document samples and report extraction accuracy by document type and quality level — so you know exactly what to expect before committing to a production build.',
    },
    {
      question: 'How is this different from standard OCR?',
      answer:
        'Standard OCR converts images to text. It does not understand document structure, extract specific fields, classify document types, or route documents to workflows. Intelligent document processing adds layout analysis (understanding tables, headers, sections), field extraction (pulling specific data points into structured output), classification (knowing what type of document it is), and validation (confidence scoring and error detection). The result is structured data, not raw text.',
    },
  ],

  cta: {
    title: 'Ready to turn your documents into structured data?',
    description:
      'Book a 30-minute call. We will discuss your document types, processing volumes, and integration requirements — and outline what an intelligent document processing pipeline looks like for your organization.',
    primaryCta: { label: 'Book document AI call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable document AI engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Discovery Sprint. Confirm achievability.',
    'engagementModels[1].duration — "6–10 weeks" for Production Pipeline. Confirm achievability for typical document processing builds.',
    'capabilities — none individually verified against shipped work yet.',
    'technologies — confirm the stack matches what we actually deliver (e.g., spaCy vs. other NLP libraries, FastAPI vs. other frameworks).',
  ],
};

export default nlpDocumentAi;
