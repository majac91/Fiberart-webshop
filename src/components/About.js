import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import textStyles from "./TextSection/text-section.module.css";
import imgStyles from "../css-modules/photo-text-section.module.css";
import newsletterStyles from "../components/Newsletter/newsletter.module.css";

const cx = require("classnames");

export default function About(props) {
  const placeholder = useRef();
  const [showImage, setShowImage] = useState(false);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: showImage });

  let history = useHistory();

  function handleBtnRedirect() {
    history.push("/about");
  }

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowImage(true);
        }
      });
    };
    const options = { treshold: 0.5 };
    console.log("about", placeholder.current);

    const observer = new IntersectionObserver(callback, options);
    observer.observe(placeholder.current);
  }, []);

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
          {showImage ? (
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
