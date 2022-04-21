import React from "react";
import "./style.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const LoginForm = ({
  buttonLabel,
  error,
  setError,
  handleLogin,
  handleGoToTop,
  loginMessage,
  formik,
  slug,
  validate,
}) => {
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
      <button
        className="main__login__button"
        type="submit"
        onClick={() => {
          setError(validate(formik.values));
        }}
      >
        {buttonLabel}
      </button>
      <span className="main__login__message">
        {loginMessage}
        <Link to={slug} className="main__login__link">
          link
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
