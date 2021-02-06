import React, { useMemo } from "react";
import useFirebase from "../hooks/useFirebase";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase/config.js";
import productStyles from "../css-modules/product.module.css";

const Product = () => {
  const { id } = useParams();
  var productsRef = useMemo(() => db.ref().child(`products/${id}`), [id]);
  const { data: product } = useFirebase(productsRef);

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
