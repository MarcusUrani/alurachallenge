import React from "react";
import "./style.css";
import MainBanner from "../../Components/mainBanner";
import ProductList from "../../Components/productList";

const Main = ({ products }) => {
  return (
    <main>
      <MainBanner />
      <ProductList
        title={"Star Wars"}
        listOfProducts={products}
        itemSlug={"starWars"}
      />
      <ProductList
        title={"Consoles"}
        listOfProducts={products}
        itemSlug={"consoles"}
      />
      <ProductList
        title={"Diversos"}
        listOfProducts={products}
        itemSlug={"miscelaneous"}
      />
    </main>
  );
};

export default Main;
