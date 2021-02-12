import React from "react";
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

  cartItems.map((item) =>
    cartItems.indexOf(item) === cartItems.length - 1
      ? console.log("last item" + cartItems.indexOf(item))
      : console.log("not last" + cartItems.indexOf(item))
  );

  Cart.handleClickOutside = () => setCartIsOpen(false);

  return (
    <div className={cx(cartIsOpen ? cartStyles["open"] : cartStyles["closed"])}>
      <p>Your order</p>

      {cartItems.map((item, index) => (
        <div>
          <p>{item.name}</p>
          <img
            alt={item.name}
            style={{ width: "200px", height: "200px" }}
            src={item.image}
          ></img>
          <>{item.price}</>
          <button onClick={() => deleteItem(item)}>Delete</button>
        </div>
      ))}

      {cartItems.map((item) =>
        cartItems.indexOf(item) === cartItems.length - 1 ? (
          <p>
            Total
            {total}
          </p>
        ) : (
          <p>{null}</p>
        )
      )}
    </div>
  );
};

Cart.prototype = {};
const clickOutsideConfig = {
  handleClickOutside: () => Cart.handleClickOutside,
};
export default onClickOutside(Cart, clickOutsideConfig);
