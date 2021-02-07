import React from "react";
import textStyles from "./text-section.module.css";
import shopStyles from "../../pages/Shop/shop.module.css";

const classNames = require("classnames");

export default function TextSection(props) {
  let textClass = classNames({
    message: props.section === "brandMsg",
    mission: props.section === "mission",
    shop: props.section === "shop",
  });
  //TODO - fix undefined classes
  return (
    <>
      <div
        className={`${textStyles[textClass]} ${textStyles.container} container`}
      >
        <div className={`${textStyles[textClass]} ${textStyles.brand}`}>
          <p>{props.message}</p>
        </div>
        <p className={`${textStyles[textClass]} ${textStyles.caption}`}>
          <span>{props.caption}</span>
        </p>
        <p
          className={`${textStyles[textClass]} ${textStyles.subcaption} ${shopStyles.subcaption} text-column`}
        >
          <span>{props.subcaption} </span>
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
