import React from "react";
import styles from "../css-modules/newsletter.module.css";
const classNames = require("classnames");

export default function Newsletter() {
  return (
    <>
      <sectiion className={`${styles.container} container`}>
        <div className={styles.text}>
          <p className={styles.caption}>FREE CHECKLIST</p>
          <p className={styles.subcaption}>for a stylish table setting</p>
          <p className={styles.paragraph}>
            <span>Download my checklist with loads of tips</span>
            <span>to create a table setting that everyone will love!</span>
          </p>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder={"email address"}
            ></input>
            <button className={styles.btn} type="button">
              send
            </button>
          </div>
        </div>
      </sectiion>
    </>
  );
}
