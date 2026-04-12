import type { ServicePageData } from '@/types/pages';

// Archetype C — Regulated (adapted for a service engagement)
// Buyer: CISO / VP of Security / Head of Compliance / Compliance Officer at a
//        mid-market regulated firm (500–5,000 employees) in healthcare,
//        fintech/insurance, enterprise SaaS, or payments.
// Measured on: audit pass rates (HIPAA, SOC 2, PCI-DSS), time-to-attestation,
//              zero data breaches, mean-time-to-remediate, board-reportable
//              compliance posture.
// Dominant question: "Can you get us audit-ready for HIPAA / SOC 2 / PCI-DSS
//                     without running the program into the ground?"
// Key trust issue: burned by checkbox vendors — 200-page pen test reports with
//                  no remediation, "HIPAA compliant" claims with no BAA,
//                  certifications that don't map to real controls.
// Signature: ComplianceCoverageMatrix — data-viz matrix showing one control
//            set mapped across five frameworks, arguing "one program, many
//            auditors — not five separate projects."
//
// Composition is Archetype C adapted for service delivery (no integrations
// panel, no case study). Kept ProcessTimeline per §6.2 heuristic 3 (risk-
// averse buyers want process before proof). EngagementModels kept because
// CISOs need tiered scoping to bring to finance/CFO.
// 10 sections total — at density ceiling, justified for a security-buyer page.

