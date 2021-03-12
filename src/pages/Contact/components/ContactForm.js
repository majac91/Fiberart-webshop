import React from "react";
import useFormSubmit from "../../../hooks/useFormSubmit/useFormSubmit";
import formStyles from "../../Checkout/components/Form/form.module.css";
import contactStyles from "../contact.module.css";

const ContactForm = ({ setIsSent }) => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const { formValues, handleFormValues, handleSubmit } = useFormSubmit(
    initialValues,
    null,
    "message",
    setIsSent
  );

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${contactStyles.form}`}
      noValidate
    >
      <div
        className={`${contactStyles.column} ${contactStyles.formWrapperInner}`}
      >
        <label htmlFor="name">Name</label>
        <input
          className={formStyles.input}
          id="name"
          value={formValues.name}
          onChange={(e) => handleFormValues("name", e)}
          noValidate
        />
        <label htmlFor="email">Email</label>
        <input
          className={formStyles.input}
          id="email"
          value={formValues.email}
          onChange={(e) => handleFormValues("email", e)}
          noValidate
        />
        <label htmlFor="subject">Subject</label>
        <input
          className={formStyles.input}
          id="subject"
          value={formValues.subject}
          onChange={(e) => handleFormValues("subject", e)}
          noValidate
        />
        <label htmlFor="message">Message</label>
        <textarea
          className={formStyles.input}
          id="message"
          value={formValues.message}
          onChange={(e) => handleFormValues("message", e)}
          noValidate
        />
      </div>
      <button className={`${contactStyles.btn} btn-black`} type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
