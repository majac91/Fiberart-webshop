import React from "react";
import submitMsgStyles from "./submit-msg.module.css";

const SubmitMsg = () => {
  return (
    <div className={submitMsgStyles.container}>
      <h3 className={submitMsgStyles.captionTxt}>Thank you!</h3>
      <p className={submitMsgStyles.subcaption}>
        A customer service representative will contact you soon.
      </p>
    </div>
  );
};

export default SubmitMsg;
