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
    excelEmbed: "https://telkomuniversityofficial-my.sharepoint.com/personal/icao_telkomuniversity_ac_id/_layouts/15/Doc.aspx?sourcedoc={82b4b9a5-7b75-40f4-91f3-10f196cca936}&action=embedview&wdAllowInteractivity=False&ActiveCell='Jadwal%20CC%20Prodi%20Telekomunikasi'!I6&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True",
    excelLink: "https://telkomuniversityofficial-my.sharepoint.com/:x:/g/personal/icao_telkomuniversity_ac_id/EaW5tIJ1e_RAkfMQ8ZbMqTYBTEFcXb2NHFwieR0y9SIINw?e=v7GNO0&nav=MTVfezA0NUVFRDZDLTVCNTAtNDE5RC05Qzg2LUMzNDE5MUU2QzYyQn0"
  },
  {
    slug: "organizational-behavior",
    title: "Organizational Behavior",
    department: "Industrial Engineering, ICT Business, Accounting",
    description:
      "Explore how individuals and groups interact within organizations, and how this impacts performance, culture, and leadership effectiveness.",
    image: "/img/hierarchy.png",
    excelEmbed: "https://onedrive.live.com/embed?resid=YOUR_EXCEL_RES_ID_OB&authkey=YOUR_AUTH_KEY&em=2",
    excelLink: "https://onedrive.live.com/view.aspx?resid=YOUR_EXCEL_RES_ID_OB"
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    department: "Informatics, Information System, Electrical Engineering",
    description:
      "Fundamentals of AI including machine learning, deep learning, neural networks, and real-world applications in various fields.",
    image: "/img/artificial-intelligence.png",
    excelEmbed: "https://onedrive.live.com/embed?resid=YOUR_EXCEL_RES_ID_AI&authkey=YOUR_AUTH_KEY&em=2",
    excelLink: "https://onedrive.live.com/view.aspx?resid=YOUR_EXCEL_RES_ID_AI"
  },
  {
    slug: "introduction-to-branding",
    title: "Introduction to Branding",
    department: "Visual Communication Design",
    description:
      "Understand the basics of brand identity, storytelling, visual language, and strategy in marketing communication.",
    image: "/img/package.png",
    excelEmbed: "https://onedrive.live.com/embed?resid=YOUR_EXCEL_RES_ID_BRAND&authkey=YOUR_AUTH_KEY&em=2",
    excelLink: "https://onedrive.live.com/view.aspx?resid=YOUR_EXCEL_RES_ID_BRAND"
  },
  {
    slug: "international-communication",
    title: "International Communication",
    department: "Communication Science",
    description:
      "Focuses on cross-cultural communication, global media systems, and international public relations strategies.",
    image: "/img/podium.png",
    excelEmbed: "https://onedrive.live.com/embed?resid=YOUR_EXCEL_RES_ID_COMM&authkey=YOUR_AUTH_KEY&em=2",
    excelLink: "https://onedrive.live.com/view.aspx?resid=YOUR_EXCEL_RES_ID_COMM"
  },
  {
    slug: "business-model",
    title: "Business Model",
    department: "Business Administration",
    description:
      "Learn to create, analyze, and innovate business models using tools like the Business Model Canvas and case studies.",
    image: "/img/business.png",
    excelEmbed: "https://onedrive.live.com/embed?resid=YOUR_EXCEL_RES_ID_BUSINESS&authkey=YOUR_AUTH_KEY&em=2",
    excelLink: "https://onedrive.live.com/view.aspx?resid=YOUR_EXCEL_RES_ID_BUSINESS"
  }
];

function CourseDetail() {
  const { slug } = useParams();
  const course = courseData.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="course-detail">
        <h2>Course not found</h2>
        <Link to="/" className="back-button">Back to Home</Link>
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

        <div className="course-sheet-preview">
          <h2>Schedule Preview</h2>
          <iframe
            src={course.excelEmbed}
            width="900px"
            height="600px"
            frameBorder="0"
            title="Excel Schedule Preview"
            allowFullScreen
          ></iframe>

          <a
            href={course.excelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="open-sheet-button"
          >
            📄 Open in Excel Web
          </a>
        </div>

        <Link to="/#schedule" className="back-button">⬅ Back to Home</Link>
      </div>
    </div>
  );
}

export default CourseDetail;
