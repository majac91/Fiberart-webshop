import React from "react";
import photoStyles from "../css-modules/two-photos.module.css";
const classNames = require("classnames");

export default function TwoPhotosSection() {
  return (
    <section>
      <div className={`${photoStyles.images} d-flex container`}>
        <div className={`${photoStyles.img} ${photoStyles.img1}`}></div>
        <div className={`${photoStyles.img} ${photoStyles.img2}`}></div>
      </div>
    </section>
  );
}
