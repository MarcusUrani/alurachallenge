import React from "react";
import "./style.css";
import { TextField } from "@mui/material";
import Button from "../button";

const LoginForm = ({
  error,
  setError,
  handleLogin,
  handleGoToTop,
  formik,
  validate,
}) => {
  const handleSubmit = () => {
    setError(validate(formik.values));
  };
  return (
    <form
      className="main__login__container"
      onSubmit={(event) => {
        event.preventDefault();
        if (!error.email && !error.password) {
          handleLogin();
          handleGoToTop();
        }
      }}
    >
      <h2 className="main__login__title">Iniciar Sessão</h2>
      <TextField
        color={error.email ? "error" : "primary"}
        fullWidth
        label="Escreva seu email"
        onChange={(event) => {
          const emailValue = event.target.value;
          formik.setFieldValue("email", emailValue);
        }}
        value={formik.values.email}
        variant="filled"
      />
      {error.email ? (
        <span className="main__login__error">{error.email}</span>
      ) : null}
      <TextField
        color={error.password ? "error" : "primary"}
        fullWidth
        label="Escreva sua senha"
        onChange={(event) => {
          const passwordValue = event.target.value;
          formik.setFieldValue("password", passwordValue);
        }}
        type={"password"}
        value={formik.values.password}
        variant="filled"
      />
      {error.password ? (
        <span className="main__login__error">{error.password}</span>
      ) : null}
      <Button
        className="main__login__button"
        children={"Entrar"}
        nameClass={"blue__button full__width"}
        onClickFunction={handleSubmit}
      />
    </form>
  );
};

export default LoginForm;
