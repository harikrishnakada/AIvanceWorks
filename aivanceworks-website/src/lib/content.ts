/**
 * Content Abstraction Layer
 *
 * This module provides a unified interface for fetching content.
 * Currently uses static data; can be migrated to Sanity/Payload/MDX later.
 *
 * IMPORTANT: Never import Sanity or other CMS clients directly in components.
 * Always use these functions.
 */

import { ServiceCategory, Service, BlogPost, CaseStudy, Author, FAQ } from '@/types';

// ============================================================================
// SERVICE CATEGORIES DATA
// ============================================================================

const serviceCategories: ServiceCategory[] = [
  {
    id: 'cloud-engineering',
    name: 'Cloud Engineering & Infrastructure',
    slug: 'cloud-engineering',
    shortDescription: 'Azure & AWS cloud architecture, migration, and optimization services',
    description: `Modernize your infrastructure with Azure and AWS cloud solutions designed for scalability, resilience, and cost efficiency. Our cloud architects design migration strategies that reduce operational costs by 40-60% while improving uptime to 99.9%. We specialize in Infrastructure as Code (Terraform, Bicep), container orchestration with Kubernetes, and serverless architectures using Azure Functions and Container Apps.`,
    icon: 'Cloud',
    gradient: 'from-blue-500 to-cyan-600',
    capabilities: [
      'Cloud Architecture Design & Review',
      'Azure & AWS Migration (On-Premises to Cloud)',
      'Infrastructure as Code (Terraform, ARM Templates, Bicep)',
      'Container Orchestration (Kubernetes, Azure Container Apps)',
      'Serverless Architecture Implementation',
      'Azure Service Bus, Logic Apps, Event Grid Integration',
      'Cost Optimization & FinOps',
      'Disaster Recovery & Business Continuity Planning',
    ],
    technologies: [
      'Microsoft Azure', 'AWS', 'Azure DevOps', 'Terraform', 'Docker',
      'Kubernetes', 'Azure Container Apps', 'Azure Functions', 'Azure Service Bus',
      'Azure Storage', 'Azure SQL Database', 'Cosmos DB', 'Redis Cache',
    ],
    services: [],
    startingPrice: '$15,000',
    typicalRoi: ['50% cost reduction', '99.9% uptime', '3x faster deployment cycles'],
  },
  {
    id: 'full-stack-development',
    name: 'Full-Stack Application Development',
    slug: 'full-stack-development',
    shortDescription: 'Custom web and mobile application development with modern frameworks',
    description: `Build modern, responsive web applications with cutting-edge frameworks and best practices. Our full-stack teams deliver high-performance applications using .NET 10, React 21, Angular 21, and Next.js. Whether you need a customer portal, enterprise SaaS platform, or real-time collaboration tool, we architect solutions that scale from MVP to millions of users.`,
    icon: 'Code2',
    gradient: 'from-emerald-500 to-teal-600',
    capabilities: [
      'Backend Development (.NET 10, ASP.NET Core, Web API)',
      'Frontend Development (React, Angular, Next.js, Vue.js)',
      'Real-time Applications (SignalR, WebSockets)',
      'Progressive Web Apps (PWA)',
      'RESTful API Design & Development',
      'GraphQL Implementation',
      'Microservices Architecture',
      'Event-Driven Architecture (Dapr, Azure Service Bus)',
    ],
    technologies: [
      'C#', '.NET 10', 'ASP.NET Core', 'Blazor', 'React.js', 'Angular',
      'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'SignalR', 'Entity Framework Core',
    ],
    services: [],
    startingPrice: '$8,000',
    typicalRoi: ['40% faster development', '95%+ test coverage', '<100ms API response times'],
  },
  {
    id: 'ai-machine-learning',
    name: 'AI & Machine Learning Solutions',
    slug: 'ai-machine-learning',
    shortDescription: 'Production-ready AI solutions with LLMs, RAG, and agentic AI frameworks',
    description: `AIvanceWorks delivers production-ready AI and machine learning solutions that transform how businesses process information, automate workflows, and serve customers. Our AI consulting services leverage Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) frameworks, and agentic AI systems to solve complex business challenges. Unlike proof-of-concept experiments, we build enterprise-grade AI applications with 99.5% uptime, sub-second response times, and measurable ROI within 60 days.`,
    icon: 'Bot',
    gradient: 'from-violet-500 to-purple-600',
    capabilities: [
      'Large Language Model (LLM) Integration',
      'Retrieval-Augmented Generation (RAG) Systems',
      'Agentic AI Workflow Automation',
      'Azure AI Foundry Implementation',
      'LangChain & LangGraph Development',
      'Semantic Kernel Integration',
      'Vector Database Implementation',
      'AI Strategy Consulting',
    ],
    technologies: [
      'Azure AI Foundry', 'Azure OpenAI', 'LangChain', 'LangGraph',
      'Semantic Kernel', 'ChromaDB', 'Pinecone', 'Azure AI Search',
      'GPT-4', 'Claude', 'Python', 'PyTorch',
    ],
    services: [],
    startingPrice: '$12,000',
    typicalRoi: ['60% reduction in manual processing', '10x faster document analysis', '80% accuracy improvement'],
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering & Analytics',
    slug: 'data-engineering',
    shortDescription: 'ETL pipelines, data warehousing, and business intelligence solutions',
    description: `Turn raw data into strategic insights with enterprise-grade data pipelines, warehousing, and business intelligence solutions. Our data engineers build ETL/ELT pipelines using Azure Data Factory, design scalable data warehouses with Azure Synapse and Snowflake, and create interactive Power BI dashboards that drive decision-making. We process millions of records daily for clients across healthcare, fintech, and SaaS industries.`,
    icon: 'Database',
    gradient: 'from-orange-500 to-amber-600',
    capabilities: [
      'ETL/ELT Pipeline Development',
      'Azure Data Factory Implementation',
      'Data Warehouse Design (Azure Synapse, Snowflake)',
      'Real-Time Data Processing',
      'Power BI Dashboard Development',
      'Advanced Analytics & Reporting',
      'Data Quality & Governance',
      'Big Data Processing (Azure Databricks)',
    ],
    technologies: [
      'SQL Server', 'Azure SQL Database', 'Cosmos DB', 'MongoDB',
      'PostgreSQL', 'Azure Data Factory', 'Power BI', 'Azure Synapse Analytics',
      'Azure Databricks', 'Azure Stream Analytics', 'Redis',
    ],
    services: [],
    startingPrice: '$10,000',
    typicalRoi: ['70% faster reporting', '90% reduction in manual data prep', 'Real-time insights'],
  },
  {
    id: 'devops-automation',
    name: 'DevOps & CI/CD Automation',
    slug: 'devops-automation',
    shortDescription: 'Modern DevOps practices and CI/CD pipeline implementation',
    description: `Accelerate software delivery with modern DevOps practices and automated CI/CD pipelines. We help startups reduce deployment time from weeks to minutes through Infrastructure as Code, containerization, and automated testing. Our DevOps implementations using Azure DevOps, GitHub Actions, and Terraform enable teams to deploy 10-20 times per day with zero-downtime releases.`,
    icon: 'Settings',
    gradient: 'from-slate-500 to-gray-600',
    capabilities: [
      'CI/CD Pipeline Design & Implementation',
      'Azure DevOps Configuration',
      'GitHub Actions Workflows',
      'Infrastructure as Code (IaC)',
      'Container Orchestration (Kubernetes, Docker)',
      'Automated Testing Integration',
      'Monitoring & Observability (Application Insights)',
      'Deployment Automation (Blue-Green, Canary)',
    ],
    technologies: [
      'Azure DevOps', 'Git', 'GitHub Actions', 'GitLab CI', 'Jenkins',
      'Docker', 'Kubernetes', 'Terraform', 'Azure Container Registry',
      'Azure Key Vault', 'Application Insights',
    ],
    services: [],
    startingPrice: '$8,000',
    typicalRoi: ['10x deployment frequency', '90% reduction in failed deployments', '50% faster recovery'],
  },
  {
    id: 'enterprise-integration',
    name: 'Enterprise Integration & Migration',
    slug: 'enterprise-integration',
    shortDescription: 'Legacy modernization and enterprise system integration services',
    description: `Modernize legacy systems and integrate disparate applications with minimal business disruption. We specialize in on-premises to cloud migrations, API integrations, and enterprise service bus implementations. Our proven migration methodology ensures data integrity, security, and compliance throughout the transition process, with rollback plans and phased cutover strategies.`,
    icon: 'ArrowLeftRight',
    gradient: 'from-indigo-500 to-blue-600',
    capabilities: [
      'Legacy System Modernization',
      'On-Premises to Cloud Migration',
      'API Integration & Development',
      'SharePoint & Microsoft Graph Integration',
      'Third-Party API Integration',
      'Data Migration Services',
      'Microservices Migration',
      'Application Modernization',
    ],
    technologies: [
      'Azure Service Bus', 'Logic Apps', 'API Management', 'SharePoint',
      'Microsoft Graph', 'REST APIs', 'GraphQL', 'Azure Data Factory', 'Azure Migrate',
    ],
    services: [],
    startingPrice: '$12,000',
    typicalRoi: ['40% reduction in maintenance costs', '3x performance improvement', '99.9% data accuracy'],
  },
  {
    id: 'security-compliance',
    name: 'Security & Compliance',
    slug: 'security-compliance',
    shortDescription: 'Enterprise security implementation and compliance consulting',
    description: `Protect your applications and data with enterprise-grade security built on Microsoft's Zero Trust framework. All our solutions implement Azure AD B2C, Entra External Identity, and end-to-end encryption using Azure Key Vault. We provide security assessments, penetration testing, and compliance consulting for HIPAA, SOC 2, and GDPR requirements.`,
    icon: 'Shield',
    gradient: 'from-red-500 to-rose-600',
    capabilities: [
      'Security Architecture Design',
      'Azure AD B2C Implementation',
      'Azure Entra External Identity',
      'Identity & Access Management (IAM)',
      'OAuth 2.0 / OpenID Connect Implementation',
      'Security Assessment & Penetration Testing',
      'Compliance Consulting (HIPAA, SOC 2)',
      'DevSecOps Implementation',
    ],
    technologies: [
      'Azure AD', 'Azure AD B2C', 'Entra External Identity', 'Azure Key Vault',
      'Azure Security Center', 'OAuth 2.0', 'OpenID Connect', 'Azure Sentinel',
    ],
    services: [],
    startingPrice: '$10,000',
    typicalRoi: ['85% reduction in vulnerabilities', 'Compliance certification readiness', 'Zero security incidents'],
  },
];

