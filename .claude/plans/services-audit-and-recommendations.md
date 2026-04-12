# Services Audit & Refinement Recommendations
# Software Engineering, Infrastructure & AI/ML

Created: 2026-04-10  
Based on: Competitor research across Accenture, ThoughtWorks, Deloitte, EPAM, Slalom, Capgemini, Infosys, Cognizant, Wipro

---

## PART 1: CROSS-COMPETITOR PATTERN ANALYSIS

### What the industry calls these service areas:

| Our Name | Most Common Industry Names |
|----------|---------------------------|
| Full-Stack Application Development (4.2) | "Software Engineering" / "Application Services" / "Product & Platform Engineering" |
| Cloud Engineering & Infrastructure (4.1) | "Cloud" / "Cloud & Platform Engineering" / "Cloud Infrastructure Services" |
| AI & Machine Learning Solutions (4.3) | "AI" / "Data & AI" / "AI & Analytics" |

### Universal sub-services (offered by 7+ of 9 companies):

**Software Engineering:**
1. Custom Application/Software Development
2. Application Modernization (legacy transformation)
3. Quality Engineering & Testing
4. Product Engineering (lifecycle, MVP, scaling)
5. Enterprise Platform Services (SAP, Salesforce, ServiceNow)
6. API Strategy & Integration / Microservices
7. Mobile Engineering
8. UX/UI / Experience Engineering
9. DevOps & CI/CD (often overlaps with infrastructure)
10. Low-Code/No-Code Platforms

**Cloud / Infrastructure:**
1. Cloud Strategy & Assessment
2. Cloud Migration (multi-approach: lift-shift, re-platform, re-architect)
3. Cloud-Native Development/Engineering
4. Multi-Cloud & Hybrid Cloud
5. Cloud Managed Services / CloudOps
6. Cloud Security
7. FinOps / Cloud Economics
8. Infrastructure as Code
9. Platform Engineering / Internal Developer Platforms

**AI & Machine Learning:**
1. AI Strategy & Roadmap
2. Generative AI (LLM, RAG, fine-tuning, prompt engineering)
3. Machine Learning Engineering (model dev, training, deployment)
4. MLOps (pipelines, monitoring, lifecycle management)
5. Computer Vision
6. Natural Language Processing
7. Conversational AI (chatbots, virtual agents)
8. Responsible/Ethical AI (governance, bias, explainability)
9. Intelligent Automation (RPA + AI convergence)
10. Data Science & Advanced Analytics

---

## PART 2: AUDIT OF OUR CURRENT SERVICES

### Section 4.2: Full-Stack Application Development — AUDIT

**What we have:**
- Backend Development (.NET 10, ASP.NET Core, Web API)
- Frontend Development (React 21, Angular 21, Next.js, Vue.js)
- Real-time Applications (SignalR, WebSockets)
- PWAs
- RESTful API Design & Development
- GraphQL Implementation
- Microservices Architecture
- Event-Driven Architecture (Dapr, Azure Service Bus)
- Blazor Applications
- Responsive UI/UX Design
- SPA, Mobile-First, Cross-Platform

**Gap Analysis:**

| Gap | Severity | Who Has It |
|-----|----------|-----------|
| **No "Application Modernization" as explicit service** | HIGH | ALL 9 competitors list this prominently. It's often one of the biggest revenue drivers. We mention it nowhere in 4.2. |
| **No "Quality Engineering / Testing" service** | HIGH | 8/9 competitors have a dedicated QE offering. We only mention it in DevOps (4.5) as "Automated Testing Integration." |
| **No "Product Engineering" framing** | MEDIUM-HIGH | 7/9 competitors explicitly offer Product Engineering (strategy, MVP, lifecycle, scaling). We frame everything as "development," not "product." |
| **No "Platform Engineering" service** | MEDIUM | ThoughtWorks, EPAM, Accenture, Slalom all emphasize internal developer platforms, golden paths, DevEx. Missing from our offerings. |
| **Missing mobile as explicit service** | MEDIUM | We say "Mobile-First Development" and "Cross-Platform Development" as line items but don't specify technologies (React Native, Flutter, .NET MAUI) or frame it as a distinct capability. |
| **No "Architecture Advisory" or consulting** | MEDIUM | ThoughtWorks, EPAM, Accenture offer architecture advisory as a service (ADRs, fitness functions, architecture review). We don't. |
| **Low-code/No-code absent** | LOW-MEDIUM | 6/9 competitors offer this. Power Platform is in our tech stack (via Azure) but not listed as a service. |
| **Naming convention: "Full-Stack Application Development"** | NAMING | Industry prefers "Software Engineering" or "Application Services." "Full-Stack" sounds like a job title, not a service offering. |

