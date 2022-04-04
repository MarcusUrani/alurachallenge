import React from "react";
import "./style.css";
import { TextField } from "@mui/material";

const NewProduct = () => {
  return (
    <main className="new--product">
      <section className="new--product__container">
        <article className="new--product__header">
          <h1 className="new--product__title">Adiconar novo produto</h1>
        </article>
        <section className="new--product__add--image">
          <section className="new--product__add--image__container">
            <img
              className="new--product__image"
              src="/assets/images/image.svg"
              alt=""
            />
            <p className="new--product__image--add">
              Arraste para adicionar uma imagem para o produto
            </p>
          </section>
          <p className="new--product__text"> Ou </p>
          <button className="new--product__button">Procure no seu</button>
        </section>
        <form className="new--product__form">
          <TextField
            variant="filled"
            label="Nome do produto"
            fullWidth
            required
          />
          <TextField
            variant="filled"
            label="Preço do produto"
            fullWidth
            required
          />
          <TextField
            variant="filled"
            label="Descrição do produto"
            fullWidth
            required
          />
          <button type="submit" className="new--product__submit__button">
            Adicionar produto
          </button>
        </form>
      </section>
    </main>
  );
};

export default NewProduct;
