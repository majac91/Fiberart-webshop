import React from "react";
import formStyles from "./form.module.css";
import cartStyles from "../../../../components/Cart/cart.module.css";
import useFormSubmit from "../../../../hooks/useFormSubmit";

const Form = ({ setIsOrdered, cartItems }) => {
  const initialValues = {
    firstName: " ",
    lastName: " ",
    adress: " ",
    city: " ",
    country: " ",
    zip: " ",
    email: " ",
    phone: " ",
  };

  //items from cart
  const order = cartItems.map((item) => ` ${item.name}`).toString();

  const { formValues, handleFormValues, handleSubmit } = useFormSubmit(
    initialValues,
    order,
    "orders",
    setIsOrdered
  );

  return (
    <div className={formStyles.wrapperOutter}>
      <p className={cartStyles.title}>Your details</p>
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
