import React, { useEffect } from "react";
import onClickOutside from "react-onclickoutside";
import cartStyles from "./cart.module.css";
const cx = require("classnames");

const Cart = ({
  cartIsOpen,
  setCartIsOpen,
  cartItems,
  setCartItems,
  setCartCount,
}) => {
  let total = cartItems.reduce(
    (acc, curr) => acc + parseInt(curr.price.slice(1)),
    0
  );

  function deleteItem(item) {
    const items = cartItems.filter((i) => i !== item);
    setCartItems(items);
    setCartCount(items.length);
  }

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartItems));
  }, [cartItems]);

  Cart.handleClickOutside = () => setCartIsOpen(false);

  return (
    <div className={cx(cartIsOpen ? cartStyles["open"] : cartStyles["closed"])}>
      <div className={cartStyles.wrapperOutter}>
        <p className={cartStyles.title}>Your order</p>
        <p className={cartStyles.emptyCart}>
          {cartItems.length === 0 ? "The cart is empty." : null}
        </p>
        {cartItems.map((item, index) => (
          <div key={index} className={cartStyles.wrapperInner}>
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
                  onClick={() => deleteItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
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
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

Cart.prototype = {};
const clickOutsideConfig = {
  handleClickOutside: () => Cart.handleClickOutside,
};
export default onClickOutside(Cart, clickOutsideConfig);
