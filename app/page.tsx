"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  experiencesData, 
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
import mulaiImg from "@/public/mulaiImg.png";
import repoAnalyzerImg from "@/public/repoAnalyzerImg.png";
import skillSyncImg from "@/public/skillSyncImg.png";
import bmsCloneImg from "@/public/bmsCloneImg.png";

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

// ── 3D EXPLODED PROJECT SPECIFICATIONS ───────────────────────────────────────
const projectSpecifications = [
  {
    title: "Mulai BI System",
    category: "Autonomous Multi-Agent Ingestion",
    description: "An autonomous, stateful business intelligence pipeline powered by LangGraph. Ingests raw invoices, receipts, and text logs, coordinates vision-enabled extractors, performs outlier/anomaly detection, and persists results securely to PostgreSQL.",
    themeColor: "blue",
    imageUrl: mulaiImg,
    layer1: {
      label: "LAYER 01 // Multi-Agent Graph",
      footer: "LangGraph stateful routing logic (Gemini 1.5 Flash)",
      content: (
        <div className="flex items-center justify-center gap-4 my-2 w-full">
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 text-center w-24">
            <BsCpu className="text-lg text-purple-400 mb-1" />
            <span className="text-[9px] font-mono font-bold">Supervisor</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-[8px] font-mono text-blue-300">Extractor Agent</div>
            <div className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-[8px] font-mono text-teal-300">Insight Analyst</div>
          </div>
        </div>
      )
    },
    layer2: {
      label: "LAYER 02 // API Gateway",
      pillText: "FastAPI",
      footer: "Asynchronous routing endpoints with key validators",
      content: (
        <div className="flex flex-col justify-center my-2 font-mono text-[9px] text-gray-300 w-full">
          <div className="text-teal-400">POST /api/v1/ingest</div>
          <div className="text-gray-500">Headers: X-API-Key (Secure)</div>
          <div className="text-purple-400 mt-1">class IngestionRun(BaseModel):</div>
          <div className="pl-2 text-gray-400">report_id: str = UUID</div>
          <div className="pl-2 text-gray-400">status: str = &quot;pending&quot;</div>
        </div>
      )
    },
    layer3: {
      label: "LAYER 03 // DB & Persistence",
      pillText: "SQLAlchemy ORM",
      footer: "SQLAlchemy ORM + PostgreSQL connections pool",
      content: (
        <div className="flex items-center justify-center gap-6 my-2 text-[9px] font-mono text-center w-full">
          <div className="p-2 border border-purple-500/20 bg-purple-500/5 rounded-lg">
            <div className="font-bold text-purple-300">IngestionRuns</div>
            <div className="text-[7px] text-gray-500">PK: report_id</div>
          </div>
          <span className="text-gray-500 text-sm">◀ 1:N ▶</span>
          <div className="p-2 border border-blue-500/20 bg-blue-500/5 rounded-lg">
            <div className="font-bold text-blue-300">SalesRecords</div>
            <div className="text-[7px] text-gray-500">FK: report_id</div>
          </div>
        </div>
      )
    },
    captions: [
      {
        category: "Centerpiece Project",
        title: "Mulai BI System",
        description: "An autonomous multi-agent pipeline designed to solve the unstructured enterprise sales data bottleneck. Ingests, processes, and persists receipts with self-healing databases."
      },
      {
        category: "Orchestration & Routing",
        title: "Multi-Agent State Machine",
        description: "Managed by a central LangGraph Supervisor. Documents are intelligently assigned, parsed using visual extraction matrices, mathematically analyzed for outliers, and double-checked before database commit."
      },
      {
        category: "Resilient Persistence",
        title: "PostgreSQL & SQLite Fallback",
        description: "ORM database layers map structured models with connection pool configurations. The system is engineered to automatically initialize a thread-safe SQLite fallback database to guarantee audit trail continuity."
      }
    ]
  },
  {
    title: "RepoAnalyzer",
    category: "AI-Powered Code Analytics",
    description: "An AI-powered GitHub repository analyzer that instantly understands complex codebases through hierarchical dependency mapping and visual complexity scoring. Features conversational RAG.",
    themeColor: "teal",
    imageUrl: repoAnalyzerImg,
    layer1: {
      label: "LAYER 01 // Semantic Retrieval",
      footer: "Hierarchical prompt context assembly engine",
      content: (
        <div className="flex flex-col justify-center my-2 font-mono text-[8px] text-gray-300 w-full">
          <div className="text-teal-400">[RAG] Query: &apos;How does routing resolve?&apos;</div>
          <div className="text-gray-400">&gt; Matching chunks in AST... router.ts (0.89)</div>
          <div className="text-purple-400 mt-1">Prompt Injection:</div>
          <div className="text-gray-400">&quot;Answer user query using router.ts context...&quot;</div>
        </div>
      )
    },
    layer2: {
      label: "LAYER 02 // Codebase AST Graph",
      pillText: "TypeScript AST",
      footer: "Abstract Syntax Tree analyzers compute codebase scores",
      content: (
        <div className="flex items-center justify-center gap-3 my-2 text-[9px] font-mono w-full">
          <div className="p-1.5 border border-teal-500/20 bg-teal-500/5 rounded">
            <div className="font-bold text-teal-300">AST Parser</div>
          </div>
          <span className="text-gray-500">&gt;&gt;</span>
          <div className="flex flex-col gap-1">
            <div className="px-2 py-1 rounded bg-black/40 border border-white/5 text-[7px] text-gray-400">complexity: 12 (Low)</div>
            <div className="px-2 py-1 rounded bg-black/40 border border-white/5 text-[7px] text-gray-400">dependencies: mapped</div>
          </div>
        </div>
      )
    },
    layer3: {
      label: "LAYER 03 // Vector Knowledge Base",
      pillText: "pgvector Index",
      footer: "pgvector database + semantic chunk embedding indexing",
      content: (
        <div className="flex flex-col justify-center my-2 font-mono text-[8px] text-gray-400 bg-zinc-950 p-2 rounded-lg border border-white/5 w-full text-center">
          <div className="text-teal-400 font-bold">Vector Storage Chunks</div>
          <div className="text-gray-500 text-[6px] mt-1">[0.12, -0.42, 0.98, ... 1536 dims]</div>
          <div className="text-purple-400 mt-1">Cosine Similarity Search Active</div>
        </div>
      )
    },
    captions: [
      {
        category: "Code Intelligence",
        title: "RepoAnalyzer",
        description: "Instantly maps architecture, identifies code hotspots, and assemble dependencies. It brings deep codebase comprehension via generative RAG agents."
      },
      {
        category: "Syntax Modeling",
        title: "Abstract Syntax Tree (AST)",
        description: "Our parsing engines evaluate file nodes, discover circular dependencies, compile layout structures, and analyze code syntax metrics to map full-scope engineering coordinate files."
      },
      {
        category: "Semantic Vector Fabric",
        title: "RAG Semantic Search Store",
        description: "Source code files are dynamically chunked, embedded, and stored in pgvector databases. Developers query repositories conversationally with exact semantic retrieval match."
      }
    ]
  },
  {
    title: "SkillSync",
    category: "Consistency Momentum Engine",
    description: "A consistency momentum tracker measuring daily practice streaks, dynamically mapping stagnancy warnings, and dispatching notification triggers.",
    themeColor: "orange",
    imageUrl: skillSyncImg,
    layer1: {
      label: "LAYER 01 // Streak Tracker Grid",
      footer: "Streaks calendar with automated grace period checks",
      content: (
        <div className="flex flex-col items-center justify-center my-2 w-full text-center">
          <div className="text-xl font-bold text-amber-500 flex items-center gap-1">
            12d <span className="text-lg animate-pulse">🔥</span>
          </div>
          <div className="grid grid-cols-7 gap-1 mt-2.5">
            {["M","T","W","T","F","S","S"].map((d, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[7px] text-gray-500 font-mono mb-1">{d}</span>
                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-bold ${i < 5 ? "bg-amber-500 text-black" : "border border-white/10 text-gray-500"}`}>
                  {i < 5 ? "✔" : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    layer2: {
      label: "LAYER 02 // Momentum Checker",
      pillText: "Cron Engine",
      footer: "Cron monitors inactive status and warns users",
      content: (
        <div className="flex flex-col justify-center my-2 font-mono text-[8px] text-gray-300 w-full">
          <div className="text-amber-500">scheduler: StagnationMonitor</div>
          <div className="text-gray-500">Cron: 0 0 * * * (Daily trigger)</div>
          <div className="text-purple-400 mt-1">Consistency Check:</div>
          <div className="text-gray-400">Streak: 12d // Grace Periods: 1 Remaining</div>
        </div>
      )
    },
    layer3: {
      label: "LAYER 03 // Practice Audit Database",
      pillText: "PostgreSQL",
      footer: "Relational activity logs persisting audit streaks",
      content: (
        <div className="flex items-center justify-center gap-4 my-2 text-[8px] font-mono text-center w-full">
          <div className="p-1.5 border border-amber-500/20 bg-amber-500/5 rounded">
            <div className="font-bold text-amber-400">Users</div>
          </div>
          <span className="text-gray-500">◀ 1:N ▶</span>
          <div className="p-1.5 border border-purple-500/20 bg-purple-500/5 rounded">
            <div className="font-bold text-purple-400">ActivityLogs</div>
            <div className="text-[6px] text-gray-500">grace_used: bool</div>
          </div>
        </div>
      )
    },
    captions: [
      {
        category: "Practice Analytics",
        title: "SkillSync Monitor",
        description: "Consistency momentum tracker designed to measure practices and alert stagnation periods, keeping developers engaged."
      },
      {
        category: "Automatic Verification",
        title: "Stagnation Warning System",
        description: "Centralized cron schedulers evaluate profile activities daily. If inactivity passes user limits, automated alerts notify users to keep streak flame counts active."
      },
      {
        category: "Streak Audit Database",
        title: "Relational Persistence logs",
        description: "SQL schemas secure daily entries, tracking streak calculations and verifying used grace periods to keep data models resilient."
      }
    ]
  },
  {
    title: "BookMyShow Clone",
    category: "High-Fidelity Booking Flow",
    description: "A bookmyShow cloning application replicating complete live seating allocations, ticket locked state periods, and simulated transactional checkout gates.",
    themeColor: "red",
    imageUrl: bmsCloneImg,
    layer1: {
      label: "LAYER 01 // Seating Grid Canvas",
      footer: "Interactive SVG seats map displaying selected grids",
      content: (
        <div className="flex flex-col items-center justify-center my-2 w-full text-center">
          <div className="grid grid-cols-5 gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[7px] font-mono font-bold ${
                  i === 3 
                    ? "bg-red-600 text-white animate-pulse" 
                    : i === 6 
                      ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" 
                      : "border border-white/20 text-gray-400"
                }`}
              >
                {i === 3 ? "A4" : i === 6 ? "X" : `A${i+1}`}
              </div>
            ))}
          </div>
        </div>
      )
    },
    layer2: {
      label: "LAYER 02 // Reservation Gate",
      pillText: "Checkout State",
      footer: "Stage controller locking seats during reservation checkout",
      content: (
        <div className="flex flex-col justify-center my-2 font-mono text-[8px] text-gray-300 w-full">
          <div className="text-red-500">lockRoomState: Reserve seat A4</div>
          <div className="text-gray-500">Timer: 09:59 (Locked Checkout)</div>
          <div className="text-purple-400 mt-1">Simulated Gateway payment:</div>
          <div className="text-gray-400">Checkout Success &gt;&gt; Print PDF Ticket</div>
        </div>
      )
    },
    layer3: {
      label: "LAYER 03 // Local Storage persistence",
      pillText: "Caching Store",
      footer: "Caching client states and sync with Restful API",
      content: (
        <div className="flex items-center justify-center gap-3 my-2 text-[9px] font-mono">
          <div className="p-1.5 border border-red-500/20 bg-red-500/5 rounded">
            <div className="font-bold text-red-300">LocalStorage</div>
          </div>
          <span className="text-gray-500">◀ sync ▶</span>
          <div className="p-1.5 border border-white/10 bg-white/5 rounded">
            <div className="font-bold text-white">REST API Mocks</div>
          </div>
        </div>
      )
    },
    captions: [
      {
        category: "Transactional Grid Flow",
        title: "BookMyShow Clone",
        description: "Replicating high-fidelity seating maps, tracking user booking selections, and handling reservation locks dynamically."
      },
      {
        category: "State Handlers",
        title: "Staged Reservation Locks",
        description: "Centralized checkout controllers lock selected seat grids for exactly ten minutes, preventing circular double booking while users confirm checkout simulated payments."
      },
      {
        category: "Seat Allocation Caching",
        title: "Persistence & REST Synchronization",
        description: "Simulated localized state persistence syncs live selection updates, caching seat data models and locking transaction reservations securely."
      }
    ]
  }
];

