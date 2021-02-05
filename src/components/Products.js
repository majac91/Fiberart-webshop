import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import productStyles from "../css-modules/product.module.css";

import { db } from "../firebase/config.js";

const Products = () => {
  var productsRef = db.ref().child("products");
  const products = useFirebase(productsRef);
  console.log(products);

  return (
    <div className={`${productStyles.container} container`}>
      {products &&
        products.docs.map((product) => {
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
                <Link
                  className={productStyles.button}
                  to={`product/${product.id}`}
                >
                  View item
                </Link>
              </div>
            </div>
          );
        })}

      {/* fetch */}
      {/* {products &&
        products.docs.map((product, index) => {
          return (
            <div key={index} className={"container"}>
              <img className={shopStyles.product} src={product.image}></img>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <Link to={`product/${product.id}`}>View item</Link>
            </div>
          );
        })} */}
    </div>
  );
};

export default Products;
