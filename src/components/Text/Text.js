import React from "react";
import textStyles from "./text-section.module.css";

const Text = ({ caption, subcaption, className }) => {
  return (
    <div className={textStyles[className]}>
      <h2 className={textStyles.caption}>{caption}</h2>
      <p className={textStyles.subcaption}>{subcaption} </p>
    </div>
  );
};

export default Text;
