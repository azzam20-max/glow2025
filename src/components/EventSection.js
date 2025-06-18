import React from 'react';
import './EventSection.css';

function EventSection() {
  return (
    <section className="event-section">
      <div className="event-container">
        <div className="event-text">
          <h2>Tentang Acara</h2>
          <p>
            Acara ini merupakan ajang berkumpulnya para profesional, pelajar, dan penggiat teknologi dari berbagai bidang untuk saling berbagi wawasan, inspirasi, dan kolaborasi. 
            Dilengkapi dengan seminar, workshop, dan pameran produk inovatif, acara ini dirancang untuk membangun ekosistem teknologi yang lebih kuat dan inklusif.
          </p>
          <p>
            Jangan lewatkan kesempatan untuk terhubung dengan para ahli industri, mengikuti sesi edukatif, dan mengeksplorasi ide-ide baru yang akan membentuk masa depan.
          </p>
        </div>

        <div className="event-image">
          <img src="/img/event.png" alt="Ilustrasi Acara" />
        </div>
      </div>
    </section>
  );
}

export default EventSection;
