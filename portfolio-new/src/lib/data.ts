export const siteConfig = {
  name: "Dhruv Bhanderi",
  title: "Dhruv Bhanderi — Software Engineer",
  description:
    "Software Engineer specializing in distributed systems, cloud infrastructure, and AI-powered platforms. MS CS @ USC.",
  url: "https://dhruvbhanderi.com",
  email: "dbhander@usc.edu",
  phone: "(213) 725-8988",
  location: "Los Angeles, CA",
  resumeUrl:
    "https://drive.google.com/file/d/1JPiUdoTwses7-89eUksZgH1sHhNIIUK3/view?usp=sharing",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/dhruv7539",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bhanderi7/",
    icon: "linkedin",
  },
  {
    name: "Medium",
    url: "https://medium.com/@dhruvbhanderi7",
    icon: "medium",
  },
  {
    name: "Email",
    url: "mailto:dbhander@usc.edu",
    icon: "mail",
  },
];

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Open Source", href: "#opensource" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 92 },
      { name: "JavaScript (ES6+)", level: 93 },
      { name: "TypeScript", level: 88 },
      { name: "Go", level: 82 },
      { name: "Java", level: 80 },
      { name: "C++", level: 78 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 93 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 76 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML5/CSS3", level: 87 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django / DRF", level: 90 },
      { name: "Node.js / Express", level: 92 },
      { name: "FastAPI", level: 82 },
      { name: "Flask", level: 78 },
      { name: "REST APIs", level: 93 },
      { name: "gRPC", level: 78 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EB, RDS, S3, Lambda)", level: 88 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes / Helm", level: 82 },
      { name: "Terraform", level: 78 },
      { name: "GitHub Actions / CI/CD", level: 91 },
    ],
  },
  {
    category: "Databases & Messaging",
    items: [
      { name: "PostgreSQL / pgvector", level: 91 },
      { name: "MongoDB", level: 83 },
      { name: "Redis", level: 78 },
      { name: "Kafka", level: 78 },
    ],
  },
  {
    category: "ML / NLP / AI",
    items: [
      { name: "PyTorch", level: 80 },
      { name: "Claude / OpenAI APIs", level: 88 },
      { name: "RAG Pipelines", level: 82 },
      { name: "LLM Function Calling", level: 85 },
      { name: "Hugging Face", level: 78 },
    ],
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "USC Annenberg Norman Lear Center",
    location: "Los Angeles, CA",
    date: "May 2025 – Present",
    bullets: [
      "Architected a Django + PostgreSQL backend on AWS Elastic Beanstalk; optimized ORM queries, connection pooling, and B-tree indexing to boost API throughput 42% and reduce p95 latency 35% under peak load.",
      "Built scalable ETL pipelines processing 50K+ multilingual data points and 1.5M+ tokens into PostgreSQL + pgvector, with async I/O throttling reducing API rate-limit failures to <2%.",
      "Built GenAI-native data pipelines leveraging LLM classification (OpenAI, Claude) for sentiment/toxicity analysis on multilingual social media data for World Bank and Gates Foundation research.",
      "Engineered a semantic retrieval system using text-embedding-3-large with pgvector for 150K+ records; evaluated inter-annotator agreement (Cohen's kappa = 0.576, Krippendorff's alpha).",
      "Configured CI/CD pipelines with rollback support via GitHub Actions; automated Docker image builds and health-probe validation, increasing release reliability 40%.",
    ],
    tags: ["Django", "PostgreSQL", "AWS", "GenAI", "pgvector", "Docker"],
  },
  {
    role: "Software Development Engineer",
    company: "SPIGOT Developers",
    location: "India",
    date: "Jan 2024 – Jul 2024",
    bullets: [
      "Designed Node.js/Express microservices with Redis caching and Kafka message queues, improving p95 latency 35% and doubling throughput (2.1x) across 14+ stable releases via horizontal scaling and async I/O.",
      "Streamlined CI/CD via GitHub Actions with parallel tests and cached Docker images, cutting build-to-deploy time from 18 min to 7 min (-61%) and enabling one-click rollbacks.",
      "Refactored a monolithic codebase into modular microservices with gRPC APIs, distributed tracing, and rate limiting, accelerating deployment velocity 3x across environments.",
    ],
    tags: ["Node.js", "Redis", "Kafka", "Docker", "gRPC"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "SPIGOT Developers",
    location: "India",
    date: "May 2023 – Aug 2023",
    bullets: [
      "Built modular Vue.js + TypeScript + Tailwind CSS dashboards serving 300+ DAUs with responsive, accessible UX.",
      "Implemented OAuth2 + RBAC authorization, blocking 90% of unauthorized requests; deployed serverless functions for real-time analytics.",
      "Wrote 50+ unit and integration tests (Jest, Cypress), achieving 85% code coverage; resolved 12 WCAG accessibility violations across 6 modules.",
    ],
    tags: ["Vue.js", "TypeScript", "Tailwind", "OAuth2", "Jest"],
  },
];

