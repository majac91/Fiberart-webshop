import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useElementOnScreen } from "../../../hooks/useOnIntersection";
import Loader from "../../../components/Loader/Loader";
import Img from "../../../components/Img/Img";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import aboutImg from "../../../img/about.jpg";
import test from "../../../img/social2.jpg";
const cx = require("classnames");

export default function About(props) {
  const imgGroupRef = useRef();
  const imgGroupIsOnScreen = useElementOnScreen(imgGroupRef, aboutImg);
  const imgGroupStyle = cx("placeholder group", {
    hidePlaceholder: imgGroupIsOnScreen,
  });

  let history = useHistory();

  function handleBtnRedirect() {
    history.push("/about");
  }

  return (
    <>
      <section
        aria-label="About"
        className={`${imgStyles.right} ${imgStyles.rightDesktop} container`}
      >
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

        <div className={imgStyles.imgWrapper} ref={imgGroupRef}>
          {imgGroupIsOnScreen ? (
            <>
              <Img
                src={aboutImg}
                alt="blonde woman in black and white outfit"
                className={imgStyles.imgBig}
              />
              <Img src={test} className={imgStyles.imgSmall} />
            </>
          ) : (
            <Loader className={imgGroupStyle} />
          )}
        </div>
      </section>
      <section
        aria-label="About"
        className={`${imgStyles.right} ${imgStyles.rightMobile} container`}
      >
        <div className={imgStyles.imgWrapper} ref={imgGroupRef}>
          {imgGroupIsOnScreen ? (
            <>
              <Img
                src={aboutImg}
                alt="blonde woman in black and white outfit"
                className={imgStyles.imgBig}
              />
              <Img src={test} className={imgStyles.imgSmall} />
            </>
          ) : (
            <Loader className={imgGroupStyle} />
          )}
        </div>
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
      </section>
    </>
  );
}
