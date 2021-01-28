import React from "react";
import textStyles from "../css-modules/text-section.module.css";
import imgStyles from "../css-modules/photo-text-section.module.css";
import newsletterStyles from "../css-modules/newsletter.module.css";
const classNames = require("classnames");

export default function Featured(props) {
  let textClass = props.section;
  return (
    <>
      <div
        className={`${textStyles[textClass]} ${textStyles.container} d-flex container`}
      >
        <div className={imgStyles.imgWrapper}>
          <img className={imgStyles.img}></img>
        </div>

        <div className={`${imgStyles.text} `}>
          <div className={`${textStyles[textClass]} ${textStyles.brand}`}>
            <p>{props.message}</p>
          </div>
          <div className={imgStyles.textWrapper}>
            <p className={`${textStyles[textClass]} ${textStyles.caption}`}>
              <span>{props.caption}</span>
            </p>
            <p className={newsletterStyles.subcaption}>{props.subcaption}</p>
            <p
              className={`${textStyles[textClass]} ${newsletterStyles.paragraph}  text-column`}
            >
              <span>{props.paragraph} </span>
            </p>
            <button className={newsletterStyles.btn} type="button">
              {props.btn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
