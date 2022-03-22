import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Items from "../../Products/items.json";
import InternDescription from "../../Components/internDescription";
import ProductList from "../../Components/productList";

const ItemDescription = () => {
  const params = useParams();
  const [similarItems, setSimilarItems] = useState();
  const itemId = params.slug - 1;
  const item = Items[itemId];

  useEffect(() => {
    if (itemId > 11) {
      const newArray = Items.slice(itemId - 6, itemId);
      console.log(newArray);
      setSimilarItems(newArray);
    } else if (itemId < 7) {
      const newArray = Items.slice(params.slug, itemId + 7);
      console.log(newArray);
      setSimilarItems(newArray);
    } else {
      const newArray = Items.slice(params.slug, itemId + 7);
      console.log(newArray);
      setSimilarItems(newArray);
    }
  }, []);

  return (
    <main className="main__description">
      <InternDescription item={item} />
      {similarItems ? (
        <ProductList title={"Produtos similares"} products={similarItems} />
      ) : (
        <section className="loading">Carregando...</section>
      )}
    </main>
  );
};

export default ItemDescription;
