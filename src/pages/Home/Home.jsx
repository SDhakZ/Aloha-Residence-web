import React from "react";
import HomeCSS from "./home.module.css";
import { ContactComponent } from "../ContactUs/ContactComponent";
import { HomeAboutUs } from "./AboutUsSection/HomeAboutUs";
import { Hero } from "./Hero/Hero";
const Home = () => {
  return (
    <div className={HomeCSS["H-main-container"]}>
      <section>
        <Hero />
      </section>
      <section className={HomeCSS["H-about-section"]}>
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
