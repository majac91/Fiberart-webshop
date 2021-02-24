import React from "react";
import textStyles from "../TextSection/text-section.module.css";
import imgStyles from "../../css-modules/photo-text-section.module.css";
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
        <div className={`${imgStyles.imgWrapper} ${footerStyles.imgWrapper}`}>
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
                alt="go to facebook page"
                src={facebookbtn}
              />
            </a>
            <a className={footerStyles.link} href="">
              <img
                className={footerStyles.socialIcon}
                alt="go to twitter profile"
                src={twitterbtn}
              />
            </a>
            <a className={footerStyles.link} href="">
              <img
                className={footerStyles.socialIcon}
                alt="go to pinterest page"
                src={pinterestbtn}
              />
            </a>
            <a className={footerStyles.link} href="">
              <img
                className={footerStyles.socialIcon}
                alt="go to tumblr page"
                src={tumblrbtn}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
