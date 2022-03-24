import React from "react";
import "./style.css";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ name, price, tag, miniature }) => {
  return (
    <section className="product__container">
      <section className="product__image--container">
        <img
          className="product__miniature"
          src={`/assets/images/${miniature}.png`}
        />
        <section className="product__icons">
          <FontAwesomeIcon icon={faPencil} className="product__edit__icon" />
          <FontAwesomeIcon icon={faTrash} className="product__trash__icon" />
        </section>
      </section>
      <article className="product__content">
        <p className="product__title">{name}</p>
        <p className="product__price">R$ {price}</p>
        <p className="product__tag">{tag}</p>
      </article>
    </section>
  );
};

export default Product;
