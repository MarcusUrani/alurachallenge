import React, { useEffect, useState } from "react";
import "./style.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "É necessário informar um email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Informe um email válido";
    }
    if (!values.password) {
      errors.password = "É necessário informar uma senha";
    } else if (values.password.length < 8) {
      errors.password = "A senha deve ter no mínimo 8 caracteres";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/manage-items");
  };

  const handleGoToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setError(validate(formik.values));
  }, [formik.values]);

  return (
    <main className="main__login">
      <form
        className="main__login__container"
        onSubmit={(event) => {
          event.preventDefault();
          setError(validate(formik.values));
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
        <button className="main__login__button" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
};

export default Login;
