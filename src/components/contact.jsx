import { useState, useCallback, useMemo } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

// Memoized static data untuk menghindari re-render
const PARTNER_LOGOS = [
  { src: "/img/contact/alliancee.png", alt: "Alliance Logo" },
  { src: "/img/contact/tel.u.logo.png", alt: "Tel-U Logo" },
  { src: "/img/contact/aperti.png", alt: "Aperti Logo" },
];

const CONTACT_INFO = [
  {
    id: "phone",
    icon: "📞",
    title: "Phone",
    content: "+62 821-1756-4248",
    href: "tel:+6282117564248",
    className: "phone-item",
  },
  {
    id: "address",
    icon: "📍",
    title: "Address of International Class Academic Office (ICAO)",
    content: "Tokong Nanas Building 9 Floor, Telkom University",
    href: "https://g.co/kgs/LF3k4kB",
    className: "address-item",
  },
];

const SOCIAL_LINKS = [
  {
    id: "youtube",
    href: "https://www.youtube.com/@icaotelkomuniversity8149",
    className: "youtube-link",
    viewBox: "0 0 24 24",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/icaotelkomuniversity/",
    className: "instagram-link",
    viewBox: "0 0 24 24",
    path: "M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.402.58.206.995.452 1.43.886.434.435.68.85.886 1.43.162.456.346 1.257.402 2.427.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.402 2.427a3.437 3.437 0 0 1-.886 1.43 3.437 3.437 0 0 1-1.43.886c-.456.162-1.257.346-2.427.402-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.402a3.437 3.437 0 0 1-1.43-.886 3.437 3.437 0 0 1-.886-1.43c-.162-.456-.346-1.257-.402-2.427C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.402-2.427.206-.58.452-.995.886-1.43.435-.434.85-.68 1.43-.886.456-.162 1.257-.346 2.427-.402C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.522.012-4.77.07-1.012.048-1.558.214-1.923.357a1.81 1.81 0 0 0-.66.43c-.188.187-.323.4-.43.66-.143.365-.31.91-.357 1.923-.058 1.248-.07 1.61-.07 4.77s.012 3.522.07 4.77c.048 1.012.214 1.558.357 1.923.107.26.242.473.43.66.187.188.4.323.66.43.365.143.91.31 1.923.357 1.248.058 1.61.07 4.77.07s3.522-.012 4.77-.07c1.012-.048 1.558-.214 1.923-.357.26-.107.473-.242.66-.43.188-.187.323-.4.43-.66.143-.365.31-.91.357-1.923.058-1.248.07-1.61.07-4.77s-.012-3.522-.07-4.77c-.048-1.012-.214-1.558-.357-1.923a1.81 1.81 0 0 0-.43-.66 1.81 1.81 0 0 0-.66-.43c-.365-.143-.91-.31-1.923-.357-1.248-.058-1.61-.07-4.77-.07zM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 1.8a4.362 4.362 0 1 0 0 8.724 4.362 4.362 0 0 0 0-8.724zm6.406-1.407a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  },
];

// Memoized components untuk mencegah re-render
const PartnerLogo = ({ src, alt }) => (
  <div className="logo-card">
    <img
      src={src}
      alt={alt}
      className="partner-logo"
      loading="lazy" // Lazy loading untuk performa
      decoding="async"
    />
  </div>
);

const ContactItem = ({ item }) => (
  <div className={`contact-item ${item.className}`}>
    <div className="contact-icon">{item.icon}</div>
    <div className="contact-content">
      <h3 className="contact-title-small">{item.title}</h3>
      <p className="contact-text">
        <a
          href={item.href}
          {...(item.id === "address" && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          {item.content}
        </a>
      </p>
    </div>
  </div>
);

const SocialLink = ({ link }) => (
  <a
    href={link.href}
    className={`social-link ${link.className}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Follow us on ${link.id}`}
  >
    <svg viewBox={link.viewBox} fill="currentColor">
      <path d={link.path} />
    </svg>
  </a>
);

export const Contact = () => {
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useCallback untuk mencegah re-render komponen child
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      emailjs
        .send(
          "service_5vdw0b2",
          "template_kqdrc98",
          {
            from_name: formState.name,
            from_email: formState.email,
            message: formState.message,
          },
          "tEvctZEwHR9JC2Jhh"
        )
        .then(
          (result) => {
            console.log("Success:", result.text);
            alert("Message sent successfully!");
            setFormState(initialState);
          },
          (error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Check console and keys.");
          }
        )
        .finally(() => setIsSubmitting(false));
    },
    [formState]
  );

  // Memoized computed values
  const memoizedPartnerLogos = useMemo(
    () =>
      PARTNER_LOGOS.map((logo, index) => <PartnerLogo key={index} {...logo} />),
    []
  );

  const memoizedContactItems = useMemo(
    () => CONTACT_INFO.map((item) => <ContactItem key={item.id} item={item} />),
    []
  );

  const memoizedSocialLinks = useMemo(
    () => SOCIAL_LINKS.map((link) => <SocialLink key={link.id} link={link} />),
    []
  );

  return (
    <section id="contact" className="contact-wrapper">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <div className="header-content">
              <h1 className="contact-title">Help Center</h1>
              <div className="logo-card-glow">
                <img
                  src="/img/contact/gloww.png"
                  alt="Tel-U Logo"
                  className="partner-logo"
                  style={{ width: "120px", height: "auto" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="contact-description">
              Please fill out the form below to send us a message. We will
              respond as soon as possible.
            </p>
          </div>

          <div className="partner-logos">{memoizedPartnerLogos}</div>

          <div className="contact-grid">
            <div className="form-section">
              <div className="form-card">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="form-input"
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="form-input"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can assist you..."
                      required
                      rows="6"
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              <div className="organized-section">
                <img
                  src="/img/contact/organized by.png"
                  alt="Organized by"
                  className="organized-logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="sidebar-section">
              <div className="contact-cards">{memoizedContactItems}</div>

              <div className="social-card">
                <h3 className="social-title">Follow Us</h3>
                <div className="social-links">{memoizedSocialLinks}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="contact-footer">
        <div className="footer-container">
          <p className="footer-text">© 2025 ICAO. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};
