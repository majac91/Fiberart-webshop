import React from "react";
import textStyles from "../../css-modules/text-section.module.css";
import submitMsgStyles from "./submit-msg.module.css";

const SubmitMsg = () => {
  return (
    <div className={submitMsgStyles.container}>
      <h3 className={`${textStyles.captionTxt} ${submitMsgStyles.captionTxt}`}>
        Thank you!
      </h3>
      <p className={`${textStyles.subcaption} ${submitMsgStyles.subcaption}`}>
        A customer service representative will contact you soon.
      </p>
    </div>
  );
};

export default SubmitMsg;
