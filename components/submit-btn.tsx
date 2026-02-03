"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion } from "framer-motion";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={!pending ? { scale: 1.06 } : {}}
      whileTap={!pending ? { scale: 0.97 } : {}}
      className="
        group relative flex h-12 w-32 items-center justify-center gap-2
        rounded-full
        bg-gray-900 text-sm font-medium text-white
        shadow-md
        transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30
        disabled:cursor-not-allowed
        disabled:bg-gray-900/70
        dark:bg-white/10 dark:text-white
      "
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Sending
        </span>
      ) : (
        <>
          <span>Submit</span>
          <FaPaperPlane
            className="
              text-xs opacity-70
              transition-transform duration-200
              group-hover:translate-x-1 group-hover:-translate-y-1
            "
          />
        </>
      )}
    </motion.button>
  );
}
