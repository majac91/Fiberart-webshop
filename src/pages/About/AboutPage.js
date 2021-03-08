import React, { useRef } from "react";
import { useDivOnScreen, useImgOnScreen } from "../../hooks/useOnIntersection";
import TextSection from "../../components/TextSection";
import Header from "../../components/Header/Header";
import textStyles from "../../components/TextSection/text-section.module.css";
import imgStyles from "../../css-modules/photo-text-section.module.css";
import workshopImg from "../../img/header1.jpg";
import detailImg from "../../img/header2.jpg";
import materialsImg from "../../img/materials.jpg";

const AboutPage = () => {
  let textClass = "aboutPage";

  const imgGroupRef = useRef();
  const imgGroupIsOnScreen = useDivOnScreen(imgGroupRef);

  const materialsImgRef = useRef();
  const materialsImgIsOnScreen = useImgOnScreen(materialsImgRef, materialsImg);

  return (
    <>
      <Header page="about"></Header>
      <main className="aboutPage">
        <TextSection
          section="aboutPageSubHeader"
          message="Happiness is homemade"
          caption="1980"
          subcaption="When you recieve a piece from &Thread- you now own something truly unique with an unquestionable quality, which will connect you to the artist "
        />
        <section
          className={`${textStyles.aboutProduct} ${imgStyles.aboutProduct} ${textStyles.container} d-flex container`}
        >
          {imgGroupIsOnScreen ? (
            <div className={imgStyles.imgWrapper}>
              <img
                alt="tapestry being made"
                src={workshopImg}
                className={`${imgStyles.img} ${imgStyles.aboutPageImg1}`}
              />
              <img
                alt="tapestry with wooden frame"
                src={detailImg}
                className={`${imgStyles.img} ${imgStyles.aboutPageImg2}`}
              />
            </div>
          ) : (
            <div ref={imgGroupRef} className="placeholder"></div>
          )}
          <div className={`${imgStyles.text} `}>
            <div className={` ${imgStyles.textOutter}`}>
              <div className={imgStyles.textInner}>
                <p
                  className={`${textStyles.aboutProduct} ${textStyles.caption}`}
                >
                  <span className={textStyles.captionTxt}>
                    MINIMAL. UNIQUE. HANDMADE.
                  </span>
                </p>
                <p className={textStyles.subcaption}>
                  <span className={textStyles.subcaptionTxt}>
                    I have a affinity for simple and organic materials. I see
                    beauty in the purest of things and I am so excited to share
                    my love for design to help you create a cozy and sereen
                    home.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${textStyles.aboutMaterials} ${imgStyles.aboutMaterials} ${textStyles.container} d-flex container`}
        >
          <div className={imgStyles.text}>
            <div className={imgStyles.textOutter}>
              <div className={imgStyles.textInner}>
                <p className={`${textStyles[textClass]} ${textStyles.caption}`}>
                  <span className={textStyles.subcaptionTxt}>
                    Only the finest quality materials
                  </span>
                </p>
                <p className={textStyles.subcaption}>
                  <span className={textStyles.subcaptionTxt}>
                    I have a affinity for simple and organic materials. I see
                    beauty in the purest of things and I am so excited to share
                    my love for design to help you create a cozy and sereen
                    home.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={imgStyles.imgWrapper}>
            {materialsImgIsOnScreen ? (
              <img
                alt="ball of white yarn"
                src={materialsImg}
                className={`${imgStyles.img} ${imgStyles.aboutPageImg3}`}
              ></img>
            ) : (
              <div ref={materialsImgRef} className="placeholder"></div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
