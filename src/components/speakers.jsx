"use client";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import "./speakers.css";

// Memoized data untuk mencegah re-creation
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
  {
    name: "Dr. Hanny Nasution",
    affiliation: "Monash University, Australia",
    image: "/img/speakers/hanny.png",
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

// Optimized PersonCard component dengan memo
const PersonCard = memo(({ person, index }) => {
  // Simplified animation variants untuk performa lebih baik
  const cardVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 30, // Reduced movement
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4, // Faster animation
          delay: index * 0.05, // Reduced stagger delay
          ease: "easeOut",
        },
      },
    }),
    [index]
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-50px", // Trigger animation earlier
      }}
      className="speaker-card"
    >
      <div className="speaker-card-inner">
        <div className="speaker-image-container">
          <img
            src={person.image || "/placeholder.svg"}
            alt={person.name}
            className="speaker-image"
            loading="lazy" // Lazy loading untuk performa
            decoding="async" // Async decoding
            // Optimized image attributes
            width="120"
            height="120"
          />
        </div>

        <h3 className="speaker-name">{person.name}</h3>
        <p className="speaker-affiliation">{person.affiliation}</p>
      </div>
    </motion.div>
  );
});

PersonCard.displayName = "PersonCard";

// Optimized SpeakerGroup component
const SpeakerGroup = memo(({ title, people, startIndex = 0 }) => (
  <div className="speakers-group">
    <h3 className="group-title">{title}</h3>
    <div className="speakers-grid">
      {people.map((person, index) => (
        <PersonCard
          key={`${title}-${index}`} // More specific key
          person={person}
          index={startIndex + index}
        />
      ))}
    </div>
  </div>
));

SpeakerGroup.displayName = "SpeakerGroup";

// Main component dengan optimisasi
export const Speakers = memo(() => {
  // Container animation dengan reduced complexity
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  return (
    <section id="speakers" className="speakers-section">
      <motion.div
        className="speakers-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Speakers and Collaborators</h2>
          <div className="section-divider"></div>
        </div>

        <div className="speakers-content">
          <SpeakerGroup
            title="International Speakers"
            people={speakers}
            startIndex={0}
          />

          <SpeakerGroup
            title="Co-Lecturers"
            people={collaborators}
            startIndex={speakers.length}
          />
        </div>
      </motion.div>
    </section>
  );
});

Speakers.displayName = "Speakers";

// PropTypes
PersonCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

SpeakerGroup.propTypes = {
  title: PropTypes.string.isRequired,
  people: PropTypes.array.isRequired,
  startIndex: PropTypes.number,
};
