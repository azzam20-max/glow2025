import React from 'react';
import './Announcement.css';

function Announcement() {
  return (
    <section className="announcement-section" id="announcement">
      <div className="announcement-container">
        <h2>📢 Announcement</h2>
        <p className="announcement-text">
          Registration for GLOW 2025 is now open! Don’t miss the chance to join the biggest international learning week at Telkom University. Deadline: <strong>30 June 2025</strong>.
        </p>
        <a href="#register" className="announcement-button">Register Now</a>
      </div>
    </section>
  );
}

export default Announcement;
