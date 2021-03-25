import React from "react";
import circleStyles from "./circles.module.css";

const CircleIcon = () => {
  return (
    <div className={circleStyles.wrapper}>
      <span className={circleStyles.side}></span>
      <span className={circleStyles.center}></span>
      <span className={circleStyles.side}></span>
    </div>
  );
};

export default CircleIcon;
