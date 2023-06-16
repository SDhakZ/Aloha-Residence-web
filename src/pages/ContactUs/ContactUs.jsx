import React, { useRef, useEffect } from "react";
import { ContactComponent } from "./ContactComponent";
import { FAQContact } from "../FAQ/FAQ";

const ContactUs = () => {
  const faqRef = useRef();

  const scrollToFAQ = () => {
    faqRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactComponent onFAQClick={scrollToFAQ} />
      <div ref={faqRef}>
        <FAQContact />
      </div>
    </>
  );
};

export default ContactUs;
