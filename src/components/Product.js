import React from "react";
import { useFetchProduct } from "../firebase/api";
import { Link, useParams } from "react-router-dom";
import productStyles from "../css-modules/product.module.css";

const Product = () => {
  const { id } = useParams();
  const product = useFetchProduct(id);
  if (!product) {
    return <p>Item not found</p>;
  }

  return (
    <div className={`${productStyles.container} container`}>
      <div className={productStyles.name}>{product.name}</div>
      <div className={productStyles.price}>{product.price}</div>
      <div className={productStyles.imgWrapper}>
        <div
          className={productStyles.product}
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Product;
