import React, { useState } from "react";
import formStyles from "./form.module.css";
import cartStyles from "../Cart/cart.module.css";
import { db } from "../../firebase/config";

const Form = ({ setSubmitted, cartItems }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    city: "",
    country: "",
    zip: "",
    email: "",
    phone: "",
  });

  function handleFormValues(name, e) {
    setFormValues((current) => {
      return { ...current, [name]: e.target.value };
    });
  }

  const order = cartItems.map((item) => `${item.name}`).toString();

  function handleSubmit(e) {
    e.preventDefault();
    db.ref("orders/" + Date.now()).set(
      { ...formValues, order: order },
      (error) => {
        if (error) {
          console.log(error);
        } else {
          setSubmitted(true);
          console.log("Data saved successfully!");
        }
      }
    );

    setFormValues({
      firstName: " ",
      lastName: " ",
      adress: " ",
      city: " ",
      country: " ",
      zip: " ",
      email: " ",
      phone: " ",
    });
  }

  return (
    <div className={formStyles.wrapperOutter}>
      <p className={cartStyles.title}>Order details</p>
      <form
        className={formStyles.wrapperInner}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={formStyles.row}>
          <div className={formStyles.column}>
            <label htmlFor="firstName">First name</label>
            <input
              className={formStyles.input}
              id="firstName"
              value={formValues.firstName}
              onChange={(e) => handleFormValues("firstName", e)}
              required
            />
          </div>
          <div className={formStyles.column}>
            <label htmlFor="lastName">Last name</label>
            <input
              className={formStyles.input}
              id="lastName"
              value={formValues.lastName}
              onChange={(e) => handleFormValues("lastName", e)}
              required
            />
          </div>
        </div>

        <div className={formStyles.row}>
          <div className={formStyles.column}>
            <label htmlFor="adress">Adress</label>
            <input
              className={formStyles.input}
              id="adress"
              value={formValues.adress}
              onChange={(e) => handleFormValues("adress", e)}
              required
            />
          </div>
          <div className={formStyles.column}>
            <label htmlFor="city">City</label>
            <input
              className={formStyles.input}
              id="city"
              value={formValues.city}
              onChange={(e) => handleFormValues("city", e)}
              required
            />
          </div>
        </div>

        <div className={formStyles.row}>
          <div className={formStyles.column}>
            <label htmlFor="country">Country</label>
            <input
              className={formStyles.input}
              id="country"
              value={formValues.country}
              onChange={(e) => handleFormValues("country", e)}
              required
            />
          </div>
          <div className={formStyles.column}>
            <label htmlFor="zip">Zip</label>
            <input
              className={formStyles.input}
              id="zip"
              type="number"
              value={formValues.zip}
              onChange={(e) => handleFormValues("zip", e)}
              required
            />
          </div>
        </div>

        <div className={formStyles.row}>
          <div className={formStyles.column}>
            <label htmlFor="email">Email</label>
            <input
              className={formStyles.input}
              id="email"
              type="email"
              value={formValues.email}
              onChange={(e) => handleFormValues("email", e)}
              required
            />
          </div>

          <div className={formStyles.column}>
            <label htmlFor="phone">Phone</label>
            <input
              className={formStyles.input}
              id="phone"
              type="tel"
              value={formValues.phone}
              onChange={(e) => handleFormValues("phone", e)}
              required
            />
          </div>
        </div>

        <button className={cartStyles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
