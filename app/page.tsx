"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  experiencesData, 
  projectsData, 
  skillsData 
} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { 
  BsArrowRight, 
  BsGithub, 
  BsLinkedin, 
  BsChatDots, 
  BsPlayFill, 
  BsTerminal, 
  BsCpu, 
  BsDatabase, 
  BsArrowUpRight 
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";

// ── SUBCOMPONENT: Custom Magnetic Button ────────────────────────────────────
function MagneticButton({ 
  children, 
  className = "", 
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void; 
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Move up to 15px toward cursor
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default function Home() {
  const { ref: homeRef } = useSectionInView("Home", 0.2);
  const { ref: inViewAboutRef } = useSectionInView("About", 0.5);
  const { ref: inViewProjectsRef } = useSectionInView("Projects", 0.3);
  const { ref: skillsRef } = useSectionInView("Skills", 0.5);
  const { ref: experienceRef } = useSectionInView("Experience", 0.3);
  const { ref: contactRef } = useSectionInView("Contact", 0.5);

  const aboutSectionRef = useRef<any>(null);
  const setAboutRefs = (node: HTMLDivElement | null) => {
    aboutSectionRef.current = node;
    inViewAboutRef(node);
  };

  // Scroll triggers for Section 1 (Hero) & Section 2 (Philosophy)
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1 (Hero Reveal) Scroll Transformations
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.75]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroTracking = useTransform(scrollYProgress, [0, 0.12], ["0.15em", "0.02em"]);
  const coreScale = useTransform(scrollYProgress, [0.03, 0.15], [0.6, 1.15]);
  const coreOpacity = useTransform(scrollYProgress, [0.03, 0.12, 0.24], [0, 0.9, 0]);

  // Section 2 (Philosophy) Scroll Transformations
  const { scrollYProgress: aboutScrollY } = useScroll({
    target: aboutSectionRef,
    offset: ["start end", "end start"],
  });
  const philosophyProgress = useTransform(aboutScrollY, [0.15, 0.45], [0, 1]);
  const philosophyScale = useTransform(aboutScrollY, [0.1, 0.2, 0.5, 0.6], [0.96, 1, 1, 0.96]);

  // ── STATE: Interactive Chatbot ──────────────────────────────────────────────
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    { sender: "ai", text: "Welcome. Ask me about Akshay's technical philosophy, the Mulai BI System, or how he operates." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const chatbotEndRef = useRef<HTMLDivElement>(null);

  const getAIResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("spring") || q.includes("java") || q.includes("fintech") || q.includes("mobifintree") || q.includes("indyapay")) {
      return "At Mobifintree, I engineered IndyaPay (a robust digital payment platform) using Java, Spring Boot, and PostgreSQL. I wrote secure REST APIs, integrated third-party payment gateways with OAuth/JWT, set up Docker & Jenkins CI/CD pipelines, and reduced latency by 40% while increasing throughput.";
    }
    if (q.includes("fastapi") || q.includes("python") || q.includes("threepointo") || q.includes("labs") || q.includes("agent") || q.includes("rag") || q.includes("langchain") || q.includes("langgraph")) {
      return "At ThreePointO Labs, I designed autonomous AI solutions using Python, FastAPI, and Azure. I engineered stateful AI agents with LangGraph, built RAG pipelines (LangChain + ChromaDB + Azure OpenAI), containerized backend microservices in Docker, and collaborated on high-performance healthcare & mobility products.";
    }
    if (q.includes("lowell") || q.includes("education") || q.includes("university") || q.includes("gpa") || q.includes("study") || q.includes("sr international") || q.includes("degree") || q.includes("graduat")) {
      return "I graduated from the University of Massachusetts Lowell with a BS in Computer Science (May 2026), achieving a GPA of 3.88/4 and Chancellor's List honors. Prior to that, I completed my CS coursework at SR International Institute of Technology (GPA: 9/10), which selected me for the Lowell abroad program.";
    }
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("hire") || q.includes("social") || q.includes("github") || q.includes("linkedin") || q.includes("call") || q.includes("meet")) {
      return "Let's connect! You can reach me via email at akshayreddychethireddy15@gmail.com or call me at +1 (617) 917-4554. You can also view my LinkedIn (linkedin.com/in/akshay-reddy-chethireddy) or my GitHub (github.com/AkshayReddyChethireddy). I'm excited to discuss how I can contribute to your team!";
    }
    if (q.includes("project") || q.includes("mulai") || q.includes("repo") || q.includes("analyzer") || q.includes("skillsync") || q.includes("bookmyshow") || q.includes("portfolio")) {
      return "I have engineered four major systems:\n1. Mulai BI System: Stateful LangGraph pipeline parsing unstructured invoices (Gemini 1.5 Flash) with Postgres connection pools.\n2. GitHub Repository Analyzer: Codebase Q&A platform utilizing LangChain, ChromaDB, Celery, and Redis.\n3. SkillSync: Learning SaaS using FastAPI, Zustand, and SQLAlchemy.\n4. BookMyShow Clone: High-fidelity React/Next.js ticket checkout flow.";
    }
    if (q.includes("skills") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("database") || q.includes("devops") || q.includes("aws") || q.includes("docker")) {
      return "My core stack includes:\n• Languages: Java, Python, C++, SQL, TypeScript\n• Backend: Spring Boot, FastAPI, REST Microservices, Celery/Redis\n• Frontend: React, Next.js, TailwindCSS, Zustand, Framer Motion\n• Databases: PostgreSQL, MySQL, MongoDB, ChromaDB\n• Cloud/DevOps: AWS, Azure, Docker, Jenkins CI/CD, Linux";
    }
    if (q.includes("philosophy") || q.includes("operate") || q.includes("why") || q.includes("goal")) {
      return "I specialize in calculated engineering risks: designing robust, high-performance systems with self-healing, transactional fail-safes. I bridge high-throughput backend automation with fluid, delightful frontends to create premium software products.";
    }
    
    // Comprehensive Fallback response that satisfies any recruiter!
    return "I'd love to answer that! To summarize my background, I am a US-based Software Engineer with 2+ years of experience specializing in high-throughput backend engineering (Java/Spring Boot, Python/FastAPI), full-stack React dashboards, and agentic AI systems (LangGraph, LangChain, RAG).\n\nFeel free to ask me specifically about:\n• My work at Mobifintree or ThreePointO Labs\n• My BS in Computer Science from UMass Lowell (GPA 3.88)\n• Flagship projects like Mulai BI or GitHub Analyzer\n• Setting up a technical interview or phone call (+1 (617) 917-4554)\n\nWhat would you like to explore next?";
  };

  const triggerAIResponse = (queryText: string) => {
    if (isTyping) return;
    
    // Add user's message
    setMessages((prev) => [...prev, { sender: "user", text: queryText }]);
    setIsTyping(true);

    const fullResponse = getAIResponse(queryText);

    setTimeout(() => {
      // Add empty message that we will stream into
      setMessages((prev) => [...prev, { sender: "ai", text: "" }]);
      setIsTyping(false);

      let currentText = "";
      let index = 0;
      
      const interval = setInterval(() => {
        if (index < fullResponse.length) {
          currentText += fullResponse[index];
          setMessages((prev) => {
            const updated = [...prev];
            if (updated.length > 0) {
              updated[updated.length - 1] = { sender: "ai", text: currentText };
            }
            return updated;
          });
          index++;
        } else {
          clearInterval(interval);
        }
      }, 6); // Fast fluid typing speed
    }, 500);
  };

  useEffect(() => {
    if (messages.length > 1) {
      chatbotEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // ── STATE: Unified Core Competencies Filtering ─────────────────────────────
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<"All" | "Languages" | "Backend" | "Frontend" | "DevOps" | "AI/ML">("All");

  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Java", tier: "Expert (Spring Boot & Fintech)" },
        { name: "Python", tier: "Expert (FastAPI & Agentic AI)" },
        { name: "JavaScript", tier: "Advanced (Modern ES6+)" },
        { name: "TypeScript", tier: "Advanced (Type-safe apps)" },
        { name: "SQL", tier: "Advanced (PostgreSQL & MySQL)" },
        { name: "C++", tier: "Competent (Algorithms)" },
        { name: "C", tier: "Competent (Systems)" }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "React.js", tier: "Expert (SPA & SSR)" },
        { name: "TypeScript", tier: "Advanced (Type-safe frontends)" },
        { name: "TailwindCSS", tier: "Expert (Responsive layouts)" },
        { name: "HTML5 / CSS3", tier: "Advanced (Semantic markup)" },
        { name: "Axios", tier: "Advanced (Secure client calls)" },
        { name: "Zustand", tier: "Advanced (Lightweight state)" },
        { name: "Vite", tier: "Advanced (Rapid bundling)" },
        { name: "Framer Motion", tier: "Advanced (Glow & Motion)" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Spring Boot", tier: "Expert (High-throughput APIs)" },
        { name: "FastAPI", tier: "Expert (High-speed Python microservices)" },
        { name: "REST APIs", tier: "Expert (Robust API Design)" },
        { name: "Microservices", tier: "Advanced (Distributed fabrics)" },
        { name: "JWT Authentication", tier: "Advanced (Security tokens)" },
        { name: "OAuth 2.0", tier: "Advanced (Third-party auth)" },
        { name: "SQLAlchemy", tier: "Advanced (Python ORM pooling)" },
        { name: "Celery / Redis", tier: "Advanced (Async worker chains)" }
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "Git / GitHub", tier: "Advanced (Version control & CI)" },
        { name: "Docker Containers", tier: "Advanced (Microservice bundling)" },
        { name: "AWS / GCP / Azure", tier: "Advanced (Cloud platforms)" },
        { name: "Linux Systems", tier: "Advanced (Scripting & servers)" },
        { name: "Jenkins CI/CD", tier: "Advanced (Automated builds)" },
        { name: "Vercel & Render", tier: "Advanced (Rapid deployments)" }
      ]
    },
    {
      name: "AI/ML",
      skills: [
        { name: "LangGraph", tier: "Expert (Stateful agent machines)" },
        { name: "LangChain", tier: "Expert (LLM chaining)" },
        { name: "RAG Pipelines", tier: "Expert (Vector embeddings retrieval)" },
        { name: "LLM Integrations", tier: "Expert (OpenAI & Gemini API)" },
        { name: "Vector Databases", tier: "Advanced (ChromaDB & indexing)" },
        { name: "Embeddings", tier: "Advanced (Jina & OpenAI embeds)" },
        { name: "Prompt Engineering", tier: "Advanced (Optimal context control)" }
      ]
    }
  ];

  // ── STATE: Pipeline Receipts Ingest Simulator ──────────────────────────────
  const [pipelineStep, setPipelineStep] = useState(0);
  const [pipelineLogs, setPipelineLogs] = useState<string[]>([]);
  const [isPipelineRunning, setIsPipelineRunning] = useState(false);

  const sampleReceipt = `
===========================
     WHOLE FOODS MARKET
  INVOICE: WF-48201-92B
  DATE: 2026-05-20
===========================
1. Organic Honey      Qty: 3  $15.00
2. Raw Almond Butter  Qty: 2  $22.50
3. Artisan Olive Oil  Qty: 1  $39.00
---------------------------
SUBTOTAL: $129.00
TAX (8%): $10.32
TOTAL CASH: $139.32
===========================
`;

  const runPipelineDemo = () => {
    if (isPipelineRunning) return;
    setIsPipelineRunning(true);
    setPipelineStep(1);
    setPipelineLogs(["[Supervisor] New document received: sample_report.txt. Initializing multi-agent pipeline..."]);

    setTimeout(() => {
      setPipelineStep(2);
      setPipelineLogs((prev) => [
        ...prev,
        "[Supervisor] Ingestion authorized. Invoking Extractor Agent...",
        "[Extractor] Vision Parsing active. Reading raw invoice coordinates...",
        "[Extractor] Schema Match Success! Created Pydantic model SalesReport:\n  Store: Whole Foods Market\n  Total Cash: $139.32\n  Line items: 3 successfully mapped."
      ]);
    }, 1500);

    setTimeout(() => {
      setPipelineStep(3);
      setPipelineLogs((prev) => [
        ...prev,
        "[Supervisor] Extractor completed. Invoking Insight Analyst Agent...",
        "[Analyst] Computing database rolling statistics...",
        "[Analyst] 🚨 ANOMALY ALERT: 'Organic Honey' ($15.00) exhibits a +25% markup compared to regional historical averages. Pricing outlier marked."
      ]);
    }, 3200);

    setTimeout(() => {
      setPipelineStep(4);
      setPipelineLogs((prev) => [
        ...prev,
        "[Supervisor] Analysis parsed. Invoking DatabaseAgent...",
        "[DatabaseAgent] Connecting to production PostgreSQL connection pool...",
        "[DatabaseAgent] committing transaction IngestionRun WF-48201-92B...",
        "[DatabaseAgent] commit SUCCESS! IngestionRun and 3 SalesRecords persisted. Local SQLite fallback idle."
      ]);
    }, 4800);

    setTimeout(() => {
      setPipelineStep(5);
      setIsPipelineRunning(false);
      setPipelineLogs((prev) => [
        ...prev,
        "========================================",
        "✔ PIPELINE COMPLETE: Processed in 4.8 seconds (100% accuracy)."
      ]);
    }, 6000);
  };

  return (
    <div ref={containerRef} className="relative w-full bg-black text-white selection:bg-blue-500 selection:text-white">
      
      {/* ── SECTION 1: THE HERO (Cinematic Reveal & Morphing Navbar) ─────────────── */}
      <section ref={homeRef} id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center pt-28 overflow-hidden z-20">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, letterSpacing: heroTracking }}
          className="text-center px-4 max-w-5xl z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs uppercase tracking-[0.3em] text-blue-500 font-bold mb-4"
          >
            Software Engineer | Full-Stack Engineer | AI Engineer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500 mb-6 uppercase"
          >
            Akshay Reddy <br/> Chethireddy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-sm md:text-lg max-w-2xl mx-auto leading-relaxed text-gray-400 font-light"
          >
            Designing autonomous multi-agent systems, writing robust high-throughput backends, and crafting flawless, Apple-inspired user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-semibold"
          >
            <MagneticButton 
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-white text-black rounded-full flex items-center gap-2 hover:bg-gray-200 transition"
            >
              Consult Arsenal <BsArrowRight />
            </MagneticButton>
            <a 
              href="https://github.com/AkshayReddyChethireddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 rounded-full flex items-center gap-2 hover:bg-white/5 transition bg-black/40"
            >
              <BsGithub /> GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* abstract glowing AI Core wireframe scaling in center */}
        <motion.div
          style={{ scale: coreScale, opacity: coreOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
        >
          <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem] border border-blue-500/10 rounded-full flex items-center justify-center rotate-45 animate-[spin_40s_linear_infinite] teal-glow">
            <div className="absolute w-[80%] h-[80%] border border-purple-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            <div className="absolute w-[60%] h-[60%] border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[40%] h-[40%] border border-purple-500/30 rounded-full"></div>
            
            {/* Inner AI Nucleus */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-md opacity-70"></div>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 2: THE PHILOSOPHY (Scroll-Driven Text Masking) ─────────────── */}
      <section ref={setAboutRefs} id="about" className="relative min-h-[60vh] flex flex-col justify-center items-center px-4 bg-black overflow-hidden z-20 py-20 border-t border-white/5">
        <motion.div 
          style={{ scale: philosophyScale }}
          className="max-w-4xl text-center"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold mb-8">
            Engineering Philosophy
          </div>
          
          {/* Scroll text masking layout */}
          <motion.div 
            style={{ opacity: philosophyProgress }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight select-none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white"
          >
            Built for calculated engineering risks. <br className="hidden md:inline"/>
            Architecting pipelines that transition static legacy systems into autonomous, self-healing networks.
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            I believe software should not just function; it must possess computational resilience and impeccable, fluid visual execution. My experience spanning full-stack frameworks and agentic AI architectures enables me to bridge rigorous backend automation with gorgeous frontend design.
          </motion.p>
        </motion.div>
      </section>

      {/* ── SECTION 3: ALL PROJECTS SHOWCASE ─────────────────── */}
      <section ref={inViewProjectsRef} id="projects" className="relative bg-black border-t border-white/5 z-20 px-4 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold">Engineering Index</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-2 text-white">Production Implementations</h2>
          </div>

          <div className="space-y-24">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-12 items-center justify-between apple-glass rounded-[2rem] p-6 md:p-12 overflow-hidden group ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase text-blue-400 tracking-widest">Project 0{index + 1}</span>
                    <a href="https://github.com/AkshayReddyChethireddy" target="_blank" rel="noopener noreferrer">
                      <BsArrowUpRight className="text-gray-500 hover:text-blue-400 transition-colors text-lg" />
                    </a>
                  </div>
                  <h3 className="text-3xl font-extrabold uppercase tracking-tight text-white">{project.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{project.description}</p>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image layout display */}
                <div className="flex-1 relative h-64 md:h-80 w-full lg:w-[480px] rounded-2xl overflow-hidden bg-zinc-950 border border-white/5">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE TECHNICAL ARSENAL (Interactive Grid) ───────────────── */}
      <section ref={skillsRef} id="skills" className="relative px-4 py-28 bg-black border-t border-white/5 z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold">Interactive Sandbox</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-2">The Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* BENTO CARD 1: Live AI Recruiter Chat (lg:col-span-7) */}
            <div className="lg:col-span-7 apple-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between h-[600px] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[6rem] -z-10"></div>
              
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">Recruiter AI Assistant</h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Streaming Active</span>
                </div>
                
                {/* Chat window body */}
                <div className="space-y-4 h-[280px] overflow-y-auto pr-2 no-scrollbar border border-white/5 p-4 rounded-xl bg-black/40">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                        msg.sender === "user" 
                          ? "bg-blue-600 text-white font-medium rounded-tr-none" 
                          : "bg-white/5 border border-white/10 text-gray-300 rounded-tl-none whitespace-pre-line"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs text-gray-500 font-mono flex items-center gap-1.5">
                        <BsChatDots className="animate-bounce" /> Streaming tokens...
                      </div>
                    </div>
                  )}
                  <div ref={chatbotEndRef} />
                </div>

                {/* Custom input bar */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!chatInput.trim() || isTyping) return;
                    triggerAIResponse(chatInput.trim());
                    setChatInput("");
                  }}
                  className="mt-3 flex gap-2"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type custom question (e.g. Do you know Spring Boot?)..."
                    disabled={isTyping}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition duration-300 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!chatInput.trim() || isTyping}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl px-4 py-2.5 transition duration-300 disabled:bg-white/5 disabled:text-gray-500"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Interaction triggers */}
              <div className="mt-3.5 space-y-2">
                <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Select a quick suggestion:</div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => triggerAIResponse("What is your core engineering philosophy?")}
                    className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-[11px] font-medium text-gray-300 transition"
                  >
                    💡 Philosophy
                  </button>
                  <button
                    onClick={() => triggerAIResponse("What is your main technology stack?")}
                    className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-[11px] font-medium text-gray-300 transition"
                  >
                    🛠️ Tech Stack
                  </button>
                  <button
                    onClick={() => triggerAIResponse("Tell me about your experience at Mobifintree.")}
                    className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-[11px] font-medium text-gray-300 transition"
                  >
                    💼 Experience
                  </button>
                  <button
                    onClick={() => triggerAIResponse("Tell me about the Mulai BI System.")}
                    className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-[11px] font-medium text-gray-300 transition"
                  >
                    🤖 Mulai BI
                  </button>
                </div>
              </div>

            </div>

            {/* BENTO CARD 2: Real-time Multi-Agent Ingestion Pipeline Simulator (lg:col-span-5) */}
            <div className="lg:col-span-5 apple-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between h-[600px] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[6rem] -z-10"></div>
              
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <BsTerminal className="text-purple-400 text-sm" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">Ingest Pipeline Demo</h3>
                  </div>
                  
                  {/* Step status dots */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <span 
                        key={step} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          pipelineStep >= step 
                            ? step === 5 ? "bg-green-500" : "bg-purple-500" 
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[330px] items-stretch">
                  
                  {/* Input receipt view */}
                  <div className="bg-zinc-950/60 p-3 rounded-xl border border-white/5 font-mono text-[9px] text-gray-400 overflow-y-auto no-scrollbar flex flex-col justify-between select-none">
                    <div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase mb-2">Source Document:</div>
                      <pre className="whitespace-pre-wrap">{sampleReceipt}</pre>
                    </div>
                    <div className="text-[8px] text-zinc-600 mt-2">Ready to ingest &amp; analyze...</div>
                  </div>

                  {/* Streaming logs view */}
                  <div className="bg-black/80 p-3 rounded-xl border border-white/5 font-mono text-[9px] text-gray-300 overflow-y-auto no-scrollbar">
                    <div className="text-[10px] text-zinc-500 font-bold uppercase mb-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                      Graph updates:
                    </div>
                    {pipelineLogs.length === 0 ? (
                      <span className="text-zinc-600 italic">Logs will stream here...</span>
                    ) : (
                      <div className="space-y-2">
                        {pipelineLogs.map((log, idx) => (
                          <div key={idx} className={`${
                            log.startsWith("🚨") 
                              ? "text-red-400 font-bold" 
                              : log.startsWith("✔") 
                                ? "text-green-400 font-bold" 
                                : "text-gray-300"
                          }`}>
                            {log}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* execution CTA */}
              <div className="mt-4">
                <MagneticButton
                  onClick={runPipelineDemo}
                  className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border transition ${
                    isPipelineRunning 
                      ? "bg-purple-950/20 border-purple-500/30 text-purple-400 cursor-not-allowed" 
                      : "bg-purple-600 border-purple-500 text-white hover:bg-purple-700"
                  }`}
                >
                  {isPipelineRunning ? (
                    <>Running Agent Graph...</>
                  ) : (
                    <>
                      <BsPlayFill className="text-lg" /> Run Pipeline Ingest
                    </>
                  )}
                </MagneticButton>
              </div>

            </div>

            {/* BENTO CARD 3: Complete Technical Skills Grid (lg:col-span-12) */}
            <div className="lg:col-span-12 apple-glass rounded-3xl p-8 border border-white/5">
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-white/10 pb-6 mb-8 gap-4">
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">Unified Core Competencies</h3>
                
                {/* Category filter tabs */}
                <div className="flex flex-wrap gap-1.5">
                  {(["All", "Languages", "Backend", "Frontend", "DevOps", "AI/ML"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedSkillCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide border transition duration-300 ${
                        selectedSkillCategory === cat
                          ? "bg-blue-600 border-blue-500 text-white shadow-glow"
                          : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skillCategories
                  .filter((cat) => 
                    selectedSkillCategory === "All" || 
                    cat.name === selectedSkillCategory ||
                    (selectedSkillCategory === "DevOps" && cat.name === "DevOps") ||
                    (selectedSkillCategory === "AI/ML" && cat.name === "AI/ML")
                  )
                  .map((cat, idx) => (
                    <div 
                      key={idx} 
                      className="space-y-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition duration-300"
                    >
                      <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold border-b border-white/5 pb-2">
                        {cat.name}
                      </div>
                      <ul className="space-y-2.5">
                        {cat.skills.map((skill, sIdx) => (
                          <li 
                            key={sIdx} 
                            className="group/skill relative flex flex-col cursor-default"
                          >
                            <span className="text-sm text-gray-300 font-light group-hover/skill:text-blue-400 transition-colors duration-200">
                              {skill.name}
                            </span>
                            {/* Subtle metadata tier description showing on hover */}
                            <span className="text-[9px] font-mono text-gray-500 h-0 opacity-0 group-hover/skill:h-auto group-hover/skill:opacity-100 transition-all duration-300 overflow-hidden leading-tight mt-0.5">
                              {skill.tier}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 5: EXPERIENCE TIMELINE ────────────────────────────────────── */}
      <section ref={experienceRef} id="experience" className="relative px-4 py-28 bg-black border-t border-white/5 z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold">Career Timeline</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-2">Proven Track Record</h2>
          </div>

          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-16">
            {experiencesData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Node dot */}
                <span className="absolute -left-[45px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center text-xs text-blue-500 font-bold shadow-glow">
                  {index + 1}
                </span>

                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{exp.date}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mt-1">{exp.title}</h3>
                  <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mt-0.5">{exp.location}</div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mt-4 max-w-2xl">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CONTACT (Call-to-Action) ────────────────────────────── */}
      <section ref={contactRef} id="contact" className="relative px-4 py-32 bg-black border-t border-white/5 z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[8rem] -z-10"></div>
        
        <div className="max-w-xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold">Initiate Engagement</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none text-white">Let&apos;s Build the Future</h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-md mx-auto">
            Recruiting coordinators and software directors can reach out to discuss multi-agent pipelines, high-throughput backend services, or full-time roles.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <a
              href="mailto:akshayreddychethireddy15@gmail.com"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2.5 hover:bg-gray-200 transition text-sm uppercase tracking-wider"
            >
              <HiMail className="text-lg" /> Send E-Mail
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-reddy-chethireddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition text-sm uppercase tracking-wider bg-black/40"
            >
              <BsLinkedin className="text-base" /> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
