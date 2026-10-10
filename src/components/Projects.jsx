import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      number: "01",
      title: "Point of Sale (POS) System",
      category: "Backend Development",
      description:
        "A backend system for managing point of sale operations in retail environments.",
      details:
        "This project is a backend API designed to manage retail point of sale operations. It includes user authentication, secure password handling, JWT-based authorization, database management and structured API endpoints. The project demonstrates backend architecture, database design and software security practices.",
      technologies: [
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Python",
        "Bcrypt",
        "JWT",
      ],
      link: "https://github.com/anualitheuwayo/POS",
      linkText: "GitHub",
    },

    {
      number: "02",
      title: "Creative Platform API",
      category: "Backend Development",
      description:
        "A RESTful backend platform connecting clients with photographers and traditional visual artists.",
      details:
        "Creative Platform is a FastAPI backend API built to connect clients with photographers and traditional visual artists, including artists who create drawings, paintings, sketches, and other hand-created work. Artists can create and manage profiles, upload portfolio work, set availability, and respond to booking requests. Clients can register, browse artists and portfolio work, save favourites, view availability, and request bookings. The project uses a five-layer architecture—models, repositories, schemas, services, and routers—and includes JWT authentication, bcrypt password hashing, role-based access control, PostgreSQL database integration, image uploads, in-app notifications, and automated pytest coverage.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Pydantic",
        "JWT",
        "Bcrypt",
        "Pytest",
      ],
      link: "https://github.com/anualitheuwayo/creative_platform",
      linkText: "GitHub",
    },

    {
      number: "03",
      title: "Budget Tracker",
      category: "Web Development",
      description:
        "A web application designed to help users manage their finances and track their expenses.",
      details:
        "A web application that allows users to organize their income and expenses in one place. The project focuses on creating a simple user experience while applying modern web development techniques for managing financial information.",
      technologies: ["React", "Node.js"],
      link: "https://github.com/anualitheuwayo/Budget-tracker",
      linkText: "GitHub",
    },

    {
      number: "04",
      title: "Supervised Machine Learning Models",
      category: "Data & ML",
      description:
        "A machine-learning project exploring supervised learning models for prediction and classification tasks.",
      details:
        "This project demonstrates an end-to-end supervised machine-learning workflow using Python. It covers data cleaning, exploratory data analysis, feature preparation, train-test splitting, model training, and performance evaluation. Multiple supervised learning algorithms are applied and compared to understand how well they learn patterns from labelled data and make predictions on unseen data. The project highlights practical use of the Scikit-learn ecosystem for building, evaluating, and improving predictive models.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
      ],
      link: "https://github.com/anualitheuwayo/ML-Supervised-models",
      linkText: "GitHub",
    },

    {
      number: "05",
      title: "KidneyVision AI",
      category: "Data & ML",
      description:
        "A deployed deep-learning web application that classifies kidney CT images into Cyst, Normal, Stone, and Tumor categories.",
      details:
        "KidneyVision AI is an end-to-end medical image classification coursework project. It uses a TensorFlow/Keras MobileNetV2 model to analyze uploaded kidney CT images and predict one of four categories: Cyst, Normal, Stone, or Tumor. The Streamlit interface provides image upload, preprocessing, predicted class, confidence scoring, and a probability breakdown for all categories. This is an educational prototype only and is not intended for clinical diagnosis or medical decision-making.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "MobileNetV2",
        "Streamlit",
        "NumPy",
        "Pandas",
        "Pillow",
      ],
      link: "https://github.com/anualitheuwayo/MedicalImaging",
      linkText: "GitHub",
      demo: "https://kidneyclassifierai-sbv8qbivjuk2e42hxruute.streamlit.app/",
      demoText: "Live Demo",
    },

    {
      number: "07",
      title: "Motor Game",
      category: "JavaScript",
      description:
        "A simple interactive motor game built with JavaScript, HTML and CSS.",
      details:
        "A browser-based interactive game created to practice JavaScript logic, DOM manipulation, event handling and responsive interface development. The project demonstrates how JavaScript can be used to create interactive experiences without relying on a large framework.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/anualitheuwayo/Motor-game",
      linkText: "GitHub",
      demo: "https://motorgame.vercel.app/",
      demoText: "Live Demo",
    },

    {
      number: "06",
      title: "House Pricing Encoding Techniques",
      category: "Data & ML",
      description:
        "A project exploring different encoding techniques for house pricing data.",
      details:
        "This project explores how categorical variables can be transformed into numerical representations for machine learning models. Different preprocessing and encoding techniques are applied and compared to understand their effect on house price prediction.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Data Preprocessing",
      ],
      link:
        "https://github.com/anualitheuwayo/House-Pricing_Encoding_Techniques",
      linkText: "GitHub",
    },

    {
      number: "08",
      title: "FikaMarket",
      category: "Web & Mobile Development",
      description:
        "A user-centered agricultural marketplace connecting farmers with buyers through mobile and desktop experiences.",
      details:
        "FikaMarket is a UI/UX design project focused on improving how farmers and buyers discover and access agricultural products. The design process includes user research, wireframing, final interface screens, and an interactive prototype for mobile and desktop platforms. The goal is to create a clear, accessible, and intuitive marketplace experience.",
      technologies: [
         
          "Flutter",
          "Dart",
          "React",
          "Next.js",
          "JavaScript",
          "Tailwind CSS",
          "REST API Integration",
          "Figma",
          "Responsive Design",
          "Progressive Web App",
        
      ],
      link:
        "https://github.com/akirachix/Cipher_Backend",
      linkText: "GitHub",
      demo: "https://www.behance.net/gallery/255567957/FikaMarket-UIUX-Case-Study",
      demoText: "Live Demo",

    },
  ];

  const categories = [
    "All",
    "Backend Development",
    "Web & Mobile Development",
    "Data & ML",
    "JavaScript",
    
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (project) => project.category === activeCategory
      );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <span>MY WORK</span>

          <h2>Selected Projects</h2>

          <p>
            A selection of work combining software development,
            data and technology to solve practical problems.
          </p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.number}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <button
                  className="project-view"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Project <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <span className="modal-category">
              {selectedProject.category}
            </span>

            <h2>{selectedProject.title}</h2>

            <p className="modal-description">
              {selectedProject.details}
            </p>

            <div className="modal-technologies">
              {selectedProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="modal-links">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.linkText} ↗
              </a>

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedProject.demoText} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;