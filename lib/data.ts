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
  targetRole: "Distributed Systems & Backend Infrastructure",
  location: "Lowell, Massachusetts, United States",
  email: "akshayreddychethireddy15@gmail.com",
  phone: "(617) 917-4554",
  github: "https://github.com/AkshayReddyChethireddy",
  linkedin: "https://linkedin.com/in/akshayreddy15",
  portfolio: "https://akshayreddych.vercel.app",
  resumePath: "/CV.pdf",
  summary:
    "Software engineer with 2.5 years of experience building Java/Spring Boot payment microservices, C++ concurrent storage engines, and deterministic AI systems. Scaled transaction processing to 1,200+ rps with sub-150ms latency, optimized database hot paths to cut query latency 40%, and improved document extraction accuracy 28% with production RAG architectures.",
  metrics: [
    { label: "Payment API Throughput", value: "1,200+ rps", detail: "Java, Spring Boot, and Kafka microservices" },
    { label: "Query Latency Reduction", value: "-40%", detail: "250ms to 150ms peak via SQL and index profiling" },
    { label: "Concurrent KV Store Speed", value: "2.65M ops/s", detail: "StrataKV C++20 lock-sharded engine (p99 < 1.6µs)" },
    { label: "Academic Standing", value: "3.88 GPA", detail: "B.S. in Computer Science, UMass Lowell" },
  ],
};

export const experiencesData = [
  {
    role: "Software Engineer",
    company: "Mobifintree - IndyaPay Digital Payments Platform",
    period: "Dec 2023 - Apr 2025",
    location: "Lowell, MA / Hybrid",
    headline: "High-throughput fintech payment microservices and settlement infrastructure",
    bullets: [
      "Architected and deployed 6 Java/Spring Boot microservices on PostgreSQL and Apache Kafka powering merchant onboarding, transaction routing, and settlement ledger.",
      "Reduced peak transaction latency by 40% (250 ms to 150 ms) by profiling execution plans, adding composite B-tree indexes, and eliminating redundant ORM queries on hot paths.",
      "Prevented duplicate billing and double-submission errors during network retries by enforcing transactional idempotency keys via PostgreSQL unique constraints.",
      "Secured 15 public and internal REST services handling 1,200+ requests per second using stateless JWT authentication and role-based access control (RBAC).",
      "Cut Mean Time to Resolution (MTTR) by 35% by standardizing correlation request IDs across distributed microservices in AWS CloudWatch logs, metrics, and traces.",
      "Automated zero-downtime rolling production releases with containerized Jenkins CI/CD deployment pipelines and Docker.",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "AWS CloudWatch", "REST APIs", "JWT", "Jenkins", "Microservices"],
  },
  {
    role: "Software Engineer",
    company: "ThreePointO Labs (3.0 Labs)",
    period: "Nov 2023 - Nov 2024",
    location: "Hyderabad, India",
    headline: "Fintech deal platform APIs, secure role-based access, and incident-management ticketing engines",
    bullets: [
      "Built 12 Spring Boot REST APIs for FundPitch, an invite-only fintech platform connecting companies with SEBI-registered partners, as part of a 6-engineer team.",
      "Implemented JWT authentication and role-based access across 4 user roles, with audit logging on every deal-room action for compliance review.",
      "Developed the ticket lifecycle engine for VDTS, an incident-management SaaS, enforcing 6 workflow states across admin, consultant and client roles.",
      "Designed PostgreSQL schemas of 15 tables and tuned queries with composite indexes and pagination, keeping list responses under 200 ms.",
      "Wrote 60+ JUnit and Mockito tests, reaching 80% coverage on onboarding and ticketing modules.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JWT", "JUnit", "Mockito", "Microservices", "RBAC"],
  },
  {
    role: "B.S. in Computer Science",
    company: "University of Massachusetts Lowell",
    period: "Graduation: May 2026",
    location: "Lowell, MA",
    headline: "Focus in Distributed Systems, Operating Systems, and Concurrent Software Design",
    bullets: [
      "Cumulative GPA: 3.88 / 4.0. Chancellor's List Student.",
      "Relevant coursework: Distributed Systems, Operating Systems, Analysis of Algorithms, Object-Oriented Software Engineering, Database Systems, Computer Architecture.",
    ],
    tech: ["C/C++", "Java", "Python", "Data Structures & Algorithms", "POSIX Concurrency", "System Design"],
  },
] as const;

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  metricBadge: string;
  summary: string;
  problem: string;
  architecture: string;
  outcome: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string | null;
  imageUrl?: any;
}

