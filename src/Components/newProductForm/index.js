import React from "react";
import "./style.css";
import { TextField } from "@mui/material";

const NewProductForm = ({ error, formik }) => {
  return (
    <form className="new--product__form">
      <TextField
        color={error.productName ? "error" : "primary"}
        fullWidth
        label="Nome do produto"
        onChange={(event) => {
          const nameValue = event.target.value;
          formik.setFieldValue("productName", nameValue);
        }}
        required
        value={formik.values.productName}
        variant="filled"
      />
      {error.productName ? (
        <span className="new--product__error">{error.productName}</span>
      ) : null}
      <TextField
        color={error.productPrice ? "error" : "primary"}
        fullWidth
        label="Preço do produto"
        onChange={(event) => {
          const priceValue = event.target.value;
          formik.setFieldValue("productPrice", priceValue);
        }}
        required
        value={formik.values.productPrice}
        variant="filled"
      />
      {error.productPrice ? (
        <span className="new--product__error">{error.productPrice}</span>
      ) : null}

      <TextField
        color={error.productDescription ? "error" : "primary"}
        fullWidth
        label="Descrição do produto"
        onChange={(event) => {
          const descriptionValue = event.target.value;
          formik.setFieldValue("productDescription", descriptionValue);
        }}
        required
        value={formik.values.productDescription}
        variant="filled"
      />
      {error.productDescription ? (
        <span className="new--product__error">{error.productDescription}</span>
      ) : null}
      <button type="submit" className="new--product__submit__button">
        Adicionar produto
      </button>
    </form>
  );
};

export default NewProductForm;
