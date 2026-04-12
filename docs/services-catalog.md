# Services Catalog

> **Version:** 2.0  
> **Last updated:** 2026-04-10  
> **Status:** Canonical. This is the source of truth for all service offerings.  
> **Supersedes:** `src/company details/markup/02-services.md` (legacy — retained for historical reference only).  
> **Navigation source of truth:** `aivanceworks-website/src/lib/constants.ts`  
> **Competitor research:** `.claude/plans/competitor-services-research.md`  
> **Audit & rationale:** `.claude/plans/services-audit-and-recommendations.md`

---

## Service Architecture

The service catalog has two tiers:

1. **Core services (18)** — independently deliverable engagements. A client can buy any one of these standalone and receive tangible value.
2. **Client-facing landing pages (7)** — SEO-optimized, audience-specific pages that map to core services. These exist because clients search by outcome ("MVP development") not capability ("Custom Software Development").

### Core Services by Pillar

| Pillar | Core Services | Route Prefix |
|--------|--------------|-------------|
| Software Engineering | 6 | `/services/` |
| Cloud & Infrastructure | 6 | `/services/` |
| AI & Machine Learning | 6 | `/services/ai-machine-learning/` |

### Client-Facing Landing Pages

| Landing Page | Route | Maps to Core Service |
|-------------|-------|---------------------|
| Product Discovery | `/services/product-discovery` | Architecture Advisory + Custom Software Dev |
| MVP Development | `/services/mvp-development` | Custom Software Development |
| SaaS Software Development | `/services/saas-development` | Custom Software Development |
| Software Dev for Startups | `/services/startup-development` | Custom Software Development |
| Web App Development | `/services/web-app-development` | Custom Software Development |
| UI/UX Design | `/services/ui-ux-design` | Custom Software Development |
| DevOps | `/services/devops` | Cloud Infrastructure & Operations |

### Menu Structure (constants.ts)

- **AI & ML** — own top-level dropdown (`aiMlMenu`): 6 core services
- **Services → Software Engineering** — 12 items (6 core + 6 landing pages)
- **Services → Infrastructure** — 8 items (6 core + DevOps + Security & Compliance)
- **Services → Technologies** — tech stack links (not services)

---

## Pillar 1: Software Engineering

### 1.1 Custom Software Development
**Route:** `/services/custom-software-development`  
**What the client buys:** "Build me a web application."

End-to-end custom software development using modern frameworks and best practices. We build responsive, performant applications that deliver exceptional user experiences — from MVP through production scale.

**Capabilities:**
- Full-stack web application development (.NET, ASP.NET Core, React, Angular, Next.js, Vue.js)
- RESTful API & GraphQL design and development
- Real-time applications (SignalR, WebSockets)
- Progressive Web Apps (PWA)
- Event-driven architecture (Dapr, Azure Service Bus)
- Microservices architecture design and implementation
- SaaS product development and multi-tenancy
- MVP development and product lifecycle management
- Enterprise application development
- Blazor applications (Server & WebAssembly)

**Technologies:**
C#, .NET, ASP.NET Core, Blazor, Web API, React.js, Angular, Next.js, Vue.js, Node.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, SignalR, Entity Framework Core, Dapr, GraphQL

---

### 1.2 Application Modernization
**Route:** `/services/application-modernization`  
**What the client buys:** "Transform my legacy system."

Assessment, planning, and execution of legacy system transformation. We help organizations escape technical debt, move to modern architectures, and unlock the ability to iterate and scale.

**Capabilities:**
- Legacy system assessment and modernization roadmap
- Monolith-to-microservices decomposition
- Re-platforming and re-architecting
- Cloud-native transformation
- Incremental modernization (strangler fig pattern)
- Technical debt reduction and code quality improvement
- Database migration and modernization
- API-first modernization (wrapping legacy systems with modern APIs)
- Enterprise system integration during modernization

