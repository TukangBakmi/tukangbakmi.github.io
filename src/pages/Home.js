import React from "react";
import profilePic from '../assets/images/profile.png';
import resumePdf from '../assets/resume/resume.pdf';

function Home() {
  return (
    <div className="hero-section bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">Albert Ardiansyah</h1>
            <h2 className="h4 mb-4 position-relative d-inline-block">
              <span className="badge bg-primary text-white px-3 py-2 rounded-pill shadow">
                <i className="fas fa-code me-2"></i>Junior Software Developer
              </span>
            </h2>
            <p className="lead mb-4">
              Passionate full-stack developer with experience in web and mobile applications. 
              I love turning ideas into reality through clean, efficient code and modern technologies.
            </p>
            <div className="d-flex gap-3 mb-4">
              <a href="#/projects" className="btn btn-primary btn-lg">View My Work</a>
              <a href="#/contact" className="btn btn-outline-secondary btn-lg">Get In Touch</a>
            </div>
            <div className="d-flex gap-3">
              <a href="https://github.com/tukangbakmi" className="btn btn-dark" style={{boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github me-2"></i>GitHub
              </a>
              <a href="https://linkedin.com/in/albertardiansyah" className="btn" style={{backgroundColor: '#0077B5', color: 'white', boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin me-2"></i>LinkedIn
              </a>
              <a href={resumePdf} className="btn btn-success" style={{boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} target="_blank" rel="noopener noreferrer">
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
      <div className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-card text-center p-4 rounded-4 hover-lift position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #F869D5, #5650DE)', border: '2px solid rgba(255,255,255,0.1)'}}>
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
                <div className="position-relative">
                  <i className="fas fa-code text-white fs-1 mb-3 d-block"></i>
                  <h2 className="text-white fw-bold display-5 mb-2">4+</h2>
                  <p className="text-white-50 mb-0 fw-medium">Projects</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card text-center p-4 rounded-4 hover-lift position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #28a745, #20c997)', border: '2px solid rgba(255,255,255,0.1)'}}>
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
                <div className="position-relative">
                  <i className="fas fa-laptop-code text-white fs-1 mb-3 d-block"></i>
                  <h2 className="text-white fw-bold display-5 mb-2">6+</h2>
                  <p className="text-white-50 mb-0 fw-medium">Technologies</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card text-center p-4 rounded-4 hover-lift position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #17a2b8, #6f42c1)', border: '2px solid rgba(255,255,255,0.1)'}}>
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Cpath d="M20 20c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
                <div className="position-relative">
                  <i className="fas fa-graduation-cap text-white fs-1 mb-3 d-block"></i>
                  <h2 className="text-white fw-bold display-5 mb-2">2+</h2>
                  <p className="text-white-50 mb-0 fw-medium">Years Learning</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card text-center p-4 rounded-4 hover-lift position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #dc3545, #fd7e14)', border: '2px solid rgba(255,255,255,0.1)'}}>
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{background: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpolygon points="10,1 4,7 4,13 10,19 16,13 16,7"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
                <div className="position-relative">
                  <i className="fas fa-heart text-white fs-1 mb-3 d-block"></i>
                  <h2 className="text-white fw-bold display-5 mb-2">100%</h2>
                  <p className="text-white-50 mb-0 fw-medium">Passion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .profile-container {
          width: 300px;
          height: 300px;
          margin: 0 auto;
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 2;
        }
        .profile-glow {
          width: 320px;
          height: 320px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          top: -10px;
          left: -10px;
          z-index: 1;
          opacity: 0.3;
        }
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }
        .stat-card:hover::before {
          left: 100%;
        }
        .text-white-50 {
          transition: color 0.3s ease;
        }
        .stat-card:hover .text-white-50 {
          color: white !important;
        }
      `}</style>
    </div>
  );
}

export default Home;
