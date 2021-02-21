import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import navStyles from "./nav.module.css";
import burgerIcon from "../../icons/menu.png";
import closeIcon from "../../icons/001-cancel-3.png";

const cx = require("classnames");

export default function Nav({
  clickOutsideRef,
  burgerIsOpen,
  onBurgerClick,
  onCartClick,
  cartCount,
}) {
  return (
    <nav ref={clickOutsideRef} className={`${navStyles.container} container`}>
      <div
        className={cx(navStyles.navLinks, {
          [navStyles.open]: burgerIsOpen,
        })}
      >
        <button className={navStyles.closeBtn} onClick={onBurgerClick}>
          <img
            alt="close menu"
            className={navStyles.closeIcon}
            src={closeIcon}
          ></img>
        </button>
        <div className={navStyles.wrapperInner}>
          <Link to="/" className={cx(navStyles.navLink)}>
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
        </div>
      </div>
      <button className={navStyles.burgerBtn} onClick={onBurgerClick}>
        <img
          alt="open menu"
          className={navStyles.burgerIcon}
          src={burgerIcon}
        ></img>
      </button>
      <button
        onClick={onCartClick}
        className={`${navStyles.navLink} ${navStyles.cart} ignoreClickOutside`}
      >
        Cart ({cartCount})
      </button>
      <Link to="/" className={navStyles.navLogoLink}>
        <img alt="homepage" className={navStyles.navLogoImg} src={logo}></img>
      </Link>
    </nav>
  );
}
