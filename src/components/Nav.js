import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav container">
        <ul className="nav__links">
          <Link to="/home" className="nav__link">
            Home
          </Link>
          <Link to="/shop" className="nav__link">
            Shop
          </Link>
          <Link to="/about" className="nav__link">
            About
          </Link>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </ul>
        <div className="nav__logo">
          <img className="nav__logo-img" src={logo}></img>
        </div>
      </nav>
    </>
  );
}
