import { FaBell } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { getData } from "country-list";
import { useNavigate } from "react-router-dom";
import "./Hero.css";



function Hero() {
  const navigate = useNavigate();

  // Countdown
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-07T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderCountdown = () => {
    if (!timeLeft) return <p className="countdown">It's time!</p>;

    return (
      <div className="countdown-inline">
        {Object.entries(timeLeft).map(([label, value]) => (
          <span className="countdown-item" key={label}>
            {value} <span className="countdown-label">{label}</span>
          </span>
        ))}
      </div>
    );
  };

  const countries = getData()
    .filter((c) => c.code !== "IL" && c.code !== "US")
    .reduce((acc, c) => {
      acc[c.code] = c;
      return acc;
    }, {});
  const uniqueCountries = Object.values(countries).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <section className="hero" id="hero">
      {/* 🔄 Icon Notifikasi */}
      <button
        className="notification-button-floating"
        onClick={() => navigate("/pengumuman")}
        title="View Announcement"
      >
        <FaBell />
        <span className="notification-pulse"></span>
      </button>
      <p className="notification-text">Announcement</p>


      {/* 🔄 Bendera */}
      <div className="flag-marquee">
        <div className="flag-wrapper">
          {uniqueCountries.map((country, index) => (
            <img
              key={country.code}
              src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
              alt={country.name}
              className="flag-item"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* 🔄 Isi Hero */}
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-title-block">
              {renderCountdown()}
              <h1>GLOW 2025</h1>
              <h2>Global Learning Week</h2>
              <p>7 - 18 July 2025 - Telkom University</p>
              <a href="/participants" className="hero-button">
                List of Participants
              </a>
            </div>
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
