// import React from "react";
import customSliderStyles from "./custom-slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      className={`${customSliderStyles.slideContainer} container`}
    >
      <div className={customSliderStyles.wrapper}>
        <div
          className={`${customSliderStyles.img} ${customSliderStyles.slide1}`}
        ></div>
      </div>
      <div className={customSliderStyles.wrapper}>
        <div
          className={`${customSliderStyles.img} ${customSliderStyles.slide2}`}
        ></div>
      </div>
      <div className={customSliderStyles.wrapper}>
        <div
          className={`${customSliderStyles.img} ${customSliderStyles.slide3}`}
        ></div>
      </div>
      <div className={customSliderStyles.wrapper}>
        <div
          className={`${customSliderStyles.img} ${customSliderStyles.slide4}`}
        ></div>
      </div>
    </Slider>
  );
}
