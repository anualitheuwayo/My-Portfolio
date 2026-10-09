import Navbar from "./components/Navbar";
import ScrollReveal from "./components/ScrollReveal";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <ScrollReveal direction="up" distance={40} duration={700}>
          <Hero />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={800} delay={80}>
          <About />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={800} delay={100}>
          <Skills />
        </ScrollReveal>

        <ScrollReveal direction="scale" distance={0} duration={800} delay={120}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={800} delay={100}>
          <Contact />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={40} duration={700} delay={60}>
          <Footer />
        </ScrollReveal>
      </main>
    </>
  );
}

export default App;