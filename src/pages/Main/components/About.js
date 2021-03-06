import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import useOnIntersection from "../../../hooks/useOnIntersection";
import textStyles from "../../../components/TextSection/text-section.module.css";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import newsletterStyles from "../../../components/Newsletter/newsletter.module.css";

const cx = require("classnames");

export default function About(props) {
  const placeholder = useRef();
  const IsOnScreen = useOnIntersection(placeholder);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: IsOnScreen });

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

        <div className={imgStyles.imgWrapper}>
          {IsOnScreen ? (
            <div
              role="img"
              aria-label="blonde woman in black and white outfit"
              className={imgStyles.img}
            ></div>
          ) : (
            <div className={placeholderStyle} ref={placeholder}></div>
          )}
        </div>
      </div>
    </section>
  );
}
