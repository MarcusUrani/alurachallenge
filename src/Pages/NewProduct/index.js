import React, { useEffect, useState } from "react";
import "./style.css";
import { TextField } from "@mui/material";

const NewProduct = () => {
  const [gadgetName, setGadgetName] = useState("computador");
  const [helperText, setHelperText] = useState(
    "Arraste para adicionar uma imagem para o produto"
  );
  const [image, setImage] = useState("");

  const verifyWindowSize = () => {
    if (window.innerWidth < 1024) {
      setGadgetName("computador");
      setHelperText("Arraste para adicionar uma imagem para o produto");
    }
    if (window.innerWidth < 950) {
      setGadgetName("tablet");
      setHelperText("Arraste para adicionar uma imagem para o produto");
    }
    if (window.innerWidth < 468) {
      setHelperText("Adicione uma imagem");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", verifyWindowSize);
  }, []);

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
            <p className="new--product__image--add">{helperText}</p>
          </section>
          <p className="new--product__text"> Ou </p>
          <section className="new--product__image__input">
            <label className="new--product__label" for="add__image">
              Procure no seu {gadgetName}
            </label>
            <input
              id="add__image"
              className="new--product__button"
              type={"file"}
              accept="image/*"
            />
          </section>
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
