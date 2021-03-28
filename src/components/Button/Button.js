import React from "react";
import btnStyles from "./button.module.css";
const cx = require("classnames");

const Button = ({ onClick, className, className2, txt }) => {
  console.log(className2);
  console.log("button rerenders");

  return (
    <div
      className={cx({
        [btnStyles[className]]: className,
        [btnStyles[className2]]: className2,
      })}
    >
      <div className={btnStyles.wrapper}>
        <div className={btnStyles.border}></div>
        <button onClick={onClick} className={btnStyles.btn}>
          {txt}
        </button>
      </div>
    </div>
  );
};

export default Button;
