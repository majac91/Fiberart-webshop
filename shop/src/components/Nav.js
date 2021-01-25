import React from "react";
import logo from "../img/logo.png";

export default function Nav() {
  return (
    <>
      <nav className="nav container">
        <ul className="nav__links">
          <li className="nav__link">Home</li>
          <li className="nav__link">Shop</li>
          <li className="nav__link">About</li>
          <li className="nav__link">Contact</li>
        </ul>
        <div className="nav__logo">
          <img className="nav__logo-img" src={logo}></img>
        </div>
      </nav>
    </>
  );
}
