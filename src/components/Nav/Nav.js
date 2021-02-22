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
        <button
          className={`${navStyles.closeBurgerBtn} ignoreClickOutside`}
          onClick={onBurgerClick}
        >
          <img
            alt="close menu"
            className={navStyles.closeIcon}
            src={closeIcon}
          ></img>
        </button>
        <div className={navStyles.wrapperDesktop}>
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
          <button
            onClick={onCartClick}
            className={`${navStyles.navLink} ${navStyles.cart} ignoreClickOutside`}
          >
            Cart ({cartCount})
          </button>
        </div>
      </div>
      <div className={navStyles.wrapperMobile}>
        <button className={navStyles.burgerBtn} onClick={onBurgerClick}>
          <img
            alt="open menu"
            className={navStyles.burgerIcon}
            src={burgerIcon}
          ></img>
        </button>
        <Link to="/" className={navStyles.logoMobileLink}>
          <img
            alt="homepage"
            className={navStyles.logoMobileImg}
            src={logo}
          ></img>
        </Link>
        <button
          onClick={onCartClick}
          className={`${navStyles.navLink} ${navStyles.cart} ignoreClickOutside`}
        >
          Cart ({cartCount})
        </button>
      </div>
      <Link to="/" className={navStyles.logoDesktopLink}>
        <img
          alt="homepage"
          className={navStyles.logoDesktopImg}
          src={logo}
        ></img>
      </Link>
    </nav>
  );
}
