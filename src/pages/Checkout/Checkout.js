import React, { useState } from "react";
import Header from "../../components/Header/Header";
import TextSection from "../../components/TextSection";
import Form from "../../components/Form/Form";
import cartStyles from "../../components/Cart/cart.module.css";
import checkoutStyles from "./checkout.module.css";

const Checkout = ({ total, onDelete, cartItems }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header page="checkout" />
      <TextSection
        section="brandMsg"
        message="Order details"
        caption="Complete your order"
        subcaption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
      ></TextSection>
      <div className={`${checkoutStyles.container} d-flex container`}>
        <div className={checkoutStyles.form}>
          <Form
            submitted={submitted}
            setSubmitted={setSubmitted}
            cartItems={cartItems}
          ></Form>
        </div>
        <div className={`${cartStyles.wrapperOutter} ${checkoutStyles.cart}`}>
          {!submitted ? (
            <>
              <div className={cartStyles.titleWrapper}>
                <p className={cartStyles.title}>Cart</p>
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
            <h1>Thank you</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;