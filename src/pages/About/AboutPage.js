import React, { useRef } from "react";
import { useElementOnScreen } from "../../hooks/useOnIntersection";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Quote from "./Quote/Quote";
import Loader from "../../components/Loader";
import imgStyles from "../../css-modules/photo-text-section.module.css";
import workshopImg from "../../img/header1.jpg";
import detailImg from "../../img/header2.jpg";
import materialsImg from "../../img/materials.jpg";
const cx = require("classnames");

const AboutPage = () => {
  const imgGroupRef = useRef();
  const imgGroupIsOnScreen = useElementOnScreen(imgGroupRef, null);

  const materialsImgRef = useRef();
  const materialsImgIsOnScreen = useElementOnScreen(
    materialsImgRef,
    materialsImg
  );

  const groupPlaceholderStyle = cx("placeholder", {
    hidePlaceholder: imgGroupIsOnScreen,
  });
  const materialsPlaceholderStyle = cx("placeholder", {
    hidePlaceholder: materialsImgIsOnScreen,
  });
  return (
    <>
      <Header
        page="about"
        s
        caption="When you recieve a piece from &Thread- you now own something truly unique with an unquestionable quality, which will connect you to the artist "
      />
      <main className="aboutPage">
        <section className={`${imgStyles.left} d-flex container`}>
          <div className={imgStyles.imgWrapper}>
            {imgGroupIsOnScreen ? (
              <>
                <img
                  alt="tapestry being made"
                  src={workshopImg}
                  className={` ${imgStyles.imgSmall}`}
                />
                <img
                  alt="tapestry with wooden frame"
                  src={detailImg}
                  className={imgStyles.imgBig}
                />
              </>
            ) : (
              <div className={groupPlaceholderStyle} ref={imgGroupRef}>
                <Loader />
              </div>
            )}
          </div>
          <div className={imgStyles.text}>
            <div className={imgStyles.textOutter}>
              <div className={imgStyles.textInner}>
                <Text
                  className="textRight"
                  caption="MINIMAL. UNIQUE. HANDMADE."
                  subcaption="I have a affinity for simple and organic materials. I see
                    beauty in the purest of things and I am so excited to share
                    my love for design to help you create a cozy and sereen
                    home."
                />
              </div>
            </div>
          </div>
        </section>
        <Quote></Quote>/
        <section className={` ${imgStyles.right} d-flex container`}>
          <div className={imgStyles.text}>
            <div className={imgStyles.textOutter}>
              <div className={imgStyles.textInner}>
                <Text
                  className="textLeft"
                  caption="Only the finest quality materials"
                  subcaption="I have a affinity for simple and organic materials. I see
                    beauty in the purest of things and I am so excited to share
                    my love for design to help you create a cozy and sereen
                    home."
                />
              </div>
            </div>
          </div>
          <div className={imgStyles.imgWrapper}>
            {materialsImgIsOnScreen ? (
              <>
                <img
                  alt="ball of white yarn"
                  src={materialsImg}
                  className={imgStyles.imgBig}
                ></img>
                <img
                  alt="tapestry being made"
                  src={workshopImg}
                  className={` ${imgStyles.imgSmall}`}
                />
              </>
            ) : (
              <div className={materialsPlaceholderStyle} ref={materialsImgRef}>
                <Loader />
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
