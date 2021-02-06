import React from "react";
import { Link } from "react-router-dom";
import { useProductList } from "../firebase/api";
import productStyles from "../css-modules/product.module.css";

const Products = () => {
  const products = useProductList();

  return (
    <div className={`${productStyles.container} container`}>
      {products &&
        Object.keys(products).map((key) => {
          let product = products[key];
          return (
            <div className={productStyles.imgWrapper}>
              <div
                className={productStyles.product}
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
              <div className={productStyles.caption}>
                <div className={productStyles.name}>{product.name}</div>
                <div className={productStyles.price}>{product.price}</div>
                <Link className={productStyles.button} to={`product/${key}`}>
                  View item
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
