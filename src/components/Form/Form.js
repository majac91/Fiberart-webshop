import React, { useState } from "react";
import formStyles from "./form.module.css";
import cartStyles from "../Cart/cart.module.css";
import { db } from "../../firebase/config";

const Form = ({ setSubmitted, cartItems }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const order = cartItems.map((item) => `${item.name}`).toString();

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    db.ref("orders/" + Date.now()).set(
      {
        firstName: firstName,
        lastName: lastName,
        adress: adress,
        city: city,
        country: country,
        zip: zip,
        phone: phone,
        email: email,
        order: order,
      },
      (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Data saved successfully!");
        }
      }
    );

    setFirstName(" ");
    setLastName(" ");
    setAdress(" ");
    setCity(" ");
    setCountry(" ");
    setZip(" ");
    setEmail(" ");
    setPhone(" ");
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className={formStyles.column}>
            <label htmlFor="lastName">Last name</label>
            <input
              className={formStyles.input}
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              required
            />
          </div>
          <div className={formStyles.column}>
            <label htmlFor="city">City</label>
            <input
              className={formStyles.input}
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className={formStyles.column}>
            <label htmlFor="zip">Zip</label>
            <input
              className={formStyles.input}
              id="zip"
              type="number"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={formStyles.column}>
            <label htmlFor="phone">Phone</label>
            <input
              className={formStyles.input}
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
