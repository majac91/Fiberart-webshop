import React from "react";
import useFirebase from "../hooks/useFirebase";
import { db } from "../firebase/config.js";

const Products = () => {
  var productsRef = db.ref().child("Product data"); //database object
  const products = useFirebase(productsRef);
  console.log(products);

  return <div></div>;
};

export default Products;
