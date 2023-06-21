import React from "react";
import HomeAboutUsCSS from "./homeAboutUs.module.css";
import Heading from "../../../components/Heading/Heading";
import AboutUsPic from "../../../assets/Images/AboutUsPic.png";
export const HomeAboutUs = () => {
  return (
    <div className={HomeAboutUsCSS["HAU-main-container"]}>
      <h2 className={HomeAboutUsCSS["HAU-h2"]}>About Us</h2>
      <div className={HomeAboutUsCSS["HAU-secondary-container"]}>
        <div className={HomeAboutUsCSS["HAU-details-container"]}>
          <h2 className={HomeAboutUsCSS["HAU-heading"]}>
            At Aloha Residence, we aim to make every stay not just{" "}
            <span style={{ color: "#FF9F0F" }}>comfortable</span>, but truly
            <span style={{ color: "#FF9F0F" }}> memorable</span>.
          </h2>
          <p className={HomeAboutUsCSS["HAU-para"]}>
            Discover the luxury of space, comfort, and prime location at Aloha
            Residence in Kathmandu. Far exceeding the confines of standard hotel
            rooms, our two- and three-bedroom apartments are designed with fully
            equipped kitchens and separate living and dining areas. Nestled in
            the city's most coveted locales, Aloha Residence is more than just
            an apartment—it's your home away from home.
          </p>
        </div>
        <img className={HomeAboutUsCSS["HAU-img"]} src={AboutUsPic} />
      </div>
    </div>
  );
};
