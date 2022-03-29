import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import InternDescription from "../../Components/internDescription";
import ProductList from "../../Components/productList";
import fetchApi from "../../api";

const ItemDescription = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [similarItems, setSimilarItems] = useState();
  const itemId = params.slug - 1;
  const item = products[itemId];

  const fetchData = async () => {
    const data = await fetchApi("items");
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, [itemId]);

  useEffect(() => {
    if (itemId > 11) {
      const newArray = products.slice(itemId - 6, itemId);
      setSimilarItems(newArray);
    } else if (itemId < 7) {
      const newArray = products.slice(params.slug, itemId + 7);
      setSimilarItems(newArray);
    } else {
      const newArray = products.slice(params.slug, itemId + 7);
      setSimilarItems(newArray);
    }
  }, [itemId]);

  return (
    <main className="main__description">
      {item ? <InternDescription item={item} /> : <div>Carregando...</div>}

      {similarItems && item ? (
        <ProductList
          title={"Produtos similares"}
          fetchApiUrl={`${item.slug}`}
          items={similarItems}
        />
      ) : (
        <section className="loading">Carregando...</section>
      )}
    </main>
  );
};

export default ItemDescription;