const securityCompliance: ServicePageData = {
  slug: 'security-compliance',
  title: 'Security & Compliance Consulting',
  shortDescription:
    'Security architecture, identity, and compliance engineering for HIPAA, SOC 2, PCI-DSS, and ISO 27001 — one control set, one evidence package, audit-ready by design.',

  metaTitle: 'Security & Compliance Consulting | HIPAA, SOC 2, PCI-DSS Readiness',
  metaDescription:
    'Security and compliance engineering for HIPAA, SOC 2 Type II, PCI-DSS, ISO 27001, and GDPR. Zero-trust architecture, Entra ID, Key Vault, DevSecOps, and audit-ready evidence packages built on Azure.',
  keywords: [
    'security and compliance consulting',
    'HIPAA compliance consulting',
    'SOC 2 readiness',
    'PCI-DSS compliance services',
    'ISO 27001 consulting',
    'zero trust architecture',
    'identity and access management',
    'Azure security architecture',
    'DevSecOps consulting',
    'security assessment services',
    'penetration testing services',
    'cloud security consulting',
    'Entra ID implementation',
    'security compliance engineering',
  ],
  canonicalPath: '/services/security-compliance',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Security & Compliance', href: '/services/security-compliance' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'complianceDeepDive',
    'processTimeline',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'infrastructure',
  signatureComponent: 'ComplianceCoverageMatrix',
  heroIllustrationComponent: 'SecurityComplianceHeroIllustration',

  hero: {
    badge: 'Regulated Industries',
    headline: 'Security engineering that holds up to every audit you face.',
    subhead:
      'One Zero-Trust control set mapped to HIPAA, SOC 2, PCI-DSS, ISO 27001, and GDPR — built on Azure, documented for your auditor, and wired into the codebase instead of a binder on a shelf.',
    primaryCta: { label: 'Book a Compliance Call', href: '/contact' },
    secondaryCta: { label: 'See the control matrix', href: '#signature' },
  },

  // Audience test: a CISO evaluating a consulting partner reads the top-of-page
  // metrics in under 10 seconds. Every value is capability-framed (greenfield-
  // safe) — no uncited % claims. Each metric answers a specific CISO question:
  //  - "What frameworks are you covering?"
  //  - "Is this theater or real engineering?"
  //  - "What do I hand to my auditor?"
  //  - "Is identity done right?"
  metricsStrip: [
    {
      value: '5 Frameworks',
      label: 'Mapped control set',
      description: 'HIPAA · SOC 2 · PCI-DSS · ISO 27001 · GDPR',
    },
    {
      value: 'Zero Trust',
      label: 'Architecture baseline',
      description: 'NIST 800-207 aligned, Azure-native',
    },
    {
      value: 'Audit Package',
      label: 'Evidence by design',
      description: 'Policies, trails, and control artifacts',
    },
    {
      value: 'Entra-Native',
      label: 'Identity as the perimeter',
      description: 'MFA, RBAC, conditional access, PIM',
    },
  ],

  // Audience test: a CISO reading a feature grid is scanning for (a) do you
  // understand modern architecture, (b) do you cover identity + data + audit +
  // app security + compliance as a unified whole, (c) can you produce evidence.
  // Each feature maps to a concrete controls area — not marketing headings.
  features: [
    {
      icon: 'ShieldCheck',
      title: 'Zero-Trust Security Architecture',
      description:
        'Security architecture designed around NIST 800-207 Zero Trust principles — assume breach, verify explicitly, and enforce least privilege across every identity, device, network, and workload.',
    },
    {
      icon: 'KeyRound',
      title: 'Identity & Access Management',
      description:
        'Microsoft Entra ID, Entra External ID (B2C/B2B), conditional access, MFA, privileged identity management (PIM), and role-based access — identity as the modern perimeter, not the network.',
    },
    {
      icon: 'Lock',
      title: 'Data Protection & Key Management',
      description:
        'Encryption at rest (AES-256) and in transit (TLS 1.3), centralized secrets and certificate management through Azure Key Vault with automated rotation, and data classification tied to access policy.',
    },
    {
      icon: 'Activity',
      title: 'Security Monitoring & SIEM',
      description:
        'Microsoft Sentinel or Defender for Cloud deployment — centralized log aggregation, detection rules, automated playbooks, and 24/7 alerting tuned to your threat model and regulatory requirements.',
    },
    {
      icon: 'Code',
      title: 'DevSecOps & Application Security',
      description:
        'Security shifted left into the SDLC — SAST, DAST, dependency scanning, IaC policy-as-code (Checkov, tfsec), container image scanning, and CI gates so vulnerabilities surface before production.',
    },
    {
      icon: 'FileCheck',
      title: 'Compliance Engineering & Audit Readiness',
      description:
        'Control-to-framework mapping for HIPAA, SOC 2, PCI-DSS, ISO 27001, and GDPR. Policies, procedures, evidence artifacts, and audit trails produced as deliverables — not assembled the week before the audit.',
    },
  ],

  // The complianceDeepDive is the trust gate for this page. Every safeguard
  // names the technical implementation so a CISO can validate feasibility.
  // Audience test: a buyer sees this and asks "does this team actually know
  // how Azure does it?" — specific Azure service names answer that question
  // without fabricating outcomes.
  complianceDeepDive: {
    frameworks: ['HIPAA', 'SOC 2 Type II', 'PCI-DSS v4.0', 'ISO 27001', 'GDPR', 'HITECH'],
    safeguards: [
      {
        icon: 'Lock',
        title: 'Encryption everywhere',
        description:
          'AES-256 at rest for data and backups, TLS 1.3 in transit, envelope encryption for sensitive records. Keys held in Azure Key Vault (or HSM-backed Managed HSM for PCI) with documented rotation.',
      },
      {
        icon: 'UserCheck',
        title: 'Identity-first access control',
        description:
          'Entra ID with enforced MFA, conditional access policies tied to risk signals, Privileged Identity Management (PIM) for just-in-time elevation, and least-privilege RBAC baked into every resource group.',
      },
      {
        icon: 'FileText',
        title: 'Immutable audit logging',
        description:
          'Every access, change, and admin action logged to append-only storage. Retention tuned to HIPAA (6y), SOC 2, and PCI-DSS requirements. Exportable to your SIEM and packaged for auditor review.',
      },
      {
        icon: 'Network',
        title: 'Network isolation & private endpoints',
        description:
          'Private endpoints over public-access-enabled services, VNet integration for compute, NSG segmentation, and Azure Firewall or third-party NVAs where regulatory requirements demand perimeter control.',
      },
      {
        icon: 'Search',
        title: 'Vulnerability management & pen testing',
        description:
          'Continuous vulnerability scanning (Defender for Cloud, Qualys, or equivalent), quarterly third-party penetration testing, and remediation SLAs that match auditor expectations — not just scan-and-forget.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Incident response & breach readiness',
        description:
          'Documented IR runbooks aligned to NIST SP 800-61, tabletop exercise support, breach-notification playbooks scoped to HIPAA/GDPR timelines, and Sentinel automation for first-responder actions.',
      },
    ],
    auditNote:
      'Every control is engineered to satisfy the technical requirements of HIPAA, SOC 2 Type II, PCI-DSS v4.0, and ISO 27001 — and documented so your auditor, not a vendor binder, is the one signing off. We produce the policies, evidence artifacts, and control narratives your assessor actually asks for.',
    partnerAgreements: ['BAA', 'DPA', 'SLA'],
  },

  processSteps: [
    {
      title: 'Compliance Scoping & Threat Model',
      description:
        'Map which frameworks apply (HIPAA / SOC 2 / PCI-DSS / ISO 27001 / GDPR), the audit timeline the business is aiming for, and the in-scope systems. Build a threat model against those systems before a single control is chosen.',
      duration: 'Week 1–2',
      deliverable: 'Scope document, threat model, framework applicability matrix',
    },
    {
      title: 'Security Architecture & Control Design',
      description:
        'Design the Zero-Trust architecture, identity model, data-protection scheme, logging topology, and network segmentation. Map each control to the frameworks it satisfies so one design covers every audit.',
      duration: 'Week 2–4',
      deliverable: 'Security architecture doc, control-to-framework matrix, ADRs',
    },
    {
      title: 'Gap Assessment & Remediation Plan',
      description:
        'Compare current posture against the designed controls. Every gap is logged with severity, owner, effort estimate, and framework impact — so the remediation plan is prioritized by audit risk, not opinion.',
      duration: 'Week 3–5',
      deliverable: 'Gap assessment report, prioritized remediation roadmap',
    },
    {
      title: 'Implementation & Hardening',
      description:
        'Deploy Entra ID policies, Key Vault, Sentinel / Defender rules, private networking, DevSecOps gates, and policy-as-code. Implementation runs as code (Terraform / Bicep) so controls are version-controlled and reproducible.',
      duration: 'Week 4–12',
      deliverable: 'Hardened environment, IaC modules, policy-as-code repo, runbooks',
    },
    {
      title: 'Evidence, Audit-Readiness & Handover',
      description:
        'Produce the evidence package — policies, procedures, screenshots, log samples, control narratives — organized by framework. Walk your compliance team or external auditor through the control matrix and transition into ongoing monitoring.',
      duration: 'Week 10–14',
      deliverable: 'Evidence package, auditor walkthrough, monitoring handover',
    },
  ],

  engagementModels: [
    {
      name: 'Compliance Readiness Assessment',
      duration: '3–4 weeks',
      priceFrom: '$20,000',
      whatsIncluded: [
        'Framework applicability review (HIPAA / SOC 2 / PCI-DSS / ISO 27001)',
        'Security architecture and identity posture assessment',
        'Gap analysis against the mapped control set',
        'Prioritized remediation roadmap with effort estimates',
        'Executive-ready risk and readiness summary',
      ],
      suitableFor:
        'Leaders scoping an audit or compliance program — need a clear-eyed starting point and a funded plan',
      primaryCta: { label: 'Book Readiness Assessment', href: '/contact?security=assessment' },
    },
    {
      name: 'Implementation & Hardening',
      duration: '8–14 weeks',
      priceFrom: '$75,000',
      whatsIncluded: [
        'Zero-Trust architecture implementation on Azure',
        'Entra ID, Key Vault, Sentinel / Defender deployment',
        'DevSecOps pipeline gates and policy-as-code',
        'Control-to-framework evidence package',
        'Auditor walkthrough and remediation support',
        'Runbooks, policies, and handover documentation',
      ],
      suitableFor:
        'Organizations with a known audit deadline who need the controls engineered and the evidence produced',
      primaryCta: { label: 'Book Implementation Call', href: '/contact?security=implementation' },
      featured: true,
    },
    {
      name: 'Managed Security & Compliance',
      duration: 'Ongoing retainer',
      priceFrom: '$12,000 / month',
      whatsIncluded: [
        'Continuous posture monitoring and drift detection',
        'Monthly control review and evidence refresh',
        'Quarterly vulnerability scanning and remediation',
        'Annual penetration test coordination',
        'Audit liaison and evidence-package updates',
        'On-call incident response support',
      ],
      suitableFor:
        'Teams that need to stay audit-ready year-round without a full in-house security engineering function',
      primaryCta: { label: 'Discuss Retainer', href: '/contact?security=managed' },
    },
  ],

  relatedPages: [
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Security is only as strong as the infrastructure it runs on. See how we design and operate Azure landing zones with identity, secrets, and monitoring wired in from day one.',
      href: '/services/cloud-infrastructure',
      icon: 'Server',
      pageType: 'service',
    },
    {
      title: 'Patient Portals',
      description:
        'See our HIPAA control set applied to a real healthcare surface — portals, EHR integration, and PHI protection built on the same Zero-Trust baseline.',
      href: '/solutions/patient-portals',
      icon: 'HeartPulse',
      pageType: 'solution',
    },
    {
      title: 'DevOps & CI/CD',
      description:
        'Compliance lives in the pipeline. Our DevOps engagements bake SAST, DAST, IaC policy checks, and secret-scanning into the delivery flow — so controls ship with every release.',
      href: '/services/devops',
      icon: 'GitBranch',
      pageType: 'service',
    },
  ],

  faqs: [
    {
      question: 'Which compliance frameworks do you cover?',
      answer:
        'Our control set is engineered to satisfy HIPAA (with HITECH), SOC 2 Type II, PCI-DSS v4.0, ISO 27001, and GDPR — plus state-level privacy regimes (CCPA/CPRA) where relevant. The same architecture maps into multiple frameworks at once, so the engagement produces one evidence package rather than separate projects per audit. If your stack needs a framework we have not listed (FedRAMP, HITRUST, NIST CSF, CMMC), we can scope it and map controls accordingly.',
    },
    {
      question: 'Are you a licensed SOC 2 or HIPAA auditor?',
      answer:
        'No — and that separation matters. We are a security and compliance engineering partner, not an audit firm. We design, implement, and document the controls; an independent CPA firm performs your SOC 2 attestation, and an independent assessor conducts your HIPAA audit or PCI-DSS QSA review. This separation is what regulators expect. We partner with several audit firms and can make introductions if you need one.',
    },
    {
      question: 'How long until we are audit-ready?',
      answer:
        'Timelines depend on starting posture and framework. For an organization starting from a working Azure environment with no formal compliance program, the typical path is 3–4 weeks of assessment, followed by 8–14 weeks of implementation and hardening. SOC 2 Type II then requires an observation window (typically 3–6 months) before the formal audit. HIPAA readiness can be attested sooner. We build the plan backward from your target audit date, not forward from kickoff.',
    },
    {
      question: 'What Azure services do you use, and can you work with AWS?',
      answer:
        'Our depth is Azure-native — Entra ID for identity, Key Vault for secrets, Sentinel and Defender for Cloud for monitoring, Azure Policy for governance, and IaC via Bicep or Terraform. We also work in AWS environments (IAM, KMS, GuardDuty, Security Hub, Config) and hybrid setups. The control design is cloud-agnostic; the implementation obviously is not, and we recommend starting with one primary cloud unless multi-cloud is a hard requirement.',
    },
    {
      question: 'Do you handle penetration testing?',
      answer:
        'We coordinate and manage third-party penetration testing through vetted partners rather than self-attesting. That separation keeps the test independent, which is what PCI-DSS and most SOC 2 assessors require. We scope the test, review findings, prioritize remediation, and verify fixes. For internal red-team-style exercises, DevSecOps scanning, and continuous vulnerability management, we handle those in-house.',
    },
    {
      question: 'Can you integrate with our existing security tools?',
      answer:
        'Yes. Most mid-market organizations already have some combination of SIEM, MDR, endpoint, and IAM in place. We design around your existing stack — exporting logs to Splunk or Datadog instead of Sentinel if you prefer, integrating with Okta instead of replacing it, and feeding vulnerability data into your existing ticketing system. The goal is a coherent control set, not a rip-and-replace.',
    },
  ],

  cta: {
    title: 'Ready to stop reinventing your compliance program before every audit?',
    description:
      'Book a 30-minute call. We will walk through your target frameworks, current posture, and audit timeline — and outline what a unified security and compliance engagement looks like for your organization.',
    primaryCta: { label: 'Book Compliance Call', href: '/contact' },
    secondaryCta: { label: 'See the control matrix', href: '#signature' },
  },

  _unverified: [
    'engagementModels[*].priceFrom — placeholder indicative pricing; confirm with user before publishing.',
    'engagementModels[*].duration — typical ranges, confirm against real delivery estimates.',
    'processSteps durations — week ranges are indicative; confirm actual engagement cadence.',
    'complianceDeepDive.frameworks — "SOC 2 Type II" listed as a framework we design to; confirm whether we state readiness vs. attestation availability.',
    'faq[2] "3–4 weeks of assessment, 8–14 weeks of implementation" — indicative, confirm against delivery estimates.',
  ],
};

export default securityCompliance;
