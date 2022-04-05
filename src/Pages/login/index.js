import React, { useEffect, useState } from "react";
import "./style.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const Login = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "É necessário informar um email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Informe um email válido";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "email.email@email.com",
      password: "123456",
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
          setLoggedIn(true);
          if (!error.email) {
            handleLogin();
            handleGoToTop();
          }
        }}
      >
        <h2 className="main__login__title">Iniciar Sessão</h2>
        <TextField
          fullWidth
          label="Escreva seu email"
          onChange={(event) => {
            const emailValue = event.target.value;
            formik.setFieldValue("email", emailValue);
          }}
          value={formik.values.email}
          variant="filled"
        />
        {error ? (
          <span className="main__login__error">{error.email}</span>
        ) : null}
        <TextField
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
        <button className="main__login__button" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
};

export default Login;
