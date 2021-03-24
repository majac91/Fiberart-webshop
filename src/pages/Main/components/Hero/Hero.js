import React from "react";
import heroStyles from "./hero.module.css";
import Button from "../../../../components/Button/Button";

import img1 from "../../../../img/header-main-1.jpg";
import img2 from "../../../../img/header-main-2.jpg";

const Hero = () => {
  return (
    <header className={`${heroStyles.container} container`}>
      <div className={heroStyles.wrapper}>
        <div className={heroStyles.section}>
          <img
            alt=""
            role="presentation"
            className={heroStyles.img1}
            src={img1}
          ></img>
        </div>
        <div className={heroStyles.section}>
          <img
            alt=""
            role="presentation"
            className={heroStyles.img2}
            src={img2}
          ></img>
        </div>
        <div className={`${heroStyles.section} ${heroStyles.captionWrapper}`}>
          <div className={heroStyles.captionOutter}>
            <div className={heroStyles.captionInnerWrapper}>
              <p>New at &Thread</p>
              <h1 className={heroStyles.caption}>
                The wood & thread collection
              </h1>
              <h2 className={heroStyles.subcaption}>
                <span> Philosophy of beauty in the practical</span>
                <span>use of everyday objects</span>
              </h2>
              <Button
                txt="Explore"
                className={"headerBtn"}
                s
                onClick={() => {
                  window.location.href = "#main";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
