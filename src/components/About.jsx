import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span>ABOUT ME</span>
          <h2>Building with purpose and creativity.</h2>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src="/aboutimage.png"
                alt="Analithe Uwayo"
              />
            </div>
          </div>

          <div className="about-text">
            <h3>
              I'm a developer who enjoys turning
              <span> ideas into real products.</span>
            </h3>

            <p>
              I'm a Software Developer and UI/UX Designer with an interest
              in building digital products that are useful, accessible,
              and visually engaging.
            </p>

            <p>
              My work combines software development, data, machine learning,
              and design. I enjoy exploring how technology can be used to
              solve real-world problems and create better experiences for
              people.
            </p>

            <p>
              Beyond web development, I'm also interested in Internet of
              Things, software testing, data analysis, and modern technologies
              such as React and Next.js.
            </p>

            <a href="#contact" className="about-button">
              Let's Work Together
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;