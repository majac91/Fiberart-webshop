import React from "react";
import textStyles from "./TextSection/text-section.module.css";
import imgStyles from "../css-modules/photo-text-section.module.css";
import newsletterStyles from "../components/Newsletter/newsletter.module.css";

export default function About(props) {
  let textClass = "about";
  return (
    <div
      className={`${textStyles[textClass]} ${imgStyles[textClass]} ${textStyles.container} d-flex container`}
    >
      <div className={`${imgStyles.text}`}>
        <div className={`${textStyles[textClass]} ${textStyles.brand}`}>
          <p>{props.message}</p>
        </div>
        <div className={imgStyles.textWrapper}>
          <p
            className={`${newsletterStyles.about} ${newsletterStyles.subcaption}`}
          >
            {props.subcaption}
          </p>
          <p className={`${textStyles[textClass]} ${textStyles.caption}`}>
            <span>{props.caption}</span>
          </p>

          <button className={newsletterStyles.btn} type="button">
            {props.btn}
          </button>
        </div>
      </div>

      <div className={imgStyles.imgWrapper}>
        <img className={imgStyles.img}></img>
      </div>
    </div>
  );
}
