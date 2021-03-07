import React, { useRef } from "react";
import useDivOnScreen from "../../hooks/useOnIntersection";
import textStyles from "../TextSection/text-section.module.css";
import footerStyles from "./footer.module.css";

import logo from "../../img/logo.png";
import img1 from "../../img/social1.jpg";
import img2 from "../../img/social2.jpg";
import img3 from "../../img/social3.jpg";
import img4 from "../../img/social4.jpg";

import facebookbtn from "../../icons/facebook.png";
import twitterbtn from "../../icons/twitter.png";
import pinterestbtn from "../../icons/pinterest.png";
import tumblrbtn from "../../icons/tumblr.png";

export default function Footer(props) {
  const placeholder = useRef();
  const IsOnScreen = useDivOnScreen(placeholder);

  return (
    <>
      <div className={`${footerStyles.container} d-flex container`}>
        {IsOnScreen ? (
          <div className={` ${footerStyles.imgWrapper}`}>
            <div className={footerStyles.imgWrapperInner}>
              <img
                alt="beige macrame wall hanging"
                src={img1}
                className={`${footerStyles.img1} ${footerStyles.img}`}
              ></img>
              <img
                src={img2}
                alt="person painting using watercolors"
                className={`${footerStyles.img2} ${footerStyles.img}`}
              ></img>
              <img
                src={img3}
                alt="dry bouquet detail"
                className={`${footerStyles.img3} ${footerStyles.img}`}
              ></img>
              <img
                src={img4}
                alt="artist's studio"
                className={`${footerStyles.img4} ${footerStyles.img}`}
              ></img>
            </div>
          </div>
        ) : (
          <div ref={placeholder}></div>
        )}
        <div className={footerStyles.textWrapper}>
          <div className={footerStyles.innerTextWrapper}>
            <p className={`${textStyles.textClass} ${textStyles.caption}`}>
              <img alt="logo" src={logo} className={footerStyles.logo}></img>
            </p>
            <p className="p-small text-column">
              <span>{props.paragraph} </span>
            </p>
            <div>
              <a className={footerStyles.link} href="">
                <img
                  className={footerStyles.socialIcon}
                  alt="facebook"
                  src={facebookbtn}
                />
              </a>
              <a className={footerStyles.link} href="">
                <img
                  className={footerStyles.socialIcon}
                  alt="twitter"
                  src={twitterbtn}
                />
              </a>
              <a className={footerStyles.link} href="">
                <img
                  className={footerStyles.socialIcon}
                  alt="pinterest"
                  src={pinterestbtn}
                />
              </a>
              <a className={footerStyles.link} href="">
                <img
                  className={footerStyles.socialIcon}
                  alt="tumblr"
                  src={tumblrbtn}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${footerStyles.copy} d-flex container`}>
        <p className={footerStyles.copyItem}>copyright © 2021 &Thread</p>
        <p className={footerStyles.copyItem}>
          photos by Maja Cvetkovic <span>(some unsplash)</span>
        </p>
      </div>
    </>
  );
}
