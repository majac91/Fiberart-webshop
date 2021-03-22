import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useElementOnScreen } from "../../../hooks/useOnIntersection";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import textStyles from "../../../components/TextSection/text-section.module.css";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import newsletterStyles from "../components/Newsletter/newsletter.module.css";
import aboutImg from "../../../img/about.jpg";
import test from "../../../img/social2.jpg";
const cx = require("classnames");

export default function About(props) {
  const placeholderRef = useRef();
  const isOnScreen = useElementOnScreen(placeholderRef, aboutImg);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  let history = useHistory();

  function handleBtnRedirect() {
    history.push("/about");
  }

  let textClass = props.section;
  return (
    <section aria-label="About" className={imgStyles.aboutSection}>
      <div
        className={`${textStyles[textClass]} ${imgStyles[textClass]} ${textStyles.container} d-flex container`}
      >
        <div className={`${imgStyles.text}`}>
          <div className={imgStyles.textOutter}>
            <div className={imgStyles.textInner}>
              <p
                className={`${newsletterStyles.about} ${newsletterStyles.subcaption}`}
              >
                {props.subcaption}
              </p>
              <p className={`${textStyles[textClass]} ${textStyles.caption}`}>
                <span className={textStyles.captionTxt}>{props.caption}</span>
              </p>

              <Button
                className={"btnMd"}
                onClick={handleBtnRedirect}
                txt={props.btn}
              />
            </div>
          </div>
        </div>

        <picture className={imgStyles.imgWrapper}>
          {isOnScreen ? (
            <>
              <img
                src={aboutImg}
                alt="blonde woman in black and white outfit"
                className={imgStyles.imgBig}
              ></img>
              <img src={test} className={imgStyles.imgSmall}></img>
            </>
          ) : (
            <div className={placeholderStyle} ref={placeholderRef}>
              <Loader />
            </div>
          )}
        </picture>
      </div>
    </section>
  );
}
