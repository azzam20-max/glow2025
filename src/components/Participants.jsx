import React from "react";
import "./Participants.css";

function Participants() {
  return (
    <section className="participants-section">
      <div className="participants-container">
        <h2 className="participants-heading">List of Participants</h2>
        <p className="participants-subtext">
          Open the spreadsheet below to view the list of participants for the event.
        </p>

        {/* <div className="spreadsheet-wrapper">
          <iframe
            src="https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EVbtriVsiLhDlj9kcjCUyZQBUj4oYt7i7ndYdlQ5qxNTsw?e=8yZ3q6"
            title="Participants Spreadsheet"
            width="100%"
            height="900"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div> */}

        <div className="spreadsheet-button">
          <a
            href="https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EVbtriVsiLhDlj9kcjCUyZQBUj4oYt7i7ndYdlQ5qxNTsw?e=8yZ3q6"
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
