import React, { useRef } from "react";
import { useElementOnScreen } from "../../hooks/useOnIntersection";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Quote from "./Quote/Quote";
import ImgSet from "../../components/ImgSet/ImgSet";
import imgStyles from "../../css-modules/photo-text-section.module.css";
import workshopImg from "../../img/header1.jpg";
import detailImg from "../../img/header2.jpg";
import materialsImg from "../../img/materials.jpg";

const AboutPage = () => {
  const firstSectionRef = useRef();
  const firstSectionOnScreen = useElementOnScreen(firstSectionRef);

  const secondSectionRef = useRef();
  const secondSectionOnScreen = useElementOnScreen(secondSectionRef);

  return (
    <>
      <Header
        page="about"
        s
        caption="When you recieve a piece from &Thread- you now own something truly unique with an unquestionable quality, which will connect you to the artist "
      />
      <main className="aboutPage">
        {/* FIRST SECTION */}
        <section
          className={`${imgStyles.left} d-flex container`}
          ref={firstSectionRef}
        >
          {firstSectionOnScreen && (
            <ImgSet
              images={[
                {
                  src: workshopImg,
                  className: imgStyles.imgSmall,
                  alt: "tapestry being made",
                },
                {
                  src: detailImg,
                  className: imgStyles.imgBig,
                  alt: "tapestry with wooden frame",
                },
              ]}
            />
          )}

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
        {/* QUOTE */}
        <Quote />
        <section
          className={` ${imgStyles.right} d-flex container`}
          ref={secondSectionRef}
        >
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
          {/* LAST SECTION */}
          {secondSectionOnScreen && (
            <ImgSet
              images={[
                {
                  src: materialsImg,
                  className: imgStyles.imgBig,
                  alt: "ball of white yarn",
                },
                {
                  src: workshopImg,
                  className: imgStyles.imgSmall,
                  alt: "tapestry being made",
                },
              ]}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default AboutPage;
