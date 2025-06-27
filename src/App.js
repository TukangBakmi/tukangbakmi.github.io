import React from "react";
import { HashRouter as Router, Route, Routes, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./App.css";

function NavItem({ to, children }) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
    >
      {children}
    </NavLink>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Albert’s Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavItem to="/">Home</NavItem>
              </li>
              <li className="nav-item">
                <NavItem to="/about">About</NavItem>
              </li>
              <li className="nav-item">
                <NavItem to="/projects">Projects</NavItem>
              </li>
              <li className="nav-item">
                <NavItem to="/skills">Skills</NavItem>
              </li>
              <li className="nav-item">
                <NavItem to="/contact">Contact</NavItem>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid p-0 mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
