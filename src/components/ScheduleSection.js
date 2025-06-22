import "./ScheduleSection.css";

function ScheduleSection() {
  const schedule = [
    {
      time: "Cloud Computing",
      title: "Telecommunication Engineering",
      image: "/img/cloud-server.png"
    },
    {
      time: "Organizational Behavior",
      title: "Industrial Engineering, ICT Business, Accounting",
      image: "/img/hierarchy.png"
    },
    {
      time: "Artificial Intelligence",
      title: "Informatics, Information System, Electrical Engineering",
      image: "/img/artificial-intelligence.png"
    },
    {
      time: "Introduction to Branding",
      title: "Visual Communication Design",
      image: "/img/package.png"
    },
    {
      time: "International Communication",
      title: "Communication Science",
      image: "/img/podium.png"
    },
    {
      time: "Business Model",
      title: "Business Administration",
      image: "/img/business.png"
    }
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
            alt="Second Week Schedule"
            className="professor-image"
          />
        </div>
      </div>

      <h2 className="schedule-title">GLOW COURSES</h2>

      <div className="schedule-grid">
        {schedule.map((item, index) => (
          <div className="schedule-card" key={index}>
            <div className="schedule-logo-container">
              <img
                src={item.image}
                alt={item.title}
                className="schedule-logo"
              />
            </div>
            <div className="schedule-time">{item.time}</div>
            <h3 className="schedule-heading">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScheduleSection;
