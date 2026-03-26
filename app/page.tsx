import Hero from "@/components/ui/Hero";
import Navbar from "./navbar/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import About from "./about/page";
import Footer from "./footer/page";
import ScrollBasedAnimatedWrapper from "@/components/ui/ScrollBasedAnimatedWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adibayu Luthfiansyah | Full Stack Developer & Software Engineer",
  description:
    "Welcome to my portfolio. I'm a Full-Stack Developer specializing in building scalable web applications with Next.js, NestJS, TypeScript, and GO. Explore my projects and experience.",
  openGraph: {
    title: "Adibayu Luthfiansyah | Full Stack Developer & Software Engineer",
    description:
      "Full-Stack Developer specializing in building scalable web applications with Next.js, NestJS, TypeScript, and GO.",
    url: "https://adibayuluthfiansyah.dev",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="bg-transparent transition-colors duration-500">
      <Navbar />
      <section id="home" aria-label="Hero section">
        <Hero />
      </section>
      <section
        className="py-10 md:py-16 overflow-hidden flex items-center justify-center bg-transparent"
        aria-label="Professional titles"
      >
        <ScrollBasedAnimatedWrapper
          text="BUILDING SCALABLE WEB APPS • FULL STACK DEVELOPER • "
          default_velocity={5}
          className="text-4xl md:text-6xl font-serif italic tracking-widest text-neutral-400 dark:text-neutral-600 mx-4"
        />
      </section>
      <section id="about" aria-label="About me">
        <About />
      </section>
      <section id="projects" aria-label="Portfolio projects">
        <Projects />
      </section>
      <section id="contact" aria-label="Contact information">
        <Contact />
      </section>
      <section aria-label="Footer">
        <Footer />
      </section>
    </main>
  );
}
