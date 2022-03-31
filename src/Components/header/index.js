import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Header = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [disabled, setDisabled] = useState("none");

  const handleSearchItem = () => {
    for (let i = 0; i < data.length; i++) {
      let itemName = data[i].name;
      let expresion = new RegExp(searchValue, "i");
      if (expresion.test(itemName)) {
        console.log("encontrado:" + itemName);
      }
    }
  };

  return (
    <header>
      <section className="header__container">
        <Link to="/">
          <img
            className="header__logo"
            src={Logo}
            alt="Logo da Alura geek que apresenta um controle de videogame com a cor azul 4 botões na esquerda, 4 botões na direita e 2 direcionais, todos na cor preta, ao lado do controle é apresentado o nome da empresa: AluraGeek"
            onClick={() => {
              window.scrollTo(0, 0);
              window.scroll({
                behavior: "smooth",
              });
            }}
          />
        </Link>
        <section className="header__search__container">
          <input
            type={"text"}
            className="header__search"
            placeholder="O que deseja encontrar?"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
              handleSearchItem();
            }}
          />
        </section>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          className="header__search__icon"
        />
      </section>
      <Link
        className="header__login"
        to={"/login"}
        onClick={() => {
          window.scrollTo(0, 0);
          window.scroll({
            behavior: "smooth",
          });
        }}
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
