import React from "react";
import textStyles from "./text-section.module.css";
import shopStyles from "../../pages/Shop/shop.module.css";

const cx = require("classnames");

export default function TextSection(props) {
  let textClass = cx({
    message: props.section === "checkout",
    contact: props.section === "contact",
    shop: props.section === "shop",
    aboutPage: props.section === "aboutPageSubHeader",
  });

  return (
    <section
      className={cx(textStyles[textClass], textStyles.container, "container")}
    >
      {(props.section === "checkout" ||
        props.section === "shop" ||
        props.section === "contact") && (
        <h1 className={cx(textStyles[textClass], textStyles.caption)}>
          <span className={textStyles.captionTxt}>{props.caption}</span>
        </h1>
      )}

      {props.section === "aboutPageSubHeader" && (
        <h1 className={cx(textStyles[textClass], textStyles.caption)}>
          <span className={textStyles.since}>since</span>
          <span className={`${textStyles.captionTxt} ${textStyles.year}`}>
            {props.caption}
          </span>
        </h1>
      )}

      <h2 className={cx(textStyles.subcaption)}>
        <span className={textStyles.subcaptionTxt}>{props.subcaption} </span>
      </h2>
      {props.links && (
        <div className={shopStyles.links}>
          <p className={shopStyles.link}>Wall hangings</p>
          <p className={shopStyles.link}>Wall art</p>
          <p className={shopStyles.link}>Home decor</p>
        </div>
      )}
    </section>
  );
}
