import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

       
        <div className="hero-content">

          <p className="hero-label">HELLO, I'M</p>

          <h1>
            Anualithe <span>Uwayo.</span>
          </h1>

          <h2> 
            Software Developer <span>&</span> UI/UX Designer
          </h2>

          <p className="hero-description">
            I build digital products that solve real-world problems,
            combining software development, data, and user-centered
            design to create useful and meaningful experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-primary">
              View My Work <span>→</span>
            </a>

            <a href="#contact" className="hero-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/anualitheuwayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:YOUR-EMAIL@example.com">
              Email
            </a>
          </div>

        </div>


        
        <div className="hero-photo-wrapper">

          <div className="hero-photo">

            <img
              src="/profile.png"
              alt="Analithe Uwayo"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;