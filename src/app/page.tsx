import Hero from "@/app/pages/hero";
import Work from "./pages/work";
import Sidebar from "@/components/Sidebar";
import Skills from "./pages/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <section id="home">
        <Hero />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </main>
  );
}
