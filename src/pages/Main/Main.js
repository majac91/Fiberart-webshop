import React from "react";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import About from "../../components/About";
import BrandMessage from "../../components/BrandMessage";
import MissionStatement from "../../components/MissionStatement";
import ProductCategories from "../../components/MissionStatement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Featured from "../../components/Featured";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <BrandMessage />
        <MissionStatement />
        <ProductCategories />
        <Newsletter />
        <Featured
          section="featured"
          message="Featured promo"
          caption="The Styling Book"
          subcaption="now available"
          paragraph=" All my best-kept secrets to decorate your entire home. From minimal table settings to cozy bathroom decorations. Everything helpful and inspiring to pour love into your home. "
          btn="buy now"
        ></Featured>
        <Slider />
        <About
          section="about"
          message="About me"
          caption="I have a affinity for simple and organic materials. I see beauty in the purest of things and I am so excited to share my love for design to help you create a cozy and sereen home. "
          subcaption="hey lovely, I am"
          btn="read more"
        ></About>
      </main>
    </>
  );
};

export default Main;
