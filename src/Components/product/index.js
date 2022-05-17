import React, { useState } from "react";
import "./style.css";
import { DeleteSharp, Edit } from "@mui/icons-material";
import ConfirmModal from "../confirmModal";

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
          alt="miniatura da imagem do produto"
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
        <ConfirmModal
          modalText={modalText}
          itemId={itemId}
          handleDeleteItem={handleDeleteItem}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      ) : null}
    </section>
  );
};

export default Product;
