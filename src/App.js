import React, { useEffect, useRef, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
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
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  const underlineRef = useRef(null);
  const navRef = useRef(null);
  const navbarRef = useRef(null);
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // wait until component is mounted and refs are available
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const activeLink = navRef.current.querySelector(".nav-link.active");
    const underline = underlineRef.current;

    if (activeLink && underline) {
      const { offsetLeft, offsetWidth } = activeLink;

      const wideWidth = offsetWidth * 1.2;
      const wideLeft = offsetLeft + (offsetWidth - wideWidth) / 2;

      const finalWidth = offsetWidth * 0.3;
      const finalLeft = offsetLeft + (offsetWidth - finalWidth) / 2;

      // Step 1: Start transition to wide and moving
      underline.style.transition = "all 0.4s ease-in-out";
      underline.style.opacity = 1;
      underline.style.width = `${wideWidth}px`;
      underline.style.left = `${wideLeft}px`;

      // Step 2: After the move completes, shrink to final position
      setTimeout(() => {
        underline.style.transition = "all 0.3s ease-in-out";
        underline.style.width = `${finalWidth}px`;
        underline.style.left = `${finalLeft}px`;
      }, 400); // Wait for the slide to finish
    } else if (underline) {
      underline.style.opacity = 0;
    }

    // Close mobile navbar on route change
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname, mounted]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Albert’s Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto position-relative" ref={navRef}>
            <span className="nav-underline" ref={underlineRef}></span>
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
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300 && location.pathname !== '/') {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}

function BackToTopWrapper() {
  return <BackToTop />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <BackToTop />

      <style jsx="true">{`
        .nav-underline {
          position: absolute;
          bottom: 0;
          height: 3px;
          background: #6190e8;
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
        
        @media (max-width: 991px) {
          .nav-underline {
            display: none;
          }
          
          .navbar-nav {
            text-align: center;
            margin-top: 1rem;
          }
          
          .nav-link {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          
          .nav-link:last-child {
            border-bottom: none;
          }
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
