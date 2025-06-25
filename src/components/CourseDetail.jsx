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
  },
  {
    slug: "organizational-behavior",
    title: "Organizational Behavior",
    department: "Industrial Engineering, ICT Business, Accounting",
    description:
      "Explore how individuals and groups interact within organizations, and how this impacts performance, culture, and leadership effectiveness.",
    image: "/img/hierarchy.png",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    department: "Informatics, Information System, Electrical Engineering",
    description:
      "Fundamentals of AI including machine learning, deep learning, neural networks, and real-world applications in various fields.",
    image: "/img/artificial-intelligence.png",
  },
  {
    slug: "branding",
    title: "Introduction to Branding",
    department: "Visual Communication Design",
    description:
      "Understand the basics of brand identity, storytelling, visual language, and strategy in marketing communication.",
    image: "/img/package.png",
  },
  {
    slug: "international-communication",
    title: "International Communication",
    department: "Communication Science",
    description:
      "Focuses on cross-cultural communication, global media systems, and international public relations strategies.",
    image: "/img/podium.png",
  },
  {
    slug: "business-model",
    title: "Business Model",
    department: "Business Administration",
    description:
      "Learn to create, analyze, and innovate business models using tools like the Business Model Canvas and case studies.",
    image: "/img/business.png",
  },
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
        <Link to="/#schedule" className="back-button">⬅ Back to Home</Link>
      </div>
    </div>
  );
}

export default CourseDetail;
