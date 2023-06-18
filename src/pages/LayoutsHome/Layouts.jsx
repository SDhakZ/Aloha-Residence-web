import React, { useState } from "react";
import LayoutsCSS from "./layouts.module.css";
import Heading from "../../components/heading/Heading";
import TypeA from "../../assets/LayoutImages/TypeA.png";
import TypeB from "../../assets/LayoutImages/TypeB.png";
import TypeC from "../../assets/LayoutImages/TypeC.png";
import TypeD from "../../assets/LayoutImages/TypeD.png";

const Layouts = () => {
  const [selectedLayout, setSelectedLayout] = useState("A");

  const layouts = {
    A: { src: TypeA, description: "2 bedroom apartment" },
    B: { src: TypeB, description: "2 bedroom apartment" },
    C: { src: TypeC, description: "3 bedroom apartment" },
    D: {
      src: TypeD,
      description: "Inter-connected double flat 4 bed room apartment",
    },
  };

  const layoutDetails = layouts[selectedLayout];

  return (
    <div className={LayoutsCSS["L-main-container"]}>
      <Heading headingName="Layouts" />
      <div className={LayoutsCSS["L-secondary-container"]}>
        <div className={LayoutsCSS["L-details-container"]}>
          <h2 className={LayoutsCSS["L-heading"]}>
            Explore <span style={{ color: "#FF9F0F" }}>dynamic</span> floor
            plans
          </h2>
          <p className={LayoutsCSS["L-para"]}>
            At Aloha Residence, we understand that one size doesn't fit all.
            Explore our dynamic floor plans, each thoughtfully designed to cater
            to your individual requirements.
          </p>
          <div className={LayoutsCSS["L-submenu"]}>
            {Object.keys(layouts).map((key) => (
              <button key={key} onClick={() => setSelectedLayout(key)}>
                Type {key}
              </button>
            ))}
          </div>
        </div>
        <div className={LayoutsCSS["L-section"]}>
          <h3 className={LayoutsCSS["L-h3"]}>Type {selectedLayout}</h3>
          <p className={LayoutsCSS["L-p"]}>{layoutDetails.description}</p>
          <img className={LayoutsCSS["L-img"]} src={layoutDetails.src} />
        </div>
      </div>
    </div>
  );
};

export default Layouts;
