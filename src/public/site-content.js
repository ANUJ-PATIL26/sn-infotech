/**
 * Shared site content & IA for SN Infotech Ltd.
 * Used by Custom Elements and Velo page code.
 */
export const SITE = {
  name: 'SN Infotech Ltd',
  tagline: 'DevOps, Cloud & IT Consultancy',
  phone: '+44 7348 648904',
  phoneHref: 'tel:+447348648904',
  email: 'info@sninfotech.co.uk',
  emailHref: 'mailto:info@sninfotech.co.uk',
  address: {
    line1: '17 Prospect Close',
    line2: 'Hounslow, TW3 4JL',
    city: 'London',
    country: 'United Kingdom',
  },
  social: {
    whatsapp: 'https://wa.me/447931370076',
    linkedin: 'https://www.linkedin.com/company/72387414/',
    youtube: 'https://www.youtube.com/@sninfotech9829',
    facebook: 'https://www.facebook.com/people/SN-Infotech/100046295876059/',
  },
};

export const STATS = [
  { value: '25', label: 'Years’ experience' },
  { value: '125', label: 'Projects completed' },
  { value: '25', label: 'Awards' },
  { value: '400', label: 'Satisfied clients' },
];

export const CORE_SERVICES = [
  {
    id: '01',
    title: 'Cloud Services',
    href: '/cloud-solution',
    // Image: SN_IMAGE_MAP.services.cloudServices — edit src/assets/images/image-map.js
    imageKey: 'services.cloudServices',
    description:
      'Expert-led managed cloud that keeps critical systems reliable while your team focuses on product and growth.',
  },
  {
    id: '02',
    title: 'DevOps as a Service',
    href: '/devops-services',
    imageKey: 'services.devOpsService',
    description:
      'Cloud-native tooling, CI/CD, and platform engineering that unite development and operations around faster, safer releases.',
  },
  {
    id: '03',
    title: 'Full Managed IT Maintenance',
    href: '/services',
    imageKey: 'services.itMaintenance',
    description:
      'Round-the-clock design, deployment, and care for your infrastructure — updates, resilience, and performance included.',
  },
  {
    id: '04',
    title: 'Outsource IT Support',
    href: '/outsource-it',
    imageKey: 'services.outsourceIt',
    description:
      'A remote IT team that closes skills gaps, supports end users and applications 24/7, and frees your staff for higher-value work.',
  },
];

