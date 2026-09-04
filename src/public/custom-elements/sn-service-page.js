/**
 * <sn-service-page slug="devops"> — hero + benefits + approach for DevOps section pages.
 * Uses ANS tokens already on the Wix site (not a copy of the Vite spectrum layout).
 */
const TOOLS = '/src/assets/images/site/pages/devops-services/tools-svg';
const PLACE = '/src/assets/images/placeholders';

function escapeAttr(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const PAGES = {
  devops: {
    eyebrow: 'DevOps',
    hero: 'DevOps as a Service',
    lead: "We embed with your engineering organisation to run platforms, pipelines, and day-2 operations — so product teams ship faster without carrying the full platform burden alone.",
    ctaLabel: 'Talk to a DevOps lead',
    heroInteractive: true,
    featuresHeading: 'Outcomes we own with you',
    featuresLead:
      'We measure success the way engineering leaders do — not by hours logged, but by how quickly and safely your teams can change production.',
    galleryHeading: 'How the practice shows up',
    galleryCaptions: ['Delivery rhythm', 'Platform craft', 'Live observability'],
    gallery: [
      `${PLACE}/devops/clouddevops-hero.svg`,
      `${PLACE}/partner-logo-devops.svg`,
      `${PLACE}/chapter-monitor.svg`,
    ],
    features: [
      {
        title: 'Shorter path from commit to production',
        body: 'Shared pipelines, environment templates, and clear promotion rules so a change that used to take days ships in hours — without skipping controls.',
      },
      {
        title: 'Fewer failed releases',
        body: 'Automated checks, progressive delivery, and rollback paths cut the drama out of go-live. When something fails, you know what changed and how to recover.',
      },
      {
        title: 'Senior platform capacity on tap',
        body: 'Skip the six-month hiring wait. Embed practitioners who have already run multi-cloud platforms for regulated and growth-stage organisations.',
      },
      {
        title: 'One operating model everyone understands',
        body: 'RACI, runbooks, and on-call boundaries written down — so product, security, and platform stop negotiating ownership in the middle of an incident.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'A platform practice, not a ticket queue',
        body: [
          'DevOps-as-a-Service means we own outcomes: environment lead time, deployment frequency, change failure rate, and mean time to recovery. We sit alongside your product teams as an embedded platform practice — designing golden paths, operating critical systems, and coaching engineers so improvements stick.',
          'Engagements typically blend discovery workshops, a foundation sprint (identity, networking, CI/CD baselines), and a managed operating rhythm with weekly demos and monthly reliability reviews.',
        ],
        image: `${PLACE}/case-study-2.svg`,
        imageAlt: 'DevOps delivery illustration',
      },
      {
        heading: 'Observability wired into delivery',
        body: [
          'Shipping fast only works when you can see what breaks. We connect metrics, logs, and traces to the same pipelines that promote code — so incidents point back to the change that caused them, and on-call has a single pane for health.',
          'Whether you prefer Datadog, New Relic, CloudWatch, or an ELK stack, we standardise dashboards, alerts, and SLOs around the services that matter most to the business.',
        ],
        image: `${PLACE}/chapter-monitor.svg`,
        imageAlt: 'Monitoring and observability illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'Platform & delivery tools we run',
    toolsLead:
      'We specialise in the tools enterprises already trust — and we will meet you on the stack you have today rather than forcing a rip-and-replace.',
    tools: [
      { name: 'Terraform', src: `${TOOLS}/terraform.svg`, body: 'Infrastructure as Code modules, workspaces, and policy-as-code for safe multi-env provisioning.' },
      { name: 'Kubernetes', src: `${TOOLS}/kubernetes.svg`, body: 'Cluster baselines, GitOps add-ons, and workload packaging for production-grade runtimes.' },
      { name: 'Jenkins', src: `${TOOLS}/jenkins.svg`, body: 'Pipeline libraries, shared agents, and hardened controllers for regulated delivery.' },
      { name: 'GitHub', src: `${TOOLS}/github.svg`, body: 'Actions workflows, environments, and branch protection patterns that scale across squads.' },
      { name: 'Ansible', src: `${TOOLS}/ansible.svg`, body: 'Configuration management and operational playbooks for hybrid and bare-metal estates.' },
      { name: 'Datadog', src: `${TOOLS}/datadog.svg`, body: 'Unified observability — APM, infra, and synthetics aligned to your SLOs.' },
      { name: 'Docker', src: `${TOOLS}/docker.svg`, body: 'Image standards, registries, and runtime conventions that feed your clusters cleanly.' },
      { name: 'SonarQube', src: `${TOOLS}/sonarqube.svg`, body: 'Quality gates in CI so security and maintainability debt never become optional.' },
    ],
    approachHeading: 'How we deliver',
    approach: [
      { title: 'Assess & prioritise', body: 'We map your current delivery bottlenecks, cloud footprint, and compliance needs, then agree a 30–90 day outcome plan.' },
      { title: 'Build the foundation', body: 'Environments, identity, networking, and baseline automation land first so every later change sits on solid ground.' },
      { title: 'Automate the path to production', body: 'CI/CD, infrastructure as code, and observability become the default — not optional extras.' },
      { title: 'Operate & improve', body: 'Ongoing managed service: patching, incident response, capacity, and continuous improvement reviews.' },
    ],
    sections: [
      {
        heading: 'Built for regulated and growth-stage enterprises',
        body: [
          'Whether you need a temporary surge of DevOps capacity or a long-term platform partner, we structure engagements around measurable outcomes — release frequency, recovery time, and cost per environment — not vague “support hours”.',
          'Security reviews, change records, and audit trails are part of the operating model from day one, so compliance teams are partners rather than blockers.',
        ],
      },
    ],
  },
  kubernetes: {
    eyebrow: 'Kubernetes',
    hero: 'Managed Kubernetes',
    lead: "Run containers with confidence. We design, harden, and operate Kubernetes clusters so your workloads stay available, observable, and cost-aware in production.",
    ctaLabel: 'Plan your cluster',
    heroInteractive: true,
    heroHighlights: ["Hardened clusters","GitOps delivery","Day-2 ops"],
    heroStats: [{"value":"EKS · AKS · GKE","label":"Managed control planes"},{"value":"Policy-first","label":"RBAC & admission"},{"value":"Observable","label":"SLO-tied alerts"}],
    featuresHeading: 'What we run on your clusters',
    featuresLead:
      'Managed Kubernetes is more than “up and green”. We take responsibility for the layers that usually become tribal knowledge — so your developers only touch the APIs they need.',
    galleryHeading: 'Platform visuals',
    galleryCaptions: ['Cluster topology', 'Workload patterns', 'Cloud-native mesh'],
    gallery: [
      `${PLACE}/devops/k8s-hero.svg`,
      `${TOOLS}/kubernetes.svg`,
      `${PLACE}/band-cloud-mesh.svg`,
    ],
    features: [
      {
        title: 'Right-sized cluster foundations',
        body: 'Node pools, networking, and storage classes designed around your real workload mix — APIs, workers, and stateful services — not a default starter template.',
      },
      {
        title: 'Policy before pods hit production',
        body: 'RBAC, network policies, admission controls, and image scanning are part of how the cluster accepts change, not a checklist bolted on later.',
      },
      {
        title: 'Workloads that survive day two',
        body: 'Probes, limits, backups, and restore drills for both stateless and stateful apps — so “we run on Kubernetes” also means “we can recover”.',
      },
      {
        title: 'Signals your on-call can act on',
        body: 'Metrics, logs, and traces tied to services and SLOs. Alerts fire when customers would notice — not when a noisy node scrapes a threshold.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'Control plane you can trust',
        body: [
          'We treat the cluster as a product: versioned add-ons, documented upgrade windows, and capacity plans that match your traffic patterns. Node pools, CNI choices, and storage classes are decided from real workload profiles — not defaults left unexamined.',
          'GitOps (Flux or Argo CD) keeps desired state declarative, so drift is visible and rollbacks are a commit away.',
        ],
        image: `${PLACE}/partner-logo-kubernetes.svg`,
        imageAlt: 'Kubernetes platform illustration',
      },
      {
        heading: 'Workloads with guardrails',
        body: [
          'Network policies, Pod Security Standards, and admission webhooks stop unsafe configs before they land. Resource requests, limits, and HPA/VPA policies keep noisy neighbours from starving critical services.',
          'For stateful apps we design PVCs, backup jobs, and restore drills so “we have backups” means “we have recovered successfully”.',
        ],
        image: `${PLACE}/blog-thumb-2.svg`,
        imageAlt: 'Kubernetes workloads illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'Kubernetes ecosystem we operate',
    toolsLead:
      'From the control plane to the edge of observability — these are the building blocks we use every week on client clusters.',
    tools: [
      { name: 'Kubernetes', src: `${TOOLS}/kubernetes.svg`, body: 'Cluster lifecycle, upgrades, and multi-tenant layouts across EKS, AKS, and GKE.' },
      { name: 'Docker', src: `${TOOLS}/docker.svg`, body: 'Secure image builds and runtime conventions that feed your pods cleanly.' },
      { name: 'Terraform', src: `${TOOLS}/terraform.svg`, body: 'Reproducible cluster landing zones, IAM, and networking as code.' },
      { name: 'Helm / GitOps', src: `${TOOLS}/github.svg`, body: 'Declarative app delivery with pull-request promotion between environments.' },
      { name: 'Datadog', src: `${TOOLS}/datadog.svg`, body: 'Cluster and workload observability with actionable alerts, not noise.' },
      { name: 'ELK Stack', src: `${TOOLS}/elk-stack.svg`, body: 'Centralised logging when you need long retention and deep search.' },
      { name: 'Consul', src: `${TOOLS}/consul.svg`, body: 'Service discovery and mesh patterns for hybrid microservice estates.' },
      { name: 'New Relic', src: `${TOOLS}/newrelic.svg`, body: 'APM and infrastructure correlation for latency-sensitive services.' },
    ],
    approachHeading: 'Our Kubernetes approach',
    approach: [
      { title: 'Workload & platform discovery', body: 'We inventory apps, dependencies, SLOs, and constraints before recommending cluster topology.' },
      { title: 'Secure baseline build', body: 'Landing zone, add-ons, GitOps, and guardrails land together so day-one is already production-minded.' },
      { title: 'Migrate & cut over', body: 'Phased moves with rollback plans — blue/green or canary where the risk profile needs it.' },
      { title: 'Managed day-2 operations', body: 'Upgrades, capacity, cost reviews, and incident support so the platform stays healthy as you grow.' },
    ],
    sections: [
      {
        heading: 'Kubernetes without the operational drag',
        body: [
          'Most teams do not fail at “installing Kubernetes” — they struggle with upgrades, drift, and ownership. We take platform responsibility so your developers keep shipping features, not fighting the control plane.',
          'You get a named platform contact, a living runbook, and a clear RACI for incidents — so nobody wonders who owns the cluster at 2 a.m.',
        ],
      },
    ],
  },
  automation: {
    eyebrow: 'Automation',
    hero: 'Cloud & infrastructure automation',
    lead: "Replace click-ops and tribal knowledge with repeatable automation — from provisioning and configuration to self-healing operational workflows.",
    ctaLabel: 'Automate with us',
    heroInteractive: true,
    heroHighlights: ["IaC by default","Less click-ops","Self-healing paths"],
    heroStats: [{"value":"Terraform","label":"Provisioning standard"},{"value":"Ansible","label":"Config & ops playbooks"},{"value":"Repeatable","label":"Env parity across stages"}],
    featuresHeading: 'Toil we take off your plate',
    featuresLead:
      'Automation only pays when it removes the work people dread repeating. We start with the highest-frequency, highest-risk manual paths and make them boring — in a good way.',
    galleryHeading: 'Automation in the wild',
    galleryCaptions: ['IaC modules', 'Config baselines', 'Hybrid estates'],
    gallery: [
      `${PLACE}/devops/iac-hero.svg`,
      `${TOOLS}/ansible.svg`,
      `${PLACE}/chapter-server.svg`,
    ],
    features: [
      {
        title: 'Environments that build themselves',
        body: 'Terraform (or your IaC of choice) stands up accounts, networks, and baselines the same way every time — reviewed in PRs, never via console click-ops.',
      },
      {
        title: 'Servers that stay consistent',
        body: 'Ansible and config management keep agents, hardening, and middleware aligned across regions so drift stops being a weekly firefight.',
      },
      {
        title: 'Dev that mirrors production',
        body: 'Shared modules and naming mean staging behaves like prod. Fewer “works here” surprises and faster root-cause when something does break.',
      },
      {
        title: 'Recoveries you can rehearse',
        body: 'Common incident steps become playbooks and pipelines your team can run with confidence — not a PDF last updated two years ago.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'From snowflake servers to modules',
        body: [
          'We inventory what is still provisioned by hand, then wrap the highest-value paths in Terraform modules with clear inputs, outputs, and examples. Naming, tagging, and network patterns become policy — not tribal knowledge in someone’s notebook.',
          'Plan/apply pipelines with peer review mean every infrastructure change is visible, reversible, and tied to a ticket or PR.',
        ],
        image: `${PLACE}/band-cloud-mesh.svg`,
        imageAlt: 'Cloud automation mesh illustration',
      },
      {
        heading: 'Configuration that stays honest',
        body: [
          'Ansible playbooks and cloud-native config agents keep OS baselines, agents, and middleware aligned. Idempotent roles replace “run this script carefully” docs that rot the moment someone leaves.',
          'We add testing (Molecule or equivalent) and CI checks so a bad role never quietly lands on production hosts.',
        ],
        image: `${PLACE}/chapter-server.svg`,
        imageAlt: 'Server configuration illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'Automation stack we implement',
    toolsLead:
      'Pick the right tool for the layer — provisioning, configuration, secrets, and verification — then wire them into one coherent pipeline.',
    tools: [
      { name: 'Terraform', src: `${TOOLS}/terraform.svg`, body: 'Modules, remote state, and workspaces for multi-account cloud estates.' },
      { name: 'Ansible', src: `${TOOLS}/ansible.svg`, body: 'Idempotent roles for OS hardening, agents, and application config.' },
      { name: 'Consul', src: `${TOOLS}/consul.svg`, body: 'Service discovery and dynamic config for hybrid microservice fleets.' },
      { name: 'GitHub', src: `${TOOLS}/github.svg`, body: 'PR-based infra changes with required reviews and status checks.' },
      { name: 'Jenkins', src: `${TOOLS}/jenkins.svg`, body: 'Orchestration for longer-running automation and compliance jobs.' },
      { name: 'AWS CodeDeploy', src: `${TOOLS}/aws-codedeploy.svg`, body: 'Controlled rollouts when AWS-native deployment is the right fit.' },
      { name: 'CloudWatch', src: `${TOOLS}/amazon-cloudwatch.svg`, body: 'Event-driven automation hooks and operational metrics.' },
      { name: 'StrongSwan', src: `${TOOLS}/strongswan.svg`, body: 'VPN and connectivity automation for hybrid network paths.' },
    ],
    approachHeading: 'How we automate',
    approach: [
      { title: 'Find the highest-toil work', body: 'We score manual tasks by frequency, risk, and time cost — then automate the top offenders first.' },
      { title: 'Codify the golden path', body: 'Modules, policies, and naming standards become the shared language for every new environment.' },
      { title: 'Gate with tests & reviews', body: 'Plan/apply pipelines, policy checks, and peer review keep automation safe as it spreads.' },
      { title: 'Hand over with enablement', body: 'Docs, pairing, and office hours so your engineers can extend the automation without us as a bottleneck.' },
    ],
    sections: [
      {
        heading: 'Automation that compounds',
        body: [
          'Every environment you create should be cheaper than the last. We design automation programmes that reduce ticket volume, shorten onboarding for new services, and leave you with assets your team owns.',
          'Success looks like fewer emergency change windows, shorter onboarding for new services, and an audit trail that compliance teams can read without decoding folklore.',
        ],
      },
    ],
  },
  'ci-cd': {
    eyebrow: 'CI/CD',
    hero: 'CI/CD that ships with confidence',
    lead: "Build pipelines that make shipping the boring part of the job — quality and security built in, without slowing your squads down.",
    ctaLabel: 'Improve your pipelines',
    heroInteractive: true,
    heroHighlights: ["Safe promotions","Quality gates","Fast rollback"],
    heroStats: [{"value":"Commit → prod","label":"Pipeline ownership"},{"value":"Gated","label":"Security & quality checks"},{"value":"Recoverable","label":"Rollback in minutes"}],
    featuresHeading: 'What a strong pipeline unlocks',
    featuresLead:
      'CI/CD is the product that ships every other product. We design pipelines teams actually trust — fast enough to stay in flow, strict enough for audit.',
    galleryHeading: 'Inside the delivery line',
    galleryCaptions: ['Build agents', 'Source control', 'Quality gates'],
    gallery: [
      `${PLACE}/devops/cicd-hero.svg`,
      `${TOOLS}/github.svg`,
      `${TOOLS}/sonarqube.svg`,
    ],
    features: [
      {
        title: 'One path from PR to production',
        body: 'Build, test, scan, package, and deploy as a single story. New services inherit the same path instead of inventing YAML from scratch.',
      },
      {
        title: 'Gates that explain themselves',
        body: 'Quality and security checks fail fast with clear ownership. Flaky tests get fixed; vanity gates that everyone ignores get removed.',
      },
      {
        title: 'Safer ways to go live',
        body: 'Canary, blue/green, and feature-flag friendly deploys when a big-bang release is too risky for the business.',
      },
      {
        title: 'Feedback developers wait for',
        body: 'Caching, parallel jobs, and status that is readable at a glance — so waiting on CI does not become the longest part of the day.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'Pipelines as a product',
        body: [
          'We design reusable pipeline templates — not one-off YAML per repo. Shared libraries cover build, test, scan, package, and deploy so every new service inherits a working path to production on day one.',
          'Caching, parallel jobs, and sensible timeouts keep feedback loops short enough that developers stay in flow instead of waiting on a red build.',
        ],
        image: `${PLACE}/case-study-1.svg`,
        imageAlt: 'CI/CD pipeline illustration',
      },
      {
        heading: 'Quality gates people respect',
        body: [
          'SonarQube, unit/integration suites, and security scanners sit in the critical path — but with clear ownership of flaky tests and documented waivers. Gates that always fail get ignored; gates that explain themselves get used.',
          'Promotion between environments is explicit: artefacts are immutable, and production deploys leave an audit trail your change board can trust.',
        ],
        image: `${PLACE}/blog-thumb-3.svg`,
        imageAlt: 'Quality and delivery culture illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'CI/CD tools we design around',
    toolsLead:
      'We will standardise on the orchestrator you already run — or help you choose one — then deepen quality, speed, and promotion hygiene around it.',
    tools: [
      { name: 'Jenkins', src: `${TOOLS}/jenkins.svg`, body: 'Shared libraries, agents, and folders for large multi-team estates.' },
      { name: 'GitHub', src: `${TOOLS}/github.svg`, body: 'Actions, environments, and OIDC to cloud for keyless deploys.' },
      { name: 'TeamCity', src: `${TOOLS}/teamcity.svg`, body: 'Kotlin DSL pipelines and build chains for complex monorepos.' },
      { name: 'Bamboo', src: `${TOOLS}/bamboo.svg`, body: 'Atlassian-centric delivery with deployment projects and approvals.' },
      { name: 'Bitbucket', src: `${TOOLS}/bitbucket.svg`, body: 'Pipelines and branch permissions wired to your release process.' },
      { name: 'SonarQube', src: `${TOOLS}/sonarqube.svg`, body: 'Quality gates with actionable debt views, not vanity metrics.' },
      { name: 'Maven', src: `${TOOLS}/maven.svg`, body: 'Build standards for JVM services — caching, artefacts, and BOM hygiene.' },
      { name: 'AWS CodeDeploy', src: `${TOOLS}/aws-codedeploy.svg`, body: 'Blue/green and rolling deploys when AWS-native delivery fits best.' },
    ],
    approachHeading: 'How we build CI/CD',
    approach: [
      { title: 'Map the current path to production', body: 'We document every manual hop, approval, and fragile script that slows or scares your releases today.' },
      { title: 'Define the target pipeline', body: 'Branch strategy, environments, artefact flow, and ownership model agreed before we write YAML.' },
      { title: 'Implement & instrument', body: 'Pipelines go live with metrics — duration, failure rate, and deployment frequency — from the start.' },
      { title: 'Coach & iterate', body: 'We tune flaky tests, cache layers, and permissions until the pipeline is something developers trust.' },
    ],
    sections: [
      {
        heading: 'From tribal knowledge to a delivery system',
        body: [
          'A good pipeline is not a YAML file — it is a product. We treat CI/CD as a platform service with SLAs, templates, and continuous improvement, so every squad benefits from the same high bar.',
          'Expect dashboards for pipeline health, a backlog of DX improvements, and office hours so teams can extend templates without forking chaos.',
        ],
      },
    ],
  },
  docker: {
    eyebrow: 'Docker',
    hero: 'Docker & containerisation',
    lead: "Standardise how you package and run software with secure images, sensible local workflows, and production-ready container practices.",
    ctaLabel: 'Start containerising',
    heroInteractive: true,
    heroHighlights: ["Secure images","Local parity","Registry hygiene"],
    heroStats: [{"value":"Minimal bases","label":"Scanned & signed"},{"value":"Compose-ready","label":"Dev → CI → runtime"},{"value":"K8s-ready","label":"Runtime conventions"}],
    featuresHeading: 'Standards we put around containers',
    featuresLead:
      'Docker succeeds when every squad packages software the same safe way. We define the defaults — images, local workflows, registries, and runtime habits — so containers become boring infrastructure.',
    galleryHeading: 'From image to runtime',
    galleryCaptions: ['Container craft', 'Virtualisation layer', 'Cluster hand-off'],
    gallery: [
      `${PLACE}/devops/docker-hero.svg`,
      `${PLACE}/chapter-virtualisation.svg`,
      `${TOOLS}/kubernetes.svg`,
    ],
    features: [
      {
        title: 'Images that are safe to promote',
        body: 'Minimal bases, non-root defaults, multi-stage builds, and scanning in CI. SBOMs travel with artefacts so you know what you shipped.',
      },
      {
        title: 'Local workflows people keep using',
        body: 'Compose setups, documented ports, and hot-reload patterns that feel faster than installing the world on a laptop.',
      },
      {
        title: 'Registries with clear promotion rules',
        body: 'Immutable release tags, retention policies, and environment promotion that matches how your pipelines already work.',
      },
      {
        title: 'Runtime habits that stick in prod',
        body: 'Health checks, resource limits, secret mounts, and logging conventions ready before the first pod is scheduled.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'Images that are safe to ship',
        body: [
          'We define a base-image catalogue (distroless or slim where possible), enforce non-root users, and wire vulnerability scanning into CI. Multi-stage builds keep build tools out of runtime images, and SBOMs travel with every artefact you promote.',
          'Dockerfile linting and PR templates stop “works on my laptop” images from becoming production surprises.',
        ],
        image: `${PLACE}/partner-logo-cloud-native.svg`,
        imageAlt: 'Cloud-native container illustration',
      },
      {
        heading: 'From laptop to cluster without friction',
        body: [
          'Compose files, .env conventions, and documented ports make local parity real. The same image tags that developers run locally flow through CI into Kubernetes or your chosen runtime — with health checks, resource limits, and secret mounts already defined.',
          'We also tidy registries: retention policies, immutable tags for releases, and clear promotion rules between environments.',
        ],
        image: `${PLACE}/chapter-virtualisation.svg`,
        imageAlt: 'Container runtime illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'Container toolchain we standardise',
    toolsLead:
      'Docker is the packaging layer — we connect it cleanly to the build, scan, and runtime tools around it.',
    tools: [
      { name: 'Docker', src: `${TOOLS}/docker.svg`, body: 'Image builds, Compose workflows, and runtime conventions for every squad.' },
      { name: 'Kubernetes', src: `${TOOLS}/kubernetes.svg`, body: 'Deploy the same images with probes, limits, and rollout strategies.' },
      { name: 'Jenkins', src: `${TOOLS}/jenkins.svg`, body: 'Build agents and pipeline steps that produce signed, scanned images.' },
      { name: 'GitHub', src: `${TOOLS}/github.svg`, body: 'Actions-based builds with registry publish and environment promotion.' },
      { name: 'SonarQube', src: `${TOOLS}/sonarqube.svg`, body: 'Code quality before the image is even built.' },
      { name: 'Terraform', src: `${TOOLS}/terraform.svg`, body: 'Registry, IAM, and network plumbing as code alongside images.' },
      { name: 'Datadog', src: `${TOOLS}/datadog.svg`, body: 'Container metrics and APM so runtime behaviour stays visible.' },
      { name: 'ELK', src: `${TOOLS}/elk.svg`, body: 'Structured container logs when you need deep operational search.' },
    ],
    approachHeading: 'How we introduce containers',
    approach: [
      { title: 'Pilot a high-value service', body: 'We containerise one critical app end-to-end so the pattern is proven before a wider rollout.' },
      { title: 'Codify standards', body: 'Dockerfile linters, base image catalogue, and PR templates become the team default.' },
      { title: 'Connect to CI/CD & Kubernetes', body: 'Images flow through your pipelines into the runtime you already run — or the one we help you stand up.' },
      { title: 'Upskill the organisation', body: 'Workshops and pairing sessions so engineers understand layers, caching, and security trade-offs.' },
    ],
    sections: [
      {
        heading: 'Containers as a foundation — not a fad',
        body: [
          'Docker succeeds when packaging, security, and delivery habits improve together. We focus on practical standards your teams will keep using six months later — not a one-off demo image.',
          'Expect a living base-image policy, a short list of blessed registries, and training materials your next hire can follow without a tribal knowledge dump.',
        ],
      },
    ],
  },
  'website-development': {
    eyebrow: 'Web Development',
    hero: 'Custom website development',
    lead: "We design and build websites that represent your brand clearly, load quickly, and turn visitors into enquiries — without locking you into a brittle template.",
    ctaLabel: 'Start a website project',
    heroInteractive: true,
    heroHighlights: ["Conversion-led IA","Core Web Vitals","Editable post-launch"],
    heroStats: [{"value":"Fast","label":"Performance-first builds"},{"value":"Accessible","label":"WCAG-minded defaults"},{"value":"Measured","label":"Analytics from day one"}],
    featuresHeading: 'Sites that earn their keep',
    featuresLead: 'A website is not a brochure PDF in HTML. We treat it as a growth surface — clear narrative, fast pages, and a path to contact that marketing and sales can both stand behind.',
    galleryHeading: 'From brief to live site',
    galleryCaptions: [
      'Brand presence',
      'Content craft',
      'Launch readiness',
    ],
    gallery: [
      '/src/assets/images/placeholders/web/custom-hero.svg',
      '/src/assets/images/placeholders/blog-thumb-1.svg',
      '/src/assets/images/placeholders/hero-office.svg',
    ],
    features: [
      {
        title: 'Conversion-first information architecture',
        body: 'Pages structured around what visitors need next — services, proof, and a single clear ask — not a dump of every link the business has ever owned.',
      },
      {
        title: 'Performance baked into the build',
        body: 'Image strategy, critical CSS, and lean JS so Core Web Vitals stay healthy on real UK mobile networks, not just lab scores.',
      },
      {
        title: 'Brand-true without the fragility',
        body: 'Custom layouts and components that match your identity system — maintainable by your team, not a one-off that only the agency can touch.',
      },
      {
        title: 'Launch with measurement attached',
        body: 'Analytics, events, and SEO foundations land with the site so you know what works in week one, not month six.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'Marketing sites that stay editable',
        body: [
          'We separate design systems from content so your team can update copy, case studies, and campaigns without waiting on a developer for every headline change.',
          'Whether you need a multi-page corporate site or a focused campaign landing experience, the stack is chosen for speed to launch and cost of ownership — not novelty.',
        ],
        image: '/src/assets/images/placeholders/case-study-1.svg',
        imageAlt: 'Website delivery illustration',
      },
      {
        heading: 'Accessible by default',
        body: [
          'Semantic HTML, keyboard paths, contrast, and focus states are part of the build checklist — so accessibility is not a late remediation project.',
          'We also document component usage so future pages inherit the same standards instead of inventing new patterns every sprint.',
        ],
        image: '/src/assets/images/placeholders/about-team.svg',
        imageAlt: 'Collaborative website craft illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'Tools we build websites with',
    toolsLead: 'Modern front-end tooling with CMS options when editors need autonomy — picked to match your team’s skills, not a one-size stack.',
    tools: [
      {
        name: 'Next.js',
        src: '/src/assets/images/placeholders/web-tools/nextjs.svg',
        body: 'App Router sites with SSR/SSG where SEO and speed both matter.',
      },
      {
        name: 'React',
        src: '/src/assets/images/placeholders/web-tools/react.svg',
        body: 'Component systems that stay consistent across marketing pages.',
      },
      {
        name: 'TypeScript',
        src: '/src/assets/images/placeholders/web-tools/typescript.svg',
        body: 'Typed UI and content models that reduce production surprises.',
      },
      {
        name: 'Vite',
        src: '/src/assets/images/placeholders/web-tools/vite.svg',
        body: 'Fast local builds when a lean static or SPA surface is the right fit.',
      },
      {
        name: 'Tailwind',
        src: '/src/assets/images/placeholders/web-tools/tailwind.svg',
        body: 'Utility-first styling that keeps design tokens enforceable.',
      },
      {
        name: 'WordPress',
        src: '/src/assets/images/placeholders/web-tools/wordpress.svg',
        body: 'Editor-friendly CMS when content velocity is the priority.',
      },
      {
        name: 'Webflow',
        src: '/src/assets/images/placeholders/web-tools/webflow.svg',
        body: 'Design-led builds when marketing needs visual control post-launch.',
      },
      {
        name: 'Analytics',
        src: '/src/assets/images/placeholders/web-tools/analytics.svg',
        body: 'Event tracking and funnels wired before go-live.',
      },
    ],
    approachHeading: 'How we deliver websites',
    approach: [
      {
        title: 'Discover & map the journey',
        body: 'Goals, audiences, competitors, and must-win pages — agreed before pixels.',
      },
      {
        title: 'Design the system',
        body: 'Wireframes, UI kit, and content model so pages share one visual language.',
      },
      {
        title: 'Build & integrate',
        body: 'Responsive front-end, CMS (if needed), forms, and third-party tools.',
      },
      {
        title: 'Launch & hand over',
        body: 'QA, SEO checks, analytics, training, and a clear backlog for phase two.',
      },
    ],
    sections: [
      {
        heading: 'Websites that stay useful after launch day',
        body: [
          'We plan for the first six months of ownership — who edits what, how campaigns land, and what gets measured — so the site does not freeze the week after go-live.',
          'If you already have brand guidelines or a design system, we extend them. If you do not, we leave you with one that the next project can reuse.',
        ],
      },
    ],
  },
  'web-apps': {
    eyebrow: 'Web Development',
    hero: 'Web app development',
    lead: "We build web applications that encode your workflows — dashboards, portals, and product UIs your teams will actually finish using.",
    ctaLabel: 'Talk about your product',
    heroInteractive: true,
    heroHighlights: ["Workflow-first UX","Secure APIs","Ship in slices"],
    heroStats: [{"value":"React / Next","label":"Product UI stack"},{"value":"Typed","label":"TypeScript end-to-end"},{"value":"Operable","label":"Logs & envs included"}],
    featuresHeading: 'Product surfaces that ship',
    featuresLead: 'Web apps fail when scope floats and ownership is vague. We pair product thinking with engineering discipline so releases stay small, testable, and useful.',
    galleryHeading: 'Inside the product build',
    galleryCaptions: [
      'Workflow design',
      'Interface craft',
      'Delivery cadence',
    ],
    gallery: [
      '/src/assets/images/placeholders/web/fullstack-hero.svg',
      '/src/assets/images/placeholders/blog-thumb-3.svg',
      '/src/assets/images/placeholders/band-cloud-mesh.svg',
    ],
    features: [
      {
        title: 'Workflows mapped before code',
        body: 'We document roles, states, and edge cases with your operators — so the UI matches how work really happens.',
      },
      {
        title: 'APIs and auth done properly',
        body: 'Secure authentication, authorisation, and clean API contracts so front-end and back-end do not invent parallel truths.',
      },
      {
        title: 'Iteration without rewrite fear',
        body: 'Modular front-ends and typed boundaries so the next feature does not require gutting the last one.',
      },
      {
        title: 'Operational readiness on day one',
        body: 'Logging, environments, and deploy paths included — not bolted on when the first production incident arrives.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'Internal tools that cut queue time',
        body: [
          'Ops and support teams often live in spreadsheets because the “real” system is too slow to change. We build focused tools that remove the manual glue between systems.',
          'Success looks like fewer handoffs, clearer status, and screens that match the language your team already uses on the floor.',
        ],
        image: '/src/assets/images/placeholders/case-study-2.svg',
        imageAlt: 'Web application delivery illustration',
      },
      {
        heading: 'Customer-facing portals that stay trustworthy',
        body: [
          'Portals carry trust: invoices, tickets, documents, and account state. We design for clarity under stress — empty states, errors, and permissions that make sense.',
          'Security reviews, audit trails, and environment separation are part of the delivery model, not optional extras.',
        ],
        image: '/src/assets/images/placeholders/chapter-monitor.svg',
        imageAlt: 'Application monitoring illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'Stack we use for web apps',
    toolsLead: 'React/Next on the front, Node where it fits, TypeScript end-to-end — with room to meet an existing API estate rather than forcing a rewrite.',
    tools: [
      {
        name: 'React',
        src: '/src/assets/images/placeholders/web-tools/react.svg',
        body: 'Interactive UIs with shared component libraries across product surfaces.',
      },
      {
        name: 'Next.js',
        src: '/src/assets/images/placeholders/web-tools/nextjs.svg',
        body: 'Full-stack React when routing, data, and SEO need one coherent app.',
      },
      {
        name: 'TypeScript',
        src: '/src/assets/images/placeholders/web-tools/typescript.svg',
        body: 'Contracts between UI, APIs, and domain logic that stay honest.',
      },
      {
        name: 'Node.js',
        src: '/src/assets/images/placeholders/web-tools/nodejs.svg',
        body: 'API layers, BFF patterns, and integration services.',
      },
      {
        name: 'Vite',
        src: '/src/assets/images/placeholders/web-tools/vite.svg',
        body: 'Fast DX for SPA-style tools and admin surfaces.',
      },
      {
        name: 'Tailwind',
        src: '/src/assets/images/placeholders/web-tools/tailwind.svg',
        body: 'Consistent spacing and density for dense operational UIs.',
      },
      {
        name: 'Figma',
        src: '/src/assets/images/placeholders/web-tools/figma.svg',
        body: 'Design handoff and interactive prototypes before heavy build.',
      },
      {
        name: 'GitHub',
        src: '/src/assets/images/site/pages/devops-services/tools-svg/github.svg',
        body: 'PRs, reviews, and CI for every meaningful change.',
      },
    ],
    approachHeading: 'How we build web apps',
    approach: [
      {
        title: 'Frame the problem',
        body: 'Users, jobs-to-be-done, success metrics, and non-goals written down first.',
      },
      {
        title: 'Prototype the critical path',
        body: 'Clickable flows for the riskiest journeys before full engineering spend.',
      },
      {
        title: 'Build in vertical slices',
        body: 'Ship thin end-to-end features weekly instead of a big-bang unveil.',
      },
      {
        title: 'Harden & hand over',
        body: 'Tests, docs, runbooks, and enablement so your team can own the roadmap.',
      },
    ],
    sections: [
      {
        heading: 'Apps that survive the second quarter',
        body: [
          'We optimise for the version after launch — when real users stretch the edge cases. That means clean boundaries, observability, and a backlog your product owner can prioritise without archaeology.',
          'Whether greenfield or a rescue of an existing portal, we leave you with something maintainable by a small internal team.',
        ],
      },
    ],
  },
  ecommerce: {
    eyebrow: 'Web Development',
    hero: 'E-commerce development',
    lead: "We build online stores that make buying easy — clear catalogues, trustworthy checkout, and integrations that keep orders and stock in sync.",
    ctaLabel: 'Plan your storefront',
    heroInteractive: true,
    heroHighlights: ["Catalogue clarity","Trusted checkout","Ops-ready"],
    heroStats: [{"value":"Shopify / Woo","label":"Platform fit advice"},{"value":"Stripe-ready","label":"Payments & refunds"},{"value":"SEO-ready","label":"Indexable PDPs"}],
    featuresHeading: 'Commerce that converts cleanly',
    featuresLead: 'Shoppers abandon when friction shows up. We obsess over discovery, PDP clarity, cart honesty, and checkout confidence — then wire the back office so operations keep up.',
    galleryHeading: 'Storefront craft',
    galleryCaptions: [
      'Catalogue UX',
      'Checkout trust',
      'Ops continuity',
    ],
    gallery: [
      '/src/assets/images/placeholders/web/frontend-hero.svg',
      '/src/assets/images/placeholders/icon-cloud-services.svg',
      '/src/assets/images/placeholders/blog-thumb-2.svg',
    ],
    features: [
      {
        title: 'Catalogue experiences that sell',
        body: 'Filtering, search, and product pages structured for decisions — variants, proof, and shipping expectations up front.',
      },
      {
        title: 'Checkout without surprises',
        body: 'Payments, taxes, and delivery options presented clearly, with error recovery that does not punish the customer.',
      },
      {
        title: 'Integrations that stay in sync',
        body: 'ERP, inventory, CRM, and fulfilment hooks designed so stock and orders do not diverge overnight.',
      },
      {
        title: 'Growth hooks ready on day one',
        body: 'Promo rules, analytics events, and SEO foundations so merchandising and performance marketing can move fast.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'Platform choice with eyes open',
        body: [
          'Shopify, WooCommerce, or a headless storefront — we recommend based on catalogue complexity, team skills, and total cost of ownership, not fashion.',
          'Headless is powerful when you need custom experience; a managed platform is often faster when merchandising velocity matters most.',
        ],
        image: '/src/assets/images/placeholders/case-study-3.svg',
        imageAlt: 'E-commerce operations illustration',
      },
      {
        heading: 'Launch with operations in mind',
        body: [
          'Returns, refunds, stock sync, and order status emails are part of the scope — not afterthoughts that appear in week two support tickets.',
          'We also set up dashboards so merchandising and finance see the same numbers.',
        ],
        image: '/src/assets/images/placeholders/chapter-server.svg',
        imageAlt: 'Commerce systems illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'Commerce stack we implement',
    toolsLead: 'From managed platforms to headless builds — plus payments and analytics that keep revenue visible.',
    tools: [
      {
        name: 'Shopify',
        src: '/src/assets/images/placeholders/web-tools/shopify.svg',
        body: 'Managed commerce when speed to launch and merchandising tools win.',
      },
      {
        name: 'WooCommerce',
        src: '/src/assets/images/placeholders/web-tools/woocommerce.svg',
        body: 'WordPress-native stores for content-heavy brands.',
      },
      {
        name: 'Stripe',
        src: '/src/assets/images/placeholders/web-tools/stripe.svg',
        body: 'Payments, subscriptions, and resilient checkout flows.',
      },
      {
        name: 'Next.js',
        src: '/src/assets/images/placeholders/web-tools/nextjs.svg',
        body: 'Headless storefronts with SEO-friendly product pages.',
      },
      {
        name: 'React',
        src: '/src/assets/images/placeholders/web-tools/react.svg',
        body: 'Custom cart, PDP, and account experiences.',
      },
      {
        name: 'TypeScript',
        src: '/src/assets/images/placeholders/web-tools/typescript.svg',
        body: 'Safer integrations across catalogue and order APIs.',
      },
      {
        name: 'Analytics',
        src: '/src/assets/images/placeholders/web-tools/analytics.svg',
        body: 'Funnel events from browse to purchase.',
      },
      {
        name: 'SEO',
        src: '/src/assets/images/placeholders/web-tools/seo.svg',
        body: 'Structured data, crawl hygiene, and indexable PDPs.',
      },
    ],
    approachHeading: 'How we deliver e-commerce',
    approach: [
      {
        title: 'Audit the buying journey',
        body: 'Map drop-offs, catalogue pain, and operational bottlenecks.',
      },
      {
        title: 'Choose the platform fit',
        body: 'Managed vs headless decided against growth and ownership goals.',
      },
      {
        title: 'Build catalogue & checkout',
        body: 'PDPs, cart, payments, and fulfilment integrations in vertical slices.',
      },
      {
        title: 'Soft launch & optimise',
        body: 'UAT with real orders, then iterate on conversion and ops signals.',
      },
    ],
    sections: [
      {
        heading: 'Stores that operations can run',
        body: [
          'Pretty storefronts fail when stock lies or refunds stall. We design for the people packing boxes as much as the people browsing phones.',
          'Expect clear admin workflows, documented integrations, and a roadmap for the next merchandising season — not just a go-live screenshot.',
        ],
      },
    ],
  },
  cms: {
    eyebrow: 'Web Development',
    hero: 'CMS development',
    lead: "We build content platforms your editors can actually own — structured models, safe previews, and publishing workflows that keep the live site coherent.",
    ctaLabel: 'Plan your CMS',
    heroInteractive: true,
    heroHighlights: ["Structured models","Preview that matches","Editor ownership"],
    heroStats: [{"value":"Headless / classic","label":"Right CMS for the team"},{"value":"Guarded","label":"Roles & workflows"},{"value":"Stable FE","label":"Component contracts"}],
    featuresHeading: 'Content your editors can own',
    featuresLead: 'A CMS fails when everything is a free-text blob. We design models, components, and guardrails so publishing stays fast without becoming a design free-for-all.',
    galleryHeading: 'Editorial platforms',
    galleryCaptions: [
      'Content model',
      'Editor experience',
      'Publish confidence',
    ],
    gallery: [
      '/src/assets/images/placeholders/web/seo-hero.svg',
      '/src/assets/images/placeholders/icon-it-maintenance.svg',
      '/src/assets/images/placeholders/about-team.svg',
    ],
    features: [
      {
        title: 'Structured content, not page soup',
        body: 'Reusable blocks and typed fields that match how your team thinks about campaigns, services, and stories.',
      },
      {
        title: 'Preview that matches production',
        body: 'Editors see what customers will see — including drafts and locale variants — before anything goes live.',
      },
      {
        title: 'Roles and workflows that scale',
        body: 'Draft, review, and publish paths with the right permissions so brand and legal stay in the loop.',
      },
      {
        title: 'Front-ends that stay stable',
        body: 'Component contracts between CMS and site so a content change cannot silently break layout.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'Headless when it earns its keep',
        body: [
          'Headless CMS shines when multiple channels share content — web, app, email. We implement Contentful, Sanity, or similar when that flexibility is real.',
          'When a classic CMS is enough, we still bring the same modelling discipline so WordPress or Webflow do not become ungoverned sprawl.',
        ],
        image: '/src/assets/images/placeholders/blog-thumb-1.svg',
        imageAlt: 'Content platform illustration',
      },
      {
        heading: 'Migration without content loss',
        body: [
          'Moving from an old CMS is mostly mapping and cleanup. We inventory content, define redirects, and migrate in waves so SEO equity and editorial history survive.',
          'Training and playbooks land with the platform so day-two publishing does not depend on one power user.',
        ],
        image: '/src/assets/images/placeholders/chapter-o365.svg',
        imageAlt: 'Content operations illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'CMS platforms we implement',
    toolsLead: 'Headless or traditional — chosen for editor experience, localisation needs, and how your front-end team works.',
    tools: [
      {
        name: 'Contentful',
        src: '/src/assets/images/placeholders/web-tools/contentful.svg',
        body: 'Headless modelling for multi-channel brands.',
      },
      {
        name: 'Sanity',
        src: '/src/assets/images/placeholders/web-tools/sanity.svg',
        body: 'Real-time editorial with highly customisable studios.',
      },
      {
        name: 'WordPress',
        src: '/src/assets/images/placeholders/web-tools/wordpress.svg',
        body: 'Familiar editing with structured block themes.',
      },
      {
        name: 'Webflow',
        src: '/src/assets/images/placeholders/web-tools/webflow.svg',
        body: 'Visual CMS for marketing-led organisations.',
      },
      {
        name: 'Next.js',
        src: '/src/assets/images/placeholders/web-tools/nextjs.svg',
        body: 'Front-ends that consume CMS content with strong SEO.',
      },
      {
        name: 'React',
        src: '/src/assets/images/placeholders/web-tools/react.svg',
        body: 'Reusable presentation components bound to content types.',
      },
      {
        name: 'TypeScript',
        src: '/src/assets/images/placeholders/web-tools/typescript.svg',
        body: 'Generated types from content models where possible.',
      },
      {
        name: 'SEO',
        src: '/src/assets/images/placeholders/web-tools/seo.svg',
        body: 'Sitemaps, metadata, and redirect strategy baked in.',
      },
    ],
    approachHeading: 'How we deliver CMS work',
    approach: [
      {
        title: 'Audit content & roles',
        body: 'What exists, who publishes, and where the current system fights them.',
      },
      {
        title: 'Model the domain',
        body: 'Content types, relationships, and validation rules agreed with editors.',
      },
      {
        title: 'Build studio + front-end',
        body: 'Editor UX, previews, and components wired to the model.',
      },
      {
        title: 'Migrate, train, support',
        body: 'Content moves, redirects, workshops, and a hypercare window.',
      },
    ],
    sections: [
      {
        heading: 'Publishing that does not need a developer on call',
        body: [
          'The measure of a good CMS is how confidently a marketer can ship a campaign on a Friday. We design for that bar — with guardrails that protect brand and performance.',
          'You leave with documentation, component catalogues, and a content governance note your next hire can follow.',
        ],
      },
    ],
  },
  'ui-ux-design': {
    eyebrow: 'Web Development',
    hero: 'UI/UX design',
    lead: "We design interfaces that remove friction — from first sketch to developer-ready systems that stay coherent as your product grows.",
    ctaLabel: 'Book a design workshop',
    heroInteractive: true,
    heroHighlights: ["Flows before pixels","Design systems","Build-ready handoff"],
    heroStats: [{"value":"Figma-first","label":"Systems & prototypes"},{"value":"Inclusive","label":"A11y as a design input"},{"value":"Shipable","label":"Specs engineers trust"}],
    featuresHeading: 'Interfaces that remove friction',
    featuresLead: 'Pretty screens are not enough. We design for comprehension, speed, and accessibility — then hand engineers something they can build without guesswork.',
    galleryHeading: 'Design that travels',
    galleryCaptions: [
      'Research & flow',
      'Visual system',
      'Build-ready handoff',
    ],
    gallery: [
      '/src/assets/images/placeholders/web/uiux-hero.svg',
      '/src/assets/images/placeholders/case-study-1.svg',
      '/src/assets/images/placeholders/hero-office.svg',
    ],
    features: [
      {
        title: 'Flows before pixels',
        body: 'Journey maps and wireframes expose dead ends early — before visual polish hides structural problems.',
      },
      {
        title: 'Systems, not one-offs',
        body: 'Components, tokens, and patterns that keep marketing and product UI speaking the same visual language.',
      },
      {
        title: 'Accessibility as a design input',
        body: 'Contrast, focus, and inclusive interaction patterns decided in Figma — not patched after QA fails.',
      },
      {
        title: 'Handoff engineers trust',
        body: 'Specs, states, and redlines that match how your front-end team actually builds — including empty and error states.',
      },
    ],
    mediaBlocks: [
      {
        heading: 'Research that changes the brief',
        body: [
          'Short discovery with users and stakeholders often rewrites the problem. We capture jobs, pain, and language so the UI reflects reality instead of an org chart.',
          'When timelines are tight, we still run lightweight validation — clickable prototypes that surface confusion before code.',
        ],
        image: '/src/assets/images/placeholders/blog-thumb-3.svg',
        imageAlt: 'Design collaboration illustration',
      },
      {
        heading: 'Design systems that survive sprint pressure',
        body: [
          'A system dies when the next campaign invents a new button. We define usage rules, not just a pretty library, and pair with engineering so tokens land in code.',
          'The result is faster future work — new pages assemble from known parts instead of renegotiating every margin.',
        ],
        image: '/src/assets/images/placeholders/partner-logo-cloud-native.svg',
        imageAlt: 'Design system illustration',
        reverse: true,
      },
    ],
    toolsHeading: 'Design toolchain we use',
    toolsLead: 'Figma at the centre — with prototyping and front-end-aware delivery so design does not die in a PDF.',
    tools: [
      {
        name: 'Figma',
        src: '/src/assets/images/placeholders/web-tools/figma.svg',
        body: 'UI kits, prototypes, and collaborative critique.',
      },
      {
        name: 'Framer',
        src: '/src/assets/images/placeholders/web-tools/framer.svg',
        body: 'High-fidelity motion and marketing prototypes when needed.',
      },
      {
        name: 'React',
        src: '/src/assets/images/placeholders/web-tools/react.svg',
        body: 'Reference implementations that prove the system in code.',
      },
      {
        name: 'Next.js',
        src: '/src/assets/images/placeholders/web-tools/nextjs.svg',
        body: 'Living style surfaces and marketing implementations.',
      },
      {
        name: 'Tailwind',
        src: '/src/assets/images/placeholders/web-tools/tailwind.svg',
        body: 'Token-aligned utility mapping for engineers.',
      },
      {
        name: 'TypeScript',
        src: '/src/assets/images/placeholders/web-tools/typescript.svg',
        body: 'Typed component APIs that mirror design variants.',
      },
      {
        name: 'HTML/CSS',
        src: '/src/assets/images/placeholders/web-tools/htmlcss.svg',
        body: 'Semantic foundations and accessible patterns.',
      },
      {
        name: 'Analytics',
        src: '/src/assets/images/placeholders/web-tools/analytics.svg',
        body: 'Behaviour signals that feed the next design iteration.',
      },
    ],
    approachHeading: 'How we design',
    approach: [
      {
        title: 'Understand the job',
        body: 'Users, constraints, success metrics, and brand boundaries.',
      },
      {
        title: 'Explore structure',
        body: 'Flows, IA, and low-fi wireframes stress-tested with stakeholders.',
      },
      {
        title: 'Define the system',
        body: 'Visual language, components, and accessibility rules in Figma.',
      },
      {
        title: 'Validate & hand off',
        body: 'Prototype tests, engineering pairing, and a living component map.',
      },
    ],
    sections: [
      {
        heading: 'Design that engineering can finish',
        body: [
          'We measure design quality by what ships. That means clear states, realistic content, and collaboration with developers throughout — not a big reveal at the end.',
          'Whether you need a marketing redesign or a product UI overhaul, you leave with artefacts your next sprint can consume immediately.',
        ],
      },
    ],
  },
};

Object.assign(
  PAGES,
  globalThis.SN_CLOUD_SERVICE_PAGES || {},
  globalThis.SN_DEVOPS_SERVICE_PAGES || {},
  globalThis.SN_WEB_SERVICE_PAGES || {},
  globalThis.SN_AI_SERVICE_PAGES || {},
  globalThis.SN_CYBER_SERVICE_PAGES || {},
  globalThis.SN_IT_SERVICE_PAGES || {},
  globalThis.SN_MORE_PAGES || {}
);

const PAGE_CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--ink, #22333b); }
  *, *::before, *::after { box-sizing: border-box; }
  .hero {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    min-height: calc(100svh - 70px);
    min-height: calc(100dvh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: #0a0908;
    border-bottom: 1px solid #ddd6ce;
  }
  :host-context([data-theme="dark"]) .hero {
    border-color: #33444c;
  }
  .hero-bg-video {
    position: absolute; inset: 0; z-index: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center 30%;
    pointer-events: none;
  }
  .hero::before {
    content: "";
    position: absolute; inset: 0; z-index: 1;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba(247,246,243,0.92) 0%,
      rgba(247,246,243,0.76) 28%,
      rgba(247,246,243,0.34) 48%,
      rgba(247,246,243,0) 65%,
      transparent 65%
    );
  }
  :host-context([data-theme="dark"]) .hero::before {
    background: linear-gradient(
      90deg,
      rgba(10,9,8,0.9) 0%,
      rgba(10,9,8,0.72) 28%,
      rgba(10,9,8,0.32) 48%,
      rgba(10,9,8,0) 65%,
      transparent 65%
    );
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-bg-video { display: none; }
  }
  .hero-inner {
    position: relative; z-index: 2;
    width: min(100% - (var(--gutter) * 2), var(--max));
    margin: 0 auto;
    padding: clamp(1.25rem, 3vh, 2.5rem) 0;
  }
  .hero-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.95fr);
    gap: clamp(1.75rem, 4vw, 3.25rem);
    align-items: center;
  }
  .hero-copy { min-width: 0; }
  .eyebrow {
    display: inline-flex; align-items: center; gap: 0.65rem;
    color: #5e503f; font-size: clamp(0.8rem, 1.1vw, 0.95rem); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 700; margin: 0 0 clamp(0.85rem, 1.6vh, 1.15rem);
  }
  :host-context([data-theme="dark"]) .eyebrow { color: #a9927d; }
  .eyebrow::before { content: ""; width: 2.25rem; height: 3px; background: currentColor; flex-shrink: 0; }
  .hero h1 {
    margin: 0 0 clamp(0.9rem, 1.8vh, 1.25rem); font-family: var(--font-heading);
    font-size: clamp(2.6rem, 5.2vw, 4.15rem); line-height: 1.05; letter-spacing: -0.035em;
    color: #22333b; width: 100%; max-width: 14ch;
  }
  :host-context([data-theme="dark"]) .hero h1 { color: #f4f7fb; }
  .lead {
    margin: 0 0 clamp(1.25rem, 2.4vh, 1.75rem); width: 100%; max-width: 38rem; color: #6b5f52;
    font-size: clamp(1.1rem, 1.65vw, 1.35rem); line-height: 1.55;
  }
  :host-context([data-theme="dark"]) .lead { color: #d4cbc2; }
  .hero-actions {
    display: flex; flex-wrap: wrap; gap: 0.75rem;
    margin: 0 0 clamp(1.35rem, 2.6vh, 1.85rem);
  }
  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    min-height: 54px; padding: 0 1.45rem; border-radius: 6px;
    background: #5e503f; color: #fff; font-weight: 600; text-decoration: none;
    font-size: clamp(0.98rem, 1.15vw, 1.08rem);
    transition: background var(--duration) var(--ease), transform var(--duration) var(--ease-out);
  }
  .btn:hover { background: #0a0908; transform: translateY(-2px); }
  .btn-secondary {
    background: transparent; color: #22333b; border: 1.5px solid #ddd6ce;
  }
  .btn-secondary:hover { border-color: #5e503f; color: #5e503f; background: transparent; }
  :host-context([data-theme="dark"]) .btn-secondary {
    color: #f4f7fb; border-color: #33444c;
  }
  .hero-highlights {
    display: flex; flex-wrap: wrap; gap: 0.55rem;
    margin: 0 0 clamp(1.25rem, 2.4vh, 1.75rem);
    list-style: none; padding: 0;
  }
  .hero-highlights li {
    display: inline-flex; align-items: center; gap: 0.45rem;
    padding: 0.55rem 0.9rem; border-radius: 999px;
    border: 1px solid #c4b8a8; background: rgba(94, 80, 63, 0.06);
    color: #22333b; font-size: clamp(0.85rem, 1.05vw, 0.95rem); font-weight: 650;
  }
  .hero-highlights li::before {
    content: ""; width: 0.45rem; height: 0.45rem; border-radius: 50%;
    background: #5e503f; flex-shrink: 0;
  }
  :host-context([data-theme="dark"]) .hero-highlights li {
    background: rgba(169, 146, 125, 0.1); border-color: #4a5a62; color: #f4f7fb;
  }
  :host-context([data-theme="dark"]) .hero-highlights li::before { background: #a9927d; }
  .hero-stats {
    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem; width: 100%; max-width: 34rem;
  }
  .hero-stat {
    padding: 0.9rem 0.95rem; border-radius: 6px;
    border: 1px solid #ddd6ce; background: #fff;
  }
  :host-context([data-theme="dark"]) .hero-stat {
    background: #2a3a42; border-color: #33444c;
  }
  .hero-stat strong {
    display: block; font-family: var(--font-heading);
    font-size: clamp(1.15rem, 1.8vw, 1.45rem); color: #22333b;
    margin: 0 0 0.2rem; line-height: 1.15;
  }
  :host-context([data-theme="dark"]) .hero-stat strong { color: #f4f7fb; }
  .hero-stat span {
    display: block; color: #6b5f52;
    font-size: clamp(0.78rem, 1vw, 0.88rem); line-height: 1.35;
  }
  :host-context([data-theme="dark"]) .hero-stat span { color: #d4cbc2; }
  .hero-media-wrap { position: relative; min-width: 0; }
  .hero-media {
    width: 100%; border-radius: 10px; overflow: visible;
    border: 0; background: transparent;
    aspect-ratio: auto; min-height: 0;
    display: grid; place-items: center; padding: 0;
    box-shadow: none;
  }
  :host-context([data-theme="dark"]) .hero-media {
    background: transparent; border-color: transparent;
  }
  .hero-media img {
    width: 112%; max-width: none; height: auto; max-height: min(54vh, 520px);
    object-fit: contain; display: block;
    transform: translateX(20%);
    filter: drop-shadow(0 16px 36px rgba(0,0,0,0.14));
  }
  .hero-media-badge { display: none; }
  :host-context([data-theme="dark"]) .hero-media-badge {
    background: rgba(42, 58, 66, 0.94); border-color: #33444c;
  }
  .hero-media-badge strong {
    display: block; font-family: var(--font-heading);
    font-size: clamp(0.95rem, 1.2vw, 1.05rem); color: #22333b; margin: 0 0 0.15rem;
  }
  :host-context([data-theme="dark"]) .hero-media-badge strong { color: #f4f7fb; }
  .hero-media-badge span {
    display: block; color: #6b5f52; font-size: var(--fs-xs); line-height: 1.4;
  }
  :host-context([data-theme="dark"]) .hero-media-badge span { color: #d4cbc2; }
  @media (max-width: 900px) {
    .hero { min-height: 0; height: auto; align-items: flex-start; }
    .hero-layout { grid-template-columns: 1fr; }
    .hero h1 { max-width: none; font-size: clamp(2.35rem, 9vw, 3.25rem); }
    .hero-stats { max-width: none; }
    .hero-media { min-height: 240px; aspect-ratio: 16 / 11; }
    .hero-media img { transform: none; width: 100%; max-width: 100%; }
  }
  @media (max-width: 560px) {
    .hero-stats { grid-template-columns: 1fr; }
    .hero-actions { width: 100%; }
    .btn { width: 100%; }
  }
  .inner { width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; }
  .band { padding: clamp(3rem, 6vw, 4.5rem) 0; }
  .band-alt { background: #f2f4f3; border-block: 1px solid #ddd6ce; }
  :host-context([data-theme="dark"]) .band-alt { background: #1a262c; border-color: #33444c; }
  .section-head {
    margin: 0 0 1.5rem; font-family: var(--font-heading);
    font-size: var(--fs-h2); color: #22333b; max-width: none; width: 100%;
  }
  :host-context([data-theme="dark"]) .section-head { color: #f4f7fb; }
  .section-lead {
    margin: -0.75rem 0 1.5rem; max-width: none; width: 100%; color: #6b5f52;
    font-size: var(--fs-body-lg); line-height: var(--lh-body);
  }
  :host-context([data-theme="dark"]) .section-lead { color: #d4cbc2; }
  .outcomes {
    display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;
  }
  .outcome {
    position: relative;
    padding: 1.25rem 1.25rem 1.25rem calc(1.25rem + 0.25rem);
    border: 1px solid #ddd6ce; border-radius: 6px; background: #fff;
    border-left: 3px solid #5e503f;
    transition: transform 220ms var(--ease), border-color 220ms var(--ease), box-shadow 220ms var(--ease);
  }
  :host-context([data-theme="dark"]) .outcome {
    background: #2a3a42; border-color: #33444c; border-left-color: #a9927d;
  }
  .outcome:hover {
    transform: translateY(-2px);
    border-color: #c4b8a8;
    box-shadow: 0 8px 24px rgba(34, 51, 59, 0.08);
  }
  :host-context([data-theme="dark"]) .outcome:hover { border-color: #4a5a62; }
  .outcome-num {
    display: block; margin-bottom: 0.65rem;
    font-family: var(--font-heading); font-weight: 800; font-size: var(--fs-xs);
    letter-spacing: 0.08em; color: #5e503f;
  }
  :host-context([data-theme="dark"]) .outcome-num { color: #a9927d; }
  .outcome h3 {
    margin: 0 0 0.55rem; font-family: var(--font-heading); font-size: var(--fs-h3);
    color: #22333b; line-height: var(--lh-heading); max-width: none;
  }
  :host-context([data-theme="dark"]) .outcome h3 { color: #f4f7fb; }
  .outcome p { margin: 0; color: #6b5f52; font-size: var(--fs-body); line-height: 1.5; }
  :host-context([data-theme="dark"]) .outcome p { color: #d4cbc2; }
  .mosaic-band { padding: clamp(3rem, 6vw, 4.5rem) 0; }
  .mosaic {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    min-height: min(420px, 52vw);
  }
  .mosaic-item { margin: 0; display: flex; flex-direction: column; gap: 0.55rem; min-height: 0; }
  .mosaic-hero { grid-row: 1 / span 2; }
  .mosaic-frame {
    flex: 1; min-height: 0;
    border-radius: 0; overflow: visible;
    border: none; background: transparent;
    display: grid; place-items: center;
    padding: 0;
    box-shadow: none;
    transition: transform 280ms var(--ease);
  }
  :host-context([data-theme="dark"]) .mosaic-frame {
    background: transparent; border-color: transparent;
  }
  .mosaic-item:hover .mosaic-frame {
    transform: translateY(-3px);
  }
  .mosaic-frame img {
    width: 100%; height: 100%; max-height: 280px;
    object-fit: contain; display: block;
    filter: drop-shadow(0 12px 28px rgba(0,0,0,0.16));
  }
  .mosaic-hero .mosaic-frame img { max-height: 360px; }
  .mosaic-item figcaption {
    font-size: var(--fs-xs); font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; color: #6b5f52;
  }
  :host-context([data-theme="dark"]) .mosaic-item figcaption { color: #d4cbc2; }
  article {
    padding: 1.25rem; border: 1px solid #ddd6ce; border-radius: 6px; background: #fff;
  }
  :host-context([data-theme="dark"]) article {
    background: #2a3a42; border-color: #33444c;
  }
  article h3 {
    margin: 0 0 0.4rem; font-family: var(--font-heading); font-size: var(--fs-h3); color: #22333b;
  }
  :host-context([data-theme="dark"]) article h3 { color: #f4f7fb; }
  article p { margin: 0; color: #6b5f52; font-size: var(--fs-body); line-height: 1.5; }
  :host-context([data-theme="dark"]) article p { color: #d4cbc2; }
  .media-row {
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(1.5rem, 3vw, 2.5rem);
    align-items: center; margin-bottom: clamp(2rem, 4vw, 3rem);
  }
  .media-row:last-child { margin-bottom: 0; }
  .media-row.reverse { direction: rtl; }
  .media-row.reverse > * { direction: ltr; }
  .media-copy h2 {
    margin: 0 0 1rem; font-family: var(--font-heading);
    font-size: var(--fs-h2); color: #22333b; max-width: none; width: 100%;
  }
  :host-context([data-theme="dark"]) .media-copy h2 { color: #f4f7fb; }
  .media-copy p {
    margin: 0 0 0.85rem; color: #6b5f52;
    font-size: var(--fs-body-lg); line-height: var(--lh-body);
  }
  :host-context([data-theme="dark"]) .media-copy p { color: #d4cbc2; }
  .media-figure {
    margin: 0; border-radius: 6px; overflow: hidden;
    border: 1px solid #ddd6ce; background: #fff;
    aspect-ratio: 4 / 3; display: grid; place-items: center; padding: 1.25rem;
  }
  :host-context([data-theme="dark"]) .media-figure {
    background: #2a3a42; border-color: #33444c;
  }
  .media-figure.is-plain {
    border: none;
    background: transparent;
    box-shadow: none;
    overflow: visible;
    border-radius: 0;
    padding: 0;
  }
  :host-context([data-theme="dark"]) .media-figure.is-plain {
    background: transparent; border-color: transparent;
  }
  .media-figure img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .media-figure.is-plain img { filter: drop-shadow(0 12px 28px rgba(0,0,0,0.16)); }
  .tools {
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem;
  }
  .tool { text-align: left; }
  .tool-logo {
    width: 64px; height: 64px; border-radius: 6px; margin-bottom: 0.75rem;
    display: grid; place-items: center;
    background: #fff; border: 1px solid #ddd6ce;
  }
  :host-context([data-theme="dark"]) .tool-logo {
    background: #22333b; border-color: #33444c;
  }
  .tool-logo img { width: 40px; height: 40px; object-fit: contain; }
  .approach { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.85rem; }
  .approach li {
    display: grid; grid-template-columns: auto 1fr; gap: 1rem; align-items: start;
    padding: 1.25rem; border: 1px solid #ddd6ce; border-radius: 6px; background: #fff;
  }
  :host-context([data-theme="dark"]) .approach li {
    background: #2a3a42; border-color: #33444c;
  }
  .step {
    font-family: var(--font-heading); font-weight: 700; font-size: var(--fs-h3); color: #5e503f;
  }
  :host-context([data-theme="dark"]) .step { color: #a9927d; }
  .section-block { margin-bottom: 1.5rem; max-width: none; width: 100%; }
  .section-block:last-child { margin-bottom: 0; }
  .section-block .section-head { margin-bottom: 1rem; }
  .closing {
    margin: 0 0 0.85rem; max-width: none; width: 100%; color: #6b5f52;
    font-size: var(--fs-body-lg); line-height: var(--lh-body);
  }
  .section-block .closing:last-child { margin-bottom: 0; }
  :host-context([data-theme="dark"]) .closing { color: #d4cbc2; }
  @media (max-width: 1024px) {
    .tools { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  @media (max-width: 900px) {
    .outcomes, .mosaic, .media-row, .media-row.reverse {
      grid-template-columns: 1fr; direction: ltr;
    }
    .tools { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .mosaic { grid-template-rows: none; min-height: 0; }
    .mosaic-hero { grid-row: auto; }
    .mosaic-frame img, .mosaic-hero .mosaic-frame img { max-height: 220px; }
  }
  @media (max-width: 560px) {
    .tools, .outcomes { grid-template-columns: 1fr; }
  }
`;

class SnServicePage extends HTMLElement {
  static get observedAttributes() {
    return ['slug'];
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  render() {
    const slug = this.getAttribute('slug') || 'devops';
    const page = PAGES[slug];
    if (!page) {
      this.shadowRoot.innerHTML = `<style>${PAGE_CSS}</style><div class="inner band"><p>Page not found.</p></div>`;
      return;
    }

    const galleryCaptions = page.galleryCaptions || [];
    const gallery = (page.gallery || [])
      .map(
        (src, i) => `
        <figure class="mosaic-item ${i === 0 ? 'mosaic-hero' : ''}" data-reveal>
          <div class="mosaic-frame">
            <img src="${escapeAttr(src)}" alt="${escapeAttr(galleryCaptions[i] || `${page.hero} visual ${i + 1}`)}" width="640" height="420" loading="lazy" />
          </div>
          ${galleryCaptions[i] ? `<figcaption>${escapeAttr(galleryCaptions[i])}</figcaption>` : ''}
        </figure>`
      )
      .join('');

    const features = (page.features || [])
      .map(
        (f, i) => `
        <article class="outcome" data-reveal>
          <span class="outcome-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <h3>${f.title}</h3>
          ${f.body ? `<p>${f.body}</p>` : ''}
        </article>`
      )
      .join('');

    const mediaBlocks = (page.mediaBlocks || [])
      .map(
        (block) => `
        <div class="media-row ${block.reverse ? 'reverse' : ''}" data-reveal>
          <div class="media-copy">
            <h2>${block.heading}</h2>
            ${(block.body || []).map((p) => `<p>${p}</p>`).join('')}
          </div>
          <figure class="media-figure${String(block.image || '').endsWith('.png') ? ' is-plain' : ''}">
            <img src="${block.image}" alt="${block.imageAlt || block.heading}" width="640" height="400" loading="lazy" />
          </figure>
        </div>`
      )
      .join('');

    const tools = (page.tools || [])
      .map(
        (tool) => `
        <article class="tool" data-reveal>
          <div class="tool-logo">
            <img src="${tool.src}" alt="" width="56" height="56" loading="lazy" />
          </div>
          <h3>${tool.name}</h3>
          ${tool.body ? `<p>${tool.body}</p>` : ''}
        </article>`
      )
      .join('');

    const approachSteps = (page.approach || [])
      .map(
        (s, i) => `
        <li data-reveal>
          <span class="step">0${i + 1}</span>
          <div><h3>${s.title}</h3><p>${s.body}</p></div>
        </li>`
      )
      .join('');

    const sections = (page.sections || [])
      .map(
        (s) => `
        <div class="section-block" data-reveal>
          <h2 class="section-head">${s.heading}</h2>
          ${(s.body || []).map((p) => `<p class="closing">${p}</p>`).join('')}
        </div>`
      )
      .join('');

    const featuresHeading = page.featuresHeading || 'Key capabilities';
    const featuresLead = page.featuresLead || '';
    const galleryHeading = page.galleryHeading || 'In practice';

    const useInteractiveHero = Boolean(page.heroInteractive);

    const heroHighlights = (page.heroHighlights
      || (page.features || []).slice(0, 3).map((f) => String(f.title || '').split(/[—–|:·]/)[0].trim())
    ).filter(Boolean).slice(0, 4);

    const heroStats = (page.heroStats && page.heroStats.length
      ? page.heroStats
      : [
          { value: 'Senior-led', label: 'Practitioners on delivery' },
          { value: 'Outcome-led', label: 'Clear success measures' },
          { value: 'UK-based', label: 'Named contact throughout' },
        ]
    ).slice(0, 3);

    const heroImage = (page.gallery && page.gallery[0]) || `${PLACE}/hero-office.svg`;

    const legacyHero = `
      <section class="hero">
        <video
          class="hero-bg-video"
          muted
          loop
          playsinline
          webkit-playsinline
          preload="none"
          poster="${escapeAttr(heroImage)}"
          aria-hidden="true"
        >
          <source src="/src/assets/videos/sninfovideo.mp4" type="video/mp4" />
        </video>
        <div class="hero-inner" data-reveal>
          <div class="hero-layout">
            <div class="hero-copy">
              <p class="eyebrow">${page.eyebrow}</p>
              <h1>${page.hero}</h1>
              <p class="lead">${page.lead}</p>
              <div class="hero-actions">
                <a class="btn" href="/free-consultation">${page.ctaLabel}</a>
                <a class="btn btn-secondary" href="/contact-us">Contact us</a>
              </div>
              ${
                heroHighlights.length
                  ? `<ul class="hero-highlights" aria-label="Key points">
                      ${heroHighlights.map((h) => `<li>${escapeAttr(h)}</li>`).join('')}
                    </ul>`
                  : ''
              }
              <div class="hero-stats" aria-label="Service proof points">
                ${heroStats
                  .map(
                    (s) => `<div class="hero-stat">
                      <strong>${escapeAttr(s.value)}</strong>
                      <span>${escapeAttr(s.label)}</span>
                    </div>`
                  )
                  .join('')}
              </div>
            </div>
            <div class="hero-media-wrap">
              <div class="hero-media">
                <img src="${escapeAttr(heroImage)}" alt="${escapeAttr(page.hero)}" width="900" height="720" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>`;

    const interactiveHero = `
      <sn-service-hero
        eyebrow="${escapeAttr(page.eyebrow)}"
        title="${escapeAttr(page.hero)}"
        lead="${escapeAttr(page.lead)}"
        cta-label="${escapeAttr(page.ctaLabel)}"
        cta-href="/free-consultation"
        secondary-cta-label="Contact us"
        secondary-cta-href="/contact-us"
        tint="#5e503f"
        image="${escapeAttr(heroImage)}"
      ></sn-service-hero>`;

    this.shadowRoot.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${PAGE_CSS}</style>
      ${useInteractiveHero ? interactiveHero : legacyHero}
      ${
        mediaBlocks
          ? `<section class="band"><div class="inner">${mediaBlocks}</div></section>`
          : ''
      }
      ${
        page.approach?.length
          ? `<section class="band band-alt">
        <div class="inner">
          <h2 class="section-head" data-reveal>${page.approachHeading}</h2>
          <ol class="approach" data-reveal-stagger>${approachSteps}</ol>
        </div>
      </section>`
          : ''
      }
      ${
        features
          ? `<section class="band">
        <div class="inner">
          <h2 class="section-head" data-reveal>${escapeAttr(featuresHeading)}</h2>
          ${featuresLead ? `<p class="section-lead" data-reveal>${escapeAttr(featuresLead)}</p>` : ''}
          <div class="outcomes" data-reveal-stagger>${features}</div>
        </div>
      </section>`
          : ''
      }
      ${
        tools
          ? `<section class="band band-alt">
        <div class="inner">
          <h2 class="section-head" data-reveal>${page.toolsHeading}</h2>
          ${page.toolsLead ? `<p class="section-lead" data-reveal>${page.toolsLead}</p>` : ''}
          <div class="tools" data-reveal-stagger>${tools}</div>
        </div>
      </section>`
          : ''
      }
      ${
        gallery
          ? `<section class="band mosaic-band">
        <div class="inner">
          <h2 class="section-head" data-reveal>${escapeAttr(page.galleryHeading || 'In practice')}</h2>
          <div class="mosaic" data-reveal-stagger>${gallery}</div>
        </div>
      </section>`
          : ''
      }
      ${
        sections
          ? `<section class="band band-alt"><div class="inner">${sections}</div></section>`
          : ''
      }
    `;
    globalThis.SN_MOTION?.enhance(this.shadowRoot);
    this._bindLegacyHeroVideo();
  }

  _bindLegacyHeroVideo() {
    this._unbindLegacyVideo?.();
    const video = this.shadowRoot?.querySelector?.('.hero-bg-video');
    if (!video) return;
    const reduced =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'none';
    let wantPlay = false;
    let armed = false;
    const PLAY_RATIO = 0.35;
    const KEEP_RATIO = 0.18;
    const releaseDecode = () => {
      try {
        if (!video.paused) video.pause();
      } catch {
        /* ignore */
      }
      try {
        if (video.readyState > 0) video.currentTime = 0;
      } catch {
        /* ignore */
      }
    };
    const armAndPlay = () => {
      if (!wantPlay) return;
      if (!armed) {
        armed = true;
        try {
          video.load();
        } catch {
          /* ignore */
        }
      }
      if (!video.paused) return;
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };
    if (typeof IntersectionObserver !== 'undefined') {
      const io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;
          const ratio = entry.intersectionRatio || 0;
          if (entry.isIntersecting && ratio >= PLAY_RATIO) {
            wantPlay = true;
            armAndPlay();
            return;
          }
          if (!entry.isIntersecting || ratio < KEEP_RATIO) {
            wantPlay = false;
            releaseDecode();
          }
        },
        {
          root: null,
          threshold: [0, 0.08, 0.18, 0.35, 0.5, 0.75, 1],
          rootMargin: '0px 0px -28% 0px',
        }
      );
      io.observe(this);
      this._unbindLegacyVideo = () => {
        wantPlay = false;
        io.disconnect();
        releaseDecode();
      };
      requestAnimationFrame(() => {
        const rect = this.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
        const ratio = visible / Math.max(rect.height, 1);
        if (ratio >= PLAY_RATIO && rect.top < vh * 0.72) {
          wantPlay = true;
          armAndPlay();
        }
      });
    } else {
      wantPlay = true;
      armAndPlay();
      this._unbindLegacyVideo = () => {
        wantPlay = false;
        releaseDecode();
      };
    }
  }

  disconnectedCallback() {
    this._unbindLegacyVideo?.();
    this._unbindLegacyVideo = null;
  }
}

if (!customElements.get('sn-service-page')) {
  customElements.define('sn-service-page', SnServicePage);
}
