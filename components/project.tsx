"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/lib/data";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp, FiCpu, FiLayers } from "react-icons/fi";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const [showArchitectureDetails, setShowArchitectureDetails] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);

  return (
    <article className="rounded-xl bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 transition duration-200 overflow-hidden flex flex-col justify-between">
      <div className="p-6 space-y-5">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-3 border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 font-medium">
              {project.badge}
            </span>
          </div>

          {/* Featured Metric Badge */}
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2 py-0.5 rounded">
              {project.featuredMetric.value}
            </span>
            <span className="block text-[10px] font-mono text-zinc-500 mt-0.5">
              {project.featuredMetric.label}
            </span>
          </div>
        </div>

        {/* Title & One-line Summary */}
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-white font-sans tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Benchmarks / Measurable Results */}
        <div className="space-y-2 pt-1">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
            <FiCpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Verified Benchmarks & Impact</span>
          </div>
          <div className="grid grid-cols-1 gap-1.5 bg-[#08080a] p-3 rounded-lg border border-zinc-900">
            {project.benchmarks.map((bench, idx) => (
              <div
                key={idx}
                className="text-xs font-mono text-zinc-300 flex items-start gap-2 leading-relaxed"
              >
                <span className="text-emerald-500 font-bold shrink-0">&gt;</span>
                <span>{bench}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Problem & Under the Hood Architecture Toggle */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setShowArchitectureDetails((prev) => !prev)}
            className="w-full flex items-center justify-between py-2 text-xs font-mono text-zinc-400 hover:text-white transition border-t border-zinc-900"
          >
            <span className="flex items-center gap-1.5">
              <FiLayers className="w-3.5 h-3.5 text-blue-400" />
              <span>System Architecture & Trade-offs</span>
            </span>
            {showArchitectureDetails ? (
              <FiChevronUp className="w-3.5 h-3.5 text-zinc-500" />
            ) : (
              <FiChevronDown className="w-3.5 h-3.5 text-zinc-500" />
            )}
          </button>

          {showArchitectureDetails && (
            <div className="mt-3 space-y-3 p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800 text-xs font-sans text-zinc-300 leading-relaxed">
              <div>
                <span className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wide block mb-1">
                  Problem Solved:
                </span>
                <p className="text-zinc-400">{project.problem}</p>
              </div>
              <div className="pt-2 border-t border-zinc-800/60">
                <span className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wide block mb-1">
                  Under the Hood Implementation:
                </span>
                <p className="text-zinc-300">{project.architecture}</p>
              </div>
            </div>
          )}
        </div>

        {/* Image Preview Toggle if image is available */}
        {project.imageUrl && (
          <div>
            <button
              type="button"
              onClick={() => setShowImagePreview((prev) => !prev)}
              className="text-[11px] font-mono text-zinc-400 hover:text-zinc-300 underline underline-offset-2 transition"
            >
              {showImagePreview ? "Hide visual snapshot" : "View system visual snapshot"}
            </button>
            {showImagePreview && (
              <div className="mt-2 rounded-lg overflow-hidden border border-zinc-800 bg-black">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  width={720}
                  height={400}
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition"
                />
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-900">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800/80 text-[10px] font-mono text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links Bar */}
      <div className="p-4 bg-[#0a0a0c] border-t border-zinc-900 flex items-center justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white font-mono text-xs font-medium transition"
        >
          <FiGithub className="w-3.5 h-3.5" />
          <span>Repository</span>
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition"
          >
            <span>Live Demo</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-[11px] font-mono text-zinc-400">
            Source Verified
          </span>
        )}
      </div>
    </article>
  );
}