**What we have that's good:**
- Strong technology specificity (exact frameworks, versions)
- Event-driven architecture mention (Dapr is differentiated)
- Real-time applications (SignalR/WebSockets — not all competitors call this out)
- GraphQL (not universally listed by competitors)

---

### Section 4.1: Cloud Engineering & Infrastructure — AUDIT

**What we have:**
- Cloud Architecture Design & Review
- Azure & AWS Migration (On-Premises to Cloud)
- Infrastructure as Code (Terraform, ARM Templates, Bicep)
- Azure Services (App Services, Container Apps, Functions, Durable Functions)
- Container Orchestration (Kubernetes, ACR)
- Serverless Architecture
- Azure Service Bus, Logic Apps, Event Grid
- Cost Optimization & FinOps
- Azure Virtual Networks, VPN Gateway, ExpressRoute
- Disaster Recovery & Business Continuity

**Gap Analysis:**

| Gap | Severity | Who Has It |
|-----|----------|-----------|
| **No "Cloud Strategy" as first service** | HIGH | ALL 9 competitors lead with Cloud Strategy & Assessment/Readiness. We jump straight to "Architecture Design & Review." Strategy = business case, readiness assessment, roadmap, operating model design. |
| **No "Cloud-Native Engineering" framing** | MEDIUM-HIGH | 8/9 competitors have this as a distinct sub-service. We list containers/serverless as capabilities but don't frame cloud-native as a practice. |
| **No "Platform Engineering" / IDP** | MEDIUM-HIGH | Rapidly growing service area. ThoughtWorks, Accenture, EPAM all emphasize internal developer platforms, self-service infrastructure. |
| **No "Cloud Security" as sub-service** | MEDIUM | We have a separate Security section (4.7), but 8/9 competitors include Cloud Security within their cloud offering (CSPM, zero trust, cloud IAM). |
| **No "Site Reliability Engineering" (SRE)** | MEDIUM | ThoughtWorks, Accenture, EPAM, Slalom offer SRE. We have "Monitoring & Observability" in DevOps but no SRE framing. |
| **No "Multi-Cloud" framing** | MEDIUM | We say "Azure & AWS" but don't explicitly offer multi-cloud management, governance, or orchestration as a service. |
| **"FinOps" is underdeveloped** | LOW-MEDIUM | We list "Cost Optimization & FinOps" as one line item. Competitors offer it as a practice with tagging strategy, showback/chargeback, unit economics, governance. |
| **No "Observability" as explicit service** | LOW-MEDIUM | OpenTelemetry, Grafana, distributed tracing — growing service area. We only mention Application Insights. |
| **Missing GCP entirely** | LOW | Several competitors are multi-cloud. We only list Azure & AWS. Whether we add GCP depends on strategy. |

**What we have that's good:**
- Strong Azure depth (specific services like Durable Functions, Event Grid, Logic Apps — shows real expertise)
- IaC specificity (Terraform, ARM, Bicep)
- DR & Business Continuity (not all competitors list this)
- Networking detail (VPN Gateway, ExpressRoute)

---

### Section 4.3: AI & Machine Learning Solutions — AUDIT

**What we have:**
- LLM Integration
- RAG Systems
- Agentic AI Workflow Automation
- Azure AI Foundry
- LangChain & LangGraph
- Semantic Kernel
- Azure Cognitive Search
- Document Intelligence & OCR
- Custom AI Model Development
- Vector Database Implementation
- Prompt Engineering & Optimization
- AI-Powered Chatbots & Virtual Assistants
- NLP
- Computer Vision
- AI Strategy Consulting
- AI Ethics & Governance

