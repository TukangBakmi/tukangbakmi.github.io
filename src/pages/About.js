import React from "react";

function About() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="text-center mb-5">About Me</h2>
          
          <div className="row mb-5">
            <div className="col-md-6">
              <h4>Who I Am</h4>
              <p>
                I'm Albert Ardiansyah, a passionate junior software developer with a strong 
                foundation in full-stack development. I enjoy solving complex problems and 
                creating user-friendly applications that make a difference.
              </p>
              <p>
                My journey in programming started with curiosity about how websites work, 
                and it has evolved into a passion for creating innovative digital solutions.
              </p>
            </div>
            <div className="col-md-6">
              <h4>What I Do</h4>
              <p>
                I specialize in building modern web applications using React, Node.js, 
                and various databases. I'm also interested in mobile development and 
                always eager to learn new technologies.
              </p>
              <p>
                Currently seeking opportunities to contribute to meaningful projects 
                and grow as a professional developer.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h4 className="mb-4">Education & Experience</h4>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Self-Taught Developer</h5>
                  <h6 className="card-subtitle mb-2 text-muted">2023 - Present</h6>
                  <p className="card-text">
                    Continuously learning through online courses, documentation, and hands-on projects. 
                    Focused on modern web development technologies and best practices.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Personal Projects</h5>
                  <h6 className="card-subtitle mb-2 text-muted">2023 - Present</h6>
                  <p className="card-text">
                    Developed various web and mobile applications to practice and showcase 
                    programming skills. Focus on clean code, user experience, and modern development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <h4 className="mb-4">Interests</h4>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <span className="badge bg-primary fs-6">Web Development</span>
                <span className="badge bg-primary fs-6">Mobile Apps</span>
                <span className="badge bg-primary fs-6">UI/UX Design</span>
                <span className="badge bg-primary fs-6">Open Source</span>
                <span className="badge bg-primary fs-6">Problem Solving</span>
                <span className="badge bg-primary fs-6">Continuous Learning</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;