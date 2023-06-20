import React from "react";
import AmenitiesCSS from "./amenities.module.css";

const AmenitiesCards = (props) => {
  return (
    <div className={AmenitiesCSS["AM-card"]} key={props.id}>
      <div className={AmenitiesCSS["AM-card-top"]}>
        <h3>{props.title}</h3>
        <figure className={AmenitiesCSS["AM-card-imgContainer"]}>
          <img
            className={AmenitiesCSS["AM-card-img"]}
            src={props.img}
            alt={props.title}
          />
        </figure>
      </div>
      <ul className={AmenitiesCSS["AM-list"]}>
        {props.list.map((list, listIndex) => (
          <li key={listIndex}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default AmenitiesCards;
