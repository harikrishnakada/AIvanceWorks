import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: Head of Data Science / ML Engineering Lead / VP Engineering / Director of
//   Data at a US data-heavy company (50–2,000 employees). Owns predictive analytics,
//   classification, recommendation, forecasting, or anomaly-detection initiatives.
// Measured on: model performance in production (not notebook accuracy), time-to-production
//   for ML initiatives, model reliability after launch (does it survive data drift),
//   and whether their team can operate and retrain models without re-hiring the vendor.
// Top 3 questions buyers arrive with:
//   (a) "Can you get a model into production — or will it die in a notebook like the last one?"
//   (b) "Will the model still work in six months when our data shifts?"
//   (c) "Can you prove the accuracy is real and not overfit / leaking?"
// Key trust issue: the model-to-production gap. This buyer has been burned by data
//   scientists or vendors who produced an impressive offline metric on a Jupyter notebook
//   that never shipped, by accuracy claims that collapsed on live data (leakage / overfit),
//   and by models that silently rotted after launch because nobody built drift monitoring.
//   A headline offline accuracy number means nothing to them without "and it still works in prod."
//
// Signature: ModelLifecycleLoop (NEW, single-use) — five lifecycle stages
//   (Frame → Data & Features → Train & Evaluate → Deploy & Serve → Monitor & Retrain)
//   arranged as a horizontal flow with an explicit feedback edge looping Monitor back
//   to Data. Visualization pattern: Process/flow + cyclical (catalog #3).
//   Why a NEW signature (Component Reuse Rule): no existing signature carries a closed
//   loop. DataPipelineBlueprint is a linear data-stack architecture (Ingest→Store→
//   Transform→Serve, no feedback edge); GenAiPipelineArchitecture is GenAI-specific
//   (RAG/guardrails, not custom-model training/drift). The model-to-production gap and
//   the retrain feedback edge ARE the emotional argument here, and a return edge is
//   exactly what a FeatureGrid (or a linear pipeline) cannot express.
//   Emotional argument: "A trained model is the start, not the finish. We build the loop
//   that keeps it accurate after the data shifts."
//
// Composition: Archetype B default (mirrors generative-ai.ts):
//   hero → metricsStrip → featureGrid → signature → benefitsGrid → techStackBlock →
//   engagementModels → relatedPages → faq → ctaBlock. 10 sections (Archetype B ceiling).
//   - ProcessTimeline DROPPED — the signature loop already communicates the method/cadence,
//     and Archetype B explicitly says drop ProcessTimeline when the signature is a process.
//     (Same decision as generative-ai.ts.)
//   - BenefitsGrid KEPT (unlike data-engineering.ts) — the ML buyer's trust issue is best
//     answered in outcome language (model-to-prod, drift-resistance, no black box, honest
//     evaluation), all capability-framed for greenfield integrity.
//   - imageFeatures included in the composition after featureGrid per the page brief, but
//     ServiceDetailTemplate renders imageFeatures as null (§11.5 service-page imagery:
//     services use an SVG hero illustration, not photos). Placeholder photos exist at
//     public/images/services/ml-development/ for spec/parity with solution pages; they do
//     not render on this page. This matches the v2.4/v2.5 constitution precedent
//     (poc / api-development): "imageFeatures renders null on ServiceDetailTemplate."
//
// Archetype B-vs-D / B-vs-C confirmation (§9.5 audience test):
//   - vs D (Commerce): the buyer's primary concern is execution quality (does the model
//     generalize, does it reach prod, does it survive drift), NOT a revenue/conversion KPI.
//     The deliverable is a running ML system, not a money-making storefront → B.
//   - vs C (Regulated): ML systems touch data-privacy concerns (CCPA, PII in training data)
//     and model governance, but this buyer is not GATED by an auditor — governance is a
//     hygiene factor they assume a serious vendor handles. So one light governance signal
//     is woven into features (PII handling) and a single FAQ, NOT a full ComplianceDeepDive.
//     This is a deliberate Archetype-C cherry-pick (§6.5), documented here, not a deviation.
//
// Tone rhythm:
//   Hero (dark) → MetricsStrip (light) → FeatureGrid (warm) → Signature (dark) →
//   BenefitsGrid (light) → TechStackBlock (warm) → EngagementModels (light) →
//   RelatedPages (warm) → FAQ (light) → CTA (accent)
//   Two darks (hero + signature), no adjacency, CTA accent — rhythm rules satisfied.
//
// ML Development maps to the AI & Machine Learning pillar in the services catalog.
// Buyers search "machine learning development", "custom model development", "ML model
// training services", "predictive analytics development", "ML consulting" — not internal
// category labels. NO complex third-party integration claims are made anywhere on this
// page (hard constraint): every statement is a capability we build or a tool in our stack,
// framed greenfield-honest, so nothing is a liability.

