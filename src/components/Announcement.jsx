import React from 'react';
import './Announcement.css';

function Announcement() {
  return (
    <section className="announcement-section" id="announcement">
      <div className="announcement-container">
        <h2>📘 Program Book</h2>
        <p className="announcement-text">
          Explore the complete program schedule, speaker profiles, and all essential information for GLOW 2025.
        </p>

        <div className="canva-preview">
          {/* Ganti link src dengan link embed Canva kamu */}
          <iframe
            title="Program Book"
            src="https://www.canva.com/design/DAGpYLwbOlI/a-jJ5H7mYker4hNOQqBcNQ/edit/" 
            width="100%"
            height="600"
            allow="fullscreen"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Announcement;
