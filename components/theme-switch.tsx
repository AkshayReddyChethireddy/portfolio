"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      aria-label="Toggle theme"
      className="
        fixed bottom-5 right-5 z-[999]
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-white/70 backdrop-blur-xl
        border border-black/10
        shadow-lg
        text-gray-800
        transition-colors
        hover:shadow-xl
        dark:bg-neutral-900/60
        dark:border-white/10
        dark:text-white
      "
    >
      {theme === "light" ? (
        <BsSun className="text-lg transition-transform group-hover:rotate-12" />
      ) : (
        <BsMoon className="text-lg transition-transform group-hover:-rotate-12" />
      )}
    </motion.button>
  );
}
