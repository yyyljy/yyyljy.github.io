import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
