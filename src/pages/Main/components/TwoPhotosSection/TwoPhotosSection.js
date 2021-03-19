import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useElementOnScreen } from "../../../../hooks/useOnIntersection";
import photoStyles from "./two-photos.module.css";
import Loader from "../../../../components/Loader/Loader";
const cx = require("classnames");

export default function TwoPhotosSection(props) {
  const placeholderRef = useRef();
  const isOnScreen = useElementOnScreen(placeholderRef, null);
  const placeholderStyle = cx("placeholder", {
    hidePlaceholder: isOnScreen,
  });

  const imgAttr = props.img;
  const El = props.el;

  const linkTxt = (txt) => (props.el === Link ? txt : "");
  const txt = ["Collections", "Shop"];

  const attr1 =
    El === Link
      ? { to: `${props.link1}` }
      : { src: `${props.img[0]}`, alt: `${props.alt[0]}` };
  const attr2 =
    El === Link
      ? { to: `${props.link2}` }
      : { src: `${props.img[1]}`, alt: `${props.alt[0]}` };
  const attrs = [{ ...attr1 }, { ...attr2 }];

  return (
    <>
      {isOnScreen ? (
        <section className={`${photoStyles.images} d-flex container`}>
          {imgAttr.map((img, index) => {
            if (props.el !== Link) {
              return (
                <picture key={index} className={photoStyles.img}>
                  {/*PHOTOS ONLY*/}
                  <El
                    {...attrs[imgAttr.indexOf(img)]}
                    className={`${photoStyles.img}`}
                  ></El>
                </picture>
              );
            } else {
              return (
                <div
                  key={index}
                  className={`${photoStyles.img} ${photoStyles[img]}`}
                >
                  {/* PHOTOS WITH LINKS*/}

                  <El
                    {...attrs[imgAttr.indexOf(img)]}
                    className={photoStyles.link}
                  >
                    {linkTxt(txt[imgAttr.indexOf(img)])}
                  </El>
                </div>
              );
            }
          })}
        </section>
      ) : (
        <div ref={placeholderRef} className={placeholderStyle}>
          <Loader />
        </div>
      )}
    </>
  );
}
