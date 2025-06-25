import "./EventSection.css";

function EventSection() {
  return (
    <section className="event-section" id="about">
      <div className="event-container">
        <div className="event-text">
          <h2>About Events</h2>

          <p>
            Global Learning Week (GLOW) is a two-week <strong>credit earning program</strong>. During the program, most departments offer various courses aimed at leveraging students' academic competence. Students are exposed to the recent technology innovation and its effect on society.
          </p>

          <p>
            Global learning week is open for <em>International Class Students</em>. This year Telkom University invited 6 Professors from:
          </p>

          <ul>
            <li>Kyushu University (Japan)</li>
            <li>Hanyang University ERICA (South Korea)</li>
            <li>Universiti Tenaga Nasional (Malaysia)</li>
          </ul>
        </div>

        <div className="event-image">
          <img src="/img/event.png" alt="Ilustrasi Acara" />
        </div>
      </div>

      <div className="event-extra-image">
        <img src="/img/event-extra.jpg" alt="Glow program summary" />
      </div>

      <div className="event-extra-image">
        <img src="/img/activities-of-glow.jpg" alt="Student activities of glow" />
      </div>
    </section>
  );
}

export default EventSection;
