import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useElementOnScreen } from "../../../hooks/useOnIntersection";
import ImgSet from "../../../components/ImgSet/ImgSet";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import imgStyles from "../../../css-modules/photo-text-section.module.css";
import aboutImg1 from "../../../img/about1.jpg";
import aboutImg2 from "../../../img/about2.jpg";

export default function About(props) {
  const sectionRef = useRef();
  const sectionOnScreen = useElementOnScreen(sectionRef);

  let history = useHistory();

  function handleBtnRedirect() {
    history.push("/about");
  }

  return (
    <section aria-label="About" ref={sectionRef}>
      <div className={`${imgStyles.right} ${imgStyles.rightDesktop} container`}>
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

        {sectionOnScreen && (
          <ImgSet
            images={[
              {
                src: aboutImg1,
                className: imgStyles.imgBig,
                alt: "blonde woman in black and white outfit",
              },
              {
                src: aboutImg2,
                className: imgStyles.imgSmall,
                alt: "",
              },
            ]}
          />
        )}
      </div>

      <div
        aria-label="About"
        className={`${imgStyles.right} ${imgStyles.rightMobile} container`}
        ref={sectionRef}
      >
        {sectionOnScreen && (
          <ImgSet
            images={[
              {
                src: aboutImg1,
                className: imgStyles.imgBig,
                alt: "blonde woman in black and white outfit",
              },
              {
                src: aboutImg2,
                className: imgStyles.imgSmall,
                alt: "",
              },
            ]}
          />
        )}

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
      </div>
    </section>
  );
}
