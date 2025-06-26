import { useState, useCallback, useMemo, memo } from "react";
import "./Gallery.css";

// Memoized image data to prevent recreation
const GALLERY_IMAGES = [
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

// Memoized stats data
const STATS_DATA = [
  { number: "1500+", label: "International Students" },
  { number: "30+", label: "Partner Universities" },
  { number: "10+", label: "Countries" },
  { number: "70+", label: "Visiting Professors" },
];

// Optimized StatItem component
const StatItem = memo(({ stat, index }) => (
  <div className="stat-item" style={{ "--delay": `${index * 0.1}s` }}>
    <span className="stat-number">{stat.number}</span>
    <span className="stat-label">{stat.label}</span>
  </div>
));

StatItem.displayName = "StatItem";

// Optimized ImageCard component
const ImageCard = memo(({ src, index, onImageClick }) => {
  const handleClick = useCallback(() => {
    onImageClick(src);
  }, [src, onImageClick]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onImageClick(src);
      }
    },
    [src, onImageClick]
  );

  return (
    <div
      className="image-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View gallery image ${index + 1}`}
    >
      <img
        src={src}
        alt={`GLOW activity ${index + 1}`}
        className="gallery-image"
        loading="lazy"
        decoding="async"
        width="200"
        height="150"
      />
      <div className="image-overlay">
        <span className="image-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
});

ImageCard.displayName = "ImageCard";

// Optimized Lightbox component
const Lightbox = memo(({ image, onClose }) => {
  const handleClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Add event listener for escape key
  useState(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="lightbox"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="dialog"
      aria-label="Image preview"
    >
      <img
        src={image}
        alt="Gallery preview"
        className="lightbox-img"
        loading="eager"
      />
    </div>
  );
});

Lightbox.displayName = "Lightbox";

// Main Gallery component
export const Gallery = memo(() => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Memoized handlers for better performance
  const handleImageClick = useCallback((imageSrc) => {
    setSelectedImage(imageSrc);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Memoized components to prevent unnecessary re-renders
  const statsItems = useMemo(
    () =>
      STATS_DATA.map((stat, index) => (
        <StatItem key={stat.label} stat={stat} index={index} />
      )),
    []
  );

  const imageCards = useMemo(
    () =>
      GALLERY_IMAGES.map((src, index) => (
        <ImageCard
          key={src}
          src={src}
          index={index}
          onImageClick={handleImageClick}
        />
      )),
    [handleImageClick]
  );

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

              <div className="stats-grid">{statsItems}</div>
            </div>

            {/* Images Grid */}
            <div className="gallery-images">
              <div className="images-grid">{imageCards}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimized Lightbox */}
      <Lightbox image={selectedImage} onClose={handleCloseLightbox} />
    </>
  );
});

Gallery.displayName = "Gallery";
