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
        <div className={`${textStyles[textClass]} ${textStyles.msgWrapper}`}>
          <p className={textStyles.msg}>{props.message}</p>
        </div>
        <div className={newsletterStyles.captionWrapper}>
          <p
            className={`${newsletterStyles.about} ${newsletterStyles.subcaption}`}
          >
            {props.subcaption}
          </p>
          <p className={`${textStyles[textClass]} ${textStyles.caption}`}>
            <span span className={textStyles.captionTxt}>
              {props.caption}
            </span>
          </p>

          <button className={"btn-black"} type="button">
            {props.btn}
          </button>
        </div>
      </div>

      <div title="shop owner" className={imgStyles.imgWrapper}>
        <img alt="" className={imgStyles.img}></img>
      </div>
    </div>
  );
}
