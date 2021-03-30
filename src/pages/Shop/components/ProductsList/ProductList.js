import React, { useRef } from "react";
import { useElementOnScreen } from "../../../../hooks/useOnIntersection";
import { Link } from "react-router-dom";
import { useProductList } from "../../../../firebase/api";
import Loader from "../../../../components/Loader/Loader";
import productStyles from "../../components/ProductsList/product.module.css";
const cx = require("classnames");

const Products = () => {
  const products = useProductList();
  const placeholder = useRef();

  const isOnScreen = useElementOnScreen(placeholder);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  return (
    <>
      {isOnScreen ? (
        <section className={`${productStyles.container} container`}>
          {Object.keys(products).map((key) => {
            let product = products[key];
            return (
              <div key={key} className={productStyles.imgWrapper}>
                <Link to={`product/${key}`} className={productStyles.imgLink} />
                <img
                  alt={product.name}
                  className={productStyles.productImg}
                  src={product.image}
                ></img>
                <div className={productStyles.captionWrapper}>
                  <h2 className={productStyles.caption}>{product.name}</h2>
                  <h3 className={productStyles.price}>{product.price}</h3>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <div ref={placeholder} className={placeholderStyle}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default Products;
