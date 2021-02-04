import React from "react";
import useFirebase from "../hooks/useFirebase";
import shopStyles from "../css-modules/shop.module.css";
import { db } from "../firebase/config.js";

const Products = () => {
  var productsRef = db.ref().child("Product data");
  const products = useFirebase(productsRef);
  console.log(products);

  return (
    <>
      {products.docs.map((product) => {
        return (
          <div className={"container"}>
            <div>{product.data.title}</div>

            {/*BUG renders data for last product only */}
            <img className={shopStyles.product} src={product.data.image}></img>
          </div>
        );
      })}
    </>
  );
};

export default Products;
