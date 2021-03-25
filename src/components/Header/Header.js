import React from "react";
import headerStyles from "./header.module.css";
//header imgs
import checkout from "../../img/header-checkout-page.jpg";
import shop from "../../img/header-shop-page.jpg";
import about from "../../img/header-about-page.jpg";

const cx = require("classnames");

export default function Header({ page, caption }) {
  let textClass = cx({
    checkout: page === "checkout",
    contact: page === "contact",
    shop: page === "shop",
    about: page === "about",
  });

  return (
    <>
      <header
        className={`${headerStyles.container} ${headerStyles[textClass]}`}
      >
        {page === "shop" && (
          <img
            alt="white wool tapestry detail"
            className={headerStyles.img}
            src={shop}
          />
        )}
        {page === "about" && (
          <>
            <img
              alt="dried pampus grass detail"
              className={headerStyles.img}
              src={about}
            />
            <p>since</p>
            <p className={headerStyles.year}>1980</p>
          </>
        )}
        <h1
          className={cx(headerStyles[textClass], headerStyles.captionWrapper)}
        >
          <span className={headerStyles.caption}>{caption}</span>
        </h1>
      </header>
    </>
  );
}
