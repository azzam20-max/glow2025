import React from 'react';
import './Announcement.css';

function Announcement() {
  return (
    <section className="announcement-section" id="announcement">
      <div className="announcement-container">
        <h2>📘 Program Book</h2>
        <p className="announcement-text">
          Explore the full schedule, speakers, and essential information of GLOW 2025 in our official program book.
        </p>

        <div className="announcement-warning">
          <strong>⚠️ Attention:</strong> All participants are <u>required</u> to read the Program Book before attending the event.
        </div>

        <div className="announcement-preview">
          <iframe
            title="Program Book Canva"
            src="https://www.canva.com/design/DAGpYLwbOlI/vydAXYOCXGZCyhPzrdM3OA/view?embed"
            width="100%"
            height="480"
            allowFullScreen
            style={{ border: 'none', borderRadius: '8px', marginTop: '20px' }}
          ></iframe>
        </div>

        <a
          href="https://www.canva.com/design/DAGpYLwbOlI/a-jJ5H7mYker4hNOQqBcNQ/edit?utm_content=DAGpYLwbOlI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-button"
        >
          📖 Download Program Book
        </a>
      </div>
    </section>
  );
}

export default Announcement;
