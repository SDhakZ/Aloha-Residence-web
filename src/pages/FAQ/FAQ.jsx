import React from "react";
import FAQCSS from "./FAQ.module.css";
import Heading from "../../components/heading/Heading";
import { FAQCard, StillHaveQuestion } from "./FAQCard";
import faqData from "../../data/faqData";

const FAQ = () => {
  return (
    <div className={FAQCSS["FAQ"]}>
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
        {faqData.slice(4, 7).map(({ id, question, answer }) => {
          return <FAQCard key={id} question={question} answer={answer} />;
        })}
      </div>
      <div className={FAQCSS["FAQ-section"]}>
        <h2 className={FAQCSS["FAQ-section-heading"]}>Policies</h2>
        {faqData.slice(7, 10).map(({ id, question, answer }) => {
          return <FAQCard key={id} question={question} answer={answer} />;
        })}
      </div>
      <div className={FAQCSS["FAQ-section"]}>
        <h2 className={FAQCSS["FAQ-section-heading"]}>
          Maintenance and Repairs
        </h2>
        {faqData.slice(10, 13).map(({ id, question, answer }) => {
          return <FAQCard key={id} question={question} answer={answer} />;
        })}
      </div>
      <StillHaveQuestion />
    </div>
  );
};

export const FAQContact = () => {
  return (
    <div className={FAQCSS["FAQ"]}>
      <Heading headingName="Frequently Asked  Question's" />
      {faqData
        .filter((_, index) => [0, 4, 5, 9, 11].includes(index))
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
