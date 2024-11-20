import React from "react";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Projects />
      <Contact />
    </main>
  );
}
