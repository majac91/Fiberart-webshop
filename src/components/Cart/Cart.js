import React, { useEffect } from "react";
import onClickOutside from "react-onclickoutside";
import cartStyles from "./cart.module.css";
import cancel from "../../icons/001-cancel-3.png";
const cx = require("classnames");

const Cart = ({
  cartIsOpen,
  setCartIsOpen,
  cartItems,
  setCartItems,
  setCartCount,
  onCartClick,
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
        <div className={cartStyles.titleWrapper}>
          <p className={cartStyles.title}>Cart</p>
          <button onClick={onCartClick} className={cartStyles.closeBtn}>
            <img src={cancel} className={cartStyles.closeIcon}></img>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className={cartStyles.emptyCart}>The cart is empty.</p>
        ) : null}

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
