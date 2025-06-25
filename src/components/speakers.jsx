"use client";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import "./speakers.css";

const speakers = [
  {
    name: "Prof. Yoshihiro Mizoguchi",
    affiliation: "Kyushu University, Japan",
    image: "/img/speakers/yoshihiro.png",
  },
  {
    name: "Assoc. Prof. Dr. Sheela Bhargava",
    affiliation: "Lal Bahadur Shastri Institute of Management, India",
    image: "/img/speakers/sheela.png",
  },
  {
    name: "Prof. Kenneth Chi Ho Kim",
    affiliation: "Hanyang University ERICA, South Korea",
    image: "/img/speakers/kenneth.png",
  },
  {
    name: "Dr. Low Jing Hong",
    affiliation: "Multimedia University (MMU), Malaysia",
    image: "/img/speakers/lowjing.png",
  },
  {
    name: "Ts. Puan Rajina Binti M A Raj Mohamed",
    affiliation: "Universiti Tenaga Nasional (UNITEN), Malaysia",
    image: "/img/speakers/puan.png",
  },
  {
    name: "Dr. Mohd Nur Ruzainy Bin Alwi",
    affiliation: "Universiti Tenaga Nasional (UNITEN), Malaysia",
    image: "/img/speakers/mohd.png",
  },
];

const collaborators = [
  {
    name: "Suryo Adhi Wibowo, S.T., M.T., Ph.D.",
    affiliation: "Co-Lecturers of GLOW, Telecommunication Engineering",
    image: "/img/speakers/suryo.c.png",
  },
  {
    name: "Taufik Nur Adi Ph.D.",
    affiliation: "Co-Lecturers of GLOW, Information System",
    image: "/img/speakers/taufik.c.png",
  },
  {
    name: "Dr. Edward Ferdian, S.T., B.Sc., M.Sc.",
    affiliation: "Co-Lecturers of GLOW, Informatics",
    image: "/img/speakers/edward.c.png",
  },
  {
    name: "Heru Syah Putra, S.Kom., M.Sc.Eng.",
    affiliation: "Co-Lecturers of GLOW, Electrical Engineering",
    image: "/img/speakers/heru.c.png",
  },
  {
    name: "Dr. Fida Nirmala Nugraha, S. Psi., M.Psi.",
    affiliation: "Co-Lecturers of GLOW, Industrial Engineering",
    image: "/img/speakers/fida.c.png",
  },
  {
    name: "Dr. Fetty Poerwita Sary, S.S., M.Pd.",
    affiliation: "Co-Lecturers of GLOW, ICT Business",
    image: "/img/speakers/fetty.c.png",
  },
  {
    name: "Dwi Urip Wardoyo, S.E., M.M.Si",
    affiliation: "Co-Lecturers of GLOW, Accounting",
    image: "/img/speakers/dwi.c.png",
  },
  {
    name: "Dr. Maria Josef Retno Budi Wahyuni, M.Ds",
    affiliation: "Co-Lecturers of GLOW, Visual Communication Design",
    image: "/img/speakers/maria.c.png",
  },
  {
    name: "Diah Agung Esfandari, B.A., M.Si.",
    affiliation: "Co-Lecturers of GLOW, Communication Science",
    image: "/img/speakers/diah.c.png",
  },
  {
    name: "Ihsan Hadiansah, SE, BIBM, MSM.",
    affiliation: "Co-Lecturers of GLOW, Business Administration",
    image: "/img/speakers/ihsan.c.png",
  },
  {
    name: "Fikri Mohamad Rizaldi, B.B.A., M.A.B.",
    affiliation: "Co-Lecturers of GLOW, Business Administration",
    image: "/img/speakers/fikri.png",
  },
  {
    name: "Nur Ichsan Utama, S.T., M.T., Ph.D.",
    affiliation: "Co-Lecturers of GLOW, Information System",
    image: "/img/speakers/nur.png",
  },
  {
    name: "Syfa Nur Lathifah, S.Kom, M.T.",
    affiliation: "Co-Lecturers of GLOW, Information System",
    image: "/img/speakers/syfa.png",
  },
  {
    name: " Iqbal Yulizar Mukti, S.Si., M.T., Ph.D.",
    affiliation: "Co-Lecturers of GLOW, Information System",
    image: "/img/speakers/iqbal.png",
  },
];

const PersonCard = ({ person, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="speaker-card"
    >
      <div className="speaker-card-inner">
        <div className="speaker-image-container">
          <img
            src={person.image || "/placeholder.svg"}
            alt={person.name}
            className="speaker-image"
          />
        </div>

        <h3 className="speaker-name">{person.name}</h3>
        <p className="speaker-affiliation">{person.affiliation}</p>
      </div>
    </motion.div>
  );
};

export const Speakers = () => {
  return (
    <section id="speakers" className="speakers-section">
      <div className="speakers-container">
        <div className="section-header">
          <h2>Speakers and Collaborators</h2>
          <div className="section-divider"></div>
        </div>

        <div className="speakers-content">
          <div className="speakers-group">
            <h3 className="group-title">International Speakers</h3>
            <div className="speakers-grid">
              {speakers.map((speaker, index) => (
                <PersonCard key={index} person={speaker} index={index} />
              ))}
            </div>
          </div>

          <div className="speakers-group">
            <h3 className="group-title">Local Collaborators</h3>
            <div className="speakers-grid">
              {collaborators.map((collaborator, index) => (
                <PersonCard key={index} person={collaborator} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
PersonCard.propTypes = {
  person: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
};
