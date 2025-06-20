import "./ScheduleSection.css";

function ScheduleSection() {
  const schedule = [
    {
      time: "Telecommunication Engineering",
      title: "Cloud Computing",
      description: "Participants re-register and enjoy light breakfast.",
    },
    {
      time: "Industrial Engineering, ICT Business, Accounting",
      title: "Organizational Behavior",
      description:
        "Presentation by the keynote speaker on future technology trends.",
    },
    {
      time: "Informatics, Information System, Electrical Engineering",
      title: "Artificial Intelligence",
      description: "Discussion with experts from various industries.",
    },
    {
      time: "Visual Communication Design",
      title: "Introduction to Branding",
      description:
        "Hands-on workshop on the latest technology and digital skills.",
    },
    {
      time: "Communication Science",
      title: "International Communication",
      description: "Selected startups present their innovative solutions.",
    },
    {
      time: "Business Administration",
      title: "Business Model",
      description:
        "Opportunity to network with other participants and event closing.",
    },
  ];

  return (
    <section className="schedule-section" id="schedule">
      <h1 className="main-schedule-heading">Schedule</h1>

      <div className="professor-subtitle">
        <h3>VISITING PROFESSOR’S SCHEDULE</h3>
        <div className="professor-image-container">
          <img
            src="/img/professor-schedule.jpg"
            alt="Visiting Professor Schedule"
            className="professor-image"
          />
        </div>
      </div>

      <div className="professor-subtitle">
        <h3>SECOND WEEK OF GLOW SCHEDULE</h3>
        <div className="professor-image-container">
          <img
            src="/img/second-week.jpg"
            alt="Visiting Professor Schedule"
            className="professor-image"
          />
        </div>
      </div>

      <h2 className="schedule-title">GLOW COURSES</h2>

      <div className="schedule-grid">
        {schedule.map((item, index) => (
          <div className="schedule-card" key={index}>
            <div className="schedule-time">{item.time}</div>
            <h3 className="schedule-heading">{item.title}</h3>
            <p className="schedule-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScheduleSection;
