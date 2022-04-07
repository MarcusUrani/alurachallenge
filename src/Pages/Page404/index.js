import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import image404 from "../../Assets/images/tristeza.png";

const Page404 = () => {
  return (
    <main className="page404">
      <section className="page404__container">
        <img className="page404__image" src={image404} alt="404" />
        <article className="page404__content">
          <h1 className="page404__title">Erro 404</h1>
          <h2 className="page404__subtitle">Ops! Você está perdido!</h2>
          <p className="page404__description">
            Mas não fique triste! O caminho de volta está logo abaixo
          </p>
          <Link
            className="page404__link"
            to="/"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Voltar a civilização
          </Link>
        </article>
      </section>
    </main>
  );
};

export default Page404;
