"use client";

import React, { useState } from "react";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project";
import { useSectionInView } from "@/lib/hooks";

const categories = ["All", "Systems & Storage", "AI & Multi-Agent", "Streaming & Full-Stack"] as const;
type Category = (typeof categories)[number];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.15);
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Systems & Storage") {
      return p.id === "stratakv" || p.id === "fleetshield";
    }
    if (selectedCategory === "AI & Multi-Agent") {
      return (
        p.id === "aether" ||
        p.id === "thepatientadvocate" ||
        p.id === "mulai" ||
        p.id === "github-repo-analyzer"
      );
    }
    if (selectedCategory === "Streaming & Full-Stack") {
      return p.id === "chatpulse" || p.id === "qa-monitor-engine" || p.id === "skillsync";
    }
    return true;
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-zinc-900"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-500">
              Systems & Production Code
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Featured Engineering Projects
            </h2>
            <p className="text-sm font-sans text-zinc-400 max-w-2xl">
              Nine verified repositories spanning concurrent C++ storage engines, high-throughput .NET telemetry gateways, distributed Kubernetes agent platforms, and deterministic healthcare auditors.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-[#0c0c0e] border border-zinc-900">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition ${
                  selectedCategory === cat
                    ? "bg-zinc-800 text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
