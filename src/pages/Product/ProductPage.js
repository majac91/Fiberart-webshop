import React, { useEffect } from "react";
import { useFetchProduct } from "../../firebase/api";
import { useParams } from "react-router-dom";
import productPageStyles from "./product-page.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = ({
  itemIds,
  onAddToCart,
  setCartItems,
  cartItems,
  setCartIsOpen,
}) => {
  function onCartClick() {
    setCartIsOpen((prev) => !prev);
  }
  const { id } = useParams();
  const product = useFetchProduct(id);

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(itemIds));
  }, [itemIds]);

  const slideImgs = product.sliderImages
    ? Object.keys(product.sliderImages).map((key) => [
        product.sliderImages[key],
      ])
    : null;

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function handleAddCartItem() {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
      onAddToCart();
    }
    onCartClick();
  }

  if (!product) {
    return <p>Item not found</p>;
  }

  return (
    <div className={`${productPageStyles.container} container`}>
      <header className={productPageStyles.header}>
        <div className={productPageStyles.caption}>{product.name} </div>
      </header>
      <div className={productPageStyles.productWrapper}>
        <div className={productPageStyles.imgWrapper}>
          <Slider
            className={`${productPageStyles.productSlider} productSlider`}
            {...settings}
          >
            {slideImgs?.map((img) => (
              <div className={productPageStyles.slide}>
                <div
                  className={productPageStyles.product}
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                ></div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={productPageStyles.description}>
          <h2>Description</h2>
          <p className={productPageStyles.p}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Donec quam felis, ultricies nec,
            pellentesque eu,
          </p>
          <button
            onClick={handleAddCartItem}
            className={"btn-black ignoreClickOutside"}
            type="button"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
