import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useElementOnScreen } from "../../../hooks/useOnIntersection";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
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

  return (
    <section aria-label="About" className={`${imgStyles.right} container`}>
      <div className={imgStyles.text}>
        <div className={imgStyles.textOutter}>
          <div className={imgStyles.textInner}>
            <Text
              className="textLeft"
              caption="About us"
              subcaption="I have a affinity for simple and organic materials. I see beauty in the purest of things and I am so excited to share my love for design to help you create a cozy and sereen home. "
            />
            <Button
              className={"btnMd"}
              className2={"btnRight"}
              onClick={handleBtnRedirect}
              txt="Read more"
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
            />
            <img src={test} className={imgStyles.imgSmall} />
          </>
        ) : (
          <div className={placeholderStyle} ref={placeholderRef}>
            <Loader />
          </div>
        )}
      </picture>
    </section>
  );
}
