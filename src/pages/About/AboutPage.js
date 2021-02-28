import React from "react";
import TextSection from "../../components/TextSection";
import Header from "../../components/Header/Header";
import textStyles from "../../components/TextSection/text-section.module.css";
import imgStyles from "../../css-modules/photo-text-section.module.css";

const AboutPage = () => {
  let textClass = "aboutPage";
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
          <div className={imgStyles.imgWrapper}>
            <div
              role="img"
              aria-label="tapestry being made"
              className={`${imgStyles.img} ${imgStyles.aboutPageImg1}`}
            ></div>
            <div
              role="img"
              aria-label="tapestry with wooden frame"
              className={`${imgStyles.img} ${imgStyles.aboutPageImg2}`}
            ></div>
          </div>

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
          <div className={`${imgStyles.text} `}>
            <div className={` ${imgStyles.textOutter}`}>
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
            <img
              alt=""
              className={`${imgStyles.img} ${imgStyles.aboutPageImg3}`}
            ></img>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
