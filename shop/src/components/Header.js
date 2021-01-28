import React from "react";

//header imgs
// import header1 from "../img/header1.jpg";
import header1 from "../img/DSC_2900.jpg";
import header2 from "../img/header2.jpg";
// import header3 from "../img/header3.jpg";
import header4 from "../img/header4.jpg";
import header5 from "../img/header5.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__images container">
        <img className="header__img flex-grow" src={header2}></img>
        <img className="header__img no-shrink" src={header5}></img>
        <img className="header__img flex-grow" src={header4}></img>
        <img className="header__img no-shrink" src={header1}></img>
      </div>
    </header>
  );
}
