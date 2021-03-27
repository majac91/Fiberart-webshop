import React from "react";
import quoteStyles from "../Quote/quote.module.css";
import img1 from "../../../img/categories.jpg";

const Quote = () => {
  return (
    <section className={`${quoteStyles.container} container`}>
      <p className={quoteStyles.text}>
        <img src={img1} className={quoteStyles.img1} />
        Each piece is unique and made with love and attention in order to
        reflect the personality and aesthetics of your home
        <img src={img1} className={quoteStyles.img2}></img>
      </p>
    </section>
  );
};

export default Quote;
