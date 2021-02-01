import React from "react";
import shopStyles from "../css-modules/shop.module.css";

const Faq = () => {
  return (
    <>
      <div className={`${shopStyles.faqOuter} ${shopStyles.container}`}>
        <h3 className={shopStyles.faqHeading}>Frequently asked</h3>
        <div className={shopStyles.faqInner}>
          <div className={`${shopStyles.faqItem}`}>
            <div className={shopStyles.text}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                mi felis, consequat dignissim enim eu, pharetra vestibulum
                felis. Pellentesque aliquam ac erat quis rhoncus. Vestibulum
                luctus hendrerit dictum.'
              </p>
            </div>
          </div>
          <div className={`${shopStyles.faqItem}`}>
            <div className={shopStyles.text}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                mi felis, consequat dignissim enim eu, pharetra vestibulum
                felis. Pellentesque aliquam ac erat quis rhoncus. Vestibulum
                luctus hendrerit dictum.'
              </p>
            </div>
          </div>
          <div className={`${shopStyles.faqItem}`}>
            <div className={shopStyles.text}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                mi felis, consequat dignissim enim eu, pharetra vestibulum
                felis. Pellentesque aliquam ac erat quis rhoncus. Vestibulum
                luctus hendrerit dictum.'
              </p>
            </div>
          </div>
          <div className={`${shopStyles.faqItem}`}>
            <div className={shopStyles.text}>
              <h4>Lorem ipsum dolor sit</h4>

              <p>
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                mi felis, consequat dignissim enim eu, pharetra vestibulum
                felis. Pellentesque aliquam ac erat quis rhoncus. Vestibulum
                luctus hendrerit dictum.'
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
