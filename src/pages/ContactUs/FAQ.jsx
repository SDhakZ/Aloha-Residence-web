import React from "react";
import FAQCSS from "./FAQ.module.css";
import Heading from "../../components/heading/Heading";
import { FAQCard, StillHaveQuestion } from "./FAQCard";
import faqData from "../../data/faqData";

const FAQ = () => {
  return (
    <div className={FAQCSS["FAQ"]}>
      <Heading headingName="Frequently Asked  Question's" />
      {faqData.map(({ id, question, answer }) => {
        return <FAQCard key={id} question={question} answer={answer} />;
      })}

      <StillHaveQuestion />
    </div>
  );
};

export default FAQ;
