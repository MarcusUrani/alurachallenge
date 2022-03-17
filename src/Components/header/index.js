import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/Logo.png";
import "./style.css";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header>
      <section className="header__container">
        <img
          className="header__logo"
          src={Logo}
          alt="Logo da Alura geek que apresenta um controle de videogame com a cor azul 4 botões na esquerda, 4 botões na direita e 2 direcionais, todos na cor preta, ao lado do controle é apresentado o nome da empresa: AluraGeek"
        />
        <input
          type={"text"}
          className="header__search"
          placeholder="O que deseja encontrar?"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </section>
      <Link className="header__login" to={"/"}>
        Login
      </Link>
    </header>
  );
};

export default Header;
