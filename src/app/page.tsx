import React from "react";
import About from "@/components/About";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="career">
        <Career />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
