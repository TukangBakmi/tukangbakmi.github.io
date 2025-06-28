import React from "react";
import profilePic from "../assets/images/profile.png";
import resumePdf from "../assets/resume/resume.pdf";

function Home() {
  return (
    <div className="hero-section bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-3 hero-title">
                Albert Ardiansyah
              </h1>
              <h2 className="h4 mb-4 position-relative d-inline-block">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill shadow typing-badge">
                  <i className="fas fa-code me-2"></i>Junior Software Developer
                </span>
              </h2>
              <p className="lead mb-4 hero-description">
                Passionate full-stack developer with experience in web and
                mobile applications. I love turning ideas into reality through
                clean, efficient code and modern technologies.
              </p>
            </div>
            <div className="d-flex gap-3 mb-4 hero-buttons">
              <a href="#/projects" className="btn btn-primary btn-lg pulse-btn">
                <i className="fas fa-briefcase me-2"></i>View My Work
              </a>
              <a
                href="#/contact"
                className="btn btn-outline-secondary btn-lg hover-fill"
              >
                <i className="fas fa-envelope me-2"></i>Get In Touch
              </a>
            </div>
            <div className="d-flex gap-3 hero-buttons">
              <a
                href="https://github.com/tukangbakmi"
                className="btn btn-dark"
                style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github me-2"></i>GitHub
              </a>
              <a
                href="https://linkedin.com/in/albertardiansyah"
                className="btn"
                style={{
                  backgroundColor: "#0077B5",
                  color: "white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin me-2"></i>LinkedIn
              </a>
              <a
                href={resumePdf}
                className="btn btn-success"
                style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download me-2"></i>Resume
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="profile-container">
              <div className="profile-glow"></div>
              <img
                src={profilePic}
                alt="Albert Ardiansyah"
                className="profile-img floating"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div
                className="stat-card text-center p-4 rounded-4 hover-lift position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #F869D5, #5650DE)",
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{
                    background:
                      'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  }}
                ></div>
                <div className="position-relative">
                  <i className="fas fa-code text-white fs-1 mb-3 d-block"></i>
                  <h2 className="text-white fw-bold display-5 mb-2">4+</h2>
                  <p className="text-white-50 mb-0 fw-medium">Projects</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="stat-card text-center p-4 rounded-4 hover-lift position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #28a745, #20c997)",
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{
                    background:
                      'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  }}
                ></div>
                <div className="position-relative">
                  <i className="fas fa-laptop-code text-white fs-1 mb-3 d-block"></i>
                  <h2 className="text-white fw-bold display-5 mb-2">6+</h2>
                  <p className="text-white-50 mb-0 fw-medium">Technologies</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="stat-card text-center p-4 rounded-4 hover-lift position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #17a2b8, #6f42c1)",
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{
                    background:
                      'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Cpath d="M20 20c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z"/%3E%3C/g%3E%3C/svg%3E")',
                  }}
                ></div>
                <div className="position-relative">
                  <i className="fas fa-graduation-cap text-white fs-1 mb-3 d-block"></i>
                  <h2 className="text-white fw-bold display-5 mb-2">2+</h2>
                  <p className="text-white-50 mb-0 fw-medium">Years Learning</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="stat-card text-center p-4 rounded-4 hover-lift position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #dc3545, #fd7e14)",
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{
                    background:
                      'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpolygon points="10,1 4,7 4,13 10,19 16,13 16,7"/%3E%3C/g%3E%3C/svg%3E")',
                  }}
                ></div>
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
      <style>{`
        .hero-content {
          animation: fadeInUp 1s ease-out;
        }

        .hero-title {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: slideInLeft 1s ease-out 0.2s both;
        }

        .typing-badge {
          animation: slideInLeft 1s ease-out 0.4s both;
        }

        .hero-description {
          animation: slideInLeft 1s ease-out 0.6s both;
        }

        .hero-buttons {
          animation: slideInUp 1s ease-out 0.8s both;
        }

        .pulse-btn {
          animation: pulse 2s infinite;
        }

        .hover-fill {
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .hover-fill::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #6c757d;
          transition: left 0.3s ease;
          z-index: -1;
        }

        .hover-fill:hover::before {
          left: 0;
        }

        .hover-fill:hover {
          color: white;
        }

        .profile-container {
          position: relative;
          width: 320px;
          height: 320px;
          margin: 0 auto;
          animation: slideInRight 1s ease-out 0.5s both;
        }

        .profile-img {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          border: 4px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .profile-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 50%;
          top: 0;
          left: 0;
          z-index: 1;
          opacity: 0.3;
          animation: rotate 10s linear infinite;
        }

        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
          }
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
        }
        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
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
