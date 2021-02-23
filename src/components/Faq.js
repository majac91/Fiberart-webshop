import React from "react";
import shopStyles from "../pages/Shop/shop.module.css";

const Faq = () => {
  return (
    <>
      <div className={`${shopStyles.faqOuter} ${shopStyles.container}`}>
        <h3 className={shopStyles.faqHeading}>Frequently asked</h3>
        <div className={shopStyles.faqInner}>
          <div className={`${shopStyles.faqItem}`}>
            <div className={shopStyles.faqText}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <div className={`${shopStyles.faqItem}`}>
            <div className={shopStyles.faqText}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <div className={`${shopStyles.faqItem}`}>
            <div className={shopStyles.faqText}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <div className={`${shopStyles.faqItem}`}>
            <div className={shopStyles.faqText}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <button className={`${shopStyles.faqBtn} btn-black`} type="button">
            ask a question
          </button>
        </div>
      </div>
    </>
  );
};

export default Faq;
