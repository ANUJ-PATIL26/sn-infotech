/**
 * Cloud service pages for Wix previews (mirrors sn-infotech-site).
 * Load before sn-service-page.js — merged into PAGES via Object.assign.
 */
globalThis.SN_CLOUD_SERVICE_PAGES = {
  "services/cloud/aws": {
    "path": "/services/cloud/aws",
    "title": "AWS Cloud Services | SN Infotech",
    "description": "End-to-end AWS cloud services — architecture, migration, EC2, VPC, S3, RDS, EKS, Lambda, and managed support from SN Infotech.",
    "eyebrow": "Cloud services",
    "hero": "AWS Cloud Services",
    "lead": "Build secure, scalable applications on Amazon Web Services with architecture, migration, and day-2 operations owned by senior cloud engineers. From landing zones and Well-Architected reviews to EC2, VPC, S3, RDS, EKS, and Lambda, we help you reduce infrastructure cost, improve performance, and scale with confidence. Whether you are launching new products or modernising legacy systems, AWS becomes a platform your teams can rely on.",
    "ctaLabel": "Talk to a cloud lead",
    "ctaHref": "/free-consultation",
    "tint": "var(--c-blue)",
    "heroInteractive": true,
    "heroHighlights": [
      "Well-Architected",
      "Secure landing zones",
      "Managed day-2 ops"
    ],
    "heroStats": [
      {
        "value": "Well-Architected",
        "label": "Review-led designs"
      },
      {
        "value": "Secure",
        "label": "Identity & network baselines"
      },
      {
        "value": "Operable",
        "label": "Day-2 support model"
      }
    ],
    "mediaBlocks": [
      {
        "heading": "Build, Scale, and Innovate with AWS",
        "body": [
          "Amazon Web Services (AWS) is the world's leading cloud computing platform, offering a comprehensive suite of cloud services including compute, storage, networking, databases, AI/ML, security, and serverless computing. Organizations of all sizes rely on AWS to reduce infrastructure costs, improve application performance, and scale their operations globally.",
          "AWS enables businesses to innovate faster with on-demand resources, automated infrastructure, and enterprise-grade security. Whether you are launching a new application, modernizing legacy systems, or managing enterprise workloads, AWS provides the flexibility and reliability needed for digital transformation."
        ],
        "image": "/src/assets/images/site/pages/cloud/AWS2.png",
        "imageAlt": "What AWS Cloud Services covers — compute, storage, databases, and security"
      },
      {
        "heading": "How SN Infotech Helps You Get More from AWS",
        "body": [
          "Our AWS specialists help businesses design, deploy, and manage secure, scalable cloud environments tailored to their goals. From cloud architecture and migration to cost optimization and managed support, we ensure your AWS infrastructure is optimized for performance, security, and growth.",
          "Our services include AWS infrastructure deployment, EC2 and VPC configuration, S3 storage, RDS database management, container orchestration with ECS/EKS, serverless applications using Lambda, infrastructure automation, monitoring, and continuous cloud optimization."
        ],
        "image": "/src/assets/images/site/pages/cloud/AWS3.png",
        "imageAlt": "How SN Infotech helps with AWS architecture, migration, and managed ops",
        "reverse": true
      }
    ],
    "approachHeading": "Our AWS process",
    "approach": [
      {
        "title": "Discover & assess",
        "body": "We review workloads, dependencies, compliance needs, and spend so the AWS target state matches how your business actually runs."
      },
      {
        "title": "Design the landing zone",
        "body": "Accounts, identity, networking, logging, and guardrails are designed Well-Architected from day one — not bolted on later."
      },
      {
        "title": "Build & migrate",
        "body": "Infrastructure as code, phased cutovers, and validation plans move workloads with controlled risk and clear rollback paths."
      },
      {
        "title": "Secure & observe",
        "body": "IAM baselines, encryption, CloudWatch/alerting, and runbooks make the estate operable for your teams and ours."
      },
      {
        "title": "Optimise & operate",
        "body": "Right-sizing, reserved capacity advice, and managed support keep performance high while controlling monthly AWS spend."
      }
    ],
    "featuresHeading": "Why choose SN Infotech for AWS",
    "featuresLead": "You get practitioners who design, migrate, and operate AWS estates — not a slide deck and a hand-off.",
    "features": [
      {
        "title": "Architecture that survives day two",
        "body": "Landing zones, networking, and IAM are built for change, audit, and multi-team ownership — not a one-off demo account."
      },
      {
        "title": "Migration without theatre",
        "body": "Phased cutovers, data validation, and rollback plans so go-live is a controlled event, not a weekend gamble."
      },
      {
        "title": "Cost and performance in the same conversation",
        "body": "We tune instance families, storage classes, and autoscaling against real usage so savings do not come at the expense of latency."
      },
      {
        "title": "Named engineers, clear ownership",
        "body": "You know who to call. Runbooks, escalation paths, and monthly reviews keep AWS operations predictable."
      }
    ],
    "galleryHeading": "AWS delivery in practice",
    "galleryCaptions": [
      "Platform overview",
      "Reference architecture",
      "Operations & monitoring"
    ],
    "toolsHeading": "AWS technologies we use",
    "toolsLead": "Core AWS services and the automation stack we use to keep environments reproducible and observable.",
    "tools": [
      {
        "name": "AWS",
        "src": "/src/assets/images/placeholders/cloud/tools/aws.svg",
        "body": "Multi-account organisations, landing zones, and Well-Architected reviews."
      },
      {
        "name": "EC2",
        "src": "/src/assets/images/placeholders/cloud/tools/ec2.svg",
        "body": "Right-sized compute, AMIs, and autoscaling for steady and bursty workloads."
      },
      {
        "name": "VPC",
        "src": "/src/assets/images/placeholders/cloud/tools/vpc.svg",
        "body": "Secure network topologies, peering, and hybrid connectivity patterns."
      },
      {
        "name": "S3",
        "src": "/src/assets/images/placeholders/cloud/tools/s3.svg",
        "body": "Durable object storage with lifecycle, encryption, and access controls."
      },
      {
        "name": "RDS",
        "src": "/src/assets/images/placeholders/cloud/tools/rds.svg",
        "body": "Managed databases with backup, Multi-AZ, and performance baselines."
      },
      {
        "name": "EKS",
        "src": "/src/assets/images/placeholders/cloud/tools/eks.svg",
        "body": "Kubernetes on AWS with hardened node groups and GitOps delivery."
      },
      {
        "name": "Lambda",
        "src": "/src/assets/images/placeholders/cloud/tools/lambda.svg",
        "body": "Event-driven serverless APIs and automation without idle capacity."
      },
      {
        "name": "Terraform",
        "src": "/src/assets/images/placeholders/cloud/tools/terraform.svg",
        "body": "Infrastructure as code modules for repeatable AWS environments."
      },
      {
        "name": "CloudWatch",
        "src": "/src/assets/images/placeholders/cloud/tools/cloudwatch.svg",
        "body": "Metrics, logs, and alarms tied to services that matter to the business."
      }
    ],
    "sections": [
      {
        "heading": "Ready to build on AWS with confidence?",
        "body": [
          "Whether you need a greenfield landing zone, a migration factory, or managed AWS operations, SN Infotech brings architecture and day-2 ownership into one engagement.",
          "Speak with a cloud lead to map your workloads, constraints, and the fastest safe path onto AWS."
        ]
      }
    ],
    "gallery": [
      "/src/assets/images/site/pages/cloud/AWS1.png",
      "/src/assets/images/site/pages/cloud/AWS4.png",
      "/src/assets/images/site/pages/cloud/AWS5.png",
      "/src/assets/images/site/pages/cloud/AWS6.png"
    ]
  },
  "services/cloud/azure": {
    "path": "/services/cloud/azure",
    "title": "Microsoft Azure Solutions | SN Infotech",
    "description": "Microsoft Azure solutions — virtual machines, AKS, Azure SQL, Entra ID, hybrid cloud, migration, and managed support from SN Infotech.",
    "eyebrow": "Cloud services",
    "hero": "Microsoft Azure Solutions",
    "lead": "Empower your business with Microsoft Azure — enterprise-ready architectures, hybrid connectivity, and managed operations aligned to how you already work. We design secure landing zones, identity-aware platforms, and cloud estates that connect smoothly with on-premises systems. The result is Azure that supports growth, governance, and day-to-day reliability without unnecessary complexity.",
    "ctaLabel": "Talk to a cloud lead",
    "ctaHref": "/free-consultation",
    "tint": "var(--c-blue)",
    "heroInteractive": true,
    "heroHighlights": [
      "Enterprise landing zones",
      "Hybrid-ready",
      "Security baselines"
    ],
    "heroStats": [
      {
        "value": "Azure-native",
        "label": "Fits Microsoft estates"
      },
      {
        "value": "Governed",
        "label": "Policy & identity first"
      },
      {
        "value": "Scalable",
        "label": "Built for growth stages"
      }
    ],
    "mediaBlocks": [
      {
        "heading": "Turn Azure into Your Competitive Advantage",
        "body": [
          "Microsoft Azure is a powerful cloud platform that enables businesses to build, deploy, and manage applications across a global network of Microsoft-managed data centers. Azure offers a wide range of services, including virtual machines, databases, AI services, networking, security, analytics, and hybrid cloud solutions.",
          "Azure is particularly well-suited for organizations using Microsoft technologies, providing seamless integration with Windows Server, Microsoft 365, Active Directory, and enterprise applications while ensuring high availability, compliance, and security."
        ],
        "image": "/src/assets/images/site/pages/cloud/Azure2.png",
        "imageAlt": "What Microsoft Azure offers — enterprise platform, identity, and containers"
      },
      {
        "heading": "How SN Infotech Builds Your Azure Journey",
        "body": [
          "We help businesses leverage Microsoft Azure to modernize infrastructure, migrate workloads, and improve operational efficiency. Our experts design scalable cloud architectures, implement secure networking, optimize workloads, and automate deployments using Azure best practices.",
          "From Azure Virtual Machines and AKS to Azure SQL, Azure Storage, and Microsoft Entra ID, we deliver end-to-end Azure solutions backed by continuous monitoring, security, and managed support."
        ],
        "image": "/src/assets/images/site/pages/cloud/Azure3.png",
        "imageAlt": "How SN Infotech helps with Azure landing zones, hybrid, and managed support",
        "reverse": true
      }
    ],
    "approachHeading": "Our Azure process",
    "approach": [
      {
        "title": "Map the Microsoft estate",
        "body": "We inventory Windows Server, Microsoft 365, identity, and application dependencies that should shape the Azure target design."
      },
      {
        "title": "Landing zone & identity",
        "body": "Subscriptions, management groups, Entra ID, and Azure Policy establish governance before workloads land."
      },
      {
        "title": "Network & hybrid design",
        "body": "VNets, ExpressRoute/VPN, and private endpoints connect on-premises and cloud without exposing the wrong surface."
      },
      {
        "title": "Migrate & modernise",
        "body": "VMs, databases, and container platforms move in waves with validation, performance tests, and cutover runbooks."
      },
      {
        "title": "Secure, monitor, improve",
        "body": "Defender, Monitor, backup, and FinOps reviews keep the Azure estate compliant, observable, and cost-aware."
      }
    ],
    "featuresHeading": "Why choose SN Infotech for Azure",
    "featuresLead": "Azure rewards teams who understand Microsoft identity, hybrid networking, and enterprise governance — that is our default lens.",
    "features": [
      {
        "title": "Identity-first cloud design",
        "body": "Entra ID, Conditional Access, and least-privilege roles are designed with the landing zone — not as a cleanup project."
      },
      {
        "title": "Hybrid without guesswork",
        "body": "We connect data centres and Azure with clear routing, DNS, and private access patterns your security team can review."
      },
      {
        "title": "AKS and PaaS where they fit",
        "body": "Containers, Azure SQL, and managed services are chosen against real ops capacity — not fashion."
      },
      {
        "title": "Governed growth",
        "body": "Policy, tagging, and cost views so new subscriptions and workloads stay inside the rails you agreed."
      }
    ],
    "galleryHeading": "Azure delivery in practice",
    "galleryCaptions": [
      "Azure platform",
      "Enterprise architecture",
      "Hybrid connectivity"
    ],
    "toolsHeading": "Azure technologies we use",
    "toolsLead": "Core Microsoft Azure services we design, deploy, and operate for enterprise clients.",
    "tools": [
      {
        "name": "Azure",
        "src": "/src/assets/images/placeholders/cloud/tools/azure.svg",
        "body": "Subscription strategy, landing zones, and Azure Policy baselines."
      },
      {
        "name": "Azure VM",
        "src": "/src/assets/images/placeholders/cloud/tools/azure-vm.svg",
        "body": "IaaS compute with images, scale sets, and patching models."
      },
      {
        "name": "AKS",
        "src": "/src/assets/images/placeholders/cloud/tools/kubernetes.svg",
        "body": "Managed Kubernetes with secure node pools and GitOps delivery."
      },
      {
        "name": "Entra ID",
        "src": "/src/assets/images/placeholders/cloud/tools/entra.svg",
        "body": "Enterprise identity, Conditional Access, and workload identities."
      },
      {
        "name": "Azure SQL",
        "src": "/src/assets/images/placeholders/cloud/tools/azure-sql.svg",
        "body": "Managed databases with HA, backup, and performance tuning."
      },
      {
        "name": "Terraform",
        "src": "/src/assets/images/placeholders/cloud/tools/terraform.svg",
        "body": "Repeatable Azure infrastructure modules and pipelines."
      },
      {
        "name": "GitHub",
        "src": "/src/assets/images/placeholders/cloud/tools/github.svg",
        "body": "Actions workflows for build, test, and release into Azure."
      },
      {
        "name": "Datadog",
        "src": "/src/assets/images/placeholders/cloud/tools/datadog.svg",
        "body": "Unified observability across Azure and hybrid estates."
      }
    ],
    "sections": [
      {
        "heading": "Grow on Azure with enterprise discipline",
        "body": [
          "From first landing zone to managed AKS and hybrid connectivity, we help Microsoft-centric organisations move to Azure without losing control of identity, security, or cost.",
          "Book a consultation to review your current estate and the Azure outcomes that matter most this quarter."
        ]
      }
    ],
    "gallery": [
      "/src/assets/images/site/pages/cloud/Azure1.png",
      "/src/assets/images/site/pages/cloud/Azure4.png",
      "/src/assets/images/site/pages/cloud/Azure5.png",
      "/src/assets/images/site/pages/cloud/Azure6.png"
    ]
  },
  "services/cloud/gcp": {
    "path": "/services/cloud/gcp",
    "title": "Google Cloud Platform Services | SN Infotech",
    "description": "Google Cloud Platform services — GKE, BigQuery, Cloud Run, AI/ML, migration, security, and managed GCP operations from SN Infotech.",
    "eyebrow": "Cloud services",
    "hero": "Google Cloud Platform",
    "lead": "Innovate faster with Google Cloud — high-performance infrastructure, Kubernetes-native platforms, analytics, and AI services designed for modern applications. We help you adopt GCP with clear architecture, cost-aware design, and operational practices that keep platforms observable and resilient. From GKE and data platforms to cloud-native apps, we turn Google Cloud into a practical advantage for your business.",
    "ctaLabel": "Talk to a cloud lead",
    "ctaHref": "/free-consultation",
    "tint": "var(--c-blue)",
    "heroInteractive": true,
    "heroHighlights": [
      "Data & containers",
      "AI-ready platforms",
      "Cost-aware design"
    ],
    "heroStats": [
      {
        "value": "GCP-ready",
        "label": "GKE, data, and networking"
      },
      {
        "value": "Optimised",
        "label": "Spend aligned to demand"
      },
      {
        "value": "Observable",
        "label": "Ops signals from day one"
      }
    ],
    "mediaBlocks": [
      {
        "heading": "Powering Your Business with Google Cloud",
        "body": [
          "Google Cloud Platform (GCP) provides businesses with high-performance cloud infrastructure, advanced analytics, artificial intelligence, machine learning, and Kubernetes-native services. Built on Google's global network, GCP delivers exceptional reliability, scalability, and performance for modern applications.",
          "Businesses choose GCP to accelerate digital transformation, leverage AI-powered services, analyze large datasets, and build cloud-native applications with simplified infrastructure management."
        ],
        "image": "/src/assets/images/site/pages/cloud/GCP2.png",
        "imageAlt": "What Google Cloud Platform offers — AI, analytics, and cloud-native services"
      },
      {
        "heading": "How SN Infotech Makes Google Cloud Work for You",
        "body": [
          "Our GCP experts help organizations deploy scalable cloud infrastructure, modernize applications, and optimize cloud operations. We provide consulting, architecture design, migration, Kubernetes deployment with GKE, cloud security, database management, and infrastructure automation.",
          "Whether you're adopting containers, implementing AI solutions, or migrating enterprise applications, we ensure your Google Cloud environment is secure, efficient, and ready for future growth."
        ],
        "image": "/src/assets/images/site/pages/cloud/GCP3.png",
        "imageAlt": "How SN Infotech helps with GCP architecture, GKE, and managed operations",
        "reverse": true
      }
    ],
    "approachHeading": "Our Google Cloud process",
    "approach": [
      {
        "title": "Workload & data discovery",
        "body": "We clarify which systems need GKE, analytics, AI APIs, or simpler Cloud Run services before committing topology."
      },
      {
        "title": "Foundation & projects",
        "body": "Folders, projects, IAM, networking, and logging organisation create a clean, auditable GCP foundation."
      },
      {
        "title": "Platform build",
        "body": "GKE, Cloud Run, data platforms, and CI/CD land with security defaults and environment promotion paths."
      },
      {
        "title": "Migrate & integrate",
        "body": "Applications and data move in controlled waves with performance baselines and rollback options."
      },
      {
        "title": "Operate & optimise",
        "body": "Monitoring, cost controls, and continuous hardening keep GCP estates efficient as usage grows."
      }
    ],
    "featuresHeading": "Why choose SN Infotech for GCP",
    "featuresLead": "We treat Google Cloud as a product platform — containers, data, and AI services wired into operable delivery.",
    "features": [
      {
        "title": "Kubernetes-native by default",
        "body": "GKE baselines, GitOps, and workload packaging so container platforms stay upgradeable and secure."
      },
      {
        "title": "Data and AI with guardrails",
        "body": "BigQuery and AI services land with identity, networking, and cost controls — not open-ended experiments."
      },
      {
        "title": "Network performance that shows up",
        "body": "VPC design and load balancing patterns that respect how Google Cloud actually moves traffic."
      },
      {
        "title": "FinOps baked into ops",
        "body": "Committed use advice, idle cleanup, and dashboards so growth does not surprise finance."
      }
    ],
    "galleryHeading": "GCP delivery in practice",
    "galleryCaptions": [
      "Google Cloud overview",
      "AI & analytics",
      "GKE platforms"
    ],
    "toolsHeading": "Google Cloud technologies we use",
    "toolsLead": "GCP services and delivery tools we use to build secure, cloud-native platforms.",
    "tools": [
      {
        "name": "GCP",
        "src": "/src/assets/images/placeholders/cloud/tools/gcp.svg",
        "body": "Project hierarchy, IAM, and organisation policy baselines."
      },
      {
        "name": "GKE",
        "src": "/src/assets/images/placeholders/cloud/tools/kubernetes.svg",
        "body": "Production Kubernetes with Autopilot or standard clusters."
      },
      {
        "name": "Cloud Run",
        "src": "/src/assets/images/placeholders/cloud/tools/gcp.svg",
        "body": "Serverless containers for APIs and event-driven services."
      },
      {
        "name": "BigQuery",
        "src": "/src/assets/images/placeholders/cloud/tools/bigquery.svg",
        "body": "Analytics warehouses with governed access and cost controls."
      },
      {
        "name": "Kubernetes",
        "src": "/src/assets/images/placeholders/cloud/tools/kubernetes.svg",
        "body": "Workload packaging, policies, and day-2 cluster operations."
      },
      {
        "name": "Terraform",
        "src": "/src/assets/images/placeholders/cloud/tools/terraform.svg",
        "body": "Infrastructure as code for reproducible GCP environments."
      },
      {
        "name": "Docker",
        "src": "/src/assets/images/placeholders/cloud/tools/docker.svg",
        "body": "Image standards and registries that feed GKE and Cloud Run."
      },
      {
        "name": "GitHub",
        "src": "/src/assets/images/placeholders/cloud/tools/github.svg",
        "body": "CI/CD pipelines promoting changes across GCP environments."
      }
    ],
    "sections": [
      {
        "heading": "Build modern platforms on Google Cloud",
        "body": [
          "From GKE foundations to analytics and AI-enabled products, SN Infotech helps you adopt Google Cloud with security, cost, and operability designed in.",
          "Talk to us about the workloads you want to move first and the outcomes you need to prove."
        ]
      }
    ],
    "gallery": [
      "/src/assets/images/site/pages/cloud/GCP1.png",
      "/src/assets/images/site/pages/cloud/GCP4.png",
      "/src/assets/images/site/pages/cloud/GCP5.png",
      "/src/assets/images/site/pages/cloud/GCP6.png"
    ]
  },
  "services/cloud/oci": {
    "path": "/services/cloud/oci",
    "title": "Oracle Cloud Infrastructure Services | SN Infotech",
    "description": "Oracle Cloud Infrastructure services — high-performance compute, Oracle databases, networking, security, migration, and managed OCI support from SN Infotech.",
    "eyebrow": "Cloud services",
    "hero": "Oracle Cloud Infrastructure",
    "lead": "Enterprise cloud performance with Oracle Cloud Infrastructure — high-performance compute, databases, networking, and security for mission-critical workloads. We design OCI tenancies and architectures that protect data, support availability targets, and keep costs predictable. Ideal when you need Oracle strength with modern cloud flexibility and clear operational ownership.",
    "ctaLabel": "Talk to a cloud lead",
    "ctaHref": "/free-consultation",
    "tint": "var(--c-blue)",
    "heroInteractive": true,
    "heroHighlights": [
      "Enterprise workloads",
      "Database strength",
      "Secure tenancy"
    ],
    "heroStats": [
      {
        "value": "OCI-focused",
        "label": "Tenancy & network design"
      },
      {
        "value": "Resilient",
        "label": "HA and DR patterns"
      },
      {
        "value": "Governed",
        "label": "Clear ownership model"
      }
    ],
    "mediaBlocks": [
      {
        "heading": "Infrastructure Built for What Comes Next",
        "body": [
          "Oracle Cloud Infrastructure (OCI) is a next-generation cloud platform designed to deliver high-performance computing, enterprise-grade databases, networking, storage, and security. OCI is particularly well-suited for organizations running Oracle workloads, mission-critical applications, and enterprise databases.",
          "With predictable pricing, high-performance infrastructure, and built-in security, OCI enables businesses to modernize IT operations while maintaining reliability and compliance."
        ],
        "image": "/src/assets/images/site/pages/cloud/OCI2.png",
        "imageAlt": "Oracle Cloud enterprise database illustration"
      },
      {
        "heading": "How SN Infotech Builds a Stronger Cloud Foundation",
        "body": [
          "Our cloud engineers help businesses deploy, migrate, and manage workloads on Oracle Cloud Infrastructure. We design highly available architectures, migrate Oracle databases, configure networking, implement security controls, and automate cloud operations for improved efficiency.",
          "From compute and storage to disaster recovery and ongoing cloud management, we ensure your OCI environment supports business continuity and long-term scalability."
        ],
        "image": "/src/assets/images/site/pages/cloud/OCI3.png",
        "imageAlt": "Oracle Cloud high availability architecture illustration",
        "reverse": true
      }
    ],
    "approachHeading": "Our OCI process",
    "approach": [
      {
        "title": "Assess Oracle workloads",
        "body": "We profile databases, applications, licensing, and latency needs that drive the right OCI shape."
      },
      {
        "title": "Tenancy & network design",
        "body": "Compartments, VCNs, security lists, and connectivity establish a secure, segmentable OCI foundation."
      },
      {
        "title": "Migrate databases & apps",
        "body": "Controlled migration of Oracle databases and dependent applications with validation and cutover plans."
      },
      {
        "title": "HA & disaster recovery",
        "body": "Multi-AD patterns, backup, and DR drills so recovery is proven — not assumed."
      },
      {
        "title": "Automate & manage",
        "body": "Infrastructure automation, monitoring, and managed operations keep OCI estates performant and compliant."
      }
    ],
    "featuresHeading": "Why choose SN Infotech for OCI",
    "featuresLead": "OCI shines for enterprise Oracle estates — we design for performance, licensing reality, and operational clarity.",
    "features": [
      {
        "title": "Database-aware architecture",
        "body": "Compute, storage, and network choices respect how Oracle databases actually behave under load."
      },
      {
        "title": "Predictable commercial outcomes",
        "body": "We design with OCI pricing and capacity models in mind so finance and engineering stay aligned."
      },
      {
        "title": "Resilience you can rehearse",
        "body": "HA and DR are documented, automated where possible, and tested — not left as a diagram."
      },
      {
        "title": "Security built into the tenancy",
        "body": "IAM, encryption, and network segmentation are part of the landing design, not a later hardening pass."
      }
    ],
    "galleryHeading": "OCI delivery in practice",
    "galleryCaptions": [
      "OCI platform",
      "Database workloads",
      "High availability"
    ],
    "toolsHeading": "OCI technologies we use",
    "toolsLead": "Oracle Cloud services and automation tools we use for enterprise-grade deployments.",
    "tools": [
      {
        "name": "Oracle",
        "src": "/src/assets/images/placeholders/cloud/tools/oci.svg",
        "body": "Tenancy design, compartments, and policy baselines on OCI."
      },
      {
        "name": "OCI Compute",
        "src": "/src/assets/images/placeholders/cloud/tools/oci-compute.svg",
        "body": "High-performance shapes sized to Oracle and app workloads."
      },
      {
        "name": "Autonomous DB",
        "src": "/src/assets/images/placeholders/cloud/tools/oci-db.svg",
        "body": "Database platforms with backup, HA, and performance controls."
      },
      {
        "name": "Terraform",
        "src": "/src/assets/images/placeholders/cloud/tools/terraform.svg",
        "body": "Infrastructure as code for repeatable OCI environments."
      },
      {
        "name": "Ansible",
        "src": "/src/assets/images/placeholders/cloud/tools/ansible.svg",
        "body": "Configuration and operational playbooks for hybrid estates."
      },
      {
        "name": "Docker",
        "src": "/src/assets/images/placeholders/cloud/tools/docker.svg",
        "body": "Container packaging when modernising adjacent application tiers."
      },
      {
        "name": "Kubernetes",
        "src": "/src/assets/images/placeholders/cloud/tools/kubernetes.svg",
        "body": "OKE and container platforms where they fit the estate."
      },
      {
        "name": "Datadog",
        "src": "/src/assets/images/placeholders/cloud/tools/datadog.svg",
        "body": "Observability across OCI compute, databases, and apps."
      }
    ],
    "sections": [
      {
        "heading": "Modernise Oracle estates on OCI",
        "body": [
          "SN Infotech helps you move mission-critical Oracle workloads onto OCI with clear tenancy design, resilient architectures, and managed operations.",
          "Schedule a consultation to review databases, applications, and the migration path that protects uptime."
        ]
      }
    ],
    "gallery": [
      "/src/assets/images/site/pages/cloud/OCI1.png",
      "/src/assets/images/site/pages/cloud/OCI4.png",
      "/src/assets/images/site/pages/cloud/OCI5.png",
      "/src/assets/images/site/pages/cloud/OCI6.png"
    ]
  },
  "services/cloud/cloud-consulting-migration": {
    "path": "/services/cloud/cloud-consulting-migration",
    "title": "Cloud Consulting & Migration | SN Infotech",
    "description": "Cloud consulting and migration services — assess, design, migrate, and optimise workloads to AWS, Azure, GCP, or OCI with minimal disruption.",
    "eyebrow": "Cloud services",
    "hero": "Cloud Consulting & Migration",
    "lead": "Plan and execute a successful cloud transformation — platform choice, migration strategy, and cutovers designed to minimise risk and downtime. We assess your current estate, recommend the right cloud path, and deliver migrations with clear sequencing, security baselines, and rollback thinking. You get a practical roadmap from first discovery through stable day-2 operations.",
    "ctaLabel": "Talk to a cloud lead",
    "ctaHref": "/free-consultation",
    "tint": "var(--c-teal, var(--c-blue))",
    "heroInteractive": true,
    "heroHighlights": [
      "Platform fit",
      "Risk-aware cutovers",
      "Post-migration optimisation"
    ],
    "heroStats": [
      {
        "value": "Multi-cloud",
        "label": "AWS · Azure · GCP · OCI"
      },
      {
        "value": "Phased",
        "label": "Wave-based migration"
      },
      {
        "value": "Validated",
        "label": "Performance & rollback"
      }
    ],
    "mediaBlocks": [
      {
        "heading": "Move to the Cloud Without Slowing Down",
        "body": [
          "Cloud migration is the process of moving applications, databases, servers, and workloads from on-premises infrastructure or existing cloud environments to modern cloud platforms. A well-planned migration improves scalability, reduces operational costs, enhances security, and increases business agility.",
          "Cloud consulting helps organizations evaluate existing infrastructure, choose the right cloud platform, design migration strategies, and minimize risks throughout the transformation journey."
        ],
        "image": "/src/assets/images/site/pages/cloud/Cloudmigration2.png",
        "imageAlt": "What cloud consulting and migration covers — assess, design, and move"
      },
      {
        "heading": "How SN Infotech Simplifies Your Cloud Migration",
        "body": [
          "Our consultants work closely with your team to understand your business objectives and create a migration roadmap tailored to your requirements. We assess workloads, design cloud architecture, execute secure migrations, validate performance, and provide post-migration optimization.",
          "Whether you're migrating to AWS, Azure, GCP, or OCI, we ensure a smooth transition with minimal downtime, improved performance, and long-term operational success."
        ],
        "image": "/src/assets/images/site/pages/cloud/Cloudmigration3.png",
        "imageAlt": "How SN Infotech helps with secure cloud migration and cutovers",
        "reverse": true
      }
    ],
    "approachHeading": "Our migration process",
    "approach": [
      {
        "title": "Discover & prioritise",
        "body": "Inventory applications, data, integrations, and constraints — then rank waves by business value and technical risk."
      },
      {
        "title": "Choose the platform fit",
        "body": "AWS, Azure, GCP, or OCI is selected against skills, licensing, data gravity, and long-term operating model — not hype."
      },
      {
        "title": "Design target architecture",
        "body": "Landing zones, networking, identity, and application patterns are agreed before the first production cutover."
      },
      {
        "title": "Migrate in controlled waves",
        "body": "Rehost, replatform, or refactor each wave with rehearsal, validation, and explicit rollback criteria."
      },
      {
        "title": "Validate & hand over",
        "body": "Performance, security, and operational readiness checks confirm the estate is ready for business ownership."
      },
      {
        "title": "Optimise post-migration",
        "body": "Right-sizing, automation, and cost reviews lock in the benefits that justified the move."
      }
    ],
    "featuresHeading": "Why choose SN Infotech for migration",
    "featuresLead": "Migrations fail when strategy and execution are separated. We keep both in one team through go-live and optimisation.",
    "features": [
      {
        "title": "Business-first wave planning",
        "body": "Critical journeys move when readiness is proven — not when a project plan says they must."
      },
      {
        "title": "Platform-honest advice",
        "body": "We recommend the cloud that fits your estate and team, including staying multi-cloud when that is the right answer."
      },
      {
        "title": "Minimal disruption cutovers",
        "body": "Rehearsals, data validation, and communication plans keep stakeholders calm when traffic flips."
      },
      {
        "title": "Value after the move",
        "body": "Post-migration optimisation is part of the engagement so the cloud bill and performance keep improving."
      }
    ],
    "galleryHeading": "Consulting & migration in practice",
    "galleryCaptions": [
      "Consulting overview",
      "Migration roadmap",
      "Secure cutover"
    ],
    "toolsHeading": "Platforms & tools we migrate with",
    "toolsLead": "Multi-cloud platforms and automation we use to assess, move, and stabilise workloads.",
    "tools": [
      {
        "name": "AWS",
        "src": "/src/assets/images/placeholders/cloud/tools/aws.svg",
        "body": "Landing zones and migration patterns for Amazon Web Services."
      },
      {
        "name": "Azure",
        "src": "/src/assets/images/placeholders/cloud/tools/azure.svg",
        "body": "Enterprise Azure migrations with identity and hybrid in mind."
      },
      {
        "name": "GCP",
        "src": "/src/assets/images/placeholders/cloud/tools/gcp.svg",
        "body": "Google Cloud moves for containers, data, and cloud-native apps."
      },
      {
        "name": "Oracle",
        "src": "/src/assets/images/placeholders/cloud/tools/oci.svg",
        "body": "Oracle Cloud migrations for databases and enterprise apps."
      },
      {
        "name": "Terraform",
        "src": "/src/assets/images/placeholders/cloud/tools/terraform.svg",
        "body": "Target environments defined as code for every migration wave."
      },
      {
        "name": "Ansible",
        "src": "/src/assets/images/placeholders/cloud/tools/ansible.svg",
        "body": "Configuration and cutover automation across hybrid estates."
      },
      {
        "name": "Docker",
        "src": "/src/assets/images/placeholders/cloud/tools/docker.svg",
        "body": "Container packaging when replatforming application tiers."
      },
      {
        "name": "Kubernetes",
        "src": "/src/assets/images/placeholders/cloud/tools/kubernetes.svg",
        "body": "Destination platforms for containerised workloads after cutover."
      }
    ],
    "sections": [
      {
        "heading": "Move to the cloud without losing momentum",
        "body": [
          "SN Infotech helps you choose the right platform, sequence the work, and execute migrations that protect uptime and unlock cost and agility benefits.",
          "Request a consultation to review your estate and draft a practical migration roadmap."
        ]
      }
    ],
    "gallery": [
      "/src/assets/images/site/pages/cloud/Cloudmigration1.png",
      "/src/assets/images/site/pages/cloud/Cloudmigration4.png",
      "/src/assets/images/site/pages/cloud/Cloudmigration5.png",
      "/src/assets/images/site/pages/cloud/Cloudmigration6.png"
    ]
  },
  "services/cloud/managed-cloud-support": {
    "path": "/services/cloud/managed-cloud-support",
    "title": "Managed Cloud Support | SN Infotech",
    "description": "Managed cloud support — 24/7 monitoring, incident response, patching, backup, DR, security, and FinOps across AWS, Azure, GCP, and OCI.",
    "eyebrow": "Cloud services",
    "hero": "Managed Cloud Support",
    "lead": "Keep your cloud environment secure, reliable, and optimised — continuous monitoring and expert support so your teams can focus on the business. Our managed cloud support covers availability, performance, cost hygiene, patching, and incident response across AWS, Azure, GCP, and hybrid estates. Proactive care replaces firefighting, with named ownership and clear escalation.",
    "ctaLabel": "Talk to a cloud lead",
    "ctaHref": "/free-consultation",
    "tint": "var(--c-green)",
    "heroInteractive": true,
    "heroHighlights": [
      "24/7 monitoring",
      "Proactive response",
      "Cost optimisation"
    ],
    "heroStats": [
      {
        "value": "Always-on",
        "label": "Monitoring & response"
      },
      {
        "value": "Secure",
        "label": "Patching & hardening"
      },
      {
        "value": "Efficient",
        "label": "FinOps reviews"
      }
    ],
    "mediaBlocks": [
      {
        "heading": "Your Cloud, Running Smarter",
        "body": [
          "Managing cloud infrastructure requires continuous monitoring, security updates, performance optimization, backup management, and proactive maintenance. Managed Cloud Support ensures your cloud environment remains secure, available, and cost-efficient while allowing your internal teams to focus on core business activities.",
          "With 24/7 monitoring and expert support, businesses can reduce downtime, improve reliability, and maximize the value of their cloud investments."
        ],
        "image": "/src/assets/images/site/pages/cloud/ManagedCloud2.png",
        "imageAlt": "What managed cloud support covers — monitoring, reliability, and uptime"
      },
      {
        "heading": "How SN Infotech Keeps Your Cloud Performing",
        "body": [
          "We provide comprehensive managed cloud services that include infrastructure monitoring, incident response, performance tuning, security management, backup and disaster recovery, patch management, and cloud cost optimization.",
          "Our dedicated cloud engineers proactively monitor your environment, resolve issues before they impact operations, and continuously optimise for reliability, security, and spend across AWS, Azure, GCP, and OCI."
        ],
        "image": "/src/assets/images/site/pages/cloud/ManagedCloud3.png",
        "imageAlt": "How SN Infotech delivers proactive managed cloud support",
        "reverse": true
      }
    ],
    "approachHeading": "Our managed support process",
    "approach": [
      {
        "title": "Onboard & baseline",
        "body": "We document architecture, access, SLOs, and escalation paths, then establish monitoring and backup coverage."
      },
      {
        "title": "Observe continuously",
        "body": "Health checks, alerts, and dashboards watch the services that would hurt customers if they failed."
      },
      {
        "title": "Respond & remediate",
        "body": "Incidents are triaged, contained, and closed with clear ownership — then turned into permanent fixes."
      },
      {
        "title": "Patch & harden",
        "body": "OS, runtime, and cloud configuration updates land on a cadence your change process can accept."
      },
      {
        "title": "Protect & recover",
        "body": "Backups, restore tests, and DR readiness keep recovery time objectives honest."
      },
      {
        "title": "Review & optimise",
        "body": "Monthly reliability and FinOps reviews right-size capacity and remove waste without cutting resilience."
      }
    ],
    "featuresHeading": "Why choose SN Infotech for managed cloud",
    "featuresLead": "Managed support should feel like an extension of your team — proactive, transparent, and measured against uptime and cost.",
    "features": [
      {
        "title": "Proactive before reactive",
        "body": "We chase saturation, certificate expiry, and backup failures early — not only after users complain."
      },
      {
        "title": "Multi-cloud fluency",
        "body": "One operating rhythm across AWS, Azure, GCP, and OCI instead of fragmented vendor tickets."
      },
      {
        "title": "Security as routine work",
        "body": "Patching, identity hygiene, and configuration drift checks are scheduled work, not annual projects."
      },
      {
        "title": "Transparent reporting",
        "body": "Incidents, changes, capacity, and spend are summarised so leadership sees value every month."
      }
    ],
    "galleryHeading": "Managed cloud in practice",
    "galleryCaptions": [
      "Managed platform",
      "Live monitoring",
      "Support partnership"
    ],
    "toolsHeading": "Technologies behind our managed support",
    "toolsLead": "Monitoring, automation, and cloud platforms we use to keep estates healthy and efficient.",
    "tools": [
      {
        "name": "AWS",
        "src": "/src/assets/images/placeholders/cloud/tools/aws.svg",
        "body": "Managed operations across Amazon Web Services estates."
      },
      {
        "name": "Azure",
        "src": "/src/assets/images/placeholders/cloud/tools/azure.svg",
        "body": "Day-2 care for Microsoft Azure environments."
      },
      {
        "name": "GCP",
        "src": "/src/assets/images/placeholders/cloud/tools/gcp.svg",
        "body": "Support for Google Cloud platforms and data services."
      },
      {
        "name": "CloudWatch",
        "src": "/src/assets/images/placeholders/cloud/tools/cloudwatch.svg",
        "body": "Native AWS telemetry when it is the right pane of glass."
      },
      {
        "name": "Datadog",
        "src": "/src/assets/images/placeholders/cloud/tools/datadog.svg",
        "body": "Unified observability for multi-cloud and hybrid estates."
      },
      {
        "name": "Prometheus",
        "src": "/src/assets/images/placeholders/cloud/tools/prometheus.svg",
        "body": "Metrics pipelines and alerting for cloud-native workloads."
      },
      {
        "name": "Grafana",
        "src": "/src/assets/images/placeholders/cloud/tools/grafana.svg",
        "body": "Operational dashboards your teams can read at a glance."
      },
      {
        "name": "Terraform",
        "src": "/src/assets/images/placeholders/cloud/tools/terraform.svg",
        "body": "Drift-aware infrastructure changes under managed change control."
      }
    ],
    "sections": [
      {
        "heading": "Cloud operations you do not have to carry alone",
        "body": [
          "SN Infotech provides managed cloud support that keeps environments secure, available, and cost-efficient — with engineers who know your architecture.",
          "Talk to us about coverage, SLAs, and the first thirty days of onboarding for your cloud estate."
        ]
      }
    ],
    "gallery": [
      "/src/assets/images/site/pages/cloud/ManagedCloud1.png",
      "/src/assets/images/site/pages/cloud/ManagedCloud4.png",
      "/src/assets/images/site/pages/cloud/ManagedCloud5.png",
      "/src/assets/images/site/pages/cloud/ManagedCloud6.png"
    ]
  }
};
