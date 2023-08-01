import React from "react";
import HomeCSS from "./home.module.css";
import { ContactComponent } from "../ContactUs/ContactComponent";
import { HomeAboutUs } from "./AboutUsSection/HomeAboutUs";
import { Hero } from "./Hero/Hero";
import { Offerings } from "./Offerings/Offerings";
import { Helmet } from "react-helmet-async";
import GoToTop from "../../components/GoToTop/GoToTop";
const Home = () => {
  const appUrl = import.meta.env.VITE_APP_WEB_URL;
  return (
    <div className={HomeCSS["H-main-container"]}>
      <Helmet>
        <title>Aloha Residence - Premier Apartment Living</title>
        <meta
          name="description"
          content="Welcome to Aloha Residence - a premier apartment community offering luxurious living spaces in Nepal. Discover your dream home and experience the epitome of modern living at Aloha Residence in Nepal."
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Aloha Residence, Aloha apartment, aloha residence, apartments in nepal, Aloha Inn, Apartment, Home, Luxury Living, Amenities, Nepal Apartment, Kathmandu Apartments"
        />
        <meta
          property="og:title"
          content="Aloha Residence - Premier Apartment Living"
        />
        <meta
          property="og:description"
          content="Welcome to Aloha Residence - a premier apartment community offering luxurious living spaces in Nepal. Discover your dream home and experience the epitome of modern living at Aloha Residence in Nepal."
        />
        <meta property="og:image" content={`${appUrl}/OGImages/LogoOG.png`} />
        <meta property="og:url" content={`${appUrl}/`} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={`${appUrl}/favicon.ico`} />
        <link rel="canonical" href={`${appUrl}/`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section>
        <Hero />
      </section>
      <section className={HomeCSS["H-about-section"]}>
        <HomeAboutUs />
      </section>
      <section className={HomeCSS["H-offerings-section"]}>
        <Offerings />
      </section>
      <section></section>
      <section>
        <ContactComponent slide={false} />
      </section>
      <GoToTop />
    </div>
  );
};

export default Home;
