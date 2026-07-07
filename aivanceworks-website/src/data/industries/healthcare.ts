import { BRAND_PREFIX } from '@/lib/constants';
import type { IndustryPageData } from '@/types/pages';

const healthcare: IndustryPageData = {
  slug: 'healthcare',
  title: `${BRAND_PREFIX} Healthcare Software Development`,
  shortDescription:
    'AI and software engineering for hospitals, payers, pharma, and digital health — built compliance-first to ease clinician burden, unify fragmented data, and turn activity into outcomes.',

  metaTitle: 'Healthcare Software Development | HIPAA-Compliant AI & Engineering',
  metaDescription:
    'We build compliant, interoperable healthcare software — clinical AI, patient experience, RCM automation, and EHR integration — for hospitals, payers, pharma, and digital health startups. HIPAA by design, HL7/FHIR native.',
  keywords: [
    'healthcare software development',
    'healthcare AI development',
    'HIPAA compliant software',
    'clinical decision support',
    'EHR integration',
    'FHIR API development',
    'revenue cycle management automation',
    'medical imaging AI',
    'patient engagement platform',
    'healthcare interoperability',
    'HL7 FHIR development',
    'digital health software',
  ],
  canonicalPath: '/industry/healthcare',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industry' },
    { label: `${BRAND_PREFIX} Healthcare`, href: '/industry/healthcare' },
  ],

  composition: [
    'hero',
    'pressures',
    'capabilities',
    'compliance',
    'segments',
    'techStandards',
    'services',
    'faq',
    'cta',
  ],

  industry: 'healthcare',

  hero: {
    kicker: 'Industries · Healthcare',
    headline: 'Software that lifts the burden — without ever breaking compliance.',
    subhead:
      'Clinician burnout, fragmented patient data, and rising regulatory complexity are slowing care and squeezing margins. We design and build AI and software that relieves the pressure — engineered HIPAA-first and interoperable from day one.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
    heroImage: {
      src: '/images/industries/healthcare/hero.jpg',
      alt: 'Clinical team collaborating around patient data in a modern hospital setting',
    },
    standards: ['HIPAA', 'HITECH', 'HL7', 'FHIR R4', 'HITRUST', 'SOC 2'],
    standardsLabel: 'Built to the standards healthcare runs on',
  },

  // ── Problem statement (lead with the pain) ──
  pressures: {
    title: 'The forces reshaping healthcare delivery',
    intro:
      'Margins are thinner, data is more fragmented, and the compliance bar keeps rising. These are the pressures we build software to relieve — and the reason we lead with the problem, not the product.',
    items: [
      {
        icon: 'HeartPulse',
        title: 'Clinician burnout',
        description:
          'Administrative overload pulls clinicians away from patients. Documentation, inbox triage, and click-heavy workflows drive fatigue, attrition, and avoidable errors.',
      },
      {
        icon: 'Network',
        title: 'Fragmented patient data',
        description:
          'Critical information is scattered across EHRs, labs, imaging, claims, and point solutions that do not talk to each other — so no one sees the whole patient.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Regulatory complexity',
        description:
          'HIPAA, HITECH, the ONC rules, and payer requirements make every change slow and risky. Compliance overhead becomes the brake on innovation.',
      },
      {
        icon: 'TrendingDown',
        title: 'Rising costs, shrinking margins',
        description:
          'Labor shortages, denials, and manual back-office work erode already-thin operating margins while expectations for service keep climbing.',
      },
      {
        icon: 'Target',
        title: 'Pressure to prove outcomes',
        description:
          'Value-based care and boards alike demand measurable results — better outcomes and lower cost — not just more activity and more reporting.',
      },
    ],
  },

  // ── AI & technology catalog (dark bento) ──
  capabilities: {
    title: 'AI & technology solutions, across the care continuum',
    highlightText: 'AI & technology',
    subtitle:
      'From the exam room to the back office to the research lab, these are the capabilities we design, build, and integrate.',
    groups: [
      {
        icon: 'Brain',
        title: 'Clinical AI',
        description: 'Decision support at the point of care.',
        items: [
          'Clinical decision support systems',
          'Diagnostic imaging AI (radiology, pathology)',
          'Predictive risk scoring (readmission, deterioration)',
          'AI-assisted documentation & ambient scribing',
          'Drug discovery and trial matching',
        ],
      },
      {
        icon: 'Stethoscope',
        title: 'Patient Experience',
        description: 'Engagement that drives adoption.',
        items: [
          'Intelligent patient portals',
          'AI-powered symptom checkers and triage',
          'Personalized care journey automation',
          'Appointment scheduling & no-show prediction',
        ],
      },
      {
        icon: 'Workflow',
        title: 'Operations & Administration',
        description: 'Automation for the back office.',
        items: [
          'Revenue cycle management automation',
          'Prior authorization automation',
          'Claims processing & denial management',
          'Supply chain optimization',
          'Staff scheduling & capacity planning',
        ],
      },
      {
        icon: 'Database',
        title: 'Data & Interoperability',
        description: 'A connected, analytics-ready foundation.',
        items: [
          'EHR integration (Epic, Cerner, MEDITECH)',
          'FHIR-compliant API development',
          'Health data lakes & analytics platforms',
          'Real-world data pipelines',
          'Care coordination platforms',
        ],
      },
      {
        icon: 'Microscope',
        title: 'Research & Life Sciences',
        description: 'From bench to regulatory submission.',
        items: [
          'Clinical trial data management',
          'Biomedical NLP & literature mining',
          'Genomics data pipelines',
          'Research informatics platforms',
          'Regulatory submission automation',
        ],
      },
    ],
  },

  // ── Compliance & security (prominent) ──
  complianceDetail: {
    statement:
      "Healthcare buyers don't engage without seeing this. Every system starts from the safeguards a regulator, auditor, or board expects — designed in, not bolted on.",
    frameworks: [
      'HIPAA',
      'HITECH',
      'HITRUST',
      'FedRAMP',
      'SOC 2',
      'HL7',
      'FHIR R4',
      '21 CFR Part 11',
    ],
    safeguards: [
      {
        icon: 'ShieldCheck',
        title: 'HIPAA compliance by design',
        description:
          'Technical, administrative, and physical safeguards are designed into the architecture from the first commit — never bolted on before an audit.',
      },
      {
        icon: 'EyeOff',
        title: 'De-identification & PHI handling',
        description:
          'PHI is minimized, tokenized, and de-identified where appropriate, with Safe Harbor and expert-determination approaches for analytics and AI training.',
      },
      {
        icon: 'FileText',
        title: 'Audit logging & access controls',
        description:
          'Every access to PHI is logged with actor, resource, and outcome. Role-based access control and MFA enforce least privilege across every system.',
      },
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with keys managed in a dedicated vault and rotation policies that satisfy HIPAA and HITRUST expectations.',
      },
      {
        icon: 'Award',
        title: 'HITRUST & FedRAMP alignment',
        description:
          'For organizations that require it, we architect toward HITRUST CSF certification and FedRAMP-aligned controls for cloud and government health workloads.',
      },
      {
        icon: 'FileSignature',
        title: 'BAA readiness',
        description:
          'We operate as a business associate, sign BAAs, and provide the control documentation your compliance team needs before go-live and during audits.',
      },
    ],
    auditNote:
      'We provide the control matrix, audit trails, and documentation needed for an OCR review, SOC 2 audit, or HITRUST assessment — and we walk your compliance, security, and legal teams through it before a single user touches the system.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  // ── Sub-verticals (who we serve) ──
  segments: {
    title: "Healthcare isn't one buyer — and we don't treat it like one",
    subtitle:
      'Each segment has a different decision-maker, different pain, and a different compliance bar. We tailor scope, safeguards, and framing to fit.',
    items: [
      {
        icon: 'Building2',
        name: 'Hospitals & Health Systems',
        buyer: 'CIO · CMIO · VP of Digital',
        needs: [
          'Reduce clinician documentation burden',
          'Unify data across EHR, labs, and imaging',
          'Modernize legacy systems without disruption',
          'Demonstrate outcomes for value-based care',
        ],
      },
      {
        icon: 'ClipboardList',
        name: 'Payers & Insurance',
        buyer: 'Operations & Claims leadership',
        needs: [
          'Automate prior authorization & claims',
          'Cut denials and administrative cost',
          'Member engagement & care management',
          'Interoperability with provider networks',
        ],
      },
      {
        icon: 'FlaskConical',
        name: 'Pharma & Life Sciences',
        buyer: 'R&D · Clinical Ops · Regulatory',
        needs: [
          'Clinical trial data management',
          'Biomedical NLP & literature mining',
          'Genomics & research informatics',
          'Regulatory submission automation',
        ],
      },
      {
        icon: 'Rocket',
        name: 'Digital Health Startups',
        buyer: 'Founders & Heads of Product',
        needs: [
          'Ship a compliant MVP fast',
          'HIPAA-ready architecture from day one',
          'Scalable, investor-ready engineering',
          'EHR & device integrations that work',
        ],
      },
    ],
    footerNote:
      'Not sure which path fits? A short consultation will map your segment, compliance bar, and the fastest route to value.',
  },

  // ── Technology & standards ──
  techStandards: {
    title: 'We speak your stack',
    subtitle:
      'The systems healthcare already runs on, and the platforms, standards, and AI frameworks we build with.',
    systemsTitle: 'EHR systems & interoperability',
    systems: [
      'Epic integration (SMART on FHIR, App Orchard)',
      'Oracle Health / Cerner integration',
      'MEDITECH integration',
      'athenahealth & eClinicalWorks connectivity',
      'HL7 v2 & FHIR R4 interface engines',
      'De-identification & PHI tokenization pipelines',
      'Real-time and batch data interoperability',
    ],
    technologiesTitle: 'Platforms, standards & AI frameworks',
    technologies: [
      'Azure',
      'AWS',
      'HL7 FHIR R4',
      'HL7 v2',
      'DICOM',
      'ICD-10',
      'SNOMED CT',
      'TEFCA',
      '.NET',
      'Python',
      'TypeScript',
      'Azure OpenAI',
      'PyTorch',
      'TensorFlow',
      'LangChain',
      'Databricks',
    ],
  },

  // ── Relevant services we bring to healthcare (cross-links) ──
  services: {
    title: 'The services we bring to healthcare',
    subtitle:
      'The engineering and AI capabilities we apply to healthcare’s hardest problems — explore each.',
    items: [
      {
        title: 'Generative AI',
        description:
          'Ambient documentation, clinical summarization, and copilots built on governed LLMs with human-in-the-loop oversight.',
        href: '/services/generative-ai',
        icon: 'Sparkles',
      },
      {
        title: 'NLP & Document AI',
        description:
          'Turn clinical notes, faxes, and records into structured, coded, searchable, audit-ready data.',
        href: '/services/nlp-document-ai',
        icon: 'FileText',
      },
      {
        title: 'Computer Vision',
        description:
          'Diagnostic imaging assistance and workflow automation for radiology and pathology pipelines.',
        href: '/services/computer-vision',
        icon: 'Eye',
      },
      {
        title: 'Data Engineering',
        description:
          'Health data lakes, FHIR pipelines, and analytics-ready foundations that unify your systems.',
        href: '/services/data-engineering',
        icon: 'Database',
      },
      {
        title: 'Cloud Infrastructure & Operations',
        description:
          'HIPAA-eligible cloud, secure networking, and resilient operations on Azure and AWS.',
        href: '/services/cloud-infrastructure',
        icon: 'Cloud',
      },
      {
        title: 'Security & Compliance',
        description:
          'Zero-trust controls, audit-ready evidence, and the safeguards your compliance team needs before go-live.',
        href: '/services/security-compliance',
        icon: 'ShieldCheck',
      },
    ],
  },

  faqTitle: 'Questions healthcare teams ask',
  faqs: [
    {
      question: 'What kinds of healthcare software do you build?',
      answer:
        'We build across the full care continuum: clinical AI (decision support, imaging, risk scoring, ambient documentation), patient experience platforms (portals, triage, scheduling), operations and administration (revenue cycle, prior authorization, claims), data and interoperability (EHR integration, FHIR APIs, data lakes), and research and life sciences (clinical trial data, biomedical NLP, genomics, regulatory automation). We work with hospitals and health systems, payers, pharma, and digital health startups.',
    },
    {
      question: 'How do you ensure HIPAA compliance and protect PHI?',
      answer:
        'Compliance is designed into the architecture from the first commit, not bolted on later. We implement the required technical, administrative, and physical safeguards — encryption at rest and in transit, role-based access control, MFA, audit logging, and PHI de-identification and tokenization. We operate as a business associate, sign BAAs, and provide the control matrix and documentation your compliance team needs for an OCR review, SOC 2 audit, or HITRUST assessment.',
    },
    {
      question: 'Can you integrate with our existing EHR (Epic, Cerner/Oracle Health, MEDITECH)?',
      answer:
        'Yes. We integrate with all major EHR platforms using FHIR R4 and SMART on FHIR where available, and HL7 v2 interface engines for legacy systems. We have patterns for Epic (App Orchard, SMART on FHIR), Oracle Health / Cerner, MEDITECH, athenahealth, and eClinicalWorks. Where an EHR exposes limited APIs, we build a secure middleware layer so your clinical workflows do not have to change.',
    },
    {
      question: 'Do you build with AI, and is it safe for clinical use?',
      answer:
        'We build AI responsibly for healthcare — clinical decision support, diagnostic imaging assistance, predictive risk scoring, ambient documentation, and biomedical NLP. We design for human-in-the-loop oversight, auditability, and bias monitoring, and we keep models inside HIPAA-eligible, governed environments. We are explicit about where AI augments clinicians versus where a human decision is always required.',
    },
    {
      question: 'We are a digital health startup — can you help us ship a compliant MVP?',
      answer:
        'Absolutely. We help founders ship a HIPAA-ready MVP on an architecture that scales, so you are not re-platforming after your first enterprise or payer deal. That means compliant infrastructure, secure identity, audit logging, and the EHR or device integrations your product depends on — engineered to be investor- and audit-ready from day one.',
    },
    {
      question: 'How do you handle interoperability and standards like HL7 and FHIR?',
      answer:
        'Interoperability is core to everything we build. We work natively with HL7 v2 and FHIR R4, plus DICOM for imaging and terminologies like ICD-10 and SNOMED CT. We build FHIR-compliant APIs, care coordination layers, and real-world data pipelines, and we design toward emerging frameworks like TEFCA so your data moves cleanly across systems and partners.',
    },
  ],

  cta: {
    title: "Let's build healthcare software that clears compliance — and ships.",
    description:
      'Healthcare sales cycles are long and the stakes are high. Start with a consultation: we will map your segment, your compliance requirements, and the fastest realistic route from problem to production.',
    primaryCta: { label: 'Schedule a Consultation', href: '/book-consultation' },
    secondaryCta: { label: 'Explore our services', href: '#services' },
  },

  _unverified: [
    'All content uses capability framing only — no client names, case studies, testimonials, or measured outcome metrics are claimed.',
    'complianceDetail.frameworks — "HITRUST" and "FedRAMP" are alignment/architecture targets, not held certifications. Confirm framing ("alignment", "architect toward") before publishing.',
    'complianceDetail.frameworks — "SOC 2" listed; confirm whether AIvanceWorks holds a SOC 2 attestation or is in progress.',
    'techStandards.systems — EHR integration patterns describe competencies; confirm which have actually shipped before implying delivered volume.',
    'services — cross-links point to live /services/* pages (solution pages are inactive/not surfaced anywhere on the site). hero.secondaryCta / cta.secondaryCta anchor to #services.',
  ],
};

export default healthcare;
