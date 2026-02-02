import { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  Users,
  Award,
  TrendingUp,
  Code2,
  Cloud,
  Bot,
  Database,
  Settings,
  Palette,
  BarChart3,
  Shield,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema, generateFAQSchema, generateTeamOrganizationSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = constructMetadata({
  title: 'AIvanceWorks Team | Azure, AWS & Certified AI & Software Engineers',
  description:
    'AIvanceWorks employs US-based, Azure- and AWS-certified engineers with 10+ years experience. Team includes AI-102 certified AI specialists, AZ-204 developers, AZ-305 and AWS Solutions Architect Associates, CCNA, CSPO (Scrum Alliance), and CAPM (PMI). Senior-only policy—no junior developers on client projects.',
  canonical: `${SITE_CONFIG.url}/team`,
  keywords: [
    'AI consulting team',
    'Azure certified developers',
    'AWS certified',
    'software development team',
    'AI ML specialists',
    'cloud engineering team',
    'senior software engineers',
    'US-based developers',
    'Microsoft certified engineers',
    'CCNA',
    'CSPO',
    'CAPM',
    'Scrum Alliance',
    'PMI',
    'enterprise software team',
  ],
});

// Team role configurations with icons
const teamRoles = [
  {
    role: 'Solutions Architect',
    icon: Code2,
    gradient: 'from-purple-500 to-indigo-600',
    responsibilities: [
      'System design and architecture governance',
      'Cloud strategy and migration planning',
      'Technical leadership and solution reviews',
      'Architecture patterns and best practices',
    ],
    expertise: 'Enterprise architecture, microservices, cloud-native design',
    certifications: [
      'AZ-305 (Azure Solutions Architect)',
      'AWS Solutions Architect Associate',
      'CCNA (Cisco Certified Network Associate)',
      'AZ-204 (Azure Developer)',
    ],
  },
  {
    role: 'Senior Full-Stack Engineer',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-600',
    responsibilities: [
      'End-to-end application development',
      'Technical mentorship and code reviews',
      'API design and database optimization',
      'Performance tuning and scalability',
    ],
    expertise: 'React, Next.js, Node.js, .NET, TypeScript, Python',
    certifications: ['AZ-204 (Azure Developer)', 'AZ-900 (Azure Fundamentals)'],
  },
  {
    role: 'AI/ML Specialist',
    icon: Bot,
    gradient: 'from-pink-500 to-rose-600',
    responsibilities: [
      'Model selection and fine-tuning',
      'RAG framework implementation',
      'Agentic systems and LLM orchestration',
      'Prompt engineering and evaluation',
    ],
    expertise: 'Azure OpenAI, LangChain, semantic search, vector databases',
    certifications: ['AI-102 (Azure AI Engineer)', 'DP-420 (Cosmos DB Developer)'],
  },
  {
    role: 'DevOps Engineer',
    icon: Settings,
    gradient: 'from-orange-500 to-red-600',
    responsibilities: [
      'CI/CD pipeline automation',
      'Infrastructure as code (Terraform, Bicep)',
      'Container orchestration (Kubernetes)',
      'Monitoring and observability',
    ],
    expertise: 'Azure DevOps, GitHub Actions, Docker, Kubernetes, monitoring tools',
    certifications: ['AZ-400 (DevOps Engineer)', 'AZ-104 (Azure Administrator)'],
  },
  {
    role: 'Product Owner / Business Analyst',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-600',
    responsibilities: [
      'Requirement gathering and analysis',
      'Stakeholder engagement and communication',
      'Backlog management and prioritization',
      'User acceptance testing coordination',
    ],
    expertise: 'Agile methodologies, user story mapping, stakeholder management',
    certifications: ['CSPO (Scrum Alliance)', 'CAPM (PMI)'],
  },
  {
    role: 'QA Lead / Engineer',
    icon: Shield,
    gradient: 'from-yellow-500 to-amber-600',
    responsibilities: [
      'Test strategy and automation frameworks',
      'Performance and load testing',
      'Quality assurance best practices',
      'Bug tracking and resolution',
    ],
    expertise: 'Playwright, Selenium, JMeter, Azure Test Plans, CI/CD testing',
    certifications: ['ISTQB Certified Tester', 'Azure certifications'],
  },
  {
    role: 'UI/UX Designer',
    icon: Palette,
    gradient: 'from-teal-500 to-cyan-600',
    responsibilities: [
      'Design systems and component libraries',
      'User journey mapping and wireframing',
      'Accessibility compliance (WCAG 2.1)',
      'Responsive and mobile-first design',
    ],
    expertise: 'Figma, design tokens, React component design, usability testing',
    certifications: ['UX Design Certification', 'Accessibility Specialist'],
  },
  {
    role: 'Data Engineer / Analyst',
    icon: Database,
    gradient: 'from-indigo-500 to-purple-600',
    responsibilities: [
      'Data pipeline design and ETL processes',
      'Business intelligence and analytics',
      'Data warehouse architecture',
      'Data quality and governance',
    ],
    expertise: 'Azure Synapse, Power BI, SQL, Python, data modeling',
    certifications: ['DP-203 (Azure Data Engineer)', 'DP-900 (Azure Data Fundamentals)'],
  },
];

// Team configurations for different project sizes
const teamConfigurations = [
  {
    size: 'Small Project (MVP)',
    duration: '8-12 weeks',
    teamSize: '4-5 people',
    ideal: 'Startups, proof-of-concept, MVPs',
    roles: [
      { role: 'Solutions Architect', allocation: 'Part-time (50%)' },
      { role: 'Senior Full-Stack Engineers', allocation: '2 Full-time' },
      { role: 'QA Engineer', allocation: 'Part-time (25%)' },
      { role: 'Product Owner', allocation: 'Part-time (50%)' },
    ],
    outcomes: [
      'Rapid MVP delivery',
      'Validated product-market fit',
      'Production-ready foundation',
    ],
  },
  {
    size: 'Medium Project',
    duration: '12-24 weeks',
    teamSize: '5-7 people',
    ideal: 'Product development, platform builds',
    roles: [
      { role: 'Solutions Architect', allocation: 'Full-time' },
      { role: 'Senior Engineers (Backend/Frontend)', allocation: '3 Full-time' },
      { role: 'DevOps Engineer', allocation: 'Part-time (50%)' },
      { role: 'QA Engineer', allocation: 'Part-time (50%)' },
      { role: 'Product Owner', allocation: 'Part-time (75%)' },
    ],
    outcomes: [
      'Scalable architecture',
      'Automated CI/CD pipelines',
      'Comprehensive test coverage',
    ],
  },
  {
    size: 'Large Enterprise Project',
    duration: '6-12+ months',
    teamSize: '10-15+ people',
    ideal: 'Enterprise transformations, complex systems',
    roles: [
      { role: 'Solutions Architects', allocation: '1-2 Full-time' },
      { role: 'AI/ML Specialist', allocation: 'Full-time' },
      { role: 'Senior Developers', allocation: '6+ Full-time' },
      { role: 'Data Engineer', allocation: 'Full-time' },
      { role: 'DevOps Engineers', allocation: '1-2 Full-time' },
      { role: 'QA Lead + Engineers', allocation: '3 Full-time' },
      { role: 'Technical Project Manager', allocation: 'Full-time' },
    ],
    outcomes: [
      'Enterprise-grade systems',
      'Advanced AI/ML capabilities',
      'Multi-region scalability',
    ],
  },
];

// AEO-optimized FAQ data with direct answers in first sentence
const faqs = [
  {
    question: 'What certifications do AIvanceWorks team members hold?',
    answer:
      'AIvanceWorks engineers hold 12+ professional certifications across Microsoft Azure, AWS, Cisco, Scrum Alliance, and PMI. Azure certifications include AI-102 (Azure AI Engineer Associate), AZ-204 (Azure Developer Associate), AZ-305 (Azure Solutions Architect Expert), AZ-400 (DevOps Engineer Expert), DP-203 (Azure Data Engineer Associate), DP-420 (Azure Cosmos DB Developer Specialty), AZ-104 (Azure Administrator Associate), and AZ-900 (Azure Fundamentals). We also hold AWS Solutions Architect Associate, CCNA (Cisco Certified Network Associate), Certified Scrum Product Owner (CSPO) from Scrum Alliance, and Certified Associate in Project Management (CAPM) from Project Management Institute. We maintain 100% certification compliance through quarterly recertification programs and continuous upskilling.',
  },
  {
    question: 'How experienced are the team members at AIvanceWorks?',
    answer:
      'All AIvanceWorks team members have 10+ years of experience in their respective domains, with Solutions Architects averaging 15+ years in enterprise architecture. We maintain a strict senior-only hiring policy—no junior developers are staffed on client projects. Engineers bring deep expertise in modern frameworks (React 21, Next.js, .NET 10), cloud platforms (Azure, AWS), and AI/ML technologies (Azure OpenAI, LangChain, RAG frameworks).',
  },
  {
    question: 'What roles are available on AIvanceWorks teams?',
    answer:
      'AIvanceWorks provides 8 core team roles: Solutions Architect (system design, cloud strategy), Senior Full-Stack Engineer (end-to-end development), AI/ML Specialist (RAG, agentic AI, LLM orchestration), DevOps Engineer (CI/CD, infrastructure automation), Product Owner/Business Analyst (requirements, backlog management), QA Lead/Engineer (test automation, performance testing), UI/UX Designer (design systems, accessibility), and Data Engineer/Analyst (data pipelines, BI analytics).',
  },
  {
    question: 'Can I scale my team up or down during the project?',
    answer:
      'Yes, AIvanceWorks provides flexible team scaling with 2-week notice for changes. You can increase team capacity during peak development periods or reduce allocation after launch. We offer both staff augmentation (individual specialist roles) and full delivery teams (complete end-to-end capability). Team changes include structured knowledge transfer to ensure minimal disruption to project momentum.',
  },
  {
    question: 'Are AIvanceWorks teams based in the United States?',
    answer:
      'Yes, 100% of AIvanceWorks team members are US-based. This ensures timezone alignment for real-time collaboration during business hours (9 AM - 6 PM EST), cultural compatibility for seamless stakeholder engagement, immediate response capability for urgent production issues, and enterprise-grade security compliance without international data transfer concerns.',
  },
  {
    question: 'How much does an AIvanceWorks team cost?',
    answer:
      'AIvanceWorks team costs vary by configuration: Small Project teams (4-5 people, 8-12 weeks) cost $10,300-12,800/week, Medium Project teams (5-7 people, 12-24 weeks) cost $24,200-30,200/week, and Large Enterprise teams (10-15+ people, 6-12+ months) cost $73,600-92,600/week. Individual hourly rates range from $135-225 based on role and expertise level. All pricing is transparent with no hidden costs.',
  },
];

export default function TeamPage() {
  const pageUrl = `${SITE_CONFIG.url}/team`;
  
  // Enhanced schema graph for better SEO/GEO/AEO
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        'AIvanceWorks Team - Azure, AWS & Certified AI & Software Engineers',
        pageUrl
      ),
      generateFAQSchema(faqs),
      generateTeamOrganizationSchema(),
    ],
  };

  return (
    <>
      <JsonLd data={pageSchema} />

      {/* Hero Section - AEO optimized with direct answer in first 40-60 words */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-blue-400" />
              <span className="text-blue-400 font-semibold">Our Expert Team</span>
            </div>
            {/* Primary H1 with target keyword */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              AIvanceWorks Team: Azure, AWS & Certified AI & Software Engineers
            </h1>
            {/* AEO-optimized paragraph - direct answer format */}
            <p className="text-xl text-gray-200 mb-4 leading-relaxed">
              <strong>The AIvanceWorks team consists of US-based, Azure- and AWS-certified senior engineers</strong> with 10+ years of experience in AI/ML, cloud architecture, full-stack development, and DevOps automation.
            </p>
            {/* GEO-optimized stats paragraph */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Every team member holds multi-vendor certifications—Microsoft (<strong>AI-102, AZ-204, AZ-305, AZ-400</strong>), AWS Solutions Architect Associate, CCNA, CSPO (Scrum Alliance), and CAPM (PMI)—and follows our strict senior-only policy. We assemble cohesive teams of <strong>4-15+ specialists</strong> tailored to your project scope, delivering end-to-end capabilities from strategy to production deployment.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">10+ Years Experience</div>
                  <div className="text-sm text-gray-400">Senior engineers only</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Multi-Vendor Certified</div>
                  <div className="text-sm text-gray-400">Azure, AWS, CCNA, CSPO, CAPM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">US-Based Teams</div>
                  <div className="text-sm text-gray-400">Timezone-aligned delivery</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Build Your Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Summary Stats - GEO optimized with specific, quotable data */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600 text-sm">Professional Certifications (Azure, AWS, Cisco, PMI, Scrum Alliance)</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm">Years Minimum Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">US-Based Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600 text-sm">Core Specialist Roles</div>
            </div>
          </div>
          {/* GEO-optimized quotable statement */}
          <blockquote className="mt-8 max-w-3xl mx-auto p-6 bg-white border-l-4 border-blue-600 rounded-r-lg shadow-sm">
            <p className="text-lg text-gray-700 italic">
              &ldquo;AIvanceWorks maintains a strict senior-only policy: every team member has 10+ years of domain experience and current certifications from Microsoft Azure, AWS, Cisco (CCNA), Scrum Alliance (CSPO), and PMI (CAPM). No junior developers are staffed on client projects—you get enterprise-grade expertise from day one.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Build High-Performance Teams
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              AIvanceWorks follows a rigorous talent acquisition and team composition model designed
              to deliver enterprise-grade outcomes. We don&apos;t just staff projects—we assemble
              cohesive teams aligned to your technical requirements and business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certified Expertise</h3>
              <p className="text-gray-600 text-sm">
                All engineers hold multi-vendor certifications (Microsoft Azure, AWS Solutions Architect Associate, CCNA, CSPO, CAPM) with continuous recertification and upskilling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Senior-Only Policy</h3>
              <p className="text-gray-600 text-sm">
                Every team member has 10+ years in their domain. No junior developers learning on
                your budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600 text-sm">
                Regular internal hackathons, certification programs, and knowledge sharing to stay
                current with latest tools and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">End-to-End Capability</h3>
              <p className="text-gray-600 text-sm">
                From strategy and architecture to development, deployment, and ongoing support—full
                lifecycle delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Roles & Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Team Roles & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each role is staffed with certified professionals who bring deep technical knowledge,
              hands-on experience, and proven delivery track records.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamRoles.map((roleData, idx) => {
              const Icon = roleData.icon;
              return (
                <Card key={idx} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${roleData.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{roleData.role}</CardTitle>
                        <CardDescription className="text-sm">{roleData.expertise}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1.5">
                        {roleData.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {roleData.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Configurations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Scale Teams to Your Project Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AIvanceWorks tailors team composition based on project scope, timeline, and complexity.
              Choose from pre-configured team models or build a custom configuration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamConfigurations.map((config, idx) => (
              <Card
                key={idx}
                className={`border-2 ${
                  idx === 1 ? 'border-blue-500 shadow-xl' : 'border-gray-200'
                } hover:shadow-lg transition-shadow`}
              >
                <CardHeader>
                  {idx === 1 && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-2 w-fit">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-xl">{config.size}</CardTitle>
                  <CardDescription className="space-y-1">
                    <span className="block text-sm text-gray-600">
                      <strong>Team Size:</strong> {config.teamSize}
                    </span>
                    <span className="block text-sm text-gray-600">
                      <strong>Duration:</strong> {config.duration}
                    </span>
                    <span className="block text-sm text-gray-600">
                      <strong>Ideal For:</strong> {config.ideal}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm mb-3">Team Composition:</h4>
                    <ul className="space-y-2">
                      {config.roles.map((roleItem, i) => (
                        <li key={i} className="flex justify-between text-sm">
                          <span className="text-gray-700">{roleItem.role}</span>
                          <span className="text-gray-500 text-xs">{roleItem.allocation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Expected Outcomes:</h4>
                    <ul className="space-y-1.5">
                      {config.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Not sure which team size fits your project? Schedule a free consultation and we'll
              recommend the optimal team configuration.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Schedule Team Planning Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications & Credentials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multi-Vendor Certified Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every AIvanceWorks team member holds current certifications from Microsoft Azure, AWS,
              Cisco, Scrum Alliance, and PMI—ensuring best practices, security compliance, and
              platform expertise across cloud, networking, agile, and project management.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Microsoft Azure
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { cert: 'AI-102', name: 'Azure AI Engineer Associate', icon: Bot },
                { cert: 'AZ-204', name: 'Azure Developer Associate', icon: Code2 },
                { cert: 'AZ-400', name: 'DevOps Engineer Expert', icon: Settings },
                { cert: 'DP-203', name: 'Azure Data Engineer Associate', icon: Database },
                { cert: 'AZ-305', name: 'Azure Solutions Architect Expert', icon: Cloud },
                { cert: 'DP-420', name: 'Cosmos DB Developer Specialty', icon: Database },
                { cert: 'AZ-104', name: 'Azure Administrator Associate', icon: Shield },
                { cert: 'AZ-900', name: 'Azure Fundamentals', icon: Award },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="h-8 w-8 text-blue-600 mb-3" />
                    <div className="font-bold text-gray-900 mb-1">{item.cert}</div>
                    <div className="text-sm text-gray-600">{item.name}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              AWS, Cisco, Scrum Alliance & PMI
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { cert: 'AWS SAA', name: 'AWS Solutions Architect Associate', icon: Cloud },
                { cert: 'CCNA', name: 'Cisco Certified Network Associate', icon: Shield },
                { cert: 'CSPO', name: 'Certified Scrum Product Owner (Scrum Alliance)', icon: TrendingUp },
                { cert: 'CAPM', name: 'Certified Associate in Project Management (PMI)', icon: Award },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="h-8 w-8 text-blue-600 mb-3" />
                    <div className="font-bold text-gray-900 mb-1">{item.cert}</div>
                    <div className="text-sm text-gray-600">{item.name}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Continuous Certification & Upskilling
                </h3>
                <p className="text-gray-600">
                  We invest in ongoing training and recertification to keep our team current with
                  Azure and AWS platform updates, new AI/ML capabilities, and emerging best practices.
                  Team members participate in quarterly internal hackathons and knowledge-sharing
                  sessions to maintain technical excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about working with AIvanceWorks engineering teams
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Team?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project requirements. We'll recommend the
            optimal team configuration and provide a detailed proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-gray-100"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
