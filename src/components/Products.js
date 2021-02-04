import React from "react";
import useFirebase from "../hooks/useFirebase";
import { db } from "../firebase/config.js";

const Products = () => {
  var productsRef = db.ref().child("Product data");
  const products = useFirebase(productsRef);
  products.docs.forEach((product) => console.log(product.image));

  return (
    <>
      {products.docs.map((product) => {
        return (
          <div className={"container"}>
            <div>{product.title}</div>
            <img src={product.image}></img>
          </div>
        );
      })}
    </>
  );
};

export default Products;
// products.docs.forEach((product) =>
// <div>{product.title}</div>
//  <img src={product.image}></img>
