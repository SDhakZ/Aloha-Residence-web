// Footer page to create the footer of the website.
import React from "react";
import FooterCSS from "./footer.module.css";
import logo from "../../assets/Images/logo.png";

// Function to create the structure of footer page.
export const Footer = (props) => {
  return (
    // Start of footersection.
    <div className={FooterCSS.footer}>
      <div className={FooterCSS["footer-row"]}>
        {/* For columns of footer. */}
        <div className={FooterCSS["footer-companyDetail-container"]}>
          <div className={FooterCSS["footer-companyName-container"]}>
            <img
              className={FooterCSS["footer-companyLogo"]}
              src={logo}
              alt="company logo"
            />
            <div className={FooterCSS["footer-companyName"]}>
              Aloha Residence
            </div>
          </div>
          <p>
            Nestled in Kathmandu, Aloha Residence combines luxury, comfort, and
            prime locations to provide an unmatched living experience. Discover
            vibrant city living with us at Aloha Residence, your new home away
            from home.
          </p>
        </div>

        <div
          className={`${FooterCSS["footer-column"]} ${FooterCSS["footer-pages"]}`}
        >
          <h4>Pages</h4>
          <div className={`${FooterCSS["footer-page"]}`}>
            <ul className={FooterCSS["footer-ul"]}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/layouts">Layouts</a>
              </li>{" "}
              <li>
                <a href="/our-offerings">Our Offerings</a>
              </li>
            </ul>
            <ul className={FooterCSS["footer-ul"]}>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/faq">FAQ's</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={FooterCSS["footer-column"]}>
          <h4>Contacts </h4>
          <ul className={FooterCSS["F-contact-list"]}>
            <li>
              <i className={`${FooterCSS.icon} fas fa-map-marker-alt`}></i>{" "}
              Jawalakhel, Lalitpur
            </li>
            <li>
              <i className={`${FooterCSS.icon} fas fa-envelope`}></i>{" "}
              P.O.Box-7348, Kathmandu, Nepal
            </li>
            <li>
              <i className={`${FooterCSS.icon} fas fa-phone-alt`}></i> Tel:
              5522796, 5526414 Fax: 5524571
            </li>
            <li>
              <i className={`${FooterCSS.icon} fas fa-at`}></i> E-mail:{" "}
              <a href="mailto:info@alohainn.com">info@alohainn.com</a>
            </li>
          </ul>
        </div>
        {/*copyright*/}
      </div>
      <div className={FooterCSS["footer-copyright"]}>
        <span className={FooterCSS["footer-copyrightSymbol"]}>©</span>
        <p>
          2023, Aloha Residence, rights reserved ||{" "}
          <a
            style={{ color: "#5F5F5F" }}
            className={FooterCSS["footer-tc"]}
            href="/terms-and-conditions"
          >
            Terms and conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
