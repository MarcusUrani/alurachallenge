import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SearchList from "../searchList";

const HeaderSearchInput = ({
  className,
  searchValue,
  setSearchValue,
  handleSearchItem,
  disabled,
  setDisabled,
  newArray,
  handleTop,
}) => {
  return (
    <section className={`header__search__container ${className}__container`}>
      <input
        type={"text"}
        className={`header__search ${className}__search`}
        placeholder="O que deseja encontrar?"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
          handleSearchItem();
        }}
      />
      <section
        className={`header__search__span`}
        style={{ display: `${disabled}` }}
      >
        {newArray.length > 0 ? (
          newArray.map((item) => (
            <Link
              className="search__item"
              to={`/product/${item.id}`}
              onClick={() => {
                setDisabled("none");
                setSearchValue("");
                handleTop();
              }}
            >
              <SearchList item={item} />
            </Link>
          ))
        ) : (
          <span>Nenhum resultado encontrado</span>
        )}
      </section>
    </section>
  );
};

export default HeaderSearchInput;
