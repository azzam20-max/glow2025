import React, { useState } from 'react';
import './FaqSection.css';

const faqs = [
  {
    question: "Apa itu acara ini?",
    answer: "Ini adalah acara seminar dan workshop teknologi yang menghadirkan pembicara dari berbagai bidang dan universitas."
  },
  {
    question: "Siapa saja yang bisa ikut?",
    answer: "Acara ini terbuka untuk umum, termasuk mahasiswa, dosen, dan praktisi industri."
  },
  {
    question: "Apakah acara ini berbayar?",
    answer: "Tidak, acara ini gratis. Namun, pendaftaran diperlukan untuk memastikan tempat tersedia."
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer: "Silakan klik tombol 'Daftar Sekarang' di halaman utama dan isi formulir pendaftaran."
  },
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            <div className="faq-answer">
              {activeIndex === index && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
