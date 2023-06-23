import React, { useEffect } from "react";
import HomeAboutUsCSS from "./homeAboutUs.module.css";
import AboutUsPic from "../../../assets/Images/AboutUsPic.webp";
import Aos from "aos";
import "aos/dist/aos.css";

export const HomeAboutUs = () => {
  useEffect(() => {
    Aos.init({
      offset: "50",
      Delay: "200",
      duration: "800",
      easing: "ease-in-out",
      anchorPlacement: "top",
      once: false,
    });
  }, []);
  return (
    <div className={HomeAboutUsCSS["HAU-main-container"]}>
      <h2
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-offset="120"
        className={HomeAboutUsCSS["HAU-h2"]}
      >
        About Us
      </h2>
      <div className={HomeAboutUsCSS["HAU-secondary-container"]}>
        <div className={HomeAboutUsCSS["HAU-details-container"]}>
          <h2
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-offset="50"
            className={HomeAboutUsCSS["HAU-heading"]}
          >
            At Aloha Residence, we aim to make every stay not just{" "}
            <span style={{ color: "#FF9F0F" }}>comfortable</span>, but truly
            <span style={{ color: "#FF9F0F" }}> memorable</span>.
          </h2>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-offset="50"
            className={HomeAboutUsCSS["HAU-para"]}
          >
            Discover the luxury of space, comfort, and prime location at Aloha
            Residence in Kathmandu. Far exceeding the confines of standard hotel
            rooms, our two- and three-bedroom apartments are designed with fully
            equipped kitchens and separate living and dining areas. Nestled in
            the city's most coveted locales, Aloha Residence is more than just
            an apartment—it's your home away from home.
          </p>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-offset="200"
          data-aos-anchor-placement="top-bottom"
          className={HomeAboutUsCSS["HAU-img"]}
          src={AboutUsPic}
        />
      </div>
    </div>
  );
};
