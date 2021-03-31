import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import navStyles from "./nav.module.css";
import burgerIcon from "../../icons/menu.png";
import closeIcon from "../../icons/001-cancel-3.png";
import cartIcon from "../../icons/shop.png";

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
      <Link to="/" className={navStyles.logoDesktopLink}>
        <img alt="homepage" className={navStyles.logoDesktopImg} src={logo} />
      </Link>
      <div
        className={cx(navStyles.navLinks, {
          [navStyles.open]: burgerIsOpen,
        })}
      >
        <button
          className={`${navStyles.closeBurgerBtn} ignoreClickOutside`}
          onClick={onBurgerClick}
        >
          <img alt="close" className={navStyles.closeIcon} src={closeIcon} />
        </button>
        {/* DESKTOP*/}
        <ul className={`${navStyles.wrapperDesktop} d-flex`}>
          <li className={navStyles.listItem}>
            <Link to="/" className={navStyles.navLink}>
              Home
            </Link>
          </li>
          <li className={navStyles.listItem}>
            <Link to="/shop" className={navStyles.navLink}>
              Shop
            </Link>
          </li>
          <li className={navStyles.listItem}>
            <Link to="/about" className={navStyles.navLink}>
              About
            </Link>
          </li>
          <li className={navStyles.listItem}>
            <Link to="/contact" className={navStyles.navLink}>
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={onCartClick}
              className={`${navStyles.navLink} ${navStyles.cart} ignoreClickOutside`}
            >
              Cart <span className={navStyles.cartIcon}>{cartCount}</span>
            </button>
          </li>
        </ul>
      </div>
      {/* MOBILE */}
      <div className={navStyles.wrapperMobile}>
        <button className={navStyles.burgerBtn} onClick={onBurgerClick}>
          <img
            alt="open menu"
            className={navStyles.burgerIcon}
            src={burgerIcon}
          />
        </button>
        <Link to="/" className={navStyles.logoMobileLink}>
          <img alt="homepage" className={navStyles.logoMobileImg} src={logo} />
        </Link>
        <button
          onClick={onCartClick}
          className={`${navStyles.navLink} ${navStyles.cart} ignoreClickOutside`}
        >
          <span className={navStyles.cartIcon}>{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}
