import React, { useRef } from "react";
import { useListOnScreen } from "../../../../hooks/useOnIntersection";
import { Link } from "react-router-dom";
import { useProductList } from "../../../../firebase/api";
import Loader from "../../../../components/Loader/Loader";
import productStyles from "../../components/ProductsList/product.module.css";
const cx = require("classnames");

const Products = () => {
  const products = useProductList();
  // const placeholder = useRef();
  const imgRefs = useRef([]);

  const isOnScreen = useListOnScreen(imgRefs);
  console.log(isOnScreen);

  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  const createElements = () => {
    let elements = [];
    if (products) {
      Object.keys(products).map((key) => {
        let product = products[key];
        return elements.push(
          <div
            ref={(ref) => imgRefs.current.push(ref)}
            key={key}
            className={productStyles.imgWrapper}
          >
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
              <div className={productStyles.caption}>{product.name}</div>
              <div className={productStyles.price}>{product.price}</div>

              <Link className={productStyles.button} to={`product/${key}`}>
                view item
              </Link>
            </div>
          </div>
        );
      });
    }
    return elements;
  };

  return (
    <>
      <div className={`${productStyles.container} container`}>
        {createElements()}
      </div>

      {/* {isOnScreen ? (
        <div className={`${productStyles.container} container`}>
          {createElements()}
        </div>
      ) : (
        <div className={placeholderStyle}>
          <Loader />
        </div>
      )} */}
    </>
  );
};

export default Products;
