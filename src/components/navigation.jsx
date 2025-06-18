import React, { useState, useEffect } from "react";

export const Navigation = (props) => {
  const [activeSection, setActiveSection] = useState("#about");

  const handleSetActive = (hash) => {
    setActiveSection(hash);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "#about",
        "#portfolio",
        "#testimonials",
        "#team",
        "#contact",
      ];
      let current = "#about";
      sections.forEach((sec) => {
        const el = document.querySelector(sec);
        if (el) {
          const offsetTop = el.offsetTop;
          if (window.pageYOffset >= offsetTop - 60) {
            current = sec;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            GLOW 2025
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className={activeSection === "#about" ? "active" : ""}>
              <a
                href="#about"
                className="page-scroll"
                onClick={() => handleSetActive("#about")}
              >
                About
              </a>
            </li>
            <li className={activeSection === "#portfolio" ? "active" : ""}>
              <a
                href="#portfolio"
                className="page-scroll"
                onClick={() => handleSetActive("#portfolio")}
              >
                Schedule
              </a>
            </li>
            <li className={activeSection === "#testimonials" ? "active" : ""}>
              <a
                href="#testimonials"
                className="page-scroll"
                onClick={() => handleSetActive("#testimonials")}
              >
                Speakers
              </a>
            </li>
            <li className={activeSection === "#team-gallery" ? "active" : ""}>
              <a
                href="#team-gallery"
                className="page-scroll"
                onClick={() => handleSetActive("#team-gallery")}
              >
                Gallery
              </a>
            </li>
            <li className={activeSection === "#contact" ? "active" : ""}>
              <a
                href="#contact"
                className="page-scroll"
                onClick={() => handleSetActive("#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
