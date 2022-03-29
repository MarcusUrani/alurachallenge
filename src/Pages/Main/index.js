import React from "react";
import "./style.css";
import MainBanner from "../../Components/mainBanner";
import ProductList from "../../Components/productList";

const Main = () => {
  return (
    <main>
      <MainBanner />
      <ProductList title={"Star Wars"} fetchApiUrl={"starWars"} />
      <ProductList title={"Consoles"} fetchApiUrl={"consoles"} />
      <ProductList title={"Diversos"} fetchApiUrl={"miscelaneous"} />
    </main>
  );
};

export default Main;
