import React, { useRef } from "react";
import formStyles from "../../../../css-modules/form.module.css";
import cartStyles from "../../../../components/Cart/cart.module.css";
import useFormSubmit from "../../../../hooks/useFormSubmit/useFormSubmit";

const Form = ({ setIsOrdered, cartItems }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    email: "",
    phone: "",
  };

  const formRef = useRef();

  //items from cart
  const order = cartItems.map((item) => ` ${item.name}`).toString();

  const { formValues, errors, handleFormValues, handleSubmit } = useFormSubmit(
    initialValues,
    order,
    "orders",
    setIsOrdered
  );

  return (
    <div className={formStyles.wrapperOutter}>
      <p className={cartStyles.title}>Your details</p>
      <form
        ref={formRef}
        className={formStyles.wrapperInner}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <div className={formStyles.row}>
          <div className={formStyles.column}>
            <label htmlFor="firstName">First name</label>
            <input
              className={formStyles.input}
              id="firstName"
              value={formValues.firstName}
              onChange={(e) => handleFormValues("firstName", e)}
              noValidate
            />
            {errors.firstName && (
              <p className={formStyles.errorMsg}>{errors.firstName}</p>
            )}
          </div>
          <div className={formStyles.column}>
            <label htmlFor="lastName">Last name</label>
            <input
              className={formStyles.input}
              id="lastName"
              value={formValues.lastName}
              onChange={(e) => handleFormValues("lastName", e)}
              noValidate
            />
            {errors.lastName && (
              <p className={formStyles.errorMsg}>{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className={formStyles.row}>
          <div className={formStyles.column}>
            <label htmlFor="adress">Address</label>
            <input
              className={formStyles.input}
              id="adress"
              value={formValues.address}
              onChange={(e) => handleFormValues("address", e)}
              noValidate
            />
            {errors.address && (
              <p className={formStyles.errorMsg}>{errors.address}</p>
            )}
          </div>
          <div className={formStyles.column}>
            <label htmlFor="city">City</label>
            <input
              className={formStyles.input}
              id="city"
              value={formValues.city}
              onChange={(e) => handleFormValues("city", e)}
              noValidate
            />
            {errors.city && (
              <p className={formStyles.errorMsg}>{errors.city}</p>
            )}
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
              noValidate
            />
            {errors.country && (
              <p className={formStyles.errorMsg}>{errors.country}</p>
            )}
          </div>
          <div className={formStyles.column}>
            <label htmlFor="zip">Zip</label>
            <input
              className={formStyles.input}
              id="zip"
              type="number"
              value={formValues.zip}
              onChange={(e) => handleFormValues("zip", e)}
              noValidate
            />
            {errors.zip && <p className={formStyles.errorMsg}>{errors.zip}</p>}
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
              noValidate
            />
            {errors.email && (
              <p className={formStyles.errorMsg}>{errors.email}</p>
            )}
          </div>

          <div className={formStyles.column}>
            <label htmlFor="phone">Phone</label>
            <input
              className={formStyles.input}
              id="phone"
              type="tel"
              value={formValues.phone}
              onChange={(e) => handleFormValues("phone", e)}
              noValidate
            />
            {errors.phone && (
              <p className={formStyles.errorMsg}>{errors.phone}</p>
            )}
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
