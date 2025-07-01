import React, { useEffect, useState } from "react";
import { getData } from "country-list";
import "./Hero.css";

function Hero() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-07T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
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

    const { days, hours, minutes, seconds } = timeLeft;

    return (
      <div className="countdown-inline">
        <span className="countdown-item">
          {days} <span className="countdown-label">Days</span>
        </span>
        <span className="countdown-item">
          {hours} <span className="countdown-label">Hours</span>
        </span>
        <span className="countdown-item">
          {minutes} <span className="countdown-label">Minutes</span>
        </span>
        <span className="countdown-item">
          {seconds} <span className="countdown-label">Seconds</span>
        </span>
      </div>
    );
  };

  // Ambil semua negara, hilangkan duplikat & Israel
  const countries = getData();
  const uniqueCountries = Array.from(
    new Map(
      countries
        .filter(
          (c) => c.code !== "IL" && c.code !== "US" // Hapus Israel dan USA
        ) // Hapus Israel
        .map((c) => [c.code.toUpperCase(), c]) // Hindari duplikat
    ).values()
  ).sort((a, b) => a.name.localeCompare(b.name));
  return (
    <section className="hero" id="hero">
      {/* 🔄 Animasi semua flag dunia otomatis */}
      <div className="flag-marquee">
        <div className="flag-wrapper">
          {uniqueCountries.map((country, index) => (
            <img
              key={country.code}
              src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
              alt={country.name}
              className="flag-item"
              style={{ animationDelay: `${index * 0.5}s`, left: "-60px" }}
              loading="lazy"
            />
          ))}
        </div>
      </div>

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
