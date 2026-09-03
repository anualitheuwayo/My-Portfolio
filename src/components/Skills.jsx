import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive, scalable and user-friendly web applications.",
      skills: [
        "JavaScript",
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Flutter"
      ],
    },

    {
      number: "02",
      title: "Data & Machine Learning",
      description:
        "Working with data to discover insights and build intelligent solutions.",
      skills: [
        "Data Analysis",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Data Visualization",
      ],
    },

    {
      number: "03",
      title: "IoT & Software Testing",
      description:
        "Exploring connected systems and ensuring software works reliably.",
      skills: [
        "Internet of Things",
        "Software Testing",
        "API Testing",
        "Test Automation",
        "GitHub",
        "Collaboration",
      ],
    },

    {
      number: "04",
      title: "UI/UX & Design",
      description:
        "Designing clean and intuitive experiences before bringing them to life.",
      skills: [
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "UI Design",
        "UX Design",
        "Prototyping",
      ],
    },

    {
      number: "05",
      title: "Backend Development",
      description:
        "Developing secure APIs and database-driven applications with a focus on performance, reliability, and scalable backend architecture.",
      skills: [
        "Python",
        "FastAPI",
        "REST APIs",
        "SQLAlchemy",
        "JWT Authentication",
        "PostgreSQL",
        "Alembic",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          <span>MY EXPERTISE</span>

          <h2>
            Skills that bring
            <br />
            ideas to life.
          </h2>

          <p>
            A combination of development, data, technology and design
            that allows me to approach problems from different perspectives.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-grid">

          {skillGroups.map((group) => (
            <div className="skill-card" key={group.number}>

              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-line"></span>
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;