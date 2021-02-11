import React from "react";

export default function Cart({
  cartIsOpen,
  cartItems,
  setCartItems,
  setCartCount,
}) {
  let total = 0;

  function deleteItem(item) {
    const items = cartItems.filter((i) => i !== item);
    setCartItems(items);
    setCartCount(items.length);
  }

  return (
    cartIsOpen &&
    cartItems.map((item) => {
      total += Number(item.price.slice(1));
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
    })
  );
}
