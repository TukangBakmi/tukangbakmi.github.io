import React from "react";

function Home() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">Albert Ardiansyah</h1>
            <h2 className="h4 text-muted mb-4">Junior Software Developer</h2>
            <p className="lead mb-4">
              Passionate about creating innovative web and mobile applications. 
              Experienced in full-stack development with modern technologies.
            </p>
            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-primary btn-lg">View My Work</a>
              <a href="#contact" className="btn btn-outline-secondary btn-lg">Get In Touch</a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="profile-placeholder bg-light rounded-circle mx-auto" 
                 style={{width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span className="text-muted">Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h3>Technical Skills</h3>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <p className="card-text">React, JavaScript, HTML5, CSS3, Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <p className="card-text">Node.js, Express, Python, RESTful APIs</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Tools & Others</h5>
                <p className="card-text">Git, GitHub, VS Code, MongoDB, MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
