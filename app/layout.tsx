import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshay's | PortFolio",
  description: "A personal portfolio built to showcase my work, skills, and growth as a developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-blue-50 text-gray-900 
        relative pt-28 
        sm:pt-36 dark:bg-gray-900
      dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#5edff0] absolute 
        top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] 
        sm:w-[68.75rem] dark:bg-[#1a5252]"></div>
        <div className="bg-[#a29adf] absolute 
        top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 
        dark:bg-[#625d96]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
