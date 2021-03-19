import React from "react";
import textStyles from "./text-section.module.css";
import shopStyles from "../../pages/Shop/shop.module.css";

const cx = require("classnames");

export default function TextSection(props) {
  let textClass = cx({
    message: props.section === "brandMsg",
    mission: props.section === "mission",
    contact: props.section === "contact",
    shop: props.section === "shop",
    aboutPage: props.section === "aboutPageSubHeader",
  });

  return (
    <section
      className={cx(textStyles[textClass], textStyles.container, "container")}
    >
      <div className={cx(textStyles[textClass], textStyles.msgWrapper)}>
        <aside className={textStyles.sideMsg}>{props.message}</aside>
      </div>

      {(props.section === "brandMsg" ||
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

      {props.section === "mission" && (
        <h2 className={cx(textStyles[textClass], textStyles.caption)}>
          {props.caption}
        </h2>
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
