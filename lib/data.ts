import skillSyncImg from "@/public/skillSyncImg.png";
import repoAnalyzerImg from "@/public/repoAnalyzerImg.png";
import mulaiImg from "@/public/mulaiImg.png";
import patientAdvocateImg from "@/public/patientAdvocate.png";
import aetherImg from "@/public/aetherImg.png";
import chatpulseImg from "@/public/chatpulseImg.jpg";
import fleetshieldImg from "@/public/fleetshieldImg.jpg";
import qamonitorImg from "@/public/qamonitorImg.jpg";

export const links = [
  { name: "Overview", hash: "#overview" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Architecture", hash: "#architecture" },
  { name: "Contact", hash: "#contact" },
] as const;

export const personalInfo = {
  name: "Akshay Chethireddy",
  role: "Software Engineer",
  focus: "Distributed Systems, Backend Microservices & Production AI",
  location: "Lowell, Massachusetts, United States",
  email: "akshayreddychethireddy15@gmail.com",
  phone: "(617) 917-4554",
  github: "https://github.com/AkshayReddyChethireddy",
  linkedin: "https://linkedin.com/in/akshayreddy15",
  portfolio: "https://akshayreddych.vercel.app",
  resumePath: "/CV.pdf",
  summary:
    "Software engineer with 2.5 years of experience building Java/Spring Boot payment microservices, C++ concurrent storage engines, and deterministic multi-agent LLM systems. Scaled transaction processing to 1,200+ rps, cut peak query latency 40%, and raised document extraction accuracy 28% with production RAG architectures.",
  metrics: [
    { label: "Payment Ingestion Throughput", value: "1,200+ rps", detail: "Stateless Spring Boot & Kafka microservices" },
    { label: "Transaction Latency Reduction", value: "-40%", detail: "250ms to 150ms via SQL & index profiling" },
    { label: "Concurrent KV Store Speed", value: "2.65M ops/s", detail: "StrataKV C++20 lock-sharded engine (p99 < 1.6µs)" },
    { label: "Telemetry Concurrency", value: "10,000+ Agents", detail: "FleetShield .NET 8 System.Threading.Channels" },
  ],
};

export const experiencesData = [
  {
    role: "Software Engineer",
    company: "Mobifintree – IndyaPay Digital Payments Platform",
    period: "Dec 2023 – Apr 2025",
    location: "Lowell, MA / Hybrid",
    headline: "High-throughput fintech payment microservices and settlement infrastructure",
    bullets: [
      "Architected and deployed 6 Java/Spring Boot microservices on PostgreSQL and Apache Kafka powering merchant onboarding, transaction routing, and settlement processing.",
      "Cut peak transaction latency by 40% (250 ms to 150 ms) by profiling query execution plans, adding composite B-tree indexes, and eliminating redundant ORM queries on hot paths.",
      "Eliminated double-billing and duplicate charge anomalies during network retries by enforcing strict transactional idempotency keys backed by PostgreSQL unique constraints.",
      "Secured 15 public and internal REST services handling 1,200+ requests per second using stateless JWT authentication and granular role-based access control (RBAC).",
      "Reduced Mean Time to Resolution (MTTR) by 35% by standardizing correlation request IDs across distributed microservices in AWS CloudWatch logs, metrics, and traces.",
      "Automated zero-downtime rolling production releases with containerized Jenkins CI/CD deployment pipelines and Docker.",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "AWS CloudWatch", "REST APIs", "JWT", "Jenkins", "Microservices"],
  },
  {
    role: "Software Engineer",
    company: "ThreePointO Labs (3.0 Labs) – AI Product Studio",
    period: "Nov 2022 – Nov 2023",
    location: "Hyderabad, India",
    headline: "Production AI systems, stateful RAG pipelines, and multi-tenant platforms",
    bullets: [
      "Engineered early versions of the BFSI Skill Portal (Government of Telangana initiative backed by HSBC, JPMorgan Chase, and State Street), scaling to 10,300+ active students across 40+ institutions with dedicated recruiter review workflows.",
      "Built FundPitch (Node.js, Angular, GraphQL), an invite-only investment syndication platform connecting enterprise issuers with SEBI-registered merchant bankers across 10+ modules and 6 permissioned user roles with an encrypted document vault.",
      "Architected production RAG pipelines and multi-agent LangGraph workflows on Azure OpenAI Service, increasing document parsing accuracy by 28% over legacy baseline extraction.",
      "Developed cross-platform mobile and web dispatch infrastructure for Blue Cross Hyderabad (React Native, Spring Boot) for veterinary health records and real-time animal rescue fleet coordination.",
      "Engineered VDTS (Django, React), a centralized incident management and service ticketing engine featuring rule-based automated engineer dispatch.",
      "Maintained two-week Agile/Scrum development cycles backed by strict TDD (Jest, JUnit) and automated GitHub Actions CI/CD pipelines, driving weekly stakeholder demonstrations.",
    ],
    tech: ["Python", "FastAPI", "Azure OpenAI", "LangGraph", "Node.js", "GraphQL", "Spring Boot", "React", "React Native", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    role: "B.S. in Computer Science",
    company: "University of Massachusetts Lowell",
    period: "Graduation: May 2026",
    location: "Lowell, MA",
    headline: "Focus in Distributed Systems, Operating Systems, and Concurrent Software Design",
    bullets: [
      "Cumulative GPA: 3.88 / 4.0 — Chancellor's List Student.",
      "Core coursework & research: Distributed Systems, Operating Systems, Analysis of Algorithms, Object-Oriented Software Engineering, Database Systems, Computer Architecture.",
    ],
    tech: ["C/C++", "Java", "Python", "Data Structures & Algorithms", "POSIX Concurrency", "System Design"],
  },
] as const;

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  problem: string;
  architecture: string;
  benchmarks: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string | null;
  imageUrl?: any;
  featuredMetric: { label: string; value: string };
}

export const projectsData: ProjectItem[] = [
  {
    id: "stratakv",
    title: "StrataKV",
    badge: "Storage Engine",
    summary: "Concurrent, durable key-value storage engine in C++20 with lock sharding and group-commit write-ahead logging.",
    problem:
      "Under high-concurrency write workloads, global mutex locks collapse multi-threaded throughput. Synchronous per-operation disk flushes (fdatasync) bound performance to disk rotation limits.",
    architecture:
      "Partitions keyspace across 64 cache-line padded shards using std::shared_mutex (shared for reads, exclusive for writes). Decouples writes into an in-memory buffer copy under brief lock acquisition, while a dedicated background flusher thread batches pending writes into a single amortized fdatasync call. Employs CRC32 record framing, atomic snapshot checkpointing, and torn-tail log recovery.",
    benchmarks: [
      "2.65M ops/sec throughput in 95% read workload (3.2x scaling vs global lock)",
      "p99 latency < 1.6 µs (cut from 22.5 µs on un-sharded baseline)",
      "66,415 durable writes/sec under 32 threads via group-commit flusher (15.9 records/fsync)",
      "12 comprehensive tests clean under ThreadSanitizer (TSan) & AddressSanitizer (ASan)",
    ],
    tags: ["C++20", "POSIX", "Multithreading", "Write-Ahead Log", "Group Commit", "Lock Sharding", "Google Benchmark", "CMake"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/stratakv",
    liveUrl: null,
    imageUrl: null,
    featuredMetric: { value: "2.65M ops/s", label: "Read Throughput (p99 < 1.6µs)" },
  },
  {
    id: "aether",
    title: "Aether",
    badge: "Distributed AI Platform",
    summary: "Production-grade 13-microservice AI platform featuring sub-300ms streaming inference and persistent hybrid memory.",
    problem:
      "Enterprise multi-agent pipelines struggle with sluggish initial token streaming, hallucinated multi-step reasoning, and prohibitive inference costs when routing all requests to monolithic frontier models.",
    architecture:
      "Coordinates 13 microservices with pluggable LLM backends (Claude, OpenAI, self-hosted vLLM, Ollama). Employs hybrid memory spanning episodic logs in PostgreSQL, semantic vectors in Qdrant, and relational knowledge graphs in Neo4j. An automated complexity classifier dynamically routes requests, while ReAct/Reflexion self-critique loops run with real-time fact-verification citation guards.",
    benchmarks: [
      "Sub-300ms time-to-first-token (TTFT) streaming over Server-Sent Events (SSE)",
      "Automated complexity classifier routes 70% of volume to lower-cost/local models",
      "Deployable on Kubernetes via Helm charts with HPA and canary rollout automation",
      "Deterministic fact-verifier with automated real-time citation attachment",
    ],
    tags: ["Python 3.11", "FastAPI", "Next.js 14", "TypeScript", "Kubernetes", "Helm", "Qdrant", "Neo4j", "PostgreSQL", "vLLM", "Docker"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/aether",
    liveUrl: null,
    imageUrl: aetherImg,
    featuredMetric: { value: "< 300ms", label: "Streaming TTFT Latency" },
  },
  {
    id: "fleetshield",
    title: "FleetShield",
    badge: "Systems & Security",
    summary: "High-throughput Zero-Trust endpoint telemetry ingestion engine designed to absorb concurrent heartbeats from 10,000+ edge agents.",
    problem:
      "Synchronous REST APIs processing continuous device heartbeats cause thread pool starvation and dropped network packets during traffic surges, delaying critical security posture drift alerts.",
    architecture:
      "Built with ASP.NET Core Minimal APIs in C# and .NET 8. Ingestion endpoints write non-blockingly into bounded producer-consumer in-memory queues via System.Threading.Channels, immediately returning HTTP 202 Accepted. A background evaluation worker continuously pulls micro-batches to compute compliance drift against thread-safe ConcurrentDictionary state caches, publishing alerts to Azure Service Bus and Redis.",
    benchmarks: [
      "10,000+ concurrent simulated edge device heartbeats absorbed with 0 dropped packets",
      "Sub-15ms HTTP 202 Accepted response times under peak ingestion pressure",
      "Lock-free state evaluation preventing gateway thread-pool starvation",
      "Automated compliance drift detection and real-time alert dispatch",
    ],
    tags: ["C#", ".NET 8", "Minimal APIs", "System.Threading.Channels", "ConcurrentDictionary", "Azure Service Bus", "Redis", "Bicep"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/FleetShield",
    liveUrl: null,
    imageUrl: fleetshieldImg,
    featuredMetric: { value: "10,000+", label: "Concurrent Edge Agents" },
  },
  {
    id: "chatpulse",
    title: "ChatPulse",
    badge: "Real-Time Streaming & AI",
    summary: "Live Twitch chat analytics and hype detection engine with Go serverless AI recaps for high-velocity streams.",
    problem:
      "Live streams receiving hundreds of messages per second overload the browser DOM, causing frame stuttering while streamers remain unable to track chat consensus, viewer questions, or hype moments during gameplay.",
    architecture:
      "Connects anonymously to Twitch IRCv3 over WebSockets with custom byte-offset emote parsers. Decouples message ingestion from the React render cycle using a 1-second state tick and 10-second sliding time buckets for hype-spike detection. Dispatches rolling 2-minute chat windows to a Go 1.22 serverless backend that queries Anthropic Claude Haiku, safeguarded with strict prompt-injection delimiters.",
    benchmarks: [
      "Zero UI dropped frames handling 500+ messages per second live burst streams",
      "Sub-2s prompt-injection-guarded AI summaries highlighting questions and mood",
      "29 comprehensive unit tests across TypeScript IRC tokenization and Go endpoints",
      "Zero-auth anonymous IRCv3 client with exponential backoff auto-reconnect",
    ],
    tags: ["React 18", "TypeScript", "Go 1.22", "Vite", "WebSockets (IRCv3)", "Vercel Serverless", "Anthropic Claude API", "Vitest"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/chatpulse",
    liveUrl: "https://chatpulse-zeta.vercel.app/",
    imageUrl: chatpulseImg,
    featuredMetric: { value: "500+ msg/s", label: "Zero-Jank Parsing Throughput" },
  },
  {
    id: "thepatientadvocate",
    title: "The Patient Advocate",
    badge: "Deterministic AI Systems",
    summary: "Medical bill auditing system pairing Vision LLMs with a deterministic CMS fee schedule truth layer to prevent pricing hallucinations.",
    problem:
      "Hospital billing errors and inflated procedure charges burden patients with unfair costs, yet raw LLMs routinely hallucinate legal statutes, CPT codes, and standard regional pricing when summarizing complex bills.",
    architecture:
      "Combines GPT-4o Vision OCR with a deterministic PostgreSQL truth layer seeded with official CMS Physician Fee Schedules. Implements a LangGraph state machine with human-in-the-loop interruption checkpoints (interrupt_after=['audit']) allowing patients to inspect extracted line items before synthesizing formal appeal letters. Integrates client-side regex and canvas scrubbing to redact PII prior to transit.",
    benchmarks: [
      "+28% extraction accuracy improvement over standard optical character recognition",
      "0% pricing hallucination rate enforced by relational database CPT fee schedule lookups",
      "Stateful LangGraph interruption allowing human verification before formal appeal generation",
      "In-browser client-side PII redaction ensuring HIPAA compliance",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "LangGraph", "GPT-4o Vision", "PostgreSQL", "SQLAlchemy", "Tailwind CSS"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/thepatientadvocate",
    liveUrl: null,
    imageUrl: patientAdvocateImg,
    featuredMetric: { value: "0% Error", label: "Deterministic Price Verification" },
  },
  {
    id: "github-repo-analyzer",
    title: "GitHub Repository Analyzer",
    badge: "Code Intelligence & RAG",
    summary: "Asynchronous codebase intelligence engine analyzing architecture, syntax ASTs, and dependencies with conversational RAG.",
    problem:
      "Onboarding to complex codebases requires hours of manual dependency tracing, architecture reverse-engineering, and file navigation.",
    architecture:
      "Clones public GitHub repositories into isolated sandboxes, parses Abstract Syntax Trees (AST) to extract dependencies and compute cyclomatic complexity, and generates chunk embeddings via Jina AI into persistent ChromaDB storage. Decouples indexing across Celery distributed workers with Redis caching. Serves codebase Q&A over Server-Sent Events (SSE) with Groq LLaMA 3.3 inference.",
    benchmarks: [
      "Sub-500ms token streaming via Groq LPU inference over Server-Sent Events (SSE)",
      "Distributed Celery worker execution with Redis TTLCache preventing redundant clones",
      "Automated syntax AST parsing across JavaScript, TypeScript, Python, and Go",
      "Persistent ChromaDB vector index with exact file-level citation attribution",
    ],
    tags: ["Python 3.11", "FastAPI", "Celery", "Redis", "LangChain", "ChromaDB", "Jina Embeddings", "Groq LLaMA 3.3", "React 18", "Docker"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/githubRepoAnalyzer",
    liveUrl: null,
    imageUrl: repoAnalyzerImg,
    featuredMetric: { value: "< 500ms", label: "Token Streaming Response" },
  },
  {
    id: "mulai",
    title: "Mulai BI System",
    badge: "Multi-Agent Systems",
    summary: "Autonomous multi-agent business intelligence and outlier detection pipeline for commercial invoice ingestion.",
    problem:
      "Multi-store commercial operations receive hundreds of unstructured paper invoices and receipts, causing pricing anomalies and delayed balance sheet audits.",
    architecture:
      "Stateful LangGraph pipeline orchestrating specialized agents: Extractor parses raw visual documents into Pydantic models via Gemini 1.5 Flash Vision, Insight Analyst computes rolling statistical outlier deviations against historical store baselines, and DatabaseAgent handles transactional persistence to PostgreSQL with an automatic SQLite local failover.",
    benchmarks: [
      "Real-time SSE event streaming of agent execution steps and state transitions",
      "Automated statistical anomaly detection flagging price markups > 20% against baselines",
      "Resilient database failover architecture ensuring zero data loss during network splits",
      "Hardened multi-stage Docker container isolation executing under an unprivileged user",
    ],
    tags: ["Python", "FastAPI", "LangGraph", "Gemini 1.5 Flash Vision", "SQLAlchemy", "PostgreSQL", "SQLite", "Docker", "SSE"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/mulai-bi-system",
    liveUrl: null,
    imageUrl: mulaiImg,
    featuredMetric: { value: "100%", label: "Pipeline Fault Tolerance (Dual DB)" },
  },
  {
    id: "qa-monitor-engine",
    title: "QA Monitor Engine",
    badge: "Automation & Performance",
    summary: "Headless cross-browser performance tracing and regression suite running parallel multi-engine audits.",
    problem:
      "Web applications frequently suffer silent rendering regressions and layout shift anomalies across non-Chromium engines (Firefox, WebKit/Mobile Safari) that escape standard CI pipelines.",
    architecture:
      "FastAPI orchestrator dispatching synchronized headless browser instances across Chromium, Firefox, and WebKit simultaneously via Playwright. Traces DOM paint timestamps, layout shift anomalies, and HTTP waterfall timings, surfacing comparative metrics to a React 19 monitoring console.",
    benchmarks: [
      "Parallel tri-engine audit execution across Chromium, Firefox, and WebKit runners",
      "Granular capture of DNS resolution, TTFB, and DOMContentLoaded waterfall metrics",
      "Zero-dependency isolated execution packaged within Docker Compose environments",
      "Automated layout shift regression and screenshot discrepancy detection",
    ],
    tags: ["Python 3.11", "FastAPI", "Playwright (Headless)", "React 19", "TypeScript", "Vite", "Docker Compose"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/qa-monitor-engine",
    liveUrl: null,
    imageUrl: qamonitorImg,
    featuredMetric: { value: "3 Engines", label: "Concurrent Headless Audits" },
  },
  {
    id: "skillsync",
    title: "SkillSync",
    badge: "Full-Stack SaaS",
    summary: "Learning momentum and analytics platform tracking retention, momentum decay, and practice consistency.",
    problem:
      "Conventional tracking platforms capture passive time logs rather than active retention, momentum decay, or practice consistency.",
    architecture:
      "FastAPI backend computing non-linear momentum decay algorithms, streak continuity, and practice volume over indexed time-series tables in PostgreSQL. The frontend is built with React 18, TypeScript, and Zustand for lightweight global state synchronization without unnecessary re-renders.",
    benchmarks: [
      "Sub-10ms analytics query resolution using composite B-tree indexes in PostgreSQL",
      "Stateless JWT authentication with passlib bcrypt password hashing",
      "Alembic database migrations managing version-controlled relational schemas",
      "Zustand client store minimizing memory footprint and eliminating unnecessary DOM repaints",
    ],
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "React 18", "TypeScript", "Zustand", "Tailwind CSS"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/skillsync",
    liveUrl: null,
    imageUrl: skillSyncImg,
    featuredMetric: { value: "< 10ms", label: "Analytics Query Latency" },
  },
];

export const skillCategories = [
  {
    name: "Languages",
    description: "Core programming languages utilized across low-level engines and scalable backends",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "Go", "C#", "C/C++", "HTML/CSS"],
  },
  {
    name: "Backend & Systems",
    description: "Microservices, concurrent web frameworks, and enterprise API design",
    skills: ["Spring Boot", "ASP.NET Core (.NET 8)", "Node.js", "FastAPI", "Flask", "Django", "REST APIs", "GraphQL", "Microservices Architecture", "OAuth 2.0 / JWT"],
  },
  {
    name: "Concurrency & Distributed Messaging",
    description: "Event-driven brokers, bounded channels, and asynchronous pipelines",
    skills: ["Apache Kafka", "Azure Service Bus", "System.Threading.Channels", "WebSockets (IRCv3)", "POSIX Threads & Mutexes", "Event-Driven Architecture"],
  },
  {
    name: "AI & LLM Infrastructure",
    description: "Deterministic RAG, agentic state machines, and vector retrieval",
    skills: ["RAG Pipelines", "LangGraph", "LangChain", "Multi-Agent Systems", "vLLM", "Qdrant", "ChromaDB", "Neo4j", "Jina Embeddings", "Prompt Engineering"],
  },
  {
    name: "Databases & Storage Engines",
    description: "Relational, document, in-memory, and custom append-only storage",
    skills: ["PostgreSQL", "Redis", "MySQL", "MongoDB", "DynamoDB", "SQLite", "Write-Ahead Logging (WAL)", "Prisma", "SQLAlchemy"],
  },
  {
    name: "Cloud, DevOps & Observability",
    description: "Containerization, infrastructure as code, and distributed tracing",
    skills: ["Docker", "Kubernetes", "Helm", "Terraform", "AWS (EC2, Lambda, RDS, S3, CloudWatch)", "Azure (OpenAI, Service Bus, Redis)", "Jenkins", "GitHub Actions", "Linux", "OpenTelemetry"],
  },
  {
    name: "Engineering Practices & Quality",
    description: "Rigorous testing methodologies and memory safety validation",
    skills: ["Test-Driven Development (TDD)", "System Design", "Zero-Trust Architecture", "JUnit", "PyTest", "Jest", "Vitest", "Google Benchmark", "ThreadSanitizer (TSan)", "AddressSanitizer (ASan)"],
  },
] as const;
