import React from "react";
import textStyles from "../components/TextSection/text-section.module.css";
import imgStyles from "../css-modules/photo-text-section.module.css";
import newsletterStyles from "../components/Newsletter/newsletter.module.css";

export default function Featured(props) {
  let textClass = props.section;
  return (
    <section className={textClass}>
      <div
        className={`${textStyles[textClass]} ${textStyles.container} d-flex container`}
      >
        <div title={textClass} className={imgStyles.imgWrapper}>
          <img alt="" className={imgStyles.img}></img>
        </div>

        <div className={`${imgStyles.text} `}>
          <div className={`${textStyles[textClass]} ${textStyles.msgWrapper}`}>
            <p className={textStyles.msg}>{props.message}</p>
          </div>
          <div className={imgStyles.textWrapper}>
            <p className={`${textStyles[textClass]} ${textStyles.caption}`}>
              <span className={textStyles.captionTxt}>{props.caption}</span>
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
    </section>
  );
}
