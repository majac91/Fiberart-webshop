import React, { useEffect } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import navStyles from "./nav.module.css";

export default function Nav({ cartCount, onCartClick }) {
  return (
    <>
      <nav className={`${navStyles.container} container`}>
        <ul className={navStyles.navLinks}>
          <Link to="/" className={navStyles.navLink}>
            Home
          </Link>
          <Link to="/shop" className={navStyles.navLink}>
            Shop
          </Link>
          <Link to="/about" className={navStyles.navLink}>
            About
          </Link>
          <Link to="/contact" className={navStyles.navLink}>
            Contact
          </Link>
          <button
            onClick={onCartClick}
            className={`${navStyles.navLink} ${navStyles.cart} ignoreClickOutside`}
          >
            Cart ({cartCount})
          </button>
        </ul>
        <Link to="/" className={navStyles.navLogo}>
          <img alt="homepage" className={navStyles.navLogoImg} src={logo}></img>
        </Link>
      </nav>
    </>
  );
}
