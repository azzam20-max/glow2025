import { useState } from "react";
import "./Gallery.css";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    "/img/gallery/galeri1.1.png",
    "/img/gallery/galeri2.1.png",
    "/img/gallery/galeri3.1.png",
    "/img/gallery/galeri4.1.png",
    "/img/gallery/galeri5.1.png",
    "/img/gallery/galeri6.1.png",
    "/img/gallery/galeri7.1.png",
    "/img/gallery/galeri8.1.png",
    "/img/gallery/galeri9.1.png",
    "/img/gallery/galeri10.png",
  ];

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-wrapper">
            {/* Info Section */}
            <div className="gallery-info">
              <header className="gallery-header">
                <h2 className="gallery-title">Gallery</h2>
                <div className="title-decoration"></div>
              </header>

              <p className="gallery-description">
                During the program, students earn 2–3 credits, participate in
                joint studies and discussions with international lecturers, and
                attend all courses and meetings in a hybrid format using Zoom.
                The program is designed for Telkom University International
                Class students and inbound foreign students, with classes held
                on the 8th and 9th floors of the Tokong Nanas Building, Telkom
                University.
              </p>

              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">1500+</span>
                  <span className="stat-label">International Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Partner Universities</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Countries</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">70+</span>
                  <span className="stat-label">Visiting Professors</span>
                </div>
              </div>
            </div>

            {/* Images Grid */}
            <div className="gallery-images">
              <div className="images-grid">
                {galleryImages.map((src, index) => (
                  <div key={index} className="image-card">
                    <img
                      src={src}
                      alt={`GLOW activity ${index + 1}`}
                      className="gallery-image"
                      loading="lazy"
                      onClick={() => setSelectedImage(src)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <span className="image-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Zoom */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Zoomed" className="lightbox-img" />
        </div>
      )}
    </>
  );
};
