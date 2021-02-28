import React from "react";
import headerStyles from "./header.module.css";

//header imgs
import header1 from "../../img/header1.jpg";
import header2 from "../../img/header2.jpg";
import header3 from "../../img/header3.jpg";
import header4 from "../../img/asadad.jpg";
import checkout from "../../img/header-checkout.jpg";
import shop from "../../img/shop-header.jpg";
import about from "../../img/img1.jpg";

export default function Header({ page }) {
  return (
    <>
      {page === "checkout" && (
        <header className={`${headerStyles.container} container`}>
          <div
            role="img"
            aria-label="ombre tapestry detail"
            className={headerStyles.heroHeader}
            style={{ backgroundImage: `url(${checkout})` }}
          ></div>
        </header>
      )}
      {page === "shop" && (
        <header className={`${headerStyles.container} container`}>
          <div
            role="img"
            aria-label="white wool tapestry detail"
            className={headerStyles.heroHeader}
            style={{ backgroundImage: `url(${shop})` }}
          ></div>
        </header>
      )}
      {page === "about" && (
        <header className={`${headerStyles.container} container`}>
          <div
            role="img"
            aria-label="dried pampus grass detail"
            className={headerStyles.heroHeader}
            style={{ backgroundImage: `url(${about})` }}
          ></div>
        </header>
      )}
      {page === "main" && (
        <header className={headerStyles.container}>
          <div className={`${headerStyles.headerImgs} container`}>
            <img alt="" className={headerStyles.headerImg} src={header1}></img>
            <img alt="" className={headerStyles.headerImg} src={header2}></img>
            <img alt="" className={headerStyles.headerImg} src={header3}></img>
            <img alt="" className={headerStyles.headerImg} src={header4}></img>
          </div>
        </header>
      )}
    </>
  );
}
