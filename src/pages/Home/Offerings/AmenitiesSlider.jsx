import React from "react";
import AmenitiesCardComponent from "./CardComponent/AmenitiesCardComponent";
import AmenitiesData from "../../../data/amenitiesData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperOverride.css";

export const AmenitiesSlider = () => {
  return (
    <div>
      <h2 className="swiper-heading">Unmatched Amenities</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          790: {
            slidesPerView: 2,
            spaceBetween: -20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {AmenitiesData.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <AmenitiesCardComponent
                title={card.title}
                img={card.img}
                key={card.id}
                list={card.list}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
