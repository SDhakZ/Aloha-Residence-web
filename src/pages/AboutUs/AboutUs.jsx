import React from "react";
import AboutUsCSS from "./aboutUs.module.css";
import Heading from "../../components/Heading/Heading";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  const appUrl = import.meta.env.VITE_APP_WEB_URL;
  return (
    <div className={AboutUsCSS["AU-main-container"]}>
      <Helmet>
        <title>About Us - Aloha Residence</title>
        <meta
          name="description"
          content="Learn more about Aloha Residence - a premier apartment community offering luxurious living spaces, exceptional amenities, and a prime location. Discover our story, vision, and commitment to providing an unparalleled living experience."
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Aloha Residence, Apartment, About Us, History, Values"
        />
        <meta property="og:title" content="About Us - Aloha Residence" />
        <meta
          property="og:description"
          content="Learn more about Aloha Residence. Discover our history, values, and commitment to providing high-quality apartments."
        />
        <meta property="og:image" content={`${appUrl}/OGImages/LogoOG.png`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${appUrl}/about-us`} />
      </Helmet>
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
            Residence in Kathmandu Valley. Far exceeding the confines of
            standard hotel rooms, our two- and three-bedroom apartments are
            designed with fully equipped kitchens and separate living and dining
            areas. Nestled in the city's most coveted locales, Aloha Residence
            is more than just an apartment—it's your home away from home.
          </p>
        </div>
        <figure>
          <picture>
            <source
              media="(max-width: 549px)"
              srcSet="/AboutUsPic/AboutUs-mobile.webp"
            />
            <source
              media="(max-width: 769px)"
              srcSet="/AboutUsPic/AboutUs-tablet.webp"
            />
            <source srcSet="/AboutUsPic/AboutUs-desktop.webp" />
            <img
              className={AboutUsCSS["AU-img"]}
              src="/AboutUsPic/AboutUs-desktop.webp" // Fallback image source for browsers that don't support srcset
              alt="About Us"
              title="About Us apartment collage"
            />
          </picture>
        </figure>
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
