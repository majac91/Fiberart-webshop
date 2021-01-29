import React from "react";
import textStyles from "../css-modules/text-section.module.css";
const classNames = require("classnames");

export default function TextSection(props) {
  let textClass = classNames({
    message: props.section === "brandMsg",
    mission: props.section === "mission",
  });
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
          className={`${textStyles[textClass]} ${textStyles.subcaption} text-column`}
        >
          <span>{props.subcaption} </span>
        </p>
      </div>
    </>
  );
}
