
import About from "./component/sections/About";
import Hero from "./component/Hero"
import Skills from "./component/sections/Skills";
import Projects from "./component/sections/Projects";
import Experience from "./component/sections/Experience";
import Contact from "./component/sections/Contact";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-24 font-mono px-4">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
