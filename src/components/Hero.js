import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <header className="hero-header">
        {/* Animasi bendera ASEAN di header */}
        <div className="flag-marquee">
          <div className="flag-wrapper">
            <img src="/flags/id.png" alt="Indonesia" className="flag-item" />
            <img src="/flags/my.png" alt="Malaysia" className="flag-item" />
            <img src="/flags/sg.png" alt="Singapura" className="flag-item" />
            <img src="/flags/th.png" alt="Thailand" className="flag-item" />
            <img src="/flags/ph.png" alt="Filipina" className="flag-item" />
            <img src="/flags/vn.png" alt="Vietnam" className="flag-item" />
          </div>
        </div>
      </header>

      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-text">
            <h1>GLOW 2025</h1>
            <h2>Global Learning Week</h2>
            <p>
              7 - 18 July 2025 - Telkom University
            </p>
          </div>

          <div className="hero-video">
            <iframe
              src="https://www.youtube.com/embed/nLMfotthGcw"
              title="Video Profil"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
