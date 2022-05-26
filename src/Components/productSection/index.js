import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ProductSection = ({ product }) => {
  return (
    <section className="product__item">
      <figure className="product__item__image">
        <img
          src={product.miniature}
          alt={product.alt}
          className="product__item__image__content"
        />
      </figure>
      <h3 className="product__item__title">{product.name}</h3>
      <p className="product__item__price">R$ {product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="product__item__link"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        Ver produto
      </Link>
    </section>
  );
};

export default ProductSection;
