import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CheckoutForm from "./components/Form/CheckoutForm";
import cartStyles from "../../components/Cart/cart.module.css";
import checkoutStyles from "./checkout.module.css";
import SubmitMsg from "../../components/SubmitMsg/SubmitMsg";

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
        {/* F O R M */}
        <section className={checkoutStyles.form}>
          <CheckoutForm setIsOrdered={setIsOrdered} cartItems={cartItems} />
        </section>
        {/* C A R T */}
        <section
          className={`${cartStyles.wrapperOutter} ${checkoutStyles.cart}`}
        >
          {!isOrdered ? (
            <>
              {/* CART HEADER */}
              <div className={cartStyles.titleWrapper}>
                <h3 className={cartStyles.title}>Your order</h3>
              </div>

              {/* CART MAIN */}
              {cartItems.length === 0 ? (
                <p className={cartStyles.emptyCart}>The cart is empty.</p>
              ) : null}

              {cartItems.map((item, index) => (
                <div key={index} className={cartStyles.wrapperInner}>
                  <img
                    className={cartStyles.img}
                    alt={item.name}
                    src={item.image}
                    aria-hidden="true"
                  />
                  <div className={cartStyles.productInfo}>
                    <p className={cartStyles.name}>{item.name}</p>
                    <div className={cartStyles.priceWrapper}>
                      <p className={cartStyles.price}>{item.price}</p>
                      <button
                        className={cartStyles.removeBtn}
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
