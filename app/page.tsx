import Hero from "@/components/ui/Hero";
import Navbar from "./navbar/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import About from "./about/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
