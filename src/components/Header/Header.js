import React from "react";
import headerStyles from "./header.module.css";

//header imgs
import main1 from "../../img/header1.jpg";
import main2 from "../../img/header2.jpg";
import main3 from "../../img/header3.jpg";
import main4 from "../../img/asadad.jpg";
import checkout from "../../img/header-checkout.jpg";
import shop from "../../img/shop-header.jpg";
import about from "../../img/img1.jpg";

export default function Header({ page }) {
  return (
    <>
      {page === "checkout" && (
        <header className={`${headerStyles.container} container`}>
          <img
            alt="ombre tapestry detail"
            xs
            className={headerStyles.heroHeader}
            src={checkout}
          />
        </header>
      )}
      {page === "shop" && (
        <header className={`${headerStyles.container} container`}>
          <img
            alt="white wool tapestry detail"
            className={headerStyles.heroHeader}
            src={shop}
          />
        </header>
      )}
      {page === "about" && (
        <header className={`${headerStyles.container} container`}>
          <img
            alt="dried pampus grass detail"
            className={headerStyles.heroHeader}
            src={about}
          />
        </header>
      )}
      {page === "main" && (
        <header className={headerStyles.container}>
          <div className={`${headerStyles.headerImgs} container`}>
            <img
              alt="hand loom"
              className={headerStyles.headerImg}
              src={main1}
            ></img>
            <img
              alt="oval tapestry detail"
              className={headerStyles.headerImg}
              src={main2}
            ></img>
            <img
              alt="cotton flower"
              className={headerStyles.headerImg}
              src={main3}
            ></img>
            <img
              alt="minimalist tapestry"
              className={headerStyles.headerImg}
              src={main4}
            ></img>
          </div>
        </header>
      )}
    </>
  );
}
