import React from "react";
import textStyles from "../../components/TextSection/text-section.module.css";
import submitMsgStyles from "./submit-msg.module.css";

const SubmitMsg = () => {
  return (
    <div className={submitMsgStyles.container}>
      <p className={`${textStyles.captionTxt} ${submitMsgStyles.captionTxt}`}>
        Thank you!
      </p>
      <p className={`${textStyles.subcaption} ${submitMsgStyles.subcaption}`}>
        A customer service representative will contact you soon.
      </p>
    </div>
  );
};

export default SubmitMsg;
