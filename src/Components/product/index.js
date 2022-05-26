import React, { useEffect, useState } from "react";
import "./style.css";
import { DeleteSharp, Edit } from "@mui/icons-material";
import ConfirmModal from "../confirmModal";
import { useNavigate } from "react-router-dom";

const Product = ({ name, price, tag, miniature, id, handleDeleteItem }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [itemId, setItemId] = useState(0);
  const [itemEditId, setItemEditId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setItemId(id);
    setItemEditId(id);
  }, [id]);

  return (
    <section className="product__container">
      <section className="product__image--container">
        <img
          className="product__miniature"
          src={miniature}
          alt="miniatura da imagem do produto"
        />
        <section className="product__icons">
          <DeleteSharp
            sx={{ color: "#fff", cursor: "pointer" }}
            onClick={() => {
              setOpenDeleteModal(true);
              setModalText("Deseja excluir o produto?");
            }}
          />
          <Edit
            sx={{ color: "#fff", cursor: "pointer" }}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              navigate(`/edit-item/${itemEditId}`);
            }}
          />
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
