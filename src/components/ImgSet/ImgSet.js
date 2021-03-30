import React from "react";
import imgStyles from "../../css-modules/photo-text-section.module.css";
import Loader from "../Loader/Loader";
import Img from "../Img/Img";

const ImgSet = ({ images }) => {
  return (
    <div className={imgStyles.imgWrapper}>
      {images.map((attrs) => (
        <Img {...attrs} />
      ))}
      <Loader />
    </div>
  );
};

export default ImgSet;
