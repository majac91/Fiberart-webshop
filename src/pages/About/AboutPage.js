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
import Img from "../../components/Img/Img";
const cx = require("classnames");

const AboutPage = () => {
  const imgGroup1Ref = useRef();
  const imgGroup1OnScreen = useElementOnScreen(imgGroup1Ref, null);
  const imgGroup1Style = cx("placeholder group", {
    hidePlaceholder: imgGroup1OnScreen,
  });

  const imgGroup2Ref = useRef();
  const imgGroup2OnScreen = useElementOnScreen(imgGroup2Ref, null);
  const imgGroup2Style = cx("placeholder", {
    hidePlaceholder: imgGroup2OnScreen,
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
          <div className={imgStyles.imgWrapper} ref={imgGroup1Ref}>
            {imgGroup1OnScreen ? (
              <>
                <Img
                  alt="tapestry being made"
                  src={workshopImg}
                  className={` ${imgStyles.imgSmall}`}
                />
                <Img
                  alt="tapestry with wooden frame"
                  src={detailImg}
                  className={imgStyles.imgBig}
                />
              </>
            ) : (
              <Loader className={imgGroup1Style} />
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
        <Quote />
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
          <div className={imgStyles.imgWrapper} ref={imgGroup2Ref}>
            {imgGroup2OnScreen ? (
              <>
                <Img
                  alt="ball of white yarn"
                  src={materialsImg}
                  className={imgStyles.imgBig}
                />
                <Img
                  alt="tapestry being made"
                  src={workshopImg}
                  className={` ${imgStyles.imgSmall}`}
                />
              </>
            ) : (
              <Loader className={imgGroup2Style} />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
