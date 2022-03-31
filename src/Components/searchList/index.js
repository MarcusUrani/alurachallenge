import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SearchList = ({ item }) => {
  return (
    <Link className="search__item" to={item.slug}>
      <section className="search__item__container">
        <img
          src={`/assets/images/${item.miniature}.png`}
          alt={item.alt}
          className="search__item__image"
        />
        <p className="search__item__title">{item.name}</p>
      </section>
    </Link>
  );
};

export default SearchList;
