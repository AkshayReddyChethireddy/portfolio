import Intro from "@/components/intro";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
