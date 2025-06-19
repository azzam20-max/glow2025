import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Tutup dropdown saat klik di luar elemen navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="logo"><a href="hero"><img src="/logo.png" alt="Logo" /></a></div>

        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#schedule" onClick={() => setIsOpen(false)}>Schedule</a></li>
          <li><a href="#speakers" onClick={() => setIsOpen(false)}>Speakers</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
