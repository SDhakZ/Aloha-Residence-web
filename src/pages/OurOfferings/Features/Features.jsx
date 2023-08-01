import React, { useEffect } from "react";
import FeaturesCSS from "./features.module.css";
import Heading from "../../../components/Heading/Heading";
import StylishLivingImg from "../../../assets/Images/Living.png";
import SecurityImg from "../../../assets/Images/Security.png";
import ReliableServiceImg from "../../../assets/Images/Reliability.png";
import { useSpring, animated, easings } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";
const Features = () => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, easing: easings.easeInOutQuad },
  });
  useEffect(() => {
    Aos.init({
      offset: "50",
      Delay: "200",
      duration: "1000",
      easing: "ease-in-out",
      anchorPlacement: "top",
      once: true,
    });
  }, []);
  return (
    <>
      <div className={FeaturesCSS["OF-main-container"]}>
        <Heading headingName="Features" />
        <div className={FeaturesCSS["OF-secondary-container"]}>
          <animated.div style={style}>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-offset="200"
              className={FeaturesCSS["OF-feature-container"]}
            >
              <div className={FeaturesCSS["OF-feature-detail"]}>
                <h2>Stylish Living</h2>
                <ul className={FeaturesCSS["OF-details"]}>
                  <li>Spacious and elegant rooms</li>
                  <li>Equipped with four-stage water filter kitchens</li>
                  <li>Service and outdoor terraces for relaxation</li>
                  <li>Convenient washing machines and dryers</li>
                </ul>
              </div>
              <figure className={FeaturesCSS["OF-figure-container"]}>
                <img
                  className={`${FeaturesCSS["OF-feature-img"]} ${FeaturesCSS["OF-living"]}`}
                  src={StylishLivingImg}
                  alt="Stylish Living Illustration"
                />
              </figure>
            </div>
          </animated.div>
          <animated.div style={style}>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="200"
              className={`${FeaturesCSS["OF-feature-container"]} ${FeaturesCSS["OF-feature-container-rev"]}`}
            >
              <figure className={FeaturesCSS["OF-figure-container"]}>
                <img
                  className={`${FeaturesCSS["OF-feature-img"]} ${FeaturesCSS["OF-security"]}`}
                  src={SecurityImg}
                  alt="Security Illustration"
                />
              </figure>
              <div className={FeaturesCSS["OF-feature-detail"]}>
                <h2>Safety and security</h2>
                <ul className={FeaturesCSS["OF-details"]}>
                  <li>24-hour security with video surveillance</li>
                  <li>Fireproof vault available upon request</li>
                  <li>Firefighting safety measures</li>
                  <li>Quake alarm for added peace of mind</li>
                </ul>
              </div>
            </div>
          </animated.div>
          <animated.div style={style}>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-offset="200"
              className={FeaturesCSS["OF-feature-container"]}
            >
              <div className={FeaturesCSS["OF-feature-detail"]}>
                <h2>Reliable Service</h2>
                <ul className={FeaturesCSS["OF-details"]}>
                  <li>24-hour electricity backup</li>
                  <li>24-hour hot and cold water supply</li>
                  <li>Daily laundry service</li>
                  <li>Elevator for easy accessibility</li>
                </ul>
              </div>
              <figure className={FeaturesCSS["OF-figure-container"]}>
                <img
                  className={`${FeaturesCSS["OF-feature-img"]} ${FeaturesCSS["OF-reliable"]}`}
                  src={ReliableServiceImg}
                  alt="Reliable Service Illustration"
                />
              </figure>
            </div>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Features;
