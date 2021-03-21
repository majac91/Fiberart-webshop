import React from "react";
import headerStyles from "./header.module.css";
import textStyles from "../TextSection/text-section.module.css";
import Button from "../Button/Button";

//header imgs

import main1 from "../../img/header-main-1.jpg";
import main2 from "../../img/header-main-2.jpg";
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
        <header className={`${headerStyles.mainContainer} container`}>
          <div className={headerStyles.main}>
            <div className={headerStyles.section}>
              <img
                alt=""
                role="presentation"
                className={headerStyles.mainImg1}
                src={main1}
              ></img>
            </div>
            <div className={headerStyles.section}>
              <img
                alt=""
                role="presentation"
                className={headerStyles.mainImg2}
                src={main2}
              ></img>
            </div>
            <div
              className={`${headerStyles.section} ${headerStyles.captionWrapper}`}
            >
              <div className={headerStyles.captionWrapper}>
                <div className={headerStyles.captionInnerWrapper}>
                  <p>New at &Thread</p>
                  <h1 className={headerStyles.caption}>
                    The wood & thread collection
                  </h1>
                  <h2 className={headerStyles.subcaption}>
                    <span> Philosophy of beauty in the practical</span>
                    <span>use of everyday objects</span>
                  </h2>
                  <Button
                    txt="Explore"
                    className={"headerBtn"}
                    onClick={() => {
                      window.location.href = "#main";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
