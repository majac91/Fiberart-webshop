import React, { useState } from "react";
import newsletterStyles from "./newsletter.module.css";
import { db } from "../../firebase/config";

export default function Newsletter() {
  const [email, setEmail] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    db.ref("subscribers/" + Date.now()).set({ email: email }, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Subscribed successfully");
      }
    });
  }

  return (
    <>
      <section className={`${newsletterStyles.container} container`}>
        <div className={newsletterStyles.text}>
          <p className={newsletterStyles.caption}>FREE CHECKLIST</p>
          <p className={newsletterStyles.subcaption}>
            for a stylish table setting
          </p>
          <p className={newsletterStyles.paragraph}>
            <span className={newsletterStyles.line}>
              Download my checklist with loads of tips
            </span>
            <span className={newsletterStyles.line}>
              to create a table setting that everyone will love!
            </span>
          </p>
          <form
            className={newsletterStyles.form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={newsletterStyles.input}
              type="text"
              placeholder={"email address"}
            ></input>
            <button type="submit" className={"btn-black"}>
              send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