// ============================================================================
// AI & ML SERVICES (Sub-services for ai-machine-learning category)
// ============================================================================

const aiMlServices: Service[] = [
  {
    id: 'rag-frameworks',
    name: 'RAG Framework Development',
    slug: 'rag-frameworks',
    categorySlug: 'ai-machine-learning',
    shortDescription: 'Custom retrieval-augmented generation systems for intelligent knowledge management',
    description: `Retrieval-Augmented Generation (RAG) is an AI architecture that combines the reasoning capabilities of Large Language Models with real-time data retrieval from your proprietary knowledge bases. Unlike traditional chatbots that rely solely on pre-trained knowledge and often hallucinate incorrect information, RAG systems ground every response in your verified documents, databases, and content repositories — providing accurate, citation-backed answers to complex questions.

For businesses, RAG frameworks deliver transformative benefits: 80% reduction in manual research time, 95% answer accuracy (vs. 60-70% for basic LLMs), and 10x faster document analysis. Our RAG implementations leverage Azure AI Foundry, LangChain, ChromaDB, and Azure AI Search to create systems that process millions of documents, support multi-tenant architectures, and maintain sub-second query response times.`,
    capabilities: [
      'Custom RAG Architecture Design (naive, advanced, modular, agentic RAG)',
      'Vector Database Implementation (ChromaDB, Pinecone, Azure AI Search)',
      'Document Ingestion & Processing Pipelines',
      'Semantic Chunking & Embedding Optimization',
      'Hybrid Search Implementation (semantic + keyword)',
      'Citation Tracking & Source Attribution',
      'Performance Optimization (sub-second response)',
      'Enterprise Security & Compliance (SOC 2, HIPAA)',
    ],
    technologies: [
      'LangChain', 'LangGraph', 'Semantic Kernel', 'GPT-4', 'Claude',
      'Azure OpenAI', 'ChromaDB', 'Pinecone', 'Azure AI Search',
      'Python', '.NET', 'FastAPI', 'Azure AI Foundry',
    ],
    processSteps: [
      {
        title: 'Discovery & Architecture Design',
        description: 'Conduct data audit, define use cases, design RAG architecture, create technical specification',
        duration: '1-2 weeks',
        deliverable: 'RAG Architecture Blueprint, project plan, cost estimate',
      },
      {
        title: 'Data Pipeline Development',
        description: 'Build document ingestion pipelines, implement semantic chunking, generate vector embeddings',
        duration: '2-3 weeks',
        deliverable: 'Functional ingestion pipeline, populated vector database',
      },
      {
        title: 'RAG System Implementation',
        description: 'Develop retrieval logic with hybrid search, integrate LLM, implement citation tracking',
        duration: '2-4 weeks',
        deliverable: 'Working RAG system with API access',
      },
      {
        title: 'Optimization & Testing',
        description: 'Benchmark accuracy, optimize retrieval relevance, performance tuning, security testing',
        duration: '1-2 weeks',
        deliverable: 'Production-ready system with test results',
      },
      {
        title: 'Deployment & Training',
        description: 'Deploy to Azure, configure monitoring, train team on usage and maintenance',
        duration: '1 week',
        deliverable: 'Live system, documentation, training materials',
      },
    ],
    roiMetrics: [
      {
        metric: '80% Reduction in Research Time',
        value: '80%',
        description: 'Employees find answers in seconds vs. hours of document searching',
      },
      {
        metric: '95% Answer Accuracy',
        value: '95%',
        description: 'Citation-backed responses grounded in verified sources',
      },
      {
        metric: '10x Faster Document Analysis',
        value: '10x',
        description: 'Process thousands of pages in minutes instead of days',
      },
      {
        metric: '60% Reduction in Support Costs',
        value: '60%',
        description: 'AI-powered self-service resolves 70-80% of common inquiries',
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to build a RAG framework?',
        answer: `RAG framework development typically ranges from $15,000 for a basic MVP to $100,000+ for enterprise-scale implementations. Our projects start at $15,000 for a minimum viable RAG system covering a single knowledge domain with up to 10,000 documents. This includes document ingestion, vector database setup, LLM integration, basic API, and deployment to Azure. Mid-sized implementations ($30,000-$60,000) support multiple content sources, advanced retrieval strategies, custom UI, and multi-tenant architectures.`,
      },
      {
        question: 'How long does it take to implement a production-ready RAG system?',
        answer: `A production-ready RAG system typically takes 7-12 weeks from kickoff to deployment. Our accelerated timeline breaks down as follows: Discovery & Architecture (1-2 weeks), Data Pipeline Development (2-3 weeks), RAG Implementation (2-4 weeks), Testing & Optimization (1-2 weeks), and Deployment & Training (1 week). For simpler use cases with well-organized data sources, we've delivered functional RAG MVPs in as little as 4 weeks.`,
      },
      {
        question: "What's the difference between RAG and fine-tuning a language model?",
        answer: `RAG and fine-tuning solve different problems and are often complementary. RAG retrieves relevant information from external knowledge sources in real-time and provides it as context to a language model. This is ideal for frequently changing information, domain-specific knowledge, citation requirements, and cost-sensitive applications. Fine-tuning adjusts a language model's parameters through training to improve behavior, style, or domain expertise. According to OpenAI's best practices, 90% of use cases benefit more from RAG than fine-tuning.`,
      },
      {
        question: 'Can RAG systems work with my existing databases and SharePoint content?',
        answer: `Yes, RAG systems seamlessly integrate with existing data sources including SharePoint, SQL databases, Azure Blob Storage, file shares, APIs, and web content. Our data ingestion pipelines connect to 50+ source types without requiring data migration. For SharePoint specifically, we use Microsoft Graph API to access documents while respecting existing permissions. Your RAG system inherently respects role-based access — users only receive answers from documents they're authorized to view.`,
      },
    ],
    idealUseCases: [
      'Internal knowledge management systems',
      'Customer support automation',
      'Legal document analysis',
      'Medical research assistants',
      'Technical documentation Q&A',
      'Compliance and regulatory research',
    ],
    startingPrice: '$15,000',
    typicalResults: '80% reduction in manual research time, 95% answer accuracy, 10x faster document analysis',
  },
  {
    id: 'agentic-ai-automation',
    name: 'Agentic AI Workflow Automation',
    slug: 'agentic-ai-automation',
    categorySlug: 'ai-machine-learning',
    shortDescription: 'Autonomous AI agents that reason, plan, and execute multi-step processes',
    description: `Deploy autonomous AI agents that reason, plan, and execute multi-step business processes without human intervention. Using LangGraph and advanced agentic frameworks, we build AI systems that can analyze requirements, make decisions, call APIs, interact with databases, and coordinate complex workflows. According to Gartner's 2025 Automation Trends report, agentic AI reduces process completion time by 70% compared to traditional RPA.`,
    capabilities: [
      'Multi-agent System Design (researcher, planner, executor agents)',
      'LangGraph Workflow Orchestration',
      'Tool Integration (APIs, databases, file systems)',
      'Human-in-the-Loop Approval Workflows',
      'State Management and Error Handling',
      'Audit Logging and Compliance Tracking',
      'Agent Memory and Context Preservation',
      'Self-healing and Retry Logic',
    ],
    technologies: [
      'LangGraph', 'LangChain', 'Azure OpenAI', 'GPT-4', 'Claude',
      'Python', 'FastAPI', 'Azure Functions', 'Azure Service Bus',
    ],
    processSteps: [
      {
        title: 'Workflow Analysis',
        description: 'Map existing processes, identify automation opportunities, design agent architecture',
        duration: '1-2 weeks',
        deliverable: 'Agent architecture blueprint, automation roadmap',
      },
      {
        title: 'Agent Development',
        description: 'Build individual agents, implement tool integrations, create workflow orchestration',
        duration: '3-4 weeks',
        deliverable: 'Working agent system with core functionality',
      },
      {
        title: 'Testing & Refinement',
        description: 'End-to-end testing, edge case handling, human review integration',
        duration: '1-2 weeks',
        deliverable: 'Production-ready agent with test results',
      },
      {
        title: 'Deployment & Monitoring',
        description: 'Deploy to production, configure monitoring, establish feedback loops',
        duration: '1 week',
        deliverable: 'Live system with monitoring dashboard',
      },
    ],
    roiMetrics: [
      {
        metric: '70% Reduction in Process Time',
        value: '70%',
        description: 'Autonomous agents complete tasks faster than manual processes',
      },
      {
        metric: '95% Accuracy',
        value: '95%',
        description: 'Consistent, error-free execution with audit trails',
      },
      {
        metric: '24/7 Operation',
        value: '24/7',
        description: 'Agents work continuously without human supervision',
      },
    ],
    faqs: [
      {
        question: 'What tasks can AI agents automate?',
        answer: `AI agents excel at multi-step workflows that require reasoning and decision-making. Common use cases include automated report generation from multiple data sources, contract analysis and risk assessment, lead qualification and outreach, data migration and transformation, compliance monitoring and alerting, and invoice processing and reconciliation. The key is tasks that follow patterns but require judgment.`,
      },
      {
        question: 'How do you ensure AI agents make correct decisions?',
        answer: `We implement multiple safeguards including human-in-the-loop approval for critical decisions, comprehensive audit logging, confidence thresholds that escalate uncertain cases, and self-verification steps. Agents can be configured with different autonomy levels based on risk tolerance and compliance requirements.`,
      },
    ],
    idealUseCases: [
      'Automated report generation',
      'Contract analysis and risk assessment',
      'Lead qualification and outreach',
      'Data migration and transformation',
      'Compliance monitoring and alerting',
      'Invoice processing and reconciliation',
    ],
    startingPrice: '$18,000',
    typicalResults: '70% reduction in process time, 95% accuracy, 24/7 operation',
  },
  {
    id: 'llm-integration',
    name: 'LLM Integration & Custom Development',
    slug: 'llm-integration',
    categorySlug: 'ai-machine-learning',
    shortDescription: 'Enterprise LLM integration with GPT-4, Claude, and Azure OpenAI',
    description: `Integrate cutting-edge Large Language Models (GPT-4, Claude, Llama) into your applications with enterprise-grade security, compliance, and cost optimization. We build custom LLM-powered features including intelligent search, content generation, sentiment analysis, and conversational interfaces. Our implementations leverage Azure OpenAI for data sovereignty, fine-tuning for domain expertise, and prompt engineering for consistent outputs.`,
    capabilities: [
      'Azure OpenAI Service Deployment',
      'Multi-model Orchestration (GPT-4, Claude, specialized models)',
      'Prompt Engineering and Optimization',
      'Fine-tuning for Industry-specific Terminology',
      'Token Cost Optimization (caching, streaming, batch)',
      'Rate Limiting and Quota Management',
      'Content Safety and Guardrails',
      'A/B Testing for Model Selection',
    ],
    technologies: [
      'Azure OpenAI', 'GPT-4', 'Claude', 'Llama', 'Python',
      '.NET', 'Semantic Kernel', 'LangChain', 'Azure Functions',
    ],
    processSteps: [
      {
        title: 'Requirements & Model Selection',
        description: 'Define use cases, evaluate models, establish success criteria',
        duration: '1 week',
        deliverable: 'Model selection report, architecture design',
      },
      {
        title: 'Integration Development',
        description: 'Implement API integration, prompt engineering, error handling',
        duration: '2-3 weeks',
        deliverable: 'Working LLM integration with API',
      },
      {
        title: 'Optimization & Safety',
        description: 'Cost optimization, content filtering, guardrails implementation',
        duration: '1-2 weeks',
        deliverable: 'Production-ready system',
      },
    ],
    roiMetrics: [
      {
        metric: '60% Reduction in Content Creation',
        value: '60%',
        description: 'Automated drafting and summarization',
      },
      {
        metric: '90% Customer Self-Service',
        value: '90%',
        description: 'AI-powered support resolution',
      },
      {
        metric: '<500ms Response Latency',
        value: '<500ms',
        description: 'Real-time conversational AI',
      },
    ],
    faqs: [
      {
        question: 'Which LLM should I use for my project?',
        answer: `Model selection depends on your specific requirements. GPT-4 excels at complex reasoning and coding tasks. Claude is preferred for longer documents and nuanced analysis. Azure OpenAI provides enterprise compliance and data sovereignty. We help you evaluate models based on accuracy, latency, cost, and compliance requirements during our discovery phase.`,
      },
    ],
    idealUseCases: [
      'Intelligent chatbots and virtual assistants',
      'Automated content generation',
      'Code generation and analysis',
      'Sentiment analysis and review categorization',
      'Translation and localization',
      'Meeting transcription and summarization',
    ],
    startingPrice: '$10,000',
    typicalResults: '60% reduction in content creation time, 90% self-service rate',
  },
  {
    id: 'azure-ai-foundry',
    name: 'Azure AI Foundry Implementation',
    slug: 'azure-ai-foundry',
    categorySlug: 'ai-machine-learning',
    shortDescription: 'Microsoft enterprise AI platform setup and development',
    description: `Leverage Microsoft's enterprise AI platform to build, evaluate, and deploy generative AI applications at scale. Azure AI Foundry provides a comprehensive toolkit for prompt flow orchestration, model evaluation, safety monitoring, and production deployment. We help organizations implement AI Foundry's RAG patterns, evaluation frameworks, and responsible AI practices while maintaining compliance with SOC 2, HIPAA, and GDPR requirements.`,
    capabilities: [
      'AI Foundry Project Setup and Configuration',
      'Prompt Flow Development and Testing',
      'Model Evaluation and Benchmarking',
      'AI Search Integration (formerly Cognitive Search)',
      'Document Intelligence Integration',
      'Safety and Content Filtering',
      'Cost Monitoring and Optimization',
      'CI/CD for AI Deployments',
    ],
    technologies: [
      'Azure AI Foundry', 'Azure OpenAI', 'Azure AI Search',
      'Azure Document Intelligence', 'Prompt Flow', 'Python', '.NET',
    ],
    processSteps: [
      {
        title: 'Platform Setup',
        description: 'Configure AI Foundry workspace, set up resources, establish governance',
        duration: '1 week',
        deliverable: 'Configured AI Foundry environment',
      },
      {
        title: 'Prompt Flow Development',
        description: 'Build and test prompt flows, implement evaluations',
        duration: '2-3 weeks',
        deliverable: 'Working prompt flows with evaluation metrics',
      },
      {
        title: 'Production Deployment',
        description: 'Deploy to production, configure monitoring, establish CI/CD',
        duration: '1-2 weeks',
        deliverable: 'Production-ready AI application',
      },
    ],
    roiMetrics: [
      {
        metric: '50% Faster AI Development',
        value: '50%',
        description: 'Unified platform accelerates development cycles',
      },
      {
        metric: 'Enterprise-grade Security',
        value: 'Enterprise',
        description: 'Built-in compliance and governance',
      },
    ],
    faqs: [
      {
        question: 'What is Azure AI Foundry?',
        answer: `Azure AI Foundry (formerly Azure AI Studio) is Microsoft's comprehensive platform for building, evaluating, and deploying generative AI applications. It provides unified access to Azure OpenAI models, prompt flow orchestration, evaluation frameworks, and responsible AI tools. It's ideal for enterprises requiring compliance, governance, and integration with existing Microsoft infrastructure.`,
      },
    ],
    idealUseCases: [
      'Enterprise RAG implementations',
      'Multi-stage AI workflows',
      'Responsible AI governance',
      'Secure, compliant AI solutions',
      'Hybrid AI systems (Azure + on-premises)',
    ],
    startingPrice: '$12,000',
    typicalResults: '50% faster AI development cycles, enterprise-grade security',
  },
  {
    id: 'vector-database',
    name: 'Vector Database & Semantic Search',
    slug: 'vector-database',
    categorySlug: 'ai-machine-learning',
    shortDescription: 'High-performance semantic search and similarity detection',
    description: `Implement high-performance semantic search that understands intent and context, not just keywords. Our vector database solutions power intelligent search, recommendation engines, and similarity detection across documents, images, and code. We design vector storage architectures that scale to billions of embeddings while maintaining sub-100ms query latency.`,
    capabilities: [
      'Vector Database Selection (ChromaDB, Pinecone, Weaviate)',
      'Embedding Model Selection and Optimization',
      'Hybrid Search Implementation (vector + keyword)',
      'Metadata Filtering and Faceted Search',
      'Index Optimization for Performance',
      'Multi-tenancy and Security',
      'Real-time Indexing Pipelines',
      'Similarity Threshold Tuning',
    ],
    technologies: [
      'ChromaDB', 'Pinecone', 'Weaviate', 'Azure AI Search',
      'OpenAI Embeddings', 'Python', 'FastAPI',
    ],
    processSteps: [
      {
        title: 'Requirements Analysis',
        description: 'Evaluate data types, query patterns, scale requirements',
        duration: '1 week',
        deliverable: 'Vector database recommendation',
      },
      {
        title: 'Implementation',
        description: 'Set up vector store, build indexing pipeline, implement search API',
        duration: '2-3 weeks',
        deliverable: 'Working semantic search system',
      },
      {
        title: 'Optimization',
        description: 'Tune relevance, optimize performance, implement caching',
        duration: '1 week',
        deliverable: 'Production-ready search system',
      },
    ],
    roiMetrics: [
      {
        metric: '85% Improvement in Search Relevance',
        value: '85%',
        description: 'Context-aware results vs. keyword matching',
      },
      {
        metric: '10x Faster than Traditional Search',
        value: '10x',
        description: 'Optimized vector similarity operations',
      },
    ],
    faqs: [
      {
        question: 'Which vector database should I choose?',
        answer: `The choice depends on your requirements. ChromaDB is excellent for prototyping and smaller datasets. Pinecone offers managed scalability with minimal ops overhead. Azure AI Search provides hybrid capabilities and integrates well with Microsoft ecosystem. Weaviate is strong for multi-modal search. We evaluate options based on your scale, budget, and infrastructure requirements.`,
      },
    ],
    idealUseCases: [
      'Enterprise search across unstructured data',
      'Product recommendation engines',
      'Duplicate detection',
      'Image and video similarity search',
      'Anomaly detection',
      'Plagiarism and compliance checking',
    ],
    startingPrice: '$8,000',
    typicalResults: '85% improvement in search relevance, 10x faster search',
  },
  {
    id: 'ai-strategy-consulting',
    name: 'AI Strategy & Consulting',
    slug: 'ai-strategy-consulting',
    categorySlug: 'ai-machine-learning',
    shortDescription: 'Expert guidance from strategy through implementation',
    description: `Navigate your AI transformation with expert guidance from strategy through implementation. Our AI consultants help you identify high-ROI use cases, select the right technologies, build business cases, and create phased roadmaps. We conduct AI readiness assessments, data audits, and feasibility studies to ensure successful outcomes before writing a single line of code.`,
    capabilities: [
      'AI Opportunity Assessment',
      'Use Case Prioritization and ROI Modeling',
      'Technology Stack Recommendations',
      'Data Readiness Evaluation',
      'Build vs. Buy vs. Partner Analysis',
      'Vendor Selection and Evaluation',
      'Proof of Concept Design',
      'Change Management and Training',
    ],
    technologies: [
      'Azure AI Services', 'OpenAI', 'LangChain', 'Various ML Frameworks',
    ],
    processSteps: [
      {
        title: 'Discovery Workshop',
        description: 'Understand business objectives, identify pain points, assess AI maturity',
        duration: '1 week',
        deliverable: 'AI opportunity assessment',
      },
      {
        title: 'Use Case Analysis',
        description: 'Prioritize use cases, model ROI, evaluate feasibility',
        duration: '1-2 weeks',
        deliverable: 'Prioritized use case catalog',
      },
      {
        title: 'Roadmap Development',
        description: 'Create implementation plan, define architecture, establish governance',
        duration: '1 week',
        deliverable: 'AI Strategy Roadmap',
      },
    ],
    roiMetrics: [
      {
        metric: '3-5 High-ROI Use Cases',
        value: '3-5',
        description: 'Identified and prioritized per assessment',
      },
      {
        metric: '12-24 Month Roadmap',
        value: '12-24',
        description: 'Actionable implementation plan',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my company is ready for AI?',
        answer: `AI readiness depends on data quality, technical infrastructure, organizational buy-in, and clear use cases. Our readiness assessment evaluates these factors and identifies gaps. Even organizations with limited AI experience can start with lower-risk applications like document processing or search enhancement while building capabilities for more advanced use cases.`,
      },
    ],
    idealUseCases: [
      'AI roadmap development',
      'Use case identification',
      'Technology selection',
      'Vendor evaluation',
      'AI governance framework',
      'Change management planning',
    ],
    startingPrice: '$8,000',
    typicalResults: '3-5 prioritized use cases identified, 12-24 month roadmap',
  },
];

