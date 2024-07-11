import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Collection from "../components/Collection";
import Whoweare from "../components/Whoweare";
import Process from "../components/Process";
import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";
import Swiper2 from "../components/Swiper2";
import Brands from "../components/Brands";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Whoweare />
      <Collection />
      <Process />
      {/* <Swiper2 />
      <Brands /> */}
      <FooterForm />
      <Footer />
    </>
  );
};

export default Homepage;
