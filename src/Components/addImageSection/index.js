import React from "react";
import "./style.css";

const AddImageSection = ({
  dropHandler,
  dragOverHandler,
  helperText,
  gadgetName,
  setImage,
  setHelperText,
}) => {
  return (
    <section className="new--product__add--image">
      <section
        className="new--product__add--image__container"
        onDrop={(event) => dropHandler(event)}
        onDragOver={(event) => dragOverHandler(event)}
      >
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
          onChange={(event) => {
            setImage(event.target.files[0]);
            setHelperText("Imagem adicionada com sucesso");
          }}
        />
      </section>
    </section>
  );
};

export default AddImageSection;
