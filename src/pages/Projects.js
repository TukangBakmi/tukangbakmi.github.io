import React from "react";
// Import project screenshots (add actual images to src/assets/images/projects/)
import notesAppImg from "../assets/images/projects/notes-app.png";
import hellomartImg from "../assets/images/projects/hellomart.png";
import myAuditsImg from "../assets/images/projects/my-audits.png";
import robocashImg from "../assets/images/projects/robocash.png";

function Projects() {
  const projects = [
    {
      title: "Notes App Backend",
      description:
        "A RESTful API backend for managing notes built with Hapi.js framework, featuring CRUD operations and in-memory storage.",
      image: notesAppImg,
      technologies: ["Hapi.js", "Node.js", "JavaScript", "ESLint", "Postman"],
      features: [
        "RESTful API endpoints",
        "CRUD operations for notes",
        "In-memory storage",
        "CORS enabled",
        "API testing with Postman",
      ],
      github: "https://github.com/TukangBakmi/notes-app-back-end",
      demo: "#",
      status: "Completed",
    },
    {
      title: "HelloMart - Modern E-commerce Website",
      description:
        "A modern, responsive e-commerce frontend built with React and Bootstrap, featuring glass morphism effects and integrating with Fake Store API for product data.",
      image: hellomartImg,
      technologies: [
        "React",
        "Bootstrap 5",
        "React Router",
        "Font Awesome",
        "Fake Store API",
      ],
      features: [
        "Modern UI with glass morphism effects",
        "Shopping cart with persistent storage",
        "Product search and filtering",
        "Responsive design for all devices",
        "Complete checkout process",
      ],
      github: "https://github.com/tukangbakmi/E-commerce",
      demo: "#",
      status: "Completed",
    },
    {
      title: "My Audits - File Download Tracking System",
      description:
        "A secure file download tracking system built with PHP and MySQL to monitor and log access to sensitive files for audit purposes.",
      image: myAuditsImg,
      technologies: [
        "PHP",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "PHPMailer",
        "Composer",
      ],
      features: [
        "File upload and download tracking",
        "User and admin role management",
        "Download statistics and audit logs",
        "Secure authentication system",
        "Password reset functionality",
      ],
      github: "https://github.com/TukangBakmi/My-Audits",
      demo: "#",
      status: "Completed",
    },
    {
      title: "RoboCash - Android Financial Management App",
      description:
        "A comprehensive Android financial management application built with Java and Firebase, featuring transaction tracking, data visualization, and secure user authentication.",
      image: robocashImg,
      technologies: [
        "Java",
        "Android",
        "Firebase",
        "Material Design",
        "GraphView",
        "Picasso",
      ],
      features: [
        "Income & expense tracking with categories",
        "Firebase authentication with social login",
        "Interactive charts and financial analysis",
        "Material Design UI with custom animations",
        "User profile management with avatars",
      ],
      github: "https://github.com/TukangBakmi/RoboCash",
      demo: "#",
      status: "Completed",
    },
  ];

  const getStatusBadge = (status) => {
    const statusClasses = {
      Live: "bg-success",
      Completed: "bg-primary",
      "In Development": "bg-warning text-dark",
    };
    return `badge ${statusClasses[status] || "bg-secondary"}`;
  };

  return (
    <div className="section dark-theme">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center mb-5">
            <h2>My Projects</h2>
            <p className="lead">
              Showcasing my development journey through innovative solutions
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className="card h-100 project-card">
                {project.image && (
                  <div className="project-img-container">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href={project.github}
                          className="btn btn-outline-light btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        {project.demo !== "#" && (
                          <a
                            href={project.demo}
                            className="btn btn-primary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title">{project.title}</h5>
                    <span className={getStatusBadge(project.status)}>
                      {project.status}
                    </span>
                  </div>

                  <p className="card-text">{project.description}</p>

                  <div className="mb-3">
                    <h6>Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge bg-light text-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h6>Key Features:</h6>
                    <ul className="list-unstyled">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="small">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="d-flex gap-2">
                      <a
                        href={project.github}
                        className="btn btn-outline-light btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          className="btn btn-primary btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row my-5">
          <div className="col-12 text-center">
            <div className="cta-section">
              <h4 className="text-center">More Projects Coming Soon!</h4>
              <p>
                I'm constantly working on new projects. Check back regularly or
                follow me on GitHub for updates.
              </p>
              <a
                href="https://github.com/tukangbakmi"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github me-2"></i>View All Repositories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
