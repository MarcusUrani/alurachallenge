import React from "react";
import Loading from "../../Components/loading";
import ProductSection from "../../Components/productSection";
import "./style.css";

const AllProducts = ({ products }) => {
  return (
    <main className="all--products">
      <article className="all--products__header">
        <h1 className="all-products__title">Todos os Produtos</h1>
      </article>
      <section className="all--products__content">
        {products ? (
          products.map((product) => (
            <ProductSection key={product.id} product={product} />
          ))
        ) : (
          <Loading />
        )}
      </section>
    </main>
  );
};

export default AllProducts;
