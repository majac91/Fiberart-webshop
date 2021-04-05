import React from "react";
import heroStyles from "./hero.module.css";
import Button from "../../../../components/Button/Button";
import Img from "../../../../components/Img/Img";

import img1 from "../../../../img/hero-1.jpg";
import img2 from "../../../../img/hero-2.jpg";

const Hero = () => {
  return (
    <header className={`${heroStyles.container} ${heroStyles.hero} container`}>
      <div className={heroStyles.wrapper}>
        <div className={heroStyles.section}>
          <Img
            alt=""
            className={heroStyles.img1}
            src={img1}
            role="presentation"
          />
        </div>
        <div className={heroStyles.section}>
          <Img
            alt=""
            role="presentation"
            className={heroStyles.img2}
            src={img2}
          />
        </div>
        <div className={`${heroStyles.section} ${heroStyles.captionWrapper}`}>
          <div className={heroStyles.captionOutter}>
            <div className={heroStyles.captionInnerWrapper}>
              <p>New at &Thread</p>
              <h1 className={heroStyles.caption}>
                The wood & thread collection
              </h1>
              <h2 className={heroStyles.subcaption}>
                Philosophy of beauty in the practical use of everyday objects
              </h2>
              <Button
                txt="Explore"
                className={"btnLg"}
                className2={"heroBtn"}
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
