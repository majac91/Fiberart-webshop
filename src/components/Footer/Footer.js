import React, { useRef } from "react";
import { useElementOnScreen } from "../../hooks/useOnIntersection";
import Loader from "../../components/Loader/Loader";
import Newsletter from "../Newsletter/Newsletter";
import Img from "../../components/Img/Img";
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

const cx = require("classnames");

export default function Footer(props) {
  const placeholderRef = useRef();
  const isOnScreen = useElementOnScreen(placeholderRef);
  const placeholderStyle = cx("placeholder", { hidePlaceholder: isOnScreen });

  return (
    <>
      <footer className={`${footerStyles.container} d-flex container`}>
        <div className={footerStyles.imgWrapper}>
          {isOnScreen ? (
            <div className={footerStyles.imgWrapperInner}>
              <Img
                alt="beige macrame wall hanging"
                src={img1}
                className={footerStyles.img}
              ></Img>
              <Img
                src={img2}
                alt="artist painting"
                className={footerStyles.img}
              ></Img>
              <Img
                src={img3}
                alt="dry bouquet detail"
                className={footerStyles.img}
              ></Img>
              <Img
                src={img4}
                alt="artist's studio"
                className={footerStyles.img}
              ></Img>
            </div>
          ) : (
            <div className={placeholderStyle} ref={placeholderRef}>
              <Loader />
            </div>
          )}
        </div>
        <div className={footerStyles.textWrapper}>
          <div className={footerStyles.innerTextWrapper}>
            <div>
              <img
                alt="brand logo"
                src={logo}
                className={footerStyles.logo}
              ></img>
            </div>
            <p className={footerStyles.subcaption}>
              <span>{props.paragraph} </span>
            </p>
            <div className={footerStyles.social}>
              <a
                className={footerStyles.link}
                target="blank"
                href="https://www.facebook.com/"
              >
                <img
                  className={footerStyles.socialIcon}
                  alt="facebook"
                  src={facebookbtn}
                />
              </a>
              <a
                className={footerStyles.link}
                target="blank"
                href="https://www.twitter.com/"
              >
                <img
                  className={footerStyles.socialIcon}
                  alt="twitter"
                  src={twitterbtn}
                />
              </a>
              <a
                className={footerStyles.link}
                target="blank"
                href="https://www.pinterest.com/"
              >
                <img
                  className={footerStyles.socialIcon}
                  alt="pinterest"
                  src={pinterestbtn}
                />
              </a>
              <a
                className={footerStyles.link}
                target="blank"
                href="https://www.tumblr.com/"
              >
                <img
                  className={footerStyles.socialIcon}
                  alt="tumblr"
                  src={tumblrbtn}
                />
              </a>
            </div>
            <div>
              <Newsletter></Newsletter>
            </div>
          </div>
        </div>
      </footer>
      <small className={`${footerStyles.copy} d-flex container`}>
        <p className={footerStyles.copyItem}>copyright © 2021 &Thread</p>
        <p className={footerStyles.copyItem}>
          photos by Maja Cvetkovic <span>(some unsplash)</span>
        </p>
      </small>
    </>
  );
}