const mlDevelopment: ServicePageData = {
  slug: 'ml-development',
  title: 'ML Development',
  shortDescription:
    'Custom machine learning development — model training, fine-tuning, feature pipelines, and evaluation built to reach production and stay accurate after your data shifts.',

  metaTitle: 'ML Development Services | Custom Model Training & Deployment',
  metaDescription:
    'Machine learning development: custom model training, fine-tuning, feature engineering, leakage-safe evaluation, and production deployment with drift monitoring. Models that ship — not notebooks that rot.',
  keywords: [
    'ml development services',
    'machine learning development',
    'custom model development',
    'ml model training services',
    'predictive analytics development',
    'machine learning consulting',
    'model fine-tuning services',
    'feature engineering services',
    'mlops services',
    'model deployment services',
    'anomaly detection development',
    'recommendation engine development',
  ],
  canonicalPath: '/services/ml-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'ML Development', href: '/services/ml-development' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures', // after featureGrid per brief; ServiceDetailTemplate renders null (§11.5)
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'ai-ml',
  signatureComponent: 'ModelLifecycleLoop',
  heroIllustrationComponent: 'MlDevHeroIllustration',

  hero: {
    badge: 'AI & Machine Learning',
    headline: 'Models that reach production. Not notebooks that rot.',
    subhead:
      'Custom model training, fine-tuning, and feature pipelines — engineered with honest evaluation, deployment, and drift monitoring so your model still works six months after launch.',
    primaryCta: { label: 'Book an ML Scoping Call', href: '/contact' },
    secondaryCta: { label: 'See the model lifecycle', href: '#signature' },
  },

  // Audience test: Head of Data Science scanning in 8 seconds. Each metric is
  // capability-framed (greenfield integrity — no fabricated accuracy stats).
  // Four concerns this buyer carries: production reality, honest evaluation,
  // drift survival, team independence.
  metricsStrip: [
    {
      value: 'Production-Bound',
      label: 'Built to deploy',
      description: 'Serving API or batch job, not a notebook',
    },
    {
      value: 'Leakage-Checked',
      label: 'Evaluation you can trust',
      description: 'Held-out splits, slice analysis, honest baselines',
    },
    {
      value: 'Drift-Monitored',
      label: 'Stays accurate',
      description: 'Drift detection and retraining triggers from day one',
    },
    {
      value: 'Handoff-Ready',
      label: 'Your team can operate it',
      description: 'Model registry, runbooks, retraining playbook',
    },
  ],

  // Audience test: ML lead confirming we cover their actual problem type and the
  // engineering rigor around it. Each feature maps to a concrete ML concern they
  // evaluate. Icons from Lucide, ML/data domain. PII handling woven into feature 6
  // as the light governance (Archetype-C cherry-pick) signal — not a separate section.
  features: [
    {
      icon: 'BrainCircuit',
      title: 'Custom Model Training',
      description:
        'Models trained on your data for your problem — classification, regression, forecasting, ranking, recommendation, and anomaly detection. We pick the right model class for the problem, not the most fashionable one.',
    },
    {
      icon: 'SlidersHorizontal',
      title: 'Fine-Tuning & Transfer Learning',
      description:
        'When a pretrained model gets you most of the way, we fine-tune it on your domain data — LoRA and full fine-tuning for language and vision models, plus transfer learning to reach accuracy with far less labeled data.',
    },
    {
      icon: 'Layers',
      title: 'Feature Engineering & Data Pipelines',
      description:
        'Reproducible feature pipelines that run the same way in training and production — so a model can be retrained on the exact same logic later. Train/validation/test splits built to prevent leakage from the start.',
    },
    {
      icon: 'Gauge',
      title: 'Model Evaluation & Error Analysis',
      description:
        'Evaluation on held-out data with the metric that matches your business goal — plus slice-based error analysis that shows where the model fails, not just a single headline accuracy number that hides the weak spots.',
    },
    {
      icon: 'Rocket',
      title: 'Deployment & Serving',
      description:
        'Models packaged behind a versioned scoring API or scheduled batch job your systems can call — with staged rollout and a rollback path. This is where most models die; closing the gap is the core of the engagement.',
    },
    {
      icon: 'Activity',
      title: 'Monitoring, Drift & Governance',
      description:
        'Data-drift and performance monitoring with retraining triggers, an experiment-tracking trail, and a model registry. PII in training data is identified and handled at the pipeline layer to support your CCPA and data-governance obligations.',
    },
  ],

  // imageFeatures: included in composition per the page brief, but ServiceDetailTemplate
  // renders this section as null for service pages (§11.5 — services use the SVG hero
  // illustration above, not photos). Placeholder photos for spec parity live at
  // public/images/services/ml-development/{hero,feature-1,feature-2}.jpg. Image specs if
  // a future template change renders them:
  //   hero.jpg     — data scientists reviewing model evaluation curves on a large monitor
  //                  in a modern office (human faces, diverse, no cliché brain-circuit art).
  //   feature-1.jpg — an ML engineer pair-working on a feature pipeline at a laptop.
  //   feature-2.jpg — a team reviewing a live monitoring dashboard showing drift alerts.
  //   Landscape, min 1200px wide, Unsplash, no color grading. alt text describes the scene.

  // Audience test: ML lead evaluating outcomes. Each benefit answers a specific scar this
  // buyer carries — POCs dying (→ production focus), accuracy that wasn't real (→ honest
  // evaluation), models rotting (→ drift), vendor lock / black boxes (→ ownership). All
  // framed as capabilities ("built to", "designed to", "engineered for") — greenfield-safe.
  benefits: [
    {
      icon: 'Rocket',
      title: 'Across the Production Gap',
      description:
        'ML systems built to ship — serving infrastructure, versioning, and rollback designed for real traffic, not a model that lives in a notebook and never reaches a single user.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Accuracy You Can Defend',
      description:
        'Evaluation on held-out data with leakage checks and slice-based error analysis, so the number you report to your stakeholders holds up on live data — not just on the training set.',
    },
    {
      icon: 'Repeat',
      title: 'Models That Don’t Rot',
      description:
        'Drift detection and retraining triggers built in from the first sprint. When your data shifts, you get an alert and a retraining path — not a silent accuracy collapse discovered in a quarterly review.',
    },
    {
      icon: 'KeyRound',
      title: 'You Own the Model',
      description:
        'Trained on open frameworks with a documented pipeline, model registry, and retraining playbook your team can run. No black box, no dependency on us to keep the model alive.',
    },
    {
      icon: 'Compass',
      title: 'Right Problem, Right Model',
      description:
        'We frame the business question into a measurable ML problem with an honest baseline before training anything — so effort goes to problems ML can actually solve, not science projects.',
    },
  ],

  // Audience test: technical buyer validates depth here. Everything listed is industry-proven
  // and we build with it (greenfield capability framing). Capabilities = what we do;
  // technologies = what we build with. No claim of past shipped integrations.
  capabilities: [
    'Problem framing and ML feasibility assessment with baselines',
    'Supervised model training (classification, regression, ranking)',
    'Forecasting and time-series modeling',
    'Recommendation and anomaly-detection systems',
    'Fine-tuning and transfer learning (LoRA, full fine-tune)',
    'Reproducible feature pipelines and dataset versioning',
    'Leakage-safe evaluation and slice-based error analysis',
    'Model serving (real-time API and batch scoring)',
    'MLOps: experiment tracking, model registry, CI for models',
    'Drift monitoring, retraining triggers, and PII-aware data handling',
  ],
  technologies: [
    'Python',
    'PyTorch',
    'TensorFlow',
    'scikit-learn',
    'XGBoost',
    'Hugging Face',
    'MLflow',
    'FastAPI',
    'Docker',
    'Airflow',
    'Evidently',
    'AWS / Azure / GCP',
  ],

  engagementModels: [
    {
      name: 'ML Feasibility Sprint',
      duration: '2 weeks',
      priceFrom: '$15,000',
      whatsIncluded: [
        'Problem framing and success-metric definition',
        'Data audit and leakage-risk assessment',
        'Baseline model and feasibility verdict on your real data',
        'Go / no-go recommendation with production estimate',
      ],
      suitableFor:
        'Teams who need to know whether ML can actually solve their problem before committing to a full build',
      primaryCta: { label: 'Book Feasibility Sprint', href: '/contact?ml=feasibility' },
    },
    {
      name: 'Production Model Build',
      duration: '8–12 weeks',
      priceFrom: '$70,000',
      whatsIncluded: [
        'Feature pipeline and dataset versioning',
        'Model training, fine-tuning, and evaluation',
        'Deployment (real-time API or batch scoring)',
        'Drift monitoring and retraining triggers',
        'Model registry, runbooks, and retraining playbook',
      ],
      suitableFor:
        'Teams with a validated use case ready to put a trained model into production with the loop to keep it accurate',
      primaryCta: { label: 'Book Production Build', href: '/contact?ml=production' },
      featured: true,
    },
    {
      name: 'ML Build + Managed Models',
      duration: '8–12 week build + ongoing',
      priceFrom: '$70,000 + $7,000/mo',
      whatsIncluded: [
        'Everything in Production Model Build',
        'Ongoing drift monitoring and incident response',
        'Scheduled retraining and model refresh',
        'Periodic performance reviews and tuning',
        'Direct Slack/Teams channel with ML engineers',
      ],
      suitableFor:
        'Teams that want their models operated and retrained while they focus on product and analytics work',
      primaryCta: { label: 'Book Managed Models Call', href: '/contact?ml=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'Data Engineering',
      description:
        'A model is only as good as the data feeding it. If your pipelines are fragile or your features aren’t reproducible, we build the governed lakehouse and ELT layer first — so your training data is trustworthy before a model touches it.',
      href: '/services/data-engineering',
      icon: 'Database',
      pageType: 'service',
    },
    {
      title: 'Generative AI',
      description:
        'Need an LLM, RAG, or agent instead of a custom-trained model? When the problem is language or retrieval rather than prediction, we build production generative AI systems with grounding, guardrails, and monitoring from the first sprint.',
      href: '/services/generative-ai',
      icon: 'Sparkles',
      pageType: 'service',
    },
    {
      title: 'AI Development',
      description:
        'Not certain a custom model is the right tool? Step back to a problem-first engagement — we weigh prediction against a generative, vision, or simpler non-AI approach, then build whichever actually solves your problem.',
      href: '/services/ai-development',
      icon: 'Compass',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'How do you make sure a model actually reaches production instead of dying in a notebook?',
      answer:
        'Production is the design target from day one, not an afterthought. We frame the problem against the system that will consume the predictions, build feature pipelines that run identically in training and production, and package the model behind a versioned scoring API or batch job your systems can call. Deployment includes staged rollout and a rollback path. The model-to-production gap is where most ML efforts fail, so the engagement is structured around closing it — the trained model is only one stage of five in our lifecycle, not the finish line.',
    },
    {
      question: 'How do you prove the accuracy is real and not overfit or leaking?',
      answer:
        'We evaluate on held-out data the model never saw during training, using train/validation/test splits designed to prevent leakage — for example, splitting by time for forecasting or by entity to avoid the same customer appearing in both sets. We report the metric that matches your business goal, not a flattering one, and we run slice-based error analysis to show where the model is weak rather than hiding behind a single headline number. We also establish an honest baseline first, so every reported gain is measured against something real.',
    },
    {
      question: 'What happens when our data changes after the model is deployed?',
      answer:
        'That is exactly what the monitoring stage is built for. We instrument data-drift and prediction-drift detection, and where ground-truth labels become available we track live performance against them. When drift crosses a threshold, you get an alert and a retraining path — the drift signal feeds back into the feature and data stage to trigger a retrain on fresh data. The goal is that you find out a model is degrading from a monitoring alert, not from a stakeholder noticing the predictions got worse.',
    },
    {
      question: 'Do we own the model, or are we locked into you to keep it running?',
      answer:
        'You own it. Models are trained on open frameworks (PyTorch, scikit-learn, XGBoost, Hugging Face) with a documented, reproducible pipeline, a model registry, and a retraining playbook your team can run. Handoff includes runbooks and structured knowledge transfer so your engineers can retrain, redeploy, and extend the model without us. If you choose the managed option, that is a convenience, not a dependency — you can take operations in-house at any point.',
    },
    {
      question: 'How do you handle PII and data governance in training data?',
      answer:
        'PII in training data is identified at the feature-pipeline layer and handled according to your governance requirements — masking, exclusion, or aggregation depending on what the model actually needs. Datasets are versioned so you have a traceable record of what data trained which model, which supports CCPA and internal data-governance obligations. We architect the pipeline so privacy decisions are explicit and documented rather than buried in a notebook. We do not provide legal compliance certification; we build the model and data layer so it supports your governance program rather than working against it.',
    },
    {
      question: 'What if we are not sure ML is even the right approach for our problem?',
      answer:
        'Start with the ML Feasibility Sprint. In two weeks we frame your problem into a measurable ML question, audit your data for quality and leakage risk, build a baseline on your real data, and give you an honest go / no-go verdict with a production estimate. Sometimes the answer is that a simpler rules-based approach wins, or that the data is not ready yet — and saying so is a legitimate outcome. You leave with a clear decision and the evidence behind it, not a six-figure commitment to a model that might not pay off.',
    },
  ],

  cta: {
    title: 'Ready to build a model that ships and stays accurate?',
    description:
      'Book a 30-minute call. We will discuss your use case, what data you have, and whether a feasibility sprint or a full production build is the right place to start.',
    primaryCta: { label: 'Book an ML scoping call', href: '/contact' },
    secondaryCta: { label: 'See the model lifecycle', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable ML engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "2 weeks" for Feasibility Sprint. Confirm achievability.',
    'engagementModels[1].duration — "8–12 weeks" for Production Model Build. Confirm typical engagement length.',
    'engagementModels[2].priceFrom — "$7,000/mo" managed models. Confirm pricing model.',
    'technologies — confirm the stack matches what we actually deliver (e.g., Evidently for drift, MLflow for tracking, FastAPI for serving).',
    'images at public/images/services/ml-development/ are placeholder copies (from data-engineering) for spec parity only; they do NOT render — ServiceDetailTemplate renders imageFeatures as null for service pages (§11.5). Replace with the documented subjects only if a future template change renders service imageFeatures.',
  ],
};

export default mlDevelopment;
