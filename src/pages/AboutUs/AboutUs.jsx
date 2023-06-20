import React from "react";
import AboutUsCSS from "./aboutUs.module.css";
import Heading from "../../components/heading/Heading";
import AboutUsPic from "../../assets/Images/AboutUsPic.png";
const AboutUs = () => {
  return (
    <div className={AboutUsCSS["AU-main-container"]}>
      <Heading headingName="About Us" />
      <div className={AboutUsCSS["AU-secondary-container"]}>
        <div className={AboutUsCSS["AU-details-container"]}>
          <h2 className={AboutUsCSS["AU-heading"]}>
            At Aloha Residence, we aim to make every stay not just{" "}
            <span style={{ color: "#FF9F0F" }}>comfortable</span>, but truly
            <span style={{ color: "#FF9F0F" }}> memorable</span>.
          </h2>
          <p className={AboutUsCSS["AU-para"]}>
            Discover the luxury of space, comfort, and prime location at Aloha
            Residence in Kathmandu. Far exceeding the confines of standard hotel
            rooms, our two- and three-bedroom apartments are designed with fully
            equipped kitchens and separate living and dining areas. Nestled in
            the city's most coveted locales, Aloha Residence is more than just
            an apartment—it's your home away from home.
          </p>
        </div>
        <img className={AboutUsCSS["AU-img"]} src={AboutUsPic} />
        <div>
          <p className={AboutUsCSS["AU-para-detail"]}>
            Here, hospitality is not just a service, it's our mission. We strive
            to create an environment that not just welcomes, but truly feels
            like home to our residents.
          </p>
          <p className={AboutUsCSS["AU-para-detail"]}>
            Our apartments, expansive and thoughtfully furnished, provide an
            unparalleled level of comfort and flexibility. They exceed the
            offerings of typical hotels with their generous living spaces,
            premium furniture, and fully equipped kitchens complete with
            essential housewares.
          </p>
          <p className={AboutUsCSS["AU-para-detail"]}>
            Beyond the comforts of your private space, we ensure you stay
            connected with local phone service and high-speed internet access.
            Your entertainment is guaranteed with our provision of basic cable
            television.
          </p>
          <p className={AboutUsCSS["AU-para-detail"]}>
            But our commitment to your comfort doesn't end at your doorstep.
            Within our community, we offer exclusive amenities such as a
            state-of-the-art fitness center and a luxurious sauna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;