import React from "react";
import "./style.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="main__login">
      <section className="main__login__container">
        <h2 className="main__login__title">Iniciar Sessão</h2>
        <TextField
          sx={{}}
          label="Escreva seu email"
          fullWidth
          variant="filled"
          id="fullWidth"
        />
        <TextField
          sx={{}}
          label="Escreva sua senha"
          fullWidth
          variant="filled"
          id="fullWidth"
        />
        <Link to={"/manage-items"} className="main__login__button">
          Entrar
        </Link>
      </section>
    </main>
  );
};

export default Login;
