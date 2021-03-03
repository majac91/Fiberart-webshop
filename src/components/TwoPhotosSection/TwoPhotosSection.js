import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import photoStyles from "./two-photos.module.css";

const cx = require("classnames");

export default function TwoPhotosSection(props) {
  // INTERSECTION OBSERVER
  const [showImage, setShowImage] = useState(false);
  const placeholder = useRef();
  const placeholderStyle = cx("placeholder", {
    hidePlaceholder: showImage,
  });

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          setShowImage(true);
        }
      });
    };
    const options = { treshold: 1 };

    const observer = new IntersectionObserver(callback, options);
    console.log(observer);

    observer.observe(placeholder.current);
    console.log(placeholder.current);
  }, []);

  // INTERSECTION OBSERVER

  const imgClass = props.img;
  const El = props.el;

  const linkTxt = (txt) => (props.el === Link ? txt : "");
  const txt = ["Collections", "Shop"];

  const attr1 = props.el === Link ? { to: `${props.link1}` } : "";
  const attr2 = props.el === Link ? { to: `${props.link2}` } : "";
  const attrs = [{ ...attr1 }, { ...attr2 }];

  return (
    <>
      {showImage === false ? (
        <div ref={placeholder} className={placeholderStyle}></div>
      ) : (
        showImage && (
          <section className={`${photoStyles.images} d-flex container`}>
            {imgClass.map((img) => {
              if (props.el !== Link) {
                return (
                  <El
                    {...attrs[imgClass.indexOf(img)]}
                    className={`${photoStyles.img} ${photoStyles[img]}`}
                  >
                    {" "}
                  </El>
                );
              } else {
                return (
                  <div className={`${photoStyles.img} ${photoStyles[img]}`}>
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
          </section>
        )
      )}
    </>
  );
}
