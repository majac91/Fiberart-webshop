import React, { useRef } from "react";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import newsletterStyles from "../../../components/Newsletter/Newsletter";
import { useElementOnScreen } from "../../../hooks/useOnIntersection";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import featuredImg from "../../../img/featured-2.jpg";
import featuredImgSmall from "../../../img/featured-1.jpg";

import Loader from "../../../components/Loader/Loader";
const cx = require("classnames");

export default function Featured(props) {
  const placeholderRef = useRef();
  const isOnScreen = useElementOnScreen(placeholderRef, featuredImg);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  return (
    <section className={`${imgStyles.left} container`} id="main">
      <picture className={imgStyles.imgWrapper}>
        {isOnScreen ? (
          <>
            <img src={featuredImgSmall} className={imgStyles.imgSmall} />
            <img
              src={featuredImg}
              alt="white monochrome textured painting"
              className={imgStyles.imgBig}
            />
          </>
        ) : (
          <div className={placeholderStyle} ref={placeholderRef}>
            <Loader />
          </div>
        )}
      </picture>

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
