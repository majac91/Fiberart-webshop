import React from "react";
import btnStyles from "./button.module.css";
const cx = require("classnames");

const Button = ({ onClick, className, className2, txt, isDisabled }) => {
  return (
    <div
      className={cx({
        [btnStyles[className]]: className,
        [btnStyles[className2]]: className2,
      })}
    >
      <div className={btnStyles.wrapper}>
        <div className={btnStyles.border}></div>
        <button
          disabled={isDisabled}
          onClick={onClick}
          className={btnStyles.btn}
        >
          {txt}
        </button>
      </div>
    </div>
  );
};

export default Button;
