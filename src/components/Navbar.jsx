import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          Anualithe
        </a>

        {/* Navigation */}
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA */}
        <a href="#contact" className="navbar-button">
          Let's Talk
        </a>

      </div>
    </header>
  );
}

export default Navbar;