import React from "react";
import "./style.css";
import MainBanner from "../../Components/mainBanner";
import ProductList from "../../Components/productList";

const Main = () => {
  return (
    <main>
      <MainBanner />
      <ProductList />
    </main>
  );
};

export default Main;