// Add AI/ML services to the category
serviceCategories.find(c => c.slug === 'ai-machine-learning')!.services = aiMlServices;

// ============================================================================
// CONTENT FETCHING FUNCTIONS
// ============================================================================

// Services
export function getAllServiceCategories(): ServiceCategory[] {
  return serviceCategories;
}

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.slug === slug);
}

export function getAllServices(): Service[] {
  return serviceCategories.flatMap((cat) => cat.services);
}

export function getServiceBySlug(categorySlug: string, serviceSlug: string): Service | undefined {
  const category = getServiceCategoryBySlug(categorySlug);
  return category?.services.find((service) => service.slug === serviceSlug);
}

export function getServicesByCategorySlug(categorySlug: string): Service[] {
  const category = getServiceCategoryBySlug(categorySlug);
  return category?.services || [];
}

// ============================================================================
// BLOG POSTS - SANITY CMS
// ============================================================================
// NOTE: All blog data is fetched from Sanity CMS.
// This is the ONLY file that imports the Sanity client (abstraction layer).

import { client } from './sanity';

// Helper function to calculate reading time
function calculateReadingTime(content: any[]): number {
  if (!content || !Array.isArray(content)) return 0;

  const text = content
    .filter((block) => block._type === 'block')
    .map((block) =>
      block.children
        ?.filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join(' ') || ''
    )
    .join(' ');

  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200); // 200 words per minute average reading speed
}

