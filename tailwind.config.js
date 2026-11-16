/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Menlo", "Courier New", "monospace"],
      },
      colors: {
        canvas: "#FAFAFA",
        surface: "#FFFFFF",
        "surface-subtle": "#F8FAFC",
        border: "#E2E8F0",
        "border-hover": "#CBD5E1",
        heading: "#0F172A",
        body: "#334155",
        muted: "#64748B",
        accent: "#1D4ED8",
        "accent-subtle": "#EFF6FF",
      },
    },
  },
  plugins: [],
};
