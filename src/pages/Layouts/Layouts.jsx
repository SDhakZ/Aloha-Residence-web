import React from "react";
import LayoutsCSS from "./layouts.module.css";
import Heading from "../../components/Heading/Heading";
import TypeA from "../../assets/LayoutImages/TypeA.png";
import TypeB from "../../assets/LayoutImages/TypeB.png";
import TypeC from "../../assets/LayoutImages/TypeC.png";
import TypeD from "../../assets/LayoutImages/TypeD.png";

const Layouts = () => {
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
        </div>
        <div className={LayoutsCSS["L-section-AB-container"]}>
          <div className={LayoutsCSS["L-section-AB"]}>
            <h3 className={LayoutsCSS["L-h3"]}>Type A</h3>
            <p className={LayoutsCSS["L-p"]}>2 bedroom apartment</p>
            <img className={LayoutsCSS["L-img-A"]} src={TypeA} />
          </div>
          <div className={LayoutsCSS["L-section-AB"]}>
            <h3 className={LayoutsCSS["L-h3"]}>Type B</h3>
            <p className={LayoutsCSS["L-p"]}>2 bedroom apartment</p>
            <img className={LayoutsCSS["L-img-B"]} src={TypeB} />
          </div>
        </div>
        <div className={LayoutsCSS["L-section-AB"]}>
          <h3 className={LayoutsCSS["L-h3"]}>Type C</h3>
          <p className={LayoutsCSS["L-p"]}>3 bedroom apartment</p>
          <img className={LayoutsCSS["L-img-C"]} src={TypeC} />
        </div>
        <div className={LayoutsCSS["L-section-AB"]}>
          {" "}
          <h3 className={LayoutsCSS["L-h3"]}>Type D</h3>
          <p className={LayoutsCSS["L-p"]}>
            Inter-connected double flat 4 bed room apartment
          </p>
          <img className={LayoutsCSS["L-img-D"]} src={TypeD} />
        </div>
      </div>
    </div>
  );
};

export default Layouts;