// GROQ query for fetching posts with author details
const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  "image": image.asset->url,
  "author": author->{
    "id": _id,
    name,
    "slug": slug.current,
    bio,
    "image": image.asset->url,
    role,
    linkedin,
    twitter
  },
  publishedAt,
  updatedAt,
  category,
  tags
}`;

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch(POSTS_QUERY);

  // Add reading time calculation and handle null values
  return posts.map((post: any) => ({
    ...post,
    tags: post.tags || [],
    updatedAt: post.updatedAt || post.publishedAt,
    readingTime: calculateReadingTime(post.content),
  }));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      content,
      "image": image.asset->url,
      "author": author->{
        "id": _id,
        name,
        "slug": slug.current,
        bio,
        "image": image.asset->url,
        role,
        linkedin,
        twitter
      },
      publishedAt,
      updatedAt,
      category,
      tags
    }`,
    { slug }
  );

  if (!post) return undefined;

  return {
    ...post,
    tags: post.tags || [],
    updatedAt: post.updatedAt || post.publishedAt,
    readingTime: calculateReadingTime(post.content),
  };
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await client.fetch(
    `*[_type == "post" && category == $category] | order(publishedAt desc) {
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      content,
      "image": image.asset->url,
      "author": author->{
        "id": _id,
        name,
        "slug": slug.current,
        bio,
        "image": image.asset->url,
        role,
        linkedin,
        twitter
      },
      publishedAt,
      updatedAt,
      category,
      tags
    }`,
    { category }
  );

  return posts.map((post: any) => ({
    ...post,
    tags: post.tags || [],
    updatedAt: post.updatedAt || post.publishedAt,
    readingTime: calculateReadingTime(post.content),
  }));
}

