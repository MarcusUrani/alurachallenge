import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import SearchList from "../searchList";
import LoginButton from "../loginButton";
import HeaderSearchInput from "../headerSearchInput";

const Header = ({ data, loggedIn }) => {
  const [searchValue, setSearchValue] = useState("");
  const [newArray, setNewArray] = useState([]);
  const [disabled, setDisabled] = useState("block");
  const [searchInput, setSearchInput] = useState(false);

  const handleSearchItem = () => {
    setNewArray(data.filter((item) => item.name.includes(searchValue)));
    setDisabled("block");
  };

  const handleTop = () => {
    window.scrollTo(0, 0);
    window.scroll({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (searchValue === "") {
      setDisabled("none");
    }
  }, [searchValue]);

  return (
    <header>
      {searchInput === false ? (
        <>
          <section className="header__container">
            <Link to="/">
              <img
                className="header__logo"
                src={Logo}
                alt="Logo da Alura geek que apresenta um controle de videogame com a cor azul 4 botões na esquerda, 4 botões na direita e 2 direcionais, todos na cor preta, ao lado do controle é apresentado o nome da empresa: AluraGeek"
                onClick={() => {
                  handleTop();
                }}
              />
            </Link>
            <HeaderSearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleSearchItem={handleSearchItem}
              handleTop={handleTop}
              disabled={disabled}
              setDisabled={setDisabled}
              newArray={newArray}
            />
          </section>
          <LoginButton loggedIn={loggedIn} handleTop={handleTop} />
          <FontAwesomeIcon
            className="header__search__icon"
            icon={faMagnifyingGlass}
            onClick={() => {
              setSearchInput(true);
            }}
            size="lg"
            style={{
              cursor: "pointer",
            }}
          />
        </>
      ) : (
        <>
          <section className="header__mobile__container">
            <HeaderSearchInput
              className={"__mobile"}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleSearchItem={handleSearchItem}
              handleTop={handleTop}
              disabled={disabled}
              setDisabled={setDisabled}
              newArray={newArray}
            />
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => {
                setSearchInput(false);
              }}
              size="2x"
              style={{
                cursor: "pointer",
              }}
            />
          </section>
        </>
      )}
    </header>
  );
};

export default Header;
