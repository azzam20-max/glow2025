import { useState } from "react";
import "./FaqSection.css";

const faqs = [
  {
    question: "What is this event about?",
    answer:
      "This is a seminar and technology workshop event featuring speakers from various fields and universities.",
  },
  {
    question: "Who can participate?",
    answer:
      "This event is open to the public, including students, lecturers, and industry professionals.",
  },
  {
    question: "Is there a fee to attend?",
    answer:
      "No, the event is free. However, registration is required to ensure a spot is available.",
  },
  {
    question: "How do I register?",
    answer:
      "Please click the 'Register Now' button on the homepage and fill out the registration form.",
  },
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
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
