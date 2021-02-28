import React from "react";
import { Link } from "react-router-dom";
import faqStyles from "./faq.module.css";

const Faq = () => {
  return (
    <>
      <div className={`${faqStyles.faqOuter} ${faqStyles.container}`}>
        <h3 className={faqStyles.faqHeading}>Frequently asked</h3>
        <div className={faqStyles.faqInner}>
          <div className={`${faqStyles.faqItem}`}>
            <div className={faqStyles.faqText}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <div className={`${faqStyles.faqItem}`}>
            <div className={faqStyles.faqText}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <div className={`${faqStyles.faqItem}`}>
            <div className={faqStyles.faqText}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <div className={`${faqStyles.faqItem}`}>
            <div className={faqStyles.faqText}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <button className={`${faqStyles.faqBtn} btn-black`} type="button">
            <Link className={faqStyles.btnLink} to="/contact">
              ask a question
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Faq;
