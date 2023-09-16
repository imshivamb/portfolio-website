import About from "@/components/About";
import SectionDivider from "@/components/Section-Divider";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Main from "@/components/main";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Main />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
