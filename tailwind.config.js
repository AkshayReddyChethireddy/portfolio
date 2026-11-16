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
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Menlo", "Courier New", "monospace"],
      },
      colors: {
        canvas: "#09090b",
        surface: "#0f0f12",
        "surface-subtle": "#141418",
        border: "#27272a",
        "border-muted": "#1e1e24",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
