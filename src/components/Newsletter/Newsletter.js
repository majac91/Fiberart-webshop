import React, { useState } from "react";
import styles from "./newsletter.module.css";
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
      <section className={`${styles.container} container`}>
        <div className={styles.text}>
          <p className={styles.caption}>FREE CHECKLIST</p>
          <p className={styles.subcaption}>for a stylish table setting</p>
          <p className={styles.paragraph}>
            <span>Download my checklist with loads of tips</span>
            <span>to create a table setting that everyone will love!</span>
          </p>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
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
