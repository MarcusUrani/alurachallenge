import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SearchList = ({ item }) => {
  return (
    <Link className="search-list" to={item.slug}>
      <section className="search__list__container"></section>
    </Link>
  );
};

export default SearchList;
