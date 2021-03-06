import React from "react";
import { Link } from "react-router-dom";
import { useProductList } from "../../../../firebase/api";
import productStyles from "../../components/ProductsList/product.module.css";

const Products = () => {
  const products = useProductList();

  return (
    <div className={`${productStyles.container} container`}>
      {products &&
        Object.keys(products).map((key) => {
          let product = products[key];
          return (
            <div key={key} className={productStyles.imgWrapper}>
              <Link
                to={`product/${key}`}
                className={productStyles.productImg}
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></Link>
              <div className={productStyles.captionWrapper}>
                <div className={productStyles.caption}>{product.name}</div>
                <div className={productStyles.price}>{product.price}</div>

                <Link className={productStyles.button} to={`product/${key}`}>
                  view item
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
