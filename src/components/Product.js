import React from "react";
import useFirebase from "../hooks/useFirebase";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase/config.js";
import shopStyles from "../css-modules/shop.module.css";

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
    <div>
      <h1>{product[0].name}</h1>
      <h2>{product[0].price}</h2>
      <img className={shopStyles.product} src={product[0].image}></img>
    </div>
  );
};

export default Product;
