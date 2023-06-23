import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ContactComponent } from "./ContactComponent";
import { FAQContact } from "../FAQ/FAQ";
import GoToTop from "../../components/GoToTop/GoToTop";

const ContactUs = () => {
  const faqRef = useRef();

  const scrollToFAQ = () => {
    faqRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const appUrl = import.meta.env.VITE_APP_WEB_URL;
  return (
    <>
      <Helmet>
        <title>Contact Us - Aloha Residence</title>
        <meta
          name="description"
          content="Get in touch with us at Aloha Residence Apartment for any inquiries or support. You can also check our FAQ for common questions."
        />
        <meta
          name="keywords"
          content="Aloha Residence, Apartment, Contact, Support, FAQ"
        />
        <meta property="og:title" content="Contact Us - Aloha Residence" />
        <meta
          property="og:description"
          content="Get in touch with us at Aloha Residence for any inquiries or support. You can also check our FAQ for common questions."
        />
        <meta
          property="og:image"
          content={`${appUrl}/src/assets/Images/logo.png`}
        />
        <meta property="og:url" content={`${appUrl}/contact-us`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${appUrl}/contact-us`} />
      </Helmet>
      <ContactComponent slide={true} onFAQClick={scrollToFAQ} />
      <div ref={faqRef}>
        <FAQContact />
      </div>
      <GoToTop />
    </>
  );
};

export default ContactUs;
