import React, { useEffect } from "react";
import AmenitiesCSS from "./amenities.module.css";
import Heading from "../../../components/Heading/Heading";
import AmenitiesData from "../../../data/amenitiesData";
import AmenitiesCards from "./AmenitiesCards";
import Aos from "aos";
import "aos/dist/aos.css";
const Amenities = () => {
  useEffect(() => {
    Aos.init({
      offset: "300",
      Delay: "200",
      duration: "1000",
      easing: "ease-in-out",
      anchorPlacement: "top",
      once: true,
    });
  }, []);
  return (
    <div className={AmenitiesCSS["AM-main-container"]}>
      <Heading headingName="Amenities" />
      <div
        data-aos="fade"
        data-aos-delay="400"
        data-aos-offset="300"
        className={AmenitiesCSS["AM-card-container"]}
      >
        {AmenitiesData.map((card) => (
          <AmenitiesCards
            title={card.title}
            img={card.img}
            key={card.id}
            list={card.list}
          />
        ))}
      </div>
    </div>
  );
};

export default Amenities;
