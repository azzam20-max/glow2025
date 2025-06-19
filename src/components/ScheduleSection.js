import React from 'react';
import './ScheduleSection.css';

function ScheduleSection() {
  const schedule = [
    {
      time: 'Telecommunication Engineering',
      title: 'Cloud Computing',
      description: 'Peserta melakukan registrasi ulang dan menikmati sarapan ringan.'
    },
    {
      time: 'Industrial Engineering, ICT Business, Accounting',
      title: 'Organizational Behavior',
      description: 'Pemaparan oleh pembicara utama tentang tren teknologi masa depan.'
    },
    {
      time: 'Informatics, Information System, Electrical Engineering',
      title: 'Artificial Intelligent',
      description: 'Diskusi bersama para ahli dari berbagai industri.'
    },
    {
      time: 'Visual Communication Design',
      title: 'Introduction to Branding',
      description: 'Workshop praktis mengenai teknologi terbaru dan keterampilan digital.'
    },
    {
      time: 'Communication Science',
      title: 'International Communication',
      description: 'Beberapa startup terpilih mempresentasikan solusi inovatif mereka.'
    },
    {
      time: 'Administration Business',
      title: 'Business Model',
      description: 'Kesempatan untuk berjejaring dengan peserta lain dan penutupan acara.'
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
