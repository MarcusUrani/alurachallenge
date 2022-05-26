import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import InternDescription from "../../Components/internDescription";
import ProductList from "../../Components/productList";
import Loading from "../../Components/loading";

const ItemDescription = ({ products }) => {
  const params = useParams();
  const [similarItems, setSimilarItems] = useState();
  const numberOnSlug = Number(params.slug);
  const itemById = products.find((item) => item.id === numberOnSlug);
  const itemId = itemById.id;

  useEffect(() => {
    const getSimilarItems = () => {
      if (itemId > 11) {
        const newArray = products.slice(itemId - 6, itemId);
        setSimilarItems(newArray);
      } else if (itemId < 7) {
        const newArray = products.slice(itemId, itemId - 1 + 7);
        setSimilarItems(newArray);
      } else {
        const newArray = products.slice(itemId, itemId - 1 + 7);
        setSimilarItems(newArray);
      }
    };
    getSimilarItems();
  }, [itemId, products]);

  return (
    <main className="main__description">
      {similarItems && itemById ? (
        <>
          <InternDescription item={itemById} />
          <ProductList title={"Produtos similares"} items={similarItems} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default ItemDescription;
