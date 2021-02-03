import React from "react";
import useFirebase from "../hooks/useFirebase";
import { db } from "../firebase/config.js";

const Products = () => {
  //   const { products } = useFirestore("products");
  var productsRef = db.ref().child("Product data"); //database object
  useFirebase(productsRef);

  return <div></div>;
};

export default Products;
