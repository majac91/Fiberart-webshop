import React from "react";
import photoStyles from "../css-modules/two-photos.module.css";
const classNames = require("classnames");

export default function TwoPhotosSection(props) {
  const link = (txt) => (props.el === "a" ? txt : "");
  const linkTxt = (txt) => (props.el === "a" ? txt : "");

  return (
    <section>
      <div className={`${photoStyles.images} d-flex container`}>
        <props.el
          href={link("https://www.npmjs.com/package/classnames")}
          className={`${photoStyles.img} ${photoStyles.img1}`}
        >
          {linkTxt("Shop paintings")}{" "}
        </props.el>
        <props.el
          href={link("https://github.com/")}
          className={`${photoStyles.img} ${photoStyles.img2}`}
        >
          {linkTxt("Shop wall hangings")}{" "}
        </props.el>
      </div>
    </section>
  );
}
