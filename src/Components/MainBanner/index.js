import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import HomeBanner from "../../Assets/images/homeBanner.png";

const MainBanner = () => {
  return (
    <section
      className="main__banner"
      style={{
        backgroundImage: `url(${HomeBanner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundClip: "border-box",
        backgroundSize: "cover",
        height: "65vh",
      }}
    >
      <section className="main__banner__content">
        <h1 className="main__title">Dezembro Promocional</h1>
        <h2 className="main__subtitle">
          Produtos selecionados com 33% de desconto
        </h2>
        <a
          className="main__button"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector("#Consoles").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          Ver consoles
        </a>
      </section>
    </section>
  );
};

export default MainBanner;
