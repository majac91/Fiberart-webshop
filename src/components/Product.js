import React from "react";
import useFirebase from "../hooks/useFirebase";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase/config.js";
import productStyles from "../css-modules/product.module.css";

const Product = () => {
  const params = useParams();
  var productsRef = db.ref().child("products");
  const products = useFirebase(productsRef);
  const product = products.docs.filter((product) => product.id === params.id);
  console.log(products);

  if (!product[0]) {
    return null;
  }

  return (
    <div className={`${productStyles.container} container`}>
      <div className={productStyles.name}>{product[0].name}</div>
      <div className={productStyles.price}>{product[0].price}</div>
      <div className={productStyles.imgWrapper}>
        <div
          className={productStyles.product}
          style={{
            backgroundImage: `url(${product[0].image})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Product;
