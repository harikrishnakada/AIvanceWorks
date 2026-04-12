import type { ServicePageData } from '@/types/pages';

// Archetype B — Technical Service
// Buyer: Director/VP of Engineering or CTO at a mid-market company (200–2,000 employees) in
//   manufacturing, logistics, retail, or healthcare that has identified a specific visual
//   automation opportunity (defect detection, visual inspection, product recognition, video analytics)
// Measured on: defect rate reduction, throughput improvement, operational efficiency,
//   accuracy in production conditions — not demo accuracy on controlled images
// Dominant question: "Can you achieve production accuracy on our real-world images?"
// Key trust issue: burned by vendors whose demos worked on clean, controlled images but whose
//   systems failed on grainy, variable-lighting, inconsistent real-world images from their
//   factory floor, warehouse, or production line. POCs at 80% accuracy in the lab that were
//   unusable in production (quality control needs 98%+).
// Signature: ComputerVisionPipeline — 4-stage interactive pipeline showing Capture & Pre-Process
//   → Inference → Post-Processing → Integrate & Learn. Argument: "A production computer vision
//   system has 4 engineered stages — we build all of them, not just the model."
//
// Composition follows Archetype B recipe (matches Generative AI / NLP & Document AI references).
// No deviations from archetype. 10 sections at ceiling, justified for core AI service.
// ProcessTimeline dropped — signature already communicates pipeline architecture;
//   FAQ addresses delivery cadence. TechStackBlock + EngagementModels demonstrate execution depth.
// RelatedPages placed after EngagementModels (standard for all pages per v1.4).

// Audience test pass (Step 7.7):
// - metricsStrip: all capability-framed, no uncited % ranges. "Pixel to Decision" and
//   "Self-Improving" are honest capability claims for a correctly engineered system.
// - features: each maps to a business problem the Director of Engineering can evaluate.
//   No developer-lens architecture jargon.
// - benefits: framed as outcomes the buyer gets, using capability language ("calibrated for",
//   "designed for", "built for") rather than fabricated outcomes.
// - faqs: each answer leads with a direct response in the first sentence (AEO optimization).

