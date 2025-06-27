import React, { useEffect, useRef, useState } from "react";
import { HashRouter as Router, Route, Routes, NavLink, Link, useLocation } from "react-router-dom";
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

function Navbar() {
  const underlineRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // wait until component is mounted and refs are available
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const activeLink = navRef.current.querySelector(".nav-link.active");
    const underline = underlineRef.current;

    if (activeLink && underline) {
      const { offsetLeft, offsetWidth } = activeLink;
      const underlineWidth = offsetWidth * 0.3;
      underline.style.left = `${offsetLeft + (offsetWidth - underlineWidth) / 2}px`;
      underline.style.width = `${underlineWidth}px`;
      underline.style.opacity = 1;
    } else if (underline) {
      underline.style.opacity = 0;
    }
  }, [location.pathname, mounted]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Albert’s Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto position-relative" ref={navRef}>
            <span className="nav-underline" ref={underlineRef}></span>
            <li className="nav-item"><NavItem to="/">Home</NavItem></li>
            <li className="nav-item"><NavItem to="/about">About</NavItem></li>
            <li className="nav-item"><NavItem to="/projects">Projects</NavItem></li>
            <li className="nav-item"><NavItem to="/skills">Skills</NavItem></li>
            <li className="nav-item"><NavItem to="/contact">Contact</NavItem></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <style jsx="true">{`
        .nav-underline {
          position: absolute;
          bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, #004292, #6190E8);
          border-radius: 2px;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .nav-link {
          padding: 0.5rem 1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #00c6ff;
        }

        .nav-link.active {
          color: #00c6ff;
        }
      `}</style>

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
