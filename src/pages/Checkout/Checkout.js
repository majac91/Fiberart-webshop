import React from "react";
import Header from "../../components/Header/Header";
import TextSection from "../../components/TextSection";
const Checkout = () => {
  return (
    <>
      <Header page="checkout" />
      <TextSection
        section="brandMsg"
        message="Let's connect"
        caption="Come say hi!"
        subcaption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
      ></TextSection>
    </>
  );
};

export default Checkout;
