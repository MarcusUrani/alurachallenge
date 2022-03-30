import React from "react";
import "./style.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <main className="main__login">
      <form className="main__login__container">
        <h2 className="main__login__title">Iniciar Sessão</h2>
        <TextField
          sx={{}}
          label="Escreva seu email"
          fullWidth
          variant="filled"
          id="fullWidth"
          required
        />
        <TextField
          sx={{}}
          label="Escreva sua senha"
          fullWidth
          variant="filled"
          id="fullWidth"
          required
        />
        <button
          className="main__login__button"
          onClick={(event) => {
            event.preventDefault();
            navigate("/manage-items");
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Entrar
        </button>
      </form>
    </main>
  );
};

export default Login;