**Technologies:**
.NET, ASP.NET Core, React, Angular, Next.js, Azure Service Bus, Dapr, Docker, Kubernetes, Terraform, Azure Container Apps

---

### 1.3 Mobile & Cross-Platform Development
**Route:** `/services/mobile-development`  
**What the client buys:** "Build me a mobile app."

Native and cross-platform mobile application development for iOS and Android, from design through app store deployment.

**Capabilities:**
- Native mobile development (iOS, Android)
- Cross-platform development (React Native, Flutter, .NET MAUI)
- Mobile-first responsive design
- Progressive Web App (PWA) development
- Offline-first architecture
- Push notifications and real-time mobile features
- App store optimization and deployment
- Mobile API design and backend integration

**Technologies:**
React Native, Flutter, .NET MAUI, Swift, Kotlin, TypeScript, Expo, Firebase, Azure Mobile Services

---

### 1.4 Quality Engineering & Testing
**Route:** `/services/quality-engineering`  
**What the client buys:** "Test my codebase and set up automated QA."

Standalone quality assurance and testing services — test strategy design, automation framework setup, performance testing, and ongoing quality engineering for existing codebases.

**Capabilities:**
- Test strategy and architecture design
- Test automation framework setup and implementation
- Performance testing and optimization
- Security testing (OWASP, penetration testing)
- Continuous testing and CI integration
- Accessibility testing and WCAG compliance
- Load and stress testing
- API testing and contract testing
- Test coverage analysis and improvement

**Technologies:**
Playwright, Cypress, Jest, xUnit, NUnit, k6, Artillery, Postman, OWASP ZAP, Lighthouse, axe

---

### 1.5 Architecture Advisory
**Route:** `/services/architecture-advisory`  
**What the client buys:** "Review my architecture and help me make technology decisions."

Consulting-only engagements — architecture reviews, technology assessments, and strategic technical guidance without a full development commitment.

**Capabilities:**
- Architecture assessment and review
- Evolutionary architecture design
- Architecture Decision Records (ADRs)
- Technology stack evaluation and recommendation
- Scalability and performance architecture
- System design for high availability
- Technical due diligence (for acquisitions or investments)
- Cloud architecture review

**Deliverables:**
Architecture assessment reports, technology roadmaps, ADR documentation, system design documents, migration strategy documents

---

### 1.6 IT Consulting
**Route:** `/services/it-consulting`  
**What the client buys:** "Help me figure out the right technology approach for my business."

Strategic technology consulting for organizations evaluating digital transformation, technology investments, or operational improvements.

**Capabilities:**
- Technology strategy and roadmap development
- Digital transformation assessment
- Vendor evaluation and selection
- Build vs. buy analysis
- Technology due diligence
- IT process optimization
- Team structure and capability assessment

**Deliverables:**
Strategy documents, technology roadmaps, vendor comparison matrices, recommendation reports

---

## Pillar 2: Cloud & Infrastructure

### 2.1 Cloud Strategy & Assessment
**Route:** `/services/cloud-strategy`  
**What the client buys:** "Help me plan my cloud journey."

Strategic consulting to assess cloud readiness, build business cases, and create actionable migration roadmaps before any infrastructure work begins.

**Capabilities:**
- Cloud readiness assessment
- Business case development and TCO analysis
- Cloud migration roadmap and phased planning
- Cloud operating model design
- Multi-cloud vs. single-cloud strategy evaluation
- Workload assessment and prioritization
- Risk assessment and compliance planning

**Deliverables:**
Cloud readiness reports, migration roadmaps, business case documents, operating model blueprints

---

### 2.2 Cloud Migration & Modernization
**Route:** `/services/cloud-migration`  
**What the client buys:** "Move my systems to the cloud."

End-to-end execution of cloud migration — from on-premises to Azure or AWS — using the right migration approach for each workload.