export const projectsData: ProjectItem[] = [
  {
    id: "stratakv",
    title: "StrataKV",
    badge: "Storage Engine",
    metricBadge: "2.65M ops/s | p99 < 1.6µs",
    summary: "Concurrent, durable key-value storage engine in C++20 with lock sharding and group-commit write-ahead logging.",
    problem: "Global mutex contention collapses multi-threaded write throughput, while synchronous per-write disk flushes bound performance to physical disk I/O limits.",
    architecture: "Partitions keyspace across 64 cache-line padded shards with std::shared_mutex. Uses a lockless WAL buffer swap where a background flusher thread batches pending writes into single amortized fdatasync calls, supported by CRC32 checksums and atomic snapshot checkpointing.",
    outcome: "Achieved 2.65M ops/sec on 95% read workloads (3.2x over single lock), reduced p99 latency to 1.6µs, and scaled durable writes to 66,415/sec under 32 threads with clean TSan and ASan test coverage.",
    tags: ["C++20", "POSIX", "Multithreading", "Write-Ahead Log", "Group Commit", "Lock Sharding", "Google Benchmark", "CMake"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/stratakv",
    liveUrl: null,
    imageUrl: null,
  },
  {
    id: "aether",
    title: "Aether",
    badge: "Distributed AI Platform",
    metricBadge: "< 300ms TTFT | 70% Cost Reduction",
    summary: "13-microservice AI platform coordinating multi-agent workflows with sub-300ms streaming inference and persistent hybrid memory.",
    problem: "Monolithic LLM services suffer from high first-token latency, unverified reasoning failures, and high operational costs when routing all requests to frontier models.",
    architecture: "Coordinates 13 microservices with pluggable model runtimes (Claude, OpenAI, self-hosted vLLM, Ollama) and hybrid memory (PostgreSQL episodic logs, Qdrant semantic vectors, Neo4j knowledge graphs). Integrates an automated complexity classifier and real-time citation verifier.",
    outcome: "Delivered sub-300ms streaming time-to-first-token (TTFT) via Server-Sent Events, deflected 70% of query volume to cost-effective models, and enabled canary rollouts on Kubernetes via Helm.",
    tags: ["Python 3.11", "FastAPI", "Next.js 14", "TypeScript", "Kubernetes", "Helm", "Qdrant", "Neo4j", "PostgreSQL", "vLLM", "Docker"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/aether",
    liveUrl: null,
    imageUrl: aetherImg,
  },
  {
    id: "fleetshield",
    title: "FleetShield",
    badge: "Systems & Security",
    metricBadge: "10,000+ Agents | 0 Dropped Packets",
    summary: "Zero-Trust endpoint telemetry gateway designed to ingest concurrent heartbeats from 10,000+ edge agents without dropping packets.",
    problem: "Synchronous HTTP processing of continuous device heartbeats exhausts thread pools and drops telemetry packets during network reconnect bursts.",
    architecture: "Built with ASP.NET Core Minimal APIs in .NET 8. Ingestion endpoints push telemetry non-blockingly into bounded System.Threading.Channels queues returning HTTP 202 immediately. Background workers evaluate policy compliance drift against thread-safe ConcurrentDictionary caches.",
    outcome: "Sustained continuous ingestion across 10,000+ concurrent simulated edge agents with zero packet loss, sub-15ms response latency, and real-time alert dispatch to Azure Service Bus.",
    tags: ["C#", ".NET 8", "Minimal APIs", "System.Threading.Channels", "ConcurrentDictionary", "Azure Service Bus", "Redis", "Bicep"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/FleetShield",
    liveUrl: null,
    imageUrl: fleetshieldImg,
  },
  {
    id: "chatpulse",
    title: "ChatPulse",
    badge: "Real-Time Streaming",
    metricBadge: "500+ msg/s | Zero Frame Drops",
    summary: "Live Twitch chat analytics and hype detection engine with Go serverless AI recaps for high-velocity streams.",
    problem: "High-velocity chat feeds with hundreds of messages per second flood the browser DOM, causing render lag while streamers miss viewer questions during live broadcasts.",
    architecture: "Connects anonymously to Twitch IRCv3 over WebSockets with custom byte-offset emote parsers. Decouples socket events from UI re-renders using a 1-second state tick and 10-second sliding time buckets. Dispatches 2-minute chat windows to a Go serverless API that queries Claude with delimiter guards.",
    outcome: "Maintained smooth client performance at 500+ messages per second, delivered 2-minute stream summaries in under 2 seconds, and verified parsing reliability with 29 unit tests.",
    tags: ["React 18", "TypeScript", "Go 1.22", "Vite", "WebSockets (IRCv3)", "Vercel Serverless", "Anthropic Claude API", "Vitest"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/chatpulse",
    liveUrl: "https://chatpulse-zeta.vercel.app/",
    imageUrl: chatpulseImg,
  },
  {
    id: "thepatientadvocate",
    title: "The Patient Advocate",
    badge: "Deterministic AI Systems",
    metricBadge: "+28% Accuracy | 0% Price Hallucination",
    summary: "Medical bill auditing system pairing Vision LLMs with a deterministic CMS fee schedule truth layer to prevent pricing hallucinations.",
    problem: "Hospital billing errors and upcoded procedures lead to excessive charges, yet generative LLMs regularly hallucinate legal codes and fee rates when analyzing medical bills directly.",
    architecture: "Combines GPT-4o Vision OCR with a deterministic PostgreSQL truth layer seeded from official CMS Physician Fee Schedules. Uses a LangGraph state machine with human-in-the-loop interruption checkpoints (interrupt_after=['audit']) for manual verification before synthesizing formal dispute packages.",
    outcome: "Increased document extraction accuracy by 28% over standard OCR, eliminated LLM price hallucinations through relational database lookups, and enforced client-side PII scrubbing in the browser.",
    tags: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "LangGraph", "GPT-4o Vision", "PostgreSQL", "SQLAlchemy", "Tailwind CSS"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/thepatientadvocate",
    liveUrl: null,
    imageUrl: patientAdvocateImg,
  },
  {
    id: "github-repo-analyzer",
    title: "GitHub Repository Analyzer",
    badge: "Code Intelligence & RAG",
    metricBadge: "< 500ms Streaming | LPU Inference",
    summary: "Asynchronous codebase intelligence engine analyzing repository architecture, syntax ASTs, and dependencies with conversational RAG.",
    problem: "Evaluating new codebases requires hours of manual dependency tracing, architecture reverse-engineering, and directory navigation.",
    architecture: "Clones public repositories into isolated sandboxes, parses Abstract Syntax Trees (AST) to compute code complexity and dependency maps, and creates chunk embeddings with Jina AI into persistent ChromaDB storage. Decouples tasks with Celery and Redis, serving answers over Server-Sent Events.",
    outcome: "Achieved sub-500ms token streaming via Groq LLaMA 3.3 70B inference, prevented redundant repo clones with Redis TTLCache, and generated file-level citation links for codebase questions.",
    tags: ["Python 3.11", "FastAPI", "Celery", "Redis", "LangChain", "ChromaDB", "Jina Embeddings", "Groq LLaMA 3.3", "React 18", "Docker"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/githubRepoAnalyzer",
    liveUrl: null,
    imageUrl: repoAnalyzerImg,
  },
  {
    id: "mulai",
    title: "Mulai BI System",
    badge: "Multi-Agent Systems",
    metricBadge: "100% Ingestion Uptime | Dual DB Failover",
    summary: "Autonomous multi-agent business intelligence and outlier detection pipeline for commercial invoice ingestion.",
    problem: "Multi-store retail operations receive unstructured paper invoices and receipts, resulting in untracked supplier price changes and delayed financial tracking.",
    architecture: "Stateful LangGraph pipeline coordinating three specialized agents: Extractor parses visual documents into Pydantic models via Gemini 1.5 Flash Vision, Insight Analyst calculates rolling statistical outlier deviations against historical baselines, and DatabaseAgent handles PostgreSQL persistence with automatic local SQLite failover.",
    outcome: "Automated detection of item price markups greater than 20%, streamed live agent state updates via Server-Sent Events, and achieved 100% data persistence resilience during network splits.",
    tags: ["Python", "FastAPI", "LangGraph", "Gemini 1.5 Flash Vision", "SQLAlchemy", "PostgreSQL", "SQLite", "Docker", "SSE"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/mulai-bi-system",
    liveUrl: null,
    imageUrl: mulaiImg,
  },
  {
    id: "qa-monitor-engine",
    title: "QA Monitor Engine",
    badge: "Testing & Performance",
    metricBadge: "3 Concurrent Engines | Zero Test Flake",
    summary: "Headless cross-browser performance tracing and regression suite running parallel multi-engine audits.",
    problem: "Web applications experience layout shifts, font discrepancies, and rendering bugs across non-Chromium engines (Firefox, WebKit/Mobile Safari) that go undetected in standard CI unit tests.",
    architecture: "FastAPI orchestrator running synchronized headless Playwright browser sessions across Chromium, Firefox, and WebKit simultaneously. Traces DOM paint timestamps, layout shift anomalies, and HTTP network waterfalls, reporting comparative metrics to a React dashboard.",
    outcome: "Automated tri-engine cross-browser testing in isolated containerized runners, recording DNS, TTFB, and DOMContentLoaded metrics with zero local browser dependencies.",
    tags: ["Python 3.11", "FastAPI", "Playwright (Headless)", "React 19", "TypeScript", "Vite", "Docker Compose"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/qa-monitor-engine",
    liveUrl: null,
    imageUrl: qamonitorImg,
  },
  {
    id: "skillsync",
    title: "SkillSync",
    badge: "Full-Stack SaaS",
    metricBadge: "< 10ms Query Latency | Indexed PostgreSQL",
    summary: "Learning momentum and habit analytics platform tracking practice consistency and skill progression.",
    problem: "Traditional progress trackers record passive time logs rather than active retention, practice momentum decay, or skill consistency over time.",
    architecture: "FastAPI backend calculating non-linear momentum decay algorithms, streak continuity, and practice volume over indexed time-series tables in PostgreSQL. Frontend uses React 18, TypeScript, and Zustand for lightweight global state synchronization.",
    outcome: "Resolved complex analytics queries in under 10ms through composite B-tree database indexes, enforced stateless JWT authentication, and maintained clean schema migrations with Alembic.",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "React 18", "TypeScript", "Zustand", "Tailwind CSS"],
    githubUrl: "https://github.com/AkshayReddyChethireddy/skillsync",
    liveUrl: null,
    imageUrl: skillSyncImg,
  },
];

export const skillCategories = [
  {
    name: "Languages",
    description: "Core languages used in low-level engines and scalable backend services.",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "Go", "C#", "C/C++", "HTML/CSS"],
  },
  {
    name: "Backend & Systems",
    description: "Microservices frameworks, concurrent runtimes, and REST/GraphQL API design.",
    skills: ["Spring Boot", "ASP.NET Core (.NET 8)", "Node.js", "FastAPI", "Flask", "Django", "REST APIs", "GraphQL", "Microservices Architecture", "OAuth 2.0 / JWT"],
  },
  {
    name: "Concurrency & Distributed Messaging",
    description: "Event-driven brokers, bounded channels, and asynchronous pipelines.",
    skills: ["Apache Kafka", "Azure Service Bus", "System.Threading.Channels", "WebSockets (IRCv3)", "POSIX Threads & Mutexes", "Event-Driven Architecture"],
  },
  {
    name: "AI & LLM Infrastructure",
    description: "Deterministic RAG, agentic state machines, and vector search systems.",
    skills: ["RAG Pipelines", "LangGraph", "LangChain", "Multi-Agent Systems", "vLLM", "Qdrant", "ChromaDB", "Neo4j", "Jina Embeddings", "Prompt Engineering"],
  },
  {
    name: "Databases & Storage Engines",
    description: "Relational, document, in-memory, and custom write-ahead storage.",
    skills: ["PostgreSQL", "Redis", "MySQL", "MongoDB", "DynamoDB", "SQLite", "Write-Ahead Logging (WAL)", "Prisma", "SQLAlchemy"],
  },
  {
    name: "Cloud, DevOps & Observability",
    description: "Containerization, infrastructure as code, and distributed request tracing.",
    skills: ["Docker", "Kubernetes", "Helm", "Terraform", "AWS (EC2, Lambda, RDS, S3, CloudWatch)", "Azure (OpenAI, Service Bus, Redis)", "Jenkins", "GitHub Actions", "Linux", "OpenTelemetry"],
  },
  {
    name: "Engineering Practices & Quality",
    description: "Rigorous testing methodologies and memory safety validation.",
    skills: ["Test-Driven Development (TDD)", "System Design", "Zero-Trust Architecture", "JUnit", "PyTest", "Jest", "Vitest", "Google Benchmark", "ThreadSanitizer (TSan)", "AddressSanitizer (ASan)"],
  },
] as const;