export async function getRelatedPosts(
  postId: string,
  category: string,
  limit = 3
): Promise<BlogPost[]> {
  const posts = await client.fetch(
    `*[_type == "post" && category == $category && _id != $postId] | order(publishedAt desc) [0...$limit] {
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      content,
      "image": image.asset->url,
      "author": author->{
        "id": _id,
        name,
        "slug": slug.current,
        bio,
        "image": image.asset->url,
        role,
        linkedin,
        twitter
      },
      publishedAt,
      updatedAt,
      category,
      tags
    }`,
    { category, postId, limit }
  );

  return posts.map((post: any) => ({
    ...post,
    tags: post.tags || [],
    updatedAt: post.updatedAt || post.publishedAt,
    readingTime: calculateReadingTime(post.content),
  }));
}

// Case Studies
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      industry,
      services,
      "image": image.asset->url,
      client,
      metrics,
      technologies,
      publishedAt,
      featured
    }`
  );
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      industry,
      services,
      "image": image.asset->url,
      client,
      challenge,
      solution,
      metrics,
      technologies,
      testimonial,
      publishedAt,
      featured
    }`,
    { slug }
  );
}

export async function getFeaturedCaseStudies(limit: number = 3): Promise<CaseStudy[]> {
  return client.fetch(
    `*[_type == "caseStudy" && featured == true] | order(publishedAt desc) [0...$limit] {
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      industry,
      services,
      "image": image.asset->url,
      metrics,
      publishedAt
    }`,
    { limit }
  );
}

// Authors
export async function getAllAuthors(): Promise<Author[]> {
  return client.fetch(
    `*[_type == "author"] {
      "id": _id,
      name,
      "slug": slug.current,
      bio,
      "image": image.asset->url,
      role,
      linkedin,
      twitter
    }`
  );
}

export async function getAuthorBySlug(slug: string): Promise<Author | undefined> {
  return client.fetch(
    `*[_type == "author" && slug.current == $slug][0] {
      "id": _id,
      name,
      "slug": slug.current,
      bio,
      "image": image.asset->url,
      role,
      linkedin,
      twitter
    }`,
    { slug }
  );
}

// FAQ helpers
export function getServiceFaqs(categorySlug: string, serviceSlug: string): FAQ[] {
  const service = getServiceBySlug(categorySlug, serviceSlug);
  return service?.faqs || [];
}
