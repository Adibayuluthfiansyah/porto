import Hero from "@/components/ui/Hero";
import Navbar from "./navbar/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import About from "./about/page";
import Footer from "./footer/page";
import ScrollBasedAnimated from "@/components/ui/scroll-based-animate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adibayu Luthfiansyah | Full Stack Developer & Software Engineer",
  description:
    "Welcome to my portfolio. I'm a Full-Stack Developer specializing in building scalable web applications with Next.js, NestJS, TypeScript, and Web3 technologies. Explore my projects and experience.",
  openGraph: {
    title: "Adibayu Luthfiansyah | Full Stack Developer & Software Engineer",
    description:
      "Full-Stack Developer specializing in building scalable web applications with Next.js, NestJS, TypeScript, and Web3 technologies.",
    url: "https://adibayuluthfiansyah.dev",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="bg-transparent transition-colors duration-500">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section className="py-10 md:py-16 overflow-hidden flex items-center justify-center bg-transparent">
        <ScrollBasedAnimated
          text="SOFTWARE ENGINEER • FULLSTACK DEVELOPER • "
          default_velocity={1}
          className="text-4xl md:text-6xl font-serif italic tracking-widest text-neutral-400 dark:text-neutral-600 mx-4"
        />
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
