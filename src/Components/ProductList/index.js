import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductSection from "../productSection";
import fetchApi from "../../api";
import Loading from "../loading";

const ProductList = ({ title, fetchApiUrl, items }) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetchApi(fetchApiUrl);
    setProducts(data);
  };

  useEffect(() => {
    setProducts([]);
    fetchData();
  }, [fetchApiUrl]);

  useEffect(() => {
    setProducts(items);
  }, [items]);

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
                behacior: "smooth",
              });
            }}
          >
            Ver tudo
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </Link>
        </nav>
      </section>
      <section className="product__list__content">
        {products ? (
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