**Gap Analysis:**

| Gap | Severity | Who Has It |
|-----|----------|-----------|
| **No "MLOps" as explicit service** | HIGH | 8/9 competitors have MLOps (model lifecycle, pipelines, monitoring, retraining, feature stores, experiment tracking). We mention none of this. |
| **No "Machine Learning Engineering" framing** | HIGH | We jump to specific tech (LangChain, Semantic Kernel) without the broader ML engineering service (model development, training, deployment, monitoring). Competitors frame this as a core practice. |
| **No "Generative AI" as a category name** | MEDIUM-HIGH | Every competitor now uses "Generative AI" as a top-level category. We list capabilities (LLM, RAG, Agentic AI) but don't group them under the GenAI banner. |
| **No "Intelligent Automation" / RPA+AI** | MEDIUM | 7/9 competitors offer the convergence of RPA + AI + process mining as a service. We don't mention it. |
| **No "Data Science" / Analytics framing** | MEDIUM | Predictive modeling, statistical analysis, experimentation platforms — we don't offer this. Competitors distinguish between ML engineering and data science as practices. |
| **"Responsible AI" is underdeveloped** | MEDIUM | We list "AI Ethics & Governance" as a line item. Competitors have extensive practices: bias detection tools, explainability frameworks, model risk management, regulatory compliance (EU AI Act). |
| **No "Conversational AI" as distinct service** | LOW-MEDIUM | We say "AI-Powered Chatbots & Virtual Assistants." Competitors use "Conversational AI" as a richer category including voice assistants, multi-channel, omnichannel. |
| **Missing "AI-Powered Decision Intelligence"** | LOW-MEDIUM | Optimization, simulation, prescriptive analytics — Accenture and Deloitte both offer this. |
| **Missing "AIOps" (AI for IT Operations)** | LOW | Infosys, Capgemini, Wipro, Cognizant all offer AIOps. Whether we offer this depends on our target market. |
| **No industry-specific AI packaging** | LOW | Large competitors package AI by industry (healthcare AI, FSI AI, retail AI). May not apply at our scale. |

**What we have that's good:**
- "Agentic AI Workflow Automation" — very current, not all competitors list this yet. This is a DIFFERENTIATOR.
- Specific framework expertise (LangChain, LangGraph, Semantic Kernel) — shows hands-on capability
- Vector database specificity (ChromaDB, Azure AI Search)
- Azure AI Foundry — shows Microsoft AI ecosystem depth
- Document Intelligence & OCR — practical, high-demand service

---

## PART 3: REFINEMENT RECOMMENDATIONS

### A. Software Engineering (rename from "Full-Stack Application Development")

**FINALIZED sub-services** (each independently deliverable):

1. **Custom Software Development**
   - Full-stack web application development (.NET, React, Angular, Next.js, Vue.js)
   - RESTful API & GraphQL design and development
   - Real-time applications (SignalR, WebSockets)
   - Progressive Web Apps (PWA)
   - Event-driven architecture (Dapr, Azure Service Bus)
   - Microservices architecture design and implementation
   - Product engineering approach (MVP, lifecycle, scaling) embedded in delivery

2. **Application Modernization**
   - Legacy system assessment and roadmap
   - Monolith-to-microservices decomposition
   - Re-platforming and re-architecting
   - Cloud-native transformation
   - Incremental modernization (strangler fig pattern)
   - Technical debt reduction

3. **Mobile & Cross-Platform Development**
   - Native mobile development (iOS, Android)
   - Cross-platform (React Native, Flutter, .NET MAUI)
   - Mobile-first responsive design
   - PWA development

4. **Quality Engineering & Testing**
   - Test strategy and architecture
   - Test automation frameworks
   - Performance testing and optimization
   - Security testing (OWASP, penetration testing)
   - Continuous testing and CI integration
   - Accessibility testing

