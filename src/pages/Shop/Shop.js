import React from "react";
import TextSection from "../../components/TextSection/TextSection";
import Header from "../../components/Header/Header";
import Products from "./components/ProductsList/Products";
import Faq from "./components/FAQ/Faq";

const Shop = () => {
  return (
    <>
      <Header page="shop" />
      <main>
        <TextSection
          section="shop"
          message="handmade treasures"
          caption="The shop"
          subcaption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          links={true}
        ></TextSection>
        <Products />
        <Faq />
      </main>
    </>
  );
};

export default Shop;