export const education = [
  {
    school: "University of Southern California",
    degree: "Master of Science in Computer Science (GPA: 3.85/4)",
    date: "Sep 2024 – May 2026",
    courses: [
      "Analysis of Algorithms",
      "Distributed Systems",
      "Information Retrieval",
      "Web Technologies",
      "Natural Language Processing",
      "Computer Networks",
    ],
  },
  {
    school: "Pandit Deendayal Energy University",
    degree: "Bachelor of Technology in Computer Science & Engineering (GPA: 3.88/4)",
    date: "Nov 2020 – May 2024",
    courses: [
      "Distributed Systems",
      "Machine Learning",
      "Database Management Systems",
      "Artificial Intelligence",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const projects = [
  {
    title: "DeployIQ — AI K8s Deployment Pipeline",
    description:
      "Production-grade Go CLI for Kubernetes deployments with an LLM diagnostic agent using Claude API with native function calling. Iteratively invokes 5 K8s tools across up to 5 reasoning iterations. RAG pipeline with pgvector for incident retrieval. Kafka event streaming, 6 custom Prometheus metrics, Terraform IaC, and <30s automated rollbacks.",
    tags: ["Go", "Kubernetes", "Claude API", "Kafka", "Terraform", "Prometheus"],
    github: "https://github.com/dhruv7539/deployiq",
    live: "",
    featured: true,
  },
  {
    title: "Distributed File Storage System",
    description:
      "GFS-inspired distributed file system built from scratch with Raft-replicated master cluster for leader election, log replication, and automatic failover. 16-shard metadata partitioning with chain-replication writes across N-way replicas, benchmarked at 47K+ ops/sec (64 concurrent clients, p99 latency 2.3ms).",
    tags: ["C++", "gRPC", "Raft Consensus", "Protobuf"],
    github: "https://github.com/dhruv7539/distributed-file-storage",
    live: "",
    featured: true,
  },
  {
    title: "Reddit:AI — Intelligence Platform",
    description:
      "AI-powered platform built at CalHacks 12.0 with real-time sentiment and toxicity classification using Claude. Integrated Letta AI agents with persistent memory, reducing redundant moderation flags 80% vs. AutoMod. Built with Next.js, FastAPI, and MongoDB.",
    tags: ["Next.js", "FastAPI", "Claude", "MongoDB", "Docker"],
    github: "",
    live: "https://devpost.com/software/redditai",
    featured: true,
  },
  {
    title: "Fin-Nexus (FinTech SaaS)",
    description:
      "Integrated Plaid + Dwolla APIs for KYC verification and ACH transfers in under 2 minutes. Automated CI/CD with Docker + Kubernetes + GitHub Actions with test gates, release notes, and monitoring.",
    tags: ["Next.js", "Plaid", "Docker", "Kubernetes", "GitHub Actions"],
    github: "https://github.com/dhruv7539/Fin-Nexus",
    live: "",
    featured: true,
  },
  {
    title: "PixMod — AI Image SaaS",
    description:
      "AI-driven SaaS platform for advanced image processing featuring restoration, recoloring, object removal, generative filling, and background removal. Includes secure auth, Stripe payments, and a credits system.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Stripe"],
    github: "https://github.com/dhruv7539/PixMod",
    live: "https://pixmod.vercel.app/",
    featured: true,
  },
  {
    title: "Hospital Management System",
    description:
      "Healthcare patient management app with registration, appointment booking, admin scheduling, SMS notifications via Twilio, and performance monitoring with Sentry.",
    tags: ["Next.js", "TypeScript", "Appwrite", "Tailwind", "Twilio"],
    github: "https://github.com/dhruv7539/Hospital-Management",
    live: "https://hims-rouge.vercel.app/",
    featured: false,
  },
];

export const publications = [
  {
    title: "Bridging Dialects: Enhancing Neural Machine Dialect Translation for Gujarati Language Through Model Adaptation",
    venue: "IEEE INDIACom 2025",
    authors: "Thakkar, Vekariya, Bhanderi, Paliwal",
    highlight: "Outperformed GPT-4 and Gemini on BLEU, METEOR, and chrF metrics",
    tags: ["NLP", "PyTorch", "NLLB", "Low-Resource Languages"],
  },
  {
    title: "Impact of Two-Factor Authentication on User Convenience and Security",
    venue: "IEEE INDIACom 2023",
    authors: "Bhanderi et al.",
    highlight: "Cited 2 times",
    tags: ["Security", "Authentication", "User Research"],
  },
];

export const openSourceContributions = [
  {
    project: "Kubernetes",
    repo: "kubernetes/kubernetes",
    pr: "#137189",
    prUrl: "https://github.com/kubernetes/kubernetes/pull/137189",
    description: "Fixed client-go fake Pods.GetLogs to honor test reactors in v1.36. Made GetLogs reactor-aware, propagated reactor errors, and wrote comprehensive unit tests.",
    reviewedBy: "@liggitt (senior K8s maintainer)",
    lines: "+92, -3",
    tags: ["Go", "client-go", "Kubernetes"],
  },
  {
    project: "Glean Agent Toolkit",
    repo: "gleanwork/glean-agent-toolkit",
    pr: "#25",
    prUrl: "https://github.com/gleanwork/glean-agent-toolkit/pull/25",
    description: "Fixed Pydantic serialization so camelCase alias fields survived ADK adapters. Added regression tests for SDK compatibility.",
    tags: ["Python", "Pydantic", "AI Agents"],
  },
  {
    project: "pnpm",
    repo: "pnpm/pnpm",
    pr: "#10711",
    prUrl: "https://github.com/pnpm/pnpm/pull/10711",
    description: "Fixed cached bundled-manifest behavior so devDependencies persist in stored manifest subsets.",
    tags: ["TypeScript", "Package Managers"],
  },
  {
    project: "OWASP BLT",
    repo: "OWASP-BLT/BLT",
    pr: "#5948",
    prUrl: "https://github.com/OWASP-BLT/BLT/pull/5948",
    description: "Fixed N+1 query in the issues API with select_related, prefetch_related, and annotated counts.",
    tags: ["Python", "Django", "Performance"],
  },
  {
    project: "Glean MCP Server",
    repo: "gleanwork/mcp-server",
    pr: "#342",
    prUrl: "https://github.com/gleanwork/mcp-server/pull/342",
    description: "Added GHCR visibility validation and runtime smoke testing for Dockerized MCP server releases.",
    tags: ["Docker", "MCP", "CI/CD"],
  },
];

export const certifications = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM",
    description:
      "Proficiency in cloud-native application development with React, Node.js, Docker, and Kubernetes.",
    url: "https://coursera.org/share/62463eec967153b9a6b66ff733ec10f0",
    color: "#0F62FE",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    description:
      "Foundational data concepts and their application in data-driven decision-making.",
    url: "https://coursera.org/share/5e89c2a1f841612b8646283e6d818059",
    color: "#EA4335",
  },
  {
    title: "IBM Full-Stack JavaScript Developer",
    issuer: "IBM",
    description:
      "Full-stack JavaScript development with modern frameworks and cloud deployment.",
    url: "https://coursera.org/share/2f8b8f7d8580b7c25ea3425453671070",
    color: "#0F62FE",
  },
];

export const terminalCommands = [
  { command: "whoami", output: "Dhruv Bhanderi — MS CS @ USC (3.85 GPA)" },
  {
    command: "cat about.txt",
    output:
      "Software Engineer | Distributed Systems | Cloud & AI | Open Source Contributor",
  },
  {
    command: "ls skills/",
    output:
      "Python  Go  TypeScript  React  Django  FastAPI  AWS  Docker  K8s  Helm  Terraform  Kafka  gRPC  PostgreSQL  pgvector",
  },
  { command: "git log --oneline -1 k8s", output: "PR #137189 merged into kubernetes/kubernetes v1.36" },
  { command: "cat status.txt", output: "Open to new grad SWE opportunities ✓" },
];
