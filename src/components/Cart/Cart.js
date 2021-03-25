import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/Button";
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

  const history = useHistory();

  const redirect = () => history.push("/checkout");

  return (
    <div
      aria-label="cart"
      ref={clickOutsideRef}
      aria-hidden={cartIsOpen ? "false" : "true"}
      className={cx(cartStyles.cart, { [cartStyles.open]: cartIsOpen })}
    >
      <div className={cartStyles.wrapperOutter}>
        {/* CART HEADER */}
        <div className={cartStyles.titleWrapper}>
          <h2 className={cartStyles.title}>Cart</h2>
          <button
            tabIndex={cartIsOpen ? "0" : "-1"}
            onClick={onCartClick}
            className={`${cartStyles.closeBtn} ignoreClickOutside`}
          >
            <img
              alt="close"
              src={cancel}
              className={cartStyles.closeIcon}
            ></img>
          </button>
        </div>

        {/* CART MAIN */}
        {cartItems.length === 0 ? (
          <h3 className={cartStyles.emptyCart}>Your cart is empty.</h3>
        ) : null}

        {cartItems.map((item, index) => (
          <div
            aria-label="cart item"
            key={index}
            className={cartStyles.wrapperInner}
          >
            <img
              aria-hidden="true"
              className={cartStyles.img}
              alt={item.name}
              src={item.imageSmall}
            ></img>
            <div className={cartStyles.productInfo}>
              <Link
                tabIndex={cartIsOpen ? "0" : "-1"}
                to={`/product/${item.path}`}
              >
                <h3 className={cartStyles.name}>{item.name}</h3>
              </Link>
              <div className={cartStyles.priceWrapper}>
                <h4 aria-label="price" className={cartStyles.price}>
                  {item.price}
                </h4>
                <button
                  tabIndex={cartIsOpen ? "0" : "-1"}
                  className={`${cartStyles.removeBtn} ignoreClickOutside`}
                  onClick={() => onDelete(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* CART FOOTER */}
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
              <div
                tabIndex={cartIsOpen ? "0" : "-1"}
                className={cartStyles.checkout}
              >
                <Button className={"btnSm"} txt="Checkout" onClick={redirect}>
                  Send
                </Button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Cart;
