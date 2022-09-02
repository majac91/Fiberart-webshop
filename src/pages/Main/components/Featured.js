import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import { useElementOnScreen } from "../../../hooks/useOnIntersection";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import ImgSet from "../../../components/ImgSet/ImgSet";

export default function Featured({ images, redirectTo, caption, subcaption, isReversed }) {
  const sectionRef = useRef();
  const sectionOnScreen = useElementOnScreen(sectionRef);
  const history = useHistory();
  const redirect = () => history.push(redirectTo);

  return (
    <section
      className={`${imgStyles.left} container ${isReversed ? imgStyles.reversed : ''}`}
      id="main"
      ref={sectionRef}
    >
      {sectionOnScreen && (
        <ImgSet
          images={images}
        />
      )}
      <div className={imgStyles.text}>
        <div className={` ${imgStyles.textOutter}`}>
          <div className={imgStyles.textInner}>
            <Text
              className="textRight"
              caption={caption}
              subcaption={subcaption}
            />
            <Button
              className={"btnMd"}
              className2={"btnLeft"}
              txt="Discover"
              onClick={redirect}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
