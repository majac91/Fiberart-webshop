import React from "react";
import headerStyles from "./header.module.css";

//header imgs

import social1 from "../../img/social1.jpg";
import main from "../../img/header-main-page.jpg";
import mainMobile from "../../img/header-main-small.jpg";

import checkout from "../../img/header-checkout-page.jpg";
import shop from "../../img/header-shop-page.jpg";
import about from "../../img/header-about-page.jpg";

export default function Header({ page }) {
  return (
    <>
      {page === "checkout" && (
        <header className={`${headerStyles.container} container`}>
          <img
            alt="ombre tapestry detail"
            xs
            className={headerStyles.header}
            src={checkout}
          />
        </header>
      )}
      {page === "shop" && (
        <header className={`${headerStyles.container} container`}>
          <img
            alt="white wool tapestry detail"
            className={headerStyles.header}
            src={shop}
          />
        </header>
      )}
      {page === "about" && (
        <header className={`${headerStyles.container} container`}>
          <img
            alt="dried pampus grass detail"
            className={headerStyles.header}
            src={about}
          />
        </header>
      )}
      {page === "main" && (
        <header className={`${headerStyles.container} container`}>
          {/* <div className={`${headerStyles.headerImgs} container`}> */}
          <img
            alt="light blue colored cotton thread"
            className={headerStyles.hero}
            src={main}
            srcset={`${main} 1600w, ${mainMobile} 300w`}
            imagesizes="90vw"
          />
          {/* </div> */}
        </header>
      )}
    </>
  );
}
