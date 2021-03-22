import React, { useState } from "react";
import Header from "../../components/Header/Header";
import TextSection from "../../components/TextSection/TextSection";
import contactStyles from "./contact.module.css";
import SubmitMsg from "../../components/SubmitMsg/SubmitMsg";
import submitStyles from "../../components/SubmitMsg/submit-msg.module.css";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <>
      <Header page="checkout"></Header>
      <TextSection
        section="contact"
        caption="Come say hi!"
        subcaption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
      />
      <section
        className={`${contactStyles.contactForm} ${submitStyles.contactForm} d-flex`}
      >
        <div className={contactStyles.info}>
          <div className={contactStyles.infoWrapperOutter}>
            <div className={contactStyles.infoWrapperInner}>
              <div>
                <h3 className={contactStyles.title}>contact info</h3>
                <p className={contactStyles.text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </div>
              <div>
                <h3 className={contactStyles.title}>location</h3>
                <p className={contactStyles.text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </div>
              <div>
                <h3 className={contactStyles.title}>business hours</h3>
                <p className={contactStyles.text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
        {!isSent ? <ContactForm setIsSent={setIsSent} /> : <SubmitMsg />}
      </section>
    </>
  );
};

export default Contact;
