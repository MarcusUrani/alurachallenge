import React from "react";
import "./style.css";
import Logo from "../../Assets/images/Logo.png";
import { TextField } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <section className="footer__container">
        <section className="footer__content">
          <img className="footer__logo" src={Logo} alt="Logo AluraGeek" />
          <nav className="footer__links">
            <a href="/" className="footer__link">
              Quem somos nós
            </a>
            <a href="/" className="footer__link">
              Política de privacidade
            </a>
            <a href="/" className="footer__link">
              Programa de fidelidade
            </a>
            <a href="/" className="footer__link">
              Nossas lojas
            </a>
            <a href="/" className="footer__link">
              Quero ser franqueado
            </a>
            <a href="/" className="footer__link">
              Anuncie aqui
            </a>
          </nav>
        </section>
        <form className="footer__form">
          <h2 className="footer__form--title">Fale conosco</h2>
          <TextField
            sx={{}}
            label="Nome"
            fullWidth
            variant="filled"
            id="fullWidth"
          />
          <TextField
            sx={{}}
            fullWidth
            id="fullWidth"
            label="Escreva sua mensagem"
            variant="filled"
          />
          <button className="form__button">Enviar mensagem</button>
        </form>
      </section>
      <section className="footer__copyright">
        <h3 className="footer__copyright--title">
          Desenvolvido por Marcus Urani
        </h3>
        <p className="footer__copyright--text">2022</p>
      </section>
    </footer>
  );
};

export default Footer;