**Capabilities:**
- Azure & AWS migration (on-premises to cloud)
- Application migration (re-host, re-platform, re-architect)
- Data migration and database modernization
- Mainframe and legacy infrastructure modernization
- Migration planning, execution, and validation
- Hybrid cloud connectivity setup
- Post-migration optimization and validation

**Technologies:**
Microsoft Azure, AWS, Azure Migrate, Azure Site Recovery, Terraform, Docker, Kubernetes, Azure Container Apps, Azure SQL Database, Cosmos DB

---

### 2.3 Cloud Infrastructure & Operations
**Route:** `/services/cloud-infrastructure`  
**What the client buys:** "Set up and manage my cloud infrastructure."

Design, build, and operational management of cloud infrastructure — including IaC, container orchestration, serverless, networking, monitoring, and disaster recovery.

**Capabilities:**
- Infrastructure as Code (Terraform, ARM Templates, Bicep, Pulumi)
- Container orchestration (Kubernetes, Azure Container Apps, Azure Container Registry)
- Serverless architecture (Azure Functions, Durable Functions, AWS Lambda)
- Cloud networking (Azure Virtual Networks, VPN Gateway, ExpressRoute)
- Monitoring & observability (Application Insights, Log Analytics)
- Disaster recovery & business continuity planning
- Landing zone design and implementation
- Environment provisioning and management
- Azure Service Bus, Logic Apps, Event Grid integration
- CI/CD pipeline design and implementation (Azure DevOps, GitHub Actions)
- Secret management (Azure Key Vault)

**Technologies:**
Microsoft Azure, AWS, Terraform, Bicep, ARM Templates, Docker, Kubernetes, Azure DevOps, GitHub Actions, Azure Functions, Azure Service Bus, Azure Key Vault, Application Insights

---

### 2.4 Platform Engineering
**Route:** `/services/platform-engineering`  
**What the client buys:** "Build us an internal developer platform."

Design and implementation of internal developer platforms (IDPs) that give development teams self-service infrastructure, standardized toolchains, and faster delivery.

**Capabilities:**
- Internal developer platform (IDP) design and implementation
- Self-service infrastructure provisioning
- Developer experience (DevEx) optimization
- Golden paths and paved roads for common workflows
- Service catalogs and developer portals
- Standardized CI/CD templates and pipelines
- Infrastructure abstraction layers

**Technologies:**
Backstage, Terraform, Kubernetes, Azure DevOps, GitHub Actions, GitOps (ArgoCD, Flux), Docker, Helm

---

### 2.5 FinOps & Cloud Cost Optimization
**Route:** `/services/finops`  
**What the client buys:** "Reduce my cloud spend."

Cloud cost audit, optimization, and governance — identifying waste, right-sizing resources, and establishing ongoing cost management practices.

**Capabilities:**
- Cloud cost audit and optimization
- Resource right-sizing and waste elimination
- Resource governance and tagging strategy
- Showback/chargeback implementation
- Reserved instance and savings plan management
- Cloud spend forecasting and budgeting
- FinOps practice setup and enablement

**Deliverables:**
Cost optimization reports, savings recommendations, tagging strategy documents, FinOps dashboards, governance policies

---

### 2.6 Data Engineering
**Route:** `/services/data-engineering`  
**What the client buys:** "Build my data pipelines and analytics infrastructure."

End-to-end data engineering — from ETL pipeline development and data warehousing to real-time processing and business intelligence. We build the data foundation that powers analytics and AI.

**Capabilities:**
- ETL/ELT pipeline development
- Azure Data Factory implementation
- Data warehouse design (Azure Synapse, Snowflake)
- Real-time data processing (Azure Stream Analytics, Databricks)
- Data migration and integration
- Power BI dashboard development
- Data quality and governance
- Database design, modeling, and optimization
- Data lake architecture
- Master data management
- SQL optimization and performance tuning

