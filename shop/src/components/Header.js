import React from "react";

//header imgs
import header1 from "../img/header1.jpg";
import header2 from "../img/header2.jpg";
import header3 from "../img/header3.jpg";
import header4 from "../img/header4.jpg";
import header5 from "../img/header5.jpg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__images container">
          <img className="header__img no-shrink" src={header1}></img>
          <img className="header__img flex-grow" src={header2}></img>
          <img className="header__img no-shrink" src={header3}></img>
          <img className="header__img flex-grow" src={header4}></img>
          <img className="header__img no-shrink" src={header5}></img>
        </div>
        <div className="header__text container">
          <div className="header__text-brand">
            <p>Brand message</p>
          </div>
          <p className="header__text-caption text-column">
            <span>Write a short pitch about</span>
            <span>what you do and why</span>
          </p>
          <p className="header__text-subcaption text-column">
            <span> I help you create a home you</span>
            <span> love, so you can relax and refresh</span>
            <span> in a pure and simple space.</span>
          </p>
        </div>
      </header>
    </>
  );
}
