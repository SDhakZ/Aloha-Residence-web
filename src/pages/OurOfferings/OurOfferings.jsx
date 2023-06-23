import React from "react";
import Features from "./Features/Features";
import Amenities from "./Amenities/Amenities";
import GoToTop from "../../components/GoToTop/GoToTop";
import { Helmet } from "react-helmet-async";
const OurOfferings = () => {
  const appUrl = import.meta.env.VITE_APP_WEB_URL;
  return (
    <div>
      <Helmet>
        <title>Our Offerings - Aloha Residence</title>
        <meta
          name="description"
          content="Discover what Aloha Residence has to offer. From luxurious apartments to top-notch amenities and services, explore our offerings and choose the best for your living."
        />
        <meta
          name="keywords"
          content="Aloha Residence, Apartment, Offerings, Amenities, Services"
        />
        <meta property="og:title" content="Our Offerings - Aloha Residence" />
        <meta
          property="og:description"
          content="Discover what Aloha Residence has to offer. Explore our range of amenities, services, and apartment options."
        />
        <meta property="og:image" content={`${appUrl}/OGImages/LogoOG.png`} />
        <meta property="og:url" content={`${appUrl}/our-offerings`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${appUrl}/our-offerings`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Features />
      <Amenities />
      <GoToTop />
    </div>
  );
};

export default OurOfferings;
