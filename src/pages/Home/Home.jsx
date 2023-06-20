import React from "react";
import HomeCSS from "./home.module.css";
import { ContactComponent } from "../ContactUs/ContactComponent";
import { HomeAboutUs } from "./AboutUsSection/HomeAboutUs";
const Home = () => {
  return (
    <div className={HomeCSS["H-main-container"]}>
      <section></section>
      <section>
        <HomeAboutUs />
      </section>
      <section></section>
      <section></section>
      <section>
        <ContactComponent />
      </section>
    </div>
  );
};

export default Home;