5. **Architecture Advisory**
   - Architecture assessment and review
   - Evolutionary architecture design
   - Architecture Decision Records (ADRs)
   - Technology stack evaluation
   - Scalability and performance architecture

6. **IT Consulting**
   - Technology strategy and roadmap development
   - Digital transformation assessment
   - Vendor evaluation and selection
   - Build vs. buy analysis
   - Technology due diligence
   - IT process optimization

---

### B. Cloud Engineering & Infrastructure

**FINALIZED sub-services** (each independently deliverable):

1. **Cloud Strategy & Assessment**
   - Cloud readiness assessment
   - Business case development
   - Cloud migration roadmap
   - Cloud operating model design
   - Multi-cloud vs single-cloud strategy

2. **Cloud Migration & Modernization**
   - Azure & AWS migration (on-premises to cloud)
   - Application migration (re-host, re-platform, re-architect)
   - Data migration
   - Mainframe and legacy infrastructure modernization
   - Migration planning and execution

3. **Cloud Infrastructure & Operations**
   - Infrastructure as Code (Terraform, ARM Templates, Bicep, Pulumi)
   - Container orchestration (Kubernetes, Azure Container Apps)
   - Serverless architecture (Azure Functions, Durable Functions, AWS Lambda)
   - Cloud networking (Azure Virtual Networks, VPN Gateway, ExpressRoute)
   - Monitoring & observability (Application Insights, Log Analytics)
   - Disaster recovery & business continuity
   - Landing zone design and implementation

4. **Platform Engineering**
   - Internal developer platform (IDP) design and implementation
   - Self-service infrastructure
   - Developer experience (DevEx) optimization
   - Golden paths and paved roads
   - Service catalogs and developer portals

5. **FinOps & Cloud Cost Optimization**
   - Cost optimization and right-sizing
   - Resource governance and tagging strategy
   - Showback/chargeback implementation
   - Reserved instance and savings plan management
   - Cloud spend forecasting

---

### C. AI & Machine Learning

**FINALIZED sub-services** (each independently deliverable):

1. **AI Strategy & Consulting**
   - AI maturity assessment
   - AI use case identification and prioritization
   - AI roadmap and business case development
   - AI operating model design
   - Responsible AI framework and governance
   - AI readiness assessment

2. **Generative AI**
   - Large Language Model (LLM) integration and deployment
   - Retrieval-Augmented Generation (RAG) systems
   - Agentic AI workflow automation *(differentiator)*
   - Custom model fine-tuning
   - Prompt engineering and optimization
   - Azure OpenAI Service, Azure AI Foundry
   - Multi-model orchestration (LangChain, LangGraph, Semantic Kernel)
   - MLOps capabilities embedded (pipelines, model monitoring, vector databases)

3. **NLP & Document AI**
   - Document Intelligence & OCR
   - Text analytics and classification
   - Sentiment analysis and entity extraction
   - Semantic search
   - Azure AI Search

4. **Conversational AI**
   - AI-powered chatbots and virtual assistants
   - Voice assistants and voice interfaces
   - Multi-channel conversational experiences
   - Knowledge-base-powered support agents

5. **Computer Vision**
   - Image classification and object detection
   - Video analytics
   - Visual inspection and quality control
   - Document and receipt scanning

6. **Intelligent Automation**
   - AI-augmented workflow automation
   - Intelligent document processing
   - Process mining + AI
   - Cognitive automation
   - AI-powered decision support

---

## PART 4: FINALIZED SERVICE STRUCTURE SUMMARY

Two-tier model: **core services** (independently deliverable) + **client-facing landing pages** (SEO/audience-specific pages that map to core services).

### Software Engineering — 6 core services + 6 landing pages

**Core services:**
| # | Service | Client buys this when... |
|---|---------|-------------------------|
| 1 | Custom Software Development | "Build me a web application" |
| 2 | Application Modernization | "Transform my legacy system" |
| 3 | Mobile & Cross-Platform Development | "Build me a mobile app" |
| 4 | Quality Engineering & Testing | "Test my existing codebase / set up QA" |
| 5 | Architecture Advisory | "Review my architecture / help me choose a tech stack" |
| 6 | IT Consulting | "Help me figure out the right technology approach" |