**Technologies:**
SQL Server, Azure SQL Database, Cosmos DB, MongoDB, PostgreSQL, Azure Data Factory, Power BI, Azure Synapse Analytics, Azure Databricks, Azure Stream Analytics, Redis, Snowflake

---

## Pillar 3: AI & Machine Learning

### 3.1 AI Strategy & Consulting
**Route:** `/services/ai-machine-learning/ai-strategy-consulting`  
**What the client buys:** "Help me figure out where AI fits in my business."

Strategic AI consulting — maturity assessments, use case identification, roadmap development, and responsible AI governance. Establishes the foundation before any AI engineering begins.

**Capabilities:**
- AI maturity assessment
- AI use case identification and prioritization
- AI roadmap and business case development
- AI operating model design
- AI readiness assessment
- Responsible AI framework and governance
- AI ethics and compliance guidance
- AI risk management

**Deliverables:**
AI maturity reports, use case prioritization matrices, AI roadmaps, governance frameworks, business case documents

---

### 3.2 Generative AI
**Route:** `/services/ai-machine-learning/generative-ai`  
**What the client buys:** "Build me a RAG system / AI agent / LLM integration."

Design and development of generative AI systems — from LLM integration and RAG pipelines to autonomous AI agents. This is our flagship AI service and a key differentiator.

**Capabilities:**
- Large Language Model (LLM) integration and deployment
- Retrieval-Augmented Generation (RAG) systems
- Agentic AI workflow automation
- Custom model fine-tuning
- Prompt engineering and optimization
- Azure OpenAI Service and Azure AI Foundry implementation
- Multi-model orchestration (LangChain, LangGraph, Semantic Kernel)
- Vector database implementation (ChromaDB, Azure AI Search)
- ML pipeline design and model monitoring
- AI-powered knowledge management systems

**Technologies:**
Azure OpenAI, Azure AI Foundry, LangChain, LangGraph, Semantic Kernel, ChromaDB, Azure AI Search, GPT-4, Claude, Llama, Python, PyTorch, MLflow, Hugging Face

---

### 3.3 NLP & Document AI
**Route:** `/services/ai-machine-learning/nlp-document-ai`  
**What the client buys:** "Automate my document processing / build intelligent search."

Intelligent document processing, text analytics, and semantic search systems that extract, classify, and make unstructured data actionable.

**Capabilities:**
- Document Intelligence & OCR
- Text analytics and classification
- Sentiment analysis and entity extraction
- Semantic search implementation
- Intelligent document routing and processing
- Data extraction from unstructured sources (PDFs, images, forms)
- Knowledge base construction from document corpora

**Technologies:**
Azure Document Intelligence, Azure AI Search, Azure Cognitive Services, Python, spaCy, Hugging Face Transformers, LangChain

---

### 3.4 Conversational AI
**Route:** `/services/ai-machine-learning/conversational-ai`  
**What the client buys:** "Build me a chatbot / virtual assistant."

AI-powered conversational interfaces — chatbots, virtual assistants, and voice interfaces that handle customer inquiries, internal support, and multi-channel communication.

**Capabilities:**
- AI-powered chatbots and virtual assistants
- Voice assistants and voice interfaces
- Multi-channel conversational experiences (web, mobile, Teams, Slack)
- Knowledge-base-powered support agents
- Intent recognition and dialogue management
- Handoff to human agents with context preservation
- Conversation analytics and continuous improvement

**Technologies:**
Azure OpenAI, Azure Bot Service, LangChain, LangGraph, Semantic Kernel, Azure AI Search, Azure Communication Services

---

### 3.5 Computer Vision
**Route:** `/services/ai-machine-learning/computer-vision`  
**What the client buys:** "Build visual inspection / image recognition for my business."

Computer vision systems for image and video analysis — from visual inspection and quality control to document scanning and object detection.

