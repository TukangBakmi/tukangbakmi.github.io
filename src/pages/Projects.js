import React from "react";

function Projects() {
  const projects = [
    {
      title: "Crypto Price Forecasting App",
      description: "A web application that predicts cryptocurrency prices using machine learning algorithms and real-time market data.",
      technologies: ["React", "Python", "Flask", "Chart.js", "CoinGecko API"],
      features: [
        "Real-time price tracking",
        "Price prediction algorithms",
        "Interactive charts and graphs",
        "Portfolio tracking"
      ],
      github: "https://github.com/tukangbakmi/crypto-forecasting",
      demo: "#",
      status: "In Development"
    },
    {
      title: "Book Tracker Mobile App",
      description: "A mobile application for book enthusiasts to track their reading progress, discover new books, and share reviews.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      features: [
        "Reading progress tracking",
        "Book search and discovery",
        "Personal reading statistics",
        "Social features for sharing reviews"
      ],
      github: "https://github.com/tukangbakmi/book-tracker",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and deployed on GitHub Pages to showcase my projects and skills.",
      technologies: ["React", "Bootstrap", "GitHub Pages"],
      features: [
        "Responsive design",
        "Project showcase",
        "Contact form",
        "Modern UI/UX"
      ],
      github: "https://github.com/tukangbakmi/tukangbakmi.github.io",
      demo: "https://tukangbakmi.github.io",
      status: "Live"
    }
  ];

  const getStatusBadge = (status) => {
    const statusClasses = {
      "Live": "bg-success",
      "Completed": "bg-primary",
      "In Development": "bg-warning text-dark"
    };
    return `badge ${statusClasses[status] || "bg-secondary"}`;
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2>My Projects</h2>
            <p className="lead">Here are some of the projects I've worked on</p>
          </div>
        </div>
      
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title">{project.title}</h5>
                    <span className={getStatusBadge(project.status)}>{project.status}</span>
                  </div>
                  
                  <p className="card-text">{project.description}</p>
                  
                  <div className="mb-3">
                    <h6>Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-light text-dark">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h6>Key Features:</h6>
                    <ul className="list-unstyled">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="small">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="d-flex gap-2">
                      <a href={project.github} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                      {project.demo !== "#" && (
                        <a href={project.demo} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
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
      
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h4>More Projects Coming Soon!</h4>
            <p>I'm constantly working on new projects. Check back regularly or follow me on GitHub for updates.</p>
            <a href="https://github.com/tukangbakmi" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
              View All Repositories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;