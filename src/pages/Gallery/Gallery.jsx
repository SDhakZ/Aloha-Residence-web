import React from "react";
import GalleryCSS from "./gallery.module.css";
import Heading from "../../components/heading/Heading";
import GalleryPic from "../../assets/images/GalleryPic.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

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
  return (
    <div className={GalleryCSS["GA-main-container"]}>
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
                autoPlay
                width="100%"
                emulateTouch
                infiniteLoop
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
      </div>
    </div>
  );
};

export default Gallery;
