import React, { useEffect, useState } from "react";
import HeroCSS from "./hero.module.css";
import Shape from "../../../assets/Images/HeroShape.webp";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={HeroCSS["HR-main-container"]}>
      <div className={HeroCSS["HR-secondary-container"]}>
        <h1 className={HeroCSS["HR-h1"]}>
          <span className={HeroCSS["HR-span"]} style={{ color: "#FF9F0F" }}>
            Superior
          </span>{" "}
          living experience
        </h1>
        <figure
          className={HeroCSS["HR-apartment-container"]}
          style={{
            transform: `translate(-50%, calc(-50% + ${
              scrollY / 4
            }px)) rotate(1deg)`,
          }}
        >
          <img
            src="/Apartment.webp"
            style={{
              filter: loaded ? "brightness(1)" : "brightness(0.5)",
              transition: "filter 2s",
            }}
          />
        </figure>
        <figure className={HeroCSS["HR-shape-container"]}>
          <img src={Shape} />
        </figure>
      </div>
    </div>
  );
};