const computerVision: ServicePageData = {
  slug: 'computer-vision',
  title: 'Computer Vision',
  shortDescription:
    'Production computer vision systems — defect detection, object recognition, video analytics, and custom model training built for your real-world images, not controlled demo conditions.',

  metaTitle: 'Computer Vision Development | Custom Visual Inspection & Detection Systems',
  metaDescription:
    'Computer vision engineering — custom model training, real-time inference pipelines, visual inspection, object detection, and video analytics. Built for production accuracy, not demo conditions.',
  keywords: [
    'computer vision development',
    'computer vision services',
    'visual inspection automation',
    'object detection system',
    'custom vision model training',
    'image recognition system',
    'video analytics development',
    'defect detection ai',
    'azure computer vision',
    'machine vision system',
    'computer vision integration',
    'edge inference deployment',
  ],
  canonicalPath: '/services/computer-vision',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Computer Vision', href: '/services/computer-vision' },
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
  signatureComponent: 'ComputerVisionPipeline',
  heroIllustrationComponent: 'ComputerVisionHeroIllustration',

  hero: {
    badge: 'Computer Vision',
    headline: 'Visual inspection built for your real-world images.',
    subhead:
      'Custom-trained detection models, real-time inference pipelines, and production integration with your existing cameras — calibrated for your environment, not demo conditions.',
    primaryCta: { label: 'Book Vision Assessment Call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline', href: '#signature' },
  },

  // Audience test: Director of Engineering evaluating a CV partner needs to see
  // production-readiness signals immediately. Every metric is capability-framed
  // (greenfield-safe, no fabricated outcomes). "Pixel to Decision" frames the
  // full-pipeline scope. "Self-Improving" addresses the accuracy-degradation fear.
  metricsStrip: [
    {
      value: 'Pixel to Decision',
      label: 'Full 4-stage pipeline',
      description: 'Intake · Inference · Post-process · Integrate',
    },
    {
      value: 'Production-Grade',
      label: 'Trained on your images',
      description: 'Not demo-tuned for controlled conditions',
    },
    {
      value: 'Edge-Ready',
      label: 'Cloud or on-device',
      description: 'Run inference where your cameras live',
    },
    {
      value: 'Self-Improving',
      label: 'Retraining infrastructure',
      description: 'Accuracy grows with usage feedback',
    },
  ],

  // Audience test: Director of Engineering thinks in terms of specific use cases and
  // integration points — they have a problem they need solved, not a technology they
  // want to explore. Each feature card maps to a recognizable automation problem.
  // No developer-lens content (no architecture patterns, no layer descriptions).
  features: [
    {
      icon: 'Scan',
      title: 'Visual Inspection & Quality Control',
      description:
        'Defect detection, dimensional verification, and surface anomaly classification on manufacturing lines, packaged goods, or construction materials. Configurable confidence thresholds and human-review routing for decisions where the cost of a miss is high.',
    },
    {
      icon: 'Eye',
      title: 'Object Detection & Classification',
      description:
        'Multi-class detection and classification across images and video frames. We train custom detection models on your labeled dataset — not off-the-shelf models calibrated for someone else\'s objects, angles, and lighting conditions.',
    },
    {
      icon: 'Video',
      title: 'Video Analytics & Real-Time Processing',
      description:
        'Per-frame object tracking, motion detection, crowd counting, and event recognition in live video streams. Designed for real-time throughput with configurable frame-skip strategies for cost efficiency across multi-camera deployments.',
    },
    {
      icon: 'FileSearch',
      title: 'Document & Receipt Scanning',
      description:
        'Visual preprocessing for scanned documents, handwritten forms, and photo-captured content. Image quality correction, deskew, and region-of-interest extraction before feeding document intelligence pipelines — improving extraction accuracy upstream.',
    },
    {
      icon: 'Layers',
      title: 'Custom Model Training',
      description:
        'End-to-end model training — dataset curation, annotation, augmentation, training, evaluation, and hyperparameter tuning. Transfer learning from pre-trained foundations to minimize the labeled images you need without sacrificing domain specificity.',
    },
    {
      icon: 'Cpu',
      title: 'Edge & Cloud Inference',
      description:
        'ONNX-optimized model export for deployment on IoT hardware, industrial cameras, and embedded devices. Hybrid edge-cloud architectures that process locally for latency and cost, with cloud fallback for complex cases or audit logging.',
    },
  ],

  // Audience test: Director of Engineering cares about operational outcomes —
  // reduced defect rates, no hardware disruption, lower maintenance burden.
  // Each benefit is framed as what the buyer gets, using capability language
  // (calibrated for, designed for, built for) rather than fabricated outcomes.
  benefits: [
    {
      icon: 'ShieldCheck',
      title: 'Accuracy Calibrated for Your Environment',
      description:
        'Every production model is trained and validated on your actual images — your lighting conditions, your camera angles, your defect types. Demo accuracy against controlled datasets is not the metric we optimize for.',
    },
    {
      icon: 'Plug',
      title: 'No Rip-and-Replace Required',
      description:
        'We design the integration layer to connect to your existing camera infrastructure, conveyor systems, and sensor networks. You bring the image source; we build the detection layer around it without requiring new hardware purchases.',
    },
    {
      icon: 'RefreshCw',
      title: 'Models That Improve Over Time',
      description:
        'The human review queue captures corrections and near-misses from production. The retraining pipeline converts them into model improvements on a scheduled cycle — accuracy grows with usage instead of degrading as your environment shifts.',
    },
    {
      icon: 'Zap',
      title: 'Sub-Second Inference at Scale',
      description:
        'ONNX-optimized models and edge deployment strategies enable sub-second inference on a single camera feed or parallel processing across dozens of streams — throughput is sized to your production line cadence.',
    },
    {
      icon: 'Database',
      title: 'Visual Signal to Business Action',
      description:
        'Detection results delivered as REST API responses, webhooks, or direct database writes — formatted to match your downstream system schema. The vision layer produces the structured data your ERP, WMS, or QMS consumes.',
    },
  ],

  capabilities: [
    'Image classification and multi-class object detection',
    'Video frame analysis and real-time object tracking',
    'Visual inspection with configurable defect thresholds',
    'Custom vision model training on domain-specific datasets',
    'Transfer learning and fine-tuning on pre-trained foundations',
    'Real-time inference pipeline for edge and cloud deployment',
    'ONNX model optimization for embedded and IoT hardware',
    'Model performance monitoring and drift detection',
    'REST API and webhook delivery of detection results',
  ],

  technologies: [
    'Azure Computer Vision',
    'Azure Custom Vision',
    'Python',
    'PyTorch',
    'TensorFlow',
    'OpenCV',
    'ONNX Runtime',
    'Azure IoT Hub',
    'Docker',
    'Azure Functions',
  ],

  engagementModels: [
    {
      name: 'Vision Discovery Sprint',
      duration: '3 weeks',
      priceFrom: '$22,000',
      whatsIncluded: [
        'Feasibility assessment on your actual images',
        'Single-use-case prototype (one detection task)',
        'Accuracy benchmarks on your data',
        'Production architecture recommendation',
        'Go/no-go report with scope and timeline estimate',
      ],
      suitableFor: 'Teams evaluating whether computer vision can solve their specific problem before committing to a production build',
      primaryCta: { label: 'Book Discovery Sprint', href: '/contact?cv=discovery' },
    },
    {
      name: 'Production Vision System',
      duration: '10–14 weeks',
      priceFrom: '$90,000',
      whatsIncluded: [
        'Full 4-stage pipeline for 1–2 detection tasks',
        'Custom model training on your dataset',
        'Real-time inference API (edge or cloud)',
        'Camera and sensor infrastructure integration',
        'Human review queue + retraining pipeline',
        'Confidence monitoring and alerting',
      ],
      suitableFor: 'Teams with a defined detection problem that needs a production-grade, integrated system',
      primaryCta: { label: 'Book Production Build Call', href: '/contact?cv=production' },
      featured: true,
    },
    {
      name: 'Enterprise Vision Platform',
      duration: '20+ weeks',
      priceFrom: '$160,000',
      whatsIncluded: [
        'Everything in Production Vision System',
        'Multiple detection tasks or workloads',
        'Edge deployment on embedded/IoT hardware',
        'MLOps infrastructure for ongoing model improvement',
        'Multi-site or multi-camera deployment support',
        'Team training and knowledge transfer',
      ],
      suitableFor: 'Organizations with multiple visual automation workloads, edge hardware requirements, or multi-site deployments',
      primaryCta: { label: 'Book Enterprise Call', href: '/contact?cv=enterprise' },
    },
  ],

  // Audience test: 3 cross-links covering the natural next steps from computer vision.
  // Generative AI: multimodal AI use cases (vision + LLM reasoning).
  // NLP & Document AI: document scanning overlap (camera-captured docs need vision preprocessing).
  // E-commerce Websites: concrete solution where CV workloads (visual search, shelf monitoring) are embedded.
  // Journey-aware descriptions are unique per source→destination pair (per v1.4).
  relatedPages: [
    {
      title: 'Generative AI',
      description:
        'Visual understanding unlocks multimodal AI. When your system needs to reason about images — interpret inspection results, respond to visual queries, or describe scenes — we build the generative reasoning layer on top of your vision pipeline.',
      href: '/services/generative-ai',
      icon: 'Brain',
      pageType: 'service',
    },
    {
      title: 'NLP & Document AI',
      description:
        'Some documents are images. For scanned forms, camera-captured receipts, and photo-based data entry, computer vision preprocessing feeds cleaner image data into the extraction pipeline — improving accuracy upstream.',
      href: '/services/nlp-document-ai',
      icon: 'FileText',
      pageType: 'service',
    },
    {
      title: 'E-Commerce Websites',
      description:
        'Visual search, shelf monitoring, and automated catalog management are production computer vision workloads. See how we integrate vision intelligence into the commerce platforms we build.',
      href: '/solutions/e-commerce-websites',
      icon: 'ShoppingCart',
      pageType: 'solution',
    },
  ],

  // FAQs driven by the top 3 buyer questions and key trust issue.
  // Each answer leads with a direct response in the first sentence (AEO optimization).
  faqs: [
    {
      question: 'What accuracy can you achieve on our real-world images?',
      answer:
        'Accuracy depends on the quality and consistency of your images, the number of labeled training examples, and how well your test conditions represent production. We do not quote accuracy numbers before seeing your data. During the Vision Discovery Sprint, we train a prototype model on a sample of your actual images and report precision, recall, and F1 scores by class — so you have real numbers for your environment before committing to a production build. Clean, well-lit images with sufficient training examples typically reach production-usable accuracy faster than noisy or highly variable image sets.',
    },
    {
      question: 'Do we need to replace our existing cameras or hardware?',
      answer:
        'No. We design the integration layer around your existing camera infrastructure — IP cameras, RTSP streams, industrial cameras, or batch image uploads from your existing capture process. The vision system connects to what you already have. Hardware changes are only recommended when your current cameras produce image quality so low that accurate detection is physically impossible (e.g., resolution too low to distinguish defect types at operating distance), and we will tell you that clearly in the Discovery Sprint rather than after you have committed.',
    },
    {
      question: 'What is the difference between Azure Computer Vision and a custom-trained model?',
      answer:
        'Azure Computer Vision provides pre-trained models for general object detection, OCR, and image tagging — useful for common, well-represented categories. A custom-trained model is trained specifically on your objects, your defect types, your environment, and your labeling schema. For most industrial and domain-specific applications (manufacturing defects, custom product SKUs, specialized documents), the pre-trained model is a starting point for transfer learning, not a final answer. We assess which approach — pre-trained API, fine-tuning, or full custom training — fits your use case during the Discovery Sprint.',
    },
    {
      question: 'How much training data do we need to get started?',
      answer:
        'There is no universal minimum, but as a starting point: defect detection on a single defect type typically requires 200–500 labeled examples per class; multi-class detection with fine distinctions needs 1,000+ per class. Transfer learning from pre-trained foundations significantly reduces the labeled data requirement. During the Discovery Sprint, we assess your existing labeled data (or help you build a labeling strategy) and give you an honest estimate of what you need before training begins. Do not let an unlabeled image backlog block you from starting — we have worked with teams who begin with far less than they expect.',
    },
    {
      question: 'Can the model run on our edge hardware instead of the cloud?',
      answer:
        'Yes. We export trained models to ONNX format, which runs on a wide range of edge hardware — industrial PCs, NVIDIA Jetson devices, Raspberry Pi 4/5, and Azure IoT Edge nodes. The feasibility depends on your hardware\'s compute capacity and your inference latency requirement. Edge deployment eliminates cloud round-trip latency, reduces bandwidth costs, and keeps image data on-premises — all relevant for factory-floor and real-time applications. We test model performance on your target hardware as part of the production build and size the deployment accordingly.',
    },
    {
      question: 'What happens when our environment changes and model accuracy drops?',
      answer:
        'Accuracy drift from environment changes — new product variants, lighting changes, camera repositioning — is expected and planned for, not treated as a failure. The retraining pipeline captures corrections from the human review queue and retrain the model on a scheduled cycle (weekly or monthly depending on the rate of change in your environment). When accuracy drops significantly between retraining cycles, the monitoring system alerts your team and can temporarily lower confidence thresholds to increase human review volume until the model is updated. The system degrades gracefully and recovers automatically.',
    },
  ],

  cta: {
    title: 'Ready to automate visual inspection?',
    description:
      'Book a 30-minute assessment call. We will review your image samples, discuss your detection requirements, and outline what a production vision system looks like for your environment.',
    primaryCta: { label: 'Book Vision Assessment Call', href: '/contact' },
    secondaryCta: { label: 'See the pipeline', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder prices based on comparable CV engagements. Confirm with user before publishing.',
    'engagementModels[0].duration — "3 weeks" for Vision Discovery Sprint. Confirm achievability.',
    'engagementModels[1].duration — "10–14 weeks" for Production Vision System. Confirm with delivery team.',
    'technologies — confirm stack matches what we deliver on CV engagements (e.g., Azure IoT Hub vs. Azure IoT Edge).',
    'capabilities — none individually verified against shipped CV work yet.',
    'faq[3] — "200–500 labeled examples per class" training data estimate. Verify against team experience.',
  ],
};

export default computerVision;
