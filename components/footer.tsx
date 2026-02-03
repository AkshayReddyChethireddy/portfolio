import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <small className="mb-2 block">
        &copy; {new Date().getFullYear()} Akshay Reddy Chethireddy. All rights
        reserved.
      </small>

      <p className="max-w-xl mx-auto text-xs leading-relaxed">
        <span className="font-medium">Built with</span> React, Next.js (App Router
        & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email,
        Resend, and deployed on Vercel.
      </p>
    </footer>
  );
}
