import React from "react";
import LayoutsCSS from "./layouts.module.css";
import Heading from "../../components/Heading/Heading";
import TypeA from "../../assets/LayoutImages/TypeA.webp";
import TypeB from "../../assets/LayoutImages/TypeB.webp";
import TypeC from "../../assets/LayoutImages/TypeC.webp";
import TypeD from "../../assets/LayoutImages/TypeD.webp";
import GoToTop from "../../components/GoToTop/GoToTop";
import { Helmet } from "react-helmet-async";
const Layouts = () => {
  const appUrl = import.meta.env.VITE_APP_WEB_URL;
  return (
    <div className={LayoutsCSS["L-main-container"]}>
      <Helmet>
        <title>Layouts - Aloha Residence</title>
        <meta
          name="description"
          content="Explore different layout options for apartments at Aloha Residence. Find the perfect apartment layout that suits your lifestyle and preferences."
        />
        <meta
          name="keywords"
          content="Aloha Residence, Apartment, Layouts, Floor Plans, Options"
        />
        <meta property="og:title" content="Layouts - Aloha Residence" />
        <meta
          property="og:description"
          content="Explore different layout options for apartments at Aloha Residence. Find the perfect apartment layout that suits your lifestyle and preferences."
        />
        <meta property="og:image" content={`${appUrl}/OGImages/LogoOG.png`} />
        <meta property="og:url" content={`${appUrl}/layouts`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${appUrl}/layouts`} />
      </Helmet>
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
            <img
              className={LayoutsCSS["L-img-A"]}
              alt="Type A Layout"
              src={TypeA}
              title="Type A Layout Apartment"
            />
          </div>
          <div className={LayoutsCSS["L-section-AB"]}>
            <h3 className={LayoutsCSS["L-h3"]}>Type B</h3>
            <p className={LayoutsCSS["L-p"]}>2 bedroom apartment</p>
            <img
              alt="Type B Layout"
              className={LayoutsCSS["L-img-B"]}
              src={TypeB}
              title="Type B Layout Apartment"
            />
          </div>
        </div>
        <div className={LayoutsCSS["L-section-AB"]}>
          <h3 className={LayoutsCSS["L-h3"]}>Type C</h3>
          <p className={LayoutsCSS["L-p"]}>3 bedroom apartment</p>
          <img
            alt="Type C Layout"
            className={LayoutsCSS["L-img-C"]}
            src={TypeC}
            title="Type C Layout Apartment"
          />
        </div>
        <div className={LayoutsCSS["L-section-AB"]}>
          {" "}
          <h3 className={LayoutsCSS["L-h3"]}>Type D</h3>
          <p className={LayoutsCSS["L-p"]}>
            Inter-connected double flat 4 bed room apartment
          </p>
          <img
            alt="Type D Layout"
            className={LayoutsCSS["L-img-D"]}
            src={TypeD}
            title="Type D Layout Apartment"
          />
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Layouts;
