import React, { useRef } from "react";
import useDivOnScreen from "../.././../../hooks/useOnIntersection";
import { Link } from "react-router-dom";
import { useProductList } from "../../../../firebase/api";
import productStyles from "../../components/ProductsList/product.module.css";

const Products = () => {
  const products = useProductList();
  const placeholder = useRef();
  const IsOnScreen = useDivOnScreen(placeholder);

  return (
    <>
      {IsOnScreen ? (
        <div className={`${productStyles.container} container`}>
          {products &&
            Object.keys(products).map((key) => {
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
                    <div className={productStyles.caption}>{product.name}</div>
                    <div className={productStyles.price}>{product.price}</div>

                    <Link
                      className={productStyles.button}
                      to={`product/${key}`}
                    >
                      view item
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div ref={placeholder}></div>
      )}
    </>
  );
};

export default Products;
