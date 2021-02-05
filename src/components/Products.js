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
      {products &&
        products.docs.map((product) => {
          return (
            <div className={"container"}>
              <img className={shopStyles.product} src={product.image}></img>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <Link to={`product/${product.id}`}>View item</Link>
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
    </>
  );
};

export default Products;
