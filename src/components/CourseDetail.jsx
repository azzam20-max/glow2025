// components/CourseDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CourseDetail.css";

const courseData = [
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    department: "Telecommunication Engineering",
    description:
      "This course introduces cloud infrastructure, services (IaaS, PaaS, SaaS), virtualization, and practical implementations such as AWS, Azure, and GCP.",
    image: "/img/cloud-server.png",
    schedules: [
      {
        label: "Telecommunication Engineering",
        excelEmbed:
          "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20CC%20Prodi%20Telekomunikasi'!I6&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True",
        excelLink:
          "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=v7GNO0"
      }
    ]
  },
  {
    slug: "organizational-behavior",
    title: "Organizational Behavior",
    department: "Industrial Engineering, ICT Business, Accounting",
    description:
      "Explore how individuals and groups interact within organizations, and how this impacts performance, culture, and leadership effectiveness.",
    image: "/img/hierarchy.png",
    schedules: [
      {
        label: "Industrial Engineering",
        excelEmbed: "https://onedrive.live.com/embed?resid=SHEET_ID1&em=2",
        excelLink: "https://onedrive.live.com/view.aspx?resid=SHEET_ID1"
      },
      {
        label: "ICT Business",
        excelEmbed: "https://onedrive.live.com/embed?resid=SHEET_ID2&em=2",
        excelLink: "https://onedrive.live.com/view.aspx?resid=SHEET_ID2"
      },
      {
        label: "Accounting",
        excelEmbed: "https://onedrive.live.com/embed?resid=SHEET_ID3&em=2",
        excelLink: "https://onedrive.live.com/view.aspx?resid=SHEET_ID3"
      }
    ]
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    department: "Informatics, Information System, Electrical Engineering",
    description:
      "Explore how individuals and groups interact within organizations, and how this impacts performance, culture, and leadership effectiveness.",
    image: "/img/hierarchy.png",
    schedules: [
      {
        label: "Informatics",
        excelEmbed: "https://onedrive.live.com/embed?resid=SHEET_ID1&em=2",
        excelLink: "https://onedrive.live.com/view.aspx?resid=SHEET_ID1"
      },
      {
        label: "Information System",
        excelEmbed: "https://onedrive.live.com/embed?resid=SHEET_ID2&em=2",
        excelLink: "https://onedrive.live.com/view.aspx?resid=SHEET_ID2"
      },
      {
        label: "Electrical Engineering",
        excelEmbed: "https://onedrive.live.com/embed?resid=SHEET_ID3&em=2",
        excelLink: "https://onedrive.live.com/view.aspx?resid=SHEET_ID3"
      }
    ]
  }
  // Tambahkan course lainnya di sini jika perlu.
];

function CourseDetail() {
  const { slug } = useParams();
  const course = courseData.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="course-detail">
        <h2>Course not found</h2>
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="course-detail">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-info">
        <h1>{course.title}</h1>
        <h3>{course.department}</h3>
        <p>{course.description}</p>

        {course.schedules.map((schedule, index) => (
          <div className="course-sheet-preview" key={index}>
            {course.schedules.length > 1 && (
              <h2>Schedule for {schedule.label}</h2>
            )}

            <iframe
              src={schedule.excelEmbed}
              width="100%"
              height="600px"
              frameBorder="0"
              title={`Excel Preview ${schedule.label}`}
              allowFullScreen
            ></iframe>

            <a
              href={schedule.excelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="open-sheet-button"
            >
              📄 Open in Excel Web ({schedule.label})
            </a>
          </div>
        ))}

        <Link to="/#schedule" className="back-button">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default CourseDetail;
