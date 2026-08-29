import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

/**
 * Narrative order: hook → proof of stack → what I sell → evidence →
 * what buying feels like → who I am → tools → social proof → ask.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
