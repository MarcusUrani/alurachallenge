import React, { useState } from "react";
import "./style.css";
import { DeleteSharp, Edit } from "@mui/icons-material";

const Product = ({ name, price, tag, miniature, id, handleDeleteItem }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [itemId, setItemId] = useState(0);

  return (
    <section className="product__container">
      <section className="product__image--container">
        <img
          className="product__miniature"
          src={`/assets/images/${miniature}.png`}
        />
        <section className="product__icons">
          <DeleteSharp
            sx={{ color: "#fff", cursor: "pointer" }}
            onClick={() => {
              setOpenDeleteModal(true);
              setModalText("Deseja excluir o produto?");
              setItemId(id);
            }}
          />
          <Edit sx={{ color: "#fff", cursor: "pointer" }} onClick={() => {}} />
        </section>
      </section>
      <article className="product__content">
        <p className="product__title">{name}</p>
        <p className="product__price">R$ {price}</p>
        <p className="product__tag">{tag}</p>
      </article>
      {openDeleteModal === true ? (
        <section className="modal__section">
          <section className="modal">
            <span className="modal__text">{modalText}</span>
            <section className="modal__buttons">
              <button
                className="modal__button no__button"
                onClick={() => {
                  setOpenDeleteModal(false);
                }}
              >
                Não
              </button>
              <button
                className="modal__button yes__button"
                onClick={() => {
                  setOpenDeleteModal(false);
                  handleDeleteItem(itemId);
                }}
              >
                Sim
              </button>
            </section>
          </section>
        </section>
      ) : null}
    </section>
  );
};

export default Product;
