import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Tutup menu jika klik di luar navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scrollspy dinamis
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-links li");

      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          current = section.id;
        }
      });

      navLinks.forEach((li) => {
        const link = li.querySelector("a");
        const href = link.getAttribute("href").substring(1); // remove #
        if (href === current) {
          li.classList.add("active");
        } else {
          li.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="logo">
          <a href="/#hero">
            <img src="/logo.png" alt="Logo" />
          </a>
        </div>

        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {["about", "schedule", "speakers", "gallery", "faq", "contact"].map((id) => (
            <li key={id}>
              <a href={`/#${id}`} onClick={() => setIsOpen(false)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
