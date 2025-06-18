import React from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      style={{
        backgroundColor: "#0066cc",
        padding: "100px 2rem 50px 2rem", // top 100px, kanan kiri 2rem, bawah 50px
        scrollMarginTop: "100px",
      }}
    >
      <div
        className="container"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <div className="section-title text-center">
          <motion.h2
            style={{ color: "#fff" }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Speakers and Collaborators
          </motion.h2>
        </div>

        {/* LINE 1: 6 Speakers */}
        <motion.div
          className="row"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="/img/speakers/yoshihiro.png"
                  alt="Speaker 1"
                  className="img-responsive"
                />
              </div>
              <div className="testimonial-meta">Prof. Yoshihiro Mizoguchi</div>
              <p className="testimonial-desc">Kyushu University, Japan</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="/img/speakers/sheela.png"
                  alt="Speaker 2"
                  className="img-responsive"
                />
              </div>
              <div className="testimonial-meta">
                Assoc. Prof. Dr. Sheela Bhargava
              </div>
              <p className="testimonial-desc">
                Lal Bahadur Shastri Institute of Management, India
              </p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="/img/speakers/kenneth.png"
                  alt="Speaker 3"
                  className="img-responsive"
                />
              </div>
              <div className="testimonial-meta">Prof. Kenneth Chi Ho Kim</div>
              <p className="testimonial-desc">
                Hanyang University ERICA, South Korea
              </p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="/img/speakers/lowjing.png"
                  alt="Speaker 4"
                  className="img-responsive"
                />
              </div>
              <div className="testimonial-meta">Dr. Low Jing Hong</div>
              <p className="testimonial-desc">
                Multimedia University (MMU), Malaysia
              </p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="/img/speakers/puan.png"
                  alt="Speaker 5"
                  className="img-responsive"
                />
              </div>
              <div className="testimonial-meta">
                Ts. Puan Rajina Binti M A Raj Mohamed
              </div>
              <p className="testimonial-desc">
                Universiti Tenaga Nasional (UNITEN), Malaysia
              </p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="/img/speakers/mohd.png"
                  alt="Speaker 6"
                  className="img-responsive"
                />
              </div>
              <div className="testimonial-meta">
                Dr. Mohd Nur Ruzainy Bin Alwi
              </div>
              <p className="testimonial-desc">
                Universiti Tenaga Nasional (UNITEN), Malaysia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* LINE 2: 6 Collaborators */}
      <motion.div
        className="row"
        style={{ marginTop: "30px" }}
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/suryo.c.png"
                alt="Collaborator 1"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Suryo Adhi Wibowo, S.T., M.T., Ph.D.
            </div>
            <p>Co-Lecturers of GLOW, Telecommunication Engineering</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/taufik.c.png"
                alt="Collaborator 2"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">Taufik Nur Adi Ph.D.</div>
            <p>Co-Lecturers of GLOW, Information System</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/edward.c.png"
                alt="Collaborator 3"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Dr. Edward Ferdian, S.T., B.Sc., M.Sc.
            </div>
            <p>Co-Lecturers of GLOW, Informatics</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/heru.c.png"
                alt="Collaborator 4"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Heru Syah Putra, S.Kom., M.Sc.Eng.
            </div>
            <p>Co-Lecturers of GLOW, Electrical Engineering</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/fida.c.png"
                alt="Collaborator 5"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Dr. Fida Nirmala Nugraha, S. Psi., M.Psi.
            </div>
            <p>Co-Lecturers of GLOW, Industrial Engineering</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/fetty.c.png"
                alt="Collaborator 6"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Dr. Fetty Poerwita Sary, S.S., M.Pd.
            </div>
            <p>Co-Lecturers of GLOW, ICT Business</p>
          </div>
        </div>
      </motion.div>

      {/* LINE 3: 5 Collaborators */}
      <motion.div
        className="row"
        style={{ marginTop: "30px" }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/dwi.c.png"
                alt="Collaborator 7"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Dwi Urip Wardoyo, S.E., M.M.Si
            </div>
            <p>Co-Lecturers of GLOW, Accounting</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/maria.c.png"
                alt="Collaborator 8"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Dr. Maria Josef Retno Budi Wahyuni, M.Ds
            </div>
            <p>Co-Lecturers of GLOW, Visual Communication Design</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/diah.c.png"
                alt="Collaborator 9"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Diah Agung Esfandari, B.A., M.Si.
            </div>
            <p>Co-Lecturers of GLOW, Communication Science</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/ihsan.c.png"
                alt="Collaborator 10"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Ihsan Hadiansah, SE, BIBM, MSM.
            </div>
            <p>Co-Lecturers of GLOW, Business Administration</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img
                src="/img/speakers/fikri.png"
                alt="Collaborator 11"
                className="img-responsive"
              />
            </div>
            <div className="testimonial-meta">
              Fikri Mohamad Rizaldi, B.B.A., M.A.B.
            </div>
            <p>Co-Lecturers of GLOW, Business Administration</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
