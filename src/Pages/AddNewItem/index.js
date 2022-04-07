import React, { useEffect, useState } from "react";
import "./style.css";
import Product from "../../Components/product";
import fetchApi from "../../api";
import Loading from "../../Components/loading";
import { Link } from "react-router-dom";

const AddNewItem = ({ items }) => {
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

export default AddNewItem;
