import React from "react";
import textStyles from "../css-modules/text-section.module.css";
import block from "bem-css-modules";
const b = block(textStyles);
console.log(textStyles);

export default function TextSection(props) {
  return (
    <>
      <div className={`${b()} container`}>
        <div className={b("brand")}>
          <p>{props.message}</p>
        </div>
        <p className={`${b("caption")} "text-column"`}>
          <span>{props.caption}</span>
        </p>
        <p className={`${b("subcaption")} "text-column"`}>
          <span>{props.subcaption} </span>
        </p>
      </div>
    </>
  );
}
