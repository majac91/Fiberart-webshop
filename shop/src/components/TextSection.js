import React from "react";
import textStyles from "../css-modules/text-section.module.css";
const classNames = require("classnames");

export default function TextSection(props) {
  let textClass = classNames({
    mission: props.mission,
    header: !props.mission,
  });
  console.log(textClass);
  return (
    <>
      <div className={`${textClass}-text ${textStyles.text} container`}>
        <div className={textStyles.text__brand}>
          <p>{props.message}</p>
        </div>
        <p className={textStyles.text__caption}>
          <span>{props.caption}</span>
        </p>
        <p className={"text-column"}>
          <span>{props.subcaption} </span>
        </p>
      </div>
    </>
  );
}
