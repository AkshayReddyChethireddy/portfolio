import React from "react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#09090b] py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-zinc-500">
          <span>Engineered with Next.js &middot; TypeScript &middot; Tailwind CSS</span>
          <span>&middot;</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
