"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links, personalInfo } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiGithub, FiFileText } from "react-icons/fi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-0 sm:pt-4 pointer-events-none">
      <div className="w-full sm:w-auto px-0 sm:px-4 pointer-events-auto">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            flex items-center justify-between
            h-14 px-4 sm:px-5
            bg-[#09090b]/90 backdrop-blur-md
            border-b sm:border border-zinc-800
            sm:rounded-full shadow-2xl
          "
        >
          {/* Logo / Moniker */}
          <Link
            href="#overview"
            onClick={() => {
              setActiveSection("Overview");
              setTimeOfLastClick(Date.now());
            }}
            className="flex items-center gap-2 mr-3 sm:mr-6 text-xs font-mono font-medium tracking-tight text-zinc-300 hover:text-white transition"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-white">akshay</span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-zinc-400 hidden sm:inline">eng</span>
          </Link>

          {/* Navigation links */}
          <nav className="flex items-center gap-1 sm:gap-1.5 text-xs font-medium">
            {links.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <Link
                  key={link.hash}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "relative px-2.5 sm:px-3 py-1.5 rounded-full transition-colors font-mono tracking-tight",
                    {
                      "text-white font-semibold": isActive,
                      "text-zinc-400 hover:text-zinc-200": !isActive,
                    }
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-zinc-800 border border-zinc-700/60"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* External Action Links */}
          <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l border-zinc-800 text-xs">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-full transition"
              title="GitHub Profile"
            >
              <FiGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.resumePath}
              download
              className="flex items-center gap-1.5 px-3 py-1 bg-zinc-100 text-zinc-950 font-mono font-semibold rounded-full hover:bg-white transition text-[11px]"
              title="Download Resume"
            >
              <FiFileText className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
