import React, { useRef } from "react";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import { useElementOnScreen } from "../../../hooks/useOnIntersection";
import Text from "../../../components/Text/Text";
import Img from "../../../components/Img/Img";

import Button from "../../../components/Button/Button";
import featuredImg from "../../../img/featured-2.jpg";
import featuredImgSmall from "../../../img/featured-1.jpg";

import Loader from "../../../components/Loader/Loader";
const cx = require("classnames");

export default function Featured(props) {
  const imgGroupRef = useRef();
  const imgGroupIsOnScreen = useElementOnScreen(imgGroupRef, featuredImg);
  const imgGroupStyle = cx("placeholder", {
    hidePlaceholder: imgGroupIsOnScreen,
  });

  return (
    <section className={`${imgStyles.left} container`} id="main">
      <div className={imgStyles.imgWrapper} ref={imgGroupRef}>
        {imgGroupIsOnScreen ? (
          <>
            <Img src={featuredImgSmall} className={imgStyles.imgSmall} />
            <Img
              src={featuredImg}
              alt="white monochrome textured painting"
              className={imgStyles.imgBig}
            />
          </>
        ) : (
          <Loader className={imgGroupStyle} />
        )}
      </div>

      <div className={imgStyles.text}>
        <div className={` ${imgStyles.textOutter}`}>
          <div className={imgStyles.textInner}>
            <Text
              className="textRight"
              caption="The monochrome collection"
              subcaption="All my best-kept secrets to decorate your entire home. From
                minimal table settings to cozy bathroom decorations. Everything
                helpful and inspiring to pour love into your home."
            />
            <Button className={"btnMd"} className2={"btnLeft"} txt="Discover" />
          </div>
        </div>
      </div>
    </section>
  );
}
