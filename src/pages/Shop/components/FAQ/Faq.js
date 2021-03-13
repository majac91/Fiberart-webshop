import React from "react";
import { useHistory } from "react-router-dom";
import faqStyles from "./faq.module.css";

const Faq = () => {
  const history = useHistory();

  const handleBtnRedirect = () => {
    return history.push("/contact");
  };

  return (
    <>
      <div className={`${faqStyles.faqOuter} ${faqStyles.container}`}>
        <h2 className={faqStyles.faqHeading}>Frequently asked</h2>
        <div className={faqStyles.faqInner}>
          <div className={`${faqStyles.faqItem}`}>
            <div className={faqStyles.faqText}>
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>

          <div className={`${faqStyles.faqItem}`}>
            <div className={faqStyles.faqText}>
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>

          <div className={`${faqStyles.faqItem}`}>
            <div className={faqStyles.faqText}>
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>

          <div className={`${faqStyles.faqItem}`}>
            <div className={faqStyles.faqText}>
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>

          <button
            className={`${faqStyles.faqBtn} btn-black`}
            onClick={handleBtnRedirect}
            type="button"
          >
            ask a question
          </button>
        </div>
      </div>
    </>
  );
};

export default Faq;
