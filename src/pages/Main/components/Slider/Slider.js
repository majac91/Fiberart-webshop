import customSliderStyles from "./custom-slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../../../img/slide1.jpg";
import social1 from "../../../../img/social1.jpg";

import slide2 from "../../../../img/slide2.jpg";
import slide3 from "../../../../img/slide3.jpg";
import slide4 from "../../../../img/slide4.jpg";

export default function CustomSlider() {
  var settings = {
    dots: true,
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <Slider
      {...settings}
      className={`${customSliderStyles.slideContainer} container`}
    >
      <picture className={customSliderStyles.wrapper}>
        <img
          src={slide1}
          alt="detail of wall hanging in a wooden frame"
          className={`${customSliderStyles.img}`}
        />
      </picture>

      <picture className={customSliderStyles.wrapper}>
        <img
          src={slide2}
          alt="ombre pink and white tapestry"
          className={customSliderStyles.img}
        ></img>
      </picture>

      <picture className={customSliderStyles.wrapper}>
        <img
          src={slide3}
          alt="wool yarn in grey and white"
          className={customSliderStyles.img}
        ></img>
      </picture>

      <picture className={customSliderStyles.wrapper}>
        <img
          src={slide4}
          alt="minimalist gray and white wall hanging"
          className={customSliderStyles.img}
        ></img>
      </picture>
    </Slider>
  );
}
