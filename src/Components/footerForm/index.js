import React from "react";
import "./style.css";
import { TextField } from "@mui/material";
import Button from "../button";

const FooterForm = ({
  disabled,
  setDisabled,
  error,
  setError,
  formik,
  validate,
}) => {
  const handleSubmit = () => {
    setError(validate(formik.values));
  };
  return (
    <form
      className="footer__form"
      onSubmit={(event) => {
        event.preventDefault();
        if (!error.name && !error.message) {
          formik.setFieldValue("name", "");
          formik.setFieldValue("message", "");
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      }}
    >
      <h2 className="footer__form--title">Fale conosco</h2>
      <TextField
        color={error.name ? "error" : "primary"}
        fullWidth
        id="fullWidth"
        label="Nome"
        onChange={(event) => {
          const nameValue = event.target.value;
          formik.setFieldValue("name", nameValue);
        }}
        value={formik.values.name}
        variant="filled"
      />
      {error.name ? <span className="form__error">{error.name}</span> : null}
      <TextField
        color={error.message ? "error" : "primary"}
        fullWidth
        id="fullWidth"
        label="Escreva sua mensagem"
        onChange={(event) => {
          const messageValue = event.target.value;
          formik.setFieldValue("message", messageValue);
        }}
        value={formik.values.message}
        variant="filled"
      />
      {error.message ? (
        <span className="form__error">{error.message}</span>
      ) : null}
      <Button
        children={"Enviar mensagem"}
        onClickFunction={handleSubmit}
        nameClass={"blue__button"}
        buttonType={"submit"}
      />
      {disabled === false ? (
        <span className="form__success">Mensagem enviada com sucesso</span>
      ) : null}
    </form>
  );
};

export default FooterForm;
