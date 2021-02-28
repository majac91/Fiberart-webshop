import React from "react";
import Header from "../../components/Header/Header";
import TextSection from "../../components/TextSection/TextSection";
import contactStyles from "./contact.module.css";
import formStyles from "../../components/Form/form.module.css";

const Contact = () => {
  return (
    <>
      <Header page="checkout"></Header>
      <TextSection
        section="contact"
        message="Let's connect"
        caption="Come say hi!"
        subcaption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
      />
      <section className={`${contactStyles.contactForm} d-flex`}>
        <div className={`${contactStyles.info} ${contactStyles.column}`}>
          <div className={contactStyles.infoWrapperOutter}>
            <div className={contactStyles.infoWrapperInner}>
              <div>
                <p className={contactStyles.title}>contact info</p>
                <p className={contactStyles.text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </div>
              <div>
                <p className={contactStyles.title}>location</p>
                <p className={contactStyles.text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </div>
              <div>
                <p className={contactStyles.title}>business hours</p>
                <p className={contactStyles.text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className={`${contactStyles.form}`}>
          <div
            className={`${contactStyles.column} ${contactStyles.formWrapperInner}`}
          >
            <label htmlFor="name">Name</label>
            <input
              className={formStyles.input}
              id="name"
              // value={formValues.firstName}
              // onChange={(e) => handleFormValues("firstName", e)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              className={formStyles.input}
              id="email"
              // value={formValues.firstName}
              // onChange={(e) => handleFormValues("firstName", e)}
              required
            />
            <label htmlFor="subject">Subject</label>
            <input
              className={formStyles.input}
              id="subject"
              // value={formValues.firstName}
              // onChange={(e) => handleFormValues("firstName", e)}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              className={formStyles.input}
              id="message"
              // value={formValues.firstName}
              // onChange={(e) => handleFormValues("firstName", e)}
              required
            />

            {/* </div> */}
          </div>
          <button className={`${contactStyles.btn} btn-black`} type="submit">
            Send
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
