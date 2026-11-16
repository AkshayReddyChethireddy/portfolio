import Header from "@/components/header";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Akshay Chethireddy | Software Engineer | Distributed Systems & Backend",
  description:
    "Software engineer with 2.5 years of experience building Java/Spring Boot payment microservices, C++ concurrent storage engines, and deterministic AI systems. Scaled payment APIs to 1,200+ rps.",
  keywords: [
    "Akshay Chethireddy",
    "Software Engineer",
    "Distributed Systems",
    "Spring Boot",
    "C++20",
    "FastAPI",
    "LangGraph",
    "Microservices",
    "Kafka",
    "UMass Lowell",
  ],
  authors: [{ name: "Akshay Chethireddy" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} !scroll-smooth`}>
      <body className="bg-[#FAFAFA] text-[#334155] relative min-h-screen font-sans selection:bg-blue-700 selection:text-white antialiased">
        <ActiveSectionContextProvider>
          <LenisProvider>
            <div className="relative flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "#FFFFFF",
                  color: "#0F172A",
                  border: "1px solid #E2E8F0",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-mono)",
                },
              }}
            />
            <Analytics />
          </LenisProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
