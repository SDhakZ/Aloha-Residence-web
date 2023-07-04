import React, { useEffect, useState } from "react";
import HeroCSS from "./hero.module.css";

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
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet="/Apartment/apartment-mobile.webp"
            />
            <source
              media="(max-width: 769px)"
              srcSet="/Apartment/apartment-tablet.webp"
            />
            <source srcSet="/Apartment/apartment-desktop.webp" />
            <img
              src="/Apartment/apartment-desktop.webp" // Fallback image source for browsers that don't support srcset
              style={{
                filter: loaded ? "brightness(1)" : "brightness(0.5)",
                transition: "filter 1s",
              }}
              loading="eager"
              alt="Apartment"
            />
          </picture>
        </figure>
        <figure className={HeroCSS["HR-shape-container"]}>
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet="/Shape/shape-mobile.webp"
            />
            <source
              media="(max-width: 769px)"
              srcSet="/Shape/shape-tablet.webp"
            />
            <source srcSet="/Shape/shape-desktop.webp" />
            <img
              loading="eager"
              alt="shape"
              src="/Shape/shape-desktop.webp" // Fallback image source for browsers that don't support srcset
            />
          </picture>
        </figure>
      </div>
    </div>
  );
};
