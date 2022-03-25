import React from "react";
import "./style.css";
import { DeleteSharp, Edit } from "@mui/icons-material";

const Product = ({ name, price, tag, miniature }) => {
  return (
    <section className="product__container">
      <section className="product__image--container">
        <img
          className="product__miniature"
          src={`/assets/images/${miniature}.png`}
        />
        <section className="product__icons">
          <DeleteSharp sx={{ color: "#fff", cursor: "pointer" }} />
          <Edit sx={{ color: "#fff", cursor: "pointer" }} />
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
