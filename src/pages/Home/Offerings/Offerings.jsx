import React, { useState, useEffect } from "react";
import OfferingsCSS from "./offering.module.css";
import { AmenitiesSlider } from "./AmenitiesSlider";
import Aos from "aos";
import "aos/dist/aos.css";
export const Offerings = () => {
  useEffect(() => {
    Aos.init({
      offset: "50",
      Delay: "200",
      duration: "1000",
      easing: "ease-in-out",
      anchorPlacement: "top",
      once: false,
    });
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className={OfferingsCSS["OH-main-container"]}>
      <div className={OfferingsCSS["OH-secondary-container"]}>
        <h2
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-offset="300"
          className={OfferingsCSS["OH-h2"]}
        >
          What we offer
        </h2>
        <figure
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-offset="300"
          className={OfferingsCSS["OH-fig-container"]}
        >
          <img
            src={windowWidth <= 560 ? "/OfferingsMobile.png" : "/Offerings.png"}
          />
        </figure>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="50"
          className={OfferingsCSS["OH-para"]}
        >
          At Aloha Residence, we offer more than just a place to live. Enjoy our
          stylish and comfortable living spaces, rest easy with top-notch safety
          measures, and rely on our prompt and efficient services. Experience a
          home that truly enhances your lifestyle. For a detailed look at all we
          offer, click the button below. Welcome to your new home.
        </p>
        <a className={OfferingsCSS["OH-anchor"]} href="/about-us">
          View our offerings
        </a>
      </div>
      <AmenitiesSlider />
    </div>
  );
};
