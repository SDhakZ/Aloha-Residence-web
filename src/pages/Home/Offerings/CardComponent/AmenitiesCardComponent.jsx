import React from "react";
import AmenitiesCSS from "./amenities.module.css";

const AmenitiesCardComponent = (props) => {
  return (
    <div className={AmenitiesCSS["AMC-card"]} key={props.id}>
      <div className={AmenitiesCSS["AMC-card-top"]}>
        <h3>{props.title}</h3>
        <figure className={AmenitiesCSS["AMC-card-imgContainer"]}>
          <img
            className={AmenitiesCSS["AMC-card-img"]}
            src={props.img}
            alt={props.title}
          />
        </figure>
      </div>
      <ul className={AmenitiesCSS["AMC-list"]}>
        {props.list.map((list, listIndex) => (
          <li key={listIndex}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default AmenitiesCardComponent;
