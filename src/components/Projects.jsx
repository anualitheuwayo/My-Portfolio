import "./Projects.css";

function Projects() {
  const projects = [

    {
      number: "01",
      title: "Point of Sale (POS) System",
      category: "Backend Development",
      description:
        "A backend system for managing point of sale operations in retail environments.",
      technologies: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Python", "Bcrypt", "JWT"],
      link: "https://github.com/anualitheuwayo/POS",
      linkText: "GitHub",
    },

    {
      number: "02",
      title: "Budget tracker",
      category: "Web Development",
      description:
        "A web application designed to help users manage their finances and track their expenses.",
      technologies: ["React", "Node.js",],
      link: "https://github.com/anualitheuwayo/Budget-tracker",
      linkText: "GitHub",
    },

    {
      number: "03",
      title: "Data Analysis Project",
      category: "Data & ML",
      description:
        "A data project involving data exploration, visualization, pattern discovery and machine learning.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      link: "https://github.com/anualitheuwayo/ML-Supervised-models",
      linkText: "GitHub",
    },
    {
      number: "04",
      title: "Motor game for fun",
      category: "JavaScript,html,css",
      description:
        "A simple motor game built with JavaScript, HTML, and CSS.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/anualitheuwayo/Motor-game",
      linkText: "Play",
      link: "https://motorgame.vercel.app/",
      LinkText: "Live Demo",
    },
    {
      number: "05",
      title: "House Pricing Encoding Techniques",
      category: "Data & ML",
      description:
        "A project exploring various encoding techniques for house pricing data.",
      technologies: ["Python", "Pandas", "Scikit-learn","Data Preprocessing","NumPy"],
      link: "https://github.com/anualitheuwayo/House-Pricing_Encoding_Techniques",
      linkText: "GitHub",
     
    },

  ];


  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <span>MY WORK</span>

          <h2>Selected Projects</h2>

          <p>
            A selection of work combining software development,
            data and user-centered design.
          </p>
        </div>

        <div className="projects-list">

          {projects.map((project) => (
            <article className="project-row" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">

                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <p>{project.description}</p>

                <div className="project-bottom">

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkText}
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;