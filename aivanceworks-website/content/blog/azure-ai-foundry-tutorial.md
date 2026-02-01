---
title: "What Is Azure AI Foundry? Complete Getting Started Tutorial"
description: "Learn Azure AI Foundry with this step-by-step tutorial. Discover enterprise AI features, model deployment, and security capabilities for production AI applications."
author: "Dr. Sarah Chen"
authorRole: "Lead AI Architect at AIvanceWorks"
date: "2026-02-01"
category: "AI & Machine Learning"
tags: ["Azure AI Foundry", "Azure OpenAI", "Enterprise AI", "Microsoft AI", "LLM Deployment"]
keywords: ["Azure AI Foundry tutorial", "Azure AI Foundry getting started", "Azure OpenAI tutorial", "enterprise AI platform", "Microsoft AI Foundry"]
slug: "azure-ai-foundry-tutorial"
excerpt: "Azure AI Foundry (now Microsoft Foundry) is Microsoft's unified platform for building, deploying, and managing enterprise AI applications. It provides enterprise-grade security, 1,400+ data connectors, and streamlined access to 70+ AI models including GPT-4, Claude, and Llama—all within your Azure environment."
---

**Azure AI Foundry (now Microsoft Foundry) is Microsoft's unified platform for building, deploying, and managing enterprise AI applications.** It provides enterprise-grade security, 1,400+ data connectors, and streamlined access to 70+ AI models including GPT-4, Claude, and Llama—all within your Azure environment. With over 70,000 customers processing 100 trillion tokens quarterly, it's become the go-to platform for enterprises serious about production AI.

As organizations race to adopt AI, the challenge isn't just about accessing powerful models—it's about doing so securely, at scale, and with enterprise-grade governance. Azure AI Foundry addresses this by combining Microsoft's cloud infrastructure with comprehensive AI development tools, making it possible to build production-ready AI applications without compromising on security or compliance.

## What Is Azure AI Foundry and Why Should You Use It?

Azure AI Foundry is Microsoft's enterprise AI platform that unifies agents, models, and tools under a single management system with built-in enterprise-readiness capabilities including tracing, monitoring, evaluations, and customizable configurations.

**The platform was recently rebranded from "Azure AI Foundry" to "Microsoft Foundry,"** though both names appear in current documentation. The rebrand reflects Microsoft's vision of AI as a foundational capability across their entire ecosystem, not just an Azure service.

### Why Enterprises Choose Azure AI Foundry

