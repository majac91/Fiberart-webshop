import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CheckoutForm from "./components/Form/CheckoutForm";
import Cart from "../../components/Cart/Cart";
import cartStyles from "../../components/Cart/cart.module.css";
import checkoutStyles from "./checkout.module.css";
import SubmitMsg from "../../components/SubmitMsg/SubmitMsg";

const cx = require("classnames");

const Checkout = ({ onClearCart, total, onDelete, cartItems }) => {
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    if (isOrdered) {
      onClearCart();
    }
  }, [isOrdered]);

  return (
    <>
      <Header page="checkout" caption="Complete your order" />
      <main className={`${checkoutStyles.container} d-flex container`}>
        <section
          className={`${checkoutStyles.form} ${cx({
            orderSubmitted: isOrdered,
          })}`}
        >
          <CheckoutForm setIsOrdered={setIsOrdered} cartItems={cartItems} />
        </section>
        <section
          className={`${cartStyles.wrapperOutter} ${checkoutStyles.order} `}
        >
          {!isOrdered ? (
            <>
              <div className={cartStyles.titleWrapper}>
                <h3
                  className={`${cartStyles.title} ${cartStyles.checkoutPageOrder}`}
                >
                  Your order
                </h3>
              </div>
              <Cart
                isCheckoutOrder={true}
                total={total}
                cartItems={cartItems}
                onDelete={onDelete}
                onClearCart={onClearCart}
              />
            </>
          ) : (
            <SubmitMsg />
          )}
        </section>
      </main>
    </>
  );
};

export default Checkout;
