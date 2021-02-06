import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import productStyles from "../css-modules/product.module.css";

import { db } from "../firebase/config.js";

const Products = () => {
  var productsRef = useMemo(() => db.ref().child(`products`), []);
  const { data: products } = useFirebase(productsRef);

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
