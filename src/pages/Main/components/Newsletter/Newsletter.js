import React, { useState } from "react";
import newsletterStyles from "./newsletter.module.css";
import useFormSubmit from "../../../../hooks/useFormSubmit";
import textStyles from "../../../../components/TextSection/text-section.module.css";

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const initialValue = { email: "" };

  const { formValues, handleSubmit, handleFormValues } = useFormSubmit(
    initialValue,
    null,
    "subscribers",
    setIsSubscribed
  );

  return (
    <>
      <section className={`${newsletterStyles.container} container`}>
        {!isSubscribed ? (
          <div className={newsletterStyles.text}>
            <p className={newsletterStyles.caption}>FREE CHECKLIST</p>
            <p className={newsletterStyles.subcaption}>
              for a stylish table setting
            </p>
            <p className="p-small">
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
                value={formValues.email}
                onChange={(e) => handleFormValues("email", e)}
                className={newsletterStyles.input}
                type="text"
                placeholder={"email address"}
              ></input>
              <button
                type="submit"
                className={`${newsletterStyles.btn} btn-black`}
              >
                send
              </button>
            </form>
          </div>
        ) : (
          <div
            className={`${textStyles.captionTxt} ${newsletterStyles.submitMsg}`}
          >
            Thank you for subscribing!
          </div>
        )}
      </section>
    </>
  );
}
