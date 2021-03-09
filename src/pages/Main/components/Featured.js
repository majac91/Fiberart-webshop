import React, { useRef } from "react";
import textStyles from "../../../components/TextSection/text-section.module.css";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import newsletterStyles from "../components/Newsletter/newsletter.module.css";
import { useImgOnScreen } from "../../../hooks/useOnIntersection";
import featuredImg from "../../../img/styling2.jpg";
import Loader from "../../../components/Loader/Loader";
const cx = require("classnames");

export default function Featured(props) {
  const placeholderRef = useRef();
  const isOnScreen = useImgOnScreen(placeholderRef, featuredImg);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  let textClass = props.section;
  return (
    <section className={textClass}>
      <div
        className={`${textStyles[textClass]} ${imgStyles[textClass]} ${textStyles.container} d-flex container`}
      >
        <picture className={imgStyles.imgWrapper}>
          {isOnScreen ? (
            <img
              src={featuredImg}
              alt="white monochrome textured painting"
              className={imgStyles.img}
            ></img>
          ) : (
            <div className={placeholderStyle} ref={placeholderRef}>
              <Loader></Loader>
            </div>
          )}
        </picture>

        <div className={`${imgStyles.text} `}>
          <div className={`${textStyles[textClass]} ${textStyles.msgWrapper}`}>
            <p className={textStyles.sideMsg}>{props.message}</p>
          </div>
          <div className={` ${imgStyles.textOutter}`}>
            <div className={imgStyles.textInner}>
              <p className={`${textStyles[textClass]} ${textStyles.caption}`}>
                <span className={textStyles.captionTxt}>{props.caption}</span>
              </p>
              <p className={newsletterStyles.subcaption}>{props.subcaption}</p>
              <p className={textStyles.subcaption}>
                <span className={textStyles.subcaptionTxt}>
                  {props.paragraph}{" "}
                </span>
              </p>
              <button className={"btn-black"} type="button">
                {props.btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