**Landing pages (map to core services):**
| Page | Maps to | Audience |
|------|---------|----------|
| Product Discovery | Architecture Advisory + Custom Software Dev | Clients with an idea, need help defining scope |
| MVP Development | Custom Software Dev | Startups validating a product idea |
| SaaS Software Development | Custom Software Dev | Companies building subscription products |
| Software Dev for Startups | Custom Software Dev | Early/growth-stage startups |
| Web App Development | Custom Software Dev | Businesses needing web applications |
| UI/UX Design | Custom Software Dev | Clients needing design services |

### Cloud Engineering & Infrastructure — 5 core services + 2 additional menu items

**Core services:**
| # | Service | Client buys this when... |
|---|---------|-------------------------|
| 1 | Cloud Strategy & Assessment | "Help me plan my cloud journey" |
| 2 | Cloud Migration & Modernization | "Move my systems to the cloud" |
| 3 | Cloud Infrastructure & Operations | "Set up / manage my cloud infrastructure" |
| 4 | Platform Engineering | "Build me an internal developer platform" |
| 5 | FinOps & Cloud Cost Optimization | "Reduce my cloud spend" |

**Additional menu items:**
| Page | Maps to | Note |
|------|---------|------|
| DevOps | Cloud Infrastructure & Operations | High-traffic search term, client-facing page |
| Security & Compliance | Standalone | Separate service area, not part of 3-pillar refinement |

### AI & Machine Learning — 6 core services (1:1 with menu)

| # | Service | Client buys this when... |
|---|---------|-------------------------|
| 1 | AI Strategy & Consulting | "Help me figure out where AI fits" |
| 2 | Generative AI | "Build me a RAG system / AI agent / LLM integration" |
| 3 | NLP & Document AI | "Automate my document processing / build intelligent search" |
| 4 | Conversational AI | "Build me a chatbot / virtual assistant" |
| 5 | Computer Vision | "Build visual inspection / image recognition" |
| 6 | Intelligent Automation | "Automate these workflows using AI" |

**Totals: 17 core services + 8 landing pages = 25 menu items across 3 pillars + Technologies column.**  
**Canonical reference: `docs/services-catalog.md`**

---

## PART 5: COMPETITIVE POSITIONING NOTES

### Where we differentiate vs. large firms:

1. **Agentic AI** — we list "Agentic AI Workflow Automation." Most large competitors haven't prominently positioned this yet. LEAN INTO THIS.
2. **Framework specificity** — LangChain, LangGraph, Semantic Kernel, Dapr, ChromaDB shows hands-on engineering (vs. large firms who list broad categories).
3. **Azure depth** — Durable Functions, Event Grid, Logic Apps, Bicep shows deep platform expertise. Large firms spread across all clouds.
4. **Speed and agility** — we deliver faster without the overhead of Accenture/Deloitte/Capgemini.
5. **Engineering culture** — positioned closer to ThoughtWorks/EPAM (engineering-first) vs. Accenture/Deloitte (consulting-first).

### What NOT to copy from large firms:

- Enterprise platform plays (SAP, Salesforce, Oracle) — unless this is part of our strategy
- Managed services / outsourcing — different business model
- Industry-specific sub-practices — premature at our scale
- Branded platforms (like "Perform AI" or "Cobalt") — creates marketing overhead without scale to justify it

### Removed from initial recommendations (failed standalone test):

- Product Engineering → merged into Custom Software Dev as delivery approach
- Cloud-Native Engineering → absorbed into Cloud Infrastructure & Operations
- Infrastructure as Code → absorbed into Cloud Infrastructure & Operations
- Cloud Security → stays in existing Security & Compliance (4.7), referenced from cloud
- Observability & SRE → absorbed into Cloud Infrastructure & Operations
- Networking & Connectivity → absorbed into Cloud Infrastructure & Operations
- ML Engineering → removed (not a current capability)
- MLOps & AI Infrastructure → embedded into Generative AI delivery
- AI Ethics & Responsible AI → absorbed into AI Strategy & Consulting
