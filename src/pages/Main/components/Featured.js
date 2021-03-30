import React, { useRef } from "react";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import { useElementOnScreen } from "../../../hooks/useOnIntersection";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import ImgSet from "../../../components/ImgSet/ImgSet";
import featuredImg from "../../../img/featured-2.jpg";
import featuredImgSmall from "../../../img/featured-1.jpg";

export default function Featured(props) {
  const sectionRef = useRef();
  const sectionOnScreen = useElementOnScreen(sectionRef);

  return (
    <section
      className={`${imgStyles.left} container`}
      id="main"
      ref={sectionRef}
    >
      {sectionOnScreen && (
        <ImgSet
          images={[
            {
              src: featuredImgSmall,
              className: imgStyles.imgSmall,
              alt: "",
            },
            {
              src: featuredImg,
              className: imgStyles.imgBig,
              alt: "white monochrome textured painting",
            },
          ]}
        />
      )}
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
