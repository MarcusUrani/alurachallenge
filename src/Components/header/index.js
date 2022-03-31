import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import SearchList from "../searchList";

const Header = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [newArray, setNewArray] = useState([]);
  const [disabled, setDisabled] = useState("block");

  const handleSearchItem = () => {
    setNewArray(data.filter((item) => item.name.includes(searchValue)));
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
          <section
            className="header__search__span"
            style={{ display: `${disabled}` }}
          >
            {newArray.length > 0 ? (
              newArray.map((item) => <SearchList item={item} />)
            ) : (
              <span>Nenhum resultado encontrado</span>
            )}
          </section>
        </section>
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
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="lg"
        className="header__search__icon"
      />
    </header>
  );
};

export default Header;
