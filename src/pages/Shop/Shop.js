import React from "react";
import Header from "../../components/Header/Header";
import ProductList from "./components/ProductsList/ProductList";

const Shop = () => {
  return (
    <>
      <Header
        page="shop"
        caption="Each of these beauties will be perfect for every kind of home"
      />
      <main>
        <ProductList />
      </main>
    </>
  );
};

export default Shop;
