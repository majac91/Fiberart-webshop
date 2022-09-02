import React, { useRef } from "react";
import { useElementOnScreen } from "../../../../hooks/useOnIntersection";
import { Link } from "react-router-dom";
import { useProductList } from "../../../../firebase/api";
import Loader from "../../../../components/Loader/Loader";
import Text from '../../../../components/Text/Text';
import productStyles from "../../components/ProductsList/product.module.css";
const cx = require("classnames");

const Products = ({ category }) => {
  const products = useProductList(category);
  const placeholder = useRef();

  const isOnScreen = useElementOnScreen(placeholder);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  return (
    <>
      {isOnScreen ? (
        <section className='container'>
          <Text caption={category.toUpperCase()} />
          <div className={productStyles.container}>
            {Object.keys(products).map((key) => {
              let product = products[key];
              return (
                <div key={key} className={productStyles.imgWrapper}>
                  <Link to={`product/${key}`} className={productStyles.imgLink} />
                  <img
                    alt={product.name}
                    className={productStyles.productImg}
                    src={product.image}
                  ></img>
                  <div className={productStyles.captionWrapper}>
                    <h2 className={productStyles.caption}>{product.name}</h2>
                    <h3 className={productStyles.price}>{product.price}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
          <div ref={placeholder} className={placeholderStyle}>
            <Loader />
          </div>
        )}
    </>
  );
};

export default Products;
