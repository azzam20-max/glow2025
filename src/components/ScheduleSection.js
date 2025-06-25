import "./ScheduleSection.css";
import { Link } from "react-router-dom";

function ScheduleSection() {
  const schedule = [
    {
      time: "Cloud Computing",
      title: "Telecommunication Engineering",
      image: "/img/cloud-server.png",
      slug: "cloud-computing",
    },
    {
      time: "Organizational Behavior",
      title: "Industrial Engineering, ICT Business, Accounting",
      image: "/img/hierarchy.png",
      slug: "organizational-behavior",
    },
    {
      time: "Artificial Intelligence",
      title: "Informatics, Information System, Electrical Engineering",
      image: "/img/artificial-intelligence.png",
      slug: "artificial-intelligence",
    },
    {
      time: "Introduction to Branding",
      title: "Visual Communication Design",
      image: "/img/package.png",
      slug: "introduction-to-branding",
    },
    {
      time: "International Communication",
      title: "Communication Science",
      image: "/img/podium.png",
      slug: "international-communication",
    },
    {
      time: "Business Model",
      title: "Business Administration",
      image: "/img/business.png",
      slug: "business-model",
    },
  ];

  return (
    <section className="schedule-section" id="schedule">
      <h1 className="main-schedule-heading">Schedule</h1>
      <h2 className="schedule-title">GLOW COURSES & DETAIL'S</h2>

      <div className="schedule-grid">
        {schedule.map((item, index) => (
          <Link
            to={`/course/${item.slug}`}
            key={index}
            className="schedule-card"
          >
            <div className="schedule-logo-container">
              <img
                src={item.image}
                alt={item.title}
                className="schedule-logo"
              />
            </div>
            <div className="schedule-time">{item.time}</div>
            <h3 className="schedule-heading">{item.title}</h3>
          </Link>
        ))}
      </div>
      <h1>________________________________</h1>
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
    </section>
  );
}

export default ScheduleSection;
