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

  const isOnScreen = useElementOnScreen(placeholder, null);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  return (
    <>
      {isOnScreen ? (
        <div className={`${productStyles.container} container`}>
          {Object.keys(products).map((key) => {
            let product = products[key];
            return (
              <div key={key} className={productStyles.imgWrapper}>
                <Link
                  to={`product/${key}`}
                  className={productStyles.imgLink}
                ></Link>
                <img
                  alt={product.name}
                  className={productStyles.productImg}
                  src={product.image}
                ></img>
                <div className={productStyles.captionWrapper}>
                  <h3 className={productStyles.caption}>{product.name}</h3>
                  <h4 className={productStyles.price}>{product.price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div ref={placeholder} className={placeholderStyle}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default Products;
