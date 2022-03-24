import React from "react";
import Product from "../../Components/product";
import Items from "../../Products/items.json";
import "./style.css";

const AddNewItem = () => {
  return (
    <main className="main__manage">
      <section className="main__manage__container">
        <section className="main__manage__header">
          <h1 className="main__manage__title">Todos os produtos</h1>
          <button className="main__manage__button">Adicionar produto</button>
        </section>
        <section className="main__manage__products">
          {Items.map((item) => (
            <Product
              name={item.name}
              price={item.price}
              tag={item.tag}
              miniature={item.miniature}
              key={item.id}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default AddNewItem;