According to [Microsoft's Q1 FY 2026 earnings report](https://futurumgroup.com/insights/microsoft-q1-fy-2026-cloud-and-ai-fuel-broad-based-growth/), Azure OpenAI Service now serves **230,000 organizations** with a **$13 billion AI revenue run rate**. Among Fortune 500 companies, adoption rates are even more impressive:

- **95% of Fortune 500 companies** have adopted Azure
- **80% of Fortune 500 companies** adopted Azure AI Foundry in 2025
- **Over 90% of Fortune 500** are using Microsoft 365 Copilot

The platform's appeal stems from several enterprise-critical capabilities:

1. **Enterprise Security & Compliance**: Built-in certifications including SOC 2, ISO 27001, GDPR, and HIPAA. According to [Redress Compliance's comparison](https://redresscompliance.com/comparing-azure-openai-vs-openai-for-enterprise-use/), "For heavily regulated industries, Azure OpenAI offers enterprise-grade security and compliance...Microsoft provides added security layers such as Key Vault."

2. **Data Privacy Guarantee**: Unlike OpenAI's direct API where prompts may be used to improve models unless you opt out, Azure AI Foundry ensures your data remains private. As [Private AI notes](https://www.private-ai.com/en/blog/openai-vs-azure-openai), "Azure OpenAI emphasizes secure data management with encrypted storage and isolation."

3. **Unified Access to 70+ Models**: Access flagship models from OpenAI, Anthropic Claude, Meta, Mistral AI, DeepSeek, xAI, Cohere, and more through serverless pay-as-you-go or managed compute options.

4. **Enterprise Data Integration**: Connect to **1,400+ enterprise data sources** including SharePoint, Microsoft Fabric, and third-party systems with ready-to-use templates and connectors.

5. **Performance Consistency**: According to [Medium's benchmarking study](https://medium.com/@anavalamudi/benchmarking-azure-openai-vs-openai-api-a-hands-on-performance-comparison-67f082418b3f), "Azure's text-embedding-ada-002 outputs are identical given the same input, whereas OpenAI's outputs are noisy," making Azure more deterministic for production workloads.

## How Do You Get Started with Azure AI Foundry?

Getting started with Azure AI Foundry requires an Azure subscription and basic understanding of cloud concepts. Here's your step-by-step path from zero to your first AI application.

### Prerequisites

Before diving in, ensure you have:

- **Azure Subscription**: Active Azure account with contributor-level access
- **Resource Group**: Dedicated resource group for AI Foundry resources
- **Azure OpenAI Access**: Request access through Azure portal (approval typically takes 1-2 business days)
- **Development Environment**: Python 3.8+, Node.js 16+, or .NET 6+ depending on your preferred language

### Step 1: Create Your Azure AI Foundry Project

Microsoft provides an [official quickstart guide](https://learn.microsoft.com/en-us/azure/ai-foundry/quickstarts/get-started-code?view=foundry-classic) for code-first development. Here's the streamlined process:

**Via Azure Portal:**

1. Navigate to [ai.azure.com](https://ai.azure.com)
2. Click "Create new project"
3. Configure your project:
   - **Project name**: Choose a descriptive name (e.g., "customer-support-ai")
   - **Resource group**: Select or create new
   - **Region**: Choose based on data residency requirements (East US, West Europe, etc.)
   - **Azure OpenAI resource**: Link existing or create new
4. Configure Role-based access control (RBAC) for team members
5. Set up networking (public endpoint or private link)

**Via Azure CLI:**

```bash
# Create resource group
az group create --name ai-foundry-rg --location eastus

# Create Azure AI Foundry project
az ml workspace create \
  --name customer-support-ai \
  --resource-group ai-foundry-rg \
  --location eastus
```

### Step 2: Install the Foundry SDK

Azure AI Foundry supports Python, TypeScript, Java, and C#. Here's installation for each:

**Python:**
```bash
pip install azure-ai-foundry
pip install azure-identity
```

**TypeScript/Node.js:**
```bash
npm install @azure/ai-foundry
npm install @azure/identity
```

**.NET/C#:**
```bash
dotnet add package Azure.AI.Foundry
dotnet add package Azure.Identity
```

### Step 3: Authenticate and Connect

Authentication uses Azure Active Directory (Azure AD) for enhanced security:

**Python Example:**
```python
from azure.ai.foundry import AIProjectClient
from azure.identity import DefaultAzureCredential

# Authenticate using Azure AD
credential = DefaultAzureCredential()

# Connect to your project
project_client = AIProjectClient(
    credential=credential,
    subscription_id="your-subscription-id",
    resource_group="ai-foundry-rg",
    project_name="customer-support-ai"
)

print(f"Connected to project: {project_client.project_name}")
```

**TypeScript Example:**
```typescript
import { AIProjectClient } from "@azure/ai-foundry";
import { DefaultAzureCredential } from "@azure/identity";

const credential = new DefaultAzureCredential();
const client = new AIProjectClient(
  credential,
  "your-subscription-id",
  "ai-foundry-rg",
  "customer-support-ai"
);

console.log(`Connected to project: ${client.projectName}`);
```

### Step 4: Deploy Your First Model

Choose from 70+ available models. Here's how to deploy GPT-4:

**Via Azure Portal:**
1. Navigate to your AI Foundry project
2. Go to "Deployments" → "Create deployment"
3. Select model: GPT-4 (or gpt-4-turbo for faster responses)
4. Choose deployment type:
   - **Standard (Pay-as-you-go)**: Billed per token
   - **Provisioned Throughput**: Reserved capacity for predictable costs
5. Configure capacity and scale settings
6. Deploy (takes 2-3 minutes)

**Via Python SDK:**
```python
from azure.ai.foundry import AIProjectClient
from azure.identity import DefaultAzureCredential

client = AIProjectClient(
    credential=DefaultAzureCredential(),
    subscription_id="your-subscription-id",
    resource_group="ai-foundry-rg",
    project_name="customer-support-ai"
)

# Create deployment
deployment = client.deployments.create_or_update(
    deployment_name="gpt4-deployment",
    model_name="gpt-4",
    sku_name="Standard",
    capacity=10  # Tokens per minute in thousands
)

print(f"Deployment created: {deployment.name}")
print(f"Endpoint: {deployment.endpoint}")
```

### Step 5: Make Your First AI Request

Once deployed, you can start making requests:

**Python Example:**
```python
from openai import AzureOpenAI

# Initialize client
client = AzureOpenAI(
    api_key="your-api-key",
    api_version="2024-02-15-preview",
    azure_endpoint="https://your-resource.openai.azure.com/"
)

# Make completion request
response = client.chat.completions.create(
    model="gpt4-deployment",
    messages=[
        {"role": "system", "content": "You are a helpful customer support assistant."},
        {"role": "user", "content": "How do I reset my password?"}
    ],
    temperature=0.7,
    max_tokens=500
)

print(response.choices[0].message.content)
```

**Response tracking** is built-in with Azure AI Foundry's observability features, automatically logging latency, token usage, and costs in Azure Monitor.

## What Are the Key Features of Azure AI Foundry?

Azure AI Foundry provides a comprehensive suite of enterprise AI capabilities that go far beyond simple model access.

### 1. Unified Model Catalog

Access **70+ AI models** through a single interface:

- **OpenAI Models**: GPT-4, GPT-4 Turbo, GPT-3.5, DALL-E 3
- **Anthropic Claude**: Claude 3 Opus, Sonnet, Haiku
- **Meta**: Llama 3.1 (70B, 405B), Llama 2
- **Mistral AI**: Mistral Large, Mistral 7B
- **Open Source**: Phi-3, DeepSeek, Cohere Command, Gemini (via API)

According to [Microsoft's announcement](https://azure.microsoft.com/en-us/blog/announcing-new-models-customization-tools-and-enterprise-agent-upgrades-in-azure-ai-foundry/), the catalog includes "flagship models—including Azure OpenAI, Anthropic Claude, Meta, Mistral AI, DeepSeek, xAI, Cohere, HuggingFace, NVIDIA, and more."

### 2. Foundry Agent Service

Build autonomous AI agents that can:
- Execute multi-step workflows
- Connect to external tools and APIs
- Make decisions based on context
- Orchestrate between multiple models

**Example use case**: A customer support agent that can check order status (via API), process refunds (via internal system), and escalate complex issues to humans—all autonomously.

The platform supports **Model Context Protocol (MCP)** and **Agent-to-Agent (A2A)** communication with full authentication, enabling secure agent orchestration at scale.

### 3. Foundry IQ: Enterprise RAG Engine

**Foundry IQ** is the platform's Retrieval-Augmented Generation (RAG) system powered by Azure AI Search. It enables:

- **Secure data grounding**: Connect AI to your proprietary data
- **Multi-source integration**: Single entry point for multiple data sources
- **Permission-aware RAG**: Respects user access controls from source systems
- **Vector and hybrid search**: Combines semantic and keyword search

**Real-world application**: A legal AI assistant can search across thousands of contracts (stored in SharePoint), case law databases, and internal memos—but only shows results the user has permission to access.

### 4. Enterprise Connectivity

Pre-built connectors to **1,400+ enterprise systems**:

- **Microsoft Ecosystem**: SharePoint, OneDrive, Microsoft Fabric, Dynamics 365
- **Databases**: SQL Server, Cosmos DB, MongoDB, PostgreSQL
- **SaaS Applications**: Salesforce, ServiceNow, SAP
- **Custom APIs**: REST and GraphQL endpoints

### 5. Comprehensive Observability

Built-in monitoring through the **Operate** section:

- **Agent health monitoring**: Track performance across your AI fleet
- **Token usage analytics**: Understand and optimize costs
- **Latency tracking**: Identify bottlenecks
- **Error tracking**: Debug failures with detailed logs
- **Multi-cloud agent registration**: Monitor agents deployed outside Azure

According to Microsoft, you can "observe, optimize, and manage 100% of your AI assets (agents, models, tools) in one place," with alerts when an agent or model requires attention.

### 6. Advanced Security Features

**Azure AI Agent Service** enables:
- **Private networking**: All AI interactions remain within your VNet
- **No public internet exposure**: Data never leaves your network perimeter
- **Azure Key Vault integration**: Secure credential management
- **Azure Policy integration**: Enforce governance at scale
- **Unified RBAC**: Single access control model across all resources

### 7. Model Customization & Fine-Tuning

Fine-tune models on your data:
- **Supervised fine-tuning**: Improve accuracy for domain-specific tasks
- **RLHF (Reinforcement Learning from Human Feedback)**: Align models to your preferences
- **Prompt engineering tools**: Built-in prompt optimization
- **Evaluation frameworks**: Measure model performance with custom metrics

## How Does Azure AI Foundry Compare to OpenAI Direct API?

Choosing between Azure AI Foundry and OpenAI's direct API is one of the most common questions enterprises face. Here's a data-driven comparison:

### Performance Comparison

| Metric | Azure AI Foundry | OpenAI Direct API | Source |
|--------|------------------|-------------------|--------|
| **Average Response Time** | 8.93 seconds | 21.91 seconds | [Medium Benchmark](https://medium.com/@anavalamudi/benchmarking-azure-openai-vs-openai-api-a-hands-on-performance-comparison-67f082418b3f) |
| **Output Consistency** | Identical outputs for same input | Noisy/variable outputs | [WillowTree Apps](https://www.willowtreeapps.com/craft/openai-or-azure-openai-can-models-be-more-deterministic-depending-on-api) |
| **Model Availability Lag** | 2-4 weeks behind OpenAI | Immediate on release | [US Cloud](https://www.uscloud.com/blog/the-differences-between-openai-and-microsoft-azure-openai/) |
| **Uptime SLA** | 99.9% (multi-zone) | Best-effort | [Microsoft Azure](https://azure.microsoft.com/en-us/support/legal/sla/) |

**Performance varies by region and workload.** Some users report opposite results, with OpenAI direct API responding in 6-7 seconds vs Azure's 15-18 seconds. Test both in your target region.

### Feature Comparison

| Feature | Azure AI Foundry | OpenAI Direct API |
|---------|------------------|-------------------|
| **Enterprise Security (SOC 2, HIPAA, GDPR)** | ✅ Built-in | ❌ API-level only |
| **Data Privacy** | ✅ Never used for training | ⚠️ Used unless opted out |
| **Private Networking (VNet)** | ✅ Full support | ❌ Not available |
| **Microsoft Integration (Power BI, Fabric)** | ✅ Native | ⚠️ Custom required |
| **Multi-Model Access (70+ models)** | ✅ Single platform | ❌ OpenAI models only |
| **Enterprise Connectors (1,400+)** | ✅ Pre-built | ❌ Build yourself |
| **Role-Based Access Control** | ✅ Azure AD integration | ⚠️ API key management |
| **24/7 Enterprise Support** | ✅ With Azure support plan | ⚠️ Email-based |
| **Observability & Monitoring** | ✅ Azure Monitor integration | ⚠️ Limited dashboard |

### Pricing Comparison

Both platforms charge per token, but Azure offers more flexibility:

**OpenAI Direct API:**
- Pay-as-you-go only
- GPT-4 Turbo: ~$10/1M input tokens, ~$30/1M output tokens
- No volume discounts

**Azure AI Foundry:**
- **Standard (Pay-as-you-go)**: Similar to OpenAI pricing
- **Provisioned Throughput (PTUs)**: Reserved capacity with predictable monthly costs
- **Batch API**: 50% discount for 24-hour completion windows

According to [Oreate AI's pricing analysis](https://www.oreateai.com/blog/navigating-the-ai-cost-maze-azure-openai-vs-openai-api-pricing/), "Azure's Batch API offers a 50% discount by accepting completions within 24 hours," making it significantly cheaper for non-real-time workloads.

### When to Choose Each

**Choose Azure AI Foundry if:**
- ✅ You need enterprise security/compliance (HIPAA, SOC 2, GDPR)
- ✅ You handle regulated or sensitive data
- ✅ You want predictable costs (PTU model)
- ✅ You're already in the Microsoft ecosystem
- ✅ You need private networking/VNet integration
- ✅ You require 99.9% uptime SLA
- ✅ You want access to multiple model providers (Claude, Llama, etc.)

**Choose OpenAI Direct API if:**
- ✅ You need newest models immediately (2-4 weeks faster)
- ✅ You're building a low-stakes prototype
- ✅ You prioritize simplicity over governance
- ✅ You don't handle regulated data
- ✅ You prefer vendor-agnostic approach

As [ProArch summarizes](https://www.proarch.com/blog/microsoft-azure-openai-vs-openai-how-do-you-choose): "The choice often comes down to the scale of your project, your existing cloud infrastructure, your data privacy requirements, and your budget predictability."

## How Do You Deploy Models in Azure AI Foundry?

Model deployment in Azure AI Foundry offers flexibility for different use cases and scale requirements.

### Deployment Types

**1. Standard (Pay-As-You-Go) Deployment**

Best for: Variable workloads, development, testing

```python
from azure.ai.foundry import AIProjectClient
from azure.identity import DefaultAzureCredential

client = AIProjectClient(
    credential=DefaultAzureCredential(),
    subscription_id="your-sub-id",
    resource_group="ai-foundry-rg",
    project_name="my-project"
)

# Deploy with standard pricing
deployment = client.deployments.create_or_update(
    deployment_name="gpt4-standard",
    model_name="gpt-4-turbo",
    sku_name="Standard",
    capacity=120  # TPM (tokens per minute)
)
```

**Pricing**: Pay only for tokens consumed
**Scaling**: Auto-scales based on demand
**Best for**: Unpredictable traffic patterns

**2. Provisioned Throughput Units (PTU) Deployment**

Best for: Production workloads, predictable costs, high volume

```python
# Deploy with reserved capacity
deployment = client.deployments.create_or_update(
    deployment_name="gpt4-production",
    model_name="gpt-4",
    sku_name="ProvisionedManaged",
    capacity=100  # PTU units
)
```

**Pricing**: Monthly/annual commitment for reserved capacity
**Scaling**: Fixed throughput, no throttling
**Best for**: Production applications with consistent traffic

**Cost example**: 100 PTUs ≈ $30,000-$50,000/month depending on model and region

**3. Batch API Deployment**

Best for: Non-real-time processing, 50% cost savings

```python
# Submit batch job
batch_job = client.batch.create(
    deployment_name="gpt4-batch",
    input_file="customer_queries.jsonl",
    completion_window="24h"
)

# Check status
status = client.batch.get(batch_job.id)
print(f"Status: {status.status}")
```

**Pricing**: 50% cheaper than standard
**Processing time**: Within 24 hours
**Best for**: Data labeling, bulk content generation, report generation

### Multi-Model Deployment Strategy

For production systems, deploy multiple models for different use cases:

```python
# Fast, cheap model for simple queries
gpt35_deployment = client.deployments.create_or_update(
    deployment_name="gpt35-quick",
    model_name="gpt-3.5-turbo",
    sku_name="Standard",
    capacity=240
)

# Advanced model for complex reasoning
gpt4_deployment = client.deployments.create_or_update(
    deployment_name="gpt4-advanced",
    model_name="gpt-4-turbo",
    sku_name="Standard",
    capacity=60
)

# Embedding model for search
embedding_deployment = client.deployments.create_or_update(
    deployment_name="text-embedding",
    model_name="text-embedding-ada-002",
    sku_name="Standard",
    capacity=120
)
```

**Cost optimization strategy**: Route simple queries to GPT-3.5 ($0.50/1M tokens) and complex queries to GPT-4 ($10/1M tokens), reducing costs by 60-70% while maintaining quality.

### Deployment Best Practices

1. **Start with Standard, move to PTU at scale**: Validate your use case with pay-as-you-go, then switch to PTU once traffic is predictable (typically > $10K/month spend)

2. **Use rate limiting**: Prevent runaway costs with Azure API Management
   ```python
   # Configure rate limits
   client.deployments.update_settings(
       deployment_name="gpt4-production",
       rate_limit_per_minute=10000,
       burst_capacity=15000
   )
   ```

3. **Enable content filtering**: Built-in safety guardrails
   - Hate speech detection
   - Violence/self-harm prevention
   - Sexual content filtering
   - Customizable severity thresholds

4. **Monitor token usage**: Set up alerts in Azure Monitor
   ```python
   # Get usage metrics
   metrics = client.deployments.get_metrics(
       deployment_name="gpt4-production",
       time_range="last_7_days"
   )

   print(f"Total tokens: {metrics.total_tokens}")
   print(f"Average latency: {metrics.avg_latency_ms}ms")
   print(f"Cost: ${metrics.total_cost}")
   ```

5. **Implement caching**: Reduce costs with semantic caching for repeated queries
   - Azure Redis Cache for exact-match caching
   - Azure AI Search for semantic similarity caching

## What Security and Compliance Features Does Azure AI Foundry Offer?

Security and compliance are where Azure AI Foundry significantly outpaces OpenAI's direct API, making it the only viable choice for regulated industries.

### Enterprise-Grade Security

**1. Private Network Integration**

Deploy AI entirely within your Azure Virtual Network:

```bash
# Create private endpoint
az network private-endpoint create \
  --name ai-foundry-pe \
  --resource-group ai-foundry-rg \
  --vnet-name corporate-vnet \
  --subnet ai-subnet \
  --private-connection-resource-id "/subscriptions/{sub-id}/resourceGroups/{rg}/providers/Microsoft.CognitiveServices/accounts/{name}" \
  --group-id account \
  --connection-name ai-foundry-connection
```

**Benefits**:
- ✅ No public internet exposure
- ✅ Traffic stays within Azure backbone
- ✅ Compatible with on-premises connectivity (ExpressRoute)
- ✅ Meets strict network isolation requirements

**2. Identity & Access Management**

Azure AD integration with granular RBAC:

- **Cognitive Services OpenAI User**: Read and call APIs
- **Cognitive Services OpenAI Contributor**: Deploy models, manage resources
- **Cognitive Services Usages Reader**: View metrics and costs
- **Custom roles**: Define granular permissions

```bash
# Grant user access to specific deployment
az role assignment create \
  --assignee user@company.com \
  --role "Cognitive Services OpenAI User" \
  --scope "/subscriptions/{sub}/resourceGroups/{rg}/providers/Microsoft.CognitiveServices/accounts/{account}/deployments/gpt4-production"
```

**3. Data Encryption**

- **At rest**: AES-256 encryption with customer-managed keys (CMK) via Azure Key Vault
- **In transit**: TLS 1.2+ for all connections
- **Processing**: Data never leaves your tenant boundary

```python
# Configure customer-managed encryption
client.workspaces.update(
    workspace_name="my-project",
    encryption={
        "key_vault_uri": "https://my-keyvault.vault.azure.net/",
        "key_name": "ai-foundry-cmk",
        "key_version": "abc123"
    }
)
```

### Compliance Certifications

Azure AI Foundry inherits Azure's comprehensive compliance portfolio:

| Certification | Description | Industries |
|---------------|-------------|------------|
| **HIPAA/HITECH** | Healthcare data protection | Healthcare, Life Sciences |
| **SOC 1, 2, 3** | Security controls audit | All |
| **ISO 27001** | Information security management | All |
| **GDPR** | EU data protection | Global |
| **FedRAMP** | US government security | Government, Defense |
| **PCI DSS** | Payment card data security | Financial Services, Retail |
| **HITRUST** | Healthcare security framework | Healthcare |

**Unlike OpenAI's direct API**, Azure allows you to sign a Business Associate Agreement (BAA) for HIPAA compliance, making it suitable for processing Protected Health Information (PHI).

### Data Residency & Sovereignty

Deploy in 60+ Azure regions worldwide to meet data residency requirements:

```python
# Deploy in EU for GDPR compliance
deployment = client.deployments.create_or_update(
    deployment_name="gpt4-eu",
    model_name="gpt-4",
    location="westeurope",  # Data stays in EU
    sku_name="Standard"
)
```

**Critical for**: EU organizations (GDPR), Canadian companies (PIPEDA), Australian entities (Privacy Act)

### Content Safety & Responsible AI

**Built-in content filtering** with customizable severity levels:

```python
from azure.ai.contentsafety import ContentSafetyClient

# Configure content filtering
safety_config = {
    "hate": {"severity": "medium", "blocking": True},
    "violence": {"severity": "medium", "blocking": True},
    "sexual": {"severity": "medium", "blocking": True},
    "self_harm": {"severity": "low", "blocking": True}
}

client.deployments.update_content_filter(
    deployment_name="gpt4-production",
    filter_config=safety_config
)
```

**Categories monitored**:
- Hate speech and discrimination
- Violence and graphic content
- Sexual content
- Self-harm and suicide
- Jailbreak attempts (prompt injection)

### Audit Logging & Compliance Reporting

**Azure Monitor integration** provides complete audit trail:

```python
# Query audit logs
from azure.monitor.query import LogsQueryClient

logs_client = LogsQueryClient(credential)

query = """
AzureDiagnostics
| where ResourceProvider == "MICROSOFT.COGNITIVESERVICES"
| where Category == "RequestResponse"
| where TimeGenerated > ago(24h)
| project TimeGenerated, CallerIPAddress, OperationName, ResultType, DurationMs
"""

response = logs_client.query_workspace(
    workspace_id="your-workspace-id",
    query=query,
    timespan=timedelta(days=1)
)
```

**Logged information**:
- API calls (timestamp, caller IP, user identity)
- Model used and tokens consumed
- Response latency and status codes
- Content filter triggers
- Failed authentication attempts

### AI Governance with Azure Policy

Enforce organizational standards at scale:

```json
{
  "policyRule": {
    "if": {
      "allOf": [
        {
          "field": "type",
          "equals": "Microsoft.CognitiveServices/accounts"
        },
        {
          "field": "Microsoft.CognitiveServices/accounts/publicNetworkAccess",
          "equals": "Enabled"
        }
      ]
    },
    "then": {
      "effect": "deny"
    }
  }
}
```

**Example policies**:
- Deny public network access (force private endpoints)
- Require customer-managed encryption keys
- Enforce specific regions for data residency
- Mandate content filtering on all deployments

## Building Your First RAG Application with Azure AI Foundry

Let's build a practical Retrieval-Augmented Generation (RAG) system that answers questions based on your company's documentation.

### Architecture Overview

```
User Query → Azure AI Search (Vector Search) → GPT-4 (Generate Answer) → User
                        ↑
                Company Documents (SharePoint/Blob Storage)
```

### Step 1: Set Up Azure AI Search

```bash
# Create Azure AI Search resource
az search service create \
  --name company-docs-search \
  --resource-group ai-foundry-rg \
  --sku standard \
  --location eastus
```

### Step 2: Index Your Documents

```python
from azure.search.documents import SearchClient
from azure.search.documents.indexes import SearchIndexClient
from azure.search.documents.indexes.models import (
    SearchIndex,
    SearchField,
    SearchFieldDataType,
    VectorSearch,
    VectorSearchProfile
)
from azure.identity import DefaultAzureCredential
from openai import AzureOpenAI

# Initialize clients
credential = DefaultAzureCredential()
openai_client = AzureOpenAI(
    api_key="your-key",
    api_version="2024-02-15-preview",
    azure_endpoint="https://your-resource.openai.azure.com/"
)

# Create search index with vector support
index_client = SearchIndexClient(
    endpoint="https://company-docs-search.search.windows.net",
    credential=credential
)

# Define index schema
index = SearchIndex(
    name="company-docs",
    fields=[
        SearchField(name="id", type=SearchFieldDataType.String, key=True),
        SearchField(name="content", type=SearchFieldDataType.String, searchable=True),
        SearchField(name="title", type=SearchFieldDataType.String, searchable=True),
        SearchField(name="url", type=SearchFieldDataType.String),
        SearchField(
            name="content_vector",
            type=SearchFieldDataType.Collection(SearchFieldDataType.Single),
            vector_search_dimensions=1536,
            vector_search_profile_name="default-profile"
        )
    ],
    vector_search=VectorSearch(
        profiles=[VectorSearchProfile(name="default-profile")]
    )
)

index_client.create_or_update_index(index)

# Function to embed text
def embed_text(text: str):
    response = openai_client.embeddings.create(
        model="text-embedding-ada-002",
        input=text
    )
    return response.data[0].embedding

# Index documents
search_client = SearchClient(
    endpoint="https://company-docs-search.search.windows.net",
    index_name="company-docs",
    credential=credential
)

documents = [
    {
        "id": "1",
        "title": "Azure AI Foundry Pricing Guide",
        "content": "Azure AI Foundry offers two pricing models: Standard pay-as-you-go and Provisioned Throughput Units (PTU)...",
        "url": "https://docs.company.com/ai-pricing",
        "content_vector": embed_text("Azure AI Foundry offers two pricing models...")
    },
    # Add more documents
]

result = search_client.upload_documents(documents=documents)
print(f"Indexed {len(result)} documents")
```

### Step 3: Build RAG Query Function

```python
from azure.search.documents.models import VectorizedQuery

def rag_query(user_question: str):
    # 1. Embed the question
    question_vector = embed_text(user_question)

    # 2. Search for relevant documents
    vector_query = VectorizedQuery(
        vector=question_vector,
        k_nearest_neighbors=3,
        fields="content_vector"
    )

    search_results = search_client.search(
        search_text=user_question,
        vector_queries=[vector_query],
        select=["title", "content", "url"],
        top=3
    )

    # 3. Build context from search results
    context = "\n\n".join([
        f"Source: {doc['title']}\n{doc['content']}"
        for doc in search_results
    ])

    # 4. Generate answer with GPT-4
    response = openai_client.chat.completions.create(
        model="gpt4-deployment",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant. Answer questions based on the provided context. If the answer isn't in the context, say so."
            },
            {
                "role": "user",
                "content": f"Context:\n{context}\n\nQuestion: {user_question}"
            }
        ],
        temperature=0.3,
        max_tokens=500
    )

    answer = response.choices[0].message.content
    sources = [{"title": doc['title'], "url": doc['url']} for doc in search_results]

    return {
        "answer": answer,
        "sources": sources
    }

# Test the RAG system
result = rag_query("What pricing models does Azure AI Foundry offer?")
print(f"Answer: {result['answer']}")
print(f"\nSources:")
for source in result['sources']:
    print(f"  - {source['title']}: {source['url']}")
```

**Output:**
```
Answer: Azure AI Foundry offers two primary pricing models: 1) Standard pay-as-you-go pricing where you pay only for the tokens consumed, ideal for variable workloads, and 2) Provisioned Throughput Units (PTU) which provide reserved capacity with predictable monthly costs, best suited for production workloads with consistent traffic.

Sources:
  - Azure AI Foundry Pricing Guide: https://docs.company.com/ai-pricing
```

### Step 4: Add Permission-Aware RAG (Foundry IQ)

For enterprise scenarios, ensure users only see documents they have access to:

```python
def permission_aware_rag(user_question: str, user_email: str):
    # Query with user's permissions
    search_results = search_client.search(
        search_text=user_question,
        vector_queries=[VectorizedQuery(vector=embed_text(user_question), k_nearest_neighbors=3, fields="content_vector")],
        filter=f"allowed_users/any(u: u eq '{user_email}')",  # Only return docs user can access
        select=["title", "content", "url"],
        top=3
    )

    # Rest of RAG logic...
```

This approach mirrors Foundry IQ's capability to respect source system permissions.

## Next Steps: Building Production AI with AIvanceWorks

Azure AI Foundry provides the enterprise foundation for AI, but successful production deployments require expertise in:

- **AI Architecture Design**: Choosing the right models, deployment patterns, and cost optimization strategies
- **Enterprise Integration**: Connecting AI to your existing systems (SharePoint, Dynamics, custom APIs)
- **Security Implementation**: Configuring private networks, compliance controls, and governance policies
- **Performance Optimization**: Fine-tuning models, implementing caching, and scaling for production traffic
- **Monitoring & Operations**: Setting up comprehensive observability and incident response

**AIvanceWorks specializes in enterprise Azure AI implementations.** Our team has delivered production AI systems for Fortune 500 companies, handling everything from initial architecture to ongoing optimization.

### Our Azure AI Foundry Services Include:

✅ **AI Strategy & Architecture**: We assess your use cases and design Azure AI solutions that balance capability, cost, and compliance
✅ **RAG System Implementation**: Build custom retrieval-augmented generation systems with Foundry IQ and Azure AI Search
✅ **Agent Development**: Create autonomous AI agents using Foundry Agent Service and MCP
✅ **Enterprise Integration**: Connect AI to your data sources with our expertise in 1,400+ connectors
✅ **Security & Compliance**: Implement private networking, HIPAA/SOC 2 compliance, and governance frameworks
✅ **Model Fine-Tuning**: Customize models on your proprietary data for domain-specific accuracy
✅ **Production Support**: Ongoing monitoring, optimization, and incident response

[**Schedule a consultation**](https://aivanceworks.com/book-consultation) to discuss your Azure AI Foundry implementation.

---

## Frequently Asked Questions

### What is the difference between Azure AI Foundry and Azure OpenAI Service?

Azure AI Foundry is the comprehensive platform that includes Azure OpenAI Service plus additional capabilities like multi-model access (Claude, Llama, Mistral), Foundry Agent Service, Foundry IQ (RAG), enterprise connectors, and unified observability. Azure OpenAI Service specifically provides access to OpenAI models (GPT-4, GPT-3.5, DALL-E). Think of Azure OpenAI as a component within the larger Azure AI Foundry ecosystem.

### How much does Azure AI Foundry cost?

Pricing varies by model and deployment type. GPT-4 Turbo costs approximately $10/1M input tokens and $30/1M output tokens on Standard (pay-as-you-go) pricing. Provisioned Throughput Units (PTUs) offer reserved capacity starting around $30,000-$50,000/month for 100 PTUs. The Batch API provides 50% discounts for non-real-time processing. Azure AI Search (for RAG) costs $250-$3,000/month depending on tier. Most production deployments cost $5,000-$50,000/month depending on scale.

### Can I use Azure AI Foundry for HIPAA-compliant healthcare applications?

Yes. Azure AI Foundry supports HIPAA compliance through Business Associate Agreements (BAA), private networking (VNet integration), data encryption with customer-managed keys, and comprehensive audit logging. This makes it suitable for processing Protected Health Information (PHI), unlike OpenAI's direct API which doesn't offer BAA. Deploy in regions that support HIPAA compliance and configure private endpoints to keep all data within your tenant boundary.

### What's the latency difference between Azure AI Foundry and OpenAI's API?

Performance varies by region and workload. One benchmark found Azure averaging 8.93 seconds vs OpenAI's 21.91 seconds (2-3× faster). However, other users report opposite results with OpenAI responding in 6-7 seconds vs Azure's 15-18 seconds. Factors affecting latency include: geographic proximity to Azure region, network configuration (private endpoint adds ~50-100ms), model deployment type (PTU has lower latency than Standard), and current load. Test both in your target deployment region for accurate comparison.

### How do I migrate from OpenAI's API to Azure AI Foundry?

Migration is straightforward as Azure AI Foundry uses OpenAI-compatible APIs. Steps: 1) Create Azure AI Foundry project and deploy your model (GPT-4, GPT-3.5, etc.), 2) Update your code to use Azure endpoints instead of api.openai.com, 3) Switch from OpenAI API keys to Azure authentication (Azure AD or API key), 4) Update the API version parameter (Azure uses versioned APIs like "2024-02-15-preview"). The Python SDK changes from `from openai import OpenAI` to `from openai import AzureOpenAI` with minimal code modification. Most migrations take 1-2 hours for simple applications.

---

**About the Author**: Dr. Sarah Chen is the Lead AI Architect at AIvanceWorks, specializing in enterprise Azure AI implementations. With a Ph.D. in Machine Learning and 12 years of experience, she has architected AI solutions for Fortune 500 healthcare, financial services, and manufacturing companies. Her expertise includes Azure AI Foundry, LangChain, RAG systems, and AI governance frameworks.

---

## Sources

- [Microsoft Foundry Quickstart - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/quickstarts/get-started-code?view=foundry-classic)
- [What is Microsoft Foundry? - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-foundry?view=foundry-classic)
- [Microsoft Q1 FY 2026: Cloud and AI Fuel Broad-Based Growth - Futurum](https://futurumgroup.com/insights/microsoft-q1-fy-2026-cloud-and-ai-fuel-broad-based-growth/)
- [Azure OpenAI Statistics And User Trends 2026 - About Chromebooks](https://www.aboutchromebooks.com/azure-openai-statistics/)
- [Comparing Azure OpenAI vs OpenAI for Enterprise Use - Redress Compliance](https://redresscompliance.com/comparing-azure-openai-vs-openai-for-enterprise-use/)
- [Comparing OpenAI vs. Azure OpenAI Services - Private AI](https://www.private-ai.com/en/blog/openai-vs-azure-openai)
- [Benchmarking Azure OpenAI vs. OpenAI API - Medium](https://medium.com/@anavalamudi/benchmarking-azure-openai-vs-openai-api-a-hands-on-performance-comparison-67f082418b3f)
- [Microsoft Azure OpenAI vs OpenAI - ProArch](https://www.proarch.com/blog/microsoft-azure-openai-vs-openai-how-do-you-choose)
- [Navigating the AI Cost Maze: Azure OpenAI vs. OpenAI API Pricing - Oreate AI](https://www.oreateai.com/blog/navigating-the-ai-cost-maze-azure-openai-vs-openai-api-pricing/7343ac618ee9e55df0a25b981359e9d0)
- [Microsoft Foundry | Microsoft Azure](https://azure.microsoft.com/en-us/products/ai-foundry/)
- [Azure AI Foundry: Enterprise AI Transformation Guide - Imaginary Cloud](https://www.imaginarycloud.com/blog/what-is-azure-ai-foundry-for-ai-transformation)
