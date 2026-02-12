export const siteConfig = {
  name: "Dhruv Bhanderi",
  title: "Dhruv Bhanderi — Software Engineer",
  description:
    "Software Engineer specializing in full-stack development, cloud infrastructure, and scalable systems. MS CS @ USC.",
  url: "https://dhruvbhanderi.com",
  email: "dbhander@usc.edu",
  phone: "213-725-8988",
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
    url: "https://www.linkedin.com/in/dhruvbhanderi7/",
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
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 92 },
      { name: "JavaScript (ES6+)", level: 93 },
      { name: "TypeScript", level: 88 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 78 },
      { name: "HTML5/CSS3", level: 87 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 93 },
      { name: "Next.js", level: 82 },
      { name: "Vue.js", level: 76 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 72 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "Django", level: 88 },
      { name: "Flask", level: 78 },
      { name: "REST APIs", level: 93 },
      { name: "gRPC", level: 75 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EB, RDS, S3)", level: 88 },
      { name: "Docker", level: 86 },
      { name: "Kubernetes", level: 74 },
      { name: "GitHub Actions", level: 91 },
      { name: "CI/CD Pipelines", level: 90 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: 91 },
      { name: "MongoDB", level: 83 },
      { name: "Redis", level: 78 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Tools & Testing",
    items: [
      { name: "Kafka", level: 74 },
      { name: "Jest / PyTest", level: 80 },
      { name: "Git & GitHub", level: 93 },
      { name: "Postman", level: 82 },
      { name: "Agile / Code Reviews", level: 85 },
    ],
  },
];

export const experiences = [
  {
    role: "Software Engineer Intern",
    company: "USC Norman Lear Center",
    location: "Los Angeles, CA",
    date: "May 2025 – Present",
    bullets: [
      "Architected and deployed a Django + PostgreSQL backend on AWS Elastic Beanstalk, optimizing ORM queries, connection pooling, and indexing to boost API throughput 42% and reduce response latency 35% under peak load.",
      "Developed a React + Django REST search system with dynamic year-filter and keyword routing, improving frontend load times by 30%, enhancing UX, and ensuring seamless API integration across modules.",
      "Automated ETL pipelines using AWS RDS snapshots, S3, and Python, enabling fault-tolerant data ingestion, accelerated data syncs, consistent environment deployments, and automated schema version control.",
      "Implemented CI/CD pipelines with rollback support and environment parity checks, increasing release reliability by 40%, reducing deployment errors, and enabling automated AWS builds with GitHub Actions workflows.",
    ],
    tags: ["Django", "PostgreSQL", "AWS", "React", "CI/CD"],
  },
  {
    role: "Software Development Engineer",
    company: "SPIGOT Developers",
    location: "India",
    date: "Jan 2024 – Jul 2024",
    bullets: [
      "Designed Node.js/Express microservices with Redis caching and Kafka workers; improved p95 latency by 35% and doubled throughput (2.1×) across 14+ stable releases via horizontal scaling and async I/O optimization.",
      "Automated CI/CD pipelines via GitHub Actions (parallel tests, cached images), reducing build-to-deploy time from 18m to 7m (-61%) and enabling one-click rollbacks with Dockerized staging verification checks.",
      "Refactored a monolith into modular microservices with gRPC APIs, distributed tracing, and rate limiting, improving fault isolation and deployment velocity 3× across environments through containerized orchestration.",
    ],
    tags: ["Node.js", "Redis", "Kafka", "Docker", "gRPC"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "SPIGOT Developers",
    location: "India",
    date: "May 2023 – Aug 2023",
    bullets: [
      "Built modular Vue.js + TypeScript + Tailwind dashboards for 300+ DAUs with responsive, accessibility UX.",
      "Implemented OAuth2 + RBAC, blocking 90% of unauthorized requests; deployed serverless functions for analytics.",
      "Partnered with design/QA to ensure WCAG accessibility compliance and stable user-facing releases.",
    ],
    tags: ["Vue.js", "TypeScript", "Tailwind", "OAuth2", "Serverless"],
  },
];

export const education = [
  {
    school: "University of Southern California",
    degree: "Master of Science in Computer Science (GPA: 3.85/4)",
    date: "Sep 2024 – May 2026",
    courses: [
      "Analysis of Algorithms",
      "Information Retrieval",
      "Web Technologies",
      "Natural Language Processing",
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
    ],
  },
];

export const projects = [
  {
    title: "Reddit AI-Native Platform",
    description:
      "Rebuilt Reddit as an AI-native platform using Claude 3.5 for sentiment analysis on 500+ comments under 5s. Integrated Letta AI moderation agents with persistent memory, reducing redundant flags by 80% vs AutoMod. Engineered Node.js + Flask API and MongoDB pipeline for multi-thread analysis and dashboard.",
    tags: ["Node.js", "Flask", "MongoDB", "Docker", "LLM Agents"],
    github: "",
    live: "https://devpost.com/software/redditai",
    featured: true,
  },
  {
    title: "Fin-Nexus (FinTech SaaS Platform)",
    description:
      "Integrated Plaid + Dwolla APIs for KYC/ACH transfers in under 2 minutes with auth, logging, and OpenAPI docs. Automated CI/CD with Docker + Kubernetes + GitHub Actions; added tests, release notes, and monitoring.",
    tags: ["Next.js", "Docker", "Kubernetes", "GitHub Actions", "Plaid"],
    github: "https://github.com/dhruv7539/Fin-Nexus",
    live: "",
    featured: true,
  },
  {
    title: "Distributed File Storage System",
    description:
      "Implemented a GFS-inspired distributed file system using Raft consensus for replication and failover. Designed sharded metadata and chunk servers with replication, achieving 99.99% durability under node failures. Benchmarked throughput at 20K+ ops/sec across concurrent clients.",
    tags: ["C++", "gRPC", "Raft Consensus", "Unix/Linux"],
    github: "https://github.com/dhruv7539",
    live: "",
    featured: true,
  },
  {
    title: "BigBrain",
    description:
      "A Next.js-powered platform for interactive learning, AI-driven insights, and real-time knowledge sharing. Built with TypeScript, TailwindCSS, and Convex for smart content organization and seamless user interactions.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Convex"],
    github: "https://github.com/dhruv7539/BigBrain",
    live: "https://big-brain-pied.vercel.app/",
    featured: true,
  },
  {
    title: "PixMod — AI Image SaaS",
    description:
      "An AI-driven SaaS platform for advanced image processing featuring image restoration, recoloring, object removal, generative filling, and background removal. Includes secure auth, Stripe payments, and a credits system.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Stripe"],
    github: "https://github.com/dhruv7539/PixMod",
    live: "https://pixmod.vercel.app/",
    featured: true,
  },
  {
    title: "Hospital Management System",
    description:
      "A healthcare patient management app enabling patients to register, book, and manage appointments with doctors. Features admin scheduling tools, SMS notifications via Twilio, and performance monitoring with Sentry.",
    tags: ["Next.js", "TypeScript", "Appwrite", "Tailwind", "Twilio"],
    github: "https://github.com/dhruv7539/Hospital-Management",
    live: "https://hims-rouge.vercel.app/",
    featured: false,
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
      "Software Engineer | Distributed Systems | Full-Stack | Cloud & AI",
  },
  {
    command: "ls skills/",
    output:
      "Python  JavaScript  TypeScript  React  Node.js  Django  Flask  AWS  Docker  K8s  gRPC  Kafka  PostgreSQL  MongoDB  Redis",
  },
  { command: "cat status.txt", output: "Open to opportunities ✓" },
];
