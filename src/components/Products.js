import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import shopStyles from "../css-modules/shop.module.css";
import { db } from "../firebase/config.js";

const Products = () => {
  var productsRef = db.ref().child("products");
  const products = useFirebase(productsRef);

  return (
    <>
      {/* firebase syntax */}
      {/* {products.docs.map((product) => {
        return (
          <div className={"container"}>
            <div>{product.data.name}</div>
            <div>{product.data.price}</div>
            <img className={shopStyles.product} src={product.data.image}></img>
          </div>
        );
      })} */}

      {/* fetch */}
      {products &&
        products.docs.map((product, index) => {
          return (
            <div key={index} className={"container"}>
              <img className={shopStyles.product} src={product.image}></img>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <Link to={`product/${product.name}`}>View item</Link>
            </div>
          );
        })}
    </>
  );
};

export default Products;