export const MEGA_MENU = [
  {
    label: 'Cloud Services',
    items: [
      { label: 'AWS services', href: '/services/cloud/aws', description: 'Amazon Web Services architecture, migration, and managed ops.', icon: 'cloud' },
      { label: 'Azure services', href: '/services/cloud/azure', description: 'Microsoft Azure cloud platforms built for scale and security.', icon: 'cloud' },
      { label: 'GCP services', href: '/services/cloud/gcp', description: 'Google Cloud Platform design, delivery, and optimisation.', icon: 'cloud' },
      { label: 'OCI services', href: '/services/cloud/oci', description: 'Oracle Cloud Infrastructure for enterprise workloads.', icon: 'cloud' },
      { label: 'Cloud consulting & migration', href: '/services/cloud/cloud-consulting-migration', description: 'Strategy, landing zones, and low-risk migration to the cloud.', icon: 'cloud' },
      { label: 'Managed cloud support', href: '/services/cloud/managed-cloud-support', description: 'Day-2 operations, monitoring, and cloud platform care.', icon: 'support' },
    ],
  },
  {
    label: 'DevOps',
    items: [
      { label: 'CI/CD automation', href: '/ci-cd', description: 'Reliable pipelines from commit to production.', icon: 'devops' },
      { label: 'Docker', href: '/docker', description: 'Containerisation strategy, images, and runtime ops.', icon: 'devops' },
      { label: 'Kubernetes', href: '/kubernetes', description: 'Production-grade Kubernetes clusters and operations.', icon: 'k8s' },
      { label: 'Cloud DevOps', href: '/services/devops/cloud-devops', description: 'Cloud-native DevOps delivery across AWS, Azure, GCP, and OCI.', icon: 'devops' },
      { label: 'Infrastructure as Code', href: '/services/devops/infrastructure-as-code', description: 'Repeatable infrastructure with Terraform, CloudFormation, and related tooling.', icon: 'devops' },
    ],
  },
  {
    label: 'Web Development',
    items: [
      { label: 'Custom web development', href: '/website-development', description: 'Bespoke websites built for performance and conversion.', icon: 'web' },
      { label: 'UI/UX design', href: '/ui-ux-design', description: 'Clear interfaces that make complex products feel simple.', icon: 'web' },
      { label: 'SEO & Technical optimization', href: '/services/web-development/seo-technical-optimization', description: 'Technical SEO, performance, and crawlability built into delivery.', icon: 'web' },
      { label: 'Frontend development', href: '/services/web-development/frontend-development', description: 'Modern, accessible frontends with React, Next.js, and related stacks.', icon: 'web' },
      { label: 'Backend development', href: '/services/web-development/backend-development', description: 'APIs, services, and data layers that power your product.', icon: 'web' },
      { label: 'Full stack development', href: '/services/web-development/full-stack-development', description: 'End-to-end web product delivery from UI to infrastructure.', icon: 'web' },
    ],
  },
  {
    label: 'AI Consultations',
    items: [
      { label: 'AI Consulting', href: '/services/ai-consultations/ai-consulting', description: 'Strategy, roadmaps, and practical AI adoption aligned to business outcomes.', icon: 'web' },
      { label: 'Generative AI solutions', href: '/services/ai-consultations/generative-ai-solutions', description: 'Practical GenAI products grounded in your data.', icon: 'web' },
      { label: 'Agentic AI solutions', href: '/services/ai-consultations/agentic-ai-solutions', description: 'Autonomous agent workflows that execute multi-step business tasks.', icon: 'web' },
      { label: 'Machine learning solutions', href: '/services/ai-consultations/machine-learning-solutions', description: 'Models that forecast demand, risk, and opportunity.', icon: 'web' },
      { label: 'NLP & computer vision', href: '/services/ai-consultations/nlp-computer-vision', description: 'Language and vision intelligence for documents, media, and operations.', icon: 'web' },
      { label: 'MLOps & AI infrastructure', href: '/services/ai-consultations/mlops-ai-infrastructure', description: 'Reliable pipelines to train, deploy, and monitor models.', icon: 'devops' },
    ],
  },
  {
    label: 'CyberSecurity',
    items: [
      { label: 'VAPT', href: '/services/cybersecurity/vapt', description: 'Vulnerability assessment and penetration testing for apps and infrastructure.', icon: 'support' },
      { label: 'SOC', href: '/services/cybersecurity/soc', description: 'Security operations centre design, tooling, and response readiness.', icon: 'support' },
      { label: 'DevSecOps', href: '/services/cybersecurity/devsecops', description: 'Security embedded into CI/CD and platform engineering.', icon: 'devops' },
      { label: 'Network & Application Security', href: '/services/cybersecurity/network-application-solutions', description: 'Secure networks, applications, and APIs across hybrid estates.', icon: 'cloud' },
      { label: 'IAM & GRC', href: '/services/cybersecurity/iam-grc', description: 'Identity, access, governance, risk, and compliance programmes.', icon: 'people' },
    ],
  },
  {
    label: 'IT Management',
    items: [
      { label: 'IT Recruitment', href: '/services/it-management/it-recruitment', description: 'Specialist hiring for cloud, DevOps, and engineering roles.', icon: 'people' },
      { label: 'Managed IT Services', href: '/services/it-management/managed-it-service', description: 'Proactive managed IT that keeps teams productive.', icon: 'support' },
      { label: 'Outsource IT', href: '/services/it-management/outsource-it', description: 'Extend your IT capability with a trusted remote team.', icon: 'support' },
      { label: 'IT Consulting', href: '/services/it-management/it-consulting', description: 'Strategy, audits, and roadmap guidance for modern IT.', icon: 'people' },
    ],
  },
  {
    label: 'More',
    items: [
      { label: 'About', href: '/about-us', description: 'Who we are and how we work with clients.', icon: 'people' },
      { label: 'Blog', href: '/blog', description: 'Insights on cloud, DevOps, and managed IT.', icon: 'web' },
      { label: 'Contact us', href: '/contact-us', description: 'Reach the SN Infotech team.', icon: 'support' },
      { label: 'Free consultation', href: '/free-consultation', description: 'Book a no-obligation consultation.', icon: 'people' },
    ],
  },
];

