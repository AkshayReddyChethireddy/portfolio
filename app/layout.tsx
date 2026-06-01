import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import LenisProvider from "@/components/lenis-provider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshay Reddy | Full-Stack AI Engineer Portfolio",
  description: "Elite portfolio showcasing autonomous multi-agent systems, heavy-duty backend engineering, and luxury UI experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body
        className={`${inter.className} bg-black text-white relative pt-20 overflow-x-hidden no-scrollbar`}
      >
        {/* Subtle, premium metallic backdrop glows */}
        <div className="bg-[#0f172a] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[12rem]"></div>
        <div className="bg-[#1e1b4b] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[12rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <LenisProvider>
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <Toaster position="top-right" />
              <Analytics />
            </LenisProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
