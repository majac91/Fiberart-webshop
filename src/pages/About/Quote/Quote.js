import React from "react";
import quoteStyles from "../Quote/quote.module.css";
import img1 from "../../../img/wreath.png";

const Quote = () => {
  return (
    <section className={`${quoteStyles.container} container`}>
      <p className={quoteStyles.text}>
        <div className={quoteStyles.imgWrapper}>
          {" "}
          <img
            alt=""
            role="presentation"
            src={img1}
            className={quoteStyles.img}
          />
        </div>
        Each piece is unique and made with love and attention in order to
        reflect the personality and aesthetics of your home
      </p>
    </section>
  );
};

export default Quote;
