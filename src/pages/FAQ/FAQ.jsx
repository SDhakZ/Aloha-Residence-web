import React from "react";
import FAQCSS from "./FAQ.module.css";
import Heading from "../../components/Heading/Heading";
import { FAQCard, StillHaveQuestion } from "./FAQCard";
import faqData from "../../data/faqData";
import GoToTop from "../../components/GoToTop/GoToTop";
import { Helmet } from "react-helmet-async";
const FAQ = () => {
  const appUrl = import.meta.env.VITE_APP_WEB_URL;
  return (
    <div className={FAQCSS["FAQ"]}>
      <Helmet>
        <title>FAQ - Aloha Residence</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Aloha Residence - a premier apartment community offering luxurious living spaces, exceptional amenities, and a prime location. Get information on leasing, amenities, maintenance, and more."
        />
        <meta
          name="keywords"
          content="Aloha Residence, Apartment, FAQ, Frequently Asked Questions, Leasing, Amenities, Maintenance"
        />
        <meta property="og:title" content="FAQ - Aloha Residence" />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about Aloha Residence. Get information on leasing, amenities, maintenance, and more."
        />
        <meta
          property="og:image"
          content="https://aloharesidence.net/OGImages/LogoOG.png"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aloharesidence.net/faq" />
      </Helmet>
      <Heading headingName="Frequently Asked  Question's" />
      <div className={FAQCSS["FAQ-section"]}>
        <h2 className={FAQCSS["FAQ-section-heading"]}>
          Apartment Details & Amenities
        </h2>
        {faqData.slice(0, 4).map(({ id, question, answer }) => {
          return <FAQCard key={id} question={question} answer={answer} />;
        })}
      </div>
      <div className={FAQCSS["FAQ-section"]}>
        <h2 className={FAQCSS["FAQ-section-heading"]}>Lease and Payments</h2>
        {faqData.slice(4, 6).map(({ id, question, answer }) => {
          return <FAQCard key={id} question={question} answer={answer} />;
        })}
      </div>
      <div className={FAQCSS["FAQ-section"]}>
        <h2 className={FAQCSS["FAQ-section-heading"]}>Policies</h2>
        {faqData.slice(6, 9).map(({ id, question, answer }) => {
          return <FAQCard key={id} question={question} answer={answer} />;
        })}
      </div>
      <div className={FAQCSS["FAQ-section"]}>
        <h2 className={FAQCSS["FAQ-section-heading"]}>
          Maintenance and Repairs
        </h2>
        {faqData.slice(9, 12).map(({ id, question, answer }) => {
          return <FAQCard key={id} question={question} answer={answer} />;
        })}
      </div>
      <StillHaveQuestion />
      <GoToTop />
    </div>
  );
};

export const FAQContact = () => {
  return (
    <div className={FAQCSS["FAQ"]}>
      <Heading headingName="Frequently Asked  Question's" />
      {faqData
        .filter((_, index) => [0, 3, 4, 10, 11].includes(index))
        .map(({ id, question, answer }) => {
          return <FAQCard key={id} question={question} answer={answer} />;
        })}
      <a
        style={{ color: "#005E04", fontWeight: "600", float: "right" }}
        href="/faq"
      >
        View All FAQ's
      </a>
    </div>
  );
};

export default FAQ;
