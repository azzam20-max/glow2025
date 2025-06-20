import "./ScheduleSection.css";

function ScheduleSection() {
  const schedule = [
    {
      time: "Telecommunication Engineering",
      title: "Cloud Computing",
      image: "/img/logo-int.png"
    },
    {
      time: "Industrial Engineering, ICT Business, Accounting",
      title: "Organizational Behavior",
      image: "/img/logo-int.png"
    },
    {
      time: "Informatics, Information System, Electrical Engineering",
      title: "Artificial Intelligence",
      image: "/img/logo-int.png"
    },
    {
      time: "Visual Communication Design",
      title: "Introduction to Branding",
      image: "/img/logo-int.png"
    },
    {
      time: "Communication Science",
      title: "International Communication",
      image: "/img/logo-int.png"
    },
    {
      time: "Business Administration",
      title: "Business Model",
      image: "/img/logo-int.png"
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
