import React from "react";
import "./style.css";

const SearchList = ({ item }) => {
  return (
    <section className="search__item__container">
      <img
        src={`/assets/images/${item.miniature}.png`}
        alt={item.alt}
        className="search__item__image"
      />
      <article className="search__item__info">
        <p className="search__item__title">{item.name}</p>
        <p className="search__item__price">R$ {item.price}</p>
      </article>
    </section>
  );
};

export default SearchList;
