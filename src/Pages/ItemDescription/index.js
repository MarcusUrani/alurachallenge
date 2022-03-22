import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Items from "../../Products/items.json";

const ItemDescription = () => {
  const params = useParams();
  return (
    <main className="main__description">
      <section className="main__description__item"></section>
    </main>
  );
};

export default ItemDescription;
