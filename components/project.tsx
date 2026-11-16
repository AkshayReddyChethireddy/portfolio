"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/lib/data";
import { FiGithub, FiExternalLink, FiImage } from "react-icons/fi";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const [showImagePreview, setShowImagePreview] = useState(false);

  return (
    <article className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition duration-150 overflow-hidden flex flex-col justify-between">
      <div className="p-6 space-y-4">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
            {project.badge}
          </span>

          <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
            {project.metricBadge}
          </span>
        </div>

        {/* Title & One-line Summary */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Problem -> Architecture -> Outcome (3 Scannable Points) */}
        <div className="space-y-2 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-sans leading-relaxed">
          <div>
            <span className="font-mono text-[11px] font-bold text-slate-900 uppercase tracking-wide block">
              Problem:
            </span>
            <p className="text-slate-600 mt-0.5">{project.problem}</p>
          </div>
          <div className="pt-2 border-t border-slate-200">
            <span className="font-mono text-[11px] font-bold text-slate-900 uppercase tracking-wide block">
              Architecture:
            </span>
            <p className="text-slate-700 mt-0.5">{project.architecture}</p>
          </div>
          <div className="pt-2 border-t border-slate-200">
            <span className="font-mono text-[11px] font-bold text-slate-900 uppercase tracking-wide block">
              Outcome:
            </span>
            <p className="text-slate-900 font-medium mt-0.5">{project.outcome}</p>
          </div>
        </div>

        {/* Image Preview Toggle if image is available */}
        {project.imageUrl && (
          <div>
            <button
              type="button"
              onClick={() => setShowImagePreview((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-600 hover:text-slate-900 transition"
            >
              <FiImage className="w-3.5 h-3.5 text-blue-600" />
              <span>{showImagePreview ? "Hide visual snapshot" : "View interface snapshot"}</span>
            </button>
            {showImagePreview && (
              <div className="mt-2 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  width={720}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links Bar */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 font-mono text-xs font-medium transition shadow-sm"
        >
          <FiGithub className="w-3.5 h-3.5" />
          <span>Source Code</span>
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-mono text-xs font-semibold transition shadow-sm"
          >
            <span>Live Demo</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-[11px] font-mono text-slate-500">
            Source Verified
          </span>
        )}
      </div>
    </article>
  );
}
