"use client";

import React from "react";
import { FiSend } from "react-icons/fi";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        inline-flex items-center justify-center gap-2 px-5 py-2.5
        rounded-lg bg-zinc-100 text-zinc-950 font-mono text-xs font-semibold
        hover:bg-white transition
        disabled:opacity-50 disabled:cursor-not-allowed
      "
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
          <span>Transmitting...</span>
        </span>
      ) : (
        <>
          <span>Send Message</span>
          <FiSend className="w-3.5 h-3.5" />
        </>
      )}
    </button>
  );
}
