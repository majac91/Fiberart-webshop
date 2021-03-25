import React from "react";
import useFormSubmit from "../../../hooks/useFormSubmit/useFormSubmit";
import formStyles from "../../../css-modules/form.module.css";
import contactStyles from "../contact.module.css";
import Button from "../../../components/Button/Button";

const ContactForm = ({ setIsSent }) => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const { formValues, errors, handleFormValues, handleSubmit } = useFormSubmit(
    initialValues,
    null,
    "message",
    setIsSent
  );

  return (
    <form
      aria-label="contact form"
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
        {errors.name && <p className={formStyles.errorMsg}>{errors.name}</p>}
        <label htmlFor="email">Email</label>
        <input
          className={formStyles.input}
          id="email"
          value={formValues.email}
          onChange={(e) => handleFormValues("email", e)}
          noValidate
        />
        {errors.email && <p className={formStyles.errorMsg}>{errors.email}</p>}
        <label htmlFor="subject">Subject</label>
        <input
          className={formStyles.input}
          id="subject"
          value={formValues.subject}
          onChange={(e) => handleFormValues("subject", e)}
          noValidate
        />
        {errors.subject && (
          <p className={formStyles.errorMsg}>{errors.subject}</p>
        )}
        <label htmlFor="message">Message</label>
        <textarea
          className={formStyles.input}
          id="message"
          value={formValues.message}
          onChange={(e) => handleFormValues("message", e)}
          noValidate
        />
        {errors.message && (
          <p className={formStyles.errorMsg}>{errors.message}</p>
        )}
      </div>
      <div className={contactStyles.btn}>
        <Button className={"btnSm"} txt="Send">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
