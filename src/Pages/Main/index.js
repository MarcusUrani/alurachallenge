import React from "react";
import "./style.css";
import MainBanner from "../../Components/mainBanner";
import ProductList from "../../Components/productList";
import StarWars from "../../star-wars.json";
import Consoles from "../../consoles.json";
import Miscelaneous from "../../miscelaneous.json";

const Main = () => {
  return (
    <main>
      <MainBanner />
      <ProductList
        title={"Star Wars"}
        products={StarWars}
        slug={"/star-wars"}
      />
      <ProductList title={"Consoles"} products={Consoles} slug={"/consoles"} />
      <ProductList
        title={"Diversos"}
        products={Miscelaneous}
        slug={"/miscelaneous"}
      />
    </main>
  );
};

export default Main;
