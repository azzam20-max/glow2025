import React from "react";

export const Team = (props) => {
  return (
    <div id="team-gallery" className="container-fluid team-wrapper">
      <div className="row align-items-center">
        {/* Kiri: Judul + Deskripsi */}
        <div className="col-md-4">
          <div className="gallery-info">
            <div className="gallery-header">
              <h2 className="gallery-title">Gallery</h2>
              <div className="title-decoration"></div>
            </div>
            <p className="gallery-description">
              During the program, students earn 2-3 credits, participate in
              joint studies and discussions with international lecturers, and
              attend all courses and meetings in a hybrid format using Zoom. The
              program is designed for Telkom University International Class
              students and inbound foreign students, with classes held on the
              8th and 9th floors of the Tokong Nanas Building, Telkom
              University.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">International Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Partner Universities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kanan: Grid Foto */}
        <div className="col-md-8">
          <div className="griddd">
            {[
              "/img/gallery/galeri1.png",
              "/img/gallery/galeri2.png",
              "/img/gallery/galeri3.png",
              "/img/gallery/galeri4.png",
              "/img/gallery/galeri5.png",
              "/img/gallery/galeri6.png",
              "/img/gallery/galeri7.png",
              "/img/gallery/galeri8.png",
              "/img/gallery/galeri9.png",
            ].map((src, index) => (
              <div key={index} className="image-card">
                <img
                  src={src}
                  alt={`Organized ${index + 1}`}
                  className="organized-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
