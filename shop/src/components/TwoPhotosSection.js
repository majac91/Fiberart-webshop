import React from "react";
import photoStyles from "../css-modules/two-photos.module.css";
const classNames = require("classnames");

export default function TwoPhotosSection(props) {
  const linkTxt = (txt) => (props.el === "a" ? txt : "");
  const El = props.el;
  const attr1 = props.el === "a" ? { href: props.link1 } : "";
  const attr2 = props.el === "a" ? { href: props.link2 } : "";

  return (
    <section>
      <div className={`${photoStyles.images} d-flex container`}>
        <El {...attr1} className={`${photoStyles.img} ${photoStyles.img1}`}>
          {linkTxt("Shop paintings")}{" "}
        </El>
        <El {...attr2} className={`${photoStyles.img} ${photoStyles.img2}`}>
          {linkTxt("Shop wall hangings")}{" "}
        </El>
      </div>
    </section>
  );
}
