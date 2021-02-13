import React from "react";
import { Link } from "react-router-dom";
import photoStyles from "./two-photos.module.css";

export default function TwoPhotosSection(props) {
  const imgClass = props.img;
  const El = props.el;

  const linkTxt = (txt) => (props.el === Link ? txt : "");
  const txt = ["Collections", "Shop"];

  const attr1 = props.el === Link ? { to: `${props.link1}` } : "";
  const attr2 = props.el === Link ? { to: `${props.link2}` } : "";
  const attrs = [{ ...attr1 }, { ...attr2 }];

  return (
    <section>
      <div className={`${photoStyles.images} d-flex container`}>
        {imgClass.map((img) => {
          if (props.el !== Link) {
            return (
              <El
                {...attrs[imgClass.indexOf(img)]}
                className={`${photoStyles.img} ${photoStyles[img]}`}
              ></El>
            );
          } else {
            return (
              <div className={photoStyles.wrapper}>
                <div className={`${photoStyles.img} ${photoStyles[img]}`}></div>
                <El
                  {...attrs[imgClass.indexOf(img)]}
                  className={photoStyles.link}
                >
                  {linkTxt(txt[imgClass.indexOf(img)])}
                </El>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
