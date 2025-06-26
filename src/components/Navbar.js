import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const progressBarRef = useRef(null);

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

  // Scrollspy dinamis + progress bar
  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${scrollPercent}%`;
      }

      // Scrollspy
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
        if (href.toLowerCase() === current.toLowerCase()) {
          li.classList.add("active");
        } else {
          li.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
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

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Progress bar di bawah navbar menu */}
        <div className="scroll-progress-bar" ref={progressBarRef}></div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {[
            "about",
            "speakers",
            "schedule",
            "gallery",
            "our team",
            "contact",
          ].map((id) => (
            <li key={id}>
              <a
                href={`/#${id.replace(/\s/g, "")}`}
                onClick={(e) => {
                  setIsOpen(false);
                  // Tambah class active secara manual saat klik
                  document
                    .querySelectorAll(".nav-links li")
                    .forEach((li) => li.classList.remove("active"));
                  e.currentTarget.parentElement.classList.add("active");
                }}
              >
                {id === "our team"
                  ? "Our Team"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
