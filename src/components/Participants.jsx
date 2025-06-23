import React from "react";
import "./Participants.css";

function Participants() {
  return (
    <section className="participants-section">
      <div className="participants-container">
        <h2 className="participants-heading">List of Participants</h2>
        <p className="participants-subtext">
          Below is the live participant list embedded from Google Sheets.
        </p>

        <div className="spreadsheet-wrapper">
          <iframe
            src="https://docs.google.com/spreadsheets/d/1uwhJ-vsKm1hUZv6llNVXdl6mILl3y04g/edit?usp=sharing&ouid=105908272783749210970&rtpof=true&sd=true/pubhtml?widget=true&headers=false"
            title="Participants Spreadsheet"
            width="100%"
            height="900"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="spreadsheet-button">
          <a
            href="https://docs.google.com/spreadsheets/d/1uwhJ-vsKm1hUZv6llNVXdl6mILl3y04g/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="open-btn"
          >
            Open Spreadsheet
          </a>
        </div>
      </div>
    </section>
  );
}

export default Participants;
