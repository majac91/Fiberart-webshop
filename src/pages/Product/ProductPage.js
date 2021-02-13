import React from "react";
import { useFetchProduct } from "../../firebase/api";
import { useParams } from "react-router-dom";
import productPageStyles from "./product-page.module.css";
import newsletterStyles from "../../components/Newsletter/newsletter.module.css";

const ProductPage = ({ onAddToCart, setCartItems, cartItems, onCartClick }) => {
  const { id } = useParams();
  const product = useFetchProduct(id);

  if (!product) {
    return <p>Item not found</p>;
  }

  function handleAddCartItem() {
    if (!cartItems.includes(product)) {
      setCartItems([...cartItems, product]);
      onAddToCart();
      onCartClick();
    }
  }

  return (
    <div className="container">
      <header className={productPageStyles.header}>
        <div className={productPageStyles.caption}>{product.name}</div>
      </header>
      {/* <div className={productStyles.price}>{product.price}</div> */}
      <div className={productPageStyles.productWrapper}>
        <div className={productPageStyles.imgWrapper}>
          <div
            className={productPageStyles.product}
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          ></div>
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
            className={newsletterStyles.btn}
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
