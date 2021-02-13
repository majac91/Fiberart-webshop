import React from "react";
import textStyles from "../TextSection/text-section.module.css";
import imgStyles from "../../css-modules/photo-text-section.module.css";
import newsletterStyles from "../Newsletter/newsletter.module.css";
import footerStyles from "./footer.module.css";

import logo from "../../img/logo.png";
import facebookbtn from "../../icons/facebook.png";
import twitterbtn from "../../icons/twitter.png";
import pinterestbtn from "../../icons/pinterest.png";
import tumblrbtn from "../../icons/tumblr.png";

export default function Footer(props) {
  return (
    <>
      <div className={`${footerStyles.container} d-flex container`}>
        <div
          title="social media posts"
          className={`${imgStyles.imgWrapper} ${footerStyles.imgWrapper}`}
        >
          <img
            alt=""
            className={`${footerStyles.img1} ${footerStyles.img}`}
          ></img>
          <img
            alt=""
            className={`${footerStyles.img2} ${footerStyles.img}`}
          ></img>
          <img
            alt=""
            className={`${footerStyles.img3} ${footerStyles.img}`}
          ></img>
          <img
            alt=""
            className={`${footerStyles.img4} ${footerStyles.img}`}
          ></img>
        </div>

        <div className={`${footerStyles.textWrapper} `}>
          <div className={imgStyles.textWrapper}>
            <p className={`${textStyles.textClass} ${textStyles.caption}`}>
              <img src={logo} className={footerStyles.logo}></img>
            </p>
            <p className={`${newsletterStyles.paragraph}  text-column`}>
              <span>{props.paragraph} </span>
            </p>
            <div>
              <a className={footerStyles.link} type="button">
                <img alt="share to facebook" src={facebookbtn} />
              </a>
              <a className={footerStyles.link} type="button">
                <img alt="share to facebook" src={twitterbtn} />
              </a>
              <a className={footerStyles.link} type="button">
                <img alt="share to facebook" src={pinterestbtn} />
              </a>
              <a className={footerStyles.link} type="button">
                <img alt="share to facebook" src={tumblrbtn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
