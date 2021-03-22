import React from "react";
import btnStyles from "./button.module.css";
const cx = require("classnames");

const Button = ({ onClick, className, txt }) => {
  return (
    <div
      className={cx({
        [btnStyles[className]]: className,
      })}
    >
      <div className={btnStyles.btnWrapper}>
        <div className={btnStyles.btnBorder}></div>
        <button onClick={onClick} className={btnStyles.btn}>
          {txt}
        </button>
      </div>
    </div>
  );
};

export default Button;
