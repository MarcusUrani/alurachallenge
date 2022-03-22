import React from "react";
import "./style.css";

const InternDescription = ({ item }) => {
  return (
    <section className="main__item">
      <figure className="main__item__container">
        <img
          src={`/assets/images/${item.image}.png`}
          alt={item.alt}
          className="main__item__image"
        />
      </figure>
      <article className="main__item__content">
        <h1 className="main__item__title">{item.name}</h1>
        <p className="main__item__price">R$ {item.price}</p>
        <p className="main__item__description">{item.description}</p>
      </article>
    </section>
  );
};

export default InternDescription;
