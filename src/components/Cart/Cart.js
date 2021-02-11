import React from "react";
import onClickOutside from "react-onclickoutside";

const Cart = ({
  cartIsOpen,
  setCartIsOpen,
  cartItems,
  setCartItems,
  setCartCount,
}) => {
  let total = null;

  function deleteItem(item) {
    const items = cartItems.filter((i) => i !== item);
    setCartItems(items);
    setCartCount(items.length);
  }

  Cart.handleClickOutside = () => setCartIsOpen(false);

  return (
    //Only render the total price after the last product
    cartIsOpen &&
    cartItems.map((item, index) => {
      total += parseInt(item.price.slice(1));
      if (index === cartItems.length - 1) {
        return (
          <div>
            <div>
              <h2>{item.name}</h2>
              <img
                alt={item.name}
                style={{ width: "200px", height: "200px" }}
                src={item.image}
              ></img>
              <h4>{item.price}</h4>
              <button onClick={() => deleteItem(item)}>Delete</button>
            </div>
            <p>Total {total}</p>
          </div>
        );
      } else {
        return (
          <div>
            <div>
              <h2>{item.name}</h2>
              <img
                alt={item.name}
                style={{ width: "200px", height: "200px" }}
                src={item.image}
              ></img>
              <h4>{item.price}</h4>
              <button onClick={() => deleteItem(item)}>Delete</button>
            </div>
          </div>
        );
      }
    })
  );
};

Cart.prototype = {};
const clickOutsideConfig = {
  handleClickOutside: () => Cart.handleClickOutside,
};
export default onClickOutside(Cart, clickOutsideConfig);
