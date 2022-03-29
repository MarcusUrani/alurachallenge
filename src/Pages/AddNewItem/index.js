import React, { useEffect, useState } from "react";
import Product from "../../Components/product";
import fetchApi from "../../api";
import "./style.css";

const AddNewItem = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await fetchApi("items");
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main__manage">
      <section className="main__manage__container">
        <section className="main__manage__header">
          <h1 className="main__manage__title">Todos os produtos</h1>
          <button className="main__manage__button">Adicionar produto</button>
        </section>
        <section className="main__manage__products">
          {items ? (
            items.map((item) => (
              <Product
                name={item.name}
                price={item.price}
                tag={item.tag}
                miniature={item.miniature}
                key={item.id}
              />
            ))
          ) : (
            <section className="loading">Carregando...</section>
          )}
        </section>
      </section>
    </main>
  );
};

export default AddNewItem;
