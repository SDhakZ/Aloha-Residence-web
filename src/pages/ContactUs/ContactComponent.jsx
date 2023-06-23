import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactUsCSS from "./ContactUs.module.css";
import grass from "../../assets/images/grass.png";
import Heading from "../../components/Heading/Heading";

export const ContactComponent = ({ onFAQClick, slide }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_KEY,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_APP_EMAIL_SECRET_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setMessage("Form submitted successfully.");
          form.current.reset();
          // Popup will disappear after 3 seconds
          setTimeout(() => setMessage(null), 3000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setMessage("Something went wrong. Please try again later.");
          // Popup will disappear after 3 seconds
          setTimeout(() => setMessage(null), 3000);
        }
      );
  };
  return (
    <>
      <div className={ContactUsCSS["C-main-container"]}>
        <div className={ContactUsCSS["C-contact-container"]}>
          <Heading invert="true" headingName="Contact Us" />
          <div className={ContactUsCSS["C-secondary-container"]}>
            <div className={ContactUsCSS["C-map-detail"]}>
              <div className={ContactUsCSS["C-map-container"]}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4618739679786!2d85.31138867616707!3d27.672116227043315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd31a754c5%3A0x879dbc41050f35e!2sAloha%20Residence!5e0!3m2!1sen!2snp!4v1686888697060!5m2!1sen!2snp"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={ContactUsCSS["C-map"]}
                ></iframe>
              </div>

              <ul className={ContactUsCSS["C-contact-list"]}>
                <li>
                  <i
                    className={`${ContactUsCSS.icon} fas fa-map-marker-alt`}
                  ></i>{" "}
                  Jawalakhel, Lalitpur
                </li>
                <li>
                  <i className={`${ContactUsCSS.icon} fas fa-envelope`}></i>{" "}
                  P.O.Box-7348, Kathmandu, Nepal
                </li>
                <li>
                  <i className={`${ContactUsCSS.icon} fas fa-phone-alt`}></i>{" "}
                  Tel: 5422796, 5426414 Fax: 5524571
                </li>
                <li>
                  <i className={`${ContactUsCSS.icon} fas fa-at`}></i> E-mail:{" "}
                  <a
                    className={ContactUsCSS["C-email"]}
                    style={{ color: "white" }}
                    href="mailto:info@alohainn.com"
                  >
                    info@aloharesidence.net
                  </a>
                </li>
              </ul>
            </div>
            <div className={ContactUsCSS["C-form-container"]}>
              <h2 className={ContactUsCSS["C-form-heading"]}>
                Send us your queries
              </h2>
              <form
                className={ContactUsCSS["C-form"]}
                ref={form}
                onSubmit={sendEmail}
              >
                <input
                  className={ContactUsCSS["C-field"]}
                  type="text"
                  name="fullname"
                  placeholder="Enter your name"
                  required
                />
                <input
                  className={ContactUsCSS["C-field"]}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                />
                <textarea
                  className={ContactUsCSS["C-text-area"]}
                  name="message"
                  placeholder="Enter your message"
                  required
                />
                <div className={ContactUsCSS["C-btn-container"]}>
                  {slide ? (
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        onFAQClick();
                      }}
                      href="/faq"
                    >
                      View Frequently Asked Questions
                    </a>
                  ) : (
                    <a href="/faq">View Frequently Asked Questions</a>
                  )}

                  <button
                    className={`${ContactUsCSS["C-send-btn"]}`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </form>

              {message && (
                <div className={ContactUsCSS["popup"]}>
                  <i
                    style={{
                      color: "#00B807",
                      fontSize: "1.5rem",
                    }}
                    className="fas fa-check-circle"
                  ></i>
                  Message sent successfully
                </div>
              )}
            </div>
          </div>
        </div>
        <img src={grass} alt="grass" className={ContactUsCSS["C-grass"]} />
      </div>
    </>
  );
};