**Capabilities:**
- Image classification and object detection
- Video analytics and processing
- Visual inspection and quality control
- Document and receipt scanning
- Custom vision model training
- Real-time image processing pipelines
- Integration with existing camera/sensor infrastructure

**Technologies:**
Azure Computer Vision, Azure Custom Vision, Python, PyTorch, TensorFlow, OpenCV, ONNX Runtime

---

### 3.6 Intelligent Automation
**Route:** `/services/ai-machine-learning/intelligent-automation`  
**What the client buys:** "Automate these workflows using AI."

AI-augmented workflow automation that goes beyond traditional RPA — combining AI reasoning with process automation to handle complex, judgment-dependent tasks.

**Capabilities:**
- AI-augmented workflow automation
- Intelligent document processing and routing
- Process mining and optimization with AI
- Cognitive automation (tasks requiring judgment/interpretation)
- AI-powered decision support systems
- Business process automation with LLM integration
- Human-in-the-loop automation design

**Technologies:**
Azure OpenAI, LangChain, LangGraph, Azure Logic Apps, Azure Functions, Power Automate, Python, Semantic Kernel

---

## Client-Facing Landing Pages

These pages exist in the navigation menu for client discovery and SEO. Each maps to one or more core services above — they share the same underlying delivery capability but are framed for a specific audience or search intent.

### Product Discovery
**Route:** `/services/product-discovery`  
**Maps to:** Architecture Advisory + Custom Software Development  
**Audience:** Clients who have an idea but need help defining what to build.

Collaborative discovery process to validate ideas, define requirements, and create a development roadmap before committing to a full build.

---

### MVP Development
**Route:** `/services/mvp-development`  
**Maps to:** Custom Software Development  
**Audience:** Startups and founders who need to validate a product idea quickly.

Rapid development of minimum viable products — from concept to working software in weeks, not months. Focused on validating assumptions and getting to market fast.

---

### SaaS Software Development
**Route:** `/services/saas-development`  
**Maps to:** Custom Software Development  
**Audience:** Companies building subscription-based software products.

End-to-end SaaS product development including multi-tenancy, subscription billing, user management, and scalable cloud architecture.

---

### Software Dev for Startups
**Route:** `/services/startup-development`  
**Maps to:** Custom Software Development  
**Audience:** Early-stage and growth-stage startups.

Startup-focused software development — flexible engagement models, iterative delivery, and technology choices optimized for speed-to-market and future scalability.

---

### Web App Development
**Route:** `/services/web-app-development`  
**Maps to:** Custom Software Development  
**Audience:** Businesses needing web-based applications.

Modern web application development using React, Angular, Next.js, .NET, and other frameworks. Responsive, performant, and built for scale.

---

### UI/UX Design
**Route:** `/services/ui-ux-design`  
**Maps to:** Custom Software Development  
**Audience:** Clients who need design services — research, wireframes, design systems.

User experience research, interface design, design system creation, and accessibility auditing. Can be engaged standalone (design only) or as part of a development project.

---

### DevOps
**Route:** `/services/devops`  
**Maps to:** Cloud Infrastructure & Operations  
**Audience:** Teams looking to improve their development and deployment workflows.

DevOps practice setup and optimization — CI/CD pipelines, automation, infrastructure as code, monitoring, and release management. Focused on accelerating software delivery.

---

## Additional Service Areas (not part of the three core pillars)

The following service exists independently and appears in the Infrastructure menu for client discovery:

- **Security & Compliance** — `/services/security-compliance` (security architecture, IAM, compliance consulting)

---

## Changelog

| Date | Change |
|------|--------|
| 2026-04-10 | v2.1 — Moved Data Engineering into Cloud & Infrastructure as core service 2.6. Security & Compliance remains standalone. |
| 2026-04-10 | v2.0 — Added two-tier structure (core services + client-facing landing pages), aligned with constants.ts menu structure |
| 2026-04-10 | v1.0 — Initial finalized services catalog created from competitor research and audit |
