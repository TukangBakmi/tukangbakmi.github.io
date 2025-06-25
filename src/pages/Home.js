import React from "react";
import profilePic from '../assets/images/profile.png';
import resumePdf from '../assets/resume/resume.pdf';

function Home() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">Albert Ardiansyah</h1>
            <h2 className="h4 text-muted mb-4">Junior Software Developer</h2>
            <p className="lead mb-4">
              Passionate full-stack developer with experience in web and mobile applications. 
              I love turning ideas into reality through clean, efficient code and modern technologies.
            </p>
            <div className="d-flex gap-3 mb-4">
              <a href="#/projects" className="btn btn-primary btn-lg">View My Work</a>
              <a href="#/contact" className="btn btn-outline-secondary btn-lg">Get In Touch</a>
            </div>
            <div className="d-flex gap-3">
              <a href="https://github.com/tukangbakmi" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github me-2"></i>GitHub
              </a>
              <a href="https://linkedin.com/in/albertardiansyah" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin me-2"></i>LinkedIn
              </a>
              <a href={resumePdf} className="btn btn-outline-success" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-download me-2"></i>Resume
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="profile-placeholder bg-light rounded-circle mx-auto" 
                style={{width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={profilePic} alt="Albert Ardiansyah" className="rounded-circle" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Section */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <h3 className="text-primary">4+</h3>
                <p className="text-muted">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <h3 className="text-primary">6+</h3>
                <p className="text-muted">Technologies</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <h3 className="text-primary">2+</h3>
                <p className="text-muted">Years Learning</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <h3 className="text-primary">100%</h3>
                <p className="text-muted">Passion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