export const CLOUD_COMPUTING = [
  { label: 'AWS services', href: '/services/cloud/aws' },
  { label: 'Azure services', href: '/services/cloud/azure' },
  { label: 'GCP services', href: '/services/cloud/gcp' },
  { label: 'OCI services', href: '/services/cloud/oci' },
  { label: 'Cloud consulting & migration', href: '/services/cloud/cloud-consulting-migration' },
  { label: 'Managed cloud support', href: '/services/cloud/managed-cloud-support' },
];

export const CLOUD_CONSULTING = [
  { label: 'Managed IT Services', href: '/services/it-management/managed-it-service' },
  { label: 'Outsource IT', href: '/services/it-management/outsource-it' },
  { label: 'IT Recruitment', href: '/services/it-management/it-recruitment' },
  { label: 'IT Consulting', href: '/services/it-management/it-consulting' },
];

export const K8S_FEATURES = [
  { title: 'Save Money', description: 'Right-size clusters and cut idle spend without sacrificing reliability.' },
  { title: 'Certified', description: 'Practitioners experienced across AWS, GCP, and enterprise Kubernetes.' },
  { title: 'Deploy Code', description: 'Ship safely with repeatable release patterns and environment parity.' },
  { title: 'Data Backups', description: 'Protect stateful workloads with tested backup and restore paths.' },
  { title: 'CI / CD', description: 'Automate build, test, and deploy pipelines around your containers.' },
  { title: 'Log Aggregation', description: 'Centralise logs and alerts so issues surface before customers notice.' },
];

export const ONBOARDING_STEPS = [
  {
    step: '01',
    title: 'Share your goals',
    description: 'Tell us what you run today and where you need reliability, speed, or cost control.',
  },
  {
    step: '02',
    title: 'Meet your project manager',
    description: 'We review requirements, propose an approach, and agree a clear first sprint.',
  },
  {
    step: '03',
    title: 'Start a one-week trial',
    description: 'Work with us risk-free. If we are not the right fit in the first seven days, we refund fees per our terms.',
  },
];

export const PARTNERS = [
  { name: 'Amazon Web Services', imageKey: 'partners.aws' },
  { name: 'Google Cloud', imageKey: 'partners.googleCloud' },
  { name: 'Microsoft', imageKey: 'partners.microsoft' },
  { name: 'Kubernetes', imageKey: 'partners.kubernetes' },
];

export const CASE_STUDIES = [
  {
    title: 'Cloud migration without downtime',
    industry: 'SaaS',
    summary: 'Lifted a multi-tier application to managed cloud with blue/green cutover and hardened networking.',
    imageKey: 'caseStudies.one',
  },
  {
    title: 'DevOps platform for faster releases',
    industry: 'FinTech',
    summary: 'Introduced CI/CD, observability, and on-call practices that halved lead time for changes.',
    imageKey: 'caseStudies.two',
  },
  {
    title: 'Always-on IT support for a distributed team',
    industry: 'Professional services',
    summary: 'Outsourced helpdesk and infrastructure care so internal staff could focus on client delivery.',
    imageKey: 'caseStudies.three',
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Cloud Services', href: '/cloud-solution' },
      { label: 'DevOps', href: '/devops-services' },
      { label: 'Web Development', href: '/website-development' },
      { label: 'AI Consultations', href: '/services/ai-consultations/ai-consulting' },
      { label: 'CyberSecurity', href: '/services/cybersecurity/vapt' },
      { label: 'IT Management', href: '/services/it-management/managed-it-service' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about-us', description: 'Who we are and how we work with clients.' },
      { label: 'Blog', href: '/blog', description: 'Insights on cloud, DevOps, and managed IT.' },
      { label: 'Contact us', href: '/contact-us', description: 'Reach the SN Infotech team.' },
      { label: 'Free consultation', href: '/free-consultation', description: 'Book a no-obligation consultation.' },
    ],
  },
];
