import React, { useState, useEffect } from "react";
import GalleryCSS from "./gallery.module.css";
import Heading from "../../components/Heading/Heading";
import GalleryPic from "../../assets/images/GalleryPic.webp";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import GoToTop from "../../components/GoToTop/GoToTop";
import { Helmet } from "react-helmet-async";
import {
  CommonAreaGallery,
  RoomGallery,
  OutdoorGallery,
} from "../../data/galleryData";

const galleries = [
  {
    title: "Outdoor Gallery",
    data: OutdoorGallery,
  },
  {
    title: "Room Gallery",
    data: RoomGallery,
  },
  {
    title: "Common Area Gallery",
    data: CommonAreaGallery,
  },
];

const Gallery = () => {
  const [isAutoplayEnabled, setAutoplayEnabled] = useState(true);
  useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      setAutoplayEnabled(windowWidth >= 600);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleThumbClick = () => {
    // Pause autoplay on thumb click
    setAutoplayEnabled(false);

    // Set the delay in milliseconds before resuming autoplay
    const delay = 3000;

    // Delay autoplay resume
    setTimeout(() => {
      setAutoplayEnabled(true);
    }, delay);
  };
  const appUrl = import.meta.env.VITE_APP_WEB_URL;
  return (
    <div className={GalleryCSS["GA-main-container"]}>
      <Helmet>
        <title>Gallery - Aloha Residence</title>
        <meta
          name="description"
          content="Take a visual tour of Aloha Residence through our gallery. Discover the elegant interiors, modern amenities, and stunning views of our apartment community."
        />
        <meta
          name="keywords"
          content="Aloha Residence, Apartment, Gallery, Images, Interiors"
        />
        <meta property="og:title" content="Gallery - Aloha Residence" />
        <meta
          property="og:description"
          content="Explore the Aloha Residence through our gallery. See images of our apartments, amenities, and surroundings."
        />
        <meta
          property="og:image"
          content={`${appUrl}/OGImages/GalleryOG.png`}
        />
        <meta property="og:url" content={`${appUrl}/gallery`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${appUrl}/gallery`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Heading headingName="Gallery" />
      <div className={GalleryCSS["GA-secondary-container"]}>
        <div className={GalleryCSS["GA-details-container"]}>
          <h2 className={GalleryCSS["GA-heading"]}>
            Get a closer look at your{" "}
            <span style={{ color: "#FF9F0F" }}>future home</span> browse through
            our extensive gallery
          </h2>
        </div>
        <img className={GalleryCSS["GA-img"]} src={GalleryPic} />
        <div className={GalleryCSS["GA-photo-gallery"]}>
          {galleries.map((gallery, index) => (
            <div className={GalleryCSS["GA-carousel"]} key={index}>
              <h2 className={GalleryCSS["GA-carousel-heading"]}>
                {gallery.title}
              </h2>
              <Carousel
                dynamicHeight
                autoPlay={isAutoplayEnabled}
                width="100%"
                interval="5000"
                emulateTouch
                infiniteLoop
                onClickThumb={handleThumbClick}
              >
                {gallery.data.map((item) => (
                  <div key={item.id}>
                    <img src={item.img} />
                    <p className="legend">{item.legend}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          ))}
        </div>
        <GoToTop />
      </div>
    </div>
  );
};

export default Gallery;
