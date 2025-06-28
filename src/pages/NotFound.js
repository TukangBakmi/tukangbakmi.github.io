import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="section dark-theme">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="error-content">
              <h1 className="display-1 fw-bold mb-4" style={{color: '#00c6ff'}}>404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="lead mb-4">
                Sorry, the page you're looking for doesn't exist or has been moved.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/" className="btn btn-primary btn-lg">
                  <i className="fas fa-home me-2"></i>Go Home
                </Link>
                <Link to="/projects" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-briefcase me-2"></i>View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;