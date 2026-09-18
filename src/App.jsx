import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function ResumePage() {
  return (
    <main className="resume-page">
      <object
        className="resume-viewer"
        data="/resume.pdf"
        type="application/pdf"
        aria-label="Resume PDF"
      >
        <p>
          Your browser cannot display PDFs.{" "}
          <a href="/resume.pdf" download>
            Download the resume
          </a>
        </p>
      </object>
    </main>
  );
}

function App() {
  const isResumePage = window.location.pathname.replace(/\/+$/, "") === "/resume";

  if (isResumePage) {
    return <ResumePage />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;