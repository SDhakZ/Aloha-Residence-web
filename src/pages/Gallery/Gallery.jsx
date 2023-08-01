import React from "react";
import GalleryCSS from "./gallery.module.css";
import Heading from "../../components/Heading/Heading";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import GoToTop from "../../components/GoToTop/GoToTop";
import { Helmet } from "react-helmet-async";
import { IKImage } from "imagekitio-react";
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
  const appUrl = import.meta.env.VITE_APP_WEB_URL;
  return (
    <div className={GalleryCSS["GA-main-container"]}>
      <Helmet>
        <title>Gallery - Aloha Residence</title>
        <meta
          name="description"
          content="Take a visual tour of Aloha Residence through our gallery. Discover the elegant interiors, modern amenities, and stunning views of our apartment community."
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <figure>
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet="/Gallery/Gallery-Mobile.webp"
            />
            <source
              media="(max-width: 769px)"
              srcSet="/Gallery/Gallery-Tablet.webp"
            />
            <source srcSet="/Gallery/Gallery-Desktop.webp" />
            <img
              className={GalleryCSS["GA-img"]}
              loading="eager"
              alt="Gallery"
              title="Apartment Gallary"
              src="/Gallery/Gallery-Desktop.webp" // Fallback image source for browsers that don't support srcset
            />
          </picture>
        </figure>

        <div className={GalleryCSS["GA-photo-gallery"]}>
          {galleries.map((gallery, index) => (
            <div className={GalleryCSS["GA-carousel"]} key={index}>
              <h2 className={GalleryCSS["GA-carousel-heading"]}>
                {gallery.title}
              </h2>
              <Carousel
                dynamicHeight
                width="100%"
                interval="5000"
                emulateTouch
                infiniteLoop
                showThumbs={false}
              >
                {gallery.data.map((item) => (
                  <div key={item.id}>
                    <IKImage
                      lqip={{ active: true, quality: 20 }}
                      loading="lazy"
                      transformation={[
                        {
                          width: "auto",
                          aspectRatio: "1:1",
                          quality: 90,
                        },
                        {
                          width: "auto",
                          aspectRatio: "16:9",
                          quality: 90,
                          transformationPosition: "query",
                        },
                      ]}
                      path={item.img}
                    />
                    {/* <img loading="lazy" src={item.img} /> */}
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
