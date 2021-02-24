import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cartStyles from "./cart.module.css";
import cancel from "../../icons/001-cancel-3.png";
const cx = require("classnames");

const Cart = ({
  cartIsOpen,
  clickOutsideRef,
  cartItems,
  onCartClick,
  onDelete,
  total,
}) => {
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div
      ref={clickOutsideRef}
      className={cx(cartStyles.cart, { [cartStyles.open]: cartIsOpen })}
    >
      <div className={cartStyles.wrapperOutter}>
        <div className={cartStyles.titleWrapper}>
          <p className={cartStyles.title}>Cart</p>
          <button
            onClick={onCartClick}
            className={`${cartStyles.closeBtn} ignoreClickOutside`}
          >
            <img
              alt="close button"
              src={cancel}
              className={cartStyles.closeIcon}
            ></img>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className={cartStyles.emptyCart}>Your cart is empty.</p>
        ) : null}

        {cartItems.map((item, index) => (
          <div key={index} className={cartStyles.wrapperInner}>
            <img
              className={cartStyles.img}
              alt={item.name}
              src={item.image}
            ></img>
            <div className={cartStyles.productInfo}>
              <Link to={`/product/${item.path}`}>
                <p className={cartStyles.name}>{item.name}</p>
              </Link>
              <div className={cartStyles.priceWrapper}>
                <p className={cartStyles.price}>{item.price}</p>
                <button
                  className={`${cartStyles.btn} ignoreClickOutside`}
                  onClick={() => onDelete(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {cartItems.map((item, index) =>
          index === cartItems.length - 1 ? (
            <div className={cartStyles.totalWrapper} key={index}>
              <p className={cartStyles.subtotal}>
                Subtotal <span className={cartStyles.span}>${total}</span>
              </p>
              <p className={cartStyles.shipping}>
                Shipping <span className={cartStyles.span}>free</span>
              </p>
              <p className={cartStyles.total}>
                Total <span className={cartStyles.span}>${total}</span>
              </p>
              <Link
                to="/checkout"
                className={`${cartStyles.btn} ${cartStyles.checkout} `}
              >
                Checkout
              </Link>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Cart;
