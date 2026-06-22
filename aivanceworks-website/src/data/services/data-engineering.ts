import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: Head of Data / VP Engineering / Director of Analytics at a US mid-market company (50–1,000 employees)
// Measured on: data reliability (pipeline uptime, freshness SLAs), time-to-insight (how fast new
//   datasets reach BI tools), infrastructure cost (cloud spend on data stack), team velocity
//   (how fast analysts can build new reports without waiting on engineering).
// Top 3 questions buyers arrive with:
//   (a) "Can you build pipelines that don't break at 3am?"
//   (b) "Will my data scale without a forklift rebuild?"
//   (c) "Can I trust the data my BI tools are reading?"
// Key trust issue: been burned by consultants who delivered fragile pipelines ("works on my machine"),
//   hand-wavy "data lakes" that became swamps (no governance, no discoverability), or vendor-locked
//   solutions the internal team can't operate or evolve.
// Signature: DataPipelineBlueprint — a four-stage lakehouse architecture visualization
//   (Ingest → Store → Transform → Serve) showing the layers, toolchain at each layer,
//   and what's handed off. Click any stage for implementation details.
//   Visualization pattern: Architectural (catalog pattern 2).
//   Emotional argument: "Here is every layer of your data stack — built in open standards
//   your team can maintain, not a black box."
//
// Composition: Archetype B with adjustments:
//   - BenefitsGrid dropped — data technical buyer wants capability and toolchain depth,
//     not marketing-ROI language without evidence. Outcomes folded into hero subhead and
//     process deliverables. (Same decision as devops.ts and cloud-infrastructure.ts.)
//   - ProcessTimeline kept — risk-averse data buyer needs to see how the engagement is
//     sequenced safely before trusting the toolchain claims.
//   - TechStackBlock placed AFTER signature (buyer sees the architecture first, then
//     validates the toolchain choice — process-before-proof ordering for risk-averse buyer).
//   - EngagementModels kept — data buyers commonly compare build-and-handoff vs
//     ongoing managed pipeline models.
//   - 9 sections total — within the 8–10 target density for Archetype B.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → FeatureGrid (warm) → Signature (dark) →
//   TechStackBlock (light) → ProcessTimeline (warm) → RelatedPages (light) → FAQ (warm) → CTA (accent)
//
// Deviations from archetype B default:
//   - ProcessTimeline before TechStackBlock (see above)
//   - BenefitsGrid dropped (see above)
//
// Data Engineering maps to Infrastructure Management category in the services catalog.
// Buyers search "data engineering consulting", "ETL pipeline development", "data warehouse setup",
// "dbt consulting", "Snowflake implementation" — not internal category labels.

