import React from "react";
import "./style.css";
import Product from "../../Components/product";
import Loading from "../../Components/loading";
import { Link } from "react-router-dom";
import { removeApiItem } from "../../api";

const ManageItems = ({ items, setItems }) => {
  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    removeApiItem(id);
    setItems(newItems);
  };

  return (
    <main className="main__manage">
      <section className="main__manage__container">
        <section className="main__manage__header">
          <h1 className="main__manage__title">Todos os produtos</h1>
          <Link className="main__manage__button" to={"/new-product"}>
            Adicionar produto
          </Link>
        </section>
        <section className="main__manage__products">
          {items ? (
            items.map((item) => (
              <Product
                name={item.name}
                price={item.price}
                tag={item.tag}
                miniature={item.miniature}
                id={item.id}
                handleDeleteItem={handleDeleteItem}
                key={item.id}
              />
            ))
          ) : (
            <Loading />
          )}
        </section>
      </section>
    </main>
  );
};

export default ManageItems;
