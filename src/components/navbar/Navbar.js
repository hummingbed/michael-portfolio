import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"; // Use this for page routing
import { Link } from "react-scroll"; // Import react-scroll for smooth scrolling
import "./Navbar.css"; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  // Function to handle active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "blog", "about"];
      let currentSection = "#home"; // Default to home section
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = `#${section}`;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <RouterLink className="navbar-brand" to="/">
          My Portfolio
        </RouterLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Page routing using react-router-dom Link */}
            <li className="nav-item">
              <RouterLink
                to="/"
                className={`nav-link ${activeLink === "#home" ? "active" : ""}`}
              >
                Home
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink
                to="/about"
                className={`nav-link ${activeLink === "#about" ? "active" : ""}`}
              >
                About
              </RouterLink>
            </li>

            {/* Scroll navigation using react-scroll Link */}
            <li className="nav-item">
              <Link
                to="blog"
                smooth={true}
                duration={500}
                className={`nav-link ${activeLink === "#blog" ? "active" : ""}`}
              >
                Blog Post
              </Link>
            </li>

            {/* Add more sections if needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