const dataEngineering: ServicePageData = {
  slug: 'data-engineering',
  title: 'Data Engineering',
  shortDescription:
    'Reliable data pipelines, lakehouse architecture, and governed data warehouses — built for your team to operate, extend, and trust.',

  metaTitle: 'Data Engineering Services | Pipelines, Lakehouse, Data Warehouse',
  metaDescription:
    'Data engineering consulting: ELT pipeline design, lakehouse architecture, dbt transformations, Snowflake/BigQuery/Databricks implementation, and data quality observability. Built for handoff, not dependency.',
  keywords: [
    'data engineering services',
    'data pipeline development',
    'data engineering consulting',
    'ELT pipeline design',
    'data warehouse setup',
    'Snowflake consulting',
    'dbt consulting',
    'BigQuery implementation',
    'Databricks data engineering',
    'data lakehouse architecture',
    'Airflow pipeline orchestration',
    'data quality monitoring',
  ],
  canonicalPath: '/services/data-engineering',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Data Engineering', href: '/services/data-engineering' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'techStackBlock',
    'processTimeline',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'infrastructure',
  signatureComponent: 'DataPipelineBlueprint',
  heroIllustrationComponent: 'DataEngineeringHeroIllustration',

  hero: {
    badge: 'Infrastructure Management',
    headline: 'Data pipelines that don\'t break at 3am.',
    subhead:
      'Lakehouse architecture, governed ELT pipelines, and tested transformations — designed for your team to operate independently and your analysts to trust on Monday morning.',
    primaryCta: { label: 'Book Data Engineering Call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline architecture', href: '#signature' },
  },

  // Audience test: Head of Data scanning the page in 8 seconds needs to see
  // concrete architectural guarantees, not vague promises. Every metric is
  // capability-framed (greenfield integrity — no fabricated stats).
  // Four concerns: reliability, scalability, trust, independence.
  metricsStrip: [
    {
      value: 'Observability-First',
      label: 'Every pipeline monitored',
      description: 'Freshness checks, row-count alerts, schema drift detection',
    },
    {
      value: 'Modular',
      label: 'Scales without forklift rebuilds',
      description: 'Layered lakehouse — add sources, don\'t rewrite everything',
    },
    {
      value: 'dbt-Tested',
      label: 'Transformation integrity',
      description: 'Schema tests, not-null checks, referential integrity',
    },
    {
      value: 'Handoff-Ready',
      label: 'Documented and transferable',
      description: 'Lineage, data dictionary, runbooks, team onboarding',
    },
  ],

  // Audience test: Head of Data / VP Engineering scans this to confirm we cover
  // their stack. Each feature maps to a real data engineering concern they evaluate.
  // Icons chosen for data/infrastructure domain from Lucide.
  features: [
    {
      icon: 'Workflow',
      title: 'ELT Pipeline Design',
      description:
        'Source-to-warehouse pipelines using Airbyte or Fivetran for extraction, and dbt for transformation. Schema versioning, idempotent runs, and retry logic built in from the start.',
    },
    {
      icon: 'Database',
      title: 'Data Warehouse & Lakehouse Architecture',
      description:
        'Medallion architecture (Bronze / Silver / Gold) on Snowflake, BigQuery, Databricks, or Redshift — structured so analysts can query curated tables without touching raw ingest layers.',
    },
    {
      icon: 'GitBranch',
      title: 'Transformation Layer with dbt',
      description:
        'SQL-based transformations version-controlled, peer-reviewed, and tested. Data models documented with business definitions. CI runs tests on every pull request before promotion.',
    },
    {
      icon: 'Calendar',
      title: 'Pipeline Orchestration',
      description:
        'Airflow or cloud-native orchestrators (Cloud Composer, MWAA, Prefect) for scheduling, dependency management, retry policies, and alerting on failure.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Data Quality & Observability',
      description:
        'Great Expectations or dbt tests for schema assertions, freshness SLAs, and statistical anomaly detection. Dashboards showing pipeline health, not just pipeline status.',
    },
    {
      icon: 'Lock',
      title: 'Access Control & Governance',
      description:
        'Role-based access to warehouse schemas, column-level masking for PII, audit logging, and a lightweight data catalog so analysts know what data exists and who owns it.',
    },
  ],

  // Audience test: technical buyer validates stack depth here.
  // All tools listed are industry-proven and we build with them (greenfield capability framing).
  // Separated into capabilities (what we do) and technologies (what we build with).
  capabilities: [
    'ELT pipeline design (Airbyte, Fivetran, custom connectors)',
    'Data warehouse architecture (Snowflake, BigQuery, Databricks, Redshift)',
    'Medallion lakehouse design (Bronze / Silver / Gold)',
    'dbt transformation layer (models, tests, docs, CI)',
    'Pipeline orchestration (Airflow, Cloud Composer, Prefect, MWAA)',
    'Streaming pipelines (Kafka, Kinesis, Pub/Sub)',
    'Data quality observability (Great Expectations, dbt tests, Monte Carlo category)',
    'Data catalog and lineage documentation',
    'Column-level security and PII governance',
    'Compliance-ready architecture (SOC 2, HIPAA, CCPA data lineage)',
  ],
  technologies: [
    'Snowflake',
    'BigQuery',
    'Databricks',
    'Redshift',
    'dbt',
    'Airflow',
    'Airbyte',
    'Fivetran',
    'Kafka',
    'Terraform',
    'Great Expectations',
    'AWS / Azure / GCP',
  ],

  processSteps: [
    {
      title: 'Data Audit & Architecture Design',
      description:
        'We map your current data sources, volumes, and consumption patterns — then design the target warehouse schema, medallion layers, and pipeline topology. Every architectural decision is documented with rationale.',
      duration: 'Week 1–2',
      deliverable: 'Source inventory, architecture design document, medallion schema diagram, ADRs',
    },
    {
      title: 'Warehouse & Lakehouse Foundation',
      description:
        'Provision the warehouse (Snowflake, BigQuery, or Databricks), configure environments (dev, staging, production), set up role-based access control, and establish the Bronze ingestion layer.',
      duration: 'Week 2–3',
      deliverable: 'Provisioned warehouse, RBAC configuration, Bronze layer with first sources loaded',
    },
    {
      title: 'ELT Pipeline Build',
      description:
        'Configure connectors for all source systems, implement custom connectors where needed, and validate data completeness and schema accuracy at each ingestion point.',
      duration: 'Week 3–5',
      deliverable: 'Working ELT pipelines for all agreed sources, ingestion validation results',
    },
    {
      title: 'dbt Transformation Layer',
      description:
        'Build Silver and Gold dbt models. Write schema tests, not-null assertions, and referential integrity checks. Configure CI to run all tests on every pull request. Generate data documentation.',
      duration: 'Week 5–7',
      deliverable: 'Silver and Gold dbt models, test suite, CI pipeline, auto-generated data docs',
    },
    {
      title: 'Orchestration, Observability & Handoff',
      description:
        'Deploy the orchestration layer, configure freshness SLAs and anomaly alerts, build the pipeline health dashboard, and run structured knowledge transfer with your team. Handoff is paired working, not a slide deck.',
      duration: 'Week 7–9',
      deliverable: 'Orchestration DAGs, observability dashboard, runbooks, team onboarding complete',
    },
  ],

  engagementModels: [
    {
      name: 'Pipeline Assessment',
      duration: '2–3 weeks',
      priceFrom: '$12,000',
      whatsIncluded: [
        'Current-state pipeline and warehouse audit',
        'Source inventory and data quality assessment',
        'Gap analysis: reliability, scalability, governance',
        'Prioritized remediation roadmap',
        'Architecture recommendation document',
      ],
      suitableFor: 'Teams with existing pipelines that are fragile, undocumented, or failing silently',
      primaryCta: { label: 'Book Assessment Call', href: '/contact?de=assessment' },
    },
    {
      name: 'Full Data Stack Build',
      duration: '8–12 weeks',
      priceFrom: '$65,000',
      whatsIncluded: [
        'Full 5-step process above',
        'Warehouse provisioning and environment setup',
        'ELT pipelines for all agreed data sources',
        'dbt transformation layer with tests and docs',
        'Orchestration, scheduling, and retry logic',
        'Observability dashboards and freshness alerts',
        'Structured knowledge transfer and runbooks',
      ],
      suitableFor: 'Teams building a data stack from scratch or replacing fragile ad-hoc pipelines with production-grade architecture',
      primaryCta: { label: 'Book Data Stack Call', href: '/contact?de=full' },
      featured: true,
    },
    {
      name: 'Data Stack Build + Managed Pipelines',
      duration: '8–12 week build + ongoing',
      priceFrom: '$65,000 + $6,000/mo',
      whatsIncluded: [
        'Everything in Full Data Stack Build',
        'Ongoing pipeline monitoring and incident response',
        'Monthly pipeline reviews and optimization',
        'New source onboarding (up to 2 sources/month)',
        'dbt model updates and schema change management',
        'Direct Slack/Teams channel with data engineers',
      ],
      suitableFor: 'Teams that want their data stack operated while they focus on analytics and product work',
      primaryCta: { label: 'Book Managed Pipelines Call', href: '/contact?de=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Your data stack runs on cloud infrastructure. We build the Snowflake, BigQuery, or Databricks environments on IaC foundations your team can provision and scale without vendor-specific wizards.',
      href: '/services/cloud-infrastructure',
      icon: 'Server',
      pageType: 'service',
    },
    {
      title: 'Generative AI',
      description:
        'Pipeline built and data trusted? The next step is putting it to work. We build RAG systems and AI features that read from your curated Gold layer — so your LLM answers are grounded in verified data, not hallucinations.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
    {
      title: 'ML Development',
      description:
        'Pipeline built and data trusted? Put it to work. We train custom models on your governed Gold layer — classification, forecasting, recommendation, anomaly detection — and ship them to production with drift monitoring, not a notebook that rots.',
      href: '/services/ml-development',
      icon: 'BrainCircuit',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Which warehouse do you recommend — Snowflake, BigQuery, or Databricks?',
      answer:
        'It depends on your existing cloud footprint, team skills, and workload mix. Snowflake is our default recommendation for mid-market companies starting from scratch — it separates compute from storage cleanly, the SQL interface is familiar, and the operational overhead is low. BigQuery fits well if your organization is already invested in Google Cloud. Databricks is the right choice when your workloads are compute-heavy, you need a unified platform for pipelines and ML, or you are processing semi-structured data at scale. The architecture design phase evaluates all three against your specific requirements before we commit to a platform.',
    },
    {
      question: 'What is a medallion architecture and why should we use it?',
      answer:
        'Medallion architecture organizes your data warehouse into three layers: Bronze (raw data exactly as it arrives from source systems), Silver (cleaned, validated, joined data), and Gold (business-ready aggregates and metrics your analysts query directly). The layers create a clear separation between ingestion concerns and transformation concerns. When a source system changes schema, you update the Bronze-to-Silver transformation without touching every Gold model. When an analyst requests a new metric, you build a Gold model from trusted Silver tables without worrying about raw data quality. It is the single most effective structural choice for keeping a data warehouse maintainable as it grows.',
    },
    {
      question: 'How do you handle data quality — what does "dbt-tested" mean in practice?',
      answer:
        'Every dbt model in the transformation layer has a corresponding set of automated tests: schema assertions (columns exist with expected types), not-null checks on required fields, uniqueness checks on primary keys, and referential integrity checks between related tables. These run in CI on every pull request — a transformation change cannot be merged if it breaks existing tests. We also configure freshness assertions in Airflow that alert when a source fails to deliver data within its expected SLA window. The result is that your analysts know when data is late and why, rather than discovering stale numbers in a dashboard on Monday morning.',
    },
    {
      question: 'Can you connect to our existing source systems — Salesforce, NetSuite, custom databases?',
      answer:
        'Yes. Airbyte and Fivetran together cover most SaaS sources (Salesforce, HubSpot, Stripe, NetSuite, and hundreds more) through maintained connectors. For custom databases (PostgreSQL, MySQL, SQL Server, MongoDB) we configure CDC (change data capture) or scheduled extracts depending on your latency requirements. For proprietary APIs or internal systems without a connector, we build custom Airbyte connectors or Python-based extractors. The architecture phase maps every source system to an extraction strategy before any pipelines are built.',
    },
    {
      question: 'What does "compliance-ready" mean for a data pipeline — HIPAA, SOC 2, CCPA?',
      answer:
        'Compliance-ready architecture means the structural choices you make today do not become liabilities during an audit later. Concretely: PII fields are identified at the Bronze layer and masked at Silver using column-level security, so analysts never query raw PII in production. Data lineage is documented automatically through dbt\'s generated docs, giving auditors a traceable path from source to dashboard. Access is role-based and logged — every query to sensitive tables is auditable. We do not offer certification services, but the pipelines we build are designed to support your SOC 2, HIPAA, or CCPA audit without requiring a separate remediation engagement.',
    },
    {
      question: 'Will our team be able to add new data sources and models after you hand off?',
      answer:
        'That is the design goal. The dbt codebase follows consistent naming conventions, documented patterns, and modular model dependencies so your team can add a new source by following the same Bronze-to-Silver-to-Gold pattern we establish together. The Airflow DAG structure uses a templated pattern for new sources. We run structured onboarding sessions covering the full development workflow: adding a connector, writing a dbt model, writing tests, opening a PR, and promoting to production. Handoff is not a slide deck — it is paired working sessions until your team is confident.',
    },
  ],

  cta: {
    title: 'Ready to build a data stack your team can trust?',
    description:
      'Book a 30-minute call. We will discuss your current data sources, what is breaking or missing, and whether an assessment or a full build engagement is the right starting point.',
    primaryCta: { label: 'Book data engineering call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline architecture', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices. Confirm with user before publishing.',
    'engagementModels[0].duration — "2–3 weeks" for Pipeline Assessment. Confirm achievability.',
    'engagementModels[1].duration — "8–12 weeks" for Full Data Stack Build. Confirm typical engagement length.',
    'engagementModels[2].priceFrom — "$6,000/mo" managed pipelines. Confirm pricing model.',
    'processSteps durations — week ranges are illustrative. Confirm actual delivery cadence.',
  ],
};

export default dataEngineering;
