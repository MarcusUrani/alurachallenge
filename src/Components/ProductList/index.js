import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductList = () => {
  return (
    <section className="product__list">
      <section className="product__list__header">
        <h2 className="product__list__title">Título</h2>
        <nav className="product__list__nav">
          <Link to={"/"} className="product__list__link">
            Ver tudo
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </Link>
        </nav>
      </section>
    </section>
  );
};

export default ProductList;
