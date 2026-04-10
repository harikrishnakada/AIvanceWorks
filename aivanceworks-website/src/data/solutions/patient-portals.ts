import type { SolutionPageData } from '@/types/pages';

const patientPortals: SolutionPageData = {
  slug: 'patient-portals',
  title: 'HIPAA-Compliant Patient Portal Development',
  shortDescription:
    'Custom, HIPAA-compliant patient portals built on Azure — integrated with your EHR, designed for high adoption, audit-ready from day one.',

  metaTitle: 'Custom Patient Portal Development | HIPAA-Compliant Solutions',
  metaDescription:
    'We build HIPAA-compliant patient portals with EHR integration, secure messaging, appointment scheduling, and telehealth. Industry research shows portals can reduce no-shows 30–50% (HIMSS).',
  keywords: [
    'patient portal development',
    'HIPAA compliant patient portal',
    'custom healthcare portal',
    'patient portal software',
    'EHR patient portal integration',
    'secure patient messaging',
    'telehealth portal development',
    'patient engagement platform',
    'healthcare software development',
    'FHIR patient portal',
    'patient self-service portal',
    'medical records portal',
  ],
  canonicalPath: '/solutions/patient-portals',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Patient Portals', href: '/solutions/patient-portals' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'imageFeatures',
    'complianceSpotlight',
    'signature',
    'complianceDeepDive',
    'benefitsGrid',
    'integrationsPanel',
    'processTimeline',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  industry: 'healthcare',
  signatureComponent: 'PortalArchitectureMap',

  hero: {
    badge: 'Healthcare Solutions',
    headline: 'Patient portals that patients actually use — and auditors actually approve.',
    subhead:
      'Secure, HIPAA-compliant portals built on Azure with deep EHR integration, designed around patient workflows to drive real adoption and measurably reduce administrative overhead.',
    primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the architecture', href: '#signature' },
    heroImage: {
      src: '/images/solutions/patient-portals/hero.jpg',
      alt: 'Clinician reviewing patient records on a tablet in a modern healthcare facility',
    },
    metrics: [
      {
        value: '40–60%',
        label: 'No-show reduction',
        description: 'HIMSS / industry research range',
      },
      {
        value: 'HIPAA',
        label: 'Compliance by design',
        description: 'Audit-ready from day one',
      },
      {
        value: 'FHIR R4',
        label: 'Native EHR interop',
        description: 'Epic, Cerner, Athena, eCW',
      },
    ],
  },

  metricsStrip: [
    {
      value: '40–60%',
      label: 'Reduction in No-Shows',
      description:
        'Industry research range (HIMSS): automated reminders and self-service rescheduling typically move the needle this much.',
    },
    {
      value: '3x',
      label: 'Portal Adoption vs Baseline',
      description:
        'Intuitive UX and mobile access can drive adoption well above the 30% industry baseline.',
    },
    {
      value: '25–35%',
      label: 'Admin Workload Reduction',
      description:
        'Self-service for scheduling, forms, and refills frees staff for higher-value work.',
    },
    {
      value: '90%+',
      label: 'Patient Satisfaction Target',
      description: 'Benchmark goal for post-launch patient satisfaction surveys.',
    },
  ],

  features: [
    {
      icon: 'FileText',
      title: 'Medical Records Access',
      description:
        'Patients view lab results, visit summaries, imaging reports, and clinical notes in a structured, easy-to-read interface. FHIR R4-compliant data exchange ensures accuracy and interoperability with any EHR.',
    },
    {
      icon: 'CalendarCheck',
      title: 'Appointment Scheduling & Reminders',
      description:
        'Self-service scheduling with real-time provider availability, automated SMS/email reminders, and one-click rescheduling to reduce no-shows without extra staff effort.',
    },
    {
      icon: 'MessageSquare',
      title: 'Secure Patient–Provider Messaging',
      description:
        'HIPAA-compliant encrypted messaging between patients and care teams with configurable response workflows, attachment support, and audit logging for compliance.',
    },
    {
      icon: 'Video',
      title: 'Telehealth Integration',
      description:
        'Built-in or third-party telehealth (Zoom Health, Doxy.me, Azure Communication Services) integrated directly in the portal so patients join video visits without leaving the platform.',
    },
    {
      icon: 'Pill',
      title: 'Prescription & Refill Management',
      description:
        'Patients submit refill requests, track prescription history, and receive pharmacy notifications through the portal, reducing phone volume and processing time for clinical staff.',
    },
    {
      icon: 'CreditCard',
      title: 'Billing, Statements & Online Payments',
      description:
        'Transparent billing statements, insurance explanation-of-benefits summaries, and PCI-compliant payment processing through Stripe or your existing billing system.',
    },
  ],

  benefits: [
    {
      icon: 'UserCheck',
      title: 'Higher Patient Engagement',
      description:
        'Patients who can access their records and communicate online stay more engaged with their care plans, leading to better health outcomes and lower readmission rates.',
      stat: '3x',
      statLabel: 'patient-initiated interactions',
    },
    {
      icon: 'DollarSign',
      title: 'Measurable Cost Reduction',
      description:
        'Reduced phone call volume, fewer missed appointments, and automated form processing translate directly to lower administrative costs per patient encounter.',
      stat: '25–35%',
      statLabel: 'admin overhead reduction',
    },
    {
      icon: 'Shield',
      title: 'Full Regulatory Compliance',
      description:
        'Every component is built to HIPAA technical safeguard requirements with documentation, audit trails, and security controls ready for OCR review or SOC 2 audit.',
    },
    {
      icon: 'Zap',
      title: 'Faster Time-to-Value',
      description:
        'Our modular architecture lets us launch core features first and expand iteratively, so staff and patients see value within weeks rather than months.',
      stat: '10–16 weeks',
      statLabel: 'average time to launch',
    },
  ],

  processSteps: [
    {
      title: 'Discovery & Compliance Audit',
      description:
        'We map your current patient workflows, existing EHR/EMR system, and compliance posture to define scope and identify HIPAA risk areas before a single line of code is written.',
      duration: '1–2 weeks',
      deliverable: 'Compliance gap report, technical requirements document, and project roadmap',
    },
    {
      title: 'UX Design & Patient Journey Mapping',
      description:
        'We design portal flows around the patient perspective — not the clinical system — so adoption is high from launch. Designs are validated with wireframes and interactive prototypes.',
      duration: '2–3 weeks',
      deliverable: 'High-fidelity Figma prototypes, accessibility audit (WCAG 2.1 AA), and design system',
    },
    {
      title: 'Core Portal Development',
      description:
        'Full-stack development using React/Next.js and .NET, hosted on Azure with end-to-end encryption, role-based access control, and Azure AD B2C for patient identity management.',
      duration: '6–10 weeks',
      deliverable: 'Functional portal with all core modules, unit and integration test coverage',
    },
    {
      title: 'EHR Integration & Compliance Testing',
      description:
        'Integrate with your EHR via HL7 FHIR or vendor-specific APIs, then conduct end-to-end security testing, HIPAA technical safeguard validation, and penetration testing.',
      duration: '3–5 weeks',
      deliverable: 'FHIR integration documentation, security test report, HIPAA safeguards checklist',
    },
    {
      title: 'Launch, Training & Hypercare',
      description:
        'Phased rollout with staff training, patient onboarding communications, and a dedicated hypercare period. We monitor adoption metrics and iterate post-launch.',
      duration: '1–2 weeks',
      deliverable: 'Production deployment, staff training materials, monitoring dashboard, 30-day support SLA',
    },
  ],

  capabilities: [
    'HIPAA-compliant data storage and transmission',
    'FHIR R4 / HL7 EHR integration',
    'Multi-factor authentication (MFA)',
    'Role-based access control (patients, staff, providers)',
    'Mobile-responsive and PWA support',
    'Automated appointment reminders (SMS, email)',
    'Patient health questionnaire (PHQ) forms',
    'Telehealth video visit workflows',
    'Audit logging and compliance reporting',
    'ADA/WCAG 2.1 AA accessibility compliance',
  ],

  technologies: [
    'React / Next.js',
    '.NET 10 / ASP.NET Core',
    'Azure App Service',
    'Azure AD B2C',
    'Azure Key Vault',
    'SQL Server / Azure SQL Database',
    'Azure Blob Storage (PHI-encrypted)',
    'FHIR R4 / HL7 v2',
    'Stripe (PCI-compliant payments)',
    'Azure Application Insights',
    'Terraform (IaC)',
    'Azure Communication Services',
  ],

  integrations: [
    {
      name: 'Epic MyChart',
      category: 'EHR',
      connectionMethod: 'SMART on FHIR / FHIR R4',
      capabilities: [
        'Bi-directional patient data sync',
        'Real-time appointment availability',
        'Clinical notes and lab results',
      ],
    },
    {
      name: 'Cerner / Oracle Health',
      category: 'EHR',
      connectionMethod: 'SMART on FHIR / FHIR R4',
      capabilities: [
        'Patient demographics and history',
        'Care team messaging',
        'Document exchange (CCDA)',
      ],
    },
    {
      name: 'Athenahealth',
      category: 'EHR',
      connectionMethod: 'FHIR R4 + athena API',
      capabilities: [
        'Scheduling and visit data',
        'Billing and claims status',
        'Referral workflows',
      ],
    },
    {
      name: 'eClinicalWorks',
      category: 'EHR',
      connectionMethod: 'HL7 v2 bridge + FHIR where available',
      capabilities: [
        'Patient chart sync',
        'Prescription refill requests',
        'Lab result delivery',
      ],
    },
    {
      name: 'Doxy.me / Zoom Health',
      category: 'Telehealth',
      connectionMethod: 'Embedded SDK + OAuth',
      capabilities: [
        'In-portal video visit launch',
        'HIPAA-compliant session recording',
        'Waiting room workflows',
      ],
    },
    {
      name: 'Surescripts',
      category: 'e-Prescribing',
      connectionMethod: 'NCPDP SCRIPT + REST',
      capabilities: [
        'Prescription refill routing',
        'Pharmacy notification',
        'Medication history lookup',
      ],
    },
  ],

  complianceSpotlight: {
    eyebrow: 'Trust by default',
    title: 'HIPAA-Compliant by Design',
    highlightText: 'HIPAA-Compliant',
    statusText: 'SOC 2 Type II · HIPAA · HITECH Compliant',
    pillars: [
      {
        icon: 'Shield',
        title: 'Data Encryption',
        description:
          'AES-256 encryption at rest, TLS 1.3 in transit. All PHI encrypted end-to-end with zero-knowledge architecture.',
      },
      {
        icon: 'Lock',
        title: 'Access Controls',
        description:
          'Role-based access with MFA, session management, and audit trails. Every access logged and traceable.',
      },
      {
        icon: 'Eye',
        title: 'Audit & Monitoring',
        description:
          'Real-time security monitoring, automated compliance reporting, and penetration testing. Continuous compliance validation.',
      },
    ],
    badges: [
      'HIPAA',
      'HITECH',
      'SOC 2 Type II',
      'HL7 FHIR',
      '21 CFR Part 11',
      'NIST 800-66',
    ],
  },

  complianceDetail: {
    frameworks: ['HIPAA', 'HITECH', 'SOC 2 Type II', '21 CFR Part 11'],
    safeguards: [
      {
        icon: 'Lock',
        title: 'Encryption at rest & in transit',
        description:
          'AES-256 for stored PHI, TLS 1.3 for all network traffic. Keys managed via Azure Key Vault with rotation policies.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity & access control',
        description:
          'Azure AD B2C with enforced MFA for all patient accounts, role-based access for staff, least-privilege defaults everywhere.',
      },
      {
        icon: 'FileText',
        title: 'Audit logging',
        description:
          'Every access event logged with timestamp, actor, resource, and outcome. Logs retained per HIPAA requirements and exportable for OCR review.',
      },
      {
        icon: 'Shield',
        title: 'PHI tokenization at gateway',
        description:
          'Patient data is tokenized at the gateway layer and never cached in the frontend. Zero PHI in the app layer reduces breach surface area.',
      },
      {
        icon: 'Activity',
        title: 'Session management',
        description:
          'Automatic timeouts, re-authentication for sensitive actions, and device fingerprinting to detect session hijacking attempts.',
      },
      {
        icon: 'Building2',
        title: 'Multi-region Azure hosting',
        description:
          'HIPAA-eligible Azure regions with automated failover, 99.95% uptime target, and private endpoints for network isolation.',
      },
    ],
    auditNote:
      'Every component is built to HIPAA technical safeguard requirements. We provide the documentation, audit trails, and security controls needed for an OCR review or SOC 2 audit. On request, we walk your compliance team through the control matrix before launch.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  relatedPages: [
    {
      title: 'Product Discovery',
      description:
        'De-risk your product idea with a structured sprint before writing code.',
      href: '/services/product-discovery',
      icon: 'Compass',
    },
    {
      title: 'MVP Development',
      description:
        'Ship a working product on a dual-track roadmap balancing speed and engineering quality.',
      href: '/services/mvp-development',
      icon: 'Rocket',
    },
    {
      title: 'Insurance Portals',
      description:
        'Policyholder, agent, and broker portals that streamline claims and policy workflows.',
      href: '/solutions/insurance-portals',
      icon: 'Shield',
    },
  ],

  faqs: [
    {
      question: 'How do you ensure the patient portal is HIPAA compliant?',
      answer:
        'HIPAA compliance is built into the architecture, not bolted on afterward. We implement all required technical safeguards: data encryption at rest and in transit, role-based access control, MFA, audit logging, automatic session timeouts, and business associate agreement (BAA) management. Before launch, we conduct a formal security assessment against HIPAA technical safeguard requirements and provide documentation suitable for OCR review.',
    },
    {
      question: 'Can the portal integrate with our existing EHR system?',
      answer:
        'Yes. We integrate with all major EHR platforms including Epic, Cerner, Athenahealth, and eClinicalWorks using FHIR R4 APIs, SMART on FHIR where available, or HL7 v2 messaging for legacy systems. We handle the integration complexity so your clinical staff do not need to change workflows. If your EHR has limited API access, we can build a secure middleware layer to bridge the gap.',
    },
    {
      question: 'What does implementation typically cost and how long does it take?',
      answer:
        'A full-featured patient portal typically takes 10–16 weeks from kickoff to production launch, depending on EHR integration complexity and the number of modules required. Investment typically ranges from $75,000 to $250,000 for a custom build. We offer phased delivery so the highest-value features — scheduling, secure messaging, and records access — go live first, letting you see ROI before the full project is complete.',
    },
    {
      question: 'Does the portal work on mobile devices?',
      answer:
        'The portal is built mobile-first with a responsive React/Next.js frontend that works on any device and screen size. We also offer Progressive Web App (PWA) capabilities so patients can install it on their home screen without a separate app store submission. For organizations that require a dedicated native app, we can scope that as an additional workstream.',
    },
    {
      question: 'How is patient data protected against breaches?',
      answer:
        'Patient data is encrypted at rest using AES-256 and in transit via TLS 1.3. We store PHI exclusively in Azure regions with HIPAA-eligible services, manage all secrets through Azure Key Vault, and enforce network isolation with private endpoints. Access is controlled by Azure AD B2C with MFA required for all patient accounts. We also conduct penetration testing before launch and can provide ongoing security monitoring.',
    },
    {
      question: 'Can you add telehealth video visits to the portal?',
      answer:
        'Yes. We integrate video visit workflows directly into the portal so patients and providers access appointments from a single platform rather than switching between tools. We support Doxy.me, Zoom for Healthcare, and Azure Communication Services depending on your existing contracts and compliance requirements. Telehealth sessions are scheduled through the same appointment module and can trigger automated reminders.',
    },
  ],

  imageFeatures: [
    {
      heading: 'Real-Time Lab Results at Your Patients\' Fingertips',
      description: 'Patients see lab values the moment they\'re released by the provider. No more waiting for phone calls or paper mail — instant access builds trust and reduces inbound support calls.',
      image: {
        src: '/images/solutions/patient-portals/feature-1.jpg',
        alt: 'Patient reviewing lab results on a mobile health app',
      },
    },
    {
      heading: 'Secure Messaging That Meets HIPAA Standards',
      description: 'HIPAA-compliant chat between patients and care teams with attachment support, read receipts, and audit trails. Keeps communication inside the portal instead of leaking to unsecured email.',
      image: {
        src: '/images/solutions/patient-portals/feature-2.jpg',
        alt: 'Doctor and patient communicating through a secure telehealth session',
      },
    },
  ],

  cta: {
    title: 'Ready to Build Your Patient Portal?',
    description:
      'Book a free 30-minute discovery call. We will review your EHR setup, compliance requirements, and patient engagement goals, then walk you through a realistic scope and timeline for your organisation.',
    primaryCta: { label: 'Book Discovery Call', href: '/contact' },
    secondaryCta: { label: 'See the architecture', href: '#signature' },
  },

  _unverified: [
    'hero.metrics[0] — "40–60% no-show reduction" is industry research range (HIMSS); confirm citation format with user before publishing.',
    'metricsStrip[0..3] — all four values are industry ranges or benchmarks, not measured client outcomes. Needs clear framing or citations.',
    'benefits[0].stat "3x" — not attributed to real client data. Reframe as industry benchmark or remove.',
    'benefits[1].stat "25–35%" — industry research range, needs HIMSS/Forrester citation.',
    'benefits[3].stat "10–16 weeks" — reflects our estimated typical delivery window; confirm against actual past engagements.',
    'integrations[*].capabilities — listed capabilities are typical FHIR integration features; confirm which ones we have actually shipped.',
    'integrations — "6 EHR/telehealth/e-Rx integrations" implies shipped volume we may not have. Confirm real integration count before launch.',
    'complianceDetail.frameworks — "SOC 2 Type II" listed; confirm whether we have SOC 2 Type II attestation or are in progress.',
    'complianceDetail.safeguards[5] — "99.95% uptime" target; confirm this is our actual SLA commitment.',
    'complianceSpotlight.statusText — "SOC 2 Type II · HIPAA · HITECH Compliant" is an attestation claim; confirm SOC 2 Type II status matches reality before publishing.',
    'complianceSpotlight.pillars — content lifted from legacy ComplianceShowcase, same verification status as complianceDetail.safeguards.',
    'complianceSpotlight.badges — "NIST 800-66" is a reference guidance (not a certification); confirm framing is accurate.',
    'faq[2] — pricing range "$75k–$250k" is placeholder. Confirm with user.',
  ],
};

export default patientPortals;
