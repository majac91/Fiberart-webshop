import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useImgOnScreen } from "../../../hooks/useOnIntersection";
import Loader from "../../../components/Loader/Loader";
import textStyles from "../../../components/TextSection/text-section.module.css";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import newsletterStyles from "../components/Newsletter/newsletter.module.css";
import aboutImg from "../../../img/about.jpg";
const cx = require("classnames");

export default function About(props) {
  const placeholderRef = useRef();
  const isOnScreen = useImgOnScreen(placeholderRef, aboutImg);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  let history = useHistory();

  function handleBtnRedirect() {
    history.push("/about");
  }

  let textClass = props.section;
  return (
    <section className="aboutSection">
      <div
        className={`${textStyles[textClass]} ${imgStyles[textClass]} ${textStyles.container} d-flex container`}
      >
        <div className={`${imgStyles.text}`}>
          <div className={`${textStyles[textClass]} ${textStyles.msgWrapper}`}>
            <p className={textStyles.sideMsg}>{props.message}</p>
          </div>
          <div className={imgStyles.textOutter}>
            <div className={imgStyles.textInner}>
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

              <button
                className={"btn-black"}
                onClick={handleBtnRedirect}
                type="button"
              >
                {props.btn}{" "}
              </button>
            </div>
          </div>
        </div>

        <picture className={imgStyles.imgWrapper}>
          {isOnScreen ? (
            <img
              src={aboutImg}
              alt="blonde woman in black and white outfit"
              className={imgStyles.img}
            ></img>
          ) : (
            <div className={placeholderStyle} ref={placeholderRef}>
              <Loader></Loader>
            </div>
          )}
        </picture>
      </div>
    </section>
  );
}
