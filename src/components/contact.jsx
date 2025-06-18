import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            {/* Main Content Column */}
            <div className="col-md-8">
              {/* Header Section */}
              <div className="section-title mb-3">
                <div className="d-flex align-items-center">
                  <h2 className="me-3 mb-0">Help Center</h2>
                  <img
                    src="/img/contact/gloww.png"
                    alt="Help Logo"
                    className="glow-logo"
                  />
                </div>
              </div>

              <p className="mb-4">
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>

              {/* Partner Logos */}
              <div className="partner-logos d-flex justify-content-between mb-4">
                <img
                  src="/img/contact/alliancee.png"
                  alt="Alliance Logo"
                  className="partner-logo"
                />
                <img
                  src="/img/contact/tel.u.logo.png"
                  alt="Tel-U Logo"
                  className="partner-logo"
                />
                <img
                  src="/img/contact/aperti.png"
                  alt="Aperti Logo"
                  className="partner-logo"
                />
              </div>

              {/* Contact Form */}
              <form
                name="sentMessage"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div id="success" className="mb-3"></div>

                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>

              {/* Organized By Section - Updated class for tighter spacing */}
              <div className="organized-by text-center">
                <img
                  src="/img/contact/organized by.png"
                  alt="Organized by"
                  className="organized-logo"
                />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item mb-3">
                <p>
                  <i className="fa fa-phone me-2"></i>
                  <strong>Phone:</strong> {props.data?.phone || "loading"}
                </p>
              </div>

              <div className="contact-item mb-3">
                <p>
                  <i className="fa fa-map-marker me-2"></i>
                  <strong>Address:</strong> {props.data?.address || "loading"}
                </p>
              </div>

              <div className="contact-item mb-3">
                <p>
                  <i className="fa fa-envelope-o me-2"></i>
                  <strong>Email:</strong> {props.data?.email || "loading"}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="row">
            <div className="col-md-12">
              <div className="social text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href={props.data?.facebook || "/"}
                      className="social-link"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={props.data?.twitter || "/"}
                      className="social-link"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={props.data?.youtube || "/"}
                      className="social-link"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2025 ICAO.</p>
        </div>
      </div>
    </div>
  );
};
