import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cartStyles from "./cart.module.css";
import cancel from "../../icons/001-cancel-3.png";
const cx = require("classnames");

const Cart = ({
  cartIsOpen,
  clickOutside,
  cartItems,
  onCartClick,
  onDelete,
  total,
}) => {
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log(cartItems);
  return (
    <>
      <div
        ref={clickOutside}
        className={cx(cartIsOpen ? cartStyles["open"] : cartStyles["closed"])}
      >
        {/* CART HEADER */}

        <div className={cartStyles.wrapperOutter}>
          <div className={cartStyles.titleWrapper}>
            <p className={cartStyles.title}>Cart</p>
            <button onClick={onCartClick} className={cartStyles.closeBtn}>
              <img
                alt="close button"
                src={cancel}
                className={cartStyles.closeIcon}
              ></img>
            </button>
          </div>

          {/* EMPTY CART */}

          {cartItems.length === 0 ? (
            <p className={cartStyles.emptyCart}>The cart is empty.</p>
          ) : null}

          {/* CART ITEMS */}

          {cartItems.map((item, index) => (
            <Link
              to={`product/${item.path}`}
              key={index}
              className={cartStyles.wrapperInner}
            >
              <img
                className={cartStyles.img}
                alt={item.name}
                src={item.image}
              ></img>
              <div className={cartStyles.productInfo}>
                <p className={cartStyles.name}>{item.name}</p>
                <div className={cartStyles.priceWrapper}>
                  <p className={cartStyles.price}>{item.price}</p>
                  <button
                    className={cartStyles.btn}
                    onClick={() => onDelete(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </Link>
          ))}

          {/*CART FOOTER */}

          {cartItems.map((item, index) =>
            index === cartItems.length - 1 ? (
              <div className={cartStyles.totalWrapper}>
                <p className={cartStyles.subtotal}>
                  Subtotal <span className={cartStyles.span}>${total}</span>
                </p>
                <p className={cartStyles.shipping}>
                  Shipping <span className={cartStyles.span}>free</span>
                </p>
                <p className={cartStyles.total}>
                  Total <span className={cartStyles.span}>${total}</span>
                </p>
                <Link to="/checkout" className={cartStyles.btn}>
                  Checkout
                </Link>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
