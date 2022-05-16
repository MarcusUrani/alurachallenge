import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductSection from "../productSection";
import Loading from "../loading";

const ProductList = ({ title, itemSlug, items, listOfProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getItemsByList = (listName) => {
      const newItems = listOfProducts.filter(
        (product) => product.slug === listName
      );
      return newItems;
    };

    const getProducts = () => {
      if (itemSlug) {
        const newProducts = getItemsByList(itemSlug);
        setProducts(newProducts);
      } else {
        setProducts(items);
      }
    };

    getProducts();
  }, [setProducts, itemSlug, items, listOfProducts]);

  return (
    <section className="product__list">
      <section className="product__list__header">
        <h2 className="product__list__title" id={title}>
          {title}
        </h2>
        <nav className="product__list__nav">
          <Link
            to={`/products`}
            className="product__list__link"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Ver tudo
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </Link>
        </nav>
      </section>
      <section className="product__list__content">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductSection key={product.id} product={product} />
          ))
        ) : (
          <Loading />
        )}
      </section>
    </section>
  );
};

export default ProductList;
