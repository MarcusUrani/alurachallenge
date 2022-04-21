import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import LoginForm from "../../Components/loginForm";

const Login = ({ setLoggedIn, buttonLabel, loginMessage, slug }) => {
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
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.password
      )
    ) {
      errors.password =
        "A senha deve conter pelo menos um caractere especial, uma letra maiúscula, uma letra minúscula e um número";
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

  return (
    <main className="main__login">
      <LoginForm
        buttonLabel={buttonLabel}
        error={error}
        setError={setError}
        loginMessage={loginMessage}
        handleLogin={handleLogin}
        handleGoToTop={handleGoToTop}
        formik={formik}
        validate={validate}
        slug={slug}
      />
    </main>
  );
};

export default Login;
