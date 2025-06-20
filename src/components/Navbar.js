import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  // Scrollspy: deteksi section yang sedang tampil
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "schedule", "speakers", "faq", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#hero">
            <img src="/logo.png" alt="Logo" />
          </a>
        </div>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#schedule" onClick={() => setIsOpen(false)}>
              Schedule
            </a>
          </li>
          <li>
            <a href="#speakers" onClick={() => setIsOpen(false)}>
              Speakers
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
