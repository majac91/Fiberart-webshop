import React from "react";
import textStyles from "./text-section.module.css";
import shopStyles from "../../pages/Shop/shop.module.css";

const cx = require("classnames");

export default function TextSection(props) {
  let textClass = cx({
    message: props.section === "brandMsg",
    mission: props.section === "mission",
    shop: props.section === "shop",
  });
  //TODO - fix undefined classes
  return (
    <>
      <div
        className={cx(textStyles[textClass], textStyles.container, "container")}
      >
        <div className={cx(textStyles[textClass], textStyles.msgWrapper)}>
          <p className={textStyles.sideMsg}>{props.message}</p>
        </div>
        <p className={cx(textStyles[textClass], textStyles.caption)}>
          <span className={textStyles.captionTxt}>{props.caption}</span>
        </p>
        <p className={cx(textStyles.subcaption)}>
          <span className={textStyles.subcaptionTxt}>{props.subcaption} </span>
        </p>
        {props.links && (
          <div className={shopStyles.links}>
            <a className={shopStyles.link} href="">
              Wall hangings
            </a>
            <a className={shopStyles.link} href="">
              Wall art
            </a>
            <a className={shopStyles.link} href="">
              Home decor
            </a>
          </div>
        )}
      </div>
    </>
  );
}
