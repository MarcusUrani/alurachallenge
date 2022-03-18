import React from "react";
import "./style.css";
import MainBanner from "../../Components/MainBanner";
import ProductList from "../../Components/ProductList";

const Main = () => {
  return (
    <main>
      <MainBanner />
      <ProductList />
    </main>
  );
};

export default Main;
