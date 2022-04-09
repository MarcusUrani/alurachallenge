import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LoginButton = ({ loggedIn, handleTop }) => {
  return (
    <>
      {loggedIn === true ? (
        <Link
          className="header__button manage__button"
          to={"/manage-items"}
          onClick={() => {
            handleTop();
          }}
        >
          Menu Administrador
        </Link>
      ) : (
        <Link
          className="header__button login__button"
          to={"/login"}
          onClick={() => {
            handleTop();
          }}
        >
          Login
        </Link>
      )}
    </>
  );
};

export default LoginButton;
