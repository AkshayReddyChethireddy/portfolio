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
      className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 border-t border-slate-200"
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1.5">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
              Technical Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
              Featured Systems & Codebases
            </h2>
            <p className="text-sm font-sans text-slate-600 max-w-2xl">
              Nine verified repositories spanning concurrent storage engines, high-throughput telemetry gateways, distributed agent platforms, and deterministic healthcare auditors.
            </p>
          </div>

          <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-white border border-slate-200 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white font-medium"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
