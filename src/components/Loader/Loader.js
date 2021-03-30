import React from "react";
import loaderStyles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={`${loaderStyles.wrapper} placeholder`}>
      <div className={loaderStyles.loader}></div>
    </div>
  );
};

export default Loader;
