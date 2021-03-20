import { useHistory } from "react-router-dom";
import { useProductList } from "../../../../firebase/api";
import customSliderStyles from "./custom-slider.module.css";
import textStyles from "../../../../components/TextSection/text-section.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider() {
  const products = useProductList();
  const history = useHistory();

  var settings = {
    lazyLoad: true,
    accessibility: true,
    arrows: true,
    centerMode: true,
    slidesToShow: 3,
    swipe: true,
    useCss: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 481,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div aria-label="Slideshow" className={"slider-main container"}>
      <h2 className={`${textStyles.captionTxt} ${customSliderStyles.heading}`}>
        New from our studio
      </h2>
      <Slider {...settings} className={customSliderStyles.slideContainer}>
        {Object.keys(products).map((key) => {
          let product = products[key];

          return (
            <figure className={customSliderStyles.slide}>
              <div key={key} className={customSliderStyles.imgWrapper}>
                <img
                  alt={product.name}
                  className={customSliderStyles.img}
                  src={product.imageSmall}
                ></img>
                <figcaption className={customSliderStyles.captionWrapper}>
                  <h3 className={customSliderStyles.caption}>{product.name}</h3>

                  <button
                    className={customSliderStyles.button}
                    onClick={() => history.push(`product/${key}`)}
                  >
                    view item
                  </button>
                </figcaption>
              </div>
            </figure>
          );
        })}
      </Slider>
    </div>
  );
}
