import React, { useEffect, useState } from "react";
import "./style.css";
import { TextField } from "@mui/material";
// import { postApi } from "../../api";
import Button from "../button";

const NewProductForm = ({
  error,
  formik,
  validate,
  setError,
  image,
  setImage,
  item,
}) => {
  const [disabled, setDisabled] = useState(true);

  const handleCheckErrors = () => {
    setError(validate(formik.values));
  };

  useEffect(() => {
    setDisabled(true);
  }, []);

  return (
    <form
      className="new--product__form"
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !error.productName &&
          !error.productPrice &&
          image &&
          !error.productDescription
        ) {
          setDisabled(false);
          setImage(null);
          formik.setFieldValue("productName", "");
          formik.setFieldValue("productPrice", "");
          formik.setFieldValue("productDescription", "");
        } else {
          setDisabled(true);
        }
      }}
    >
      <TextField
        color={error.productName ? "error" : "primary"}
        fullWidth
        label="Nome do produto"
        onChange={(event) => {
          const nameValue = event.target.value;
          formik.setFieldValue("productName", nameValue);
          item.name = nameValue;
        }}
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
          item.price = priceValue;
        }}
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
          item.description = descriptionValue;
        }}
        value={formik.values.productDescription}
        variant="filled"
      />
      {error.productDescription ? (
        <span className="new--product__error">{error.productDescription}</span>
      ) : null}
      <Button
        children={"Adicionar produto"}
        nameClass={"blue__button"}
        onClickFunction={handleCheckErrors}
        buttonType={"submit"}
      />
      {disabled === false ? (
        <span className="new--product__success">
          Produto adicionado com sucesso
        </span>
      ) : null}
    </form>
  );
};

export default NewProductForm;
