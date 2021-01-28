import React from "react";
import photoStyles from "../css-modules/two-photos.module.css";
const classNames = require("classnames");

export default function TwoPhotosSection(props) {
  const imgClass = props.img;
  const El = props.el;

  const linkTxt = (txt) => (props.el === "a" ? txt : "");
  const txt = ["Collections", "Shop"];

  const attr1 = props.el === "a" ? { href: props.link1 } : "";
  const attr2 = props.el === "a" ? { href: props.link2 } : "";
  const attrs = [{ ...attr1 }, { ...attr2 }];

  return (
    <section>
      <div className={`${photoStyles.images} d-flex container`}>
        {imgClass.map((img) => {
          return (
            <El
              {...attrs[imgClass.indexOf(img)]}
              className={`${photoStyles.img} ${photoStyles[img]}`}
            >
              {linkTxt(txt[imgClass.indexOf(img)])}
            </El>
          );
        })}
      </div>
    </section>
  );
}
