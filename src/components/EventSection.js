
import "./EventSection.css";

function EventSection() {
  return (
    <section className="event-section" id="about">
      <div className="event-container">
        <div className="event-text">
          <h2>About Events</h2>
          <p>
            Global Learning Week (GloW) is a two-week credit earning program.
            During the program, most departments offer various courses aimed at
            leveraging students' academic competence. Students are exposed to
            the recent technology innovation and its effect on the society,
            techno-preneur and scientific academic insights; views about inter
            fields of study, issue analysis and trends developing in society.
            These academic activities are designed to enrich the international
            academic atmosphere at Telkom University, enhance the quality of
            teaching and learning, and widen the international mutual
            collaborative work among experts.
          </p>
          <p>Don't miss the opportunity.</p>
        </div>

        <div className="event-image">
          <img src="/img/event.png" alt="Ilustrasi Acara" />
        </div>
      </div>

      {/* Gambar tambahan di bawah */}
      <div className="event-extra-image">
        <img src="/img/event-extra.jpg" alt="Glow program summary" />
      </div>

      <div className="event-extra-image">
        <img
          src="/img/activities-of-glow.jpg"
          alt="Student activities of glow"
        />
      </div>
    </section>
  );
}

export default EventSection;
