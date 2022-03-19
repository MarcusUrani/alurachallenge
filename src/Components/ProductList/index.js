import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductList = ({ title, products, slug }) => {
  return (
    <section className="product__list">
      <section className="product__list__header">
        <h2 className="product__list__title">{title}</h2>
        <nav className="product__list__nav">
          <Link to={`${slug}`} className="product__list__link">
            Ver tudo
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </Link>
        </nav>
      </section>
      <section className="product__list__content">
        {products.map((product) => (
          <section className="product__item" key={product.id}>
            <img
              src={`/assets/images/${product.image}.png`}
              alt={product.alt}
              className="product__item__image"
            />
            <h3 className="product__item__title">{product.name}</h3>
            <p className="product__item__price">R$ {product.price}</p>
            <Link to={`${slug}${product.slug}`} className="product__item__link">
              Ver produto
            </Link>
          </section>
        ))}
      </section>
    </section>
  );
};

export default ProductList;