// ── REUSEABLE EXPLODED PROJECT SHOWCASE COMPONENT ───────────────────────────
function ExplodedProjectShowcase({
  project,
  index,
}: {
  project: typeof projectSpecifications[number];
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Local scroll progress specifically bound to this section's scroll passage
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Silky smooth, tight interpolation transformations for 155vh container height
  const explodedProgress = useTransform(scrollYProgress, [0.08, 0.75], [0, 1]);
  const centerpieceOpacity = useTransform(scrollYProgress, [0, 0.82, 0.95], [1, 1, 0]);

  // Floating 3D separation bounds
  const layer1Z = useTransform(explodedProgress, [0, 0.5], [0, 120]); 
  const layer2Z = useTransform(explodedProgress, [0, 0.5], [0, 0]);   
  const layer3Z = useTransform(explodedProgress, [0, 0.5], [0, -120]); 
  
  const layer1Opacity = useTransform(explodedProgress, [0, 0.1, 0.6], [0.5, 1, 0.4]);
  const layer2Opacity = useTransform(explodedProgress, [0, 0.2, 0.7], [0.5, 1, 0.5]);
  const layer3Opacity = useTransform(explodedProgress, [0, 0.3, 0.8], [0.5, 1, 0.6]);

  const layer1Scale = useTransform(explodedProgress, [0, 0.5], [1, 1.05]);
  const layer2Scale = useTransform(explodedProgress, [0, 0.5], [1, 1.0]);
  const layer3Scale = useTransform(explodedProgress, [0, 0.5], [1, 0.95]);

  const captionIndex = useTransform(explodedProgress, 
    [0, 0.22, 0.46, 0.78, 1], 
    [0, 0, 1, 2, 2]
  );

  const [currentCaption, setCurrentCaption] = useState(0);
  useEffect(() => {
    return captionIndex.onChange((latest) => {
      setCurrentCaption(Math.round(latest));
    });
  }, [captionIndex]);

  // Accent mappings
  const colorMap = {
    blue: {
      text: "text-blue-400",
      accent: "bg-blue-500",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
    },
    teal: {
      text: "text-teal-400",
      accent: "bg-teal-500",
      border: "border-teal-500/30",
      bg: "bg-teal-500/10",
    },
    orange: {
      text: "text-amber-400",
      accent: "bg-amber-500",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
    },
    red: {
      text: "text-red-400",
      accent: "bg-red-500",
      border: "border-red-500/30",
      bg: "bg-red-500/10",
    },
  };

  const theme = colorMap[project.themeColor as keyof typeof colorMap] || colorMap.blue;

  return (
    <div 
      ref={sectionRef} 
      className="relative h-[155vh] bg-black border-t border-white/5 z-20 w-full"
    >
      {/* Sticky viewport snapping panel */}
      <motion.div
        style={{ opacity: centerpieceOpacity }}
        className="sticky top-0 h-[100vh] flex flex-col justify-center items-center overflow-hidden w-full px-4"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-10">
          
          {/* LEFT: Exploded Glass Layers with Image overlays */}
          <div className="relative flex justify-center items-center h-[50vh] lg:h-[70vh] perspective-[1000px]">
            <div className="relative w-[300px] h-[300px] md:w-[410px] md:h-[410px] transform-style-3d rotate-x-[24deg] rotate-y-[-18deg]">
              
              {/* LAYER 1 (Top Layer) */}
              <motion.div
                style={{ translateZ: layer1Z, opacity: layer1Opacity, scale: layer1Scale }}
                className="absolute inset-0 apple-glass rounded-2xl p-4 floating-layer-1 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className={`text-[9px] uppercase font-mono tracking-widest ${theme.text}`}>{project.layer1.label}</span>
                  <span className={`w-2 h-2 rounded-full ${theme.accent} animate-pulse`}></span>
                </div>
                
                <div className="flex-1 flex items-center justify-center my-2 select-none w-full">
                  {project.layer1.content}
                </div>

                <div className="text-[8px] font-mono text-gray-500 text-center border-t border-white/5 pt-1.5">
                  {project.layer1.footer}
                </div>
              </motion.div>

              {/* LAYER 2 (Middle Layer) - Overlaid with gorgeous custom screenshot mockup backdrops */}
              <motion.div
                style={{ translateZ: layer2Z, opacity: layer2Opacity, scale: layer2Scale }}
                className="absolute inset-0 apple-glass rounded-2xl p-4 floating-layer-2 flex flex-col justify-between overflow-hidden group border border-white/5"
              >
                {/* Screenshot background overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.14] group-hover:opacity-[0.32] transition-opacity duration-700 pointer-events-none">
                  <Image 
                    src={project.imageUrl} 
                    alt="Project Screenshot"
                    fill
                    className="object-cover object-top"
                    quality={70}
                  />
                </div>

                <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-2 bg-black/40 backdrop-blur-[2px] rounded p-1 px-2">
                  <span className={`text-[9px] uppercase font-mono tracking-widest ${theme.text}`}>{project.layer2.label}</span>
                  <span className="text-[8px] font-mono text-gray-400">{project.layer2.pillText}</span>
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-center my-2 select-none w-full bg-black/35 backdrop-blur-[1px] rounded p-2 border border-white/5">
                  {project.layer2.content}
                </div>

                <div className="relative z-10 text-[8px] font-mono text-gray-500 text-center border-t border-white/5 pt-1.5 bg-black/40 backdrop-blur-[2px] rounded p-1">
                  {project.layer2.footer}
                </div>
              </motion.div>

              {/* LAYER 3 (Bottom Layer) */}
              <motion.div
                style={{ translateZ: layer3Z, opacity: layer3Opacity, scale: layer3Scale }}
                className="absolute inset-0 apple-glass rounded-2xl p-4 floating-layer-3 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className={`text-[9px] uppercase font-mono tracking-widest ${theme.text}`}>{project.layer3.label}</span>
                  <span className="text-[8px] font-mono text-gray-500">{project.layer3.pillText}</span>
                </div>

                <div className="flex-1 flex items-center justify-center my-2 select-none w-full">
                  {project.layer3.content}
                </div>

                <div className="text-[8px] font-mono text-gray-500 text-center border-t border-white/5 pt-1.5">
                  {project.layer3.footer}
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT: Floating Scroll Pinned Captions */}
          <div className="relative h-[40vh] flex flex-col justify-center items-start pl-6 border-l border-white/5">
            <AnimatePresence mode="wait">
              {project.captions.map((caption, capIdx) => {
                if (currentCaption === capIdx || (capIdx === 2 && currentCaption >= 2)) {
                  return (
                    <motion.div
                      key={`caption-${capIdx}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <span className={`text-xs uppercase font-bold tracking-[0.2em] ${theme.text}`}>{caption.category}</span>
                      <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">{caption.title}</h2>
                      <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl">
                        {caption.description}
                      </p>
                      {capIdx === 0 && (
                        <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                          <span>↓ Scroll to Explode Layers</span>
                        </div>
                      )}
                    </motion.div>
                  );
                }
                return null;
              })}
            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

// ── MAIN HOMEPAGE ────────────────────────────────────────────────────────────
export default function Home() {
  const { ref: homeRef } = useSectionInView("Home", 0.2);
  const { ref: aboutRef } = useSectionInView("About", 0.5);
  const { ref: inViewProjectsRef } = useSectionInView("Projects", 0.3);
  const { ref: skillsRef } = useSectionInView("Skills", 0.5);
  const { ref: experienceRef } = useSectionInView("Experience", 0.3);
  const { ref: contactRef } = useSectionInView("Contact", 0.5);

  const projectsSectionRef = useRef<any>(null);
  const setProjectsRefs = (node: HTMLDivElement | null) => {
    projectsSectionRef.current = node;
    inViewProjectsRef(node);
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
  const philosophyProgress = useTransform(scrollYProgress, [0.22, 0.35], [0, 1]);
  const philosophyScale = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0.95, 1, 1, 0.95]);

  // ── STATE: Interactive Chatbot ──────────────────────────────────────────────
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    { sender: "ai", text: "Welcome. Ask me about Akshay's technical philosophy, the Mulai BI System, or how he operates." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatbotEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    philosophy: "Akshay builds for &apos;calculated engineering risks.&apos; He specializes in transitioning architectures from linear API chains into multi-agent systems with self-healing, transactional fail-safes.",
    skills: "His core arsenal is highly production-tested:\n• Languages: Python, Java, JavaScript, C++\n• Backend: FastAPI, Spring Boot, SQLAlchemy, REST APIs\n• AI/ML: LangGraph, LangChain, RAG, Vector Databases\n• Databases: PostgreSQL, MySQL, MongoDB",
    experience: "Akshay has 1 year of professional experience at Mobifintree focused on high-throughput products, coupled with a solid internship at IndyaPay building secure payment query microservices.",
    mulai: "The Mulai BI System is a stateful LangGraph pipeline. It utilizes vision-capable models (Gemini-1.5-Flash) to parse unstructured invoices and receipts, run statistical anomaly math, and persist transactions with Postgres connection pooling."
  };

  const handleChatQuery = (key: keyof typeof botResponses, queryText: string) => {
    if (isTyping) return;
    setMessages((prev) => [...prev, { sender: "user", text: queryText }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: botResponses[key] }]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    chatbotEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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
                const element = document.getElementById("contact");
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
      <section ref={aboutRef} id="about" className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 bg-black overflow-hidden z-20 py-28 border-t border-white/5">
        <motion.div 
          style={{ scale: philosophyScale }}
          className="max-w-4xl text-center"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold mb-8">
            Engineering Philosophy
          </div>
          
          {/* Scroll text masking layout */}
          <div className="relative text-3xl md:text-6xl font-extrabold tracking-tight leading-tight select-none">
            {/* Muted background text */}
            <span className="text-white/10">
              Built for calculated engineering risks. Architecting pipelines that transition static legacy systems into autonomous, self-healing networks.
            </span>

            {/* Glowing illuminated text linked to scroll progress */}
            <motion.div 
              style={{ opacity: philosophyProgress }}
              className="absolute inset-0 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white leading-tight"
            >
              Built for calculated engineering risks. Architecting pipelines that transition static legacy systems into autonomous, self-healing networks.
            </motion.div>
          </div>
          
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

      {/* ── SECTION 3: 4 CONSECUTIVE 3D EXPLODED PROJECT SHOWCASES ─────────────── */}
      <div ref={setProjectsRefs} id="projects" className="relative w-full z-20">
        <div className="text-center py-16 bg-black">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold">Systems Catalog</span>
          <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tight mt-2 text-white">Autonomous Architectures</h2>
        </div>
        {projectSpecifications.map((project, idx) => (
          <ExplodedProjectShowcase key={idx} project={project} index={idx} />
        ))}
      </div>

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
                <div className="space-y-4 h-[350px] overflow-y-auto pr-2 no-scrollbar border border-white/5 p-4 rounded-xl bg-black/40">
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
              </div>

              {/* Interaction triggers */}
              <div className="mt-4 space-y-4">
                <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">Select a query prompt:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleChatQuery("philosophy", "What is your core engineering philosophy?")}
                    className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-xs font-medium text-gray-300 transition"
                  >
                    💡 Core Philosophy
                  </button>
                  <button
                    onClick={() => handleChatQuery("skills", "What is your main technology stack?")}
                    className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-xs font-medium text-gray-300 transition"
                  >
                    🛠️ Main Tech Stack
                  </button>
                  <button
                    onClick={() => handleChatQuery("experience", "Tell me about your experience at Mobifintree.")}
                    className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-xs font-medium text-gray-300 transition"
                  >
                    💼 Professional Experience
                  </button>
                  <button
                    onClick={() => handleChatQuery("mulai", "Explain the Mulai BI System multi-agent model.")}
                    className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-xs font-medium text-gray-300 transition"
                  >
                    🤖 Mulai BI Architecture
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
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-8 text-center md:text-left">Unified Core Competencies</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                
                {/* Languages */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold">Languages</div>
                  <ul className="space-y-2 text-sm text-gray-300 font-light">
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                    <li>C</li>
                  </ul>
                </div>

                {/* Frontend */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold">Frontend</div>
                  <ul className="space-y-2 text-sm text-gray-300 font-light">
                    <li>React</li>
                    <li>HTML / CSS</li>
                    <li>Vite</li>
                    <li>Axios</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>

                {/* Backend */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold">Backend &amp; Database</div>
                  <ul className="space-y-2 text-sm text-gray-300 font-light">
                    <li>FastAPI</li>
                    <li>Spring Boot</li>
                    <li>SQLAlchemy ORM</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                {/* Platforms & Tools */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold">Tools / DevOps</div>
                  <ul className="space-y-2 text-sm text-gray-300 font-light">
                    <li>Git / GitHub</li>
                    <li>Docker Containers</li>
                    <li>Linux Systems</li>
                    <li>Jenkins CI/CD</li>
                    <li>Vercel &amp; Render</li>
                  </ul>
                </div>

                {/* AI / Machine Learning */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold text-blue-400">AI / Machine Learning</div>
                  <ul className="space-y-2 text-sm text-gray-300 font-light">
                    <li className="font-bold text-white">LangGraph</li>
                    <li className="font-bold text-white">LangChain</li>
                    <li>RAG Pipelines</li>
                    <li>LLM Integrations</li>
                    <li>Vector Databases</li>
                  </ul>
                </div>

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
              href="mailto:akshayreddych1508@gmail.com"
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
