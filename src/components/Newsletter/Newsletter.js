import React, { useState } from "react";
import useFormSubmit from "../../hooks/useFormSubmit/useFormSubmit";
import Button from "../Button/Button";
import newsletterStyles from "./newsletter.module.css";
import formStyles from "../../css-modules/form.module.css";
import submitMsgStyles from "../SubmitMsg/submit-msg.module.css";

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const initialValue = { email: "" };

  const { formValues, errors, handleSubmit, handleFormValues } = useFormSubmit(
    initialValue,
    null,
    "subscribers",
    setIsSubscribed
  );

  return (
    <>
      {!isSubscribed ? (
        <form
          aria-label="subscribe"
          className={`${formStyles.row} ${newsletterStyles.newsletter}`}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="newsletter" className="visually-hidden">
            Sign up for our newsletter
          </label>
          <input
            id="newsletter"
            value={formValues.email}
            onChange={(e) => handleFormValues("email", e)}
            className={`${formStyles.input} ${newsletterStyles.newsletterInput}`}
            type="text"
            placeholder={"email"}
          />
          <Button txt={"Subscribe"} className={"btnSm"}>
            send
          </Button>
          {errors.email && (
            <p className={formStyles.errorMsg}>{errors.email}</p>
          )}
        </form>
      ) : (
        <div className={submitMsgStyles.newsletter}>
          Thank you for subscribing!
        </div>
      )}
    </>
  );
}
